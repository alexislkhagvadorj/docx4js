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
                parse(data, {
                  name: inputFile.split(/[\/\\]/).pop().replace(/\.docx$/i, '')
                });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsInBhcnRzIiwicmF3IiwicHJvcHMiLCJuYW1lIiwicGFydCIsImNyYzMyIiwiX2RhdGEiLCJidWZmZXIiLCJKU1ppcCIsInN1cHBvcnQiLCJub2RlYnVmZmVyIiwidmlzaXRvckZhY3RvcmllcyIsIndvcmRYbWwiLCJkb2NQYXJzZXIiLCJwYXJlbnRQYXJzZXIiLCJfZmFjdG9yeSIsImEiLCJjb25zdHJ1Y3RvciIsIkZhY3RvcnkiLCJjcmVhdGUiLCJhcmd1bWVudHMiLCJkb2MiLCJpbnB1dEZpbGUiLCJEb2N1bWVudFNlbGYiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBhcnNlIiwiZGF0YSIsImZpbHRlciIsInBhdGgiLCJmaWxlIiwiJHRvb2wiLCJpc05vZGUiLCJyZXF1aXJlIiwicmVhZEZpbGUiLCJlcnJvciIsInNwbGl0IiwicG9wIiwicmVwbGFjZSIsIkJsb2IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZSIsInRhcmdldCIsInJlc3VsdCIsImxhc3RNb2RpZmllZCIsInNpemUiLCJyZWFkQXNBcnJheUJ1ZmZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7OztJQU9xQkEsUTtBQUNuQixvQkFBWUMsS0FBWixFQUFtQkMsR0FBbkIsRUFBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtGLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzRCQUNPQyxJLEVBQU07QUFDWixhQUFPLEtBQUtILEtBQUwsQ0FBV0csSUFBWCxDQUFQO0FBQ0Q7OztpQ0FDWUEsSSxFQUFNO0FBQ2pCLFVBQUlDLE9BQU8sS0FBS0osS0FBTCxDQUFXRyxJQUFYLENBQVg7QUFDQSxVQUFJRSxRQUFRRCxLQUFLRSxLQUFMLENBQVdE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LFNBQXpCO0FBQ0QsV0FWRCxNQVVPO0FBQ0xLLGtCQUFNTCxTQUFOO0FBQ0Q7QUFDRjtBQUNGLE9BNUNNLENBQVA7QUE2Q0Q7Ozs7OztBQXBHa0J2QixRLENBc0dabUIsTzs7Ozs7OzsyQkFDRU4sTyxFQUFTQyxTLEVBQVdDLFksRUFBYyxDQUFFOzs7Ozs7a0JBdkcxQmYsUSIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi90b29sJztcbmltcG9ydCBKU1ppcCBmcm9tICdqc3ppcCc7XG5cbi8qKlxuICogIGRvY3VtZW50IHBhcnNlclxuICpcbiAqICBAZXhhbXBsZVxuICogIERvY3VtZW50LmxvYWQoZmlsZSlcbiAqICBcdC50aGVuKGRvYz0+ZG9jLnBhcnNlKFt2aXNpdG9yc10pKVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCByYXcsIHByb3BzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICAgIHRoaXMucmF3ID0gcmF3O1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgfVxuICBnZXRQYXJ0KG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0c1tuYW1lXTtcbiAgfVxuICBnZXRJbWFnZVBhcnQobmFtZSkge1xuICAgIHZhciBwYXJ0ID0gdGhpcy5wYXJ0c1tuYW1lXTtcbiAgICB2YXIgY3JjMzIgPSBwYXJ0Ll9kYXRhLmNyYzMyO1xuICAgIHZhciBidWZmZXIgPSBwYXJ0W1xuICAgICAgSlNaaXAuc3VwcG9ydC5ub2RlYnVmZmVyID8gJ2FzTm9kZUJ1ZmZlcicgOiAnYXNBcnJheUJ1ZmZlcidcbiAgICBdKCk7XG4gICAgYnVmZmVyLmNyYzMyID0gcGFydC5fZGF0YS5jcmMzMiA9IGNyYzMyO1xuICAgIHJldHVybiBidWZmZXI7XG4gIH1cblxuICAvKipcbiAgICogIHBhcnNlIGRvY3ggd2l0aCB2aXNpdG9ycyBjcmVhdGVkIGZyb20gdmlzaXRvciBmYWN0b3JpZXMgb25lIGJ5IG9uZVxuICAgKi9cbiAgcGFyc2UodmlzaXRvckZhY3Rvcmllcykge31cblxuICAvKipcbiAgICogcmVsZWFzZSByZXNvdXJjZXMgYWZ0ZXIgcGFyc2VcbiAgICovXG4gIHJlbGVhc2UoKSB7fVxuXG4gIC8qKlxuICAgKiAgY3JlYXRlIHBhcnNlciBmb3IgYSB3b3JkIG1vZGVsXG4gICAqL1xuICBmYWN0b3J5KHdvcmRYbWwsIGRvY1BhcnNlciwgcGFyZW50UGFyc2VyKSB7XG4gICAgaWYgKCF0aGlzLl9mYWN0b3J5KSB7XG4gICAgICBsZXQgYSA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yLkZhY3RvcnkoKTtcbiAgICAgIHRoaXMuX2ZhY3RvcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhLmNyZWF0ZSguLi5hcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2ZhY3RvcnkoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShkb2MpIHtcbiAgICBsZXQgeyBwYXJ0cywgcmF3LCBwcm9wcyB9ID0gZG9jO1xuICAgIHJldHVybiBuZXcgRG9jdW1lbnQocGFydHMsIHJhdywgcHJvcHMpO1xuICB9XG4gIC8qKlxuXHQgKiAgYSBoZWxwZXIgdG8gbG9hZCBkb2N1bWVudCBmaWxlXG5cblx0ICogIEBwYXJhbSBpbnB1dEZpbGUge0ZpbGV9IC0gYSBodG1sIGlucHV0IGZpbGUsIG9yIG5vZGVqcyBmaWxlXG5cdCAqICBAcmV0dXJuIHtQcm9taXNlfVxuXHQgKi9cblxuICBzdGF0aWMgbG9hZChpbnB1dEZpbGUpIHtcbiAgICB2YXIgRG9jdW1lbnRTZWxmID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZnVuY3Rpb24gcGFyc2UoZGF0YSwgcHJvcHMgPSB7fSkge1xuICAgICAgICB2YXIgcmF3ID0gbmV3IEpTWmlwKGRhdGEpLFxuICAgICAgICAgIHBhcnRzID0ge307XG4gICAgICAgIHJhdy5maWx0ZXIoZnVuY3Rpb24gKHBhdGgsIGZpbGUpIHtcbiAgICAgICAgICBwYXJ0c1twYXRoXSA9IGZpbGU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXNvbHZlKG5ldyBEb2N1bWVudFNlbGYocGFydHMsIHJhdywgcHJvcHMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCR0b29sLmlzTm9kZSkge1xuICAgICAgICAvL25vZGVcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dEZpbGUgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAvL2ZpbGUgbmFtZVxuICAgICAgICAgIHJlcXVpcmUoJ2ZzJykucmVhZEZpbGUoaW5wdXRGaWxlLCBmdW5jdGlvbiAoZXJyb3IsIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChlcnJvcikgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgcGFyc2UoZGF0YSwge1xuICAgICAgICAgICAgICAgIG5hbWU6IGlucHV0RmlsZVxuICAgICAgICAgICAgICAgICAgLnNwbGl0KC9bXFwvXFxcXF0vKVxuICAgICAgICAgICAgICAgICAgLnBvcCgpXG4gICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwuZG9jeCQvaSwgJycpLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJzZShpbnB1dEZpbGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL2Jyb3dzZXJcbiAgICAgICAgaWYgKGlucHV0RmlsZSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHBhcnNlKGUudGFyZ2V0LnJlc3VsdCwge1xuICAgICAgICAgICAgICBuYW1lOiBpbnB1dEZpbGUubmFtZS5yZXBsYWNlKC9cXC5kb2N4JC9pLCAnJyksXG4gICAgICAgICAgICAgIGxhc3RNb2RpZmllZDogaW5wdXRGaWxlLmxhc3RNb2RpZmllZCxcbiAgICAgICAgICAgICAgc2l6ZTogaW5wdXRGaWxlLnNpemUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihpbnB1dEZpbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcnNlKGlucHV0RmlsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBGYWN0b3J5ID0gY2xhc3Mge1xuICAgIGNyZWF0ZSh3b3JkWG1sLCBkb2NQYXJzZXIsIHBhcmVudFBhcnNlcikge31cbiAgfTtcbn1cbiJdfQ==