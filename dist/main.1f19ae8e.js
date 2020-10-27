// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var string = "\n/*\n* \u6211\u53EB\u8611\u83C7\u5934\uFF0C\u6211\u662F\u4E00\u540D\u524D\u7AEF\u65B0\u4EBA\n* \u63A5\u4E0B\u6765\u6211\u4F1A\u753B\u4E00\u4E2A\u54C6\u5566A\u68A6\n**/\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.head {\n  border: 5px solid #000;\n  width: 500px;\n  height: 500px;\n  border-radius: 50%;\n  background-color: #019fe9;\n}\n.face {\n  position: absolute;\n  border: 3px solid black;\n  background-color: #fff;\n  width: 430px;\n  height: 430px;\n  border-radius: 50%;\n  left: 50%;\n  bottom: 0;\n  transform: translateX(-215px);\n}\n.eyes {\n  position: absolute;\n  top: 7px;\n  border: 3px solid #000;\n  width: 100px;\n  height: 125px;\n  margin-left: 50%;\n  border-radius: 100px/120px;\n  background-color: #fff;\n  z-index: 2;\n}\n.eyeball {\n  position: absolute;\n  top: 60px;\n  left: 5px;\n  width: 40px;\n  height: 45px;\n  background-color: #000;\n  border-radius: 40px/45px;\n  position: relative;\n}\n.eyeball .point {\n  position: absolute;\n  background-color: #fff;\n  width: 14px;\n  height: 14px;\n  top: 50%;\n  left: 50%;\n  margin-left: -9px;\n  margin-top: -9px;\n  border-radius: 50%;\n}\n.left {\n  transform: translate(-100px);\n}\n.nose {\n  position: absolute;\n  border-radius: 50%;\n  top: 108px;\n  border: 3px solid #000;\n  width: 50px;\n  height: 50px;\n  background-color: red;\n  margin-left: 50%;\n  transform: translate(-25px);\n  z-index: 2;\n}\n.nose .point {\n  background-color: #fff;\n  width: 14px;\n  height: 14px;\n  margin-left: 10px;\n  margin-top: 5px;\n  border-radius: 50%;\n}\n.mouth {\n    position: absolute;\n    bottom: 0px;\n    border: 3px solid black;\n    width: 350px;\n    height: 350px;\n    border-radius: 50%;\n    margin-left: 50%;\n    transform: translate(-175px);\n}\n\n\n.huxu .column{\n    position: absolute;\n    left: 50%;\n    top: 95px;\n    border: 2px solid black;\n    height: 253px;\n    width: 0;\n    background-color: black;\n    z-index: 1;\n}\n.huxu .row{\n     z-index: 1;\n    border: 2px solid black;\n    width: 140px;\n    height: 0;\n    background-color: black;\n    position: absolute;\n    \n}\n.row1{\n    transform: rotate(15deg);\n     top: 95px;\n    left: 30px;\n}\n.row2{\n    top: 130px;\n    left: 30px; \n}\n.row3{\n    transform: rotate(-15deg);\n    top: 175px;\n    left: 30px;\n}\n.row4{\n     transform: rotate(-15deg);\n  top: 95px;\n    left: 250px; \n}\n.row5{\n    top: 130px;\n    left: 250px;\n}\n.row6{\n     top: 175px;\n    left: 250px;\n    transform: rotate(15deg);\n}\n\n.fang{\n    position: absolute;\n    top: 249px;\n    left: 50%;\n    transform: translate(-200px);\n    width: 400px;\n    height: 100px;\n    overflow: hidden;\n    position: relative;\n}\n.xiaoyuan{\n    position: absolute;\n    top: -20px;\n   width: 30px;\n   height: 30px;\n    transform:rotate(-45deg);\n   background-color: #fff;\n   z-index: 1;\n}\n.yright{ \n   right: 40px;\n}\n.yleft{\n    left: 40px;\n}\n.yiling {\n    width: 280px;\n    height: 30px;\n    border: 5px solid black;\n    position: absolute;\n    bottom: -5px;\n    left: 50%;\n    border-radius: 15px;\n    background-color: #ff0000;\n    transform: translate(-140px);\n}\n.ld{\n    position: absolute;\n    border-radius: 50%;\n    bottom: -17px;\n    left: 50%;\n    transform: translate(-25px);\n    border: 3px solid black;\n    background-color: #ecc81a;\n    width: 50px;\n    height: 50px;\n}\n.lrow\n{\n    position: absolute;\n    border-radius: 5px;\n    bottom: 8px;\n    left: 50%;\n    transform: translate(-30px);\n    border: 3px solid black;\n    background-color: #ecc81a;\n    width: 60px;\n    height: 10px;\n}\n.lcolumn{\n     position: absolute;\n    border-radius: 7px;\n    bottom: -9px;\n    left: 50%;\n    transform: translate(-6px);\n    border: 3px solid black;\n    background-color: black;\n    width: 14px;\n    height: 14px;\n}\n.xyuan{\n    position: absolute;\n    bottom: -15px;\n    left: 50%;\n    transform: translate(-1px);\n    border: 1px solid black;\n    background-color: black;\n    height: 14px;\n}";
var last = document.querySelector('#last');
var style = document.querySelector("style");
var n = 0;
var time = 10;
var string2 = '';

var step = function step() {
  btn1.onclick = function () {
    time = 20;
  };

  btn2.onclick = function () {
    time = 10;
  };

  btn3.onclick = function () {
    time = 0;
  };

  setTimeout(function () {
    if (string[n] === '\n') {
      string2 += '<br>';
    } else if (string[n] === ' ') {
      string2 += '&nbsp;';
    } else {
      string2 += string[n];
    }

    last.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    last.scrollTo(0, 99999);

    if (n < string.length - 1) {
      n += 1;
      console.log(time);
      step();
    }
  }, time);
};

step();
},{}],"../../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58963" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map