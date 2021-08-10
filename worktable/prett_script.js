/**
 * @license
 For license information please see 58-2d8787e53c1b93d6c76e.js.LICENSE.txt */
 'use strict';
 (window.webpackJsonp = window.webpackJsonp || []).push([[58], {
   nXoH : function(allowUnknown, context, exports) {
     /**
      * @param {!Object} value
      * @param {!Array} parent
      * @return {?}
      */
     function stringify(value, parent) {
       var result = {};
       var path;
       for (path in value) {
         if (Object.prototype.hasOwnProperty.call(value, path) && parent.indexOf(path) < 0) {
           result[path] = value[path];
         }
       }
       if (null != value && "function" == typeof Object.getOwnPropertySymbols) {
         /** @type {number} */
         var i = 0;
         /** @type {!Array<?>} */
         path = Object.getOwnPropertySymbols(value);
         for (; i < path.length; i++) {
           if (parent.indexOf(path[i]) < 0 && Object.prototype.propertyIsEnumerable.call(value, path[i])) {
             result[path[i]] = value[path[i]];
           }
         }
       }
       return result;
     }
     /**
      * @param {?} thisArg
      * @param {number} _arguments
      * @param {!Object} P
      * @param {!Function} generator
      * @return {?}
      */
     function extend(thisArg, _arguments, P, generator) {
       return new (P || (P = Promise))(function(eq, cb) {
         /**
          * @param {?} params
          * @return {undefined}
          */
         function f(params) {
           try {
             next(generator.next(params));
           } catch (iconCtx) {
             cb(iconCtx);
           }
         }
         /**
          * @param {?} value
          * @return {undefined}
          */
         function error(value) {
           try {
             next(generator.throw(value));
           } catch (iconCtx) {
             cb(iconCtx);
           }
         }
         /**
          * @param {!Object} p
          * @return {undefined}
          */
         function next(p) {
           var x;
           if (p.done) {
             eq(p.value);
           } else {
             (x = p.value, x instanceof P ? x : new P(function(resolve) {
               resolve(x);
             })).then(f, error);
           }
         }
         next((generator = generator.apply(thisArg, _arguments || [])).next());
       });
     }
     /**
      * @param {?} item
      * @param {!Function} fn
      * @return {?}
      */
     function then(item, fn) {
       /**
        * @param {number} onRejected
        * @return {?}
        */
       function then(onRejected) {
         return function(canCreateDiscussions) {
           return function(op) {
             if (pp) {
               throw new TypeError("Generator is already executing.");
             }
             for (; _;) {
               try {
                 if (pp = 1, c && (t = 2 & op[0] ? c.return : op[0] ? c.throw || ((t = c.return) && t.call(c), 0) : c.next) && !(t = t.call(c, op[1])).done) {
                   return t;
                 }
                 switch(c = 0, t && (op = [2 & op[0], t.value]), op[0]) {
                   case 0:
                   case 1:
                     t = op;
                     break;
                   case 4:
                     return _.label++, {
                       value : op[1],
                       done : false
                     };
                   case 5:
                     _.label++;
                     c = op[1];
                     /** @type {!Array} */
                     op = [0];
                     continue;
                   case 7:
                     op = _.ops.pop();
                     _.trys.pop();
                     continue;
                   default:
                     if (!(t = _.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== op[0] && 2 !== op[0])) {
                       /** @type {number} */
                       _ = 0;
                       continue;
                     }
                     if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                       _.label = op[1];
                       break;
                     }
                     if (6 === op[0] && _.label < t[1]) {
                       _.label = t[1];
                       t = op;
                       break;
                     }
                     if (t && _.label < t[2]) {
                       _.label = t[2];
                       _.ops.push(op);
                       break;
                     }
                     if (t[2]) {
                       _.ops.pop();
                     }
                     _.trys.pop();
                     continue;
                 }
                 op = fn.call(item, _);
               } catch (e) {
                 /** @type {!Array} */
                 op = [6, e];
                 /** @type {number} */
                 c = 0;
               } finally {
                 /** @type {number} */
                 pp = t = 0;
               }
             }
             if (5 & op[0]) {
               throw op[1];
             }
             return {
               value : op[0] ? op[1] : void 0,
               done : true
             };
           }([onRejected, canCreateDiscussions]);
         };
       }
       var pp;
       var c;
       var t;
       var g;
       var _ = {
         label : 0,
         sent : function() {
           if (1 & t[0]) {
             throw t[1];
           }
           return t[1];
         },
         trys : [],
         ops : []
       };
       return g = {
         next : then(0),
         throw : then(1),
         return : then(2)
       }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
         return this;
       }), g;
     }
     /**
      * @return {?}
      */
     function gen() {
       /** @type {number} */
       var length = 0;
       /** @type {number} */
       var index = 0;
       /** @type {number} */
       var arg_count = arguments.length;
       for (; index < arg_count; index++) {
         length = length + arguments[index].length;
       }
       /** @type {!Array} */
       var result = Array(length);
       /** @type {number} */
       var i = 0;
       /** @type {number} */
       index = 0;
       for (; index < arg_count; index++) {
         var map = arguments[index];
         /** @type {number} */
         var k = 0;
         var n = map.length;
         for (; k < n; k++, i++) {
           result[i] = map[k];
         }
       }
       return result;
     }
     /**
      * @param {number} s
      * @param {?} v
      * @return {?}
      */
     function push(s, v) {
       return new Promise(function(_nextEventFunc) {
         return setTimeout(_nextEventFunc, s, v);
       });
     }
     /**
      * @param {?} resolve
      * @param {!Function} reject
      * @return {undefined}
      */
     function when(resolve, reject) {
       try {
         var value = resolve();
         if ((minZValue = value) && "function" == typeof minZValue.then) {
           value.then(function(xhr) {
             return reject(true, xhr);
           }, function(xhr) {
             return reject(false, xhr);
           });
         } else {
           reject(true, value);
         }
       } catch (queryName) {
         reject(false, queryName);
       }
       var minZValue;
     }
     /**
      * @param {!NodeList} array
      * @param {!Function} iterator
      * @param {number} options
      * @return {?}
      */
     function map(array, iterator, options) {
       return void 0 === options && (options = 16), extend(this, void 0, void 0, function() {
         var interestingPoint;
         var i;
         var viewportCenter;
         return then(this, function(_context) {
           switch(_context.label) {
             case 0:
               /** @type {number} */
               interestingPoint = Date.now();
               /** @type {number} */
               i = 0;
               /** @type {number} */
               _context.label = 1;
             case 1:
               return i < array.length ? (iterator(array[i], i), (viewportCenter = Date.now()) >= interestingPoint + options ? (interestingPoint = viewportCenter, [4, push(0)]) : [3, 3]) : [3, 4];
             case 2:
               _context.sent();
               /** @type {number} */
               _context.label = 3;
             case 3:
               return ++i, [3, 1];
             case 4:
               return [2];
           }
         });
       });
     }
     /**
      * @param {!Array} text
      * @param {!Array} space
      * @return {?}
      */
     function next(text, space) {
       /** @type {!Array} */
       text = [text[0] >>> 16, 65535 & text[0], text[1] >>> 16, 65535 & text[1]];
       /** @type {!Array} */
       space = [space[0] >>> 16, 65535 & space[0], space[1] >>> 16, 65535 & space[1]];
       /** @type {!Array} */
       var n = [0, 0, 0, 0];
       return n[3] += text[3] + space[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += text[2] + space[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += text[1] + space[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += text[0] + space[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]];
     }
     /**
      * @param {!Array} v
      * @param {!Array} m
      * @return {?}
      */
     function f(v, m) {
       /** @type {!Array} */
       v = [v[0] >>> 16, 65535 & v[0], v[1] >>> 16, 65535 & v[1]];
       /** @type {!Array} */
       m = [m[0] >>> 16, 65535 & m[0], m[1] >>> 16, 65535 & m[1]];
       /** @type {!Array} */
       var n = [0, 0, 0, 0];
       return n[3] += v[3] * m[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += v[2] * m[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += v[3] * m[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += v[1] * m[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += v[2] * m[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += v[3] * m[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += v[0] * m[3] + v[1] * m[2] + v[2] * m[1] + v[3] * m[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]];
     }
     /**
      * @param {!Object} m
      * @param {number} n
      * @return {?}
      */
     function k(m, n) {
       return 32 === (n = n % 64) ? [m[1], m[0]] : n < 32 ? [m[0] << n | m[1] >>> 32 - n, m[1] << n | m[0] >>> 32 - n] : (n = n - 32, [m[1] << n | m[0] >>> 32 - n, m[0] << n | m[1] >>> 32 - n]);
     }
     /**
      * @param {?} m
      * @param {number} n
      * @return {?}
      */
     function skip(m, n) {
       return 0 === (n = n % 64) ? m : n < 32 ? [m[0] << n | m[1] >>> 32 - n, m[1] << n] : [m[1] << n - 32, 0];
     }
     /**
      * @param {!Array} e
      * @param {!Array} date
      * @return {?}
      */
     function m(e, date) {
       return [e[0] ^ date[0], e[1] ^ date[1]];
     }
     /**
      * @param {!Array} name
      * @return {?}
      */
     function p(name) {
       return name = m(name, [0, name[0] >>> 1]), name = m(name = f(name, [4283543511, 3981806797]), [0, name[0] >>> 1]), name = m(name = f(name, [3301882366, 444984403]), [0, name[0] >>> 1]);
     }
     /**
      * @param {string} node
      * @param {number} klass
      * @return {?}
      */
     function all(node, klass) {
       klass = klass || 0;
       var i;
       /** @type {number} */
       var padding = (node = node || "").length % 16;
       /** @type {number} */
       var bits = node.length - padding;
       /** @type {!Array} */
       var a = [0, klass];
       /** @type {!Array} */
       var b = [0, klass];
       /** @type {!Array} */
       var c = [0, 0];
       /** @type {!Array} */
       var e = [0, 0];
       /** @type {!Array} */
       var d = [2277735313, 289559509];
       /** @type {!Array} */
       var v = [1291169091, 658871167];
       /** @type {number} */
       i = 0;
       for (; i < bits; i = i + 16) {
         /** @type {!Array} */
         c = [255 & node.charCodeAt(i + 4) | (255 & node.charCodeAt(i + 5)) << 8 | (255 & node.charCodeAt(i + 6)) << 16 | (255 & node.charCodeAt(i + 7)) << 24, 255 & node.charCodeAt(i) | (255 & node.charCodeAt(i + 1)) << 8 | (255 & node.charCodeAt(i + 2)) << 16 | (255 & node.charCodeAt(i + 3)) << 24];
         /** @type {!Array} */
         e = [255 & node.charCodeAt(i + 12) | (255 & node.charCodeAt(i + 13)) << 8 | (255 & node.charCodeAt(i + 14)) << 16 | (255 & node.charCodeAt(i + 15)) << 24, 255 & node.charCodeAt(i + 8) | (255 & node.charCodeAt(i + 9)) << 8 | (255 & node.charCodeAt(i + 10)) << 16 | (255 & node.charCodeAt(i + 11)) << 24];
         c = k(c = f(c, d), 31);
         a = next(a = k(a = m(a, c = f(c, v)), 27), b);
         a = next(f(a, [0, 5]), [0, 1390208809]);
         e = k(e = f(e, v), 33);
         b = next(b = k(b = m(b, e = f(e, d)), 31), a);
         b = next(f(b, [0, 5]), [0, 944331445]);
       }
       switch(c = [0, 0], e = [0, 0], padding) {
         case 15:
           e = m(e, skip([0, node.charCodeAt(i + 14)], 48));
         case 14:
           e = m(e, skip([0, node.charCodeAt(i + 13)], 40));
         case 13:
           e = m(e, skip([0, node.charCodeAt(i + 12)], 32));
         case 12:
           e = m(e, skip([0, node.charCodeAt(i + 11)], 24));
         case 11:
           e = m(e, skip([0, node.charCodeAt(i + 10)], 16));
         case 10:
           e = m(e, skip([0, node.charCodeAt(i + 9)], 8));
         case 9:
           e = f(e = m(e, [0, node.charCodeAt(i + 8)]), v);
           b = m(b, e = f(e = k(e, 33), d));
         case 8:
           c = m(c, skip([0, node.charCodeAt(i + 7)], 56));
         case 7:
           c = m(c, skip([0, node.charCodeAt(i + 6)], 48));
         case 6:
           c = m(c, skip([0, node.charCodeAt(i + 5)], 40));
         case 5:
           c = m(c, skip([0, node.charCodeAt(i + 4)], 32));
         case 4:
           c = m(c, skip([0, node.charCodeAt(i + 3)], 24));
         case 3:
           c = m(c, skip([0, node.charCodeAt(i + 2)], 16));
         case 2:
           c = m(c, skip([0, node.charCodeAt(i + 1)], 8));
         case 1:
           c = f(c = m(c, [0, node.charCodeAt(i)]), d);
           a = m(a, c = f(c = k(c, 31), v));
       }
       return a = next(a = m(a, [0, node.length]), b = m(b, [0, node.length])), b = next(b, a), a = next(a = p(a), b = p(b)), b = next(b, a), ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (b[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (b[1] >>> 0).toString(16)).slice(-8);
     }
     /**
      * @param {number} value
      * @return {?}
      */
     function defaultValue(value) {
       return parseInt(value);
     }
     /**
      * @param {number} n
      * @return {?}
      */
     function abs(n) {
       return parseFloat(n);
     }
     /**
      * @param {number} data
      * @param {!Object} ratio
      * @return {?}
      */
     function getColor(data, ratio) {
       return "number" == typeof data && isNaN(data) ? ratio : data;
     }
     /**
      * @param {!Array} array
      * @return {?}
      */
     function indexOf(array) {
       return array.reduce(function(name, type) {
         return name + (type ? 1 : 0);
       }, 0);
     }
     /**
      * @param {!Object} obj
      * @return {?}
      */
     function assert(obj) {
       return obj && "object" == typeof obj && "message" in obj ? obj : {
         message : obj
       };
     }
     /**
      * @param {!NodeList} e
      * @param {?} filter
      * @param {(Node|NodeList|string)} n
      * @return {?}
      */
     function save(e, filter, n) {
       /** @type {!Array<string>} */
       var data = Object.keys(e).filter(function(childCompute) {
         return !function(o, value) {
           /** @type {number} */
           var i = 0;
           var r = o.length;
           for (; i < r; ++i) {
             if (o[i] === value) {
               return true;
             }
           }
           return false;
         }(n, childCompute);
       });
       /** @type {!Array} */
       var result = Array(data.length);
       return map(data, function(childProp, index) {
         result[index] = function(e, name) {
           /**
            * @param {?} callback
            * @return {?}
            */
           var registerOrRunCallback = function(callback) {
             return "function" != typeof callback;
           };
           /** @type {!Promise} */
           var serializerPromise = new Promise(function(saveNotifs) {
             /** @type {number} */
             var startTime = Date.now();
             when(e.bind(null, name), function() {
               /** @type {!Array} */
               var props = [];
               /** @type {number} */
               var i = 0;
               for (; i < arguments.length; i++) {
                 props[i] = arguments[i];
               }
               /** @type {number} */
               var touchTime = Date.now() - startTime;
               if (!props[0]) {
                 return saveNotifs(function() {
                   return {
                     error : assert(props[1]),
                     duration : touchTime
                   };
                 });
               }
               var p = props[1];
               if (registerOrRunCallback(p)) {
                 return saveNotifs(function() {
                   return {
                     value : p,
                     duration : touchTime
                   };
                 });
               }
               saveNotifs(function() {
                 return new Promise(function(resolve) {
                   /** @type {number} */
                   var duedate = Date.now();
                   when(p, function() {
                     /** @type {!Array} */
                     var labels = [];
                     /** @type {number} */
                     var i = 0;
                     for (; i < arguments.length; i++) {
                       labels[i] = arguments[i];
                     }
                     /** @type {number} */
                     var timeSubmittedDiff = touchTime + Date.now() - duedate;
                     if (!labels[0]) {
                       return resolve({
                         error : assert(labels[1]),
                         duration : timeSubmittedDiff
                       });
                     }
                     resolve({
                       value : labels[1],
                       duration : timeSubmittedDiff
                     });
                   });
                 });
               });
             });
           });
           return function() {
             return serializerPromise.then(function(saveNotifs) {
               return saveNotifs();
             });
           };
         }(e[childProp], filter);
       }), function() {
         return extend(this, void 0, void 0, function() {
           var e;
           var layer_i;
           var crossfilterable_layers;
           var fixWheelDelta;
           var ret;
           var process;
           return then(this, function(_context) {
             switch(_context.label) {
               case 0:
                 e = {};
                 /** @type {number} */
                 layer_i = 0;
                 /** @type {!Array<string>} */
                 crossfilterable_layers = data;
                 for (; layer_i < crossfilterable_layers.length; layer_i++) {
                   /** @type {string} */
                   fixWheelDelta = crossfilterable_layers[layer_i];
                   e[fixWheelDelta] = void 0;
                 }
                 /** @type {!Array} */
                 ret = Array(data.length);
                 /**
                  * @return {?}
                  */
                 process = function() {
                   var t;
                   return then(this, function(_context) {
                     switch(_context.label) {
                       case 0:
                         return t = true, [4, map(data, function(n, number) {
                           if (!ret[number]) {
                             if (result[number]) {
                               ret[number] = result[number]().then(function(b) {
                                 return e[n] = b;
                               });
                             } else {
                               /** @type {boolean} */
                               t = false;
                             }
                           }
                         })];
                       case 1:
                         return _context.sent(), t ? [2, "break"] : [4, push(1)];
                       case 2:
                         return _context.sent(), [2];
                     }
                   });
                 };
                 /** @type {number} */
                 _context.label = 1;
               case 1:
                 return [5, process()];
               case 2:
                 if ("break" === _context.sent()) {
                   return [3, 4];
                 }
                 /** @type {number} */
                 _context.label = 3;
               case 3:
                 return [3, 1];
               case 4:
                 return [4, Promise.all(ret)];
               case 5:
                 return _context.sent(), [2, e];
             }
           });
         });
       };
     }
     /**
      * @return {?}
      */
     function view() {
       /** @type {!Window} */
       var inheritedObject = window;
       /** @type {!Navigator} */
       var nav = navigator;
       return indexOf(["MSCSSMatrix" in inheritedObject, "msSetImmediate" in inheritedObject, "msIndexedDB" in inheritedObject, "msMaxTouchPoints" in nav, "msPointerEnabled" in nav]) >= 4;
     }
     /**
      * @return {?}
      */
     function style() {
       /** @type {!Window} */
       var inheritedObject = window;
       /** @type {!Navigator} */
       var nav = navigator;
       return indexOf(["msWriteProfilerMark" in inheritedObject, "MSStream" in inheritedObject, "msLaunchUri" in nav, "msSaveBlob" in nav]) >= 3 && !view();
     }
     /**
      * @return {?}
      */
     function watch() {
       /** @type {!Window} */
       var inheritedObject = window;
       /** @type {!Navigator} */
       var nav = navigator;
       return indexOf(["webkitPersistentStorage" in nav, "webkitTemporaryStorage" in nav, 0 === nav.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL" in inheritedObject, "BatteryManager" in inheritedObject, "webkitMediaStream" in inheritedObject, "webkitSpeechGrammar" in inheritedObject]) >= 5;
     }
     /**
      * @return {?}
      */
     function sniff() {
       /** @type {!Window} */
       var inheritedObject = window;
       /** @type {!Navigator} */
       var nav = navigator;
       return indexOf(["ApplePayError" in inheritedObject, "CSSPrimitiveValue" in inheritedObject, "Counter" in inheritedObject, 0 === nav.vendor.indexOf("Apple"), "getStorageUpdates" in nav, "WebKitMediaKeys" in inheritedObject]) >= 4;
     }
     /**
      * @return {?}
      */
     function _initSys() {
       /** @type {!Window} */
       var inheritedObject = window;
       return indexOf(["safari" in inheritedObject, !("DeviceMotionEvent" in inheritedObject), !("ongestureend" in inheritedObject), !("standalone" in navigator)]) >= 3;
     }
     /**
      * @return {?}
      */
     function getBrowser() {
       var container;
       var t;
       /** @type {!Window} */
       var frame = window;
       return indexOf(["buildID" in navigator, "MozAppearance" in (null !== (t = null === (container = document.documentElement) || void 0 === container ? void 0 : container.style) && void 0 !== t ? t : {}), "MediaRecorderErrorEvent" in frame, "mozInnerScreenX" in frame, "CSSMozDocumentRule" in frame, "CanvasCaptureMediaStream" in frame]) >= 4;
     }
     /**
      * @return {?}
      */
     function isFullscreenEnabled() {
       /** @type {!HTMLDocument} */
       var doc = document;
       return doc.fullscreenElement || doc.msFullscreenElement || doc.mozFullScreenElement || doc.webkitFullscreenElement || null;
     }
     /**
      * @return {?}
      */
     function start() {
       var openAsChild = watch();
       var Browser = getBrowser();
       if (!openAsChild && !Browser) {
         return false;
       }
       /** @type {!Window} */
       var win = window;
       return indexOf(["onorientationchange" in win, "orientation" in win, openAsChild && "SharedWorker" in win, Browser && /android/i.test(navigator.appVersion)]) >= 2;
     }
     /**
      * @param {string} value
      * @return {?}
      */
     function equal(value) {
       /** @type {!Error} */
       var result = new Error(value);
       return result.name = value, result;
     }
     /**
      * @param {!Function} $
      * @param {string} html
      * @param {number} sort
      * @return {?}
      */
     function apply($, html, sort) {
       var win;
       var doc;
       return void 0 === sort && (sort = 50), extend(this, void 0, void 0, function() {
         var _document;
         var iframe;
         return then(this, function(_a) {
           switch(_a.label) {
             case 0:
               /** @type {!HTMLDocument} */
               _document = document;
               /** @type {number} */
               _a.label = 1;
             case 1:
               return _document.body ? [3, 3] : [4, push(sort)];
             case 2:
               return _a.sent(), [3, 1];
             case 3:
               iframe = _document.createElement("iframe");
               /** @type {number} */
               _a.label = 4;
             case 4:
               return _a.trys.push([4, , 10, 11]), [4, new Promise(function(contentload, resolve) {
                 iframe.onload = contentload;
                 iframe.onerror = resolve;
                 var style = iframe.style;
                 style.setProperty("display", "block", "important");
                 /** @type {string} */
                 style.position = "absolute";
                 /** @type {string} */
                 style.top = "0";
                 /** @type {string} */
                 style.left = "0";
                 /** @type {string} */
                 style.visibility = "hidden";
                 if (html && "srcdoc" in iframe) {
                   /** @type {string} */
                   iframe.srcdoc = html;
                 } else {
                   /** @type {string} */
                   iframe.src = "about:blank";
                 }
                 _document.body.appendChild(iframe);
                 !function callAdaptLater() {
                   var win;
                   if ("complete" === (null === (win = iframe.contentWindow) || void 0 === win ? void 0 : win.document.readyState)) {
                     contentload();
                   } else {
                     setTimeout(callAdaptLater, 10);
                   }
                 }();
               })];
             case 5:
               _a.sent();
               /** @type {number} */
               _a.label = 6;
             case 6:
               return (null === (win = iframe.contentWindow) || void 0 === win ? void 0 : win.document.body) ? [3, 8] : [4, push(sort)];
             case 7:
               return _a.sent(), [3, 6];
             case 8:
               return [4, $(iframe, iframe.contentWindow)];
             case 9:
               return [2, _a.sent()];
             case 10:
               return null === (doc = iframe.parentNode) || void 0 === doc || doc.removeChild(iframe), [7];
             case 11:
               return [2];
           }
         });
       });
     }
     /**
      * @param {string} array
      * @return {?}
      */
     function clone(array) {
       var o = function(name) {
         var value;
         var text;
         /** @type {string} */
         var lastErrorOutput = "Unexpected syntax '" + name + "'";
         /** @type {(Array<string>|null)} */
         var matches = /^\s*([a-z-]*)(.*)$/i.exec(name);
         /** @type {(string|undefined)} */
         var o = matches[1] || void 0;
         var phiSets = {};
         /** @type {!RegExp} */
         var detailRegExp = /([.:#][\w-]+|\[.+?\])/gi;
         /**
          * @param {string} label
          * @param {string} code
          * @return {undefined}
          */
         var cb = function(label, code) {
           phiSets[label] = phiSets[label] || [];
           phiSets[label].push(code);
         };
         for (;;) {
           /** @type {(Array<string>|null)} */
           var ruleMatch = detailRegExp.exec(matches[2]);
           if (!ruleMatch) {
             break;
           }
           /** @type {string} */
           var selector = ruleMatch[0];
           switch(selector[0]) {
             case ".":
               cb("class", selector.slice(1));
               break;
             case "#":
               cb("id", selector.slice(1));
               break;
             case "[":
               /** @type {(Array<string>|null)} */
               var item = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(selector);
               if (!item) {
                 throw new Error(lastErrorOutput);
               }
               cb(item[1], null !== (text = null !== (value = item[4]) && void 0 !== value ? value : item[5]) && void 0 !== text ? text : "");
               break;
             default:
               throw new Error(lastErrorOutput);
           }
         }
         return [o, phiSets];
       }(array);
       var position = o[0];
       var row = o[1];
       /** @type {!Element} */
       var newObj = document.createElement(null != position ? position : "div");
       /** @type {number} */
       var i = 0;
       /** @type {!Array<string>} */
       var tokens = Object.keys(row);
       for (; i < tokens.length; i++) {
         /** @type {string} */
         var p = tokens[i];
         newObj.setAttribute(p, row[p].join(" "));
       }
       return newObj;
     }
     /**
      * @param {!Object} ctx
      * @return {?}
      */
     function drawRect(ctx) {
       return ctx.rect(0, 0, 10, 10), ctx.rect(2, 2, 6, 6), !ctx.isPointInPath(5, 5, "evenodd");
     }
     /**
      * @param {!Object} value
      * @param {!CanvasRenderingContext2D} ctx
      * @return {?}
      */
     function draw(value, ctx) {
       /** @type {number} */
       value.width = 240;
       /** @type {number} */
       value.height = 60;
       /** @type {string} */
       ctx.textBaseline = "alphabetic";
       /** @type {string} */
       ctx.fillStyle = "#f60";
       ctx.fillRect(100, 1, 62, 20);
       /** @type {string} */
       ctx.fillStyle = "#069";
       /** @type {string} */
       ctx.font = '11pt "Times New Roman"';
       /** @type {string} */
       var tempPathText = "Cwm fjordbank gly " + String.fromCharCode(55357, 56835);
       return ctx.fillText(tempPathText, 2, 15), ctx.fillStyle = "rgba(102, 204, 0, 0.2)", ctx.font = "18pt Arial", ctx.fillText(tempPathText, 4, 45), resize(value);
     }
     /**
      * @param {!Object} value
      * @param {!CanvasRenderingContext2D} ctx
      * @return {?}
      */
     function render(value, ctx) {
       /** @type {number} */
       value.width = 122;
       /** @type {number} */
       value.height = 110;
       /** @type {string} */
       ctx.globalCompositeOperation = "multiply";
       /** @type {number} */
       var layer_i = 0;
       /** @type {!Array} */
       var crossfilterable_layers = [["#f2f", 40, 40], ["#2ff", 80, 40], ["#ff2", 60, 80]];
       for (; layer_i < crossfilterable_layers.length; layer_i++) {
         var layer = crossfilterable_layers[layer_i];
         var parBgColor = layer[0];
         var space_x = layer[1];
         var yk = layer[2];
         ctx.fillStyle = parBgColor;
         ctx.beginPath();
         ctx.arc(space_x, yk, 40, 0, 2 * Math.PI, true);
         ctx.closePath();
         ctx.fill();
       }
       return ctx.fillStyle = "#f9c", ctx.arc(60, 60, 60, 0, 2 * Math.PI, true), ctx.arc(60, 60, 20, 0, 2 * Math.PI, true), ctx.fill("evenodd"), resize(value);
     }
     /**
      * @param {!Object} dst
      * @return {?}
      */
     function resize(dst) {
       return dst.toDataURL();
     }
     /**
      * @return {?}
      */
     function updateNavbar() {
       var item = this;
       return function() {
         if (void 0 === timer) {
           !function update() {
             var t = ease();
             if (isNaN(t)) {
               /** @type {number} */
               timer = setTimeout(update, 2500);
             } else {
               text = t;
               timer = void 0;
             }
           }();
         }
       }(), function() {
         return extend(item, void 0, void 0, function() {
           var e;
           return then(this, function(_context) {
             switch(_context.label) {
               case 0:
                 return isNaN(e = ease()) ? text ? [2, gen(text)] : isFullscreenEnabled() ? [4, (doc = document, (doc.exitFullscreen || doc.msExitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen).call(doc))] : [3, 2] : [3, 2];
               case 1:
                 _context.sent();
                 e = ease();
                 /** @type {number} */
                 _context.label = 2;
               case 2:
                 return isNaN(e) || (text = e), [2, e];
             }
             var doc;
           });
         });
       };
     }
     /**
      * @return {?}
      */
     function ease() {
       /** @type {!Screen} */
       var bounds = screen;
       return [getColor(abs(bounds.availTop), null), getColor(abs(bounds.width) - abs(bounds.availWidth) - getColor(abs(bounds.availLeft), 0), null), getColor(abs(bounds.height) - abs(bounds.availHeight) - getColor(abs(bounds.availTop), 0), null), getColor(abs(bounds.availLeft), null)];
     }
     /**
      * @param {!NodeList} message
      * @return {?}
      */
     function isNaN(message) {
       /** @type {number} */
       var CORE_VERSION = 0;
       for (; CORE_VERSION < 4; ++CORE_VERSION) {
         if (message[CORE_VERSION]) {
           return false;
         }
       }
       return true;
     }
     /**
      * @param {!NodeList} array
      * @return {?}
      */
     function storeOffline(array) {
       var t;
       return extend(this, void 0, void 0, function() {
         var doc;
         var e;
         var cnames;
         var hashing;
         var c;
         var body;
         var i;
         return then(this, function(_context) {
           switch(_context.label) {
             case 0:
               /** @type {!HTMLDocument} */
               doc = document;
               /** @type {!Element} */
               e = doc.createElement("div");
               /** @type {!Array} */
               cnames = new Array(array.length);
               hashing = {};
               showPopup(e);
               /** @type {number} */
               i = 0;
               for (; i < array.length; ++i) {
                 c = clone(array[i]);
                 showPopup(body = doc.createElement("div"));
                 body.appendChild(c);
                 e.appendChild(body);
                 cnames[i] = c;
               }
               /** @type {number} */
               _context.label = 1;
             case 1:
               return doc.body ? [3, 3] : [4, push(50)];
             case 2:
               return _context.sent(), [3, 1];
             case 3:
               doc.body.appendChild(e);
               try {
                 /** @type {number} */
                 i = 0;
                 for (; i < array.length; ++i) {
                   if (!cnames[i].offsetParent) {
                     /** @type {boolean} */
                     hashing[array[i]] = true;
                   }
                 }
               } finally {
                 if (!(null === (t = e.parentNode) || void 0 === t)) {
                   t.removeChild(e);
                 }
               }
               return [2, hashing];
           }
         });
       });
     }
     /**
      * @param {!Element} d
      * @return {undefined}
      */
     function showPopup(d) {
       d.style.setProperty("display", "block", "important");
     }
     /**
      * @param {string} invalidMsisdn
      * @return {?}
      */
     function matchMobile(invalidMsisdn) {
       return matchMedia("(inverted-colors: " + invalidMsisdn + ")").matches;
     }
     /**
      * @param {string} str
      * @return {?}
      */
     function testMedia(str) {
       return matchMedia("(forced-colors: " + str + ")").matches;
     }
     /**
      * @param {string} right
      * @return {?}
      */
     function between(right) {
       return matchMedia("(prefers-contrast: " + right + ")").matches;
     }
     /**
      * @param {string} type
      * @return {?}
      */
     function media(type) {
       return matchMedia("(prefers-reduced-motion: " + type + ")").matches;
     }
     /**
      * @param {string} name
      * @return {?}
      */
     function expr(name) {
       return matchMedia("(dynamic-range: " + name + ")").matches;
     }
     /**
      * @param {number} callback
      * @return {?}
      */
     function getAccounts(callback) {
       return void 0 === callback && (callback = 50), function(value, b) {
         if (void 0 === b) {
           /** @type {number} */
           b = 1 / 0;
         }
         var requestIdleCallback = window.requestIdleCallback;
         return requestIdleCallback ? new Promise(function(saveNotifs) {
           return requestIdleCallback(function() {
             return saveNotifs();
           }, {
             timeout : b
           });
         }) : push(Math.min(value, b));
       }(callback, 2 * callback);
     }
     /**
      * @param {number} data
      * @param {number} obj
      * @return {?}
      */
     function property(data, obj) {
       return new Promise(function(to) {
         return _start(to, data, obj);
       });
     }
     /**
      * @param {!Function} node
      * @param {number} name
      * @return {?}
      */
     function _start(node, name) {
       /** @type {!Array} */
       var labels = [];
       /** @type {number} */
       var i = 2;
       for (; i < arguments.length; i++) {
         labels[i - 2] = arguments[i];
       }
       var p = Date.now() + name;
       /** @type {number} */
       var _takingTooLongTimeout = 0;
       /**
        * @return {undefined}
        */
       var _initAll = function onload() {
         /** @type {number} */
         _takingTooLongTimeout = setTimeout(function() {
           if (Date.now() < p) {
             onload();
           } else {
             node.apply(void 0, labels);
           }
         }, p - Date.now());
       };
       return _initAll(), function() {
         return clearTimeout(_takingTooLongTimeout);
       };
     }
     /**
      * @param {number} user
      * @param {!Function} startDate
      * @param {!Function} callback
      * @return {?}
      */
     function initialize(user, startDate, callback) {
       /** @type {!Array} */
       var args = [];
       /** @type {number} */
       var i = 3;
       for (; i < arguments.length; i++) {
         args[i - 3] = arguments[i];
       }
       var href;
       /** @type {boolean} */
       var type = false;
       /** @type {number} */
       var u = user;
       /** @type {number} */
       var mergeLen = 0;
       /**
        * @return {undefined}
        */
       var start = function() {
         if (!(type || href)) {
           /** @type {number} */
           mergeLen = Date.now();
           href = _start(function() {
             /** @type {boolean} */
             type = true;
             callback.apply(void 0, args);
           }, u);
         }
       };
       /**
        * @return {undefined}
        */
       var now = function() {
         if (!type && href) {
           href();
           href = void 0;
           /** @type {number} */
           u = u - (Date.now() - mergeLen);
         }
       };
       return startDate && start(), {
         start : start,
         stop : now
       };
     }
     /**
      * @param {!Function} o
      * @param {number} options
      * @return {?}
      */
     function log(o, options) {
       /** @type {!Array} */
       var n = [];
       /** @type {number} */
       var i = 2;
       for (; i < arguments.length; i++) {
         n[i - 2] = arguments[i];
       }
       /** @type {!HTMLDocument} */
       var doc = document;
       /** @type {string} */
       var event = "visibilitychange";
       /**
        * @return {?}
        */
       var start = function() {
         return doc.hidden ? extend() : setTimeout();
       };
       var window = initialize(options, !doc.hidden, function() {
         doc.removeEventListener(event, start);
         o.apply(void 0, n);
       });
       var setTimeout = window.start;
       var extend = window.stop;
       return doc.addEventListener(event, start), function() {
         doc.removeEventListener(event, start);
         extend();
       };
     }
     /**
      * @param {number} data
      * @param {number} type
      * @return {?}
      */
     function action(data, type) {
       return new Promise(function(notebookSyncInfo) {
         return log(notebookSyncInfo, data, type);
       });
     }
     /**
      * @param {!Function} events
      * @param {?} type
      * @return {?}
      */
     function reverse(events, type) {
       return extend(this, void 0, void 0, function() {
         var logValues;
         return then(this, function(_a) {
           switch(_a.label) {
             case 0:
               return _a.trys.push([0, 2, , 3]), [4, events()];
             case 1:
               return [2, _a.sent()];
             case 2:
               return logValues = _a.sent(), console.error(logValues), [2, type];
             case 3:
               return [2];
           }
         });
       });
     }
     /**
      * @param {!Object} promise
      * @param {!Function} callback
      * @return {?}
      */
     function join(promise, callback) {
       var item = this;
       return new Promise(function(r, c) {
         var result = callback();
         /** @type {boolean} */
         var item = false;
         if (!(null == promise)) {
           promise.then(r, c).then(function() {
             return item = true;
           });
         }
         !function reverse(s) {
           return extend(item, void 0, void 0, function() {
             var el;
             var value;
             return then(this, function(_a) {
               switch(_a.label) {
                 case 0:
                   if (s.done) {
                     return [2, r(s.value)];
                   }
                   /** @type {number} */
                   _a.label = 1;
                 case 1:
                   return _a.trys.push([1, 3, , 4]), [4, s.value];
                 case 2:
                   if (el = _a.sent(), !item) {
                     try {
                       reverse(result.next(el));
                     } catch (postFunc) {
                       c(postFunc);
                     }
                   }
                   return [3, 4];
                 case 3:
                   if (value = _a.sent(), !item) {
                     try {
                       reverse(result.throw(value));
                     } catch (postFunc) {
                       c(postFunc);
                     }
                   }
                   return [3, 4];
                 case 4:
                   return [2];
               }
             });
           });
         }(result.next());
       });
     }
     /**
      * @param {?} files
      * @param {!Function} callback
      * @return {?}
      */
     function create(files, callback) {
       return extend(this, void 0, void 0, function() {
         var fetchPromise;
         var tableList;
         var fetchArguments;
         var p2;
         return then(this, function(_context) {
           switch(_context.label) {
             case 0:
               try {
                 fetchPromise = callback().then(function(ch) {
                   return tableList = [true, ch];
                 }, function(ch) {
                   return tableList = [false, ch];
                 });
               } catch (u) {
                 /** @type {!Array} */
                 tableList = [false, u];
               }
               return p2 = files.then(function(query) {
                 return fetchArguments = [true, query];
               }, function(query) {
                 return fetchArguments = [false, query];
               }), [4, Promise.race([fetchPromise, p2])];
             case 1:
               return _context.sent(), [2, function() {
                 if (tableList) {
                   if (tableList[0]) {
                     return tableList[1];
                   }
                   throw tableList[1];
                 }
                 if (fetchArguments) {
                   if (fetchArguments[0]) {
                     return fetchArguments[1];
                   }
                   throw fetchArguments[1];
                 }
                 throw new Error("96375");
               }];
           }
         });
       });
     }
     /**
      * @param {?} body
      * @param {number} err
      * @return {?}
      */
     function cb(body, err) {
       var result;
       return void 0 === err && (err = false), callback({
         name : body.name,
         message : body.message,
         stack : err ? null === (result = body.stack) || void 0 === result ? void 0 : result.split("\n") : body.stack
       }, body);
     }
     /**
      * @return {?}
      */
     function _isFrame() {
       /** @type {!Window} */
       var $window = window;
       try {
         return $window.self !== $window.top;
       } catch (t) {
         return true;
       }
     }
     /**
      * @param {number} i
      * @param {number} f
      * @return {?}
      */
     function compile(i, f) {
       var min_exp;
       return then(this, function(_context) {
         switch(_context.label) {
           case 0:
             /** @type {number} */
             min_exp = 0;
             /** @type {number} */
             _context.label = 1;
           case 1:
             return [4, Math.random() * Math.min(f, i * Math.pow(2, min_exp))];
           case 2:
             _context.sent();
             /** @type {number} */
             _context.label = 3;
           case 3:
             return ++min_exp, [3, 1];
           case 4:
             return [2];
         }
       });
     }
     /**
      * @param {!Object} data
      * @return {?}
      */
     function slice(data) {
       return data instanceof ArrayBuffer ? new Uint8Array(data) : new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
     }
     /**
      * @param {?} options
      * @param {!Array} result
      * @return {?}
      */
     function find_eol(options, result) {
       if (0 == result.length || result.length > options.length) {
         return -1;
       }
       /** @type {number} */
       var i = 0;
       for (; i < options.length; i++) {
         /** @type {number} */
         var sizeOfMessage = 0;
         /** @type {number} */
         var k = 0;
         for (; k < result.length; k++) {
           if (options[i + k] !== result[k]) {
             /** @type {number} */
             sizeOfMessage = 0;
             break;
           }
           sizeOfMessage++;
         }
         if (sizeOfMessage == result.length) {
           return i;
         }
       }
       return -1;
     }
     /**
      * @param {?} data
      * @return {?}
      */
     function ab2str(data) {
       if ("function" == typeof TextDecoder) {
         /** @type {string} */
         var str = (new TextDecoder).decode(data);
         if (str) {
           return str;
         }
       }
       var key = slice(data);
       return decodeURIComponent(escape(String.fromCharCode.apply(null, key)));
     }
     /**
      * @param {!Array} state
      * @return {?}
      */
     function replace(state) {
       return state.reduce(function(name, type) {
         return name + (type ? 1 : 0);
       }, 0);
     }
     /**
      * @param {string} str
      * @param {number} length
      * @param {number} text
      * @return {?}
      */
     function normalize(str, length, text) {
       return void 0 === text && (text = "..."), str.length <= length ? str : "" + str.slice(0, Math.max(0, length - text.length)) + text;
     }
     /**
      * @param {(boolean|number|string)} expected
      * @param {(boolean|number|string)} actual
      * @return {?}
      */
     function Number(expected, actual) {
       return (expected - actual + 256) % 256;
     }
     /**
      * @param {?} array
      * @return {?}
      */
     function sort(array) {
       var buffer = slice(array);
       var samplesNeeded = buffer.length;
       /** @type {string} */
       var r1 = "";
       /** @type {number} */
       var i = 0;
       for (; i < samplesNeeded; i = i + 3) {
         /** @type {string} */
         r1 = r1 + (charListNotLatin[buffer[i] >> 2] + charListNotLatin[(3 & buffer[i]) << 4 | buffer[i + 1] >> 4] + charListNotLatin[(15 & buffer[i + 1]) << 2 | buffer[i + 2] >> 6] + charListNotLatin[63 & buffer[i + 2]]);
       }
       return samplesNeeded % 3 == 2 ? r1.slice(0, -1) + "=" : samplesNeeded % 3 == 1 ? r1.slice(0, -2) + "==" : r1;
     }
     /**
      * @param {string} arr
      * @return {?}
      */
     function open(arr) {
       /** @type {string} */
       var res = "";
       /** @type {number} */
       var i = 0;
       for (; i < arr.length; ++i) {
         if (i > 0) {
           var item = arr[i].toLowerCase();
           if (item !== arr[i]) {
             /** @type {string} */
             res = res + (" " + item);
           } else {
             res = res + arr[i];
           }
         } else {
           res = res + arr[i].toUpperCase();
         }
       }
       return res;
     }
     /**
      * @param {number} s
      * @param {string} oldValue
      * @return {?}
      */
     function set(s, oldValue) {
       /** @type {string} */
       var toSave = "";
       /** @type {number} */
       var e = 0;
       for (; e < s; e++) {
         toSave = toSave + oldValue.charAt(Math.random() * oldValue.length);
       }
       return toSave;
     }
     /**
      * @param {number} i
      * @return {?}
      */
     function first(i) {
       return set(i, record);
     }
     /**
      * @return {?}
      */
     function foo() {
       return 256 * Math.random() | 0;
     }
     /**
      * @param {!Object} callback
      * @return {?}
      */
     function loadGroups(callback) {
       return function() {
         /** @type {!Array} */
         var params = [];
         /** @type {number} */
         var i = 0;
         for (; i < arguments.length; i++) {
           params[i] = arguments[i];
         }
         /**
          * @param {!Function} route
          * @return {undefined}
          */
         var get = function(route) {
           if (route) {
             reverse(function() {
               return route.apply(void 0, params);
             });
           }
         };
         /** @type {number} */
         var j = 0;
         /** @type {!Object} */
         var url = callback;
         for (; j < url.length; j++) {
           var data = url[j];
           get(data);
         }
       };
     }
     /**
      * @param {?} event
      * @return {?}
      */
     function handleError(event) {
       switch(event) {
         case 0:
           return "Loading has started";
         case 1:
           return "Loading has succeeded";
         case 2:
           return "Loading has failed";
         case 3:
           return "Getting visitor identifier has started";
         case 4:
           return "Getting visitor identifier has succeeded";
         case 5:
           return "Getting visitor identifier has failed";
         case 6:
           return "Getting TLS has started";
         case 7:
           return "Getting TLS has succeeded";
         case 8:
           return "Getting TLS has failed";
         case 9:
           return "TLS request try has started";
         case 10:
           return "TLS request try has succeeded";
         case 11:
           return "TLS request try has failed";
         case 12:
           return "Getting fingerprint has started";
         case 13:
           return "Getting fingerprint has succeeded";
         case 14:
           return "Getting fingerprint has failed";
         case 15:
           return "Visitor identifier request has started";
         case 16:
           return "Visitor identifier request has succeeded";
         case 17:
           return "Visitor identifier request has failed";
         case 18:
           return "Visitor identifier request try has started";
         case 19:
           return "Visitor identifier request try has succeeded";
         case 20:
           return "Visitor identifier request try has failed";
       }
     }
     /**
      * @param {number} tmpl
      * @param {!Object} data
      * @return {?}
      */
     function format(tmpl, data) {
       var err = data.e;
       var result = stringify(data, ["e"]);
       /** @type {string} */
       var part = "" + tmpl + (new Date).toISOString() + ": " + handleError(err);
       return Object.keys(result).length && (part = part + ("\n```\n" + function(branchInfo) {
         return JSON.stringify(branchInfo, function(canCreateDiscussions, data) {
           return data instanceof Error ? cb(data, true) : data instanceof ArrayBuffer ? "(base64) " + sort(data) : data;
         }, 2);
       }(result) + "\n```")), part;
     }
     /**
      * @param {!Object} options
      * @return {?}
      */
     function request(options) {
       var a = options.url;
       var name = options.method;
       var method = void 0 === name ? "get" : name;
       var data = options.body;
       var headers = options.headers;
       var PNGProcessor = options.withCredentials;
       var withCredentials = void 0 !== PNGProcessor && PNGProcessor;
       var to = options.timeout;
       var format = options.responseFormat;
       var fn = options.abort;
       return new Promise(function(callback, reject) {
         /** @type {!XMLHttpRequest} */
         var xhr = new XMLHttpRequest;
         var i;
         for (i in xhr.open(method, a, true), xhr.withCredentials = withCredentials, xhr.timeout = void 0 === to ? 0 : Math.max(to, 1), "binary" === format && (xhr.responseType = "arraybuffer"), headers) {
           xhr.setRequestHeader(i, headers[i]);
         }
         /**
          * @return {?}
          */
         xhr.onload = function() {
           return callback(function(xhr) {
             return {
               body : xhr.response,
               status : xhr.status,
               statusText : xhr.statusText
             };
           }(xhr));
         };
         /**
          * @return {?}
          */
         xhr.ontimeout = function() {
           return reject(error("TimeoutError", "The request timed out"));
         };
         /**
          * @return {?}
          */
         xhr.onabort = function() {
           return reject(error("AbortError", "The request is aborted"));
         };
         /**
          * @return {?}
          */
         xhr.onerror = function() {
           return reject(error("TypeError", navigator.onLine ? "Connection error" : "Network offline"));
         };
         xhr.send(function(data) {
           var autoReview;
           /**
            * @return {?}
            */
           var createUserStylesheet = function() {
             try {
               return new Blob([]), false;
             } catch (t) {
               return true;
             }
           };
           if (data instanceof ArrayBuffer) {
             if (!createUserStylesheet()) {
               return new Uint8Array(data);
             }
           } else {
             if ((null === (autoReview = data) || void 0 === autoReview ? void 0 : autoReview.buffer) instanceof ArrayBuffer && createUserStylesheet()) {
               return data.buffer;
             }
           }
           return data;
         }(data));
         if (!(null == fn)) {
           fn.catch(function() {
           }).then(function() {
             /** @type {null} */
             xhr.onabort = null;
             xhr.abort();
           });
         }
       });
     }
     /**
      * @param {string} name
      * @param {string} text
      * @return {?}
      */
     function error(name, text) {
       /** @type {!Error} */
       var obj = new Error(text);
       return obj.name = name, obj;
     }
     /**
      * @param {?} d
      * @param {!Function} t
      * @return {undefined}
      */
     function g(d, t) {
       /** @type {!Array} */
       var args = [];
       /** @type {number} */
       var i = 2;
       for (; i < arguments.length; i++) {
         args[i - 2] = arguments[i];
       }
       if (d) {
         reverse(function() {
           var actual = t.apply(void 0, args);
           if (void 0 !== actual) {
             d(actual);
           }
         });
       }
     }
     /**
      * @param {?} b
      * @param {!Function} t
      * @param {!Function} n
      * @param {!Function} i
      * @param {!Function} modifier
      * @return {?}
      */
     function l(b, t, n, i, modifier) {
       return extend(this, void 0, void 0, function() {
         var tempz;
         var visibility;
         return then(this, function(_a) {
           switch(_a.label) {
             case 0:
               g(b, t);
               /** @type {number} */
               _a.label = 1;
             case 1:
               return _a.trys.push([1, 3, , 4]), [4, modifier()];
             case 2:
               return tempz = _a.sent(), [3, 4];
             case 3:
               throw visibility = _a.sent(), g(b, i, visibility), visibility;
             case 4:
               return g(b, n, tempz), [2, tempz];
           }
         });
       });
     }
     /**
      * @return {?}
      */
     function _showNavsIfNeeded() {
       /** @type {!Window} */
       var scope = window;
       var index = scope.__fpjs_pvid;
       return scope.__fpjs_pvid = "string" == typeof index ? index : first(10);
     }
     /**
      * @return {?}
      */
     function embed() {
       /** @type {!Window} */
       var global = window;
       /** @type {!Navigator} */
       var nav = navigator;
       return replace(["maxTouchPoints" in nav, "mediaCapabilities" in nav, "PointerEvent" in global, "visualViewport" in global, "onafterprint" in global]) >= 4;
     }
     /**
      * @param {!Object} options
      * @param {!Object} items
      * @param {number} styles
      * @return {?}
      */
     function walk(options, items, styles) {
       var src = null == options ? void 0 : options.time;
       var dst = (null == items ? void 0 : items.time) || styles;
       return src && dst && dst.getTime() - src.getTime();
     }
     /**
      * @param {!Array} config
      * @return {?}
      */
     function _toggleInteraction(config) {
       return config.some(function(action) {
         return "agentEvent" === action.type && (4 === action.event.e || 5 === action.event.e);
       });
     }
     /**
      * @param {!Date} value
      * @param {?} event
      * @param {?} a
      * @param {!Object} m
      * @param {string} b
      * @return {?}
      */
     function fn(value, event, a, m, b) {
       if (void 0 !== event) {
         return void 0 !== a ? callback(callback({}, null == b ? void 0 : b(a)), {
           duration : a.time.getTime() - event.time.getTime(),
           state : "success"
         }) : void 0 !== m ? {
           duration : m.time.getTime() - event.time.getTime(),
           state : "fail",
           error : m.event.error
         } : {
           duration : value.getTime() - event.time.getTime(),
           state : "incomplete"
         };
       }
     }
     /**
      * @param {!Object} e
      * @param {number} s
      * @param {number} width
      * @param {number} key
      * @param {number} now
      * @return {?}
      */
     function add(e, s, width, key, now) {
       var ind = now.getTime();
       var this_area = function(a22, blk) {
         var data = {};
         /** @type {number} */
         var i = 0;
         /** @type {!Object} */
         var tmpKeys = a22;
         for (; i < tmpKeys.length; i++) {
           var o = tmpKeys[i];
           if ("agentEvent" === o.type && -1 !== blk.indexOf(o.event.e)) {
             var e = o.event;
             if (!data[e.tryNumber]) {
               data[e.tryNumber] = {};
             }
             data[e.tryNumber][e.e] = o;
           }
         }
         /** @type {!Array} */
         var self = [];
         /** @type {number} */
         var lanCnt = 0;
         /** @type {!Array<string>} */
         var lanList = Object.keys(data);
         for (; lanCnt < lanList.length; lanCnt++) {
           /** @type {string} */
           var l = lanList[lanCnt];
           self.push(data[l]);
         }
         return self;
       }(e, [s, width, key]);
       var div = {
         triesCount : 0,
         triesTotalDuration : 0,
         completeTriesCount : 0,
         completeTriesTotalDuration : 0
       };
       /** @type {number} */
       var layer_i = 0;
       var crossfilterable_layers = this_area;
       for (; layer_i < crossfilterable_layers.length; layer_i++) {
         var opts = crossfilterable_layers[layer_i];
         var val = opts[s];
         var f = opts[width] || opts[key];
         if (val) {
           if (val.time.getTime() >= ind) {
             break;
           }
           var a = f && f.time.getTime() <= ind;
           /** @type {number} */
           var style = ((null == f ? void 0 : f.time) || now).getTime() - val.time.getTime();
           div.triesCount++;
           div.triesTotalDuration += style;
           if (a) {
             div.completeTriesCount++;
             div.completeTriesTotalDuration += style;
           }
         }
       }
       return div;
     }
     /**
      * @param {string} error
      * @param {!Function} t
      * @return {?}
      */
     function put(error, t) {
       return error ? callback(callback({}, error), t()) : void 0;
     }
     /**
      * @param {!Object} args
      * @return {?}
      */
     function buildMessageAndStackTrace(args) {
       var lineHandlers = {};
       /** @type {number} */
       var t = 0;
       /** @type {!Array<string>} */
       var m = Object.keys(args);
       for (; t < m.length; t++) {
         /** @type {string} */
         var i = m[t];
         var callback = args[i].error;
         if (callback) {
           lineHandlers[i] = callback;
         }
       }
       return lineHandlers;
     }
     /**
      * @param {!Object} a
      * @return {?}
      */
     function decode(a) {
       var json = {};
       /** @type {number} */
       var i = 0;
       /** @type {!Array<string>} */
       var aKeys = Object.keys(a);
       for (; i < aKeys.length; i++) {
         /** @type {string} */
         var j = aKeys[i];
         json[j] = a[j].duration;
       }
       return json;
     }
     /**
      * @return {?}
      */
     function alias() {
       return !document.hidden;
     }
     /**
      * @return {?}
      */
     function createElement() {
       return !!isFullscreenEnabled();
     }
     /**
      * @return {?}
      */
     function onError() {
       /** @type {!NetworkInformation} */
       var connection = navigator.connection;
       return {
         online : navigator.onLine,
         downlink : null == connection ? void 0 : connection.downlink,
         downlinkMax : null == connection ? void 0 : connection.downlinkMax,
         effectiveType : null == connection ? void 0 : connection.effectiveType,
         roundTrip : null == connection ? void 0 : connection.rtt,
         saveData : null == connection ? void 0 : connection.saveData,
         type : null == connection ? void 0 : connection.type
       };
     }
     /**
      * @param {!Object} config
      * @param {string} env
      * @param {string} id
      * @return {?}
      */
     function init(config, env, id) {
       var r;
       var cur_d_fingerprint;
       if (void 0 === id) {
         /** @type {string} */
         id = [8, 4, 4, 4, 12].map(function(p_dom_object_id) {
           return set(p_dom_object_id, "0123456789abcdef");
         }).join("-");
       }
       var logEvent = state[config.identificationState];
       var eventLevel = logEvent.level;
       var message_text = logEvent.message;
       return {
         environment : env,
         level : eventLevel,
         timestamp : Math.round(config.time.getTime() / 1E3),
         platform : "browser",
         framework : "FingerprintJS Pro",
         language : "javascript",
         uuid : id,
         notifier : {
           name : "FingerprintJS Pro monitoring",
           version : "3.4.0"
         },
         request : {
           url : config.pageUrl,
           query_string : (null !== (r = /\?.*$/.exec(config.pageUrl)) && void 0 !== r ? r : [""])[0],
           user_ip : "$remote_ip"
         },
         client : {
           javascript : {
             browser : config.userAgent,
             code_version : config.agentVersion
           }
         },
         person : void 0 === config.visitorId ? void 0 : {
           id : "visitorId:" + config.visitorId
         },
         body : {
           telemetry : gen([{
             level : "debug",
             source : "client",
             timestamp_ms : config.pageStartTime.getTime(),
             type : "manual",
             body : {
               message : "Page starts",
               "~~hack~componentDurations" : "success" === (null === (cur_d_fingerprint = config.fingerprint) || void 0 === cur_d_fingerprint ? void 0 : cur_d_fingerprint.state) ? getData(config.fingerprint.componentDurations) : void 0
             }
           }], config.events.map(run)),
           message : {
             body : message_text
           }
         },
         custom : {
           isInIframe : config.isInIframe,
           pageViewId : config.pageViewId,
           agentId : config.agentId,
           getCallId : config.getCallId,
           requestId : config.requestId,
           visitorId : config.visitorId,
           visitorToken : config.visitorToken,
           identificationState : config.identificationState,
           timeBetweenLoadAndGet : config.timeBetweenLoadAndGet,
           load : config.load,
           get : config.get,
           tls : config.tls,
           fingerprint : resolve(config.fingerprint),
           visitorIdRequest : config.visitorIdRequest
         }
       };
     }
     /**
      * @param {!Object} options
      * @return {?}
      */
     function run(options) {
       var result = {
         type : "manual",
         level : "debug",
         source : "client",
         timestamp_ms : options.time.getTime()
       };
       switch(options.type) {
         case "documentReadyState":
           return callback(callback({}, result), {
             body : {
               message : 'Document ready state becomes "' + options.state + '"'
             }
           });
         case "pageVisibilityToggle":
           return callback(callback({}, result), {
             body : {
               message : "Page becomes " + (options.isVisible ? "visible (in foreground)" : "invisible (in background)")
             }
           });
         case "pageTransition":
           return callback(callback({}, result), {
             body : {
               message : options.isShown ? "Page is restored from browser history" : "Page is about to go to browser history"
             }
           });
         case "fullscreenToggle":
           return callback(callback({}, result), {
             body : {
               message : "Programmatic fullscreen " + (options.isFullscreen ? "on" : "off")
             }
           });
         case "networkChange":
           return callback(callback({}, result), {
             body : callback(callback({}, options.network), {
               message : "Network connection changes"
             })
           });
         case "pageUnload":
           return callback(callback({}, result), {
             body : {
               message : "Page is about to unload (terminate)"
             }
           });
       }
       var event = options.event;
       /**
        * @param {!Object} value
        * @param {number} type
        * @return {?}
        */
       var parse = function(value, type) {
         if (void 0 === type) {
           /** @type {string} */
           type = "info";
         }
         /** @type {!Object} */
         var values = value;
         var ast = (values.e, values.agentId, values.getCallId, stringify(values, ["e", "agentId", "getCallId"]));
         var res = callback(callback({}, result), {
           level : type,
           body : callback({
             message : handleError(event.e)
           }, ast)
         });
         /** @type {number} */
         var j = 0;
         /** @type {!Array} */
         var handlersIndex = ["documentReadyState", "isPageVisible", "isFullscreen", "network"];
         for (; j < handlersIndex.length; j++) {
           var i = handlersIndex[j];
           if (void 0 !== options[i]) {
             res.body[i] = options[i];
           }
         }
         return res;
       };
       switch(event.e) {
         case 0:
           return event.version, parse(stringify(event, ["version"]));
         case 1:
         case 3:
         case 4:
         case 6:
         case 9:
         case 12:
         case 15:
         case 16:
         case 18:
           return parse(event);
         case 2:
         case 5:
         case 8:
         case 11:
         case 14:
         case 17:
         case 20:
           return parse(event, "error");
         case 7:
           return parse(callback(callback({}, event), {
             result : normalize(event.result, 1E3)
           }));
         case 10:
           return parse(callback(callback({}, event), {
             body : normalize(event.body, 1E3)
           }));
         case 13:
           return parse(callback(callback({}, event), {
             result : load(event.result)
           }));
         case 19:
           var data = event.body;
           return data instanceof ArrayBuffer && (data = "(base64) " + (data.byteLength > 1800 ? sort(new Uint8Array(data, 0, 1800)) + "..." : sort(data))), parse(callback(callback({}, event), {
             body : data
           }));
       }
     }
     /**
      * @param {!Object} data
      * @return {?}
      */
     function resolve(data) {
       if (!data || "incomplete" === data.state || "fail" === data.state) {
         return data;
       }
       data.componentDurations;
       var payload = stringify(data, ["componentDurations"]);
       /** @type {!Array<string>} */
       var responseGroup = Object.keys(data.failedComponents);
       /** @type {(string|undefined)} */
       var o = responseGroup.length ? "," + responseGroup.join(",") + "," : void 0;
       return callback(callback({}, payload), {
         failedComponents : o
       });
     }
     /**
      * @param {!Object} data
      * @param {string} selector
      * @return {?}
      */
     function getData(data, selector) {
       if (void 0 === selector) {
         /** @type {string} */
         selector = "_";
       }
       var out = callback({}, data);
       /** @type {number} */
       var i = 0;
       /** @type {!Array<string>} */
       var samples = Object.keys(data);
       for (; i < samples.length; i++) {
         /** @type {string} */
         var k = samples[i];
         if (/^\d+$/.test(k)) {
           delete out[k];
           /** @type {string} */
           var i = k;
           do {
             /** @type {string} */
             i = "" + selector + i;
           } while (i in out);
           out[i] = data[k];
         }
       }
       return out;
     }
     /**
      * @param {!Object} clock
      * @return {?}
      */
     function load(clock) {
       var q;
       /** @type {string} */
       var chunk = "(removed to fit into beacon)";
       return function(json, ifs) {
         var result = {};
         /** @type {number} */
         var j = 0;
         /** @type {!Array<string>} */
         var h = Object.keys(json);
         for (; j < h.length; j++) {
           /** @type {string} */
           var i = h[j];
           if (!json[i].error && ifs[i]) {
             result[i] = callback(callback({}, json[i]), {
               value : ifs[i](json[i].value)
             });
           } else {
             result[i] = json[i];
           }
         }
         return result;
       }(clock, ((q = {
         plugins : function(options) {
           return options && chunk;
         }
       })[14] = function(calendars) {
         return callback(callback({}, calendars), {
           data : chunk
         });
       }, q.math = function() {
         return chunk;
       }, q.fontPreferences = function() {
         return chunk;
       }, q.j = function(selector) {
         return selector && chunk;
       }, q[9] = function(finalChunk) {
         return finalChunk && chunk;
       }, q));
     }
     /**
      * @param {string} page
      * @param {?} sync
      * @return {?}
      */
     function check(page, sync) {
       return extend(this, void 0, void 0, function() {
         var item;
         var js;
         return then(this, function(_context) {
           switch(_context.label) {
             case 0:
               item = function(a) {
                 return JSON.stringify(a, function(canCreateDiscussions, date) {
                   if (date instanceof Error) {
                     var res = cb(date);
                     return "string" == typeof res.stack && (res.stack = normalize(res.stack, 1E3)), res;
                   }
                   return date;
                 });
               }(sync);
               js = compile(1E3, 1E4);
               /** @type {number} */
               _context.label = 1;
             case 1:
               return navigator.onLine && function(options) {
                 var res;
                 var n = options.url;
                 var data = options.body;
                 try {
                   if (null === (res = navigator.sendBeacon) || void 0 === res ? void 0 : res.call(navigator, n, data)) {
                     return true;
                   }
                 } catch (o) {
                   if ("Illegal invocation" !== o.message) {
                     throw o;
                   }
                 }
                 /** @type {!XMLHttpRequest} */
                 var xhr = new XMLHttpRequest;
                 xhr.open("POST", n, !function() {
                   var evt;
                   var t = null === (evt = window.event) || void 0 === evt ? void 0 : evt.type;
                   return "pagehide" === t || "unload" === t;
                 }());
                 if (data instanceof Blob) {
                   xhr.setRequestHeader("Content-Type", data.type);
                 }
                 try {
                   xhr.send(data);
                 } catch (a) {
                   return false;
                 }
                 return true;
               }({
                 url : page,
                 body : item
               }) ? [3, 4] : [4, property(js.next().value)];
             case 2:
               _context.sent();
               /** @type {number} */
               _context.label = 3;
             case 3:
               return [3, 1];
             case 4:
               return [2];
           }
         });
       });
     }
     /**
      * @param {string} url
      * @param {!Object} column
      * @param {?} n
      * @return {?}
      */
     function build(url, column, n) {
       var optionUsed2;
       var p2 = function(e, fetch, vertLen, p) {
         if (void 0 === vertLen) {
           /** @type {number} */
           vertLen = 1 / 0;
         }
         var js = compile(300, 1E4);
         return join(null == p ? void 0 : p.then(function() {
         }, function() {
         }), function() {
           var j;
           var titleFontRules;
           var url;
           return then(this, function(_a) {
             switch(_a.label) {
               case 0:
                 /** @type {number} */
                 j = 0;
                 /** @type {number} */
                 _a.label = 1;
               case 1:
                 if (!(j < vertLen)) {
                   return [3, 8];
                 }
                 /** @type {number} */
                 titleFontRules = Date.now();
                 /** @type {number} */
                 _a.label = 2;
               case 2:
                 return _a.trys.push([2, 4, , 5]), [4, e(j, p)];
               case 3:
                 return [2, _a.sent()];
               case 4:
                 return url = _a.sent(), fetch(url), [3, 5];
               case 5:
                 return [4, property(titleFontRules + js.next().value - Date.now())];
               case 6:
                 _a.sent();
                 /** @type {number} */
                 _a.label = 7;
               case 7:
                 return ++j, [3, 1];
               case 8:
                 return [2, void 0];
             }
           });
         });
       }(function(key, name) {
         return function(url, addedRenderer, wallaby, spy, one) {
           return extend(this, void 0, void 0, function() {
             var cache_context;
             var _base;
             return then(this, function(_a) {
               switch(_a.label) {
                 case 0:
                   return _a.trys.push([0, 2, , 3]), [4, l(one, function() {
                     return {
                       e : 9,
                       tryNumber : wallaby,
                       timeout : 5E3
                     };
                   }, function(responseOpts) {
                     var status = responseOpts.status;
                     var body = responseOpts.body;
                     return {
                       e : 10,
                       tryNumber : wallaby,
                       status : status,
                       body : body
                     };
                   }, function(error_func) {
                     return {
                       e : 11,
                       tryNumber : wallaby,
                       error : error_func
                     };
                   }, function() {
                     return request({
                       url : url,
                       timeout : 5E3,
                       abort : spy
                     });
                   })];
                 case 1:
                   return cache_context = _a.sent(), [3, 3];
                 case 2:
                   switch((_base = _a.sent()).name) {
                     case "AbortError":
                       throw handler(_base.message, -2);
                     case "TimeoutError":
                       throw handler(_base.message, -3);
                     case "TypeError":
                       throw handler(_base.message, -4);
                   }throw _base;
                 case 3:
                   if (200 === cache_context.status) {
                     return [2, cache_context.body];
                   }
                   throw handler(normalize(cache_context.status + ": " + cache_context.body, 255), -5);
               }
             });
           });
         }(url, 0, key, name, n);
       }, function(a) {
         return optionUsed2 = a;
       }, 10, column);
       return p2.catch(function() {
       }), function(responseReceived) {
         return void 0 === responseReceived && (responseReceived = new Promise(function() {
         })), Promise.race([responseReceived.then(function() {
         }, function() {
         }), p2]).then(function(canCreateDiscussions) {
           if (void 0 !== canCreateDiscussions) {
             return canCreateDiscussions;
           }
           throw optionUsed2 || handler("Timeout", -3);
         });
       };
     }
     /**
      * @param {string} error
      * @param {!Object} data
      * @return {?}
      */
     function handler(error, data) {
       /** @type {!Error} */
       var self = new Error(error);
       return self.__ = "slt", self.s = data, self;
     }
     /**
      * @param {?} val
      * @return {?}
      */
     function isFunction(val) {
       return "slt" === val.__;
     }
     /**
      * @param {!Object} options
      * @param {!Function} next
      * @return {?}
      */
     function expect(options, next) {
       return options.error ? {
         e : get(options.error)
       } : next(options.value);
     }
     /**
      * @param {!Object} error
      * @return {?}
      */
     function get(error) {
       var html;
       try {
         /** @type {string} */
         html = "" + error.message;
         if ("name" in error) {
           /** @type {string} */
           html = error.name + ": " + html;
         }
       } catch (deserializedError) {
         /** @type {string} */
         html = "Code 3017: " + deserializedError.name + ": " + deserializedError.message;
       }
       return normalize(html, 500);
     }
     /**
      * @param {!Object} vertices
      * @return {?}
      */
     function contains(vertices) {
       return expect(vertices, function(withFldValue) {
         return {
           s : 0,
           v : withFldValue
         };
       });
     }
     /**
      * @param {!Object} num1
      * @return {?}
      */
     function getValue(num1) {
       return expect(num1, function(n) {
         return n;
       });
     }
     /**
      * @param {!Object} json
      * @param {number} view
      * @return {?}
      */
     function loadAll(json, view) {
       return expect(json, function(viewName) {
         return {
           s : null == viewName ? view : 0,
           v : null != viewName ? viewName : null
         };
       });
     }
     /**
      * @param {!Object} source
      * @param {!Function} fn
      * @return {?}
      */
     function test(source, fn) {
       return expect(source, function(s) {
         return "number" == typeof s ? {
           s : s,
           v : null
         } : {
           s : 0,
           v : fn ? fn(s) : s
         };
       });
     }
     /**
      * @param {!Object} action
      * @param {string} state
      * @param {!Object} object
      * @return {?}
      */
     function each(action, state, object) {
       return action.error ? state : void 0 === action.value ? object : action.value;
     }
     /**
      * @param {boolean} fn
      * @return {?}
      */
     function list(fn) {
       return true === fn ? 1 : false === fn ? 0 : fn;
     }
     /**
      * @param {!Object} value
      * @param {?} i
      * @return {?}
      */
     function update(value, i) {
       var d = value.bodyData;
       return void 0 === d ? remove(value) : function(data) {
         return data instanceof Object && "2" === data.v && data.products instanceof Object;
       }(d) ? function(result, item) {
         var value = result.notifications;
         var id = result.requestId;
         var error = result.error;
         var options = result.products;
         if (reply(value), error) {
           return reject(error, id, item);
         }
         var data = options.identification;
         if (!data) {
           throw new Error("There is no identification result in the response");
         }
         return reply(data.notifications), data.error ? reject(data.error, id, item) : [callback({
           requestId : id
         }, data.data.result), data.data.visitorToken];
       }(d, i) : function(deps) {
         return deps instanceof Object && "string" == typeof deps.visitorId && "n/a" !== deps.visitorId;
       }(d) ? function(b) {
         /** @type {string} */
         var t = b;
         var n = t.notification;
         var lastEndItem = t.visitorToken;
         var max = t.botProbability;
         var val = stringify(t, ["notification", "visitorToken", "botProbability"]);
         if (n) {
           t(n);
         }
         var result = callback({}, val);
         return max && (result.bot = {
           probability : max
         }), [result, lastEndItem];
       }(d) : function(deps) {
         return deps instanceof Object && "n/a" === deps.visitorId;
       }(d) ? function(data, b) {
         var n = data.notification;
         var message = data.reason;
         var id = data.requestId;
         switch(n && t(n), message) {
           case "Not available for crawl bots":
             return done(id, true, b);
           case "Not available when User-Agent is unspecified":
             return done(id, void 0, b);
           case "Request failed":
           case "Request failed to process":
           case "Too many requests, rate limit exceeded":
             return filter(message, id);
           default:
             throw filter(message, id);
         }
       }(d, i) : remove(value);
     }
     /**
      * @param {?} data
      * @param {string} cb
      * @param {?} res
      * @return {?}
      */
     function reject(data, cb, res) {
       switch(data.code) {
         case "NotAvailableForCrawlBots":
           return done(cb, true, res);
         case "NotAvailableWithoutUA":
           return done(cb, void 0, res);
         case "Failed":
         case "RequestTimeout":
         case "TooManyRequests":
           return filter(handle(data), cb, data);
         default:
           throw filter(handle(data), cb, data);
       }
     }
     /**
      * @param {?} event
      * @return {?}
      */
     function handle(event) {
       var key = event.code;
       var result = event.message;
       if (void 0 === key) {
         return result;
       }
       if (Object.prototype.hasOwnProperty.call(params, key)) {
         var val = params[key];
         if (void 0 !== val) {
           return val;
         }
       }
       return open(key);
     }
     /**
      * @param {string} id
      * @param {number} collection
      * @param {?} next
      * @return {?}
      */
     function done(id, collection, next) {
       var options = {
         requestId : id,
         visitorFound : false,
         visitorId : ""
       };
       if (!next) {
         return [options];
       }
       var current = callback(callback({}, options), {
         bot : {
           probability : 1
         },
         incognito : false,
         browserName : "n/a",
         browserVersion : "n/a",
         device : "n/a",
         ip : "n/a",
         ipLocation : {},
         os : "n/a",
         osVersion : "n/a"
       });
       return void 0 !== collection && (current.bot.safe = collection), [current];
     }
     /**
      * @param {string} action
      * @param {string} id
      * @param {?} data
      * @return {?}
      */
     function filter(action, id, data) {
       /** @type {!Error} */
       var e = new Error(action);
       return void 0 !== id && (e.requestId = id), void 0 !== data && (e.raw = data), e;
     }
     /**
      * @param {!Object} documents
      * @return {undefined}
      */
     function reply(documents) {
       if (!(null == documents)) {
         documents.forEach(t);
       }
     }
     /**
      * @param {!Object} data
      * @return {undefined}
      */
     function t(data) {
       var trackId = data.level;
       var msg = data.message;
       if ("error" === trackId) {
         console.error(msg);
       } else {
         if ("warning" === trackId) {
           console.warn(msg);
         } else {
           console.log(msg);
         }
       }
     }
     /**
      * @param {!Object} data
      * @return {?}
      */
     function remove(data) {
       var ret = filter("Response cannot be parsed", void 0, {
         httpStatusCode : data.status,
         bodyBase64 : sort(data.body)
       });
       if (data.status >= 500) {
         return ret;
       }
       throw ret;
     }
     /**
      * @param {?} obj
      * @param {!Array} element
      * @param {number} loop
      * @param {number} i
      * @param {!Function} val
      * @return {?}
      */
     function loop(obj, element, loop, i, val) {
       if (void 0 === val) {
         /** @type {function(): ?} */
         val = foo;
       }
       /** @type {number} */
       var offset = val() % (loop + 1);
       var t = function(s) {
         if ("function" == typeof TextEncoder) {
           return (new TextEncoder).encode(s);
         }
         /** @type {string} */
         var byteString = unescape(encodeURI(s));
         /** @type {!Uint8Array} */
         var ret = new Uint8Array(byteString.length);
         /** @type {number} */
         var i = 0;
         for (; i < byteString.length; ++i) {
           /** @type {number} */
           ret[i] = byteString.charCodeAt(i);
         }
         return ret;
       }(JSON.stringify(obj));
       var BUFFER_ALLOCATION_SIZE = 1 + element.length + 1 + offset + i + t.length;
       /** @type {!ArrayBuffer} */
       var buffer = new ArrayBuffer(BUFFER_ALLOCATION_SIZE);
       /** @type {!Uint8Array} */
       var d = new Uint8Array(buffer);
       /** @type {number} */
       var e = 0;
       var v = val();
       d[e++] = v;
       /** @type {number} */
       var y = 0;
       /** @type {!Array} */
       var box = element;
       for (; y < box.length; y++) {
         var y0 = box[y];
         d[e++] = v + y0;
       }
       d[e++] = v + offset;
       /** @type {number} */
       var k = 0;
       for (; k < offset; ++k) {
         d[e++] = val();
       }
       /** @type {!Uint8Array} */
       var ret = new Uint8Array(i);
       /** @type {number} */
       k = 0;
       for (; k < i; ++k) {
         ret[k] = val();
         /** @type {number} */
         d[e++] = ret[k];
       }
       /** @type {number} */
       k = 0;
       for (; k < t.length; ++k) {
         /** @type {number} */
         d[e++] = t[k] ^ ret[k % i];
       }
       return buffer;
     }
     /**
      * @param {?} value
      * @param {!Array} test
      * @param {number} len
      * @return {?}
      */
     function write(value, test, len) {
       /**
        * @return {?}
        */
       var op = function() {
         throw new Error("Invalid data");
       };
       var a = slice(value);
       if (a.length < test.length + 2) {
         op();
       }
       /** @type {number} */
       var i = 0;
       for (; i < test.length; ++i) {
         if (Number(a[1 + i], a[0]) !== test[i]) {
           op();
         }
       }
       var s = 1 + test.length;
       var offset = Number(a[s], a[0]);
       if (a.length < s + 1 + offset + len) {
         op();
       }
       var index = s + 1 + offset;
       var start = index + len;
       /** @type {!Uint8Array} */
       var data = new Uint8Array(a.length - start);
       /** @type {number} */
       i = 0;
       for (; i < data.length; ++i) {
         /** @type {number} */
         data[i] = a[start + i] ^ a[index + i % len];
       }
       return JSON.parse(ab2str(data));
     }
     /**
      * @param {string} d
      * @param {?} s
      * @return {?}
      */
     function search(d, s) {
       if (s) {
         return s;
       }
       /** @type {string} */
       var e = "api.fpjs.io";
       return "us" !== d && (e = d + "." + e), "https://" + e;
     }
     /**
      * @param {!Object} that
      * @param {!Object} obj
      * @param {?} a
      * @return {?}
      */
     function merge(that, obj, a) {
       var url = that.endpoint;
       var malakh = that.extendedResult;
       var uncert = void 0 !== malakh && malakh;
       var result = stringify(that, ["endpoint", "extendedResult"]);
       return extend(this, void 0, void 0, function() {
         var e;
         var r;
         var s;
         return then(this, function(_context) {
           switch(_context.label) {
             case 0:
               return e = (otherUrl = url) + (-1 === otherUrl.indexOf("?") ? "?" : "&") + "cv=" + encodeURIComponent("3.4.0"), r = function(e) {
                 var data;
                 var Preset;
                 var options = e.components;
                 var a = e.componentsDuration;
                 var t = e.token;
                 var m = e.visitorId;
                 var dy = e.visitorToken;
                 var self = e.tls;
                 var source = e.tag;
                 var pubDateEl = e.ipResolution;
                 var description = e.extendedResult;
                 var v = e.linkedId;
                 /** @type {number} */
                 var i = "full" === pubDateEl ? 2 : 1;
                 return callback(callback(((data = {}).c = t, data.url = location.href, data.d = a, data.vid = m[0] || m[1] || void 0, data.ls = m[1] ? 1 : void 0, data.t = function(value) {
                   return value && "object" == typeof value ? value : null != value ? {
                     tag : value
                   } : void 0;
                 }(source), data.i = i, data.cbd = description ? 1 : void 0, data.lid = v, data.cr = document.referrer || void 0, data), function(options) {
                   var _data;
                   var a;
                   var i;
                   var data = ((_data = {}).j = void 0, _data.je = void 0, _data);
                   if (!options) {
                     return data;
                   }
                   if (options.error) {
                     var f = options.error;
                     var l = f.message;
                     if (isFunction(f)) {
                       switch(f.s) {
                         case -2:
                           /** @type {string} */
                           l = "Abort";
                           break;
                         case -3:
                           /** @type {string} */
                           l = "Timeout";
                           break;
                         case -4:
                           /** @type {string} */
                           l = "Connection error";
                       }
                     }
                     return callback(callback({}, data), ((a = {}).je = l, a));
                   }
                   return callback(callback({}, data), ((i = {}).j = options.value, i));
                 }(self)), ((Preset = {}).k1 = each(options.osCpu), Preset.k2 = each(options.languages), Preset.k3 = each(options.colorDepth), Preset.k4 = each(options.deviceMemory), Preset.k5 = function(e) {
                   if (!e.error) {
                     return e.value.map(function(canCreateDiscussions) {
                       return null === canCreateDiscussions ? -1 : canCreateDiscussions;
                     });
                   }
                 }(options.screenResolution), Preset.k6 = each(options[11], void 0, []), Preset.k7 = each(options.hardwareConcurrency, void 0, 1), Preset.k8 = each(options[12]), Preset.k9 = each(options[13]), Preset.k10 = list(each(options.sessionStorage)), Preset.k11 = list(each(options.localStorage)), Preset.k12 = list(each(options.indexedDB)), Preset.k13 = list(each(options.openDatabase)), Preset.k14 = each(options.cpuClass), Preset.k15 = each(options[16]), Preset.k16 = function(opts) {
                   return opts.error || view() ? [] : opts.value;
                 }(options.plugins), Preset.k17 = function(options) {
                   if (options) {
                     return callback(callback({}, options), {
                       data : defined(options.data)
                     });
                   }
                 }(each(options[14])), Preset.k18 = 0, Preset.k19 = each(options.touchSupport), Preset.k20 = each(options.fonts, []), Preset.k21 = each(options.audio, -4), Preset.k22 = list(each(options[15])), Preset.k23 = each(options[20]), Preset.k24 = each(options[21]), Preset.k25 = list(each(options[22])), Preset.k26 = list(each(options[18])), Preset.k27 = each(options.vendor), Preset.k28 = list(each(options[17])), Preset.k29 = list(each(options[10])), Preset.k30 = list(each(options[19])), Preset.k31 = 
                 list(each(options[4], false)), Preset.k32 = list(each(options.cookiesEnabled, false)), Preset.k33 = list(each(options[25])), Preset.k35 = function(aUrl) {
                   var c = aUrl.value;
                   if (c && -6 !== c && -7 !== c && -8 !== c) {
                     return "number" == typeof c ? {
                       s : c,
                       v : null
                     } : {
                       s : 0,
                       v : c.map(function(joined) {
                         return normalize(joined, 255);
                       })
                     };
                   }
                 }(options[0]), Preset.s1 = loadAll(options.osCpu, -1), Preset.s2 = contains(options.languages), Preset.s3 = contains(options.colorDepth), Preset.s4 = loadAll(options.deviceMemory, -1), Preset.s5 = expect(options.screenResolution, function(buildInTemplates) {
                   return {
                     s : 0,
                     v : buildInTemplates.map(function(canCreateDiscussions) {
                       return null === canCreateDiscussions ? -1 : canCreateDiscussions;
                     })
                   };
                 }), Preset.s6 = expect(options[5], function(buildInTemplates) {
                   return {
                     s : 0,
                     v : buildInTemplates.map(function(canCreateDiscussions) {
                       return null === canCreateDiscussions ? -1 : canCreateDiscussions;
                     })
                   };
                 }), Preset.s7 = loadAll(options.hardwareConcurrency, -1), Preset.s8 = test(options[6]), Preset.s9 = contains(options.timezone), Preset.s10 = contains(options.sessionStorage), Preset.s11 = contains(options.localStorage), Preset.s12 = loadAll(options.indexedDB, -1), Preset.s13 = contains(options.openDatabase), Preset.s14 = loadAll(options.cpuClass, -1), Preset.s15 = contains(options.platform), Preset.s16 = loadAll(options.plugins, -1), Preset.s17 = expect(options.canvas, function(options) {
                   return {
                     s : 0,
                     v : callback(callback({}, options), {
                       geometry : defined(options.geometry),
                       text : defined(options.text)
                     })
                   };
                 }), Preset.s18 = test(options[7]), Preset.s19 = contains(options.touchSupport), Preset.s20 = contains(options.fonts), Preset.s21 = expect(options.audio, function(state) {
                   return -1 === state || -2 === state || -3 === state ? {
                     s : state,
                     v : null
                   } : {
                     s : 0,
                     v : state
                   };
                 }), Preset.s22 = loadAll(options[23], -1), Preset.s26 = test(options[8]), Preset.s27 = contains(options.vendor), Preset.s28 = contains(options.vendorFlavors), Preset.s30 = loadAll(options[24], -1), Preset.s31 = contains(options[4]), Preset.s32 = contains(options.cookiesEnabled), Preset.s33 = contains(options[25]), Preset.s34 = test(options[0], function(buildInTemplates) {
                   return buildInTemplates.map(function(joined) {
                     return normalize(joined, 255);
                   });
                 }), Preset.s35 = getValue(options[3]), Preset.s36 = loadAll(options.domBlockers, -1), Preset.s37 = loadAll(options.colorGamut, -1), Preset.s38 = loadAll(options.contrast, -1), Preset.s39 = loadAll(options.forcedColors, -1), Preset.s40 = loadAll(options.hdr, -1), Preset.s41 = loadAll(options.invertedColors, -1), Preset.s42 = loadAll(options.monochrome, -1), Preset.s43 = loadAll(options.reducedMotion, -1), Preset.s44 = loadAll(options[26], -1), Preset.s45 = contains(options[27]), Preset.s46 = 
                 expect(options.math, function(files) {
                   return {
                     s : 0,
                     v : defined(Object.keys(files).map(function(f) {
                       return f + "=" + files[f];
                     }).join(","))
                   };
                 }), Preset.s47 = expect(options.j, function(data) {
                   return {
                     s : data ? 0 : -1,
                     v : data ? callback(callback({}, data), {
                       contextAttributes : defined(data.contextAttributes),
                       parameters : defined(data.parameters),
                       shaderPrecisions : defined(data.shaderPrecisions),
                       extensions : defined(data.extensions),
                       extensionParameters : defined(data.extensionParameters),
                       fingerprint : defined(data.fingerprint)
                     }) : null
                   };
                 }), Preset.s48 = contains(options[28]), Preset.s49 = loadAll(options[29], -1), Preset.s50 = loadAll(options[30], -1), Preset.s51 = contains(options.fontPreferences), Preset.s52 = expect(options[2], function(a) {
                   return {
                     s : "number" == typeof a ? a : a.length ? 0 : 1,
                     v : "number" == typeof a ? "" : defined(JSON.stringify(a))
                   };
                 }), Preset.s53 = getValue(options[31]), Preset.s54 = test(options[1]), Preset.s55 = function(b) {
                   var value = b[0];
                   var f = b[1];
                   return void 0 !== value && void 0 !== f ? {
                     s : 0,
                     v : value || f
                   } : void 0 !== value ? {
                     s : 1,
                     v : value
                   } : void 0 !== f ? {
                     s : 2,
                     v : f
                   } : {
                     s : -1,
                     v : null
                   };
                 }(dy), Preset.s56 = function(data) {
                   if (!data) {
                     return {
                       s : -1,
                       v : null
                     };
                   }
                   if (data.error) {
                     var result = data.error;
                     return isFunction(result) ? {
                       s : result.s,
                       v : null
                     } : {
                       e : result.message
                     };
                   }
                   return {
                     s : 0,
                     v : data.value
                   };
                 }(self), Preset.s57 = loadAll(options[32], -1), Preset.s58 = loadAll(options[9], -1), Preset.s59 = contains(options[33]), Preset.s60 = contains(options[34]), Preset.s61 = contains(options[35]), Preset.s62 = contains(options[36]), Preset.s63 = contains(options[37]), Preset.s64 = contains(options[38]), Preset.s65 = contains(options[39]), Preset));
               }(callback({
                 extendedResult : uncert
               }, result)), s = 0, [4, l(a, function() {
                 return {
                   e : 15,
                   endpoint : e,
                   request : r
                 };
               }, function(result) {
                 return {
                   e : 16,
                   result : result
                 };
               }, function(error_func) {
                 return {
                   e : 17,
                   error : error_func
                 };
               }, function() {
                 return function(weightsDistribution, i) {
                   var o_old;
                   var js = compile(300, 1E4);
                   return join(null == i ? void 0 : i.catch(function(o) {
                     if (!o_old) {
                       /** @type {string} */
                       o_old = o;
                     }
                   }).then(function() {
                     throw o_old;
                   }), function() {
                     var data_duplex_;
                     var o;
                     var name;
                     return then(this, function(_context) {
                       switch(_context.label) {
                         case 0:
                           return data_duplex_ = Date.now(), [4, weightsDistribution(i)];
                         case 1:
                           return (o = _context.sent()) instanceof Error ? (o_old = o, name = js.next().value, "Too many requests, rate limit exceeded" === o.message && (name = 1E3 + 5 * name), [4, property(data_duplex_ + name - Date.now())]) : [2, o];
                         case 2:
                           _context.sent();
                           /** @type {number} */
                           _context.label = 3;
                         case 3:
                           return [3, 0];
                         case 4:
                           return [2];
                       }
                     });
                   });
                 }(function(statements) {
                   return function(o, s, n, i, a, b) {
                     return extend(this, void 0, void 0, function() {
                       var moduleName;
                       var allBox;
                       return then(this, function(_a) {
                         switch(_a.label) {
                           case 0:
                             return _a.trys.push([0, 2, , 3]), [4, l(b, function() {
                               return {
                                 e : 18,
                                 tryNumber : i
                               };
                             }, function(result) {
                               var error = result.status;
                               var body = result.body;
                               var data = result.bodyData;
                               var persistedDto = result.isSecret;
                               return {
                                 e : 19,
                                 tryNumber : i,
                                 status : error,
                                 body : null != data ? data : body,
                                 isSecret : persistedDto
                               };
                             }, function(error_func) {
                               return {
                                 e : 20,
                                 tryNumber : i,
                                 error : error_func
                               };
                             }, function() {
                               return function(node) {
                                 return extend(this, void 0, void 0, function() {
                                   var evt;
                                   var observable;
                                   var i;
                                   return then(this, function(_context) {
                                     switch(_context.label) {
                                       case 0:
                                         return [4, request(callback(callback({}, node), {
                                           body : (ref$ = node.body, loop(ref$, options, 3, 7)),
                                           responseFormat : "binary"
                                         }))];
                                       case 1:
                                         evt = _context.sent();
                                         try {
                                           target = evt.body;
                                           observable = write(target, options, 7);
                                           /** @type {boolean} */
                                           i = true;
                                         } catch (Bn) {
                                           try {
                                             /** @type {*} */
                                             observable = JSON.parse(ab2str(evt.body));
                                             /** @type {boolean} */
                                             i = false;
                                           } catch (l) {
                                           }
                                         }
                                         return [2, callback(callback({}, evt), {
                                           bodyData : observable,
                                           isSecret : i
                                         })];
                                     }
                                     var target;
                                     var ref$;
                                   });
                                 });
                               }({
                                 url : o,
                                 method : "post",
                                 body : s,
                                 headers : {
                                   "Content-Type" : "text/plain"
                                 },
                                 withCredentials : true,
                                 abort : a
                               });
                             })];
                           case 1:
                             return moduleName = _a.sent(), [3, 3];
                           case 2:
                             return allBox = _a.sent(), [2, new Error("AbortError" === allBox.name ? "Network request aborted" : "Network connection error")];
                           case 3:
                             return [2, update(moduleName, n)];
                         }
                       });
                     });
                   }(e, r, uncert, s++, statements, a);
                 }, obj);
               })];
             case 1:
               return [2, _context.sent()];
           }
           var otherUrl;
         });
       });
     }
     /**
      * @param {!HTMLCanvasElement} elem
      * @return {?}
      */
     function capture(elem) {
       return elem.toDataURL();
     }
     /**
      * @return {?}
      */
     function randomInt() {
       var obj;
       var hostRules;
       var arr = secureRandom();
       return (null === (hostRules = null === (obj = window[arr[0]]) || void 0 === obj ? void 0 : obj[arr[1]]) || void 0 === hostRules ? void 0 : hostRules[arr[2]]) || 1073741824;
     }
     /**
      * @return {?}
      */
     function secureRandom() {
       return write(new Uint32Array([1238629110, 448276002, 3812774028, 808844344, 1040086494, 3917076003, 2006609522, 3391962601, 1618783843, 902064594, 3846817827, 1945380650, 2587245025, 908308022, 938305751, 2922813991, 1910122279, 3709215973, 809499767, 66414809, 3983071030, 916072247, 3711377838, 822474088, 300514777, 4182498348, 953759295, 3408360096, 591258990, 229539788]), [], 5);
     }
     /**
      * @return {?}
      */
     function isEligibleHash() {
       var keySplit = vec3();
       var transportMessages = window[keySplit[0]];
       if (!transportMessages) {
         return false;
       }
       try {
         transportMessages[keySplit[1]][keySplit[2]](keySplit[3], keySplit[4], {}, function() {
         });
       } catch (instanceFillValue) {
         return !(new RegExp(keySplit[5])).test(instanceFillValue);
       }
       return false;
     }
     /**
      * @return {?}
      */
     function syncSubmissionGrade() {
       return extend(this, void 0, void 0, function() {
         var doc;
         var lastrayafteradjust;
         var embed;
         return then(this, function(_a) {
           switch(_a.label) {
             case 0:
               /** @type {!HTMLDocument} */
               doc = document;
               lastrayafteradjust = vec3();
               /** @type {string} */
               (embed = doc.createElement("iframe")).style.display = "none";
               /** @type {number} */
               _a.label = 1;
             case 1:
               return doc.body ? [3, 3] : [4, property(50)];
             case 2:
               return _a.sent(), [3, 1];
             case 3:
               return _a.trys.push([3, , 5, 6]), doc.body.appendChild(embed), [4, Promise.race([property(20, false), new Promise(function(saveNotifs) {
                 if (embed.contentWindow) {
                   embed.contentWindow[lastrayafteradjust[6]].addEventListener("error", function() {
                     return saveNotifs(true);
                   });
                 } else {
                   saveNotifs(false);
                 }
               })])];
             case 4:
               return [2, _a.sent()];
             case 5:
               return embed.remove(), [7];
             case 6:
               return [2];
           }
         });
       });
     }
     /**
      * @return {?}
      */
     function connect() {
       /** @type {function(this:Window, string, string, string, number, (DatabaseCallback|function((Database|null)): ?|null)=): !Database} */
       var openDatabase = window.openDatabase;
       /** @type {(Storage|null)} */
       var storage = window.localStorage;
       try {
         openDatabase(null, null, null, null);
       } catch (n) {
         return true;
       }
       try {
         return storage.setItem("test", "1"), storage.removeItem("test"), false;
       } catch (n) {
         return true;
       }
     }
     /**
      * @return {?}
      */
     function vec3() {
       return write(new Uint32Array([571803394, 2333197341, 667974149, 459532809, 2807590137, 1996360231, 241878290, 3893584866, 1793199716, 1479125268, 4262158585, 1442777440, 325646623, 3826480888, 665278571, 175243026, 2757050360, 1760166496, 1415636746, 2836884200, 2012960809, 241499411, 2840995822, 1912086370, 1482750223, 4212860839, 1726092917, 359464731, 3894101733, 1487478637]), [], 3);
     }
     /**
      * @return {?}
      */
     function demuxMp3() {
       return extend(this, void 0, void 0, function() {
         var ii;
         var v;
         var n;
         var i;
         var addedNode;
         return then(this, function(_context) {
           switch(_context.label) {
             case 0:
               /** @type {number} */
               ii = 0;
               /** @type {!Array} */
               v = name;
               /** @type {number} */
               _context.label = 1;
             case 1:
               return ii < v.length ? (n = v[ii], i = n[0], addedNode = n[1], i() ? [4, addedNode()] : [3, 3]) : [3, 4];
             case 2:
               return [2, _context.sent()];
             case 3:
               return ii++, [3, 1];
             case 4:
               return [2, false];
           }
         });
       });
     }
     /**
      * @return {?}
      */
     function select() {
       return extend(this, void 0, void 0, function() {
         var w;
         var RTCPeerConnection;
         var pc;
         return then(this, function(_a) {
           switch(_a.label) {
             case 0:
               if (w = window, !(RTCPeerConnection = w.RTCPeerConnection || w.webkitRTCPeerConnection)) {
                 return [2, -3];
               }
               try {
                 pc = new RTCPeerConnection({
                   iceServers : []
                 });
               } catch (allBox) {
                 if ("NotSupportedError" === allBox.name) {
                   return [2, -6];
                 }
                 throw allBox;
               }
               /** @type {number} */
               _a.label = 1;
             case 1:
               return _a.trys.push([1, , 3, 4]), [4, new Promise(function(func, j) {
                 var job;
                 /** @type {!Array} */
                 var self = [];
                 /**
                  * @return {?}
                  */
                 var value = function() {
                   return func(gen(self));
                 };
                 /**
                  * @param {!Object} event
                  * @return {?}
                  */
                 pc.onicecandidate = function(event) {
                   var candidate = event.candidate;
                   if (!candidate) {
                     return value();
                   }
                   if (candidate.candidate) {
                     if (self.push(candidate.candidate), self.length >= 6) {
                       return value();
                     }
                     if (1 === self.length) {
                       log(value, 10);
                     }
                   }
                 };
                 /**
                  * @return {undefined}
                  */
                 pc.onicegatheringstatechange = function() {
                   if ("complete" === pc.iceGatheringState) {
                     value();
                   }
                 };
                 pc.onicecandidateerror = j;
                 try {
                   if (!(null === (job = pc.createDataChannel) || void 0 === job)) {
                     job.call(pc, "test");
                   }
                 } catch (elem) {
                   return void("NotSupportedError" === elem.name ? func(-7) : j(elem));
                 }
                 var result = function(lang, constraints) {
                   try {
                     return lang.createOffer(constraints);
                   } catch (importError) {
                     if (/\bcreateOffer\b.*(\bcallback\b.*\bnot a function\b|\barguments required\b.*\bpresent\b)/i.test(importError.message)) {
                       return new Promise(function(_options, onError) {
                         lang.createOffer(_options, onError, constraints);
                       });
                     }
                     throw importError;
                   }
                 }(pc, style() ? {
                   offerToReceiveAudio : true
                 } : void 0);
                 if (void 0 === result) {
                   func(-8);
                 } else {
                   result.then(function(desc) {
                     return pc.setLocalDescription(desc);
                   }, j);
                 }
               })];
             case 2:
               return [2, _a.sent()];
             case 3:
               try {
                 pc.close();
               } catch (i) {
               }
               return [7];
             case 4:
               return [2];
           }
         });
       });
     }
     /**
      * @param {!Object} node
      * @return {?}
      */
     function transOutNode(node) {
       if ("InvalidAccessError" === node.name) {
         if (/\bfrom\b.*\binsecure\b/i.test(node.message)) {
           return {
             s : -2,
             v : null
           };
         }
         if (/\bdifferent\b.*\borigin\b.*top.level\b.*\bframe\b/i.test(node.message)) {
           return {
             s : -3,
             v : null
           };
         }
       }
       throw node;
     }
     /**
      * @param {string} value
      * @return {?}
      */
     function isUndefined(value) {
       return matchMedia("(prefers-color-scheme: " + value + ")").matches;
     }
     /**
      * @param {number} node
      * @return {?}
      */
     function calculateLargestZIndex(node) {
       /** @type {number} */
       var w = Number(node);
       return isNaN(w) ? -1 : w;
     }
     /**
      * @param {!WebGLRenderingContext} gl
      * @param {string} type
      * @param {string} name
      * @return {?}
      */
     function Context(gl, type, name) {
       var precision = gl.getShaderPrecisionFormat(gl[type], gl[name]);
       return precision ? [precision.rangeMin, precision.rangeMax, precision.precision] : [];
     }
     /**
      * @param {string} value
      * @return {?}
      */
     function excludeNone(value) {
       return "string" == typeof value && !value.match(/[^A-Z0-9_x]/);
     }
     /**
      * @param {!Object} v
      * @return {?}
      */
     function attr(v) {
       return Object.keys(v.__proto__).filter(excludeNone);
     }
     /**
      * @param {?} left
      * @return {?}
      */
     function expand(left) {
       /**
        * @param {string} pathString
        * @return {?}
        */
       var resolve = function(pathString) {
         return pathString.replace(/([,\\])/g, "\\$1");
       };
       return left.map(function(v) {
         return [resolve(v.voiceURI), resolve(v.name), resolve(v.lang), v.localService ? "1" : "0", v.default ? "1" : "0"].join(",");
       }).sort();
     }
     /**
      * @param {!NodeList} lanList
      * @return {?}
      */
     function success(lanList) {
       return extend(this, void 0, void 0, function() {
         var RTCPeerConnection;
         var connection;
         var t;
         var password;
         var qrcodeUrl;
         var pc;
         var newValue;
         var initializeCheckTimer;
         var item = this;
         return then(this, function(_a) {
           switch(_a.label) {
             case 0:
               if (!(RTCPeerConnection = window.RTCPeerConnection)) {
                 return [2, -5];
               }
               /** @type {string} */
               connection = Math.random().toString();
               /** @type {!Map} */
               t = new Map;
               /** @type {string} */
               qrcodeUrl = "candidate:0 1 udp 2113937151 ${addr} ${port} typ host generation 0 ufrag " + (password = "ABCD") + " network-cost 999";
               pc = new RTCPeerConnection({
                 iceTransportPolicy : "all"
               });
               newValue = pc.createDataChannel(connection);
               /** @type {number} */
               initializeCheckTimer = 0;
               /** @type {number} */
               _a.label = 1;
             case 1:
               return _a.trys.push([1, , 3, 4]), [4, new Promise(function(returnResultsFn, PL$58) {
                 log(function() {
                   return returnResultsFn(-4);
                 }, 1E3);
                 /**
                  * @return {undefined}
                  */
                 pc.oniceconnectionstatechange = function() {
                   if ("checking" === pc.iceConnectionState) {
                     /** @type {number} */
                     initializeCheckTimer = setInterval(function() {
                       return extend(item, void 0, void 0, function() {
                         var q;
                         var r;
                         return then(this, function(_context) {
                           switch(_context.label) {
                             case 0:
                               return "checking" !== pc.iceConnectionState ? [2, returnResultsFn([])] : [4, pc.getStats()];
                             case 1:
                               return q = _context.sent(), r = [], q.forEach(function(row) {
                                 if ("remote-candidate" === row.type) {
                                   var p = t.get(row.port);
                                   r.push(p);
                                 }
                               }), r.length > 0 && returnResultsFn(r), [2];
                           }
                         });
                       });
                     }, 30);
                   }
                 };
                 pc.createOffer().then(function(sessionDescription) {
                   var sdp = sessionDescription.sdp;
                   if (!sdp) {
                     return returnResultsFn(-5);
                   }
                   /** @type {!Array} */
                   var text = [];
                   /** @type {number} */
                   var lanCnt = 0;
                   for (; lanCnt < lanList.length; lanCnt++) {
                     var l = lanList[lanCnt];
                     /** @type {number} */
                     var a = 50003 + lanCnt;
                     var fileExtension = qrcodeUrl.replace("${addr}", l).replace("${port}", a.toString());
                     t.set(a, l);
                     text.push("a=" + fileExtension);
                   }
                   var remoteOffer = {
                     type : "answer",
                     sdp : sdp.replace(/a=ice-ufrag:(.*?)\s{1,2}/, "a=ice-ufrag:" + password + "\r\n").replace(/a=setup:(.*?)\s{1,2}/, "a=setup:active\r\n").replace(/c=IN IP4 ([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+)/, function(isSlidingUp, canCreateDiscussions) {
                       return "c=IN IP4 " + canCreateDiscussions + "\r\nb=AS:30\r\n" + text.join("\r\n");
                     })
                   };
                   return pc.setLocalDescription(sessionDescription), pc.setRemoteDescription(remoteOffer);
                 }, PL$58);
               })];
             case 2:
               return [2, _a.sent()];
             case 3:
               return newValue.close(), pc.close(), clearInterval(initializeCheckTimer), [7];
             case 4:
               return [2];
           }
         });
       });
     }
     /**
      * @param {?} header
      * @return {?}
      */
     function retriedRequest(header) {
       return extend(this, void 0, void 0, function() {
         var child;
         var item = this;
         return then(this, function(_a) {
           switch(_a.label) {
             case 0:
               child = new AbortController;
               /** @type {number} */
               _a.label = 1;
             case 1:
               return _a.trys.push([1, , 3, 4]), [4, Promise.race(gen(header.map(function(url) {
                 return extend(item, void 0, void 0, function() {
                   return then(this, function(_a) {
                     switch(_a.label) {
                       case 0:
                         return _a.trys.push([0, 2, , 3]), [4, fetch("http" + ("http:" === location.protocol ? "" : "s") + "://" + url, {
                           signal : child.signal
                         })];
                       case 1:
                       case 2:
                         return _a.sent(), [3, 3];
                       case 3:
                         return [2, url];
                     }
                   });
                 });
               }), [action(500, -4)]))];
             case 2:
               return [2, _a.sent()];
             case 3:
               return child.abort(), [7];
             case 4:
               return [2];
           }
         });
       });
     }
     /**
      * @param {string} o
      * @return {?}
      */
     function read(o) {
       /** @type {string} */
       var a = o + "=";
       /** @type {number} */
       var j = 0;
       /** @type {!Array<string>} */
       var not_results = document.cookie.split(";");
       for (; j < not_results.length; j++) {
         /** @type {string} */
         var n = not_results[j];
         /** @type {number} */
         var i = 0;
         for (; " " === n[i] && i < n.length;) {
           ++i;
         }
         if (n.indexOf(a) === i) {
           return n.slice(i + a.length);
         }
       }
     }
     /**
      * @param {string} text
      * @param {string} type
      * @param {number} prop
      * @param {string} val
      * @return {undefined}
      */
     function debug(text, type, prop, val) {
       /** @type {string} */
       var prefix = text + "=" + type;
       /** @type {string} */
       var CredentialScope = "expires=" + (new Date(Date.now() + 24 * prop * 60 * 60 * 1E3)).toUTCString();
       /** @type {string} */
       var action = val ? "domain=" + val : "";
       /** @type {string} */
       document.cookie = [prefix, "path=/", CredentialScope, action, "SameSite=Lax"].join("; ");
     }
     /**
      * @param {string} s
      * @param {!Function} t
      * @return {?}
      */
     function setup(s, t) {
       var i = s.length;
       do {
         if (i = i > 0 ? s.lastIndexOf(".", i - 1) : -1, false === t(s.slice(i + 1))) {
           return false;
         }
       } while (i >= 0);
       return true;
     }
     /**
      * @param {string} d
      * @return {?}
      */
     function step(d) {
       return [read(d), _update(d)];
     }
     /**
      * @param {string} fn
      * @param {string} selector
      * @return {undefined}
      */
     function $(fn, selector) {
       (function(text, value, p2) {
         /** @type {string} */
         var url = location.hostname;
         setup(url, function(t) {
           !function(data, b) {
             debug(data, "", -1, b);
           }(text, t);
         });
         if (!(p2 < 0)) {
           if (setup(url, function(xyz) {
             return debug(text, value, p2, xyz), read(text) !== value;
           })) {
             debug(text, value, p2);
           }
         }
       })(selector, fn, 365);
       (function(query, value) {
         var module;
         try {
           if (!(null === (module = null === localStorage || void 0 === localStorage ? void 0 : localStorage.setItem) || void 0 === module)) {
             module.call(localStorage, query, value);
           }
         } catch (r) {
         }
       })(selector, fn);
     }
     /**
      * @param {string} match
      * @return {?}
      */
     function _update(match) {
       var provider;
       var n;
       try {
         return null !== (n = null === (provider = null === localStorage || void 0 === localStorage ? void 0 : localStorage.getItem) || void 0 === provider ? void 0 : provider.call(localStorage, match)) && void 0 !== n ? n : void 0;
       } catch (r) {
       }
     }
     /**
      * @param {?} table
      * @param {!Object} node
      * @param {string} sid
      * @param {string} type
      * @param {?} id
      * @param {string} index
      * @param {?} el
      * @return {?}
      */
     function insert(table, node, sid, type, id, index, el) {
       var item = this;
       /**
        * @param {string} data
        * @param {?} prefix
        * @param {boolean} map
        * @param {undefined} value
        * @param {string} position
        * @param {string} c
        * @param {?} result
        * @return {?}
        */
       var insert = function(data, prefix, map, value, position, c, result) {
         return extend(item, void 0, void 0, function() {
           var two;
           var args;
           var components;
           var options;
           var values;
           var node;
           var y;
           var t;
           var that;
           return then(this, function(_context) {
             switch(_context.label) {
               case 0:
                 return two = action(value).then(function() {
                   throw new Error("Client timeout");
                 }), [4, Promise.race([two, Promise.all([create(result), next(value, map, result)])])];
               case 1:
                 return args = _context.sent(), components = args[0], options = args[1], values = index, node = index + "_t", [4, merge({
                   token : sid,
                   endpoint : search(type, id),
                   components : components,
                   componentsDuration : 0,
                   tag : data,
                   visitorId : step(values),
                   visitorToken : step(node),
                   tls : options,
                   linkedId : prefix,
                   extendedResult : position,
                   ipResolution : c
                 }, two, result)];
               case 2:
                 return y = _context.sent(), t = y[0], (that = y[1]) ? $(that, node) : t.visitorId && $(t.visitorId, values), [2, t];
             }
           });
         });
       };
       /**
        * @param {number} duration
        * @param {boolean} func
        * @param {?} a
        * @return {?}
        */
       var next = function(duration, func, a) {
         return extend(item, void 0, void 0, function() {
           var next;
           var codeGeneratorFunc;
           var value;
           var result;
           var Console_error;
           return then(this, function(_a) {
             switch(_a.label) {
               case 0:
                 if (!node || func) {
                   return [2, void 0];
                 }
                 next = node[0];
                 codeGeneratorFunc = node[1];
                 /** @type {number} */
                 value = Math.min(Math.max(.1 * duration, codeGeneratorFunc + 1E4 - Date.now()), .4 * duration);
                 /** @type {number} */
                 _a.label = 1;
               case 1:
                 return _a.trys.push([1, 3, , 4]), [4, next(action(value))];
               case 2:
                 return result = _a.sent(), g(a, function() {
                   return {
                     e : 7,
                     result : result
                   };
                 }), [2, {
                   value : result
                 }];
               case 3:
                 return Console_error = _a.sent(), g(a, function() {
                   return {
                     e : 8,
                     error : Console_error
                   };
                 }), [2, {
                   error : Console_error
                 }];
               case 4:
                 return [2];
             }
           });
         });
       };
       /**
        * @param {?} t
        * @return {?}
        */
       var create = function(t) {
         return extend(item, void 0, void 0, function() {
           var o;
           var i;
           return then(this, function(_a) {
             switch(_a.label) {
               case 0:
                 return _a.trys.push([0, 2, , 3]), [4, table()];
               case 1:
                 return o = _a.sent(), g(t, function() {
                   return {
                     e : 13,
                     result : o
                   };
                 }), [2, o];
               case 2:
                 throw i = _a.sent(), g(t, function() {
                   return {
                     e : 14,
                     error : i
                   };
                 }), i;
               case 3:
                 return [2];
             }
           });
         });
       };
       return {
         get : function(args) {
           if (void 0 === args) {
             args = {};
           }
           var t = el && function(e, canCreateDiscussions) {
             return function(calendars) {
               return e(callback(callback({}, calendars), {
                 getCallId : canCreateDiscussions
               }));
             };
           }(el, first(8));
           return l(t, function() {
             return {
               e : 3,
               options : args
             };
           }, function(result) {
             return {
               e : 4,
               result : result
             };
           }, function(error_func) {
             return {
               e : 5,
               error : error_func
             };
           }, function() {
             var to = args.timeout;
             var end = void 0 === to ? 1E4 : to;
             var result = args.tag;
             var a = args.linkedId;
             var value = args.disableTls;
             var bottom = args.extendedResult;
             var left = args.ipResolution;
             return insert(result, a, value, end, bottom, left, t);
           });
         }
       };
     }
     exports.r(context);
     exports.d(context, "ERROR_BAD_REQUEST_FORMAT", function() {
       return Qn;
     });
     exports.d(context, "ERROR_BAD_RESPONSE_FORMAT", function() {
       return Bt;
     });
     exports.d(context, "ERROR_CLIENT_TIMEOUT", function() {
       return Nt;
     });
     exports.d(context, "ERROR_FORBIDDEN_HEADER", function() {
       return ir;
     });
     exports.d(context, "ERROR_FORBIDDEN_ORIGIN", function() {
       return rr;
     });
     exports.d(context, "ERROR_GENERAL_SERVER_FAILURE", function() {
       return er;
     });
     exports.d(context, "ERROR_NETWORK_ABORT", function() {
       return jt;
     });
     exports.d(context, "ERROR_NETWORK_CONNECTION", function() {
       return Lt;
     });
     exports.d(context, "ERROR_RATE_LIMIT", function() {
       return nr;
     });
     exports.d(context, "ERROR_SERVER_TIMEOUT", function() {
       return tr;
     });
     exports.d(context, "ERROR_SUBSCRIPTION_NOT_ACTIVE", function() {
       return h;
     });
     exports.d(context, "ERROR_TOKEN_EXPIRED", function() {
       return Zn;
     });
     exports.d(context, "ERROR_TOKEN_INVALID", function() {
       return Yn;
     });
     exports.d(context, "ERROR_TOKEN_MISSING", function() {
       return Xn;
     });
     exports.d(context, "ERROR_WRONG_REGION", function() {
       return _open;
     });
     exports.d(context, "load", function() {
       return loadSubGraph;
     });
     exports.d(context, "makeConsoleDebugger", function() {
       return analyze;
     });
     exports.d(context, "makeDebugReportBuilder", function() {
       return addCustomWindow;
     });
     exports.d(context, "makeMulticastDebugger", function() {
       return loadGroups;
     });
     exports.d(context, "makeRemoteDebugger", function() {
       return $request;
     });
     exports("RUBk");
     /**
      * @return {?}
      */
     var callback = function() {
       return (callback = Object.assign || function(result) {
         var src;
         /** @type {number} */
         var i = 1;
         /** @type {number} */
         var length = arguments.length;
         for (; i < length; i++) {
           var prop;
           for (prop in src = arguments[i]) {
             if (Object.prototype.hasOwnProperty.call(src, prop)) {
               result[prop] = src[prop];
             }
           }
         }
         return result;
       }).apply(this, arguments);
     };
     Object.create;
     Object.create;
     /** @type {!Array} */
     var baseFonts = ["monospace", "sans-serif", "serif"];
     /** @type {!Array} */
     var args = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", 
     "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];
     var text;
     var timer;
     var level = {
       abpIndo : ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", 'a[title="7naga poker" i]', '[title="ALIENBOLA" i]'],
       abpvn : ["#quangcaomb", ".i-said-no-thing-can-stop-me-warning.dark", ".quangcao", '[href^="https://r88.vn/"]', '[href^="https://zbet.vn/"]'],
       adBlockFinland : [".mainostila", ".sponsorit", ".ylamainos", 'a[href*="/clickthrgh.asp?"]', 'a[href^="https://app.readpeak.com/ads"]'],
       adBlockPersian : ["#navbar_notice_50", 'a[href^="https://iqoption.com/lp/mobile-partner/?aff="]', ".kadr", 'TABLE[width="140px"]', "#divAgahi"],
       adBlockWarningRemoval : ["#adblock_message", ".adblockInfo", ".deadblocker-header-bar", ".no-ad-reminder", "#AdBlockDialog"],
       adGuardAnnoyances : ['amp-embed[type="zen"]', ".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil"],
       adGuardBase : ["#gads_middle", ".tjads", ".BetterJsPopOverlay", "#ad_300X250", "#bannerfloat22"],
       adGuardChinese : ['a[href*=".123ch.cn"]', 'a[href*=".ttz5.cn"]', 'a[href*=".yabovip2027.com/"]', ".tm3all2h4b", "#j-new-ad"],
       adGuardFrench : ["#div_banniere_pub", 'a[href^="https://secure.securitetotale.fr/"]', 'a[href*="fducks.com/"]', 'a[href^="http://frtyd.com/"]', ".publicite1"],
       adGuardGerman : [".banneritemwerbung_head_1", ".boxstartwerbung", ".werbung3", 'a[href^="http://www.ichwuerde.com/?ref="]', 'a[href^="http://partners.adklick.de/tracking.php?"]'],
       adGuardJapanese : [".ad-text-blockA01", "._popIn_infinite_video", "[class^=blogroll_wrapper]", 'a[href^="http://ad2.trafficgate.net/"]', 'a[href^="http://www.rssad.jp/"]'],
       adGuardMobile : ["amp-auto-ads", "#mgid_iframe", ".amp_ad", "amp-sticky-ad", ".plugin-blogroll"],
       adGuardRussian : ['a[href^="https://ya-distrib.ru/r/"]', '[onclick*=".twkv.ru"]', ".reclama", 'div[id^="smi2adblock"]', 'div[id^="AdFox_banner_"]'],
       adGuardSocial : ['a[href^="//www.stumbleupon.com/submit?url="]', 'a[href^="//telegram.me/share/url?"]', ".etsy-tweet", "#inlineShare", ".popup-social"],
       adGuardSpanishPortuguese : ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", '[href^="http://ads.glispa.com/"]'],
       adGuardTrackingProtection : ['amp-embed[type="taboola"]', "#qoo-counter", 'a[href^="http://click.hotlog.ru/"]', 'a[href^="http://hitcounter.ru/top/stat.php"]', 'a[href^="http://top.mail.ru/jump"]'],
       adGuardTurkish : ["#backkapat", "#reklami", 'a[href^="http://adserv.ontek.com.tr/"]', 'a[href^="http://izlenzi.com/campaign/"]', 'a[href^="http://www.installads.net/"]'],
       bulgarian : ["td#freenet_table_ads", "#newAd", "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
       easyList : ['[lazy-ad="leftthin_banner"]', "#ad_300x250_2", "#interstitialAd", "#wide_ad_unit", ".showcaseAd"],
       easyListChina : ['a[href*=".wensixuetang.com/"]', 'A[href*="/hth107.com/"]', '.appguide-wrap[onclick*="bcebos.com"]', ".frontpageAdvM", "#taotaole"],
       easyListCookie : ["#CookieEU", "#__cookies_", "#les_cookies", ".asset_balaNotification", ".gdpr-tab"],
       easyListCzechSlovak : ["#onlajny-stickers", "#reklamni-box", ".reklama-megaboard", ".sklik", '[id^="sklikReklama"]'],
       easyListDutch : ["#advertentie", "#vipAdmarktBannerBlock", ".adstekst", 'a[href^="http://adserver.webads.nl/adclick/"]', "#semilo-lrectangle"],
       easyListGermany : ["#LxWerbeteaser", 'a[href^="http://www.kontakt-vermittler.de/?wm="]', ".werbung301", ".ads_bueroklammer", "#Werbung_Sky"],
       easyListItaly : [".box_adv_annunci", ".sb-box-pubbliredazionale", 'a[href^="http://affiliazioniads.snai.it/"]', 'a[href^="https://adserver.html.it/"]', 'a[href^="https://affiliazioniads.snai.it/"]'],
       easyListLithuania : [".reklamos_tarpas", ".reklamos_nuorodos", 'img[alt="Reklaminis skydelis"]', 'img[alt="Dedikuoti.lt serveriai"]', 'img[alt="Hostingas Serveriai.lt"]'],
       estonian : ['A[href*="http://pay4results24.eu"]'],
       fanboyAnnoyances : ["#feedback-tab", "#taboola-below-article", ".feedburnerFeedBlock", ".widget-feedburner-counter", '[title="Subscribe to our blog"]'],
       fanboyAntiFacebook : [".util-bar-module-firefly-visible"],
       fanboyEnhancedTrackers : [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", 'div[style*="box-shadow: rgb(136, 136, 136) 0px 0px 12px; color: "]', 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
       fanboySocial : [".td-tags-and-social-wrapper-box", ".twitterContainer", ".youtube-social", 'a[title^="Like us on Facebook"]', 'img[alt^="Share on Digg"]'],
       frellwitSwedish : ['a[href*="casinopro.se"][target="_blank"]', 'a[href*="doktor-se.onelink.me"]', "article.category-samarbete", "div.holidAds", "ul.adsmodern"],
       greekAdBlock : ['A[href*="adman.otenet.gr/click?"]', 'A[href*="http://axiabanners.exodus.gr/"]', 'A[href*="http://interactive.forthnet.gr/click?"]', "DIV.agores300", "TABLE.advright"],
       hungarian : ['A[href*="ad.eval.hu"]', 'A[href*="ad.netmedia.hu"]', 'A[href*="daserver.ultraweb.hu"]', "#cemp_doboz", ".optimonk-iframe-container"],
       iDontCareAboutCookies : ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", ".cookie-msg-info-container", "#cookies-policy-sticky"],
       icelandicAbp : ['A[href^="/framework/resources/forms/ads.aspx"]'],
       latvian : ['a[href="http://www.salidzini.lv/"][style="display: block; width: 120px; height: 40px; overflow: hidden; position: relative;"]', 'a[href="http://www.salidzini.lv/"][style="display: block; width: 88px; height: 31px; overflow: hidden; position: relative;"]'],
       listKr : ['a[href*="//kingtoon.slnk.kr"]', 'a[href*="//playdsb.com/kr"]', "div.logly-lift-adz", 'div[data-widget_id="ml6EJ074"]', "ins.daum_ddn_area"],
       listeAr : [".geminiLB1Ad", ".right-and-left-sponsers", 'a[href*=".aflam.info"]', 'a[href*="booraq.org"]', 'a[href*="dubizzle.com/ar/?utm_source="]'],
       listeFr : ['a[href^="http://promo.vador.com/"]', "#adcontainer_recherche", 'a[href*="weborama.fr/fcgi-bin/"]', ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
       officialPolish : ["#ceneo-placeholder-ceneo-12", '[href^="https://aff.sendhub.pl/"]', 'a[href^="http://advmanager.techfun.pl/redirect/"]', 'a[href^="http://www.trizer.pl/?utm_source"]', "div#skapiec_ad"],
       ro : ['a[href^="//afftrk.altex.ro/Counter/Click"]', 'a[href^="/magazin/"]', 'a[href^="https://blackfridaysales.ro/trk/shop/"]', 'a[href^="https://event.2performant.com/events/click"]', 'a[href^="https://l.profitshare.ro/"]'],
       ruAd : ['a[href*="//febrare.ru/"]', 'a[href*="//utimg.ru/"]', 'a[href*="://chikidiki.ru"]', "#pgeldiz", ".yandex-rtb-block"],
       thaiAds : ["a[href*=macau-uta-popup]", "#ads-google-middle_rectangle-group", ".ads300s", ".bumq", ".img-kosana"],
       webAnnoyancesUltralist : ["#mod-social-share-2", "#social-tools", ".ctpl-fullbanner", ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
     };
     /** @type {!Array<string>} */
     var input = Object.keys(level);
     var math = Math;
     /**
      * @return {?}
      */
     var leadingImageNode = function() {
       return 0;
     };
     /** @type {function(?): number} */
     var processVal = math.acos || leadingImageNode;
     /** @type {function(number): number} */
     var getActionEventsByCourseCacheKey = math.acosh || leadingImageNode;
     /** @type {function(?): number} */
     var updateDevicesAfterDelay = math.asin || leadingImageNode;
     /** @type {function(number): number} */
     var handleTimeoutPacket = math.asinh || leadingImageNode;
     /** @type {function(number): number} */
     var gotoNewOfflinePage = math.atanh || leadingImageNode;
     /** @type {function(?): number} */
     var getResponsesAnalysisDataPrefixCacheKey = math.atan || leadingImageNode;
     /** @type {function(?): number} */
     var sin = math.sin || leadingImageNode;
     /** @type {function(number): number} */
     var funcTex = math.sinh || leadingImageNode;
     /** @type {function(?): number} */
     var cos = math.cos || leadingImageNode;
     /** @type {function(number): number} */
     var parseFloat = math.cosh || leadingImageNode;
     /** @type {function(?): number} */
     var processRetryQueue = math.tan || leadingImageNode;
     /** @type {function(number): number} */
     var getCompoundIndex = math.tanh || leadingImageNode;
     /** @type {function(?): number} */
     var safeStringify = math.exp || leadingImageNode;
     /** @type {function(number): number} */
     var __webpack_require__ = math.expm1 || leadingImageNode;
     /** @type {function(number): number} */
     var decorate = math.log1p || leadingImageNode;
     /**
      * @param {number} height
      * @return {?}
      */
     var evaluate = function(height) {
       return math.pow(math.PI, height);
     };
     /**
      * @param {number} size
      * @return {?}
      */
     var message = function(size) {
       return math.log(size + math.sqrt(size * size + 1));
     };
     /**
      * @param {number} e
      * @return {?}
      */
     var wrap = function(e) {
       return math.log((1 + e) / (1 - e)) / 2;
     };
     /**
      * @param {number} a
      * @return {?}
      */
     var gCDFApprox = function(a) {
       return math.exp(a) - 1 / math.exp(a) / 2;
     };
     /**
      * @param {number} value
      * @return {?}
      */
     var sinh = function(value) {
       return (math.exp(value) + 1 / math.exp(value)) / 2;
     };
     /**
      * @param {number} x
      * @return {?}
      */
     var sigm = function(x) {
       return math.exp(x) - 1;
     };
     /**
      * @param {number} a
      * @return {?}
      */
     var teten = function(a) {
       return (math.exp(2 * a) - 1) / (math.exp(2 * a) + 1);
     };
     /**
      * @param {number} message
      * @return {?}
      */
     var logAnError = function(message) {
       return math.log(1 + message);
     };
     var result = {
       default : [],
       apple : [{
         font : "-apple-system-body"
       }],
       serif : [{
         fontFamily : "serif"
       }],
       sans : [{
         fontFamily : "sans-serif"
       }],
       mono : [{
         fontFamily : "monospace"
       }],
       min : [{
         fontSize : "1px"
       }],
       system : [{
         fontFamily : "system-ui"
       }]
     };
     var model = {
       fonts : function() {
         return apply(function(canCreateDiscussions, docHolder) {
           var doc = docHolder.document;
           var body = doc.body;
           /** @type {string} */
           body.style.fontSize = "48px";
           var i = doc.createElement("div");
           var defaultWidth = {};
           var defaultHeight = {};
           /**
            * @param {string} val
            * @return {?}
            */
           var vsLoaded = function(val) {
             var t = doc.createElement("span");
             var s = t.style;
             return s.position = "absolute", s.top = "0", s.left = "0", s.fontFamily = val, t.textContent = "mmMwWLliI0O&1", i.appendChild(t), t;
           };
           /** @type {!Array<?>} */
           var baseFontsSpans = baseFonts.map(vsLoaded);
           var subwikiListsCache = function() {
             var SERIALIZER_MAP = {};
             /**
              * @param {string} t
              * @return {undefined}
              */
             var collect = function(t) {
               /** @type {!Array<?>} */
               SERIALIZER_MAP[t] = baseFonts.map(function(e) {
                 return function(result, a22) {
                   return vsLoaded("'" + result + "'," + a22);
                 }(t, e);
               });
             };
             /** @type {number} */
             var i = 0;
             /** @type {!Array} */
             var files = args;
             for (; i < files.length; i++) {
               collect(files[i]);
             }
             return SERIALIZER_MAP;
           }();
           body.appendChild(i);
           /** @type {number} */
           var index = 0;
           for (; index < baseFonts.length; index++) {
             defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth;
             defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight;
           }
           return args.filter(function(wikiId) {
             return fontSpans = subwikiListsCache[wikiId], baseFonts.some(function(baseFont, i) {
               return fontSpans[i].offsetWidth !== defaultWidth[baseFont] || fontSpans[i].offsetHeight !== defaultHeight[baseFont];
             });
             var fontSpans;
           });
         });
       },
       domBlockers : function(canCreateDiscussions) {
         var processPercent = (void 0 === canCreateDiscussions ? {} : canCreateDiscussions).debug;
         return extend(this, void 0, void 0, function() {
           var n;
           var stops;
           var _ref;
           return then(this, function(_context) {
             switch(_context.label) {
               case 0:
                 return sniff() || start() ? [4, storeOffline((_ref = []).concat.apply(_ref, input.map(function(y0) {
                   return level[y0];
                 })))] : [2, void 0];
               case 1:
                 return n = _context.sent(), processPercent && function(e) {
                   /** @type {string} */
                   var groupPrefix = "DOM blockers debug:\n```";
                   /** @type {number} */
                   var i = 0;
                   /** @type {!Array<string>} */
                   var s = input;
                   for (; i < s.length; i++) {
                     /** @type {string} */
                     var k = s[i];
                     /** @type {string} */
                     groupPrefix = groupPrefix + ("\n" + k + ":");
                     /** @type {number} */
                     var layer_i = 0;
                     var crossfilterable_layers = level[k];
                     for (; layer_i < crossfilterable_layers.length; layer_i++) {
                       var fixWheelDelta = crossfilterable_layers[layer_i];
                       /** @type {string} */
                       groupPrefix = groupPrefix + ("\n  " + fixWheelDelta + " " + (e[fixWheelDelta] ? "\ud83d\udeab" : "\u27a1\ufe0f"));
                     }
                   }
                   console.log(groupPrefix + "\n```");
                 }(n), (stops = input.filter(function(key) {
                   var group = level[key];
                   return indexOf(group.map(function(nodeType) {
                     return n[nodeType];
                   })) > .5 * group.length;
                 })).sort(), [2, stops];
             }
           });
         });
       },
       fontPreferences : function() {
         return function(e, width) {
           if (void 0 === width) {
             /** @type {number} */
             width = 4E3;
           }
           return apply(function(n, w) {
             var context = w.document;
             var data = context.body;
             var style = data.style;
             style.width = width + "px";
             /** @type {string} */
             style.webkitTextSizeAdjust = style.textSizeAdjust = "none";
             if (watch()) {
               /** @type {string} */
               data.style.zoom = "" + 1 / w.devicePixelRatio;
             } else {
               if (sniff()) {
                 /** @type {string} */
                 data.style.zoom = "reset";
               }
             }
             var s = context.createElement("div");
             return s.textContent = gen(Array(width / 20 << 0)).map(function() {
               return "word";
             }).join(" "), data.appendChild(s), e(context, data);
           }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
         }(function(dom, choices) {
           var clone = {};
           var data = {};
           /** @type {number} */
           var i = 0;
           /** @type {!Array<string>} */
           var style = Object.keys(result);
           for (; i < style.length; i++) {
             /** @type {string} */
             var name = style[i];
             var data = result[name];
             var v = data[0];
             var newVal = void 0 === v ? {} : v;
             var value = data[1];
             var val = void 0 === value ? "mmMwWLliI0fiflO&1" : value;
             var el = dom.createElement("span");
             el.textContent = val;
             /** @type {string} */
             el.style.whiteSpace = "nowrap";
             /** @type {number} */
             var j = 0;
             /** @type {!Array<string>} */
             var attrs = Object.keys(newVal);
             for (; j < attrs.length; j++) {
               /** @type {string} */
               var name = attrs[j];
               var val = newVal[name];
               if (void 0 !== val) {
                 el.style[name] = val;
               }
             }
             clone[name] = el;
             choices.appendChild(dom.createElement("br"));
             choices.appendChild(el);
           }
           /** @type {number} */
           var ii = 0;
           /** @type {!Array<string>} */
           var filenameFilter = Object.keys(result);
           for (; ii < filenameFilter.length; ii++) {
             data[name = filenameFilter[ii]] = clone[name].getBoundingClientRect().width;
           }
           return data;
         });
       },
       audio : function() {
         /** @type {!Window} */
         var scope = window;
         var AudioContext = scope.OfflineAudioContext || scope.webkitOfflineAudioContext;
         if (!AudioContext) {
           return -2;
         }
         if (sniff() && !_initSys() && !function() {
           /** @type {!Window} */
           var inheritedObject = window;
           return indexOf(["DOMRectList" in inheritedObject, "RTCPeerConnectionIceEvent" in inheritedObject, "SVGGeometryElement" in inheritedObject, "ontransitioncancel" in inheritedObject]) >= 3;
         }()) {
           return -1;
         }
         var context = new AudioContext(1, 5E3, 44100);
         var oscillator = context.createOscillator();
         /** @type {string} */
         oscillator.type = "triangle";
         /** @type {number} */
         oscillator.frequency.value = 1E4;
         var compressor = context.createDynamicsCompressor();
         /** @type {number} */
         compressor.threshold.value = -50;
         /** @type {number} */
         compressor.knee.value = 40;
         /** @type {number} */
         compressor.ratio.value = 12;
         /** @type {number} */
         compressor.attack.value = 0;
         /** @type {number} */
         compressor.release.value = .25;
         oscillator.connect(compressor);
         compressor.connect(context.destination);
         oscillator.start(0);
         var data = function(self) {
           /**
            * @return {undefined}
            */
           var viaRequest = function() {
           };
           return [new Promise(function(callback, expect) {
             /** @type {boolean} */
             var i = false;
             /** @type {number} */
             var inField = 0;
             /** @type {number} */
             var a = 0;
             /**
              * @param {?} event
              * @return {?}
              */
             self.oncomplete = function(event) {
               return callback(event.renderedBuffer);
             };
             /**
              * @return {undefined}
              */
             var request = function() {
               setTimeout(function() {
                 return expect(equal("timeout"));
               }, Math.min(500, a + 5E3 - Date.now()));
             };
             !function listener() {
               try {
                 switch(self.startRendering(), self.state) {
                   case "running":
                     /** @type {number} */
                     a = Date.now();
                     if (i) {
                       request();
                     }
                     break;
                   case "suspended":
                     if (!document.hidden) {
                       inField++;
                     }
                     if (i && inField >= 3) {
                       expect(equal("suspended"));
                     } else {
                       setTimeout(listener, 500);
                     }
                 }
               } catch (isDerKeyCorrect) {
                 expect(isDerKeyCorrect);
               }
             }();
             /**
              * @return {undefined}
              */
             viaRequest = function() {
               if (!i) {
                 /** @type {boolean} */
                 i = true;
                 if (a > 0) {
                   request();
                 }
               }
             };
           }), viaRequest];
         }(context);
         var passid = data[0];
         var callback = data[1];
         var value = passid.then(function(from) {
           return function(degrees) {
             /** @type {number} */
             var tt = 0;
             /** @type {number} */
             var i = 0;
             for (; i < degrees.length; ++i) {
               /** @type {number} */
               tt = tt + Math.abs(degrees[i]);
             }
             return tt;
           }(from.getChannelData(0).subarray(4500));
         }, function(error) {
           if ("timeout" === error.name || "suspended" === error.name) {
             return -3;
           }
           throw error;
         });
         return value.catch(function() {
         }), function() {
           return callback(), value;
         };
       },
       screenFrame : function() {
         var item = this;
         var gotoNewOfflinePage = updateNavbar();
         return function() {
           return extend(item, void 0, void 0, function() {
             var e;
             var groupNeighborsByTempo;
             return then(this, function(_context) {
               switch(_context.label) {
                 case 0:
                   return [4, gotoNewOfflinePage()];
                 case 1:
                   return e = _context.sent(), [2, [(groupNeighborsByTempo = function(dayWidth) {
                     return null === dayWidth ? null : function(w, width) {
                       if (void 0 === width && (width = 1), Math.abs(width) >= 1) {
                         return Math.round(w / width) * width;
                       }
                       /** @type {number} */
                       var aspectRatio = 1 / width;
                       return Math.round(w * aspectRatio) / aspectRatio;
                     }(dayWidth, 10);
                   })(e[0]), groupNeighborsByTempo(e[1]), groupNeighborsByTempo(e[2]), groupNeighborsByTempo(e[3])]];
               }
             });
           });
         };
       },
       osCpu : function() {
         return navigator.oscpu;
       },
       languages : function() {
         var global;
         /** @type {!Navigator} */
         var nav = navigator;
         /** @type {!Array} */
         var assert = [];
         var rels = nav.language || nav.userLanguage || nav.browserLanguage || nav.systemLanguage;
         if (void 0 !== rels && assert.push([rels]), Array.isArray(nav.languages)) {
           if (!(watch() && indexOf([!("MediaSettingsRange" in (global = window)), "RTCEncodedAudioFrame" in global, "" + global.Intl == "[object Intl]", "" + global.Reflect == "[object Reflect]"]) >= 3)) {
             assert.push(nav.languages);
           }
         } else {
           if ("string" == typeof nav.languages) {
             /** @type {(Array<string>|undefined)} */
             var p = nav.languages;
             if (p) {
               assert.push(p.split(","));
             }
           }
         }
         return assert;
       },
       colorDepth : function() {
         return window.screen.colorDepth;
       },
       deviceMemory : function() {
         return getColor(abs(navigator.deviceMemory), void 0);
       },
       screenResolution : function() {
         /** @type {!Screen} */
         var s = screen;
         /**
          * @param {number} value
          * @return {?}
          */
         var _getSetting = function(value) {
           return getColor(defaultValue(value), null);
         };
         /** @type {!Array} */
         var paramsWithDefault = [_getSetting(s.width), _getSetting(s.height)];
         return paramsWithDefault.sort().reverse(), paramsWithDefault;
       },
       hardwareConcurrency : function() {
         return getColor(defaultValue(navigator.hardwareConcurrency), void 0);
       },
       timezone : function() {
         var Intl;
         var Constructor = null === (Intl = window.Intl) || void 0 === Intl ? void 0 : Intl.DateTimeFormat;
         if (Constructor) {
           var tz = (new Constructor).resolvedOptions().timeZone;
           if (tz) {
             return tz;
           }
         }
         var timestamp;
         /** @type {number} */
         var num = (timestamp = (new Date).getFullYear(), -Math.max(abs((new Date(timestamp, 0, 1)).getTimezoneOffset()), abs((new Date(timestamp, 6, 1)).getTimezoneOffset())));
         return "UTC" + (num >= 0 ? "+" : "") + Math.abs(num);
       },
       sessionStorage : function() {
         try {
           return !!window.sessionStorage;
         } catch (e) {
           return true;
         }
       },
       localStorage : function() {
         try {
           return !!window.localStorage;
         } catch (e) {
           return true;
         }
       },
       indexedDB : function() {
         if (!view() && !style()) {
           try {
             return !!window.indexedDB;
           } catch (e) {
             return true;
           }
         }
       },
       openDatabase : function() {
         return !!window.openDatabase;
       },
       cpuClass : function() {
         return navigator.cpuClass;
       },
       platform : function() {
         /** @type {string} */
         var platform = navigator.platform;
         return "MacIntel" === platform && sniff() && !_initSys() ? function() {
           if ("iPad" === navigator.platform) {
             return true;
           }
           /** @type {!Screen} */
           var s = screen;
           /** @type {number} */
           var t = s.width / s.height;
           return indexOf(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > 2 / 3 && t < 1.5]) >= 2;
         }() ? "iPad" : "iPhone" : platform;
       },
       plugins : function() {
         /** @type {!PluginArray} */
         var plugins = navigator.plugins;
         if (plugins) {
           /** @type {!Array} */
           var plugins = [];
           /** @type {number} */
           var i = 0;
           for (; i < plugins.length; ++i) {
             /** @type {!Plugin} */
             var p = plugins[i];
             if (p) {
               /** @type {!Array} */
               var prependMenuItems = [];
               /** @type {number} */
               var i = 0;
               for (; i < p.length; ++i) {
                 var item = p[i];
                 prependMenuItems.push({
                   type : item.type,
                   suffixes : item.suffixes
                 });
               }
               plugins.push({
                 name : p.name,
                 description : p.description,
                 mimeTypes : prependMenuItems
               });
             }
           }
           return plugins;
         }
       },
       canvas : function() {
         var job = function() {
           /** @type {!Element} */
           var textedCanvas = document.createElement("canvas");
           return textedCanvas.width = 1, textedCanvas.height = 1, [textedCanvas, textedCanvas.getContext("2d")];
         }();
         var id = job[0];
         var ctx = job[1];
         return function(actual, macro_context) {
           return !(!macro_context || !actual.toDataURL);
         }(id, ctx) ? {
           winding : drawRect(ctx),
           geometry : render(id, ctx),
           text : draw(id, ctx)
         } : {
           winding : false,
           geometry : "",
           text : ""
         };
       },
       touchSupport : function() {
         var event;
         /** @type {!Navigator} */
         var nav = navigator;
         /** @type {number} */
         var maxTouchPoints = 0;
         if (void 0 !== nav.maxTouchPoints) {
           maxTouchPoints = defaultValue(nav.maxTouchPoints);
         } else {
           if (void 0 !== nav.msMaxTouchPoints) {
             /** @type {number} */
             maxTouchPoints = nav.msMaxTouchPoints;
           }
         }
         try {
           document.createEvent("TouchEvent");
           /** @type {boolean} */
           event = true;
         } catch (r) {
           /** @type {boolean} */
           event = false;
         }
         return {
           maxTouchPoints : maxTouchPoints,
           touchEvent : event,
           touchStart : "ontouchstart" in window
         };
       },
       vendor : function() {
         return navigator.vendor || "";
       },
       vendorFlavors : function() {
         /** @type {!Array} */
         var renderingPath = [];
         /** @type {number} */
         var i = 0;
         /** @type {!Array} */
         var bots = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"];
         for (; i < bots.length; i++) {
           var view = bots[i];
           var value = window[view];
           if (value && "object" == typeof value) {
             renderingPath.push(view);
           }
         }
         return renderingPath.sort();
       },
       cookiesEnabled : function() {
         /** @type {!HTMLDocument} */
         var doc = document;
         try {
           /** @type {string} */
           doc.cookie = "cookietest=1; SameSite=Strict;";
           /** @type {boolean} */
           var t = -1 !== doc.cookie.indexOf("cookietest=");
           return doc.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t;
         } catch (n) {
           return false;
         }
       },
       colorGamut : function() {
         /** @type {number} */
         var j = 0;
         /** @type {!Array} */
         var preds = ["rec2020", "p3", "srgb"];
         for (; j < preds.length; j++) {
           var pred = preds[j];
           if (matchMedia("(color-gamut: " + pred + ")").matches) {
             return pred;
           }
         }
       },
       invertedColors : function() {
         return !!matchMobile("inverted") || !matchMobile("none") && void 0;
       },
       forcedColors : function() {
         return !!testMedia("active") || !testMedia("none") && void 0;
       },
       monochrome : function() {
         if (matchMedia("(min-monochrome: 0)").matches) {
           /** @type {number} */
           var e = 0;
           for (; e <= 100; ++e) {
             if (matchMedia("(max-monochrome: " + e + ")").matches) {
               return e;
             }
           }
           throw new Error("Too high value");
         }
       },
       contrast : function() {
         return between("no-preference") ? 0 : between("high") || between("more") ? 1 : between("low") || between("less") ? -1 : between("forced") ? 10 : void 0;
       },
       reducedMotion : function() {
         return !!media("reduce") || !media("no-preference") && void 0;
       },
       hdr : function() {
         return !!expr("high") || !expr("standard") && void 0;
       },
       math : function() {
         return {
           acos : processVal(.12312423423423424),
           acosh : getActionEventsByCourseCacheKey(1E308),
           acoshPf : (size = 1E154, math.log(size + math.sqrt(size * size - 1))),
           asin : updateDevicesAfterDelay(.12312423423423424),
           asinh : handleTimeoutPacket(1),
           asinhPf : message(1),
           atanh : gotoNewOfflinePage(.5),
           atanhPf : wrap(.5),
           atan : getResponsesAnalysisDataPrefixCacheKey(.5),
           sin : sin(-1E300),
           sinh : funcTex(1),
           sinhPf : gCDFApprox(1),
           cos : cos(10.000000000123),
           cosh : parseFloat(1),
           coshPf : sinh(1),
           tan : processRetryQueue(-1E300),
           tanh : getCompoundIndex(1),
           tanhPf : teten(1),
           exp : safeStringify(1),
           expm1 : __webpack_require__(1),
           expm1Pf : sigm(1),
           log1p : decorate(10),
           log1pPf : logAnError(10),
           powPI : evaluate(-100)
         };
         var size;
       }
     };
     /** @type {function(string, number): ?} */
     var defined = all;
     /** @type {string} */
     var charListNotLatin = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
     /** @type {string} */
     var record = charListNotLatin.slice(0, -2);
     /**
      * @param {number} name
      * @return {?}
      */
     var analyze = function(name) {
       return void 0 === name && (name = "[FingerprintJS Pro] "), function(data) {
         switch(data.e) {
           case 2:
           case 5:
           case 8:
           case 11:
           case 14:
           case 17:
           case 20:
             console.error(format(name, data));
             break;
           case 13:
             var actual = format(name, data);
             var files = data.result;
             if (Object.keys(files).some(function(index) {
               return files[index].error;
             })) {
               console.warn(actual);
             } else {
               console.log(actual);
             }
             break;
           default:
             console.log(format(name, data));
         }
       };
     };
     /**
      * @param {?} options
      * @return {?}
      */
     var addCustomWindow = function(options) {
       return (new CustomView(options)).addEvent;
     };
     var CustomView = function() {
       /**
        * @param {?} selector
        * @return {undefined}
        */
       function init(selector) {
         var scope = this;
         this.onReportReady = selector;
         /** @type {boolean} */
         this.isStopped = false;
         this.pageStartTimestamp = function() {
           var perfNow;
           var t;
           /** @type {!Performance} */
           var perf = performance;
           if (perf.timeOrigin) {
             /** @type {(PerformanceEntry|undefined)} */
             var pt = null === (t = null === (perfNow = perf.getEntriesByType) || void 0 === perfNow ? void 0 : perfNow.call(perf, "navigation")) || void 0 === t ? void 0 : t[0];
             if (pt) {
               return perf.timeOrigin + (pt.responseStart || pt.unloadEventEnd);
             }
           }
           return perf.timing.domLoading || perf.timing.responseStart || perf.timing.unloadEventEnd;
         }();
         this.events = {};
         /**
          * @param {!Object} event
          * @return {undefined}
          */
         this.addEvent = function(event) {
           if (!scope.isStopped) {
             var self = {
               time : new Date,
               type : "agentEvent",
               event : event
             };
             switch(0 === event.e && (self.documentReadyState = document.readyState, self.isPageVisible = alias(), self.isFullscreen = createElement(), self.network = onError()), scope.storeAgentEvent(self), event.e) {
               case 2:
                 scope.submitReport(event.agentId, void 0);
                 break;
               case 4:
               case 5:
                 scope.submitReport(event.agentId, event.getCallId);
             }
           }
         };
         /** @type {!Window} */
         var inheritedObject = window;
         /** @type {!HTMLDocument} */
         var doc = document;
         /** @type {!Array} */
         var i = [[doc, "readystatechange", function() {
           return scope.handleDocumentReadyStateChange();
         }], [doc, "visibilitychange", function() {
           return scope.handleVisibilityChange();
         }], [doc, "pageshow", function() {
           return scope.handlePageTransition(true);
         }], [doc, "pagehide", function() {
           return scope.handlePageTransition(false);
         }], [inheritedObject, "unload", function() {
           return scope.handlePageUnload();
         }]];
         /** @type {number} */
         var layer_i = 0;
         /** @type {!Array} */
         var crossfilterable_layers = i;
         for (; layer_i < crossfilterable_layers.length; layer_i++) {
           var layer = crossfilterable_layers[layer_i];
           var node = layer[0];
           var id = layer[1];
           var method = layer[2];
           node.addEventListener(id, method);
         }
         var breatheGate = function(e, useCapture) {
           /** @type {!HTMLDocument} */
           var el = document;
           /** @type {!Array} */
           var DOCUMENT_FULLSCREEN_EVENTS = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
           /** @type {number} */
           var i = 0;
           /** @type {!Array} */
           var atlines = DOCUMENT_FULLSCREEN_EVENTS;
           for (; i < atlines.length; i++) {
             var a = atlines[i];
             el.addEventListener(a, e, useCapture);
           }
           return function() {
             /** @type {number} */
             var i = 0;
             /** @type {!Array} */
             var atlines = DOCUMENT_FULLSCREEN_EVENTS;
             for (; i < atlines.length; i++) {
               var a = atlines[i];
               el.removeEventListener(a, e, useCapture);
             }
           };
         }(function() {
           return scope.handleFullscreenChange();
         });
         var setWzRect = function(message) {
           /** @type {!NetworkInformation} */
           var connection = navigator.connection;
           return (null == connection ? void 0 : connection.addEventListener) ? (connection.addEventListener("change", message), function() {
             connection.removeEventListener("change", message);
           }) : (addEventListener("online", message), addEventListener("offline", message), function() {
             removeEventListener("online", message);
             removeEventListener("offline", message);
           });
         }(function() {
           return scope.handleNetworkConnectionChange();
         });
         /**
          * @return {undefined}
          */
         this.stop = function() {
           /** @type {boolean} */
           scope.isStopped = true;
           /** @type {number} */
           var layer_i = 0;
           /** @type {!Array} */
           var crossfilterable_layers = i;
           for (; layer_i < crossfilterable_layers.length; layer_i++) {
             var layer = crossfilterable_layers[layer_i];
             var containerDOM = layer[0];
             var transitionendEndName = layer[1];
             var test = layer[2];
             containerDOM.removeEventListener(transitionendEndName, test);
           }
           breatheGate();
           setWzRect();
         };
       }
       return init.prototype.handleDocumentReadyStateChange = function() {
         this.storeEnvironmentEvent({
           time : new Date,
           type : "documentReadyState",
           state : document.readyState
         });
       }, init.prototype.handleVisibilityChange = function() {
         this.storeEnvironmentEvent({
           time : new Date,
           type : "pageVisibilityToggle",
           isVisible : alias()
         });
       }, init.prototype.handlePageTransition = function(isShown) {
         this.storeEnvironmentEvent({
           time : new Date,
           type : "pageTransition",
           isShown : isShown
         });
       }, init.prototype.handleFullscreenChange = function() {
         this.storeEnvironmentEvent({
           time : new Date,
           type : "fullscreenToggle",
           isFullscreen : createElement()
         });
       }, init.prototype.handleNetworkConnectionChange = function() {
         this.storeEnvironmentEvent({
           time : new Date,
           type : "networkChange",
           network : onError()
         });
       }, init.prototype.handlePageUnload = function() {
         this.storeEnvironmentEvent({
           time : new Date,
           type : "pageUnload"
         });
         /** @type {number} */
         var nameIndex = 0;
         /** @type {!Array<string>} */
         var validContextNames = Object.keys(this.events);
         for (; nameIndex < validContextNames.length; nameIndex++) {
           /** @type {string} */
           var contextName = validContextNames[nameIndex];
           var context = this.events[contextName];
           if (0 === Object.keys(context.getCalls).length) {
             this.submitReport(contextName, void 0);
           } else {
             /** @type {number} */
             var i = 0;
             /** @type {!Array<string>} */
             var propertyRow = Object.keys(context.getCalls);
             for (; i < propertyRow.length; i++) {
               /** @type {string} */
               var prop = propertyRow[i];
               if (!_toggleInteraction(context.getCalls[prop])) {
                 this.submitReport(contextName, prop);
               }
             }
           }
         }
         this.stop();
       }, init.prototype.storeAgentEvent = function(global) {
         var data = global.event;
         var name = data.agentId;
         if (this.events[name] || (this.events[name] = {
           commonEvents : [],
           getCalls : {}
         }), function(gistics) {
           return "string" == typeof gistics.getCallId;
         }(data)) {
           var widgetNamespace = data.getCallId;
           if (!this.events[name].getCalls[widgetNamespace]) {
             /** @type {!Array} */
             this.events[name].getCalls[widgetNamespace] = [];
           }
           this.events[name].getCalls[widgetNamespace].push(global);
         } else {
           this.events[name].commonEvents.push(global);
         }
       }, init.prototype.storeEnvironmentEvent = function(type) {
         /** @type {number} */
         var i = 0;
         /** @type {!Array<string>} */
         var events = Object.keys(this.events);
         for (; i < events.length; i++) {
           /** @type {string} */
           var eventName = events[i];
           this.events[eventName].commonEvents.push(type);
         }
       }, init.prototype.submitReport = function(prop, callback) {
         var n = function(e, ms_since_1970) {
           var R;
           var u;
           var o;
           var msg;
           var option;
           var action;
           var requestId;
           var theme;
           var file;
           var res;
           var v = function(b) {
             var index = {};
             /** @type {number} */
             var i = 0;
             /** @type {!Object} */
             var r = b;
             for (; i < r.length; i++) {
               var info = r[i];
               if ("agentEvent" === info.type) {
                 index[info.event.e] = info;
               }
             }
             return index;
           }(e);
           var data = (null === (R = e[e.length - 1]) || void 0 === R ? void 0 : R.time) || new Date;
           /** @type {string} */
           var comments = "null";
           /** @type {number} */
           var layer_i = 0;
           /** @type {!Array} */
           var crossfilterable_layers = [[4, "getSuccess"], [5, "getFail"], [3, "getting"], [1, "loadSuccess"], [2, "loadFail"], [0, "loading"]];
           for (; layer_i < crossfilterable_layers.length; layer_i++) {
             var layer = crossfilterable_layers[layer_i];
             var id = layer[0];
             var result = layer[1];
             if (v[id]) {
               comments = result;
               break;
             }
           }
           return {
             time : (null === (u = e[e.length - 1]) || void 0 === u ? void 0 : u.time) || new Date,
             pageUrl : location.href,
             pageStartTime : new Date(ms_since_1970),
             isInIframe : _isFrame(),
             agentVersion : null === (o = v[0]) || void 0 === o ? void 0 : o.event.version,
             userAgent : navigator.userAgent,
             pageViewId : _showNavsIfNeeded(),
             agentId : null === (msg = v[0]) || void 0 === msg ? void 0 : msg.event.agentId,
             getCallId : null === (option = v[3]) || void 0 === option ? void 0 : option.event.getCallId,
             requestId : null !== (requestId = null === (action = v[4]) || void 0 === action ? void 0 : action.event.result.requestId) && void 0 !== requestId ? requestId : null === (theme = v[5]) || void 0 === theme ? void 0 : theme.event.error.requestId,
             visitorId : null === (file = v[4]) || void 0 === file ? void 0 : file.event.result.visitorId,
             visitorToken : null === (res = v[16]) || void 0 === res ? void 0 : res.event.result[1],
             identificationState : comments,
             timeBetweenLoadAndGet : walk(v[1], v[3]),
             load : fn(data, v[0], v[1], v[2]),
             get : fn(data, v[3], v[4], v[5]),
             tls : put(fn(data, v[6], v[7], v[8]), function() {
               var o;
               var res;
               return callback(callback({}, add(e, 9, 10, 11, (null === (o = v[7]) || void 0 === o ? void 0 : o.time) || (null === (res = v[8]) || void 0 === res ? void 0 : res.time) || data)), {
                 getPhaseDuration : walk(v[3], v[7] || v[8], data)
               });
             }),
             fingerprint : put(fn(data, v[12], v[13], v[14], function(eventParams) {
               var serviceCallEvent = eventParams.event;
               return {
                 failedComponents : buildMessageAndStackTrace(serviceCallEvent.result),
                 componentDurations : decode(serviceCallEvent.result)
               };
             }), function() {
               return {
                 getPhaseDuration : walk(v[3], v[13] || v[14], data)
               };
             }),
             visitorIdRequest : put(fn(data, v[15], v[16], v[17]), function() {
               var o;
               var res;
               return add(e, 18, 19, 20, (null === (o = v[16]) || void 0 === o ? void 0 : o.time) || (null === (res = v[17]) || void 0 === res ? void 0 : res.time) || data);
             }),
             events : e
           };
         }(function(eventsDict, event, parent) {
           /** @type {!Array} */
           var x = [];
           return eventsDict[event] && (x.push.apply(x, eventsDict[event].commonEvents), void 0 !== parent && x.push.apply(x, eventsDict[event].getCalls[parent] || [])), x.sort(function(statObj, t) {
             return statObj.time.getTime() - t.time.getTime();
           }), x;
         }(this.events, prop, callback), this.pageStartTimestamp);
         try {
           this.onReportReady(n);
         } catch (logValues) {
           console.error(logValues);
         }
       }, init;
     }();
     /**
      * @param {!Object} data
      * @return {?}
      */
     var $request = function(data) {
       var item = this;
       var clientId = data.clientId;
       var token = data.token;
       var endpoint = data.endpoint;
       var cur_page = void 0 === endpoint ? "https://api.rollbar.com/api/1/item/" : endpoint;
       return (new CustomView(function(bSync) {
         return extend(item, void 0, void 0, function() {
           var sync;
           return then(this, function(_context) {
             switch(_context.label) {
               case 0:
                 return sync = function(mapConfig, context, token, canCreateDiscussions) {
                   return {
                     access_token : token,
                     data : init(mapConfig, context, void 0)
                   };
                 }(bSync, clientId, token), [4, check(cur_page, sync)];
               case 1:
                 return _context.sent(), [2];
             }
           });
         });
       })).addEvent;
     };
     var state = {
       null : {
         level : "info",
         message : "Load() wasn't called"
       },
       loading : {
         level : "warning",
         message : "Load() incomplete"
       },
       loadSuccess : {
         level : "info",
         message : "Load() succeeded, get() wasn't called"
       },
       loadFail : {
         level : "error",
         message : "Load() failed"
       },
       getting : {
         level : "warning",
         message : "Get() incomplete"
       },
       getSuccess : {
         level : "info",
         message : "Get() succeeded"
       },
       getFail : {
         level : "error",
         message : "Get() failed"
       }
     };
     var endpoints = {
       us : "https://api.sjpf.io",
       eu : "https://tls-eun1.fpapi.io"
     };
     var _params;
     /** @type {string} */
     var Nt = "Client timeout";
     /** @type {string} */
     var Lt = "Network connection error";
     /** @type {string} */
     var jt = "Network request aborted";
     /** @type {string} */
     var Bt = "Response cannot be parsed";
     var params = ((_params = {}).TokenRequired = "Token required", _params.TokenNotFound = "Token not found", _params.TokenExpired = "Token expired", _params.RequestCannotBeParsed = "Request cannot be parsed", _params.Failed = "Request failed", _params.RequestTimeout = "Request failed to process", _params.TooManyRequests = "Too many requests, rate limit exceeded", _params.OriginNotAvailable = "Not available for this origin", _params.HeaderRestricted = "Not available with restricted header", _params.NotAvailableForCrawlBots = 
     "Not available for crawl bots", _params.NotAvailableWithoutUA = "Not available when User-Agent is unspecified", _params);
     var _open = open("WrongRegion");
     var h = open("SubscriptionNotActive");
     /** @type {!Array} */
     var options = [3, 7];
     /** @type {!Array} */
     var name = [[function() {
       return watch();
     }, function() {
       return replace(["ClipboardItem" in (scopeWindow = window), "PerformanceEventTiming" in scopeWindow, "RTCSctpTransport" in scopeWindow]) >= 2 ? function() {
         return extend(this, void 0, void 0, function() {
           var e;
           var r;
           var p;
           var a;
           var i;
           return then(this, function(_context) {
             switch(_context.label) {
               case 0:
                 return e = secureRandom(), r = navigator, p = r[e[3]], (a = r[e[4]]) ? [4, new Promise(function(saveNotifs) {
                   a[e[5]](function(canCreateDiscussions, notifications) {
                     return saveNotifs(notifications);
                   });
                 })] : [3, 2];
               case 1:
                 return i = _context.sent(), [3, 4];
               case 2:
                 return (null == p ? void 0 : p[e[6]]) ? [4, p[e[6]]().then(function(ionicImgCache) {
                   return ionicImgCache.quota;
                 })] : [3, 4];
               case 3:
                 i = _context.sent();
                 /** @type {number} */
                 _context.label = 4;
               case 4:
                 return i ? [2, i < randomInt()] : [2, false];
             }
           });
         });
       }() : function() {
         return extend(this, void 0, void 0, function() {
           var callToStart;
           return then(this, function(_context) {
             switch(_context.label) {
               case 0:
                 return (callToStart = window.webkitRequestFileSystem) ? [4, new Promise(function(saveNotifs) {
                   callToStart(0, 1, function() {
                     return saveNotifs(false);
                   }, function() {
                     return saveNotifs(true);
                   });
                 })] : [2, false];
               case 1:
                 return [2, _context.sent()];
             }
           });
         });
       }();
       var scopeWindow;
     }], [function() {
       return sniff();
     }, function() {
       return extend(this, void 0, void 0, function() {
         return then(this, function(canCreateDiscussions) {
           return embed() ? _initSys() ? [2, isEligibleHash()] : [2, syncSubmissionGrade()] : [2, connect()];
         });
       });
     }], [function() {
       return getBrowser();
     }, function() {
       return new Promise(function(callback) {
         try {
           /** @type {!IDBOpenDBRequest} */
           var idb_req = indexedDB.open("test");
           /**
            * @return {?}
            */
           idb_req.onerror = function() {
             return callback(true);
           };
           /**
            * @return {?}
            */
           idb_req.onsuccess = function() {
             return callback(false);
           };
         } catch (n) {
           return callback(true);
         }
       });
     }], [function() {
       return view() || style();
     }, function() {
       try {
         if (!window.indexedDB) {
           return true;
         }
       } catch (e) {
         return true;
       }
       return false;
     }]];
     /** @type {!Array} */
     var optForFields = ["MAX_TEXTURE_MAX_ANISOTROPY_EXT", "FRAGMENT_SHADER_DERIVATIVE_HINT_OES", "MAX_COLOR_ATTACHMENTS_WEBGL", "MAX_DRAW_BUFFERS_WEBGL", "DRAW_BUFFER0_WEBGL", "DRAW_BUFFER1_WEBGL", "VERTEX_ARRAY_BINDING_OES", "TIMESTAMP_EXT", "GPU_DISJOINT_EXT", "MAX_VIEWS_OVR"];
     /** @type {!Array} */
     var NOT_VISIBLE_TRIGGER_TYPES = [10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32926, 32928, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 
     36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938];
     /** @type {!Array} */
     var BUILD_TYPES = [32926, 32928];
     /** @type {!Array} */
     var Tn = ["FRAGMENT_SHADER", "VERTEX_SHADER"];
     /** @type {!Array} */
     var line2 = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"];
     var data = {
       m : ["$$s-macbook-pro", "$$s-macbook-air", "$$s-mac-mini"],
       i : ["$$s-iphone"]
     };
     var obj = {
       "en-us" : callback(callback({}, data), {
         n : ["james", "mary", "john", "patricia", "robert", "jennifer", "michael", "linda", "william", "elizabeth", "david", "barbara", "richard", "susan", "joseph", "jessica", "thomas", "sarah", "charles", "karen", "christopher", "nancy", "daniel", "lisa", "matthew", "margaret", "anthony", "betty", "donald", "sandra"]
       }),
       "en-gb" : callback(callback({}, data), {
         n : ["oliver", "george", "noah", "arthur", "harry", "leo", "muhammad", "jack", "charlie", "oscar", "jacob", "henry", "thomas", "joshua", "william", "olivia", "amelia", "isla", "ava", "mia", "isabella", "sophia", "grace", "lily", "freya", "emily", "ivy", "ella", "rosie", "charlotte"]
       }),
       "ru-ru" : callback(callback({}, {
         m : ["macbook-pro-$$", "macbook-air-$$", "mac-mini-$$"],
         i : ["iphone-$$"]
       }), {
         n : ["aleksandr", "sergej", "vladimir", "elena", "tatana", "andrej", "aleksej", "olga", "nikolaj", "natala", "anna", "ivan", "dmitrij", "irina", "maria", "mihail", "svetlana", "ekaterina", "evgenij", "viktor", "anastasia", "urij", "ulia", "valentin", "roman", "igor", "anatolij", "oleg", "pavel", "maksim"]
       })
     };
     obj.default = obj["en-us"];
     obj.en = obj["en-us"];
     obj.ru = obj["ru-ru"];
     var d = {
       m : ["macbook-pro", "macbook-air", "mac-mini", "mac-pro"],
       i : ["iphone", "iphone-2"]
     };
     var _styles;
     var _opinionatedRules;
     /** @type {!Array} */
     var strategies = ["brands", "mobile", "platform", "platformVersion", "architecture", "bitness", "model", "uaFullVersion"];
     var styles = ((_styles = {})[0] = function() {
       return create(action(510, -4), select);
     }, _styles[1] = function() {
       var res;
       var reject;
       var promise;
       /** @type {!Promise} */
       var p1 = ((promise = new Promise(function(applist, rj) {
         res = applist;
         reject = rj;
       })).resolve = res, promise.reject = reject, promise);
       var p2 = action(_initSys() ? 310 : 410);
       return create(Promise.race([p1, p2]).then(function(canCreateDiscussions) {
         if (void 0 !== canCreateDiscussions) {
           return action(canCreateDiscussions + 100 - Date.now());
         }
       }).then(function() {
         return -4;
       }), function() {
         return function(saveNotifs) {
           return extend(this, void 0, void 0, function() {
             var msg;
             var buffer;
             return then(this, function(_context) {
               switch(_context.label) {
                 case 0:
                   return sniff() ? [4, success(msg = function() {
                     /** @type {boolean} */
                     var result = !_initSys();
                     /** @type {string} */
                     var key = navigator.language.toLowerCase();
                     /** @type {string} */
                     var tag = key.slice(0, 2);
                     var res = obj[key] || obj[tag] || obj.default;
                     var lastWord = result ? res.i.slice() : res.m.slice();
                     /** @type {!Array<?>} */
                     var errors = result ? d.i.slice() : d.m.slice();
                     /** @type {number} */
                     var j = 0;
                     var method = result ? res.n : res.n.slice(0, 15);
                     for (; j < method.length; j++) {
                       var name = method[j];
                       /** @type {number} */
                       var layer_i = 0;
                       var crossfilterable_layers = lastWord;
                       for (; layer_i < crossfilterable_layers.length; layer_i++) {
                         var urlTemplate = crossfilterable_layers[layer_i];
                         errors.push(urlTemplate.replace("$$", name));
                       }
                     }
                     return errors.map(function(canCreateDiscussions) {
                       return canCreateDiscussions + ".local";
                     });
                   }())] : [2, -2];
                 case 1:
                   return buffer = _context.sent(), null == saveNotifs || saveNotifs(), "number" == typeof buffer ? [2, buffer] : buffer.length === msg.length ? [2, -3] : buffer.length > 1 ? [2, retriedRequest(buffer)] : 1 === buffer.length ? [2, buffer[0]] : [2, -1];
               }
             });
           });
         }(function() {
           return p1.resolve(Date.now());
         });
       });
     }, _styles[2] = function() {
       var element = window.speechSynthesis;
       if ("function" != typeof(null == element ? void 0 : element.getVoices)) {
         return -1;
       }
       var scopeWindow;
       /**
        * @return {?}
        */
       var dirname = function() {
         return element.getVoices();
       };
       return !element.addEventListener || getBrowser() && replace(["AnonymousContent" in (scopeWindow = window), !("AudioBuffer" in scopeWindow), !("RTCPeerConnection" in scopeWindow), !("geolocation" in navigator), !("ServiceWorker" in scopeWindow)]) >= 3 ? expand(dirname()) : function(speaker) {
         return extend(this, void 0, void 0, function() {
           var ended;
           return then(this, function(_a) {
             switch(_a.label) {
               case 0:
                 return _a.trys.push([0, , 2, 3]), [4, new Promise(function(e, saveNotifs) {
                   var y;
                   /**
                    * @return {undefined}
                    */
                   var start = function() {
                     if (speaker.getVoices().length) {
                       if (!(null == y)) {
                         y();
                       }
                       y = _start(e, 50);
                     } else {
                       if (!y) {
                         y = log(e, 600);
                       }
                     }
                   };
                   /**
                    * @return {undefined}
                    */
                   ended = function sendNotif() {
                     try {
                       start();
                     } catch (notifications) {
                       saveNotifs(notifications);
                     }
                   };
                   start();
                   speaker.addEventListener("voiceschanged", ended);
                 })];
               case 1:
                 return [2, _a.sent()];
               case 2:
                 return ended && speaker.removeEventListener("voiceschanged", ended), [7];
               case 3:
                 return [2];
             }
           });
         });
       }(element).then(function() {
         return function() {
           var dir = dirname();
           return dir.length ? expand(dir) : -2;
         };
       });
     }, _styles[3] = function() {
       return extend(this, void 0, void 0, function() {
         var ApplePaySession;
         return then(this, function(_a) {
           switch(_a.label) {
             case 0:
               if ("function" != typeof(ApplePaySession = window.ApplePaySession)) {
                 return [2, {
                   s : -1,
                   v : null
                 }];
               }
               /** @type {number} */
               _a.label = 1;
             case 1:
               return _a.trys.push([1, 3, , 4]), ApplePaySession.canMakePayments() ? sniff() && !embed() ? [2, {
                 s : 0,
                 v : 1
               }] : [4, Promise.race([ApplePaySession.canMakePaymentsWithActiveCard(""), action(250, false)])] : [2, {
                 s : 0,
                 v : 0
               }];
             case 2:
               return [2, {
                 s : 0,
                 v : _a.sent() ? 3 : 2
               }];
             case 3:
               return [2, transOutNode(_a.sent())];
             case 4:
               return [2];
           }
         });
       });
     }, _styles[4] = function(options) {
       var _row = options.storageKeyPrefix;
       return extend(this, void 0, void 0, function() {
         var _this6;
         var n;
         var _ret12;
         return then(this, function(_context) {
           switch(_context.label) {
             case 0:
               return void 0 !== (n = function(STORAGE_SETTINGS_ID) {
                 try {
                   var adjustedLevel = localStorage.getItem(STORAGE_SETTINGS_ID);
                   if (!adjustedLevel) {
                     return;
                   }
                   return "1" === adjustedLevel;
                 } catch (n) {
                   return;
                 }
               }(_this6 = _row + "_i")) ? [2, n] : [4, demuxMp3()];
             case 1:
               return _ret12 = _context.sent(), function(aBundle, shouldCollapse) {
                 try {
                   localStorage.setItem(aBundle, shouldCollapse ? "1" : "0");
                 } catch (n) {
                 }
               }(_this6, _ret12), [2, _ret12];
           }
         });
       });
     }, _styles[5] = updateNavbar, _styles[8] = function() {
       var item = this;
       return create(property(250, -2), function() {
         return extend(item, void 0, void 0, function() {
           var mediaDevices;
           var getValue;
           var save;
           return then(this, function(_context) {
             switch(_context.label) {
               case 0:
                 return (null == (mediaDevices = navigator.mediaDevices) ? void 0 : mediaDevices.enumerateDevices) ? (getValue = function(aKey) {
                   return aKey.slice(0, 32).replace(/([,\\])/g, "\\$1");
                 }, save = function(options) {
                   return [getValue(options.deviceId), getValue(options.groupId), {
                     audioinput : "ai",
                     audiooutput : "ao",
                     videoinput : "vi"
                   }[options.kind], getValue(options.label)].join(",");
                 }, [4, mediaDevices.enumerateDevices()]) : [2, -1];
               case 1:
                 return [2, _context.sent().map(save)];
             }
           });
         });
       });
     }, _styles[7] = function() {
       var browserCrypto;
       return extend(this, void 0, void 0, function() {
         var crypto;
         var storeOffline;
         var interiors;
         var data;
         var p;
         var a;
         var item = this;
         return then(this, function(_a) {
           switch(_a.label) {
             case 0:
               if (!(crypto = null === (browserCrypto = window.crypto) || void 0 === browserCrypto ? void 0 : browserCrypto.subtle) || !crypto.generateKey || !crypto.exportKey) {
                 return [2, -1];
               }
               /**
                * @return {?}
                */
               storeOffline = function() {
                 return extend(item, void 0, void 0, function() {
                   var ecdhPublicKey;
                   var outputByteCount;
                   return then(this, function(_context) {
                     switch(_context.label) {
                       case 0:
                         return [4, crypto.generateKey({
                           name : "AES-GCM",
                           length : 128
                         }, true, ["encrypt"])];
                       case 1:
                         return ecdhPublicKey = _context.sent(), [4, crypto.exportKey("raw", ecdhPublicKey)];
                       case 2:
                         return outputByteCount = _context.sent(), [2, new Uint8Array(outputByteCount)];
                     }
                   });
                 });
               };
               /** @type {number} */
               _a.label = 1;
             case 1:
               return _a.trys.push([1, 3, , 4]), [4, Promise.all([storeOffline(), storeOffline()])];
             case 2:
               interiors = _a.sent();
               /** @type {!Uint8Array} */
               data = new Uint8Array(interiors[0].length);
               /** @type {number} */
               p = 0;
               for (; p < interiors[0].length; ++p) {
                 /** @type {number} */
                 data[p] = 165 ^ interiors[0][p] ^ interiors[1][p];
               }
               return [2, sort(data)];
             case 3:
               if ("NotSupportedError" === (a = _a.sent()).name) {
                 return [2, -2];
               }
               throw a;
             case 4:
               return [2];
           }
         });
       });
     }, _styles[6] = function() {
       var item = this;
       return create(property(75, -3), function() {
         return extend(item, void 0, void 0, function() {
           var _navigator;
           var opentok;
           var self;
           var a;
           return then(this, function(_a) {
             switch(_a.label) {
               case 0:
                 if (!(_navigator = navigator).requestMediaKeySystemAccess) {
                   return [2, -1];
                 }
                 /** @type {number} */
                 _a.label = 1;
               case 1:
                 return _a.trys.push([1, 6, , 7]), [4, _navigator.requestMediaKeySystemAccess("org.w3.clearkey", [{
                   initDataTypes : ["keyids", "webm"],
                   audioCapabilities : ["opus", "vorbis"].map(function(canCreateDiscussions) {
                     return {
                       contentType : 'audio/webm; codecs="' + canCreateDiscussions + '"'
                     };
                   }),
                   videoCapabilities : ["vp9", "vp8"].map(function(canCreateDiscussions) {
                     return {
                       contentType : 'video/webm; codecs="' + canCreateDiscussions + '"'
                     };
                   })
                 }])];
               case 2:
                 return [4, _a.sent().createMediaKeys()];
               case 3:
                 return opentok = _a.sent(), (self = opentok.createSession()).sessionId ? [3, 5] : [4, new Promise(function(resolve) {
                   self.onmessage = resolve;
                   self.generateRequest("webm", new Uint8Array([1, 1, 1, 1]));
                 })];
               case 4:
                 _a.sent();
                 /** @type {number} */
                 _a.label = 5;
               case 5:
                 return [2, self.sessionId];
               case 6:
                 if ("NotSupportedError" === (a = _a.sent()).name) {
                   return [2, -2];
                 }
                 throw a;
               case 7:
                 return [2];
             }
           });
         });
       });
     }, _styles[9] = function() {
       var os;
       return extend(this, void 0, void 0, function() {
         var data;
         var ch;
         var gettime;
         var item = this;
         return then(this, function(_context) {
           switch(_context.label) {
             case 0:
               return (data = navigator.userAgentData) && "object" == typeof data ? (ch = {}, gettime = [], "function" != typeof data.getHighEntropyValues ? [3, 2] : [4, Promise.all(strategies.map(function(time) {
                 return extend(item, void 0, void 0, function() {
                   var cast;
                   var a;
                   return then(this, function(_a) {
                     switch(_a.label) {
                       case 0:
                         return _a.trys.push([0, 2, , 3]), [4, data.getHighEntropyValues([time])];
                       case 1:
                         return void 0 !== (cast = _a.sent()[time]) && (ch[time] = "string" == typeof cast ? cast : JSON.stringify(cast)), [3, 3];
                       case 2:
                         if ("NotAllowedError" !== (a = _a.sent()).name) {
                           throw a;
                         }
                         return gettime.push(time), [3, 3];
                       case 3:
                         return [2];
                     }
                   });
                 });
               }))]) : [2, void 0];
             case 1:
               _context.sent();
               /** @type {number} */
               _context.label = 2;
             case 2:
               return [2, {
                 b : data.brands.map(function(p) {
                   return {
                     b : p.brand,
                     v : p.version
                   };
                 }),
                 m : data.mobile,
                 p : null !== (os = data.platform) && void 0 !== os ? os : null,
                 h : ch,
                 nah : gettime
               }];
           }
         });
       });
     }, _styles[10] = function() {
       return extend(this, void 0, void 0, function() {
         var agent;
         var localTask;
         return then(this, function(_context) {
           switch(_context.label) {
             case 0:
               return (agent = navigator.permissions) ? [4, agent.query({
                 name : "notifications"
               })] : [2, void 0];
             case 1:
               return localTask = _context.sent(), "undefined" == typeof Notification ? [2, void 0] : [2, "denied" === Notification.permission && "prompt" === localTask.state];
           }
         });
       });
     }, _styles[11] = function() {
       /** @type {!Screen} */
       var bounds = screen;
       if (bounds.availWidth && bounds.availHeight) {
         /** @type {!Array} */
         var paramsWithDefault = [0 | bounds.availWidth, 0 | bounds.availHeight];
         return paramsWithDefault.sort().reverse(), paramsWithDefault;
       }
     }, _styles[12] = function() {
       /** @type {number} */
       var timestamp = (new Date).getFullYear();
       return Math.max(+(new Date(timestamp, 0, 1)).getTimezoneOffset(), +(new Date(timestamp, 6, 1)).getTimezoneOffset());
     }, _styles[13] = function() {
       var Intl;
       var Constructor = null === (Intl = window.Intl) || void 0 === Intl ? void 0 : Intl.DateTimeFormat;
       if (Constructor) {
         return (new Constructor).resolvedOptions().timeZone;
       }
     }, _styles[14] = function() {
       var contexts = function() {
         /** @type {!Element} */
         var e = document.createElement("canvas");
         return e.width = 240, e.height = 140, e.style.display = "inline", [e, e.getContext("2d")];
       }();
       var context = contexts[0];
       var ctx = contexts[1];
       if (!function(a, macro_context) {
         return !(!macro_context || !a.toDataURL);
       }(context, ctx)) {
         return {
           winding : false,
           data : ""
         };
       }
       ctx.rect(0, 0, 10, 10);
       ctx.rect(2, 2, 6, 6);
       /** @type {boolean} */
       var winding = !ctx.isPointInPath(5, 5, "evenodd");
       /** @type {string} */
       ctx.textBaseline = "alphabetic";
       /** @type {string} */
       ctx.fillStyle = "#f60";
       ctx.fillRect(125, 1, 62, 20);
       /** @type {string} */
       ctx.fillStyle = "#069";
       /** @type {string} */
       ctx.font = "11pt no-real-font-123";
       /** @type {string} */
       var tempPathText = "Cwm fjordbank " + String.fromCharCode(55357, 56835) + " gly";
       ctx.fillText(tempPathText, 2, 15);
       /** @type {string} */
       ctx.fillStyle = "rgba(102, 204, 0, 0.2)";
       /** @type {string} */
       ctx.font = "18pt Arial";
       ctx.fillText(tempPathText, 4, 45);
       /** @type {string} */
       ctx.globalCompositeOperation = "multiply";
       /** @type {number} */
       var conditions_count = 0;
       /** @type {!Array} */
       var conditions = [["#f0f", 50, 50], ["#0ff", 100, 50], ["#ff0", 75, 100]];
       for (; conditions_count < conditions.length; conditions_count++) {
         var conditionVariable = conditions[conditions_count];
         var parBgColor = conditionVariable[0];
         var space_x = conditionVariable[1];
         var yk = conditionVariable[2];
         ctx.fillStyle = parBgColor;
         ctx.beginPath();
         ctx.arc(space_x, yk, 50, 0, 2 * Math.PI, true);
         ctx.closePath();
         ctx.fill();
       }
       return ctx.fillStyle = "#f0f", ctx.arc(75, 75, 75, 0, 2 * Math.PI, true), ctx.arc(75, 75, 25, 0, 2 * Math.PI, true), ctx.fill("evenodd"), {
         winding : winding,
         data : capture(context)
       };
     }, _styles[15] = function() {
       return void 0 !== navigator.plugins;
     }, _styles[16] = function() {
       return navigator.platform;
     }, _styles[17] = function() {
       return void 0 !== window.chrome;
     }, _styles[18] = function() {
       return navigator.webdriver;
     }, _styles[19] = function() {
       /** @type {!Window} */
       var child = window;
       /** @type {!HTMLDocument} */
       var doc = document;
       /** @type {!Element} */
       var query = doc.documentElement;
       return "webdriver" in child || "_Selenium_IDE_Recorder" in child || "callSelenium" in child || "_selenium" in child || "__webdriver_script_fn" in doc || "__driver_evaluate" in doc || "__webdriver_evaluate" in doc || "__selenium_evaluate" in doc || "__fxdriver_evaluate" in doc || "__driver_unwrapped" in doc || "__webdriver_unwrapped" in doc || "__selenium_unwrapped" in doc || "__fxdriver_unwrapped" in doc || "__webdriver_script_func" in doc || null !== query.getAttribute("selenium") || null !== 
       query.getAttribute("webdriver") || null !== query.getAttribute("driver");
     }, _styles[20] = function() {
       return navigator.productSub;
     }, _styles[21] = function() {
       return eval.toString().length;
     }, _styles[22] = function() {
       try {
         throw "a";
       } catch (e) {
         try {
           return e.toSource(), true;
         } catch (t) {
           return false;
         }
       }
     }, _styles[23] = function() {
       var e = window.WebAssembly;
       if (null == e ? void 0 : e.validate) {
         /** @type {!Array} */
         var val = [0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10];
         /** @type {number} */
         var idx = 0;
         /** @type {number} */
         var i = 0;
         /** @type {!Array} */
         var s = [[9, 1, 7, 0, 65, 0, 253, 15, 26, 11, 0, 10, 4, 110, 97, 109, 101, 2, 3, 1, 0, 0], [240, 67, 0, 0, 0, 12, 1, 10, 0, 252, 2, 3, 1, 1, 0, 0, 110, 26, 11, 161, 10], [6, 1, 4, 0, 18, 0, 11, 0, 10, 4, 110, 97, 109, 101, 2, 3, 1, 0, 0], [8, 1, 6, 0, 65, 0, 192, 26, 11, 0, 10, 4, 110, 97, 109, 101, 2, 3, 1, 0, 0], [7, 1, 5, 0, 208, 112, 26, 11, 0, 10, 4, 110, 97, 109, 101, 2, 3, 1, 0, 0]];
         for (; i < s.length; i++) {
           var k = s[i];
           /** @type {number} */
           idx = idx << 1;
           /** @type {number} */
           idx = idx | (e.validate(Uint8Array.of.apply(Uint8Array, gen(val, k))) ? 1 : 0);
         }
         return idx;
       }
     }, _styles[24] = function() {
       var realPermissionSettings;
       return null !== (realPermissionSettings = navigator.doNotTrack) && void 0 !== realPermissionSettings ? realPermissionSettings : void 0;
     }, _styles[25] = function() {
       /** @type {!Window} */
       var inheritedObject = window;
       if (!watch()) {
         return false;
       }
       try {
         if ([66, 114, 97, 118, 101].map(function(code21) {
           return String.fromCharCode(code21);
         }).join("") in inheritedObject) {
           return true;
         }
         /** @type {!Element} */
         var canvasElement = document.createElement("canvas");
         /** @type {number} */
         canvasElement.width = 4;
         /** @type {number} */
         canvasElement.height = 4;
         /** @type {string} */
         canvasElement.style.display = "inline";
         var keystring = canvasElement.toDataURL();
         if ("" === keystring) {
           return true;
         }
         var left = window.atob(keystring.split(",")[1]);
         var len = left.length;
         /** @type {!Uint8Array} */
         var str = new Uint8Array(len);
         /** @type {number} */
         var c = 0;
         for (; c < len; c++) {
           str[c] = left.charCodeAt(c);
         }
         var i = find_eol(str, [73, 68, 65, 84, 24]);
         if (-1 === i) {
           return false;
         }
         var matchIndex = find_eol(str, [73, 69, 78, 68]);
         return -1 !== matchIndex && 1321 !== str.slice(i + 5, matchIndex).reduce(function(buckets, name) {
           return buckets + name;
         }, 0);
       } catch (c) {
         return false;
       }
     }, _styles[26] = function() {
       return !!isUndefined("dark") || !isUndefined("light") && void 0;
     }, _styles[27] = function() {
       /** @type {number} */
       var node = Date.now();
       return [calculateLargestZIndex(node), calculateLargestZIndex(node - 6E4 * (new Date).getTimezoneOffset())];
     }, _styles[28] = function() {
       /** @type {!Array} */
       var newNodeLists = [];
       /** @type {number} */
       var maxR = Math.random();
       /** @type {number} */
       var n = 24575;
       for (; n >= 0; --n) {
         if (n % 4096 == 0) {
           /** @type {number} */
           var r = Math.random();
           newNodeLists.push((maxR - r) * Math.pow(2, 31) | 0);
           /** @type {number} */
           maxR = r;
         }
       }
       return newNodeLists;
     }, _styles[29] = function() {
       /** @type {(Performance|null)} */
       var perf = window.performance;
       if (null == perf ? void 0 : perf.now) {
         /** @type {number} */
         var size = 1;
         /** @type {number} */
         var n = 1;
         /** @type {number} */
         var x = perf.now();
         /** @type {number} */
         var y = x;
         /** @type {number} */
         var o = 0;
         for (; o < 5E4; o++) {
           if ((x = y) < (y = perf.now())) {
             /** @type {number} */
             var i = y - x;
             if (i > size) {
               if (i < n) {
                 /** @type {number} */
                 n = i;
               }
             } else {
               if (i < size) {
                 /** @type {number} */
                 n = size;
                 /** @type {number} */
                 size = i;
               }
             }
           }
         }
         return [size, n];
       }
     }, _styles[30] = function() {
       var performance;
       var m;
       return null === (m = null === (performance = window.performance) || void 0 === performance ? void 0 : performance.memory) || void 0 === m ? void 0 : m.jsHeapSizeLimit;
     }, _styles[31] = function() {
       return {
         s : sniff() && !_initSys() ? embed() ? 0 : 1 : 2,
         v : [(typeof SourceBuffer).slice(0, 3), (typeof SourceBufferList).slice(0, 3)]
       };
     }, _styles[32] = function() {
       var scaleBy;
       return null !== (scaleBy = window.devicePixelRatio) && void 0 !== scaleBy ? scaleBy : void 0;
     }, _styles[33] = view, _styles[34] = style, _styles[35] = watch, _styles[36] = sniff, _styles[37] = _initSys, _styles[38] = getBrowser, _styles[39] = start, _styles);
     var opinionatedRules = ((_opinionatedRules = {}).j = function() {
       /** @type {!Element} */
       var canvas = document.createElement("canvas");
       /** @type {!Array} */
       var ctx3dNames = ["webgl", "experimental-webgl"];
       var err = void 0;
       /** @type {number} */
       var i = 0;
       for (; i < ctx3dNames.length && !err; i++) {
         try {
           err = canvas.getContext(ctx3dNames[i]);
         } catch (a) {
         }
       }
       if (err) {
         var record = callback(callback({}, function(gl) {
           var default_favicon;
           var gasEstimates;
           var etherBalance;
           var ClassObject;
           var o;
           var o_message;
           var defaults = gl.getSupportedExtensions();
           var ext = gl.getExtension("WEBGL_debug_renderer_info");
           var condition = gl.getContextAttributes();
           /** @type {!Array} */
           var drilldownLevelLabels = [];
           /** @type {!Array} */
           var cmd = [];
           /** @type {!Array} */
           var plugins = [];
           /** @type {!Array} */
           var responseGroup = [];
           var j;
           for (j in condition) {
             if (Object.prototype.hasOwnProperty.call(condition, j)) {
               drilldownLevelLabels.push(j + "=" + condition[j]);
             }
           }
           var result = attr(gl);
           var vroot = view();
           /** @type {number} */
           var i = 0;
           var profiles = result;
           for (; i < profiles.length; i++) {
             var type = gl[name = profiles[i]];
             if (NOT_VISIBLE_TRIGGER_TYPES.indexOf(type) > -1) {
               var y = vroot && -1 === BUILD_TYPES.indexOf(type) ? gl.getParameter(type) : null;
               cmd.push(name + "(" + type + ")=" + y);
             } else {
               cmd.push(name + "=" + type);
             }
           }
           if (defaults) {
             /** @type {number} */
             var i = 0;
             var result = defaults;
             for (; i < result.length; i++) {
               var type = result[i];
               var value = gl.getExtension(type);
               if (value) {
                 /** @type {number} */
                 var i = 0;
                 var result = attr(value);
                 for (; i < result.length; i++) {
                   var name;
                   type = value[name = result[i]];
                   if (optForFields.indexOf(name) > 0) {
                     plugins.push(name + "(" + type + ")=" + gl.getParameter(type));
                   } else {
                     plugins.push(name + "=" + type);
                   }
                 }
               }
             }
           }
           /** @type {number} */
           var index = 0;
           /** @type {!Array} */
           var selectables = Tn;
           for (; index < selectables.length; index++) {
             var node = selectables[index];
             /** @type {number} */
             var i = 0;
             /** @type {!Array} */
             var domains = line2;
             for (; i < domains.length; i++) {
               var domain = domains[i];
               var uc = Context(gl, node, domain);
               responseGroup.push(node + "." + domain + "=" + uc.join(","));
             }
           }
           return plugins.sort(), cmd.sort(), {
             version : (null === (default_favicon = gl.getParameter(gl.VERSION)) || void 0 === default_favicon ? void 0 : default_favicon.toString()) || "",
             vendor : (null === (gasEstimates = gl.getParameter(gl.VENDOR)) || void 0 === gasEstimates ? void 0 : gasEstimates.toString()) || "",
             vendorUnmasked : ext ? null === (etherBalance = gl.getParameter(ext.UNMASKED_VENDOR_WEBGL)) || void 0 === etherBalance ? void 0 : etherBalance.toString() : "",
             renderer : (null === (ClassObject = gl.getParameter(gl.RENDERER)) || void 0 === ClassObject ? void 0 : ClassObject.toString()) || "",
             rendererUnmasked : ext ? null === (o = gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) || void 0 === o ? void 0 : o.toString() : "",
             shadingLanguageVersion : (null === (o_message = gl.getParameter(gl.SHADING_LANGUAGE_VERSION)) || void 0 === o_message ? void 0 : o_message.toString()) || "",
             contextAttributes : drilldownLevelLabels.join("&"),
             parameters : cmd.join("&"),
             shaderPrecisions : responseGroup.join("&"),
             extensions : defaults ? defaults.join(",") : "",
             extensionParameters : plugins.join(",")
           };
         }(err)), {
           fingerprint : ""
         });
         return function(gl) {
           /**
            * @param {number} attribs
            * @param {string} fragmentSource
            * @return {undefined}
            */
           function linkProgram(attribs, fragmentSource) {
             var vertexShader = gl.createShader(35633 - attribs);
             if (program && vertexShader) {
               gl.shaderSource(vertexShader, fragmentSource);
               gl.compileShader(vertexShader);
               gl.attachShader(program, vertexShader);
             }
           }
           gl.clearColor(0, 0, 1, 1);
           var program = gl.createProgram();
           if (program) {
             linkProgram(0, "attribute vec2 p;uniform float t;void main(){float s=sin(t);float c=cos(t);gl_Position=vec4(p*mat2(c,s,-s,c),1,1);}");
             linkProgram(1, "void main(){gl_FragColor=vec4(1,0,0,1);}");
             gl.linkProgram(program);
             gl.useProgram(program);
             gl.enableVertexAttribArray(0);
             var loc = gl.getUniformLocation(program, "t");
             var idxBuffer = gl.createBuffer();
             gl.bindBuffer(34962, idxBuffer);
             gl.bufferData(34962, new Float32Array([0, 1, -1, -1, 1, -1]), 35044);
             gl.vertexAttribPointer(0, 2, 5126, false, 0, 0);
             gl.clear(16384);
             gl.uniform1f(loc, 3.65);
             gl.drawArrays(4, 0, 3);
           }
         }(err), record.fingerprint = canvas.toDataURL(), record;
       }
     }, _opinionatedRules);
     var loadSubGraph = function(toRules, root, config) {
       var debug;
       var agentId;
       var item = this;
       var c = config.debug && (debug = config.debug, agentId = first(8), function(calendars) {
         return debug(callback(callback({}, calendars), {
           agentId : agentId
         }));
       });
       return l(c, function() {
         return {
           e : 0,
           version : "3.4.0",
           options : config
         };
       }, function() {
         return {
           e : 1
         };
       }, function(error_func) {
         return {
           e : 2,
           error : error_func
         };
       }, function() {
         return extend(item, void 0, void 0, function() {
           var name;
           var value;
           var child;
           var min;
           var type;
           var left;
           var a;
           var height;
           var setTrailViewOffset;
           var parent;
           return then(this, function(_context) {
             switch(_context.label) {
               case 0:
                 if (name = config.token, value = config.region, child = void 0 === value ? "us" : value, min = config.tlsEndpoint, type = config.disableTls, left = config.storageKey, a = void 0 === left ? "_vid" : left, height = config.endpoint, setTrailViewOffset = config.delayFallback, !name || "string" != typeof name) {
                   throw new Error("Token required");
                 }
                 return parent = function(width, deltaType, count, cell, d) {
                   if (!deltaType) {
                     var url = function(name, value) {
                       return value || endpoints[name];
                     }(width, count);
                     return g(d, function() {
                       return {
                         e : 6,
                         endpoint : url
                       };
                     }), [build(url, cell, d), Date.now()];
                   }
                 }(child, type, min, root, c), [4, getAccounts(setTrailViewOffset)];
               case 1:
                 return _context.sent(), g(c, function() {
                   return {
                     e : 12
                   };
                 }), [2, insert(toRules({
                   storageKeyPrefix : a
                 }), parent, name, child, height, a, c)];
             }
           });
         });
       });
     }.bind(null, function(json) {
       var payload = stringify(model, ["screenFrame"]);
       return save(callback(callback(callback({}, styles), payload), opinionatedRules), json, []);
     }, void 0);
     /** @type {string} */
     var Xn = "Token required";
     /** @type {string} */
     var Yn = "Token not found";
     /** @type {string} */
     var Zn = "Token expired";
     /** @type {string} */
     var Qn = "Request cannot be parsed";
     /** @type {string} */
     var er = "Request failed";
     /** @type {string} */
     var tr = "Request failed to process";
     /** @type {string} */
     var nr = "Too many requests, rate limit exceeded";
     /** @type {string} */
     var rr = "Not available for this origin";
     /** @type {string} */
     var ir = "Not available with restricted header";
     var settings = {
       load : loadSubGraph,
       ERROR_CLIENT_TIMEOUT : "Client timeout",
       ERROR_NETWORK_CONNECTION : "Network connection error",
       ERROR_NETWORK_ABORT : "Network request aborted",
       ERROR_WRONG_REGION : _open,
       ERROR_SUBSCRIPTION_NOT_ACTIVE : h,
       ERROR_TOKEN_MISSING : "Token required",
       ERROR_TOKEN_INVALID : "Token not found",
       ERROR_TOKEN_EXPIRED : "Token expired",
       ERROR_BAD_REQUEST_FORMAT : "Request cannot be parsed",
       ERROR_BAD_RESPONSE_FORMAT : "Response cannot be parsed",
       ERROR_GENERAL_SERVER_FAILURE : "Request failed",
       ERROR_SERVER_TIMEOUT : "Request failed to process",
       ERROR_RATE_LIMIT : "Too many requests, rate limit exceeded",
       ERROR_FORBIDDEN_ORIGIN : "Not available for this origin",
       ERROR_FORBIDDEN_HEADER : "Not available with restricted header"
     };
     context.default = settings;
   }
 }]);
 