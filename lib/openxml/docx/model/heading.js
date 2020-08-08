'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var heading = function (_require) {
  _inherits(heading, _require);

  function heading() {
    _classCallCheck(this, heading);

    var _this = _possibleConstructorReturn(this, (heading.__proto__ || Object.getPrototypeOf(heading)).apply(this, arguments));

    _this.outlineLvl = arguments[arguments.length - 1];
    return _this;
  }

  _createClass(heading, [{
    key: 'getOutlineLevel',
    value: function getOutlineLevel() {
      return this.outlineLvl;
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'heading';
    }
  }]);

  return heading;
}(require('./paragraph'));

exports.default = heading;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvaGVhZGluZy5qcyJdLCJuYW1lcyI6WyJoZWFkaW5nIiwiYXJndW1lbnRzIiwib3V0bGluZUx2bCIsImxlbmd0aCIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxPOzs7QUFDbkIscUJBQWM7QUFBQTs7QUFBQSxtSEFDSEMsU0FERzs7QUFFWixVQUFLQyxVQUFMLEdBQWtCRCxVQUFVQSxVQUFVRSxNQUFWLEdBQW1CLENBQTdCLENBQWxCO0FBRlk7QUFHYjs7OztzQ0FDaUI7QUFDaEIsYUFBTyxLQUFLRCxVQUFaO0FBQ0Q7Ozt3QkFDaUI7QUFDaEIsYUFBTyxTQUFQO0FBQ0Q7Ozs7RUFWa0NFLFFBQVEsYUFBUixDOztrQkFBaEJKLE8iLCJmaWxlIjoiaGVhZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIGhlYWRpbmcgZXh0ZW5kcyByZXF1aXJlKCcuL3BhcmFncmFwaCcpIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLm91dGxpbmVMdmwgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdO1xuICB9XG4gIGdldE91dGxpbmVMZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5vdXRsaW5lTHZsO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2hlYWRpbmcnO1xuICB9XG59XG4iXX0=