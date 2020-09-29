'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rangeBase = function (_require) {
  _inherits(rangeBase, _require);

  function rangeBase() {
    _classCallCheck(this, rangeBase);

    return _possibleConstructorReturn(this, (rangeBase.__proto__ || Object.getPrototypeOf(rangeBase)).apply(this, arguments));
  }

  _createClass(rangeBase, [{
    key: 'iterate',
    value: function iterate(visitor) {}
  }, {
    key: 'first',
    value: function first() {}
  }, {
    key: 'last',
    value: function last() {}
  }], [{
    key: 'type',
    get: function get() {
      return 'range';
    }
  }]);

  return rangeBase;
}(require('../model'));

exports.default = rangeBase;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL3JhbmdlQmFzZS5qcyJdLCJuYW1lcyI6WyJyYW5nZUJhc2UiLCJ2aXNpdG9yIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLFM7Ozs7Ozs7Ozs7OzRCQUNYQyxPLEVBQVMsQ0FBRTs7OzRCQUNYLENBQUU7OzsyQkFDSCxDQUFFOzs7d0JBRVM7QUFDaEIsYUFBTyxPQUFQO0FBQ0Q7Ozs7RUFQb0NDLFFBQVEsVUFBUixDOztrQkFBbEJGLFMiLCJmaWxlIjoicmFuZ2VCYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmFuZ2VCYXNlIGV4dGVuZHMgcmVxdWlyZSgnLi4vbW9kZWwnKSB7XG4gIGl0ZXJhdGUodmlzaXRvcikge31cbiAgZmlyc3QoKSB7fVxuICBsYXN0KCkge31cblxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdyYW5nZSc7XG4gIH1cbn1cbiJdfQ==