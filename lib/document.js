'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./tool');

var _jszip = require('jszip');

var _jszip2 = _interopRequireDefault(_jszip);

var _part = require('./part');

var _part2 = _interopRequireDefault(_part);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Document = function () {
  function Document(parts, raw, props) {
    _classCallCheck(this, Document);

    this.parts = parts;
    this.raw = raw;
    this.props = props;
    var rels = this.rels = {};
    $tool.each(new _part2.default('', this).rels, function (id, rel) {
      rels[rel.type] = rel.target;
    });
    this.partMain = new _part2.default(this.rels['officeDocument'], this);
  }

  _createClass(Document, [{
    key: 'release',
    value: function release() {}
  }, {
    key: 'getPart',
    value: function getPart(name) {
      var part = this.parts[name] || (name = this.rels[name]) && this.parts[name];
      if (!part) return null;

      if (_part2.default.is(part)) return part;

      return this.parts[name] = new _part2.default(name, this);
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
  }, {
    key: 'parse',
    value: function parse(visitorFactories) {
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
  }, {
    key: 'vender',
    get: function get() {
      'Microsoft';
    }
  }, {
    key: 'product',
    get: function get() {
      return 'Office 2010';
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
     *  To create a factory function that to create a visitor specific to word model types
     *  factory: it could be following type
     *  	* function(wordModel, targetParent) :
     *  			wordModel: identified word model
     *  			targetParent: the result created by visitor of srcModel's parent model
     *  	* object: {'word model type name': Visitor Class}
     *  	* undefined: a default factory just to info type of word model in console
     *  opt: a global option to all visitor instances created by the factory, refered by visitor.options
     */

  }, {
    key: 'createVisitorFactory',
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
  }, {
    key: 'Visitor',
    get: function get() {
      return Visitor;
    }
  }]);

  return Document;
}();

/**
 *  A visitor to visit a type of word model
 *  srcModel: identified word model
 *  targetParent: the result created by visitor of srcModel's parent model
 */


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

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsInBhcnRzIiwicmF3IiwicHJvcHMiLCJyZWxzIiwiJHRvb2wiLCJlYWNoIiwiUGFydCIsImlkIiwicmVsIiwidHlwZSIsInRhcmdldCIsInBhcnRNYWluIiwibmFtZSIsInBhcnQiLCJpcyIsImNyYzMyIiwiX2RhdGEiLCJidWZmZXIiLCJKU1ppcCIsInN1cHBvcnQiLCJub2RlYnVmZmVyIiwidmlzaXRvckZhY3RvcmllcyIsImdldFBhcnQiLCJkb2N1bWVudEVsZW1lbnQiLCIkIiwiZm9yRWFjaCIsIngiLCJ2IiwidGV4dENvbnRlbnQiLCJ0cmltIiwibGVuZ3RoIiwibG9jYWxOYW1lIiwia2V5d29yZHMiLCJzcGxpdCIsIndvcmRYbWwiLCJkb2NQYXJzZXIiLCJwYXJlbnRQYXJzZXIiLCJfZmFjdG9yeSIsImEiLCJjb25zdHJ1Y3RvciIsIkZhY3RvcnkiLCJjcmVhdGUiLCJhcmd1bWVudHMiLCJkb2MiLCJmYWN0b3J5Iiwib3B0IiwiQW55IiwiVmlzaXRvciIsInJhd01hcCIsInNyY01vZGVsIiwidGFyZ2V0UGFyZW50IiwibWFwIiwidmlzaXRvciIsInQiLCJwb3AiLCJqb2luIiwiX3Nob3VsZElnbm9yZSIsIl9yYXciLCJjb252ZXJ0ZXIiLCJhcHBseSIsIm9wdGlvbnMiLCJ3aXRoIiwicGFyYW1pemVkRmFjdG9yeSIsImlucHV0RmlsZSIsIkRvY3VtZW50U2VsZiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicGFyc2UiLCJkYXRhIiwiZmlsdGVyIiwicGF0aCIsImZpbGUiLCJpc05vZGUiLCJyZXF1aXJlIiwicmVhZEZpbGUiLCJlcnJvciIsInJlcGxhY2UiLCJCbG9iIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJyZXN1bHQiLCJsYXN0TW9kaWZpZWQiLCJzaXplIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJwYXJlbnQiLCJjb25zb2xlIiwiaW5m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V0FiRCxNQWFPO0FBQ0xULGtCQUFNTCxTQUFOO0FBQ0Q7QUFDRixTQWxCRCxNQWtCTztBQUNMO0FBQ0EsY0FBSUEscUJBQXFCZSxJQUF6QixFQUErQjtBQUM3QixnQkFBSUMsU0FBUyxJQUFJQyxVQUFKLEVBQWI7QUFDQUQsbUJBQU9FLE1BQVAsR0FBZ0IsVUFBVUMsQ0FBVixFQUFhO0FBQzNCZCxvQkFBTWMsRUFBRXhFLE1BQUYsQ0FBU3lFLE1BQWYsRUFBdUI7QUFDckJ2RSxzQkFBTW1ELFVBQVVuRCxJQUFWLENBQWVpRSxPQUFmLENBQXVCLFVBQXZCLEVBQW1DLEVBQW5DLENBRGU7QUFFckJPLDhCQUFjckIsVUFBVXFCLFlBRkg7QUFHckJDLHNCQUFNdEIsVUFBVXNCO0FBSEssZUFBdkI7QUFLRCxhQU5EO0FBT0FOLG1CQUFPTyxpQkFBUCxDQUF5QnZCLFNBQXpCO0FBQ0QsV0FWRCxNQVVPO0FBQ0xLLGtCQUFNTCxTQUFOO0FBQ0Q7QUFDRjtBQUNGLE9BNUNNLENBQVA7QUE2Q0Q7Ozt3QkF2SW9CO0FBQ25CLGFBQU9oQixPQUFQO0FBQ0Q7Ozs7OztBQTRJSDs7Ozs7OztBQXROcUJoRCxRLENBaU5aeUMsTzs7Ozs7OzsyQkFDRU4sTyxFQUFTQyxTLEVBQVdDLFksRUFBYyxDQUFFOzs7Ozs7a0JBbE4xQnJDLFE7O0lBMk5mZ0QsTztBQUNKLG1CQUFZRSxRQUFaLEVBQXNCQyxZQUF0QixFQUFvQztBQUFBOztBQUNsQyxTQUFLRCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtzQyxNQUFMLEdBQWNyQyxZQUFkO0FBQ0Q7Ozs7NEJBQ087QUFDTnNDLGNBQVFDLElBQVIsQ0FBYSxLQUFLeEMsUUFBTCxDQUFjeEMsSUFBM0I7QUFDRDs7O29DQUNlO0FBQ2QsYUFBTyxLQUFQO0FBQ0QiLCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vdG9vbCc7XG5pbXBvcnQgSlNaaXAgZnJvbSAnanN6aXAnO1xuaW1wb3J0IFBhcnQgZnJvbSAnLi9wYXJ0JztcbiBcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50IHtcbiAgY29uc3RydWN0b3IocGFydHMsIHJhdywgcHJvcHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gICAgdGhpcy5yYXcgPSByYXc7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIHZhciByZWxzID0gKHRoaXMucmVscyA9IHt9KTtcbiAgICAkdG9vbC5lYWNoKG5ldyBQYXJ0KCcnLCB0aGlzKS5yZWxzLCBmdW5jdGlvbiAoaWQsIHJlbCkge1xuICAgICAgcmVsc1tyZWwudHlwZV0gPSByZWwudGFyZ2V0O1xuICAgIH0pO1xuICAgIHRoaXMucGFydE1haW4gPSBuZXcgUGFydCh0aGlzLnJlbHNbJ29mZmljZURvY3VtZW50J10sIHRoaXMpO1xuICB9XG4gIGdldCB2ZW5kZXIoKSB7XG4gICAgJ01pY3Jvc29mdCc7XG4gIH1cblxuICBnZXQgcHJvZHVjdCgpIHtcbiAgICByZXR1cm4gJ09mZmljZSAyMDEwJztcbiAgfVxuXG4gIHJlbGVhc2UoKSB7fVxuXG4gIGdldFBhcnQobmFtZSkge1xuICAgIHZhciBwYXJ0ID1cbiAgICAgIHRoaXMucGFydHNbbmFtZV0gfHwgKChuYW1lID0gdGhpcy5yZWxzW25hbWVdKSAmJiB0aGlzLnBhcnRzW25hbWVdKTtcbiAgICBpZiAoIXBhcnQpIHJldHVybiBudWxsO1xuXG4gICAgaWYgKFBhcnQuaXMocGFydCkpIHJldHVybiBwYXJ0O1xuXG4gICAgcmV0dXJuICh0aGlzLnBhcnRzW25hbWVdID0gbmV3IFBhcnQobmFtZSwgdGhpcykpO1xuICB9XG5cbiAgZ2V0SW1hZ2VQYXJ0KG5hbWUpIHtcbiAgICB2YXIgcGFydCA9IHRoaXMucGFydHNbbmFtZV07XG4gICAgdmFyIGNyYzMyID0gcGFydC5fZGF0YS5jcmMzMjtcbiAgICB2YXIgYnVmZmVyID0gcGFydFtcbiAgICAgIEpTWmlwLnN1cHBvcnQubm9kZWJ1ZmZlciA/ICdhc05vZGVCdWZmZXInIDogJ2FzQXJyYXlCdWZmZXInXG4gICAgXSgpO1xuICAgIGJ1ZmZlci5jcmMzMiA9IHBhcnQuX2RhdGEuY3JjMzIgPSBjcmMzMjtcbiAgICByZXR1cm4gYnVmZmVyO1xuICB9XG5cbiAgcGFyc2UodmlzaXRvckZhY3Rvcmllcyl7XG4gICAgdGhpcy5nZXRQYXJ0KCdjb3JlLXByb3BlcnRpZXMnKVxuICAgICAgLmRvY3VtZW50RWxlbWVudC4kKCdrZXl3b3JkcyxkZXNjcmlwdGlvbix0aXRsZScpXG4gICAgICAuZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICB2YXIgdiA9IHgudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICB2Lmxlbmd0aCAmJiAodGhpc1t4LmxvY2FsTmFtZV0gPSB2KTtcbiAgICAgIH0sIHRoaXMucHJvcHMpO1xuICAgIHR5cGVvZiB0aGlzLnByb3BzLmtleXdvcmRzICE9ICd1bmRlZmluZWQnICYmXG4gICAgICAodGhpcy5wcm9wcy5rZXl3b3JkcyA9IHRoaXMucHJvcHMua2V5d29yZHMuc3BsaXQoJywnKSk7XG5cbiAgICB0aGlzLmdldFBhcnQoJ2V4dGVuZGVkLXByb3BlcnRpZXMnKVxuICAgICAgLmRvY3VtZW50RWxlbWVudC4kKCdUZW1wbGF0ZScpXG4gICAgICAuZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICB2YXIgdiA9IHgudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICB2Lmxlbmd0aCAmJiAodGhpc1t4LmxvY2FsTmFtZV0gPSB2KTtcbiAgICAgIH0sIHRoaXMucHJvcHMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBjcmVhdGUgcGFyc2VyIGZvciBhIHdvcmQgbW9kZWxcbiAgICovXG4gIGZhY3Rvcnkod29yZFhtbCwgZG9jUGFyc2VyLCBwYXJlbnRQYXJzZXIpIHtcbiAgICBpZiAoIXRoaXMuX2ZhY3RvcnkpIHtcbiAgICAgIGxldCBhID0gbmV3IHRoaXMuY29uc3RydWN0b3IuRmFjdG9yeSgpO1xuICAgICAgdGhpcy5fZmFjdG9yeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGEuY3JlYXRlKC4uLmFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZmFjdG9yeSguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgc3RhdGljIGdldCBWaXNpdG9yKCkge1xuICAgIHJldHVybiBWaXNpdG9yO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKGRvYykge1xuICAgIGxldCB7IHBhcnRzLCByYXcsIHByb3BzIH0gPSBkb2M7XG4gICAgcmV0dXJuIG5ldyBEb2N1bWVudChwYXJ0cywgcmF3LCBwcm9wcyk7XG4gIH1cblxuICAvKipcbiAgICogIFRvIGNyZWF0ZSBhIGZhY3RvcnkgZnVuY3Rpb24gdGhhdCB0byBjcmVhdGUgYSB2aXNpdG9yIHNwZWNpZmljIHRvIHdvcmQgbW9kZWwgdHlwZXNcbiAgICogIGZhY3Rvcnk6IGl0IGNvdWxkIGJlIGZvbGxvd2luZyB0eXBlXG4gICAqICBcdCogZnVuY3Rpb24od29yZE1vZGVsLCB0YXJnZXRQYXJlbnQpIDpcbiAgICogIFx0XHRcdHdvcmRNb2RlbDogaWRlbnRpZmllZCB3b3JkIG1vZGVsXG4gICAqICBcdFx0XHR0YXJnZXRQYXJlbnQ6IHRoZSByZXN1bHQgY3JlYXRlZCBieSB2aXNpdG9yIG9mIHNyY01vZGVsJ3MgcGFyZW50IG1vZGVsXG4gICAqICBcdCogb2JqZWN0OiB7J3dvcmQgbW9kZWwgdHlwZSBuYW1lJzogVmlzaXRvciBDbGFzc31cbiAgICogIFx0KiB1bmRlZmluZWQ6IGEgZGVmYXVsdCBmYWN0b3J5IGp1c3QgdG8gaW5mbyB0eXBlIG9mIHdvcmQgbW9kZWwgaW4gY29uc29sZVxuICAgKiAgb3B0OiBhIGdsb2JhbCBvcHRpb24gdG8gYWxsIHZpc2l0b3IgaW5zdGFuY2VzIGNyZWF0ZWQgYnkgdGhlIGZhY3RvcnksIHJlZmVyZWQgYnkgdmlzaXRvci5vcHRpb25zXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlVmlzaXRvckZhY3RvcnkoZmFjdG9yeSwgb3B0KSB7XG4gICAgdmFyIEFueSA9IHRoaXMuVmlzaXRvcjtcbiAgICBzd2l0Y2ggKHR5cGVvZiBmYWN0b3J5KSB7XG4gICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgdmFyIHJhd01hcCA9IGZhY3Rvcnk7XG4gICAgICAgIGZhY3RvcnkgPSBmdW5jdGlvbiAoc3JjTW9kZWwsIHRhcmdldFBhcmVudCkge1xuICAgICAgICAgIHZhciBtYXAgPSBmYWN0b3J5Lm1hcDtcbiAgICAgICAgICBpZiAobWFwWycqJ10pIEFueSA9IG1hcFsnKiddO1xuICAgICAgICAgIHZhciBWaXNpdG9yID0gbWFwW3NyY01vZGVsLnR5cGVdLFxuICAgICAgICAgICAgdmlzaXRvcixcbiAgICAgICAgICAgIHQ7XG4gICAgICAgICAgaWYgKCFzcmNNb2RlbC50eXBlKTtcbiAgICAgICAgICBlbHNlIGlmIChWaXNpdG9yKSB2aXNpdG9yID0gbmV3IFZpc2l0b3Ioc3JjTW9kZWwsIHRhcmdldFBhcmVudCk7XG4gICAgICAgICAgZWxzZSBpZiAoKHQgPSBzcmNNb2RlbC50eXBlLnNwbGl0KCcuJykpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgdC5wb3AoKTtcbiAgICAgICAgICAgICAgaWYgKChWaXNpdG9yID0gbWFwW3Quam9pbignLicpXSkpIHtcbiAgICAgICAgICAgICAgICB2aXNpdG9yID0gbmV3IFZpc2l0b3Ioc3JjTW9kZWwsIHRhcmdldFBhcmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHQubGVuZ3RoID4gMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCF2aXNpdG9yKSB2aXNpdG9yID0gbmV3IEFueShzcmNNb2RlbCwgdGFyZ2V0UGFyZW50KTtcblxuICAgICAgICAgIGlmICghdmlzaXRvci5fc2hvdWxkSWdub3JlKCkpIHJldHVybiB2aXNpdG9yO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZhY3RvcnkubWFwID0gcmF3TWFwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIGZhY3RvcnkgPSBmdW5jdGlvbiAoc3JjTW9kZWwsIHRhcmdldFBhcmVudCkge1xuICAgICAgICAgIHJldHVybiBuZXcgQW55KHNyY01vZGVsLCB0YXJnZXRQYXJlbnQpO1xuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93ICd1bnN1cHBvcnRlZCBmYWN0b3J5JztcbiAgICB9XG5cbiAgICBpZiAob3B0KSB7XG4gICAgICB2YXIgX3JhdyA9IGZhY3Rvcnk7XG4gICAgICBmYWN0b3J5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29udmVydGVyID0gX3Jhdy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICBjb252ZXJ0ZXIgJiYgKGNvbnZlcnRlci5vcHRpb25zID0gb3B0KTtcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRlcjtcbiAgICAgIH07XG4gICAgICBpZiAodHlwZW9mIF9yYXcubWFwICE9ICd1bmRlZmluZWQnKSBmYWN0b3J5Lm1hcCA9IF9yYXcubWFwO1xuICAgIH1cblxuICAgIGZhY3Rvcnkud2l0aCA9IGZ1bmN0aW9uICh0YXJnZXRQYXJlbnQpIHtcbiAgICAgIGZ1bmN0aW9uIHBhcmFtaXplZEZhY3Rvcnkoc3JjTW9kZWwpIHtcbiAgICAgICAgcmV0dXJuIGZhY3Rvcnkoc3JjTW9kZWwsIHRhcmdldFBhcmVudCk7XG4gICAgICB9XG4gICAgICBwYXJhbWl6ZWRGYWN0b3J5LndpdGggPSBmYWN0b3J5LndpdGg7XG4gICAgICByZXR1cm4gcGFyYW1pemVkRmFjdG9yeTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZhY3Rvcnk7XG4gIH1cblxuICAgIC8qKlxuICAgKiAgYSBoZWxwZXIgdG8gbG9hZCBkb2N1bWVudCBmaWxlXG5cbiAgICogIEBwYXJhbSBpbnB1dEZpbGUge0ZpbGV9IC0gYSBodG1sIGlucHV0IGZpbGUsIG9yIG5vZGVqcyBmaWxlXG4gICAqICBAcmV0dXJuIHtQcm9taXNlfVxuICAgKi9cblxuICBzdGF0aWMgbG9hZChpbnB1dEZpbGUpIHtcbiAgICB2YXIgRG9jdW1lbnRTZWxmID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZnVuY3Rpb24gcGFyc2UoZGF0YSwgcHJvcHMgPSB7fSkge1xuICAgICAgICB2YXIgcmF3ID0gbmV3IEpTWmlwKGRhdGEpLFxuICAgICAgICAgIHBhcnRzID0ge307XG4gICAgICAgIHJhdy5maWx0ZXIoZnVuY3Rpb24gKHBhdGgsIGZpbGUpIHtcbiAgICAgICAgICBwYXJ0c1twYXRoXSA9IGZpbGU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXNvbHZlKG5ldyBEb2N1bWVudFNlbGYocGFydHMsIHJhdywgcHJvcHMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCR0b29sLmlzTm9kZSkge1xuICAgICAgICAvL25vZGVcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dEZpbGUgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAvL2ZpbGUgbmFtZVxuICAgICAgICAgIHJlcXVpcmUoJ2ZzJykucmVhZEZpbGUoaW5wdXRGaWxlLCBmdW5jdGlvbiAoZXJyb3IsIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChlcnJvcikgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgcGFyc2UoZGF0YSwge1xuICAgICAgICAgICAgICAgIG5hbWU6IGlucHV0RmlsZVxuICAgICAgICAgICAgICAgICAgLnNwbGl0KC9bXFwvXFxcXF0vKVxuICAgICAgICAgICAgICAgICAgLnBvcCgpXG4gICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwuZG9jeCQvaSwgJycpLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJzZShpbnB1dEZpbGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL2Jyb3dzZXJcbiAgICAgICAgaWYgKGlucHV0RmlsZSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHBhcnNlKGUudGFyZ2V0LnJlc3VsdCwge1xuICAgICAgICAgICAgICBuYW1lOiBpbnB1dEZpbGUubmFtZS5yZXBsYWNlKC9cXC5kb2N4JC9pLCAnJyksXG4gICAgICAgICAgICAgIGxhc3RNb2RpZmllZDogaW5wdXRGaWxlLmxhc3RNb2RpZmllZCxcbiAgICAgICAgICAgICAgc2l6ZTogaW5wdXRGaWxlLnNpemUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihpbnB1dEZpbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcnNlKGlucHV0RmlsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBGYWN0b3J5ID0gY2xhc3Mge1xuICAgIGNyZWF0ZSh3b3JkWG1sLCBkb2NQYXJzZXIsIHBhcmVudFBhcnNlcikge31cbiAgfTtcbn1cblxuLyoqXG4gKiAgQSB2aXNpdG9yIHRvIHZpc2l0IGEgdHlwZSBvZiB3b3JkIG1vZGVsXG4gKiAgc3JjTW9kZWw6IGlkZW50aWZpZWQgd29yZCBtb2RlbFxuICogIHRhcmdldFBhcmVudDogdGhlIHJlc3VsdCBjcmVhdGVkIGJ5IHZpc2l0b3Igb2Ygc3JjTW9kZWwncyBwYXJlbnQgbW9kZWxcbiAqL1xuY2xhc3MgVmlzaXRvciB7XG4gIGNvbnN0cnVjdG9yKHNyY01vZGVsLCB0YXJnZXRQYXJlbnQpIHtcbiAgICB0aGlzLnNyY01vZGVsID0gc3JjTW9kZWw7XG4gICAgdGhpcy5wYXJlbnQgPSB0YXJnZXRQYXJlbnQ7XG4gIH1cbiAgdmlzaXQoKSB7XG4gICAgY29uc29sZS5pbmZvKHRoaXMuc3JjTW9kZWwudHlwZSk7XG4gIH1cbiAgX3Nob3VsZElnbm9yZSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==