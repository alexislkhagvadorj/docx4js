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
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2dyYXBoaWMuanMiXSwibmFtZXMiOlsiR3JhcGhpYyIsIndYbWwiLCJhcmd1bWVudHMiLCJ3RHJhd2luZyIsIkRyYXdpbmciLCJuYW1pbmciLCJQcm9wZXJ0aWVzIiwidCIsImNvbmNhdCIsIiQxIiwiY2hpbGROb2RlcyIsImFzQXJyYXkiLCJPYmplY3QiLCJhc3NpZ24iLCJTcFByb3BlcnRpZXMiLCJtaXhpblNwUHJvcGVydGllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87OztBQUNuQixtQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUFBLG1IQUNQQyxTQURPOztBQUVoQixVQUFLQyxRQUFMLEdBQWdCRixJQUFoQjtBQUZnQjtBQUdqQjs7O0VBSmtDRyxpQjs7a0JBQWhCSixPOzs7QUFPckIsSUFBSUssU0FBUyxJQUFiOztBQUVBTCxRQUFRTSxVQUFSO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxzQ0FXb0JDLENBWHBCLEVBV3VCO0FBQ25CLGFBQU8sMkhBQ2lCTCxTQURqQixFQUVKTSxNQUZJLENBRUcsS0FBS1AsSUFBTCxDQUFVUSxFQUFWLENBQWEsTUFBYixFQUFxQkMsVUFBckIsQ0FBZ0NDLE9BQWhDLEVBRkgsQ0FBUDtBQUdEO0FBZkg7QUFBQTtBQUFBLHdCQUNzQjtBQUNsQixVQUFJLENBQUNOLE1BQUwsRUFDRUEsU0FBU08sT0FBT0MsTUFBUCxDQUNQLEVBRE8sRUFFUFQsa0JBQVFFLFVBQVIsQ0FBbUJELE1BRlosRUFHUEQsa0JBQVFVLFlBQVIsQ0FBcUJULE1BSGQsQ0FBVDtBQUtGLGFBQU9BLE1BQVA7QUFDRDtBQVRIOztBQUFBO0FBQUEsRUFBOENELGtCQUFRRSxVQUF0RDs7QUFrQkFOLFFBQVFNLFVBQVIsQ0FBbUJTLGlCQUFuQiIsImZpbGUiOiJncmFwaGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyYXdpbmcgZnJvbSAnLi9kcmF3aW5nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhpYyBleHRlbmRzIERyYXdpbmcge1xuICBjb25zdHJ1Y3Rvcih3WG1sKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLndEcmF3aW5nID0gd1htbDtcbiAgfVxufVxuXG52YXIgbmFtaW5nID0gbnVsbDtcblxuR3JhcGhpYy5Qcm9wZXJ0aWVzID0gY2xhc3MgUHJvcGVydGllcyBleHRlbmRzIERyYXdpbmcuUHJvcGVydGllcyB7XG4gIHN0YXRpYyBnZXQgbmFtaW5nKCkge1xuICAgIGlmICghbmFtaW5nKVxuICAgICAgbmFtaW5nID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIERyYXdpbmcuUHJvcGVydGllcy5uYW1pbmcsXG4gICAgICAgIERyYXdpbmcuU3BQcm9wZXJ0aWVzLm5hbWluZ1xuICAgICAgKTtcbiAgICByZXR1cm4gbmFtaW5nO1xuICB9XG5cbiAgX2dldFZhbGlkQ2hpbGRyZW4odCkge1xuICAgIHJldHVybiBzdXBlclxuICAgICAgLl9nZXRWYWxpZENoaWxkcmVuKC4uLmFyZ3VtZW50cylcbiAgICAgIC5jb25jYXQodGhpcy53WG1sLiQxKCdzcFByJykuY2hpbGROb2Rlcy5hc0FycmF5KCkpO1xuICB9XG59O1xuXG5HcmFwaGljLlByb3BlcnRpZXMubWl4aW5TcFByb3BlcnRpZXMoKTtcbiJdfQ==