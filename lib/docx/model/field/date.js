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

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2ZpZWxkL2RhdGUuanMiXSwibmFtZXMiOlsiRGF0ZSIsIkZpZWxkQ29kZSIsIkZpZWxkIiwib3B0aW9uIiwibmV4dFN3aXRjaCIsInR5cGUiLCJpIiwiZGF0YSIsImluZGV4T2YiLCJmb3JtYXQiLCJzdWJzdHJpbmciLCJDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7O3dCQUNEO0FBQ2hCLGFBQU8sWUFBUDtBQUNEOzs7d0JBQ3NCO0FBQ3JCLGFBQU9DLFNBQVA7QUFDRDs7OztFQU4rQkMsZTs7a0JBQWJGLEk7O0lBU2ZDLFM7Ozs7Ozs7Ozs7OzRCQUNJO0FBQ04sVUFBSUUsU0FBUyxJQUFiO0FBQ0EsYUFBUUEsU0FBUyxLQUFLQyxVQUFMLEVBQWpCLEVBQXFDO0FBQ25DLGdCQUFRRCxPQUFPRSxJQUFmO0FBQ0UsZUFBSyxHQUFMO0FBQ0UsZ0JBQUlDLElBQUlILE9BQU9JLElBQVAsQ0FBWUMsT0FBWixDQUFvQixHQUFwQixDQUFSO0FBQ0EsZ0JBQUlGLEtBQUssQ0FBQyxDQUFWLEVBQWEsS0FBS0csTUFBTCxHQUFjTixPQUFPSSxJQUFQLENBQVlHLFNBQVosQ0FBc0IsQ0FBdEIsRUFBeUJKLENBQXpCLENBQWQsQ0FBYixLQUNLLEtBQUtHLE1BQUwsR0FBY04sT0FBT0ksSUFBckI7QUFDTDtBQUxKO0FBT0Q7QUFDRjs7OztFQVpxQkksZ0IiLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGaWVsZCwgeyBGaWVsZENvZGUgYXMgQ29kZSB9IGZyb20gJy4vZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlIGV4dGVuZHMgRmllbGQge1xuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdmaWVsZC5kYXRlJztcbiAgfVxuICBzdGF0aWMgZ2V0IEZpZWxkQ29kZSgpIHtcbiAgICByZXR1cm4gRmllbGRDb2RlO1xuICB9XG59XG5cbmNsYXNzIEZpZWxkQ29kZSBleHRlbmRzIENvZGUge1xuICBwYXJzZSgpIHtcbiAgICB2YXIgb3B0aW9uID0gbnVsbDtcbiAgICB3aGlsZSAoKG9wdGlvbiA9IHRoaXMubmV4dFN3aXRjaCgpKSkge1xuICAgICAgc3dpdGNoIChvcHRpb24udHlwZSkge1xuICAgICAgICBjYXNlICdAJzpcbiAgICAgICAgICB2YXIgaSA9IG9wdGlvbi5kYXRhLmluZGV4T2YoJ1wiJyk7XG4gICAgICAgICAgaWYgKGkgIT0gLTEpIHRoaXMuZm9ybWF0ID0gb3B0aW9uLmRhdGEuc3Vic3RyaW5nKDAsIGkpO1xuICAgICAgICAgIGVsc2UgdGhpcy5mb3JtYXQgPSBvcHRpb24uZGF0YTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==