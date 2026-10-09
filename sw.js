/* Bright POS service worker — offline support. Bump CACHE to force devices to refresh. */
const CACHE='bright-pos-v1';
const PRECACHE=['./','./index.html','./manifest.webmanifest','./icons/favicon.svg','./icons/favicon.ico','./icons/apple-touch-icon.png','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(PRECACHE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('bright-pos-')&&x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET')return; const url=new URL(req.url);
  if(req.mode==='navigate'){e.respondWith(fetch(req).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put('./index.html',c));return r;}).catch(()=>caches.match('./index.html')));return;}
  if(url.hostname==='fonts.googleapis.com'||url.hostname==='fonts.gstatic.com'){e.respondWith(caches.open(CACHE).then(cache=>cache.match(req).then(hit=>{const net=fetch(req).then(r=>{if(r.ok||r.type==='opaque')cache.put(req,r.clone());return r;}).catch(()=>hit);return hit||net;})));return;}
  if(url.origin===self.location.origin){e.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(req,c));return r;})));}
});
