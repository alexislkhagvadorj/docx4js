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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvbm9CcmVha0h5cGhlbi5qcyJdLCJuYW1lcyI6WyJub0JyZWFrSHlwaGVuIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLGE7Ozs7Ozs7Ozs7OzhCQUlUO0FBQ1IsYUFBT0MsT0FBT0MsWUFBUCxDQUFvQixNQUFwQixDQUFQO0FBQ0Q7Ozt3QkFMaUI7QUFDaEIsYUFBTyxlQUFQO0FBQ0Q7Ozs7RUFId0NDLFFBQVEsUUFBUixDOztrQkFBdEJILGEiLCJmaWxlIjoibm9CcmVha0h5cGhlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIG5vQnJlYWtIeXBoZW4gZXh0ZW5kcyByZXF1aXJlKCcuL3RleHQnKSB7XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ25vQnJlYWtIeXBoZW4nO1xuICB9XG4gIGdldFRleHQoKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMDExKTtcbiAgfVxufVxuIl19