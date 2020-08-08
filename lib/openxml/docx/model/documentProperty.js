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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZG9jdW1lbnRQcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudFByb3BlcnR5Iiwid1htbCIsImIiLCJjIiwibmFtZSIsImFyZ3VtZW50cyIsImtleSIsInRvTG93ZXJDYXNlIiwidmFsdWUiLCIkMSIsInRleHRDb250ZW50IiwidHJpbSIsIndEb2MiLCJwcm9wcyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxnQjs7O0FBQ25CLDRCQUFZQyxJQUFaLEVBQWtCQyxDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0JDLElBQXhCLEVBQThCO0FBQUE7O0FBQUEscUlBQ25CQyxTQURtQjs7QUFFNUIsVUFBS0MsR0FBTCxHQUFXRixLQUFLRyxXQUFMLEVBQVg7QUFDQSxVQUFLQyxLQUFMLEdBQWFQLEtBQUtRLEVBQUwsQ0FBUSxhQUFSLEVBQXVCQyxXQUF2QixDQUFtQ0MsSUFBbkMsRUFBYjtBQUNBLFFBQUksQ0FBQyxNQUFLQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsTUFBS1AsR0FBckIsQ0FBTCxFQUFnQyxNQUFLTSxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsTUFBS1AsR0FBckIsSUFBNEIsTUFBS0UsS0FBakM7QUFKSjtBQUs3Qjs7Ozt3QkFDaUI7QUFDaEIsYUFBTyxrQkFBUDtBQUNEOzs7O0VBVDJDTSxRQUFRLE9BQVIsQzs7a0JBQXpCZCxnQiIsImZpbGUiOiJkb2N1bWVudFByb3BlcnR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZG9jdW1lbnRQcm9wZXJ0eSBleHRlbmRzIHJlcXVpcmUoJy4vc2R0Jykge1xuICBjb25zdHJ1Y3Rvcih3WG1sLCBiLCBjLCBuYW1lKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLmtleSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLnZhbHVlID0gd1htbC4kMSgnPnNkdENvbnRlbnQnKS50ZXh0Q29udGVudC50cmltKCk7XG4gICAgaWYgKCF0aGlzLndEb2MucHJvcHNbdGhpcy5rZXldKSB0aGlzLndEb2MucHJvcHNbdGhpcy5rZXldID0gdGhpcy52YWx1ZTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdkb2N1bWVudFByb3BlcnR5JztcbiAgfVxufVxuIl19