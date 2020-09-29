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

var cell = function (_require) {
  _inherits(cell, _require);

  function cell() {
    _classCallCheck(this, cell);

    return _possibleConstructorReturn(this, (cell.__proto__ || Object.getPrototypeOf(cell)).apply(this, arguments));
  }

  _createClass(cell, [{
    key: 'parse',
    value: function parse() {
      this.wDoc.parseContext.table.pushCell(this);
      _get(cell.prototype.__proto__ || Object.getPrototypeOf(cell.prototype), 'parse', this).apply(this, arguments);
      this.wDoc.parseContext.table.popCell(this);
    }
  }, {
    key: 'getDirectStyle',
    value: function getDirectStyle(pr) {
      return (pr = this.wXml.$1('>tcPr')) && new _table2.default.CellProperties(pr, this.wDoc, this);
    }
  }, {
    key: 'isFirstRow',
    value: function isFirstRow() {
      return this.wDoc.parseContext.table.isFirstRow();
    }
  }, {
    key: 'isLastRow',
    value: function isLastRow() {
      return this.wDoc.parseContext.table.isLastRow();
    }
  }, {
    key: 'isFirstCol',
    value: function isFirstCol() {
      return this.wDoc.parseContext.table.isFirstCol();
    }
  }, {
    key: 'isLastCol',
    value: function isLastCol() {
      return this.wDoc.parseContext.table.isLastCol();
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'cell';
    }
  }]);

  return cell;
}(require('../model'));

exports.default = cell;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2NlbGwuanMiXSwibmFtZXMiOlsiY2VsbCIsIndEb2MiLCJwYXJzZUNvbnRleHQiLCJ0YWJsZSIsInB1c2hDZWxsIiwiYXJndW1lbnRzIiwicG9wQ2VsbCIsInByIiwid1htbCIsIiQxIiwiVGFibGVTdHlsZSIsIkNlbGxQcm9wZXJ0aWVzIiwiaXNGaXJzdFJvdyIsImlzTGFzdFJvdyIsImlzRmlyc3RDb2wiLCJpc0xhc3RDb2wiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7NEJBS1g7QUFDTixXQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJDLEtBQXZCLENBQTZCQyxRQUE3QixDQUFzQyxJQUF0QztBQUNBLHlHQUFlQyxTQUFmO0FBQ0EsV0FBS0osSUFBTCxDQUFVQyxZQUFWLENBQXVCQyxLQUF2QixDQUE2QkcsT0FBN0IsQ0FBcUMsSUFBckM7QUFDRDs7O21DQUVjQyxFLEVBQUk7QUFDakIsYUFDRSxDQUFDQSxLQUFLLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLE9BQWIsQ0FBTixLQUNBLElBQUlDLGdCQUFXQyxjQUFmLENBQThCSixFQUE5QixFQUFrQyxLQUFLTixJQUF2QyxFQUE2QyxJQUE3QyxDQUZGO0FBSUQ7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0EsSUFBTCxDQUFVQyxZQUFWLENBQXVCQyxLQUF2QixDQUE2QlMsVUFBN0IsRUFBUDtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtYLElBQUwsQ0FBVUMsWUFBVixDQUF1QkMsS0FBdkIsQ0FBNkJVLFNBQTdCLEVBQVA7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLWixJQUFMLENBQVVDLFlBQVYsQ0FBdUJDLEtBQXZCLENBQTZCVyxVQUE3QixFQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS2IsSUFBTCxDQUFVQyxZQUFWLENBQXVCQyxLQUF2QixDQUE2QlksU0FBN0IsRUFBUDtBQUNEOzs7d0JBL0JpQjtBQUNoQixhQUFPLE1BQVA7QUFDRDs7OztFQUgrQkMsUUFBUSxVQUFSLEM7O2tCQUFiaEIsSSIsImZpbGUiOiJjZWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhYmxlU3R5bGUgZnJvbSAnLi9zdHlsZS90YWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNlbGwgZXh0ZW5kcyByZXF1aXJlKCcuLi9tb2RlbCcpIHtcbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnY2VsbCc7XG4gIH1cblxuICBwYXJzZSgpIHtcbiAgICB0aGlzLndEb2MucGFyc2VDb250ZXh0LnRhYmxlLnB1c2hDZWxsKHRoaXMpO1xuICAgIHN1cGVyLnBhcnNlKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy53RG9jLnBhcnNlQ29udGV4dC50YWJsZS5wb3BDZWxsKHRoaXMpO1xuICB9XG5cbiAgZ2V0RGlyZWN0U3R5bGUocHIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHByID0gdGhpcy53WG1sLiQxKCc+dGNQcicpKSAmJlxuICAgICAgbmV3IFRhYmxlU3R5bGUuQ2VsbFByb3BlcnRpZXMocHIsIHRoaXMud0RvYywgdGhpcylcbiAgICApO1xuICB9XG5cbiAgaXNGaXJzdFJvdygpIHtcbiAgICByZXR1cm4gdGhpcy53RG9jLnBhcnNlQ29udGV4dC50YWJsZS5pc0ZpcnN0Um93KCk7XG4gIH1cblxuICBpc0xhc3RSb3coKSB7XG4gICAgcmV0dXJuIHRoaXMud0RvYy5wYXJzZUNvbnRleHQudGFibGUuaXNMYXN0Um93KCk7XG4gIH1cblxuICBpc0ZpcnN0Q29sKCkge1xuICAgIHJldHVybiB0aGlzLndEb2MucGFyc2VDb250ZXh0LnRhYmxlLmlzRmlyc3RDb2woKTtcbiAgfVxuXG4gIGlzTGFzdENvbCgpIHtcbiAgICByZXR1cm4gdGhpcy53RG9jLnBhcnNlQ29udGV4dC50YWJsZS5pc0xhc3RDb2woKTtcbiAgfVxufVxuIl19