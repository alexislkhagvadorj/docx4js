'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _paragraph = require('./style/paragraph');

var _paragraph2 = _interopRequireDefault(_paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var paragraph = function (_require) {
  _inherits(paragraph, _require);

  function paragraph() {
    _classCallCheck(this, paragraph);

    return _possibleConstructorReturn(this, (paragraph.__proto__ || Object.getPrototypeOf(paragraph)).apply(this, arguments));
  }

  _createClass(paragraph, [{
    key: 'getStyleId',
    value: function getStyleId(a) {
      return this._val('>pPr>pStyle') || (a = this.wDoc.style.getDefault(_paragraph2.default.type)) && a.id;
    }
  }, {
    key: 'getNamedStyle',
    value: function getNamedStyle() {
      return this.wDoc.style.get(this.getStyleId());
    }
  }, {
    key: 'getDirectStyle',
    value: function getDirectStyle(pr) {
      if (pr = this.wXml.$1('>pPr')) return new _paragraph2.default.Properties(pr, this.wDoc, this);
    }
  }, {
    key: '_shouldIgnore',
    value: function _shouldIgnore(wXml) {
      return wXml.localName == 'pPr';
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'paragraph';
    }
  }]);

  return paragraph;
}(require('../model'));

exports.default = paragraph;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvcGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbInBhcmFncmFwaCIsImEiLCJfdmFsIiwid0RvYyIsInN0eWxlIiwiZ2V0RGVmYXVsdCIsIlN0eWxlIiwidHlwZSIsImlkIiwiZ2V0IiwiZ2V0U3R5bGVJZCIsInByIiwid1htbCIsIiQxIiwiUHJvcGVydGllcyIsImxvY2FsTmFtZSIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7K0JBQ1JDLEMsRUFBRztBQUNaLGFBQ0UsS0FBS0MsSUFBTCxDQUFVLGFBQVYsS0FDQyxDQUFDRCxJQUFJLEtBQUtFLElBQUwsQ0FBVUMsS0FBVixDQUFnQkMsVUFBaEIsQ0FBMkJDLG9CQUFNQyxJQUFqQyxDQUFMLEtBQWdETixFQUFFTyxFQUZyRDtBQUlEOzs7b0NBQ2U7QUFDZCxhQUFPLEtBQUtMLElBQUwsQ0FBVUMsS0FBVixDQUFnQkssR0FBaEIsQ0FBb0IsS0FBS0MsVUFBTCxFQUFwQixDQUFQO0FBQ0Q7OzttQ0FDY0MsRSxFQUFJO0FBQ2pCLFVBQUtBLEtBQUssS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsTUFBYixDQUFWLEVBQ0UsT0FBTyxJQUFJUCxvQkFBTVEsVUFBVixDQUFxQkgsRUFBckIsRUFBeUIsS0FBS1IsSUFBOUIsRUFBb0MsSUFBcEMsQ0FBUDtBQUNIOzs7a0NBQ2FTLEksRUFBTTtBQUNsQixhQUFPQSxLQUFLRyxTQUFMLElBQWtCLEtBQXpCO0FBQ0Q7Ozt3QkFDaUI7QUFDaEIsYUFBTyxXQUFQO0FBQ0Q7Ozs7RUFuQm9DQyxRQUFRLFVBQVIsQzs7a0JBQWxCaEIsUyIsImZpbGUiOiJwYXJhZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGUgZnJvbSAnLi9zdHlsZS9wYXJhZ3JhcGgnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFyYWdyYXBoIGV4dGVuZHMgcmVxdWlyZSgnLi4vbW9kZWwnKSB7XG4gIGdldFN0eWxlSWQoYSkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl92YWwoJz5wUHI+cFN0eWxlJykgfHxcbiAgICAgICgoYSA9IHRoaXMud0RvYy5zdHlsZS5nZXREZWZhdWx0KFN0eWxlLnR5cGUpKSAmJiBhLmlkKVxuICAgICk7XG4gIH1cbiAgZ2V0TmFtZWRTdHlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy53RG9jLnN0eWxlLmdldCh0aGlzLmdldFN0eWxlSWQoKSk7XG4gIH1cbiAgZ2V0RGlyZWN0U3R5bGUocHIpIHtcbiAgICBpZiAoKHByID0gdGhpcy53WG1sLiQxKCc+cFByJykpKVxuICAgICAgcmV0dXJuIG5ldyBTdHlsZS5Qcm9wZXJ0aWVzKHByLCB0aGlzLndEb2MsIHRoaXMpO1xuICB9XG4gIF9zaG91bGRJZ25vcmUod1htbCkge1xuICAgIHJldHVybiB3WG1sLmxvY2FsTmFtZSA9PSAncFByJztcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdwYXJhZ3JhcGgnO1xuICB9XG59XG4iXX0=