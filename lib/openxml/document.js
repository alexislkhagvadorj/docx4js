'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _part = require('./part');

var _part2 = _interopRequireDefault(_part);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Document = function (_require) {
	_inherits(Document, _require);

	function Document() {
		_classCallCheck(this, Document);

		var _this = _possibleConstructorReturn(this, (Document.__proto__ || Object.getPrototypeOf(Document)).apply(this, arguments));

		var rels = _this.rels = {};
		$tool.each(new _part2.default("", _this).rels, function (id, rel) {
			rels[rel.type] = rel.target;
		});
		_this.partMain = new _part2.default(_this.rels['officeDocument'], _this);
		return _this;
	}

	_createClass(Document, [{
		key: 'getPart',
		value: function getPart(name) {
			var part = this.parts[name] || (name = this.rels[name]) && this.parts[name];
			if (!part) return null;

			if (_part2.default.is(part)) return part;

			return this.parts[name] = new _part2.default(name, this);
		}
	}, {
		key: 'parse',
		value: function parse() {
			_get(Document.prototype.__proto__ || Object.getPrototypeOf(Document.prototype), 'parse', this).apply(this, arguments);
			this.getPart('core-properties').documentElement.$('keywords,description,title').forEach(function (x) {
				var v = x.textContent.trim();
				v.length && (this[x.localName] = v);
			}, this.props);
			typeof this.props.keywords != 'undefined' && (this.props.keywords = this.props.keywords.split(','));

			this.getPart('extended-properties').documentElement.$('Template').forEach(function (x) {
				var v = x.textContent.trim();
				v.length && (this[x.localName] = v);
			}, this.props);
		}
	}, {
		key: 'vender',
		get: function get() {
			"Microsoft";
		}
	}, {
		key: 'product',
		get: function get() {
			return 'Office 2010';
		}
	}], [{
		key: 'createVisitorFactory',


		/**
   *  To create a factory function that to create a visitor specific to word model types
   *  factory: it could be following type
   *  	* function(wordModel, targetParent) :
   *  			wordModel: identified word model
   *  			targetParent: the result created by visitor of srcModel's parent model
   *  	* object: {'word model type name': Visitor Class}
   *  	* undefined: a default factory just to info type of word model in console
   *  opt: a global option to all visitor instances created by the factory, refered by visitor.options
   */
		value: function createVisitorFactory(_factory, opt) {
			var Any = this.Visitor;
			switch (typeof _factory === 'undefined' ? 'undefined' : _typeof(_factory)) {
				case 'function':
					break;
				case 'object':
					var rawMap = _factory;
					_factory = function factory(srcModel, targetParent) {
						var map = _factory.map;
						if (map['*']) Any = map['*'];
						var Visitor = map[srcModel.type],
						    visitor,
						    t;
						if (!srcModel.type) ;else if (Visitor) visitor = new Visitor(srcModel, targetParent);else if ((t = srcModel.type.split('.')).length > 1) {
							do {
								t.pop();
								if (Visitor = map[t.join('.')]) {
									visitor = new Visitor(srcModel, targetParent);
									break;
								}
							} while (t.length > 1);
						}

						if (!visitor) visitor = new Any(srcModel, targetParent);

						if (!visitor._shouldIgnore()) return visitor;
					};

					_factory.map = rawMap;
					break;
				case 'undefined':
					_factory = function _factory(srcModel, targetParent) {
						return new Any(srcModel, targetParent);
					};
					break;
				default:
					throw 'unsupported factory';
			}

			if (opt) {
				var _raw = _factory;
				_factory = function _factory() {
					var converter = _raw.apply(null, arguments);
					converter && (converter.options = opt);
					return converter;
				};
				if (typeof _raw.map != 'undefined') _factory.map = _raw.map;
			}

			_factory.with = function (targetParent) {
				function paramizedFactory(srcModel) {
					return _factory(srcModel, targetParent);
				}
				paramizedFactory.with = _factory.with;
				return paramizedFactory;
			};

			return _factory;
		}
	}, {
		key: 'Visitor',
		get: function get() {
			return Visitor;
		}
	}]);

	return Document;
}(require('../document'));

/**
 *  A visitor to visit a type of word model
 *  srcModel: identified word model
 *  targetParent: the result created by visitor of srcModel's parent model
 */


exports.default = Document;

var Visitor = function () {
	function Visitor(srcModel, targetParent) {
		_classCallCheck(this, Visitor);

		this.srcModel = srcModel;
		this.parent = targetParent;
	}

	_createClass(Visitor, [{
		key: 'visit',
		value: function visit() {
			console.info(this.srcModel.type);
		}
	}, {
		key: '_shouldIgnore',
		value: function _shouldIgnore() {
			return false;
		}
	}]);

	return Visitor;
}();

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVueG1sL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIkRvY3VtZW50IiwiYXJndW1lbnRzIiwicmVscyIsIiR0b29sIiwiZWFjaCIsIlBhcnQiLCJpZCIsInJlbCIsInR5cGUiLCJ0YXJnZXQiLCJwYXJ0TWFpbiIsIm5hbWUiLCJwYXJ0IiwicGFydHMiLCJpcyIsImdldFBhcnQiLCJkb2N1bWVudEVsZW1lbnQiLCIkIiwiZm9yRWFjaCIsIngiLCJ2IiwidGV4dENvbnRlbnQiLCJ0cmltIiwibGVuZ3RoIiwibG9jYWxOYW1lIiwicHJvcHMiLCJrZXl3b3JkcyIsInNwbGl0IiwiZmFjdG9yeSIsIm9wdCIsIkFueSIsIlZpc2l0b3IiLCJyYXdNYXAiLCJzcmNNb2RlbCIsInRhcmdldFBhcmVudCIsIm1hcCIsInZpc2l0b3IiLCJ0IiwicG9wIiwiam9pbiIsIl9zaG91bGRJZ25vcmUiLCJfcmF3IiwiY29udmVydGVyIiwiYXBwbHkiLCJvcHRpb25zIiwid2l0aCIsInBhcmFtaXplZEZhY3RvcnkiLCJyZXF1aXJlIiwicGFyZW50IiwiY29uc29sZSIsImluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQUNwQixxQkFBYTtBQUFBOztBQUFBLG1IQUNIQyxTQURHOztBQUVaLE1BQUlDLE9BQUssTUFBS0EsSUFBTCxHQUFVLEVBQW5CO0FBQ0FDLFFBQU1DLElBQU4sQ0FBVyxJQUFJQyxjQUFKLENBQVMsRUFBVCxTQUFrQkgsSUFBN0IsRUFBa0MsVUFBU0ksRUFBVCxFQUFZQyxHQUFaLEVBQWdCO0FBQ2pETCxRQUFLSyxJQUFJQyxJQUFULElBQWVELElBQUlFLE1BQW5CO0FBQ0EsR0FGRDtBQUdBLFFBQUtDLFFBQUwsR0FBYyxJQUFJTCxjQUFKLENBQVMsTUFBS0gsSUFBTCxDQUFVLGdCQUFWLENBQVQsUUFBZDtBQU5ZO0FBT1o7Ozs7MEJBS09TLEksRUFBSztBQUNaLE9BQUlDLE9BQUssS0FB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QUtqQixRQUFMLENBQWN6QixJQUEzQjtBQUNBOzs7a0NBQ2M7QUFDZCxVQUFPLEtBQVA7QUFDQSIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXJ0IGZyb20gJy4vcGFydCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnQgZXh0ZW5kcyByZXF1aXJlKCcuLi9kb2N1bWVudCcpe1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cylcblx0XHR2YXIgcmVscz10aGlzLnJlbHM9e31cblx0XHQkdG9vbC5lYWNoKG5ldyBQYXJ0KFwiXCIsdGhpcykucmVscyxmdW5jdGlvbihpZCxyZWwpe1xuXHRcdFx0cmVsc1tyZWwudHlwZV09cmVsLnRhcmdldFxuXHRcdH0pXG5cdFx0dGhpcy5wYXJ0TWFpbj1uZXcgUGFydCh0aGlzLnJlbHNbJ29mZmljZURvY3VtZW50J10sdGhpcylcblx0fVxuXHRnZXQgdmVuZGVyKCl7XCJNaWNyb3NvZnRcIn1cblxuXHRnZXQgcHJvZHVjdCgpe3JldHVybiAnT2ZmaWNlIDIwMTAnfVxuXG5cdGdldFBhcnQobmFtZSl7XG5cdFx0dmFyIHBhcnQ9dGhpcy5wYXJ0c1tuYW1lXSB8fCAoKG5hbWU9dGhpcy5yZWxzW25hbWVdKSYmdGhpcy5wYXJ0c1tuYW1lXSlcblx0XHRpZighcGFydClcblx0XHRcdHJldHVybiBudWxsXG5cblx0XHRpZihQYXJ0LmlzKHBhcnQpKVxuXHRcdFx0cmV0dXJuIHBhcnRcblxuXHRcdHJldHVybiB0aGlzLnBhcnRzW25hbWVdPW5ldyBQYXJ0KG5hbWUsdGhpcylcblx0fVxuXHRwYXJzZSgpe1xuXHRcdHN1cGVyLnBhcnNlKC4uLmFyZ3VtZW50cylcblx0XHR0aGlzLmdldFBhcnQoJ2NvcmUtcHJvcGVydGllcycpLmRvY3VtZW50RWxlbWVudFxuXHRcdC4kKCdrZXl3b3JkcyxkZXNjcmlwdGlvbix0aXRsZScpLmZvckVhY2goZnVuY3Rpb24oeCl7XG5cdFx0XHR2YXIgdj14LnRleHRDb250ZW50LnRyaW0oKTtcblx0XHRcdHYubGVuZ3RoICYmICh0aGlzW3gubG9jYWxOYW1lXT12KVxuXHRcdH0sdGhpcy5wcm9wcylcblx0XHR0eXBlb2YgdGhpcy5wcm9wcy5rZXl3b3JkcyE9J3VuZGVmaW5lZCcgJiYgKHRoaXMucHJvcHMua2V5d29yZHM9dGhpcy5wcm9wcy5rZXl3b3Jkcy5zcGxpdCgnLCcpKTtcblxuXHRcdHRoaXMuZ2V0UGFydCgnZXh0ZW5kZWQtcHJvcGVydGllcycpLmRvY3VtZW50RWxlbWVudFxuXHRcdC4kKCdUZW1wbGF0ZScpLmZvckVhY2goZnVuY3Rpb24oeCl7XG5cdFx0XHR2YXIgdj14LnRleHRDb250ZW50LnRyaW0oKTtcblx0XHRcdHYubGVuZ3RoICYmICh0aGlzW3gubG9jYWxOYW1lXT12KVxuXHRcdH0sdGhpcy5wcm9wcylcblx0fVxuXG5cdHN0YXRpYyBnZXQgVmlzaXRvcigpeyByZXR1cm4gVmlzaXRvcn1cblxuXHQvKipcblx0ICogIFRvIGNyZWF0ZSBhIGZhY3RvcnkgZnVuY3Rpb24gdGhhdCB0byBjcmVhdGUgYSB2aXNpdG9yIHNwZWNpZmljIHRvIHdvcmQgbW9kZWwgdHlwZXNcblx0ICogIGZhY3Rvcnk6IGl0IGNvdWxkIGJlIGZvbGxvd2luZyB0eXBlXG5cdCAqICBcdCogZnVuY3Rpb24od29yZE1vZGVsLCB0YXJnZXRQYXJlbnQpIDpcblx0ICogIFx0XHRcdHdvcmRNb2RlbDogaWRlbnRpZmllZCB3b3JkIG1vZGVsXG5cdCAqICBcdFx0XHR0YXJnZXRQYXJlbnQ6IHRoZSByZXN1bHQgY3JlYXRlZCBieSB2aXNpdG9yIG9mIHNyY01vZGVsJ3MgcGFyZW50IG1vZGVsXG5cdCAqICBcdCogb2JqZWN0OiB7J3dvcmQgbW9kZWwgdHlwZSBuYW1lJzogVmlzaXRvciBDbGFzc31cblx0ICogIFx0KiB1bmRlZmluZWQ6IGEgZGVmYXVsdCBmYWN0b3J5IGp1c3QgdG8gaW5mbyB0eXBlIG9mIHdvcmQgbW9kZWwgaW4gY29uc29sZVxuXHQgKiAgb3B0OiBhIGdsb2JhbCBvcHRpb24gdG8gYWxsIHZpc2l0b3IgaW5zdGFuY2VzIGNyZWF0ZWQgYnkgdGhlIGZhY3RvcnksIHJlZmVyZWQgYnkgdmlzaXRvci5vcHRpb25zXG5cdCAqL1xuXHRzdGF0aWMgY3JlYXRlVmlzaXRvckZhY3RvcnkoZmFjdG9yeSwgb3B0KXtcblx0XHR2YXIgQW55PXRoaXMuVmlzaXRvclxuXHRcdHN3aXRjaCh0eXBlb2YgZmFjdG9yeSl7XG5cdFx0Y2FzZSAnZnVuY3Rpb24nOlxuXHRcdFx0YnJlYWtcblx0XHRjYXNlICdvYmplY3QnOlxuXHRcdFx0dmFyIHJhd01hcD1mYWN0b3J5O1xuXHRcdFx0ZmFjdG9yeT1mdW5jdGlvbihzcmNNb2RlbCwgdGFyZ2V0UGFyZW50KXtcblx0XHRcdFx0dmFyIG1hcD1mYWN0b3J5Lm1hcFxuXHRcdFx0XHRpZihtYXBbJyonXSlcblx0XHRcdFx0XHRBbnk9bWFwWycqJ107XG5cdFx0XHRcdHZhciBWaXNpdG9yPW1hcFtzcmNNb2RlbC50eXBlXSwgdmlzaXRvciwgdDtcblx0XHRcdFx0aWYoIXNyY01vZGVsLnR5cGUpXG5cdFx0XHRcdFx0O1xuXHRcdFx0XHRlbHNlIGlmKFZpc2l0b3IpXG5cdFx0XHRcdFx0dmlzaXRvcj1uZXcgVmlzaXRvcihzcmNNb2RlbCwgdGFyZ2V0UGFyZW50KVxuXHRcdFx0XHRlbHNlIGlmKCh0PXNyY01vZGVsLnR5cGUuc3BsaXQoJy4nKSkubGVuZ3RoPjEpe1xuXHRcdFx0XHRcdGRve1xuXHRcdFx0XHRcdFx0dC5wb3AoKVxuXHRcdFx0XHRcdFx0aWYoKFZpc2l0b3I9bWFwW3Quam9pbignLicpXSkpe1xuXHRcdFx0XHRcdFx0XHR2aXNpdG9yPW5ldyBWaXNpdG9yKHNyY01vZGVsLCB0YXJnZXRQYXJlbnQpXG5cdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fXdoaWxlKHQubGVuZ3RoPjEpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZighdmlzaXRvcilcblx0XHRcdFx0XHR2aXNpdG9yPW5ldyBBbnkoc3JjTW9kZWwsIHRhcmdldFBhcmVudCk7XG5cblx0XHRcdFx0aWYoIXZpc2l0b3IuX3Nob3VsZElnbm9yZSgpKVxuXHRcdFx0XHRcdHJldHVybiB2aXNpdG9yXG5cdFx0XHR9XG5cblx0XHRcdGZhY3RvcnkubWFwPXJhd01hcFxuXHRcdFx0YnJlYWtcblx0XHRjYXNlICd1bmRlZmluZWQnOlxuXHRcdFx0ZmFjdG9yeT1mdW5jdGlvbihzcmNNb2RlbCwgdGFyZ2V0UGFyZW50KXtcblx0XHRcdFx0cmV0dXJuIG5ldyBBbnkoc3JjTW9kZWwsIHRhcmdldFBhcmVudClcblx0XHRcdH1cblx0XHRcdGJyZWFrXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHRocm93ICd1bnN1cHBvcnRlZCBmYWN0b3J5J1xuXHRcdH1cblxuXHRcdGlmKG9wdCl7XG5cdFx0XHR2YXIgX3Jhdz1mYWN0b3J5XG5cdFx0XHRmYWN0b3J5PWZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciBjb252ZXJ0ZXI9X3Jhdy5hcHBseShudWxsLGFyZ3VtZW50cylcblx0XHRcdFx0XHRjb252ZXJ0ZXIgJiYgKGNvbnZlcnRlci5vcHRpb25zPW9wdCk7XG5cdFx0XHRcdHJldHVybiBjb252ZXJ0ZXJcblx0XHRcdH1cblx0XHRcdGlmKHR5cGVvZihfcmF3Lm1hcCkhPSd1bmRlZmluZWQnKVxuXHRcdFx0XHRmYWN0b3J5Lm1hcD1fcmF3Lm1hcFxuXHRcdH1cblxuXHRcdGZhY3Rvcnkud2l0aD1mdW5jdGlvbih0YXJnZXRQYXJlbnQpe1xuXHRcdFx0ZnVuY3Rpb24gcGFyYW1pemVkRmFjdG9yeShzcmNNb2RlbCl7XG5cdFx0XHRcdHJldHVybiBmYWN0b3J5KHNyY01vZGVsLCB0YXJnZXRQYXJlbnQpXG5cdFx0XHR9XG5cdFx0XHRwYXJhbWl6ZWRGYWN0b3J5LndpdGg9ZmFjdG9yeS53aXRoXG5cdFx0XHRyZXR1cm4gcGFyYW1pemVkRmFjdG9yeVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWN0b3J5XG5cdH1cbn1cblxuLyoqXG4gKiAgQSB2aXNpdG9yIHRvIHZpc2l0IGEgdHlwZSBvZiB3b3JkIG1vZGVsXG4gKiAgc3JjTW9kZWw6IGlkZW50aWZpZWQgd29yZCBtb2RlbFxuICogIHRhcmdldFBhcmVudDogdGhlIHJlc3VsdCBjcmVhdGVkIGJ5IHZpc2l0b3Igb2Ygc3JjTW9kZWwncyBwYXJlbnQgbW9kZWxcbiAqL1xuY2xhc3MgVmlzaXRvcntcblx0Y29uc3RydWN0b3Ioc3JjTW9kZWwsIHRhcmdldFBhcmVudCl7XG5cdFx0dGhpcy5zcmNNb2RlbD1zcmNNb2RlbFxuXHRcdHRoaXMucGFyZW50PXRhcmdldFBhcmVudFxuXHR9XG5cdHZpc2l0KCl7XG5cdFx0Y29uc29sZS5pbmZvKHRoaXMuc3JjTW9kZWwudHlwZSlcblx0fVxuXHRfc2hvdWxkSWdub3JlKCl7XG5cdFx0cmV0dXJuIGZhbHNlXG5cdH1cbn1cbiJdfQ==