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

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZmllbGQvZmllbGQuanMiXSwibmFtZXMiOlsiRmllbGQiLCJpbnN0cnVjdCIsImRvYyIsInBhcmVudCIsInR5cGUiLCJhcmd1bWVudHMiLCJjb21tYW5kIiwiY29uc3RydWN0b3IiLCJGaWVsZENvZGUiLCJwYXJzZSIsIkNvbW1hbmQiLCJTd2l0Y2giLCJyZXF1aXJlIiwiZGF0YSIsInNlcGVyYXRvcnMiLCJsZW5ndGgiLCJpIiwibGVuIiwiaW5kZXhPZiIsImNoYXJBdCIsIm5vZGUiLCJzdWJzdHJpbmciLCJ0cmltIiwibmV4dFVudGlsIiwicyIsImRlZmF1bHRWYWx1ZSIsInBhcnNlSW50IiwiZXJyb3IiLCJjbWQiLCJ3aXRoUXVvdGUiLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoIiwiZSIsIl9fcmVtb3ZlUXVvdGUiLCJhIiwic3BsaXQiLCJiIiwibWVyZ2VGb3JtYXQiLCJwYXJzZUtleVdvcmQiLCJuZXh0Tm9kZSIsImtleSIsInJlcGxhY2UiLCJSZWdFeHAiLCJvcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxLOzs7QUFDbkIsaUJBQVlDLFFBQVosRUFBc0JDLEdBQXRCLEVBQTJCQyxNQUEzQixFQUFtQ0MsSUFBbkMsRUFBeUM7QUFBQTs7QUFBQSwrR0FDOUJDLFNBRDhCOztBQUV2QyxVQUFLQyxPQUFMLEdBQWUsSUFBSSxNQUFLQyxXQUFMLENBQWlCQyxTQUFyQixDQUErQlAsUUFBL0IsQ0FBZjtBQUNBLFVBQUtLLE9BQUwsQ0FBYUcsS0FBYjtBQUNBLFFBQUlMLElBQUosRUFBVSxNQUFLQSxJQUFMLGNBQXFCQSxJQUFyQjtBQUo2QjtBQUt4Qzs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0UsT0FBWjtBQUNEOzs7d0JBRWlCO0FBQ2hCLGFBQU8sT0FBUDtBQUNEOzs7d0JBRW9CO0FBQ25CLGFBQU9JLE9BQVA7QUFDRDs7O3dCQUVtQjtBQUNsQixhQUFPQyxNQUFQ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O0FBQUEsd0hBQ1hJLFNBRFc7O0FBRXBCLFdBQUtnQyxXQUFMLEdBQW1CLE9BQUtDLFlBQUwsQ0FBa0IsYUFBbEIsQ0FBbkI7QUFDQSxXQUFLbEMsSUFBTCxHQUFZLE9BQUttQyxRQUFMLEVBQVo7QUFIb0I7QUFJckI7Ozs7aUNBQ1lDLEcsRUFBSztBQUNoQixVQUFJLEtBQUszQixJQUFMLENBQVVFLE1BQVYsSUFBb0IsQ0FBeEIsRUFBMkIsT0FBTyxLQUFQO0FBQzNCLFVBQUlFLE1BQU0sS0FBS0osSUFBTCxDQUFVRSxNQUFwQjtBQUNBLFdBQUtGLElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVU0QixPQUFWLENBQ1YsSUFBSUMsTUFBSixDQUFXLFlBQVlGLEdBQVosR0FBa0IsTUFBN0IsRUFBcUMsSUFBckMsQ0FEVSxFQUVWLEVBRlUsQ0FBWjtBQUlBLGFBQU8sS0FBSzNCLElBQUwsQ0FBVUUsTUFBVixJQUFvQkUsR0FBM0I7QUFDRDs7O2lDQUNZO0FBQ1gsVUFBSTBCLFNBQVMsS0FBS3BCLFNBQUwsQ0FBZSxJQUFmLENBQWI7QUFDQSxVQUFJb0IsVUFBVSxJQUFWLElBQWtCQSxPQUFPNUIsTUFBUCxJQUFpQixDQUF2QyxFQUEwQyxPQUFPLElBQVA7O0FBRTFDLGFBQU8sSUFBSUosTUFBSixDQUFXZ0MsTUFBWCxDQUFQO0FBQ0Q7Ozs0QkFDTyxDQUFFOzs7O0VBckJZakMsTyIsImZpbGUiOiJmaWVsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkIGV4dGVuZHMgcmVxdWlyZSgnLi4vLi4vbW9kZWwnKSB7XG4gIGNvbnN0cnVjdG9yKGluc3RydWN0LCBkb2MsIHBhcmVudCwgdHlwZSkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy5jb21tYW5kID0gbmV3IHRoaXMuY29uc3RydWN0b3IuRmllbGRDb2RlKGluc3RydWN0KTtcbiAgICB0aGlzLmNvbW1hbmQucGFyc2UoKTtcbiAgICBpZiAodHlwZSkgdGhpcy50eXBlID0gYGZpZWxkLiR7dHlwZX1gO1xuICB9XG5cbiAgZ2V0Q29tbWFuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb21tYW5kO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnZmllbGQnO1xuICB9XG5cbiAgc3RhdGljIGdldCBDb21tYW5kKCkge1xuICAgIHJldHVybiBDb21tYW5kO1xuICB9XG5cbiAgc3RhdGljIGdldCBTd2l0Y2goKSB7XG4gICAgcmV0dXJuIFN3aXRjaDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRmllbGRDb2RlKCkge1xuICAgIHJldHVybiBGaWVsZENvZGU7XG4gIH1cbn1cblxuY2xhc3MgQ29tbWFuZCB7XG4gIGNvbnN0cnVjdG9yKGluc3RydWN0KSB7XG4gICAgdGhpcy5kYXRhID0gaW5zdHJ1Y3Q7XG4gIH1cblxuICBuZXh0VW50aWwoc2VwZXJhdG9ycykge1xuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID09IDApIHJldHVybiAnJztcbiAgICB2YXIgaSA9IC0xLFxuICAgICAgbGVuID0gdGhpcy5kYXRhLmxlbmd0aDtcbiAgICAvL2ZpbmQgYW55IG9uZSBvZiBzZXBlcmF0b3IgY2hhcnNcbiAgICB3aGlsZSAoKytpIDwgbGVuICYmIHNlcGVyYXRvcnMuaW5kZXhPZih0aGlzLmRhdGEuY2hhckF0KGkpKSA9PSAtMSk7XG5cbiAgICB2YXIgbm9kZSA9IHRoaXMuZGF0YS5zdWJzdHJpbmcoMCwgaSkudHJpbSgpO1xuXG4gICAgLy9pZ25vcmUgYWxsIHNlcGVyYXRvciBjaGFyc1xuICAgIGlmIChpIDwgbGVuKVxuICAgICAgd2hpbGUgKCsraSA8IGxlbiAmJiBzZXBlcmF0b3JzLmluZGV4T2YodGhpcy5kYXRhLmNoYXJBdChpKSkgIT0gLTEpO1xuXG4gICAgLy9sZWZ0IHRoaXMuZGF0YVxuICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5zdWJzdHJpbmcoaSkudHJpbSgpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG4gIG5leHROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5leHRVbnRpbCgnIFxcXFwnKTtcbiAgfVxuICBhc0ludChzLCBkZWZhdWx0VmFsdWUpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlIHx8IDA7XG4gICAgfVxuICB9XG59XG5jbGFzcyBTd2l0Y2ggZXh0ZW5kcyBDb21tYW5kIHtcbiAgY29uc3RydWN0b3IoY21kKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLndpdGhRdW90ZSA9IGZhbHNlO1xuICAgIHRoaXMudHlwZSA9IGNtZC5jaGFyQXQoMCkudG9Mb3dlckNhc2U7XG4gICAgaWYgKGNtZC5sZW5ndGggPiAxICYmIHRoaXMudHlwZSAhPSAnKicgJiYgY21kLmNoYXJBdCgxKSAhPSAnICcpIHtcbiAgICAgIGlmICh0eXBlLm1hdGNoKC9cXHcvKSkge1xuICAgICAgICAvL3dvcmQgY2FzZTogXFxzMT1cXHMgMVxuICAgICAgICB0cnkge1xuICAgICAgICAgIHBhcnNlSW50KGNtZC5zdWJzdHJpbmcoMSkudHJpbSgpKTtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBjbWQuc3Vic3RyaW5nKDEpLnRyaW0oKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgICB0aGlzLnR5cGUgPSAnISc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMSkgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnN1YnN0cmluZygxKS50cmltKCk7XG4gICAgICBlbHNlIHRoaXMuZGF0YSA9ICcnO1xuICAgIH1cbiAgICB0aGlzLl9fcmVtb3ZlUXVvdGUoKTtcbiAgfVxuICBfX3JlbW92ZVF1b3RlKCkge1xuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID09IDApIHJldHVybjtcbiAgICB2YXIgYSA9IHRoaXMuZGF0YS5jaGFyQXQoMCk7XG4gICAgaWYgKGEgPT0gJ1wiJyB8fCBhID09IFwiJ1wiKSB7XG4gICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEuc3Vic3RyaW5nKDEpO1xuICAgICAgdGhpcy53aXRoUXVvdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA9PSAwKSByZXR1cm47XG4gICAgYSA9IHRoaXMuZGF0YS5jaGFyQXQodGhpcy5kYXRhLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhID09ICdcIicgfHwgYSA9PSBcIidcIikge1xuICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnN1YnN0cmluZygwLCB0aGlzLmRhdGEubGVuZ3RoIC0gMSk7XG4gICAgICB0aGlzLndpdGhRdW90ZSA9IHRydWU7XG4gICAgfVxuICB9XG4gIF9zcGxpdDJJbnQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YSA9PSBudWxsIHx8IHRoaXMuZGF0YS5sZW5ndGggPT0gMCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGEgPSBkYXRhLnNwbGl0KCctJyk7XG4gICAgaWYgKGEubGVuZ3RoID09IDApIHJldHVybiBudWxsO1xuICAgIHZhciBiID0gW107XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGJbaV0gPSBwYXJzZUludChhW2ldKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgYltpXSA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBiO1xuICB9XG59XG5jbGFzcyBGaWVsZENvZGUgZXh0ZW5kcyBDb21tYW5kIHtcbiAgY29uc3RydWN0b3IoaW5zdHJ1Y3QpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMubWVyZ2VGb3JtYXQgPSB0aGlzLnBhcnNlS2V5V29yZCgnTUVSR0VGT1JNQVQnKTtcbiAgICB0aGlzLnR5cGUgPSB0aGlzLm5leHROb2RlKCk7XG4gIH1cbiAgcGFyc2VLZXlXb3JkKGtleSkge1xuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID09IDApIHJldHVybiBmYWxzZTtcbiAgICB2YXIgbGVuID0gdGhpcy5kYXRhLmxlbmd0aDtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZShcbiAgICAgIG5ldyBSZWdFeHAoJ1xcXFwqXFxcXHMqJyArIGtleSArICdcXFxccyonLCAnaWcnKSxcbiAgICAgICcnXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aCAhPSBsZW47XG4gIH1cbiAgbmV4dFN3aXRjaCgpIHtcbiAgICB2YXIgb3B0aW9uID0gdGhpcy5uZXh0VW50aWwoJ1xcXFwnKTtcbiAgICBpZiAob3B0aW9uID09IG51bGwgfHwgb3B0aW9uLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiBuZXcgU3dpdGNoKG9wdGlvbik7XG4gIH1cbiAgcGFyc2UoKSB7fVxufVxuIl19