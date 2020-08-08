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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc2hhcGUuanMiXSwibmFtZXMiOlsiU2hhcGUiLCJjb25zdHJ1Y3RvciIsIlByb3BlcnRpZXMiLCJ3WG1sIiwid0RvYyIsIiQiLCJyZXF1aXJlIiwicGhDbHIiLCJvIiwiY2xyIiwiYSIsImkiLCJuYW1pbmciLCJ0IiwiY2hpbGRyZW4iLCJhc0FycmF5IiwiY29uY2F0IiwiYm9keVByIiwiJDEiLCJhdHRycyIsImF0dHJpYnV0ZXMiLCJsZW4iLCJsZW5ndGgiLCJwdXNoIiwieCIsImdldEZvcm1hdFRoZW1lIiwibGluZSIsImF0dHIiLCJzb2xpZEZpbGwiLCJmaWxsIiwiY29sb3IiLCJmYW1pbHkiLCJmb250IiwicGFyc2VJbnQiLCJ2YWx1ZSIsInB0MlB4IiwiYXNQdCIsIkVNUFRZIiwibElucyIsImNvbnNvbGUiLCJ3YXJuIiwiT2JqZWN0IiwiYXNzaWduIiwiY3VzdEdlb20iLCJwcnN0R2VvbSIsInByb3RvdHlwZSIsIkRyYXdpbmciLCJTcFByb3BlcnRpZXMiLCJtaXhpblNwUHJvcGVydGllcyIsIlN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7OztxQ0FDRjtBQUNmLGFBQU8sSUFBSSxLQUFLQyxXQUFMLENBQWlCQyxVQUFyQixDQUFnQyxLQUFLQyxJQUFyQyxFQUEyQyxLQUFLQyxJQUFoRCxFQUFzRCxJQUF0RCxDQUFQO0FBQ0Q7Ozt3Q0FDbUI7QUFDbEIsYUFBTyxLQUFLRCxJQUFMLENBQVVFLENBQVYsQ0FBWSxhQUFaLENBQVA7QUFDRDs7O3dCQUVpQjtBQUNoQixhQUFPLE9BQVA7QUFDRDs7OztFQVZnQ0MsUUFBUSxVQUFSLEM7O2tCQUFkTixLOzs7QUFhckIsU0FBU08sS0FBVCxDQUFlQyxDQUFmLEVBQWtCQyxHQUFsQixFQUF1QkMsQ0FBdkIsRUFBMEI7QUFDeEIsT0FBSyxJQUFJQyxDQUFULElBQWNI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TyxRQUFQO0FBQ0YsYUFBSyxHQUFMO0FBQ0UsaUJBQU8sS0FBUDtBQUNGO0FBQ0UsaUJBQU8sUUFBUDtBQU5KO0FBUUQ7QUF2RUg7QUFBQTtBQUFBLHlCQXdFT1YsQ0F4RVAsRUF3RVU7QUFDTixjQUFRQSxFQUFFVSxLQUFWO0FBQ0UsYUFBSyxNQUFMO0FBQ0UsaUJBQU8sS0FBS0csS0FBWjtBQUNGLGFBQUssUUFBTDtBQUNFLGlCQUFPLEVBQVA7QUFDRixhQUFLLFNBQUw7QUFDRSxpQkFBTyxHQUFQO0FBQ0Y7QUFDRUUsa0JBQVFDLElBQVIsQ0FBYSxhQUFiO0FBQ0EsaUJBQU8sS0FBS0gsS0FBWjtBQVRKO0FBV0Q7QUFwRkg7QUFBQTtBQUFBLHdDQXNGNkI7QUFDekJJLGFBQU9DLE1BQVAsQ0FBYyxLQUFLOUIsTUFBbkIsRUFBMkI7QUFDekIrQixrQkFBVSxNQURlO0FBRXpCQyxrQkFBVTtBQUZlLE9BQTNCOztBQUtBSCxhQUFPQyxNQUFQLENBQWMsS0FBS0csU0FBbkIsRUFBOEJDLGtCQUFRQyxZQUF0Qzs7QUFFQSxhQUFPLEtBQUtDLGlCQUFaO0FBQ0Q7QUEvRkg7QUFBQTtBQUFBLHdCQUNzQjtBQUNsQixVQUFJLENBQUNwQyxNQUFMLEVBQ0VBLFNBQVM2QixPQUFPQyxNQUFQLENBQ1AsRUFETyxFQUVQSSxrQkFBUTVDLFVBQVIsQ0FBbUJVLE1BRlosRUFHUGtDLGtCQUFRQyxZQUFSLENBQXFCbkMsTUFIZCxDQUFUO0FBS0YsYUFBT0EsTUFBUDtBQUNEO0FBVEg7O0FBQUE7QUFBQSxFQUE0Q3FDLGdCQUFNL0MsVUFBbEQ7O0FBa0dBRixNQUFNRSxVQUFOLENBQWlCOEMsaUJBQWpCIiwiZmlsZSI6InNoYXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IERyYXdpbmcgZnJvbSAnLi9kcmF3aW5nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcGUgZXh0ZW5kcyByZXF1aXJlKCcuLi9tb2RlbCcpIHtcbiAgZ2V0RGlyZWN0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yLlByb3BlcnRpZXModGhpcy53WG1sLCB0aGlzLndEb2MsIHRoaXMpO1xuICB9XG4gIF9nZXRWYWxpZENoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLndYbWwuJCgndHhieENvbnRlbnQnKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ3NoYXBlJztcbiAgfVxufVxuXG5mdW5jdGlvbiBwaENscihvLCBjbHIsIGEpIHtcbiAgZm9yICh2YXIgaSBpbiBvKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgKGEgPSBvW2ldKSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgaWYgKGEgPT0gJ3BoQ2xyJykgb1tpXSA9IGNscjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBwaENscihhLCBjbHIpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbztcbn1cblxudmFyIG5hbWluZyA9IG51bGw7XG5TaGFwZS5Qcm9wZXJ0aWVzID0gY2xhc3MgUHJvcGVydGllcyBleHRlbmRzIFN0eWxlLlByb3BlcnRpZXMge1xuICBzdGF0aWMgZ2V0IG5hbWluZygpIHtcbiAgICBpZiAoIW5hbWluZylcbiAgICAgIG5hbWluZyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICBEcmF3aW5nLlByb3BlcnRpZXMubmFtaW5nLFxuICAgICAgICBEcmF3aW5nLlNwUHJvcGVydGllcy5uYW1pbmdcbiAgICAgICk7XG4gICAgcmV0dXJuIG5hbWluZztcbiAgfVxuXG4gIF9nZXRWYWxpZENoaWxkcmVuKHQpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSAoXG4gICAgICAoKHQgPSB0aGlzLndYbWwuJCgnPnN0eWxlPionKSkgJiYgdC5hc0FycmF5KCkpIHx8XG4gICAgICBbXVxuICAgICkuY29uY2F0KHRoaXMud1htbC4kKCc+c3BQcj4qLCA+Ym9keVByPionKS5hc0FycmF5KCkpO1xuICAgIHZhciBib2R5UHIgPSB0aGlzLndYbWwuJDEoJ2JvZHlQcicpO1xuICAgIGlmIChib2R5UHIpIHtcbiAgICAgIGZvciAoXG4gICAgICAgIHZhciBpID0gMCwgYXR0cnMgPSBib2R5UHIuYXR0cmlidXRlcywgbGVuID0gYXR0cnMubGVuZ3RoO1xuICAgICAgICBpIDwgbGVuO1xuICAgICAgICBpKytcbiAgICAgIClcbiAgICAgICAgY2hpbGRyZW4ucHVzaChhdHRyc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICBsblJlZih4KSB7XG4gICAgcmV0dXJuIHBoQ2xyKFxuICAgICAgdGhpcy53RG9jLmdldEZvcm1hdFRoZW1lKCkubGluZSh4LmF0dHIoJ2lkeCcpKSxcbiAgICAgIHRoaXMuc29saWRGaWxsKHgpXG4gICAgKTtcbiAgfVxuICBmaWxsUmVmKHgpIHtcbiAgICByZXR1cm4gcGhDbHIoXG4gICAgICB0aGlzLndEb2MuZ2V0Rm9ybWF0VGhlbWUoKS5maWxsKHguYXR0cignaWR4JykpLFxuICAgICAgdGhpcy5zb2xpZEZpbGwoeClcbiAgICApO1xuICB9XG4gIGZvbnRSZWYoeCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2xvcjogdGhpcy5zb2xpZEZpbGwoeCksXG4gICAgICBmYW1pbHk6IHRoaXMud0RvYy5nZXRGb3JtYXRUaGVtZSgpLmZvbnQoeC5hdHRyKCdpZHgnKSksXG4gICAgfTtcbiAgfVxuICBlZmZlY3RSZWYoKSB7fVxuICBzcEF1dG9GaXQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgbElucyh4KSB7XG4gICAgaWYgKCh4ID0gcGFyc2VJbnQoeC52YWx1ZSkpKSByZXR1cm4gdGhpcy5wdDJQeCh0aGlzLmFzUHQoeCwgJ2NtJykpO1xuICAgIHJldHVybiB0aGlzLkVNUFRZO1xuICB9XG4gIHRJbnMoeCkge1xuICAgIHJldHVybiB0aGlzLmxJbnMoeCk7XG4gIH1cbiAgcklucyh4KSB7XG4gICAgcmV0dXJuIHRoaXMubElucyh4KTtcbiAgfVxuICBiSW5zKHgpIHtcbiAgICByZXR1cm4gdGhpcy5sSW5zKHgpO1xuICB9XG4gIGFuY2hvcih4KSB7XG4gICAgc3dpdGNoICh4LnZhbHVlKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgICAgcmV0dXJuICdib3R0b20nO1xuICAgICAgY2FzZSAndCc6XG4gICAgICAgIHJldHVybiAndG9wJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnbWlkZGxlJztcbiAgICB9XG4gIH1cbiAgdmVydCh4KSB7XG4gICAgc3dpdGNoICh4LnZhbHVlKSB7XG4gICAgICBjYXNlICdob3J6JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuRU1QVFk7XG4gICAgICBjYXNlICdlYVZlcnQnOlxuICAgICAgICByZXR1cm4gOTA7XG4gICAgICBjYXNlICd2ZXJ0MjcwJzpcbiAgICAgICAgcmV0dXJuIDI3MDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUud2Fybignbm90IHN1cHBvcnQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuRU1QVFk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG1peGluU3BQcm9wZXJ0aWVzKCkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5uYW1pbmcsIHtcbiAgICAgIGN1c3RHZW9tOiAncGF0aCcsXG4gICAgICBwcnN0R2VvbTogJ3BhdGgnLFxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnByb3RvdHlwZSwgRHJhd2luZy5TcFByb3BlcnRpZXMpO1xuXG4gICAgZGVsZXRlIHRoaXMubWl4aW5TcFByb3BlcnRpZXM7XG4gIH1cbn07XG5cblNoYXBlLlByb3BlcnRpZXMubWl4aW5TcFByb3BlcnRpZXMoKTtcbiJdfQ==