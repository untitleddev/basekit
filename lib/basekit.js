import React from 'react';
import { pipe, toPairs, find, defaultTo, head, propOr, pickBy, test, pick, keys, mapObjIndexed, includes, cond, isNil, identity, is, prop, T, reduce, when, assoc, mergeRight } from 'ramda';
import { useTheme } from 'styled-components';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
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

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var GlobalStateContext = React.createContext({
  state: {},
  setState: function setState() {}
});

var GlobalStateProvider = function GlobalStateProvider(_ref) {
  var children = _ref.children;

  var _React$useState = React.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  return /*#__PURE__*/React.createElement(GlobalStateContext.Provider, {
    value: {
      state: state,
      setState: setState
    }
  }, children);
};

function useGlobalState() {
  return React.useContext(GlobalStateContext);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var cache_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
let cache = new Map();
function get(property, value) {
    return cache.get(property + value);
}
exports.get = get;
function set(property, value, className) {
    if (process.env.NODE_ENV !== 'production') {
        const valueType = typeof value;
        if (valueType !== 'boolean' &&
            valueType !== 'number' &&
            valueType !== 'string') {
            const encodedValue = JSON.stringify(value);
            throw new TypeError(`📦 ui-box: invalid cache value “${encodedValue}”. Only booleans, numbers and strings are supported.`);
        }
    }
    cache.set(property + value, className);
}
exports.set = set;
function entries() {
    return [...cache];
}
exports.entries = entries;
function hydrate(newEntries) {
    cache = new Map([...cache, ...newEntries]);
}
exports.hydrate = hydrate;
function clear() {
    cache.clear();
}
exports.clear = clear;

});

var styleSheet = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
// This file is based off glamor's StyleSheet
// https://github.com/threepointone/glamor/blob/v2.20.40/src/sheet.js
const isBrowser = typeof window !== 'undefined';
function last(arr) {
    return arr[arr.length - 1];
}
function sheetForTag(tag) {
    if (tag.sheet) {
        return tag.sheet;
    }
    // This weirdness brought to you by firefox
    for (let i = 0; i < document.styleSheets.length; i += 1) {
        if (document.styleSheets[i].ownerNode === tag) {
            return document.styleSheets[i];
        }
    }
    return;
}
function makeStyleTag() {
    const tag = document.createElement('style');
    tag.type = 'text/css';
    tag.setAttribute('data-ui-box', '');
    tag.append(document.createTextNode(''));
    (document.head || document.querySelector('head')).append(tag);
    return tag;
}
class CustomStyleSheet {
    constructor(options = {}) {
        this.tags = [];
        this.ctr = 0;
        this.injected = false;
        // The big drawback here is that the css won't be editable in devtools
        this.isSpeedy = options.speedy === undefined
            ? process.env.NODE_ENV === 'production'
            : options.speedy;
        this.maxLength = options.maxLength || 65000;
    }
    getSheet() {
        return sheetForTag(last(this.tags));
    }
    inject() {
        if (this.injected) {
            throw new Error('StyleSheet has already been injected.');
        }
        if (isBrowser) {
            this.tags[0] = makeStyleTag();
        }
        else {
            // Server side 'polyfill'. just enough behavior to be useful.
            this.sheet = {
                cssRules: [],
                insertRule: (rule) => {
                    // Enough 'spec compliance' to be able to extract the rules later
                    // in other words, just the cssText field
                    this.sheet.cssRules.push({ cssText: rule });
                }
            };
        }
        this.injected = true;
    }
    speedy(bool) {
        if (this.ctr !== 0) {
            throw new Error(`StyleSheet cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})`);
        }
        this.isSpeedy = Boolean(bool);
    }
    _insert(sheet, rule) {
        // This weirdness for perf
        sheet.insertRule(rule, sheet.cssRules.length);
    }
    insert(rule) {
        if (isBrowser) {
            const sheet = this.getSheet();
            // This is the ultrafast version, works across browsers
            if (this.isSpeedy && sheet && sheet.insertRule) {
                this._insert(sheet, rule);
            }
            else {
                last(this.tags).append(document.createTextNode(rule));
            }
        }
        else if (this.sheet) {
            // Server side is pretty simple
            this.sheet.insertRule(rule, this.sheet.cssRules.length);
        }
        this.ctr += 1;
        if (isBrowser && this.ctr % this.maxLength === 0) {
            this.tags.push(makeStyleTag());
        }
        return this.ctr - 1;
    }
    flush() {
        if (isBrowser) {
            this.tags.forEach(tag => tag.parentNode.removeChild(tag));
            this.tags = [];
            this.sheet = null;
            this.ctr = 0;
        }
        else if (this.sheet) {
            // Simpler on server
            this.sheet.cssRules = [];
        }
        this.injected = false;
    }
    rules() {
        if (!isBrowser) {
            return (this.sheet ? this.sheet.cssRules : []);
        }
        const arr = [];
        this.tags.forEach(tag => {
            const sheet = sheetForTag(tag);
            if (sheet) {
                const rules = Array.from(sheet.cssRules);
                arr.splice(arr.length, 0, ...[...rules]);
            }
        });
        return arr;
    }
}
exports.default = CustomStyleSheet;

});

var styles = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const style_sheet_1 = __importDefault(styleSheet);
const styleSheet$1 = new style_sheet_1.default({});
styleSheet$1.inject();
function add(styles) {
    styleSheet$1.insert(styles);
}
exports.add = add;
function getAll() {
    // Convert rules array to a string
    return styleSheet$1
        .rules()
        .reduce((combinedRules, rule) => combinedRules + rule.cssText, '');
}
exports.getAll = getAll;
function clear() {
    styleSheet$1.flush();
    styleSheet$1.inject();
}
exports.clear = clear;

});

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var newStyle = {};
    var requiredPrefixes = prefixProperties[property];
    var capitalizedProperty = capitalizeString(property);
    var keys = Object.keys(style);
    for (var i = 0; i < keys.length; i++) {
      var styleProperty = keys[i];
      if (styleProperty === property) {
        for (var j = 0; j < requiredPrefixes.length; j++) {
          newStyle[requiredPrefixes[j] + capitalizedProperty] = style[property];
        }
      }
      newStyle[styleProperty] = style[styleProperty];
    }
    return newStyle;
  }
  return style;
}

function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}

function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}

function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;

  return function prefix(style) {
    for (var property in style) {
      var value = style[property];

      // handle nested objects
      if (isObject(value)) {
        style[property] = prefix(value);
        // handle array values
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = prefixValue(plugins, property, value[i], style, prefixMap);
          addNewValuesOnly(combinedValue, processedValue || value[i]);
        }

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = prefixValue(plugins, property, value, style, prefixMap);

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (_processedValue) {
          style[property] = _processedValue;
        }

        style = prefixProperty(prefixMap, property, style);
      }
    }

    return style;
  };
}

var w$1 = ["Webkit"];
var m$1 = ["Moz"];
var ms = ["ms"];
var wm = ["Webkit", "Moz"];
var wms = ["Webkit", "ms"];
var wmms = ["Webkit", "Moz", "ms"];

var data = {
  plugins: [],
  prefixMap: { "appearance": wm, "textEmphasisPosition": w$1, "textEmphasis": w$1, "textEmphasisStyle": w$1, "textEmphasisColor": w$1, "boxDecorationBreak": w$1, "maskImage": w$1, "maskMode": w$1, "maskRepeat": w$1, "maskPosition": w$1, "maskClip": w$1, "maskOrigin": w$1, "maskSize": w$1, "maskComposite": w$1, "mask": w$1, "maskBorderSource": w$1, "maskBorderMode": w$1, "maskBorderSlice": w$1, "maskBorderWidth": w$1, "maskBorderOutset": w$1, "maskBorderRepeat": w$1, "maskBorder": w$1, "maskType": w$1, "textDecorationStyle": w$1, "textDecorationSkip": w$1, "textDecorationLine": w$1, "textDecorationColor": w$1, "userSelect": wmms, "backdropFilter": w$1, "fontKerning": w$1, "scrollSnapType": wms, "scrollSnapPointsX": wms, "scrollSnapPointsY": wms, "scrollSnapDestination": wms, "scrollSnapCoordinate": wms, "clipPath": w$1, "shapeImageThreshold": w$1, "shapeImageMargin": w$1, "shapeImageOutside": w$1, "filter": w$1, "hyphens": wms, "flowInto": wms, "flowFrom": wms, "breakBefore": wms, "breakAfter": wms, "breakInside": wms, "regionFragment": wms, "writingMode": wms, "textOrientation": w$1, "tabSize": m$1, "fontFeatureSettings": w$1, "columnCount": w$1, "columnFill": w$1, "columnGap": w$1, "columnRule": w$1, "columnRuleColor": w$1, "columnRuleStyle": w$1, "columnRuleWidth": w$1, "columns": w$1, "columnSpan": w$1, "columnWidth": w$1, "wrapFlow": ms, "wrapThrough": ms, "wrapMargin": ms, "textSizeAdjust": wms }
};

// https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip#Browser_compatibility
function backgroundClip(property, value) {
  if (typeof value === 'string' && value === 'text') {
    return ['-webkit-text', 'text'];
  }
}

var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}

var isPrefixedValue_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];
});

var isPrefixedValue = /*@__PURE__*/unwrapExports(isPrefixedValue_1);

// http://caniuse.com/#search=cross-fade
var prefixes$1 = ['-webkit-', ''];

function crossFade(property, value) {
  if (typeof value === 'string' && !isPrefixedValue(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes$1.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}

// http://caniuse.com/#feat=css-filter-function
var prefixes$2 = ['-webkit-', ''];

function filter(property, value) {
  if (typeof value === 'string' && !isPrefixedValue(value) && value.indexOf('filter(') > -1) {
    return prefixes$2.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}

var values$1 = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values$1.hasOwnProperty(value)) {
    return values$1[value];
  }
}

var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines',
  flexGrow: 'WebkitBoxFlex'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}

var prefixes$3 = ['-webkit-', '-moz-', ''];
var values$2 = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;

function gradient(property, value) {
  if (typeof value === 'string' && !isPrefixedValue(value) && values$2.test(value)) {
    return prefixes$3.map(function (prefix) {
      return value.replace(values$2, function (grad) {
        return prefix + grad;
      });
    });
  }
}

var _slicedToArray$1 = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function isSimplePositionValue(value) {
  return typeof value === 'number' && !isNaN(value);
}

function isComplexSpanValue(value) {
  return typeof value === 'string' && value.includes('/');
}

var alignmentValues = ['center', 'end', 'start', 'stretch'];

var displayValues = {
  'inline-grid': ['-ms-inline-grid', 'inline-grid'],
  grid: ['-ms-grid', 'grid']
};

var propertyConverters = {
  alignSelf: function alignSelf(value, style) {
    if (alignmentValues.indexOf(value) > -1) {
      style.msGridRowAlign = value;
    }
  },

  gridColumn: function gridColumn(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridColumn = value;
    } else if (isComplexSpanValue(value)) {
      var _value$split = value.split('/'),
          _value$split2 = _slicedToArray$1(_value$split, 2),
          start = _value$split2[0],
          end = _value$split2[1];

      propertyConverters.gridColumnStart(+start, style);

      var _end$split = end.split(/ ?span /),
          _end$split2 = _slicedToArray$1(_end$split, 2),
          maybeSpan = _end$split2[0],
          maybeNumber = _end$split2[1];

      if (maybeSpan === '') {
        propertyConverters.gridColumnEnd(+start + +maybeNumber, style);
      } else {
        propertyConverters.gridColumnEnd(+end, style);
      }
    } else {
      propertyConverters.gridColumnStart(value, style);
    }
  },

  gridColumnEnd: function gridColumnEnd(value, style) {
    var msGridColumn = style.msGridColumn;

    if (isSimplePositionValue(value) && isSimplePositionValue(msGridColumn)) {
      style.msGridColumnSpan = value - msGridColumn;
    }
  },

  gridColumnStart: function gridColumnStart(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridColumn = value;
    }
  },

  gridRow: function gridRow(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridRow = value;
    } else if (isComplexSpanValue(value)) {
      var _value$split3 = value.split('/'),
          _value$split4 = _slicedToArray$1(_value$split3, 2),
          start = _value$split4[0],
          end = _value$split4[1];

      propertyConverters.gridRowStart(+start, style);

      var _end$split3 = end.split(/ ?span /),
          _end$split4 = _slicedToArray$1(_end$split3, 2),
          maybeSpan = _end$split4[0],
          maybeNumber = _end$split4[1];

      if (maybeSpan === '') {
        propertyConverters.gridRowEnd(+start + +maybeNumber, style);
      } else {
        propertyConverters.gridRowEnd(+end, style);
      }
    } else {
      propertyConverters.gridRowStart(value, style);
    }
  },

  gridRowEnd: function gridRowEnd(value, style) {
    var msGridRow = style.msGridRow;

    if (isSimplePositionValue(value) && isSimplePositionValue(msGridRow)) {
      style.msGridRowSpan = value - msGridRow;
    }
  },

  gridRowStart: function gridRowStart(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridRow = value;
    }
  },

  gridTemplateColumns: function gridTemplateColumns(value, style) {
    style.msGridColumns = value;
  },

  gridTemplateRows: function gridTemplateRows(value, style) {
    style.msGridRows = value;
  },

  justifySelf: function justifySelf(value, style) {
    if (alignmentValues.indexOf(value) > -1) {
      style.msGridColumnAlign = value;
    }
  }
};

function grid(property, value, style) {
  if (property === 'display' && value in displayValues) {
    return displayValues[value];
  }

  if (property in propertyConverters) {
    var propertyConverter = propertyConverters[property];
    propertyConverter(value, style);
  }
}

// http://caniuse.com/#feat=css-image-set
var prefixes$4 = ['-webkit-', ''];

function imageSet(property, value) {
  if (typeof value === 'string' && !isPrefixedValue(value) && value.indexOf('image-set(') > -1) {
    return prefixes$4.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}

var alternativeProps$1 = {
  marginBlockStart: ['WebkitMarginBefore'],
  marginBlockEnd: ['WebkitMarginAfter'],
  marginInlineStart: ['WebkitMarginStart', 'MozMarginStart'],
  marginInlineEnd: ['WebkitMarginEnd', 'MozMarginEnd'],
  paddingBlockStart: ['WebkitPaddingBefore'],
  paddingBlockEnd: ['WebkitPaddingAfter'],
  paddingInlineStart: ['WebkitPaddingStart', 'MozPaddingStart'],
  paddingInlineEnd: ['WebkitPaddingEnd', 'MozPaddingEnd'],
  borderBlockStart: ['WebkitBorderBefore'],
  borderBlockStartColor: ['WebkitBorderBeforeColor'],
  borderBlockStartStyle: ['WebkitBorderBeforeStyle'],
  borderBlockStartWidth: ['WebkitBorderBeforeWidth'],
  borderBlockEnd: ['WebkitBorderAfter'],
  borderBlockEndColor: ['WebkitBorderAfterColor'],
  borderBlockEndStyle: ['WebkitBorderAfterStyle'],
  borderBlockEndWidth: ['WebkitBorderAfterWidth'],
  borderInlineStart: ['WebkitBorderStart', 'MozBorderStart'],
  borderInlineStartColor: ['WebkitBorderStartColor', 'MozBorderStartColor'],
  borderInlineStartStyle: ['WebkitBorderStartStyle', 'MozBorderStartStyle'],
  borderInlineStartWidth: ['WebkitBorderStartWidth', 'MozBorderStartWidth'],
  borderInlineEnd: ['WebkitBorderEnd', 'MozBorderEnd'],
  borderInlineEndColor: ['WebkitBorderEndColor', 'MozBorderEndColor'],
  borderInlineEndStyle: ['WebkitBorderEndStyle', 'MozBorderEndStyle'],
  borderInlineEndWidth: ['WebkitBorderEndWidth', 'MozBorderEndWidth']
};

function logical(property, value, style) {
  if (Object.prototype.hasOwnProperty.call(alternativeProps$1, property)) {
    var alternativePropList = alternativeProps$1[property];
    for (var i = 0, len = alternativePropList.length; i < len; ++i) {
      style[alternativePropList[i]] = value;
    }
  }
}

function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}

var prefixes$5 = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values$3 = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values$3.hasOwnProperty(value)) {
    return prefixes$5.map(function (prefix) {
      return prefix + value;
    });
  }
}

/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower);
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

var hyphenateProperty_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;



var _hyphenateStyleName2 = _interopRequireDefault(hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];
});

var hyphenateProperty = /*@__PURE__*/unwrapExports(hyphenateProperty_1);

var properties$1 = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};

var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue$1(value, propertyPrefixMap) {
  if (isPrefixedValue(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = hyphenateProperty(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties$1.hasOwnProperty(property)) {
    var outputValue = prefixValue$1(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + capitalizeString(property)] = webkitOutput;
    style['Moz' + capitalizeString(property)] = mozOutput;
    return outputValue;
  }
}

var plugins = [backgroundClip, crossFade, cursor, filter, flexboxOld, gradient, grid, imageSet, logical, position, sizing, transition, flex];

var prefix = createPrefixer({
  prefixMap: data.prefixMap,
  plugins: plugins
});

var es = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createPrefixer: createPrefixer,
  prefix: prefix
});

var decamelize_1 = createCommonjsModule(function (module, exports) {
// Fork of https://github.com/sindresorhus/decamelize because it contains ES6 code
// And css properties don't contain unicode
Object.defineProperty(exports, "__esModule", { value: true });
const separator = '-';
const regex1 = /([a-z\d])([A-Z])/g;
const regex2 = /([a-z]+)([A-Z][a-z\d]+)/g;
function decamelize(text) {
    return text
        .replace(regex1, `$1${separator}$2`)
        .replace(regex2, `$1${separator}$2`)
        .toLowerCase();
}
exports.default = decamelize;

});

var prefixer_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

const decamelize_1$1 = __importDefault(decamelize_1);
const prefixRegex = /^(Webkit|ms|Moz|O)/;
/**
 * Adds vendor prefixes to properties and values.
 */
function prefixer(property, value) {
    const rules = es.prefix({ [property]: value });
    const rulesArray = [];
    const propertyNames = Object.keys(rules);
    // Convert rules object to an array
    for (let i = 0; i < propertyNames.length; i++) {
        const propertyName = propertyNames[i];
        // Add a dash in front of the prefixes
        const prefixedProp = propertyName.match(prefixRegex)
            ? `-${propertyName}`
            : propertyName;
        const prop = decamelize_1$1.default(prefixedProp);
        const values = rules[propertyName];
        // Handle prefixed values
        if (Array.isArray(values)) {
            for (let j = 0; j < values.length; j++) {
                rulesArray.push({ property: prop, value: values[j] });
            }
        }
        else {
            rulesArray.push({ property: prop, value: values });
        }
    }
    return rulesArray;
}
exports.default = prefixer;

});

var valueToString_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts number values to a string with a unit.
 */
function valueToString(value, unit = 'px') {
    return typeof value === 'number' ? `${value}${unit}` : value;
}
exports.default = valueToString;

});

/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash2_32_gc(str) {
  var l = str.length,
      h = l ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}

var regex = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.spacesOutsideParentheses = / (?=([^()]*\([^()]*\))*[^()]*$)/g;
exports.unsafeClassNameCharacters = /[^_a-zA-Z0-9-]/g;

});

var getSafeValue_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

const dashRegex = /[ .]/g;
const percentRegex = /%/g;
/**
 * Makes the value safe for use in a class name.
 */
function getSafeValue(value) {
    return value
        .replace(dashRegex, '-')
        .replace(percentRegex, 'prcnt')
        .replace(regex.unsafeClassNameCharacters, '');
}
exports.default = getSafeValue;

});

var getClassName_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hash_1 = __importDefault(murmurhash2_32_gc);
const get_safe_value_1 = __importDefault(getSafeValue_1);
let PREFIX = 'ub-';
function getClassNamePrefix() {
    return PREFIX;
}
exports.getClassNamePrefix = getClassNamePrefix;
function setClassNamePrefix(prefix) {
    PREFIX = prefix;
}
exports.setClassNamePrefix = setClassNamePrefix;
/**
 * Generates the class name.
 */
function getClassName(propertyInfo, value) {
    const { className, safeValue = false, // Value never contains unsafe characters. e.g: 10, hidden, border-box
    complexValue = false // Complex values that are best hashed. e.g: background-image
     } = propertyInfo;
    let valueKey;
    // Shortcut the global keywords
    if (value === 'inherit' || value === 'initial' || value === 'unset') {
        valueKey = value;
        /* Always hash values that contain a calc() because the operators get
        stripped which can result in class name collisions
        */
    }
    else if (complexValue || value.includes('calc(')) {
        valueKey = hash_1.default(value);
    }
    else if (safeValue) {
        valueKey = value;
    }
    else {
        valueKey = get_safe_value_1.default(value);
    }
    return `${PREFIX}${className}_${valueKey}`;
}
exports.default = getClassName;

});

var getCss_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prefixer_1$1 = __importDefault(prefixer_1);
const value_to_string_1 = __importDefault(valueToString_1);
const get_class_name_1 = __importDefault(getClassName_1);
/**
 * Generates the class name and styles.
 */
function getCss(propertyInfo, value) {
    let rules;
    // Protect against unexpected values
    const valueType = typeof value;
    if (valueType !== 'string' && valueType !== 'number') {
        if (process.env.NODE_ENV !== 'production') {
            const name = propertyInfo.jsName;
            const encodedValue = JSON.stringify(value);
            console.error(`📦 ui-box: property “${name}” was passed invalid value “${encodedValue}”. Only numbers and strings are supported.`);
        }
        return null;
    }
    const valueString = value_to_string_1.default(value, propertyInfo.defaultUnit);
    const className = get_class_name_1.default(propertyInfo, valueString);
    // Avoid running the prefixer when possible because it's slow
    if (propertyInfo.isPrefixed) {
        rules = prefixer_1$1.default(propertyInfo.jsName || '', valueString);
    }
    else {
        rules = [{ property: propertyInfo.cssName || '', value: valueString }];
    }
    let styles;
    if (process.env.NODE_ENV === 'production') {
        const rulesString = rules
            .map(rule => `${rule.property}:${rule.value}`)
            .join(';');
        styles = `.${className}{${rulesString}}`;
    }
    else {
        const rulesString = rules
            .map(rule => `  ${rule.property}: ${rule.value};`)
            .join('\n');
        styles = `
.${className} {
${rulesString}
}`;
    }
    return { className, styles };
}
exports.default = getCss;

});

var background_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(propTypes);
const get_css_1 = __importDefault(getCss_1);
exports.propTypes = {
    background: prop_types_1.default.string,
    backgroundBlendMode: prop_types_1.default.string,
    backgroundClip: prop_types_1.default.string,
    backgroundColor: prop_types_1.default.string,
    backgroundImage: prop_types_1.default.string,
    backgroundOrigin: prop_types_1.default.string,
    backgroundPosition: prop_types_1.default.string,
    backgroundRepeat: prop_types_1.default.string,
    backgroundSize: prop_types_1.default.string
};
exports.propAliases = {};
exports.propValidators = {};
const background = {
    className: 'bg',
    cssName: 'background',
    jsName: 'background',
    isPrefixed: true,
    complexValue: true
};
const backgroundColor = {
    className: 'bg-clr',
    cssName: 'background-color',
    jsName: 'backgroundColor'
};
const backgroundImage = {
    className: 'bg-img',
    cssName: 'background-image',
    jsName: 'backgroundImage',
    isPrefixed: true,
    complexValue: true
};
const backgroundPosition = {
    className: 'bg-pos',
    cssName: 'background-position',
    jsName: 'backgroundPosition'
};
const backgroundSize = {
    className: 'bg-siz',
    cssName: 'background-size',
    jsName: 'backgroundSize'
};
const backgroundOrigin = {
    className: 'bg-orgn',
    cssName: 'background-origin',
    jsName: 'backgroundOrigin'
};
const backgroundRepeat = {
    className: 'bg-rpt',
    cssName: 'background-repeat',
    jsName: 'backgroundRepeat'
};
const backgroundClip = {
    className: 'bg-clp',
    cssName: 'background-clip',
    jsName: 'backgroundClip'
};
const backgroundBlendMode = {
    className: 'bg-blnd-md',
    cssName: 'background-blend-mode',
    jsName: 'backgroundBlendMode'
};
exports.propEnhancers = {
    background: (value) => get_css_1.default(background, value),
    backgroundBlendMode: (value) => get_css_1.default(backgroundBlendMode, value),
    backgroundClip: (value) => get_css_1.default(backgroundClip, value),
    backgroundColor: (value) => get_css_1.default(backgroundColor, value),
    backgroundImage: (value) => get_css_1.default(backgroundImage, value),
    backgroundOrigin: (value) => get_css_1.default(backgroundOrigin, value),
    backgroundPosition: (value) => get_css_1.default(backgroundPosition, value),
    backgroundRepeat: (value) => get_css_1.default(backgroundRepeat, value),
    backgroundSize: (value) => get_css_1.default(backgroundSize, value)
};

});

var borderRadius = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(propTypes);
const get_css_1 = __importDefault(getCss_1);

exports.propTypes = {
    borderBottomLeftRadius: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.number
    ]),
    borderBottomRightRadius: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.number
    ]),
    borderRadius: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    borderTopLeftRadius: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.number
    ]),
    borderTopRightRadius: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.number
    ])
};
exports.propAliases = {
    borderRadius: [
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
        'borderTopLeftRadius',
        'borderTopRightRadius'
    ]
};
exports.propValidators = {};
if (process.env.NODE_ENV !== 'production') {
    exports.propValidators.borderRadius = value => {
        if (regex.spacesOutsideParentheses.test(value)) {
            return `multiple values (“${value}”) aren՚t supported with “borderRadius”. Use “borderBottomLeftRadius”, “borderBottomRightRadius” “borderTopLeftRadius” and “borderTopRightRadius” instead.`;
        }
        return;
    };
}
const borderTopLeftRadius = {
    className: 'btlr',
    cssName: 'border-top-left-radius',
    jsName: 'borderTopLeftRadius'
};
const borderTopRightRadius = {
    className: 'btrr',
    cssName: 'border-top-right-radius',
    jsName: 'borderTopRightRadius'
};
const borderBottomLeftRadius = {
    className: 'bblr',
    cssName: 'border-bottom-left-radius',
    jsName: 'borderBottomLeftRadius'
};
const borderBottomRightRadius = {
    className: 'bbrr',
    cssName: 'border-bottom-right-radius',
    jsName: 'borderBottomRightRadius'
};
exports.propEnhancers = {
    borderBottomLeftRadius: (value) => get_css_1.default(borderBottomLeftRadius, value),
    borderBottomRightRadius: (value) => get_css_1.default(borderBottomRightRadius, value),
    borderTopLeftRadius: (value) => get_css_1.default(borderTopLeftRadius, value),
    borderTopRightRadius: (value) => get_css_1.default(borderTopRightRadius, value)
};

});

var borders = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(propTypes);
const get_css_1 = __importDefault(getCss_1);

exports.propTypes = {
    border: prop_types_1.default.string,
    borderBottom: prop_types_1.default.string,
    borderBottomColor: prop_types_1.default.string,
    borderBottomStyle: prop_types_1.default.string,
    borderBottomWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    borderColor: prop_types_1.default.string,
    borderLeft: prop_types_1.default.string,
    borderLeftColor: prop_types_1.default.string,
    borderLeftStyle: prop_types_1.default.string,
    borderLeftWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    borderRight: prop_types_1.default.string,
    borderRightColor: prop_types_1.default.string,
    borderRightStyle: prop_types_1.default.string,
    borderRightWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    borderStyle: prop_types_1.default.string,
    borderTop: prop_types_1.default.string,
    borderTopColor: prop_types_1.default.string,
    borderTopStyle: prop_types_1.default.string,
    borderTopWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    borderWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number])
};
exports.propAliases = {
    border: ['borderBottom', 'borderLeft', 'borderRight', 'borderTop'],
    borderColor: [
        'borderBottomColor',
        'borderLeftColor',
        'borderRightColor',
        'borderTopColor'
    ],
    borderStyle: [
        'borderBottomStyle',
        'borderLeftStyle',
        'borderRightStyle',
        'borderTopStyle'
    ],
    borderWidth: [
        'borderBottomWidth',
        'borderLeftWidth',
        'borderRightWidth',
        'borderTopWidth'
    ]
};
exports.propValidators = {};
if (process.env.NODE_ENV !== 'production') {
    exports.propValidators.borderColor = value => {
        if (regex.spacesOutsideParentheses.test(value)) {
            return `multiple values (“${value}”) aren՚t supported with “borderColor”. Use “borderBottomColor”, “borderLeftColor” “borderRightColor” and “borderTopColor” instead.`;
        }
        return;
    };
    exports.propValidators.borderStyle = value => {
        if (regex.spacesOutsideParentheses.test(value)) {
            return `multiple values (“${value}”) aren՚t supported with “borderStyle”. Use “borderBottomStyle”, “borderLeftStyle” “borderRightStyle” and “borderTopStyle” instead.`;
        }
        return;
    };
    exports.propValidators.borderWidth = value => {
        if (regex.spacesOutsideParentheses.test(value)) {
            return `multiple values (“${value}”) aren՚t supported with “borderWidth”. Use “borderBottomWidth”, “borderLeftWidth” “borderRightWidth” and “borderTopWidth” instead.`;
        }
        return;
    };
}
const borderLeft = {
    className: 'b-lft',
    cssName: 'border-left',
    jsName: 'borderLeft'
};
const borderLeftColor = {
    className: 'b-lft-clr',
    cssName: 'border-left-color',
    jsName: 'borderLeftColor'
};
const borderLeftStyle = {
    className: 'b-lft-stl',
    cssName: 'border-left-style',
    jsName: 'borderLeftStyle',
    safeValue: true
};
const borderLeftWidth = {
    className: 'b-lft-wdt',
    cssName: 'border-left-width',
    jsName: 'borderLeftWidth'
};
const borderRight = {
    className: 'b-rgt',
    cssName: 'border-right',
    jsName: 'borderRight'
};
const borderRightColor = {
    className: 'b-rgt-clr',
    cssName: 'border-right-color',
    jsName: 'borderRightColor'
};
const borderRightStyle = {
    className: 'b-rgt-stl',
    cssName: 'border-right-style',
    jsName: 'borderRightStyle',
    safeValue: true
};
const borderRightWidth = {
    className: 'b-rgt-wdt',
    cssName: 'border-right-width',
    jsName: 'borderRightWidth'
};
const borderTop = {
    className: 'b-top',
    cssName: 'border-top',
    jsName: 'borderTop'
};
const borderTopColor = {
    className: 'b-top-clr',
    cssName: 'border-top-color',
    jsName: 'borderTopColor'
};
const borderTopStyle = {
    className: 'b-top-stl',
    cssName: 'border-top-style',
    jsName: 'borderTopStyle',
    safeValue: true
};
const borderTopWidth = {
    className: 'b-top-wdt',
    cssName: 'border-top-width',
    jsName: 'borderTopWidth'
};
const borderBottom = {
    className: 'b-btm',
    cssName: 'border-bottom',
    jsName: 'borderBottom'
};
const borderBottomColor = {
    className: 'b-btm-clr',
    cssName: 'border-bottom-color',
    jsName: 'borderBottomColor'
};
const borderBottomStyle = {
    className: 'b-btm-stl',
    cssName: 'border-bottom-style',
    jsName: 'borderBottomStyle',
    safeValue: true
};
const borderBottomWidth = {
    className: 'b-btm-wdt',
    cssName: 'border-bottom-width',
    jsName: 'borderBottomWidth'
};
exports.propEnhancers = {
    borderBottom: (value) => get_css_1.default(borderBottom, value),
    borderBottomColor: (value) => get_css_1.default(borderBottomColor, value),
    borderBottomStyle: (value) => get_css_1.default(borderBottomStyle, value),
    borderBottomWidth: (value) => get_css_1.default(borderBottomWidth, value),
    borderLeft: (value) => get_css_1.default(borderLeft, value),
    borderLeftColor: (value) => get_css_1.default(borderLeftColor, value),
    borderLeftStyle: (value) => get_css_1.default(borderLeftStyle, value),
    borderLeftWidth: (value) => get_css_1.default(borderLeftWidth, value),
    borderRight: (value) => get_css_1.default(borderRight, value),
    borderRightColor: (value) => get_css_1.default(borderRightColor, value),
    borderRightStyle: (value) => get_css_1.default(borderRightStyle, value),
    borderRightWidth: (value) => get_css_1.default(borderRightWidth, value),
    borderTop: (value) => get_css_1.default(borderTop, value),
    borderTopColor: (value) => get_css_1.default(borderTopColor, value),
    borderTopStyle: (value) => get_css_1.default(borderTopStyle, value),
    borderTopWidth: (value) => get_css_1.default(borderTopWidth, value)
};

});

var boxShadow_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(propTypes);
const get_css_1 = __importDefault(getCss_1);
exports.propTypes = {
    boxShadow: prop_types_1.default.string
};
exports.propAliases = {};
exports.propValidators = {};
const boxShadow = {
    className: 'bs',
    cssName: 'box-shadow',
    jsName: 'boxShadow',
    complexValue: true
};
exports.propEnhancers = {
    boxShadow: (value) => get_css_1.default(boxShadow, value)
};

});

var dimensions = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(propTypes);
const get_css_1 = __importDefault(getCss_1);
exports.propTypes = {
    height: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    maxHeight: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    maxWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    minHeight: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    minWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    width: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number])
};
exports.propAliases = {};
exports.propValidators = {};
const width = {
    className: 'w',
    cssName: 'width',
    jsName: 'width'
};
const height = {
    className: 'h',
    cssName: 'height',
    jsName: 'height'
};
const minWidth = {
    className: 'min-w',
    cssName: 'min-width',
    jsName: 'minWidth'
};
const minHeight = {
    className: 'min-h',
    cssName: 'min-height',
    jsName: 'minHeight'
};
const maxWidth = {
    className: 'max-w',
    cssName: 'max-width',
    jsName: 'maxWidth'
};
const maxHeight = {
    className: 'max-h',
    cssName: 'max-height',
    jsName: 'maxHeight'
};
exports.propEnhancers = {
    height: (value) => get_css_1.default(height, value),
    maxHeight: (value) => get_css_1.default(maxHeight, value),
    maxWidth: (value) => get_css_1.default(maxWidth, value),
    minHeight: (value) => get_css_1.default(minHeight, value),
    minWidth: (value) => get_css_1.default(minWidth, value),
    width: (value) => get_css_1.default(width, value)
};

});

var flex_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(propTypes);
const get_css_1 = __importDefault(getCss_1);
exports.propTypes = {
    alignContent: prop_types_1.default.string,
    alignItems: prop_types_1.default.string,
    alignSelf: prop_types_1.default.string,
    flex: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    flexBasis: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    flexDirection: prop_types_1.default.string,
    flexFlow: prop_types_1.default.string,
    flexGrow: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    flexShrink: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    flexWrap: prop_types_1.default.string,
    justifyContent: prop_types_1.default.string,
    justifyItems: prop_types_1.default.string,
    justifySelf: prop_types_1.default.string,
    order: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    placeContent: prop_types_1.default.string,
    placeItems: prop_types_1.default.string,
    placeSelf: prop_types_1.default.string
};
exports.propAliases = {};
exports.propValidators = {};
const flex = {
    className: 'flx',
    cssName: 'flex',
    jsName: 'flex',
    isPrefixed: true,
    defaultUnit: ''
};
const alignItems = {
    className: 'algn-itms',
    cssName: 'align-items',
    jsName: 'alignItems',
    isPrefixed: true
};
const alignSelf = {
    className: 'algn-slf',
    cssName: 'align-self',
    jsName: 'alignSelf',
    isPrefixed: true
};
const alignContent = {
    className: 'algn-cnt',
    cssName: 'align-content',
    jsName: 'alignContent',
    isPrefixed: true
};
const justifyContent = {
    className: 'just-cnt',
    cssName: 'justify-content',
    jsName: 'justifyContent',
    isPrefixed: true
};
const justifyItems = {
    className: 'just-items',
    cssName: 'justify-items',
    jsName: 'justifyItems',
    isPrefixed: true
};
const justifySelf = {
    className: 'just-self',
    cssName: 'justify-self',
    jsName: 'justifySelf',
    isPrefixed: true
};
const flexDirection = {
    className: 'flx-drct',
    cssName: 'flex-direction',
    jsName: 'flexDirection',
    isPrefixed: true,
    safeValue: true
};
const flexWrap = {
    className: 'flx-wrap',
    cssName: 'flex-wrap',
    jsName: 'flexWrap',
    isPrefixed: true,
    safeValue: true
};
const flexGrow = {
    className: 'flx-grow',
    cssName: 'flex-grow',
    jsName: 'flexGrow',
    isPrefixed: true,
    defaultUnit: ''
};
const flexShrink = {
    className: 'flx-srnk',
    cssName: 'flex-shrink',
    jsName: 'flexShrink',
    isPrefixed: true,
    defaultUnit: ''
};
const flexBasis = {
    className: 'flx-basis',
    cssName: 'flex-basis',
    jsName: 'flexBasis',
    isPrefixed: true
};
const order = {
    className: 'order',
    cssName: 'order',
    jsName: 'order',
    isPrefixed: true,
    defaultUnit: '',
    safeValue: true
};
const flexFlow = {
    className: 'flx-flow',
    cssName: 'flex-flow',
    jsName: 'flexFlow',
    isPrefixed: true,
    defaultUnit: ''
};
const placeContent = {
    className: 'plc-cnt',
    cssName: 'place-content',
    jsName: 'placeContent'
};
const placeItems = {
    className: 'plc-items',
    cssName: 'place-items',
    jsName: 'placeItems'
};
const placeSelf = {
    className: 'plc-self',
    cssName: 'place-self',
    jsName: 'placeSelf'
};
exports.propEnhancers = {
    alignContent: (value) => get_css_1.default(alignContent, value),
    alignItems: (value) => get_css_1.default(alignItems, value),
    alignSelf: (value) => get_css_1.default(alignSelf, value),
    flex: (value) => get_css_1.default(flex, value),
    flexBasis: (value) => get_css_1.default(flexBasis, value),
    flexDirection: (value) => get_css_1.default(flexDirection, value),
    flexFlow: (value) => get_css_1.default(flexFlow, value),
    flexGrow: (value) => get_css_1.default(flexGrow, value),
    flexShrink: (value) => get_css_1.default(flexShrink, value),
    flexWrap: (value) => get_css_1.default(flexWrap, value),
    justifyContent: (value) => get_css_1.default(justifyContent, value),
    justifyItems: (value) => get_css_1.default(justifyItems, value),
    justifySelf: (value) => get_css_1.default(justifySelf, value),
    order: (value) => get_css_1.default(order, value),
    placeContent: (value) => get_css_1.default(placeContent, value),
    placeItems: (value) => get_css_1.default(placeItems, value),
    placeSelf: (value) => get_css_1.default(placeSelf, value)
};

});

var grid_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(propTypes);
const get_css_1 = __importDefault(getCss_1);
exports.propTypes = {
    columnGap: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gap: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    grid: prop_types_1.default.string,
    gridArea: prop_types_1.default.string,
    gridAutoColumns: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gridAutoFlow: prop_types_1.default.string,
    gridAutoRows: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gridColumn: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gridColumnEnd: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gridColumnGap: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gridColumnStart: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gridGap: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gridRow: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gridRowEnd: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gridRowGap: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gridRowStart: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gridTemplate: prop_types_1.default.string,
    gridTemplateAreas: prop_types_1.default.string,
    gridTemplateColumns: prop_types_1.default.string,
    gridTemplateRows: prop_types_1.default.string,
    rowGap: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number])
};
exports.propAliases = {};
exports.propValidators = {};
const columnGap = {
    className: 'col-gap',
    cssName: 'column-gap',
    jsName: 'columnGap'
};
const gap = {
    className: 'gap',
    cssName: 'gap',
    jsName: 'gap'
};
const grid = {
    className: 'grd',
    cssName: 'grid',
    jsName: 'grid',
    complexValue: true
};
const gridArea = {
    className: 'grd-ara',
    cssName: 'grid-area',
    jsName: 'gridArea',
    complexValue: true
};
const gridAutoColumns = {
    className: 'grd-ato-col',
    cssName: 'grid-auto-columns',
    jsName: 'gridAutoColumns',
    complexValue: true
};
const gridAutoFlow = {
    className: 'grd-ato-flw',
    cssName: 'grid-auto-flow',
    jsName: 'gridAutoFlow'
};
const gridAutoRows = {
    className: 'grd-ato-row',
    cssName: 'grid-auto-rows',
    jsName: 'gridAutoRows',
    complexValue: true
};
const gridColumn = {
    className: 'grd-col',
    cssName: 'grid-column',
    jsName: 'gridColumn',
    defaultUnit: '',
    complexValue: true
};
const gridColumnEnd = {
    className: 'grd-col-end',
    cssName: 'grid-column-end',
    jsName: 'gridColumnEnd',
    defaultUnit: ''
};
const gridColumnGap = {
    className: 'grd-col-gap',
    cssName: 'grid-column-gap',
    jsName: 'gridColumnGap'
};
const gridColumnStart = {
    className: 'grd-col-str',
    cssName: 'grid-column-start',
    jsName: 'gridColumnStart',
    defaultUnit: ''
};
const gridGap = {
    className: 'grd-gap',
    cssName: 'grid-gap',
    jsName: 'gridGap'
};
const gridRow = {
    className: 'grd-row',
    cssName: 'grid-row',
    jsName: 'gridRow',
    defaultUnit: '',
    complexValue: true
};
const gridRowEnd = {
    className: 'grd-row-end',
    cssName: 'grid-row-end',
    jsName: 'gridRowEnd',
    defaultUnit: ''
};
const gridRowGap = {
    className: 'grd-row-gap',
    cssName: 'grid-row-gap',
    jsName: 'gridRowGap'
};
const gridRowStart = {
    className: 'grd-row-str',
    cssName: 'grid-row-start',
    jsName: 'gridRowStart',
    defaultUnit: ''
};
const gridTemplate = {
    className: 'grd-tmp',
    cssName: 'grid-template',
    jsName: 'gridTemplate',
    complexValue: true
};
const gridTemplateAreas = {
    className: 'grd-tmp-ara',
    cssName: 'grid-template-areas',
    jsName: 'gridTemplateAreas',
    complexValue: true
};
const gridTemplateColumns = {
    className: 'grd-tmp-col',
    cssName: 'grid-template-columns',
    jsName: 'gridTemplateColumns',
    complexValue: true
};
const gridTemplateRows = {
    className: 'grd-tmp-row',
    cssName: 'grid-template-rows',
    jsName: 'gridTemplateRows',
    complexValue: true
};
const rowGap = {
    className: 'row-gap',
    cssName: 'row-gap',
    jsName: 'rowGap'
};
exports.propEnhancers = {
    columnGap: (value) => get_css_1.default(columnGap, value),
    gap: (value) => get_css_1.default(gap, value),
    grid: (value) => get_css_1.default(grid, value),
    gridArea: (value) => get_css_1.default(gridArea, value),
    gridAutoColumns: (value) => get_css_1.default(gridAutoColumns, value),
    gridAutoFlow: (value) => get_css_1.default(gridAutoFlow, value),
    gridAutoRows: (value) => get_css_1.default(gridAutoRows, value),
    gridColumn: (value) => get_css_1.default(gridColumn, value),
    gridColumnEnd: (value) => get_css_1.default(gridColumnEnd, value),
    gridColumnGap: (value) => get_css_1.default(gridColumnGap, value),
    gridColumnStart: (value) => get_css_1.default(gridColumnStart, value),
    gridGap: (value) => get_css_1.default(gridGap, value),
    gridRow: (value) => get_css_1.default(gridRow, value),
    gridRowEnd: (value) => get_css_1.default(gridRowEnd, value),
    gridRowGap: (value) => get_css_1.default(gridRowGap, value),
    gridRowStart: (value) => get_css_1.default(gridRowStart, value),
    gridTemplate: (value) => get_css_1.default(gridTemplate, value),
    gridTemplateAreas: (value) => get_css_1.default(gridTemplateAreas, value),
    gridTemplateColumns: (value) => get_css_1.default(gridTemplateColumns, value),
    gridTemplateRows: (value) => get_css_1.default(gridTemplateRows, value),
    rowGap: (value) => get_css_1.default(rowGap, value)
};

});

var interaction = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(propTypes);
const get_css_1 = __importDefault(getCss_1);
exports.propTypes = {
    cursor: prop_types_1.default.string,
    pointerEvents: prop_types_1.default.string,
    userSelect: prop_types_1.default.string,
    visibility: prop_types_1.default.string
};
exports.propAliases = {};
exports.propValidators = {};
const cursor = {
    className: 'crsr',
    cssName: 'cursor',
    jsName: 'cursor'
};
const userSelect = {
    className: 'usr-slct',
    cssName: 'user-select',
    jsName: 'userSelect',
    safeValue: true,
    isPrefixed: true
};
const visibility = {
    className: 'vsblt',
    cssName: 'visibility',
    jsName: 'visibility',
    safeValue: true
};
const pointerEvents = {
    className: 'ptr-evts',
    cssName: 'pointer-events',
    jsName: 'pointerEvents',
    safeValue: true
};
exports.propEnhancers = {
    cursor: (value) => get_css_1.default(cursor, value),
    pointerEvents: (value) => get_css_1.default(pointerEvents, value),
    userSelect: (value) => get_css_1.default(userSelect, value),
    visibility: (value) => get_css_1.default(visibility, value)
};

});

var layout = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(propTypes);
const get_css_1 = __importDefault(getCss_1);

exports.propTypes = {
    boxSizing: prop_types_1.default.string,
    clear: prop_types_1.default.string,
    clearfix: prop_types_1.default.bool,
    display: prop_types_1.default.string,
    float: prop_types_1.default.string,
    zIndex: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number])
};
exports.propAliases = {};
exports.propValidators = {};
const display = {
    className: 'dspl',
    cssName: 'display',
    jsName: 'display',
    safeValue: true,
    isPrefixed: true
};
const float = {
    className: 'flt',
    cssName: 'float',
    jsName: 'float',
    safeValue: true
};
const clear = {
    className: 'clr',
    cssName: 'clear',
    jsName: 'clear',
    safeValue: true
};
const zIndex = {
    className: 'z-idx',
    cssName: 'z-index',
    jsName: 'zIndex',
    safeValue: true,
    defaultUnit: ''
};
const boxSizing = {
    className: 'box-szg',
    cssName: 'box-sizing',
    jsName: 'boxSizing',
    safeValue: true
};
exports.propEnhancers = {
    boxSizing: (value) => get_css_1.default(boxSizing, value),
    clear: (value) => get_css_1.default(clear, value),
    clearfix: () => ({
        className: `${getClassName_1.getClassNamePrefix()}clearfix`,
        styles: `
.${getClassName_1.getClassNamePrefix()}clearfix:before, .${getClassName_1.getClassNamePrefix()}clearfix:after {
  display: table;
  clear: both;
  content: "";
}`
    }),
    display: (value) => get_css_1.default(display, value),
    float: (value) => get_css_1.default(float, value),
    zIndex: (value) => get_css_1.default(zIndex, value)
};

});

var list = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(propTypes);
const get_css_1 = __importDefault(getCss_1);
exports.propTypes = {
    listStyle: prop_types_1.default.string,
    listStyleType: prop_types_1.default.string,
    listStyleImage: prop_types_1.default.string,
    listStylePosition: prop_types_1.default.string
};
exports.propAliases = {};
exports.propValidators = {};
const listStyle = {
    className: 'ls',
    cssName: 'list-style',
    jsName: 'listStyle',
    complexValue: true
};
const listStyleType = {
    className: 'ls-typ',
    cssName: 'list-style-type',
    jsName: 'listStyleType'
};
const listStyleImage = {
    className: 'ls-img',
    cssName: 'list-style-image',
    jsName: 'listStyleImage',
    complexValue: true
};
const listStylePosition = {
    className: 'ls-pos',
    cssName: 'list-style-position',
    jsName: 'listStylePosition',
    safeValue: true
};
exports.propEnhancers = {
    listStyle: (value) => get_css_1.default(listStyle, value),
    listStyleType: (value) => get_css_1.default(listStyleType, value),
    listStyleImage: (value) => get_css_1.default(listStyleImage, value),
    listStylePosition: (value) => get_css_1.default(listStylePosition, value)
};

});

var opacity_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(propTypes);
const get_css_1 = __importDefault(getCss_1);
exports.propTypes = {
    opacity: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number])
};
exports.propAliases = {};
exports.propValidators = {};
const opacity = {
    className: 'opct',
    cssName: 'opacity',
    jsName: 'opacity',
    defaultUnit: ''
};
exports.propEnhancers = {
    opacity: (value) => get_css_1.default(opacity, value)
};

});

var outline_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(propTypes);
const get_css_1 = __importDefault(getCss_1);
exports.propTypes = {
    outline: prop_types_1.default.string
};
exports.propAliases = {};
exports.propValidators = {};
const outline = {
    className: 'otln',
    cssName: 'outline',
    jsName: 'outline',
    complexValue: true
};
exports.propEnhancers = {
    outline: (value) => get_css_1.default(outline, value)
};

});

var overflow = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(propTypes);
const get_css_1 = __importDefault(getCss_1);
exports.propTypes = {
    overflow: prop_types_1.default.string,
    overflowX: prop_types_1.default.string,
    overflowY: prop_types_1.default.string
};
exports.propAliases = {
    overflow: ['overflowX', 'overflowY']
};
exports.propValidators = {};
const overflowY = {
    className: 'ovflw-y',
    cssName: 'overflow-y',
    jsName: 'overflowY',
    safeValue: true
};
const overflowX = {
    className: 'ovflw-x',
    cssName: 'overflow-x',
    jsName: 'overflowX',
    safeValue: true
};
exports.propEnhancers = {
    overflowX: (value) => get_css_1.default(overflowX, value),
    overflowY: (value) => get_css_1.default(overflowY, value)
};

});

var position_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(propTypes);
const get_css_1 = __importDefault(getCss_1);
exports.propTypes = {
    bottom: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    left: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    position: prop_types_1.default.string,
    right: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    top: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number])
};
exports.propAliases = {};
exports.propValidators = {};
const position = {
    className: 'pst',
    cssName: 'position',
    jsName: 'position',
    safeValue: true,
    isPrefixed: true
};
const top = {
    className: 'top',
    cssName: 'top',
    jsName: 'top'
};
const right = {
    className: 'rgt',
    cssName: 'right',
    jsName: 'right'
};
const bottom = {
    className: 'btm',
    cssName: 'bottom',
    jsName: 'bottom'
};
const left = {
    className: 'lft',
    cssName: 'left',
    jsName: 'left'
};
exports.propEnhancers = {
    bottom: (value) => get_css_1.default(bottom, value),
    left: (value) => get_css_1.default(left, value),
    position: (value) => get_css_1.default(position, value),
    right: (value) => get_css_1.default(right, value),
    top: (value) => get_css_1.default(top, value)
};

});

var resize_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(propTypes);
const get_css_1 = __importDefault(getCss_1);
exports.propTypes = {
    resize: prop_types_1.default.string
};
exports.propAliases = {};
exports.propValidators = {};
const resize = {
    className: 'rsz',
    cssName: 'resize',
    jsName: 'resize'
};
exports.propEnhancers = {
    resize: (value) => get_css_1.default(resize, value)
};

});

var spacing = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(propTypes);
const get_css_1 = __importDefault(getCss_1);

exports.propTypes = {
    margin: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    marginBottom: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    marginLeft: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    marginRight: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    marginTop: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    marginX: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    marginY: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    padding: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    paddingBottom: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    paddingLeft: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    paddingRight: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    paddingTop: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    paddingX: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    paddingY: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number])
};
exports.propAliases = {
    margin: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginBottom', 'marginTop'],
    padding: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingBottom', 'paddingTop']
};
exports.propValidators = {};
if (process.env.NODE_ENV !== 'production') {
    exports.propValidators.margin = value => {
        if (regex.spacesOutsideParentheses.test(value)) {
            return `multiple values (“${value}”) aren՚t supported with “margin”. Use “marginX”, “marginY” “marginBottom”, “marginLeft”, “marginRight” and “marginTop” instead.`;
        }
        return;
    };
    exports.propValidators.marginX = value => {
        if (regex.spacesOutsideParentheses.test(value)) {
            return `multiple values (“${value}”) aren՚t supported with “marginX”. Use “marginLeft” and “marginRight” instead.`;
        }
        return;
    };
    exports.propValidators.marginY = value => {
        if (regex.spacesOutsideParentheses.test(value)) {
            return `multiple values (“${value}”) aren՚t supported with “marginY”. Use “marginBottom” and “marginTop” instead.`;
        }
        return;
    };
    exports.propValidators.padding = value => {
        if (regex.spacesOutsideParentheses.test(value)) {
            return `multiple values (“${value}”) aren՚t supported with “padding”. Use “paddingX”, “paddingY” “paddingBottom”, “paddingLeft”, “paddingRight” and “paddingTop” instead.`;
        }
        return;
    };
    exports.propValidators.paddingX = value => {
        if (regex.spacesOutsideParentheses.test(value)) {
            return `multiple values (“${value}”) aren՚t supported with “paddingX”. Use “paddingLeft” and “paddingRight” instead.`;
        }
        return;
    };
    exports.propValidators.paddingY = value => {
        if (regex.spacesOutsideParentheses.test(value)) {
            return `multiple values (“${value}”) aren՚t supported with “paddingY”. Use “paddingBottom” and “paddingTop” instead.`;
        }
        return;
    };
}
const marginTop = {
    className: 'mt',
    cssName: 'margin-top',
    jsName: 'marginTop'
};
const marginRight = {
    className: 'mr',
    cssName: 'margin-right',
    jsName: 'marginRight'
};
const marginBottom = {
    className: 'mb',
    cssName: 'margin-bottom',
    jsName: 'marginBottom'
};
const marginLeft = {
    className: 'ml',
    cssName: 'margin-left',
    jsName: 'marginLeft'
};
const paddingTop = {
    className: 'pt',
    cssName: 'padding-top',
    jsName: 'paddingTop'
};
const paddingRight = {
    className: 'pr',
    cssName: 'padding-right',
    jsName: 'paddingRight'
};
const paddingBottom = {
    className: 'pb',
    cssName: 'padding-bottom',
    jsName: 'paddingBottom'
};
const paddingLeft = {
    className: 'pl',
    cssName: 'padding-left',
    jsName: 'paddingLeft'
};
exports.propEnhancers = {
    marginBottom: (value) => get_css_1.default(marginBottom, value),
    marginLeft: (value) => get_css_1.default(marginLeft, value),
    marginRight: (value) => get_css_1.default(marginRight, value),
    marginTop: (value) => get_css_1.default(marginTop, value),
    paddingBottom: (value) => get_css_1.default(paddingBottom, value),
    paddingLeft: (value) => get_css_1.default(paddingLeft, value),
    paddingRight: (value) => get_css_1.default(paddingRight, value),
    paddingTop: (value) => get_css_1.default(paddingTop, value)
};

});

var text = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(propTypes);
const get_css_1 = __importDefault(getCss_1);
exports.propTypes = {
    color: prop_types_1.default.string,
    font: prop_types_1.default.string,
    fontFamily: prop_types_1.default.string,
    fontSize: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    fontStyle: prop_types_1.default.string,
    fontVariant: prop_types_1.default.string,
    fontWeight: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    letterSpacing: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    lineHeight: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    textAlign: prop_types_1.default.string,
    textDecoration: prop_types_1.default.string,
    textOverflow: prop_types_1.default.string,
    textShadow: prop_types_1.default.string,
    textTransform: prop_types_1.default.string,
    whiteSpace: prop_types_1.default.string,
    wordBreak: prop_types_1.default.string,
    wordWrap: prop_types_1.default.string
};
exports.propAliases = {};
exports.propValidators = {};
const textAlign = {
    className: 'txt-algn',
    safeValue: true,
    cssName: 'text-align',
    jsName: 'textAlign'
};
const textDecoration = {
    className: 'txt-deco',
    cssName: 'text-decoration',
    jsName: 'textDecoration'
};
const textTransform = {
    className: 'txt-trns',
    cssName: 'text-transform',
    jsName: 'textTransform',
    safeValue: true
};
const textShadow = {
    className: 'txt-shdw',
    cssName: 'text-shadow',
    jsName: 'textShadow',
    complexValue: true
};
const textOverflow = {
    className: 'txt-ovrf',
    cssName: 'text-overflow',
    jsName: 'textOverflow',
    safeValue: true
};
const color = {
    className: 'color',
    cssName: 'color',
    jsName: 'color'
};
const font = {
    className: 'fnt',
    cssName: 'font',
    jsName: 'font',
    complexValue: true
};
const fontFamily = {
    className: 'fnt-fam',
    cssName: 'font-family',
    jsName: 'fontFamily',
    complexValue: true
};
const fontSize = {
    className: 'fnt-sze',
    cssName: 'font-size',
    jsName: 'fontSize'
};
const fontStyle = {
    className: 'fnt-stl',
    cssName: 'font-style',
    jsName: 'fontStyle',
    safeValue: true
};
const fontVariant = {
    className: 'f-vari',
    cssName: 'font-variant',
    jsName: 'fontVariant'
};
const fontWeight = {
    className: 'f-wght',
    cssName: 'font-weight',
    jsName: 'fontWeight',
    safeValue: true,
    defaultUnit: ''
};
const lineHeight = {
    className: 'ln-ht',
    cssName: 'line-height',
    jsName: 'lineHeight',
    defaultUnit: ''
};
const wordBreak = {
    className: 'wrd-brk',
    cssName: 'word-break',
    jsName: 'wordBreak',
    safeValue: true
};
const wordWrap = {
    className: 'wrd-wrp',
    cssName: 'word-wrap',
    jsName: 'wordWrap',
    safeValue: true
};
const whiteSpace = {
    className: 'wht-spc',
    cssName: 'white-space',
    jsName: 'whiteSpace',
    safeValue: true
};
const letterSpacing = {
    className: 'ltr-spc',
    cssName: 'letter-spacing',
    jsName: 'letterSpacing'
};
exports.propEnhancers = {
    color: (value) => get_css_1.default(color, value),
    font: (value) => get_css_1.default(font, value),
    fontFamily: (value) => get_css_1.default(fontFamily, value),
    fontSize: (value) => get_css_1.default(fontSize, value),
    fontStyle: (value) => get_css_1.default(fontStyle, value),
    fontVariant: (value) => get_css_1.default(fontVariant, value),
    fontWeight: (value) => get_css_1.default(fontWeight, value),
    letterSpacing: (value) => get_css_1.default(letterSpacing, value),
    lineHeight: (value) => get_css_1.default(lineHeight, value),
    textAlign: (value) => get_css_1.default(textAlign, value),
    textDecoration: (value) => get_css_1.default(textDecoration, value),
    textOverflow: (value) => get_css_1.default(textOverflow, value),
    textShadow: (value) => get_css_1.default(textShadow, value),
    textTransform: (value) => get_css_1.default(textTransform, value),
    whiteSpace: (value) => get_css_1.default(whiteSpace, value),
    wordBreak: (value) => get_css_1.default(wordBreak, value),
    wordWrap: (value) => get_css_1.default(wordWrap, value)
};

});

var transform_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(propTypes);
const get_css_1 = __importDefault(getCss_1);
exports.propTypes = {
    transform: prop_types_1.default.string,
    transformOrigin: prop_types_1.default.string
};
exports.propAliases = {};
exports.propValidators = {};
const transform = {
    className: 'tfrm',
    cssName: 'transform',
    jsName: 'transform',
    complexValue: true
};
const transformOrigin = {
    className: 'tfrm-orgn',
    cssName: 'transform-origin',
    jsName: 'transformOrigin',
    complexValue: true
};
exports.propEnhancers = {
    transform: (value) => get_css_1.default(transform, value),
    transformOrigin: (value) => get_css_1.default(transformOrigin, value)
};

});

var transition_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(propTypes);
const get_css_1 = __importDefault(getCss_1);
exports.propTypes = {
    transition: prop_types_1.default.string,
    transitionDelay: prop_types_1.default.string,
    transitionDuration: prop_types_1.default.string,
    transitionProperty: prop_types_1.default.string,
    transitionTimingFunction: prop_types_1.default.string
};
exports.propAliases = {};
exports.propValidators = {};
const transition = {
    className: 'tstn',
    cssName: 'transition',
    jsName: 'transition',
    complexValue: true
};
const transitionDelay = {
    className: 'tstn-dly',
    cssName: 'transition-delay',
    jsName: 'transitionDelay',
    complexValue: true
};
const transitionDuration = {
    className: 'tstn-drn',
    cssName: 'transition-duration',
    jsName: 'transitionDuration',
    complexValue: true
};
const transitionProperty = {
    className: 'tstn-pty',
    cssName: 'transition-property',
    jsName: 'transitionProperty',
    complexValue: true
};
const transitionTimingFunction = {
    className: 'tstn-tf',
    cssName: 'transition-timing-function',
    jsName: 'transitionTimingFunction',
    complexValue: true
};
exports.propEnhancers = {
    transition: (value) => get_css_1.default(transition, value),
    transitionDelay: (value) => get_css_1.default(transitionDelay, value),
    transitionDuration: (value) => get_css_1.default(transitionDuration, value),
    transitionProperty: (value) => get_css_1.default(transitionProperty, value),
    transitionTimingFunction: (value) => get_css_1.default(transitionTimingFunction, value)
};

});

var enhancers = createCommonjsModule(function (module, exports) {
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const background = __importStar(background_1);
exports.background = background;
const borderRadius$1 = __importStar(borderRadius);
exports.borderRadius = borderRadius$1;
const borders$1 = __importStar(borders);
exports.borders = borders$1;
const boxShadow = __importStar(boxShadow_1);
exports.boxShadow = boxShadow;
const dimensions$1 = __importStar(dimensions);
exports.dimensions = dimensions$1;
const flex = __importStar(flex_1);
exports.flex = flex;
const grid = __importStar(grid_1);
exports.grid = grid;
const interaction$1 = __importStar(interaction);
exports.interaction = interaction$1;
const layout$1 = __importStar(layout);
exports.layout = layout$1;
const list$1 = __importStar(list);
exports.list = list$1;
const opacity = __importStar(opacity_1);
exports.opacity = opacity;
const outline = __importStar(outline_1);
exports.outline = outline;
const overflow$1 = __importStar(overflow);
exports.overflow = overflow$1;
const position = __importStar(position_1);
exports.position = position;
const resize = __importStar(resize_1);
exports.resize = resize;
const spacing$1 = __importStar(spacing);
exports.spacing = spacing$1;
const text$1 = __importStar(text);
exports.text = text$1;
const transform = __importStar(transform_1);
exports.transform = transform;
const transition = __importStar(transition_1);
exports.transition = transition;
exports.propTypes = Object.assign({}, background.propTypes, borderRadius$1.propTypes, borders$1.propTypes, boxShadow.propTypes, dimensions$1.propTypes, flex.propTypes, grid.propTypes, interaction$1.propTypes, layout$1.propTypes, list$1.propTypes, opacity.propTypes, outline.propTypes, overflow$1.propTypes, position.propTypes, resize.propTypes, spacing$1.propTypes, text$1.propTypes, transform.propTypes, transition.propTypes);
exports.propNames = Object.keys(exports.propTypes);
exports.propAliases = Object.assign({}, background.propAliases, borderRadius$1.propAliases, borders$1.propAliases, boxShadow.propAliases, dimensions$1.propAliases, flex.propAliases, grid.propAliases, interaction$1.propAliases, layout$1.propAliases, list$1.propAliases, opacity.propAliases, outline.propAliases, overflow$1.propAliases, position.propAliases, resize.propAliases, spacing$1.propAliases, text$1.propAliases, transform.propAliases, transition.propAliases);
exports.propValidators = Object.assign({}, background.propValidators, borderRadius$1.propValidators, borders$1.propValidators, boxShadow.propValidators, dimensions$1.propValidators, flex.propValidators, grid.propValidators, interaction$1.propValidators, layout$1.propValidators, list$1.propValidators, opacity.propValidators, outline.propValidators, overflow$1.propValidators, position.propValidators, resize.propValidators, spacing$1.propValidators, text$1.propValidators, transform.propValidators, transition.propValidators);
exports.propEnhancers = Object.assign({}, background.propEnhancers, borderRadius$1.propEnhancers, borders$1.propEnhancers, boxShadow.propEnhancers, dimensions$1.propEnhancers, flex.propEnhancers, grid.propEnhancers, interaction$1.propEnhancers, layout$1.propEnhancers, list$1.propEnhancers, opacity.propEnhancers, outline.propEnhancers, overflow$1.propEnhancers, position.propEnhancers, resize.propEnhancers, spacing$1.propEnhancers, text$1.propEnhancers, transform.propEnhancers, transition.propEnhancers);

});

var expandAliases_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

/**
 * Expands aliases like `margin` to `marginTop`, `marginBottom`, `marginLeft` and `marginRight`.
 *
 * This prevents edge cases where longhand properties can't override shorthand
 * properties due to the style insertion order.
 */
function expandAliases(props) {
    const propNames = Object.keys(props);
    // Use a Map because it's faster for setting values and looping over than an Object
    const newProps = new Map();
    propNames.forEach(propName => {
        const propValue = props[propName];
        const aliases = enhancers.propAliases[propName] || [propName];
        // Check that the alias has a valid value in development
        if (process.env.NODE_ENV !== 'production') {
            const validator = enhancers.propValidators[propName];
            if (validator) {
                const result = validator(propValue);
                if (result) {
                    throw new Error(`📦 ui-box: ${result}`);
                }
            }
        }
        // Expand aliases
        aliases.forEach(alias => {
            newProps.set(alias, propValue);
        });
    });
    return newProps;
}
exports.default = expandAliases;

});

var enhanceProps_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });

const expand_aliases_1 = __importDefault(expandAliases_1);
const cache = __importStar(cache_1);
const styles$1 = __importStar(styles);
/**
 * Converts the CSS props to class names and inserts the styles.
 */
function enhanceProps(rawProps) {
    const propsMap = expand_aliases_1.default(rawProps);
    const preservedProps = {};
    let className = rawProps.className || '';
    for (const [propName, propValue] of propsMap) {
        const cachedClassName = cache.get(propName, propValue);
        if (cachedClassName) {
            className = `${className} ${cachedClassName}`;
            continue;
        }
        const enhancer = enhancers.propEnhancers[propName];
        // Skip false boolean enhancers. e.g: `clearfix={false}`
        // Also allows omitting props via overriding with `null` (i.e: neutralising props)
        if (enhancer &&
            (propValue === null || propValue === undefined || propValue === false)) {
            continue;
        }
        else if (!enhancer) {
            // Pass through native props. e.g: disabled, value, type
            preservedProps[propName] = propValue;
            continue;
        }
        const newCss = enhancer(propValue);
        // Allow enhancers to return null for invalid values
        if (newCss) {
            styles$1.add(newCss.styles);
            cache.set(propName, propValue, newCss.className);
            className = `${className} ${newCss.className}`;
        }
    }
    className = className.trim();
    return { className, enhancedProps: preservedProps };
}
exports.default = enhanceProps;

});

var safeHref = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
const PROTOCOL_REGEX = /^[a-z]+:/;
const ORIGIN_REGEX = /^(?:[a-z]+:?:)?(?:\/\/)?([^\/\?]+)/;
let useSafeHref = false;
let globalOrigin = typeof window !== 'undefined' ? window.location.origin : false;
function configureSafeHref(configObject) {
    if (typeof configObject.enabled !== 'undefined') {
        useSafeHref = configObject.enabled;
    }
    if (configObject.origin) {
        globalOrigin = configObject.origin;
    }
}
exports.configureSafeHref = configureSafeHref;
function getUseSafeHref() {
    return useSafeHref;
}
exports.getUseSafeHref = getUseSafeHref;
function getURLInfo(url) {
    /**
     * An array of the safely allowed url protocols
     */
    const safeProtocols = ['http:', 'https:', 'mailto:', 'tel:', 'data:'];
    /**
     * - Find protocol of URL or set to 'relative'
     * - Find origin of URL
     * - Determine if sameOrigin
     * - Determine if protocol of URL is safe
     */
    const protocolResult = url.match(PROTOCOL_REGEX);
    const originResult = url.match(ORIGIN_REGEX);
    const urlProtocol = protocolResult ? protocolResult[0] : 'relative';
    let sameOrigin = urlProtocol === 'relative';
    if (!sameOrigin && globalOrigin) {
        sameOrigin = globalOrigin === (originResult && originResult[0]);
    }
    const isSafeProtocol = sameOrigin ? true : safeProtocols.includes(urlProtocol);
    if (!isSafeProtocol) {
        /**
         * If the url is unsafe, put a error in the console, and return the URLInfo object
         * with the value of url being `undefined`
         */
        console.error('📦 `href` passed to anchor tag is unsafe. Because of this, the `href` on the element was not set. Please review the safe href documentation if you have questions.', 'https://www.github.com/segmentio/ui-box');
        return {
            url: undefined,
            sameOrigin
        };
    }
    /**
     * If the url is safe, return the url and origin
     */
    return {
        url,
        sameOrigin
    };
}
exports.getURLInfo = getURLInfo;
function extractAnchorProps(href, rel) {
    /**
    * Get url info and update href
    */
    const urlInfo = getURLInfo(href);
    const safeHref = urlInfo.url;
    /**
     * If the url passed is safe, we want to also update the attributes of the element
     * to be safe
     */
    let safeRel = rel ? rel : '';
    if (urlInfo.url) {
        if (!safeRel.includes('noopener')) {
            safeRel += `${safeRel.length > 0 ? ' ' : ''}noopener`;
        }
        if (!safeRel.includes('noreferrer') && !urlInfo.sameOrigin) {
            safeRel += `${safeRel.length > 0 ? ' ' : ''}noreferrer`;
        }
    }
    return {
        safeHref,
        safeRel
    };
}
exports.extractAnchorProps = extractAnchorProps;

});

var box = createCommonjsModule(function (module, exports) {
var __rest = (commonjsGlobal && commonjsGlobal.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(React);
const prop_types_1 = __importDefault(propTypes);

const enhance_props_1 = __importDefault(enhanceProps_1);

const Box = (_a) => {
    var { is = 'div', innerRef, children, allowUnsafeHref } = _a, props = __rest(_a, ["is", "innerRef", "children", "allowUnsafeHref"]);
    // Convert the CSS props to class names (and inject the styles)
    const { className, enhancedProps: parsedProps } = enhance_props_1.default(props);
    parsedProps.className = className;
    if (innerRef) {
        parsedProps.ref = innerRef;
    }
    /**
     * If the user has enabled safe hrefs we want to make sure that the url passed
     * uses a safe protocol and that the other attributes that make the link safe are
     * added to the element
     */
    const safeHrefEnabled = (typeof allowUnsafeHref === 'boolean' ? !allowUnsafeHref : safeHref.getUseSafeHref()) && is === 'a' && parsedProps.href;
    if (safeHrefEnabled) {
        const { safeHref: safeHref$1, safeRel } = safeHref.extractAnchorProps(parsedProps.href, parsedProps.rel);
        parsedProps.href = safeHref$1;
        parsedProps.rel = safeRel;
    }
    return react_1.default.createElement(is, parsedProps, children);
};
Box.displayName = 'Box';
Box.propTypes = Object.assign({}, enhancers.propTypes, { innerRef: prop_types_1.default.oneOfType([
        prop_types_1.default.func,
        prop_types_1.default.shape({ current: prop_types_1.default.element })
    ]), is: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func, prop_types_1.default.elementType]) });
Box.defaultProps = {
    innerRef: null,
    is: 'div',
    boxSizing: 'border-box'
};
exports.default = Box;

});

var splitProps_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Utility to split props based on an array of keys
 */
function splitProps(props, keys) {
    const matchedProps = {};
    const remainingProps = {};
    const propKeys = Object.keys(props);
    for (let i = 0; i < propKeys.length; i++) {
        const propKey = propKeys[i];
        const propValue = props[propKey];
        if (keys.includes(propKey)) {
            matchedProps[propKey] = propValue;
        }
        else {
            remainingProps[propKey] = propValue;
        }
    }
    return { matchedProps, remainingProps };
}
exports.default = splitProps;

});

var splitBoxProps_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

const split_props_1 = __importDefault(splitProps_1);
/**
 * Convenience method to split the Box props.
 *
 * Useful for when you want to pass all of the Box props to the root Box and
 * pass the remaining props to a child element (e.g: disabled, readOnly, required, etc).
 */
function splitBoxProps(props) {
    return split_props_1.default(props, enhancers.propNames);
}
exports.default = splitBoxProps;

});

var dist = createCommonjsModule(function (module, exports) {
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cache = __importStar(cache_1);
const styles$1 = __importStar(styles);

exports.default = box.default;

exports.splitProps = splitProps_1.default;

exports.splitBoxProps = splitBoxProps_1.default;

exports.setClassNamePrefix = getClassName_1.setClassNamePrefix;

exports.configureSafeHref = safeHref.configureSafeHref;

exports.background = enhancers.background;
exports.borderRadius = enhancers.borderRadius;
exports.borders = enhancers.borders;
exports.boxShadow = enhancers.boxShadow;
exports.dimensions = enhancers.dimensions;
exports.flex = enhancers.flex;
exports.interaction = enhancers.interaction;
exports.layout = enhancers.layout;
exports.list = enhancers.list;
exports.opacity = enhancers.opacity;
exports.overflow = enhancers.overflow;
exports.position = enhancers.position;
exports.spacing = enhancers.spacing;
exports.text = enhancers.text;
exports.transform = enhancers.transform;
exports.propTypes = enhancers.propTypes;
exports.propNames = enhancers.propNames;
exports.propAliases = enhancers.propAliases;
exports.propEnhancers = enhancers.propEnhancers;
exports.hydrate = cache.hydrate;
function extractStyles() {
    const output = {
        cache: cache.entries(),
        styles: styles$1.getAll()
    };
    clearStyles();
    return output;
}
exports.extractStyles = extractStyles;
function clearStyles() {
    cache.clear();
    styles$1.clear();
}
exports.clearStyles = clearStyles;

});

var Box = /*@__PURE__*/unwrapExports(dist);

function useDeviceInfo () {
  var _React$useState = React.useState({
    width: 0,
    device: "desktop"
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var theme = useTheme();
  React.useEffect(function () {
    var updateState = function updateState() {
      return setState({
        width: window.innerWidth,
        device: pipe(toPairs, find(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              device = _ref2[0],
              width = _ref2[1];

          return window.innerWidth <= width;
        }), defaultTo(["desktop", 0]), head)(propOr({}, "breakpoints", theme))
      });
    };

    window.addEventListener("resize", updateState);
    return function () {
      window.removeEventListener("resize", updateState);
    };
  }, []);
  return state;
}

var CSS_ALIAS_MAP = {
  ai: "alignItems",
  as: "alignSelf",
  b: "bottom",
  bd: "border",
  bdb: "borderBottom",
  bdc: "borderColor",
  bdl: "borderLeft",
  bdr: "borderRight",
  bdrs: "borderRadius",
  bdt: "borderTop",
  bg: "background",
  c: "color",
  d: "display",
  fv: "fontVariant",
  fw: "fontWeight",
  fx: "flex",
  fxd: "flexDirection",
  fxw: "flexWrap",
  fz: "fontSize",
  h: "height",
  jc: "justifyContent",
  l: "left",
  lh: "lineHeight",
  m: "margin",
  mah: "maxHeight",
  maw: "maxWidth",
  mb: "marginBottom",
  mih: "minHeight",
  miw: "minWidth",
  ml: "marginLeft",
  mr: "marginRight",
  mt: "marginTop",
  op: "opacity",
  p: "padding",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pr: "paddingRight",
  pt: "paddingTop",
  r: "right",
  t: "top",
  ta: "textAlign",
  tt: "textTransform",
  va: "verticalAlign",
  w: "width"
};
var HTML_ATTRIBUTES = ["accept", "acceptCharset", "accessKey", "action", "allowFullScreen", "alt", "async", "autoComplete", "autoFocus", "autoPlay", "capture", "cellPadding", "cellSpacing", "challenge", "charSet", "checked", "cite", "classID", "className", "cols", "colSpan", "content", "contentEditable", "contextMenu", "controls", "controlsList", "coords", "crossOrigin", "data", "dateTime", "default", "defer", "dir", "disabled", "download", "draggable", "encType", "form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "headers", "height", "hidden", "high", "href", "hrefLang", "htmlFor", "httpEquiv", "icon", "id", "inputMode", "integrity", "is", "keyParams", "keyType", "kind", "label", "lang", "list", "loop", "low", "manifest", "max", "maxLength", "media", "mediaGroup", "method", "min", "minLength", "multiple", "muted", "name", "nonce", "noValidate", "onBlur", "onClick", "onChange", "onContextMenu", "onDoubleClick", "onDragEnd", "onDragEnter", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onFocus", "onKeyDown", "onKeyPress", "onKeyUp", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseUp", "open", "optimum", "pattern", "placeholder", "poster", "preload", "profile", "radioGroup", "readOnly", "rel", "required", "reversed", "role", "rows", "rowSpan", "sandbox", "scope", "scoped", "scrolling", "seamless", "selected", "shape", "size", "sizes", "span", "spellCheck", "src", "srcDoc", "srcLang", "srcSet", "start", "step", "style", "summary", "tabIndex", "target", "title", "type", "useMap", "value", "wmode", "wrap"];
var CSS_PROPS = ["alignContent", "alignItems", "alignSelf", "animation", "background", "backgroundBlendMode", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPosition", "backgroundRepeat", "backgroundSize", "border", "borderBottom", "borderBottomColor", "borderBottomLeftRadius", "borderBottomRightRadius", "borderBottomStyle", "borderBottomWidth", "borderColor", "borderLeft", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRadius", "borderRight", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderStyle", "borderTop", "borderTopColor", "borderTopLeftRadius", "borderTopRightRadius", "borderTopStyle", "borderTopWidth", "borderWidth", "bottom", "boxShadow", "boxSizing", "clear", "clearfix", "color", "columnGap", "cursor", "display", "flex", "flexBasis", "flexDirection", "flexFlow", "flexGrow", "flexShrink", "flexWrap", "float", "font", "fontFamily", "fontSize", "fontStyle", "fontVariant", "fontWeight", "gap", "grid", "gridArea", "gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridColumn", "gridColumnEnd", "gridColumnGap", "gridColumnStart", "gridGap", "gridRow", "gridRowEnd", "gridRowGap", "gridRowStart", "gridTemplate", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows", "height", "justifyContent", "justifyItems", "justifySelf", "left", "letterSpacing", "lineHeight", "listStyle", "listStyleImage", "listStylePosition", "listStyleType", "margin", "marginBottom", "marginLeft", "marginRight", "marginTop", "marginX", "marginY", "maxHeight", "maxWidth", "minHeight", "minWidth", "opacity", "order", "overflow", "overflowX", "overflowY", "overflowWrap", "padding", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "paddingX", "paddingY", "placeContent", "placeItems", "placeSelf", "pointerEvents", "position", "right", "rowGap", "textAlign", "textDecoration", "textOverflow", "textShadow", "textTransform", "top", "transform", "transformOrigin", "transition", "transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction", "userSelect", "visibility", "whiteSpace", "width", "wordBreak", "wordWrap", "zIndex"];

var pickDataAttrs = pickBy(function (_, key) {
  return test(/^data-.+/, key);
});
var pickAllowedAttrs = pick([].concat(_toConsumableArray(HTML_ATTRIBUTES), _toConsumableArray(CSS_PROPS)));
var cssAliasProps = keys(CSS_ALIAS_MAP);
var resolveAlias = function resolveAlias(props) {
  var resolvedShorthandProps = reduce(function (map, value) {
    return when(function () {
      return !isNil(props[value]);
    }, assoc(CSS_ALIAS_MAP[value], props[value]))(map);
  }, {}, cssAliasProps);
  return mergeRight(props, resolvedShorthandProps);
};
var parseValue = function parseValue(theme, device, value) {
  return cond([[isNil, identity], [is(Boolean), function () {
    return "".concat(theme.gridSize, "px");
  }], [is(Number), function (num) {
    return "".concat(theme.gridSize * num, "px");
  }], [is(Function), function (fn) {
    return parseValue(theme, device, fn(theme));
  }], [is(Object), pipe(prop(device), function (v) {
    return parseValue(theme, device, v);
  })], [T, String]])(value);
};
var parseValues = function parseValues(theme, device) {
  return mapObjIndexed(function (value, prop) {
    if (!includes(prop, [].concat(_toConsumableArray(CSS_PROPS), _toConsumableArray(cssAliasProps)))) {
      return value;
    }

    return parseValue(theme, device, value);
  });
};

var Element$1 = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var theme = useTheme();
  var deviceInfo = useDeviceInfo();
  var resolvedProps = React.useMemo(function () {
    return pipe(resolveAlias, parseValues(theme, deviceInfo.device))(props);
  }, [props]);
  var allowedAttrs = React.useMemo(function () {
    return pickAllowedAttrs(resolvedProps);
  }, [resolvedProps]);
  return /*#__PURE__*/React.createElement(Box, _extends({
    innerRef: ref
  }, allowedAttrs, pickDataAttrs(props)), children);
});
Element$1.displayName = "Element";
Element$1.defaultProps = {
  display: "flex",
  flexDirection: "column",
  position: "relative"
};

var performanceNow = createCommonjsModule(function (module) {
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(commonjsGlobal);


});

var root = typeof window === 'undefined' ? commonjsGlobal : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix];
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60;

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = performanceNow()
        , next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function() {
        var cp = queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0;
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last);
            } catch(e) {
              setTimeout(function() { throw e }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id
  };

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}

var raf_1 = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
};
var cancel = function() {
  caf.apply(root, arguments);
};
var polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};
raf_1.cancel = cancel;
raf_1.polyfill = polyfill;

var div = null;
var prefixes$6 = [ 'Webkit', 'Moz', 'O', 'ms' ];

var prefixStyle = function prefixStyle (prop) {
  // re-use a dummy div
  if (!div) {
    div = document.createElement('div');
  }

  var style = div.style;

  // prop exists without prefix
  if (prop in style) {
    return prop
  }

  // borderRadius -> BorderRadius
  var titleCase = prop.charAt(0).toUpperCase() + prop.slice(1);

  // find the vendor-prefixed prop
  for (var i = prefixes$6.length; i >= 0; i--) {
    var name = prefixes$6[i] + titleCase;
    // e.g. WebkitBorderRadius or webkitBorderRadius
    if (name in style) {
      return name
    }
  }

  return false
};

/**
 * Export.
 */

var toNoCase_1 = toNoCase;

/**
 * Test whether a string is camel-case.
 */

var hasSpace = /\s/;
var hasSeparator = /(_|-|\.|:)/;
var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/;

/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

function toNoCase(string) {
  if (hasSpace.test(string)) return string.toLowerCase()
  if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase()
  if (hasCamel.test(string)) return uncamelize(string).toLowerCase()
  return string.toLowerCase()
}

/**
 * Separator splitter.
 */

var separatorSplitter = /[\W_]+(.|$)/g;

/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function unseparate(string) {
  return string.replace(separatorSplitter, function (m, next) {
    return next ? ' ' + next : ''
  })
}

/**
 * Camelcase splitter.
 */

var camelSplitter = /(.)([A-Z]+)/g;

/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function uncamelize(string) {
  return string.replace(camelSplitter, function (m, previous, uppers) {
    return previous + ' ' + uppers.toLowerCase().split('').join(' ')
  })
}

/**
 * Export.
 */

var toSpaceCase_1 = toSpaceCase;

/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */

function toSpaceCase(string) {
  return toNoCase_1(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
    return match ? ' ' + match : ''
  }).trim()
}

/**
 * Export.
 */

var toCamelCase_1 = toCamelCase;

/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */

function toCamelCase(string) {
  return toSpaceCase_1(string).replace(/\s(\w)/g, function (matches, letter) {
    return letter.toUpperCase()
  })
}

/* The following list is defined in React's core */
var IS_UNITLESS = {
  animationIterationCount: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  stopOpacity: true,
  strokeDashoffset: true,
  strokeOpacity: true,
  strokeWidth: true
};

var addPxToStyle = function(name, value) {
  if(typeof value === 'number' && !IS_UNITLESS[ name ]) {
    return value + 'px';
  } else {
    return value;
  }
};

var cache$1 = { 'float': 'cssFloat' };


function style (element, property, value) {
  var camel = cache$1[property];
  if (typeof camel === 'undefined') {
    camel = detect(property);
  }

  // may be false if CSS prop is unsupported
  if (camel) {
    if (value === undefined) {
      return element.style[camel]
    }

    element.style[camel] = addPxToStyle(camel, value);
  }
}

function each (element, properties) {
  for (var k in properties) {
    if (properties.hasOwnProperty(k)) {
      style(element, k, properties[k]);
    }
  }
}

function detect (cssProp) {
  var camel = toCamelCase_1(cssProp);
  var result = prefixStyle(camel);
  cache$1[camel] = cache$1[cssProp] = cache$1[result] = result;
  return result
}

function set () {
  if (arguments.length === 2) {
    if (typeof arguments[1] === 'string') {
      arguments[0].style.cssText = arguments[1];
    } else {
      each(arguments[0], arguments[1]);
    }
  } else {
    style(arguments[0], arguments[1], arguments[2]);
  }
}

var domCss = set;
var set_1 = set;

var get = function (element, properties) {
  if (Array.isArray(properties)) {
    return properties.reduce(function (obj, prop) {
      obj[prop] = style(element, prop || '');
      return obj
    }, {})
  } else {
    return style(element, properties || '')
  }
};
domCss.set = set_1;
domCss.get = get;

var isString_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isString;
function isString(maybe) {
    return typeof maybe === 'string';
}
});

var getScrollbarWidth_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = getScrollbarWidth;



var _domCss2 = _interopRequireDefault(domCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var scrollbarWidth = false;

function getScrollbarWidth() {
    if (scrollbarWidth !== false) return scrollbarWidth;
    /* istanbul ignore else */
    if (typeof document !== 'undefined') {
        var div = document.createElement('div');
        (0, _domCss2["default"])(div, {
            width: 100,
            height: 100,
            position: 'absolute',
            top: -9999,
            overflow: 'scroll',
            MsOverflowStyle: 'scrollbar'
        });
        document.body.appendChild(div);
        scrollbarWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);
    } else {
        scrollbarWidth = 0;
    }
    return scrollbarWidth || 0;
}
});

var returnFalse_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = returnFalse;
function returnFalse() {
    return false;
}
});

var getInnerWidth_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = getInnerWidth;
function getInnerWidth(el) {
    var clientWidth = el.clientWidth;

    var _getComputedStyle = getComputedStyle(el),
        paddingLeft = _getComputedStyle.paddingLeft,
        paddingRight = _getComputedStyle.paddingRight;

    return clientWidth - parseFloat(paddingLeft) - parseFloat(paddingRight);
}
});

var getInnerHeight_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = getInnerHeight;
function getInnerHeight(el) {
    var clientHeight = el.clientHeight;

    var _getComputedStyle = getComputedStyle(el),
        paddingTop = _getComputedStyle.paddingTop,
        paddingBottom = _getComputedStyle.paddingBottom;

    return clientHeight - parseFloat(paddingTop) - parseFloat(paddingBottom);
}
});

var styles$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
var containerStyleDefault = exports.containerStyleDefault = {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100%'
};

// Overrides containerStyleDefault properties
var containerStyleAutoHeight = exports.containerStyleAutoHeight = {
    height: 'auto'
};

var viewStyleDefault = exports.viewStyleDefault = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'scroll',
    WebkitOverflowScrolling: 'touch'
};

// Overrides viewStyleDefault properties
var viewStyleAutoHeight = exports.viewStyleAutoHeight = {
    position: 'relative',
    top: undefined,
    left: undefined,
    right: undefined,
    bottom: undefined
};

var viewStyleUniversalInitial = exports.viewStyleUniversalInitial = {
    overflow: 'hidden',
    marginRight: 0,
    marginBottom: 0
};

var trackHorizontalStyleDefault = exports.trackHorizontalStyleDefault = {
    position: 'absolute',
    height: 6
};

var trackVerticalStyleDefault = exports.trackVerticalStyleDefault = {
    position: 'absolute',
    width: 6
};

var thumbHorizontalStyleDefault = exports.thumbHorizontalStyleDefault = {
    position: 'relative',
    display: 'block',
    height: '100%'
};

var thumbVerticalStyleDefault = exports.thumbVerticalStyleDefault = {
    position: 'relative',
    display: 'block',
    width: '100%'
};

var disableSelectStyle = exports.disableSelectStyle = {
    userSelect: 'none'
};

var disableSelectStyleReset = exports.disableSelectStyleReset = {
    userSelect: ''
};
});

var defaultRenderElements = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.renderViewDefault = renderViewDefault;
exports.renderTrackHorizontalDefault = renderTrackHorizontalDefault;
exports.renderTrackVerticalDefault = renderTrackVerticalDefault;
exports.renderThumbHorizontalDefault = renderThumbHorizontalDefault;
exports.renderThumbVerticalDefault = renderThumbVerticalDefault;



var _react2 = _interopRequireDefault(React);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* eslint-disable react/prop-types */

function renderViewDefault(props) {
    return _react2["default"].createElement('div', props);
}

function renderTrackHorizontalDefault(_ref) {
    var style = _ref.style,
        props = _objectWithoutProperties(_ref, ['style']);

    var finalStyle = _extends({}, style, {
        right: 2,
        bottom: 2,
        left: 2,
        borderRadius: 3
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}

function renderTrackVerticalDefault(_ref2) {
    var style = _ref2.style,
        props = _objectWithoutProperties(_ref2, ['style']);

    var finalStyle = _extends({}, style, {
        right: 2,
        bottom: 2,
        top: 2,
        borderRadius: 3
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}

function renderThumbHorizontalDefault(_ref3) {
    var style = _ref3.style,
        props = _objectWithoutProperties(_ref3, ['style']);

    var finalStyle = _extends({}, style, {
        cursor: 'pointer',
        borderRadius: 'inherit',
        backgroundColor: 'rgba(0,0,0,.2)'
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}

function renderThumbVerticalDefault(_ref4) {
    var style = _ref4.style,
        props = _objectWithoutProperties(_ref4, ['style']);

    var finalStyle = _extends({}, style, {
        cursor: 'pointer',
        borderRadius: 'inherit',
        backgroundColor: 'rgba(0,0,0,.2)'
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}
});

var Scrollbars_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _raf3 = _interopRequireDefault(raf_1);



var _domCss2 = _interopRequireDefault(domCss);





var _propTypes2 = _interopRequireDefault(propTypes);



var _isString2 = _interopRequireDefault(isString_1);



var _getScrollbarWidth2 = _interopRequireDefault(getScrollbarWidth_1);



var _returnFalse2 = _interopRequireDefault(returnFalse_1);



var _getInnerWidth2 = _interopRequireDefault(getInnerWidth_1);



var _getInnerHeight2 = _interopRequireDefault(getInnerHeight_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scrollbars = function (_Component) {
    _inherits(Scrollbars, _Component);

    function Scrollbars(props) {
        var _ref;

        _classCallCheck(this, Scrollbars);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Scrollbars.__proto__ || Object.getPrototypeOf(Scrollbars)).call.apply(_ref, [this, props].concat(rest)));

        _this.getScrollLeft = _this.getScrollLeft.bind(_this);
        _this.getScrollTop = _this.getScrollTop.bind(_this);
        _this.getScrollWidth = _this.getScrollWidth.bind(_this);
        _this.getScrollHeight = _this.getScrollHeight.bind(_this);
        _this.getClientWidth = _this.getClientWidth.bind(_this);
        _this.getClientHeight = _this.getClientHeight.bind(_this);
        _this.getValues = _this.getValues.bind(_this);
        _this.getThumbHorizontalWidth = _this.getThumbHorizontalWidth.bind(_this);
        _this.getThumbVerticalHeight = _this.getThumbVerticalHeight.bind(_this);
        _this.getScrollLeftForOffset = _this.getScrollLeftForOffset.bind(_this);
        _this.getScrollTopForOffset = _this.getScrollTopForOffset.bind(_this);

        _this.scrollLeft = _this.scrollLeft.bind(_this);
        _this.scrollTop = _this.scrollTop.bind(_this);
        _this.scrollToLeft = _this.scrollToLeft.bind(_this);
        _this.scrollToTop = _this.scrollToTop.bind(_this);
        _this.scrollToRight = _this.scrollToRight.bind(_this);
        _this.scrollToBottom = _this.scrollToBottom.bind(_this);

        _this.handleTrackMouseEnter = _this.handleTrackMouseEnter.bind(_this);
        _this.handleTrackMouseLeave = _this.handleTrackMouseLeave.bind(_this);
        _this.handleHorizontalTrackMouseDown = _this.handleHorizontalTrackMouseDown.bind(_this);
        _this.handleVerticalTrackMouseDown = _this.handleVerticalTrackMouseDown.bind(_this);
        _this.handleHorizontalThumbMouseDown = _this.handleHorizontalThumbMouseDown.bind(_this);
        _this.handleVerticalThumbMouseDown = _this.handleVerticalThumbMouseDown.bind(_this);
        _this.handleWindowResize = _this.handleWindowResize.bind(_this);
        _this.handleScroll = _this.handleScroll.bind(_this);
        _this.handleDrag = _this.handleDrag.bind(_this);
        _this.handleDragEnd = _this.handleDragEnd.bind(_this);

        _this.state = {
            didMountUniversal: false
        };
        return _this;
    }

    _createClass(Scrollbars, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.addListeners();
            this.update();
            this.componentDidMountUniversal();
        }
    }, {
        key: 'componentDidMountUniversal',
        value: function componentDidMountUniversal() {
            // eslint-disable-line react/sort-comp
            var universal = this.props.universal;

            if (!universal) return;
            this.setState({ didMountUniversal: true });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.update();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.removeListeners();
            (0, raf_1.cancel)(this.requestFrame);
            clearTimeout(this.hideTracksTimeout);
            clearInterval(this.detectScrollingInterval);
        }
    }, {
        key: 'getScrollLeft',
        value: function getScrollLeft() {
            if (!this.view) return 0;
            return this.view.scrollLeft;
        }
    }, {
        key: 'getScrollTop',
        value: function getScrollTop() {
            if (!this.view) return 0;
            return this.view.scrollTop;
        }
    }, {
        key: 'getScrollWidth',
        value: function getScrollWidth() {
            if (!this.view) return 0;
            return this.view.scrollWidth;
        }
    }, {
        key: 'getScrollHeight',
        value: function getScrollHeight() {
            if (!this.view) return 0;
            return this.view.scrollHeight;
        }
    }, {
        key: 'getClientWidth',
        value: function getClientWidth() {
            if (!this.view) return 0;
            return this.view.clientWidth;
        }
    }, {
        key: 'getClientHeight',
        value: function getClientHeight() {
            if (!this.view) return 0;
            return this.view.clientHeight;
        }
    }, {
        key: 'getValues',
        value: function getValues() {
            var _ref2 = this.view || {},
                _ref2$scrollLeft = _ref2.scrollLeft,
                scrollLeft = _ref2$scrollLeft === undefined ? 0 : _ref2$scrollLeft,
                _ref2$scrollTop = _ref2.scrollTop,
                scrollTop = _ref2$scrollTop === undefined ? 0 : _ref2$scrollTop,
                _ref2$scrollWidth = _ref2.scrollWidth,
                scrollWidth = _ref2$scrollWidth === undefined ? 0 : _ref2$scrollWidth,
                _ref2$scrollHeight = _ref2.scrollHeight,
                scrollHeight = _ref2$scrollHeight === undefined ? 0 : _ref2$scrollHeight,
                _ref2$clientWidth = _ref2.clientWidth,
                clientWidth = _ref2$clientWidth === undefined ? 0 : _ref2$clientWidth,
                _ref2$clientHeight = _ref2.clientHeight,
                clientHeight = _ref2$clientHeight === undefined ? 0 : _ref2$clientHeight;

            return {
                left: scrollLeft / (scrollWidth - clientWidth) || 0,
                top: scrollTop / (scrollHeight - clientHeight) || 0,
                scrollLeft: scrollLeft,
                scrollTop: scrollTop,
                scrollWidth: scrollWidth,
                scrollHeight: scrollHeight,
                clientWidth: clientWidth,
                clientHeight: clientHeight
            };
        }
    }, {
        key: 'getThumbHorizontalWidth',
        value: function getThumbHorizontalWidth() {
            var _props = this.props,
                thumbSize = _props.thumbSize,
                thumbMinSize = _props.thumbMinSize;
            var _view = this.view,
                scrollWidth = _view.scrollWidth,
                clientWidth = _view.clientWidth;

            var trackWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
            var width = Math.ceil(clientWidth / scrollWidth * trackWidth);
            if (trackWidth === width) return 0;
            if (thumbSize) return thumbSize;
            return Math.max(width, thumbMinSize);
        }
    }, {
        key: 'getThumbVerticalHeight',
        value: function getThumbVerticalHeight() {
            var _props2 = this.props,
                thumbSize = _props2.thumbSize,
                thumbMinSize = _props2.thumbMinSize;
            var _view2 = this.view,
                scrollHeight = _view2.scrollHeight,
                clientHeight = _view2.clientHeight;

            var trackHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
            var height = Math.ceil(clientHeight / scrollHeight * trackHeight);
            if (trackHeight === height) return 0;
            if (thumbSize) return thumbSize;
            return Math.max(height, thumbMinSize);
        }
    }, {
        key: 'getScrollLeftForOffset',
        value: function getScrollLeftForOffset(offset) {
            var _view3 = this.view,
                scrollWidth = _view3.scrollWidth,
                clientWidth = _view3.clientWidth;

            var trackWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
            var thumbWidth = this.getThumbHorizontalWidth();
            return offset / (trackWidth - thumbWidth) * (scrollWidth - clientWidth);
        }
    }, {
        key: 'getScrollTopForOffset',
        value: function getScrollTopForOffset(offset) {
            var _view4 = this.view,
                scrollHeight = _view4.scrollHeight,
                clientHeight = _view4.clientHeight;

            var trackHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
            var thumbHeight = this.getThumbVerticalHeight();
            return offset / (trackHeight - thumbHeight) * (scrollHeight - clientHeight);
        }
    }, {
        key: 'scrollLeft',
        value: function scrollLeft() {
            var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (!this.view) return;
            this.view.scrollLeft = left;
        }
    }, {
        key: 'scrollTop',
        value: function scrollTop() {
            var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (!this.view) return;
            this.view.scrollTop = top;
        }
    }, {
        key: 'scrollToLeft',
        value: function scrollToLeft() {
            if (!this.view) return;
            this.view.scrollLeft = 0;
        }
    }, {
        key: 'scrollToTop',
        value: function scrollToTop() {
            if (!this.view) return;
            this.view.scrollTop = 0;
        }
    }, {
        key: 'scrollToRight',
        value: function scrollToRight() {
            if (!this.view) return;
            this.view.scrollLeft = this.view.scrollWidth;
        }
    }, {
        key: 'scrollToBottom',
        value: function scrollToBottom() {
            if (!this.view) return;
            this.view.scrollTop = this.view.scrollHeight;
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            /* istanbul ignore if */
            if (typeof document === 'undefined' || !this.view) return;
            var view = this.view,
                trackHorizontal = this.trackHorizontal,
                trackVertical = this.trackVertical,
                thumbHorizontal = this.thumbHorizontal,
                thumbVertical = this.thumbVertical;

            view.addEventListener('scroll', this.handleScroll);
            if (!(0, _getScrollbarWidth2["default"])()) return;
            trackHorizontal.addEventListener('mouseenter', this.handleTrackMouseEnter);
            trackHorizontal.addEventListener('mouseleave', this.handleTrackMouseLeave);
            trackHorizontal.addEventListener('mousedown', this.handleHorizontalTrackMouseDown);
            trackVertical.addEventListener('mouseenter', this.handleTrackMouseEnter);
            trackVertical.addEventListener('mouseleave', this.handleTrackMouseLeave);
            trackVertical.addEventListener('mousedown', this.handleVerticalTrackMouseDown);
            thumbHorizontal.addEventListener('mousedown', this.handleHorizontalThumbMouseDown);
            thumbVertical.addEventListener('mousedown', this.handleVerticalThumbMouseDown);
            window.addEventListener('resize', this.handleWindowResize);
        }
    }, {
        key: 'removeListeners',
        value: function removeListeners() {
            /* istanbul ignore if */
            if (typeof document === 'undefined' || !this.view) return;
            var view = this.view,
                trackHorizontal = this.trackHorizontal,
                trackVertical = this.trackVertical,
                thumbHorizontal = this.thumbHorizontal,
                thumbVertical = this.thumbVertical;

            view.removeEventListener('scroll', this.handleScroll);
            if (!(0, _getScrollbarWidth2["default"])()) return;
            trackHorizontal.removeEventListener('mouseenter', this.handleTrackMouseEnter);
            trackHorizontal.removeEventListener('mouseleave', this.handleTrackMouseLeave);
            trackHorizontal.removeEventListener('mousedown', this.handleHorizontalTrackMouseDown);
            trackVertical.removeEventListener('mouseenter', this.handleTrackMouseEnter);
            trackVertical.removeEventListener('mouseleave', this.handleTrackMouseLeave);
            trackVertical.removeEventListener('mousedown', this.handleVerticalTrackMouseDown);
            thumbHorizontal.removeEventListener('mousedown', this.handleHorizontalThumbMouseDown);
            thumbVertical.removeEventListener('mousedown', this.handleVerticalThumbMouseDown);
            window.removeEventListener('resize', this.handleWindowResize);
            // Possibly setup by `handleDragStart`
            this.teardownDragging();
        }
    }, {
        key: 'handleScroll',
        value: function handleScroll(event) {
            var _this2 = this;

            var _props3 = this.props,
                onScroll = _props3.onScroll,
                onScrollFrame = _props3.onScrollFrame;

            if (onScroll) onScroll(event);
            this.update(function (values) {
                var scrollLeft = values.scrollLeft,
                    scrollTop = values.scrollTop;

                _this2.viewScrollLeft = scrollLeft;
                _this2.viewScrollTop = scrollTop;
                if (onScrollFrame) onScrollFrame(values);
            });
            this.detectScrolling();
        }
    }, {
        key: 'handleScrollStart',
        value: function handleScrollStart() {
            var onScrollStart = this.props.onScrollStart;

            if (onScrollStart) onScrollStart();
            this.handleScrollStartAutoHide();
        }
    }, {
        key: 'handleScrollStartAutoHide',
        value: function handleScrollStartAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.showTracks();
        }
    }, {
        key: 'handleScrollStop',
        value: function handleScrollStop() {
            var onScrollStop = this.props.onScrollStop;

            if (onScrollStop) onScrollStop();
            this.handleScrollStopAutoHide();
        }
    }, {
        key: 'handleScrollStopAutoHide',
        value: function handleScrollStopAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.hideTracks();
        }
    }, {
        key: 'handleWindowResize',
        value: function handleWindowResize() {
            this.update();
        }
    }, {
        key: 'handleHorizontalTrackMouseDown',
        value: function handleHorizontalTrackMouseDown(event) {
            event.preventDefault();
            var target = event.target,
                clientX = event.clientX;

            var _target$getBoundingCl = target.getBoundingClientRect(),
                targetLeft = _target$getBoundingCl.left;

            var thumbWidth = this.getThumbHorizontalWidth();
            var offset = Math.abs(targetLeft - clientX) - thumbWidth / 2;
            this.view.scrollLeft = this.getScrollLeftForOffset(offset);
        }
    }, {
        key: 'handleVerticalTrackMouseDown',
        value: function handleVerticalTrackMouseDown(event) {
            event.preventDefault();
            var target = event.target,
                clientY = event.clientY;

            var _target$getBoundingCl2 = target.getBoundingClientRect(),
                targetTop = _target$getBoundingCl2.top;

            var thumbHeight = this.getThumbVerticalHeight();
            var offset = Math.abs(targetTop - clientY) - thumbHeight / 2;
            this.view.scrollTop = this.getScrollTopForOffset(offset);
        }
    }, {
        key: 'handleHorizontalThumbMouseDown',
        value: function handleHorizontalThumbMouseDown(event) {
            event.preventDefault();
            this.handleDragStart(event);
            var target = event.target,
                clientX = event.clientX;
            var offsetWidth = target.offsetWidth;

            var _target$getBoundingCl3 = target.getBoundingClientRect(),
                left = _target$getBoundingCl3.left;

            this.prevPageX = offsetWidth - (clientX - left);
        }
    }, {
        key: 'handleVerticalThumbMouseDown',
        value: function handleVerticalThumbMouseDown(event) {
            event.preventDefault();
            this.handleDragStart(event);
            var target = event.target,
                clientY = event.clientY;
            var offsetHeight = target.offsetHeight;

            var _target$getBoundingCl4 = target.getBoundingClientRect(),
                top = _target$getBoundingCl4.top;

            this.prevPageY = offsetHeight - (clientY - top);
        }
    }, {
        key: 'setupDragging',
        value: function setupDragging() {
            (0, _domCss2["default"])(document.body, styles$1.disableSelectStyle);
            document.addEventListener('mousemove', this.handleDrag);
            document.addEventListener('mouseup', this.handleDragEnd);
            document.onselectstart = _returnFalse2["default"];
        }
    }, {
        key: 'teardownDragging',
        value: function teardownDragging() {
            (0, _domCss2["default"])(document.body, styles$1.disableSelectStyleReset);
            document.removeEventListener('mousemove', this.handleDrag);
            document.removeEventListener('mouseup', this.handleDragEnd);
            document.onselectstart = undefined;
        }
    }, {
        key: 'handleDragStart',
        value: function handleDragStart(event) {
            this.dragging = true;
            event.stopImmediatePropagation();
            this.setupDragging();
        }
    }, {
        key: 'handleDrag',
        value: function handleDrag(event) {
            if (this.prevPageX) {
                var clientX = event.clientX;

                var _trackHorizontal$getB = this.trackHorizontal.getBoundingClientRect(),
                    trackLeft = _trackHorizontal$getB.left;

                var thumbWidth = this.getThumbHorizontalWidth();
                var clickPosition = thumbWidth - this.prevPageX;
                var offset = -trackLeft + clientX - clickPosition;
                this.view.scrollLeft = this.getScrollLeftForOffset(offset);
            }
            if (this.prevPageY) {
                var clientY = event.clientY;

                var _trackVertical$getBou = this.trackVertical.getBoundingClientRect(),
                    trackTop = _trackVertical$getBou.top;

                var thumbHeight = this.getThumbVerticalHeight();
                var _clickPosition = thumbHeight - this.prevPageY;
                var _offset = -trackTop + clientY - _clickPosition;
                this.view.scrollTop = this.getScrollTopForOffset(_offset);
            }
            return false;
        }
    }, {
        key: 'handleDragEnd',
        value: function handleDragEnd() {
            this.dragging = false;
            this.prevPageX = this.prevPageY = 0;
            this.teardownDragging();
            this.handleDragEndAutoHide();
        }
    }, {
        key: 'handleDragEndAutoHide',
        value: function handleDragEndAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.hideTracks();
        }
    }, {
        key: 'handleTrackMouseEnter',
        value: function handleTrackMouseEnter() {
            this.trackMouseOver = true;
            this.handleTrackMouseEnterAutoHide();
        }
    }, {
        key: 'handleTrackMouseEnterAutoHide',
        value: function handleTrackMouseEnterAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.showTracks();
        }
    }, {
        key: 'handleTrackMouseLeave',
        value: function handleTrackMouseLeave() {
            this.trackMouseOver = false;
            this.handleTrackMouseLeaveAutoHide();
        }
    }, {
        key: 'handleTrackMouseLeaveAutoHide',
        value: function handleTrackMouseLeaveAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.hideTracks();
        }
    }, {
        key: 'showTracks',
        value: function showTracks() {
            clearTimeout(this.hideTracksTimeout);
            (0, _domCss2["default"])(this.trackHorizontal, { opacity: 1 });
            (0, _domCss2["default"])(this.trackVertical, { opacity: 1 });
        }
    }, {
        key: 'hideTracks',
        value: function hideTracks() {
            var _this3 = this;

            if (this.dragging) return;
            if (this.scrolling) return;
            if (this.trackMouseOver) return;
            var autoHideTimeout = this.props.autoHideTimeout;

            clearTimeout(this.hideTracksTimeout);
            this.hideTracksTimeout = setTimeout(function () {
                (0, _domCss2["default"])(_this3.trackHorizontal, { opacity: 0 });
                (0, _domCss2["default"])(_this3.trackVertical, { opacity: 0 });
            }, autoHideTimeout);
        }
    }, {
        key: 'detectScrolling',
        value: function detectScrolling() {
            var _this4 = this;

            if (this.scrolling) return;
            this.scrolling = true;
            this.handleScrollStart();
            this.detectScrollingInterval = setInterval(function () {
                if (_this4.lastViewScrollLeft === _this4.viewScrollLeft && _this4.lastViewScrollTop === _this4.viewScrollTop) {
                    clearInterval(_this4.detectScrollingInterval);
                    _this4.scrolling = false;
                    _this4.handleScrollStop();
                }
                _this4.lastViewScrollLeft = _this4.viewScrollLeft;
                _this4.lastViewScrollTop = _this4.viewScrollTop;
            }, 100);
        }
    }, {
        key: 'raf',
        value: function raf(callback) {
            var _this5 = this;

            if (this.requestFrame) _raf3["default"].cancel(this.requestFrame);
            this.requestFrame = (0, _raf3["default"])(function () {
                _this5.requestFrame = undefined;
                callback();
            });
        }
    }, {
        key: 'update',
        value: function update(callback) {
            var _this6 = this;

            this.raf(function () {
                return _this6._update(callback);
            });
        }
    }, {
        key: '_update',
        value: function _update(callback) {
            var _props4 = this.props,
                onUpdate = _props4.onUpdate,
                hideTracksWhenNotNeeded = _props4.hideTracksWhenNotNeeded;

            var values = this.getValues();
            if ((0, _getScrollbarWidth2["default"])()) {
                var scrollLeft = values.scrollLeft,
                    clientWidth = values.clientWidth,
                    scrollWidth = values.scrollWidth;

                var trackHorizontalWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
                var thumbHorizontalWidth = this.getThumbHorizontalWidth();
                var thumbHorizontalX = scrollLeft / (scrollWidth - clientWidth) * (trackHorizontalWidth - thumbHorizontalWidth);
                var thumbHorizontalStyle = {
                    width: thumbHorizontalWidth,
                    transform: 'translateX(' + thumbHorizontalX + 'px)'
                };
                var scrollTop = values.scrollTop,
                    clientHeight = values.clientHeight,
                    scrollHeight = values.scrollHeight;

                var trackVerticalHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
                var thumbVerticalHeight = this.getThumbVerticalHeight();
                var thumbVerticalY = scrollTop / (scrollHeight - clientHeight) * (trackVerticalHeight - thumbVerticalHeight);
                var thumbVerticalStyle = {
                    height: thumbVerticalHeight,
                    transform: 'translateY(' + thumbVerticalY + 'px)'
                };
                if (hideTracksWhenNotNeeded) {
                    var trackHorizontalStyle = {
                        visibility: scrollWidth > clientWidth ? 'visible' : 'hidden'
                    };
                    var trackVerticalStyle = {
                        visibility: scrollHeight > clientHeight ? 'visible' : 'hidden'
                    };
                    (0, _domCss2["default"])(this.trackHorizontal, trackHorizontalStyle);
                    (0, _domCss2["default"])(this.trackVertical, trackVerticalStyle);
                }
                (0, _domCss2["default"])(this.thumbHorizontal, thumbHorizontalStyle);
                (0, _domCss2["default"])(this.thumbVertical, thumbVerticalStyle);
            }
            if (onUpdate) onUpdate(values);
            if (typeof callback !== 'function') return;
            callback(values);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this7 = this;

            var scrollbarWidth = (0, _getScrollbarWidth2["default"])();
            /* eslint-disable no-unused-vars */

            var _props5 = this.props,
                onScroll = _props5.onScroll,
                onScrollFrame = _props5.onScrollFrame,
                onScrollStart = _props5.onScrollStart,
                onScrollStop = _props5.onScrollStop,
                onUpdate = _props5.onUpdate,
                renderView = _props5.renderView,
                renderTrackHorizontal = _props5.renderTrackHorizontal,
                renderTrackVertical = _props5.renderTrackVertical,
                renderThumbHorizontal = _props5.renderThumbHorizontal,
                renderThumbVertical = _props5.renderThumbVertical,
                tagName = _props5.tagName,
                hideTracksWhenNotNeeded = _props5.hideTracksWhenNotNeeded,
                autoHide = _props5.autoHide,
                autoHideTimeout = _props5.autoHideTimeout,
                autoHideDuration = _props5.autoHideDuration,
                thumbSize = _props5.thumbSize,
                thumbMinSize = _props5.thumbMinSize,
                universal = _props5.universal,
                autoHeight = _props5.autoHeight,
                autoHeightMin = _props5.autoHeightMin,
                autoHeightMax = _props5.autoHeightMax,
                style = _props5.style,
                children = _props5.children,
                props = _objectWithoutProperties(_props5, ['onScroll', 'onScrollFrame', 'onScrollStart', 'onScrollStop', 'onUpdate', 'renderView', 'renderTrackHorizontal', 'renderTrackVertical', 'renderThumbHorizontal', 'renderThumbVertical', 'tagName', 'hideTracksWhenNotNeeded', 'autoHide', 'autoHideTimeout', 'autoHideDuration', 'thumbSize', 'thumbMinSize', 'universal', 'autoHeight', 'autoHeightMin', 'autoHeightMax', 'style', 'children']);
            /* eslint-enable no-unused-vars */

            var didMountUniversal = this.state.didMountUniversal;


            var containerStyle = _extends({}, styles$1.containerStyleDefault, autoHeight && _extends({}, styles$1.containerStyleAutoHeight, {
                minHeight: autoHeightMin,
                maxHeight: autoHeightMax
            }), style);

            var viewStyle = _extends({}, styles$1.viewStyleDefault, {
                // Hide scrollbars by setting a negative margin
                marginRight: scrollbarWidth ? -scrollbarWidth : 0,
                marginBottom: scrollbarWidth ? -scrollbarWidth : 0
            }, autoHeight && _extends({}, styles$1.viewStyleAutoHeight, {
                // Add scrollbarWidth to autoHeight in order to compensate negative margins
                minHeight: (0, _isString2["default"])(autoHeightMin) ? 'calc(' + autoHeightMin + ' + ' + scrollbarWidth + 'px)' : autoHeightMin + scrollbarWidth,
                maxHeight: (0, _isString2["default"])(autoHeightMax) ? 'calc(' + autoHeightMax + ' + ' + scrollbarWidth + 'px)' : autoHeightMax + scrollbarWidth
            }), autoHeight && universal && !didMountUniversal && {
                minHeight: autoHeightMin,
                maxHeight: autoHeightMax
            }, universal && !didMountUniversal && styles$1.viewStyleUniversalInitial);

            var trackAutoHeightStyle = {
                transition: 'opacity ' + autoHideDuration + 'ms',
                opacity: 0
            };

            var trackHorizontalStyle = _extends({}, styles$1.trackHorizontalStyleDefault, autoHide && trackAutoHeightStyle, (!scrollbarWidth || universal && !didMountUniversal) && {
                display: 'none'
            });

            var trackVerticalStyle = _extends({}, styles$1.trackVerticalStyleDefault, autoHide && trackAutoHeightStyle, (!scrollbarWidth || universal && !didMountUniversal) && {
                display: 'none'
            });

            return (0, React.createElement)(tagName, _extends({}, props, { style: containerStyle, ref: function ref(_ref3) {
                    _this7.container = _ref3;
                } }), [(0, React.cloneElement)(renderView({ style: viewStyle }), { key: 'view', ref: function ref(_ref4) {
                    _this7.view = _ref4;
                } }, children), (0, React.cloneElement)(renderTrackHorizontal({ style: trackHorizontalStyle }), { key: 'trackHorizontal', ref: function ref(_ref5) {
                    _this7.trackHorizontal = _ref5;
                } }, (0, React.cloneElement)(renderThumbHorizontal({ style: styles$1.thumbHorizontalStyleDefault }), { ref: function ref(_ref6) {
                    _this7.thumbHorizontal = _ref6;
                } })), (0, React.cloneElement)(renderTrackVertical({ style: trackVerticalStyle }), { key: 'trackVertical', ref: function ref(_ref7) {
                    _this7.trackVertical = _ref7;
                } }, (0, React.cloneElement)(renderThumbVertical({ style: styles$1.thumbVerticalStyleDefault }), { ref: function ref(_ref8) {
                    _this7.thumbVertical = _ref8;
                } }))]);
        }
    }]);

    return Scrollbars;
}(React.Component);

exports["default"] = Scrollbars;


Scrollbars.propTypes = {
    onScroll: _propTypes2["default"].func,
    onScrollFrame: _propTypes2["default"].func,
    onScrollStart: _propTypes2["default"].func,
    onScrollStop: _propTypes2["default"].func,
    onUpdate: _propTypes2["default"].func,
    renderView: _propTypes2["default"].func,
    renderTrackHorizontal: _propTypes2["default"].func,
    renderTrackVertical: _propTypes2["default"].func,
    renderThumbHorizontal: _propTypes2["default"].func,
    renderThumbVertical: _propTypes2["default"].func,
    tagName: _propTypes2["default"].string,
    thumbSize: _propTypes2["default"].number,
    thumbMinSize: _propTypes2["default"].number,
    hideTracksWhenNotNeeded: _propTypes2["default"].bool,
    autoHide: _propTypes2["default"].bool,
    autoHideTimeout: _propTypes2["default"].number,
    autoHideDuration: _propTypes2["default"].number,
    autoHeight: _propTypes2["default"].bool,
    autoHeightMin: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
    autoHeightMax: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
    universal: _propTypes2["default"].bool,
    style: _propTypes2["default"].object,
    children: _propTypes2["default"].node
};

Scrollbars.defaultProps = {
    renderView: defaultRenderElements.renderViewDefault,
    renderTrackHorizontal: defaultRenderElements.renderTrackHorizontalDefault,
    renderTrackVertical: defaultRenderElements.renderTrackVerticalDefault,
    renderThumbHorizontal: defaultRenderElements.renderThumbHorizontalDefault,
    renderThumbVertical: defaultRenderElements.renderThumbVerticalDefault,
    tagName: 'div',
    thumbMinSize: 30,
    hideTracksWhenNotNeeded: false,
    autoHide: false,
    autoHideTimeout: 1000,
    autoHideDuration: 200,
    autoHeight: false,
    autoHeightMin: 0,
    autoHeightMax: 200,
    universal: false
};
});

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scrollbars = undefined;



var _Scrollbars2 = _interopRequireDefault(Scrollbars_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _Scrollbars2["default"];
exports.Scrollbars = _Scrollbars2["default"];
});

var index = /*@__PURE__*/unwrapExports(lib);

var Scrollbars = (function (props) {
  return /*#__PURE__*/React.createElement(index.Scrollbars, props);
});

export { Element$1 as Element, GlobalStateProvider, Scrollbars, useGlobalState };
