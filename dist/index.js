"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var translate = function translate(dictionary) {
  return function (phrase) {
    if (!phrase) return '';
    var t = dictionary.find(function (d) {
      return d.from === phrase;
    });

    if (process.env.NODE_ENV === 'development' && !t) {
      console.log('Translation not found for: ', phrase);
    }

    return t && t.to ? t.to : phrase;
  };
};

var createDictionary = function createDictionary(dictionary) {
  var t = translate(dictionary);

  var Translator = function Translator(props) {
    var value = props.value;

    var _useState = (0, _react.useState)(''),
        _useState2 = _slicedToArray(_useState, 2),
        translation = _useState2[0],
        setTranslation = _useState2[1];

    var _useState3 = (0, _react.useState)(''),
        _useState4 = _slicedToArray(_useState3, 2),
        realValue = _useState4[0],
        setRealValue = _useState4[1];

    (0, _react.useEffect)(function () {
      if (value !== realValue) {
        setRealValue(value);
        setTranslation(t(value));
      }
    }, [value, realValue]);
    return translation;
  };

  return Translator;
};

var _default = createDictionary;
exports.default = _default;