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
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL3N0eWxlL2lubGluZS5qcyJdLCJuYW1lcyI6WyJJbmxpbmUiLCJmIiwiZmFjdG9yaWVzIiwidmlzaXRvcnMiLCJwciIsIndYbWwiLCIkMSIsImNvbnN0cnVjdG9yIiwiUHJvcGVydGllcyIsIndEb2MiLCJwYXJzZSIsIlN0eWxlIiwieCIsInQiLCJhc2NpaSIsImFzaWEiLCJhdHRyIiwiZ2V0Rm9udFRoZW1lIiwiZ2V0IiwiYXNUb2dnbGUiLCJwdDJQeCIsInBhcnNlRmxvYXQiLCJhc0NvbG9yIiwiZ2V0Q29sb3JUaGVtZSIsImFzT2JqZWN0IiwiYm9yZGVyIiwic3oiLCJjb2xvciIsInBhcnNlSW50IiwiYXNQdCIsInZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs2QkFLVkMsQyxFQUFHQyxTLEVBQVdDLFEsRUFBVTtBQUMvQixVQUFJQyxLQUFLLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLE1BQWIsQ0FBVDtBQUNBRixZQUFNLElBQUksS0FBS0csV0FBTCxDQUFpQkMsVUFBckIsQ0FBZ0NKLEVBQWhDLEVBQW9DLEtBQUtLLElBQXpDLEVBQStDLElBQS9DLEVBQXFEQyxLQUFyRCxDQUEyRFAsUUFBM0QsQ0FBTjtBQUNEOzs7d0JBUGlCO0FBQ2hCLGFBQU8sY0FBUDtBQUNEOzs7O0VBSGlDUSxlOztBQUFmWCxNLENBVVpRLFU7Ozs7Ozs7Ozs7OzJCQUtFSSxDLEVBQUc7QUFDUixVQUFJQyxDQUFKLEVBQU9DLEtBQVAsRUFBY0MsSUFBZDtBQUNBLFVBQUtGLElBQUlELEVBQUVJLElBQUYsQ0FBTyxTQUFQLENBQVQsRUFBNkJGLFFBQVFELENBQVIsQ0FBN0IsS0FDSyxJQUFLQSxJQUFJRCxFQUFFSSxJQUFGLENBQU8sY0FBUCxDQUFULEVBQ0hGLFFBQVEsS0FBS0wsSUFBTCxDQUFVUSxZQUFWLEdBQXlCQyxHQUF6QixDQUE2QkwsQ0FBN0IsQ0FB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dCI6WyJpbXBvcnQgU3R5bGUgZnJvbSAnLi4vc3R5bGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmxpbmUgZXh0ZW5kcyBTdHlsZSB7XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ3N0eWxlLmlubGluZSc7XG4gIH1cblxuICBfaXRlcmF0ZShmLCBmYWN0b3JpZXMsIHZpc2l0b3JzKSB7XG4gICAgdmFyIHByID0gdGhpcy53WG1sLiQxKCc+clByJyk7XG4gICAgcHIgJiYgbmV3IHRoaXMuY29uc3RydWN0b3IuUHJvcGVydGllcyhwciwgdGhpcy53RG9jLCB0aGlzKS5wYXJzZSh2aXNpdG9ycyk7XG4gIH1cblxuICBzdGF0aWMgUHJvcGVydGllcyA9IGNsYXNzIGV4dGVuZHMgU3R5bGUuUHJvcGVydGllcyB7XG4gICAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgICAgcmV0dXJuICdpbmxpbmUnO1xuICAgIH1cblxuICAgIHJGb250cyh4KSB7XG4gICAgICB2YXIgdCwgYXNjaWksIGFzaWE7XG4gICAgICBpZiAoKHQgPSB4LmF0dHIoJ3c6YXNjaWknKSkpIGFzY2lpID0gdDtcbiAgICAgIGVsc2UgaWYgKCh0ID0geC5hdHRyKCd3OmFzY2lpVGhlbWUnKSkpXG4gICAgICAgIGFzY2lpID0gdGhpcy53RG9jLmdldEZvbnRUaGVtZSgpLmdldCh0KTtcblxuICAgICAgaWYgKCh0ID0geC5hdHRyKCd3OmVhc3RBc2lhJykpKSBhc2lhID0gdDtcbiAgICAgIGVsc2UgaWYgKCh0ID0geC5hdHRyKCd3OmVhc3RBc2lhVGhlbWUnKSkpXG4gICAgICAgIGFzaWEgPSB0aGlzLndEb2MuZ2V0Rm9udFRoZW1lKCkuZ2V0KHQpO1xuICAgICAgaWYgKGFzY2lpIHx8IGFzaWEpIHJldHVybiB7IGFzY2lpLCBhc2lhIH07XG4gICAgfVxuICAgIGIoeCkge1xuICAgICAgcmV0dXJuIHRoaXMuYXNUb2dnbGUoeCk7XG4gICAgfVxuICAgIHN6KHgpIHtcbiAgICAgIHJldHVybiB0aGlzLnB0MlB4KHBhcnNlRmxvYXQoeC5hdHRyKCd3OnZhbCcpKSAvIDIpO1xuICAgIH1cbiAgICBjb2xvcih4KSB7XG4gICAgICByZXR1cm4gdGhpcy5hc0NvbG9yKFxuICAgICAgICB4LmF0dHIoJ3c6dmFsJykgfHwgdGhpcy53RG9jLmdldENvbG9yVGhlbWUoKS5nZXQoeC5hdHRyKCd3OnRoZW1lQ29sb3InKSlcbiAgICAgICk7XG4gICAgfVxuICAgIGkoeCkge1xuICAgICAgcmV0dXJuIHRoaXMuYXNUb2dnbGUoeCk7XG4gICAgfVxuICAgIHZhbmlzaCh4KSB7XG4gICAgICByZXR1cm4gdGhpcy5hc1RvZ2dsZSh4KTtcbiAgICB9XG4gICAgdSh4KSB7XG4gICAgICByZXR1cm4gdGhpcy5hc09iamVjdCh4KTtcbiAgICB9XG4gICAgYmRyKHgpIHtcbiAgICAgIHZhciBib3JkZXIgPSB0aGlzLmFzT2JqZWN0KHgpO1xuICAgICAgYm9yZGVyLnN6ICYmIChib3JkZXIuc3ogPSBib3JkZXIuc3ogLyA4KTtcbiAgICAgIGJvcmRlci5jb2xvciAmJiAoYm9yZGVyLmNvbG9yID0gdGhpcy5hc0NvbG9yKGJvcmRlci5jb2xvcikpO1xuICAgICAgcmV0dXJuIGJvcmRlcjtcbiAgICB9XG4gICAgbGFuZyh4KSB7XG4gICAgICByZXR1cm4geC5hdHRyKCd3OnZhbCcpO1xuICAgIH1cbiAgICB2ZXJ0QWxpZ24oeCkge1xuICAgICAgcmV0dXJuIHguYXR0cigndzp2YWwnKTtcbiAgICB9XG4gICAgaGlnaGxpZ2h0KHgpIHtcbiAgICAgIHJldHVybiB0aGlzLmFzQ29sb3IoeC5hdHRyKCd3OnZhbCcpKTtcbiAgICB9XG5cbiAgICBrZXJuKHgpIHtcbiAgICAgIC8vd29yZCBzcGFjaW5nXG4gICAgICByZXR1cm4gcGFyc2VJbnQoeC5hdHRyKCd3OnZhbCcpKSAvIDI7XG4gICAgfVxuXG4gICAgdyh4KSB7XG4gICAgICAvL2NoYXIgc2NhbGVcbiAgICAgIHJldHVybiBwYXJzZUludCh4LmF0dHIoJ3c6dmFsJykpIC8gMTAwLjA7XG4gICAgfVxuXG4gICAgc3BhY2luZyh4KSB7XG4gICAgICAvL2NoYXIgc3BhY2luZ1xuICAgICAgcmV0dXJuIHRoaXMucHQyUHgodGhpcy5hc1B0KHguYXR0cigndzp2YWwnKSkpO1xuICAgIH1cblxuICAgIHBvc2l0aW9uKHgpIHtcbiAgICAgIC8vYmFzZWxpbmUgc2hpZnRcbiAgICAgIHJldHVybiB0aGlzLnB0MlB4KHRoaXMuYXNQdCh4LmF0dHIoJ3c6dmFsJykpKTtcbiAgICB9XG5cbiAgICBzbWFsbENhcHMoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBhc1RvZ2dsZSh4KSB7XG4gICAgICBsZXQgdmFsID0geC5hdHRyKCd3OnZhbCcpO1xuICAgICAgaWYgKCF2YWwpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIl19