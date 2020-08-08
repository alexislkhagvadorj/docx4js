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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc3R5bGUvc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJuYW1pbmciLCJPYmplY3QiLCJhc3NpZ24iLCJTdHlsZSIsIlByb3BlcnRpZXMiLCJwZ1N6IiwicGdNYXIiLCJzZWN0aW9uIiwieCIsIndpZHRoIiwicHQyUHgiLCJhc1B0IiwiYXR0ciIsImhlaWdodCIsInZhbHVlIiwiYXNPYmplY3QiLCJ2IiwiZ3V0dGVyIiwid0RvYyIsImdldFBhcnQiLCJkb2N1bWVudEVsZW1lbnQiLCIkMSIsImd1dHRlckF0UmlnaHQiLCJvIiwicGFyc2VJbnQiLCJzcGFjZSIsImRhdGEiLCJBcnJheSIsImZyb20iLCIkIiwibWFwIiwiYSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JDLGdCQUFNQyxVQUFOLENBQWlCSixNQUFuQyxFQUEyQztBQUN0REssUUFBTSxNQURnRDtBQUV0REMsU0FBTztBQUYrQyxDQUEzQyxDQUFiOztJQUtxQkMsTzs7Ozs7Ozs7Ozs7eUJBS2RDLEMsRUFBRztBQUNOLGFBQU87QUFDTEMsZUFBTyxLQUFLQyxLQUFMLENBQVcsS0FBS0MsSUFBTCxDQUFVSCxFQUFFSSxJQUFGLENBQU8sS0FBUCxDQUFWLENBQVgsQ0FERjtBQUVMQyxnQkFBUSxLQUFLSCxLQUFMLENBQVcsS0FBS0MsSUFBTCxDQUFVSCxFQUFFSSxJQUFGLENBQU8sS0FBUCxDQUFWLENBQVg7QUFGSCxPQUFQO0FBSUQ7OzswQkFDS0osQyxFQUFHO0FBQUE7O0FBQ1AsVUFBSU0sUUFBUSxLQUFLQyxRQUFMLENBQWNQLENBQWQsRUFBaUIsVUFBQ1EsQ0FBRDtBQUFBLGVBQU8sT0FBS04sS0FBTCxDQUFXLE9BQUtDLElBQUwsQ0FBVUssQ0FBVixDQUFYLENBQVA7QUFBQSxPQUFqQixDQUFaO0FBQ0EsVUFDRUYsTUFBTUcsTUFBTixJQUNBLEtBQUtDLElBQUwsQ0FBVUMsT0FBVixDQUFrQixVQUFsQixFQUE4QkMsZUFBOUIsQ0FBOENDLEVBQTlDLENBQWlELGFBQWpELENBRkYsRUFJRVAsTUFBTVEsYUFBTixHQUFzQixDQUF0QjtBQUNGLGFBQU9SLEtBQVA7QUFDRDs7O3lCQUNJTixDLEVBQUc7QUFBQTs7QUFDTixVQUFJZSxJQUFJLEtBQUtSLFFBQUwsQ0FBY1AsQ0FBZCxFQUFpQmdCLFFBQWpCLENBQVI7QUFDQUQsUUFBRUUsS0FBRixLQUFZRixFQUFFRSxLQUFGLEdBQVUsS0FBS2YsS0FBTCxDQUFXLEtBQUtDLElBQUwsQ0FBVVksRUFBRUUsS0FBWixDQUFYLENBQXRCOztBQUVBLFVBQUlDLE9BQU9DLE1BQU1DLElBQU4sQ0FBV3BCLEVBQUVxQixDQUFGLENBQUksS0FBSixDQUFYLEVBQXVCQyxHQUF2QixDQUEyQixVQUFDQyxDQUFELEVBQU87QUFDM0MsZUFBTztBQUNMdEIsaUJBQU8sT0FBS0MsS0FBTCxDQUFXLE9BQUtDLElBQUwsQ0FBVW9CLEVBQUVuQixJQUFGLENBQU8sS0FBUCxDQUFWLENBQVgsQ0FERjtBQUVMYSxpQkFBTyxPQUFLZixLQUFMLENBQVcsT0FBS0MsSUFBTCxDQUFVb0IsRUFBRW5CLElBQUYsQ0FBTyxTQUFQLENBQVYsQ0FBWDtBQUZGLFNBQVA7QUFJRCxPQUxVLENBQVg7O0FBT0EsVUFBSWMsUUFBUUEsS0FBS00sTUFBakIsRUFBeUJULEVBQUVHLElBQUYsR0FBU0EsSUFBVDs7QUFFekIsYUFBT0gsQ0FBUDtBQUNEOzs7d0JBakNtQjtBQUNsQixhQUFPdkIsTUFBUDtBQUNEOzs7d0JBZ0NpQjtBQUNoQixhQUFPLFNBQVA7QUFDRDs7OztFQXJDa0NHLGdCQUFNQyxVOztrQkFBdEJHLE8iLCJmaWxlIjoic2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZSBmcm9tICcuLi9zdHlsZSc7XG5cbnZhciBuYW1pbmcgPSBPYmplY3QuYXNzaWduKHt9LCBTdHlsZS5Qcm9wZXJ0aWVzLm5hbWluZywge1xuICBwZ1N6OiAnc2l6ZScsXG4gIHBnTWFyOiAnbWFyZ2luJyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzZWN0aW9uIGV4dGVuZHMgU3R5bGUuUHJvcGVydGllcyB7XG4gIHN0YXRpYyBnZXQgbmFtaW5nKCkge1xuICAgIHJldHVybiBuYW1pbmc7XG4gIH1cblxuICBwZ1N6KHgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IHRoaXMucHQyUHgodGhpcy5hc1B0KHguYXR0cigndzp3JykpKSxcbiAgICAgIGhlaWdodDogdGhpcy5wdDJQeCh0aGlzLmFzUHQoeC5hdHRyKCd3OmgnKSkpLFxuICAgIH07XG4gIH1cbiAgcGdNYXIoeCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuYXNPYmplY3QoeCwgKHYpID0+IHRoaXMucHQyUHgodGhpcy5hc1B0KHYpKSk7XG4gICAgaWYgKFxuICAgICAgdmFsdWUuZ3V0dGVyICYmXG4gICAgICB0aGlzLndEb2MuZ2V0UGFydCgnc2V0dGluZ3MnKS5kb2N1bWVudEVsZW1lbnQuJDEoJ2d1dHRlckF0VG9wJylcbiAgICApXG4gICAgICB2YWx1ZS5ndXR0ZXJBdFJpZ2h0ID0gMTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgY29scyh4KSB7XG4gICAgdmFyIG8gPSB0aGlzLmFzT2JqZWN0KHgsIHBhcnNlSW50KTtcbiAgICBvLnNwYWNlICYmIChvLnNwYWNlID0gdGhpcy5wdDJQeCh0aGlzLmFzUHQoby5zcGFjZSkpKTtcblxuICAgIGxldCBkYXRhID0gQXJyYXkuZnJvbSh4LiQoJ2NvbCcpKS5tYXAoKGEpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiB0aGlzLnB0MlB4KHRoaXMuYXNQdChhLmF0dHIoJ3c6dycpKSksXG4gICAgICAgIHNwYWNlOiB0aGlzLnB0MlB4KHRoaXMuYXNQdChhLmF0dHIoJ3c6c3BhY2UnKSkpLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoKSBvLmRhdGEgPSBkYXRhO1xuXG4gICAgcmV0dXJuIG87XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnc2VjdGlvbic7XG4gIH1cbn1cbiJdfQ==