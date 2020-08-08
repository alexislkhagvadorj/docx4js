'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('../style');

var _style2 = _interopRequireDefault(_style);

var _inline = require('./inline');

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//<w:numbering><w:abstractNum w:abstractNumId="0">
var NumberingDefinition = function (_Style) {
  _inherits(NumberingDefinition, _Style);

  function NumberingDefinition(wXml) {
    _classCallCheck(this, NumberingDefinition);

    var _this = _possibleConstructorReturn(this, (NumberingDefinition.__proto__ || Object.getPrototypeOf(NumberingDefinition)).apply(this, arguments));

    _this.levels = new Map();

    _this.name = _this.id = _this.constructor.asStyleId(wXml.attr('w:abstractNumId'));
    _this.wDoc.style.set(_this);
    var link = wXml.$1('numStyleLink');
    if (link) _this.link = link.attr('w:val');
    return _this;
  }

  _createClass(NumberingDefinition, [{
    key: '_iterate',
    value: function _iterate(f, factories, visitors) {
      for (var i = 0, children = this.wXml.$('lvl'), l = children.length, t; i < l; i++) {
        t = new this.constructor.Level(children[i], this.wDoc, this);
        this.levels.set(t.level, t);
        t.parse(visitors);
      }
    }
  }, {
    key: 'getDefinitionId',
    value: function getDefinitionId() {
      return this.wXml.attr('w:abstractNumId');
    }
  }, {
    key: 'getLabel',
    value: function getLabel() {
      var _this2 = this;

      for (var _len = arguments.length, indexes = Array(_len), _key = 0; _key < _len; _key++) {
        indexes[_key] = arguments[_key];
      }

      var _indexes = _slicedToArray(indexes[indexes.length - 1], 1),
          level = _indexes[0];

      indexes = new Map(indexes);
      var lvlText = this.levels.get(level).values.lvlText;
      var label = lvlText.replace(/%(\d+)/g, function (a, index) {
        var current = parseInt(index) - 1;
        return _this2.levels.get(current).getLabel(indexes.get(current) - 1);
      });
      return label;
    }
  }, {
    key: 'getLabelStyle',
    value: function getLabelStyle(level) {}
  }], [{
    key: 'asStyleId',
    value: function asStyleId(absNumId) {
      return '_numberingDefinition' + absNumId;
    }
  }, {
    key: 'type',
    get: function get() {
      return 'style.numbering.definition';
    }
  }, {
    key: 'Level',
    get: function get() {
      return Level;
    }
  }]);

  return NumberingDefinition;
}(_style2.default);

exports.default = NumberingDefinition;

var Level = function (_Style$Properties) {
  _inherits(Level, _Style$Properties);

  function Level(wXml) {
    _classCallCheck(this, Level);

    var _this3 = _possibleConstructorReturn(this, (Level.__proto__ || Object.getPrototypeOf(Level)).apply(this, arguments));

    _this3.level = parseInt(wXml.attr('w:ilvl'));
    return _this3;
  }

  _createClass(Level, [{
    key: 'parse',
    value: function parse(visitors) {
      _get(Level.prototype.__proto__ || Object.getPrototypeOf(Level.prototype), 'parse', this).apply(this, arguments);
      var t, pr;
      if (t = this.wXml.$1('>pPr')) {
        var _pr;

        pr = new (require('./paragraph').Properties)(t, this.wDoc, this);
        pr.type = this.level + ' ' + pr.type;
        (_pr = pr).parse.apply(_pr, arguments);
      }

      if (t = this.wXml.$1('>rPr')) {
        var _pr2;

        pr = new _inline2.default.Properties(t, this.wDoc, this);
        pr.type = this.level + ' ' + pr.type;
        (_pr2 = pr).parse.apply(_pr2, arguments);
      }
    }
  }, {
    key: 'start',
    value: function start(x) {
      return parseInt(x.attr('w:val'));
    }
  }, {
    key: 'numFm',
    value: function numFm(x) {
      return x.attr('w:val');
    }
  }, {
    key: 'lvlText',
    value: function lvlText(x) {
      return x.attr('w:val');
    }
  }, {
    key: 'lvlJc',
    value: function lvlJc(x) {
      return x.attr('w:val');
    }
  }, {
    key: 'lvlPicBulletId',
    value: function lvlPicBulletId(x) {
      return x.attr('w:val');
    }
  }, {
    key: 'getLabel',
    value: function getLabel(index) {
      switch (this.values.numFm) {
        default:
          return new String(this.values.start + index);
      }
    }
    /* number type:
    decimal
    upperRoman
    lowerRoman
    upperLetter
    lowerLetter
    ordinal
    cardinalText
    ordinalText
    hex
    chicago
    ideographDigital
    japaneseCounting
    aiueo
    iroha
    decimalFullWidth
    decimalHalfWidth
    japaneseLegal
    japaneseDigitalTenThousand
    decimalEnclosedCircle
    decimalFullWidth2
    aiueoFullWidth
    irohaFullWidth
    decimalZero
    bullet
    ganada
    chosung
    decimalEnclosedFullstop
    decimalEnclosedParen
    decimalEnclosedCircleChinese
    ideographEnclosedCircle
    ideographTraditional
    ideographZodiac
    ideographZodiacTraditional
    taiwaneseCounting
    ideographLegalTraditional
    taiwaneseCountingThousand
    taiwaneseDigital
    chineseCounting
    chineseLegalSimplified
    chineseCountingThousand
    koreanDigital
    koreanCounting
    koreanLegal
    koreanDigital2
    vietnameseCounting
    russianLower
    russianUpper
    none
    numberInDash
    hebrew1
    hebrew2
    arabicAlpha
    arabicAbjad
    hindiVowels
    hindiConsonants
    hindiNumbers
    hindiCounting
    thaiLetters
    thaiNumbers
    thaiCounting
    */

  }]);

  return Level;
}(_style2.default.Properties);

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc3R5bGUvbnVtYmVyaW5nRGVmaW5pdGlvbi5qcyJdLCJuYW1lcyI6WyJOdW1iZXJpbmdEZWZpbml0aW9uIiwid1htbCIsImFyZ3VtZW50cyIsImxldmVscyIsIk1hcCIsIm5hbWUiLCJpZCIsImNvbnN0cnVjdG9yIiwiYXNTdHlsZUlkIiwiYXR0ciIsIndEb2MiLCJzdHlsZSIsInNldCIsImxpbmsiLCIkMSIsImYiLCJmYWN0b3JpZXMiLCJ2aXNpdG9ycyIsImkiLCJjaGlsZHJlbiIsIiQiLCJsIiwibGVuZ3RoIiwidCIsIkxldmVsIiwibGV2ZWwiLCJwYXJzZSIsImluZGV4ZXMiLCJsdmxUZXh0IiwiZ2V0IiwidmFsdWVzIiwibGFiZWwiLCJyZXBsYWNlIiwiYSIsImluZGV4IiwiY3VycmVudCIsInBhcnNlSW50IiwiZ2V0TGFiZWwiLCJhYnNOdW1JZCIsIlN0eWxlIiwicHIiLCJyZXF1aXJlIiwiUHJvcGVydGllcyIsInR5cGUiLCJJbmxpbmUiLCJ4IiwibnVtRm0iLCJTdHJpbmciLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7SUFDcUJBLG1COzs7QUFDbkIsK0JBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFBQSwySUFDUEMsU0FETzs7QUFFaEIsVUFBS0MsTUFBTCxHQUFjLElBQUlDLEdBQUosRUFBZDs7QUFFQSxVQUFLQyxJQUFMLEdBQVksTUFBS0MsRUFBTCxHQUFVLE1BQUtDLFdBQUwsQ0FBaUJDLFNBQWpCLENBQ3BCUCxLQUFLUSxJQUFMLENBQVUsaUJBQVYsQ0FEb0IsQ0FBdEI7QUFHQSxVQUFLQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLEdBQWhCO0FBQ0EsUUFBSUMsT0FBT1osS0FBS2EsRUFBTCxDQUFRLGNBQVIsQ0FBWDtBQUNBLFFBQUlELElBQUosRUFBVSxNQUFLQSxJQUFMLEdBQVlBLEtBQUtKLElBQUws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YUFBWXhCLFNBQVo7QUFDRDtBQUNGOzs7MEJBQ0syQyxDLEVBQUc7QUFDUCxhQUFPVCxTQUFTUyxFQUFFcEMsSUFBRixDQUFPLE9BQVAsQ0FBVCxDQUFQO0FBQ0Q7OzswQkFDS29DLEMsRUFBRztBQUNQLGFBQU9BLEVBQUVwQyxJQUFGLENBQU8sT0FBUCxDQUFQO0FBQ0Q7Ozs0QkFDT29DLEMsRUFBRztBQUNULGFBQU9BLEVBQUVwQyxJQUFGLENBQU8sT0FBUCxDQUFQO0FBQ0Q7OzswQkFDS29DLEMsRUFBRztBQUNQLGFBQU9BLEVBQUVwQyxJQUFGLENBQU8sT0FBUCxDQUFQO0FBQ0Q7OzttQ0FDY29DLEMsRUFBRztBQUNoQixhQUFPQSxFQUFFcEMsSUFBRixDQUFPLE9BQVAsQ0FBUDtBQUNEOzs7NkJBRVF5QixLLEVBQU87QUFDZCxjQUFRLEtBQUtKLE1BQUwsQ0FBWWdCLEtBQXBCO0FBQ0U7QUFDRSxpQkFBTyxJQUFJQyxNQUFKLENBQVcsS0FBS2pCLE1BQUwsQ0FBWWtCLEtBQVosR0FBb0JkLEtBQS9CLENBQVA7QUFGSjtBQUlEO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTFDa0JLLGdCQUFNRyxVIiwiZmlsZSI6Im51bWJlcmluZ0RlZmluaXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGUgZnJvbSAnLi4vc3R5bGUnO1xuaW1wb3J0IElubGluZSBmcm9tICcuL2lubGluZSc7XG5cbi8vPHc6bnVtYmVyaW5nPjx3OmFic3RyYWN0TnVtIHc6YWJzdHJhY3ROdW1JZD1cIjBcIj5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlcmluZ0RlZmluaXRpb24gZXh0ZW5kcyBTdHlsZSB7XG4gIGNvbnN0cnVjdG9yKHdYbWwpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMubGV2ZWxzID0gbmV3IE1hcCgpO1xuXG4gICAgdGhpcy5uYW1lID0gdGhpcy5pZCA9IHRoaXMuY29uc3RydWN0b3IuYXNTdHlsZUlkKFxuICAgICAgd1htbC5hdHRyKCd3OmFic3RyYWN0TnVtSWQnKVxuICAgICk7XG4gICAgdGhpcy53RG9jLnN0eWxlLnNldCh0aGlzKTtcbiAgICB2YXIgbGluayA9IHdYbWwuJDEoJ251bVN0eWxlTGluaycpO1xuICAgIGlmIChsaW5rKSB0aGlzLmxpbmsgPSBsaW5rLmF0dHIoJ3c6dmFsJyk7XG4gIH1cblxuICBfaXRlcmF0ZShmLCBmYWN0b3JpZXMsIHZpc2l0b3JzKSB7XG4gICAgZm9yIChcbiAgICAgIHZhciBpID0gMCwgY2hpbGRyZW4gPSB0aGlzLndYbWwuJCgnbHZsJyksIGwgPSBjaGlsZHJlbi5sZW5ndGgsIHQ7XG4gICAgICBpIDwgbDtcbiAgICAgIGkrK1xuICAgICkge1xuICAgICAgdCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yLkxldmVsKGNoaWxkcmVuW2ldLCB0aGlzLndEb2MsIHRoaXMpO1xuICAgICAgdGhpcy5sZXZlbHMuc2V0KHQubGV2ZWwsIHQpO1xuICAgICAgdC5wYXJzZSh2aXNpdG9ycyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbklkKCkge1xuICAgIHJldHVybiB0aGlzLndYbWwuYXR0cigndzphYnN0cmFjdE51bUlkJyk7XG4gIH1cblxuICBnZXRMYWJlbCguLi5pbmRleGVzKSB7XG4gICAgbGV0IFtsZXZlbF0gPSBpbmRleGVzW2luZGV4ZXMubGVuZ3RoIC0gMV07XG4gICAgaW5kZXhlcyA9IG5ldyBNYXAoaW5kZXhlcyk7XG4gICAgbGV0IGx2bFRleHQgPSB0aGlzLmxldmVscy5nZXQobGV2ZWwpLnZhbHVlcy5sdmxUZXh0O1xuICAgIGxldCBsYWJlbCA9IGx2bFRleHQucmVwbGFjZSgvJShcXGQrKS9nLCAoYSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBjdXJyZW50ID0gcGFyc2VJbnQoaW5kZXgpIC0gMTtcbiAgICAgIHJldHVybiB0aGlzLmxldmVscy5nZXQoY3VycmVudCkuZ2V0TGFiZWwoaW5kZXhlcy5nZXQoY3VycmVudCkgLSAxKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBnZXRMYWJlbFN0eWxlKGxldmVsKSB7fVxuXG4gIHN0YXRpYyBhc1N0eWxlSWQoYWJzTnVtSWQpIHtcbiAgICByZXR1cm4gJ19udW1iZXJpbmdEZWZpbml0aW9uJyArIGFic051bUlkO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnc3R5bGUubnVtYmVyaW5nLmRlZmluaXRpb24nO1xuICB9XG5cbiAgc3RhdGljIGdldCBMZXZlbCgpIHtcbiAgICByZXR1cm4gTGV2ZWw7XG4gIH1cbn1cblxuY2xhc3MgTGV2ZWwgZXh0ZW5kcyBTdHlsZS5Qcm9wZXJ0aWVzIHtcbiAgY29uc3RydWN0b3Iod1htbCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy5sZXZlbCA9IHBhcnNlSW50KHdYbWwuYXR0cigndzppbHZsJykpO1xuICB9XG4gIHBhcnNlKHZpc2l0b3JzKSB7XG4gICAgc3VwZXIucGFyc2UoLi4uYXJndW1lbnRzKTtcbiAgICB2YXIgdCwgcHI7XG4gICAgaWYgKCh0ID0gdGhpcy53WG1sLiQxKCc+cFByJykpKSB7XG4gICAgICBwciA9IG5ldyAocmVxdWlyZSgnLi9wYXJhZ3JhcGgnKS5Qcm9wZXJ0aWVzKSh0LCB0aGlzLndEb2MsIHRoaXMpO1xuICAgICAgcHIudHlwZSA9IHRoaXMubGV2ZWwgKyAnICcgKyBwci50eXBlO1xuICAgICAgcHIucGFyc2UoLi4uYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBpZiAoKHQgPSB0aGlzLndYbWwuJDEoJz5yUHInKSkpIHtcbiAgICAgIHByID0gbmV3IElubGluZS5Qcm9wZXJ0aWVzKHQsIHRoaXMud0RvYywgdGhpcyk7XG4gICAgICBwci50eXBlID0gdGhpcy5sZXZlbCArICcgJyArIHByLnR5cGU7XG4gICAgICBwci5wYXJzZSguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuICBzdGFydCh4KSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHguYXR0cigndzp2YWwnKSk7XG4gIH1cbiAgbnVtRm0oeCkge1xuICAgIHJldHVybiB4LmF0dHIoJ3c6dmFsJyk7XG4gIH1cbiAgbHZsVGV4dCh4KSB7XG4gICAgcmV0dXJuIHguYXR0cigndzp2YWwnKTtcbiAgfVxuICBsdmxKYyh4KSB7XG4gICAgcmV0dXJuIHguYXR0cigndzp2YWwnKTtcbiAgfVxuICBsdmxQaWNCdWxsZXRJZCh4KSB7XG4gICAgcmV0dXJuIHguYXR0cigndzp2YWwnKTtcbiAgfVxuXG4gIGdldExhYmVsKGluZGV4KSB7XG4gICAgc3dpdGNoICh0aGlzLnZhbHVlcy5udW1GbSkge1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmcodGhpcy52YWx1ZXMuc3RhcnQgKyBpbmRleCk7XG4gICAgfVxuICB9XG4gIC8qIG51bWJlciB0eXBlOlxuZGVjaW1hbFxudXBwZXJSb21hblxubG93ZXJSb21hblxudXBwZXJMZXR0ZXJcbmxvd2VyTGV0dGVyXG5vcmRpbmFsXG5jYXJkaW5hbFRleHRcbm9yZGluYWxUZXh0XG5oZXhcbmNoaWNhZ29cbmlkZW9ncmFwaERpZ2l0YWxcbmphcGFuZXNlQ291bnRpbmdcbmFpdWVvXG5pcm9oYVxuZGVjaW1hbEZ1bGxXaWR0aFxuZGVjaW1hbEhhbGZXaWR0aFxuamFwYW5lc2VMZWdhbFxuamFwYW5lc2VEaWdpdGFsVGVuVGhvdXNhbmRcbmRlY2ltYWxFbmNsb3NlZENpcmNsZVxuZGVjaW1hbEZ1bGxXaWR0aDJcbmFpdWVvRnVsbFdpZHRoXG5pcm9oYUZ1bGxXaWR0aFxuZGVjaW1hbFplcm9cbmJ1bGxldFxuZ2FuYWRhXG5jaG9zdW5nXG5kZWNpbWFsRW5jbG9zZWRGdWxsc3RvcFxuZGVjaW1hbEVuY2xvc2VkUGFyZW5cbmRlY2ltYWxFbmNsb3NlZENpcmNsZUNoaW5lc2VcbmlkZW9ncmFwaEVuY2xvc2VkQ2lyY2xlXG5pZGVvZ3JhcGhUcmFkaXRpb25hbFxuaWRlb2dyYXBoWm9kaWFjXG5pZGVvZ3JhcGhab2RpYWNUcmFkaXRpb25hbFxudGFpd2FuZXNlQ291bnRpbmdcbmlkZW9ncmFwaExlZ2FsVHJhZGl0aW9uYWxcbnRhaXdhbmVzZUNvdW50aW5nVGhvdXNhbmRcbnRhaXdhbmVzZURpZ2l0YWxcbmNoaW5lc2VDb3VudGluZ1xuY2hpbmVzZUxlZ2FsU2ltcGxpZmllZFxuY2hpbmVzZUNvdW50aW5nVGhvdXNhbmRcbmtvcmVhbkRpZ2l0YWxcbmtvcmVhbkNvdW50aW5nXG5rb3JlYW5MZWdhbFxua29yZWFuRGlnaXRhbDJcbnZpZXRuYW1lc2VDb3VudGluZ1xucnVzc2lhbkxvd2VyXG5ydXNzaWFuVXBwZXJcbm5vbmVcbm51bWJlckluRGFzaFxuaGVicmV3MVxuaGVicmV3MlxuYXJhYmljQWxwaGFcbmFyYWJpY0FiamFkXG5oaW5kaVZvd2Vsc1xuaGluZGlDb25zb25hbnRzXG5oaW5kaU51bWJlcnNcbmhpbmRpQ291bnRpbmdcbnRoYWlMZXR0ZXJzXG50aGFpTnVtYmVyc1xudGhhaUNvdW50aW5nXG4qL1xufVxuIl19