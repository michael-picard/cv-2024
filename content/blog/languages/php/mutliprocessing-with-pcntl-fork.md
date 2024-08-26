---
title: 'Mutliprocessing with pcntl_fork() to speed up image resizing'
description: 'In this post we divide by 7 the time it takes to generate 4 new sizes of 31 pictures.'
category: 'Languages'
date: '2024-08-21'
tags: [ 'php' ]
breadcrumbTitle: 'Multiprocessing'
image: 'media/blog/post-thumbnails/pcntl-fork.png'
---

There are a lot of file uploads and displays involved in the automobile industry. As such, I wanted to try to resize and crop to different sizes the original image when the user uploads the file before I send the response back to the browser. I could enqueue an async task to handle that, but I was wondering if it was possible to do it synchronously as a proof of concept. I had read about PHP Fibers and gave it a failed attempt, that's when I discovered `pcntl_fork()` and the cool realm of Process Control Functions in PHP.

The [PHP documentation](https://www.php.net/manual/en/intro.pcntl.php) states that Process Control should not be enabled within a web server environment since unexpected results may happen. **So use the code snippets below in production at your own risks**.

Consider the following code that iterates over all the pictures inside a directory containing 31 pictures. I'm creating four different sizes of each original picture using the `ffmpeg` executable.

```php
$start = microtime(true);
foreach (new DirectoryIterator('/path/to/your/directory') as $item) {
  /** @var SplFileInfo $item */
  if ($item->getExtension() === 'jpg') {
    $input = $item->getPathname();
    $baseName = $item->getBasename('.' . $item->getExtension());
    foreach ([800,600,400,200] as $size) {
      $destination = $item->getPath() . "/resized/$baseName-$size.jpg";
      exec("ffmpeg -loglevel error -i $input -vf scale=$size:-1 $destination -y");
    }
  }
}
$end = microtime(true);
echo 'Directory processed in ' . round($end - $start, 1) . ' seconds' . PHP_EOL;

// => Directory processed in 24.3 seconds
```

As we can see on my MacBook M1 it takes 24 seconds to handle the complete folder.

## With one child process per image size

Now let's use the multiprocessing at our disposal and fork a new process for each image size.

```php
$start = microtime(true);
$pids = [];
foreach (new DirectoryIterator('/path/to/your/directory') as $item) {
  /** @var SplFileInfo $item */
  if ($item->isFile() && $item->getExtension() === 'jpg') {
    $input = $item->getPathname();
    $baseName = $item->getBasename('.' . $item->getExtension());
    foreach ([800, 600, 400, 200] as $size) {
      $pid = pcntl_fork();
      if ($pid == -1) {
        die('could not fork');
      } elseif ($pid) {
        // parent
        $pids[] = $pid;
      } else {
        // child
        $destination = $item->getPath() . "/resized/$baseName-$size.jpg";
        exec("ffmpeg -loglevel error -i $input -vf scale=$size:-1 $destination -y");
        exit(0);
      }
    }
  }
}
// Wait for all child processes to finish
foreach ($pids as $pid) {
  pcntl_waitpid($pid, $status);
}
$end = microtime(true);
echo 'Directory processed in ' . round($end - $start, 1) . ' seconds' . PHP_EOL;

// => Directory processed in 5.7 seconds
```

Well, that's almost a 20-seconde performance gain, which is encouraging despite a humongous CPU spike. Let's see if we can keep going. 

## With one child process per file

Instead of spawning a child process for each size which creates a ton of child processes and an unmanagable (in PHP) CPU spike, what about forking the process for each file instead.

```php
$start = microtime(true);
$pids = [];
foreach (new DirectoryIterator('/Users/michael/Downloads/wetransfer_bolide-e-trail-black_2024-02-07_0744') as $item) {
  /** @var SplFileInfo $item */
  if ($item->isFile() && $item->getExtension() === 'jpg') {
    $pid = pcntl_fork();
    $input = $item->getPathname();
    $baseName = $item->getBasename('.' . $item->getExtension());
    if ($pid == -1) {
      die('could not fork');
    } elseif ($pid) {
      // parent
      $pids[] = $pid;
    } else {
      // child
      foreach ([800, 600, 400, 200] as $size) {
        $destination = $item->getPath() . "/resized/$baseName-$size.jpg";
        exec("ffmpeg -loglevel error -i $input -vf scale=$size:-1 $destination -y");
      }
      exit(0);
    }
  }
}
// Wait for all child processes to finish
foreach ($pids as $pid) {
  pcntl_waitpid($pid, $status);
}
$end = microtime(true);
echo 'Directory processed in ' . round($end - $start, 1) . ' seconds' . PHP_EOL;

// => Directory processed in 3.3 seconds
```

As we can see, it's faster this way. Even though the "one child process per size" script theoretically allows for more parallelism, the overhead of creating and managing a larger number of child processes is making it slower than the "one child process per file".

So there is a balance to be found between the number of CPU cores, the amount of available memory, the overhead of creating a new process, and the time to execute the task in each process.

## A safer alternative to exec()

On most production servers `exec()` is disabled by default for security reasons. But there is another way to execute commands from PHP, using `proc_open()`  provides more control over the executed process, and it's often allowed when `exec()` is disabled. It only adds a few lines of code.

We can replace 

```php
exec("ffmpeg -loglevel error -i $input -vf scale=$size:-1 $destination -y");
```

by 

```php
$process = proc_open("ffmpeg -loglevel error -i $input -vf scale=$size:-1 $destination -y", $descriptorspec, $pipes);
        if (is_resource($process)) {
          fclose($pipes[0]);
          fclose($pipes[1]);
          proc_close($process);
        }
```

Here you go, I want to point out again that this is a proof of concept I used to familiarize myself with PHP Process Control functions. I have not used it in production, though I might one day, for a small controlled number of child processes. If I can create four different sizes of 31 pictures in 3 seconds, then creating two sizes on a single file would be extremely fast on a server or even a VPS.
