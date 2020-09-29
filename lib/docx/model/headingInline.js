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
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2hlYWRpbmdJbmxpbmUuanMiXSwibmFtZXMiOlsiaGVhZGluZ0NoYXIiLCJhcmd1bWVudHMiLCJvdXRsaW5lTHZsIiwibGVuZ3RoIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLFc7Ozs7O3dCQUNEO0FBQ2hCLGFBQU8sYUFBUDtBQUNEOzs7QUFFRCx5QkFBYztBQUFBOztBQUFBLDJIQUNIQyxTQURHOztBQUVaLFVBQUtDLFVBQUwsR0FBa0JELFVBQVVBLFVBQVVFLE1BQVYsR0FBbUIsQ0FBN0IsQ0FBbEI7QUFGWTtBQUdiOzs7O3NDQUNpQjtBQUNoQixhQUFPLEtBQUtELFVBQVo7QUFDRDs7OztFQVhzQ0UsUUFBUSxVQUFSLEM7O2tCQUFwQkosVyIsImZpbGUiOiJoZWFkaW5nSW5saW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgaGVhZGluZ0NoYXIgZXh0ZW5kcyByZXF1aXJlKCcuL2lubGluZScpIHtcbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnaGVhZGluZ0NoYXInO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLm91dGxpbmVMdmwgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdO1xuICB9XG4gIGdldE91dGxpbmVMZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5vdXRsaW5lTHZsO1xuICB9XG59XG4iXX0=