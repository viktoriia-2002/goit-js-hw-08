function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,g=s||m||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return g.Date.now()};function b(e,t,n){var r,i,a,u,l,c,f=0,s=!1,m=!1,g=!0;if("function"!=typeof e)throw new TypeError(o);function d(t){var n=r,o=i;return r=i=void 0,f=t,u=e.apply(o,n)}function b(e){var n=e-c;return void 0===c||n>=t||n<0||m&&e-f>=a}function h(){var e=y();if(b(e))return j(e);l=setTimeout(h,function(e){var n=t-(e-c);return m?p(n,a-(e-f)):n}(e))}function j(e){return l=void 0,g&&r?d(e):(r=i=void 0,u)}function O(){var e=y(),n=b(e);if(r=arguments,i=this,c=e,n){if(void 0===l)return function(e){return f=e,l=setTimeout(h,t),s?d(e):u}(c);if(m)return l=setTimeout(h,t),d(c)}return void 0===l&&(l=setTimeout(h,t)),u}return t=T(t)||0,S(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(T(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==l&&clearTimeout(l),f=0,r=c=i=l=void 0},O.flush=function(){return void 0===l?u:j(y())},O}function S(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function T(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&d.call(e)==i}(e))return r;if(S(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=S(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=l.test(e);return n||c.test(e)?f(e.slice(2),n?2:8):u.test(e)?r:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return S(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};const h=document.querySelector(".feedback-form"),j="feedback-form-state";console.log(h),console.log(document),h.addEventListener("input",e(t)((function(e){e.preventDefault(),O[e.target.name]=e.target.value,""===e.target.value||""===localStorage.getItem(j)?localStorage.removeItem(j):localStorage.setItem(j,JSON.stringify(O))}),500)),h.addEventListener("submit",(function(e){e.preventDefault(),console.log(O),e.currentTarget.reset(),localStorage.removeItem(j);const{elements:{email:t,message:n}}=e.currentTarget;""!==t.value.trim()&&""!==n.value.trim()||alert("Please fill in all the fields!")}));const O={};function w(){const e=JSON.parse(localStorage.getItem(j));if(e){const t=e.email,n=e.message;document.querySelector('input[name="email"]').value=t,document.querySelector('textarea[name="message"]').value=n}}localStorage.getItem(j)&&w(),w(),function(){if(localStorage.getItem(j)){const e=JSON.parse(localStorage.getItem(j));if(e){const t=e.email,n=e.message;document.querySelector('input[name="email"]').value=t,document.querySelector('textarea[name="message"]').value=n}}}();
//# sourceMappingURL=03-feedback.6e3bd7c0.js.map