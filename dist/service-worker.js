"use strict";var precacheConfig=[["/Ekin/dist/favicon.ico","54f0b095d16aefbc82d3efe550c3c29c"],["/Ekin/dist/index.html","738a33b3dc4c2fc30f76e987cc585985"],["/Ekin/dist/static/css/app.eca12288cc569dd96b1ac46cbe261067.css","149cca7772d18de3172460c2a1e411b7"],["/Ekin/dist/static/fonts/MaterialIcons-Regular.012cf6a.woff","012cf6a10129e2275d79d6adac7f3b02"],["/Ekin/dist/static/fonts/MaterialIcons-Regular.570eb83.woff2","570eb83859dc23dd0eec423a49e147fe"],["/Ekin/dist/static/fonts/MaterialIcons-Regular.a37b0c0.ttf","a37b0c01c0baf1888ca812cc0508f6e2"],["/Ekin/dist/static/img/icons/android-chrome-192x192.png","c510a70d3a7b3cabe660edfc073a4452"],["/Ekin/dist/static/img/icons/android-chrome-512x512.png","c816b114724b61278a7d4898e2437e9c"],["/Ekin/dist/static/img/icons/apple-touch-icon-120x120.png","50af39d09f4bebce1655025699496c4f"],["/Ekin/dist/static/img/icons/apple-touch-icon-152x152.png","853ee99e790a17479d285b66f68fbbca"],["/Ekin/dist/static/img/icons/apple-touch-icon-180x180.png","7c3276df60b819ec807f4281772cd169"],["/Ekin/dist/static/img/icons/apple-touch-icon-60x60.png","24a6b3ff317747e65ea09be9c7c24288"],["/Ekin/dist/static/img/icons/apple-touch-icon-76x76.png","eb4b23ea768c14c32c2357bd323d5a5a"],["/Ekin/dist/static/img/icons/favicon-16x16.png","f5f86df8c9373ec514557e0d0383bbd6"],["/Ekin/dist/static/img/icons/favicon-32x32.png","b29c927becc09b46d1ea9eaa3f0f183e"],["/Ekin/dist/static/img/icons/favicon.ico","54f0b095d16aefbc82d3efe550c3c29c"],["/Ekin/dist/static/img/icons/msapplication-icon-144x144.png","6f4806c3de1cb95d526b56104139fd3d"],["/Ekin/dist/static/img/icons/news.png","a0599df7e4485d236dcb011420dca1de"],["/Ekin/dist/static/img/login-bg.png","c01aa324fe79633f84a3c646863533ac"],["/Ekin/dist/static/img/logo.png","55971721a17afa3842cf64b66810eb8d"],["/Ekin/dist/static/img/notice/aqtx.png","f43eaa58673e5488e960a1797003f6e9"],["/Ekin/dist/static/img/notice/bg.jpg","accd58dc900900d86248d774b47393f4"],["/Ekin/dist/static/img/notice/ddtz.png","4450c13581dff53c3eae268ce0947b56"],["/Ekin/dist/static/img/notice/ggtz.png","79b42114243882b5b03ec14499320a8c"],["/Ekin/dist/static/img/notice/gzxx.png","b46ba68b5a27f0f82538a5caa0c5619e"],["/Ekin/dist/static/img/notice/hqqk.png","2fd172c8d38f99623e8fe6d77aa5de88"],["/Ekin/dist/static/img/notice/hytz.png","35e2d59086745ee7ab0bb596d33efd18"],["/Ekin/dist/static/img/notice/logo.png","132a4dd1e88f4b3063209a8dd698a886"],["/Ekin/dist/static/img/notice/qttz.png","911b8205f56483564de620628581175c"],["/Ekin/dist/static/img/notice/tgjg.png","0d64bad68519eb9586fb8c5d22ec0958"],["/Ekin/dist/static/img/notice/xwdt.png","9c401ce848763cb3c997506b00e67f6d"],["/Ekin/dist/static/img/others/bg.jpg","98afe923a8d1c54e003cb6d47b8d85bb"],["/Ekin/dist/static/img/others/cxsj.png","fac27294b11e6de5de307e71e6ff1839"],["/Ekin/dist/static/img/others/hqzl.png","685a27afec743b4532a5f4a9f4761151"],["/Ekin/dist/static/img/others/jlhd.png","1031f8c8b117f27b15f8862e047573ab"],["/Ekin/dist/static/img/others/mtbw.png","61b40cda740ca5debd0e40e84758f01b"],["/Ekin/dist/static/img/others/qtzl.png","fdd3e3a6f6d7a69ea528184cf60c92a6"],["/Ekin/dist/static/img/others/tlzl.png","677002b1921a3d1de691251b44cc3a20"],["/Ekin/dist/static/img/personal/bg.jpg","bba871b84d017cb5cd97655c77ebc1c2"],["/Ekin/dist/static/img/personal/bjgj.png","7ccfd6db2bec403db8a8ed9622864720"],["/Ekin/dist/static/img/personal/gztd.png","55cffe931acbb9451df4d0207d45002d"],["/Ekin/dist/static/img/personal/kqjf.png","164d2ce1417d2bbcb8f99c2d941653c6"],["/Ekin/dist/static/img/personal/pxjy.png","3de1253979203e355e151ac0366dba65"],["/Ekin/dist/static/img/personal/qjkq.png","a6a10f538ba1f7ecc519f80504bed3e1"],["/Ekin/dist/static/img/personal/wylj.png","3680d8ebf4c671eea467b610a57394cb"],["/Ekin/dist/static/img/pilot/bg.jpg","ac8ea6f495b2e2ac07c8b0bc73cabc3b"],["/Ekin/dist/static/img/pilot/grjh.png","859e907b311f47c1add571255394d497"],["/Ekin/dist/static/img/pilot/gzgf.png","0fe6e56d16c7b2973e42de3a25c74994"],["/Ekin/dist/static/img/pilot/jfhd.png","ac9b8f174a8d5fda333050ff0a30406e"],["/Ekin/dist/static/img/pilot/qtxx.png","636cc8e8069d70411e0dc1b51c55ef9b"],["/Ekin/dist/static/img/pilot/scsj.png","4b7578b049b056d570aa88945ed00916"],["/Ekin/dist/static/img/pilot/tsjh.png","6191fc9977639e7e21435a521cdcfefd"],["/Ekin/dist/static/img/pilot/yhjh.png","8407bdfa65ff0044cb8bb7c6a6537c66"],["/Ekin/dist/static/img/pilot/zqdd.png","d418dc4f1f492ab62288733e2293579a"],["/Ekin/dist/static/img/pilot/ztxx.png","e383da728a52e3797dca2378923ffcdc"],["/Ekin/dist/static/img/skeleton-bg.fc98259.jpg","fc982598236313d87f3495d36fd2ec39"],["/Ekin/dist/static/img/skeleton-logo.7c179d4.jpg","7c179d49db813cd1588415bccac516a0"],["/Ekin/dist/static/js/0.ac652b0a10fabb808c68.js","aff7b4ef22346990cbeefb56a21ee8a5"],["/Ekin/dist/static/js/1.65e12d1bb6d9db8570b9.js","7b85cb42338554b2b46c5f3ebaf0d041"],["/Ekin/dist/static/js/10.53840239864e34730c12.js","b61a51bf757ede59553619c18aac597a"],["/Ekin/dist/static/js/11.0d38cbeef124a839d2c1.js","9cd95605dec27f2cbd70d792f2f97b42"],["/Ekin/dist/static/js/12.19b179f1fc08d2709fe0.js","27aba2171bb262649a68d5e6a35522ef"],["/Ekin/dist/static/js/13.22e415a4632fdf4c1c48.js","9853bc6ced823344a1bf5ff261f6d735"],["/Ekin/dist/static/js/14.a168a755f486b45bbf85.js","a6fba12ad9d2b99c193bda930c9acea5"],["/Ekin/dist/static/js/15.555eca009b743f1258e6.js","d600064b6c6a370cac76ef05122abc23"],["/Ekin/dist/static/js/16.90e38433b66d63b3ecaa.js","fb53807b74c25def2c3aaef439d6e237"],["/Ekin/dist/static/js/17.35c07412a00d4e55e23b.js","ececc75afb20b15c57b4ec6510db67f2"],["/Ekin/dist/static/js/18.b8b01a1882286395fe9a.js","1d2a0b280e66f3545b3911899fc3d7b3"],["/Ekin/dist/static/js/19.b6e78a06d94d17c3d50c.js","c34c4acc4dc7302f56e51d2375701213"],["/Ekin/dist/static/js/2.40a6fe9d3ff01b0f6a08.js","251a79c937cc147de77eae40a2173c1d"],["/Ekin/dist/static/js/20.3a562677f49cec598820.js","afe2bb0fa41e7ca60e7086375c512190"],["/Ekin/dist/static/js/21.1cf3c2fb56160c209eec.js","64c9dd9dacb0bc8e644fcb49855cdab2"],["/Ekin/dist/static/js/22.757ffbb1523a88748c4b.js","e8a5f58e6f56c336760aad0352078fbf"],["/Ekin/dist/static/js/23.d097baf70c25ca48e04e.js","300cb19eefb8b07d0e98c2dbeb786e1b"],["/Ekin/dist/static/js/24.425116242f05097c0a43.js","2fb8a13ffceaa38ac207d9b4a659358c"],["/Ekin/dist/static/js/25.bfa39880b2e147347426.js","76c00b53bb7cf1d28e13a35020b45792"],["/Ekin/dist/static/js/26.897b9aa155dd6f6cca82.js","eff0823f72f66866c38ee30a07ce02cd"],["/Ekin/dist/static/js/27.ef44e56530b0e7bbb638.js","b712812ca98f45ad74372e8afa6a5d73"],["/Ekin/dist/static/js/28.5485c29193232e20b150.js","6101d36b10b2f9c56badd74ef99ff7a5"],["/Ekin/dist/static/js/29.5f53b30a6462508b48d1.js","cfd323ab246ce0e985d42fb12d912264"],["/Ekin/dist/static/js/3.e776d2eddb9a87eb2f23.js","b43c37a11f3deed6434cc3a899e655cf"],["/Ekin/dist/static/js/30.b79b6a4a144f7adcf142.js","91319b52e25c0428ca9e15e27c5ae969"],["/Ekin/dist/static/js/31.59d1059b23ad20c167f6.js","7d8a36e26e68b65392d720d5421523c7"],["/Ekin/dist/static/js/32.745626756d61c1172325.js","9a151a4bf7c69e0a8401d67a67fff497"],["/Ekin/dist/static/js/33.35605461db382d262a32.js","e5ab28233b53393aee8902252721219d"],["/Ekin/dist/static/js/34.ddf25e2fec071c6818fb.js","c72ab0b1aafd7d2a531bd63bf1602463"],["/Ekin/dist/static/js/35.debeaac624ca68cd8eef.js","93c7bda5200a5559dfa2645815696bab"],["/Ekin/dist/static/js/36.57e6b5c51f0b974e45d0.js","9dc470f0a22d053864e94c770d2fa2d7"],["/Ekin/dist/static/js/4.ae561df27966088239ad.js","27d3d214c910916a080239c4c3ecb667"],["/Ekin/dist/static/js/5.18f0ece89bc3b1545a22.js","a2d39cc70e685887b40da39056b1983d"],["/Ekin/dist/static/js/6.8f29fec367694605bec2.js","dde9fe5653d2148c3735dbd1853e654b"],["/Ekin/dist/static/js/7.d6f1902bc623a233986d.js","5e4ebf147c4584950f642e16f6a105c3"],["/Ekin/dist/static/js/8.92ed9d8a31c7f7d9c8b0.js","aa5b3dfe80e8e39fc33c8867024a2af3"],["/Ekin/dist/static/js/9.be92efa7daa5dc3bc665.js","208760b487511ffa00ce8a50bb948bda"],["/Ekin/dist/static/js/app.cf092b8eca4155f71724.js","81a6168338fe80250c4558e1a75cacde"],["/Ekin/dist/static/js/manifest.a11d8021e49af23dba03.js","6c5778776806450fd99153c762e20086"],["/Ekin/dist/static/js/vendor.863678f91416f5faa184.js","e3b6df9d2e069d74aa028730e9f7af04"],["/Ekin/dist/static/js/vue.43a3c76cb746e303a9de.js","868daa36e25a7c36f985229e66e668b0"],["/Ekin/dist/static/manifest.json","91af1e216cdd2cfdbf6a0f3faf3b90d1"],["/Ekin/dist/sw-register.js","3ff598c7db0b12ede8e3233a06ed6fb0"]],cacheName="sw-precache-v3-sw-cache-lavas-demo-news-"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,i){var c=new URL(e);return i&&c.pathname.match(i)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName=(addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},"_sw-precache"),urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],i=new URL(t,self.location),c=createCacheKey(i,hashParamName,n,!1);return[i.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e&&e.length>0&&(firstRegister=0),e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var i=new Request(n,{credentials:"same-origin"});return fetch(i).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}).then(function(){if(!firstRegister)return self.clients.matchAll().then(function(e){e&&e.length&&e.forEach(function(e){e.postMessage("sw.update")})})}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!.*\\.html$|\\/data\\/).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function e(t,n,i){function c(r,s){if(!n[r]){if(!t[r]){var o="function"==typeof require&&require;if(!s&&o)return o(r,!0);if(a)return a(r,!0);var f=new Error("Cannot find module '"+r+"'");throw f.code="MODULE_NOT_FOUND",f}var d=n[r]={exports:{}};t[r][0].call(d.exports,function(e){var n=t[r][1][e];return c(n||e)},d,d.exports,e,t,n,i)}return n[r].exports}for(var a="function"==typeof require&&require,r=0;r<i.length;r++)c(i[r]);return c}({1:[function(e,t,n){function i(e,t){((t=t||{}).debug||o.debug)&&console.log("[sw-toolbox] "+e)}function c(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||o.cache.name,caches.open(t)}function a(e,t,n){var c=e.url,a=n.maxAgeSeconds,r=n.maxEntries,s=n.name,o=Date.now();return i("Updating LRU order for "+c+". Max entries is "+r+", max age is "+a),f.getDb(s).then(function(e){return f.setTimestampForUrl(e,c,o)}).then(function(e){return f.expireEntries(e,r,a,o)}).then(function(e){i("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){i("Done with cache cleanup.")})}).catch(function(e){i(e)})}function r(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var s,o=e("./options"),f=e("./idb-cache-expiration");t.exports={debug:i,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||o.successResponses;return fetch(e.clone()).then(function(i){return"GET"===e.method&&n.test(i.status)&&c(t).then(function(n){n.put(e,i).then(function(){var i=t.cache||o.cache;(i.maxEntries||i.maxAgeSeconds)&&i.name&&function(e,t,n){var i=a.bind(null,e,t,n);s=s?s.then(i):i()}(e,n,i)})}),i.clone()})},openCache:c,renameCache:function(e,t,n){return i("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],i=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return i.put(e,t)})}))}).then(function(){return caches.delete(e)})})})},cache:function(e,t){return c(t).then(function(t){return t.add(e)})},uncache:function(e,t){return c(t).then(function(t){return t.delete(e)})},precache:function(e){e instanceof Promise||r(e),o.preCacheItems=o.preCacheItems.concat(e)},validatePrecacheInput:r,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var i=e.headers.get("date");if(i&&new Date(i).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var i="sw-toolbox-",c=1,a="store",r="url",s="timestamp",o={};t.exports={getDb:function(e){return e in o||(o[e]=function(e){return new Promise(function(t,n){var o=indexedDB.open(i+e,c);o.onupgradeneeded=function(){o.result.createObjectStore(a,{keyPath:r}).createIndex(s,s,{unique:!1})},o.onsuccess=function(){t(o.result)},o.onerror=function(){n(o.error)}})}(e)),o[e]},setTimestampForUrl:function(e,t,n){return new Promise(function(i,c){var r=e.transaction(a,"readwrite");r.objectStore(a).put({url:t,timestamp:n}),r.oncomplete=function(){i(e)},r.onabort=function(){c(r.error)}})},expireEntries:function(e,t,n,i){return function(e,t,n){return t?new Promise(function(i,c){var o=1e3*t,f=[],d=e.transaction(a,"readwrite"),u=d.objectStore(a);u.index(s).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-o>t.value[s]){var i=t.value[r];f.push(i),u.delete(i),t.continue()}},d.oncomplete=function(){i(f)},d.onabort=c}):Promise.resolve([])}(e,n,i).then(function(n){return function(e,t){return t?new Promise(function(n,i){var c=[],o=e.transaction(a,"readwrite"),f=o.objectStore(a),d=f.index(s),u=d.count();d.count().onsuccess=function(){var e=u.result;e>t&&(d.openCursor().onsuccess=function(n){var i=n.target.result;if(i){var a=i.value[r];c.push(a),f.delete(a),e-c.length>t&&i.continue()}})},o.oncomplete=function(){n(c)},o.onabort=i}):Promise.resolve([])}(e,t).then(function(e){return n.concat(e)})})}}},{}],3:[function(e,t,n){function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var c=e("./helpers"),a=e("./router"),r=e("./options");t.exports={fetchListener:function(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))},activateListener:function(e){c.debug("activate event fired");var t=r.cache.name+"$$$inactive$$$";e.waitUntil(c.renameCache(t,r.cache.name))},installListener:function(e){var t=r.cache.name+"$$$inactive$$$";c.debug("install event fired"),c.debug("creating cache ["+t+"]"),e.waitUntil(c.openCache({cache:{name:t}}).then(function(e){return Promise.all(r.preCacheItems).then(i).then(c.validatePrecacheInput).then(function(t){return c.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var i;i=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+i+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var i=new URL("./",self.location).pathname,c=e("path-to-regexp"),a=function(e,t,n,a){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=i+t),this.keys=[],this.regexp=c(t,this.keys)),this.method=e,this.options=a,this.handler=n};a.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,i){t[e.name]=n[i+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=a},{"path-to-regexp":15}],6:[function(e,t,n){var i=e("./route"),c=e("./helpers"),a=function(e,t){for(var n=e.entries(),i=n.next(),c=[];!i.done;){new RegExp(i.value[0]).test(t)&&c.push(i.value[1]),i=n.next()}return c},r=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){r.prototype[e]=function(t,n,i){return this.add(e,t,n,i)}}),r.prototype.add=function(e,t,n,a){var r;a=a||{},t instanceof RegExp?r=RegExp:r=(r=a.origin||self.location.origin)instanceof RegExp?r.source:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}(r),e=e.toLowerCase();var s=new i(e,t,n,a);this.routes.has(r)||this.routes.set(r,new Map);var o=this.routes.get(r);o.has(e)||o.set(e,new Map);var f=o.get(e),d=s.regexp||s.fullUrlRegExp;f.has(d.source)&&c.debug('"'+t+'" resolves to same regex as existing route.'),f.set(d.source,s)},r.prototype.matchMethod=function(e,t){var n=new URL(t),i=n.origin,c=n.pathname;return this._match(e,a(this.routes,i),c)||this._match(e,[this.routes.get(RegExp)],t)},r.prototype._match=function(e,t,n){if(0===t.length)return null;for(var i=0;i<t.length;i++){var c=t[i],r=c&&c.get(e.toLowerCase());if(r){var s=a(r,n);if(s.length>0)return s[0].makeHandler(n)}}return null},r.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new r},{"./helpers":1,"./route":5}],7:[function(e,t,n){var i=e("../options"),c=e("../helpers");t.exports=function(e,t,n){return n=n||{},c.debug("Strategy: cache first ["+e.url+"]",n),c.openCache(n).then(function(t){return t.match(e).then(function(t){var a=n.cache||i.cache,r=Date.now();return c.isResponseFresh(t,a.maxAgeSeconds,r)?t:c.fetchAndCache(e,n)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var i=e("../options"),c=e("../helpers");t.exports=function(e,t,n){return n=n||{},c.debug("Strategy: cache only ["+e.url+"]",n),c.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||i.cache,a=Date.now();if(c.isResponseFresh(e,t.maxAgeSeconds,a))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var i=e("../helpers"),c=e("./cacheOnly");t.exports=function(e,t,n){return i.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(a,r){var s=!1,o=[],f=function(e){o.push(e.toString()),s?r(new Error('Both cache and network failed: "'+o.join('", "')+'"')):s=!0},d=function(e){e instanceof Response?a(e):f("No result returned")};i.fetchAndCache(e.clone(),n).then(d,f),c(e,t,n).then(d,f)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var i=e("../options"),c=e("../helpers");t.exports=function(e,t,n){var a=(n=n||{}).successResponses||i.successResponses,r=n.networkTimeoutSeconds||i.networkTimeoutSeconds;return c.debug("Strategy: network first ["+e.url+"]",n),c.openCache(n).then(function(t){var s,o,f=[];if(r){var d=new Promise(function(a){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||i.cache,r=Date.now(),s=t.maxAgeSeconds;c.isResponseFresh(e,s,r)&&a(e)})},1e3*r)});f.push(d)}var u=c.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),a.test(e.status))return e;throw c.debug("Response was an HTTP error: "+e.statusText,n),o=e,new Error("Bad response")}).catch(function(i){return c.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(o)return o;throw i})});return f.push(u),Promise.race(f)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var i=e("../helpers");t.exports=function(e,t,n){return i.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var i=e("./options"),c=e("./router"),a=e("./helpers"),r=e("./strategies"),s=e("./listeners");a.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:r.networkOnly,networkFirst:r.networkFirst,cacheOnly:r.cacheOnly,cacheFirst:r.cacheFirst,fastest:r.fastest,router:c,options:i,cache:a.cache,uncache:a.uncache,precache:a.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function i(e,t){for(var n,i=[],c=0,a=0,r="",f=t&&t.delimiter||"/";null!=(n=l.exec(e));){var d=n[0],u=n[1],h=n.index;if(r+=e.slice(a,h),a=h+d.length,u)r+=u[1];else{var p=e[a],b=n[2],g=n[3],m=n[4],E=n[5],k=n[6],v=n[7];r&&(i.push(r),r="");var x=null!=b&&null!=p&&p!==b,w="+"===k||"*"===k,j="?"===k||"*"===k,y=n[2]||f,R=m||E;i.push({name:g||c++,prefix:b||"",delimiter:y,optional:j,repeat:w,partial:x,asterisk:!!v,pattern:R?o(R):v?".*":"[^"+s(y)+"]+?"})}}return a<e.length&&(r+=e.substr(a)),r&&i.push(r),i}function c(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function a(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function r(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,i){for(var r="",s=n||{},o=(i||{}).pretty?c:encodeURIComponent,f=0;f<e.length;f++){var d=e[f];if("string"!=typeof d){var u,h=s[d.name];if(null==h){if(d.optional){d.partial&&(r+=d.prefix);continue}throw new TypeError('Expected "'+d.name+'" to be defined')}if(p(h)){if(!d.repeat)throw new TypeError('Expected "'+d.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(d.optional)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var l=0;l<h.length;l++){if(u=o(h[l]),!t[f].test(u))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'", but received `'+JSON.stringify(u)+"`");r+=(0===l?d.prefix:d.delimiter)+u}}else{if(u=d.asterisk?a(h):o(h),!t[f].test(u))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but received "'+u+'"');r+=d.prefix+u}}else r+=d}return r}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function o(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function d(e){return e.sensitive?"":"i"}function u(e,t,n){p(t)||(n=t||n,t=[]);for(var i=(n=n||{}).strict,c=!1!==n.end,a="",r=0;r<e.length;r++){var o=e[r];if("string"==typeof o)a+=s(o);else{var u=s(o.prefix),h="(?:"+o.pattern+")";t.push(o),o.repeat&&(h+="(?:"+u+h+")*"),a+=h=o.optional?o.partial?u+"("+h+")?":"(?:"+u+"("+h+"))?":u+"("+h+")"}}var l=s(n.delimiter||"/"),b=a.slice(-l.length)===l;return i||(a=(b?a.slice(0,-l.length):a)+"(?:"+l+"(?=$))?"),a+=c?"$":i&&b?"":"(?="+l+"|$)",f(new RegExp("^"+a,d(n)),t)}function h(e,t,n){return p(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}(e,t):p(e)?function(e,t,n){for(var i=[],c=0;c<e.length;c++)i.push(h(e[c],t,n).source);return f(new RegExp("(?:"+i.join("|")+")",d(n)),t)}(e,t,n):function(e,t,n){return u(i(e,n),t,n)}(e,t,n)}var p=e("isarray");t.exports=h,t.exports.parse=i,t.exports.compile=function(e,t){return r(i(e,t))},t.exports.tokensToFunction=r,t.exports.tokensToRegExp=u;var l=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],i=parseInt(t[2]);e&&(!t||"Firefox"===n&&i>=46||"Chrome"===n&&i>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(i){if(i.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(i.map(function(t,i){return n.put(e[i],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/\/api\/mockup/,toolbox.networkFirst,{});