'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = require('./field');

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Date = function (_Field) {
  _inherits(Date, _Field);

  function Date() {
    _classCallCheck(this, Date);

    return _possibleConstructorReturn(this, (Date.__proto__ || Object.getPrototypeOf(Date)).apply(this, arguments));
  }

  _createClass(Date, null, [{
    key: 'type',
    get: function get() {
      return 'field.date';
    }
  }, {
    key: 'FieldCode',
    get: function get() {
      return FieldCode;
    }
  }]);

  return Date;
}(_field2.default);

exports.default = Date;

var FieldCode = function (_Code) {
  _inherits(FieldCode, _Code);

  function FieldCode() {
    _classCallCheck(this, FieldCode);

    return _possibleConstructorReturn(this, (FieldCode.__proto__ || Object.getPrototypeOf(FieldCode)).apply(this, arguments));
  }

  _createClass(FieldCode, [{
    key: 'parse',
    value: function parse() {
      var option = null;
      while (option = this.nextSwitch()) {
        switch (option.type) {
          case '@':
            var i = option.data.indexOf('"');
            if (i != -1) this.format = option.data.substring(0, i);else this.format = option.data;
            break;
        }
      }
    }
  }]);

  return FieldCode;
}(_field.FieldCode);

module.exports = exports['default'];