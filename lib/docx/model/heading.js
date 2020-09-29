'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var heading = function (_require) {
  _inherits(heading, _require);

  function heading() {
    _classCallCheck(this, heading);

    var _this = _possibleConstructorReturn(this, (heading.__proto__ || Object.getPrototypeOf(heading)).apply(this, arguments));

    _this.outlineLvl = arguments[arguments.length - 1];
    return _this;
  }

  _createClass(heading, [{
    key: 'getOutlineLevel',
    value: function getOutlineLevel() {
      return this.outlineLvl;
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'heading';
    }
  }]);

  return heading;
}(require('./paragraph'));

exports.default = heading;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2hlYWRpbmcuanMiXSwibmFtZXMiOlsiaGVhZGluZyIsImFyZ3VtZW50cyIsIm91dGxpbmVMdmwiLCJsZW5ndGgiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFxQkEsTzs7O0FBQ25CLHFCQUFjO0FBQUE7O0FBQUEsbUhBQ0hDLFNBREc7O0FBRVosVUFBS0MsVUFBTCxHQUFrQkQsVUFBVUEsVUFBVUUsTUFBVixHQUFtQixDQUE3QixDQUFsQjtBQUZZO0FBR2I7Ozs7c0NBQ2lCO0FBQ2hCLGFBQU8sS0FBS0QsVUFBWjtBQUNEOzs7d0JBQ2lCO0FBQ2hCLGFBQU8sU0FBUDtBQUNEOzs7O0VBVmtDRSxRQUFRLGFBQVIsQzs7a0JBQWhCSixPIiwiZmlsZSI6ImhlYWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBoZWFkaW5nIGV4dGVuZHMgcmVxdWlyZSgnLi9wYXJhZ3JhcGgnKSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy5vdXRsaW5lTHZsID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgfVxuICBnZXRPdXRsaW5lTGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMub3V0bGluZUx2bDtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdoZWFkaW5nJztcbiAgfVxufVxuIl19