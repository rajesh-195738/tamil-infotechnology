(self.webpackChunktamil_infotech=self.webpackChunktamil_infotech||[]).push([[809],{7115:function(e){e.exports=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=(o(n(1)),n(6)),a=o(i),s=o(n(7)),c=o(n(8)),u=o(n(9)),d=o(n(10)),l=o(n(11)),f=o(n(14)),m=[],p=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(p=!0),p)return m=(0,l.default)(m,b),(0,d.default)(m,b.once),m},y=function(){m=(0,f.default)(),v()},g=function(){m.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},h=function(e){return!0===e||"mobile"===e&&u.default.mobile()||"phone"===e&&u.default.phone()||"tablet"===e&&u.default.tablet()||"function"==typeof e&&!0===e()},x=function(e){b=r(b,e),m=(0,f.default)();var t=document.all&&!window.atob;return h(b.disable)||t?g():(b.disableMutationObserver||c.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),"DOMContentLoaded"===b.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===b.startEvent?window.addEventListener(b.startEvent,(function(){v(!0)})):document.addEventListener(b.startEvent,(function(){v(!0)})),window.addEventListener("resize",(0,s.default)(v,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(v,b.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)((function(){(0,d.default)(m,b.once)}),b.throttleDelay)),b.disableMutationObserver||c.default.ready("[data-aos]",y),m)};e.exports={init:x,refresh:v,refreshHard:y}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,j=t,g=e.apply(o,n)}function i(e){return j=e,h=setTimeout(d,t),O?o(e):g}function a(e){var n=t-(e-x);return N?E(n,y-(e-j)):n}function c(e){var n=e-x;return void 0===x||n>=t||n<0||N&&e-j>=y}function d(){var e=k();return c(e)?l(e):void(h=setTimeout(d,a(e)))}function l(e){return h=void 0,A&&b?o(e):(b=v=void 0,g)}function f(){void 0!==h&&clearTimeout(h),j=0,b=x=v=h=void 0}function m(){return void 0===h?g:l(k())}function p(){var e=k(),n=c(e);if(b=arguments,v=this,x=e,n){if(void 0===h)return i(x);if(N)return h=setTimeout(d,t),o(x)}return void 0===h&&(h=setTimeout(d,t)),g}var b,v,y,g,h,x,j=0,O=!1,N=!1,A=!0;if("function"!=typeof e)throw new TypeError(u);return t=s(t)||0,r(n)&&(O=!!n.leading,y=(N="maxWait"in n)?w(s(n.maxWait)||0,t):y,A="trailing"in n?!!n.trailing:A),p.cancel=f,p.flush=m,p}function o(e,t,o){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(u);return r(o)&&(i="leading"in o?!!o.leading:i,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:i,maxWait:t,trailing:a})}function r(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||i(e)&&x.call(e)==l}function s(e){if("number"==typeof e)return e;if(a(e))return d;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=p.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):m.test(e)?d:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u="Expected a function",d=NaN,l="[object Symbol]",f=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),x=Object.prototype.toString,w=Math.max,E=Math.min,k=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function r(t){var n=b,o=v;return b=v=void 0,j=t,g=e.apply(o,n)}function i(e){return j=e,h=setTimeout(d,t),O?r(e):g}function s(e){var n=t-(e-k);return N?w(n,y-(e-j)):n}function u(e){var n=e-k;return void 0===k||n>=t||n<0||N&&e-j>=y}function d(){var e=E();return u(e)?l(e):void(h=setTimeout(d,s(e)))}function l(e){return h=void 0,A&&b?r(e):(b=v=void 0,g)}function f(){void 0!==h&&clearTimeout(h),j=0,b=k=v=h=void 0}function m(){return void 0===h?g:l(E())}function p(){var e=E(),n=u(e);if(b=arguments,v=this,k=e,n){if(void 0===h)return i(k);if(N)return h=setTimeout(d,t),r(k)}return void 0===h&&(h=setTimeout(d,t)),g}var b,v,y,g,h,k,j=0,O=!1,N=!1,A=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(O=!!n.leading,y=(N="maxWait"in n)?x(a(n.maxWait)||0,t):y,A="trailing"in n?!!n.trailing:A),p.cancel=f,p.flush=m,p}function o(e){var t="undefined"==typeof e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":s(e))}function i(e){return"symbol"==("undefined"==typeof e?"undefined":s(e))||r(e)&&h.call(e)==d}function a(e){if("number"==typeof e)return e;if(i(e))return u;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||p.test(e)?b(e.slice(2),n?2:8):f.test(e)?u:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",u=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,p=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":s(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype.toString,x=Math.max,w=Math.min,E=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0;for(t=0;t<e.length;t+=1){if((o=e[t]).dataset&&o.dataset.aos)return!0;if(o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function r(){return!!o()}function i(e,t){var n=window.document,r=new(o())(a);s=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(o)))return s()}))}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){};t.default={isSupported:r,ready:i}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function e(){n(this,e)}return r(e,[{key:"phone",value:function(){var e=o();return!(!i.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!s.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new u},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,r=window.innerHeight;e.forEach((function(e,i){n(e,r+o,t)}))};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(12)),i=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)})),e};t.default=i},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(13)),i=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=i},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=n}])},8628:(e,t,n)=>{"use strict";n.d(t,{A:()=>M});var o=n(8139),r=n.n(o),i=n(5043),a=n(7852),s=n(579);const c=i.forwardRef(((e,t)=>{let{className:n,bsPrefix:o,as:i="div",...c}=e;return o=(0,a.oU)(o,"card-body"),(0,s.jsx)(i,{ref:t,className:r()(n,o),...c})}));c.displayName="CardBody";const u=c,d=i.forwardRef(((e,t)=>{let{className:n,bsPrefix:o,as:i="div",...c}=e;return o=(0,a.oU)(o,"card-footer"),(0,s.jsx)(i,{ref:t,className:r()(n,o),...c})}));d.displayName="CardFooter";const l=d;var f=n(1778);const m=i.forwardRef(((e,t)=>{let{bsPrefix:n,className:o,as:c="div",...u}=e;const d=(0,a.oU)(n,"card-header"),l=(0,i.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,s.jsx)(f.A.Provider,{value:l,children:(0,s.jsx)(c,{ref:t,...u,className:r()(o,d)})})}));m.displayName="CardHeader";const p=m,b=i.forwardRef(((e,t)=>{let{bsPrefix:n,className:o,variant:i,as:c="img",...u}=e;const d=(0,a.oU)(n,"card-img");return(0,s.jsx)(c,{ref:t,className:r()(i?"".concat(d,"-").concat(i):d,o),...u})}));b.displayName="CardImg";const v=b,y=i.forwardRef(((e,t)=>{let{className:n,bsPrefix:o,as:i="div",...c}=e;return o=(0,a.oU)(o,"card-img-overlay"),(0,s.jsx)(i,{ref:t,className:r()(n,o),...c})}));y.displayName="CardImgOverlay";const g=y,h=i.forwardRef(((e,t)=>{let{className:n,bsPrefix:o,as:i="a",...c}=e;return o=(0,a.oU)(o,"card-link"),(0,s.jsx)(i,{ref:t,className:r()(n,o),...c})}));h.displayName="CardLink";const x=h;var w=n(4488);const E=(0,w.A)("h6"),k=i.forwardRef(((e,t)=>{let{className:n,bsPrefix:o,as:i=E,...c}=e;return o=(0,a.oU)(o,"card-subtitle"),(0,s.jsx)(i,{ref:t,className:r()(n,o),...c})}));k.displayName="CardSubtitle";const j=k,O=i.forwardRef(((e,t)=>{let{className:n,bsPrefix:o,as:i="p",...c}=e;return o=(0,a.oU)(o,"card-text"),(0,s.jsx)(i,{ref:t,className:r()(n,o),...c})}));O.displayName="CardText";const N=O,A=(0,w.A)("h5"),P=i.forwardRef(((e,t)=>{let{className:n,bsPrefix:o,as:i=A,...c}=e;return o=(0,a.oU)(o,"card-title"),(0,s.jsx)(i,{ref:t,className:r()(n,o),...c})}));P.displayName="CardTitle";const C=P,T=i.forwardRef(((e,t)=>{let{bsPrefix:n,className:o,bg:i,text:c,border:d,body:l=!1,children:f,as:m="div",...p}=e;const b=(0,a.oU)(n,"card");return(0,s.jsx)(m,{ref:t,...p,className:r()(o,b,i&&"bg-".concat(i),c&&"text-".concat(c),d&&"border-".concat(d)),children:l?(0,s.jsx)(u,{children:f}):f})}));T.displayName="Card";const M=Object.assign(T,{Img:v,Title:C,Subtitle:j,Body:u,Link:x,Text:N,Header:p,Footer:l,ImgOverlay:g})},4816:(e,t,n)=>{"use strict";n.d(t,{A:()=>_});var o=n(5173),r=n.n(o),i=n(5043),a=n(6350),s=n(60),c=n(8466),u=n(5901),d=n(8187),l=n(579);const f=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],m=["activeKey","getControlledId","getControllerId"],p=["as"];function b(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}function v(e){let{active:t,eventKey:n,mountOnEnter:o,transition:r,unmountOnExit:a,role:s="tabpanel",onEnter:d,onEntering:l,onEntered:p,onExit:v,onExiting:y,onExited:g}=e,h=b(e,f);const x=(0,i.useContext)(c.A);if(!x)return[Object.assign({},h,{role:s}),{eventKey:n,isActive:t,mountOnEnter:o,transition:r,unmountOnExit:a,onEnter:d,onEntering:l,onEntered:p,onExit:v,onExiting:y,onExited:g}];const{activeKey:w,getControlledId:E,getControllerId:k}=x,j=b(x,m),O=(0,u.u)(n);return[Object.assign({},h,{role:s,id:E(n),"aria-labelledby":k(n)}),{eventKey:n,isActive:null==t&&null!=O?(0,u.u)(w)===O:t,transition:r||j.transition,mountOnEnter:null!=o?o:j.mountOnEnter,unmountOnExit:null!=a?a:j.unmountOnExit,onEnter:d,onEntering:l,onEntered:p,onExit:v,onExiting:y,onExited:g}]}const y=i.forwardRef(((e,t)=>{let{as:n="div"}=e,o=b(e,p);const[r,{isActive:i,onEnter:a,onEntering:s,onEntered:f,onExit:m,onExiting:y,onExited:g,mountOnEnter:h,unmountOnExit:x,transition:w=d.A}]=v(o);return(0,l.jsx)(c.A.Provider,{value:null,children:(0,l.jsx)(u.A.Provider,{value:null,children:(0,l.jsx)(w,{in:i,onEnter:a,onEntering:s,onEntered:f,onExit:m,onExiting:y,onExited:g,mountOnEnter:h,unmountOnExit:x,children:(0,l.jsx)(n,Object.assign({},r,{ref:t,hidden:!i,"aria-hidden":!i}))})})})}));y.displayName="TabPanel";const g=e=>{const{id:t,generateChildId:n,onSelect:o,activeKey:r,defaultActiveKey:d,transition:f,mountOnEnter:m,unmountOnExit:p,children:b}=e,[v,y]=(0,a.iC)(r,d,o),g=(0,s.Cc)(t),h=(0,i.useMemo)((()=>n||((e,t)=>g?"".concat(g,"-").concat(t,"-").concat(e):null)),[g,n]),x=(0,i.useMemo)((()=>({onSelect:y,activeKey:v,transition:f,mountOnEnter:m||!1,unmountOnExit:p||!1,getControlledId:e=>h(e,"tabpane"),getControllerId:e=>h(e,"tab")})),[y,v,f,m,p,h]);return(0,l.jsx)(c.A.Provider,{value:x,children:(0,l.jsx)(u.A.Provider,{value:y||null,children:b})})};g.Panel=y;const h=g;var x=n(8072);function w(e){return"boolean"===typeof e?e?x.A:d.A:e}const E=e=>{let{transition:t,...n}=e;return(0,l.jsx)(h,{...n,transition:w(t)})};E.displayName="TabContainer";const k=E;var j=n(8139),O=n.n(j),N=n(7852);const A=i.forwardRef(((e,t)=>{let{className:n,bsPrefix:o,as:r="div",...i}=e;return o=(0,N.oU)(o,"tab-content"),(0,l.jsx)(r,{ref:t,className:O()(n,o),...i})}));A.displayName="TabContent";const P=A,C=i.forwardRef(((e,t)=>{let{bsPrefix:n,transition:o,...r}=e;const[{className:i,as:a="div",...s},{isActive:d,onEnter:f,onEntering:m,onEntered:p,onExit:b,onExiting:y,onExited:g,mountOnEnter:h,unmountOnExit:E,transition:k=x.A}]=v({...r,transition:w(o)}),j=(0,N.oU)(n,"tab-pane");return(0,l.jsx)(c.A.Provider,{value:null,children:(0,l.jsx)(u.A.Provider,{value:null,children:(0,l.jsx)(k,{in:d,onEnter:f,onEntering:m,onEntered:p,onExit:b,onExiting:y,onExited:g,mountOnEnter:h,unmountOnExit:E,children:(0,l.jsx)(a,{...s,ref:t,className:O()(i,j,d&&"active")})})})})}));C.displayName="TabPane";const T=C,M={eventKey:r().oneOfType([r().string,r().number]),title:r().node.isRequired,disabled:r().bool,tabClassName:r().string,tabAttrs:r().object},S=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};S.propTypes=M;const _=Object.assign(S,{Container:k,Content:P,Pane:T})},6473:()=>{}}]);
//# sourceMappingURL=809.b6b457cd.chunk.js.map