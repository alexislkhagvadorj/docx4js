'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fieldSeperate = function (_require) {
  _inherits(fieldSeperate, _require);

  function fieldSeperate() {
    _classCallCheck(this, fieldSeperate);

    return _possibleConstructorReturn(this, (fieldSeperate.__proto__ || Object.getPrototypeOf(fieldSeperate)).apply(this, arguments));
  }

  _createClass(fieldSeperate, [{
    key: 'parse',
    value: function parse(factories) {
      this.wDoc.parseContext.field.seperate(this);
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'fieldEnd';
    }
  }]);

  return fieldSeperate;
}(require('../model'));

exports.default = fieldSeperate;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZmllbGRTZXBhcmF0ZS5qcyJdLCJuYW1lcyI6WyJmaWVsZFNlcGVyYXRlIiwiZmFjdG9yaWVzIiwid0RvYyIsInBhcnNlQ29udGV4dCIsImZpZWxkIiwic2VwZXJhdGUiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFxQkEsYTs7Ozs7Ozs7Ozs7MEJBQ2JDLFMsRUFBVztBQUNmLFdBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QkMsS0FBdkIsQ0FBNkJDLFFBQTdCLENBQXNDLElBQXRDO0FBQ0Q7Ozt3QkFDaUI7QUFDaEIsYUFBTyxVQUFQO0FBQ0Q7Ozs7RUFOd0NDLFFBQVEsVUFBUixDOztrQkFBdEJOLGEiLCJmaWxlIjoiZmllbGRTZXBhcmF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIGZpZWxkU2VwZXJhdGUgZXh0ZW5kcyByZXF1aXJlKCcuLi9tb2RlbCcpIHtcbiAgcGFyc2UoZmFjdG9yaWVzKSB7XG4gICAgdGhpcy53RG9jLnBhcnNlQ29udGV4dC5maWVsZC5zZXBlcmF0ZSh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdmaWVsZEVuZCc7XG4gIH1cbn1cbiJdfQ==