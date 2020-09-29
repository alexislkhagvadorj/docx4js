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