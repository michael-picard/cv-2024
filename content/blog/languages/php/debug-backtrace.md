---
title: 'Use debug_backtrace() to inspect the call stack at run time'
description: 'Cool function to inspect and manipulate the stack frames as an associate array.'
category: 'Languages'
date: '2024-05-18'
tags: ['php']
breadcrumbTitle: 'debug_backtrace()'
image: 'media/blog/post-thumbnails/debug-backtrace.png'
---

I did find myself a few times when asked to do heavy customization work inside a framework, to be aware of the call stack preceding the execution of a piece of code.

That's when `debug_backtrace()` comes handy, when used carefully it does not consume too much memory and provides a detailed associative array of the backtrace.

Let's say I need to make sure that in the call stack was a certain file called **special-file.php**.

```php
// Limit memory consumption with DEBUG_BACKTRACE_IGNORE_ARGS and limit the stack to the last 10 frames
$backtrace = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS, 10);
// Generate a flat array of the files
$fileStackTrace = array_map(fn($array) => $array['file'] ?? null, $backtrace);
// Remove the possible null values
$fileStackTrace = array_filter($fileStackTrace);
// Check if the files array contains the researched file
$check = array_filter($fileStackTrace, fn($file) => str_contains($file,'special-file'));
if (count($check) > 0) {
  // special-file was in the backtrace
}
```

In this example, I was looking for a file, but it could have been a function, a class or an object (check the [docs](https://www.php.net/manual/en/function.debug-backtrace.php){target="_blank"}).
