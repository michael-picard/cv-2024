---
title: 'Getting a grasp of bitwise operators'
description: 'Bitwise operators are not that hard after all. This article explains some basics, using color manipulation as a practical example.'
category: 'CS Basics'
date: '2024-08-30'
tags: [ 'js' ]
breadcrumbTitle: 'bitwise operators'
image: 'media/blog/post-thumbnails/js-bitwise-operators.png'
---

As a self-taught programmer, bitwise operators seemed like some sort of dark magic only hard core low level programmer would use and needed to know. The first time it piqued my interest was when I was getting my Redis certification. There was a whole part of the course on bitwise operators. And indeed, most programming languages provide bitwise operators.

With some patience and some help from Copilot I think I have the basics nailed now.

Since my use case will be manipulating colors, I will use JavaScript as the language. And to make it easier to visulaize bitwise operations results, I will use integers 5 and 6.

```js
const a = 5
const b = 6

console.log(`${a} in binary is ${a.toString(2)}`)
console.log(`${b} in binary is ${b.toString(2)}`)
// if both numbers have a 1 in the same position, the result will be 1
console.log(`${a.toString(2)} & ${b.toString(2)} in binary is ${(a & b).toString(2)}`)
// if one of the numbers has a 1 in the same position, the result will be 1
console.log(`${a.toString(2)} | ${b.toString(2)} in binary is ${(a | b).toString(2)}`)
// if each number has a 1 in the same position, the result will be 0, otherwise 1
console.log(`${a.toString(2)} ^ ${b.toString(2)} in binary is ${(a ^ b).toString(2).padStart(3, '0')}`)

// 5 in binary is 101
// 6 in binary is 110
// 101 & 110 in binary is 100
// 101 | 110 in binary is 111
// 101 ^ 110 in binary is 011
```

## Example: color values

Now web colors are typically 24 bits color, and 32 bits for the alpha channel when image formats support transparency.

Let's use bitwise operators to extract color components from a 24-bit color value.

```js
// Function to extract the red, green, and blue components from a 24-bit color
function getRGBComponents(color) {
    const r = (color >> 16) & 0xFF; // Extract the red component
    const g = (color >> 8) & 0xFF;  // Extract the green component
    const b = color & 0xFF;         // Extract the blue component
    return { r, g, b };
}

// Example usage
const color = 0x66CCFF; // A light blue color
console.log(`Light blue in binary is ${color.toString(2).padStart(24, '0')}`);
const { r, g, b } = getRGBComponents(color);
console.log(`Red: ${r.toString(2).padStart(8,'0')}, Green: ${g.toString(2)}, Blue: ${b.toString(2)}`); // Red: 102, Green: 204, Blue: 255

// Light blue in binary is 011001101100110011111111
// Red: 1100110, Green: 11001100, Blue: 11111111
```

Thanks to the Right Shift `>>` operator we extracted the three color parts from the highest bits to the lowest. After shifting, the component is in the lowest 8 bits. The function then uses the bitwise AND operator `&` with 0xFF (255 which is `11111111` in binary) to isolate these 8 bits by making sure only the lowest 8 bits of the result are kept, effectively masking out any higher bits. If you remove `& 0xFF` from the function your IDE will not infer the return types as numbers.

## What's in it for me?

Bitwise operators are among the fastest operations a programming language can provide because they operate directly on the binary representation of integers at the bit level. These operations are typically executed in a **single CPU cycle**, making them very efficient. To me, that's as good enough reason to have them in my toolbelt, even though it's definitely not something I will use on every project.
