'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dropdown = function (_require) {
  _inherits(dropdown, _require);

  function dropdown() {
    _classCallCheck(this, dropdown);

    return _possibleConstructorReturn(this, (dropdown.__proto__ || Object.getPrototypeOf(dropdown)).apply(this, arguments));
  }

  _createClass(dropdown, null, [{
    key: 'type',
    get: function get() {
      return 'control.dropdown';
    }
  }]);

  return dropdown;
}(require('../control'));

exports.default = dropdown;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2NvbnRyb2wvZHJvcGRvd24uanMiXSwibmFtZXMiOlsiZHJvcGRvd24iLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFxQkEsUTs7Ozs7Ozs7Ozs7d0JBQ0Q7QUFDaEIsYUFBTyxrQkFBUDtBQUNEOzs7O0VBSG1DQyxRQUFRLFlBQVIsQzs7a0JBQWpCRCxRIiwiZmlsZSI6ImRyb3Bkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZHJvcGRvd24gZXh0ZW5kcyByZXF1aXJlKCcuLi9jb250cm9sJykge1xuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdjb250cm9sLmRyb3Bkb3duJztcbiAgfVxufVxuIl19