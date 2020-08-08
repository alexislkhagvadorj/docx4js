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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc3R5bGUvZG9jdW1lbnQuanMiXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJ3WG1sIiwid0RvYyIsIm1QYXJlbnQiLCJzdHlsZSIsInNldERlZmF1bHQiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFxQkEsUTs7O0FBQ25CLG9CQUFZQyxJQUFaLEVBQWtCQyxJQUFsQixFQUF3QkMsT0FBeEIsRUFBaUM7QUFBQTs7QUFBQSxvSEFDekJGLElBRHlCLEVBQ25CQyxJQURtQixFQUNiQyxPQURhOztBQUUvQkQsU0FBS0UsS0FBTCxDQUFXQyxVQUFYO0FBRitCO0FBR2hDOzs7O2dDQUVXO0FBQ1YsYUFBTyxJQUFQO0FBQ0Q7Ozt3QkFFaUI7QUFDaEIsYUFBTyxnQkFBUDtBQUNEOzs7O0VBWm1DQyxRQUFRLGFBQVIsQzs7a0JBQWpCTixRIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnQgZXh0ZW5kcyByZXF1aXJlKCcuL3BhcmFncmFwaCcpIHtcbiAgY29uc3RydWN0b3Iod1htbCwgd0RvYywgbVBhcmVudCkge1xuICAgIHN1cGVyKHdYbWwsIHdEb2MsIG1QYXJlbnQpO1xuICAgIHdEb2Muc3R5bGUuc2V0RGVmYXVsdCh0aGlzKTtcbiAgfVxuXG4gIGlzRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ3N0eWxlLmRvY3VtZW50JztcbiAgfVxufVxuIl19