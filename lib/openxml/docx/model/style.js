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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc3R5bGUuanMiXSwibmFtZXMiOlsiUkdCIiwiU3R5bGUiLCJ3WG1sIiwid0RvYyIsIm1QYXJlbnQiLCJhcmd1bWVudHMiLCJhdHRyIiwic3R5bGUiLCJzZXREZWZhdWx0IiwibmFtZSIsIl92YWwiLCJpZCIsIl9hdHRyIiwic2V0IiwiZ2V0IiwicmVxdWlyZSIsIm5hbWluZyIsIlByb3BlcnRpZXMiLCJ2YWx1ZXMiLCJ2aXNpdG9ycyIsImNvbnN0cnVjdG9yIiwidHlwZSIsInQiLCJmb3JFYWNoIiwidmlzaXRvciIsIl9nZXRWYWxpZENoaWxkcmVuIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIiwibGVuIiwibGVuZ3RoIiwiaSIsIm5vZGUiLCJsb2NhbE5hbWUiLCJ1bmRlZmluZWQiLCJFTVBUWSIsInZpc2l0IiwiY2hpbGROb2RlcyIsIngiLCJ2Iiwic3BsaXQiLCJjaGFyQXQiLCJ0ZXN0IiwiY29sb3IiLCJwZXJjZW50IiwiUiIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwiRyIsIkIiLCJSUiIsInRvU3RyaW5nIiwiR0ciLCJCQiIsImYiLCJvIiwiYXR0cnMiLCJ2YWx1ZSIsInBhcnNlRmxvYXQiLCJyZXBsYWNlIiwiTWF0aCIsImZsb29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE1BQU0sdUJBQVY7O0lBQ3FCQyxLOzs7QUFDbkIsaUJBQVlDLElBQVosRUFBa0JDLElBQWxCLEVBQXdCQyxPQUF4QixFQUFpQztBQUFBOztBQUFBLCtHQUN0QkMsU0FEc0I7O0FBRS9CLFFBQUlILEtBQUtJLElBQUwsQ0FBVSxXQUFWLEtBQTBCLEdBQTlCLEVBQW1DSCxLQUFLSSxLQUFMLENBQVdDLFVBQVg7QUFDbkMsVUFBS0MsSUFBTCxHQUFZLE1BQUtDLElBQUwsQ0FBVSxNQUFWLENBQVo7QUFDQSxRQUFLLE1BQUtDLEVBQUwsR0FBVSxNQUFLQyxLQUFMLENBQVcsV0FBWCxDQUFm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QUFLQyxLQUFMLENBQVl2QixJQUFJLEVBQUwsR0FBVyxFQUF0QixDQUFQO0FBQ0Q7QUF4Rkg7QUFBQTtBQUFBLHdCQVljO0FBQ1YsYUFBTyxDQUFDLEdBQVI7QUFDRDtBQWRIOztBQUFBO0FBQUEsRUFBNEN0QixRQUFRLFVBQVIsQ0FBNUMiLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUkdCID0gLyhbYS1mQS1GMC05XXsyfT8pezN9Py87XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZSBleHRlbmRzIHJlcXVpcmUoJy4uL21vZGVsJykge1xuICBjb25zdHJ1Y3Rvcih3WG1sLCB3RG9jLCBtUGFyZW50KSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBpZiAod1htbC5hdHRyKCd3OmRlZmF1bHQnKSA9PSAnMScpIHdEb2Muc3R5bGUuc2V0RGVmYXVsdCh0aGlzKTtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLl92YWwoJ25hbWUnKTtcbiAgICBpZiAoKHRoaXMuaWQgPSB0aGlzLl9hdHRyKCd3OnN0eWxlSWQnKSkpIHdEb2Muc3R5bGUuc2V0KHRoaXMpO1xuICB9XG4gIGdldFBhcmVudFN0eWxlKCkge1xuICAgIHJldHVybiB0aGlzLndEb2Muc3R5bGUuZ2V0KHRoaXMuX3ZhbCgnYmFzZWRPbicpKTtcbiAgfVxuICBpc0RlZmF1bHQoKSB7XG4gICAgcmV0dXJuIHRoaXMud1htbC5hdHRyKCd3OmRlZmF1bHQnKSA9PSAnMSc7XG4gIH1cbiAgZ2V0TnVtSWQoKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGdldE91dGxpbmVMZXZlbCgpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbn1cblxudmFyIG5hbWluZyA9IHt9O1xuU3R5bGUuUHJvcGVydGllcyA9IGNsYXNzIFByb3BlcnRpZXMgZXh0ZW5kcyByZXF1aXJlKCcuLi9tb2RlbCcpIHtcbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHN0YXRpYyBnZXQgbmFtaW5nKCkge1xuICAgIHJldHVybiBuYW1pbmc7XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLnZhbHVlcyA9IHt9O1xuICB9XG5cbiAgZ2V0IEVNUFRZKCkge1xuICAgIHJldHVybiAtOTk5O1xuICB9XG4gIC8vdXNlIHBhcmVudCB2aXNpdG9yIHRvIHZpc2l0b3Igc3R5bGUgbm9kZXMgYW5kIGF0dHJpYnV0ZXNcbiAgcGFyc2UodmlzaXRvcnMpIHtcbiAgICB2YXIgdmFsdWVzID0gdGhpcy52YWx1ZXMsXG4gICAgICBuYW1pbmcgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWluZyxcbiAgICAgIHR5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLnR5cGUsXG4gICAgICB0O1xuICAgIHZpc2l0b3JzLmZvckVhY2goKHZpc2l0b3IpID0+IHtcbiAgICAgIFt0aGlzLl9nZXRWYWxpZENoaWxkcmVuKCksIHRoaXMud1htbC5hdHRyaWJ1dGVzXS5mb3JFYWNoKChjaGlsZHJlbikgPT4ge1xuICAgICAgICBmb3IgKHZhciBsZW4gPSBjaGlsZHJlbi5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICB2YXIgbm9kZSA9IGNoaWxkcmVuW2ldLFxuICAgICAgICAgICAgbmFtZSA9IG5vZGUubG9jYWxOYW1lO1xuICAgICAgICAgIGlmICh2YWx1ZXNbbmFtZV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbbmFtZV0gPT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgdmFsdWVzW25hbWVdID0gdGhpc1tuYW1lXShub2RlKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUuYXR0ciAmJiAodCA9IG5vZGUuYXR0cigndzp2YWwnKSkpXG4gICAgICAgICAgICAgIC8vbGF6eSBkZWZhdWx0XG4gICAgICAgICAgICAgIHZhbHVlc1tuYW1lXSA9IHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbHVlc1tuYW1lXSAhPSB0aGlzLkVNUFRZICYmXG4gICAgICAgICAgICB2aXNpdG9yLnZpc2l0KHZhbHVlc1tuYW1lXSwgbmFtaW5nW25hbWVdIHx8IG5hbWUsIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBfZ2V0VmFsaWRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy53WG1sLmNoaWxkTm9kZXM7XG4gIH1cbiAgYmFzZWRPbih4KSB7XG4gICAgcmV0dXJuIHguYXR0cigndzp2YWwnKTtcbiAgfVxuICBhc0NvbG9yKHYpIHtcbiAgICBpZiAoIXYgfHwgdi5sZW5ndGggPT0gMCB8fCB2ID09ICdhdXRvJykgcmV0dXJuICcjMDAwMDAwJztcbiAgICB2ID0gdi5zcGxpdCgnICcpWzBdO1xuICAgIHJldHVybiB2LmNoYXJBdCgwKSA9PSAnIycgPyB2IDogUkdCLnRlc3QodikgPyAnIycgKyB2IDogdjtcbiAgfVxuICBzaGFkZUNvbG9yKGNvbG9yLCBwZXJjZW50KSB7XG4gICAgaWYgKCFSR0IudGVzdChjb2xvcikpIHJldHVybiBjb2xvcjtcbiAgICB2YXIgUiA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygxLCAzKSwgMTYpO1xuICAgIHZhciBHID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDMsIDUpLCAxNik7XG4gICAgdmFyIEIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoNSwgNyksIDE2KTtcblxuICAgIFIgPSBwYXJzZUludCgoUiAqICgxMDAgKyBwZXJjZW50KSkgLyAxMDApO1xuICAgIEcgPSBwYXJzZUludCgoRyAqICgxMDAgKyBwZXJjZW50KSkgLyAxMDApO1xuICAgIEIgPSBwYXJzZUludCgoQiAqICgxMDAgKyBwZXJjZW50KSkgLyAxMDApO1xuXG4gICAgUiA9IFIgPCAyNTUgPyBSIDogMjU1O1xuICAgIEcgPSBHIDwgMjU1ID8gRyA6IDI1NTtcbiAgICBCID0gQiA8IDI1NSA/IEIgOiAyNTU7XG5cbiAgICB2YXIgUlIgPSBSLnRvU3RyaW5nKDE2KS5sZW5ndGggPT0gMSA/ICcwJyArIFIudG9TdHJpbmcoMTYpIDogUi50b1N0cmluZygxNik7XG4gICAgdmFyIEdHID0gRy50b1N0cmluZygxNikubGVuZ3RoID09IDEgPyAnMCcgKyBHLnRvU3RyaW5nKDE2KSA6IEcudG9TdHJpbmcoMTYpO1xuICAgIHZhciBCQiA9IEIudG9TdHJpbmcoMTYpLmxlbmd0aCA9PSAxID8gJzAnICsgQi50b1N0cmluZygxNikgOiBCLnRvU3RyaW5nKDE2KTtcblxuICAgIHJldHVybiAnIycgKyBSUiArIEdHICsgQkI7XG4gIH1cbiAgYXNPYmplY3QoeCwgZikge1xuICAgIHZhciBvID0ge307XG4gICAgZm9yICh2YXIgaSA9IDAsIGF0dHJzID0geC5hdHRyaWJ1dGVzLCBsZW4gPSBhdHRycy5sZW5ndGg7IGkgPCBsZW47IGkrKylcbiAgICAgIG9bYXR0cnNbaV0ubG9jYWxOYW1lXSA9IGYgPyBmKGF0dHJzW2ldLnZhbHVlKSA6IGF0dHJzW2ldLnZhbHVlO1xuICAgIHJldHVybiBvO1xuICB9XG4gIGFzUHQoeCwgdHlwZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnY20nOlxuICAgICAgICByZXR1cm4gKHBhcnNlSW50KHgpICogMjguMzQ2NDU2NykgLyAzNjAwMDA7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvL2R4YVxuICAgICAgICByZXR1cm4gcGFyc2VJbnQoeCkgLyAyMC4wO1xuICAgIH1cbiAgfVxuICBwdDJQeCh4KSB7XG4gICAgaWYgKHR5cGVvZiB4ID09ICdzdHJpbmcnKSB4ID0gcGFyc2VGbG9hdCh4LnJlcGxhY2UoJ3B0JywgJycpKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoeCAqIDk2KSAvIDcyKTtcbiAgfVxufTtcbiJdfQ==