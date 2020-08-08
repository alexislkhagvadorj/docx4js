'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _table = require('./style/table');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var row = function (_require) {
  _inherits(row, _require);

  function row() {
    _classCallCheck(this, row);

    return _possibleConstructorReturn(this, (row.__proto__ || Object.getPrototypeOf(row)).apply(this, arguments));
  }

  _createClass(row, [{
    key: 'parse',
    value: function parse() {
      this.wDoc.parseContext.table.pushRow(this);
      _get(row.prototype.__proto__ || Object.getPrototypeOf(row.prototype), 'parse', this).apply(this, arguments);
      this.wDoc.parseContext.table.popRow(this);
    }
  }, {
    key: 'getDirectStyle',
    value: function getDirectStyle(pr) {
      return (pr = this.wXml.$1('>trPr')) && new _table2.default.RowProperties(pr, this.wDoc, this);
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'row';
    }
  }]);

  return row;
}(require('../model'));

exports.default = row;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvcm93LmpzIl0sIm5hbWVzIjpbInJvdyIsIndEb2MiLCJwYXJzZUNvbnRleHQiLCJ0YWJsZSIsInB1c2hSb3ciLCJhcmd1bWVudHMiLCJwb3BSb3ciLCJwciIsIndYbWwiLCIkMSIsIlRhYmxlU3R5bGUiLCJSb3dQcm9wZXJ0aWVzIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEc7Ozs7Ozs7Ozs7OzRCQUNYO0FBQ04sV0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCQyxLQUF2QixDQUE2QkMsT0FBN0IsQ0FBcUMsSUFBckM7QUFDQSx1R0FBZUMsU0FBZjtBQUNBLFdBQUtKLElBQUwsQ0FBVUMsWUFBVixDQUF1QkMsS0FBdkIsQ0FBNkJHLE1BQTdCLENBQW9DLElBQXBDO0FBQ0Q7OzttQ0FDY0MsRSxFQUFJO0FBQ2pCLGFBQ0UsQ0FBQ0EsS0FBSyxLQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxPQUFiLENBQU4sS0FDQSxJQUFJQyxnQkFBV0MsYUFBZixDQUE2QkosRUFBN0IsRUFBaUMsS0FBS04sSUFBdEMsRUFBNEMsSUFBNUMsQ0FGRjtBQUlEOzs7d0JBQ2lCO0FBQ2hCLGFBQU8sS0FBUDtBQUNEOzs7O0VBZDhCVyxRQUFRLFVBQVIsQzs7a0JBQVpaLEciLCJmaWxlIjoicm93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhYmxlU3R5bGUgZnJvbSAnLi9zdHlsZS90YWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJvdyBleHRlbmRzIHJlcXVpcmUoJy4uL21vZGVsJykge1xuICBwYXJzZSgpIHtcbiAgICB0aGlzLndEb2MucGFyc2VDb250ZXh0LnRhYmxlLnB1c2hSb3codGhpcyk7XG4gICAgc3VwZXIucGFyc2UoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLndEb2MucGFyc2VDb250ZXh0LnRhYmxlLnBvcFJvdyh0aGlzKTtcbiAgfVxuICBnZXREaXJlY3RTdHlsZShwcikge1xuICAgIHJldHVybiAoXG4gICAgICAocHIgPSB0aGlzLndYbWwuJDEoJz50clByJykpICYmXG4gICAgICBuZXcgVGFibGVTdHlsZS5Sb3dQcm9wZXJ0aWVzKHByLCB0aGlzLndEb2MsIHRoaXMpXG4gICAgKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdyb3cnO1xuICB9XG59XG4iXX0=