'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sdt = function (_require) {
  _inherits(sdt, _require);

  function sdt() {
    _classCallCheck(this, sdt);

    return _possibleConstructorReturn(this, (sdt.__proto__ || Object.getPrototypeOf(sdt)).apply(this, arguments));
  }

  _createClass(sdt, [{
    key: 'getTag',
    value: function getTag(t) {
      return (t = this.wXml.$1('>sdtPr>tag')) && t.attr('w:val') || '';
    }
  }, {
    key: 'isInline',
    value: function isInline() {
      return !this.wXml.$1('p,table');
    }
  }]);

  return sdt;
}(require('./sdt'));

exports.default = sdt;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2NvbnRyb2wuanMiXSwibmFtZXMiOlsic2R0IiwidCIsIndYbWwiLCIkMSIsImF0dHIiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFxQkEsRzs7Ozs7Ozs7Ozs7MkJBQ1pDLEMsRUFBRztBQUNSLGFBQVEsQ0FBQ0EsSUFBSSxLQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxZQUFiLENBQUwsS0FBb0NGLEVBQUVHLElBQUYsQ0FBTyxPQUFQLENBQXJDLElBQXlELEVBQWhFO0FBQ0Q7OzsrQkFDVTtBQUNULGFBQU8sQ0FBQyxLQUFLRixJQUFMLENBQVVDLEVBQVYsQ0FBYSxTQUFiLENBQVI7QUFDRDs7OztFQU44QkUsUUFBUSxPQUFSLEM7O2tCQUFaTCxHIiwiZmlsZSI6ImNvbnRyb2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBzZHQgZXh0ZW5kcyByZXF1aXJlKCcuL3NkdCcpIHtcbiAgZ2V0VGFnKHQpIHtcbiAgICByZXR1cm4gKCh0ID0gdGhpcy53WG1sLiQxKCc+c2R0UHI+dGFnJykpICYmIHQuYXR0cigndzp2YWwnKSkgfHwgJyc7XG4gIH1cbiAgaXNJbmxpbmUoKSB7XG4gICAgcmV0dXJuICF0aGlzLndYbWwuJDEoJ3AsdGFibGUnKTtcbiAgfVxufVxuIl19