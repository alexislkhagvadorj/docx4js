'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fieldInstruct = function (_require) {
  _inherits(fieldInstruct, _require);

  function fieldInstruct(wXml, wDoc, mParent) {
    _classCallCheck(this, fieldInstruct);

    var _this = _possibleConstructorReturn(this, (fieldInstruct.__proto__ || Object.getPrototypeOf(fieldInstruct)).apply(this, arguments));

    wDoc.parseContext.field.instruct(wXml.textContent.trim());
    return _this;
  }

  _createClass(fieldInstruct, [{
    key: 'parse',
    value: function parse() {}
  }], [{
    key: 'type',
    get: function get() {
      return 'fieldInstruct';
    }
  }]);

  return fieldInstruct;
}(require('../model'));

exports.default = fieldInstruct;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2ZpZWxkSW5zdHJ1Y3QuanMiXSwibmFtZXMiOlsiZmllbGRJbnN0cnVjdCIsIndYbWwiLCJ3RG9jIiwibVBhcmVudCIsImFyZ3VtZW50cyIsInBhcnNlQ29udGV4dCIsImZpZWxkIiwiaW5zdHJ1Y3QiLCJ0ZXh0Q29udGVudCIsInRyaW0iLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFxQkEsYTs7O0FBQ25CLHlCQUFZQyxJQUFaLEVBQWtCQyxJQUFsQixFQUF3QkMsT0FBeEIsRUFBaUM7QUFBQTs7QUFBQSwrSEFDdEJDLFNBRHNCOztBQUUvQkYsU0FBS0csWUFBTCxDQUFrQkMsS0FBbEIsQ0FBd0JDLFFBQXhCLENBQWlDTixLQUFLTyxXQUFMLENBQWlCQyxJQUFqQixFQUFqQztBQUYrQjtBQUdoQzs7Ozs0QkFDTyxDQUFFOzs7d0JBQ1E7QUFDaEIsYUFBTyxlQUFQO0FBQ0Q7Ozs7RUFSd0NDLFFBQVEsVUFBUixDOztrQkFBdEJWLGEiLCJmaWxlIjoiZmllbGRJbnN0cnVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIGZpZWxkSW5zdHJ1Y3QgZXh0ZW5kcyByZXF1aXJlKCcuLi9tb2RlbCcpIHtcbiAgY29uc3RydWN0b3Iod1htbCwgd0RvYywgbVBhcmVudCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgd0RvYy5wYXJzZUNvbnRleHQuZmllbGQuaW5zdHJ1Y3Qod1htbC50ZXh0Q29udGVudC50cmltKCkpO1xuICB9XG4gIHBhcnNlKCkge31cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnZmllbGRJbnN0cnVjdCc7XG4gIH1cbn1cbiJdfQ==