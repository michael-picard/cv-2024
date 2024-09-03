---
title: 'Color spaces & color gamuts'
description: 'Recap summary of color gamut and color space definitions, and experiment in gradient interpolations.'
category: 'CS Basics'
date: '2023-11-09'
tags: [ 'css' ]
breadcrumbTitle: 'Color Spaces & Color Gamuts'
image: 'media/blog/post-thumbnails/color-gamut.png'
---

I first learnt about the color gamut 20+ years ago back when I was studying sound engineering, and when I found out about those new CSS color spaces and functions, it felt like I needed to refresh my knowledge. This post is a recap summary of different sources, mostly web.dev, MDN, and CSS color 4 specifications of w3c. It goes straight to the point, for in depth explanations please refer the source links. 

## What is a color gamut?

A color gamut is a subset of colors, usually representing the colors that a display or a printing device can represent, the bigger the gamut is (wide-gamut), the better.

Traditionally, in web development, the only gamut used was `sRGB` (Standard Red-Green-Blue), where each color is described using three bytes, one for each primary color (which can be manipulated with [bitwise operators](/blog/cs-basics/bitwise-operators)). However, "wide-color" monitors support a wider range of colors, that can't be represented using only this sRGB gamut.

Since 2021, browsers have started to provide functionality for other gamuts, like P3 (which includes all colors from sRGB and more), widely used in the movie industry, and rec2020 (which includes all colors from P3 and more) used in UHD TVs.

## What is a color space?

Color spaces are arrangements of a gamut, establishing a **shape** and a **method** of accessing colors. Many are simple 3D shapes like cubes or cylinders. This color arrangement determines which colors are next to each other, and how accessing and interpolating colors will work.

The former web color spaces are `Hex` (hexadecimal color syntax), `RGB` (red green blue), `HSL` (hue saturation lightness), and `HWB` (hue whiteness blackness). All of these classic color spaces reference color within the same gamut, `sRGB`.

The [level 4](https://www.w3.org/TR/css-color-4/) specification introduced 12 new color spaces, though the following 4 are the most interesting to me since they belong to the [CIE space](https://en.wikipedia.org/wiki/CIE_1931_color_space) (which can represent the entire human visible color spectrum) and are available with direct syntax without the use of the `color()` function.

- `LCH` (lightness, chroma and hue)
- `okLCH` (corrected LCH)
- `LAB` (L is lightness. A and B represent the unique axes of human color vision: red-green, and blue-yellow)
- `okLAB` (Ccorrected LAB)

Now what was confusing to me was this number of new color spaces. Accessing a wider gamut is awesome, but why would I need to be provided with several different syntaxes to display the same color?

The answer to this question lies in the very definition of a color space, different **shapes** and **methods** of accessing colors lead to different results in... gradients and transitions. The path between two colors is different in a square or a cylinder. 

## Gradients

The new color spaces are designed to provide more natural-looking gradients and transitions. While testing out gradients, I was surprised to find out that even when transitioning between two HD colors, the interpolation by default stays sRGB. The corollary is that you can interpolate in a new color space between two legacy (non HD) colors.

<iframe height="600" style="width: 100%;" title="CIE space gradients" src="https://codepen.io/metasurfers/embed/ExBdZrG?default-tab=result" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/metasurfers/pen/ExBdZrG">
  CIE space gradients</a> by Michael Picard (<a href="https://codepen.io/metasurfers">@metasurfers</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

It's definitely fun to mangle with interplation values. I might have a preferred color space between two colors, which will no longer be my favorite between two other colors.

Diving into this topic was a worthy time invesment, it opened my eyes to many more creative ways of transitioning between colors.

## Sources

[web.dev](https://developer.chrome.com/docs/css-ui/high-definition-css-color-guide), [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Color_space)
