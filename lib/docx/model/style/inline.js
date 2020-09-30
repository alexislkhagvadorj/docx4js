'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('../style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inline = function (_Style) {
  _inherits(Inline, _Style);

  function Inline() {
    _classCallCheck(this, Inline);

    return _possibleConstructorReturn(this, (Inline.__proto__ || Object.getPrototypeOf(Inline)).apply(this, arguments));
  }

  _createClass(Inline, [{
    key: '_iterate',
    value: function _iterate(f, factories, visitors) {
      var pr = this.wXml.$2('>rPr');
      pr && new this.constructor.Properties(pr, this.wDoc, this).parse(visitors);
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'style.inline';
    }
  }]);

  return Inline;
}(_style2.default);

Inline.Properties = function (_Style$Properties) {
  _inherits(_class, _Style$Properties);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'rFonts',
    value: function rFonts(x) {
      var t, ascii, asia;
      if (t = x.attr('w:ascii')) ascii = t;else if (t = x.attr('w:asciiTheme')) ascii = this.wDoc.getFontTheme().get(t);

      if (t = x.attr('w:eastAsia')) asia = t;else if (t = x.attr('w:eastAsiaTheme')) asia = this.wDoc.getFontTheme().get(t);
      if (ascii || asia) return { ascii: ascii, asia: asia };
    }
  }, {
    key: 'b',
    value: function b(x) {
      return this.asToggle(x);
    }
  }, {
    key: 'sz',
    value: function sz(x) {
      return this.pt2Px(parseFloat(x.attr('w:val')) / 2);
    }
  }, {
    key: 'color',
    value: function color(x) {
      return this.asColor(x.attr('w:val') || this.wDoc.getColorTheme().get(x.attr('w:themeColor')));
    }
  }, {
    key: 'i',
    value: function i(x) {
      return this.asToggle(x);
    }
  }, {
    key: 'vanish',
    value: function vanish(x) {
      return this.asToggle(x);
    }
  }, {
    key: 'u',
    value: function u(x) {
      return this.asObject(x);
    }
  }, {
    key: 'bdr',
    value: function bdr(x) {
      var border = this.asObject(x);
      border.sz && (border.sz = border.sz / 8);
      border.color && (border.color = this.asColor(border.color));
      return border;
    }
  }, {
    key: 'lang',
    value: function lang(x) {
      return x.attr('w:val');
    }
  }, {
    key: 'vertAlign',
    value: function vertAlign(x) {
      return x.attr('w:val');
    }
  }, {
    key: 'highlight',
    value: function highlight(x) {
      return this.asColor(x.attr('w:val'));
    }
  }, {
    key: 'kern',
    value: function kern(x) {
      //word spacing
      return parseInt(x.attr('w:val')) / 2;
    }
  }, {
    key: 'w',
    value: function w(x) {
      //char scale
      return parseInt(x.attr('w:val')) / 100.0;
    }
  }, {
    key: 'spacing',
    value: function spacing(x) {
      //char spacing
      return this.pt2Px(this.asPt(x.attr('w:val')));
    }
  }, {
    key: 'position',
    value: function position(x) {
      //baseline shift
      return this.pt2Px(this.asPt(x.attr('w:val')));
    }
  }, {
    key: 'smallCaps',
    value: function smallCaps() {
      return true;
    }
  }, {
    key: 'asToggle',
    value: function asToggle(x) {
      var val = x.attr('w:val');
      if (!val) {
        return -1;
      } else {
        return parseInt(val);
      }
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'inline';
    }
  }]);

  return _class;
}(_style2.default.Properties);

exports.default = Inline;
module.exports = exports['default'];