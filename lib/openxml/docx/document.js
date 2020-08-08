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

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvZG9jdW1lbnQuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhcmd1bWVudHMiLCJyZWxzIiwiYnVpbHRJbiIsInNwbGl0IiwiJHRvb2wiLCJlYWNoIiwicGFydE1haW4iLCJpZCIsInJlbCIsImluZGV4T2YiLCJ0eXBlIiwidGFyZ2V0IiwidmlzaXRGYWN0b3JpZXMiLCJzdHlsZSIsImNvbnN0cnVjdG9yIiwiU3R5bGUiLCJwYXJzZUNvbnRleHQiLCJzZWN0aW9uIiwiUGFyc2VDb250ZXh0IiwicGFydCIsImJvb2ttYXJrIiwibnVtYmVyaW5nIiwiTGlzdCIsIkNvbnRleHQiLCJ0YWJsZSIsIlRhYmxlIiwiZmllbGQiLCJjdHgiLCJpbnN0cnVjdCIsInQiLCJsZW5ndGgiLCJzZXBlcmF0ZSIsIm1vZGVsIiwiZW5kIiwiZW5kTW9kZWwiLCJlbmRWaXNpdG9ycyIsInBvcCIsImNvbnRlbnQiLCJmYWN0b3J5IiwiZG9jdW1lbnRFbGVtZW50Iiwicm9vdHMiLCJwYXJzZSIsImlzQXJyYXkiLCJ0b0FycmF5IiwicmVsZWFzZSIsImN1cnJlbnQiLCJnZXRSZWwiLCJjb2xvclRoZW1lIiwiQ29sb3JUaGVtZSIsImdldFBhcnQiLCIkMSIsImZvbnRUaGVtZSIsIkZvbnRUaGVtZSIsImZvcm1hdFRoZW1lIiwiRm9ybWF0VGhlbWUiLCJkb2MiLCJwYXJ0cyIsInJhdyIsInByb3BzIiwicmVxdWlyZSIsIkZhY3RvcnkiLCJpZHMiLCJkZWZhdWx0cyIsIk9iamVjdCIsImFzc2lnbiIsInNldERlZmF1bHQiLCJnZXREZWZhdWx0IiwiZ2V0Iiwic2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQUNuQixzQkFBYztBQUFBOztBQUFBLHFIQUNIQyxTQURHOztBQUVaLFFBQUlDLE9BQU8sTUFBS0EsSUFBaEI7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QXVCRyxLQUF2QjtBQUNELEtBSGlCO0FBSWxCcUQsZ0JBQVksb0JBQVV4RCxJQUFWLEVBQWdCO0FBQzFCLGFBQU9vRCxTQUFTcEQsSUFBVCxDQUFQO0FBQ0QsS0FOaUI7QUFPbEJ5RCxTQUFLLGFBQVU1RCxFQUFWLEVBQWM7QUFDakIsYUFBT3NELElBQUl0RCxFQUFKLENBQVA7QUFDRCxLQVRpQjtBQVVsQjZELFNBQUssYUFBVXZELEtBQVYsRUFBaUJOLEVBQWpCLEVBQXFCO0FBQ3hCc0QsVUFBSXRELE1BQU1NLE1BQU1OLEVBQWhCLElBQXNCTSxLQUF0QjtBQUNEO0FBWmlCLEdBQXBCO0FBY0Q7O0lBRUtLLFksR0FDSixzQkFBWTJCLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsT0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0QsQyIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGYWN0b3J5IGZyb20gJy4vZmFjdG9yeSc7XG5pbXBvcnQgRm9udFRoZW1lIGZyb20gJy4vdGhlbWUvZm9udCc7XG5pbXBvcnQgQ29sb3JUaGVtZSBmcm9tICcuL3RoZW1lL2NvbG9yJztcbmltcG9ydCBGb3JtYXRUaGVtZSBmcm9tICcuL3RoZW1lL2Zvcm1hdCc7XG5cbmltcG9ydCBUYWJsZSBmcm9tICcuL21vZGVsL3RhYmxlJztcbmltcG9ydCBMaXN0IGZyb20gJy4vbW9kZWwvbGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGRvY3VtZW50IGV4dGVuZHMgcmVxdWlyZSgnLi4vZG9jdW1lbnQnKSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdmFyIHJlbHMgPSB0aGlzLnJlbHMsXG4gICAgICBidWlsdEluID0gJ3NldHRpbmdzLHdlYlNldHRpbmdzLHRoZW1lLHN0eWxlcyxzdHlsZXNXaXRoRWZmZWN0cyxmb250VGFibGUsbnVtYmVyaW5nLGZvb3Rub3RlcyxlbmRub3Rlcycuc3BsaXQoXG4gICAgICAgICcsJ1xuICAgICAgKTtcbiAgICAkdG9vbC5lYWNoKHRoaXMucGFydE1haW4ucmVscywgZnVuY3Rpb24gKGlkLCByZWwpIHtcbiAgICAgIGJ1aWx0SW4uaW5kZXhPZihyZWwudHlwZSkgIT0gLTEgJiYgKHJlbHNbcmVsLnR5cGVdID0gcmVsLnRhcmdldCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZG9jKSB7XG4gICAgbGV0IHsgcGFydHMsIHJhdywgcHJvcHMsIHJlbHMsIHBhcnRNYWluIH0gPSBkb2M7XG4gICAgcmV0dXJuIG5ldyBkb2N1bWVudChwYXJ0cywgcmF3LCBwcm9wcyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGV4dCgpIHtcbiAgICByZXR1cm4gJ2RvY3gnO1xuICB9XG5cbiAgcGFyc2UodmlzaXRGYWN0b3JpZXMpIHtcbiAgICBzdXBlci5wYXJzZSguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMuc3R5bGUgPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvci5TdHlsZSgpO1xuICAgIHRoaXMucGFyc2VDb250ZXh0ID0ge1xuICAgICAgc2VjdGlvbjogbmV3IFBhcnNlQ29udGV4dCgpLFxuICAgICAgcGFydDogbmV3IFBhcnNlQ29udGV4dCh0aGlzLnBhcnRNYWluKSxcbiAgICAgIGJvb2ttYXJrOiBuZXcgUGFyc2VDb250ZXh0KCksXG4gICAgICBudW1iZXJpbmc6IG5ldyBMaXN0LkNvbnRleHQodGhpcyksXG4gICAgICB0YWJsZTogbmV3IFRhYmxlLkNvbnRleHQodGhpcyksXG4gICAgICBmaWVsZDogKGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgY3R4Lmluc3RydWN0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICB0aGlzW3RoaXMubGVuZ3RoIC0gMV0uaW5zdHJ1Y3QodCk7XG4gICAgICAgIH07XG4gICAgICAgIGN0eC5zZXBlcmF0ZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAgIHRoaXNbdGhpcy5sZW5ndGggLSAxXS5zZXBlcmF0ZShtb2RlbCk7XG4gICAgICAgIH07XG4gICAgICAgIGN0eC5lbmQgPSBmdW5jdGlvbiAoZW5kTW9kZWwsIGVuZFZpc2l0b3JzKSB7XG4gICAgICAgICAgdGhpcy5wb3AoKS5lbmQoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGN0eDtcbiAgICAgIH0pKFtdKSxcbiAgICB9O1xuICAgIHRoaXMuY29udGVudCA9IHRoaXMuZmFjdG9yeSh0aGlzLnBhcnRNYWluLmRvY3VtZW50RWxlbWVudCwgdGhpcyk7XG4gICAgdmFyIHJvb3RzID0gdGhpcy5jb250ZW50LnBhcnNlKFxuICAgICAgJHRvb2wuaXNBcnJheSh2aXNpdEZhY3RvcmllcykgPyB2aXNpdEZhY3RvcmllcyA6ICR0b29sLnRvQXJyYXkoYXJndW1lbnRzKVxuICAgICk7XG4gICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgcmV0dXJuIHJvb3RzLmxlbmd0aCA9PSAxID8gcm9vdHNbMF0gOiByb290cztcbiAgfVxuICBnZXRSZWwoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZUNvbnRleHQucGFydC5jdXJyZW50LmdldFJlbChpZCk7XG4gIH1cbiAgZ2V0Q29sb3JUaGVtZSgpIHtcbiAgICBpZiAodGhpcy5jb2xvclRoZW1lKSByZXR1cm4gdGhpcy5jb2xvclRoZW1lO1xuICAgIHJldHVybiAodGhpcy5jb2xvclRoZW1lID0gbmV3IENvbG9yVGhlbWUoXG4gICAgICB0aGlzLmdldFBhcnQoJ3RoZW1lJykuZG9jdW1lbnRFbGVtZW50LiQxKCdjbHJTY2hlbWUnKSxcbiAgICAgIHRoaXMuZ2V0UGFydCgnc2V0dGluZ3MnKS5kb2N1bWVudEVsZW1lbnQuJDEoJ2NsclNjaGVtZU1hcHBpbmcnKVxuICAgICkpO1xuICB9XG4gIGdldEZvbnRUaGVtZSgpIHtcbiAgICBpZiAodGhpcy5mb250VGhlbWUpIHJldHVybiB0aGlzLmZvbnRUaGVtZTtcbiAgICByZXR1cm4gKHRoaXMuZm9udFRoZW1lID0gbmV3IEZvbnRUaGVtZShcbiAgICAgIHRoaXMuZ2V0UGFydCgndGhlbWUnKS5kb2N1bWVudEVsZW1lbnQuJDEoJ2ZvbnRTY2hlbWUnKSxcbiAgICAgIHRoaXMuZ2V0UGFydCgnc2V0dGluZ3MnKS5kb2N1bWVudEVsZW1lbnQuJDEoJ3RoZW1lRm9udExhbmcnKVxuICAgICkpO1xuICB9XG4gIGdldEZvcm1hdFRoZW1lKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdFRoZW1lKSByZXR1cm4gdGhpcy5mb3JtYXRUaGVtZTtcbiAgICByZXR1cm4gKHRoaXMuZm9ybWF0VGhlbWUgPSBuZXcgRm9ybWF0VGhlbWUoXG4gICAgICB0aGlzLmdldFBhcnQoJ3RoZW1lJykuZG9jdW1lbnRFbGVtZW50LiQxKCdmbXRTY2hlbWUnKSxcbiAgICAgIHRoaXNcbiAgICApKTtcbiAgfVxuICByZWxlYXNlKCkge1xuICAgIGRlbGV0ZSB0aGlzLnBhcnNlQ29udGV4dDtcblxuICAgIHN1cGVyLnJlbGVhc2UoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ1dvcmQnO1xuICB9XG5cbiAgc3RhdGljIGdldCBTdHlsZSgpIHtcbiAgICByZXR1cm4gU3R5bGU7XG4gIH1cblxuICBzdGF0aWMgRmFjdG9yeSA9IEZhY3Rvcnk7XG59XG5cbmZ1bmN0aW9uIFN0eWxlKCkge1xuICB2YXIgaWRzID0ge30sXG4gICAgZGVmYXVsdHMgPSB7fTtcbiAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgc2V0RGVmYXVsdDogZnVuY3Rpb24gKHN0eWxlKSB7XG4gICAgICBkZWZhdWx0c1tzdHlsZS50eXBlXSA9IHN0eWxlO1xuICAgIH0sXG4gICAgZ2V0RGVmYXVsdDogZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0c1t0eXBlXTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gKGlkKSB7XG4gICAgICByZXR1cm4gaWRzW2lkXTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gKHN0eWxlLCBpZCkge1xuICAgICAgaWRzW2lkIHx8IHN0eWxlLmlkXSA9IHN0eWxlO1xuICAgIH0sXG4gIH0pO1xufVxuXG5jbGFzcyBQYXJzZUNvbnRleHQge1xuICBjb25zdHJ1Y3RvcihjdXJyZW50KSB7XG4gICAgdGhpcy5jdXJyZW50ID0gY3VycmVudDtcbiAgfVxufVxuIl19