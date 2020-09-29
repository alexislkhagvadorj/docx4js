'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var header = function (_require) {
  _inherits(header, _require);

  function header(wXml, wDoc, mParent, location) {
    _classCallCheck(this, header);

    var _this = _possibleConstructorReturn(this, (header.__proto__ || Object.getPrototypeOf(header)).apply(this, arguments));

    _this.location = location;
    return _this;
  }

  _createClass(header, null, [{
    key: 'type',
    get: function get() {
      return 'header';
    }
  }]);

  return header;
}(require('../model'));

exports.default = header;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJoZWFkZXIiLCJ3WG1sIiwid0RvYyIsIm1QYXJlbnQiLCJsb2NhdGlvbiIsImFyZ3VtZW50cyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxNOzs7QUFDbkIsa0JBQVlDLElBQVosRUFBa0JDLElBQWxCLEVBQXdCQyxPQUF4QixFQUFpQ0MsUUFBakMsRUFBMkM7QUFBQTs7QUFBQSxpSEFDaENDLFNBRGdDOztBQUV6QyxVQUFLRCxRQUFMLEdBQWdCQSxRQUFoQjtBQUZ5QztBQUcxQzs7Ozt3QkFDaUI7QUFDaEIsYUFBTyxRQUFQO0FBQ0Q7Ozs7RUFQaUNFLFFBQVEsVUFBUixDOztrQkFBZk4sTSIsImZpbGUiOiJoZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBoZWFkZXIgZXh0ZW5kcyByZXF1aXJlKCcuLi9tb2RlbCcpIHtcbiAgY29uc3RydWN0b3Iod1htbCwgd0RvYywgbVBhcmVudCwgbG9jYXRpb24pIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdoZWFkZXInO1xuICB9XG59XG4iXX0=