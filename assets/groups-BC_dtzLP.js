import{n as e,r as t,t as n}from"./react-OrosJ8bI.js";function r(e){return e[e.length-1]}function i(e,t){return typeof e==`function`?e(t):e}var a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function s(e){for(let t in e)if(a.call(e,t))return!0;return!1}var c=()=>Object.create(null),l=(e,t)=>u(e,t,c);function u(e,t,n=()=>({}),r=0){if(e===t)return e;if(r>500)return t;let i=t,o=m(e)&&m(i);if(!o&&!(f(e)&&f(i)))return i;let s=o?e:d(e);if(!s)return i;let c=o?i:d(i);if(!c)return i;let l=s.length,p=c.length,h=o?Array(p):n(),g=0;for(let t=0;t<p;t++){let s=o?t:c[t],d=e[s],f=i[s];if(d===f){h[s]=d,(o?t<l:a.call(e,s))&&g++;continue}if(d===null||f===null||typeof d!=`object`||typeof f!=`object`){h[s]=f;continue}let p=u(d,f,n,r+1);h[s]=p,p===d&&g++}return l===p&&g===l?e:h}function d(e){let t=Object.keys(e);if(t.length!==Object.getOwnPropertyNames(e).length)return!1;let n=Object.getOwnPropertySymbols(e);if(n.length===0)return t;for(let r of n){if(!o.call(e,r))return!1;t.push(r)}return t}function f(e){if(!p(e))return!1;let t=e.constructor;if(t===void 0)return!0;let n=t.prototype;return!(!p(n)||!n.hasOwnProperty(`isPrototypeOf`))}function p(e){return Object.prototype.toString.call(e)===`[object Object]`}function m(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function h(e,t,n){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let r=0,i=e.length;r<i;r++)if(!h(e[r],t[r],n))return!1;return!0}if(f(e)&&f(t)){let r=n?.ignoreUndefined??!0;if(n?.partial){for(let i in t)if((!r||t[i]!==void 0)&&!h(e[i],t[i],n))return!1;return!0}let i=0;if(!r)i=Object.keys(e).length;else for(let t in e)e[t]!==void 0&&i++;let a=0;for(let o in t)if((!r||t[o]!==void 0)&&(a++,a>i||!h(e[o],t[o],n)))return!1;return i===a}return!1}function g(e){return typeof e?.message==`string`?e.message.startsWith(`Failed to fetch dynamically imported module`)||e.message.startsWith(`error loading dynamically imported module`)||e.message.startsWith(`Importing a module script failed`):!1}var _=/[\x00-\x1f\x7f"<>`{}]/g;function v(e){return e.replace(_,e=>`%`+e.charCodeAt(0).toString(16).toUpperCase().padStart(2,`0`))}function y(e){let t;try{t=decodeURI(e)}catch{t=e.replaceAll(/%[0-9A-F]{2}/gi,e=>{try{return decodeURI(e)}catch{return e}})}return v(t)}var b=[`http:`,`https:`,`mailto:`,`tel:`];function x(e,t){if(!e)return!1;try{let n=new URL(e);return!t.has(n.protocol)}catch{return!1}}var ee={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},te=/[&><\u2028\u2029]/g;function ne(e){return e.replace(te,e=>ee[e])}function re(e){if(!e||!/[%\\\x00-\x1f\x7f]/.test(e)&&!e.startsWith(`//`))return{path:e,handledProtocolRelativeURL:!1};let t=/%25|%5C/gi,n=0,r=``,i;for(;(i=t.exec(e))!==null;)r+=y(e.slice(n,i.index))+i[0],n=t.lastIndex;r+=y(n?e.slice(n):e);let a=!1;return r.startsWith(`//`)&&(a=!0,r=`/`+r.replace(/^\/+/,``)),{path:r,handledProtocolRelativeURL:a}}function ie(e){return/\s|[^\u0000-\u007F]/.test(e)?e.replace(/\s|[^\u0000-\u007F]/gu,encodeURIComponent):e}function ae(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function oe(){throw Error(`Invariant failed`)}function se(e){let t=new Map,n,r,i=e=>{e.next&&(e.prev?(e.prev.next=e.next,e.next.prev=e.prev,e.next=void 0,r&&(r.next=e,e.prev=r)):(e.next.prev=void 0,n=e.next,e.next=void 0,r&&(e.prev=r,r.next=e)),r=e)};return{get(e){let n=t.get(e);if(n)return i(n),n.value},set(a,o){if(t.size>=e&&n){let e=n;t.delete(e.key),e.next&&(n=e.next,e.next.prev=void 0),e===r&&(r=void 0)}let s=t.get(a);if(s)s.value=o,i(s);else{let e={key:a,value:o,prev:r};r&&(r.next=e),r=e,n||=e,t.set(a,e)}},clear(){t.clear(),n=void 0,r=void 0}}}var S=4,ce=5;function le(e,t,n=new Uint16Array(6)){let r=e.indexOf(`/`,t),i=r===-1?e.length:r,a=e.substring(t,i);if(!a||!a.includes(`$`))return n[0]=0,n[1]=t,n[2]=t,n[3]=i,n[4]=i,n[5]=i,n;if(a===`$`){let r=e.length;return n[0]=2,n[1]=t,n[2]=t,n[3]=r,n[4]=r,n[5]=r,n}if(a.charCodeAt(0)===36)return n[0]=1,n[1]=t,n[2]=t+1,n[3]=i,n[4]=i,n[5]=i,n;let o=a.indexOf(`{`),s;if(o!==-1&&o+1<a.length&&(s=a.indexOf(`}`,o))!==-1){let r=a.charCodeAt(o+1);if(r===45){if(o+2<a.length&&a.charCodeAt(o+2)===36){let e=o+3,r=s;if(e<r)return n[0]=3,n[1]=t+o,n[2]=t+e,n[3]=t+r,n[4]=t+s+1,n[5]=i,n}}else if(r===36){let r=o+1,a=o+2;return a===s?(n[0]=2,n[1]=t+o,n[2]=t+r,n[3]=t+a,n[4]=t+s+1,n[5]=e.length,n):(n[0]=1,n[1]=t+o,n[2]=t+a,n[3]=t+s,n[4]=t+s+1,n[5]=i,n)}}return n[0]=0,n[1]=t,n[2]=t,n[3]=i,n[4]=i,n[5]=i,n}function ue(e,t,n,r,i,a,o,s){s?.(n);let c=r;{let r=n.fullPath??n.from,s=n.options,l=r.length,u=s?.caseSensitive??e,d=s?.params?.parse??s?.parseParams;for(;c<l;){let e=le(r,c,t),n,s=c,l=e[5];c=l+1,a++;let f=e[0];switch(f){case 0:{let t=r.substring(e[2],e[3]),o=t,s;u?s=i.static??=new Map:(o=t.toLowerCase(),s=i.staticInsensitive??=new Map);let c=s.get(o);if(c)n=c;else{let e=C(r);e.parent=i,e.depth=a,n=e,s.set(o,e)}break}case 1:case 3:case 2:{let t=r.substring(s,e[1]),c=r.substring(e[4],l),p=u&&!!(t||c),m=t?p?t:t.toLowerCase():void 0,h=c?p?c:c.toLowerCase():void 0,g=f===1?i.dynamic:f===3?i.optional:i.wildcard,_=f!==2&&!d&&g?.find(e=>!e.parse&&e.caseSensitive===p&&e.prefix===m&&e.suffix===h);if(_)n=_;else{let e=fe(f,r,p,m,h);n=e,e.parent=i,e.depth=a;let t;t=f===1?i.dynamic??=[]:f===3?i.optional??=[]:i.wildcard??=[],t.push(e),t.length===2&&o?.push(t)}break}}i=n}if(d&&n.children&&!n.isRoot&&n.id&&n.id.charCodeAt(n.id.lastIndexOf(`/`)+1)===95){let e=C(r);e.kind=ce,e.parent=i,a++,e.depth=a,i.pathless??=[],i.pathless.push(e),i=e}let f=(n.path||!n.children)&&!n.isRoot;if(f&&r.endsWith(`/`)){let e=C(r);e.kind=S,e.parent=i,a++,e.depth=a,i.index=e,i=e}i.parse=d??null,i.priority=s?.params?.priority??0,f&&!i.route&&(i.route=n,i.fullPath=r)}if(n.children)for(let r of n.children)ue(e,t,r,c,i,a,o,s)}function de(e,t){if(e.parse&&!t.parse)return-1;if(!e.parse&&t.parse)return 1;if(e.parse&&t.parse&&(e.priority||t.priority))return t.priority-e.priority;if(e.prefix&&t.prefix&&e.prefix!==t.prefix){if(e.prefix.startsWith(t.prefix))return-1;if(t.prefix.startsWith(e.prefix))return 1}if(e.suffix&&t.suffix&&e.suffix!==t.suffix){if(e.suffix.endsWith(t.suffix))return-1;if(t.suffix.endsWith(e.suffix))return 1}return e.prefix&&!t.prefix?-1:!e.prefix&&t.prefix?1:e.suffix&&!t.suffix?-1:!e.suffix&&t.suffix?1:e.caseSensitive&&!t.caseSensitive?-1:!e.caseSensitive&&t.caseSensitive?1:0}function C(e){return{kind:0,depth:0,pathless:null,index:null,static:null,staticInsensitive:null,dynamic:null,optional:null,wildcard:null,route:null,fullPath:e,parent:null,parse:null,priority:0}}function fe(e,t,n,r,i){return{kind:e,depth:0,pathless:null,index:null,static:null,staticInsensitive:null,dynamic:null,optional:null,wildcard:null,route:null,fullPath:t,parent:null,parse:null,priority:0,caseSensitive:n,prefix:r,suffix:i}}function pe(e,t){let n=C(`/`),r=new Uint16Array(6),i=[];for(let t of e)ue(!1,r,t,1,n,0,i);for(let e of i)e.sort(de);t.masksTree=n,t.flatCache=se(1e3)}function me(e,t){e||=`/`;let n=t.flatCache.get(e);if(n!==void 0)return n;let r=w(e,t.masksTree);return t.flatCache.set(e,r),r}function he(e,t,n,r,i){e||=`/`,r||=`/`;let a=t?`case\0${e}`:e,o=i.singleCache.get(a);return o||(o=C(`/`),ue(t,new Uint16Array(6),{from:e},1,o,0),i.singleCache.set(a,o)),w(r,o,n)}function ge(e,t,n=!1){let r=n?e:`nofuzz\0${e}`,i=t.matchCache.get(r);if(i!==void 0)return i;e||=`/`;let a;try{a=w(e,t.segmentTree,n)}catch(e){if(e instanceof URIError)a=null;else throw e}return a&&(a.branch=be(a.route)),t.matchCache.set(r,a),a}function _e(e){return e===`/`?e:e.replace(/\/{1,}$/,``)}function ve(e,t=!1,n){let r=C(e.fullPath),i=new Uint16Array(6),a=[],o={},s={},c=0;ue(t,i,e,1,r,0,a,e=>{if(n?.(e,c),e.id in o&&oe(),o[e.id]=e,c!==0&&e.path){let t=_e(e.fullPath);(!s[t]||e.fullPath.endsWith(`/`))&&(s[t]=e)}c++});for(let e of a)e.sort(de);return{processedTree:{segmentTree:r,singleCache:se(1e3),matchCache:se(1e3),flatCache:null,masksTree:null},routesById:o,routesByPath:s}}function w(e,t,n=!1){let r=e.split(`/`),i=Se(e,r,t,n);if(!i)return null;let[a]=ye(e,r,i);return{route:i.node.route,rawParams:a}}function ye(e,t,n){let r=xe(n.node),i=null,a=Object.create(null),o=n.extract?.part??0,s=n.extract?.node??0,c=n.extract?.path??0,l=n.extract?.segment??0;for(;s<r.length;o++,s++,c++,l++){let u=r[s];if(u.kind===S)break;if(u.kind===ce){l--,o--,c--;continue}let d=t[o],f=c;if(d&&(c+=d.length),u.kind===1){i??=n.node.fullPath.split(`/`);let e=i[l],t=u.prefix?.length??0;if(e.charCodeAt(t)===123){let n=u.suffix?.length??0,r=e.substring(t+2,e.length-n-1),i=d.substring(t,d.length-n);a[r]=decodeURIComponent(i)}else{let t=e.substring(1);a[t]=decodeURIComponent(d)}}else if(u.kind===3){if(n.skipped&1<<s){o--,c=f-1;continue}i??=n.node.fullPath.split(`/`);let e=i[l],t=u.prefix?.length??0,r=u.suffix?.length??0,p=e.substring(t+3,e.length-r-1),m=u.suffix||u.prefix?d.substring(t,d.length-r):d;m&&(a[p]=decodeURIComponent(m))}else if(u.kind===2){let t=u,n=e.substring(f+(t.prefix?.length??0),e.length-(t.suffix?.length??0)),r=decodeURIComponent(n);a[`*`]=r,a._splat=r;break}}return n.rawParams&&Object.assign(a,n.rawParams),[a,{part:o,node:s,path:c,segment:l}]}function be(e){let t=[e];for(;e.parentRoute;)e=e.parentRoute,t.push(e);return t.reverse(),t}function xe(e){let t=Array(e.depth+1);do t[e.depth]=e,e=e.parent;while(e);return t}function Se(e,t,n,i){if(e===`/`&&n.index)return{node:n.index,skipped:0};let a=!r(t),o=a&&e!==`/`,s=t.length-+!!a,c=[{node:n,index:1,skipped:0,statics:0,dynamics:0,optionals:0}],l=null,u=null;for(;c.length;){let n=c.pop(),{node:r,index:a,skipped:d,statics:f,dynamics:p,optionals:m}=n,{extract:h,rawParams:g}=n;if(r.kind===2&&r.route&&!Te(u,n))continue;if(r.parse){if(!we(e,t,n))continue;g=n.rawParams,h=n.extract}i&&r.route&&r.kind!==S&&Te(l,n)&&(l=n);let _=a===s;if(_&&(r.route&&(!o||r.kind===S||r.kind===2)&&Te(u,n)&&(u=n),!r.optional&&!r.wildcard&&!r.index&&!r.pathless))continue;let v=_?void 0:t[a],y;if(_&&r.index){let n={node:r.index,index:a,skipped:d,statics:f,dynamics:p,optionals:m,extract:h,rawParams:g},i=!0;if(r.index.parse&&(we(e,t,n)||(i=!1)),i){if(!p&&!m&&!d&&Ce(f,s))return n;Te(u,n)&&(u=n)}}if(r.wildcard)for(let e=r.wildcard.length-1;e>=0;e--){let n=r.wildcard[e],{prefix:i,suffix:o}=n;if(!(i&&(_||!(n.caseSensitive?v:y??=v.toLowerCase()).startsWith(i)))){if(o){if(_)continue;let e=t.slice(a).join(`/`).slice(-o.length);if((n.caseSensitive?e:e.toLowerCase())!==o)continue}c.push({node:n,index:s,skipped:d,statics:f,dynamics:p,optionals:m,extract:h,rawParams:g})}}if(r.optional){let e=d|1<<r.depth+1;for(let t=r.optional.length-1;t>=0;t--){let n=r.optional[t];c.push({node:n,index:a,skipped:e,statics:f,dynamics:p,optionals:m,extract:h,rawParams:g})}if(!_)for(let e=r.optional.length-1;e>=0;e--){let t=r.optional[e],{prefix:n,suffix:i}=t;if(n||i){let e=t.caseSensitive?v:y??=v.toLowerCase();if(n&&!e.startsWith(n)||i&&!e.endsWith(i))continue}c.push({node:t,index:a+1,skipped:d,statics:f,dynamics:p,optionals:m+T(s,a),extract:h,rawParams:g})}}if(!_&&r.dynamic&&v)for(let e=r.dynamic.length-1;e>=0;e--){let t=r.dynamic[e],{prefix:n,suffix:i}=t;if(n||i){let e=t.caseSensitive?v:y??=v.toLowerCase();if(n&&!e.startsWith(n)||i&&!e.endsWith(i))continue}c.push({node:t,index:a+1,skipped:d,statics:f,dynamics:p+T(s,a),optionals:m,extract:h,rawParams:g})}if(!_&&r.staticInsensitive){let e=r.staticInsensitive.get(y??=v.toLowerCase());e&&c.push({node:e,index:a+1,skipped:d,statics:f+T(s,a),dynamics:p,optionals:m,extract:h,rawParams:g})}if(!_&&r.static){let e=r.static.get(v);e&&c.push({node:e,index:a+1,skipped:d,statics:f+T(s,a),dynamics:p,optionals:m,extract:h,rawParams:g})}if(r.pathless)for(let e=r.pathless.length-1;e>=0;e--){let t=r.pathless[e];c.push({node:t,index:a,skipped:d,statics:f,dynamics:p,optionals:m,extract:h,rawParams:g})}}if(u)return u;if(i&&l){let n=l.index;for(let e=0;e<l.index;e++)n+=t[e].length;let r=n===e.length?`/`:e.slice(n);return l.rawParams??=Object.create(null),l.rawParams[`**`]=decodeURIComponent(r),l}return null}function T(e,t){return 2**(e-t-1)}function Ce(e,t){return e===2**(t-1)-1}function we(e,t,n){let r,i;try{[r,i]=ye(e,t,n)}catch{return null}if(n.rawParams=r,n.extract=i,!n.node.parse)return!0;try{if(n.node.parse(r)===!1)return null}catch{}return!0}function Te(e,t){return!e||t.statics>e.statics||t.statics===e.statics&&(t.dynamics>e.dynamics||t.dynamics===e.dynamics&&(t.optionals>e.optionals||t.optionals===e.optionals&&((t.node.kind===S)>(e.node.kind===S)||t.node.kind===S==(e.node.kind===S)&&t.node.depth>e.node.depth)))}function Ee(e){return E(e.filter(e=>e!==void 0).join(`/`))}function E(e){return e.replace(/\/{2,}/g,`/`)}function De(e){return e===`/`?e:e.replace(/^\/{1,}/,``)}function D(e){let t=e.length;return t>1&&e[t-1]===`/`?e.replace(/\/{1,}$/,``):e}function Oe(e){return D(De(e))}function ke(e,t){return e?.endsWith(`/`)&&e!==`/`&&e!==`${t}/`?e.slice(0,-1):e}function Ae(e,t,n){return ke(e,n)===ke(t,n)}function je({base:e,to:t,trailingSlash:n=`never`,cache:i}){if(t.includes(`//`)&&(t=E(t)),t.startsWith(`/`))return t.length===1||n===`preserve`?t:n===`always`?t.endsWith(`/`)?t:`${t}/`:t.endsWith(`/`)?t.slice(0,-1):t;let a=t===`.`,o;if(i){o=a?e:e+`\0`+t;let n=i.get(o);if(n)return n}let s;if(a)s=e.split(`/`);else{for(e.includes(`//`)&&(e=E(e)),s=e.split(`/`);s.length>1&&r(s)===``;)s.pop();let n=t.split(`/`);for(let e=0,t=n.length;e<t;e++){let r=n[e];r===``?e?e===t-1&&s.push(r):s=[r]:r===`..`?s.length>1?s.pop():s=[``]:r===`.`||s.push(r)}}s.length>1&&(r(s)===``?n===`never`&&s.pop():n===`always`&&s.push(``));let c=s.join(`/`),l=(a?E(c):c)||`/`;return o&&i&&i.set(o,l),l}function Me(e){let t=new Map(e.map(e=>[encodeURIComponent(e),e])),n=Array.from(t.keys()).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)).join(`|`),r=new RegExp(n,`g`);return e=>e.replace(r,e=>t.get(e)??e)}function Ne(e,t,n){let r=t[e];return typeof r==`string`?e===`_splat`?/^[a-zA-Z0-9\-._~!/]*$/.test(r)?r:r.split(`/`).map(e=>Fe(e,n)).join(`/`):Fe(r,n):r}function Pe({path:e,params:t,decoder:n,...r}){let i=!1,a=Object.create(null);if(!e||e===`/`)return{interpolatedPath:`/`,usedParams:a,isMissingParams:i};if(!e.includes(`$`))return{interpolatedPath:e,usedParams:a,isMissingParams:i};let o=e.length,s=0,c,l=``;for(;s<o;){let r=s;c=le(e,r,c);let o=c[5];if(s=o+1,r===o)continue;let u=c[0];if(u===0){l+=`/`+e.substring(r,o);continue}if(u===2){let s=t._splat;a._splat=s,a[`*`]=s;let u=e.substring(r,c[1]),d=e.substring(c[4],o);if(!s){i=!0,(u||d)&&(l+=`/`+u+d);continue}let f=Ne(`_splat`,t,n);l+=`/`+u+f+d;continue}if(u===1){let s=e.substring(c[2],c[3]);!i&&!(s in t)&&(i=!0),a[s]=t[s];let u=e.substring(r,c[1]),d=e.substring(c[4],o),f=Ne(s,t,n)??`undefined`;l+=`/`+u+f+d;continue}if(u===3){let i=e.substring(c[2],c[3]),s=t[i];if(s==null)continue;a[i]=s;let u=e.substring(r,c[1]),d=e.substring(c[4],o),f=Ne(i,t,n)??``;l+=`/`+u+f+d;continue}}return e.endsWith(`/`)&&(l+=`/`),{usedParams:a,interpolatedPath:l||`/`,isMissingParams:i}}function Fe(e,t){let n=encodeURIComponent(e);return t?.(n)??n}var Ie=`__root__`;function Le(e){if(e.statusCode=e.statusCode||e.code||307,!e.reloadDocument&&typeof e.href==`string`)try{new URL(e.href),e.reloadDocument=!0}catch{}let t=new Headers(e.headers);e.href&&t.get(`Location`)===null&&t.set(`Location`,e.href);let n=new Response(null,{status:e.statusCode,headers:t});if(n.options=e,e.throw)throw n;return n}function Re(e){return e instanceof Response&&!!e.options}function ze(e){if(typeof e==`object`&&e&&e.isSerializedRedirect)return Le(e)}var Be=`Error preloading route! ☝️`,Ve=class{get to(){return this._to}get id(){return this._id}get path(){return this._path}get fullPath(){return this._fullPath}constructor(e){if(this.init=e=>{this.originalIndex=e.originalIndex;let t=this.options,n=!t?.path&&!t?.id;this.parentRoute=this.options.getParentRoute?.(),n?this._path=Ie:this.parentRoute||oe();let r=n?Ie:t?.path;r&&r!==`/`&&(r=De(r));let i=t?.id||r,a=n?Ie:Ee([this.parentRoute.id===`__root__`?``:this.parentRoute.id,i]);r===`__root__`&&(r=`/`),a!==`__root__`&&(a=Ee([`/`,a]));let o=a===`__root__`?`/`:Ee([this.parentRoute.fullPath,r]);this._path=r,this._id=a,this._fullPath=o,this._to=D(o)},this.addChildren=e=>this._addFileChildren(e),this._addFileChildren=e=>(Array.isArray(e)&&(this.children=e),typeof e==`object`&&e&&(this.children=Object.values(e)),this),this._addFileTypes=()=>this,this.updateLoader=e=>(Object.assign(this.options,e),this),this.update=e=>(Object.assign(this.options,e),this),this.lazy=e=>(this.lazyFn=e,this),this.redirect=e=>Le({from:this.fullPath,...e}),this.options=e||{},this.isRoot=!e?.getParentRoute,e?.id&&e?.path)throw Error(`Route cannot have both an 'id' and a 'path' option.`)}},He=class extends Ve{constructor(e){super(e)}},O=t(n(),1),Ue=O.use,We=O.useLayoutEffect;function Ge(e,t,n){O.useEffect(()=>{if(!e.current||n||typeof IntersectionObserver!=`function`)return()=>t();let r=new IntersectionObserver(e=>{t(e.pop())},{rootMargin:`100px`});return r.observe(e.current),()=>{r.disconnect(),t()}},[t,n,e])}function Ke(e){let t=O.useRef(null);return O.useImperativeHandle(e,()=>t.current,[]),t}var qe=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Je=e(((e,t)=>{t.exports=qe()})),Ye=Je();function Xe({children:e,fallback:t=null}){return(0,Ye.jsx)(O.Fragment,{children:Ze()?e:t})}function Ze(){return O.useSyncExternalStore(Qe,()=>!0,()=>!1)}function Qe(){return()=>{}}var $e=O.createContext(null);function et(e){return O.useContext($e)}var tt=O.createContext(void 0),nt=O.createContext(void 0),rt=e((e=>{var t=n();function r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var i=typeof Object.is==`function`?Object.is:r,a=t.useState,o=t.useEffect,s=t.useLayoutEffect,c=t.useDebugValue;function l(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),i=r[0].inst,l=r[1];return s(function(){i.value=n,i.getSnapshot=t,u(i)&&l({inst:i})},[e,n,t]),o(function(){return u(i)&&l({inst:i}),e(function(){u(i)&&l({inst:i})})},[e]),c(n),n}function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch{return!0}}function d(e,t){return t()}var f=typeof window>`u`||window.document===void 0||window.document.createElement===void 0?d:l;e.useSyncExternalStore=t.useSyncExternalStore===void 0?f:t.useSyncExternalStore})),it=e(((e,t)=>{t.exports=rt()})),at=e((e=>{var t=n(),r=it();function i(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var a=typeof Object.is==`function`?Object.is:i,o=r.useSyncExternalStore,s=t.useRef,c=t.useEffect,l=t.useMemo,u=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var d=s(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=l(function(){function e(e){if(!o){if(o=!0,s=e,e=r(e),i!==void 0&&f.hasValue){var t=f.value;if(i(t,e))return c=t}return c=e}if(t=c,a(s,e))return t;var n=r(e);return i!==void 0&&i(t,n)?(s=e,t):(s=e,c=n)}var o=!1,s,c,l=n===void 0?null:n;return[function(){return e(t())},l===null?void 0:function(){return e(l())}]},[t,n,r,i]);var p=o(e,d[0],d[1]);return c(function(){f.hasValue=!0,f.value=p},[p]),u(p),p}})),ot=e(((e,t)=>{t.exports=at()}))();function st(e,t){return e===t}function ct(e,t,n=st){let r=(0,O.useCallback)(t=>{if(!e)return()=>{};let{unsubscribe:n}=e.subscribe(t);return n},[e]),i=(0,O.useCallback)(()=>e?.get(),[e]);return(0,ot.useSyncExternalStoreWithSelector)(r,i,i,t,n)}var lt={};function ut(e,t){let n=O.useRef();return r=>{let i=e?.select?e.select(r):r;return e?.structuralSharing??t.options.defaultStructuralSharing?n.current=u(n.current,i):i}}function k(e){let t=et(),n=O.useContext(e.from?nt:tt),r=e.from??n,i=t.stores.getMatchStore(r),a=ut(e,t),o=ct(i,e=>e?a(e):lt);if(o!==lt)return o;(e.shouldThrow??!0)&&oe()}function dt(e){return k({from:e.from,strict:e.strict,structuralSharing:e.structuralSharing,select:t=>e.select?e.select(t.loaderData):t.loaderData})}function ft(e){let{select:t,...n}=e;return k({...n,select:e=>t?t(e.loaderDeps):e.loaderDeps})}function pt(e){return k({from:e.from,shouldThrow:e.shouldThrow,structuralSharing:e.structuralSharing,strict:e.strict,select:t=>{let n=e.strict===!1?t.params:t._strictParams;return e.select?e.select(n):n}})}function mt(e){return k({from:e.from,strict:e.strict,shouldThrow:e.shouldThrow,structuralSharing:e.structuralSharing,select:t=>e.select?e.select(t.search):t.search})}function ht(e){let t=et();return O.useCallback(n=>t.navigate({...n,from:n.from??e?.from}),[e?.from,t])}function gt(e){return k({...e,select:t=>e.select?e.select(t.context):t.context})}function _t(e){let t=O.useRef(e);return h(t.current,e,{ignoreUndefined:!1})||(t.current=e),t.current}function vt(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function yt(e,t,n){if(e?.external)return x(e.href,n)?void 0:e.href;if(!kt(t)&&typeof t==`string`&&t.indexOf(`:`)!==-1)try{return new URL(t),x(t,n)?void 0:t}catch{}}function bt(e,t,n,r,i,a){if(a)return!1;if(n?.exact){if(!Ae(e.pathname,t.pathname,r))return!1}else{let n=ke(e.pathname,r),i=ke(t.pathname,r);if(!(n.startsWith(i)&&(n.length===i.length||n[i.length]===`/`)))return!1}return(n?.includeSearch??!0)&&!h(e.search,t.search,{partial:!n?.exact,ignoreUndefined:!n?.explicitUndefined})?!1:!n?.includeHash||i&&e.hash===t.hash}function xt(e,t){let n=et(),r=Ke(t),{activeProps:a,inactiveProps:o,activeOptions:s,to:c,preload:l,preloadDelay:u,preloadIntentProximity:d,hashScrollIntoView:f,replace:p,startTransition:m,resetScroll:h,viewTransition:g,children:_,target:v,disabled:y,style:b,className:x,onClick:ee,onBlur:te,onFocus:ne,onMouseEnter:re,onMouseLeave:ie,onTouchStart:ae,ignoreBlocker:oe,params:se,search:S,hash:ce,state:le,mask:ue,reloadDocument:de,unsafeRelative:C,from:fe,_fromLocation:pe,...me}=e,he=Ze(),ge=_t(e.search),_e=_t(e.params),ve=_t(s),w=O.useMemo(()=>e,[n,e.from,e._fromLocation,e.hash,e.to,ge,_e,e.state,e.mask,e.unsafeRelative]),ye=O.useCallback(e=>{let t=n.buildLocation({_fromLocation:e,...w}),r=Ot(t.maskedLocation?t.maskedLocation.publicHref:t.publicHref,t.maskedLocation?t.maskedLocation.external:t.external,n.history,y),i=yt(r,c,n.protocolAllowlist);return[r?.href,i,bt(e,t,ve,n.basepath,he,i!==void 0)]},[ve,y,he,w,n,c]),[be,xe,Se]=ct(n.stores.location,ye,vt),T=Se?i(a,{})??Ct:St,Ce=Se?St:i(o,{})??St,we=[x,T.className,Ce.className].filter(Boolean).join(` `),Te=(b||T.style||Ce.style)&&{...b,...T.style,...Ce.style},Ee=O.useRef(!1),E=e.reloadDocument||xe||y?!1:l??n.options.defaultPreload,De=u??n.options.defaultPreloadDelay??0,D=O.useCallback(()=>{n.preloadRoute(w).catch(e=>{console.warn(e),console.warn(Be)})},[n,w]),Oe=O.useCallback(e=>{if(!e){Dt(r);return}if(!(e.isIntersecting??E===`intent`)){e.isIntersecting===!1&&Dt(r);return}if(!De){D();return}Et.has(r)||Et.set(r,setTimeout(()=>{Et.delete(r),D()},De))},[D,r,E,De]);Ge(r,Oe,E!==`viewport`),O.useEffect(()=>{Ee.current||E===`render`&&(D(),Ee.current=!0)},[D,E]);let ke=e=>{let t=e.currentTarget.getAttribute(`target`),r=v===void 0?t:v;!y&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(!r||r===`_self`)&&e.button===0&&(e.preventDefault(),n.navigate({...w,replace:p,resetScroll:h,hashScrollIntoView:f,startTransition:m,viewTransition:g,ignoreBlocker:oe}))};if(xe)return{...me,ref:r,href:xe,..._&&{children:_},...v&&{target:v},...y&&{disabled:y},...b&&{style:b},...x&&{className:x},...ee&&{onClick:ee},...te&&{onBlur:te},...ne&&{onFocus:ne},...re&&{onMouseEnter:re},...ie&&{onMouseLeave:ie},...ae&&{onTouchStart:ae}};let Ae=()=>{E===`intent`&&D()},je=()=>{E===`intent`&&Dt(r)};return{...me,...T,...Ce,href:be,ref:r,onClick:A([ee,ke]),onBlur:A([te,je]),onFocus:A([ne,Oe]),onMouseEnter:A([re,Oe]),onMouseLeave:A([ie,je]),onTouchStart:A([ae,Ae]),disabled:!!y,target:v,...Te&&{style:Te},...we&&{className:we},...y&&wt,...Se&&Tt}}var St={},Ct={className:`active`},wt={role:`link`,"aria-disabled":!0},Tt={"data-status":`active`,"aria-current":`page`},Et=new WeakMap,Dt=e=>{clearTimeout(Et.get(e)),Et.delete(e)},A=e=>t=>{for(let n of e)if(n){if(t.defaultPrevented)return;n(t)}};function Ot(e,t,n,r){if(!r)return t?{href:e,external:!0}:{href:n.createHref(e)||`/`,external:!1}}function kt(e){if(typeof e!=`string`)return!1;let t=e.charCodeAt(0);return t===47?e.charCodeAt(1)!==47:t===46}var At=O.forwardRef((e,t)=>{let{_asChild:n,...r}=e,{type:i,...a}=xt(r,t),o=typeof r.children==`function`?r.children({isActive:a[`data-status`]===`active`}):r.children;if(!n){let{disabled:e,...t}=a;return O.createElement(`a`,t,o)}return O.createElement(n,a,o)}),jt=class extends Ve{constructor(e){super(e),this.useMatch=e=>k({select:e?.select,from:this.id,structuralSharing:e?.structuralSharing}),this.useRouteContext=e=>gt({...e,from:this.id}),this.useSearch=e=>mt({select:e?.select,structuralSharing:e?.structuralSharing,from:this.id}),this.useParams=e=>pt({select:e?.select,structuralSharing:e?.structuralSharing,from:this.id}),this.useLoaderDeps=e=>ft({...e,from:this.id}),this.useLoaderData=e=>dt({...e,from:this.id}),this.useNavigate=()=>ht({from:this.fullPath}),this.Link=O.forwardRef((e,t)=>(0,Ye.jsx)(At,{ref:t,from:this.fullPath,...e}))}};function Mt(e){return new jt(e)}var Nt=class extends He{constructor(e){super(e),this.useMatch=e=>k({select:e?.select,from:this.id,structuralSharing:e?.structuralSharing}),this.useRouteContext=e=>gt({...e,from:this.id}),this.useSearch=e=>mt({select:e?.select,structuralSharing:e?.structuralSharing,from:this.id}),this.useParams=e=>pt({select:e?.select,structuralSharing:e?.structuralSharing,from:this.id}),this.useLoaderDeps=e=>ft({...e,from:this.id}),this.useLoaderData=e=>dt({...e,from:this.id}),this.useNavigate=()=>ht({from:this.fullPath}),this.Link=O.forwardRef((e,t)=>(0,Ye.jsx)(At,{ref:t,from:this.fullPath,...e}))}};function Pt(e){return new Nt(e)}function Ft(e){return e=>{let t=Mt(e);return t.isRoot=!1,t}}function It(e,t){let n,r,i,a=()=>(n||=(i=void 0,e().then(e=>{n=void 0,o.preload=void 0,r=e[t??`default`]}).catch(e=>{n=void 0,i=e})),n),o=function(e){if(i){if(g(i)&&typeof sessionStorage<`u`){let e=`tanstack_router_reload:${i.message}`;if(!sessionStorage.getItem(e))throw sessionStorage.setItem(e,`1`),window.location.reload(),new Promise(()=>{})}throw i}if(!r){if(Ue)Ue(a());else throw a()}return O.createElement(r,e)};return o.preload=a,o}function Lt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Rt(e){if(Array.isArray(e))return e}function zt(e){if(Array.isArray(e))return Lt(e)}function Bt(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Vt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,Zt(r.key),r)}}function Ht(e,t,n){return t&&Vt(e.prototype,t),n&&Vt(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ut(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=$t(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function j(e,t,n){return(t=Zt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wt(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Gt(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Kt(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qt(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Jt(Object(n),!0).forEach(function(t){j(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Yt(e,t){return Rt(e)||Gt(e,t)||$t(e,t)||Kt()}function N(e){return zt(e)||Wt(e)||$t(e)||qt()}function Xt(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Zt(e){var t=Xt(e,`string`);return typeof t==`symbol`?t:t+``}function Qt(e){"@babel/helpers - typeof";return Qt=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Qt(e)}function $t(e,t){if(e){if(typeof e==`string`)return Lt(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Lt(e,t):void 0}}var en=function(){},tn={},nn={},rn=null,an={mark:en,measure:en};try{typeof window<`u`&&(tn=window),typeof document<`u`&&(nn=document),typeof MutationObserver<`u`&&(rn=MutationObserver),typeof performance<`u`&&(an=performance)}catch{}var on=(tn.navigator||{}).userAgent,sn=on===void 0?``:on,P=tn,F=nn,cn=rn,ln=an;P.document;var I=!!F.documentElement&&!!F.head&&typeof F.addEventListener==`function`&&typeof F.createElement==`function`,un=~sn.indexOf(`MSIE`)||~sn.indexOf(`Trident/`),dn,fn=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,pn=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,mn={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},hn={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},gn=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],L=`classic`,_n=`duotone`,vn=`sharp`,yn=`sharp-duotone`,bn=`chisel`,xn=`etch`,Sn=`graphite`,Cn=`jelly`,wn=`jelly-duo`,Tn=`jelly-fill`,En=`mosaic`,Dn=`notdog`,On=`notdog-duo`,kn=`pixel`,An=`slab`,jn=`slab-duo`,Mn=`slab-press`,Nn=`slab-press-duo`,Pn=`thumbprint`,Fn=`utility`,In=`utility-duo`,Ln=`utility-fill`,Rn=`vellum`,zn=`whiteboard`,Bn=`Classic`,Vn=`Duotone`,Hn=`Sharp`,Un=`Sharp Duotone`,Wn=`Chisel`,Gn=`Etch`,Kn=`Graphite`,qn=`Jelly`,Jn=`Jelly Duo`,Yn=`Jelly Fill`,Xn=`Mosaic`,Zn=`Notdog`,Qn=`Notdog Duo`,$n=`Pixel`,er=`Slab`,tr=`Slab Duo`,nr=`Slab Press`,rr=`Slab Press Duo`,ir=`Thumbprint`,ar=`Utility`,or=`Utility Duo`,sr=`Utility Fill`,cr=`Vellum`,lr=`Whiteboard`,ur=[L,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn];dn={},j(j(j(j(j(j(j(j(j(j(dn,L,Bn),_n,Vn),vn,Hn),yn,Un),bn,Wn),xn,Gn),Sn,Kn),Cn,qn),wn,Jn),Tn,Yn),j(j(j(j(j(j(j(j(j(j(dn,En,Xn),Dn,Zn),On,Qn),kn,$n),An,er),jn,tr),Mn,nr),Nn,rr),Pn,ir),Fn,ar),j(j(j(j(dn,In,or),Ln,sr),Rn,cr),zn,lr);var dr={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},fr={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},pr=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),mr={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},hr=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],gr={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},_r=[`kit`];j(j({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var vr={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},yr={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},br={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},xr={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},Sr,Cr={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},wr=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];Sr={},j(j(j(j(j(j(j(j(j(j(Sr,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),j(j(j(j(j(j(j(j(j(j(Sr,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),j(j(j(j(Sr,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),j(j({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Tr={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},Er={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},Dr={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},Or=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(wr,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),kr=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],Ar=[1,2,3,4,5,6,7,8,9,10],jr=Ar.concat([11,12,13,14,15,16,17,18,19,20]),Mr=[].concat(N(Object.keys(Er)),kr,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,Cr.GROUP,Cr.SWAP_OPACITY,Cr.PRIMARY,Cr.SECONDARY],Ar.map(function(e){return`${e}x`}),jr.map(function(e){return`w-${e}`})),Nr={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},R=`___FONT_AWESOME___`,Pr=16,Fr=`fa`,Ir=`svg-inline--fa`,z=`data-fa-i2svg`,Lr=`data-fa-pseudo-element`,Rr=`data-fa-pseudo-element-pending`,zr=`data-prefix`,Br=`data-icon`,Vr=`fontawesome-i2svg`,Hr=`async`,Ur=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Wr=[`::before`,`::after`,`:before`,`:after`],Gr=function(){try{return!0}catch{return!1}}();function Kr(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[L]}})}var qr=M({},mn);qr[L]=M(M(M(M({},{"fa-duotone":`duotone`}),mn[L]),gr.kit),gr[`kit-duotone`]);var Jr=Kr(qr),Yr=M({},mr);Yr[L]=M(M(M(M({},{duotone:`fad`}),Yr[L]),xr.kit),xr[`kit-duotone`]);var Xr=Kr(Yr),Zr=M({},Dr);Zr[L]=M(M({},Zr[L]),br.kit);var Qr=Kr(Zr),$r=M({},Tr);$r[L]=M(M({},$r[L]),vr.kit),Kr($r);var ei=fn,ti=`fa-layers-text`,ni=pn;Kr(M({},dr));var ri=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],ii=hn,ai=[].concat(N(_r),N(Mr)),oi=P.FontAwesomeConfig||{};function si(e){var t=F.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function ci(e){return e===``?!0:e===`false`?!1:e===`true`||e}F&&typeof F.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=Yt(e,2),n=t[0],r=t[1],i=ci(si(n));i!=null&&(oi[r]=i)});var li={styleDefault:`solid`,familyDefault:L,cssPrefix:Fr,replacementClass:Ir,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};oi.familyPrefix&&(oi.cssPrefix=oi.familyPrefix);var B=M(M({},li),oi);B.autoReplaceSvg||(B.observeMutations=!1);var V={};Object.keys(li).forEach(function(e){Object.defineProperty(V,e,{enumerable:!0,set:function(t){B[e]=t,ui.forEach(function(e){return e(V)})},get:function(){return B[e]}})}),Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:function(e){B.cssPrefix=e,ui.forEach(function(e){return e(V)})},get:function(){return B.cssPrefix}}),P.FontAwesomeConfig=V;var ui=[];function di(e){return ui.push(e),function(){ui.splice(ui.indexOf(e),1)}}var H=Pr,U={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fi(e){if(!(!e||!I)){var t=F.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=F.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return F.head.insertBefore(t,r),e}}var pi=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function mi(){for(var e=12,t=``;e-->0;)t+=pi[Math.random()*62|0];return t}function W(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function hi(e){return e.classList?W(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function gi(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function _i(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${gi(e[n])}" `},``).trim()}function vi(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function yi(e){return e.size!==U.size||e.x!==U.x||e.y!==U.y||e.rotate!==U.rotate||e.flipX||e.flipY}function bi(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function xi(e){var t=e.transform,n=e.width,r=n===void 0?Pr:n,i=e.height,a=i===void 0?Pr:i,o=e.startCentered,s=o!==void 0&&o,c=``;return c+=s&&un?`translate(${t.x/H-r/2}em, ${t.y/H-a/2}em) `:s?`translate(calc(-50% + ${t.x/H}em), calc(-50% + ${t.y/H}em)) `:`translate(${t.x/H}em, ${t.y/H}em) `,c+=`scale(${t.size/H*(t.flipX?-1:1)}, ${t.size/H*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var Si=`:root, :host {
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
}`;function Ci(){var e=Fr,t=Ir,n=V.cssPrefix,r=V.replacementClass,i=Si;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var wi=!1;function Ti(){V.autoAddCss&&!wi&&(fi(Ci()),wi=!0)}var Ei={mixout:function(){return{dom:{css:Ci,insertCss:Ti}}},hooks:function(){return{beforeDOMElementCreation:function(){Ti()},beforeI2svg:function(){Ti()}}}},G=P||{};G[R]||(G[R]={}),G[R].styles||(G[R].styles={}),G[R].hooks||(G[R].hooks={}),G[R].shims||(G[R].shims=[]);var K=G[R],Di=[],Oi=function(){F.removeEventListener(`DOMContentLoaded`,Oi),ki=1,Di.map(function(e){return e()})},ki=!1;I&&(ki=(F.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(F.readyState),ki||F.addEventListener(`DOMContentLoaded`,Oi));function Ai(e){I&&(ki?setTimeout(e,0):Di.push(e))}function ji(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?gi(e):`<${t} ${_i(r)}>${a.map(ji).join(``)}</${t}>`}function Mi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ni=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Pi=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Ni(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Fi(e){return N(e).length===1?e.codePointAt(0).toString(16):null}function Ii(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Li(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=Ii(t);typeof K.hooks.addPack==`function`&&!r?K.hooks.addPack(e,Ii(t)):K.styles[e]=M(M({},K.styles[e]||{}),i),e===`fas`&&Li(`fa`,t)}var Ri=K.styles,zi=K.shims,Bi=Object.keys(Qr),Vi=Bi.reduce(function(e,t){return e[t]=Object.keys(Qr[t]),e},{}),Hi=null,Ui={},Wi={},Gi={},Ki={},qi={};function Ji(e){return~ai.indexOf(e)}function Yi(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Ji(i)?i:null}var Xi=function(){var e=function(e){return Pi(Ri,function(t,n,r){return t[r]=Pi(n,e,{}),t},{})};Ui=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Wi=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),qi=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in Ri||V.autoFetchSvg,n=Pi(zi,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Gi=n.names,Ki=n.unicodes,Hi=ra(V.styleDefault,{family:V.familyDefault})};di(function(e){Hi=ra(e.styleDefault,{family:V.familyDefault})}),Xi();function Zi(e,t){return(Ui[e]||{})[t]}function Qi(e,t){return(Wi[e]||{})[t]}function q(e,t){return(qi[e]||{})[t]}function $i(e){return Gi[e]||{prefix:null,iconName:null}}function ea(e){var t=Ki[e],n=Zi(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function J(){return Hi}var ta=function(){return{prefix:null,iconName:null,rest:[]}};function na(e){var t=L,n=Bi.reduce(function(e,t){return e[t]=`${V.cssPrefix}-${t}`,e},{});return ur.forEach(function(r){(e.includes(n[r])||e.some(function(e){return Vi[r].includes(e)}))&&(t=r)}),t}function ra(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?L:t,r=Jr[n][e];if(n===_n&&!e)return`fad`;var i=Xr[n][e]||Xr[n][r],a=e in K.styles?e:null;return i||a||null}function ia(e){var t=[],n=null;return e.forEach(function(e){var r=Yi(V.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function aa(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var oa=Or.concat(hr);function sa(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=aa(e.filter(function(e){return oa.includes(e)})),a=aa(e.filter(function(e){return!oa.includes(e)})),o=Yt(i.filter(function(e){return r=e,!gn.includes(e)}),1)[0],s=o===void 0?null:o,c=na(i),l=M(M({},ia(a)),{},{prefix:ra(s,{family:c})});return M(M(M({},l),da({values:e,family:c,styles:Ri,config:V,canonical:l,givenPrefix:r})),ca(n,r,l))}function ca(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?$i(i):{},o=q(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!Ri.far&&Ri.fas&&!V.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var la=ur.filter(function(e){return e!==L||e!==_n}),ua=Object.keys(Dr).filter(function(e){return e!==L}).map(function(e){return Object.keys(Dr[e])}).flat();function da(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===_n,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&la.includes(n)&&(Object.keys(s).find(function(e){return ua.includes(e)})||l.autoFetchSvg)&&(r.prefix=pr.get(n).defaultShortPrefixId,r.iconName=q(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=J()||`fas`),r}var fa=function(){function e(){Bt(this,e),this.definitions={}}return Ht(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=M(M({},e.definitions[n]||{}),t[n]),Li(n,t[n]);var r=Qr[L][n];r&&Li(r,t[n]),Xi()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),pa=[],Y={},X={},ma=Object.keys(X);function ha(e,t){var n=t.mixoutsTo;return pa=e,Y={},Object.keys(X).forEach(function(e){ma.indexOf(e)===-1&&delete X[e]}),pa.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),Qt(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){Y[e]||(Y[e]=[]),Y[e].push(r[e])})}e.provides&&e.provides(X)}),n}function ga(e,t){var n=[...arguments].slice(2);return(Y[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function Z(e){var t=[...arguments].slice(1);(Y[e]||[]).forEach(function(e){e.apply(null,t)})}function Q(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return X[e]?X[e].apply(null,t):void 0}function _a(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||J();if(t)return t=q(n,t)||t,Mi(va.definitions,n,t)||Mi(K.styles,n,t)}var va=new fa,$={noAuto:function(){V.autoReplaceSvg=!1,V.observeMutations=!1,Z(`noAuto`)},config:V,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return I?(Z(`beforeI2svg`,e),Q(`pseudoElements2svg`,e),Q(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,Ai(function(){ya({autoReplaceSvgRoot:t}),Z(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(Qt(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:q(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=ra(e[0]);return{prefix:n,iconName:q(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${V.cssPrefix}-`)>-1||e.match(ei))){var r=sa(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||J(),iconName:q(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=J();return{prefix:i,iconName:q(i,e)||e}}}},library:va,findIconDefinition:_a,toHtml:ji},ya=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?F:e;(Object.keys(K.styles).length>0||V.autoFetchSvg)&&I&&V.autoReplaceSvg&&$.dom.i2svg({node:t})};function ba(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return ji(e)})}}),Object.defineProperty(e,"node",{get:function(){if(I){var t=F.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function xa(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(yi(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=vi(M(M({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Sa(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${V.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:M(M({},i),{},{id:o}),children:r}]}]}function Ca(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function wa(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[V.replacementClass,a?`${V.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:M(M({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!Ca(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[z]=``);var _=M(M({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:M({},l.styles)}),v=r.found&&n.found?Q(`generateAbstractMask`,_)||{children:[],attributes:{}}:Q(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?Sa(_):xa(_)}function Ta(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=M(M({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[z]=``);var l=M({},a.styles);yi(i)&&(l.transform=xi({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=vi(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Ea(e){var t=e.content,n=e.extra,r=M(M({},n.attributes),{},{class:n.classes.join(` `)}),i=vi(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var Da=K.styles;function Oa(e){var t=e[0],n=e[1],r=Yt(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${V.cssPrefix}-${ii.GROUP}`},children:[{tag:`path`,attributes:{class:`${V.cssPrefix}-${ii.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${V.cssPrefix}-${ii.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var ka={found:!1,width:512,height:512};function Aa(e,t){!Gr&&!V.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function ja(e,t){var n=t;return t===`fa`&&V.styleDefault!==null&&(t=J()),new Promise(function(r,i){if(n===`fa`){var a=$i(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Da[t]&&Da[t][e]){var o=Da[t][e];return r(Oa(o))}Aa(e,t),r(M(M({},ka),{},{icon:V.showMissingIcons&&e&&Q(`missingIconAbstract`)||{}}))})}var Ma=function(){},Na=V.measurePerformance&&ln&&ln.mark&&ln.measure?ln:{mark:Ma,measure:Ma},Pa=`FA "7.3.1"`,Fa=function(e){return Na.mark(`${Pa} ${e} begins`),function(){return Ia(e)}},Ia=function(e){Na.mark(`${Pa} ${e} ends`),Na.measure(`${Pa} ${e}`,`${Pa} ${e} begins`,`${Pa} ${e} ends`)},La={begin:Fa,end:Ia},Ra=function(){};function za(e){return typeof(e.getAttribute?e.getAttribute(z):null)==`string`}function Ba(e){var t=e.getAttribute?e.getAttribute(zr):null,n=e.getAttribute?e.getAttribute(Br):null;return t&&n}function Va(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(V.replacementClass)}function Ha(){return V.autoReplaceSvg===!0?qa.replace:qa[V.autoReplaceSvg]||qa.replace}function Ua(e){return F.createElementNS(`http://www.w3.org/2000/svg`,e)}function Wa(e){return F.createElement(e)}function Ga(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Ua:Wa:t;if(typeof e==`string`)return F.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Ga(e,{ceFn:n}))}),r}function Ka(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var qa={replace:function(e){var t=e[0];if(t.parentNode){if(e[1].forEach(function(e){t.parentNode.insertBefore(Ga(e),t)}),t.getAttribute(z)===null&&V.keepOriginalSource){var n=F.createComment(Ka(t));t.parentNode.replaceChild(n,t)}else t.remove()}},nest:function(e){var t=e[0],n=e[1];if(~hi(t).indexOf(V.replacementClass))return qa.replace(e);var r=RegExp(`${V.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===V.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return ji(e)}).join(`
`);t.setAttribute(z,``),t.innerHTML=a}};function Ja(e){e()}function Ya(e,t){var n=typeof t==`function`?t:Ra;if(e.length===0)n();else{var r=Ja;V.mutateApproach===Hr&&(r=P.requestAnimationFrame||Ja),r(function(){var t=Ha(),r=La.begin(`mutate`);e.map(t),r(),n()})}}var Xa=!1;function Za(){Xa=!0}function Qa(){Xa=!1}var $a=null;function eo(e){if(cn&&V.observeMutations){var t=e.treeCallback,n=t===void 0?Ra:t,r=e.nodeCallback,i=r===void 0?Ra:r,a=e.pseudoElementsCallback,o=a===void 0?Ra:a,s=e.observeMutationsRoot,c=s===void 0?F:s;$a=new cn(function(e){if(!Xa){var t=J();W(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!za(e.addedNodes[0])&&(V.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&V.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&za(e.target)&&~ri.indexOf(e.attributeName)){if(e.attributeName===`class`&&Ba(e.target)){var r=sa(hi(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(zr,a||t),s&&e.target.setAttribute(Br,s)}else Va(e.target)&&i(e.target)}})}}),I&&$a.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function to(){$a&&$a.disconnect()}function no(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function ro(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=sa(hi(e));return i.prefix||=J(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Qi(i.prefix,e.innerText)||Zi(i.prefix,Fi(e.innerText))),!i.iconName&&V.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function io(e){return W(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function ao(){return{iconName:null,prefix:null,transform:U,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function oo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ro(e),r=n.iconName,i=n.prefix,a=n.rest,o=io(e),s=ga(`parseNodeAttributes`,{},e);return M({iconName:r,prefix:i,transform:U,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?no(e):[],attributes:o}},s)}var so=K.styles;function co(e){var t=V.autoReplaceSvg===`nest`?oo(e,{styleParser:!1}):oo(e);return~t.extra.classes.indexOf(ti)?Q(`generateLayersText`,e,t):Q(`generateSvgReplacementMutation`,e,t)}function lo(){return[].concat(N(hr),N(Or))}function uo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!I)return Promise.resolve();var n=F.documentElement.classList,r=function(e){return n.add(`${Vr}-${e}`)},i=function(e){return n.remove(`${Vr}-${e}`)},a=V.autoFetchSvg?lo():gn.concat(Object.keys(so));a.includes(`fa`)||a.push(`fa`);var o=[`.${ti}:not([${z}])`].concat(a.map(function(e){return`.${e}:not([${z}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=W(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=La.begin(`onTree`),l=s.reduce(function(e,t){try{var n=co(t);n&&e.push(n)}catch(e){Gr||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){Ya(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function fo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;co(e).then(function(e){e&&Ya([e],t)})}function po(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:_a(t||{}),i=n.mask;return i&&=(i||{}).icon?i:_a(i||{}),e(r,M(M({},n),{},{mask:i}))}}var mo=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?U:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return ba(M({type:`icon`},e),function(){return Z(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),wa({icons:{main:Oa(v),mask:s?Oa(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:M(M({},U),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},ho={mixout:function(){return{icon:po(mo)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=uo,e.nodeCallback=fo,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?F:t,r=e.callback;return uo(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([ja(n,r),o.iconName?ja(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=Yt(o,2),u=l[0],d=l[1];t([e,wa({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=vi(a);o.length>0&&(n.style=o);var s;return yi(i)&&(s=Q(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},go={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return ba({type:`layer`},function(){Z(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${V.cssPrefix}-layers`].concat(N(r)).join(` `)},children:n}]})}}}},_o={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return ba({type:`counter`,content:e},function(){return Z(`beforeDOMElementCreation`,{content:e,params:t}),Ea({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${V.cssPrefix}-layers-counter`].concat(N(a))}})})}}}},vo={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?U:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return ba({type:`text`,content:e},function(){return Z(`beforeDOMElementCreation`,{content:e,params:t}),Ta({content:e,transform:M(M({},U),r),extra:{attributes:s,styles:l,classes:[`${V.cssPrefix}-layers-text`].concat(N(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(un){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Ta({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},yo=RegExp(`"`,`ug`),bo=[1105920,1112319],xo=M(M(M(M({},{FontAwesome:{normal:`fas`,400:`fas`}}),fr),Nr),yr),So=Object.keys(xo).reduce(function(e,t){return e[t.toLowerCase()]=xo[t],e},{}),Co=Object.keys(So).reduce(function(e,t){var n=So[t];return e[t]=n[900]||N(Object.entries(n))[0][1],e},{});function wo(e){return Fi(N(e.replace(yo,``))[0]||``)}function To(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(yo,``),r=n.codePointAt(0),i=r>=bo[0]&&r<=bo[1],a=n.length===2&&n[0]===n[1];return i||a||t}function Eo(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(So[n]||{})[i]||Co[n]}function Do(e,t){var n=`${Rr}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=W(e.children).filter(function(e){return e.getAttribute(Lr)===t})[0],o=P.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(ni),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Eo(s,l),p=wo(d),m=c[0].startsWith(`FontAwesome`),h=To(o),g=Zi(f,p),_=g;if(m){var v=ea(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(zr)!==f||a.getAttribute(Br)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=ao(),b=y.extra;b.attributes[Lr]=t,ja(g,f).then(function(i){var a=wa(M(M({},y),{},{icons:{main:i,mask:ta()},prefix:f,iconName:_,extra:b,watchable:!0})),o=F.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return ji(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Oo(e){return Promise.all([Do(e,`::before`),Do(e,`::after`)])}function ko(e){return e.parentNode!==document.head&&!~Ur.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Lr)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var Ao=function(e){return!!e&&Wr.some(function(t){return e.includes(t)})},jo=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=Ut(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(Ao(a)){var o=Wr.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function Mo(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(I){var n;if(t)n=e;else if(V.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=Ut(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=Ut(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=Ut(jo(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){V.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=W(n).filter(ko).map(Oo),i=La.begin(`searchPseudoElements`);Za(),Promise.all(r).then(function(){i(),Qa(),e()}).catch(function(){i(),Qa(),t()})})}}var No={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Mo,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?F:t;V.searchPseudoElements&&Mo(n)}}},Po=!1,Fo={mixout:function(){return{dom:{unwatch:function(){Za(),Po=!0}}}},hooks:function(){return{bootstrap:function(){eo(ga(`mutationObserverCallbacks`,{}))},noAuto:function(){to()},watch:function(e){var t=e.observeMutationsRoot;Po?Qa():eo(ga(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Io=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Lo={mixout:function(){return{parse:{transform:function(e){return Io(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Io(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:M({},a.outer),children:[{tag:`g`,attributes:M({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:M(M({},t.icon.attributes),a.path)}]}]}}}},Ro={x:0,y:0,width:`100%`,height:`100%`};function zo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Bo(e){return e.tag===`g`?e.children:[e]}ha([Ei,ho,go,_o,vo,No,Fo,Lo,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?sa(n.split(` `).map(function(e){return e.trim()})):ta();return r.prefix||=J(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=bi({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:M(M({},Ro),{},{fill:`white`})},p=c.children?{children:c.children.map(zo)}:{},m={tag:`g`,attributes:M({},d.inner),children:[zo(M({tag:c.tag,attributes:M(M({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:M({},d.outer),children:[m]},g=`mask-${a||mi()}`,_=`clip-${a||mi()}`,v={tag:`mask`,attributes:M(M({},Ro),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Bo(u)},v]};return t.push(y,{tag:`rect`,attributes:M({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Ro)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;P.matchMedia&&(t=P.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:M(M({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=M(M({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:M(M({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:M(M({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:M(M({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:M(M({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:M(M({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:M(M({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:M(M({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:$}),$.noAuto;var Vo=$.config;$.library,$.dom;var Ho=$.parse;$.findIconDefinition,$.toHtml;var Uo=$.icon;$.layer,$.text,$.counter;var Wo=`modulepreload`,Go=function(e){return`/`+e},Ko={},qo=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Go(t,n),t=s(t),t in Ko)return;Ko[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Wo,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Jo={groups:{la:{city:`Los Angeles`,name:`Twitch LA`,imagePath:`la.webp`,url:`https://meetups.twitch.tv/los-angeles`,links:{twitter:`TwitchLosAngele`,discord:`8E75rA5`,instagram:`twitch_LA`}},oc:{city:`Anaheim`,name:`OC Streamers`,imagePath:`oc.webp`,url:`https://udld.rocks/ocdiscord`,links:{twitter:`OCStreamers`,instagram:`ocstreamers`,discord:`a5SUFUK`}},sd:{city:`San Diego`,name:`Twitch SD`,imagePath:`sd.webp`,url:`https://meetups.twitch.tv/san-diego`,links:{twitch:`twitch_sandiego`,twitter:`TwitchSanDiego`,discord:`twitchsandiego`}}}};export{ge as A,ie as B,Pe as C,D,Oe as E,oe as F,r as G,i as H,b as I,l as K,ae as L,pe as M,ve as N,be as O,se as P,re as R,Me as S,je as T,s as U,ne as V,x as W,Ue as _,Ho as a,ze as b,Pt as c,tt as d,et as f,Je as g,Ze as h,Uo as i,he as j,me as k,At as l,Xe as m,qo as n,It as o,$e as p,u as q,Vo as r,Ft as s,Jo as t,ct as u,We as v,Ee as w,Ie as x,Re as y,h as z};