'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _shape = require('../model/shape');

var _shape2 = _interopRequireDefault(_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var format = function () {
  function format(wXml, wDoc) {
    _classCallCheck(this, format);

    this.wXml = wXml;
    this.wDoc = wDoc;
    this._converter = new _shape2.default.Properties(null, wDoc, null);
    this._line = {};
    this._fill = { 0: {}, 1000: {} };
    this._bgFill = {};
    this._effect = {};
    this._font = {};
  }

  _createClass(format, [{
    key: 'line',
    value: function line(idx, t) {
      if (t = this._line[idx]) return t;
      return (t = this.wXml.$1('ln:nth-child(' + (parseInt(idx) + 1) + ')')) && (this._line[idx] = this._converter.ln(t));
    }
  }, {
    key: 'fill',
    value: function fill(idx, t) {
      idx = parseInt(idx);
      if (idx > 1000) return this.bgFill(idx - 1000);

      if (t = this._fill[idx]) return t;
      return (t = this.wXml.$1('bgFillStyleLst>:nth-child(' + (parseInt(idx) + 1) + ')')) && (this._fill[idx] = this._converter[t.localName](t));
    }
  }, {
    key: 'bgFill',
    value: function bgFill(idx, t) {
      if (t = this._bgFill[idx]) return t;
      return (t = this.wXml.$1('bgFillStyleLst>:nth-child(' + (parseInt(idx) + 1) + ')')) && (this._bgFill[idx] = this._converter[t.localName](t));
    }
  }, {
    key: 'effect',
    value: function effect(idx, t) {
      if (t = this._effect[idx]) return t;
      return (t = this.wXml.$1('effectStyle:nth-child(' + (parseInt(idx) + 1) + ')>effectLst')) && (this._effect[idx] = this._converter.effectLst(t));
    }
  }, {
    key: 'font',
    value: function font(idx, t) {
      if (t = this._font[idx]) return t;
      return (t = this.wXml.$1('fontScheme>' + idx + 'Font>latin')) && (this._effect[idx] = t.attr('typeface'));
    }
  }]);

  return format;
}();

exports.default = format;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvdGhlbWUvZm9ybWF0LmpzIl0sIm5hbWVzIjpbImZvcm1hdCIsIndYbWwiLCJ3RG9jIiwiX2NvbnZlcnRlciIsIlNoYXBlIiwiUHJvcGVydGllcyIsIl9saW5lIiwiX2ZpbGwiLCJfYmdGaWxsIiwiX2VmZmVjdCIsIl9mb250IiwiaWR4IiwidCIsIiQxIiwicGFyc2VJbnQiLCJsbiIsImJnRmlsbCIsImxvY2FsTmFtZSIsImVmZmVjdExzdCIsImF0dHIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRXFCQSxNO0FBQ25CLGtCQUFZQyxJQUFaLEVBQWtCQyxJQUFsQixFQUF3QjtBQUFBOztBQUN0QixTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLElBQUlDLGdCQUFNQyxVQUFWLENBQXFCLElBQXJCLEVBQTJCSCxJQUEzQixFQUFpQyxJQUFqQyxDQUFsQjtBQUNBLFNBQUtJLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEVBQUUsR0FBRyxFQUFMLEVBQVMsTUFBTSxFQUFmLEVBQWI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDRDs7Ozt5QkFDSUMsRyxFQUFLQyxDLEVBQUc7QUFDWCxVQUFLQSxJQUFJLEtBQUtOLEtBQUwsQ0FBV0ssR0FBWCxDQUFULEVBQTJCLE9BQU9DLENBQVA7QUFDM0IsYUFDRSxDQUFDQSxJQUFJLEtBQUtYLElBQUwsQ0FBVVksRUFBVixDQUFhLG1CQUFtQkMsU0FBU0gsR0FBVCxJQUFnQixDQUFuQyxJQUF3QyxHQUFyRCxDQUFMLE1BQ0MsS0FBS0wsS0FBTCxDQUFXSyxHQUFYLElBQWtCLEtBQUtSLFVBQUwsQ0FBZ0JZLEVBQWhCLENBQW1CSCxDQUFuQixDQURuQixDQURGO0FBSUQ7Ozt5QkFDSUQsRyxFQUFLQyxDLEVBQUc7QUFDWEQsWUFBTUcsU0FBU0gsR0FBVCxDQUFOO0FBQ0EsVUFBSUEsTUFBTSxJQUFWLEVBQWdCLE9BQU8sS0FBS0ssTUFBTCxDQUFZTCxNQUFNLElBQWxCLENBQVA7O0FBRWhCLFVBQUtDLElBQUksS0FBS0wsS0FBTCxDQUFXSSxHQUFYLENBQVQsRUFBMkIsT0FBT0MsQ0FBUDtBQUMzQixhQUNFLENBQUNBLElBQUksS0FBS1gsSUFBTCxDQUFVWSxFQUFWLENBQ0gsZ0NBQWdDQyxTQUFTSCxHQUFULElBQWdCLENBQWhELElBQXFELEdBRGxELENBQUwsTUFFTyxLQUFLSixLQUFMLENBQVdJLEdBQVgsSUFBa0IsS0FBS1IsVUFBTCxDQUFnQlMsRUFBRUssU0FBbEIsRUFBNkJMLENBQTdCLENBRnpCLENBREY7QUFLRDs7OzJCQUNNRCxHLEVBQUtDLEMsRUFBRztBQUNiLFVBQUtBLElBQUksS0FBS0osT0FBTCxDQUFhRyxHQUFiLENBQVQsRUFBNkIsT0FBT0MsQ0FBUDtBQUM3QixhQUNFLENBQUNBLElBQUksS0FBS1gsSUFBTCxDQUFVWSxFQUFWLENBQ0gsZ0NBQWdDQyxTQUFTSCxHQUFULElBQWdCLENBQWhELElBQXFELEdBRGxELENBQUwsTUFFTyxLQUFLSCxPQUFMLENBQWFHLEdBQWIsSUFBb0IsS0FBS1IsVUFBTCxDQUFnQlMsRUFBRUssU0FBbEIsRUFBNkJMLENBQTdCLENBRjNCLENBREY7QUFLRDs7OzJCQUNNRCxHLEVBQUtDLEMsRUFBRztBQUNiLFVBQUtBLElBQUksS0FBS0gsT0FBTCxDQUFhRSxHQUFiLENBQVQsRUFBNkIsT0FBT0MsQ0FBUDtBQUM3QixhQUNFLENBQUNBLElBQUksS0FBS1gsSUFBTCxDQUFVWSxFQUFWLENBQ0gsNEJBQTRCQyxTQUFTSCxHQUFULElBQWdCLENBQTVDLElBQWlELGFBRDlDLENBQUwsTUFFTyxLQUFLRixPQUFMLENBQWFFLEdBQWIsSUFBb0IsS0FBS1IsVUFBTCxDQUFnQmUsU0FBaEIsQ0FBMEJOLENBQTFCLENBRjNCLENBREY7QUFLRDs7O3lCQUNJRCxHLEVBQUtDLEMsRUFBRztBQUNYLFVBQUtBLElBQUksS0FBS0YsS0FBTCxDQUFXQyxHQUFYLENBQVQsRUFBMkIsT0FBT0MsQ0FBUDtBQUMzQixhQUNFLENBQUNBLElBQUksS0FBS1gsSUFBTCxDQUFVWSxFQUFWLENBQWEsZ0JBQWdCRixHQUFoQixHQUFzQixZQUFuQyxDQUFMLE1BQ0MsS0FBS0YsT0FBTCxDQUFhRSxHQUFiLElBQW9CQyxFQUFFTyxJQUFGLENBQU8sVUFBUCxDQURyQixDQURGO0FBSUQ7Ozs7OztrQkFuRGtCbkIsTSIsImZpbGUiOiJmb3JtYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hhcGUgZnJvbSAnLi4vbW9kZWwvc2hhcGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBmb3JtYXQge1xuICBjb25zdHJ1Y3Rvcih3WG1sLCB3RG9jKSB7XG4gICAgdGhpcy53WG1sID0gd1htbDtcbiAgICB0aGlzLndEb2MgPSB3RG9jO1xuICAgIHRoaXMuX2NvbnZlcnRlciA9IG5ldyBTaGFwZS5Qcm9wZXJ0aWVzKG51bGwsIHdEb2MsIG51bGwpO1xuICAgIHRoaXMuX2xpbmUgPSB7fTtcbiAgICB0aGlzLl9maWxsID0geyAwOiB7fSwgMTAwMDoge30gfTtcbiAgICB0aGlzLl9iZ0ZpbGwgPSB7fTtcbiAgICB0aGlzLl9lZmZlY3QgPSB7fTtcbiAgICB0aGlzLl9mb250ID0ge307XG4gIH1cbiAgbGluZShpZHgsIHQpIHtcbiAgICBpZiAoKHQgPSB0aGlzLl9saW5lW2lkeF0pKSByZXR1cm4gdDtcbiAgICByZXR1cm4gKFxuICAgICAgKHQgPSB0aGlzLndYbWwuJDEoJ2xuOm50aC1jaGlsZCgnICsgKHBhcnNlSW50KGlkeCkgKyAxKSArICcpJykpICYmXG4gICAgICAodGhpcy5fbGluZVtpZHhdID0gdGhpcy5fY29udmVydGVyLmxuKHQpKVxuICAgICk7XG4gIH1cbiAgZmlsbChpZHgsIHQpIHtcbiAgICBpZHggPSBwYXJzZUludChpZHgpO1xuICAgIGlmIChpZHggPiAxMDAwKSByZXR1cm4gdGhpcy5iZ0ZpbGwoaWR4IC0gMTAwMCk7XG5cbiAgICBpZiAoKHQgPSB0aGlzLl9maWxsW2lkeF0pKSByZXR1cm4gdDtcbiAgICByZXR1cm4gKFxuICAgICAgKHQgPSB0aGlzLndYbWwuJDEoXG4gICAgICAgICdiZ0ZpbGxTdHlsZUxzdD46bnRoLWNoaWxkKCcgKyAocGFyc2VJbnQoaWR4KSArIDEpICsgJyknXG4gICAgICApKSAmJiAodGhpcy5fZmlsbFtpZHhdID0gdGhpcy5fY29udmVydGVyW3QubG9jYWxOYW1lXSh0KSlcbiAgICApO1xuICB9XG4gIGJnRmlsbChpZHgsIHQpIHtcbiAgICBpZiAoKHQgPSB0aGlzLl9iZ0ZpbGxbaWR4XSkpIHJldHVybiB0O1xuICAgIHJldHVybiAoXG4gICAgICAodCA9IHRoaXMud1htbC4kMShcbiAgICAgICAgJ2JnRmlsbFN0eWxlTHN0PjpudGgtY2hpbGQoJyArIChwYXJzZUludChpZHgpICsgMSkgKyAnKSdcbiAgICAgICkpICYmICh0aGlzLl9iZ0ZpbGxbaWR4XSA9IHRoaXMuX2NvbnZlcnRlclt0LmxvY2FsTmFtZV0odCkpXG4gICAgKTtcbiAgfVxuICBlZmZlY3QoaWR4LCB0KSB7XG4gICAgaWYgKCh0ID0gdGhpcy5fZWZmZWN0W2lkeF0pKSByZXR1cm4gdDtcbiAgICByZXR1cm4gKFxuICAgICAgKHQgPSB0aGlzLndYbWwuJDEoXG4gICAgICAgICdlZmZlY3RTdHlsZTpudGgtY2hpbGQoJyArIChwYXJzZUludChpZHgpICsgMSkgKyAnKT5lZmZlY3RMc3QnXG4gICAgICApKSAmJiAodGhpcy5fZWZmZWN0W2lkeF0gPSB0aGlzLl9jb252ZXJ0ZXIuZWZmZWN0THN0KHQpKVxuICAgICk7XG4gIH1cbiAgZm9udChpZHgsIHQpIHtcbiAgICBpZiAoKHQgPSB0aGlzLl9mb250W2lkeF0pKSByZXR1cm4gdDtcbiAgICByZXR1cm4gKFxuICAgICAgKHQgPSB0aGlzLndYbWwuJDEoJ2ZvbnRTY2hlbWU+JyArIGlkeCArICdGb250PmxhdGluJykpICYmXG4gICAgICAodGhpcy5fZWZmZWN0W2lkeF0gPSB0LmF0dHIoJ3R5cGVmYWNlJykpXG4gICAgKTtcbiAgfVxufVxuIl19