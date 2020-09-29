'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Document = function (_require) {
  _inherits(Document, _require);

  function Document(wXml, wDoc, mParent) {
    _classCallCheck(this, Document);

    var _this = _possibleConstructorReturn(this, (Document.__proto__ || Object.getPrototypeOf(Document)).call(this, wXml, wDoc, mParent));

    wDoc.style.setDefault(_this);
    return _this;
  }

  _createClass(Document, [{
    key: 'isDefault',
    value: function isDefault() {
      return true;
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'style.document';
    }
  }]);

  return Document;
}(require('./paragraph'));

exports.default = Document;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL3N0eWxlL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIkRvY3VtZW50Iiwid1htbCIsIndEb2MiLCJtUGFyZW50Iiwic3R5bGUiLCJzZXREZWZhdWx0IiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLFE7OztBQUNuQixvQkFBWUMsSUFBWixFQUFrQkMsSUFBbEIsRUFBd0JDLE9BQXhCLEVBQWlDO0FBQUE7O0FBQUEsb0hBQ3pCRixJQUR5QixFQUNuQkMsSUFEbUIsRUFDYkMsT0FEYTs7QUFFL0JELFNBQUtFLEtBQUwsQ0FBV0MsVUFBWDtBQUYrQjtBQUdoQzs7OztnQ0FFVztBQUNWLGFBQU8sSUFBUDtBQUNEOzs7d0JBRWlCO0FBQ2hCLGFBQU8sZ0JBQVA7QUFDRDs7OztFQVptQ0MsUUFBUSxhQUFSLEM7O2tCQUFqQk4sUSIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50IGV4dGVuZHMgcmVxdWlyZSgnLi9wYXJhZ3JhcGgnKSB7XG4gIGNvbnN0cnVjdG9yKHdYbWwsIHdEb2MsIG1QYXJlbnQpIHtcbiAgICBzdXBlcih3WG1sLCB3RG9jLCBtUGFyZW50KTtcbiAgICB3RG9jLnN0eWxlLnNldERlZmF1bHQodGhpcyk7XG4gIH1cblxuICBpc0RlZmF1bHQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdzdHlsZS5kb2N1bWVudCc7XG4gIH1cbn1cbiJdfQ==