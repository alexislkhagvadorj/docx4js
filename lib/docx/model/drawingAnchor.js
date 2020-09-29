'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _drawing = require('./drawing');

var _drawing2 = _interopRequireDefault(_drawing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var drawingAnchor = function (_Drawing) {
  _inherits(drawingAnchor, _Drawing);

  function drawingAnchor(wXml) {
    _classCallCheck(this, drawingAnchor);

    var _this = _possibleConstructorReturn(this, (drawingAnchor.__proto__ || Object.getPrototypeOf(drawingAnchor)).apply(this, arguments));

    _this.wDrawing = wXml.$1('drawing>:first-child');
    return _this;
  }

  _createClass(drawingAnchor, [{
    key: '_getValidChildren',
    value: function _getValidChildren() {
      return this.wDrawing.$('wsp');
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'drawing.anchor';
    }
  }, {
    key: 'Properties',
    get: function get() {
      return Properties;
    }
  }]);

  return drawingAnchor;
}(_drawing2.default);

exports.default = drawingAnchor;


var naming = Object.assign({}, _drawing2.default.Properties.naming, {
  wrapNone: 'wrap',
  wrapSquare: 'wrap',
  wrapTopAndBottom: 'wrap',
  wrapTight: 'wrap',
  wrapThrough: 'wrap'
});

var Properties = function (_Drawing$Properties) {
  _inherits(Properties, _Drawing$Properties);

  function Properties() {
    _classCallCheck(this, Properties);

    return _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));
  }

  _createClass(Properties, [{
    key: '_getValidChildren',
    value: function _getValidChildren() {
      var _this3 = this;

      var t,
          children = _get(Properties.prototype.__proto__ || Object.getPrototypeOf(Properties.prototype), '_getValidChildren', this).apply(this, arguments);
      'positionH,positionV,wrapNone,wrapSquare,wrapTopAndBottom,wrapTight,wrapThrough'.split(',').forEach(function (a) {
        (t = _this3.wXml.$1(a)) && children.push(t);
      });
      return children;
    }
  }, {
    key: 'positionH',
    value: function positionH(x) {
      var o = { relativeFrom: x.attr('relativeFrom') };
      o[x.firstChild.localName] = x.firstChild.localName == 'posOffset' ? this.pt2Px(this.asPt(x.firstChild.textContent.trim(), 'cm')) : x.firstChild.textContent.trim();
      return o;
    }
  }, {
    key: 'positionV',
    value: function positionV(x) {
      var o = { relativeFrom: x.attr('relativeFrom') };
      o[x.firstChild.localName] = x.firstChild.localName == 'posOffset' ? this.pt2Px(this.asPt(x.firstChild.textContent.trim(), 'cm')) : x.firstChild.textContent.trim();
      return o;
    }
  }, {
    key: 'wrapNone',
    value: function wrapNone() {
      return 'none';
    }
  }, {
    key: 'wrapSquare',
    value: function wrapSquare() {
      return 'square';
    }
  }, {
    key: 'wrapTopAndBottom',
    value: function wrapTopAndBottom() {
      return 'topAndBottom';
    }
  }, {
    key: 'wrapTight',
    value: function wrapTight() {
      return 'tight';
    }
  }, {
    key: 'wrapThrough',
    value: function wrapThrough() {
      return 'through';
    }
  }, {
    key: 'behindDoc',
    value: function behindDoc(x) {
      return x.value == '0' ? this.EMPTY : true;
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'shape';
    }
  }, {
    key: 'naming',
    get: function get() {
      return naming;
    }
  }]);

  return Properties;
}(_drawing2.default.Properties);

module.exports = exports['default'];