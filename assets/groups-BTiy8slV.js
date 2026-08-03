import{n as e,r as t,t as n}from"./react-OrosJ8bI.js";var r=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.8`})),i=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=r()}));function a(e){return e[e.length-1]}function o(e){return typeof e==`function`}function s(e,t){return o(e)?e(t):e}var c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;function u(e){for(let t in e)if(c.call(e,t))return!0;return!1}var d=()=>Object.create(null),f=(e,t)=>p(e,t,d);function p(e,t,n=()=>({}),r=0){if(e===t)return e;if(r>500)return t;let i=t,a=_(e)&&_(i);if(!a&&!(h(e)&&h(i)))return i;let o=a?e:m(e);if(!o)return i;let s=a?i:m(i);if(!s)return i;let l=o.length,u=s.length,d=a?Array(u):n(),f=0;for(let t=0;t<u;t++){let o=a?t:s[t],u=e[o],m=i[o];if(u===m){d[o]=u,(a?t<l:c.call(e,o))&&f++;continue}if(u===null||m===null||typeof u!=`object`||typeof m!=`object`){d[o]=m;continue}let h=p(u,m,n,r+1);d[o]=h,h===u&&f++}return l===u&&f===l?e:d}function m(e){let t=Object.getOwnPropertyNames(e);for(let n of t)if(!l.call(e,n))return!1;let n=Object.getOwnPropertySymbols(e);if(n.length===0)return t;let r=t;for(let t of n){if(!l.call(e,t))return!1;r.push(t)}return r}function h(e){if(!g(e))return!1;let t=e.constructor;if(t===void 0)return!0;let n=t.prototype;return!(!g(n)||!n.hasOwnProperty(`isPrototypeOf`))}function g(e){return Object.prototype.toString.call(e)===`[object Object]`}function _(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function v(e,t,n){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let r=0,i=e.length;r<i;r++)if(!v(e[r],t[r],n))return!1;return!0}if(h(e)&&h(t)){let r=n?.ignoreUndefined??!0;if(n?.partial){for(let i in t)if((!r||t[i]!==void 0)&&!v(e[i],t[i],n))return!1;return!0}let i=0;if(!r)i=Object.keys(e).length;else for(let t in e)e[t]!==void 0&&i++;let a=0;for(let o in t)if((!r||t[o]!==void 0)&&(a++,a>i||!v(e[o],t[o],n)))return!1;return i===a}return!1}function y(e){let t,n,r=new Promise((e,r)=>{t=e,n=r});return r.status=`pending`,r.resolve=n=>{r.status=`resolved`,r.value=n,t(n),e?.(n)},r.reject=e=>{r.status=`rejected`,n(e)},r}function b(e){return typeof e?.message==`string`?e.message.startsWith(`Failed to fetch dynamically imported module`)||e.message.startsWith(`error loading dynamically imported module`)||e.message.startsWith(`Importing a module script failed`):!1}function ee(e){return!!(e&&typeof e==`object`&&typeof e.then==`function`)}var te=/[\x00-\x1f\x7f"<>`{}]/g;function ne(e){return e.replace(te,e=>`%`+e.charCodeAt(0).toString(16).toUpperCase().padStart(2,`0`))}function re(e){let t;try{t=decodeURI(e)}catch{t=e.replaceAll(/%[0-9A-F]{2}/gi,e=>{try{return decodeURI(e)}catch{return e}})}return ne(t)}var ie=[`http:`,`https:`,`mailto:`,`tel:`];function ae(e,t){if(!e)return!1;try{let n=new URL(e);return!t.has(n.protocol)}catch{return!1}}var oe={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},se=/[&><\u2028\u2029]/g;function ce(e){return e.replace(se,e=>oe[e])}function le(e){if(!e||!/[%\\\x00-\x1f\x7f]/.test(e)&&!e.startsWith(`//`))return{path:e,handledProtocolRelativeURL:!1};let t=/%25|%5C/gi,n=0,r=``,i;for(;(i=t.exec(e))!==null;)r+=re(e.slice(n,i.index))+i[0],n=t.lastIndex;r+=re(n?e.slice(n):e);let a=!1;return r.startsWith(`//`)&&(a=!0,r=`/`+r.replace(/^\/+/,``)),{path:r,handledProtocolRelativeURL:a}}function ue(e){return/\s|[^\u0000-\u007F]/.test(e)?e.replace(/\s|[^\u0000-\u007F]/gu,encodeURIComponent):e}function de(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function fe(){throw Error(`Invariant failed`)}function pe(e){let t=new Map,n,r,i=e=>{e.next&&(e.prev?(e.prev.next=e.next,e.next.prev=e.prev,e.next=void 0,r&&(r.next=e,e.prev=r)):(e.next.prev=void 0,n=e.next,e.next=void 0,r&&(e.prev=r,r.next=e)),r=e)};return{get(e){let n=t.get(e);if(n)return i(n),n.value},set(a,o){if(t.size>=e&&n){let e=n;t.delete(e.key),e.next&&(n=e.next,e.next.prev=void 0),e===r&&(r=void 0)}let s=t.get(a);if(s)s.value=o,i(s);else{let e={key:a,value:o,prev:r};r&&(r.next=e),r=e,n||=e,t.set(a,e)}},clear(){t.clear(),n=void 0,r=void 0}}}var x=4,me=5;function he(e){let t=e.indexOf(`{`);if(t===-1)return null;let n=e.indexOf(`}`,t);return n===-1||t+1>=e.length?null:[t,n]}function ge(e,t,n=new Uint16Array(6)){let r=e.indexOf(`/`,t),i=r===-1?e.length:r,a=e.substring(t,i);if(!a||!a.includes(`$`))return n[0]=0,n[1]=t,n[2]=t,n[3]=i,n[4]=i,n[5]=i,n;if(a===`$`){let r=e.length;return n[0]=2,n[1]=t,n[2]=t,n[3]=r,n[4]=r,n[5]=r,n}if(a.charCodeAt(0)===36)return n[0]=1,n[1]=t,n[2]=t+1,n[3]=i,n[4]=i,n[5]=i,n;let o=he(a);if(o){let[r,s]=o,c=a.charCodeAt(r+1);if(c===45){if(r+2<a.length&&a.charCodeAt(r+2)===36){let e=r+3,a=s;if(e<a)return n[0]=3,n[1]=t+r,n[2]=t+e,n[3]=t+a,n[4]=t+s+1,n[5]=i,n}}else if(c===36){let a=r+1,o=r+2;return o===s?(n[0]=2,n[1]=t+r,n[2]=t+a,n[3]=t+o,n[4]=t+s+1,n[5]=e.length,n):(n[0]=1,n[1]=t+r,n[2]=t+o,n[3]=t+s,n[4]=t+s+1,n[5]=i,n)}}return n[0]=0,n[1]=t,n[2]=t,n[3]=i,n[4]=i,n[5]=i,n}function _e(e,t,n,r,i,a,o){o?.(n);let s=r;{let r=n.fullPath??n.from,o=r.length,c=n.options?.caseSensitive??e,l=n.options?.params?.parse??n.options?.parseParams;for(;s<o;){let e=ge(r,s,t),o,u=s,d=e[5];switch(s=d+1,a++,e[0]){case 0:{let t=r.substring(e[2],e[3]);if(c){let e=i.static?.get(t);if(e)o=e;else{i.static??=new Map;let e=C(n.fullPath??n.from);e.parent=i,e.depth=a,o=e,i.static.set(t,e)}}else{let e=t.toLowerCase(),r=i.staticInsensitive?.get(e);if(r)o=r;else{i.staticInsensitive??=new Map;let t=C(n.fullPath??n.from);t.parent=i,t.depth=a,o=t,i.staticInsensitive.set(e,t)}}break}case 1:{let t=r.substring(u,e[1]),s=r.substring(e[4],d),f=c&&!!(t||s),p=t?f?t:t.toLowerCase():void 0,m=s?f?s:s.toLowerCase():void 0,h=!l&&i.dynamic?.find(e=>!e.parse&&e.caseSensitive===f&&e.prefix===p&&e.suffix===m);if(h)o=h;else{let e=w(1,n.fullPath??n.from,f,p,m);o=e,e.depth=a,e.parent=i,i.dynamic??=[],i.dynamic.push(e)}break}case 3:{let t=r.substring(u,e[1]),s=r.substring(e[4],d),f=c&&!!(t||s),p=t?f?t:t.toLowerCase():void 0,m=s?f?s:s.toLowerCase():void 0,h=!l&&i.optional?.find(e=>!e.parse&&e.caseSensitive===f&&e.prefix===p&&e.suffix===m);if(h)o=h;else{let e=w(3,n.fullPath??n.from,f,p,m);o=e,e.parent=i,e.depth=a,i.optional??=[],i.optional.push(e)}break}case 2:{let t=r.substring(u,e[1]),s=r.substring(e[4],d),l=c&&!!(t||s),f=t?l?t:t.toLowerCase():void 0,p=s?l?s:s.toLowerCase():void 0,m=w(2,n.fullPath??n.from,l,f,p);o=m,m.parent=i,m.depth=a,i.wildcard??=[],i.wildcard.push(m)}}i=o}if(l&&n.children&&!n.isRoot&&n.id&&n.id.charCodeAt(n.id.lastIndexOf(`/`)+1)===95){let e=C(n.fullPath??n.from);e.kind=me,e.parent=i,a++,e.depth=a,i.pathless??=[],i.pathless.push(e),i=e}let u=(n.path||!n.children)&&!n.isRoot;if(u&&r.endsWith(`/`)){let e=C(n.fullPath??n.from);e.kind=x,e.parent=i,a++,e.depth=a,i.index=e,i=e}i.parse=l??null,i.priority=n.options?.params?.priority??0,u&&!i.route&&(i.route=n,i.fullPath=n.fullPath??n.from)}if(n.children)for(let r of n.children)_e(e,t,r,s,i,a,o)}function ve(e,t){if(e.parse&&!t.parse)return-1;if(!e.parse&&t.parse)return 1;if(e.parse&&t.parse&&(e.priority||t.priority))return t.priority-e.priority;if(e.prefix&&t.prefix&&e.prefix!==t.prefix){if(e.prefix.startsWith(t.prefix))return-1;if(t.prefix.startsWith(e.prefix))return 1}if(e.suffix&&t.suffix&&e.suffix!==t.suffix){if(e.suffix.endsWith(t.suffix))return-1;if(t.suffix.endsWith(e.suffix))return 1}return e.prefix&&!t.prefix?-1:!e.prefix&&t.prefix?1:e.suffix&&!t.suffix?-1:!e.suffix&&t.suffix?1:e.caseSensitive&&!t.caseSensitive?-1:!e.caseSensitive&&t.caseSensitive?1:0}function S(e){if(e.pathless)for(let t of e.pathless)S(t);if(e.static)for(let t of e.static.values())S(t);if(e.staticInsensitive)for(let t of e.staticInsensitive.values())S(t);if(e.dynamic?.length){e.dynamic.sort(ve);for(let t of e.dynamic)S(t)}if(e.optional?.length){e.optional.sort(ve);for(let t of e.optional)S(t)}if(e.wildcard?.length){e.wildcard.sort(ve);for(let t of e.wildcard)S(t)}}function C(e){return{kind:0,depth:0,pathless:null,index:null,static:null,staticInsensitive:null,dynamic:null,optional:null,wildcard:null,route:null,fullPath:e,parent:null,parse:null,priority:0}}function w(e,t,n,r,i){return{kind:e,depth:0,pathless:null,index:null,static:null,staticInsensitive:null,dynamic:null,optional:null,wildcard:null,route:null,fullPath:t,parent:null,parse:null,priority:0,caseSensitive:n,prefix:r,suffix:i}}function T(e,t){let n=C(`/`),r=new Uint16Array(6);for(let t of e)_e(!1,r,t,1,n,0);S(n),t.masksTree=n,t.flatCache=pe(1e3)}function ye(e,t){e||=`/`;let n=t.flatCache.get(e);if(n)return n;let r=O(e,t.masksTree);return t.flatCache.set(e,r),r}function be(e,t,n,r,i){e||=`/`,r||=`/`;let a=t?`case\0${e}`:e,o=i.singleCache.get(a);return o||(o=C(`/`),_e(t,new Uint16Array(6),{from:e},1,o,0),i.singleCache.set(a,o)),O(r,o,n)}function E(e,t,n=!1){let r=n?e:`nofuzz\0${e}`,i=t.matchCache.get(r);if(i!==void 0)return i;e||=`/`;let a;try{a=O(e,t.segmentTree,n)}catch(e){if(e instanceof URIError)a=null;else throw e}return a&&(a.branch=Se(a.route)),t.matchCache.set(r,a),a}function D(e){return e===`/`?e:e.replace(/\/{1,}$/,``)}function xe(e,t=!1,n){let r=C(e.fullPath),i=new Uint16Array(6),a={},o={},s=0;return _e(t,i,e,1,r,0,e=>{if(n?.(e,s),e.id in a&&fe(),a[e.id]=e,s!==0&&e.path){let t=D(e.fullPath);(!o[t]||e.fullPath.endsWith(`/`))&&(o[t]=e)}s++}),S(r),{processedTree:{segmentTree:r,singleCache:pe(1e3),matchCache:pe(1e3),flatCache:null,masksTree:null},routesById:a,routesByPath:o}}function O(e,t,n=!1){let r=e.split(`/`),i=we(e,r,t,n);if(!i)return null;let[a]=k(e,r,i);return{route:i.node.route,rawParams:a}}function k(e,t,n){let r=Ce(n.node),i=null,a=Object.create(null),o=n.extract?.part??0,s=n.extract?.node??0,c=n.extract?.path??0,l=n.extract?.segment??0;for(;s<r.length;o++,s++,c++,l++){let u=r[s];if(u.kind===x)break;if(u.kind===me){l--,o--,c--;continue}let d=t[o],f=c;if(d&&(c+=d.length),u.kind===1){i??=n.node.fullPath.split(`/`);let e=i[l],t=u.prefix?.length??0;if(e.charCodeAt(t)===123){let n=u.suffix?.length??0,r=e.substring(t+2,e.length-n-1),i=d.substring(t,d.length-n);a[r]=decodeURIComponent(i)}else{let t=e.substring(1);a[t]=decodeURIComponent(d)}}else if(u.kind===3){if(n.skipped&1<<s){o--,c=f-1;continue}i??=n.node.fullPath.split(`/`);let e=i[l],t=u.prefix?.length??0,r=u.suffix?.length??0,p=e.substring(t+3,e.length-r-1),m=u.suffix||u.prefix?d.substring(t,d.length-r):d;m&&(a[p]=decodeURIComponent(m))}else if(u.kind===2){let t=u,n=e.substring(f+(t.prefix?.length??0),e.length-(t.suffix?.length??0)),r=decodeURIComponent(n);a[`*`]=r,a._splat=r;break}}return n.rawParams&&Object.assign(a,n.rawParams),[a,{part:o,node:s,path:c,segment:l}]}function Se(e){let t=[e];for(;e.parentRoute;)e=e.parentRoute,t.push(e);return t.reverse(),t}function Ce(e){let t=Array(e.depth+1);do t[e.depth]=e,e=e.parent;while(e);return t}function we(e,t,n,r){if(e===`/`&&n.index)return{node:n.index,skipped:0};let i=!a(t),o=i&&e!==`/`,s=t.length-+!!i,c=[{node:n,index:1,skipped:0,depth:1,statics:0,dynamics:0,optionals:0}],l=null,u=null;for(;c.length;){let n=c.pop(),{node:i,index:a,skipped:d,depth:f,statics:p,dynamics:m,optionals:h}=n,{extract:g,rawParams:_}=n;if(i.kind===2&&i.route&&!j(u,n))continue;if(i.parse){if(!A(e,t,n))continue;_=n.rawParams,g=n.extract}r&&i.route&&i.kind!==x&&j(l,n)&&(l=n);let v=a===s;if(v&&(i.route&&(!o||i.kind===x||i.kind===2)&&j(u,n)&&(u=n),!i.optional&&!i.wildcard&&!i.index&&!i.pathless))continue;let y=v?void 0:t[a],b;if(v&&i.index){let n={node:i.index,index:a,skipped:d,depth:f+1,statics:p,dynamics:m,optionals:h,extract:g,rawParams:_},r=!0;if(i.index.parse&&(A(e,t,n)||(r=!1)),r){if(!m&&!h&&!d&&Ee(p,s))return n;j(u,n)&&(u=n)}}if(i.wildcard)for(let e=i.wildcard.length-1;e>=0;e--){let n=i.wildcard[e],{prefix:r,suffix:o}=n;if(!(r&&(v||!(n.caseSensitive?y:b??=y.toLowerCase()).startsWith(r)))){if(o){if(v)continue;let e=t.slice(a).join(`/`).slice(-o.length);if((n.caseSensitive?e:e.toLowerCase())!==o)continue}c.push({node:n,index:s,skipped:d,depth:f+1,statics:p,dynamics:m,optionals:h,extract:g,rawParams:_})}}if(i.optional){let e=d|1<<f,t=f+1;for(let n=i.optional.length-1;n>=0;n--){let r=i.optional[n];c.push({node:r,index:a,skipped:e,depth:t,statics:p,dynamics:m,optionals:h,extract:g,rawParams:_})}if(!v)for(let e=i.optional.length-1;e>=0;e--){let n=i.optional[e],{prefix:r,suffix:o}=n;if(r||o){let e=n.caseSensitive?y:b??=y.toLowerCase();if(r&&!e.startsWith(r)||o&&!e.endsWith(o))continue}c.push({node:n,index:a+1,skipped:d,depth:t,statics:p,dynamics:m,optionals:h+Te(s,a),extract:g,rawParams:_})}}if(!v&&i.dynamic&&y)for(let e=i.dynamic.length-1;e>=0;e--){let t=i.dynamic[e],{prefix:n,suffix:r}=t;if(n||r){let e=t.caseSensitive?y:b??=y.toLowerCase();if(n&&!e.startsWith(n)||r&&!e.endsWith(r))continue}c.push({node:t,index:a+1,skipped:d,depth:f+1,statics:p,dynamics:m+Te(s,a),optionals:h,extract:g,rawParams:_})}if(!v&&i.staticInsensitive){let e=i.staticInsensitive.get(b??=y.toLowerCase());e&&c.push({node:e,index:a+1,skipped:d,depth:f+1,statics:p+Te(s,a),dynamics:m,optionals:h,extract:g,rawParams:_})}if(!v&&i.static){let e=i.static.get(y);e&&c.push({node:e,index:a+1,skipped:d,depth:f+1,statics:p+Te(s,a),dynamics:m,optionals:h,extract:g,rawParams:_})}if(i.pathless){let e=f+1;for(let t=i.pathless.length-1;t>=0;t--){let n=i.pathless[t];c.push({node:n,index:a,skipped:d,depth:e,statics:p,dynamics:m,optionals:h,extract:g,rawParams:_})}}}if(u)return u;if(r&&l){let n=l.index;for(let e=0;e<l.index;e++)n+=t[e].length;let r=n===e.length?`/`:e.slice(n);return l.rawParams??=Object.create(null),l.rawParams[`**`]=decodeURIComponent(r),l}return null}function Te(e,t){return 2**(e-t-1)}function Ee(e,t){return e===2**(t-1)-1}function A(e,t,n){let r,i;try{[r,i]=k(e,t,n)}catch{return null}if(n.rawParams=r,n.extract=i,!n.node.parse)return!0;try{if(n.node.parse(r)===!1)return null}catch{}return!0}function j(e,t){return!e||t.statics>e.statics||t.statics===e.statics&&(t.dynamics>e.dynamics||t.dynamics===e.dynamics&&(t.optionals>e.optionals||t.optionals===e.optionals&&((t.node.kind===x)>(e.node.kind===x)||t.node.kind===x==(e.node.kind===x)&&t.depth>e.depth)))}function M(e){return De(e.filter(e=>e!==void 0).join(`/`))}function De(e){return e.replace(/\/{2,}/g,`/`)}function Oe(e){return e===`/`?e:e.replace(/^\/{1,}/,``)}function ke(e){let t=e.length;return t>1&&e[t-1]===`/`?e.replace(/\/{1,}$/,``):e}function Ae(e){return ke(Oe(e))}function je(e,t){return e?.endsWith(`/`)&&e!==`/`&&e!==`${t}/`?e.slice(0,-1):e}function Me(e,t,n){return je(e,n)===je(t,n)}function Ne({base:e,to:t,trailingSlash:n=`never`,cache:r}){let i=t.startsWith(`/`),o=!i&&t===`.`,s;if(r){s=i?t:o?e:e+`\0`+t;let n=r.get(s);if(n)return n}let c;if(o)c=e.split(`/`);else if(i)c=t.split(`/`);else{for(c=e.split(`/`);c.length>1&&a(c)===``;)c.pop();let n=t.split(`/`);for(let e=0,t=n.length;e<t;e++){let r=n[e];r===``?e?e===t-1&&c.push(r):c=[r]:r===`..`?c.pop():r===`.`||c.push(r)}}c.length>1&&(a(c)===``?n===`never`&&c.pop():n===`always`&&c.push(``));let l=De(c.join(`/`))||`/`;return s&&r&&r.set(s,l),l}function Pe(e){let t=new Map(e.map(e=>[encodeURIComponent(e),e])),n=Array.from(t.keys()).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)).join(`|`),r=new RegExp(n,`g`);return e=>e.replace(r,e=>t.get(e)??e)}function Fe(e,t,n){let r=t[e];return typeof r==`string`?e===`_splat`?/^[a-zA-Z0-9\-._~!/]*$/.test(r)?r:r.split(`/`).map(e=>Le(e,n)).join(`/`):Le(r,n):r}function Ie({path:e,params:t,decoder:n,...r}){let i=!1,a=Object.create(null);if(!e||e===`/`)return{interpolatedPath:`/`,usedParams:a,isMissingParams:i};if(!e.includes(`$`))return{interpolatedPath:e,usedParams:a,isMissingParams:i};let o=e.length,s=0,c,l=``;for(;s<o;){let r=s;c=ge(e,r,c);let o=c[5];if(s=o+1,r===o)continue;let u=c[0];if(u===0){l+=`/`+e.substring(r,o);continue}if(u===2){let s=t._splat;a._splat=s,a[`*`]=s;let u=e.substring(r,c[1]),d=e.substring(c[4],o);if(!s){i=!0,(u||d)&&(l+=`/`+u+d);continue}let f=Fe(`_splat`,t,n);l+=`/`+u+f+d;continue}if(u===1){let s=e.substring(c[2],c[3]);!i&&!(s in t)&&(i=!0),a[s]=t[s];let u=e.substring(r,c[1]),d=e.substring(c[4],o),f=Fe(s,t,n)??`undefined`;l+=`/`+u+f+d;continue}if(u===3){let i=e.substring(c[2],c[3]),s=t[i];if(s==null)continue;a[i]=s;let u=e.substring(r,c[1]),d=e.substring(c[4],o),f=Fe(i,t,n)??``;l+=`/`+u+f+d;continue}}return e.endsWith(`/`)&&(l+=`/`),{usedParams:a,interpolatedPath:l||`/`,isMissingParams:i}}function Le(e,t){let n=encodeURIComponent(e);return t?.(n)??n}var Re=`__root__`;function ze(e){if(e.statusCode=e.statusCode||e.code||307,!e._builtLocation&&!e.reloadDocument&&typeof e.href==`string`)try{new URL(e.href),e.reloadDocument=!0}catch{}let t=new Headers(e.headers);e.href&&t.get(`Location`)===null&&t.set(`Location`,e.href);let n=new Response(null,{status:e.statusCode,headers:t});if(n.options=e,e.throw)throw n;return n}function Be(e){return e instanceof Response&&!!e.options}function Ve(e){if(typeof e==`object`&&e&&e.isSerializedRedirect)return ze(e)}var He=`Error preloading route! ☝️`,Ue=class{get to(){return this._to}get id(){return this._id}get path(){return this._path}get fullPath(){return this._fullPath}constructor(e){if(this.init=e=>{this.originalIndex=e.originalIndex;let t=this.options,n=!t?.path&&!t?.id;this.parentRoute=this.options.getParentRoute?.(),n?this._path=Re:this.parentRoute||fe();let r=n?Re:t?.path;r&&r!==`/`&&(r=Oe(r));let i=t?.id||r,a=n?Re:M([this.parentRoute.id===`__root__`?``:this.parentRoute.id,i]);r===`__root__`&&(r=`/`),a!==`__root__`&&(a=M([`/`,a]));let o=a===`__root__`?`/`:M([this.parentRoute.fullPath,r]);this._path=r,this._id=a,this._fullPath=o,this._to=ke(o)},this.addChildren=e=>this._addFileChildren(e),this._addFileChildren=e=>(Array.isArray(e)&&(this.children=e),typeof e==`object`&&e&&(this.children=Object.values(e)),this),this._addFileTypes=()=>this,this.updateLoader=e=>(Object.assign(this.options,e),this),this.update=e=>(Object.assign(this.options,e),this),this.lazy=e=>(this.lazyFn=e,this),this.redirect=e=>ze({from:this.fullPath,...e}),this.options=e||{},this.isRoot=!e?.getParentRoute,e?.id&&e?.path)throw Error(`Route cannot have both an 'id' and a 'path' option.`)}},We=class extends Ue{constructor(e){super(e)}},N=t(n(),1),Ge=N.use,Ke=typeof window<`u`?N.useLayoutEffect:N.useEffect;function qe(e){let t=N.useRef({value:e,prev:null}),n=t.current.value;return e!==n&&(t.current={value:e,prev:n}),t.current.prev}function Je(e,t,n={},r={}){N.useEffect(()=>{if(!e.current||r.disabled||typeof IntersectionObserver!=`function`)return;let i=new IntersectionObserver(([e])=>{t(e)},n);return i.observe(e.current),()=>{i.disconnect()}},[t,n,r.disabled,e])}function Ye(e){let t=N.useRef(null);return N.useImperativeHandle(e,()=>t.current,[]),t}var Xe=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Ze=e(((e,t)=>{t.exports=Xe()})),Qe=Ze();function $e({children:e,fallback:t=null}){return et()?(0,Qe.jsx)(N.Fragment,{children:e}):(0,Qe.jsx)(N.Fragment,{children:t})}function et(){return N.useSyncExternalStore(tt,()=>!0,()=>!1)}function tt(){return()=>{}}var nt=N.createContext(null);function rt(e){return N.useContext(nt)}var it=N.createContext(void 0),at=N.createContext(void 0),ot=e((e=>{var t=n();function r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var i=typeof Object.is==`function`?Object.is:r,a=t.useState,o=t.useEffect,s=t.useLayoutEffect,c=t.useDebugValue;function l(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),i=r[0].inst,l=r[1];return s(function(){i.value=n,i.getSnapshot=t,u(i)&&l({inst:i})},[e,n,t]),o(function(){return u(i)&&l({inst:i}),e(function(){u(i)&&l({inst:i})})},[e]),c(n),n}function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch{return!0}}function d(e,t){return t()}var f=typeof window>`u`||window.document===void 0||window.document.createElement===void 0?d:l;e.useSyncExternalStore=t.useSyncExternalStore===void 0?f:t.useSyncExternalStore})),st=e(((e,t)=>{t.exports=ot()})),ct=e((e=>{var t=n(),r=st();function i(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var a=typeof Object.is==`function`?Object.is:i,o=r.useSyncExternalStore,s=t.useRef,c=t.useEffect,l=t.useMemo,u=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var d=s(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=l(function(){function e(e){if(!o){if(o=!0,s=e,e=r(e),i!==void 0&&f.hasValue){var t=f.value;if(i(t,e))return c=t}return c=e}if(t=c,a(s,e))return t;var n=r(e);return i!==void 0&&i(t,n)?(s=e,t):(s=e,c=n)}var o=!1,s,c,l=n===void 0?null:n;return[function(){return e(t())},l===null?void 0:function(){return e(l())}]},[t,n,r,i]);var p=o(e,d[0],d[1]);return c(function(){f.hasValue=!0,f.value=p},[p]),u(p),p}})),lt=e(((e,t)=>{t.exports=ct()}))();function ut(e,t){return e===t}function dt(e,t,n=ut){let r=(0,N.useCallback)(t=>{if(!e)return()=>{};let{unsubscribe:n}=e.subscribe(t);return n},[e]),i=(0,N.useCallback)(()=>e?.get(),[e]);return(0,lt.useSyncExternalStoreWithSelector)(r,i,i,t,n)}var ft={get(){},subscribe(){return{unsubscribe(){}}}};function pt(e,t){let n=N.useRef();return r=>{let i=e?.select?e.select(r):r;return e?.structuralSharing??t.options.defaultStructuralSharing?n.current=p(n.current,i):i}}function P(e){let t=rt(),n=N.useContext(e.from?at:it),r=e.from?t.stores.getRouteMatchStore(e.from):t.stores.matchStores.get(n),i=pt(e,t),a=dt(r??ft,e=>e?i(e):ft);if(a!==ft)return a;(e.shouldThrow??!0)&&fe()}function mt(e){return P({from:e.from,strict:e.strict,structuralSharing:e.structuralSharing,select:t=>e.select?e.select(t.loaderData):t.loaderData})}function ht(e){let{select:t,...n}=e;return P({...n,select:e=>t?t(e.loaderDeps):e.loaderDeps})}function gt(e){return P({from:e.from,shouldThrow:e.shouldThrow,structuralSharing:e.structuralSharing,strict:e.strict,select:t=>{let n=e.strict===!1?t.params:t._strictParams;return e.select?e.select(n):n}})}function _t(e){return P({from:e.from,strict:e.strict,shouldThrow:e.shouldThrow,structuralSharing:e.structuralSharing,select:t=>e.select?e.select(t.search):t.search})}function vt(e){let t=rt();return N.useCallback(n=>t.navigate({...n,from:n.from??e?.from}),[e?.from,t])}function yt(e){return P({...e,select:t=>e.select?e.select(t.context):t.context})}var bt=i();function xt(e,t){let n=rt(),r=Ye(t),{activeProps:i,inactiveProps:a,activeOptions:o,to:c,preload:l,preloadDelay:u,preloadIntentProximity:d,hashScrollIntoView:f,replace:p,startTransition:m,resetScroll:h,viewTransition:g,children:_,target:y,disabled:b,style:ee,className:te,onClick:ne,onBlur:re,onFocus:ie,onMouseEnter:oe,onMouseLeave:se,onTouchStart:ce,ignoreBlocker:le,params:ue,search:de,hash:fe,state:pe,mask:x,reloadDocument:me,unsafeRelative:he,from:ge,_fromLocation:_e,...ve}=e,S=et(),C=N.useMemo(()=>e,[n,e.from,e._fromLocation,e.hash,e.to,e.search,e.params,e.state,e.mask,e.unsafeRelative]),w=dt(n.stores.location,e=>e,(e,t)=>e.href===t.href),T=N.useMemo(()=>{let e={_fromLocation:w,...C};return n.buildLocation(e)},[n,w,C]),ye=T.maskedLocation?T.maskedLocation.publicHref:T.publicHref,be=T.maskedLocation?T.maskedLocation.external:T.external,E=N.useMemo(()=>At(ye,be,n.history,b),[b,be,ye,n.history]),D=N.useMemo(()=>{if(E?.external)return ae(E.href,n.protocolAllowlist)?void 0:E.href;if(!jt(c)&&typeof c==`string`&&c.indexOf(`:`)!==-1)try{return new URL(c),ae(c,n.protocolAllowlist)?void 0:c}catch{}},[c,E,n.protocolAllowlist]),xe=N.useMemo(()=>{if(D)return!1;if(o?.exact){if(!Me(w.pathname,T.pathname,n.basepath))return!1}else{let e=je(w.pathname,n.basepath),t=je(T.pathname,n.basepath);if(!(e.startsWith(t)&&(e.length===t.length||e[t.length]===`/`)))return!1}return(o?.includeSearch??!0)&&!v(w.search,T.search,{partial:!o?.exact,ignoreUndefined:!o?.explicitUndefined})?!1:!o?.includeHash||S&&w.hash===T.hash},[o?.exact,o?.explicitUndefined,o?.includeHash,o?.includeSearch,w,D,S,T.hash,T.pathname,T.search,n.basepath]),O=xe?s(i,{})??Ct:St,k=xe?St:s(a,{})??St,Se=[te,O.className,k.className].filter(Boolean).join(` `),Ce=(ee||O.style||k.style)&&{...ee,...O.style,...k.style},[we,Te]=N.useState(!1),Ee=N.useRef(!1),A=e.reloadDocument||D?!1:l??n.options.defaultPreload,j=u??n.options.defaultPreloadDelay??0,M=N.useCallback(()=>{n.preloadRoute({...C,_builtLocation:T}).catch(e=>{console.warn(e),console.warn(He)})},[n,C,T]);Je(r,N.useCallback(e=>{e?.isIntersecting&&M()},[M]),Ot,{disabled:!!b||A!==`viewport`}),N.useEffect(()=>{Ee.current||!b&&A===`render`&&(M(),Ee.current=!0)},[b,M,A]);let De=e=>{let t=e.currentTarget.getAttribute(`target`),r=y===void 0?t:y;if(!b&&!Nt(e)&&!e.defaultPrevented&&(!r||r===`_self`)&&e.button===0){e.preventDefault(),(0,bt.flushSync)(()=>{Te(!0)});let t=n.subscribe(`onResolved`,()=>{t(),Te(!1)});n.navigate({...C,replace:p,resetScroll:h,hashScrollIntoView:f,startTransition:m,viewTransition:g,ignoreBlocker:le})}};if(D)return{...ve,ref:r,href:D,..._&&{children:_},...y&&{target:y},...b&&{disabled:b},...ee&&{style:ee},...te&&{className:te},...ne&&{onClick:ne},...re&&{onBlur:re},...ie&&{onFocus:ie},...oe&&{onMouseEnter:oe},...se&&{onMouseLeave:se},...ce&&{onTouchStart:ce}};let Oe=e=>{if(b||A!==`intent`)return;if(!j){M();return}let t=e.currentTarget;if(Dt.has(t))return;let n=setTimeout(()=>{Dt.delete(t),M()},j);Dt.set(t,n)},ke=e=>{b||A!==`intent`||M()},Ae=e=>{if(b||!A||!j)return;let t=e.currentTarget,n=Dt.get(t);n&&(clearTimeout(n),Dt.delete(t))};return{...ve,...O,...k,href:E?.href,ref:r,onClick:kt([ne,De]),onBlur:kt([re,Ae]),onFocus:kt([ie,Oe]),onMouseEnter:kt([oe,Oe]),onMouseLeave:kt([se,Ae]),onTouchStart:kt([ce,ke]),disabled:!!b,target:y,...Ce&&{style:Ce},...Se&&{className:Se},...b&&wt,...xe&&Tt,...S&&we&&Et}}var St={},Ct={className:`active`},wt={role:`link`,"aria-disabled":!0},Tt={"data-status":`active`,"aria-current":`page`},Et={"data-transitioning":`transitioning`},Dt=new WeakMap,Ot={rootMargin:`100px`},kt=e=>t=>{for(let n of e)if(n){if(t.defaultPrevented)return;n(t)}};function At(e,t,n,r){if(!r)return t?{href:e,external:!0}:{href:n.createHref(e)||`/`,external:!1}}function jt(e){if(typeof e!=`string`)return!1;let t=e.charCodeAt(0);return t===47?e.charCodeAt(1)!==47:t===46}var Mt=N.forwardRef((e,t)=>{let{_asChild:n,...r}=e,{type:i,...a}=xt(r,t),o=typeof r.children==`function`?r.children({isActive:a[`data-status`]===`active`}):r.children;if(!n){let{disabled:e,...t}=a;return N.createElement(`a`,t,o)}return N.createElement(n,a,o)});function Nt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var Pt=class extends Ue{constructor(e){super(e),this.useMatch=e=>P({select:e?.select,from:this.id,structuralSharing:e?.structuralSharing}),this.useRouteContext=e=>yt({...e,from:this.id}),this.useSearch=e=>_t({select:e?.select,structuralSharing:e?.structuralSharing,from:this.id}),this.useParams=e=>gt({select:e?.select,structuralSharing:e?.structuralSharing,from:this.id}),this.useLoaderDeps=e=>ht({...e,from:this.id}),this.useLoaderData=e=>mt({...e,from:this.id}),this.useNavigate=()=>vt({from:this.fullPath}),this.Link=N.forwardRef((e,t)=>(0,Qe.jsx)(Mt,{ref:t,from:this.fullPath,...e}))}};function Ft(e){return new Pt(e)}var It=class extends We{constructor(e){super(e),this.useMatch=e=>P({select:e?.select,from:this.id,structuralSharing:e?.structuralSharing}),this.useRouteContext=e=>yt({...e,from:this.id}),this.useSearch=e=>_t({select:e?.select,structuralSharing:e?.structuralSharing,from:this.id}),this.useParams=e=>gt({select:e?.select,structuralSharing:e?.structuralSharing,from:this.id}),this.useLoaderDeps=e=>ht({...e,from:this.id}),this.useLoaderData=e=>mt({...e,from:this.id}),this.useNavigate=()=>vt({from:this.fullPath}),this.Link=N.forwardRef((e,t)=>(0,Qe.jsx)(Mt,{ref:t,from:this.fullPath,...e}))}};function Lt(e){return new It(e)}function Rt(e){return new zt(e,{silent:!0}).createRoute}var zt=class{constructor(e,t){this.path=e,this.createRoute=e=>{let t=Ft(e);return t.isRoot=!1,t},this.silent=t?.silent}};function Bt(e,t){let n,r,i,a,o=()=>(n||=e().then(e=>{n=void 0,r=e[t??`default`]}).catch(e=>{if(i=e,b(i)&&i instanceof Error&&typeof window<`u`&&typeof sessionStorage<`u`){let e=`tanstack_router_reload:${i.message}`;sessionStorage.getItem(e)||(sessionStorage.setItem(e,`1`),a=!0)}}),n),s=function(e){if(a)throw window.location.reload(),new Promise(()=>{});if(i)throw i;if(!r)if(Ge)Ge(o());else throw o();return N.createElement(r,e)};return s.preload=o,s}function Vt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Ht(e){if(Array.isArray(e))return e}function Ut(e){if(Array.isArray(e))return Vt(e)}function Wt(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Gt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,tn(r.key),r)}}function Kt(e,t,n){return t&&Gt(e.prototype,t),n&&Gt(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function qt(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=rn(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function F(e,t,n){return(t=tn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jt(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Yt(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Xt(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zt(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Qt(Object(n),!0).forEach(function(t){F(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function $t(e,t){return Ht(e)||Yt(e,t)||rn(e,t)||Xt()}function L(e){return Ut(e)||Jt(e)||rn(e)||Zt()}function en(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function tn(e){var t=en(e,`string`);return typeof t==`symbol`?t:t+``}function nn(e){"@babel/helpers - typeof";return nn=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},nn(e)}function rn(e,t){if(e){if(typeof e==`string`)return Vt(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Vt(e,t):void 0}}var an=function(){},on={},sn={},cn=null,ln={mark:an,measure:an};try{typeof window<`u`&&(on=window),typeof document<`u`&&(sn=document),typeof MutationObserver<`u`&&(cn=MutationObserver),typeof performance<`u`&&(ln=performance)}catch{}var un=(on.navigator||{}).userAgent,dn=un===void 0?``:un,R=on,z=sn,fn=cn,pn=ln;R.document;var B=!!z.documentElement&&!!z.head&&typeof z.addEventListener==`function`&&typeof z.createElement==`function`,mn=~dn.indexOf(`MSIE`)||~dn.indexOf(`Trident/`),hn,gn=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,_n=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,vn={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},yn={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},bn=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],V=`classic`,xn=`duotone`,Sn=`sharp`,Cn=`sharp-duotone`,wn=`chisel`,Tn=`etch`,En=`graphite`,Dn=`jelly`,On=`jelly-duo`,kn=`jelly-fill`,An=`mosaic`,jn=`notdog`,Mn=`notdog-duo`,Nn=`pixel`,Pn=`slab`,Fn=`slab-duo`,In=`slab-press`,Ln=`slab-press-duo`,Rn=`thumbprint`,zn=`utility`,Bn=`utility-duo`,Vn=`utility-fill`,Hn=`vellum`,Un=`whiteboard`,Wn=`Classic`,Gn=`Duotone`,Kn=`Sharp`,qn=`Sharp Duotone`,Jn=`Chisel`,Yn=`Etch`,Xn=`Graphite`,Zn=`Jelly`,Qn=`Jelly Duo`,$n=`Jelly Fill`,er=`Mosaic`,tr=`Notdog`,nr=`Notdog Duo`,rr=`Pixel`,ir=`Slab`,ar=`Slab Duo`,or=`Slab Press`,sr=`Slab Press Duo`,cr=`Thumbprint`,lr=`Utility`,ur=`Utility Duo`,dr=`Utility Fill`,fr=`Vellum`,pr=`Whiteboard`,mr=[V,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un];hn={},F(F(F(F(F(F(F(F(F(F(hn,V,Wn),xn,Gn),Sn,Kn),Cn,qn),wn,Jn),Tn,Yn),En,Xn),Dn,Zn),On,Qn),kn,$n),F(F(F(F(F(F(F(F(F(F(hn,An,er),jn,tr),Mn,nr),Nn,rr),Pn,ir),Fn,ar),In,or),Ln,sr),Rn,cr),zn,lr),F(F(F(F(hn,Bn,ur),Vn,dr),Hn,fr),Un,pr);var hr={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},gr={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},_r=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),vr={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},yr=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],br={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},xr=[`kit`];F(F({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Sr={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},Cr={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},wr={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},Tr={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},Er,Dr={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Or=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];Er={},F(F(F(F(F(F(F(F(F(F(Er,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),F(F(F(F(F(F(F(F(F(F(Er,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),F(F(F(F(Er,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),F(F({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var kr={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},Ar={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},jr={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},Mr=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(Or,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),Nr=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],Pr=[1,2,3,4,5,6,7,8,9,10],Fr=Pr.concat([11,12,13,14,15,16,17,18,19,20]),Ir=[].concat(L(Object.keys(Ar)),Nr,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,Dr.GROUP,Dr.SWAP_OPACITY,Dr.PRIMARY,Dr.SECONDARY],Pr.map(function(e){return`${e}x`}),Fr.map(function(e){return`w-${e}`})),Lr={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},H=`___FONT_AWESOME___`,Rr=16,zr=`fa`,Br=`svg-inline--fa`,U=`data-fa-i2svg`,Vr=`data-fa-pseudo-element`,Hr=`data-fa-pseudo-element-pending`,Ur=`data-prefix`,Wr=`data-icon`,Gr=`fontawesome-i2svg`,Kr=`async`,qr=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Jr=[`::before`,`::after`,`:before`,`:after`],Yr=function(){try{return!0}catch{return!1}}();function Xr(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[V]}})}var Zr=I({},vn);Zr[V]=I(I(I(I({},{"fa-duotone":`duotone`}),vn[V]),br.kit),br[`kit-duotone`]);var Qr=Xr(Zr),$r=I({},vr);$r[V]=I(I(I(I({},{duotone:`fad`}),$r[V]),Tr.kit),Tr[`kit-duotone`]);var ei=Xr($r),ti=I({},jr);ti[V]=I(I({},ti[V]),wr.kit);var ni=Xr(ti),ri=I({},kr);ri[V]=I(I({},ri[V]),Sr.kit),Xr(ri);var ii=gn,ai=`fa-layers-text`,oi=_n;Xr(I({},hr));var si=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],ci=yn,li=[].concat(L(xr),L(Ir)),ui=R.FontAwesomeConfig||{};function di(e){var t=z.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function fi(e){return e===``?!0:e===`false`?!1:e===`true`||e}z&&typeof z.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=$t(e,2),n=t[0],r=t[1],i=fi(di(n));i!=null&&(ui[r]=i)});var pi={styleDefault:`solid`,familyDefault:V,cssPrefix:zr,replacementClass:Br,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ui.familyPrefix&&(ui.cssPrefix=ui.familyPrefix);var mi=I(I({},pi),ui);mi.autoReplaceSvg||(mi.observeMutations=!1);var W={};Object.keys(pi).forEach(function(e){Object.defineProperty(W,e,{enumerable:!0,set:function(t){mi[e]=t,hi.forEach(function(e){return e(W)})},get:function(){return mi[e]}})}),Object.defineProperty(W,"familyPrefix",{enumerable:!0,set:function(e){mi.cssPrefix=e,hi.forEach(function(e){return e(W)})},get:function(){return mi.cssPrefix}}),R.FontAwesomeConfig=W;var hi=[];function gi(e){return hi.push(e),function(){hi.splice(hi.indexOf(e),1)}}var G=Rr,K={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _i(e){if(!(!e||!B)){var t=z.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=z.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return z.head.insertBefore(t,r),e}}var vi=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function yi(){for(var e=12,t=``;e-->0;)t+=vi[Math.random()*62|0];return t}function bi(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function xi(e){return e.classList?bi(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function Si(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Ci(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${Si(e[n])}" `},``).trim()}function wi(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function Ti(e){return e.size!==K.size||e.x!==K.x||e.y!==K.y||e.rotate!==K.rotate||e.flipX||e.flipY}function Ei(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function Di(e){var t=e.transform,n=e.width,r=n===void 0?Rr:n,i=e.height,a=i===void 0?Rr:i,o=e.startCentered,s=o!==void 0&&o,c=``;return c+=s&&mn?`translate(${t.x/G-r/2}em, ${t.y/G-a/2}em) `:s?`translate(calc(-50% + ${t.x/G}em), calc(-50% + ${t.y/G}em)) `:`translate(${t.x/G}em, ${t.y/G}em) `,c+=`scale(${t.size/G*(t.flipX?-1:1)}, ${t.size/G*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var Oi=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function ki(){var e=zr,t=Br,n=W.cssPrefix,r=W.replacementClass,i=Oi;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var Ai=!1;function ji(){W.autoAddCss&&!Ai&&(_i(ki()),Ai=!0)}var Mi={mixout:function(){return{dom:{css:ki,insertCss:ji}}},hooks:function(){return{beforeDOMElementCreation:function(){ji()},beforeI2svg:function(){ji()}}}},q=R||{};q[H]||(q[H]={}),q[H].styles||(q[H].styles={}),q[H].hooks||(q[H].hooks={}),q[H].shims||(q[H].shims=[]);var J=q[H],Ni=[],Pi=function(){z.removeEventListener(`DOMContentLoaded`,Pi),Fi=1,Ni.map(function(e){return e()})},Fi=!1;B&&(Fi=(z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(z.readyState),Fi||z.addEventListener(`DOMContentLoaded`,Pi));function Ii(e){B&&(Fi?setTimeout(e,0):Ni.push(e))}function Li(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?Si(e):`<${t} ${Ci(r)}>${a.map(Li).join(``)}</${t}>`}function Ri(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var zi=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Bi=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:zi(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Vi(e){return L(e).length===1?e.codePointAt(0).toString(16):null}function Hi(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ui(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=Hi(t);typeof J.hooks.addPack==`function`&&!r?J.hooks.addPack(e,Hi(t)):J.styles[e]=I(I({},J.styles[e]||{}),i),e===`fas`&&Ui(`fa`,t)}var Wi=J.styles,Gi=J.shims,Ki=Object.keys(ni),qi=Ki.reduce(function(e,t){return e[t]=Object.keys(ni[t]),e},{}),Ji=null,Yi={},Xi={},Zi={},Qi={},$i={};function ea(e){return~li.indexOf(e)}function ta(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!ea(i)?i:null}var na=function(){var e=function(e){return Bi(Wi,function(t,n,r){return t[r]=Bi(n,e,{}),t},{})};Yi=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Xi=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),$i=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in Wi||W.autoFetchSvg,n=Bi(Gi,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Zi=n.names,Qi=n.unicodes,Ji=la(W.styleDefault,{family:W.familyDefault})};gi(function(e){Ji=la(e.styleDefault,{family:W.familyDefault})}),na();function ra(e,t){return(Yi[e]||{})[t]}function ia(e,t){return(Xi[e]||{})[t]}function Y(e,t){return($i[e]||{})[t]}function aa(e){return Zi[e]||{prefix:null,iconName:null}}function oa(e){var t=Qi[e],n=ra(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function X(){return Ji}var sa=function(){return{prefix:null,iconName:null,rest:[]}};function ca(e){var t=V,n=Ki.reduce(function(e,t){return e[t]=`${W.cssPrefix}-${t}`,e},{});return mr.forEach(function(r){(e.includes(n[r])||e.some(function(e){return qi[r].includes(e)}))&&(t=r)}),t}function la(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?V:t,r=Qr[n][e];if(n===xn&&!e)return`fad`;var i=ei[n][e]||ei[n][r],a=e in J.styles?e:null;return i||a||null}function ua(e){var t=[],n=null;return e.forEach(function(e){var r=ta(W.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function da(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var fa=Mr.concat(yr);function pa(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=da(e.filter(function(e){return fa.includes(e)})),a=da(e.filter(function(e){return!fa.includes(e)})),o=$t(i.filter(function(e){return r=e,!bn.includes(e)}),1)[0],s=o===void 0?null:o,c=ca(i),l=I(I({},ua(a)),{},{prefix:la(s,{family:c})});return I(I(I({},l),_a({values:e,family:c,styles:Wi,config:W,canonical:l,givenPrefix:r})),ma(n,r,l))}function ma(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?aa(i):{},o=Y(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!Wi.far&&Wi.fas&&!W.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var ha=mr.filter(function(e){return e!==V||e!==xn}),ga=Object.keys(jr).filter(function(e){return e!==V}).map(function(e){return Object.keys(jr[e])}).flat();function _a(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===xn,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&ha.includes(n)&&(Object.keys(s).find(function(e){return ga.includes(e)})||l.autoFetchSvg)&&(r.prefix=_r.get(n).defaultShortPrefixId,r.iconName=Y(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=X()||`fas`),r}var va=function(){function e(){Wt(this,e),this.definitions={}}return Kt(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=I(I({},e.definitions[n]||{}),t[n]),Ui(n,t[n]);var r=ni[V][n];r&&Ui(r,t[n]),na()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),ya=[],ba={},xa={},Sa=Object.keys(xa);function Ca(e,t){var n=t.mixoutsTo;return ya=e,ba={},Object.keys(xa).forEach(function(e){Sa.indexOf(e)===-1&&delete xa[e]}),ya.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),nn(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){ba[e]||(ba[e]=[]),ba[e].push(r[e])})}e.provides&&e.provides(xa)}),n}function wa(e,t){var n=[...arguments].slice(2);return(ba[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function Z(e){var t=[...arguments].slice(1);(ba[e]||[]).forEach(function(e){e.apply(null,t)})}function Q(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return xa[e]?xa[e].apply(null,t):void 0}function Ta(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||X();if(t)return t=Y(n,t)||t,Ri(Ea.definitions,n,t)||Ri(J.styles,n,t)}var Ea=new va,$={noAuto:function(){W.autoReplaceSvg=!1,W.observeMutations=!1,Z(`noAuto`)},config:W,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(Z(`beforeI2svg`,e),Q(`pseudoElements2svg`,e),Q(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;W.autoReplaceSvg===!1&&(W.autoReplaceSvg=!0),W.observeMutations=!0,Ii(function(){Da({autoReplaceSvgRoot:t}),Z(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(nn(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Y(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=la(e[0]);return{prefix:n,iconName:Y(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${W.cssPrefix}-`)>-1||e.match(ii))){var r=pa(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||X(),iconName:Y(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=X();return{prefix:i,iconName:Y(i,e)||e}}}},library:Ea,findIconDefinition:Ta,toHtml:Li},Da=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?z:e;(Object.keys(J.styles).length>0||W.autoFetchSvg)&&B&&W.autoReplaceSvg&&$.dom.i2svg({node:t})};function Oa(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Li(e)})}}),Object.defineProperty(e,"node",{get:function(){if(B){var t=z.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function ka(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Ti(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=wi(I(I({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Aa(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${W.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:I(I({},i),{},{id:o}),children:r}]}]}function ja(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function Ma(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[W.replacementClass,a?`${W.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:I(I({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!ja(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[U]=``);var _=I(I({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:I({},l.styles)}),v=r.found&&n.found?Q(`generateAbstractMask`,_)||{children:[],attributes:{}}:Q(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?Aa(_):ka(_)}function Na(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=I(I({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[U]=``);var l=I({},a.styles);Ti(i)&&(l.transform=Di({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=wi(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Pa(e){var t=e.content,n=e.extra,r=I(I({},n.attributes),{},{class:n.classes.join(` `)}),i=wi(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var Fa=J.styles;function Ia(e){var t=e[0],n=e[1],r=$t(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${W.cssPrefix}-${ci.GROUP}`},children:[{tag:`path`,attributes:{class:`${W.cssPrefix}-${ci.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${W.cssPrefix}-${ci.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var La={found:!1,width:512,height:512};function Ra(e,t){!Yr&&!W.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function za(e,t){var n=t;return t===`fa`&&W.styleDefault!==null&&(t=X()),new Promise(function(r,i){if(n===`fa`){var a=aa(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Fa[t]&&Fa[t][e]){var o=Fa[t][e];return r(Ia(o))}Ra(e,t),r(I(I({},La),{},{icon:W.showMissingIcons&&e&&Q(`missingIconAbstract`)||{}}))})}var Ba=function(){},Va=W.measurePerformance&&pn&&pn.mark&&pn.measure?pn:{mark:Ba,measure:Ba},Ha=`FA "7.3.1"`,Ua=function(e){return Va.mark(`${Ha} ${e} begins`),function(){return Wa(e)}},Wa=function(e){Va.mark(`${Ha} ${e} ends`),Va.measure(`${Ha} ${e}`,`${Ha} ${e} begins`,`${Ha} ${e} ends`)},Ga={begin:Ua,end:Wa},Ka=function(){};function qa(e){return typeof(e.getAttribute?e.getAttribute(U):null)==`string`}function Ja(e){var t=e.getAttribute?e.getAttribute(Ur):null,n=e.getAttribute?e.getAttribute(Wr):null;return t&&n}function Ya(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(W.replacementClass)}function Xa(){return W.autoReplaceSvg===!0?to.replace:to[W.autoReplaceSvg]||to.replace}function Za(e){return z.createElementNS(`http://www.w3.org/2000/svg`,e)}function Qa(e){return z.createElement(e)}function $a(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Za:Qa:t;if(typeof e==`string`)return z.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild($a(e,{ceFn:n}))}),r}function eo(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var to={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore($a(e),t)}),t.getAttribute(U)===null&&W.keepOriginalSource){var n=z.createComment(eo(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~xi(t).indexOf(W.replacementClass))return to.replace(e);var r=RegExp(`${W.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===W.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return Li(e)}).join(`
`);t.setAttribute(U,``),t.innerHTML=a}};function no(e){e()}function ro(e,t){var n=typeof t==`function`?t:Ka;if(e.length===0)n();else{var r=no;W.mutateApproach===Kr&&(r=R.requestAnimationFrame||no),r(function(){var t=Xa(),r=Ga.begin(`mutate`);e.map(t),r(),n()})}}var io=!1;function ao(){io=!0}function oo(){io=!1}var so=null;function co(e){if(fn&&W.observeMutations){var t=e.treeCallback,n=t===void 0?Ka:t,r=e.nodeCallback,i=r===void 0?Ka:r,a=e.pseudoElementsCallback,o=a===void 0?Ka:a,s=e.observeMutationsRoot,c=s===void 0?z:s;so=new fn(function(e){if(!io){var t=X();bi(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!qa(e.addedNodes[0])&&(W.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&W.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&qa(e.target)&&~si.indexOf(e.attributeName))if(e.attributeName===`class`&&Ja(e.target)){var r=pa(xi(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Ur,a||t),s&&e.target.setAttribute(Wr,s)}else Ya(e.target)&&i(e.target)})}}),B&&so.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function lo(){so&&so.disconnect()}function uo(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function fo(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=pa(xi(e));return i.prefix||=X(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=ia(i.prefix,e.innerText)||ra(i.prefix,Vi(e.innerText))),!i.iconName&&W.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function po(e){return bi(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function mo(){return{iconName:null,prefix:null,transform:K,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ho(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=fo(e),r=n.iconName,i=n.prefix,a=n.rest,o=po(e),s=wa(`parseNodeAttributes`,{},e);return I({iconName:r,prefix:i,transform:K,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?uo(e):[],attributes:o}},s)}var go=J.styles;function _o(e){var t=W.autoReplaceSvg===`nest`?ho(e,{styleParser:!1}):ho(e);return~t.extra.classes.indexOf(ai)?Q(`generateLayersText`,e,t):Q(`generateSvgReplacementMutation`,e,t)}function vo(){return[].concat(L(yr),L(Mr))}function yo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();var n=z.documentElement.classList,r=function(e){return n.add(`${Gr}-${e}`)},i=function(e){return n.remove(`${Gr}-${e}`)},a=W.autoFetchSvg?vo():bn.concat(Object.keys(go));a.includes(`fa`)||a.push(`fa`);var o=[`.${ai}:not([${U}])`].concat(a.map(function(e){return`.${e}:not([${U}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=bi(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Ga.begin(`onTree`),l=s.reduce(function(e,t){try{var n=_o(t);n&&e.push(n)}catch(e){Yr||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){ro(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function bo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_o(e).then(function(e){e&&ro([e],t)})}function xo(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ta(t||{}),i=n.mask;return i&&=(i||{}).icon?i:Ta(i||{}),e(r,I(I({},n),{},{mask:i}))}}var So=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?K:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return Oa(I({type:`icon`},e),function(){return Z(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),Ma({icons:{main:Ia(v),mask:s?Ia(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:I(I({},K),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},Co={mixout:function(){return{icon:xo(So)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=yo,e.nodeCallback=bo,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?z:t,r=e.callback;return yo(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([za(n,r),o.iconName?za(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=$t(o,2),u=l[0],d=l[1];t([e,Ma({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=wi(a);o.length>0&&(n.style=o);var s;return Ti(i)&&(s=Q(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},wo={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return Oa({type:`layer`},function(){Z(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${W.cssPrefix}-layers`].concat(L(r)).join(` `)},children:n}]})}}}},To={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Oa({type:`counter`,content:e},function(){return Z(`beforeDOMElementCreation`,{content:e,params:t}),Pa({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${W.cssPrefix}-layers-counter`].concat(L(a))}})})}}}},Eo={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?K:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Oa({type:`text`,content:e},function(){return Z(`beforeDOMElementCreation`,{content:e,params:t}),Na({content:e,transform:I(I({},K),r),extra:{attributes:s,styles:l,classes:[`${W.cssPrefix}-layers-text`].concat(L(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(mn){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Na({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},Do=RegExp(`"`,`ug`),Oo=[1105920,1112319],ko=I(I(I(I({},{FontAwesome:{normal:`fas`,400:`fas`}}),gr),Lr),Cr),Ao=Object.keys(ko).reduce(function(e,t){return e[t.toLowerCase()]=ko[t],e},{}),jo=Object.keys(Ao).reduce(function(e,t){var n=Ao[t];return e[t]=n[900]||L(Object.entries(n))[0][1],e},{});function Mo(e){return Vi(L(e.replace(Do,``))[0]||``)}function No(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(Do,``),r=n.codePointAt(0),i=r>=Oo[0]&&r<=Oo[1],a=n.length===2&&n[0]===n[1];return i||a||t}function Po(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Ao[n]||{})[i]||jo[n]}function Fo(e,t){var n=`${Hr}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=bi(e.children).filter(function(e){return e.getAttribute(Vr)===t})[0],o=R.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(oi),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Po(s,l),p=Mo(d),m=c[0].startsWith(`FontAwesome`),h=No(o),g=ra(f,p),_=g;if(m){var v=oa(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Ur)!==f||a.getAttribute(Wr)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=mo(),b=y.extra;b.attributes[Vr]=t,za(g,f).then(function(i){var a=Ma(I(I({},y),{},{icons:{main:i,mask:sa()},prefix:f,iconName:_,extra:b,watchable:!0})),o=z.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return Li(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Io(e){return Promise.all([Fo(e,`::before`),Fo(e,`::after`)])}function Lo(e){return e.parentNode!==document.head&&!~qr.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Vr)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var Ro=function(e){return!!e&&Jr.some(function(t){return e.includes(t)})},zo=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=qt(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(Ro(a)){var o=Jr.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function Bo(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(B){var n;if(t)n=e;else if(W.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=qt(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=qt(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=qt(zo(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){W.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=bi(n).filter(Lo).map(Io),i=Ga.begin(`searchPseudoElements`);ao(),Promise.all(r).then(function(){i(),oo(),e()}).catch(function(){i(),oo(),t()})})}}var Vo={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Bo,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?z:t;W.searchPseudoElements&&Bo(n)}}},Ho=!1,Uo={mixout:function(){return{dom:{unwatch:function(){ao(),Ho=!0}}}},hooks:function(){return{bootstrap:function(){co(wa(`mutationObserverCallbacks`,{}))},noAuto:function(){lo()},watch:function(e){var t=e.observeMutationsRoot;Ho?oo():co(wa(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Wo=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Go={mixout:function(){return{parse:{transform:function(e){return Wo(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Wo(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:I({},a.outer),children:[{tag:`g`,attributes:I({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:I(I({},t.icon.attributes),a.path)}]}]}}}},Ko={x:0,y:0,width:`100%`,height:`100%`};function qo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Jo(e){return e.tag===`g`?e.children:[e]}Ca([Mi,Co,wo,To,Eo,Vo,Uo,Go,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?pa(n.split(` `).map(function(e){return e.trim()})):sa();return r.prefix||=X(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=Ei({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:I(I({},Ko),{},{fill:`white`})},p=c.children?{children:c.children.map(qo)}:{},m={tag:`g`,attributes:I({},d.inner),children:[qo(I({tag:c.tag,attributes:I(I({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:I({},d.outer),children:[m]},g=`mask-${a||yi()}`,_=`clip-${a||yi()}`,v={tag:`mask`,attributes:I(I({},Ko),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Jo(u)},v]};return t.push(y,{tag:`rect`,attributes:I({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Ko)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;R.matchMedia&&(t=R.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:I(I({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=I(I({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:I(I({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:I(I({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:I(I({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:I(I({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:I(I({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:I(I({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:I(I({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:$}),$.noAuto;var Yo=$.config;$.library,$.dom;var Xo=$.parse;$.findIconDefinition,$.toHtml;var Zo=$.icon;$.layer,$.text,$.counter;var Qo=`modulepreload`,$o=function(e){return`/`+e},es={},ts=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=$o(t,n),t=s(t),t in es)return;es[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Qo,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ns={groups:{la:{city:`Los Angeles`,name:`Twitch LA`,imagePath:`la.webp`,url:`https://meetups.twitch.tv/los-angeles`,links:{twitter:`TwitchLosAngele`,discord:`8E75rA5`,instagram:`twitch_LA`}},oc:{city:`Anaheim`,name:`OC Streamers`,imagePath:`oc.webp`,url:`https://udld.rocks/ocdiscord`,links:{twitter:`OCStreamers`,instagram:`ocstreamers`,discord:`a5SUFUK`}},sd:{city:`San Diego`,name:`Twitch SD`,imagePath:`sd.webp`,url:`https://meetups.twitch.tv/san-diego`,links:{twitch:`twitch_sandiego`,twitter:`TwitchSanDiego`,discord:`twitchsandiego`}}}};export{i as $,ke as A,de as B,Re as C,M as D,Ie as E,T as F,ce as G,le as H,xe as I,ae as J,s as K,pe as L,ye as M,E as N,Ne as O,be as P,p as Q,fe as R,ze as S,Pe as T,v as U,y as V,ue as W,a as X,ee as Y,f as Z,Ge as _,Xo as a,Be as b,Lt as c,it as d,rt as f,Ze as g,et as h,Zo as i,Se as j,Ae as k,Mt as l,$e as m,ts as n,Bt as o,nt as p,u as q,Yo as r,Rt as s,ns as t,dt as u,Ke as v,De as w,Ve as x,qe as y,ie as z};