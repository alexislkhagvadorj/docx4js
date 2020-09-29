'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('../style');

var _style2 = _interopRequireDefault(_style);

var _inline = require('./inline');

var _inline2 = _interopRequireDefault(_inline);

var _numbering = require('./numbering');

var _numbering2 = _interopRequireDefault(_numbering);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paragraph = function (_Style) {
  _inherits(Paragraph, _Style);

  function Paragraph() {
    _classCallCheck(this, Paragraph);

    return _possibleConstructorReturn(this, (Paragraph.__proto__ || Object.getPrototypeOf(Paragraph)).apply(this, arguments));
  }

  _createClass(Paragraph, [{
    key: 'getOutlineLevel',
    value: function getOutlineLevel(v) {
      if ((v = this._val('outlineLvl')) != null) return parseInt(v);
      if ((v = this.getParentStyle()) != null && v.getOutlineLevel) return v.getOutlineLevel();
      return -1;
    }
  }, {
    key: 'getNumId',
    value: function getNumId(v) {
      if ((v = this._val('numId')) != null) return v;
      if ((v = this.getParentStyle()) != null && v.getNumId) return v.getNumId();
      return -1;
    }
  }, {
    key: 'asNumberingStyle',
    value: function asNumberingStyle() {
      var _Numbering$prototype$;

      return (_Numbering$prototype$ = _numbering2.default.prototype.asNumberingStyle).call.apply(_Numbering$prototype$, [this].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: '_iterate',
    value: function _iterate(f, factories, visitors) {
      var pr = this.wXml.$1('pPr');
      pr && new this.constructor.Properties(pr, this.wDoc, this).parse(visitors);

      (pr = this.wXml.$1('rPr')) && new _inline2.default.Properties(pr, this.wDoc, this).parse(visitors);

      (pr = this.wXml.$1('numPr')) && new _numbering2.default.Properties(pr, this.wDoc, this).parse(visitors);

      (pr = this.wXml.$1('framePr')) && new this.constructor.FrameProperties(pr, this.wDoc, this).parse(visitors);
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'style.paragraph';
    }
  }, {
    key: 'Properties',
    get: function get() {
      return Properties;
    }
  }, {
    key: 'FrameProperties',
    get: function get() {
      return FrameProperties;
    }
  }]);

  return Paragraph;
}(_style2.default);

exports.default = Paragraph;

var Properties = function (_Style$Properties) {
  _inherits(Properties, _Style$Properties);

  function Properties() {
    _classCallCheck(this, Properties);

    return _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));
  }

  _createClass(Properties, [{
    key: 'jc',
    value: function jc(x) {
      return x.attr('w:val');
    }
  }, {
    key: 'ind',
    value: function ind(x) {
      var _this3 = this;

      return this.asObject(x, function (a) {
        return _this3.pt2Px(_this3.asPt(a));
      });
    }
  }, {
    key: 'spacing',
    value: function spacing(x) {
      var r = this.asObject(x),
          o = {};

      if (!r.beforeAutospacing && r.beforeLines) o.top = this.pt2Px(this.asPt(r.beforeLines));else if (r.before) o.top = this.pt2Px(this.asPt(r.before));

      if (!r.afterAutospacing && r.afterLines) o.bottom = this.pt2Px(this.asPt(r.afterLines));else if (r.after) o.bottom = this.pt2Px(this.asPt(r.after));

      if (!r.line) return o;

      switch (x.lineRule) {
        case 'atLeast':
        case 'exact':
          o.lineHeight = this.pt2Px(this.asPt(x.line));
          break;
        case 'auto':
        default:
          o.lineHeight = parseInt(r.line) * 100 / 240 + '%';
      }
      o.lineRule = x.lineRule;
      return o;
    }
  }, {
    key: 'pBdr',
    value: function pBdr(x) {
      var r = {};
      var bdr = _inline2.default.Properties.prototype.bdr.bind(this);
      Array.from(x.childNodes).forEach(function (a) {
        return a.localName && (r[a.localName] = bdr(a));
      });
      return r;
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'paragraph';
    }
  }]);

  return Properties;
}(_style2.default.Properties);

var FrameProperties = function (_Style$Properties2) {
  _inherits(FrameProperties, _Style$Properties2);

  function FrameProperties() {
    _classCallCheck(this, FrameProperties);

    return _possibleConstructorReturn(this, (FrameProperties.__proto__ || Object.getPrototypeOf(FrameProperties)).apply(this, arguments));
  }

  _createClass(FrameProperties, null, [{
    key: 'type',
    get: function get() {
      return 'frame';
    }
  }]);

  return FrameProperties;
}(_style2.default.Properties);

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL3N0eWxlL3BhcmFncmFwaC5qcyJdLCJuYW1lcyI6WyJQYXJhZ3JhcGgiLCJ2IiwiX3ZhbCIsInBhcnNlSW50IiwiZ2V0UGFyZW50U3R5bGUiLCJnZXRPdXRsaW5lTGV2ZWwiLCJnZXROdW1JZCIsInByb3RvdHlwZSIsImFzTnVtYmVyaW5nU3R5bGUiLCJjYWxsIiwiYXJndW1lbnRzIiwiZiIsImZhY3RvcmllcyIsInZpc2l0b3JzIiwicHIiLCJ3WG1sIiwiJDEiLCJjb25zdHJ1Y3RvciIsIlByb3BlcnRpZXMiLCJ3RG9jIiwicGFyc2UiLCJJbmxpbmUiLCJOdW1iZXJpbmciLCJGcmFtZVByb3BlcnRpZXMiLCJTdHlsZSIsIngiLCJhdHRyIiwiYXNPYmplY3QiLCJhIiwicHQyUHgiLCJhc1B0IiwiciIsIm8iLCJiZWZvcmVBdXRvc3BhY2luZyIsImJlZm9yZUxpbmVzIiwidG9wIiwiYmVmb3JlIiwiYWZ0ZXJBdXRvc3BhY2luZyIsImFmdGVyTGluZXMiLCJib3R0b20iLCJhZnRlciIsImxpbmUiLCJsaW5lUnVsZSIsImxpbmVIZWlnaHQiLCJiZHIiLCJiaW5kIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJsb2NhbE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7O29DQUNIQyxDLEVBQUc7QUFDakIsVUFBSSxDQUFDQSxJQUFJLEtBQUtDLElBQUwsQ0FBVSxZQUFWLENBQUwsS0FBaUMsSUFBckMsRUFBMkMsT0FBT0MsU0FBU0YsQ0FBVCxDQUFQO0FBQzNDLFVBQUksQ0FBQ0EsSUFBSSxLQUFLRyxjQUFMLEVBQUwsS0FBK0IsSUFBL0IsSUFBdUNILEVBQUVJLGVBQTdDLEVBQ0UsT0FBT0osRUFBRUksZUFBRixFQUFQO0FBQ0YsYUFBTyxDQUFDLENBQVI7QUFDRDs7OzZCQUNRSixDLEVBQUc7QUFD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QUFMLENBQVcsS0FBS0MsSUFBTCxDQUFVQyxFQUFFUyxLQUFaLENBQVgsQ0FBWDs7QUFFbEIsVUFBSSxDQUFDVCxFQUFFVSxJQUFQLEVBQWEsT0FBT1QsQ0FBUDs7QUFFYixjQUFRUCxFQUFFaUIsUUFBVjtBQUNFLGFBQUssU0FBTDtBQUNBLGFBQUssT0FBTDtBQUNFVixZQUFFVyxVQUFGLEdBQWUsS0FBS2QsS0FBTCxDQUFXLEtBQUtDLElBQUwsQ0FBVUwsRUFBRWdCLElBQVosQ0FBWCxDQUFmO0FBQ0E7QUFDRixhQUFLLE1BQUw7QUFDQTtBQUNFVCxZQUFFVyxVQUFGLEdBQWdCeEMsU0FBUzRCLEVBQUVVLElBQVgsSUFBbUIsR0FBcEIsR0FBMkIsR0FBM0IsR0FBaUMsR0FBaEQ7QUFQSjtBQVNBVCxRQUFFVSxRQUFGLEdBQWFqQixFQUFFaUIsUUFBZjtBQUNBLGFBQU9WLENBQVA7QUFDRDs7O3lCQUNJUCxDLEVBQUc7QUFDTixVQUFJTSxJQUFJLEVBQVI7QUFDQSxVQUFJYSxNQUFNdkIsaUJBQU9ILFVBQVAsQ0FBa0JYLFNBQWxCLENBQTRCcUMsR0FBNUIsQ0FBZ0NDLElBQWhDLENBQXFDLElBQXJDLENBQVY7QUFDQUMsWUFBTUMsSUFBTixDQUFXdEIsRUFBRXVCLFVBQWIsRUFBeUJDLE9BQXpCLENBQ0UsVUFBQ3JCLENBQUQ7QUFBQSxlQUFPQSxFQUFFc0IsU0FBRixLQUFnQm5CLEVBQUVILEVBQUVzQixTQUFKLElBQWlCTixJQUFJaEIsQ0FBSixDQUFqQyxDQUFQO0FBQUEsT0FERjtBQUdBLGFBQU9HLENBQVA7QUFDRDs7O3dCQUNpQjtBQUNoQixhQUFPLFdBQVA7QUFDRDs7OztFQTNDc0JQLGdCQUFNTixVOztJQThDekJLLGU7Ozs7Ozs7Ozs7O3dCQUNjO0FBQ2hCLGFBQU8sT0FBUDtBQUNEOzs7O0VBSDJCQyxnQkFBTU4sVSIsImZpbGUiOiJwYXJhZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGUgZnJvbSAnLi4vc3R5bGUnO1xuaW1wb3J0IElubGluZSBmcm9tICcuL2lubGluZSc7XG5pbXBvcnQgTnVtYmVyaW5nIGZyb20gJy4vbnVtYmVyaW5nJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFncmFwaCBleHRlbmRzIFN0eWxlIHtcbiAgZ2V0T3V0bGluZUxldmVsKHYpIHtcbiAgICBpZiAoKHYgPSB0aGlzLl92YWwoJ291dGxpbmVMdmwnKSkgIT0gbnVsbCkgcmV0dXJuIHBhcnNlSW50KHYpO1xuICAgIGlmICgodiA9IHRoaXMuZ2V0UGFyZW50U3R5bGUoKSkgIT0gbnVsbCAmJiB2LmdldE91dGxpbmVMZXZlbClcbiAgICAgIHJldHVybiB2LmdldE91dGxpbmVMZXZlbCgpO1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBnZXROdW1JZCh2KSB7XG4gICAgaWYgKCh2ID0gdGhpcy5fdmFsKCdudW1JZCcpKSAhPSBudWxsKSByZXR1cm4gdjtcbiAgICBpZiAoKHYgPSB0aGlzLmdldFBhcmVudFN0eWxlKCkpICE9IG51bGwgJiYgdi5nZXROdW1JZCkgcmV0dXJuIHYuZ2V0TnVtSWQoKTtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgYXNOdW1iZXJpbmdTdHlsZSgpIHtcbiAgICByZXR1cm4gTnVtYmVyaW5nLnByb3RvdHlwZS5hc051bWJlcmluZ1N0eWxlLmNhbGwodGhpcywgLi4uYXJndW1lbnRzKTtcbiAgfVxuICBfaXRlcmF0ZShmLCBmYWN0b3JpZXMsIHZpc2l0b3JzKSB7XG4gICAgdmFyIHByID0gdGhpcy53WG1sLiQxKCdwUHInKTtcbiAgICBwciAmJiBuZXcgdGhpcy5jb25zdHJ1Y3Rvci5Qcm9wZXJ0aWVzKHByLCB0aGlzLndEb2MsIHRoaXMpLnBhcnNlKHZpc2l0b3JzKTtcblxuICAgIChwciA9IHRoaXMud1htbC4kMSgnclByJykpICYmXG4gICAgICBuZXcgSW5saW5lLlByb3BlcnRpZXMocHIsIHRoaXMud0RvYywgdGhpcykucGFyc2UodmlzaXRvcnMpO1xuXG4gICAgKHByID0gdGhpcy53WG1sLiQxKCdudW1QcicpKSAmJlxuICAgICAgbmV3IE51bWJlcmluZy5Qcm9wZXJ0aWVzKHByLCB0aGlzLndEb2MsIHRoaXMpLnBhcnNlKHZpc2l0b3JzKTtcblxuICAgIChwciA9IHRoaXMud1htbC4kMSgnZnJhbWVQcicpKSAmJlxuICAgICAgbmV3IHRoaXMuY29uc3RydWN0b3IuRnJhbWVQcm9wZXJ0aWVzKHByLCB0aGlzLndEb2MsIHRoaXMpLnBhcnNlKHZpc2l0b3JzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ3N0eWxlLnBhcmFncmFwaCc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IFByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIFByb3BlcnRpZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IEZyYW1lUHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gRnJhbWVQcm9wZXJ0aWVzO1xuICB9XG59XG5jbGFzcyBQcm9wZXJ0aWVzIGV4dGVuZHMgU3R5bGUuUHJvcGVydGllcyB7XG4gIGpjKHgpIHtcbiAgICByZXR1cm4geC5hdHRyKCd3OnZhbCcpO1xuICB9XG4gIGluZCh4KSB7XG4gICAgcmV0dXJuIHRoaXMuYXNPYmplY3QoeCwgKGEpID0+IHRoaXMucHQyUHgodGhpcy5hc1B0KGEpKSk7XG4gIH1cbiAgc3BhY2luZyh4KSB7XG4gICAgdmFyIHIgPSB0aGlzLmFzT2JqZWN0KHgpLFxuICAgICAgbyA9IHt9O1xuXG4gICAgaWYgKCFyLmJlZm9yZUF1dG9zcGFjaW5nICYmIHIuYmVmb3JlTGluZXMpXG4gICAgICBvLnRvcCA9IHRoaXMucHQyUHgodGhpcy5hc1B0KHIuYmVmb3JlTGluZXMpKTtcbiAgICBlbHNlIGlmIChyLmJlZm9yZSkgby50b3AgPSB0aGlzLnB0MlB4KHRoaXMuYXNQdChyLmJlZm9yZSkpO1xuXG4gICAgaWYgKCFyLmFmdGVyQXV0b3NwYWNpbmcgJiYgci5hZnRlckxpbmVzKVxuICAgICAgby5ib3R0b20gPSB0aGlzLnB0MlB4KHRoaXMuYXNQdChyLmFmdGVyTGluZXMpKTtcbiAgICBlbHNlIGlmIChyLmFmdGVyKSBvLmJvdHRvbSA9IHRoaXMucHQyUHgodGhpcy5hc1B0KHIuYWZ0ZXIpKTtcblxuICAgIGlmICghci5saW5lKSByZXR1cm4gbztcblxuICAgIHN3aXRjaCAoeC5saW5lUnVsZSkge1xuICAgICAgY2FzZSAnYXRMZWFzdCc6XG4gICAgICBjYXNlICdleGFjdCc6XG4gICAgICAgIG8ubGluZUhlaWdodCA9IHRoaXMucHQyUHgodGhpcy5hc1B0KHgubGluZSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2F1dG8nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgby5saW5lSGVpZ2h0ID0gKHBhcnNlSW50KHIubGluZSkgKiAxMDApIC8gMjQwICsgJyUnO1xuICAgIH1cbiAgICBvLmxpbmVSdWxlID0geC5saW5lUnVsZTtcbiAgICByZXR1cm4gbztcbiAgfVxuICBwQmRyKHgpIHtcbiAgICBsZXQgciA9IHt9O1xuICAgIGxldCBiZHIgPSBJbmxpbmUuUHJvcGVydGllcy5wcm90b3R5cGUuYmRyLmJpbmQodGhpcyk7XG4gICAgQXJyYXkuZnJvbSh4LmNoaWxkTm9kZXMpLmZvckVhY2goXG4gICAgICAoYSkgPT4gYS5sb2NhbE5hbWUgJiYgKHJbYS5sb2NhbE5hbWVdID0gYmRyKGEpKVxuICAgICk7XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAncGFyYWdyYXBoJztcbiAgfVxufVxuXG5jbGFzcyBGcmFtZVByb3BlcnRpZXMgZXh0ZW5kcyBTdHlsZS5Qcm9wZXJ0aWVzIHtcbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnZnJhbWUnO1xuICB9XG59XG4iXX0=