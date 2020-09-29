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
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL3Jvdy5qcyJdLCJuYW1lcyI6WyJyb3ciLCJ3RG9jIiwicGFyc2VDb250ZXh0IiwidGFibGUiLCJwdXNoUm93IiwiYXJndW1lbnRzIiwicG9wUm93IiwicHIiLCJ3WG1sIiwiJDEiLCJUYWJsZVN0eWxlIiwiUm93UHJvcGVydGllcyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxHOzs7Ozs7Ozs7Ozs0QkFDWDtBQUNOLFdBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QkMsS0FBdkIsQ0FBNkJDLE9BQTdCLENBQXFDLElBQXJDO0FBQ0EsdUdBQWVDLFNBQWY7QUFDQSxXQUFLSixJQUFMLENBQVVDLFlBQVYsQ0FBdUJDLEtBQXZCLENBQTZCRyxNQUE3QixDQUFvQyxJQUFwQztBQUNEOzs7bUNBQ2NDLEUsRUFBSTtBQUNqQixhQUNFLENBQUNBLEtBQUssS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsT0FBYixDQUFOLEtBQ0EsSUFBSUMsZ0JBQVdDLGFBQWYsQ0FBNkJKLEVBQTdCLEVBQWlDLEtBQUtOLElBQXRDLEVBQTRDLElBQTVDLENBRkY7QUFJRDs7O3dCQUNpQjtBQUNoQixhQUFPLEtBQVA7QUFDRDs7OztFQWQ4QlcsUUFBUSxVQUFSLEM7O2tCQUFaWixHIiwiZmlsZSI6InJvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYWJsZVN0eWxlIGZyb20gJy4vc3R5bGUvdGFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByb3cgZXh0ZW5kcyByZXF1aXJlKCcuLi9tb2RlbCcpIHtcbiAgcGFyc2UoKSB7XG4gICAgdGhpcy53RG9jLnBhcnNlQ29udGV4dC50YWJsZS5wdXNoUm93KHRoaXMpO1xuICAgIHN1cGVyLnBhcnNlKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy53RG9jLnBhcnNlQ29udGV4dC50YWJsZS5wb3BSb3codGhpcyk7XG4gIH1cbiAgZ2V0RGlyZWN0U3R5bGUocHIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHByID0gdGhpcy53WG1sLiQxKCc+dHJQcicpKSAmJlxuICAgICAgbmV3IFRhYmxlU3R5bGUuUm93UHJvcGVydGllcyhwciwgdGhpcy53RG9jLCB0aGlzKVxuICAgICk7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAncm93JztcbiAgfVxufVxuIl19