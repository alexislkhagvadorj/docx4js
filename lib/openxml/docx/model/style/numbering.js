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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc3R5bGUvbnVtYmVyaW5nLmpzIl0sIm5hbWVzIjpbIk51bWJlcmluZyIsIndYbWwiLCIkMSIsImF0dHIiLCJ3RG9jIiwic3R5bGUiLCJnZXQiLCJyZXF1aXJlIiwiYXNTdHlsZUlkIiwiZ2V0TnVtSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFDcUJBLFM7Ozs7Ozs7Ozs7OytCQUtSO0FBQ1QsYUFBTyxLQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxPQUFiLEVBQXNCQyxJQUF0QixDQUEyQixPQUEzQixDQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsYUFBTyxLQUFLQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLEdBQWhCLENBQW9CQyxRQUFRLFFBQVIsRUFBa0JDLFNBQWxCLENBQTRCLEtBQUtDLFFBQUwsRUFBNUIsQ0FBcEIsQ0FBUDtBQUNEOzs7K0JBRVUsQ0FBRTs7O3dCQVpLO0FBQ2hCLGFBQU8saUJBQVA7QUFDRDs7OztFQUhvQ0YsUUFBUSxVQUFSLEM7O2tCQUFsQlAsUyIsImZpbGUiOiJudW1iZXJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLzxzdHlscz48c3R5bGUgdHlwZT1cIm51bWJlcmluZ1wiPlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtYmVyaW5nIGV4dGVuZHMgcmVxdWlyZSgnLi4vc3R5bGUnKSB7XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ3N0eWxlLm51bWJlcmluZyc7XG4gIH1cblxuICBnZXROdW1JZCgpIHtcbiAgICByZXR1cm4gdGhpcy53WG1sLiQxKCdudW1JZCcpLmF0dHIoJ3c6dmFsJyk7XG4gIH1cblxuICBhc051bWJlcmluZ1N0eWxlKCkge1xuICAgIHJldHVybiB0aGlzLndEb2Muc3R5bGUuZ2V0KHJlcXVpcmUoJy4vbGlzdCcpLmFzU3R5bGVJZCh0aGlzLmdldE51bUlkKCkpKTtcbiAgfVxuXG4gIF9pdGVyYXRlKCkge31cbn1cbiJdfQ==