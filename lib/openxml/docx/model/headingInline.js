'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var headingChar = function (_require) {
  _inherits(headingChar, _require);

  _createClass(headingChar, null, [{
    key: 'type',
    get: function get() {
      return 'headingChar';
    }
  }]);

  function headingChar() {
    _classCallCheck(this, headingChar);

    var _this = _possibleConstructorReturn(this, (headingChar.__proto__ || Object.getPrototypeOf(headingChar)).apply(this, arguments));

    _this.outlineLvl = arguments[arguments.length - 1];
    return _this;
  }

  _createClass(headingChar, [{
    key: 'getOutlineLevel',
    value: function getOutlineLevel() {
      return this.outlineLvl;
    }
  }]);

  return headingChar;
}(require('./inline'));

exports.default = headingChar;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvaGVhZGluZ0lubGluZS5qcyJdLCJuYW1lcyI6WyJoZWFkaW5nQ2hhciIsImFyZ3VtZW50cyIsIm91dGxpbmVMdmwiLCJsZW5ndGgiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFxQkEsVzs7Ozs7d0JBQ0Q7QUFDaEIsYUFBTyxhQUFQO0FBQ0Q7OztBQUVELHlCQUFjO0FBQUE7O0FBQUEsMkhBQ0hDLFNBREc7O0FBRVosVUFBS0MsVUFBTCxHQUFrQkQsVUFBVUEsVUFBVUUsTUFBVixHQUFtQixDQUE3QixDQUFsQjtBQUZZO0FBR2I7Ozs7c0NBQ2lCO0FBQ2hCLGFBQU8sS0FBS0QsVUFBWjtBQUNEOzs7O0VBWHNDRSxRQUFRLFVBQVIsQzs7a0JBQXBCSixXIiwiZmlsZSI6ImhlYWRpbmdJbmxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBoZWFkaW5nQ2hhciBleHRlbmRzIHJlcXVpcmUoJy4vaW5saW5lJykge1xuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdoZWFkaW5nQ2hhcic7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMub3V0bGluZUx2bCA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG4gIH1cbiAgZ2V0T3V0bGluZUxldmVsKCkge1xuICAgIHJldHVybiB0aGlzLm91dGxpbmVMdmw7XG4gIH1cbn1cbiJdfQ==