!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=e.parcelRequired7c6;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},e.parcelRequired7c6=r);var i,a=r("bpxeT"),c=r("2TvXO"),u=r("l5bVx"),s="Expected a function",f=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,p=/^0o[0-7]+$/i,b=parseInt,v="object"==typeof e&&e&&e.Object===Object&&e,h="object"==typeof self&&self&&self.Object===Object&&self,m=v||h||Function("return this")(),g=Object.prototype.toString,y=Math.max,k=Math.min,x=function(){return m.Date.now()};function w(t,e,n){var o,r,i,a,c,u,f=0,l=!1,d=!1,p=!0;if("function"!=typeof t)throw new TypeError(s);function b(e){var n=o,i=r;return o=r=void 0,f=e,a=t.apply(i,n)}function v(t){return f=t,c=setTimeout(m,e),l?b(t):a}function h(t){var n=t-u;return void 0===u||n>=e||n<0||d&&t-f>=i}function m(){var t=x();if(h(t))return g(t);c=setTimeout(m,function(t){var n=e-(t-u);return d?k(n,i-(t-f)):n}(t))}function g(t){return c=void 0,p&&o?b(t):(o=r=void 0,a)}function w(){var t=x(),n=h(t);if(o=arguments,r=this,u=t,n){if(void 0===c)return v(u);if(d)return c=setTimeout(m,e),b(u)}return void 0===c&&(c=setTimeout(m,e)),a}return e=j(e)||0,T(n)&&(l=!!n.leading,i=(d="maxWait"in n)?y(j(n.maxWait)||0,e):i,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==c&&clearTimeout(c),f=0,o=u=r=c=void 0},w.flush=function(){return void 0===c?a:g(x())},w}function T(e){var n=void 0===e?"undefined":t(u)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(u)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==g.call(e)}(e))return NaN;if(T(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=T(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var o=d.test(e);return o||p.test(e)?b(e.slice(2),o?2:8):l.test(e)?NaN:+e}function O(t){var e=window.innerWidth;e>1440?t.forEach((function(t){t.classList.remove("bookshelf-tablet"),t.classList.remove("bookshelf-mobile")})):e>768?t.forEach((function(t){t.classList.remove("bookshelf-mobile"),t.classList.add("bookshelf-tablet")})):t.forEach((function(t){t.classList.remove("bookshelf-tablet"),t.classList.add("bookshelf-mobile")}))}function E(t){var e=t.book_image,n=t.title,o=t.author;return'\n    <div class="book-item">\n      <img class="book-image-container" src="'.concat(e,'" />\n      <h4 class="book-item-title">').concat(n,'</h4>\n      <p class="book-item-author">').concat(o,"</p>\n    </div>\n    ")}function L(t){var e=t.list_name,n=t.books;return'\n    <h3 class="category-header">'.concat(e,'</h3>\n    <div class="bookshelf">\n      ').concat(n.map(E).join(" "),'\n    </div>\n    <button class="see-more-btn">SEE MORE</button>\n  ')}i=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError(s);return T(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),w(t,e,{leading:o,maxWait:e,trailing:r})};a=r("bpxeT"),c=r("2TvXO");var M=r("dIxxU").default;function N(t){return _.apply(this,arguments)}function _(){return(_=t(a)(t(c).mark((function e(n){var o,r,i;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://books-backend.p.goit.global",o="".concat("https://books-backend.p.goit.global").concat(n),t.prev=2,t.next=5,M.get(o);case 5:return r=t.sent,t.next=8,r.data;case 8:return i=t.sent,t.abrupt("return",i);case 12:t.prev=12,t.t0=t.catch(2),console.error(t.t0);case 15:case"end":return t.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}var S=document.querySelector(".bestsellers-container"),q=null;function W(){return(W=t(a)(t(c).mark((function e(n){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:N("/books/top-books").then((function(t){var e=t.map(L).join(" ");n.insertAdjacentHTML("beforeend",e),O(q=document.querySelectorAll(".bookshelf"))}));case 1:case"end":return t.stop()}}),e)})))).apply(this,arguments)}!function(t){W.apply(this,arguments)}(S),window.addEventListener("resize",t(i)((function(){O(q)}),1e3))}();
//# sourceMappingURL=index.54624922.js.map
