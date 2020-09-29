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

module.exports = exports['default'];