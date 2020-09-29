'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var listStyles = function (_require) {
  _inherits(listStyles, _require);

  function listStyles() {
    _classCallCheck(this, listStyles);

    return _possibleConstructorReturn(this, (listStyles.__proto__ || Object.getPrototypeOf(listStyles)).apply(this, arguments));
  }

  _createClass(listStyles, [{
    key: '_getValidChildren',
    value: function _getValidChildren() {
      return this.wXml.$('abstractNum');
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'listStyles';
    }
  }]);

  return listStyles;
}(require('../model'));

exports.default = listStyles;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2xpc3RTdHlsZXMuanMiXSwibmFtZXMiOlsibGlzdFN0eWxlcyIsIndYbWwiLCIkIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLFU7Ozs7Ozs7Ozs7O3dDQUNDO0FBQ2xCLGFBQU8sS0FBS0MsSUFBTCxDQUFVQyxDQUFWLENBQVksYUFBWixDQUFQO0FBQ0Q7Ozt3QkFDaUI7QUFDaEIsYUFBTyxZQUFQO0FBQ0Q7Ozs7RUFOcUNDLFFBQVEsVUFBUixDOztrQkFBbkJILFUiLCJmaWxlIjoibGlzdFN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIGxpc3RTdHlsZXMgZXh0ZW5kcyByZXF1aXJlKCcuLi9tb2RlbCcpIHtcbiAgX2dldFZhbGlkQ2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMud1htbC4kKCdhYnN0cmFjdE51bScpO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2xpc3RTdHlsZXMnO1xuICB9XG59XG4iXX0=