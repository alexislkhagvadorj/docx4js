'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _model = require('../model');

var _model2 = _interopRequireDefault(_model);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

var _section = require('./style/section');

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var section = function (_Model) {
  _inherits(section, _Model);

  function section(wXml, wDoc, mParent) {
    _classCallCheck(this, section);

    var _this = _possibleConstructorReturn(this, (section.__proto__ || Object.getPrototypeOf(section)).apply(this, arguments));

    mParent.content.pop();
    _this.wFirst = mParent.content.length ? mParent.content[mParent.content.length - 1].wLast.nextSibling : mParent.wXml.firstChild;

    _this.wLast = wXml;
    while (_this.wLast.parentNode != mParent.wXml) {
      _this.wLast = _this.wLast.parentNode;
    }if (_this.wLast == wXml) _this.wLast = wXml.previousSibling;

    mParent.content.push(_this);

    wDoc.parseContext.section.current = _this;
    return _this;
  }

  _createClass(section, [{
    key: '_iterate',
    value: function _iterate(f, visitorFactories) {
      this._iterateHeaderFooter(visitorFactories, 'header');
      var current = this.wFirst;
      do {
        f(current);
        current = current == this.wLast ? null : current.nextSibling;
      } while (current);
      this._iterateHeaderFooter(visitorFactories, 'footer');
    }
  }, {
    key: '_iterateHeaderFooter',
    value: function _iterateHeaderFooter(visitorFactories, refType) {
      for (var refs = this.wXml.$1(refType + 'Reference'), i = 0, len = refs.length; i < len; i++) {
        var part = this.wDoc.parseContext.part.current = this.wDoc.getRel(refs[i].attr('r:id'));
        var model = new (require('./' + refType))(part.documentElement, this.wDoc, this, refs[i].attr('w:type'));
        model.parse(visitorFactories);
        this.wDoc.parseContext.part.current = this.wDoc.partMain;
      }
    }
  }, {
    key: 'getDirectStyle',
    value: function getDirectStyle() {
      return new _section2.default(this.wXml, this.wDoc, this);
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'section';
    }
  }]);

  return section;
}(_model2.default);

exports.default = section;
module.exports = exports['default'];