'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inline = require('./style/inline');

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Document = function (_require) {
  _inherits(Document, _require);

  function Document() {
    _classCallCheck(this, Document);

    return _possibleConstructorReturn(this, (Document.__proto__ || Object.getPrototypeOf(Document)).apply(this, arguments));
  }

  _createClass(Document, [{
    key: 'parse',
    value: function parse() {
      var _this2 = this;

      var visitors = _get(Document.prototype.__proto__ || Object.getPrototypeOf(Document.prototype), 'parse', this).apply(this, arguments);
      visitors.forEach(function (a) {
        return a.props = _this2.wDoc.props;
      });
      return visitors;
    }
  }, {
    key: '_getValidChildren',
    value: function _getValidChildren() {
      var children = [this.wDoc.getPart('styles').documentElement, this.wXml.$1('body')];
      var numbering = this.wDoc.getPart('word/numbering.xml');
      if (numbering) children.splice(1, 0, numbering.documentElement);
      return children;
    }

    /**
     * return color string, or
     * WeakMap:{bwmode,fillcolor,targetscreesize,color2,angle,focus,type}
     */

  }, {
    key: 'getBackgroundStyle',
    value: function getBackgroundStyle() {
      var pr = this.wXml.$1('>background');
      var stylePr = new _inline2.default.Properties(pr, this.wDoc, this);
      if (pr) {
        var fill = this.wXml.$1('fill');
        if (fill) {
          var attr = new WeakMap();
          fill.attributes.forEach(function (a) {
            return attr.set(a.localName, a.value);
          });
          fill.parentNode.attributes.forEach(function (a) {
            return attr.set(a.localName, a.value);
          });
          if (attr.has('fillcolor')) attr.fillcolor = stylePr.asColor(attr.get('fillcolor'));
          if (attr.has('color2')) attr.color2 = stylePr.asColor(attr.get('color2'));

          return attr;
        } else {
          return stylePr.color(pr);
        }
      }
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'document';
    }
  }]);

  return Document;
}(require('../model'));

exports.default = Document;
module.exports = exports['default'];