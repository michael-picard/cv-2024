---
title: 'Popover attribute from the trenches'
description: 'What this new HTML attribute brings to the table and is it usable on dialog elements ?'
category: 'Languages'
date: '2024-04-02'
tags: ['html']
breadcrumbTitle: 'Popover attribute'
image: 'media/blog/post-thumbnails/popover-attribute.png'
---

This new attribute is available cross-platform now, and is handy for a few UI web elements like modals, pop-ups, tool tips, etc...

Using the `popover` attribute is really simple. Add the attribute and an id to your target element, add the `popovertarget` to your trigger element, and you're on a roll.

There are a few interesting things to keep in mind : 

- when a `popover` element is active, it's in the **top-layer**, no need to worry about `z-index` anymore 💪
- the `popover` attribute can have a value of `auto` (default) or `manual`
- styling the background of an opened `popover` element is done through applying styles to `::backdrop` 
- baked in **ESC** key listening to hide the popover 👍
- baked in **light-dismiss**, meaning clicking outside the target will hide the popover element and return focus 👍

## Popover on div elements

In the below pen are the differences between `auto` and `manual`.

<iframe height="400" title="Popover on div" src="https://codepen.io/metasurfers/embed/mdZLbyd?default-tab=html%2Cresult" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/metasurfers/pen/mdZLbyd">
  Popover attribute</a> by Michael Picard (<a href="https://codepen.io/metasurfers">@metasurfers</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Popover on dialog elements

What really got me excited when I first started playing with the `popover` attribute is that I no longer had to handle the _closing_ myself. So I immediately thought about using it on a `dialog` element, that could save a few lines of code each time!

<iframe height="400" title="Popover on dialog" src="https://codepen.io/metasurfers/embed/JjQvWZL?default-tab=html%2Cresult"  loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/metasurfers/pen/JjQvWZL">
  Popover on div</a> by Michael Picard (<a href="https://codepen.io/metasurfers">@metasurfers</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

As I quickly found out, there is a caveat. `popover` does not inert the rest of the page like regular `dialog.showModal()` does. And that is a deal braker since in most cases, `dialog` are meant to force the focus on their content and inert the rest of the DOM.

Still, a nice tool to have in a dev toolbelt! 

