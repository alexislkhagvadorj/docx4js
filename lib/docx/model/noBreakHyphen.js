'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noBreakHyphen = function (_require) {
  _inherits(noBreakHyphen, _require);

  function noBreakHyphen() {
    _classCallCheck(this, noBreakHyphen);

    return _possibleConstructorReturn(this, (noBreakHyphen.__proto__ || Object.getPrototypeOf(noBreakHyphen)).apply(this, arguments));
  }

  _createClass(noBreakHyphen, [{
    key: 'getText',
    value: function getText() {
      return String.fromCharCode(0x2011);
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'noBreakHyphen';
    }
  }]);

  return noBreakHyphen;
}(require('./text'));

exports.default = noBreakHyphen;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL25vQnJlYWtIeXBoZW4uanMiXSwibmFtZXMiOlsibm9CcmVha0h5cGhlbiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxhOzs7Ozs7Ozs7Ozs4QkFJVDtBQUNSLGFBQU9DLE9BQU9DLFlBQVAsQ0FBb0IsTUFBcEIsQ0FBUDtBQUNEOzs7d0JBTGlCO0FBQ2hCLGFBQU8sZUFBUDtBQUNEOzs7O0VBSHdDQyxRQUFRLFFBQVIsQzs7a0JBQXRCSCxhIiwiZmlsZSI6Im5vQnJlYWtIeXBoZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBub0JyZWFrSHlwaGVuIGV4dGVuZHMgcmVxdWlyZSgnLi90ZXh0Jykge1xuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdub0JyZWFrSHlwaGVuJztcbiAgfVxuICBnZXRUZXh0KCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjAxMSk7XG4gIH1cbn1cbiJdfQ==