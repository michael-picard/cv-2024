---
title: 'Using IntersectionObserver() to defer javascript loading'
description: 'One technique I often use to improve page load time and decrease first CPU idle is entirely deferring the load of js file(s).'
category: 'Performance'
date: '2024-08-13'
tags: ['js']
breadcrumbTitle: 'IntersectionObserver & defer loading'
---
One technique I often use to improve page load time and decrease **first CPU idle** is entirely deferring the load of js file(s).

If a component is below the viewport when the page loads, which is obviously frequent on mobile, we can use `IntersectionObserver()` to detect when that component is about to enter the viewport, and only then loads and execute the javascript.

It's particularly useful in a Multi-Pages Application scenario, when the page si rendered by the server in a language other than js. This technique allows you to add an interactity rich component written in your favourite js framework, compiled as a custom web element or not.

```js
let customScriptInjected = false
const customScriptCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !customScriptInjected) {
            customScriptInjected = true
            const el = document.createElement('script')
            el.src = '/path/to/your/script.js'
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

In this example the js file will be fetched and executed `200px` before the target element enters the viewport. In my experience it's generally enough for a smooth user experience. 

To prevent a visible layout shift if the user scrolls down very rapidly, I set the height and background color of the target element in the page css. Combined with a skeleton loader in the loaded component it works like a charm. 
