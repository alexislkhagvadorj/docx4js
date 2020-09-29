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
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2lubGluZS5qcyJdLCJuYW1lcyI6WyJpbmxpbmUiLCJhIiwiX3ZhbCIsIndEb2MiLCJzdHlsZSIsImdldERlZmF1bHQiLCJTdHlsZSIsInR5cGUiLCJpZCIsImdldCIsImdldFN0eWxlSWQiLCJwciIsIndYbWwiLCIkMSIsIlByb3BlcnRpZXMiLCJsb2NhbE5hbWUiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7OytCQUNSQyxDLEVBQUc7QUFDWixhQUNFLEtBQUtDLElBQUwsQ0FBVSxhQUFWLEtBQ0MsQ0FBQ0QsSUFBSSxLQUFLRSxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLFVBQWhCLENBQTJCQyxpQkFBTUMsSUFBakMsQ0FBTCxLQUFnRE4sRUFBRU8sRUFGckQ7QUFJRDs7O29DQUNlO0FBQ2QsYUFBTyxLQUFLTCxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JLLEdBQWhCLENBQW9CLEtBQUtDLFVBQUwsRUFBcEIsQ0FBUDtBQUNEOzs7bUNBQ2NDLEUsRUFBSTtBQUNqQixhQUNFLENBQUNBLEtBQUssS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsTUFBYixDQUFOLEtBQStCLElBQUlQLGlCQUFNUSxVQUFWLENBQXFCSCxFQUFyQixFQUF5QixLQUFLUixJQUE5QixFQUFvQyxJQUFwQyxDQURqQztBQUdEOzs7a0NBQ2FTLEksRUFBTTtBQUNsQixhQUFPQSxLQUFLRyxTQUFMLElBQWtCLEtBQXpCO0FBQ0Q7OztrQ0FDYTtBQUNaLGFBQU8sS0FBS0gsSUFBTCxDQUFVQyxFQUFWLENBQWEsZ0JBQWIsQ0FBUDtBQUNEOzs7K0JBQ1U7QUFDVCxhQUFPLEtBQUtELElBQUwsQ0FBVUMsRUFBVixDQUFhLGFBQWIsQ0FBUDtBQUNEOzs7d0JBQ2lCO0FBQ2hCLGFBQU8sUUFBUDtBQUNEOzs7O0VBMUJpQ0csUUFBUSxVQUFSLEM7O2tCQUFmaEIsTSIsImZpbGUiOiJpbmxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGUgZnJvbSAnLi9zdHlsZS9pbmxpbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBpbmxpbmUgZXh0ZW5kcyByZXF1aXJlKCcuLi9tb2RlbCcpIHtcbiAgZ2V0U3R5bGVJZChhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX3ZhbCgnPnJQcj5yU3R5bGUnKSB8fFxuICAgICAgKChhID0gdGhpcy53RG9jLnN0eWxlLmdldERlZmF1bHQoU3R5bGUudHlwZSkpICYmIGEuaWQpXG4gICAgKTtcbiAgfVxuICBnZXROYW1lZFN0eWxlKCkge1xuICAgIHJldHVybiB0aGlzLndEb2Muc3R5bGUuZ2V0KHRoaXMuZ2V0U3R5bGVJZCgpKTtcbiAgfVxuICBnZXREaXJlY3RTdHlsZShwcikge1xuICAgIHJldHVybiAoXG4gICAgICAocHIgPSB0aGlzLndYbWwuJDEoJz5yUHInKSkgJiYgbmV3IFN0eWxlLlByb3BlcnRpZXMocHIsIHRoaXMud0RvYywgdGhpcylcbiAgICApO1xuICB9XG4gIF9zaG91bGRJZ25vcmUod1htbCkge1xuICAgIHJldHVybiB3WG1sLmxvY2FsTmFtZSA9PSAnclByJztcbiAgfVxuICBpc1dlYkhpZGRlbigpIHtcbiAgICByZXR1cm4gdGhpcy53WG1sLiQxKCc+clByPndlYkhpZGRlbicpO1xuICB9XG4gIGlzSGlkZGVuKCkge1xuICAgIHJldHVybiB0aGlzLndYbWwuJDEoJz5yUHI+dmFuaXNoJyk7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnaW5saW5lJztcbiAgfVxufVxuIl19