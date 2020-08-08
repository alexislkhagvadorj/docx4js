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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZmllbGRFbmQuanMiXSwibmFtZXMiOlsiZmllbGRFbmQiLCJmIiwiZmFjdG9yaWVzIiwidmlzaXRvcnMiLCJ3RG9jIiwicGFyc2VDb250ZXh0IiwiZmllbGQiLCJlbmQiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFxQkEsUTs7Ozs7Ozs7Ozs7NkJBQ1ZDLEMsRUFBR0MsUyxFQUFXQyxRLEVBQVU7QUFDL0IsV0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCQyxLQUF2QixDQUE2QkMsR0FBN0IsQ0FBaUMsSUFBakMsRUFBdUNKLFFBQXZDO0FBQ0Q7Ozt3QkFDaUI7QUFDaEIsYUFBTyxVQUFQO0FBQ0Q7Ozs7RUFObUNLLFFBQVEsVUFBUixDOztrQkFBakJSLFEiLCJmaWxlIjoiZmllbGRFbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBmaWVsZEVuZCBleHRlbmRzIHJlcXVpcmUoJy4uL21vZGVsJykge1xuICBfaXRlcmF0ZShmLCBmYWN0b3JpZXMsIHZpc2l0b3JzKSB7XG4gICAgdGhpcy53RG9jLnBhcnNlQ29udGV4dC5maWVsZC5lbmQodGhpcywgdmlzaXRvcnMpO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2ZpZWxkRW5kJztcbiAgfVxufVxuIl19