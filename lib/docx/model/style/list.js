'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//<w:numbering><w:num w:numId="1">
var List = function (_require) {
  _inherits(List, _require);

  function List(wXml, wDoc, mParent) {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, wXml, wDoc, mParent));

    _this.id = _this.name = _this.constructor.asStyleId(wXml.attr('w:numId'));
    _this.wDoc.style.set(_this);
    _this.levels = new Map();
    return _this;
  }

  _createClass(List, [{
    key: '_iterate',
    value: function _iterate(f, factories, visitors) {
      for (var i = 0, children = this.wXml.$1('lvlOverride'), l = children.length, t; i < l; i++) {
        t = new this.constructor.Level(children[i], this.wDoc, this);
        this.levels.set(t.level, t);
        t.parse(visitors);
      }
    }
  }, {
    key: 'getParentStyle',
    value: function getParentStyle() {
      var definition = this.wDoc.style.get(require('./numberingDefinition').asStyleId(this.wXml.$2('abstractNumId').attr('w:val')));
      if (definition.link) {
        return this.wDoc.style.get(definition.link).asNumberingStyle().getParentStyle();
      } else return definition;
    }
  }, {
    key: 'getLabel',
    value: function getLabel() {
      var _getParentStyle;

      return (_getParentStyle = this.getParentStyle()).getLabel.apply(_getParentStyle, arguments);
    }
  }, {
    key: 'getNumId',
    value: function getNumId() {
      return this.wXml.attr('w:numId');
    }
  }], [{
    key: 'asStyleId',
    value: function asStyleId(numId) {
      return '_list' + numId;
    }
  }, {
    key: 'type',
    get: function get() {
      return 'style.list';
    }
  }]);

  return List;
}(require('../style'));

exports.default = List;
module.exports = exports['default'];