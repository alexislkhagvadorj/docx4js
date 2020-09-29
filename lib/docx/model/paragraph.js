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
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL3BhcmFncmFwaC5qcyJdLCJuYW1lcyI6WyJwYXJhZ3JhcGgiLCJhIiwiX3ZhbCIsIndEb2MiLCJzdHlsZSIsImdldERlZmF1bHQiLCJTdHlsZSIsInR5cGUiLCJpZCIsImdldCIsImdldFN0eWxlSWQiLCJwciIsIndYbWwiLCIkMSIsIlByb3BlcnRpZXMiLCJsb2NhbE5hbWUiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7OytCQUNSQyxDLEVBQUc7QUFDWixhQUNFLEtBQUtDLElBQUwsQ0FBVSxhQUFWLEtBQ0MsQ0FBQ0QsSUFBSSxLQUFLRSxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLFVBQWhCLENBQTJCQyxvQkFBTUMsSUFBakMsQ0FBTCxLQUFnRE4sRUFBRU8sRUFGckQ7QUFJRDs7O29DQUNlO0FBQ2QsYUFBTyxLQUFLTCxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JLLEdBQWhCLENBQW9CLEtBQUtDLFVBQUwsRUFBcEIsQ0FBUDtBQUNEOzs7bUNBQ2NDLEUsRUFBSTtBQUNqQixVQUFLQSxLQUFLLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLE1BQWIsQ0FBVixFQUNFLE9BQU8sSUFBSVAsb0JBQU1RLFVBQVYsQ0FBcUJILEVBQXJCLEVBQXlCLEtBQUtSLElBQTlCLEVBQW9DLElBQXBDLENBQVA7QUFDSDs7O2tDQUNhUyxJLEVBQU07QUFDbEIsYUFBT0EsS0FBS0csU0FBTCxJQUFrQixLQUF6QjtBQUNEOzs7d0JBQ2lCO0FBQ2hCLGFBQU8sV0FBUDtBQUNEOzs7O0VBbkJvQ0MsUUFBUSxVQUFSLEM7O2tCQUFsQmhCLFMiLCJmaWxlIjoicGFyYWdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gJy4vc3R5bGUvcGFyYWdyYXBoJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBhcmFncmFwaCBleHRlbmRzIHJlcXVpcmUoJy4uL21vZGVsJykge1xuICBnZXRTdHlsZUlkKGEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fdmFsKCc+cFByPnBTdHlsZScpIHx8XG4gICAgICAoKGEgPSB0aGlzLndEb2Muc3R5bGUuZ2V0RGVmYXVsdChTdHlsZS50eXBlKSkgJiYgYS5pZClcbiAgICApO1xuICB9XG4gIGdldE5hbWVkU3R5bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMud0RvYy5zdHlsZS5nZXQodGhpcy5nZXRTdHlsZUlkKCkpO1xuICB9XG4gIGdldERpcmVjdFN0eWxlKHByKSB7XG4gICAgaWYgKChwciA9IHRoaXMud1htbC4kMSgnPnBQcicpKSlcbiAgICAgIHJldHVybiBuZXcgU3R5bGUuUHJvcGVydGllcyhwciwgdGhpcy53RG9jLCB0aGlzKTtcbiAgfVxuICBfc2hvdWxkSWdub3JlKHdYbWwpIHtcbiAgICByZXR1cm4gd1htbC5sb2NhbE5hbWUgPT0gJ3BQcic7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAncGFyYWdyYXBoJztcbiAgfVxufVxuIl19