'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var documentStyles = function (_require) {
  _inherits(documentStyles, _require);

  function documentStyles() {
    _classCallCheck(this, documentStyles);

    return _possibleConstructorReturn(this, (documentStyles.__proto__ || Object.getPrototypeOf(documentStyles)).apply(this, arguments));
  }

  _createClass(documentStyles, [{
    key: '_getValidChildren',
    value: function _getValidChildren() {
      return this.wXml.$('docDefaults,style');
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'documentStyles';
    }
  }]);

  return documentStyles;
}(require('../model'));

exports.default = documentStyles;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2RvY3VtZW50U3R5bGVzLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50U3R5bGVzIiwid1htbCIsIiQiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFxQkEsYzs7Ozs7Ozs7Ozs7d0NBQ0M7QUFDbEIsYUFBTyxLQUFLQyxJQUFMLENBQVVDLENBQVYsQ0FBWSxtQkFBWixDQUFQO0FBQ0Q7Ozt3QkFDaUI7QUFDaEIsYUFBTyxnQkFBUDtBQUNEOzs7O0VBTnlDQyxRQUFRLFVBQVIsQzs7a0JBQXZCSCxjIiwiZmlsZSI6ImRvY3VtZW50U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZG9jdW1lbnRTdHlsZXMgZXh0ZW5kcyByZXF1aXJlKCcuLi9tb2RlbCcpIHtcbiAgX2dldFZhbGlkQ2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMud1htbC4kKCdkb2NEZWZhdWx0cyxzdHlsZScpO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2RvY3VtZW50U3R5bGVzJztcbiAgfVxufVxuIl19