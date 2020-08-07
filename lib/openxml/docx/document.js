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
			return "Word";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvZG9jdW1lbnQuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhcmd1bWVudHMiLCJyZWxzIiwiYnVpbHRJbiIsInNwbGl0IiwiJHRvb2wiLCJlYWNoIiwicGFydE1haW4iLCJpZCIsInJlbCIsImluZGV4T2YiLCJ0eXBlIiwidGFyZ2V0IiwidmlzaXRGYWN0b3JpZXMiLCJzdHlsZSIsImNvbnN0cnVjdG9yIiwiU3R5bGUiLCJwYXJzZUNvbnRleHQiLCJzZWN0aW9uIiwiUGFyc2VDb250ZXh0IiwicGFydCIsImJvb2ttYXJrIiwibnVtYmVyaW5nIiwiTGlzdCIsIkNvbnRleHQiLCJ0YWJsZSIsIlRhYmxlIiwiZmllbGQiLCJjdHgiLCJpbnN0cnVjdCIsInQiLCJsZW5ndGgiLCJzZXBlcmF0ZSIsIm1vZGVsIiwiZW5kIiwiZW5kTW9kZWwiLCJlbmRWaXNpdG9ycyIsInBvcCIsImNvbnRlbnQiLCJmYWN0b3J5IiwiZG9jdW1lbnRFbGVtZW50Iiwicm9vdHMiLCJwYXJzZSIsImlzQXJyYXkiLCJ0b0FycmF5IiwicmVsZWFzZSIsImN1cnJlbnQiLCJnZXRSZWwiLCJjb2xvclRoZW1lIiwiQ29sb3JUaGVtZSIsImdldFBhcnQiLCIkMSIsImZvbnRUaGVtZSIsIkZvbnRUaGVtZSIsImZvcm1hdFRoZW1lIiwiRm9ybWF0VGhlbWUiLCJkb2MiLCJwYXJ0cyIsInJhdyIsInByb3BzIiwicmVxdWlyZSIsIkZhY3RvcnkiLCJpZHMiLCJkZWZhdWx0cyIsIk9iamVjdCIsImFzc2lnbiIsInNldERlZmF1bHQiLCJnZXREZWZhdWx0IiwiZ2V0Iiwic2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQUNwQixxQkFBYTtBQUFBOztBQUFBLG1IQUNIQyxTQURHOztBQUVaLE1BQUlDLE9BQUssTUFBS0EsSUFBZDtB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RCxjQUFZLG9CQUFTeEQsSUFBVCxFQUFjO0FBQ3pCLFVBQU9vRCxTQUFTcEQsSUFBVCxDQUFQO0FBQ0EsR0FOaUI7QUFPbEJ5RCxPQUFLLGFBQVM1RCxFQUFULEVBQVk7QUFDaEIsVUFBT3NELElBQUl0RCxFQUFKLENBQVA7QUFDQSxHQVRpQjtBQVVsQjZELE9BQUssYUFBU3ZELEtBQVQsRUFBZ0JOLEVBQWhCLEVBQW1CO0FBQ3ZCc0QsT0FBSXRELE1BQUlNLE1BQU1OLEVBQWQsSUFBa0JNLEtBQWxCO0FBQ0E7QUFaaUIsRUFBbkI7QUFjQTs7SUFFS0ssWSxHQUNMLHNCQUFZMkIsT0FBWixFQUFvQjtBQUFBOztBQUNuQixNQUFLQSxPQUFMLEdBQWFBLE9BQWI7QUFDQSxDIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZhY3RvcnkgZnJvbSAnLi9mYWN0b3J5J1xuaW1wb3J0IEZvbnRUaGVtZSBmcm9tICcuL3RoZW1lL2ZvbnQnXG5pbXBvcnQgQ29sb3JUaGVtZSBmcm9tICcuL3RoZW1lL2NvbG9yJ1xuaW1wb3J0IEZvcm1hdFRoZW1lIGZyb20gJy4vdGhlbWUvZm9ybWF0J1xuXG5pbXBvcnQgVGFibGUgZnJvbSBcIi4vbW9kZWwvdGFibGVcIlxuaW1wb3J0IExpc3QgZnJvbSBcIi4vbW9kZWwvbGlzdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGRvY3VtZW50IGV4dGVuZHMgcmVxdWlyZSgnLi4vZG9jdW1lbnQnKXtcblx0Y29uc3RydWN0b3IoKXtcblx0XHRzdXBlciguLi5hcmd1bWVudHMpXG5cdFx0dmFyIHJlbHM9dGhpcy5yZWxzLFxuXHRcdFx0YnVpbHRJbj0nc2V0dGluZ3Msd2ViU2V0dGluZ3MsdGhlbWUsc3R5bGVzLHN0eWxlc1dpdGhFZmZlY3RzLGZvbnRUYWJsZSxudW1iZXJpbmcsZm9vdG5vdGVzLGVuZG5vdGVzJy5zcGxpdCgnLCcpXG5cdFx0JHRvb2wuZWFjaCh0aGlzLnBhcnRNYWluLnJlbHMsZnVuY3Rpb24oaWQscmVsKXtcblx0XHRcdGJ1aWx0SW4uaW5kZXhPZihyZWwudHlwZSkhPS0xICYmIChyZWxzW3JlbC50eXBlXT1yZWwudGFyZ2V0KVxuXHRcdH0pXG5cdH1cblxuXHRzdGF0aWMgY2xvbmUoZG9jKXtcblx0XHRsZXQge3BhcnRzLHJhdyxwcm9wcyxyZWxzLHBhcnRNYWlufT1kb2Ncblx0XHRyZXR1cm4gbmV3IGRvY3VtZW50KHBhcnRzLHJhdyxwcm9wcylcblx0fVxuXG5cdHN0YXRpYyBnZXQgZXh0KCl7cmV0dXJuICdkb2N4J31cblxuXHRwYXJzZSh2aXNpdEZhY3Rvcmllcyl7XG5cdFx0c3VwZXIucGFyc2UoLi4uYXJndW1lbnRzKVxuXHRcdHRoaXMuc3R5bGU9bmV3IHRoaXMuY29uc3RydWN0b3IuU3R5bGUoKVxuXHRcdHRoaXMucGFyc2VDb250ZXh0PXtcblx0XHRcdHNlY3Rpb246IG5ldyBQYXJzZUNvbnRleHQoKSxcblx0XHRcdHBhcnQ6bmV3IFBhcnNlQ29udGV4dCh0aGlzLnBhcnRNYWluKSxcblx0XHRcdGJvb2ttYXJrOiBuZXcgUGFyc2VDb250ZXh0KCksXG5cdFx0XHRudW1iZXJpbmc6IG5ldyBMaXN0LkNvbnRleHQodGhpcyksXG5cdFx0XHR0YWJsZTogbmV3IFRhYmxlLkNvbnRleHQodGhpcyksXG5cdFx0XHRmaWVsZDogKGZ1bmN0aW9uKGN0eCl7XG5cdFx0XHRcdGN0eC5pbnN0cnVjdD1mdW5jdGlvbih0KXtcblx0XHRcdFx0XHR0aGlzW3RoaXMubGVuZ3RoLTFdLmluc3RydWN0KHQpXG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnNlcGVyYXRlPWZ1bmN0aW9uKG1vZGVsKXtcblx0XHRcdFx0XHR0aGlzW3RoaXMubGVuZ3RoLTFdLnNlcGVyYXRlKG1vZGVsKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC5lbmQ9ZnVuY3Rpb24oZW5kTW9kZWwsIGVuZFZpc2l0b3JzKXtcblx0XHRcdFx0XHR0aGlzLnBvcCgpLmVuZCguLi5hcmd1bWVudHMpXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGN0eFxuXHRcdFx0fSkoW10pXG5cdFx0fVxuXHRcdHRoaXMuY29udGVudD10aGlzLmZhY3RvcnkodGhpcy5wYXJ0TWFpbi5kb2N1bWVudEVsZW1lbnQsIHRoaXMpXG5cdFx0dmFyIHJvb3RzPXRoaXMuY29udGVudC5wYXJzZSgkdG9vbC5pc0FycmF5KHZpc2l0RmFjdG9yaWVzKSA/IHZpc2l0RmFjdG9yaWVzIDogJHRvb2wudG9BcnJheShhcmd1bWVudHMpKVxuXHRcdHRoaXMucmVsZWFzZSgpXG5cdFx0cmV0dXJuIHJvb3RzLmxlbmd0aD09MSA/IHJvb3RzWzBdIDogcm9vdHNcblx0fVxuXHRnZXRSZWwoaWQpe1xuXHRcdHJldHVybiB0aGlzLnBhcnNlQ29udGV4dC5wYXJ0LmN1cnJlbnQuZ2V0UmVsKGlkKVxuXHR9XG5cdGdldENvbG9yVGhlbWUoKXtcblx0XHRpZih0aGlzLmNvbG9yVGhlbWUpXG5cdFx0XHRyZXR1cm4gdGhpcy5jb2xvclRoZW1lXG5cdFx0cmV0dXJuIHRoaXMuY29sb3JUaGVtZT1uZXcgQ29sb3JUaGVtZSh0aGlzLmdldFBhcnQoJ3RoZW1lJykuZG9jdW1lbnRFbGVtZW50LiQxKCdjbHJTY2hlbWUnKSwgdGhpcy5nZXRQYXJ0KCdzZXR0aW5ncycpLmRvY3VtZW50RWxlbWVudC4kMSgnY2xyU2NoZW1lTWFwcGluZycpKVxuXHR9XG5cdGdldEZvbnRUaGVtZSgpe1xuXHRcdGlmKHRoaXMuZm9udFRoZW1lKVxuXHRcdFx0cmV0dXJuIHRoaXMuZm9udFRoZW1lXG5cdFx0cmV0dXJuIHRoaXMuZm9udFRoZW1lPW5ldyBGb250VGhlbWUodGhpcy5nZXRQYXJ0KCd0aGVtZScpLmRvY3VtZW50RWxlbWVudC4kMSgnZm9udFNjaGVtZScpLCB0aGlzLmdldFBhcnQoJ3NldHRpbmdzJykuZG9jdW1lbnRFbGVtZW50LiQxKCd0aGVtZUZvbnRMYW5nJykpXG5cdH1cblx0Z2V0Rm9ybWF0VGhlbWUoKXtcblx0XHRpZih0aGlzLmZvcm1hdFRoZW1lKVxuXHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0VGhlbWVcblx0XHRyZXR1cm4gdGhpcy5mb3JtYXRUaGVtZT1uZXcgRm9ybWF0VGhlbWUodGhpcy5nZXRQYXJ0KCd0aGVtZScpLmRvY3VtZW50RWxlbWVudC4kMSgnZm10U2NoZW1lJyksIHRoaXMpXG5cdH1cblx0cmVsZWFzZSgpe1xuXHRcdGRlbGV0ZSB0aGlzLnBhcnNlQ29udGV4dFxuXG5cdFx0c3VwZXIucmVsZWFzZSguLi5hcmd1bWVudHMpXG5cdH1cblxuXHRzdGF0aWMgZ2V0IHR5cGUoKXtyZXR1cm4gXCJXb3JkXCJ9XG5cblx0c3RhdGljIGdldCBTdHlsZSgpe3JldHVybiBTdHlsZX1cblxuXHRzdGF0aWMgRmFjdG9yeT1GYWN0b3J5XG59XG5cbmZ1bmN0aW9uIFN0eWxlKCl7XG5cdHZhciBpZHM9e30sZGVmYXVsdHM9e31cblx0T2JqZWN0LmFzc2lnbih0aGlzLHtcblx0XHRzZXREZWZhdWx0OiBmdW5jdGlvbihzdHlsZSl7XG5cdFx0XHRkZWZhdWx0c1tzdHlsZS50eXBlXT1zdHlsZVxuXHRcdH0sXG5cdFx0Z2V0RGVmYXVsdDogZnVuY3Rpb24odHlwZSl7XG5cdFx0XHRyZXR1cm4gZGVmYXVsdHNbdHlwZV1cblx0XHR9LFxuXHRcdGdldDogZnVuY3Rpb24oaWQpe1xuXHRcdFx0cmV0dXJuIGlkc1tpZF1cblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24oc3R5bGUsIGlkKXtcblx0XHRcdGlkc1tpZHx8c3R5bGUuaWRdPXN0eWxlXG5cdFx0fVxuXHR9KVxufVxuXG5jbGFzcyBQYXJzZUNvbnRleHR7XG5cdGNvbnN0cnVjdG9yKGN1cnJlbnQpe1xuXHRcdHRoaXMuY3VycmVudD1jdXJyZW50XG5cdH1cbn1cbiJdfQ==