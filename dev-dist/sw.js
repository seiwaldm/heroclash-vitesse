if(!self.define){let e,t={};const n=(n,s)=>(n=new URL(n+".js",s).href,t[n]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=t,document.head.appendChild(e)}else e=n,importScripts(n),t()})).then((()=>{let e=t[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let o={};const c=e=>n(e,r),l={module:{uri:r},exports:o,require:c};t[r]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(i(...e),o)))}}define(["./workbox-1f218d25"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"registerSW.js",revision:"3ca0b8505b4bec776b69afdba2768812"},{revision:null,url:"index.html"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{allowlist:[/^\/$/]})),e.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/.*/i,new e.CacheFirst({cacheName:"hero-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
