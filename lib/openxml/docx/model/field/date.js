'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = require('./field');

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Date = function (_Field) {
  _inherits(Date, _Field);

  function Date() {
    _classCallCheck(this, Date);

    return _possibleConstructorReturn(this, (Date.__proto__ || Object.getPrototypeOf(Date)).apply(this, arguments));
  }

  _createClass(Date, null, [{
    key: 'type',
    get: function get() {
      return 'field.date';
    }
  }, {
    key: 'FieldCode',
    get: function get() {
      return FieldCode;
    }
  }]);

  return Date;
}(_field2.default);

exports.default = Date;

var FieldCode = function (_Code) {
  _inherits(FieldCode, _Code);

  function FieldCode() {
    _classCallCheck(this, FieldCode);

    return _possibleConstructorReturn(this, (FieldCode.__proto__ || Object.getPrototypeOf(FieldCode)).apply(this, arguments));
  }

  _createClass(FieldCode, [{
    key: 'parse',
    value: function parse() {
      var option = null;
      while (option = this.nextSwitch()) {
        switch (option.type) {
          case '@':
            var i = option.data.indexOf('"');
            if (i != -1) this.format = option.data.substring(0, i);else this.format = option.data;
            break;
        }
      }
    }
  }]);

  return FieldCode;
}(_field.FieldCode);

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZmllbGQvZGF0ZS5qcyJdLCJuYW1lcyI6WyJEYXRlIiwiRmllbGRDb2RlIiwiRmllbGQiLCJvcHRpb24iLCJuZXh0U3dpdGNoIiwidHlwZSIsImkiLCJkYXRhIiwiaW5kZXhPZiIsImZvcm1hdCIsInN1YnN0cmluZyIsIkNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7d0JBQ0Q7QUFDaEIsYUFBTyxZQUFQO0FBQ0Q7Ozt3QkFDc0I7QUFDckIsYUFBT0MsU0FBUDtBQUNEOzs7O0VBTitCQyxlOztrQkFBYkYsSTs7SUFTZkMsUzs7Ozs7Ozs7Ozs7NEJBQ0k7QUFDTixVQUFJRSxTQUFTLElBQWI7QUFDQSxhQUFRQSxTQUFTLEtBQUtDLFVBQUwsRUFBakIsRUFBcUM7QUFDbkMsZ0JBQVFELE9BQU9FLElBQWY7QUFDRSxlQUFLLEdBQUw7QUFDRSxnQkFBSUMsSUFBSUgsT0FBT0ksSUFBUCxDQUFZQyxPQUFaLENBQW9CLEdBQXBCLENBQVI7QUFDQSxnQkFBSUYsS0FBSyxDQUFDLENBQVYsRUFBYSxLQUFLRyxNQUFMLEdBQWNOLE9BQU9JLElBQVAsQ0FBWUcsU0FBWixDQUFzQixDQUF0QixFQUF5QkosQ0FBekIsQ0FBZCxDQUFiLEtBQ0ssS0FBS0csTUFBTCxHQUFjTixPQUFPSSxJQUFyQjtBQUNMO0FBTEo7QUFPRDtBQUNGOzs7O0VBWnFCSSxnQiIsImZpbGUiOiJkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZpZWxkLCB7IEZpZWxkQ29kZSBhcyBDb2RlIH0gZnJvbSAnLi9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGUgZXh0ZW5kcyBGaWVsZCB7XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2ZpZWxkLmRhdGUnO1xuICB9XG4gIHN0YXRpYyBnZXQgRmllbGRDb2RlKCkge1xuICAgIHJldHVybiBGaWVsZENvZGU7XG4gIH1cbn1cblxuY2xhc3MgRmllbGRDb2RlIGV4dGVuZHMgQ29kZSB7XG4gIHBhcnNlKCkge1xuICAgIHZhciBvcHRpb24gPSBudWxsO1xuICAgIHdoaWxlICgob3B0aW9uID0gdGhpcy5uZXh0U3dpdGNoKCkpKSB7XG4gICAgICBzd2l0Y2ggKG9wdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0AnOlxuICAgICAgICAgIHZhciBpID0gb3B0aW9uLmRhdGEuaW5kZXhPZignXCInKTtcbiAgICAgICAgICBpZiAoaSAhPSAtMSkgdGhpcy5mb3JtYXQgPSBvcHRpb24uZGF0YS5zdWJzdHJpbmcoMCwgaSk7XG4gICAgICAgICAgZWxzZSB0aGlzLmZvcm1hdCA9IG9wdGlvbi5kYXRhO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19