'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _drawing = require('./drawing');

var _drawing2 = _interopRequireDefault(_drawing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Graphic = function (_Drawing) {
  _inherits(Graphic, _Drawing);

  function Graphic(wXml) {
    _classCallCheck(this, Graphic);

    var _this = _possibleConstructorReturn(this, (Graphic.__proto__ || Object.getPrototypeOf(Graphic)).apply(this, arguments));

    _this.wDrawing = wXml;
    return _this;
  }

  return Graphic;
}(_drawing2.default);

exports.default = Graphic;


var naming = null;

Graphic.Properties = function (_Drawing$Properties) {
  _inherits(Properties, _Drawing$Properties);

  function Properties() {
    _classCallCheck(this, Properties);

    return _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));
  }

  _createClass(Properties, [{
    key: '_getValidChildren',
    value: function _getValidChildren(t) {
      return _get(Properties.prototype.__proto__ || Object.getPrototypeOf(Properties.prototype), '_getValidChildren', this).apply(this, arguments).concat(this.wXml.$1('spPr').childNodes.asArray());
    }
  }], [{
    key: 'naming',
    get: function get() {
      if (!naming) naming = Object.assign({}, _drawing2.default.Properties.naming, _drawing2.default.SpProperties.naming);
      return naming;
    }
  }]);

  return Properties;
}(_drawing2.default.Properties);

Graphic.Properties.mixinSpProperties();
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZ3JhcGhpYy5qcyJdLCJuYW1lcyI6WyJHcmFwaGljIiwid1htbCIsImFyZ3VtZW50cyIsIndEcmF3aW5nIiwiRHJhd2luZyIsIm5hbWluZyIsIlByb3BlcnRpZXMiLCJ0IiwiY29uY2F0IiwiJDEiLCJjaGlsZE5vZGVzIiwiYXNBcnJheSIsIk9iamVjdCIsImFzc2lnbiIsIlNwUHJvcGVydGllcyIsIm1peGluU3BQcm9wZXJ0aWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7O0FBQ25CLG1CQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQUEsbUhBQ1BDLFNBRE87O0FBRWhCLFVBQUtDLFFBQUwsR0FBZ0JGLElBQWhCO0FBRmdCO0FBR2pCOzs7RUFKa0NHLGlCOztrQkFBaEJKLE87OztBQU9yQixJQUFJSyxTQUFTLElBQWI7O0FBRUFMLFFBQVFNLFVBQVI7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHNDQVdvQkMsQ0FYcEIsRUFXdUI7QUFDbkIsYUFBTywySEFDaUJMLFNBRGpCLEVBRUpNLE1BRkksQ0FFRyxLQUFLUCxJQUFMLENBQVVRLEVBQVYsQ0FBYSxNQUFiLEVBQXFCQyxVQUFyQixDQUFnQ0MsT0FBaEMsRUFGSCxDQUFQO0FBR0Q7QUFmSDtBQUFBO0FBQUEsd0JBQ3NCO0FBQ2xCLFVBQUksQ0FBQ04sTUFBTCxFQUNFQSxTQUFTTyxPQUFPQyxNQUFQLENBQ1AsRUFETyxFQUVQVCxrQkFBUUUsVUFBUixDQUFtQkQsTUFGWixFQUdQRCxrQkFBUVUsWUFBUixDQUFxQlQsTUFIZCxDQUFUO0FBS0YsYUFBT0EsTUFBUDtBQUNEO0FBVEg7O0FBQUE7QUFBQSxFQUE4Q0Qsa0JBQVFFLFVBQXREOztBQWtCQU4sUUFBUU0sVUFBUixDQUFtQlMsaUJBQW5CIiwiZmlsZSI6ImdyYXBoaWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRHJhd2luZyBmcm9tICcuL2RyYXdpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaGljIGV4dGVuZHMgRHJhd2luZyB7XG4gIGNvbnN0cnVjdG9yKHdYbWwpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMud0RyYXdpbmcgPSB3WG1sO1xuICB9XG59XG5cbnZhciBuYW1pbmcgPSBudWxsO1xuXG5HcmFwaGljLlByb3BlcnRpZXMgPSBjbGFzcyBQcm9wZXJ0aWVzIGV4dGVuZHMgRHJhd2luZy5Qcm9wZXJ0aWVzIHtcbiAgc3RhdGljIGdldCBuYW1pbmcoKSB7XG4gICAgaWYgKCFuYW1pbmcpXG4gICAgICBuYW1pbmcgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAgRHJhd2luZy5Qcm9wZXJ0aWVzLm5hbWluZyxcbiAgICAgICAgRHJhd2luZy5TcFByb3BlcnRpZXMubmFtaW5nXG4gICAgICApO1xuICAgIHJldHVybiBuYW1pbmc7XG4gIH1cblxuICBfZ2V0VmFsaWRDaGlsZHJlbih0KSB7XG4gICAgcmV0dXJuIHN1cGVyXG4gICAgICAuX2dldFZhbGlkQ2hpbGRyZW4oLi4uYXJndW1lbnRzKVxuICAgICAgLmNvbmNhdCh0aGlzLndYbWwuJDEoJ3NwUHInKS5jaGlsZE5vZGVzLmFzQXJyYXkoKSk7XG4gIH1cbn07XG5cbkdyYXBoaWMuUHJvcGVydGllcy5taXhpblNwUHJvcGVydGllcygpO1xuIl19