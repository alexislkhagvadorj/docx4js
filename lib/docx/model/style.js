'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RGB = /([a-fA-F0-9]{2}?){3}?/;

var Style = function (_require) {
  _inherits(Style, _require);

  function Style(wXml, wDoc, mParent) {
    _classCallCheck(this, Style);

    var _this = _possibleConstructorReturn(this, (Style.__proto__ || Object.getPrototypeOf(Style)).apply(this, arguments));

    if (wXml.attr('w:default') == '1') wDoc.style.setDefault(_this);
    _this.name = _this._val('name');
    if (_this.id = _this._attr('w:styleId')) wDoc.style.set(_this);
    return _this;
  }

  _createClass(Style, [{
    key: 'getParentStyle',
    value: function getParentStyle() {
      return this.wDoc.style.get(this._val('basedOn'));
    }
  }, {
    key: 'isDefault',
    value: function isDefault() {
      return this.wXml.attr('w:default') == '1';
    }
  }, {
    key: 'getNumId',
    value: function getNumId() {
      return -1;
    }
  }, {
    key: 'getOutlineLevel',
    value: function getOutlineLevel() {
      return -1;
    }
  }]);

  return Style;
}(require('../model'));

exports.default = Style;


var naming = {};
Style.Properties = function (_require2) {
  _inherits(Properties, _require2);

  _createClass(Properties, null, [{
    key: 'type',
    get: function get() {
      return null;
    }
  }, {
    key: 'naming',
    get: function get() {
      return naming;
    }
  }]);

  function Properties() {
    _classCallCheck(this, Properties);

    var _this2 = _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));

    _this2.values = {};
    return _this2;
  }

  _createClass(Properties, [{
    key: 'parse',

    //use parent visitor to visitor style nodes and attributes
    value: function parse(visitors) {
      var _this3 = this;

      var values = this.values,
          naming = this.constructor.naming,
          type = this.constructor.type,
          t;
      visitors.forEach(function (visitor) {
        [_this3._getValidChildren(), _this3.wXml.attributes].forEach(function (children) {
          for (var len = children.length, i = 0; i < len; i++) {
            var node = children[i],
                name = node.localName;
            if (values[name] == undefined) {
              if (typeof _this3[name] == 'function') values[name] = _this3[name](node);else if (node.attr && (t = node.attr('w:val')))
                //lazy default
                values[name] = t;
            }
            values[name] != _this3.EMPTY && visitor.visit(values[name], naming[name] || name, type);
          }
        });
      });
    }
  }, {
    key: '_getValidChildren',
    value: function _getValidChildren() {
      return this.wXml.childNodes;
    }
  }, {
    key: 'basedOn',
    value: function basedOn(x) {
      return x.attr('w:val');
    }
  }, {
    key: 'asColor',
    value: function asColor(v) {
      if (!v || v.length == 0 || v == 'auto') return '#000000';
      v = v.split(' ')[0];
      return v.charAt(0) == '#' ? v : RGB.test(v) ? '#' + v : v;
    }
  }, {
    key: 'shadeColor',
    value: function shadeColor(color, percent) {
      if (!RGB.test(color)) return color;
      var R = parseInt(color.substring(1, 3), 16);
      var G = parseInt(color.substring(3, 5), 16);
      var B = parseInt(color.substring(5, 7), 16);

      R = parseInt(R * (100 + percent) / 100);
      G = parseInt(G * (100 + percent) / 100);
      B = parseInt(B * (100 + percent) / 100);

      R = R < 255 ? R : 255;
      G = G < 255 ? G : 255;
      B = B < 255 ? B : 255;

      var RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16);
      var GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16);
      var BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16);

      return '#' + RR + GG + BB;
    }
  }, {
    key: 'asObject',
    value: function asObject(x, f) {
      var o = {};
      for (var i = 0, attrs = x.attributes, len = attrs.length; i < len; i++) {
        o[attrs[i].localName] = f ? f(attrs[i].value) : attrs[i].value;
      }return o;
    }
  }, {
    key: 'asPt',
    value: function asPt(x, type) {
      switch (type) {
        case 'cm':
          return parseInt(x) * 28.3464567 / 360000;
        default:
          //dxa
          return parseInt(x) / 20.0;
      }
    }
  }, {
    key: 'pt2Px',
    value: function pt2Px(x) {
      if (typeof x == 'string') x = parseFloat(x.replace('pt', ''));
      return Math.floor(x * 96 / 72);
    }
  }, {
    key: 'EMPTY',
    get: function get() {
      return -999;
    }
  }]);

  return Properties;
}(require('../model'));
module.exports = exports['default'];