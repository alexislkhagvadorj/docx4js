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
      if (value.gutter && this.wDoc.getPart('settings').documentElement.$2('gutterAtTop')) value.gutterAtRight = 1;
      return value;
    }
  }, {
    key: 'cols',
    value: function cols(x) {
      var _this3 = this;

      var o = this.asObject(x, parseInt);
      o.space && (o.space = this.pt2Px(this.asPt(o.space)));

      var data = Array.from(x.$1('col')).map(function (a) {
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