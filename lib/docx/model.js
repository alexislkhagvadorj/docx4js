'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parser = require('../parser');

var _parser2 = _interopRequireDefault(_parser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var model = function (_Parser) {
  _inherits(model, _Parser);

  function model(wXml, wDoc, mParent) {
    _classCallCheck(this, model);

    var _this = _possibleConstructorReturn(this, (model.__proto__ || Object.getPrototypeOf(model)).apply(this, arguments));

    _this.mParent = mParent;
    _this.content = [];
    if (mParent) mParent.content.push(_this);
    _this.type = _this.constructor.type;
    return _this;
  }

  _createClass(model, [{
    key: 'parse',
    value: function parse(visitFactories) {
      var _this2 = this;

      var visitors = [];
      var paramizedVisitFactories = [];
      $tool.map(visitFactories, function (visitFactory) {
        var visitor = visitFactory(this);
        if (visitor && visitor.visit() !== false) {
          visitors.push(visitor);
          paramizedVisitFactories.push(visitFactory.with(visitor));
        }
      }.bind(this));

      if (visitors.length > 0) {
        var factory = this.wDoc.factory.bind(this.wDoc);
        this._iterate(function (wXml) {
          return factory(wXml, _this2.wDoc, _this2).parse(paramizedVisitFactories);
        }, paramizedVisitFactories, visitors);
      }

      return visitors;
    }
  }, {
    key: '_iterate',
    value: function _iterate(f, paramizedVisitFactories) {
      for (var i = 0, children = this._getValidChildren(), l = children ? children.length : 0; i < l; i++) {
        !this._shouldIgnore(children[i]) && f(children[i]);
      }
    }
  }, {
    key: '_getValidChildren',
    value: function _getValidChildren() {
      return this.wXml.childNodes;
    }
  }, {
    key: '_shouldIgnore',
    value: function _shouldIgnore(wXml) {
      return false;
    }
  }, {
    key: '_attr',
    value: function _attr(selector, key) {
      var n = arguments.length == 1 ? (key = selector, this.wXml) : this.wXml.$1(selector);
      return n ? n.attr(key) : null;
    }
  }, {
    key: '_val',
    value: function _val(selector) {
      return this._attr(selector, 'w:val');
    }
  }]);

  return model;
}(_parser2.default);

exports.default = model;
module.exports = exports['default'];