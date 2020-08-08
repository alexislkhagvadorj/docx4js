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
      var pr = this.wXml.$1('pPr');
      pr && new this.constructor.Properties(pr, this.wDoc, this).parse(visitors);

      (pr = this.wXml.$1('rPr')) && new _inline2.default.Properties(pr, this.wDoc, this).parse(visitors);

      (pr = this.wXml.$1('numPr')) && new _numbering2.default.Properties(pr, this.wDoc, this).parse(visitors);

      (pr = this.wXml.$1('framePr')) && new this.constructor.FrameProperties(pr, this.wDoc, this).parse(visitors);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc3R5bGUvcGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbIlBhcmFncmFwaCIsInYiLCJfdmFsIiwicGFyc2VJbnQiLCJnZXRQYXJlbnRTdHlsZSIsImdldE91dGxpbmVMZXZlbCIsImdldE51bUlkIiwicHJvdG90eXBlIiwiYXNOdW1iZXJpbmdTdHlsZSIsImNhbGwiLCJhcmd1bWVudHMiLCJmIiwiZmFjdG9yaWVzIiwidmlzaXRvcnMiLCJwciIsIndYbWwiLCIkMSIsImNvbnN0cnVjdG9yIiwiUHJvcGVydGllcyIsIndEb2MiLCJwYXJzZSIsIklubGluZSIsIk51bWJlcmluZyIsIkZyYW1lUHJvcGVydGllcyIsIlN0eWxlIiwieCIsImF0dHIiLCJhc09iamVjdCIsImEiLCJwdDJQeCIsImFzUHQiLCJyIiwibyIsImJlZm9yZUF1dG9zcGFjaW5nIiwiYmVmb3JlTGluZXMiLCJ0b3AiLCJiZWZvcmUiLCJhZnRlckF1dG9zcGFjaW5nIiwiYWZ0ZXJMaW5lcyIsImJvdHRvbSIsImFmdGVyIiwibGluZSIsImxpbmVSdWxlIiwibGluZUhlaWdodCIsImJkciIsImJpbmQiLCJBcnJheSIsImZyb20iLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsImxvY2FsTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7b0NBQ0hDLEMsRUFBRztBQUNqQixVQUFJLENBQUNBLElBQUksS0FBS0MsSUFBTCxDQUFVLFlBQVYsQ0FBTCxLQUFpQyxJQUFyQyxFQUEyQyxPQUFPQyxTQUFTRixDQUFULENBQVA7QUFDM0MsVUFBSSxDQUFDQSxJQUFJLEtBQUtHLGNBQUwsRUFBTCxLQUErQixJQUEvQixJQUF1Q0gsRUFBRUksZUFBN0MsRUFDRSxPQUFPSixFQUFFSSxlQUFGLEVBQVA7QUFDRixhQUFPLENBQUMsQ0FBUjtBQUNEOzs7NkJBQ1FK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QUFXLEtBQUtWLEtBQUwsQ0FBVyxLQUFLQyxJQUFMLENBQVVDLEVBQUVTLEtBQVosQ0FBWCxDQUFYOztBQUVsQixVQUFJLENBQUNULEVBQUVVLElBQVAsRUFBYSxPQUFPVCxDQUFQOztBQUViLGNBQVFQLEVBQUVpQixRQUFWO0FBQ0UsYUFBSyxTQUFMO0FBQ0EsYUFBSyxPQUFMO0FBQ0VWLFlBQUVXLFVBQUYsR0FBZSxLQUFLZCxLQUFMLENBQVcsS0FBS0MsSUFBTCxDQUFVTCxFQUFFZ0IsSUFBWixDQUFYLENBQWY7QUFDQTtBQUNGLGFBQUssTUFBTDtBQUNBO0FBQ0VULFlBQUVXLFVBQUYsR0FBZ0J4QyxTQUFTNEIsRUFBRVUsSUFBWCxJQUFtQixHQUFwQixHQUEyQixHQUEzQixHQUFpQyxHQUFoRDtBQVBKO0FBU0FULFFBQUVVLFFBQUYsR0FBYWpCLEVBQUVpQixRQUFmO0FBQ0EsYUFBT1YsQ0FBUDtBQUNEOzs7eUJBQ0lQLEMsRUFBRztBQUNOLFVBQUlNLElBQUksRUFBUjtBQUNBLFVBQUlhLE1BQU12QixpQkFBT0gsVUFBUCxDQUFrQlgsU0FBbEIsQ0FBNEJxQyxHQUE1QixDQUFnQ0MsSUFBaEMsQ0FBcUMsSUFBckMsQ0FBVjtBQUNBQyxZQUFNQyxJQUFOLENBQVd0QixFQUFFdUIsVUFBYixFQUF5QkMsT0FBekIsQ0FDRSxVQUFDckIsQ0FBRDtBQUFBLGVBQU9BLEVBQUVzQixTQUFGLEtBQWdCbkIsRUFBRUgsRUFBRXNCLFNBQUosSUFBaUJOLElBQUloQixDQUFKLENBQWpDLENBQVA7QUFBQSxPQURGO0FBR0EsYUFBT0csQ0FBUDtBQUNEOzs7d0JBQ2lCO0FBQ2hCLGFBQU8sV0FBUDtBQUNEOzs7O0VBM0NzQlAsZ0JBQU1OLFU7O0lBOEN6QkssZTs7Ozs7Ozs7Ozs7d0JBQ2M7QUFDaEIsYUFBTyxPQUFQO0FBQ0Q7Ozs7RUFIMkJDLGdCQUFNTixVIiwiZmlsZSI6InBhcmFncmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZSBmcm9tICcuLi9zdHlsZSc7XG5pbXBvcnQgSW5saW5lIGZyb20gJy4vaW5saW5lJztcbmltcG9ydCBOdW1iZXJpbmcgZnJvbSAnLi9udW1iZXJpbmcnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyYWdyYXBoIGV4dGVuZHMgU3R5bGUge1xuICBnZXRPdXRsaW5lTGV2ZWwodikge1xuICAgIGlmICgodiA9IHRoaXMuX3ZhbCgnb3V0bGluZUx2bCcpKSAhPSBudWxsKSByZXR1cm4gcGFyc2VJbnQodik7XG4gICAgaWYgKCh2ID0gdGhpcy5nZXRQYXJlbnRTdHlsZSgpKSAhPSBudWxsICYmIHYuZ2V0T3V0bGluZUxldmVsKVxuICAgICAgcmV0dXJuIHYuZ2V0T3V0bGluZUxldmVsKCk7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGdldE51bUlkKHYpIHtcbiAgICBpZiAoKHYgPSB0aGlzLl92YWwoJ251bUlkJykpICE9IG51bGwpIHJldHVybiB2O1xuICAgIGlmICgodiA9IHRoaXMuZ2V0UGFyZW50U3R5bGUoKSkgIT0gbnVsbCAmJiB2LmdldE51bUlkKSByZXR1cm4gdi5nZXROdW1JZCgpO1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBhc051bWJlcmluZ1N0eWxlKCkge1xuICAgIHJldHVybiBOdW1iZXJpbmcucHJvdG90eXBlLmFzTnVtYmVyaW5nU3R5bGUuY2FsbCh0aGlzLCAuLi5hcmd1bWVudHMpO1xuICB9XG4gIF9pdGVyYXRlKGYsIGZhY3RvcmllcywgdmlzaXRvcnMpIHtcbiAgICB2YXIgcHIgPSB0aGlzLndYbWwuJDEoJ3BQcicpO1xuICAgIHByICYmIG5ldyB0aGlzLmNvbnN0cnVjdG9yLlByb3BlcnRpZXMocHIsIHRoaXMud0RvYywgdGhpcykucGFyc2UodmlzaXRvcnMpO1xuXG4gICAgKHByID0gdGhpcy53WG1sLiQxKCdyUHInKSkgJiZcbiAgICAgIG5ldyBJbmxpbmUuUHJvcGVydGllcyhwciwgdGhpcy53RG9jLCB0aGlzKS5wYXJzZSh2aXNpdG9ycyk7XG5cbiAgICAocHIgPSB0aGlzLndYbWwuJDEoJ251bVByJykpICYmXG4gICAgICBuZXcgTnVtYmVyaW5nLlByb3BlcnRpZXMocHIsIHRoaXMud0RvYywgdGhpcykucGFyc2UodmlzaXRvcnMpO1xuXG4gICAgKHByID0gdGhpcy53WG1sLiQxKCdmcmFtZVByJykpICYmXG4gICAgICBuZXcgdGhpcy5jb25zdHJ1Y3Rvci5GcmFtZVByb3BlcnRpZXMocHIsIHRoaXMud0RvYywgdGhpcykucGFyc2UodmlzaXRvcnMpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnc3R5bGUucGFyYWdyYXBoJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgUHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gUHJvcGVydGllcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRnJhbWVQcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiBGcmFtZVByb3BlcnRpZXM7XG4gIH1cbn1cbmNsYXNzIFByb3BlcnRpZXMgZXh0ZW5kcyBTdHlsZS5Qcm9wZXJ0aWVzIHtcbiAgamMoeCkge1xuICAgIHJldHVybiB4LmF0dHIoJ3c6dmFsJyk7XG4gIH1cbiAgaW5kKHgpIHtcbiAgICByZXR1cm4gdGhpcy5hc09iamVjdCh4LCAoYSkgPT4gdGhpcy5wdDJQeCh0aGlzLmFzUHQoYSkpKTtcbiAgfVxuICBzcGFjaW5nKHgpIHtcbiAgICB2YXIgciA9IHRoaXMuYXNPYmplY3QoeCksXG4gICAgICBvID0ge307XG5cbiAgICBpZiAoIXIuYmVmb3JlQXV0b3NwYWNpbmcgJiYgci5iZWZvcmVMaW5lcylcbiAgICAgIG8udG9wID0gdGhpcy5wdDJQeCh0aGlzLmFzUHQoci5iZWZvcmVMaW5lcykpO1xuICAgIGVsc2UgaWYgKHIuYmVmb3JlKSBvLnRvcCA9IHRoaXMucHQyUHgodGhpcy5hc1B0KHIuYmVmb3JlKSk7XG5cbiAgICBpZiAoIXIuYWZ0ZXJBdXRvc3BhY2luZyAmJiByLmFmdGVyTGluZXMpXG4gICAgICBvLmJvdHRvbSA9IHRoaXMucHQyUHgodGhpcy5hc1B0KHIuYWZ0ZXJMaW5lcykpO1xuICAgIGVsc2UgaWYgKHIuYWZ0ZXIpIG8uYm90dG9tID0gdGhpcy5wdDJQeCh0aGlzLmFzUHQoci5hZnRlcikpO1xuXG4gICAgaWYgKCFyLmxpbmUpIHJldHVybiBvO1xuXG4gICAgc3dpdGNoICh4LmxpbmVSdWxlKSB7XG4gICAgICBjYXNlICdhdExlYXN0JzpcbiAgICAgIGNhc2UgJ2V4YWN0JzpcbiAgICAgICAgby5saW5lSGVpZ2h0ID0gdGhpcy5wdDJQeCh0aGlzLmFzUHQoeC5saW5lKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYXV0byc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBvLmxpbmVIZWlnaHQgPSAocGFyc2VJbnQoci5saW5lKSAqIDEwMCkgLyAyNDAgKyAnJSc7XG4gICAgfVxuICAgIG8ubGluZVJ1bGUgPSB4LmxpbmVSdWxlO1xuICAgIHJldHVybiBvO1xuICB9XG4gIHBCZHIoeCkge1xuICAgIGxldCByID0ge307XG4gICAgbGV0IGJkciA9IElubGluZS5Qcm9wZXJ0aWVzLnByb3RvdHlwZS5iZHIuYmluZCh0aGlzKTtcbiAgICBBcnJheS5mcm9tKHguY2hpbGROb2RlcykuZm9yRWFjaChcbiAgICAgIChhKSA9PiBhLmxvY2FsTmFtZSAmJiAoclthLmxvY2FsTmFtZV0gPSBiZHIoYSkpXG4gICAgKTtcbiAgICByZXR1cm4gcjtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdwYXJhZ3JhcGgnO1xuICB9XG59XG5cbmNsYXNzIEZyYW1lUHJvcGVydGllcyBleHRlbmRzIFN0eWxlLlByb3BlcnRpZXMge1xuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdmcmFtZSc7XG4gIH1cbn1cbiJdfQ==