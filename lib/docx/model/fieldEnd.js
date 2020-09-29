'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fieldEnd = function (_require) {
  _inherits(fieldEnd, _require);

  function fieldEnd() {
    _classCallCheck(this, fieldEnd);

    return _possibleConstructorReturn(this, (fieldEnd.__proto__ || Object.getPrototypeOf(fieldEnd)).apply(this, arguments));
  }

  _createClass(fieldEnd, [{
    key: '_iterate',
    value: function _iterate(f, factories, visitors) {
      this.wDoc.parseContext.field.end(this, visitors);
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'fieldEnd';
    }
  }]);

  return fieldEnd;
}(require('../model'));

exports.default = fieldEnd;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2ZpZWxkRW5kLmpzIl0sIm5hbWVzIjpbImZpZWxkRW5kIiwiZiIsImZhY3RvcmllcyIsInZpc2l0b3JzIiwid0RvYyIsInBhcnNlQ29udGV4dCIsImZpZWxkIiwiZW5kIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLFE7Ozs7Ozs7Ozs7OzZCQUNWQyxDLEVBQUdDLFMsRUFBV0MsUSxFQUFVO0FBQy9CLFdBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QkMsS0FBdkIsQ0FBNkJDLEdBQTdCLENBQWlDLElBQWpDLEVBQXVDSixRQUF2QztBQUNEOzs7d0JBQ2lCO0FBQ2hCLGFBQU8sVUFBUDtBQUNEOzs7O0VBTm1DSyxRQUFRLFVBQVIsQzs7a0JBQWpCUixRIiwiZmlsZSI6ImZpZWxkRW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZmllbGRFbmQgZXh0ZW5kcyByZXF1aXJlKCcuLi9tb2RlbCcpIHtcbiAgX2l0ZXJhdGUoZiwgZmFjdG9yaWVzLCB2aXNpdG9ycykge1xuICAgIHRoaXMud0RvYy5wYXJzZUNvbnRleHQuZmllbGQuZW5kKHRoaXMsIHZpc2l0b3JzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdmaWVsZEVuZCc7XG4gIH1cbn1cbiJdfQ==