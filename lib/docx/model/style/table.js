'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _style = require('../style');

var _style2 = _interopRequireDefault(_style);

var _paragraph = require('./paragraph');

var _paragraph2 = _interopRequireDefault(_paragraph);

var _inline = require('./inline');

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_Style) {
  _inherits(Table, _Style);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
  }

  _createClass(Table, [{
    key: 'parse',
    value: function parse(factories) {
      _get(Table.prototype.__proto__ || Object.getPrototypeOf(Table.prototype), 'parse', this).apply(this, arguments);

      var TableStyle = this.constructor;
      for (var styles = this.wXml.$('tblStylePr'), len = styles.length, i = 0; i < len; i++) {
        var model = new TableStyle(styles[i], this.wDoc, this);
        model.id = this.id;
        model.parse(factories);
      }
    }
  }, {
    key: '_iterate',
    value: function _iterate(f, factories, visitors) {
      var pr = null;
      (pr = this.wXml.$1('>tblPr:not(:empty)')) && new this.constructor.Properties(pr, this.wDoc, this).parse(visitors);
      (pr = this.wXml.$1('>trPr:not(:empty)')) && new this.constructor.RowProperties(pr, this.wDoc, this).parse(visitors);
      (pr = this.wXml.$1('>tcPr:not(:empty)')) && new this.constructor.CellProperties(pr, this.wDoc, this).parse(visitors);
      (pr = this.wXml.$1('>pPr:not(:empty)')) && new _paragraph2.default.Properties(pr, this.wDoc, this).parse(visitors);
      (pr = this.wXml.$1('>rPr:not(:empty)')) && new _inline2.default.Properties(pr, this.wDoc, this).parse(visitors);
    }
  }, {
    key: 'getTarget',
    value: function getTarget() {
      return this.wXml.attr('w:type');
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'style.table';
    }
  }]);

  return Table;
}(_style2.default);

exports.default = Table;


Table.Properties = function (_Style$Properties) {
  _inherits(Properties, _Style$Properties);

  function Properties() {
    _classCallCheck(this, Properties);

    return _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));
  }

  _createClass(Properties, [{
    key: 'tblBorders',
    value: function tblBorders(x) {
      var value = {};
      for (var borders = x.childNodes, border, i = 0, len = borders.length; i < len; i++) {
        if (borders[i].nodeType !== 1) continue;
        border = value[(border = borders[i]).localName] = this.asObject(border);
        border.sz && (border.sz = border.sz / 8);
        border.color && (border.color = this.asColor(border.color));
      }
      return value;
    }
  }, {
    key: 'tblCellMar',
    value: function tblCellMar(x) {
      var value = {};
      for (var borders = x.childNodes, i = 0, len = borders.length, v; i < len; i++) {
        borders[i].nodeType == 1 && (value[borders[i].localName] = this.pt2Px(this.asPt(borders[i].attr('w:w'))));
      }return value;
    }
  }, {
    key: 'tblCellSpacing',
    value: function tblCellSpacing(x) {
      return this.pt2Px(this.asPt(x.attr('w:val')));
    }
  }, {
    key: 'tblLook',
    value: function tblLook(x) {
      return this.asObject(x, function (x) {
        return parseInt(x);
      });
    }
  }, {
    key: 'tblStyleRowBandSize',
    value: function tblStyleRowBandSize(x) {
      return parseInt(x.attr('w:val'));
    }
  }, {
    key: 'tblStyleColBandSize',
    value: function tblStyleColBandSize(x) {
      return parseInt(x.attr('w:val'));
    }
  }, {
    key: 'tblW',
    value: function tblW(x) {
      switch (x.attr('w:type')) {
        case 'pct':
          return parseInt(x.attr('w:w')) * 2 / 100 + '%';
        case 'auto':
          return 'auto';
        default:
          return this.pt2Px(this.asPt(x.attr('w:w')));
      }
    }
  }, {
    key: 'tblInd',
    value: function tblInd(x) {
      return this.pt2Px(this.asPt(x.attr('w:w')));
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'table';
    }
  }]);

  return Properties;
}(_style2.default.Properties);

var StyleNameMap = {
  firstRow: 'firstRow',
  lastRow: 'lastRow',
  firstColumn: 'firstCol',
  lastColumn: 'lastCol',
  oddVBand: 'band1Vert',
  evenVBand: 'band2Vert',
  oddHBand: 'band1Horz',
  evenHBand: 'band2Horz',
  firstRowFirstColumn: 'nwCell',
  firstRowLastColumn: 'neCell',
  lastRowFirstColumn: 'swCell',
  lastRowLastColumn: 'seCell'
};

Table.RowProperties = function (_Style$Properties2) {
  _inherits(RowProperties, _Style$Properties2);

  function RowProperties() {
    _classCallCheck(this, RowProperties);

    return _possibleConstructorReturn(this, (RowProperties.__proto__ || Object.getPrototypeOf(RowProperties)).apply(this, arguments));
  }

  _createClass(RowProperties, [{
    key: 'cnfStyle',
    value: function cnfStyle(x, t) {
      return Object.keys(t = this.asObject(x)).map(function (a) {
        return t[a] == '1' && StyleNameMap[a];
      }).filter(function (a) {
        return a;
      });
    }
  }, {
    key: 'tblCellSpacing',
    value: function tblCellSpacing(x) {
      return this.pt2Px(this.asPt(x.attr('w:val')));
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'row';
    }
  }]);

  return RowProperties;
}(_style2.default.Properties);

Table.CellProperties = function (_Style$Properties3) {
  _inherits(CellProperties, _Style$Properties3);

  function CellProperties() {
    _classCallCheck(this, CellProperties);

    return _possibleConstructorReturn(this, (CellProperties.__proto__ || Object.getPrototypeOf(CellProperties)).apply(this, arguments));
  }

  _createClass(CellProperties, [{
    key: 'tcBorders',
    value: function tcBorders(x) {
      var value = {};
      for (var borders = x.childNodes, border, i = 0, len = borders.length; i < len; i++) {
        if (borders[i].nodeType !== 1) continue;
        border = value[(border = borders[i]).localName] = this.asObject(border);
        border.sz && (border.sz = border.sz / 8);
        border.color && (border.color = this.asColor(border.color));
      }
      return value;
    }
  }, {
    key: 'shd',
    value: function shd(x) {
      return this.asColor(x.attr('w:fill'));
    }
  }, {
    key: 'cnfStyle',
    value: function cnfStyle(x, t) {
      return Object.keys(t = this.asObject(x)).map(function (a) {
        return t[a] == '1' && StyleNameMap[a];
      }).filter(function (a) {
        return a;
      });
    }
  }, {
    key: 'gridSpan',
    value: function gridSpan(x) {
      return x.attr('w:val');
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'cell';
    }
  }]);

  return CellProperties;
}(_style2.default.Properties);
module.exports = exports['default'];