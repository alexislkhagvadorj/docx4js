'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./tool');

var _jszip = require('jszip');

var _jszip2 = _interopRequireDefault(_jszip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *  document parser
 *
 *  @example
 *  Document.load(file)
 *  	.then(doc=>doc.parse([visitors]))
 */
var Document = function () {
	function Document(parts, raw, props) {
		_classCallCheck(this, Document);

		this.parts = parts;
		this.raw = raw;
		this.props = props;
	}

	_createClass(Document, [{
		key: 'getPart',
		value: function getPart(name) {
			return this.parts[name];
		}
	}, {
		key: 'getImagePart',
		value: function getImagePart(name) {
			var part = this.parts[name];
			var crc32 = part._data.crc32;
			var buffer = part[_jszip2.default.support.nodebuffer ? 'asNodeBuffer' : 'asArrayBuffer']();
			buffer.crc32 = part._data.crc32 = crc32;
			return buffer;
		}

		/**
   *  parse docx with visitors created from visitor factories one by one
   */

	}, {
		key: 'parse',
		value: function parse(visitorFactories) {}

		/**
   * release resources after parse
   */

	}, {
		key: 'release',
		value: function release() {}

		/**
   *  create parser for a word model
   */

	}, {
		key: 'factory',
		value: function factory(wordXml, docParser, parentParser) {
			if (!this._factory) {
				var a = new this.constructor.Factory();
				this._factory = function () {
					return a.create.apply(a, arguments);
				};
			}
			return this._factory.apply(this, arguments);
		}
	}], [{
		key: 'clone',
		value: function clone(doc) {
			var parts = doc.parts,
			    raw = doc.raw,
			    props = doc.props;

			return new Document(parts, raw, props);
		}
		/**
   *  a helper to load document file
  	 *  @param inputFile {File} - a html input file, or nodejs file
   *  @return {Promise}
   */

	}, {
		key: 'load',
		value: function load(inputFile) {
			var DocumentSelf = this;
			return new Promise(function (resolve, reject) {
				function parse(data) {
					var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

					var raw = new _jszip2.default(data),
					    parts = {};
					raw.filter(function (path, file) {
						parts[path] = file;
					});
					resolve(new DocumentSelf(parts, raw, props));
				}

				if ($tool.isNode) {
					//node
					if (typeof inputFile == 'string') {
						//file name
						require('fs').readFile(inputFile, function (error, data) {
							if (error) reject(error);else if (data) {
								parse(data, { name: inputFile.split(/[\/\\]/).pop().replace(/\.docx$/i, '') });
							}
						});
					} else {
						parse(inputFile);
					}
				} else {
					//browser
					if (inputFile instanceof Blob) {
						var reader = new FileReader();
						reader.onload = function (e) {
							parse(e.target.result, {
								name: inputFile.name.replace(/\.docx$/i, ''),
								lastModified: inputFile.lastModified,
								size: inputFile.size
							});
						};
						reader.readAsArrayBuffer(inputFile);
					} else {
						parse(inputFile);
					}
				}
			});
		}
	}]);

	return Document;
}();

Document.Factory = function () {
	function _class() {
		_classCallCheck(this, _class);
	}

	_createClass(_class, [{
		key: 'create',
		value: function create(wordXml, docParser, parentParser) {}
	}]);

	return _class;
}();

exports.default = Document;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsInBhcnRzIiwicmF3IiwicHJvcHMiLCJuYW1lIiwicGFydCIsImNyYzMyIiwiX2RhdGEiLCJidWZmZXIiLCJKU1ppcCIsInN1cHBvcnQiLCJub2RlYnVmZmVyIiwidmlzaXRvckZhY3RvcmllcyIsIndvcmRYbWwiLCJkb2NQYXJzZXIiLCJwYXJlbnRQYXJzZXIiLCJfZmFjdG9yeSIsImEiLCJjb25zdHJ1Y3RvciIsIkZhY3RvcnkiLCJjcmVhdGUiLCJhcmd1bWVudHMiLCJkb2MiLCJpbnB1dEZpbGUiLCJEb2N1bWVudFNlbGYiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBhcnNlIiwiZGF0YSIsImZpbHRlciIsInBhdGgiLCJmaWxlIiwiJHRvb2wiLCJpc05vZGUiLCJyZXF1aXJlIiwicmVhZEZpbGUiLCJlcnJvciIsInNwbGl0IiwicG9wIiwicmVwbGFjZSIsIkJsb2IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZSIsInRhcmdldCIsInJlc3VsdCIsImxhc3RNb2RpZmllZCIsInNpemUiLCJyZWFkQXNBcnJheUJ1ZmZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7OztJQU9xQkEsUTtBQUNwQixtQkFBWUMsS0FBWixFQUFrQkMsR0FBbEIsRUFBc0JDLEtBQXRCLEVBQTRCO0FBQUE7O0FBQzNCLE9BQUtGLEtBQUwsR0FBV0EsS0FBWDtBQUNBLE9BQUtDLEdBQUwsR0FBU0EsR0FBVDtBQUNBLE9BQUtDLEtBQUwsR0FBV0EsS0FBWDtBQUNBOzs7OzBCQUNPQyxJLEVBQUs7QUFDWixVQUFPLEtBQUtILEtBQUwsQ0FBV0csSUFBWCxDQUFQO0FBQ0E7OzsrQkFDWUEsSSxFQUFLO0FBQ2pCLE9BQUlDLE9BQUssS0FBS0osS0FBTCxDQUFXRyxJQUFYLENBQVQ7QUFDQSxPQUFJRSxRQUFNRCxLQUFLRSxLQUFMLENBQVdE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LE1BVkQsTUFVTTtBQUNMSyxZQUFNTCxTQUFOO0FBQ0E7QUFDRDtBQUVELElBdENNLENBQVA7QUF1Q0E7Ozs7OztBQWhHbUJ2QixRLENBa0dibUIsTzs7Ozs7Ozt5QkFDQ04sTyxFQUFTQyxTLEVBQVdDLFksRUFBYSxDQUV2Qzs7Ozs7O2tCQXJHa0JmLFEiLCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3Rvb2xcIlxuaW1wb3J0IEpTWmlwIGZyb20gJ2pzemlwJ1xuXG4vKipcbiAqICBkb2N1bWVudCBwYXJzZXJcbiAqXG4gKiAgQGV4YW1wbGVcbiAqICBEb2N1bWVudC5sb2FkKGZpbGUpXG4gKiAgXHQudGhlbihkb2M9PmRvYy5wYXJzZShbdmlzaXRvcnNdKSlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnR7XG5cdGNvbnN0cnVjdG9yKHBhcnRzLHJhdyxwcm9wcyl7XG5cdFx0dGhpcy5wYXJ0cz1wYXJ0c1xuXHRcdHRoaXMucmF3PXJhd1xuXHRcdHRoaXMucHJvcHM9cHJvcHNcblx0fVxuXHRnZXRQYXJ0KG5hbWUpe1xuXHRcdHJldHVybiB0aGlzLnBhcnRzW25hbWVdXG5cdH1cblx0Z2V0SW1hZ2VQYXJ0KG5hbWUpe1xuXHRcdHZhciBwYXJ0PXRoaXMucGFydHNbbmFtZV1cblx0XHR2YXIgY3JjMzI9cGFydC5fZGF0YS5jcmMzMlxuXHRcdHZhciBidWZmZXI9cGFydFtKU1ppcC5zdXBwb3J0Lm5vZGVidWZmZXIgPyAnYXNOb2RlQnVmZmVyJyA6ICdhc0FycmF5QnVmZmVyJ10oKVxuXHRcdGJ1ZmZlci5jcmMzMj1wYXJ0Ll9kYXRhLmNyYzMyPWNyYzMyXG5cdFx0cmV0dXJuIGJ1ZmZlclxuXHR9XG5cblx0LyoqXG5cdCAqICBwYXJzZSBkb2N4IHdpdGggdmlzaXRvcnMgY3JlYXRlZCBmcm9tIHZpc2l0b3IgZmFjdG9yaWVzIG9uZSBieSBvbmVcblx0ICovXG5cdHBhcnNlKHZpc2l0b3JGYWN0b3JpZXMpe1xuXG5cdH1cblxuXHQvKipcblx0ICogcmVsZWFzZSByZXNvdXJjZXMgYWZ0ZXIgcGFyc2Vcblx0ICovXG5cdHJlbGVhc2UoKXtcblxuXHR9XG5cblx0LyoqXG5cdCAqICBjcmVhdGUgcGFyc2VyIGZvciBhIHdvcmQgbW9kZWxcblx0ICovXG5cdGZhY3Rvcnkod29yZFhtbCwgZG9jUGFyc2VyLCBwYXJlbnRQYXJzZXIpe1xuXHRcdGlmKCF0aGlzLl9mYWN0b3J5KXtcblx0XHRcdGxldCBhPW5ldyB0aGlzLmNvbnN0cnVjdG9yLkZhY3Rvcnlcblx0XHRcdHRoaXMuX2ZhY3Rvcnk9ZnVuY3Rpb24oKXtcblx0XHRcdFx0cmV0dXJuIGEuY3JlYXRlKC4uLmFyZ3VtZW50cylcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2ZhY3RvcnkoLi4uYXJndW1lbnRzKVxuXHR9XG5cblx0c3RhdGljIGNsb25lKGRvYyl7XG5cdFx0bGV0IHtwYXJ0cyxyYXcscHJvcHN9PWRvY1xuXHRcdHJldHVybiBuZXcgRG9jdW1lbnQocGFydHMscmF3LHByb3BzKVxuXHR9XG5cdC8qKlxuXHQgKiAgYSBoZWxwZXIgdG8gbG9hZCBkb2N1bWVudCBmaWxlXG5cblx0ICogIEBwYXJhbSBpbnB1dEZpbGUge0ZpbGV9IC0gYSBodG1sIGlucHV0IGZpbGUsIG9yIG5vZGVqcyBmaWxlXG5cdCAqICBAcmV0dXJuIHtQcm9taXNlfVxuXHQgKi9cblxuXHRzdGF0aWMgbG9hZChpbnB1dEZpbGUpe1xuXHRcdHZhciBEb2N1bWVudFNlbGY9dGhpc1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuXHRcdFx0ZnVuY3Rpb24gcGFyc2UoZGF0YSwgcHJvcHM9e30pe1xuXHRcdFx0XHR2YXIgcmF3PW5ldyBKU1ppcChkYXRhKSxwYXJ0cz17fVxuXHRcdFx0XHRyYXcuZmlsdGVyKGZ1bmN0aW9uKHBhdGgsZmlsZSl7XG5cdFx0XHRcdFx0cGFydHNbcGF0aF09ZmlsZVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRyZXNvbHZlKG5ldyBEb2N1bWVudFNlbGYocGFydHMscmF3LHByb3BzKSlcblx0XHRcdH1cblxuXG5cdFx0XHRpZigkdG9vbC5pc05vZGUpey8vbm9kZVxuXHRcdFx0XHRpZih0eXBlb2YgaW5wdXRGaWxlPT0nc3RyaW5nJyl7Ly9maWxlIG5hbWVcblx0XHRcdFx0XHRyZXF1aXJlKCdmcycpLnJlYWRGaWxlKGlucHV0RmlsZSxmdW5jdGlvbihlcnJvciwgZGF0YSl7XG5cdFx0XHRcdFx0XHRpZihlcnJvcilcblx0XHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHRcdGVsc2UgaWYoZGF0YSl7XG5cdFx0XHRcdFx0XHRcdHBhcnNlKGRhdGEsIHtuYW1lOmlucHV0RmlsZS5zcGxpdCgvW1xcL1xcXFxdLykucG9wKCkucmVwbGFjZSgvXFwuZG9jeCQvaSwnJyl9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1lbHNlIHtcblx0XHRcdFx0XHRwYXJzZShpbnB1dEZpbGUpXG5cdFx0XHRcdH1cblx0XHRcdH1lbHNley8vYnJvd3NlclxuXHRcdFx0XHRpZihpbnB1dEZpbGUgaW5zdGFuY2VvZiBCbG9iKXtcblx0XHRcdFx0XHR2YXIgcmVhZGVyPW5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0XHRcdFx0cmVhZGVyLm9ubG9hZD1mdW5jdGlvbihlKXtcblx0XHRcdFx0XHRcdHBhcnNlKGUudGFyZ2V0LnJlc3VsdCwge1xuXHRcdFx0XHRcdFx0XHRcdG5hbWU6aW5wdXRGaWxlLm5hbWUucmVwbGFjZSgvXFwuZG9jeCQvaSwnJyksXG5cdFx0XHRcdFx0XHRcdFx0bGFzdE1vZGlmaWVkOmlucHV0RmlsZS5sYXN0TW9kaWZpZWQsXG5cdFx0XHRcdFx0XHRcdFx0c2l6ZTppbnB1dEZpbGUuc2l6ZVxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoaW5wdXRGaWxlKTtcblx0XHRcdFx0fWVsc2Uge1xuXHRcdFx0XHRcdHBhcnNlKGlucHV0RmlsZSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fSlcblx0fVxuXG5cdHN0YXRpYyBGYWN0b3J5PWNsYXNzIHtcblx0XHRjcmVhdGUod29yZFhtbCwgZG9jUGFyc2VyLCBwYXJlbnRQYXJzZXIpe1xuXG5cdFx0fVxuXHR9XG59XG4iXX0=