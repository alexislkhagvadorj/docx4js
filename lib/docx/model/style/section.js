'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('../style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var naming = Object.assign({}, _style2.default.Properties.naming, {
  pgSz: 'size',
  pgMar: 'margin'
});

var section = function (_Style$Properties) {
  _inherits(section, _Style$Properties);

  function section() {
    _classCallCheck(this, section);

    return _possibleConstructorReturn(this, (section.__proto__ || Object.getPrototypeOf(section)).apply(this, arguments));
  }

  _createClass(section, [{
    key: 'pgSz',
    value: function pgSz(x) {
      return {
        width: this.pt2Px(this.asPt(x.attr('w:w'))),
        height: this.pt2Px(this.asPt(x.attr('w:h')))
      };
    }
  }, {
    key: 'pgMar',
    value: function pgMar(x) {
      var _this2 = this;

      var value = this.asObject(x, function (v) {
        return _this2.pt2Px(_this2.asPt(v));
      });
      if (value.gutter && this.wDoc.getPart('settings').documentElement.$1('gutterAtTop')) value.gutterAtRight = 1;
      return value;
    }
  }, {
    key: 'cols',
    value: function cols(x) {
      var _this3 = this;

      var o = this.asObject(x, parseInt);
      o.space && (o.space = this.pt2Px(this.asPt(o.space)));

      var data = Array.from(x.$('col')).map(function (a) {
        return {
          width: _this3.pt2Px(_this3.asPt(a.attr('w:w'))),
          space: _this3.pt2Px(_this3.asPt(a.attr('w:space')))
        };
      });

      if (data && data.length) o.data = data;

      return o;
    }
  }], [{
    key: 'naming',
    get: function get() {
      return naming;
    }
  }, {
    key: 'type',
    get: function get() {
      return 'section';
    }
  }]);

  return section;
}(_style2.default.Properties);

exports.default = section;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL3N0eWxlL3NlY3Rpb24uanMiXSwibmFtZXMiOlsibmFtaW5nIiwiT2JqZWN0IiwiYXNzaWduIiwiU3R5bGUiLCJQcm9wZXJ0aWVzIiwicGdTeiIsInBnTWFyIiwic2VjdGlvbiIsIngiLCJ3aWR0aCIsInB0MlB4IiwiYXNQdCIsImF0dHIiLCJoZWlnaHQiLCJ2YWx1ZSIsImFzT2JqZWN0IiwidiIsImd1dHRlciIsIndEb2MiLCJnZXRQYXJ0IiwiZG9jdW1lbnRFbGVtZW50IiwiJDEiLCJndXR0ZXJBdFJpZ2h0IiwibyIsInBhcnNlSW50Iiwic3BhY2UiLCJkYXRhIiwiQXJyYXkiLCJmcm9tIiwiJCIsIm1hcCIsImEiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFNBQVNDLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCQyxnQkFBTUMsVUFBTixDQUFpQkosTUFBbkMsRUFBMkM7QUFDdERLLFFBQU0sTUFEZ0Q7QUFFdERDLFNBQU87QUFGK0MsQ0FBM0MsQ0FBYjs7SUFLcUJDLE87Ozs7Ozs7Ozs7O3lCQUtkQyxDLEVBQUc7QUFDTixhQUFPO0FBQ0xDLGVBQU8sS0FBS0MsS0FBTCxDQUFXLEtBQUtDLElBQUwsQ0FBVUgsRUFBRUksSUFBRixDQUFPLEtBQVAsQ0FBVixDQUFYLENBREY7QUFFTEMsZ0JBQVEsS0FBS0gsS0FBTCxDQUFXLEtBQUtDLElBQUwsQ0FBVUgsRUFBRUksSUFBRixDQUFPLEtBQVAsQ0FBVixDQUFYO0FBRkgsT0FBUDtBQUlEOzs7MEJBQ0tKLEMsRUFBRztBQUFBOztBQUNQLFVBQUlNLFFBQVEsS0FBS0MsUUFBTCxDQUFjUCxDQUFkLEVBQWlCLFVBQUNRLENBQUQ7QUFBQSxlQUFPLE9BQUtOLEtBQUwsQ0FBVyxPQUFLQyxJQUFMLENBQVVLLENBQVYsQ0FBWCxDQUFQO0FBQUEsT0FBakIsQ0FBWjtBQUNBLFVBQ0VGLE1BQU1HLE1BQU4sSUFDQSxLQUFLQyxJQUFMLENBQVVDLE9BQVYsQ0FBa0IsVUFBbEIsRUFBOEJDLGVBQTlCLENBQThDQyxFQUE5QyxDQUFpRCxhQUFqRCxDQUZGLEVBSUVQLE1BQU1RLGFBQU4sR0FBc0IsQ0FBdEI7QUFDRixhQUFPUixLQUFQO0FBQ0Q7Ozt5QkFDSU4sQyxFQUFHO0FBQUE7O0FBQ04sVUFBSWUsSUFBSSxLQUFLUixRQUFMLENBQWNQLENBQWQsRUFBaUJnQixRQUFqQixDQUFSO0FBQ0FELFFBQUVFLEtBQUYsS0FBWUYsRUFBRUUsS0FBRixHQUFVLEtBQUtmLEtBQUwsQ0FBVyxLQUFLQyxJQUFMLENBQVVZLEVBQUVFLEtBQVosQ0FBWCxDQUF0Qjs7QUFFQSxVQUFJQyxPQUFPQyxNQUFNQyxJQUFOLENBQVdwQixFQUFFcUIsQ0FBRixDQUFJLEtBQUosQ0FBWCxFQUF1QkMsR0FBdkIsQ0FBMkIsVUFBQ0MsQ0FBRCxFQUFPO0FBQzNDLGVBQU87QUFDTHRCLGlCQUFPLE9BQUtDLEtBQUwsQ0FBVyxPQUFLQyxJQUFMLENBQVVvQixFQUFFbkIsSUFBRixDQUFPLEtBQVAsQ0FBVixDQUFYLENBREY7QUFFTGEsaUJBQU8sT0FBS2YsS0FBTCxDQUFXLE9BQUtDLElBQUwsQ0FBVW9CLEVBQUVuQixJQUFGLENBQU8sU0FBUCxDQUFWLENBQVg7QUFGRixTQUFQO0FBSUQsT0FMVSxDQUFYOztBQU9BLFVBQUljLFFBQVFBLEtBQUtNLE1BQWpCLEVBQXlCVCxFQUFFRyxJQUFGLEdBQVNBLElBQVQ7O0FBRXpCLGFBQU9ILENBQVA7QUFDRDs7O3dCQWpDbUI7QUFDbEIsYUFBT3ZCLE1BQVA7QUFDRDs7O3dCQWdDaUI7QUFDaEIsYUFBTyxTQUFQO0FBQ0Q7Ozs7RUFyQ2tDRyxnQkFBTUMsVTs7a0JBQXRCRyxPIiwiZmlsZSI6InNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGUgZnJvbSAnLi4vc3R5bGUnO1xuXG52YXIgbmFtaW5nID0gT2JqZWN0LmFzc2lnbih7fSwgU3R5bGUuUHJvcGVydGllcy5uYW1pbmcsIHtcbiAgcGdTejogJ3NpemUnLFxuICBwZ01hcjogJ21hcmdpbicsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VjdGlvbiBleHRlbmRzIFN0eWxlLlByb3BlcnRpZXMge1xuICBzdGF0aWMgZ2V0IG5hbWluZygpIHtcbiAgICByZXR1cm4gbmFtaW5nO1xuICB9XG5cbiAgcGdTeih4KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB0aGlzLnB0MlB4KHRoaXMuYXNQdCh4LmF0dHIoJ3c6dycpKSksXG4gICAgICBoZWlnaHQ6IHRoaXMucHQyUHgodGhpcy5hc1B0KHguYXR0cigndzpoJykpKSxcbiAgICB9O1xuICB9XG4gIHBnTWFyKHgpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLmFzT2JqZWN0KHgsICh2KSA9PiB0aGlzLnB0MlB4KHRoaXMuYXNQdCh2KSkpO1xuICAgIGlmIChcbiAgICAgIHZhbHVlLmd1dHRlciAmJlxuICAgICAgdGhpcy53RG9jLmdldFBhcnQoJ3NldHRpbmdzJykuZG9jdW1lbnRFbGVtZW50LiQxKCdndXR0ZXJBdFRvcCcpXG4gICAgKVxuICAgICAgdmFsdWUuZ3V0dGVyQXRSaWdodCA9IDE7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGNvbHMoeCkge1xuICAgIHZhciBvID0gdGhpcy5hc09iamVjdCh4LCBwYXJzZUludCk7XG4gICAgby5zcGFjZSAmJiAoby5zcGFjZSA9IHRoaXMucHQyUHgodGhpcy5hc1B0KG8uc3BhY2UpKSk7XG5cbiAgICBsZXQgZGF0YSA9IEFycmF5LmZyb20oeC4kKCdjb2wnKSkubWFwKChhKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogdGhpcy5wdDJQeCh0aGlzLmFzUHQoYS5hdHRyKCd3OncnKSkpLFxuICAgICAgICBzcGFjZTogdGhpcy5wdDJQeCh0aGlzLmFzUHQoYS5hdHRyKCd3OnNwYWNlJykpKSxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCkgby5kYXRhID0gZGF0YTtcblxuICAgIHJldHVybiBvO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ3NlY3Rpb24nO1xuICB9XG59XG4iXX0=