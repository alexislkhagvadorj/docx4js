'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hyperlink = function (_require) {
  _inherits(hyperlink, _require);

  function hyperlink(instruct) {
    _classCallCheck(this, hyperlink);

    var _this = _possibleConstructorReturn(this, (hyperlink.__proto__ || Object.getPrototypeOf(hyperlink)).apply(this, arguments));

    _this.link = '#' + instruct.split(/\s+/)[1];
    return _this;
  }

  _createClass(hyperlink, null, [{
    key: 'type',
    get: function get() {
      return 'field.ref';
    }
  }]);

  return hyperlink;
}(require('./hyperlink'));

exports.default = hyperlink;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2ZpZWxkL3JlZi5qcyJdLCJuYW1lcyI6WyJoeXBlcmxpbmsiLCJpbnN0cnVjdCIsImFyZ3VtZW50cyIsImxpbmsiLCJzcGxpdCIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxTOzs7QUFDbkIscUJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFBQSx1SEFDWEMsU0FEVzs7QUFFcEIsVUFBS0MsSUFBTCxHQUFZLE1BQU1GLFNBQVNHLEtBQVQsQ0FBZSxLQUFmLEVBQXNCLENBQXRCLENBQWxCO0FBRm9CO0FBR3JCOzs7O3dCQUVpQjtBQUNoQixhQUFPLFdBQVA7QUFDRDs7OztFQVJvQ0MsUUFBUSxhQUFSLEM7O2tCQUFsQkwsUyIsImZpbGUiOiJyZWYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBoeXBlcmxpbmsgZXh0ZW5kcyByZXF1aXJlKCcuL2h5cGVybGluaycpIHtcbiAgY29uc3RydWN0b3IoaW5zdHJ1Y3QpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMubGluayA9ICcjJyArIGluc3RydWN0LnNwbGl0KC9cXHMrLylbMV07XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdmaWVsZC5yZWYnO1xuICB9XG59XG4iXX0=