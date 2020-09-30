'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _paragraph = require('./style/paragraph');

var _paragraph2 = _interopRequireDefault(_paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var paragraph = function (_require) {
  _inherits(paragraph, _require);

  function paragraph() {
    _classCallCheck(this, paragraph);

    return _possibleConstructorReturn(this, (paragraph.__proto__ || Object.getPrototypeOf(paragraph)).apply(this, arguments));
  }

  _createClass(paragraph, [{
    key: 'getStyleId',
    value: function getStyleId(a) {
      return this._val('>pPr>pStyle') || (a = this.wDoc.style.getDefault(_paragraph2.default.type)) && a.id;
    }
  }, {
    key: 'getNamedStyle',
    value: function getNamedStyle() {
      return this.wDoc.style.get(this.getStyleId());
    }
  }, {
    key: 'getDirectStyle',
    value: function getDirectStyle(pr) {
      if (pr = this.wXml.$2('>pPr')) return new _paragraph2.default.Properties(pr, this.wDoc, this);
    }
  }, {
    key: '_shouldIgnore',
    value: function _shouldIgnore(wXml) {
      return wXml.localName == 'pPr';
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'paragraph';
    }
  }]);

  return paragraph;
}(require('../model'));

exports.default = paragraph;
module.exports = exports['default'];