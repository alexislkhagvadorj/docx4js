'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('../style');

var _style2 = _interopRequireDefault(_style);

var _inline = require('./inline');

var _inline2 = _interopRequireDefault(_inline);

var _numbering = require('./numbering');

var _numbering2 = _interopRequireDefault(_numbering);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paragraph = function (_Style) {
  _inherits(Paragraph, _Style);

  function Paragraph() {
    _classCallCheck(this, Paragraph);

    return _possibleConstructorReturn(this, (Paragraph.__proto__ || Object.getPrototypeOf(Paragraph)).apply(this, arguments));
  }

  _createClass(Paragraph, [{
    key: 'getOutlineLevel',
    value: function getOutlineLevel(v) {
      if ((v = this._val('outlineLvl')) != null) return parseInt(v);
      if ((v = this.getParentStyle()) != null && v.getOutlineLevel) return v.getOutlineLevel();
      return -1;
    }
  }, {
    key: 'getNumId',
    value: function getNumId(v) {
      if ((v = this._val('numId')) != null) return v;
      if ((v = this.getParentStyle()) != null && v.getNumId) return v.getNumId();
      return -1;
    }
  }, {
    key: 'asNumberingStyle',
    value: function asNumberingStyle() {
      var _Numbering$prototype$;

      return (_Numbering$prototype$ = _numbering2.default.prototype.asNumberingStyle).call.apply(_Numbering$prototype$, [this].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: '_iterate',
    value: function _iterate(f, factories, visitors) {
      var pr = this.wXml.$2('pPr');
      pr && new this.constructor.Properties(pr, this.wDoc, this).parse(visitors);

      (pr = this.wXml.$2('rPr')) && new _inline2.default.Properties(pr, this.wDoc, this).parse(visitors);

      (pr = this.wXml.$2('numPr')) && new _numbering2.default.Properties(pr, this.wDoc, this).parse(visitors);

      (pr = this.wXml.$2('framePr')) && new this.constructor.FrameProperties(pr, this.wDoc, this).parse(visitors);
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'style.paragraph';
    }
  }, {
    key: 'Properties',
    get: function get() {
      return Properties;
    }
  }, {
    key: 'FrameProperties',
    get: function get() {
      return FrameProperties;
    }
  }]);

  return Paragraph;
}(_style2.default);

exports.default = Paragraph;

var Properties = function (_Style$Properties) {
  _inherits(Properties, _Style$Properties);

  function Properties() {
    _classCallCheck(this, Properties);

    return _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));
  }

  _createClass(Properties, [{
    key: 'jc',
    value: function jc(x) {
      return x.attr('w:val');
    }
  }, {
    key: 'ind',
    value: function ind(x) {
      var _this3 = this;

      return this.asObject(x, function (a) {
        return _this3.pt2Px(_this3.asPt(a));
      });
    }
  }, {
    key: 'spacing',
    value: function spacing(x) {
      var r = this.asObject(x),
          o = {};

      if (!r.beforeAutospacing && r.beforeLines) o.top = this.pt2Px(this.asPt(r.beforeLines));else if (r.before) o.top = this.pt2Px(this.asPt(r.before));

      if (!r.afterAutospacing && r.afterLines) o.bottom = this.pt2Px(this.asPt(r.afterLines));else if (r.after) o.bottom = this.pt2Px(this.asPt(r.after));

      if (!r.line) return o;

      switch (x.lineRule) {
        case 'atLeast':
        case 'exact':
          o.lineHeight = this.pt2Px(this.asPt(x.line));
          break;
        case 'auto':
        default:
          o.lineHeight = parseInt(r.line) * 100 / 240 + '%';
      }
      o.lineRule = x.lineRule;
      return o;
    }
  }, {
    key: 'pBdr',
    value: function pBdr(x) {
      var r = {};
      var bdr = _inline2.default.Properties.prototype.bdr.bind(this);
      Array.from(x.childNodes).forEach(function (a) {
        return a.localName && (r[a.localName] = bdr(a));
      });
      return r;
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'paragraph';
    }
  }]);

  return Properties;
}(_style2.default.Properties);

var FrameProperties = function (_Style$Properties2) {
  _inherits(FrameProperties, _Style$Properties2);

  function FrameProperties() {
    _classCallCheck(this, FrameProperties);

    return _possibleConstructorReturn(this, (FrameProperties.__proto__ || Object.getPrototypeOf(FrameProperties)).apply(this, arguments));
  }

  _createClass(FrameProperties, null, [{
    key: 'type',
    get: function get() {
      return 'frame';
    }
  }]);

  return FrameProperties;
}(_style2.default.Properties);

module.exports = exports['default'];