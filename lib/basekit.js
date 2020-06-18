import React from 'react';
import { pipe, find, head, pickBy, test, pick, keys, mapObjIndexed, includes, cond, isNil, identity, is, prop, T, reduce, when, assoc, mergeRight } from 'ramda';
import Box from 'ui-box';
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

function useDeviceInfo () {
  var _React$useState = React.useState({
    width: 0,
    device: "desktop"
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  React.useEffect(function () {
    var updateState = function updateState() {
      return setState({
        width: window.innerWidth,
        device: pipe(find(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              device = _ref2[0],
              width = _ref2[1];

          return window.innerWidth <= width;
        }), head)([["mobile", 480], ["tablet", 768], ["desktop", 1024], ["hd", Infinity]])
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

var Element = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
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
Element.displayName = "Element";
Element.defaultProps = {
  display: "flex",
  flexDirection: "column",
  position: "relative"
};

export { Element, GlobalStateProvider, useGlobalState };
