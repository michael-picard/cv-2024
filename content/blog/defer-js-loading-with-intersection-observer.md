---
title: 'Using IntersectionObserver() to defer javascript loading'
description: 'meta description of the page'
category: 'Performance'
date: '2024-08-13'
tags: ['js']
---

One technique I use often to improve page load time and decrease CPU idle time is deferring the js loading entirely.

If a component is below the viewport when page loads, which is obviously frequent on mobile, we can use `IntersectionObserver()` to detect when that component is about to enter the viewport and only loads and execute the javascript then.

```js
let customScriptInjected = false
const customScriptCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !customScriptInjected) {
            customScriptInjected = true
            const el = document.createElement('script')
            el.src = '/path/to/your/script.js'
            el.type = 'module'
            document.body.appendChild(el)
        }
    })
}
document.addEventListener('DOMContentLoaded', () => {
    let observer = new IntersectionObserver(customScriptCallback, {rootMargin: "0px 0px 200px 0px"})
    let target = document.getElementById('target');
    observer.observe(target)
})
```

In this example the js file will be fetched and executed `200px` before the target element enters the viewport.
