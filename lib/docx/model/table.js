'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _table = require('./style/table');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var table = function (_require) {
  _inherits(table, _require);

  function table() {
    _classCallCheck(this, table);

    return _possibleConstructorReturn(this, (table.__proto__ || Object.getPrototypeOf(table)).apply(this, arguments));
  }

  _createClass(table, [{
    key: 'parse',
    value: function parse() {
      this.wDoc.parseContext.table.push(this);
      _get(table.prototype.__proto__ || Object.getPrototypeOf(table.prototype), 'parse', this).apply(this, arguments);
      this.wDoc.parseContext.table.pop(this);
    }
  }, {
    key: 'getStyleId',
    value: function getStyleId(a) {
      return this._val('>tblPr>tblStyle') || (a = this.wDoc.style.getDefault(_table2.default.type)) && a.id;
    }
  }, {
    key: 'getNamedStyle',
    value: function getNamedStyle() {
      return this.wDoc.style.get(this.getStyleId());
    }
  }, {
    key: 'getDirectStyle',
    value: function getDirectStyle(pr) {
      return (pr = this.wXml.$2('>tblPr')) && new _table2.default.Properties(pr, this.wDoc, this);
    }
  }, {
    key: 'getColWidth',
    value: function getColWidth() {
      var asPt = _table2.default.Properties.prototype.asPt;
      var pt2Px = _table2.default.Properties.prototype.pt2Px;
      var widths = [],
          sum = 0;
      for (var cols = this.wXml.$1('>tblGrid>gridCol'), len = cols.length, i = 0, a; i < len; i++) {
        widths.push(a = pt2Px(asPt(cols[i].attr('w:w'))));
        sum += a;
      }
      return { sum: sum, cols: widths };
    }
  }, {
    key: '_shouldIgnore',
    value: function _shouldIgnore(wXml) {
      return wXml.localName == 'tblPr' || wXml.localName == 'tblGrid';
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'table';
    }
  }]);

  return table;
}(require('../model'));

table.Context = function () {
  function _class(doc) {
    _classCallCheck(this, _class);

    this.wDoc = doc;
    this._stack = [];
    this._current = null;
  }

  _createClass(_class, [{
    key: 'push',
    value: function push(table) {
      this._stack.push(this._current = new TableContext(table));
    }
  }, {
    key: 'pushRow',
    value: function pushRow(row) {
      this._current.pushRow(row);
    }
  }, {
    key: 'pushCell',
    value: function pushCell(cell) {
      this._current.pushCell(cell);
    }
  }, {
    key: 'pop',
    value: function pop() {
      this._stack.pop();
    }
  }, {
    key: 'popRow',
    value: function popRow() {
      this._current.popRow();
    }
  }, {
    key: 'popCell',
    value: function popCell() {
      this._current.popCell();
    }
  }, {
    key: 'isFirstRow',
    value: function isFirstRow() {
      return this._current.isFirstRow();
    }
  }, {
    key: 'isLastRow',
    value: function isLastRow() {
      return this._current.isLastRow();
    }
  }, {
    key: 'isFirstCol',
    value: function isFirstCol() {
      return this._current.isFirstCol();
    }
  }, {
    key: 'isLastCol',
    value: function isLastCol() {
      return this._current.isLastCol();
    }
  }]);

  return _class;
}();

exports.default = table;

var TableContext = function () {
  function TableContext(converter) {
    _classCallCheck(this, TableContext);

    this.rows = converter.wXml.$1('tr').length; //@todo:nested table not work
    this.cols = converter.wXml.$1('>tblGrid>gridCol').length;
    this.currentRow = 0;
    this.currentCell = 0;
  }

  _createClass(TableContext, [{
    key: 'pushRow',
    value: function pushRow(row) {
      this.currentRow++;
    }
  }, {
    key: 'pushCell',
    value: function pushCell(cell) {
      this.currentCell++;
    }
  }, {
    key: 'popRow',
    value: function popRow(row) {
      this.currentCell = 0;
    }
  }, {
    key: 'popCell',
    value: function popCell(cell) {}
  }, {
    key: 'isFirstRow',
    value: function isFirstRow() {
      return this.currentRow == 1;
    }
  }, {
    key: 'isLastRow',
    value: function isLastRow() {
      return this.currentRow == this.rows;
    }
  }, {
    key: 'isFirstCol',
    value: function isFirstCol() {
      return this.currentCell == 1;
    }
  }, {
    key: 'isLastCol',
    value: function isLastCol() {
      return this.currentCell == this.cols;
    }
  }]);

  return TableContext;
}();

module.exports = exports['default'];