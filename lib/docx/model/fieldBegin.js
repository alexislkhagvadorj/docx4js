'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _hyperlink = require('./field/hyperlink');

var _hyperlink2 = _interopRequireDefault(_hyperlink);

var _date = require('./field/date');

var _date2 = _interopRequireDefault(_date);

var _ref = require('./field/ref');

var _ref2 = _interopRequireDefault(_ref);

var _pageref = require('./field/pageref');

var _pageref2 = _interopRequireDefault(_pageref);

var _toc = require('./field/toc');

var _toc2 = _interopRequireDefault(_toc);

var _page = require('./field/page');

var _page2 = _interopRequireDefault(_page);

var _field = require('./field/field');

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fields = { hyperlink: _hyperlink2.default, date: _date2.default, ref: _ref2.default, pageref: _pageref2.default, toc: _toc2.default, page: _page2.default };

var fieldBegin = function (_require) {
  _inherits(fieldBegin, _require);

  function fieldBegin() {
    _classCallCheck(this, fieldBegin);

    var _this = _possibleConstructorReturn(this, (fieldBegin.__proto__ || Object.getPrototypeOf(fieldBegin)).apply(this, arguments));

    _this.commands = [];
    return _this;
  }

  _createClass(fieldBegin, [{
    key: 'parse',
    value: function parse() {
      this.wDoc.parseContext.field.push(this);
      _get(fieldBegin.prototype.__proto__ || Object.getPrototypeOf(fieldBegin.prototype), 'parse', this).apply(this, arguments);
    }
  }, {
    key: 'instruct',
    value: function instruct(t) {
      this.commands.push(t);
    }
  }, {
    key: 'seperate',
    value: function seperate(seperator) {}
  }, {
    key: 'end',
    value: function end(endModel, endVisitors) {}
  }, {
    key: '_iterate',
    value: function _iterate(f, factories, visitors) {
      //delay to find real model
      this.end = function (endModel, endVisitors) {
        this.endModel = endModel;
        var instruct = this.commands.join('').trim(),
            index = instruct.indexOf(' '),
            type = (index != -1 ? instruct.substring(0, index) : instruct).toLowerCase();

        this.field = this.constructor.factory(instruct, this.wDoc, this, type);
        if (this.field) this.field = new _field2.default(instruct, this.wDoc, this, type);

        this.field.parse(factories);
      };
    }
  }, {
    key: '_getValidChildren',
    value: function _getValidChildren() {
      return [];
    }
  }], [{
    key: 'factory',
    value: function factory(instruct, wDoc, mParent, type) {
      try {
        return new fields[type](instruct, wDoc, mParent);
      } catch (e) {
        return null;
      }
    }
  }, {
    key: 'type',
    get: function get() {
      return 'fieldBegin';
    }
  }]);

  return fieldBegin;
}(require('../model'));

exports.default = fieldBegin;
module.exports = exports['default'];