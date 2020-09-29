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

var FieldCode = function (_Command2) {
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

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2ZpZWxkL2ZpZWxkLmpzIl0sIm5hbWVzIjpbIkZpZWxkIiwiaW5zdHJ1Y3QiLCJkb2MiLCJwYXJlbnQiLCJ0eXBlIiwiYXJndW1lbnRzIiwiY29tbWFuZCIsImNvbnN0cnVjdG9yIiwiRmllbGRDb2RlIiwicGFyc2UiLCJDb21tYW5kIiwiU3dpdGNoIiwicmVxdWlyZSIsImRhdGEiLCJzZXBlcmF0b3JzIiwibGVuZ3RoIiwiaSIsImxlbiIsImluZGV4T2YiLCJjaGFyQXQiLCJub2RlIiwic3Vic3RyaW5nIiwidHJpbSIsIm5leHRVbnRpbCIsInMiLCJkZWZhdWx0VmFsdWUiLCJwYXJzZUludCIsImVycm9yIiwiY21kIiwid2l0aFF1b3RlIiwidG9Mb3dlckNhc2UiLCJtYXRjaCIsImUiLCJfX3JlbW92ZVF1b3RlIiwiYSIsInNwbGl0IiwiYiIsIm1lcmdlRm9ybWF0IiwicGFyc2VLZXlXb3JkIiwibmV4dE5vZGUiLCJrZXkiLCJyZXBsYWNlIiwiUmVnRXhwIiwib3B0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFxQkEsSzs7O0FBQ25CLGlCQUFZQyxRQUFaLEVBQXNCQyxHQUF0QixFQUEyQkMsTUFBM0IsRUFBbUNDLElBQW5DLEVBQXlDO0FBQUE7O0FBQUEsK0dBQzlCQyxTQUQ4Qjs7QUFFdkMsVUFBS0MsT0FBTCxHQUFlLElBQUksTUFBS0MsV0FBTCxDQUFpQkMsU0FBckIsQ0FBK0JQLFFBQS9CLENBQWY7QUFDQSxVQUFLSyxPQUFMLENBQWFHLEtBQWI7QUFDQSxRQUFJTCxJQUFKLEVBQVUsTUFBS0EsSUFBTCxjQUFxQkEsSUFBckI7QUFKNkI7QUFLeEM7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtFLE9BQVo7QUFDRDs7O3dCQUVpQjtBQUNoQixhQUFPLE9BQVA7QUFDRDs7O3dCQUVvQjtBQUNuQixhQUFPSSxPQUFQO0FBQ0Q7Ozt3QkFFbUI7QUFDbEIsYUFBT0MsTUFBUDtBQUNEOzs7d0JB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SSxTQURXOztBQUVwQixXQUFLZ0MsV0FBTCxHQUFtQixPQUFLQyxZQUFMLENBQWtCLGFBQWxCLENBQW5CO0FBQ0EsV0FBS2xDLElBQUwsR0FBWSxPQUFLbUMsUUFBTCxFQUFaO0FBSG9CO0FBSXJCOzs7O2lDQUNZQyxHLEVBQUs7QUFDaEIsVUFBSSxLQUFLM0IsSUFBTCxDQUFVRSxNQUFWLElBQW9CLENBQXhCLEVBQTJCLE9BQU8sS0FBUDtBQUMzQixVQUFJRSxNQUFNLEtBQUtKLElBQUwsQ0FBVUUsTUFBcEI7QUFDQSxXQUFLRixJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVNEIsT0FBVixDQUNWLElBQUlDLE1BQUosQ0FBVyxZQUFZRixHQUFaLEdBQWtCLE1BQTdCLEVBQXFDLElBQXJDLENBRFUsRUFFVixFQUZVLENBQVo7QUFJQSxhQUFPLEtBQUszQixJQUFMLENBQVVFLE1BQVYsSUFBb0JFLEdBQTNCO0FBQ0Q7OztpQ0FDWTtBQUNYLFVBQUkwQixTQUFTLEtBQUtwQixTQUFMLENBQWUsSUFBZixDQUFiO0FBQ0EsVUFBSW9CLFVBQVUsSUFBVixJQUFrQkEsT0FBTzVCLE1BQVAsSUFBaUIsQ0FBdkMsRUFBMEMsT0FBTyxJQUFQOztBQUUxQyxhQUFPLElBQUlKLE1BQUosQ0FBV2dDLE1BQVgsQ0FBUDtBQUNEOzs7NEJBQ08sQ0FBRTs7OztFQXJCWWpDLE8iLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZCBleHRlbmRzIHJlcXVpcmUoJy4uLy4uL21vZGVsJykge1xuICBjb25zdHJ1Y3RvcihpbnN0cnVjdCwgZG9jLCBwYXJlbnQsIHR5cGUpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMuY29tbWFuZCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yLkZpZWxkQ29kZShpbnN0cnVjdCk7XG4gICAgdGhpcy5jb21tYW5kLnBhcnNlKCk7XG4gICAgaWYgKHR5cGUpIHRoaXMudHlwZSA9IGBmaWVsZC4ke3R5cGV9YDtcbiAgfVxuXG4gIGdldENvbW1hbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tbWFuZDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2ZpZWxkJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgQ29tbWFuZCgpIHtcbiAgICByZXR1cm4gQ29tbWFuZDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgU3dpdGNoKCkge1xuICAgIHJldHVybiBTd2l0Y2g7XG4gIH1cblxuICBzdGF0aWMgZ2V0IEZpZWxkQ29kZSgpIHtcbiAgICByZXR1cm4gRmllbGRDb2RlO1xuICB9XG59XG5cbmNsYXNzIENvbW1hbmQge1xuICBjb25zdHJ1Y3RvcihpbnN0cnVjdCkge1xuICAgIHRoaXMuZGF0YSA9IGluc3RydWN0O1xuICB9XG5cbiAgbmV4dFVudGlsKHNlcGVyYXRvcnMpIHtcbiAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA9PSAwKSByZXR1cm4gJyc7XG4gICAgdmFyIGkgPSAtMSxcbiAgICAgIGxlbiA9IHRoaXMuZGF0YS5sZW5ndGg7XG4gICAgLy9maW5kIGFueSBvbmUgb2Ygc2VwZXJhdG9yIGNoYXJzXG4gICAgd2hpbGUgKCsraSA8IGxlbiAmJiBzZXBlcmF0b3JzLmluZGV4T2YodGhpcy5kYXRhLmNoYXJBdChpKSkgPT0gLTEpO1xuXG4gICAgdmFyIG5vZGUgPSB0aGlzLmRhdGEuc3Vic3RyaW5nKDAsIGkpLnRyaW0oKTtcblxuICAgIC8vaWdub3JlIGFsbCBzZXBlcmF0b3IgY2hhcnNcbiAgICBpZiAoaSA8IGxlbilcbiAgICAgIHdoaWxlICgrK2kgPCBsZW4gJiYgc2VwZXJhdG9ycy5pbmRleE9mKHRoaXMuZGF0YS5jaGFyQXQoaSkpICE9IC0xKTtcblxuICAgIC8vbGVmdCB0aGlzLmRhdGFcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEuc3Vic3RyaW5nKGkpLnRyaW0oKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuICBuZXh0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uZXh0VW50aWwoJyBcXFxcJyk7XG4gIH1cbiAgYXNJbnQocywgZGVmYXVsdFZhbHVlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBwYXJzZUludChzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCAwO1xuICAgIH1cbiAgfVxufVxuY2xhc3MgU3dpdGNoIGV4dGVuZHMgQ29tbWFuZCB7XG4gIGNvbnN0cnVjdG9yKGNtZCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy53aXRoUXVvdGUgPSBmYWxzZTtcbiAgICB0aGlzLnR5cGUgPSBjbWQuY2hhckF0KDApLnRvTG93ZXJDYXNlO1xuICAgIGlmIChjbWQubGVuZ3RoID4gMSAmJiB0aGlzLnR5cGUgIT0gJyonICYmIGNtZC5jaGFyQXQoMSkgIT0gJyAnKSB7XG4gICAgICBpZiAodHlwZS5tYXRjaCgvXFx3LykpIHtcbiAgICAgICAgLy93b3JkIGNhc2U6IFxcczE9XFxzIDFcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBwYXJzZUludChjbWQuc3Vic3RyaW5nKDEpLnRyaW0oKSk7XG4gICAgICAgICAgdGhpcy5kYXRhID0gY21kLnN1YnN0cmluZygxKS50cmltKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgICAgdGhpcy50eXBlID0gJyEnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA+IDEpIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5zdWJzdHJpbmcoMSkudHJpbSgpO1xuICAgICAgZWxzZSB0aGlzLmRhdGEgPSAnJztcbiAgICB9XG4gICAgdGhpcy5fX3JlbW92ZVF1b3RlKCk7XG4gIH1cbiAgX19yZW1vdmVRdW90ZSgpIHtcbiAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA9PSAwKSByZXR1cm47XG4gICAgdmFyIGEgPSB0aGlzLmRhdGEuY2hhckF0KDApO1xuICAgIGlmIChhID09ICdcIicgfHwgYSA9PSBcIidcIikge1xuICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnN1YnN0cmluZygxKTtcbiAgICAgIHRoaXMud2l0aFF1b3RlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgIGEgPSB0aGlzLmRhdGEuY2hhckF0KHRoaXMuZGF0YS5sZW5ndGggLSAxKTtcbiAgICBpZiAoYSA9PSAnXCInIHx8IGEgPT0gXCInXCIpIHtcbiAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5zdWJzdHJpbmcoMCwgdGhpcy5kYXRhLmxlbmd0aCAtIDEpO1xuICAgICAgdGhpcy53aXRoUXVvdGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBfc3BsaXQySW50KCkge1xuICAgIGlmICh0aGlzLmRhdGEgPT0gbnVsbCB8fCB0aGlzLmRhdGEubGVuZ3RoID09IDApIHJldHVybiBudWxsO1xuICAgIHZhciBhID0gZGF0YS5zcGxpdCgnLScpO1xuICAgIGlmIChhLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgYiA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0cnkge1xuICAgICAgICBiW2ldID0gcGFyc2VJbnQoYVtpXSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGJbaV0gPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYjtcbiAgfVxufVxuY2xhc3MgRmllbGRDb2RlIGV4dGVuZHMgQ29tbWFuZCB7XG4gIGNvbnN0cnVjdG9yKGluc3RydWN0KSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLm1lcmdlRm9ybWF0ID0gdGhpcy5wYXJzZUtleVdvcmQoJ01FUkdFRk9STUFUJyk7XG4gICAgdGhpcy50eXBlID0gdGhpcy5uZXh0Tm9kZSgpO1xuICB9XG4gIHBhcnNlS2V5V29yZChrZXkpIHtcbiAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA9PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGxlbiA9IHRoaXMuZGF0YS5sZW5ndGg7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoXG4gICAgICBuZXcgUmVnRXhwKCdcXFxcKlxcXFxzKicgKyBrZXkgKyAnXFxcXHMqJywgJ2lnJyksXG4gICAgICAnJ1xuICAgICk7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGggIT0gbGVuO1xuICB9XG4gIG5leHRTd2l0Y2goKSB7XG4gICAgdmFyIG9wdGlvbiA9IHRoaXMubmV4dFVudGlsKCdcXFxcJyk7XG4gICAgaWYgKG9wdGlvbiA9PSBudWxsIHx8IG9wdGlvbi5sZW5ndGggPT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gbmV3IFN3aXRjaChvcHRpb24pO1xuICB9XG4gIHBhcnNlKCkge31cbn1cbiJdfQ==