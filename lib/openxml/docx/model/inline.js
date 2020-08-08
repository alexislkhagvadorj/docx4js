'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inline = require('./style/inline');

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var inline = function (_require) {
  _inherits(inline, _require);

  function inline() {
    _classCallCheck(this, inline);

    return _possibleConstructorReturn(this, (inline.__proto__ || Object.getPrototypeOf(inline)).apply(this, arguments));
  }

  _createClass(inline, [{
    key: 'getStyleId',
    value: function getStyleId(a) {
      return this._val('>rPr>rStyle') || (a = this.wDoc.style.getDefault(_inline2.default.type)) && a.id;
    }
  }, {
    key: 'getNamedStyle',
    value: function getNamedStyle() {
      return this.wDoc.style.get(this.getStyleId());
    }
  }, {
    key: 'getDirectStyle',
    value: function getDirectStyle(pr) {
      return (pr = this.wXml.$1('>rPr')) && new _inline2.default.Properties(pr, this.wDoc, this);
    }
  }, {
    key: '_shouldIgnore',
    value: function _shouldIgnore(wXml) {
      return wXml.localName == 'rPr';
    }
  }, {
    key: 'isWebHidden',
    value: function isWebHidden() {
      return this.wXml.$1('>rPr>webHidden');
    }
  }, {
    key: 'isHidden',
    value: function isHidden() {
      return this.wXml.$1('>rPr>vanish');
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'inline';
    }
  }]);

  return inline;
}(require('../model'));

exports.default = inline;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvaW5saW5lLmpzIl0sIm5hbWVzIjpbImlubGluZSIsImEiLCJfdmFsIiwid0RvYyIsInN0eWxlIiwiZ2V0RGVmYXVsdCIsIlN0eWxlIiwidHlwZSIsImlkIiwiZ2V0IiwiZ2V0U3R5bGVJZCIsInByIiwid1htbCIsIiQxIiwiUHJvcGVydGllcyIsImxvY2FsTmFtZSIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7K0JBQ1JDLEMsRUFBRztBQUNaLGFBQ0UsS0FBS0MsSUFBTCxDQUFVLGFBQVYsS0FDQyxDQUFDRCxJQUFJLEtBQUtFLElBQUwsQ0FBVUMsS0FBVixDQUFnQkMsVUFBaEIsQ0FBMkJDLGlCQUFNQyxJQUFqQyxDQUFMLEtBQWdETixFQUFFTyxFQUZyRDtBQUlEOzs7b0NBQ2U7QUFDZCxhQUFPLEtBQUtMLElBQUwsQ0FBVUMsS0FBVixDQUFnQkssR0FBaEIsQ0FBb0IsS0FBS0MsVUFBTCxFQUFwQixDQUFQO0FBQ0Q7OzttQ0FDY0MsRSxFQUFJO0FBQ2pCLGFBQ0UsQ0FBQ0EsS0FBSyxLQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxNQUFiLENBQU4sS0FBK0IsSUFBSVAsaUJBQU1RLFVBQVYsQ0FBcUJILEVBQXJCLEVBQXlCLEtBQUtSLElBQTlCLEVBQW9DLElBQXBDLENBRGpDO0FBR0Q7OztrQ0FDYVMsSSxFQUFNO0FBQ2xCLGFBQU9BLEtBQUtHLFNBQUwsSUFBa0IsS0FBekI7QUFDRDs7O2tDQUNhO0FBQ1osYUFBTyxLQUFLSCxJQUFMLENBQVVDLEVBQVYsQ0FBYSxnQkFBYixDQUFQO0FBQ0Q7OzsrQkFDVTtBQUNULGFBQU8sS0FBS0QsSUFBTCxDQUFVQyxFQUFWLENBQWEsYUFBYixDQUFQO0FBQ0Q7Ozt3QkFDaUI7QUFDaEIsYUFBTyxRQUFQO0FBQ0Q7Ozs7RUExQmlDRyxRQUFRLFVBQVIsQzs7a0JBQWZoQixNIiwiZmlsZSI6ImlubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZSBmcm9tICcuL3N0eWxlL2lubGluZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGlubGluZSBleHRlbmRzIHJlcXVpcmUoJy4uL21vZGVsJykge1xuICBnZXRTdHlsZUlkKGEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fdmFsKCc+clByPnJTdHlsZScpIHx8XG4gICAgICAoKGEgPSB0aGlzLndEb2Muc3R5bGUuZ2V0RGVmYXVsdChTdHlsZS50eXBlKSkgJiYgYS5pZClcbiAgICApO1xuICB9XG4gIGdldE5hbWVkU3R5bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMud0RvYy5zdHlsZS5nZXQodGhpcy5nZXRTdHlsZUlkKCkpO1xuICB9XG4gIGdldERpcmVjdFN0eWxlKHByKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIChwciA9IHRoaXMud1htbC4kMSgnPnJQcicpKSAmJiBuZXcgU3R5bGUuUHJvcGVydGllcyhwciwgdGhpcy53RG9jLCB0aGlzKVxuICAgICk7XG4gIH1cbiAgX3Nob3VsZElnbm9yZSh3WG1sKSB7XG4gICAgcmV0dXJuIHdYbWwubG9jYWxOYW1lID09ICdyUHInO1xuICB9XG4gIGlzV2ViSGlkZGVuKCkge1xuICAgIHJldHVybiB0aGlzLndYbWwuJDEoJz5yUHI+d2ViSGlkZGVuJyk7XG4gIH1cbiAgaXNIaWRkZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMud1htbC4kMSgnPnJQcj52YW5pc2gnKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdpbmxpbmUnO1xuICB9XG59XG4iXX0=