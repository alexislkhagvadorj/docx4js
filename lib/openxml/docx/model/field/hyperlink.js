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

    _this.link = instruct.split('"')[1];
    return _this;
  }

  _createClass(hyperlink, [{
    key: 'getLink',
    value: function getLink() {
      return this.link;
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'field.hyperlink';
    }
  }]);

  return hyperlink;
}(require('./field'));

exports.default = hyperlink;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZmllbGQvaHlwZXJsaW5rLmpzIl0sIm5hbWVzIjpbImh5cGVybGluayIsImluc3RydWN0IiwiYXJndW1lbnRzIiwibGluayIsInNwbGl0IiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLFM7OztBQUNuQixxQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUFBLHVIQUNYQyxTQURXOztBQUVwQixVQUFLQyxJQUFMLEdBQVlGLFNBQVNHLEtBQVQsQ0FBZSxHQUFmLEVBQW9CLENBQXBCLENBQVo7QUFGb0I7QUFHckI7Ozs7OEJBQ1M7QUFDUixhQUFPLEtBQUtELElBQVo7QUFDRDs7O3dCQUVpQjtBQUNoQixhQUFPLGlCQUFQO0FBQ0Q7Ozs7RUFYb0NFLFFBQVEsU0FBUixDOztrQkFBbEJMLFMiLCJmaWxlIjoiaHlwZXJsaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgaHlwZXJsaW5rIGV4dGVuZHMgcmVxdWlyZSgnLi9maWVsZCcpIHtcbiAgY29uc3RydWN0b3IoaW5zdHJ1Y3QpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMubGluayA9IGluc3RydWN0LnNwbGl0KCdcIicpWzFdO1xuICB9XG4gIGdldExpbmsoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluaztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2ZpZWxkLmh5cGVybGluayc7XG4gIH1cbn1cbiJdfQ==