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
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2dyb3VwLmpzIl0sIm5hbWVzIjpbImdyb3VwIiwid1htbCIsIiQiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFxQkEsSzs7Ozs7Ozs7Ozs7d0NBQ0M7QUFDbEIsYUFBTyxLQUFLQyxJQUFMLENBQVVDLENBQVYsQ0FBWSxLQUFaLENBQVA7QUFDRDs7O3dCQUVpQjtBQUNoQixhQUFPLE9BQVA7QUFDRDs7OztFQVBnQ0MsUUFBUSxTQUFSLEM7O2tCQUFkSCxLIiwiZmlsZSI6Imdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ3JvdXAgZXh0ZW5kcyByZXF1aXJlKCcuL3NoYXBlJykge1xuICBfZ2V0VmFsaWRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy53WG1sLiQoJ3dzcCcpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnZ3JvdXAnO1xuICB9XG59XG4iXX0=