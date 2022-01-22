"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = popup;

var _react = _interopRequireDefault(require("react"));

var _button = _interopRequireDefault(require("./button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function popup(_ref) {
  let {
    title = 'Are u sure Remove this?',
    ok = 'yes',
    cancel = 'cancel',
    children,
    dynamicIndex,
    staticIndex,
    visible,
    onCancel,
    onOk
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: 'popup_full'
  }, children, dynamicIndex == staticIndex && /*#__PURE__*/_react.default.createElement("div", {
    className: visible ? 'popup_box_show' : 'popup_box_none'
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: 'title_popup'
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: 'footer_pupup'
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: onCancel,
    className: 'btn_popup',
    type: 'warning'
  }, cancel), /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: onOk,
    className: 'btn_popup',
    type: 'danger'
  }, ok)))));
}