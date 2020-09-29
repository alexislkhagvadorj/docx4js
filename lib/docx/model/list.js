'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _list = require('./style/list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* numbering style is a normal paragraph style, plus
* numId Style with override/direct level style, 
* which inherit from abstract numbering definition
* rPr, and attribute of level style is on label only
* pPr of level style is on paragraph
list label: numId.level + abstract.level
list content: numId.level.pPr + abstract.level.pPr
priority: list style > p direct style >named style 
*/
var list = function (_require) {
  _inherits(list, _require);

  function list() {
    _classCallCheck(this, list);

    var _this = _possibleConstructorReturn(this, (list.__proto__ || Object.getPrototypeOf(list)).apply(this, arguments));

    var numId = function (t) {
      var numId = (t = _this.wXml.$1('>pPr>numPr')) && (t = t.$1('numId')) && (t = t.attr('w:val'));
      !numId && (t = _this.getNamedStyle()) && (numId = t.getNumId());
      return numId;
    }();

    var level = function (t) {
      return (t = _this.wXml.$1('>pPr>numPr>ilvl')) ? t.attr('w:val') : '0';
    }();

    _this.getLevel = function () {
      return level;
    };

    _this.getNumberingId = function () {
      return numId;
    };
    return _this;
  }

  _createClass(list, [{
    key: 'parse',
    value: function parse() {
      var numbering = this.wDoc.parseContext.numbering;

      numbering.push(this.getNumberingId(), parseInt(this.getLevel()));
      _get(list.prototype.__proto__ || Object.getPrototypeOf(list.prototype), 'parse', this).apply(this, arguments);
    }
  }, {
    key: 'getNumberingStyle',
    value: function getNumberingStyle() {
      return this.wDoc.style.get(_list2.default.asStyleId(this.getNumberingId()));
    }
  }, {
    key: 'getLabel',
    value: function getLabel() {
      return this.wDoc.parseContext.numbering.getLabel(this.getNumberingId(), parseInt(this.getLevel()));
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'list';
    }
  }]);

  return list;
}(require('./paragraph'));

list.Context = function () {
  function _class(doc) {
    _classCallCheck(this, _class);

    this.wDoc = doc;
    this._stack = new Map();
  }

  _createClass(_class, [{
    key: 'push',
    value: function push(id, level) {
      var list = void 0;
      if (!(list = this._stack.get(id))) this._stack.set(id, list = new Map());

      list.set(level, 1 + (list.get(level) || 0));
    }
  }, {
    key: 'getLabel',
    value: function getLabel(id, level) {
      var _wDoc$style$get;

      var ctx = this._stack.get(id);
      return (_wDoc$style$get = this.wDoc.style.get(_list2.default.asStyleId(id))).getLabel.apply(_wDoc$style$get, _toConsumableArray(ctx));
    }
  }]);

  return _class;
}();

exports.default = list;
module.exports = exports['default'];