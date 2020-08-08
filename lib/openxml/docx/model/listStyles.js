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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvbGlzdFN0eWxlcy5qcyJdLCJuYW1lcyI6WyJsaXN0U3R5bGVzIiwid1htbCIsIiQiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFxQkEsVTs7Ozs7Ozs7Ozs7d0NBQ0M7QUFDbEIsYUFBTyxLQUFLQyxJQUFMLENBQVVDLENBQVYsQ0FBWSxhQUFaLENBQVA7QUFDRDs7O3dCQUNpQjtBQUNoQixhQUFPLFlBQVA7QUFDRDs7OztFQU5xQ0MsUUFBUSxVQUFSLEM7O2tCQUFuQkgsVSIsImZpbGUiOiJsaXN0U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgbGlzdFN0eWxlcyBleHRlbmRzIHJlcXVpcmUoJy4uL21vZGVsJykge1xuICBfZ2V0VmFsaWRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy53WG1sLiQoJ2Fic3RyYWN0TnVtJyk7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnbGlzdFN0eWxlcyc7XG4gIH1cbn1cbiJdfQ==