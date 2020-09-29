'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hyperlink = function (_require) {
  _inherits(hyperlink, _require);

  function hyperlink(instruct) {
    _classCallCheck(this, hyperlink);

    var _this = _possibleConstructorReturn(this, (hyperlink.__proto__ || Object.getPrototypeOf(hyperlink)).apply(this, arguments));

    _this.link = instruct.split('"')[1];
    return _this;
  }

  _createClass(hyperlink, [{
    key: 'getLink',
    value: function getLink() {
      return this.link;
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'field.hyperlink';
    }
  }]);

  return hyperlink;
}(require('./field'));

exports.default = hyperlink;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2ZpZWxkL2h5cGVybGluay5qcyJdLCJuYW1lcyI6WyJoeXBlcmxpbmsiLCJpbnN0cnVjdCIsImFyZ3VtZW50cyIsImxpbmsiLCJzcGxpdCIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxTOzs7QUFDbkIscUJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFBQSx1SEFDWEMsU0FEVzs7QUFFcEIsVUFBS0MsSUFBTCxHQUFZRixTQUFTRyxLQUFULENBQWUsR0FBZixFQUFvQixDQUFwQixDQUFaO0FBRm9CO0FBR3JCOzs7OzhCQUNTO0FBQ1IsYUFBTyxLQUFLRCxJQUFaO0FBQ0Q7Ozt3QkFFaUI7QUFDaEIsYUFBTyxpQkFBUDtBQUNEOzs7O0VBWG9DRSxRQUFRLFNBQVIsQzs7a0JBQWxCTCxTIiwiZmlsZSI6Imh5cGVybGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIGh5cGVybGluayBleHRlbmRzIHJlcXVpcmUoJy4vZmllbGQnKSB7XG4gIGNvbnN0cnVjdG9yKGluc3RydWN0KSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLmxpbmsgPSBpbnN0cnVjdC5zcGxpdCgnXCInKVsxXTtcbiAgfVxuICBnZXRMaW5rKCkge1xuICAgIHJldHVybiB0aGlzLmxpbms7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdmaWVsZC5oeXBlcmxpbmsnO1xuICB9XG59XG4iXX0=