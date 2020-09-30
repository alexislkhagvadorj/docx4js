'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drawing = function (_require) {
  _inherits(Drawing, _require);

  function Drawing(wXml) {
    _classCallCheck(this, Drawing);

    var _this = _possibleConstructorReturn(this, (Drawing.__proto__ || Object.getPrototypeOf(Drawing)).apply(this, arguments));

    _this.wDrawing = null;
    return _this;
  }

  _createClass(Drawing, [{
    key: 'getDirectStyle',
    value: function getDirectStyle() {
      return new this.constructor.Properties(this.wDrawing, this.wDoc, this);
    }
  }, {
    key: '_getValidChildren',
    value: function _getValidChildren() {
      return [];
    }
  }]);

  return Drawing;
}(require('../model'));

exports.default = Drawing;


Drawing.Properties = function (_Style$Properties) {
  _inherits(Properties, _Style$Properties);

  function Properties() {
    _classCallCheck(this, Properties);

    return _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));
  }

  _createClass(Properties, [{
    key: '_getValidChildren',
    value: function _getValidChildren(t) {
      return [this.wXml.$2('extent'), this.wXml.$2('effectExtent')];
    }
  }, {
    key: 'extent',
    value: function extent(x) {
      //inline and anchor
      return {
        width: this.pt2Px(this.asPt(x.attr('cx'), 'cm')),
        height: this.pt2Px(this.asPt(x.attr('cy'), 'cm'))
      };
    }
  }, {
    key: 'effectExtent',
    value: function effectExtent(x) {
      var _this3 = this;

      return this.asObject(x, function (x) {
        return _this3.pt2Px(_this3.asPt(x, 'cm'));
      });
    }
  }, {
    key: 'distT',
    value: function distT(x) {
      if (x = parseInt(x.value)) return this.pt2Px(this.asPt(x, 'cm'));
      return this.EMPTY;
    }
  }, {
    key: 'distB',
    value: function distB(x) {
      return this.distT(x);
    }
  }, {
    key: 'distR',
    value: function distR(x) {
      return this.distT(x);
    }
  }, {
    key: 'distL',
    value: function distL(x) {
      return this.distT(x);
    }
  }], [{
    key: 'mixinSpProperties',
    value: function mixinSpProperties() {
      Object.assign(this.naming, {
        custGeom: 'path',
        prstGeom: 'path'
      });

      Object.assign(this.prototype, Drawing.SpProperties);
    }
  }]);

  return Properties;
}(_style2.default.Properties);

Drawing.SpProperties = {
  xfrm: function xfrm(x) {
    var ext = x.$2('ext'),
        offset = x.$2('off');
    return this.world = {
      width: this.pt2Px(this.asPt(ext.attr('cx'), 'cm')),
      height: this.pt2Px(this.asPt(ext.attr('cy'), 'cm')),
      x: this.pt2Px(this.asPt(offset.attr('x'), 'cm')),
      y: this.pt2Px(this.asPt(offset.attr('y'), 'cm')),
      rotation: parseInt(x.attr('rot') || 0) / 60000
    };
  },
  solidFill: function solidFill(x) {
    var elColor = x.firstChild;
    if (elColor) {
      var color = this.asColor(elColor.attr('val')),
          t;
      if (color == 'phClr') return 'phClr';

      switch (elColor.localName) {
        case 'schemeClr':
          color = this.wDoc.getColorTheme().get(color);
          break;
      }

      if (t = elColor.$2('shade')) color = this.shadeColor(color, -1 * parseInt(t.attr('val')) / 1000);

      if (t = elColor.$2('lumOff')) color = this.shadeColor(color, -1 * parseInt(t.attr('val')) / 1000);

      return color;
    }
  },
  noFill: function noFill(x) {
    return 1;
  },
  gradFill: function gradFill(x) {
    var type = x.$2('lin,path'),
        o = this.asObject(type),
        stops = [];
    for (var gs = x.$1('gs'), a, i = 0, len = gs.length; i < len; i++) {
      stops.push({
        position: parseInt(gs[i].attr('pos')) / 1000,
        color: this.solidFill(gs[i])
      });
    }o.ang && (o.angel = parseInt(o.ang) / 60000, delete o.ang);
    o.path && (o.rect = this.asObject(type.firstChild, function (x) {
      return parseInt(x) / 1000;
    }));
    o.path = type.localName == 'lin' ? 'linear' : o.path;
    o.stops = stops;
    return o;
  },
  ln: function ln(x) {
    if (x.$2('noFill')) return { width: 0 };

    var o = this.asObject(x),
        t;

    (t = x.$2('solidFill')) && (o.color = this.solidFill(t));

    (t = o.w) && (o.width = this.asPt(t, 'cm')) && delete o.w;
    (t = x.$2('prstDash')) && (o.dash = t.attr('val'));
    return o;
  },
  effectLst: function effectLst(x) {},
  blipFill: function blipFill(x) {
    return this.wDoc.getRel(x.$2('blip').attr('r:embed'));
  },
  prstGeom: function prstGeom(x) {
    var px = this.pt2Px,
        w = px(this.world.width),
        h = px(this.world.height);
    switch (x.attr('prst')) {
      case 'leftBrace':
        return {
          shape: 'path',
          path: 'M ' + w + ' 0 L 0 ' + h / 2 + ' L ' + w + ' ' + h + ' Z'
        };
      default:
        return { shape: x.attr('prst') };
    }
  },
  custGeom: function custGeom(x) {
    var path = [],
        px = function (x) {
      return this.pt2Px(this.asPt(x, 'cm'));
    }.bind(this);
    for (var a, children = x.$2('path').childNodes, len = children.length, i = 0; i < len; i++) {
      a = children[i];
      switch (a.localName) {
        case 'moveTo':
          path.push('M ' + px(a.firstChild.attr('x')) + ' ' + px(a.firstChild.attr('y')));
          break;
        case 'lnTo':
          path.push('L ' + px(a.firstChild.attr('x')) + ' ' + px(a.firstChild.attr('y')));
          break;
          break;
        case 'cubicBezTo':
          path.push('L ' + px(a.childNodes[0].attr('x')) + ' ' + px(a.childNodes[0].attr('y')));
          path.push('Q ' + px(a.childNodes[1].attr('x')) + ' ' + px(a.childNodes[1].attr('y')) + ' ' + px(a.childNodes[2].attr('x')) + ' ' + px(a.childNodes[2].attr('y')));
          break;
      }
    }
    return { shape: 'path', path: path.join(' ') };
  }
};
module.exports = exports['default'];