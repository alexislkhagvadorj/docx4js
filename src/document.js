import './tool';
import JSZip from 'jszip';
import Part from './part';
 
export default class Document {
  constructor(parts, raw, props) {
    this.parts = parts;
    this.raw = raw;
    this.props = props;
    var rels = (this.rels = {});
    $tool.each(new Part('', this).rels, function (id, rel) {
      rels[rel.type] = rel.target;
    });
    this.partMain = new Part(this.rels['officeDocument'], this);
  }
  get vender() {
    'Microsoft';
  }

  get product() {
    return 'Office 2010';
  }

  release() {}

  getPart(name) {
    var part =
      this.parts[name] || ((name = this.rels[name]) && this.parts[name]);
    if (!part) return null;

    if (Part.is(part)) return part;

    return (this.parts[name] = new Part(name, this));
  }

  getImagePart(name) {
    var part = this.parts[name];
    var crc32 = part._data.crc32;
    var buffer = part[
      JSZip.support.nodebuffer ? 'asNodeBuffer' : 'asArrayBuffer'
    ]();
    buffer.crc32 = part._data.crc32 = crc32;
    return buffer;
  }

  parse(visitorFactories){
    this.getPart('core-properties')
      .documentElement.$('keywords,description,title')
      .forEach(function (x) {
        var v = x.textContent.trim();
        v.length && (this[x.localName] = v);
      }, this.props);
    typeof this.props.keywords != 'undefined' &&
      (this.props.keywords = this.props.keywords.split(','));

    this.getPart('extended-properties')
      .documentElement.$('Template')
      .forEach(function (x) {
        var v = x.textContent.trim();
        v.length && (this[x.localName] = v);
      }, this.props);
  }

  /**
   *  create parser for a word model
   */
  factory(wordXml, docParser, parentParser) {
    if (!this._factory) {
      let a = new this.constructor.Factory();
      this._factory = function () {
        return a.create(...arguments);
      };
    }
    return this._factory(...arguments);
  }

  static get Visitor() {
    return Visitor;
  }

  static clone(doc) {
    let { parts, raw, props } = doc;
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
  static createVisitorFactory(factory, opt) {
    var Any = this.Visitor;
    switch (typeof factory) {
      case 'function':
        break;
      case 'object':
        var rawMap = factory;
        factory = function (srcModel, targetParent) {
          var map = factory.map;
          if (map['*']) Any = map['*'];
          var Visitor = map[srcModel.type],
            visitor,
            t;
          if (!srcModel.type);
          else if (Visitor) visitor = new Visitor(srcModel, targetParent);
          else if ((t = srcModel.type.split('.')).length > 1) {
            do {
              t.pop();
              if ((Visitor = map[t.join('.')])) {
                visitor = new Visitor(srcModel, targetParent);
                break;
              }
            } while (t.length > 1);
          }

          if (!visitor) visitor = new Any(srcModel, targetParent);

          if (!visitor._shouldIgnore()) return visitor;
        };

        factory.map = rawMap;
        break;
      case 'undefined':
        factory = function (srcModel, targetParent) {
          return new Any(srcModel, targetParent);
        };
        break;
      default:
        throw 'unsupported factory';
    }

    if (opt) {
      var _raw = factory;
      factory = function () {
        var converter = _raw.apply(null, arguments);
        converter && (converter.options = opt);
        return converter;
      };
      if (typeof _raw.map != 'undefined') factory.map = _raw.map;
    }

    factory.with = function (targetParent) {
      function paramizedFactory(srcModel) {
        return factory(srcModel, targetParent);
      }
      paramizedFactory.with = factory.with;
      return paramizedFactory;
    };

    return factory;
  }

    /**
   *  a helper to load document file

   *  @param inputFile {File} - a html input file, or nodejs file
   *  @return {Promise}
   */

  static load(inputFile) {
    var DocumentSelf = this;
    return new Promise((resolve, reject) => {
      function parse(data, props = {}) {
        var raw = new JSZip(data),
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
            size: inputFile.size,
          });
        };
        reader.readAsArrayBuffer(inputFile);
      } else {
        parse(inputFile);
      }
    });
  }

  static Factory = class {
    create(wordXml, docParser, parentParser) {}
  };
}

/**
 *  A visitor to visit a type of word model
 *  srcModel: identified word model
 *  targetParent: the result created by visitor of srcModel's parent model
 */
class Visitor {
  constructor(srcModel, targetParent) {
    this.srcModel = srcModel;
    this.parent = targetParent;
  }
  visit() {
    console.info(this.srcModel.type);
  }
  _shouldIgnore() {
    return false;
  }
}
