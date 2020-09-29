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
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L3RoZW1lL2Zvcm1hdC5qcyJdLCJuYW1lcyI6WyJmb3JtYXQiLCJ3WG1sIiwid0RvYyIsIl9jb252ZXJ0ZXIiLCJTaGFwZSIsIlByb3BlcnRpZXMiLCJfbGluZSIsIl9maWxsIiwiX2JnRmlsbCIsIl9lZmZlY3QiLCJfZm9udCIsImlkeCIsInQiLCIkMSIsInBhcnNlSW50IiwibG4iLCJiZ0ZpbGwiLCJsb2NhbE5hbWUiLCJlZmZlY3RMc3QiLCJhdHRyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7OztJQUVxQkEsTTtBQUNuQixrQkFBWUMsSUFBWixFQUFrQkMsSUFBbEIsRUFBd0I7QUFBQTs7QUFDdEIsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixJQUFJQyxnQkFBTUMsVUFBVixDQUFxQixJQUFyQixFQUEyQkgsSUFBM0IsRUFBaUMsSUFBakMsQ0FBbEI7QUFDQSxTQUFLSSxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFFLEdBQUcsRUFBTCxFQUFTLE1BQU0sRUFBZixFQUFiO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEVBQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0Q7Ozs7eUJBQ0lDLEcsRUFBS0MsQyxFQUFHO0FBQ1gsVUFBS0EsSUFBSSxLQUFLTixLQUFMLENBQVdLLEdBQVgsQ0FBVCxFQUEyQixPQUFPQyxDQUFQO0FBQzNCLGFBQ0UsQ0FBQ0EsSUFBSSxLQUFLWCxJQUFMLENBQVVZLEVBQVYsQ0FBYSxtQkFBbUJDLFNBQVNILEdBQVQsSUFBZ0IsQ0FBbkMsSUFBd0MsR0FBckQsQ0FBTCxNQUNDLEtBQUtMLEtBQUwsQ0FBV0ssR0FBWCxJQUFrQixLQUFLUixVQUFMLENBQWdCWSxFQUFoQixDQUFtQkgsQ0FBbkIsQ0FEbkIsQ0FERjtBQUlEOzs7eUJBQ0lELEcsRUFBS0MsQyxFQUFHO0FBQ1hELFlBQU1HLFNBQVNILEdBQVQsQ0FBTjtBQUNBLFVBQUlBLE1BQU0sSUFBVixFQUFnQixPQUFPLEtBQUtLLE1BQUwsQ0FBWUwsTUFBTSxJQUFsQixDQUFQOztBQUVoQixVQUFLQyxJQUFJLEtBQUtMLEtBQUwsQ0FBV0ksR0FBWCxDQUFULEVBQTJCLE9BQU9DLENBQVA7QUFDM0IsYUFDRSxDQUFDQSxJQUFJLEtBQUtYLElBQUwsQ0FBVVksRUFBVixDQUNILGdDQUFnQ0MsU0FBU0gsR0FBVCxJQUFnQixDQUFoRCxJQUFxRCxHQURsRCxDQUFMLE1BRU8sS0FBS0osS0FBTCxDQUFXSSxHQUFYLElBQWtCLEtBQUtSLFVBQUwsQ0FBZ0JTLEVBQUVLLFNBQWxCLEVBQTZCTCxDQUE3QixDQUZ6QixDQURGO0FBS0Q7OzsyQkFDTUQsRyxFQUFLQyxDLEVBQUc7QUFDYixVQUFLQSxJQUFJLEtBQUtKLE9BQUwsQ0FBYUcsR0FBYixDQUFULEVBQTZCLE9BQU9DLENBQVA7QUFDN0IsYUFDRSxDQUFDQSxJQUFJLEtBQUtYLElBQUwsQ0FBVVksRUFBVixDQUNILGdDQUFnQ0MsU0FBU0gsR0FBVCxJQUFnQixDQUFoRCxJQUFxRCxHQURsRCxDQUFMLE1BRU8sS0FBS0gsT0FBTCxDQUFhRyxHQUFiLElBQW9CLEtBQUtSLFVBQUwsQ0FBZ0JTLEVBQUVLLFNBQWxCLEVBQTZCTCxDQUE3QixDQUYzQixDQURGO0FBS0Q7OzsyQkFDTUQsRyxFQUFLQyxDLEVBQUc7QUFDYixVQUFLQSxJQUFJLEtBQUtILE9BQUwsQ0FBYUUsR0FBYixDQUFULEVBQTZCLE9BQU9DLENBQVA7QUFDN0IsYUFDRSxDQUFDQSxJQUFJLEtBQUtYLElBQUwsQ0FBVVksRUFBVixDQUNILDRCQUE0QkMsU0FBU0gsR0FBVCxJQUFnQixDQUE1QyxJQUFpRCxhQUQ5QyxDQUFMLE1BRU8sS0FBS0YsT0FBTCxDQUFhRSxHQUFiLElBQW9CLEtBQUtSLFVBQUwsQ0FBZ0JlLFNBQWhCLENBQTBCTixDQUExQixDQUYzQixDQURGO0FBS0Q7Ozt5QkFDSUQsRyxFQUFLQyxDLEVBQUc7QUFDWCxVQUFLQSxJQUFJLEtBQUtGLEtBQUwsQ0FBV0MsR0FBWCxDQUFULEVBQTJCLE9BQU9DLENBQVA7QUFDM0IsYUFDRSxDQUFDQSxJQUFJLEtBQUtYLElBQUwsQ0FBVVksRUFBVixDQUFhLGdCQUFnQkYsR0FBaEIsR0FBc0IsWUFBbkMsQ0FBTCxNQUNDLEtBQUtGLE9BQUwsQ0FBYUUsR0FBYixJQUFvQkMsRUFBRU8sSUFBRixDQUFPLFVBQVAsQ0FEckIsQ0FERjtBQUlEOzs7Ozs7a0JBbkRrQm5CLE0iLCJmaWxlIjoiZm9ybWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoYXBlIGZyb20gJy4uL21vZGVsL3NoYXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZm9ybWF0IHtcbiAgY29uc3RydWN0b3Iod1htbCwgd0RvYykge1xuICAgIHRoaXMud1htbCA9IHdYbWw7XG4gICAgdGhpcy53RG9jID0gd0RvYztcbiAgICB0aGlzLl9jb252ZXJ0ZXIgPSBuZXcgU2hhcGUuUHJvcGVydGllcyhudWxsLCB3RG9jLCBudWxsKTtcbiAgICB0aGlzLl9saW5lID0ge307XG4gICAgdGhpcy5fZmlsbCA9IHsgMDoge30sIDEwMDA6IHt9IH07XG4gICAgdGhpcy5fYmdGaWxsID0ge307XG4gICAgdGhpcy5fZWZmZWN0ID0ge307XG4gICAgdGhpcy5fZm9udCA9IHt9O1xuICB9XG4gIGxpbmUoaWR4LCB0KSB7XG4gICAgaWYgKCh0ID0gdGhpcy5fbGluZVtpZHhdKSkgcmV0dXJuIHQ7XG4gICAgcmV0dXJuIChcbiAgICAgICh0ID0gdGhpcy53WG1sLiQxKCdsbjpudGgtY2hpbGQoJyArIChwYXJzZUludChpZHgpICsgMSkgKyAnKScpKSAmJlxuICAgICAgKHRoaXMuX2xpbmVbaWR4XSA9IHRoaXMuX2NvbnZlcnRlci5sbih0KSlcbiAgICApO1xuICB9XG4gIGZpbGwoaWR4LCB0KSB7XG4gICAgaWR4ID0gcGFyc2VJbnQoaWR4KTtcbiAgICBpZiAoaWR4ID4gMTAwMCkgcmV0dXJuIHRoaXMuYmdGaWxsKGlkeCAtIDEwMDApO1xuXG4gICAgaWYgKCh0ID0gdGhpcy5fZmlsbFtpZHhdKSkgcmV0dXJuIHQ7XG4gICAgcmV0dXJuIChcbiAgICAgICh0ID0gdGhpcy53WG1sLiQxKFxuICAgICAgICAnYmdGaWxsU3R5bGVMc3Q+Om50aC1jaGlsZCgnICsgKHBhcnNlSW50KGlkeCkgKyAxKSArICcpJ1xuICAgICAgKSkgJiYgKHRoaXMuX2ZpbGxbaWR4XSA9IHRoaXMuX2NvbnZlcnRlclt0LmxvY2FsTmFtZV0odCkpXG4gICAgKTtcbiAgfVxuICBiZ0ZpbGwoaWR4LCB0KSB7XG4gICAgaWYgKCh0ID0gdGhpcy5fYmdGaWxsW2lkeF0pKSByZXR1cm4gdDtcbiAgICByZXR1cm4gKFxuICAgICAgKHQgPSB0aGlzLndYbWwuJDEoXG4gICAgICAgICdiZ0ZpbGxTdHlsZUxzdD46bnRoLWNoaWxkKCcgKyAocGFyc2VJbnQoaWR4KSArIDEpICsgJyknXG4gICAgICApKSAmJiAodGhpcy5fYmdGaWxsW2lkeF0gPSB0aGlzLl9jb252ZXJ0ZXJbdC5sb2NhbE5hbWVdKHQpKVxuICAgICk7XG4gIH1cbiAgZWZmZWN0KGlkeCwgdCkge1xuICAgIGlmICgodCA9IHRoaXMuX2VmZmVjdFtpZHhdKSkgcmV0dXJuIHQ7XG4gICAgcmV0dXJuIChcbiAgICAgICh0ID0gdGhpcy53WG1sLiQxKFxuICAgICAgICAnZWZmZWN0U3R5bGU6bnRoLWNoaWxkKCcgKyAocGFyc2VJbnQoaWR4KSArIDEpICsgJyk+ZWZmZWN0THN0J1xuICAgICAgKSkgJiYgKHRoaXMuX2VmZmVjdFtpZHhdID0gdGhpcy5fY29udmVydGVyLmVmZmVjdExzdCh0KSlcbiAgICApO1xuICB9XG4gIGZvbnQoaWR4LCB0KSB7XG4gICAgaWYgKCh0ID0gdGhpcy5fZm9udFtpZHhdKSkgcmV0dXJuIHQ7XG4gICAgcmV0dXJuIChcbiAgICAgICh0ID0gdGhpcy53WG1sLiQxKCdmb250U2NoZW1lPicgKyBpZHggKyAnRm9udD5sYXRpbicpKSAmJlxuICAgICAgKHRoaXMuX2VmZmVjdFtpZHhdID0gdC5hdHRyKCd0eXBlZmFjZScpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==