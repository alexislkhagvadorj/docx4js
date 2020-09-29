'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Field = function (_require) {
  _inherits(Field, _require);

  function Field(instruct, doc, parent, type) {
    _classCallCheck(this, Field);

    var _this = _possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).apply(this, arguments));

    _this.command = new _this.constructor.FieldCode(instruct);
    _this.command.parse();
    if (type) _this.type = 'field.' + type;
    return _this;
  }

  _createClass(Field, [{
    key: 'getCommand',
    value: function getCommand() {
      return this.command;
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'field';
    }
  }, {
    key: 'Command',
    get: function get() {
      return Command;
    }
  }, {
    key: 'Switch',
    get: function get() {
      return Switch;
    }
  }, {
    key: 'FieldCode',
    get: function get() {
      return FieldCode;
    }
  }]);

  return Field;
}(require('../../model'));

exports.default = Field;

var Command = function () {
  function Command(instruct) {
    _classCallCheck(this, Command);

    this.data = instruct;
  }

  _createClass(Command, [{
    key: 'nextUntil',
    value: function nextUntil(seperators) {
      if (this.data.length == 0) return '';
      var i = -1,
          len = this.data.length;
      //find any one of seperator chars
      while (++i < len && seperators.indexOf(this.data.charAt(i)) == -1) {}

      var node = this.data.substring(0, i).trim();

      //ignore all seperator chars
      if (i < len) while (++i < len && seperators.indexOf(this.data.charAt(i)) != -1) {}

      //left this.data
      this.data = this.data.substring(i).trim();
      return node;
    }
  }, {
    key: 'nextNode',
    value: function nextNode() {
      return this.nextUntil(' \\');
    }
  }, {
    key: 'asInt',
    value: function asInt(s, defaultValue) {
      try {
        return parseInt(s);
      } catch (error) {
        return defaultValue || 0;
      }
    }
  }]);

  return Command;
}();

var Switch = function (_Command) {
  _inherits(Switch, _Command);

  function Switch(cmd) {
    _classCallCheck(this, Switch);

    var _this2 = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));

    _this2.withQuote = false;
    _this2.type = cmd.charAt(0).toLowerCase;
    if (cmd.length > 1 && _this2.type != '*' && cmd.charAt(1) != ' ') {
      if (type.match(/\w/)) {
        //word case: \s1=\s 1
        try {
          parseInt(cmd.substring(1).trim());
          _this2.data = cmd.substring(1).trim();
          return _possibleConstructorReturn(_this2);
        } catch (e) {}
      }
      _this2.type = '!';
    } else {
      if (_this2.data.length > 1) _this2.data = _this2.data.substring(1).trim();else _this2.data = '';
    }
    _this2.__removeQuote();
    return _this2;
  }

  _createClass(Switch, [{
    key: '__removeQuote',
    value: function __removeQuote() {
      if (this.data.length == 0) return;
      var a = this.data.charAt(0);
      if (a == '"' || a == "'") {
        this.data = this.data.substring(1);
        this.withQuote = true;
      }
      if (this.data.length == 0) return;
      a = this.data.charAt(this.data.length - 1);
      if (a == '"' || a == "'") {
        this.data = this.data.substring(0, this.data.length - 1);
        this.withQuote = true;
      }
    }
  }, {
    key: '_split2Int',
    value: function _split2Int() {
      if (this.data == null || this.data.length == 0) return null;
      var a = data.split('-');
      if (a.length == 0) return null;
      var b = [];
      for (var i = 0, len = a.length; i < len; i++) {
        try {
          b[i] = parseInt(a[i]);
        } catch (e) {
          b[i] = 0;
        }
      }
      return b;
    }
  }]);

  return Switch;
}(Command);

var FieldCode = exports.FieldCode = function (_Command2) {
  _inherits(FieldCode, _Command2);

  function FieldCode(instruct) {
    _classCallCheck(this, FieldCode);

    var _this3 = _possibleConstructorReturn(this, (FieldCode.__proto__ || Object.getPrototypeOf(FieldCode)).apply(this, arguments));

    _this3.mergeFormat = _this3.parseKeyWord('MERGEFORMAT');
    _this3.type = _this3.nextNode();
    return _this3;
  }

  _createClass(FieldCode, [{
    key: 'parseKeyWord',
    value: function parseKeyWord(key) {
      if (this.data.length == 0) return false;
      var len = this.data.length;
      this.data = this.data.replace(new RegExp('\\*\\s*' + key + '\\s*', 'ig'), '');
      return this.data.length != len;
    }
  }, {
    key: 'nextSwitch',
    value: function nextSwitch() {
      var option = this.nextUntil('\\');
      if (option == null || option.length == 0) return null;

      return new Switch(option);
    }
  }, {
    key: 'parse',
    value: function parse() {}
  }]);

  return FieldCode;
}(Command);