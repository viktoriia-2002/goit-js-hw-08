function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,d=s||m||Function("return this")(),g=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return d.Date.now()};function b(e,t,n){var r,i,a,u,l,f,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function b(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-c>=a}function h(){var e=y();if(b(e))return j(e);l=setTimeout(h,function(e){var n=t-(e-f);return m?p(n,a-(e-c)):n}(e))}function j(e){return l=void 0,d&&r?g(e):(r=i=void 0,u)}function w(){var e=y(),n=b(e);if(r=arguments,i=this,f=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(h,t),s?g(e):u}(f);if(m)return l=setTimeout(h,t),g(f)}return void 0===l&&(l=setTimeout(h,t)),u}return t=T(t)||0,S(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(T(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=f=i=l=void 0},w.flush=function(){return void 0===l?u:j(y())},w}function S(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function T(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&g.call(e)==i}(e))return r;if(S(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=S(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=l.test(e);return n||f.test(e)?c(e.slice(2),n?2:8):u.test(e)?r:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return S(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};const h=document.querySelector(".feedback-form"),j="feedback-form-state";console.log(h),console.log(document),h.addEventListener("input",e(t)((function(e){e.preventDefault(),w[e.target.name]=e.target.value,""===e.target.value||""===localStorage.getItem(j)?localStoravge.removeItem(j):localStorage.setItem(j,JSON.stringify(w))}),500)),h.addEventListener("submit",(function(e){e.preventDefault(),console.log(w),e.currentTarget.reset(),localStorage.removeItem(j);const{elements:{email:t,message:n}}=e.currentTarget;""!==t.value.trim()&&""!==n.value.trim()||alert("Please fill in all the fields!")}));const w={};function O(){const e=JSON.parse(localStorage.getItem(j));if(e){const t=e.email,n=e.message;document.querySelector('input[name="email"]').value=t,document.querySelector('textarea[name="message"]').value=n}}localStorage.getItem(j)&&O(),O();
//# sourceMappingURL=03-feedback.98a78d93.js.map
