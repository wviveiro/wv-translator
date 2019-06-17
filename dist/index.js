"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component = function Component() {
  return _react.default.createElement("div", {
    className: "my-first-component"
  }, _react.default.createElement("h2", null, "This is my Component!"), _react.default.createElement("hr", null), _react.default.createElement("p", null, "Hello World! Edit this file to build your own component"), _react.default.createElement("h4", null, "Tips to build your own component:"), _react.default.createElement("hr", null), _react.default.createElement("ol", null, _react.default.createElement("li", null, _react.default.createElement("strong", null, "Javascript/React code:"), " All the code present in the folder ", _react.default.createElement("code", null, "src/lib"), " will be compiled and added to the folder ", _react.default.createElement("code", null, "dist"), ".", _react.default.createElement("br", null), "Your ", _react.default.createElement("code", null, "package.json"), " has been set with ", _react.default.createElement("code", null, "dist/index.js"), " as main script."), _react.default.createElement("li", null, _react.default.createElement("strong", null, "Your scss files:"), " All css you need has to be present in the file ", _react.default.createElement("code", null, "src/styles/index.scss"), ". You can import other scss files in this file if you want to split your code.", _react.default.createElement("br", null), "The css will be compiled and added to the folder ", _react.default.createElement("code", null, "dist/styles/index.css")), _react.default.createElement("li", null, _react.default.createElement("strong", null, "The Playground:"), " the playgrond is used to test your component. the files ", _react.default.createElement("code", null, "src/lib/index.jsx"), " and ", _react.default.createElement("code", null, "src/styles/index.scss"), " are included in the playground, so you can test your component with ", _react.default.createElement("code", null, "npm start")), _react.default.createElement("li", null, _react.default.createElement("strong", null, "Building my component:"), " Start editing your ", _react.default.createElement("code", null, "src/lib/index.jsx"), " and ", _react.default.createElement("code", null, "src/styles/index.scss"), " to build your component! Once your finish, run ", _react.default.createElement("code", null, "npm run build"), " to compile your component.")), _react.default.createElement("p", null, "You can publish this entire project. The ", _react.default.createElement("strong", null, "development"), " dependencies are ignored through ", _react.default.createElement("code", null, ".gitignore"), " and ", _react.default.createElement("code", null, ".npmignore")), _react.default.createElement("p", null, "Happy hack!"));
};

var _default = Component;
exports.default = _default;