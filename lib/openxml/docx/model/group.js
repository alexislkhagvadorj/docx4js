'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var group = function (_require) {
  _inherits(group, _require);

  function group() {
    _classCallCheck(this, group);

    return _possibleConstructorReturn(this, (group.__proto__ || Object.getPrototypeOf(group)).apply(this, arguments));
  }

  _createClass(group, [{
    key: '_getValidChildren',
    value: function _getValidChildren() {
      return this.wXml.$('wsp');
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'group';
    }
  }]);

  return group;
}(require('./shape'));

exports.default = group;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZ3JvdXAuanMiXSwibmFtZXMiOlsiZ3JvdXAiLCJ3WG1sIiwiJCIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxLOzs7Ozs7Ozs7Ozt3Q0FDQztBQUNsQixhQUFPLEtBQUtDLElBQUwsQ0FBVUMsQ0FBVixDQUFZLEtBQVosQ0FBUDtBQUNEOzs7d0JBRWlCO0FBQ2hCLGFBQU8sT0FBUDtBQUNEOzs7O0VBUGdDQyxRQUFRLFNBQVIsQzs7a0JBQWRILEsiLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBncm91cCBleHRlbmRzIHJlcXVpcmUoJy4vc2hhcGUnKSB7XG4gIF9nZXRWYWxpZENoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLndYbWwuJCgnd3NwJyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdncm91cCc7XG4gIH1cbn1cbiJdfQ==