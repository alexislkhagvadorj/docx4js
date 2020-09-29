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

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL3N0eWxlL251bWJlcmluZ0RlZmluaXRpb24uanMiXSwibmFtZXMiOlsiTnVtYmVyaW5nRGVmaW5pdGlvbiIsIndYbWwiLCJhcmd1bWVudHMiLCJsZXZlbHMiLCJNYXAiLCJuYW1lIiwiaWQiLCJjb25zdHJ1Y3RvciIsImFzU3R5bGVJZCIsImF0dHIiLCJ3RG9jIiwic3R5bGUiLCJzZXQiLCJsaW5rIiwiJDEiLCJmIiwiZmFjdG9yaWVzIiwidmlzaXRvcnMiLCJpIiwiY2hpbGRyZW4iLCIkIiwibCIsImxlbmd0aCIsInQiLCJMZXZlbCIsImxldmVsIiwicGFyc2UiLCJpbmRleGVzIiwibHZsVGV4dCIsImdldCIsInZhbHVlcyIsImxhYmVsIiwicmVwbGFjZSIsImEiLCJpbmRleCIsImN1cnJlbnQiLCJwYXJzZUludCIsImdldExhYmVsIiwiYWJzTnVtSWQiLCJTdHlsZSIsInByIiwicmVxdWlyZSIsIlByb3BlcnRpZXMiLCJ0eXBlIiwiSW5saW5lIiwieCIsIm51bUZtIiwiU3RyaW5nIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0lBQ3FCQSxtQjs7O0FBQ25CLCtCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQUEsMklBQ1BDLFNBRE87O0FBRWhCLFVBQUtDLE1BQUwsR0FBYyxJQUFJQyxHQUFKLEVBQWQ7O0FBRUEsVUFBS0MsSUFBTCxHQUFZLE1BQUtDLEVBQUwsR0FBVSxNQUFLQyxXQUFMLENBQWlCQyxTQUFqQixDQUNwQlAsS0FBS1EsSUFBTCxDQUFVLGlCQUFWLENBRG9CLENBQXRCO0FBR0EsVUFBS0MsSUFBTCxDQUFVQyxLQUFWLENBQWdCQyxHQUFoQjtBQUNBLFFBQUlDLE9BQU9aLEtBQUthLEVBQUwsQ0FBUSxjQUFSLENBQVg7QUFDQSxRQUFJRCxJQUFKLEVBQVUsTUFBS0EsSUFBTCxHQUFZQSxLQUFLSixJQUFMLENBQVUsT0FBVixDQUFaO0FBVE07QUFVakI7Ozs7NkJBRVFNLEMsRUFBR0MsUyxFQUFXQyxRLEVBQVU7QUFDL0IsV0FDRSxJQUFJQyxJQUFJLENBQVIsRUFBV0MsV0FBVyxLQUFLbEIsSUFBTCxDQUFVbUIsQ0FBVixDQUFZLEtBQVosQ0FBdEIsRUFBMENDLElBQUlGLFNBQVNHLE1BQXZELEVBQStEQyxDQURqRSxFQUVFTCxJQUFJRyxDQUZOLEVBR0VILEdBSEYsRUFJRTtBQUNBSyxZQUFJLElBQUksS0FBS2hCLFdBQUwsQ0FBaUJpQixLQUFyQixDQUEyQkwsU0FBU0QsQ0FBVCxDQUEzQixFQUF3QyxLQUFLUixJQUE3QyxFQUFtRCxJQUFuRCxDQUFKO0FBQ0EsYUFBS1AsTUFBTCxDQUFZUyxHQUFaLENBQWdCVyxFQUFFRSxLQUFsQixFQUF5QkYsQ0FBekI7QUFDQUEsVUFBRUcsS0FBRixDQUFRVCxRQUFSO0FBQ0Q7QUFDRjs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtoQixJQUFMLENBQVVRLElBQVYsQ0FBZSxpQkFBZixDQUFQO0FBQ0Q7OzsrQkFFb0I7QUFBQTs7QUFBQSx3Q0FBVGtCLE9BQVM7QUFBVEEsZUFBUztBQUFBOztBQUFBLG9DQUNMQSxRQUFRQSxRQUFRTCxNQUFSLEdBQWlCLENBQXpCLENBREs7QUFBQSxVQUNkRyxLQURjOztBQUVuQkUsZ0JBQVUsSUFBSXZCLEdBQUosQ0FBUXVCLE9BQVIsQ0FBVjtBQUNBLFVBQUlDLFVBQVUsS0FBS3pCLE1BQUwsQ0FBWTBCLEdBQVosQ0FBZ0JKLEtBQWhCLEVBQXVCSyxNQUF2QixDQUE4QkYsT0FBNUM7QUFDQSxVQUFJRyxRQUFRSCxRQUFRSSxPQUFSLENBQWdCLFNBQWhCLEVBQTJCLFVBQUNDLENBQUQsRUFBSUMsS0FBSixFQUFjO0FBQ25ELFlBQUlDLFVBQVVDLFNBQVNGLEtBQVQsSUFBa0IsQ0FBaEM7QUFDQSxlQUFPLE9BQUsvQixNQUFMLENBQVkwQixHQUFaLENBQWdCTSxPQUFoQixFQUF5QkUsUUFBekIsQ0FBa0NWLFFBQVFFLEdBQVIsQ0FBWU0sT0FBWixJQUF1QixDQUF6RCxDQUFQO0FBQ0QsT0FIVyxDQUFaO0FBSUEsYUFBT0osS0FBUDtBQUNEOzs7a0NBRWFOLEssRUFBTyxDQUFFOzs7OEJBRU5hLFEsRUFBVTtBQUN6QixhQUFPLHlCQUF5QkEsUUFBaEM7QUFDRDs7O3dCQUVpQjtBQUNoQixhQUFPLDRCQUFQO0FBQ0Q7Ozt3QkFFa0I7QUFDakIsYUFBT2QsS0FBUDtBQUNEOzs7O0VBcEQ4Q2UsZTs7a0JBQTVCdkMsbUI7O0lBdURmd0IsSzs7O0FBQ0osaUJBQVl2QixJQUFaLEVBQWtCO0FBQUE7O0FBQUEsZ0hBQ1BDLFNBRE87O0FBRWhCLFdBQUt1QixLQUFMLEdBQWFXLFNBQVNuQyxLQUFLUSxJQUFMLENBQVUsUUFBVixDQUFULENBQWI7QUFGZ0I7QUFHakI7Ozs7MEJBQ0tRLFEsRUFBVTtBQUNkLDJHQUFlZixTQUFmO0FBQ0EsVUFBSXFCLENBQUosRUFBT2lCLEVBQVA7QUFDQSxVQUFLakIsSUFBSSxLQUFLdEIsSUFBTCxDQUFVYSxFQUFWLENBQWEsTUFBYixDQUFULEVBQWdDO0FBQUE7O0FBQzlCMEIsYUFBSyxLQUFLQyxRQUFRLGFBQVIsRUFBdUJDLFVBQTVCLEVBQXdDbkIsQ0FBeEMsRUFBMkMsS0FBS2IsSUFBaEQsRUFBc0QsSUFBdEQsQ0FBTDtBQUNBOEIsV0FBR0csSUFBSCxHQUFVLEtBQUtsQixLQUFMLEdBQWEsR0FBYixHQUFtQmUsR0FBR0csSUFBaEM7QUFDQSxtQkFBR2pCLEtBQUgsWUFBWXhCLFNBQVo7QUFDRDs7QUFFRCxVQUFLcUIsSUFBSSxLQUFLdEIsSUFBTCxDQUFVYSxFQUFWLENBQWEsTUFBYixDQUFULEVBQWdDO0FBQUE7O0FBQzlCMEIsYUFBSyxJQUFJSSxpQkFBT0YsVUFBWCxDQUFzQm5CLENBQXRCLEVBQXlCLEtBQUtiLElBQTlCLEVBQW9DLElBQXBDLENBQUw7QUFDQThCLFdBQUdHLElBQUgsR0FBVSxLQUFLbEIsS0FBTCxHQUFhLEdBQWIsR0FBbUJlLEdBQUdHLElBQWhDO0FBQ0Esb0JBQUdqQixLQUFILGFBQVl4QixTQUFaO0FBQ0Q7QUFDRjs7OzBCQUNLMkMsQyxFQUFHO0FBQ1AsYUFBT1QsU0FBU1MsRUFBRXBDLElBQUYsQ0FBTyxPQUFQLENBQVQsQ0FBUDtBQUNEOzs7MEJBQ0tvQyxDLEVBQUc7QUFDUCxhQUFPQSxFQUFFcEMsSUFBRixDQUFPLE9BQVAsQ0FBUDtBQUNEOzs7NEJBQ09vQyxDLEVBQUc7QUFDVCxhQUFPQSxFQUFFcEMsSUFBRixDQUFPLE9BQVAsQ0FBUDtBQUNEOzs7MEJBQ0tvQyxDLEVBQUc7QUFDUCxhQUFPQSxFQUFFcEMsSUFBRixDQUFPLE9BQVAsQ0FBUDtBQUNEOzs7bUNBQ2NvQyxDLEVBQUc7QUFDaEIsYUFBT0EsRUFBRXBDLElBQUYsQ0FBTyxPQUFQLENBQVA7QUFDRDs7OzZCQUVReUIsSyxFQUFPO0FBQ2QsY0FBUSxLQUFLSixNQUFMLENBQVlnQixLQUFwQjtBQUNFO0FBQ0UsaUJBQU8sSUFBSUMsTUFBSixDQUFXLEtBQUtqQixNQUFMLENBQVlrQixLQUFaLEdBQW9CZCxLQUEvQixDQUFQO0FBRko7QUFJRDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUExQ2tCSyxnQkFBTUcsVSIsImZpbGUiOiJudW1iZXJpbmdEZWZpbml0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gJy4uL3N0eWxlJztcbmltcG9ydCBJbmxpbmUgZnJvbSAnLi9pbmxpbmUnO1xuXG4vLzx3Om51bWJlcmluZz48dzphYnN0cmFjdE51bSB3OmFic3RyYWN0TnVtSWQ9XCIwXCI+XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1iZXJpbmdEZWZpbml0aW9uIGV4dGVuZHMgU3R5bGUge1xuICBjb25zdHJ1Y3Rvcih3WG1sKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLmxldmVscyA9IG5ldyBNYXAoKTtcblxuICAgIHRoaXMubmFtZSA9IHRoaXMuaWQgPSB0aGlzLmNvbnN0cnVjdG9yLmFzU3R5bGVJZChcbiAgICAgIHdYbWwuYXR0cigndzphYnN0cmFjdE51bUlkJylcbiAgICApO1xuICAgIHRoaXMud0RvYy5zdHlsZS5zZXQodGhpcyk7XG4gICAgdmFyIGxpbmsgPSB3WG1sLiQxKCdudW1TdHlsZUxpbmsnKTtcbiAgICBpZiAobGluaykgdGhpcy5saW5rID0gbGluay5hdHRyKCd3OnZhbCcpO1xuICB9XG5cbiAgX2l0ZXJhdGUoZiwgZmFjdG9yaWVzLCB2aXNpdG9ycykge1xuICAgIGZvciAoXG4gICAgICB2YXIgaSA9IDAsIGNoaWxkcmVuID0gdGhpcy53WG1sLiQoJ2x2bCcpLCBsID0gY2hpbGRyZW4ubGVuZ3RoLCB0O1xuICAgICAgaSA8IGw7XG4gICAgICBpKytcbiAgICApIHtcbiAgICAgIHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvci5MZXZlbChjaGlsZHJlbltpXSwgdGhpcy53RG9jLCB0aGlzKTtcbiAgICAgIHRoaXMubGV2ZWxzLnNldCh0LmxldmVsLCB0KTtcbiAgICAgIHQucGFyc2UodmlzaXRvcnMpO1xuICAgIH1cbiAgfVxuXG4gIGdldERlZmluaXRpb25JZCgpIHtcbiAgICByZXR1cm4gdGhpcy53WG1sLmF0dHIoJ3c6YWJzdHJhY3ROdW1JZCcpO1xuICB9XG5cbiAgZ2V0TGFiZWwoLi4uaW5kZXhlcykge1xuICAgIGxldCBbbGV2ZWxdID0gaW5kZXhlc1tpbmRleGVzLmxlbmd0aCAtIDFdO1xuICAgIGluZGV4ZXMgPSBuZXcgTWFwKGluZGV4ZXMpO1xuICAgIGxldCBsdmxUZXh0ID0gdGhpcy5sZXZlbHMuZ2V0KGxldmVsKS52YWx1ZXMubHZsVGV4dDtcbiAgICBsZXQgbGFiZWwgPSBsdmxUZXh0LnJlcGxhY2UoLyUoXFxkKykvZywgKGEsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgY3VycmVudCA9IHBhcnNlSW50KGluZGV4KSAtIDE7XG4gICAgICByZXR1cm4gdGhpcy5sZXZlbHMuZ2V0KGN1cnJlbnQpLmdldExhYmVsKGluZGV4ZXMuZ2V0KGN1cnJlbnQpIC0gMSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgZ2V0TGFiZWxTdHlsZShsZXZlbCkge31cblxuICBzdGF0aWMgYXNTdHlsZUlkKGFic051bUlkKSB7XG4gICAgcmV0dXJuICdfbnVtYmVyaW5nRGVmaW5pdGlvbicgKyBhYnNOdW1JZDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ3N0eWxlLm51bWJlcmluZy5kZWZpbml0aW9uJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTGV2ZWwoKSB7XG4gICAgcmV0dXJuIExldmVsO1xuICB9XG59XG5cbmNsYXNzIExldmVsIGV4dGVuZHMgU3R5bGUuUHJvcGVydGllcyB7XG4gIGNvbnN0cnVjdG9yKHdYbWwpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMubGV2ZWwgPSBwYXJzZUludCh3WG1sLmF0dHIoJ3c6aWx2bCcpKTtcbiAgfVxuICBwYXJzZSh2aXNpdG9ycykge1xuICAgIHN1cGVyLnBhcnNlKC4uLmFyZ3VtZW50cyk7XG4gICAgdmFyIHQsIHByO1xuICAgIGlmICgodCA9IHRoaXMud1htbC4kMSgnPnBQcicpKSkge1xuICAgICAgcHIgPSBuZXcgKHJlcXVpcmUoJy4vcGFyYWdyYXBoJykuUHJvcGVydGllcykodCwgdGhpcy53RG9jLCB0aGlzKTtcbiAgICAgIHByLnR5cGUgPSB0aGlzLmxldmVsICsgJyAnICsgcHIudHlwZTtcbiAgICAgIHByLnBhcnNlKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgaWYgKCh0ID0gdGhpcy53WG1sLiQxKCc+clByJykpKSB7XG4gICAgICBwciA9IG5ldyBJbmxpbmUuUHJvcGVydGllcyh0LCB0aGlzLndEb2MsIHRoaXMpO1xuICAgICAgcHIudHlwZSA9IHRoaXMubGV2ZWwgKyAnICcgKyBwci50eXBlO1xuICAgICAgcHIucGFyc2UoLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbiAgc3RhcnQoeCkge1xuICAgIHJldHVybiBwYXJzZUludCh4LmF0dHIoJ3c6dmFsJykpO1xuICB9XG4gIG51bUZtKHgpIHtcbiAgICByZXR1cm4geC5hdHRyKCd3OnZhbCcpO1xuICB9XG4gIGx2bFRleHQoeCkge1xuICAgIHJldHVybiB4LmF0dHIoJ3c6dmFsJyk7XG4gIH1cbiAgbHZsSmMoeCkge1xuICAgIHJldHVybiB4LmF0dHIoJ3c6dmFsJyk7XG4gIH1cbiAgbHZsUGljQnVsbGV0SWQoeCkge1xuICAgIHJldHVybiB4LmF0dHIoJ3c6dmFsJyk7XG4gIH1cblxuICBnZXRMYWJlbChpbmRleCkge1xuICAgIHN3aXRjaCAodGhpcy52YWx1ZXMubnVtRm0pIHtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBuZXcgU3RyaW5nKHRoaXMudmFsdWVzLnN0YXJ0ICsgaW5kZXgpO1xuICAgIH1cbiAgfVxuICAvKiBudW1iZXIgdHlwZTpcbmRlY2ltYWxcbnVwcGVyUm9tYW5cbmxvd2VyUm9tYW5cbnVwcGVyTGV0dGVyXG5sb3dlckxldHRlclxub3JkaW5hbFxuY2FyZGluYWxUZXh0XG5vcmRpbmFsVGV4dFxuaGV4XG5jaGljYWdvXG5pZGVvZ3JhcGhEaWdpdGFsXG5qYXBhbmVzZUNvdW50aW5nXG5haXVlb1xuaXJvaGFcbmRlY2ltYWxGdWxsV2lkdGhcbmRlY2ltYWxIYWxmV2lkdGhcbmphcGFuZXNlTGVnYWxcbmphcGFuZXNlRGlnaXRhbFRlblRob3VzYW5kXG5kZWNpbWFsRW5jbG9zZWRDaXJjbGVcbmRlY2ltYWxGdWxsV2lkdGgyXG5haXVlb0Z1bGxXaWR0aFxuaXJvaGFGdWxsV2lkdGhcbmRlY2ltYWxaZXJvXG5idWxsZXRcbmdhbmFkYVxuY2hvc3VuZ1xuZGVjaW1hbEVuY2xvc2VkRnVsbHN0b3BcbmRlY2ltYWxFbmNsb3NlZFBhcmVuXG5kZWNpbWFsRW5jbG9zZWRDaXJjbGVDaGluZXNlXG5pZGVvZ3JhcGhFbmNsb3NlZENpcmNsZVxuaWRlb2dyYXBoVHJhZGl0aW9uYWxcbmlkZW9ncmFwaFpvZGlhY1xuaWRlb2dyYXBoWm9kaWFjVHJhZGl0aW9uYWxcbnRhaXdhbmVzZUNvdW50aW5nXG5pZGVvZ3JhcGhMZWdhbFRyYWRpdGlvbmFsXG50YWl3YW5lc2VDb3VudGluZ1Rob3VzYW5kXG50YWl3YW5lc2VEaWdpdGFsXG5jaGluZXNlQ291bnRpbmdcbmNoaW5lc2VMZWdhbFNpbXBsaWZpZWRcbmNoaW5lc2VDb3VudGluZ1Rob3VzYW5kXG5rb3JlYW5EaWdpdGFsXG5rb3JlYW5Db3VudGluZ1xua29yZWFuTGVnYWxcbmtvcmVhbkRpZ2l0YWwyXG52aWV0bmFtZXNlQ291bnRpbmdcbnJ1c3NpYW5Mb3dlclxucnVzc2lhblVwcGVyXG5ub25lXG5udW1iZXJJbkRhc2hcbmhlYnJldzFcbmhlYnJldzJcbmFyYWJpY0FscGhhXG5hcmFiaWNBYmphZFxuaGluZGlWb3dlbHNcbmhpbmRpQ29uc29uYW50c1xuaGluZGlOdW1iZXJzXG5oaW5kaUNvdW50aW5nXG50aGFpTGV0dGVyc1xudGhhaU51bWJlcnNcbnRoYWlDb3VudGluZ1xuKi9cbn1cbiJdfQ==