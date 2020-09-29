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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var document = function (_require) {
  _inherits(document, _require);

  function document() {
    _classCallCheck(this, document);

    var _this = _possibleConstructorReturn(this, (document.__proto__ || Object.getPrototypeOf(document)).apply(this, arguments));

    var rels = _this.rels,
        builtIn = 'settings,webSettings,theme,styles,stylesWithEffects,fontTable,numbering,footnotes,endnotes'.split(',');
    $tool.each(_this.partMain.rels, function (id, rel) {
      builtIn.indexOf(rel.type) != -1 && (rels[rel.type] = rel.target);
    });
    return _this;
  }

  _createClass(document, [{
    key: 'parse',
    value: function parse(visitFactories) {
      _get(document.prototype.__proto__ || Object.getPrototypeOf(document.prototype), 'parse', this).apply(this, arguments);
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
      return this.colorTheme = new _color2.default(this.getPart('theme').documentElement.$1('clrScheme'), this.getPart('settings').documentElement.$1('clrSchemeMapping'));
    }
  }, {
    key: 'getFontTheme',
    value: function getFontTheme() {
      if (this.fontTheme) return this.fontTheme;
      return this.fontTheme = new _font2.default(this.getPart('theme').documentElement.$1('fontScheme'), this.getPart('settings').documentElement.$1('themeFontLang'));
    }
  }, {
    key: 'getFormatTheme',
    value: function getFormatTheme() {
      if (this.formatTheme) return this.formatTheme;
      return this.formatTheme = new _format2.default(this.getPart('theme').documentElement.$1('fmtScheme'), this);
    }
  }, {
    key: 'release',
    value: function release() {
      delete this.parseContext;

      _get(document.prototype.__proto__ || Object.getPrototypeOf(document.prototype), 'release', this).apply(this, arguments);
    }
  }], [{
    key: 'clone',
    value: function clone(doc) {
      var parts = doc.parts,
          raw = doc.raw,
          props = doc.props,
          rels = doc.rels,
          partMain = doc.partMain;

      return new document(parts, raw, props);
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

  return document;
}(require('../document'));

document.Factory = _factory2.default;
exports.default = document;


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

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb2N4L2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYXJndW1lbnRzIiwicmVscyIsImJ1aWx0SW4iLCJzcGxpdCIsIiR0b29sIiwiZWFjaCIsInBhcnRNYWluIiwiaWQiLCJyZWwiLCJpbmRleE9mIiwidHlwZSIsInRhcmdldCIsInZpc2l0RmFjdG9yaWVzIiwic3R5bGUiLCJjb25zdHJ1Y3RvciIsIlN0eWxlIiwicGFyc2VDb250ZXh0Iiwic2VjdGlvbiIsIlBhcnNlQ29udGV4dCIsInBhcnQiLCJib29rbWFyayIsIm51bWJlcmluZyIsIkxpc3QiLCJDb250ZXh0IiwidGFibGUiLCJUYWJsZSIsImZpZWxkIiwiY3R4IiwiaW5zdHJ1Y3QiLCJ0IiwibGVuZ3RoIiwic2VwZXJhdGUiLCJtb2RlbCIsImVuZCIsImVuZE1vZGVsIiwiZW5kVmlzaXRvcnMiLCJwb3AiLCJjb250ZW50IiwiZmFjdG9yeSIsImRvY3VtZW50RWxlbWVudCIsInJvb3RzIiwicGFyc2UiLCJpc0FycmF5IiwidG9BcnJheSIsInJlbGVhc2UiLCJjdXJyZW50IiwiZ2V0UmVsIiwiY29sb3JUaGVtZSIsIkNvbG9yVGhlbWUiLCJnZXRQYXJ0IiwiJDEiLCJmb250VGhlbWUiLCJGb250VGhlbWUiLCJmb3JtYXRUaGVtZSIsIkZvcm1hdFRoZW1lIiwiZG9jIiwicGFydHMiLCJyYXciLCJwcm9wcyIsInJlcXVpcmUiLCJGYWN0b3J5IiwiaWRzIiwiZGVmYXVsdHMiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXREZWZhdWx0IiwiZ2V0RGVmYXVsdCIsImdldCIsInNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7QUFDbkIsc0JBQWM7QUFBQTs7QUFBQSxxSEFDSEMsU0FERzs7QUFFWixRQUFJQyxPQUFPLE1BQUtBLElBQWhCO0FBQUEsUUFDRUMs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QUFDRCxLQUhpQjtBQUlsQnFELGdCQUFZLG9CQUFVeEQsSUFBVixFQUFnQjtBQUMxQixhQUFPb0QsU0FBU3BELElBQVQsQ0FBUDtBQUNELEtBTmlCO0FBT2xCeUQsU0FBSyxhQUFVNUQsRUFBVixFQUFjO0FBQ2pCLGFBQU9zRCxJQUFJdEQsRUFBSixDQUFQO0FBQ0QsS0FUaUI7QUFVbEI2RCxTQUFLLGFBQVV2RCxLQUFWLEVBQWlCTixFQUFqQixFQUFxQjtBQUN4QnNELFVBQUl0RCxNQUFNTSxNQUFNTixFQUFoQixJQUFzQk0sS0FBdEI7QUFDRDtBQVppQixHQUFwQjtBQWNEOztJQUVLSyxZLEdBQ0osc0JBQVkyQixPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLE9BQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNELEMiLCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmFjdG9yeSBmcm9tICcuL2ZhY3RvcnknO1xuaW1wb3J0IEZvbnRUaGVtZSBmcm9tICcuL3RoZW1lL2ZvbnQnO1xuaW1wb3J0IENvbG9yVGhlbWUgZnJvbSAnLi90aGVtZS9jb2xvcic7XG5pbXBvcnQgRm9ybWF0VGhlbWUgZnJvbSAnLi90aGVtZS9mb3JtYXQnO1xuXG5pbXBvcnQgVGFibGUgZnJvbSAnLi9tb2RlbC90YWJsZSc7XG5pbXBvcnQgTGlzdCBmcm9tICcuL21vZGVsL2xpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkb2N1bWVudCBleHRlbmRzIHJlcXVpcmUoJy4uL2RvY3VtZW50Jykge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHZhciByZWxzID0gdGhpcy5yZWxzLFxuICAgICAgYnVpbHRJbiA9ICdzZXR0aW5ncyx3ZWJTZXR0aW5ncyx0aGVtZSxzdHlsZXMsc3R5bGVzV2l0aEVmZmVjdHMsZm9udFRhYmxlLG51bWJlcmluZyxmb290bm90ZXMsZW5kbm90ZXMnLnNwbGl0KFxuICAgICAgICAnLCdcbiAgICAgICk7XG4gICAgJHRvb2wuZWFjaCh0aGlzLnBhcnRNYWluLnJlbHMsIGZ1bmN0aW9uIChpZCwgcmVsKSB7XG4gICAgICBidWlsdEluLmluZGV4T2YocmVsLnR5cGUpICE9IC0xICYmIChyZWxzW3JlbC50eXBlXSA9IHJlbC50YXJnZXQpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKGRvYykge1xuICAgIGxldCB7IHBhcnRzLCByYXcsIHByb3BzLCByZWxzLCBwYXJ0TWFpbiB9ID0gZG9jO1xuICAgIHJldHVybiBuZXcgZG9jdW1lbnQocGFydHMsIHJhdywgcHJvcHMpO1xuICB9XG5cbiAgc3RhdGljIGdldCBleHQoKSB7XG4gICAgcmV0dXJuICdkb2N4JztcbiAgfVxuXG4gIHBhcnNlKHZpc2l0RmFjdG9yaWVzKSB7XG4gICAgc3VwZXIucGFyc2UoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLnN0eWxlID0gbmV3IHRoaXMuY29uc3RydWN0b3IuU3R5bGUoKTtcbiAgICB0aGlzLnBhcnNlQ29udGV4dCA9IHtcbiAgICAgIHNlY3Rpb246IG5ldyBQYXJzZUNvbnRleHQoKSxcbiAgICAgIHBhcnQ6IG5ldyBQYXJzZUNvbnRleHQodGhpcy5wYXJ0TWFpbiksXG4gICAgICBib29rbWFyazogbmV3IFBhcnNlQ29udGV4dCgpLFxuICAgICAgbnVtYmVyaW5nOiBuZXcgTGlzdC5Db250ZXh0KHRoaXMpLFxuICAgICAgdGFibGU6IG5ldyBUYWJsZS5Db250ZXh0KHRoaXMpLFxuICAgICAgZmllbGQ6IChmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgIGN0eC5pbnN0cnVjdCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgdGhpc1t0aGlzLmxlbmd0aCAtIDFdLmluc3RydWN0KHQpO1xuICAgICAgICB9O1xuICAgICAgICBjdHguc2VwZXJhdGUgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgICB0aGlzW3RoaXMubGVuZ3RoIC0gMV0uc2VwZXJhdGUobW9kZWwpO1xuICAgICAgICB9O1xuICAgICAgICBjdHguZW5kID0gZnVuY3Rpb24gKGVuZE1vZGVsLCBlbmRWaXNpdG9ycykge1xuICAgICAgICAgIHRoaXMucG9wKCkuZW5kKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjdHg7XG4gICAgICB9KShbXSksXG4gICAgfTtcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmZhY3RvcnkodGhpcy5wYXJ0TWFpbi5kb2N1bWVudEVsZW1lbnQsIHRoaXMpO1xuICAgIHZhciByb290cyA9IHRoaXMuY29udGVudC5wYXJzZShcbiAgICAgICR0b29sLmlzQXJyYXkodmlzaXRGYWN0b3JpZXMpID8gdmlzaXRGYWN0b3JpZXMgOiAkdG9vbC50b0FycmF5KGFyZ3VtZW50cylcbiAgICApO1xuICAgIHRoaXMucmVsZWFzZSgpO1xuICAgIHJldHVybiByb290cy5sZW5ndGggPT0gMSA/IHJvb3RzWzBdIDogcm9vdHM7XG4gIH1cbiAgZ2V0UmVsKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VDb250ZXh0LnBhcnQuY3VycmVudC5nZXRSZWwoaWQpO1xuICB9XG4gIGdldENvbG9yVGhlbWUoKSB7XG4gICAgaWYgKHRoaXMuY29sb3JUaGVtZSkgcmV0dXJuIHRoaXMuY29sb3JUaGVtZTtcbiAgICByZXR1cm4gKHRoaXMuY29sb3JUaGVtZSA9IG5ldyBDb2xvclRoZW1lKFxuICAgICAgdGhpcy5nZXRQYXJ0KCd0aGVtZScpLmRvY3VtZW50RWxlbWVudC4kMSgnY2xyU2NoZW1lJyksXG4gICAgICB0aGlzLmdldFBhcnQoJ3NldHRpbmdzJykuZG9jdW1lbnRFbGVtZW50LiQxKCdjbHJTY2hlbWVNYXBwaW5nJylcbiAgICApKTtcbiAgfVxuICBnZXRGb250VGhlbWUoKSB7XG4gICAgaWYgKHRoaXMuZm9udFRoZW1lKSByZXR1cm4gdGhpcy5mb250VGhlbWU7XG4gICAgcmV0dXJuICh0aGlzLmZvbnRUaGVtZSA9IG5ldyBGb250VGhlbWUoXG4gICAgICB0aGlzLmdldFBhcnQoJ3RoZW1lJykuZG9jdW1lbnRFbGVtZW50LiQxKCdmb250U2NoZW1lJyksXG4gICAgICB0aGlzLmdldFBhcnQoJ3NldHRpbmdzJykuZG9jdW1lbnRFbGVtZW50LiQxKCd0aGVtZUZvbnRMYW5nJylcbiAgICApKTtcbiAgfVxuICBnZXRGb3JtYXRUaGVtZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXRUaGVtZSkgcmV0dXJuIHRoaXMuZm9ybWF0VGhlbWU7XG4gICAgcmV0dXJuICh0aGlzLmZvcm1hdFRoZW1lID0gbmV3IEZvcm1hdFRoZW1lKFxuICAgICAgdGhpcy5nZXRQYXJ0KCd0aGVtZScpLmRvY3VtZW50RWxlbWVudC4kMSgnZm10U2NoZW1lJyksXG4gICAgICB0aGlzXG4gICAgKSk7XG4gIH1cbiAgcmVsZWFzZSgpIHtcbiAgICBkZWxldGUgdGhpcy5wYXJzZUNvbnRleHQ7XG5cbiAgICBzdXBlci5yZWxlYXNlKC4uLmFyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdXb3JkJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgU3R5bGUoKSB7XG4gICAgcmV0dXJuIFN0eWxlO1xuICB9XG5cbiAgc3RhdGljIEZhY3RvcnkgPSBGYWN0b3J5O1xufVxuXG5mdW5jdGlvbiBTdHlsZSgpIHtcbiAgdmFyIGlkcyA9IHt9LFxuICAgIGRlZmF1bHRzID0ge307XG4gIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgIHNldERlZmF1bHQ6IGZ1bmN0aW9uIChzdHlsZSkge1xuICAgICAgZGVmYXVsdHNbc3R5bGUudHlwZV0gPSBzdHlsZTtcbiAgICB9LFxuICAgIGdldERlZmF1bHQ6IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdHNbdHlwZV07XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcmV0dXJuIGlkc1tpZF07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIChzdHlsZSwgaWQpIHtcbiAgICAgIGlkc1tpZCB8fCBzdHlsZS5pZF0gPSBzdHlsZTtcbiAgICB9LFxuICB9KTtcbn1cblxuY2xhc3MgUGFyc2VDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY3VycmVudCkge1xuICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnQ7XG4gIH1cbn1cbiJdfQ==