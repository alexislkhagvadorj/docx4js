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
      return [this.wXml.$1('extent'), this.wXml.$1('effectExtent')];
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
    var ext = x.$1('ext'),
        offset = x.$1('off');
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

      if (t = elColor.$1('shade')) color = this.shadeColor(color, -1 * parseInt(t.attr('val')) / 1000);

      if (t = elColor.$1('lumOff')) color = this.shadeColor(color, -1 * parseInt(t.attr('val')) / 1000);

      return color;
    }
  },
  noFill: function noFill(x) {
    return 1;
  },
  gradFill: function gradFill(x) {
    var type = x.$1('lin,path'),
        o = this.asObject(type),
        stops = [];
    for (var gs = x.$('gs'), a, i = 0, len = gs.length; i < len; i++) {
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
    if (x.$1('noFill')) return { width: 0 };

    var o = this.asObject(x),
        t;

    (t = x.$1('solidFill')) && (o.color = this.solidFill(t));

    (t = o.w) && (o.width = this.asPt(t, 'cm')) && delete o.w;
    (t = x.$1('prstDash')) && (o.dash = t.attr('val'));
    return o;
  },
  effectLst: function effectLst(x) {},
  blipFill: function blipFill(x) {
    return this.wDoc.getRel(x.$1('blip').attr('r:embed'));
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
    for (var a, children = x.$1('path').childNodes, len = children.length, i = 0; i < len; i++) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZHJhd2luZy5qcyJdLCJuYW1lcyI6WyJEcmF3aW5nIiwid1htbCIsImFyZ3VtZW50cyIsIndEcmF3aW5nIiwiY29uc3RydWN0b3IiLCJQcm9wZXJ0aWVzIiwid0RvYyIsInJlcXVpcmUiLCJ0IiwiJDEiLCJ4Iiwid2lkdGgiLCJwdDJQeCIsImFzUHQiLCJhdHRyIiwiaGVpZ2h0IiwiYXNPYmplY3QiLCJwYXJzZUludCIsInZhbHVlIiwiRU1QVFkiLCJkaXN0VCIsIk9iamVjdCIsImFzc2lnbiIsIm5hbWluZyIsImN1c3RHZW9tIiwicHJzdEdlb20iLCJwcm90b3R5cGUiLCJTcFByb3BlcnRpZXMiLCJTdHlsZSIsInhmcm0iLCJleHQiLCJvZmZzZXQiLCJ3b3JsZCIsInkiLCJyb3RhdGlvbiIsInNvbGlkRmlsbCIsImVsQ29sb3IiLCJmaXJzdENoaWxkIiwiY29sb3IiLCJhc0NvbG9yIiwibG9jYWxOYW1lIiwiZ2V0Q29sb3JUaGVtZSIsImdldCIsInNoYWRlQ29sb3IiLCJub0ZpbGwiLCJncmFkRmlsbCIsInR5cGUiLCJvIiwic3RvcHMiLCJncyIsIiQiLCJhIiwiaSIsImxlbiIsImxlbmd0aCIsInB1c2giLCJwb3NpdGlvbiIsImFuZyIsImFuZ2VsIiwicGF0aCIsInJlY3QiLCJsbiIsInciLCJkYXNoIiwiZWZmZWN0THN0IiwiYmxpcEZpbGwiLCJnZXRSZWwiLCJweCIsImgiLCJzaGFwZSIsImJpbmQiLCJjaGlsZHJlbiIsImNoaWxkTm9kZXMiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87OztBQUNuQixtQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUFBLG1IQUNQQyxTQURPOztBQUVoQixVQUFLQyxRQUFMLEdBQWdCLElBQWhCO0FBRmdCO0FBR2pCOzs7O3FDQUNnQjtBQUNmLGFBQU8sSUFBSSxLQUFLQyxXQUFMLENBQWlCQyxVQUFyQixD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Q0FBSCxDQUQ1QztBQUdBO0FBQ0E7QUFDRixhQUFLLFlBQUw7QUFDRTZDLGVBQUtKLElBQUwsQ0FDRSxPQUNFWSxHQUFHaEIsRUFBRXFCLFVBQUYsQ0FBYSxDQUFiLEVBQWdCMUQsSUFBaEIsQ0FBcUIsR0FBckIsQ0FBSCxDQURGLEdBRUUsR0FGRixHQUdFcUQsR0FBR2hCLEVBQUVxQixVQUFGLENBQWEsQ0FBYixFQUFnQjFELElBQWhCLENBQXFCLEdBQXJCLENBQUgsQ0FKSjtBQU1BNkMsZUFBS0osSUFBTCxDQUNFLE9BQ0VZLEdBQUdoQixFQUFFcUIsVUFBRixDQUFhLENBQWIsRUFBZ0IxRCxJQUFoQixDQUFxQixHQUFyQixDQUFILENBREYsR0FFRSxHQUZGLEdBR0VxRCxHQUFHaEIsRUFBRXFCLFVBQUYsQ0FBYSxDQUFiLEVBQWdCMUQsSUFBaEIsQ0FBcUIsR0FBckIsQ0FBSCxDQUhGLEdBSUUsR0FKRixHQUtFcUQsR0FBR2hCLEVBQUVxQixVQUFGLENBQWEsQ0FBYixFQUFnQjFELElBQWhCLENBQXFCLEdBQXJCLENBQUgsQ0FMRixHQU1FLEdBTkYsR0FPRXFELEdBQUdoQixFQUFFcUIsVUFBRixDQUFhLENBQWIsRUFBZ0IxRCxJQUFoQixDQUFxQixHQUFyQixDQUFILENBUko7QUFVQTtBQTdCSjtBQStCRDtBQUNELFdBQU8sRUFBRXVELE9BQU8sTUFBVCxFQUFpQlYsTUFBTUEsS0FBS2MsSUFBTCxDQUFVLEdBQVYsQ0FBdkIsRUFBUDtBQUNEO0FBOUhvQixDQUF2QiIsImZpbGUiOiJkcmF3aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gJy4vc3R5bGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3aW5nIGV4dGVuZHMgcmVxdWlyZSgnLi4vbW9kZWwnKSB7XG4gIGNvbnN0cnVjdG9yKHdYbWwpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMud0RyYXdpbmcgPSBudWxsO1xuICB9XG4gIGdldERpcmVjdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvci5Qcm9wZXJ0aWVzKHRoaXMud0RyYXdpbmcsIHRoaXMud0RvYywgdGhpcyk7XG4gIH1cbiAgX2dldFZhbGlkQ2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbkRyYXdpbmcuUHJvcGVydGllcyA9IGNsYXNzIFByb3BlcnRpZXMgZXh0ZW5kcyBTdHlsZS5Qcm9wZXJ0aWVzIHtcbiAgX2dldFZhbGlkQ2hpbGRyZW4odCkge1xuICAgIHJldHVybiBbdGhpcy53WG1sLiQxKCdleHRlbnQnKSwgdGhpcy53WG1sLiQxKCdlZmZlY3RFeHRlbnQnKV07XG4gIH1cbiAgZXh0ZW50KHgpIHtcbiAgICAvL2lubGluZSBhbmQgYW5jaG9yXG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB0aGlzLnB0MlB4KHRoaXMuYXNQdCh4LmF0dHIoJ2N4JyksICdjbScpKSxcbiAgICAgIGhlaWdodDogdGhpcy5wdDJQeCh0aGlzLmFzUHQoeC5hdHRyKCdjeScpLCAnY20nKSksXG4gICAgfTtcbiAgfVxuICBlZmZlY3RFeHRlbnQoeCkge1xuICAgIHJldHVybiB0aGlzLmFzT2JqZWN0KHgsICh4KSA9PiB0aGlzLnB0MlB4KHRoaXMuYXNQdCh4LCAnY20nKSkpO1xuICB9XG4gIGRpc3RUKHgpIHtcbiAgICBpZiAoKHggPSBwYXJzZUludCh4LnZhbHVlKSkpIHJldHVybiB0aGlzLnB0MlB4KHRoaXMuYXNQdCh4LCAnY20nKSk7XG4gICAgcmV0dXJuIHRoaXMuRU1QVFk7XG4gIH1cbiAgZGlzdEIoeCkge1xuICAgIHJldHVybiB0aGlzLmRpc3RUKHgpO1xuICB9XG4gIGRpc3RSKHgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXN0VCh4KTtcbiAgfVxuICBkaXN0TCh4KSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzdFQoeCk7XG4gIH1cblxuICBzdGF0aWMgbWl4aW5TcFByb3BlcnRpZXMoKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLm5hbWluZywge1xuICAgICAgY3VzdEdlb206ICdwYXRoJyxcbiAgICAgIHByc3RHZW9tOiAncGF0aCcsXG4gICAgfSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMucHJvdG90eXBlLCBEcmF3aW5nLlNwUHJvcGVydGllcyk7XG4gIH1cbn07XG5cbkRyYXdpbmcuU3BQcm9wZXJ0aWVzID0ge1xuICB4ZnJtKHgpIHtcbiAgICB2YXIgZXh0ID0geC4kMSgnZXh0JyksXG4gICAgICBvZmZzZXQgPSB4LiQxKCdvZmYnKTtcbiAgICByZXR1cm4gKHRoaXMud29ybGQgPSB7XG4gICAgICB3aWR0aDogdGhpcy5wdDJQeCh0aGlzLmFzUHQoZXh0LmF0dHIoJ2N4JyksICdjbScpKSxcbiAgICAgIGhlaWdodDogdGhpcy5wdDJQeCh0aGlzLmFzUHQoZXh0LmF0dHIoJ2N5JyksICdjbScpKSxcbiAgICAgIHg6IHRoaXMucHQyUHgodGhpcy5hc1B0KG9mZnNldC5hdHRyKCd4JyksICdjbScpKSxcbiAgICAgIHk6IHRoaXMucHQyUHgodGhpcy5hc1B0KG9mZnNldC5hdHRyKCd5JyksICdjbScpKSxcbiAgICAgIHJvdGF0aW9uOiBwYXJzZUludCh4LmF0dHIoJ3JvdCcpIHx8IDApIC8gNjAwMDAsXG4gICAgfSk7XG4gIH0sXG4gIHNvbGlkRmlsbCh4KSB7XG4gICAgdmFyIGVsQ29sb3IgPSB4LmZpcnN0Q2hpbGQ7XG4gICAgaWYgKGVsQ29sb3IpIHtcbiAgICAgIHZhciBjb2xvciA9IHRoaXMuYXNDb2xvcihlbENvbG9yLmF0dHIoJ3ZhbCcpKSwgdDtcbiAgICAgIGlmIChjb2xvciA9PSAncGhDbHInKSByZXR1cm4gJ3BoQ2xyJztcblxuICAgICAgc3dpdGNoIChlbENvbG9yLmxvY2FsTmFtZSkge1xuICAgICAgICBjYXNlICdzY2hlbWVDbHInOlxuICAgICAgICAgIGNvbG9yID0gdGhpcy53RG9jLmdldENvbG9yVGhlbWUoKS5nZXQoY29sb3IpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoKHQgPSBlbENvbG9yLiQxKCdzaGFkZScpKSlcbiAgICAgICAgY29sb3IgPSB0aGlzLnNoYWRlQ29sb3IoY29sb3IsICgtMSAqIHBhcnNlSW50KHQuYXR0cigndmFsJykpKSAvIDEwMDApO1xuXG4gICAgICBpZiAoKHQgPSBlbENvbG9yLiQxKCdsdW1PZmYnKSkpXG4gICAgICAgIGNvbG9yID0gdGhpcy5zaGFkZUNvbG9yKGNvbG9yLCAoLTEgKiBwYXJzZUludCh0LmF0dHIoJ3ZhbCcpKSkgLyAxMDAwKTtcblxuICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH1cbiAgfSxcbiAgbm9GaWxsKHgpIHtcbiAgICByZXR1cm4gMTtcbiAgfSxcbiAgZ3JhZEZpbGwoeCkge1xuICAgIHZhciB0eXBlID0geC4kMSgnbGluLHBhdGgnKSxcbiAgICAgIG8gPSB0aGlzLmFzT2JqZWN0KHR5cGUpLFxuICAgICAgc3RvcHMgPSBbXTtcbiAgICBmb3IgKHZhciBncyA9IHguJCgnZ3MnKSwgYSwgaSA9IDAsIGxlbiA9IGdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKVxuICAgICAgc3RvcHMucHVzaCh7XG4gICAgICAgIHBvc2l0aW9uOiBwYXJzZUludChnc1tpXS5hdHRyKCdwb3MnKSkgLyAxMDAwLFxuICAgICAgICBjb2xvcjogdGhpcy5zb2xpZEZpbGwoZ3NbaV0pLFxuICAgICAgfSk7XG4gICAgby5hbmcgJiYgKChvLmFuZ2VsID0gcGFyc2VJbnQoby5hbmcpIC8gNjAwMDApLCBkZWxldGUgby5hbmcpO1xuICAgIG8ucGF0aCAmJlxuICAgICAgKG8ucmVjdCA9IHRoaXMuYXNPYmplY3QodHlwZS5maXJzdENoaWxkLCAoeCkgPT4gcGFyc2VJbnQoeCkgLyAxMDAwKSk7XG4gICAgby5wYXRoID0gdHlwZS5sb2NhbE5hbWUgPT0gJ2xpbicgPyAnbGluZWFyJyA6IG8ucGF0aDtcbiAgICBvLnN0b3BzID0gc3RvcHM7XG4gICAgcmV0dXJuIG87XG4gIH0sXG4gIGxuKHgpIHtcbiAgICBpZiAoeC4kMSgnbm9GaWxsJykpIHJldHVybiB7IHdpZHRoOiAwIH07XG5cbiAgICB2YXIgbyA9IHRoaXMuYXNPYmplY3QoeCksXG4gICAgICB0O1xuXG4gICAgKHQgPSB4LiQxKCdzb2xpZEZpbGwnKSkgJiYgKG8uY29sb3IgPSB0aGlzLnNvbGlkRmlsbCh0KSk7XG5cbiAgICAodCA9IG8udykgJiYgKG8ud2lkdGggPSB0aGlzLmFzUHQodCwgJ2NtJykpICYmIGRlbGV0ZSBvLnc7XG4gICAgKHQgPSB4LiQxKCdwcnN0RGFzaCcpKSAmJiAoby5kYXNoID0gdC5hdHRyKCd2YWwnKSk7XG4gICAgcmV0dXJuIG87XG4gIH0sXG4gIGVmZmVjdExzdCh4KSB7fSxcbiAgYmxpcEZpbGwoeCkge1xuICAgIHJldHVybiB0aGlzLndEb2MuZ2V0UmVsKHguJDEoJ2JsaXAnKS5hdHRyKCdyOmVtYmVkJykpO1xuICB9LFxuICBwcnN0R2VvbSh4KSB7XG4gICAgdmFyIHB4ID0gdGhpcy5wdDJQeCxcbiAgICAgIHcgPSBweCh0aGlzLndvcmxkLndpZHRoKSxcbiAgICAgIGggPSBweCh0aGlzLndvcmxkLmhlaWdodCk7XG4gICAgc3dpdGNoICh4LmF0dHIoJ3Byc3QnKSkge1xuICAgICAgY2FzZSAnbGVmdEJyYWNlJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzaGFwZTogJ3BhdGgnLFxuICAgICAgICAgIHBhdGg6ICdNICcgKyB3ICsgJyAwIEwgMCAnICsgaCAvIDIgKyAnIEwgJyArIHcgKyAnICcgKyBoICsgJyBaJyxcbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB7IHNoYXBlOiB4LmF0dHIoJ3Byc3QnKSB9O1xuICAgIH1cbiAgfSxcbiAgY3VzdEdlb20oeCkge1xuICAgIHZhciBwYXRoID0gW10sXG4gICAgICBweCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnB0MlB4KHRoaXMuYXNQdCh4LCAnY20nKSk7XG4gICAgICB9LmJpbmQodGhpcyk7XG4gICAgZm9yIChcbiAgICAgIHZhciBhLCBjaGlsZHJlbiA9IHguJDEoJ3BhdGgnKS5jaGlsZE5vZGVzLCBsZW4gPSBjaGlsZHJlbi5sZW5ndGgsIGkgPSAwO1xuICAgICAgaSA8IGxlbjtcbiAgICAgIGkrK1xuICAgICkge1xuICAgICAgYSA9IGNoaWxkcmVuW2ldO1xuICAgICAgc3dpdGNoIChhLmxvY2FsTmFtZSkge1xuICAgICAgICBjYXNlICdtb3ZlVG8nOlxuICAgICAgICAgIHBhdGgucHVzaChcbiAgICAgICAgICAgICdNICcgKyBweChhLmZpcnN0Q2hpbGQuYXR0cigneCcpKSArICcgJyArIHB4KGEuZmlyc3RDaGlsZC5hdHRyKCd5JykpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbG5Ubyc6XG4gICAgICAgICAgcGF0aC5wdXNoKFxuICAgICAgICAgICAgJ0wgJyArIHB4KGEuZmlyc3RDaGlsZC5hdHRyKCd4JykpICsgJyAnICsgcHgoYS5maXJzdENoaWxkLmF0dHIoJ3knKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjdWJpY0JlelRvJzpcbiAgICAgICAgICBwYXRoLnB1c2goXG4gICAgICAgICAgICAnTCAnICtcbiAgICAgICAgICAgICAgcHgoYS5jaGlsZE5vZGVzWzBdLmF0dHIoJ3gnKSkgK1xuICAgICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgICBweChhLmNoaWxkTm9kZXNbMF0uYXR0cigneScpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgcGF0aC5wdXNoKFxuICAgICAgICAgICAgJ1EgJyArXG4gICAgICAgICAgICAgIHB4KGEuY2hpbGROb2Rlc1sxXS5hdHRyKCd4JykpICtcbiAgICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgICAgcHgoYS5jaGlsZE5vZGVzWzFdLmF0dHIoJ3knKSkgK1xuICAgICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgICBweChhLmNoaWxkTm9kZXNbMl0uYXR0cigneCcpKSArXG4gICAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICAgIHB4KGEuY2hpbGROb2Rlc1syXS5hdHRyKCd5JykpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgc2hhcGU6ICdwYXRoJywgcGF0aDogcGF0aC5qb2luKCcgJykgfTtcbiAgfSxcbn07XG4iXX0=