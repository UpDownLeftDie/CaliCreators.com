(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3niX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=u.cssRules();return u.flush(),e},t.default=void 0;var r,i=n("q1tI");function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=a(this,c(t).call(this,e))).prevProps={},n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,i.Component),n=t,o=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],n=e[1];return u.computeId(t,n)}).join(" ")}}],(r=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){u.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&u.remove(this.prevProps),u.add(this.props),this.prevProps=this.props),null}}])&&s(n.prototype,r),o&&s(n,o),t}();t.default=f},"8oxB":function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,l=[],u=!1,f=-1;function h(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&p())}function p(){if(!u){var e=a(h);u=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new d(e,t)),1!==l.length||u||a(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},MX0m:function(e,t,n){e.exports=n("3niX")},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("MX0m"),i=n.n(r),o=n("q1tI"),s=n.n(o),a=n("YFqc"),c=n.n(a),l=n("m/Pd"),u=n.n(l),f=s.a.createElement,h=[{href:"https://meetups.twitch.tv/los-angeles/",name:"Twitch LA"},{href:"https://www.meetup.com/ocstreamers",name:"OC Streamers"},{href:"https://meetups.twitch.tv/san-diego/",name:"Twitch SD"}],p=[{name:"Twitch LA",path:"la.jpg"},{name:"OC Streamers",path:"oc.jpg"},{name:"Twitch SD",path:"sd.jpg"}],d=function(e){var t=h.find(function(t){return t.name.toLowerCase()===e.name.toLowerCase()}),n=p.find(function(t){return t.name.toLowerCase()===e.name.toLowerCase()});t||(t={href:"https://meetups.twitch.tv/",name:"Twitch Meetups"});var r="";n&&(r="background-image: url('/static/".concat(n.path,"');"));return f(s.a.Fragment,null,f(c.a,{href:t.href,name:t.name},f("a",{className:i.a.dynamic([["1521352367",[r]]])+" card"},f("h3",{className:i.a.dynamic([["1521352367",[r]]])},t.name),f("h4",{className:i.a.dynamic([["1521352367",[r]]])},"Next Event"),f("p",{className:i.a.dynamic([["1521352367",[r]]])},"TBD"))),f(i.a,{id:"1521352367",dynamic:[r]},[".card.__jsx-style-dynamic-selector{padding:18px;width:180px;height:300px;color:#fff;text-align:left;-webkit-text-decoration:none;text-decoration:none;background:#660000;".concat(r," background-size:cover;background-position:center;-webkit-transition:filter 150ms,-webkit-transform 200ms;-webkit-transition:filter 150ms,transform 200ms;transition:filter 150ms,transform 200ms;-webkit-filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));border-radius:20px;text-shadow:0 2px 10px rgba(0,0,0,0.8);}"),".card.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.06);-ms-transform:scale(1.06);transform:scale(1.06);-webkit-filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3));filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3));}",".card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0;color:#fff;font-size:22px;font-weight:700;position:absolute;bottom:10px;}",".card.__jsx-style-dynamic-selector h4.__jsx-style-dynamic-selector{font-weight:700;font-size:20px;margin:12px 0 0;}",".card.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;padding:6px 0 0;font-size:18px;color:#fff;font-weight:400;}","@media (max-width:840px){.card.__jsx-style-dynamic-selector{width:80%;margin-bottom:25px;}.card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{font-size:30px;}.card.__jsx-style-dynamic-selector h4.__jsx-style-dynamic-selector{font-size:28px;}.card.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:26px;}}"]))},m=s.a.createElement;t.default=function(){return m("div",{className:"jsx-3195710182"},m(u.a,null,m("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0",className:"jsx-3195710182"}),m("title",{className:"jsx-3195710182"},"TwtichSoCal.com"),m("link",{href:"https://fonts.googleapis.com/css?family=Kanit:300,400,700|Knewave&display=swap",rel:"stylesheet",className:"jsx-3195710182"})),m("div",{className:"jsx-3195710182 hero"},m("h1",{className:"jsx-3195710182 title"},"Twitch SoCal"),m("p",{className:"jsx-3195710182 description"},"We're the meetup group for Twitch in Southern California!",m("br",{className:"jsx-3195710182"}),"Find the closest one to you or come to all our events!"),m("div",{className:"jsx-3195710182 row"},m(d,{name:"Twitch La"}),m(d,{name:"OC Streamers"}),m(d,{name:"Twitch SD"}))),m("div",{className:"jsx-3195710182 footer"},m("p",{className:"jsx-3195710182"},"This site is not affiliated or endorsed by Twitch or Meetup.")),m(i.a,{id:"3195710182"},["body{background-color:#5F3F9F;background-image:url('/static/cubes_@2X.png');margin:0;font-family:'Kanit',sans-serif,Avenir Next,Avenir, Helvetica,sans-serif;}",".hero.jsx-3195710182{width:100%;color:#fff;}",".title.jsx-3195710182{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;font-family:'Knewave',sans-serif;text-shadow:0 5px 5px rgba(0,0,0,0.4);}",".title.jsx-3195710182,.description.jsx-3195710182{text-align:center;}",".description.jsx-3195710182{font-size:22px;font-weight:300;font-family:'Kanit',sans-serif;}",".row.jsx-3195710182{max-width:880px;margin:40px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}",".footer.jsx-3195710182{color:#ddd;position:relative;bottom:0;text-align:center;font-size:100;font-style:italic;font-family:sans-serif;}","@media (max-width:840px){.row.jsx-3195710182{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}"]))}},SevZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("9kyW")),i=o(n("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,s=void 0!==o&&o,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,n,o;return t=e,(n=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var o=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[r]=o,this._instancesCounts[r]=1}}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(n in this._instancesCounts,"styleId: `".concat(n,"` not found")),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-".concat(t);var i=String(n),o=t+i;return e[o]||(e[o]="jsx-".concat((0,r.default)("".concat(t,"-").concat(i)))),e[o]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=n+r;return t[i]||(t[i]=r.replace(e,n)),t[i]}}},{key:"getIdAndRules",value:function(e){var t=this,n=e.children,r=e.dynamic,i=e.id;if(r){var o=this.computeId(i,r);return{styleId:o,rules:Array.isArray(n)?n.map(function(e){return t.computeSelector(o,e)}):[this.computeSelector(o,n)]}}return{styleId:this.computeId(i),rules:Array.isArray(n)?n:[n]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&s(t.prototype,n),o&&s(t,o),e}();t.default=a},YFqc:function(e,t,n){e.exports=n("cTJO")},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,o=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,c=void 0===a?r:a,l=t.isBrowser,u=void 0===l?"undefined"!==typeof window:l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#".concat(o,"-deleted-rule____{}"),s("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,o,a;return t=e,(o=[{key:"setOptimizeForSpeed",value:function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(s(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){r||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];s(i,"old rule at index `".concat(e,"` not found")),i.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&s(i(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-".concat(e),""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r}},{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,o),a&&n(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=o}).call(this,n("8oxB"))},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),i=n("WaGi"),o=n("ZDA2"),s=n("/+P4"),a=n("N9n2"),c=n("5Uuq"),l=n("KI45");t.__esModule=!0,t.default=void 0;var u,f=l(n("LX0d")),h=n("CxY0"),p=c(n("q1tI")),d=(l(n("17x9")),l(n("nOHt"))),m=(n("KA3u"),n("Bu4q"));function v(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var y=new f.default,_=window.IntersectionObserver;function w(){return u||(_?u=new _(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var g=function(e){function t(e){var n;return r(this,t),(n=o(this,s(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(i,o){if(r&&i===t&&o===n)return r;var s=e(i,o);return t=i,n=o,r=s,s}}(function(e,t){return{href:v(e),as:t?v(t):t}}),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,i=t.target;if("A"!==r||!(i&&"_self"!==i||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=n.formatUrls(n.props.href,n.props.as),s=o.href,a=o.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var c=window.location.pathname;s=(0,h.resolve)(c,s),a=a?(0,h.resolve)(c,a):s,e.preventDefault();var l=n.props.scroll;null==l&&(l=a.indexOf("#")<0),d.default[n.props.replace?"replace":"push"](s,a,{shallow:n.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})}}},n.p=!1!==e.prefetch,n}return a(t,e),i(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&_&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),y.set(e,t),function(){n.unobserve(e),y.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,h.resolve)(e,t);d.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,i=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var o=p.Children.only(t),s={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch()},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(s.href=i||r),p.default.cloneElement(o,s)}}]),t}(p.Component);g.propTypes=void 0;var x=g;t.default=x},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0]]]);