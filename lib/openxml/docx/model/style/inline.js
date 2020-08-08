'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('../style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inline = function (_Style) {
  _inherits(Inline, _Style);

  function Inline() {
    _classCallCheck(this, Inline);

    return _possibleConstructorReturn(this, (Inline.__proto__ || Object.getPrototypeOf(Inline)).apply(this, arguments));
  }

  _createClass(Inline, [{
    key: '_iterate',
    value: function _iterate(f, factories, visitors) {
      var pr = this.wXml.$1('>rPr');
      pr && new this.constructor.Properties(pr, this.wDoc, this).parse(visitors);
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'style.inline';
    }
  }]);

  return Inline;
}(_style2.default);

Inline.Properties = function (_Style$Properties) {
  _inherits(_class, _Style$Properties);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'rFonts',
    value: function rFonts(x) {
      var t, ascii, asia;
      if (t = x.attr('w:ascii')) ascii = t;else if (t = x.attr('w:asciiTheme')) ascii = this.wDoc.getFontTheme().get(t);

      if (t = x.attr('w:eastAsia')) asia = t;else if (t = x.attr('w:eastAsiaTheme')) asia = this.wDoc.getFontTheme().get(t);
      if (ascii || asia) return { ascii: ascii, asia: asia };
    }
  }, {
    key: 'b',
    value: function b(x) {
      return this.asToggle(x);
    }
  }, {
    key: 'sz',
    value: function sz(x) {
      return this.pt2Px(parseFloat(x.attr('w:val')) / 2);
    }
  }, {
    key: 'color',
    value: function color(x) {
      return this.asColor(x.attr('w:val') || this.wDoc.getColorTheme().get(x.attr('w:themeColor')));
    }
  }, {
    key: 'i',
    value: function i(x) {
      return this.asToggle(x);
    }
  }, {
    key: 'vanish',
    value: function vanish(x) {
      return this.asToggle(x);
    }
  }, {
    key: 'u',
    value: function u(x) {
      return this.asObject(x);
    }
  }, {
    key: 'bdr',
    value: function bdr(x) {
      var border = this.asObject(x);
      border.sz && (border.sz = border.sz / 8);
      border.color && (border.color = this.asColor(border.color));
      return border;
    }
  }, {
    key: 'lang',
    value: function lang(x) {
      return x.attr('w:val');
    }
  }, {
    key: 'vertAlign',
    value: function vertAlign(x) {
      return x.attr('w:val');
    }
  }, {
    key: 'highlight',
    value: function highlight(x) {
      return this.asColor(x.attr('w:val'));
    }
  }, {
    key: 'kern',
    value: function kern(x) {
      //word spacing
      return parseInt(x.attr('w:val')) / 2;
    }
  }, {
    key: 'w',
    value: function w(x) {
      //char scale
      return parseInt(x.attr('w:val')) / 100.0;
    }
  }, {
    key: 'spacing',
    value: function spacing(x) {
      //char spacing
      return this.pt2Px(this.asPt(x.attr('w:val')));
    }
  }, {
    key: 'position',
    value: function position(x) {
      //baseline shift
      return this.pt2Px(this.asPt(x.attr('w:val')));
    }
  }, {
    key: 'smallCaps',
    value: function smallCaps() {
      return true;
    }
  }, {
    key: 'asToggle',
    value: function asToggle(x) {
      var val = x.attr('w:val');
      if (!val) {
        return -1;
      } else {
        return parseInt(val);
      }
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'inline';
    }
  }]);

  return _class;
}(_style2.default.Properties);

exports.default = Inline;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc3R5bGUvaW5saW5lLmpzIl0sIm5hbWVzIjpbIklubGluZSIsImYiLCJmYWN0b3JpZXMiLCJ2aXNpdG9ycyIsInByIiwid1htbCIsIiQxIiwiY29uc3RydWN0b3IiLCJQcm9wZXJ0aWVzIiwid0RvYyIsInBhcnNlIiwiU3R5bGUiLCJ4IiwidCIsImFzY2lpIiwiYXNpYSIsImF0dHIiLCJnZXRGb250VGhlbWUiLCJnZXQiLCJhc1RvZ2dsZSIsInB0MlB4IiwicGFyc2VGbG9hdCIsImFzQ29sb3IiLCJnZXRDb2xvclRoZW1lIiwiYXNPYmplY3QiLCJib3JkZXIiLCJzeiIsImNvbG9yIiwicGFyc2VJbnQiLCJhc1B0IiwidmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7OzZCQUtWQyxDLEVBQUdDLFMsRUFBV0MsUSxFQUFVO0FBQy9CLFVBQUlDLEtBQUssS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsTUFBYixDQUFUO0FBQ0FGLFlBQU0sSUFBSSxLQUFLRyxXQUFMLENBQWlCQyxVQUFyQixDQUFnQ0osRUFBaEMsRUFBb0MsS0FBS0ssSUFBekMsRUFBK0MsSUFBL0MsRUFBcURDLEtBQXJELENBQTJEUCxRQUEzRCxDQUFOO0FBQ0Q7Ozt3QkFQaUI7QUFDaEIsYUFBTyxjQUFQO0FBQ0Q7Ozs7RUFIaUNRLGU7O0FBQWZYLE0sQ0FVWlEsVTs7Ozs7Ozs7Ozs7MkJBS0VJLEMsRUFBRztBQUNSLFVBQUlDLENBQUosRUFBT0MsS0FBUCxFQUFjQyxJQUFkO0FBQ0EsVUFBS0YsSUFBSUQsRUFBRUksSUFBRixDQUFPLFNBQVAsQ0FBVCxFQUE2QkYsUUFBUUQsQ0FBUixDQUE3QixLQUNLLElBQUtBLElBQUlELEVBQUVJLElBQUYsQ0FBTyxjQUFQLENBQVQsRUFDSEYsUUFBUSxLQUFLTCxJQUFMLENBQVVRLFlBQVYsR0FBeUJDLEdBQXpCLENBQTZCTCxDQUE3QixDQUFSOztBQUVGLFVBQUtBLElBQUlELEVBQUVJLElBQUYsQ0FBTyxZQUFQLENBQVQsRUFBZ0NELE9BQU9GLENBQVAsQ0FBaEMsS0FDSyxJQUFLQSxJQUFJRCxFQUFFSSxJQUFGLENBQU8saUJBQVAsQ0FBVCxFQUNIRCxPQUFPLEtBQUtOLElBQUwsQ0FBVVEsWUFBVixHQUF5QkMsR0FBekIsQ0FBNkJMLENBQTdCLENBQVA7QUFDRixVQUFJQyxTQUFTQyxJQUFiLEVBQW1CLE9BQU8sRUFBRUQsWUFBRixFQUFTQyxVQUFULEVBQVA7QUFDcEI7OztzQkFDQ0gsQyxFQUFHO0FBQ0gsYUFBTyxLQUFLTyxRQUFMLENBQWNQLENBQWQsQ0FBUDtBQUNEOzs7dUJBQ0VBLEMsRUFBRztBQUNKLGFBQU8sS0FBS1EsS0FBTCxDQUFXQyxXQUFXVCxFQUFFSSxJQUFGLENBQU8sT0FBUCxDQUFYLElBQThCLENBQXpDLENBQVA7QUFDRDs7OzBCQUNLSixDLEVBQUc7QUFDUCxhQUFPLEtBQUtVLE9BQUwsQ0FDTFYsRUFBRUksSUFBRixDQUFPLE9BQVAsS0FBbUIsS0FBS1AsSUFBTCxDQUFVYyxhQUFWLEdBQTBCTCxHQUExQixDQUE4Qk4sRUFBRUksSUFBRixDQUFPLGNBQVAsQ0FBOUIsQ0FEZCxDQUFQO0FBR0Q7OztzQkFDQ0osQyxFQUFHO0FBQ0gsYUFBTyxLQUFLTyxRQUFMLENBQWNQLENBQWQsQ0FBUDtBQUNEOzs7MkJBQ01BLEMsRUFBRztBQUNSLGFBQU8sS0FBS08sUUFBTCxDQUFjUCxDQUFkLENBQVA7QUFDRDs7O3NCQUNDQSxDLEVBQUc7QUFDSCxhQUFPLEtBQUtZLFFBQUwsQ0FBY1osQ0FBZCxDQUFQO0FBQ0Q7Ozt3QkFDR0EsQyxFQUFHO0FBQ0wsVUFBSWEsU0FBUyxLQUFLRCxRQUFMLENBQWNaLENBQWQsQ0FBYjtBQUNBYSxhQUFPQyxFQUFQLEtBQWNELE9BQU9DLEVBQVAsR0FBWUQsT0FBT0MsRUFBUCxHQUFZLENBQXRDO0FBQ0FELGFBQU9FLEtBQVAsS0FBaUJGLE9BQU9FLEtBQVAsR0FBZSxLQUFLTCxPQUFMLENBQWFHLE9BQU9FLEtBQXBCLENBQWhDO0FBQ0EsYUFBT0YsTUFBUDtBQUNEOzs7eUJBQ0liLEMsRUFBRztBQUNOLGFBQU9BLEVBQUVJLElBQUYsQ0FBTyxPQUFQLENBQVA7QUFDRDs7OzhCQUNTSixDLEVBQUc7QUFDWCxhQUFPQSxFQUFFSSxJQUFGLENBQU8sT0FBUCxDQUFQO0FBQ0Q7Ozs4QkFDU0osQyxFQUFHO0FBQ1gsYUFBTyxLQUFLVSxPQUFMLENBQWFWLEVBQUVJLElBQUYsQ0FBTyxPQUFQLENBQWIsQ0FBUDtBQUNEOzs7eUJBRUlKLEMsRUFBRztBQUNOO0FBQ0EsYUFBT2dCLFNBQVNoQixFQUFFSSxJQUFGLENBQU8sT0FBUCxDQUFULElBQTRCLENBQW5DO0FBQ0Q7OztzQkFFQ0osQyxFQUFHO0FBQ0g7QUFDQSxhQUFPZ0IsU0FBU2hCLEVBQUVJLElBQUYsQ0FBTyxPQUFQLENBQVQsSUFBNEIsS0FBbkM7QUFDRDs7OzRCQUVPSixDLEVBQUc7QUFDVDtBQUNBLGFBQU8sS0FBS1EsS0FBTCxDQUFXLEtBQUtTLElBQUwsQ0FBVWpCLEVBQUVJLElBQUYsQ0FBTyxPQUFQLENBQVYsQ0FBWCxDQUFQO0FBQ0Q7Ozs2QkFFUUosQyxFQUFHO0FBQ1Y7QUFDQSxhQUFPLEtBQUtRLEtBQUwsQ0FBVyxLQUFLUyxJQUFMLENBQVVqQixFQUFFSSxJQUFGLENBQU8sT0FBUCxDQUFWLENBQVgsQ0FBUDtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLElBQVA7QUFDRDs7OzZCQUVRSixDLEVBQUc7QUFDVixVQUFJa0IsTUFBTWxCLEVBQUVJLElBQUYsQ0FBTyxPQUFQLENBQVY7QUFDQSxVQUFJLENBQUNjLEdBQUwsRUFBVTtBQUNSLGVBQU8sQ0FBQyxDQUFSO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBT0YsU0FBU0UsR0FBVCxDQUFQO0FBQ0Q7QUFDRjs7O3dCQWxGaUI7QUFDaEIsYUFBTyxRQUFQO0FBQ0Q7Ozs7RUFIK0JuQixnQkFBTUgsVTs7a0JBVnJCUixNIiwiZmlsZSI6ImlubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZSBmcm9tICcuLi9zdHlsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElubGluZSBleHRlbmRzIFN0eWxlIHtcbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnc3R5bGUuaW5saW5lJztcbiAgfVxuXG4gIF9pdGVyYXRlKGYsIGZhY3RvcmllcywgdmlzaXRvcnMpIHtcbiAgICB2YXIgcHIgPSB0aGlzLndYbWwuJDEoJz5yUHInKTtcbiAgICBwciAmJiBuZXcgdGhpcy5jb25zdHJ1Y3Rvci5Qcm9wZXJ0aWVzKHByLCB0aGlzLndEb2MsIHRoaXMpLnBhcnNlKHZpc2l0b3JzKTtcbiAgfVxuXG4gIHN0YXRpYyBQcm9wZXJ0aWVzID0gY2xhc3MgZXh0ZW5kcyBTdHlsZS5Qcm9wZXJ0aWVzIHtcbiAgICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgICByZXR1cm4gJ2lubGluZSc7XG4gICAgfVxuXG4gICAgckZvbnRzKHgpIHtcbiAgICAgIHZhciB0LCBhc2NpaSwgYXNpYTtcbiAgICAgIGlmICgodCA9IHguYXR0cigndzphc2NpaScpKSkgYXNjaWkgPSB0O1xuICAgICAgZWxzZSBpZiAoKHQgPSB4LmF0dHIoJ3c6YXNjaWlUaGVtZScpKSlcbiAgICAgICAgYXNjaWkgPSB0aGlzLndEb2MuZ2V0Rm9udFRoZW1lKCkuZ2V0KHQpO1xuXG4gICAgICBpZiAoKHQgPSB4LmF0dHIoJ3c6ZWFzdEFzaWEnKSkpIGFzaWEgPSB0O1xuICAgICAgZWxzZSBpZiAoKHQgPSB4LmF0dHIoJ3c6ZWFzdEFzaWFUaGVtZScpKSlcbiAgICAgICAgYXNpYSA9IHRoaXMud0RvYy5nZXRGb250VGhlbWUoKS5nZXQodCk7XG4gICAgICBpZiAoYXNjaWkgfHwgYXNpYSkgcmV0dXJuIHsgYXNjaWksIGFzaWEgfTtcbiAgICB9XG4gICAgYih4KSB7XG4gICAgICByZXR1cm4gdGhpcy5hc1RvZ2dsZSh4KTtcbiAgICB9XG4gICAgc3ooeCkge1xuICAgICAgcmV0dXJuIHRoaXMucHQyUHgocGFyc2VGbG9hdCh4LmF0dHIoJ3c6dmFsJykpIC8gMik7XG4gICAgfVxuICAgIGNvbG9yKHgpIHtcbiAgICAgIHJldHVybiB0aGlzLmFzQ29sb3IoXG4gICAgICAgIHguYXR0cigndzp2YWwnKSB8fCB0aGlzLndEb2MuZ2V0Q29sb3JUaGVtZSgpLmdldCh4LmF0dHIoJ3c6dGhlbWVDb2xvcicpKVxuICAgICAgKTtcbiAgICB9XG4gICAgaSh4KSB7XG4gICAgICByZXR1cm4gdGhpcy5hc1RvZ2dsZSh4KTtcbiAgICB9XG4gICAgdmFuaXNoKHgpIHtcbiAgICAgIHJldHVybiB0aGlzLmFzVG9nZ2xlKHgpO1xuICAgIH1cbiAgICB1KHgpIHtcbiAgICAgIHJldHVybiB0aGlzLmFzT2JqZWN0KHgpO1xuICAgIH1cbiAgICBiZHIoeCkge1xuICAgICAgdmFyIGJvcmRlciA9IHRoaXMuYXNPYmplY3QoeCk7XG4gICAgICBib3JkZXIuc3ogJiYgKGJvcmRlci5zeiA9IGJvcmRlci5zeiAvIDgpO1xuICAgICAgYm9yZGVyLmNvbG9yICYmIChib3JkZXIuY29sb3IgPSB0aGlzLmFzQ29sb3IoYm9yZGVyLmNvbG9yKSk7XG4gICAgICByZXR1cm4gYm9yZGVyO1xuICAgIH1cbiAgICBsYW5nKHgpIHtcbiAgICAgIHJldHVybiB4LmF0dHIoJ3c6dmFsJyk7XG4gICAgfVxuICAgIHZlcnRBbGlnbih4KSB7XG4gICAgICByZXR1cm4geC5hdHRyKCd3OnZhbCcpO1xuICAgIH1cbiAgICBoaWdobGlnaHQoeCkge1xuICAgICAgcmV0dXJuIHRoaXMuYXNDb2xvcih4LmF0dHIoJ3c6dmFsJykpO1xuICAgIH1cblxuICAgIGtlcm4oeCkge1xuICAgICAgLy93b3JkIHNwYWNpbmdcbiAgICAgIHJldHVybiBwYXJzZUludCh4LmF0dHIoJ3c6dmFsJykpIC8gMjtcbiAgICB9XG5cbiAgICB3KHgpIHtcbiAgICAgIC8vY2hhciBzY2FsZVxuICAgICAgcmV0dXJuIHBhcnNlSW50KHguYXR0cigndzp2YWwnKSkgLyAxMDAuMDtcbiAgICB9XG5cbiAgICBzcGFjaW5nKHgpIHtcbiAgICAgIC8vY2hhciBzcGFjaW5nXG4gICAgICByZXR1cm4gdGhpcy5wdDJQeCh0aGlzLmFzUHQoeC5hdHRyKCd3OnZhbCcpKSk7XG4gICAgfVxuXG4gICAgcG9zaXRpb24oeCkge1xuICAgICAgLy9iYXNlbGluZSBzaGlmdFxuICAgICAgcmV0dXJuIHRoaXMucHQyUHgodGhpcy5hc1B0KHguYXR0cigndzp2YWwnKSkpO1xuICAgIH1cblxuICAgIHNtYWxsQ2FwcygpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGFzVG9nZ2xlKHgpIHtcbiAgICAgIGxldCB2YWwgPSB4LmF0dHIoJ3c6dmFsJyk7XG4gICAgICBpZiAoIXZhbCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4iXX0=