'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//<styls><style type="numbering">
var Numbering = function (_require) {
  _inherits(Numbering, _require);

  function Numbering() {
    _classCallCheck(this, Numbering);

    return _possibleConstructorReturn(this, (Numbering.__proto__ || Object.getPrototypeOf(Numbering)).apply(this, arguments));
  }

  _createClass(Numbering, [{
    key: 'getNumId',
    value: function getNumId() {
      return this.wXml.$1('numId').attr('w:val');
    }
  }, {
    key: 'asNumberingStyle',
    value: function asNumberingStyle() {
      return this.wDoc.style.get(require('./list').asStyleId(this.getNumId()));
    }
  }, {
    key: '_iterate',
    value: function _iterate() {}
  }], [{
    key: 'type',
    get: function get() {
      return 'style.numbering';
    }
  }]);

  return Numbering;
}(require('../style'));

exports.default = Numbering;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL3N0eWxlL251bWJlcmluZy5qcyJdLCJuYW1lcyI6WyJOdW1iZXJpbmciLCJ3WG1sIiwiJDEiLCJhdHRyIiwid0RvYyIsInN0eWxlIiwiZ2V0IiwicmVxdWlyZSIsImFzU3R5bGVJZCIsImdldE51bUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0lBQ3FCQSxTOzs7Ozs7Ozs7OzsrQkFLUjtBQUNULGFBQU8sS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsT0FBYixFQUFzQkMsSUFBdEIsQ0FBMkIsT0FBM0IsQ0FBUDtBQUNEOzs7dUNBRWtCO0FBQ2pCLGFBQU8sS0FBS0MsSUFBTCxDQUFVQyxLQUFWLENBQWdCQyxHQUFoQixDQUFvQkMsUUFBUSxRQUFSLEVBQWtCQyxTQUFsQixDQUE0QixLQUFLQyxRQUFMLEVBQTVCLENBQXBCLENBQVA7QUFDRDs7OytCQUVVLENBQUU7Ozt3QkFaSztBQUNoQixhQUFPLGlCQUFQO0FBQ0Q7Ozs7RUFIb0NGLFFBQVEsVUFBUixDOztrQkFBbEJQLFMiLCJmaWxlIjoibnVtYmVyaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy88c3R5bHM+PHN0eWxlIHR5cGU9XCJudW1iZXJpbmdcIj5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlcmluZyBleHRlbmRzIHJlcXVpcmUoJy4uL3N0eWxlJykge1xuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdzdHlsZS5udW1iZXJpbmcnO1xuICB9XG5cbiAgZ2V0TnVtSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMud1htbC4kMSgnbnVtSWQnKS5hdHRyKCd3OnZhbCcpO1xuICB9XG5cbiAgYXNOdW1iZXJpbmdTdHlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy53RG9jLnN0eWxlLmdldChyZXF1aXJlKCcuL2xpc3QnKS5hc1N0eWxlSWQodGhpcy5nZXROdW1JZCgpKSk7XG4gIH1cblxuICBfaXRlcmF0ZSgpIHt9XG59XG4iXX0=