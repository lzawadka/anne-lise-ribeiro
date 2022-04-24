// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8ZY19":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ed03f8af88090f45";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"2DotB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _siema = require("siema");
var _siemaDefault = parcelHelpers.interopDefault(_siema);
// PRINT
const printDesignCarousel = new _siemaDefault.default({
    selector: '.printDesign__carousel',
    loop: true,
    duration: 300,
    easing: 'ease-in',
    perPage: 1
});
const nextDesignCarousel = document.getElementById('printDesign_next');
const prevDesignCarousel = document.getElementById('printDesign_prev');
// prev.addEventListener('click', () => printDesignCarousel.prev());
// next.addEventListener('click', () => printDesignCarousel.next());
prevDesignCarousel.addEventListener('click', ()=>{
    printDesignCarousel.prev();
    const indexOfCurrent = printDesignCarousel.currentSlide;
    if (indexOfCurrent !== 0) document.getElementById('printDesignPage').style.opacity = "0";
    else document.getElementById('printDesignPage').style.opacity = "1";
});
nextDesignCarousel.addEventListener('click', ()=>{
    printDesignCarousel.next();
    const indexOfCurrent = printDesignCarousel.currentSlide;
    if (indexOfCurrent !== 0) document.getElementById('printDesignPage').style.opacity = "0";
    else document.getElementById('printDesignPage').style.opacity = "1";
});
// ESPELET
const projectEspeletCarousel = new _siemaDefault.default({
    selector: '.projectEspelet__carousel',
    loop: true,
    duration: 300,
    easing: 'ease-in',
    perPage: 1
});
const prevProjectEspelet = document.getElementById('projectEspelet_prev');
const nextProjectEspelet = document.getElementById('projectEspelet_next');
prevProjectEspelet.addEventListener('click', ()=>{
    projectEspeletCarousel.prev();
    const indexOfCurrent = projectEspeletCarousel.currentSlide;
    if (indexOfCurrent !== 0) {
        document.getElementById('espletPage').style.opacity = "0";
        document.getElementById('espelet').style.opacity = "0";
    } else {
        document.getElementById('espletPage').style.opacity = "1";
        document.getElementById('espelet').style.opacity = "1";
    }
});
nextProjectEspelet.addEventListener('click', ()=>{
    projectEspeletCarousel.next();
    const indexOfCurrent = projectEspeletCarousel.currentSlide;
    if (indexOfCurrent !== 0) {
        document.getElementById('espletPage').style.opacity = "0";
        document.getElementById('espelet').style.opacity = "0";
    } else {
        document.getElementById('espletPage').style.opacity = "1";
        document.getElementById('espelet').style.opacity = "1";
    }
});
// CAPSULECOLLECTION
const capsuleCollectionCarousel = new _siemaDefault.default({
    selector: '.capsuleCollection__carousel',
    loop: true,
    duration: 300,
    easing: 'ease-in',
    perPage: 1
});
const prevCapsuleCollection = document.getElementById('capsuleCollection_prev');
const nextCapsuleCollection = document.getElementById('capsuleCollection_next');
prevCapsuleCollection.addEventListener('click', ()=>{
    capsuleCollectionCarousel.prev();
    const indexOfCurrent = capsuleCollectionCarousel.currentSlide;
    if (indexOfCurrent !== 0) document.getElementById('capsuleCollectionPage').style.opacity = "0";
    else document.getElementById('capsuleCollectionPage').style.opacity = "1";
});
nextCapsuleCollection.addEventListener('click', ()=>{
    capsuleCollectionCarousel.next();
    const indexOfCurrent = capsuleCollectionCarousel.currentSlide;
    if (indexOfCurrent !== 0) document.getElementById('capsuleCollectionPage').style.opacity = "0";
    else document.getElementById('capsuleCollectionPage').style.opacity = "1";
});
// TRADLIST
const sectiontradiListCarousel = new _siemaDefault.default({
    selector: '.sectiontradiList__carousel',
    loop: true,
    duration: 300,
    easing: 'ease-in',
    perPage: 1
});
const prevSectiontradiList = document.getElementById('sectiontradiList_prev');
const nextSectiontradiList = document.getElementById('sectiontradiList_next');
prevSectiontradiList.addEventListener('click', ()=>{
    sectiontradiListCarousel.prev();
    const indexOfCurrent = prevBretonVedrenne.currentSlide;
    if (indexOfCurrent !== 0) document.getElementById('tradiListPage').style.opacity = "0";
    else document.getElementById('tradiListPage').style.opacity = "1";
});
nextSectiontradiList.addEventListener('click', ()=>{
    sectiontradiListCarousel.next();
    const indexOfCurrent = prevBretonVedrenne.currentSlide;
    if (indexOfCurrent !== 0) document.getElementById('tradiListPage').style.opacity = "0";
    else document.getElementById('tradiListPage').style.opacity = "1";
});
// BRETONVEDRENNE
const bretonVedrenneCarousel = new _siemaDefault.default({
    selector: '.bretonVedrenne__carousel',
    loop: true,
    duration: 300,
    easing: 'ease-in',
    perPage: 1
});
const prevBretonVedrenne = document.getElementById('bretonVedrenne_prev');
const nextBretonVedrenne = document.getElementById('bretonVedrenne_next');
prevBretonVedrenne.addEventListener('click', ()=>{
    bretonVedrenneCarousel.prev();
    const indexOfCurrent = bretonVedrenneCarousel.currentSlide;
    if (indexOfCurrent !== 0) document.getElementById('bretonVedrennePage').style.opacity = "0";
    else document.getElementById('bretonVedrennePage').style.opacity = "1";
});
nextBretonVedrenne.addEventListener('click', ()=>{
    bretonVedrenneCarousel.next();
    const indexOfCurrent = bretonVedrenneCarousel.currentSlide;
    if (indexOfCurrent !== 0) document.getElementById('bretonVedrennePage').style.opacity = "0";
    else document.getElementById('bretonVedrennePage').style.opacity = "1";
});
// ANNELISELOGO
const anneLiseLogoCarousel = new _siemaDefault.default({
    selector: '.anneLiseLogo__carousel',
    loop: true,
    duration: 300,
    easing: 'ease-in',
    perPage: 1
});
const prevAnneLiseLogo = document.getElementById('anneLiseLogo_prev');
const nextAnneLiseLogo = document.getElementById('anneLiseLogo_next');
prevAnneLiseLogo.addEventListener('click', ()=>{
    anneLiseLogoCarousel.prev();
    const indexOfCurrent = anneLiseLogoCarousel.currentSlide;
    if (indexOfCurrent !== 0) document.getElementById('anneLiseLogoPage').style.opacity = "0";
    else document.getElementById('anneLiseLogoPage').style.opacity = "1";
});
nextAnneLiseLogo.addEventListener('click', ()=>{
    anneLiseLogoCarousel.next();
    const indexOfCurrent = anneLiseLogoCarousel.currentSlide;
    if (indexOfCurrent !== 0) document.getElementById('anneLiseLogoPage').style.opacity = "0";
    else document.getElementById('anneLiseLogoPage').style.opacity = "1";
});
// ILLUSTRATION
const illustrationCarousel = new _siemaDefault.default({
    selector: '.illustration__carousel',
    loop: true,
    duration: 300,
    easing: 'ease-in',
    perPage: 1
});
const prevIllustration = document.getElementById('illustration_prev');
const nextIllustration = document.getElementById('illustration_next');
prevIllustration.addEventListener('click', ()=>{
    illustrationCarousel.prev();
    const indexOfCurrent = illustrationCarousel.currentSlide;
    if (indexOfCurrent !== 0) document.getElementById('illustrationPage').style.opacity = "0";
    else document.getElementById('illustrationPage').style.opacity = "1";
});
nextIllustration.addEventListener('click', ()=>{
    illustrationCarousel.next();
    const indexOfCurrent = illustrationCarousel.currentSlide;
    if (indexOfCurrent !== 0) document.getElementById('illustrationPage').style.opacity = "0";
    else document.getElementById('illustrationPage').style.opacity = "1";
});
// ENNEDIAG
const ennediagCarousel = new _siemaDefault.default({
    selector: '.ennediag__carousel',
    loop: true,
    duration: 300,
    easing: 'ease-in',
    perPage: 1
});
const prevEnnediag = document.getElementById('ennediag_prev');
const nextEnnediag = document.getElementById('ennediag_next');
prevEnnediag.addEventListener('click', ()=>{
    ennediagCarousel.prev();
    const indexOfCurrent = ennediagCarousel.currentSlide;
    if (indexOfCurrent !== 0) document.getElementById('ennediagPage').style.opacity = "0";
    else document.getElementById('ennediagPage').style.opacity = "1";
});
nextEnnediag.addEventListener('click', ()=>{
    ennediagCarousel.next();
    const indexOfCurrent = ennediagCarousel.currentSlide;
    if (indexOfCurrent !== 0) document.getElementById('ennediagPage').style.opacity = "0";
    else document.getElementById('ennediagPage').style.opacity = "1";
});

},{"siema":"73ZoC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"73ZoC":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}("undefined" != typeof self ? self : this, function() {
    return function(e1) {
        function t1(r) {
            if (i1[r]) return i1[r].exports;
            var n = i1[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e1[r].call(n.exports, n, n.exports, t1), n.l = !0, n.exports;
        }
        var i1 = {};
        return t1.m = e1, t1.c = i1, t1.d = function(e, i, r) {
            t1.o(e, i) || Object.defineProperty(e, i, {
                configurable: !1,
                enumerable: !0,
                get: r
            });
        }, t1.n = function(e) {
            var i = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return t1.d(i, "a", i), i;
        }, t1.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, t1.p = "", t1(t1.s = 0);
    }([
        function(e2, t2, i2) {
            "use strict";
            function r1(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            Object.defineProperty(t2, "__esModule", {
                value: !0
            });
            var n1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, s1 = function() {
                function e3(e, t) {
                    for(var i = 0; i < t.length; i++){
                        var r = t[i];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                return function(t, i, r) {
                    return i && e3(t.prototype, i), r && e3(t, r), t;
                };
            }(), l1 = function() {
                function e4(t) {
                    var i = this;
                    if (r1(this, e4), this.config = e4.mergeSettings(t), this.selector = "string" == typeof this.config.selector ? document.querySelector(this.config.selector) : this.config.selector, null === this.selector) throw new Error("Something wrong with your selector 😭");
                    this.resolveSlidesNumber(), this.selectorWidth = this.selector.offsetWidth, this.innerElements = [].slice.call(this.selector.children), this.currentSlide = this.config.loop ? this.config.startIndex % this.innerElements.length : Math.max(0, Math.min(this.config.startIndex, this.innerElements.length - this.perPage)), this.transformProperty = e4.webkitOrNot(), [
                        "resizeHandler",
                        "touchstartHandler",
                        "touchendHandler",
                        "touchmoveHandler",
                        "mousedownHandler",
                        "mouseupHandler",
                        "mouseleaveHandler",
                        "mousemoveHandler",
                        "clickHandler"
                    ].forEach(function(e) {
                        i[e] = i[e].bind(i);
                    }), this.init();
                }
                return s1(e4, [
                    {
                        key: "attachEvents",
                        value: function() {
                            window.addEventListener("resize", this.resizeHandler), this.config.draggable && (this.pointerDown = !1, this.drag = {
                                startX: 0,
                                endX: 0,
                                startY: 0,
                                letItGo: null,
                                preventClick: !1
                            }, this.selector.addEventListener("touchstart", this.touchstartHandler), this.selector.addEventListener("touchend", this.touchendHandler), this.selector.addEventListener("touchmove", this.touchmoveHandler), this.selector.addEventListener("mousedown", this.mousedownHandler), this.selector.addEventListener("mouseup", this.mouseupHandler), this.selector.addEventListener("mouseleave", this.mouseleaveHandler), this.selector.addEventListener("mousemove", this.mousemoveHandler), this.selector.addEventListener("click", this.clickHandler));
                        }
                    },
                    {
                        key: "detachEvents",
                        value: function() {
                            window.removeEventListener("resize", this.resizeHandler), this.selector.removeEventListener("touchstart", this.touchstartHandler), this.selector.removeEventListener("touchend", this.touchendHandler), this.selector.removeEventListener("touchmove", this.touchmoveHandler), this.selector.removeEventListener("mousedown", this.mousedownHandler), this.selector.removeEventListener("mouseup", this.mouseupHandler), this.selector.removeEventListener("mouseleave", this.mouseleaveHandler), this.selector.removeEventListener("mousemove", this.mousemoveHandler), this.selector.removeEventListener("click", this.clickHandler);
                        }
                    },
                    {
                        key: "init",
                        value: function() {
                            this.attachEvents(), this.selector.style.overflow = "hidden", this.selector.style.direction = this.config.rtl ? "rtl" : "ltr", this.buildSliderFrame(), this.config.onInit.call(this);
                        }
                    },
                    {
                        key: "buildSliderFrame",
                        value: function() {
                            var e = this.selectorWidth / this.perPage, t = this.config.loop ? this.innerElements.length + 2 * this.perPage : this.innerElements.length;
                            this.sliderFrame = document.createElement("div"), this.sliderFrame.style.width = e * t + "px", this.enableTransition(), this.config.draggable && (this.selector.style.cursor = "-webkit-grab");
                            var i = document.createDocumentFragment();
                            if (this.config.loop) for(var r = this.innerElements.length - this.perPage; r < this.innerElements.length; r++){
                                var n = this.buildSliderFrameItem(this.innerElements[r].cloneNode(!0));
                                i.appendChild(n);
                            }
                            for(var s = 0; s < this.innerElements.length; s++){
                                var l = this.buildSliderFrameItem(this.innerElements[s]);
                                i.appendChild(l);
                            }
                            if (this.config.loop) for(var o = 0; o < this.perPage; o++){
                                var a = this.buildSliderFrameItem(this.innerElements[o].cloneNode(!0));
                                i.appendChild(a);
                            }
                            this.sliderFrame.appendChild(i), this.selector.innerHTML = "", this.selector.appendChild(this.sliderFrame), this.slideToCurrent();
                        }
                    },
                    {
                        key: "buildSliderFrameItem",
                        value: function(e) {
                            var t = document.createElement("div");
                            return t.style.cssFloat = this.config.rtl ? "right" : "left", t.style.float = this.config.rtl ? "right" : "left", t.style.width = (this.config.loop ? 100 / (this.innerElements.length + 2 * this.perPage) : 100 / this.innerElements.length) + "%", t.appendChild(e), t;
                        }
                    },
                    {
                        key: "resolveSlidesNumber",
                        value: function() {
                            if ("number" == typeof this.config.perPage) this.perPage = this.config.perPage;
                            else if ("object" === n1(this.config.perPage)) {
                                this.perPage = 1;
                                for(var e in this.config.perPage)window.innerWidth >= e && (this.perPage = this.config.perPage[e]);
                            }
                        }
                    },
                    {
                        key: "prev",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, t = arguments[1];
                            if (!(this.innerElements.length <= this.perPage)) {
                                var i = this.currentSlide;
                                if (this.config.loop) {
                                    if (this.currentSlide - e < 0) {
                                        this.disableTransition();
                                        var r = this.currentSlide + this.innerElements.length, n = this.perPage, s = r + n, l = (this.config.rtl ? 1 : -1) * s * (this.selectorWidth / this.perPage), o = this.config.draggable ? this.drag.endX - this.drag.startX : 0;
                                        this.sliderFrame.style[this.transformProperty] = "translate3d(" + (l + o) + "px, 0, 0)", this.currentSlide = r - e;
                                    } else this.currentSlide = this.currentSlide - e;
                                } else this.currentSlide = Math.max(this.currentSlide - e, 0);
                                i !== this.currentSlide && (this.slideToCurrent(this.config.loop), this.config.onChange.call(this), t && t.call(this));
                            }
                        }
                    },
                    {
                        key: "next",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, t = arguments[1];
                            if (!(this.innerElements.length <= this.perPage)) {
                                var i = this.currentSlide;
                                if (this.config.loop) {
                                    if (this.currentSlide + e > this.innerElements.length - this.perPage) {
                                        this.disableTransition();
                                        var r = this.currentSlide - this.innerElements.length, n = this.perPage, s = r + n, l = (this.config.rtl ? 1 : -1) * s * (this.selectorWidth / this.perPage), o = this.config.draggable ? this.drag.endX - this.drag.startX : 0;
                                        this.sliderFrame.style[this.transformProperty] = "translate3d(" + (l + o) + "px, 0, 0)", this.currentSlide = r + e;
                                    } else this.currentSlide = this.currentSlide + e;
                                } else this.currentSlide = Math.min(this.currentSlide + e, this.innerElements.length - this.perPage);
                                i !== this.currentSlide && (this.slideToCurrent(this.config.loop), this.config.onChange.call(this), t && t.call(this));
                            }
                        }
                    },
                    {
                        key: "disableTransition",
                        value: function() {
                            this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
                        }
                    },
                    {
                        key: "enableTransition",
                        value: function() {
                            this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing;
                        }
                    },
                    {
                        key: "goTo",
                        value: function(e, t) {
                            if (!(this.innerElements.length <= this.perPage)) {
                                var i = this.currentSlide;
                                this.currentSlide = this.config.loop ? e % this.innerElements.length : Math.min(Math.max(e, 0), this.innerElements.length - this.perPage), i !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this));
                            }
                        }
                    },
                    {
                        key: "slideToCurrent",
                        value: function(e) {
                            var t = this, i = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide, r = (this.config.rtl ? 1 : -1) * i * (this.selectorWidth / this.perPage);
                            e ? requestAnimationFrame(function() {
                                requestAnimationFrame(function() {
                                    t.enableTransition(), t.sliderFrame.style[t.transformProperty] = "translate3d(" + r + "px, 0, 0)";
                                });
                            }) : this.sliderFrame.style[this.transformProperty] = "translate3d(" + r + "px, 0, 0)";
                        }
                    },
                    {
                        key: "updateAfterDrag",
                        value: function() {
                            var e = (this.config.rtl ? -1 : 1) * (this.drag.endX - this.drag.startX), t = Math.abs(e), i = this.config.multipleDrag ? Math.ceil(t / (this.selectorWidth / this.perPage)) : 1, r = e > 0 && this.currentSlide - i < 0, n = e < 0 && this.currentSlide + i > this.innerElements.length - this.perPage;
                            e > 0 && t > this.config.threshold && this.innerElements.length > this.perPage ? this.prev(i) : e < 0 && t > this.config.threshold && this.innerElements.length > this.perPage && this.next(i), this.slideToCurrent(r || n);
                        }
                    },
                    {
                        key: "resizeHandler",
                        value: function() {
                            this.resolveSlidesNumber(), this.currentSlide + this.perPage > this.innerElements.length && (this.currentSlide = this.innerElements.length <= this.perPage ? 0 : this.innerElements.length - this.perPage), this.selectorWidth = this.selector.offsetWidth, this.buildSliderFrame();
                        }
                    },
                    {
                        key: "clearDrag",
                        value: function() {
                            this.drag = {
                                startX: 0,
                                endX: 0,
                                startY: 0,
                                letItGo: null,
                                preventClick: this.drag.preventClick
                            };
                        }
                    },
                    {
                        key: "touchstartHandler",
                        value: function(e) {
                            -1 !== [
                                "TEXTAREA",
                                "OPTION",
                                "INPUT",
                                "SELECT"
                            ].indexOf(e.target.nodeName) || (e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.touches[0].pageX, this.drag.startY = e.touches[0].pageY);
                        }
                    },
                    {
                        key: "touchendHandler",
                        value: function(e) {
                            e.stopPropagation(), this.pointerDown = !1, this.enableTransition(), this.drag.endX && this.updateAfterDrag(), this.clearDrag();
                        }
                    },
                    {
                        key: "touchmoveHandler",
                        value: function(e) {
                            if (e.stopPropagation(), null === this.drag.letItGo && (this.drag.letItGo = Math.abs(this.drag.startY - e.touches[0].pageY) < Math.abs(this.drag.startX - e.touches[0].pageX)), this.pointerDown && this.drag.letItGo) {
                                e.preventDefault(), this.drag.endX = e.touches[0].pageX, this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
                                var t = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide, i = t * (this.selectorWidth / this.perPage), r = this.drag.endX - this.drag.startX, n = this.config.rtl ? i + r : i - r;
                                this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.config.rtl ? 1 : -1) * n + "px, 0, 0)";
                            }
                        }
                    },
                    {
                        key: "mousedownHandler",
                        value: function(e) {
                            -1 !== [
                                "TEXTAREA",
                                "OPTION",
                                "INPUT",
                                "SELECT"
                            ].indexOf(e.target.nodeName) || (e.preventDefault(), e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.pageX);
                        }
                    },
                    {
                        key: "mouseupHandler",
                        value: function(e) {
                            e.stopPropagation(), this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.enableTransition(), this.drag.endX && this.updateAfterDrag(), this.clearDrag();
                        }
                    },
                    {
                        key: "mousemoveHandler",
                        value: function(e) {
                            if (e.preventDefault(), this.pointerDown) {
                                "A" === e.target.nodeName && (this.drag.preventClick = !0), this.drag.endX = e.pageX, this.selector.style.cursor = "-webkit-grabbing", this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
                                var t = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide, i = t * (this.selectorWidth / this.perPage), r = this.drag.endX - this.drag.startX, n = this.config.rtl ? i + r : i - r;
                                this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.config.rtl ? 1 : -1) * n + "px, 0, 0)";
                            }
                        }
                    },
                    {
                        key: "mouseleaveHandler",
                        value: function(e) {
                            this.pointerDown && (this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.drag.endX = e.pageX, this.drag.preventClick = !1, this.enableTransition(), this.updateAfterDrag(), this.clearDrag());
                        }
                    },
                    {
                        key: "clickHandler",
                        value: function(e) {
                            this.drag.preventClick && e.preventDefault(), this.drag.preventClick = !1;
                        }
                    },
                    {
                        key: "remove",
                        value: function(e, t) {
                            if (e < 0 || e >= this.innerElements.length) throw new Error("Item to remove doesn't exist 😭");
                            var i = e < this.currentSlide, r = this.currentSlide + this.perPage - 1 === e;
                            (i || r) && this.currentSlide--, this.innerElements.splice(e, 1), this.buildSliderFrame(), t && t.call(this);
                        }
                    },
                    {
                        key: "insert",
                        value: function(e, t, i) {
                            if (t < 0 || t > this.innerElements.length + 1) throw new Error("Unable to inset it at this index 😭");
                            if (-1 !== this.innerElements.indexOf(e)) throw new Error("The same item in a carousel? Really? Nope 😭");
                            var r = t <= this.currentSlide > 0 && this.innerElements.length;
                            this.currentSlide = r ? this.currentSlide + 1 : this.currentSlide, this.innerElements.splice(t, 0, e), this.buildSliderFrame(), i && i.call(this);
                        }
                    },
                    {
                        key: "prepend",
                        value: function(e, t) {
                            this.insert(e, 0), t && t.call(this);
                        }
                    },
                    {
                        key: "append",
                        value: function(e, t) {
                            this.insert(e, this.innerElements.length + 1), t && t.call(this);
                        }
                    },
                    {
                        key: "destroy",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = arguments[1];
                            if (this.detachEvents(), this.selector.style.cursor = "auto", e) {
                                for(var i = document.createDocumentFragment(), r = 0; r < this.innerElements.length; r++)i.appendChild(this.innerElements[r]);
                                this.selector.innerHTML = "", this.selector.appendChild(i), this.selector.removeAttribute("style");
                            }
                            t && t.call(this);
                        }
                    }
                ], [
                    {
                        key: "mergeSettings",
                        value: function(e) {
                            var t = {
                                selector: ".siema",
                                duration: 200,
                                easing: "ease-out",
                                perPage: 1,
                                startIndex: 0,
                                draggable: !0,
                                multipleDrag: !0,
                                threshold: 20,
                                loop: !1,
                                rtl: !1,
                                onInit: function() {},
                                onChange: function() {}
                            }, i = e;
                            for(var r in i)t[r] = i[r];
                            return t;
                        }
                    },
                    {
                        key: "webkitOrNot",
                        value: function() {
                            return "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform";
                        }
                    }
                ]), e4;
            }();
            t2.default = l1, e2.exports = t2.default;
        }
    ]);
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["8ZY19","2DotB"], "2DotB", "parcelRequire716c")

//# sourceMappingURL=index.88090f45.js.map
