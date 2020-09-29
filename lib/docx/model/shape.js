'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _drawing = require('./drawing');

var _drawing2 = _interopRequireDefault(_drawing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shape = function (_require) {
  _inherits(Shape, _require);

  function Shape() {
    _classCallCheck(this, Shape);

    return _possibleConstructorReturn(this, (Shape.__proto__ || Object.getPrototypeOf(Shape)).apply(this, arguments));
  }

  _createClass(Shape, [{
    key: 'getDirectStyle',
    value: function getDirectStyle() {
      return new this.constructor.Properties(this.wXml, this.wDoc, this);
    }
  }, {
    key: '_getValidChildren',
    value: function _getValidChildren() {
      return this.wXml.$('txbxContent');
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'shape';
    }
  }]);

  return Shape;
}(require('../model'));

exports.default = Shape;


function phClr(o, clr, a) {
  for (var i in o) {
    switch (_typeof(a = o[i])) {
      case 'string':
        if (a == 'phClr') o[i] = clr;
        break;
      case 'object':
        phClr(a, clr);
    }
  }
  return o;
}

var naming = null;
Shape.Properties = function (_Style$Properties) {
  _inherits(Properties, _Style$Properties);

  function Properties() {
    _classCallCheck(this, Properties);

    return _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));
  }

  _createClass(Properties, [{
    key: '_getValidChildren',
    value: function _getValidChildren(t) {
      var children = ((t = this.wXml.$('>style>*')) && t.asArray() || []).concat(this.wXml.$('>spPr>*, >bodyPr>*').asArray());
      var bodyPr = this.wXml.$1('bodyPr');
      if (bodyPr) {
        for (var i = 0, attrs = bodyPr.attributes, len = attrs.length; i < len; i++) {
          children.push(attrs[i]);
        }
      }
      return children;
    }
  }, {
    key: 'lnRef',
    value: function lnRef(x) {
      return phClr(this.wDoc.getFormatTheme().line(x.attr('idx')), this.solidFill(x));
    }
  }, {
    key: 'fillRef',
    value: function fillRef(x) {
      return phClr(this.wDoc.getFormatTheme().fill(x.attr('idx')), this.solidFill(x));
    }
  }, {
    key: 'fontRef',
    value: function fontRef(x) {
      return {
        color: this.solidFill(x),
        family: this.wDoc.getFormatTheme().font(x.attr('idx'))
      };
    }
  }, {
    key: 'effectRef',
    value: function effectRef() {}
  }, {
    key: 'spAutoFit',
    value: function spAutoFit() {
      return true;
    }
  }, {
    key: 'lIns',
    value: function lIns(x) {
      if (x = parseInt(x.value)) return this.pt2Px(this.asPt(x, 'cm'));
      return this.EMPTY;
    }
  }, {
    key: 'tIns',
    value: function tIns(x) {
      return this.lIns(x);
    }
  }, {
    key: 'rIns',
    value: function rIns(x) {
      return this.lIns(x);
    }
  }, {
    key: 'bIns',
    value: function bIns(x) {
      return this.lIns(x);
    }
  }, {
    key: 'anchor',
    value: function anchor(x) {
      switch (x.value) {
        case 'b':
          return 'bottom';
        case 't':
          return 'top';
        default:
          return 'middle';
      }
    }
  }, {
    key: 'vert',
    value: function vert(x) {
      switch (x.value) {
        case 'horz':
          return this.EMPTY;
        case 'eaVert':
          return 90;
        case 'vert270':
          return 270;
        default:
          console.warn('not support');
          return this.EMPTY;
      }
    }
  }], [{
    key: 'mixinSpProperties',
    value: function mixinSpProperties() {
      Object.assign(this.naming, {
        custGeom: 'path',
        prstGeom: 'path'
      });

      Object.assign(this.prototype, _drawing2.default.SpProperties);

      delete this.mixinSpProperties;
    }
  }, {
    key: 'naming',
    get: function get() {
      if (!naming) naming = Object.assign({}, _drawing2.default.Properties.naming, _drawing2.default.SpProperties.naming);
      return naming;
    }
  }]);

  return Properties;
}(_style2.default.Properties);

Shape.Properties.mixinSpProperties();
module.exports = exports['default'];