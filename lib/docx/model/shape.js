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
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL3NoYXBlLmpzIl0sIm5hbWVzIjpbIlNoYXBlIiwiY29uc3RydWN0b3IiLCJQcm9wZXJ0aWVzIiwid1htbCIsIndEb2MiLCIkIiwicmVxdWlyZSIsInBoQ2xyIiwibyIsImNsciIsImEiLCJpIiwibmFtaW5nIiwidCIsImNoaWxkcmVuIiwiYXNBcnJheSIsImNvbmNhdCIsImJvZHlQciIsIiQxIiwiYXR0cnMiLCJhdHRyaWJ1dGVzIiwibGVuIiwibGVuZ3RoIiwicHVzaCIsIngiLCJnZXRGb3JtYXRUaGVtZSIsImxpbmUiLCJhdHRyIiwic29saWRGaWxsIiwiZmlsbCIsImNvbG9yIiwiZmFtaWx5IiwiZm9udCIsInBhcnNlSW50IiwidmFsdWUiLCJwdDJQeCIsImFzUHQiLCJFTVBUWSIsImxJbnMiLCJjb25zb2xlIiwid2FybiIsIk9iamVjdCIsImFzc2lnbiIsImN1c3RHZW9tIiwicHJzdEdlb20iLCJwcm90b3R5cGUiLCJEcmF3aW5nIiwiU3BQcm9wZXJ0aWVzIiwibWl4aW5TcFByb3BlcnRpZXMiLCJTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7cUNBQ0Y7QUFDZixhQUFPLElBQUksS0FBS0MsV0FBTCxDQUFpQkMsVUFBckIsQ0FBZ0MsS0FBS0MsSUFBckMsRUFBMkMsS0FBS0MsSUFBaEQsRUFBc0QsSUFBdEQsQ0FBUDtBQUNEOzs7d0NBQ21CO0FBQ2xCLGFBQU8sS0FBS0QsSUFBTCxDQUFVRSxDQUFWLENBQVksYUFBWixDQUFQO0FBQ0Q7Ozt3QkFFaUI7QUFDaEIsYUFBTyxPQUFQO0FBQ0Q7Ozs7RUFWZ0NDLFFBQVEsVUFBUixDOztrQkFBZE4sSzs7O0FBYXJCLFNBQVNPLEtBQVQsQ0FBZUMsQ0FBZixFQUFrQkMsR0FBbEIsRUFBdUJDLENBQXZCLEVBQTBCO0FBQ3hCLE9BQUssSUFBSUMsQ0FBVCxJQUFjSCxDQUFkLEVBQWlC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LGFBQUssR0FBTDtBQUNFLGlCQUFPLEtBQVA7QUFDRjtBQUNFLGlCQUFPLFFBQVA7QUFOSjtBQVFEO0FBdkVIO0FBQUE7QUFBQSx5QkF3RU9WLENBeEVQLEVBd0VVO0FBQ04sY0FBUUEsRUFBRVUsS0FBVjtBQUNFLGFBQUssTUFBTDtBQUNFLGlCQUFPLEtBQUtHLEtBQVo7QUFDRixhQUFLLFFBQUw7QUFDRSxpQkFBTyxFQUFQO0FBQ0YsYUFBSyxTQUFMO0FBQ0UsaUJBQU8sR0FBUDtBQUNGO0FBQ0VFLGtCQUFRQyxJQUFSLENBQWEsYUFBYjtBQUNBLGlCQUFPLEtBQUtILEtBQVo7QUFUSjtBQVdEO0FBcEZIO0FBQUE7QUFBQSx3Q0FzRjZCO0FBQ3pCSSxhQUFPQyxNQUFQLENBQWMsS0FBSzlCLE1BQW5CLEVBQTJCO0FBQ3pCK0Isa0JBQVUsTUFEZTtBQUV6QkMsa0JBQVU7QUFGZSxPQUEzQjs7QUFLQUgsYUFBT0MsTUFBUCxDQUFjLEtBQUtHLFNBQW5CLEVBQThCQyxrQkFBUUMsWUFBdEM7O0FBRUEsYUFBTyxLQUFLQyxpQkFBWjtBQUNEO0FBL0ZIO0FBQUE7QUFBQSx3QkFDc0I7QUFDbEIsVUFBSSxDQUFDcEMsTUFBTCxFQUNFQSxTQUFTNkIsT0FBT0MsTUFBUCxDQUNQLEVBRE8sRUFFUEksa0JBQVE1QyxVQUFSLENBQW1CVSxNQUZaLEVBR1BrQyxrQkFBUUMsWUFBUixDQUFxQm5DLE1BSGQsQ0FBVDtBQUtGLGFBQU9BLE1BQVA7QUFDRDtBQVRIOztBQUFBO0FBQUEsRUFBNENxQyxnQkFBTS9DLFVBQWxEOztBQWtHQUYsTUFBTUUsVUFBTixDQUFpQjhDLGlCQUFqQiIsImZpbGUiOiJzaGFwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCBEcmF3aW5nIGZyb20gJy4vZHJhd2luZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXBlIGV4dGVuZHMgcmVxdWlyZSgnLi4vbW9kZWwnKSB7XG4gIGdldERpcmVjdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvci5Qcm9wZXJ0aWVzKHRoaXMud1htbCwgdGhpcy53RG9jLCB0aGlzKTtcbiAgfVxuICBfZ2V0VmFsaWRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy53WG1sLiQoJ3R4YnhDb250ZW50Jyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdzaGFwZSc7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGhDbHIobywgY2xyLCBhKSB7XG4gIGZvciAodmFyIGkgaW4gbykge1xuICAgIHN3aXRjaCAodHlwZW9mIChhID0gb1tpXSkpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIGlmIChhID09ICdwaENscicpIG9baV0gPSBjbHI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcGhDbHIoYSwgY2xyKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG87XG59XG5cbnZhciBuYW1pbmcgPSBudWxsO1xuU2hhcGUuUHJvcGVydGllcyA9IGNsYXNzIFByb3BlcnRpZXMgZXh0ZW5kcyBTdHlsZS5Qcm9wZXJ0aWVzIHtcbiAgc3RhdGljIGdldCBuYW1pbmcoKSB7XG4gICAgaWYgKCFuYW1pbmcpXG4gICAgICBuYW1pbmcgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAgRHJhd2luZy5Qcm9wZXJ0aWVzLm5hbWluZyxcbiAgICAgICAgRHJhd2luZy5TcFByb3BlcnRpZXMubmFtaW5nXG4gICAgICApO1xuICAgIHJldHVybiBuYW1pbmc7XG4gIH1cblxuICBfZ2V0VmFsaWRDaGlsZHJlbih0KSB7XG4gICAgdmFyIGNoaWxkcmVuID0gKFxuICAgICAgKCh0ID0gdGhpcy53WG1sLiQoJz5zdHlsZT4qJykpICYmIHQuYXNBcnJheSgpKSB8fFxuICAgICAgW11cbiAgICApLmNvbmNhdCh0aGlzLndYbWwuJCgnPnNwUHI+KiwgPmJvZHlQcj4qJykuYXNBcnJheSgpKTtcbiAgICB2YXIgYm9keVByID0gdGhpcy53WG1sLiQxKCdib2R5UHInKTtcbiAgICBpZiAoYm9keVByKSB7XG4gICAgICBmb3IgKFxuICAgICAgICB2YXIgaSA9IDAsIGF0dHJzID0gYm9keVByLmF0dHJpYnV0ZXMsIGxlbiA9IGF0dHJzLmxlbmd0aDtcbiAgICAgICAgaSA8IGxlbjtcbiAgICAgICAgaSsrXG4gICAgICApXG4gICAgICAgIGNoaWxkcmVuLnB1c2goYXR0cnNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgbG5SZWYoeCkge1xuICAgIHJldHVybiBwaENscihcbiAgICAgIHRoaXMud0RvYy5nZXRGb3JtYXRUaGVtZSgpLmxpbmUoeC5hdHRyKCdpZHgnKSksXG4gICAgICB0aGlzLnNvbGlkRmlsbCh4KVxuICAgICk7XG4gIH1cbiAgZmlsbFJlZih4KSB7XG4gICAgcmV0dXJuIHBoQ2xyKFxuICAgICAgdGhpcy53RG9jLmdldEZvcm1hdFRoZW1lKCkuZmlsbCh4LmF0dHIoJ2lkeCcpKSxcbiAgICAgIHRoaXMuc29saWRGaWxsKHgpXG4gICAgKTtcbiAgfVxuICBmb250UmVmKHgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sb3I6IHRoaXMuc29saWRGaWxsKHgpLFxuICAgICAgZmFtaWx5OiB0aGlzLndEb2MuZ2V0Rm9ybWF0VGhlbWUoKS5mb250KHguYXR0cignaWR4JykpLFxuICAgIH07XG4gIH1cbiAgZWZmZWN0UmVmKCkge31cbiAgc3BBdXRvRml0KCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGxJbnMoeCkge1xuICAgIGlmICgoeCA9IHBhcnNlSW50KHgudmFsdWUpKSkgcmV0dXJuIHRoaXMucHQyUHgodGhpcy5hc1B0KHgsICdjbScpKTtcbiAgICByZXR1cm4gdGhpcy5FTVBUWTtcbiAgfVxuICB0SW5zKHgpIHtcbiAgICByZXR1cm4gdGhpcy5sSW5zKHgpO1xuICB9XG4gIHJJbnMoeCkge1xuICAgIHJldHVybiB0aGlzLmxJbnMoeCk7XG4gIH1cbiAgYklucyh4KSB7XG4gICAgcmV0dXJuIHRoaXMubElucyh4KTtcbiAgfVxuICBhbmNob3IoeCkge1xuICAgIHN3aXRjaCAoeC52YWx1ZSkge1xuICAgICAgY2FzZSAnYic6XG4gICAgICAgIHJldHVybiAnYm90dG9tJztcbiAgICAgIGNhc2UgJ3QnOlxuICAgICAgICByZXR1cm4gJ3RvcCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ21pZGRsZSc7XG4gICAgfVxuICB9XG4gIHZlcnQoeCkge1xuICAgIHN3aXRjaCAoeC52YWx1ZSkge1xuICAgICAgY2FzZSAnaG9yeic6XG4gICAgICAgIHJldHVybiB0aGlzLkVNUFRZO1xuICAgICAgY2FzZSAnZWFWZXJ0JzpcbiAgICAgICAgcmV0dXJuIDkwO1xuICAgICAgY2FzZSAndmVydDI3MCc6XG4gICAgICAgIHJldHVybiAyNzA7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLndhcm4oJ25vdCBzdXBwb3J0Jyk7XG4gICAgICAgIHJldHVybiB0aGlzLkVNUFRZO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBtaXhpblNwUHJvcGVydGllcygpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMubmFtaW5nLCB7XG4gICAgICBjdXN0R2VvbTogJ3BhdGgnLFxuICAgICAgcHJzdEdlb206ICdwYXRoJyxcbiAgICB9KTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcy5wcm90b3R5cGUsIERyYXdpbmcuU3BQcm9wZXJ0aWVzKTtcblxuICAgIGRlbGV0ZSB0aGlzLm1peGluU3BQcm9wZXJ0aWVzO1xuICB9XG59O1xuXG5TaGFwZS5Qcm9wZXJ0aWVzLm1peGluU3BQcm9wZXJ0aWVzKCk7XG4iXX0=