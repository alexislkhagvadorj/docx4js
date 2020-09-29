'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var documentProperty = function (_require) {
  _inherits(documentProperty, _require);

  function documentProperty(wXml, b, c, name) {
    _classCallCheck(this, documentProperty);

    var _this = _possibleConstructorReturn(this, (documentProperty.__proto__ || Object.getPrototypeOf(documentProperty)).apply(this, arguments));

    _this.key = name.toLowerCase();
    _this.value = wXml.$1('>sdtContent').textContent.trim();
    if (!_this.wDoc.props[_this.key]) _this.wDoc.props[_this.key] = _this.value;
    return _this;
  }

  _createClass(documentProperty, null, [{
    key: 'type',
    get: function get() {
      return 'documentProperty';
    }
  }]);

  return documentProperty;
}(require('./sdt'));

exports.default = documentProperty;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2RvY3VtZW50UHJvcGVydHkuanMiXSwibmFtZXMiOlsiZG9jdW1lbnRQcm9wZXJ0eSIsIndYbWwiLCJiIiwiYyIsIm5hbWUiLCJhcmd1bWVudHMiLCJrZXkiLCJ0b0xvd2VyQ2FzZSIsInZhbHVlIiwiJDEiLCJ0ZXh0Q29udGVudCIsInRyaW0iLCJ3RG9jIiwicHJvcHMiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFxQkEsZ0I7OztBQUNuQiw0QkFBWUMsSUFBWixFQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCQyxJQUF4QixFQUE4QjtBQUFBOztBQUFBLHFJQUNuQkMsU0FEbUI7O0FBRTVCLFVBQUtDLEdBQUwsR0FBV0YsS0FBS0csV0FBTCxFQUFYO0FBQ0EsVUFBS0MsS0FBTCxHQUFhUCxLQUFLUSxFQUFMLENBQVEsYUFBUixFQUF1QkMsV0FBdkIsQ0FBbUNDLElBQW5DLEVBQWI7QUFDQSxRQUFJLENBQUMsTUFBS0MsSUFBTCxDQUFVQyxLQUFWLENBQWdCLE1BQUtQLEdBQXJCLENBQUwsRUFBZ0MsTUFBS00sSUFBTCxDQUFVQyxLQUFWLENBQWdCLE1BQUtQLEdBQXJCLElBQTRCLE1BQUtFLEtBQWpDO0FBSko7QUFLN0I7Ozs7d0JBQ2lCO0FBQ2hCLGFBQU8sa0JBQVA7QUFDRDs7OztFQVQyQ00sUUFBUSxPQUFSLEM7O2tCQUF6QmQsZ0IiLCJmaWxlIjoiZG9jdW1lbnRQcm9wZXJ0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIGRvY3VtZW50UHJvcGVydHkgZXh0ZW5kcyByZXF1aXJlKCcuL3NkdCcpIHtcbiAgY29uc3RydWN0b3Iod1htbCwgYiwgYywgbmFtZSkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy5rZXkgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy52YWx1ZSA9IHdYbWwuJDEoJz5zZHRDb250ZW50JykudGV4dENvbnRlbnQudHJpbSgpO1xuICAgIGlmICghdGhpcy53RG9jLnByb3BzW3RoaXMua2V5XSkgdGhpcy53RG9jLnByb3BzW3RoaXMua2V5XSA9IHRoaXMudmFsdWU7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnZG9jdW1lbnRQcm9wZXJ0eSc7XG4gIH1cbn1cbiJdfQ==