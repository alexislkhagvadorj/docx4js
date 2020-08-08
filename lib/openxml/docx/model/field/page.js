'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var page = function (_require) {
  _inherits(page, _require);

  function page(instruct) {
    _classCallCheck(this, page);

    return _possibleConstructorReturn(this, (page.__proto__ || Object.getPrototypeOf(page)).apply(this, arguments));
  }

  _createClass(page, null, [{
    key: 'type',
    get: function get() {
      return 'field.page';
    }
  }]);

  return page;
}(require('./field'));

exports.default = page;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZmllbGQvcGFnZS5qcyJdLCJuYW1lcyI6WyJwYWdlIiwiaW5zdHJ1Y3QiLCJhcmd1bWVudHMiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFxQkEsSTs7O0FBQ25CLGdCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQUEsd0dBQ1hDLFNBRFc7QUFFckI7Ozs7d0JBRWlCO0FBQ2hCLGFBQU8sWUFBUDtBQUNEOzs7O0VBUCtCQyxRQUFRLFNBQVIsQzs7a0JBQWJILEkiLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIHBhZ2UgZXh0ZW5kcyByZXF1aXJlKCcuL2ZpZWxkJykge1xuICBjb25zdHJ1Y3RvcihpbnN0cnVjdCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdmaWVsZC5wYWdlJztcbiAgfVxufVxuIl19