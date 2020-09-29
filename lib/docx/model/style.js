'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RGB = /([a-fA-F0-9]{2}?){3}?/;

var Style = function (_require) {
  _inherits(Style, _require);

  function Style(wXml, wDoc, mParent) {
    _classCallCheck(this, Style);

    var _this = _possibleConstructorReturn(this, (Style.__proto__ || Object.getPrototypeOf(Style)).apply(this, arguments));

    if (wXml.attr('w:default') == '1') wDoc.style.setDefault(_this);
    _this.name = _this._val('name');
    if (_this.id = _this._attr('w:styleId')) wDoc.style.set(_this);
    return _this;
  }

  _createClass(Style, [{
    key: 'getParentStyle',
    value: function getParentStyle() {
      return this.wDoc.style.get(this._val('basedOn'));
    }
  }, {
    key: 'isDefault',
    value: function isDefault() {
      return this.wXml.attr('w:default') == '1';
    }
  }, {
    key: 'getNumId',
    value: function getNumId() {
      return -1;
    }
  }, {
    key: 'getOutlineLevel',
    value: function getOutlineLevel() {
      return -1;
    }
  }]);

  return Style;
}(require('../model'));

exports.default = Style;


var naming = {};
Style.Properties = function (_require2) {
  _inherits(Properties, _require2);

  _createClass(Properties, null, [{
    key: 'type',
    get: function get() {
      return null;
    }
  }, {
    key: 'naming',
    get: function get() {
      return naming;
    }
  }]);

  function Properties() {
    _classCallCheck(this, Properties);

    var _this2 = _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));

    _this2.values = {};
    return _this2;
  }

  _createClass(Properties, [{
    key: 'parse',

    //use parent visitor to visitor style nodes and attributes
    value: function parse(visitors) {
      var _this3 = this;

      var values = this.values,
          naming = this.constructor.naming,
          type = this.constructor.type,
          t;
      visitors.forEach(function (visitor) {
        [_this3._getValidChildren(), _this3.wXml.attributes].forEach(function (children) {
          for (var len = children.length, i = 0; i < len; i++) {
            var node = children[i],
                name = node.localName;
            if (values[name] == undefined) {
              if (typeof _this3[name] == 'function') values[name] = _this3[name](node);else if (node.attr && (t = node.attr('w:val')))
                //lazy default
                values[name] = t;
            }
            values[name] != _this3.EMPTY && visitor.visit(values[name], naming[name] || name, type);
          }
        });
      });
    }
  }, {
    key: '_getValidChildren',
    value: function _getValidChildren() {
      return this.wXml.childNodes;
    }
  }, {
    key: 'basedOn',
    value: function basedOn(x) {
      return x.attr('w:val');
    }
  }, {
    key: 'asColor',
    value: function asColor(v) {
      if (!v || v.length == 0 || v == 'auto') return '#000000';
      v = v.split(' ')[0];
      return v.charAt(0) == '#' ? v : RGB.test(v) ? '#' + v : v;
    }
  }, {
    key: 'shadeColor',
    value: function shadeColor(color, percent) {
      if (!RGB.test(color)) return color;
      var R = parseInt(color.substring(1, 3), 16);
      var G = parseInt(color.substring(3, 5), 16);
      var B = parseInt(color.substring(5, 7), 16);

      R = parseInt(R * (100 + percent) / 100);
      G = parseInt(G * (100 + percent) / 100);
      B = parseInt(B * (100 + percent) / 100);

      R = R < 255 ? R : 255;
      G = G < 255 ? G : 255;
      B = B < 255 ? B : 255;

      var RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16);
      var GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16);
      var BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16);

      return '#' + RR + GG + BB;
    }
  }, {
    key: 'asObject',
    value: function asObject(x, f) {
      var o = {};
      for (var i = 0, attrs = x.attributes, len = attrs.length; i < len; i++) {
        o[attrs[i].localName] = f ? f(attrs[i].value) : attrs[i].value;
      }return o;
    }
  }, {
    key: 'asPt',
    value: function asPt(x, type) {
      switch (type) {
        case 'cm':
          return parseInt(x) * 28.3464567 / 360000;
        default:
          //dxa
          return parseInt(x) / 20.0;
      }
    }
  }, {
    key: 'pt2Px',
    value: function pt2Px(x) {
      if (typeof x == 'string') x = parseFloat(x.replace('pt', ''));
      return Math.floor(x * 96 / 72);
    }
  }, {
    key: 'EMPTY',
    get: function get() {
      return -999;
    }
  }]);

  return Properties;
}(require('../model'));
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL3N0eWxlLmpzIl0sIm5hbWVzIjpbIlJHQiIsIlN0eWxlIiwid1htbCIsIndEb2MiLCJtUGFyZW50IiwiYXJndW1lbnRzIiwiYXR0ciIsInN0eWxlIiwic2V0RGVmYXVsdCIsIm5hbWUiLCJfdmFsIiwiaWQiLCJfYXR0ciIsInNldCIsImdldCIsInJlcXVpcmUiLCJuYW1pbmciLCJQcm9wZXJ0aWVzIiwidmFsdWVzIiwidmlzaXRvcnMiLCJjb25zdHJ1Y3RvciIsInR5cGUiLCJ0IiwiZm9yRWFjaCIsInZpc2l0b3IiLCJfZ2V0VmFsaWRDaGlsZHJlbiIsImF0dHJpYnV0ZXMiLCJjaGlsZHJlbiIsImxlbiIsImxlbmd0aCIsImkiLCJub2RlIiwibG9jYWxOYW1lIiwidW5kZWZpbmVkIiwiRU1QVFkiLCJ2aXNpdCIsImNoaWxkTm9kZXMiLCJ4IiwidiIsInNwbGl0IiwiY2hhckF0IiwidGVzdCIsImNvbG9yIiwicGVyY2VudCIsIlIiLCJwYXJzZUludCIsInN1YnN0cmluZyIsIkciLCJCIiwiUlIiLCJ0b1N0cmluZyIsIkdHIiwiQkIiLCJmIiwibyIsImF0dHJzIiwidmFsdWUiLCJwYXJzZUZsb2F0IiwicmVwbGFjZSIsIk1hdGgiLCJmbG9vciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxNQUFNLHVCQUFWOztJQUNxQkMsSzs7O0FBQ25CLGlCQUFZQyxJQUFaLEVBQWtCQyxJQUFsQixFQUF3QkMsT0FBeEIsRUFBaUM7QUFBQTs7QUFBQSwrR0FDdEJDLFNBRHNCOztBQUUvQixRQUFJSCxLQUFLSSxJQUFMLENBQVUsV0FBVixLQUEwQixHQUE5QixFQUFtQ0gsS0FBS0ksS0FBTCxDQUFXQyxVQUFYO0FBQ25DLFVBQUtDLElBQUwsR0FBWSxNQUFLQyxJQUFMLENBQVUsTUFBVixDQUFaO0FBQ0EsUUFBSyxNQUFLQyxFQUFMLEdBQVUsTUFBS0MsS0FBTCxDQUFXLFdBQVgsQ0FBZixFQUF5Q1QsS0FB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QUFZdkIsSUFBSSxFQUFMLEdBQVcsRUFBdEIsQ0FBUDtBQUNEO0FBeEZIO0FBQUE7QUFBQSx3QkFZYztBQUNWLGFBQU8sQ0FBQyxHQUFSO0FBQ0Q7QUFkSDs7QUFBQTtBQUFBLEVBQTRDdEIsUUFBUSxVQUFSLENBQTVDIiwiZmlsZSI6InN0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJHQiA9IC8oW2EtZkEtRjAtOV17Mn0/KXszfT8vO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGUgZXh0ZW5kcyByZXF1aXJlKCcuLi9tb2RlbCcpIHtcbiAgY29uc3RydWN0b3Iod1htbCwgd0RvYywgbVBhcmVudCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgaWYgKHdYbWwuYXR0cigndzpkZWZhdWx0JykgPT0gJzEnKSB3RG9jLnN0eWxlLnNldERlZmF1bHQodGhpcyk7XG4gICAgdGhpcy5uYW1lID0gdGhpcy5fdmFsKCduYW1lJyk7XG4gICAgaWYgKCh0aGlzLmlkID0gdGhpcy5fYXR0cigndzpzdHlsZUlkJykpKSB3RG9jLnN0eWxlLnNldCh0aGlzKTtcbiAgfVxuICBnZXRQYXJlbnRTdHlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy53RG9jLnN0eWxlLmdldCh0aGlzLl92YWwoJ2Jhc2VkT24nKSk7XG4gIH1cbiAgaXNEZWZhdWx0KCkge1xuICAgIHJldHVybiB0aGlzLndYbWwuYXR0cigndzpkZWZhdWx0JykgPT0gJzEnO1xuICB9XG4gIGdldE51bUlkKCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBnZXRPdXRsaW5lTGV2ZWwoKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG59XG5cbnZhciBuYW1pbmcgPSB7fTtcblN0eWxlLlByb3BlcnRpZXMgPSBjbGFzcyBQcm9wZXJ0aWVzIGV4dGVuZHMgcmVxdWlyZSgnLi4vbW9kZWwnKSB7XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBzdGF0aWMgZ2V0IG5hbWluZygpIHtcbiAgICByZXR1cm4gbmFtaW5nO1xuICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy52YWx1ZXMgPSB7fTtcbiAgfVxuXG4gIGdldCBFTVBUWSgpIHtcbiAgICByZXR1cm4gLTk5OTtcbiAgfVxuICAvL3VzZSBwYXJlbnQgdmlzaXRvciB0byB2aXNpdG9yIHN0eWxlIG5vZGVzIGFuZCBhdHRyaWJ1dGVzXG4gIHBhcnNlKHZpc2l0b3JzKSB7XG4gICAgdmFyIHZhbHVlcyA9IHRoaXMudmFsdWVzLFxuICAgICAgbmFtaW5nID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1pbmcsXG4gICAgICB0eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci50eXBlLFxuICAgICAgdDtcbiAgICB2aXNpdG9ycy5mb3JFYWNoKCh2aXNpdG9yKSA9PiB7XG4gICAgICBbdGhpcy5fZ2V0VmFsaWRDaGlsZHJlbigpLCB0aGlzLndYbWwuYXR0cmlidXRlc10uZm9yRWFjaCgoY2hpbGRyZW4pID0+IHtcbiAgICAgICAgZm9yICh2YXIgbGVuID0gY2hpbGRyZW4ubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgdmFyIG5vZGUgPSBjaGlsZHJlbltpXSxcbiAgICAgICAgICAgIG5hbWUgPSBub2RlLmxvY2FsTmFtZTtcbiAgICAgICAgICBpZiAodmFsdWVzW25hbWVdID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW25hbWVdID09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgIHZhbHVlc1tuYW1lXSA9IHRoaXNbbmFtZV0obm9kZSk7XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLmF0dHIgJiYgKHQgPSBub2RlLmF0dHIoJ3c6dmFsJykpKVxuICAgICAgICAgICAgICAvL2xhenkgZGVmYXVsdFxuICAgICAgICAgICAgICB2YWx1ZXNbbmFtZV0gPSB0O1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YWx1ZXNbbmFtZV0gIT0gdGhpcy5FTVBUWSAmJlxuICAgICAgICAgICAgdmlzaXRvci52aXNpdCh2YWx1ZXNbbmFtZV0sIG5hbWluZ1tuYW1lXSB8fCBuYW1lLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgX2dldFZhbGlkQ2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMud1htbC5jaGlsZE5vZGVzO1xuICB9XG4gIGJhc2VkT24oeCkge1xuICAgIHJldHVybiB4LmF0dHIoJ3c6dmFsJyk7XG4gIH1cbiAgYXNDb2xvcih2KSB7XG4gICAgaWYgKCF2IHx8IHYubGVuZ3RoID09IDAgfHwgdiA9PSAnYXV0bycpIHJldHVybiAnIzAwMDAwMCc7XG4gICAgdiA9IHYuc3BsaXQoJyAnKVswXTtcbiAgICByZXR1cm4gdi5jaGFyQXQoMCkgPT0gJyMnID8gdiA6IFJHQi50ZXN0KHYpID8gJyMnICsgdiA6IHY7XG4gIH1cbiAgc2hhZGVDb2xvcihjb2xvciwgcGVyY2VudCkge1xuICAgIGlmICghUkdCLnRlc3QoY29sb3IpKSByZXR1cm4gY29sb3I7XG4gICAgdmFyIFIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSwgMyksIDE2KTtcbiAgICB2YXIgRyA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygzLCA1KSwgMTYpO1xuICAgIHZhciBCID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDUsIDcpLCAxNik7XG5cbiAgICBSID0gcGFyc2VJbnQoKFIgKiAoMTAwICsgcGVyY2VudCkpIC8gMTAwKTtcbiAgICBHID0gcGFyc2VJbnQoKEcgKiAoMTAwICsgcGVyY2VudCkpIC8gMTAwKTtcbiAgICBCID0gcGFyc2VJbnQoKEIgKiAoMTAwICsgcGVyY2VudCkpIC8gMTAwKTtcblxuICAgIFIgPSBSIDwgMjU1ID8gUiA6IDI1NTtcbiAgICBHID0gRyA8IDI1NSA/IEcgOiAyNTU7XG4gICAgQiA9IEIgPCAyNTUgPyBCIDogMjU1O1xuXG4gICAgdmFyIFJSID0gUi50b1N0cmluZygxNikubGVuZ3RoID09IDEgPyAnMCcgKyBSLnRvU3RyaW5nKDE2KSA6IFIudG9TdHJpbmcoMTYpO1xuICAgIHZhciBHRyA9IEcudG9TdHJpbmcoMTYpLmxlbmd0aCA9PSAxID8gJzAnICsgRy50b1N0cmluZygxNikgOiBHLnRvU3RyaW5nKDE2KTtcbiAgICB2YXIgQkIgPSBCLnRvU3RyaW5nKDE2KS5sZW5ndGggPT0gMSA/ICcwJyArIEIudG9TdHJpbmcoMTYpIDogQi50b1N0cmluZygxNik7XG5cbiAgICByZXR1cm4gJyMnICsgUlIgKyBHRyArIEJCO1xuICB9XG4gIGFzT2JqZWN0KHgsIGYpIHtcbiAgICB2YXIgbyA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwLCBhdHRycyA9IHguYXR0cmlidXRlcywgbGVuID0gYXR0cnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspXG4gICAgICBvW2F0dHJzW2ldLmxvY2FsTmFtZV0gPSBmID8gZihhdHRyc1tpXS52YWx1ZSkgOiBhdHRyc1tpXS52YWx1ZTtcbiAgICByZXR1cm4gbztcbiAgfVxuICBhc1B0KHgsIHR5cGUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2NtJzpcbiAgICAgICAgcmV0dXJuIChwYXJzZUludCh4KSAqIDI4LjM0NjQ1NjcpIC8gMzYwMDAwO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy9keGFcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHgpIC8gMjAuMDtcbiAgICB9XG4gIH1cbiAgcHQyUHgoeCkge1xuICAgIGlmICh0eXBlb2YgeCA9PSAnc3RyaW5nJykgeCA9IHBhcnNlRmxvYXQoeC5yZXBsYWNlKCdwdCcsICcnKSk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKHggKiA5NikgLyA3Mik7XG4gIH1cbn07XG4iXX0=