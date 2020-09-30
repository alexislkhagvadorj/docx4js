'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _factory = require('./factory');

var _factory2 = _interopRequireDefault(_factory);

var _font = require('./theme/font');

var _font2 = _interopRequireDefault(_font);

var _color = require('./theme/color');

var _color2 = _interopRequireDefault(_color);

var _format = require('./theme/format');

var _format2 = _interopRequireDefault(_format);

var _table = require('./model/table');

var _table2 = _interopRequireDefault(_table);

var _list = require('./model/list');

var _list2 = _interopRequireDefault(_list);

var _document = require('../document');

var _document2 = _interopRequireDefault(_document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Document = function (_Base) {
  _inherits(Document, _Base);

  function Document() {
    _classCallCheck(this, Document);

    var _this = _possibleConstructorReturn(this, (Document.__proto__ || Object.getPrototypeOf(Document)).apply(this, arguments));

    var rels = _this.rels,
        builtIn = 'settings,webSettings,theme,styles,stylesWithEffects,fontTable,numbering,footnotes,endnotes'.split(',');
    $tool.each(_this.partMain.rels, function (id, rel) {
      builtIn.indexOf(rel.type) != -1 && (rels[rel.type] = rel.target);
    });
    return _this;
  }

  _createClass(Document, [{
    key: 'parse',
    value: function parse(visitFactories) {
      _get(Document.prototype.__proto__ || Object.getPrototypeOf(Document.prototype), 'parse', this).apply(this, arguments);
      this.style = new this.constructor.Style();
      this.parseContext = {
        section: new ParseContext(),
        part: new ParseContext(this.partMain),
        bookmark: new ParseContext(),
        numbering: new _list2.default.Context(this),
        table: new _table2.default.Context(this),
        field: function (ctx) {
          ctx.instruct = function (t) {
            this[this.length - 1].instruct(t);
          };
          ctx.seperate = function (model) {
            this[this.length - 1].seperate(model);
          };
          ctx.end = function (endModel, endVisitors) {
            var _pop;

            (_pop = this.pop()).end.apply(_pop, arguments);
          };
          return ctx;
        }([])
      };
      this.content = this.factory(this.partMain.documentElement, this);
      var roots = this.content.parse($tool.isArray(visitFactories) ? visitFactories : $tool.toArray(arguments));
      this.release();
      return roots.length == 1 ? roots[0] : roots;
    }
  }, {
    key: 'getRel',
    value: function getRel(id) {
      return this.parseContext.part.current.getRel(id);
    }
  }, {
    key: 'getColorTheme',
    value: function getColorTheme() {
      if (this.colorTheme) return this.colorTheme;
      return this.colorTheme = new _color2.default(this.getPart('theme').documentElement.$2('clrScheme'), this.getPart('settings').documentElement.$2('clrSchemeMapping'));
    }
  }, {
    key: 'getFontTheme',
    value: function getFontTheme() {
      if (this.fontTheme) return this.fontTheme;
      return this.fontTheme = new _font2.default(this.getPart('theme').documentElement.$2('fontScheme'), this.getPart('settings').documentElement.$2('themeFontLang'));
    }
  }, {
    key: 'getFormatTheme',
    value: function getFormatTheme() {
      if (this.formatTheme) return this.formatTheme;
      return this.formatTheme = new _format2.default(this.getPart('theme').documentElement.$2('fmtScheme'), this);
    }
  }, {
    key: 'release',
    value: function release() {
      delete this.parseContext;

      _get(Document.prototype.__proto__ || Object.getPrototypeOf(Document.prototype), 'release', this).apply(this, arguments);
    }
  }], [{
    key: 'clone',
    value: function clone(doc) {
      var parts = doc.parts,
          raw = doc.raw,
          props = doc.props,
          rels = doc.rels,
          partMain = doc.partMain;

      return new Document(parts, raw, props);
    }
  }, {
    key: 'ext',
    get: function get() {
      return 'docx';
    }
  }, {
    key: 'type',
    get: function get() {
      return 'Word';
    }
  }, {
    key: 'Style',
    get: function get() {
      return Style;
    }
  }]);

  return Document;
}(_document2.default);

Document.Factory = _factory2.default;
exports.default = Document;


function Style() {
  var ids = {},
      defaults = {};
  Object.assign(this, {
    setDefault: function setDefault(style) {
      defaults[style.type] = style;
    },
    getDefault: function getDefault(type) {
      return defaults[type];
    },
    get: function get(id) {
      return ids[id];
    },
    set: function set(style, id) {
      ids[id || style.id] = style;
    }
  });
}

var ParseContext = function ParseContext(current) {
  _classCallCheck(this, ParseContext);

  this.current = current;
};

module.exports = exports['default'];