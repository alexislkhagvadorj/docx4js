'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var symbol = function (_require) {
  _inherits(symbol, _require);

  function symbol() {
    _classCallCheck(this, symbol);

    return _possibleConstructorReturn(this, (symbol.__proto__ || Object.getPrototypeOf(symbol)).apply(this, arguments));
  }

  _createClass(symbol, [{
    key: 'getText',
    value: function getText() {
      return String.fromCharCode(ParseInt('0x' + this._attr('w:char')));
    }
  }, {
    key: 'getFont',
    value: function getFont() {
      return this._attr('w:font');
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'symbol';
    }
  }]);

  return symbol;
}(require('./text'));

exports.default = symbol;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL3N5bWJvbC5qcyJdLCJuYW1lcyI6WyJzeW1ib2wiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJQYXJzZUludCIsIl9hdHRyIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLE07Ozs7Ozs7Ozs7OzhCQUlUO0FBQ1IsYUFBT0MsT0FBT0MsWUFBUCxDQUFvQkMsU0FBUyxPQUFPLEtBQUtDLEtBQUwsQ0FBVyxRQUFYLENBQWhCLENBQXBCLENBQVA7QUFDRDs7OzhCQUNTO0FBQ1IsYUFBTyxLQUFLQSxLQUFMLENBQVcsUUFBWCxDQUFQO0FBQ0Q7Ozt3QkFSaUI7QUFDaEIsYUFBTyxRQUFQO0FBQ0Q7Ozs7RUFIaUNDLFFBQVEsUUFBUixDOztrQkFBZkwsTSIsImZpbGUiOiJzeW1ib2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBzeW1ib2wgZXh0ZW5kcyByZXF1aXJlKCcuL3RleHQnKSB7XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ3N5bWJvbCc7XG4gIH1cbiAgZ2V0VGV4dCgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShQYXJzZUludCgnMHgnICsgdGhpcy5fYXR0cigndzpjaGFyJykpKTtcbiAgfVxuICBnZXRGb250KCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyKCd3OmZvbnQnKTtcbiAgfVxufVxuIl19