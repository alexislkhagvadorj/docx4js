'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _document = require('../document');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function attr(node) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'w:val';

  return node ? node.attr(name) : undefined;
}

var Factory = function (_Base) {
  _inherits(Factory, _Base);

  function Factory() {
    _classCallCheck(this, Factory);

    return _possibleConstructorReturn(this, (Factory.__proto__ || Object.getPrototypeOf(Factory)).apply(this, arguments));
  }

  _createClass(Factory, [{
    key: 'create',
    value: function create(wXml, doc, parent, more) {
      var tag = wXml.localName,
          swap;

      if ('document' == tag) return new (require('./model/document'))(wXml, doc, parent);else if ('styles' == tag) return new (require('./model/documentStyles'))(wXml, doc);else if ('abstractNum' == tag) return new (require('./model/style/numberingDefinition'))(wXml, doc);else if ('num' == tag) return new (require('./model/style/list'))(wXml, doc);else if ('style' == tag) {
        switch (wXml.attr('w:type')) {
          case 'paragraph':
            return new (require('./model/style/paragraph'))(wXml, doc);
          case 'character':
            return new (require('./model/style/inline'))(wXml, doc);
          case 'table':
            return new (require('./model/style/table'))(wXml, doc);
          case 'numbering':
            return new (require('./model/style/numbering'))(wXml, doc);
        }
      } else if ('docDefaults' == tag) return new (require('./model/style/document'))(wXml, doc);else if ('body' == tag) return new (require('./model/body'))(wXml, doc, parent);else if ('p' == tag) {
        var styleId = attr(wXml.$1('>pPr>pStyle'), 'w:val'),
            style = doc.style.get(styleId);
        if (wXml.$1('>pPr>numPr') || style && style.getNumId() != -1) return new (require('./model/list'))(wXml, doc, parent);

        var outlineLvl = -1,
            tmp = void 0;
        if (style) outlineLvl = style.getOutlineLevel();else if (tmp = wXml.$1('>pPr>outlineLvl')) {
          tmp = parseInt(attr(tmp));
          outlineLvl = parseInt(tmp);
        }

        if (outlineLvl != -1) return new (require('./model/heading'))(wXml, doc, parent, outlineLvl);

        return new (require('./model/paragraph'))(wXml, doc, parent);
      } else if ('r' == tag) {
        var _style = doc.style.get(attr(wXml.$1('>rPr>rStyle'), 'w:val'));

        var _outlineLvl = -1,
            _tmp = void 0;
        if (_style) _outlineLvl = _style.getOutlineLevel();else if (_tmp = wXml.$1('>rPr>outlineLvl')) {
          _tmp = attr(_tmp);
          _outlineLvl = parseInt(_tmp);
        }

        if (_outlineLvl != -1) return new (require('./model/headingInline'))(wXml, doc, parent, _outlineLvl);

        if (wXml.childNodes.length == 1 || wXml.childNodes == 2 && wXml.firstChild.localName == 'rPr') {
          switch (wXml.lastChild.localName) {
            case 'fldChar':
              switch (wXml.lastChild.attr('w:fldCharType')) {
                case 'begin':
                  return new (require('./model/fieldBegin'))(wXml.lastChild, doc, parent);
                  break;
                case 'end':
                  return new (require('./model/fieldEnd'))(wXml.lastChild, doc, parent);
                  break;
                case 'separate':
                  return new (require('./model/fieldSeparate'))(wXml.lastChild, doc, parent);
                  break;
              }
            case 'instrText':
              return new (require('./model/fieldInstruct'))(wXml.lastChild, doc, parent);
          }
        }

        return new (require('./model/inline'))(wXml, doc, parent);
      } else if ('instrText' == tag) return new (require('./model/fieldInstruct'))(wXml, doc, parent);else if ('t' == tag) return new (require('./model/text'))(wXml, doc, parent);else if ('sym' == tag && wXml.parentNode.localName == 'r') return new (require('./model/symbol'))(wXml, doc, parent);else if ('softHyphen' == tag && wXml.parentNode.localName == 'r') return new (require('./model/softHyphen'))(wXml, doc, parent);else if ('noBreakHyphen' == tag && wXml.parentNode.localName == 'r') return new (require('./model/noBreakHyphen'))(wXml, doc, parent);else if ('tab' == tag && wXml.parentNode.localName == 'r') return new (require('./model/tab'))(wXml, doc, parent);else if ('fldSimple' == tag) return new (require('./model/fieldSimple'))(wXml, doc, parent);else if ('fldChar' == tag) {
        switch (wXml.attr('w:fldCharType')) {
          case 'begin':
            return new (require('./model/fieldBegin'))(wXml, doc, parent);
            break;
          case 'end':
            return new (require('./model/fieldEnd'))(wXml, doc, parent);
            break;
          case 'separate':
            return new (require('./model/fieldSeparate'))(wXml, doc, parent);
            break;
        }
      } else if ('tbl' == tag) return new (require('./model/table'))(wXml, doc, parent);else if ('tr' == tag) return new (require('./model/row'))(wXml, doc, parent);else if ('tc' == tag) return new (require('./model/cell'))(wXml, doc, parent);else if ('br' == tag) return new (require('./model/br'))(wXml, doc, parent);else if ('hyperlink' == tag && 'p' == wXml.parentNode.localName) return new (require('./model/hyperlink'))(wXml, doc, parent);else if ('AlternateContent' == tag) return new (require('./model/drawingAnchor'))(wXml, doc, parent);else if ('wsp' == tag) return new (require('./model/shape'))(wXml, doc, parent);else if ('inline' == tag) {
        var type = wXml.$1('>graphic>graphicData').attr('uri').split('/').pop();
        switch (type) {
          case 'picture':
            return new (require('./model/image'))(wXml, doc, parent);
          case 'diagram':
            return new (require('./model/diagram'))(wXml, doc, parent);
          case 'chart':
            return new (require('./model/chart'))(wXml, doc, parent);
          default:
            console.error('inline ' + type + ' is not suppored yet.');
        }
      } else if ('sdt' == tag) {
        var elBinding = wXml.$1('>sdtPr>dataBinding');
        if (elBinding) {
          //properties
          var path = attr(elBinding, 'w:xpath'),
              d = path.split(/[\/\:\[]/),
              name = (d.pop(), d.pop());
          return new (require('./model/documentProperty'))(wXml, doc, parent, name);
        } else {
          //controls
          var elType = wXml.$1('>sdtPr').$1('text, picture, docPartList, comboBox, dropDownList, date, checkbox');
          tag = elType ? elType.localName : 'richtext';

          var control = this.createControl.apply(this, [tag].concat(Array.prototype.slice.call(arguments)));

          if (control) return control;
        }
      } else if ('bookmarkStart' == tag) return new (require('./model/bookmarkStart'))(wXml, doc, parent);else if ('bookmarkEnd' == tag) return new (require('./model/bookmarkEnd'))(wXml, doc, parent);else if ('oMath' == tag) return new (require('./model/equation'))(wXml, doc, parent);else if ('object' == tag) return new (require('./model/OLE'))(wXml, doc, parent);else if ('sectPr' == tag) return new (require('./model/section'))(wXml, doc, parent);

      return new _model2.default(wXml, doc, parent);
    }
  }, {
    key: 'createControl',
    value: function createControl(type, wXml, doc, parent) {
      if ('text' == type) return new (require('./model/control/text'))(wXml, doc, parent);else if ('picture' == type) return new (require('./model/control/picture'))(wXml, doc, parent);else if ('docPartList' == type) return new (require('./model/control/gallery'))(wXml, doc, parent);else if ('comboBox' == type) return new (require('./model/control/combobox'))(wXml, doc, parent);else if ('dropDownList' == type) return new (require('./model/control/dropdown'))(wXml, doc, parent);else if ('date' == type) return new (require('./model/control/date'))(wXml, doc, parent);else if ('checkbox' == type) return new (require('./model/control/checkbox'))(wXml, doc, parent);else if ('richtext' == type) return new (require('./model/control/richtext'))(wXml, doc, parent);
    }
  }]);

  return Factory;
}(_document.Factory);

exports.default = Factory;
module.exports = exports['default'];