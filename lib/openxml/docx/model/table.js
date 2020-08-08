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
      return (pr = this.wXml.$1('>tblPr')) && new _table2.default.Properties(pr, this.wDoc, this);
    }
  }, {
    key: 'getColWidth',
    value: function getColWidth() {
      var asPt = _table2.default.Properties.prototype.asPt;
      var pt2Px = _table2.default.Properties.prototype.pt2Px;
      var widths = [],
          sum = 0;
      for (var cols = this.wXml.$('>tblGrid>gridCol'), len = cols.length, i = 0, a; i < len; i++) {
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

    this.rows = converter.wXml.$('tr').length; //@todo:nested table not work
    this.cols = converter.wXml.$('>tblGrid>gridCol').length;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvdGFibGUuanMiXSwibmFtZXMiOlsidGFibGUiLCJ3RG9jIiwicGFyc2VDb250ZXh0IiwicHVzaCIsImFyZ3VtZW50cyIsInBvcCIsImEiLCJfdmFsIiwic3R5bGUiLCJnZXREZWZhdWx0IiwiVGFibGVTdHlsZSIsInR5cGUiLCJpZCIsImdldCIsImdldFN0eWxlSWQiLCJwciIsIndYbWwiLCIkMSIsIlByb3BlcnRpZXMiLCJhc1B0IiwicHJvdG90eXBlIiwicHQyUHgiLCJ3aWR0aHMiLCJzdW0iLCJjb2xzIiwiJCIsImxlbiIsImxlbmd0aCIsImkiLCJhdHRyIiwibG9jYWxOYW1lIiwicmVxdWlyZSIsIkNvbnRleHQiLCJkb2MiLCJfc3RhY2siLCJfY3VycmVudCIsIlRhYmxlQ29udGV4dCIsInJvdyIsInB1c2hSb3ciLCJjZWxsIiwicHVzaENlbGwiLCJwb3BSb3ciLCJwb3BDZWxsIiwiaXNGaXJzdFJvdyIsImlzTGFzdFJvdyIsImlzRmlyc3RDb2wiLCJpc0xhc3RDb2wiLCJjb252ZXJ0ZXIiLCJyb3dzIiwiY3VycmVudFJvdyIsImN1cnJlbnRDZWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7NEJBQ1g7QUFDTixXQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJGLEtBQXZCLENBQTZCRyxJQUE3QixDQUFrQyxJQUFsQztBQUNBLDJHQUFlQyxTQUFmO0FBQ0EsV0FBS0gsSUFBTCxDQUFVQyxZQUFWLENBQXVCRixLQUF2QixDQUE2QkssR0FBN0IsQ0FBaUMsSUFBakM7QUFDRDs7OytCQUVVQyxDLEVBQUc7QUFDWixhQUNFLEtBQUtDLElBQUwsQ0FBVSxpQkFBVixLQUNDLENBQUNELElBQUksS0FBS0wsSUFBTCxDQUFVTyxLQUFWLENBQWdCQyxVQUFoQixDQUEyQkMsZ0JBQVdDLElBQXRDLENBQUwsS0FBcURMLEVBQUVNLEVBRjFE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QUtDLFdBQUwsR0FBbUIsQ0FBbkI7QUFDRDs7Ozs0QkFDT2IsRyxFQUFLO0FBQ1gsV0FBS1ksVUFBTDtBQUNEOzs7NkJBRVFWLEksRUFBTTtBQUNiLFdBQUtXLFdBQUw7QUFDRDs7OzJCQUVNYixHLEVBQUs7QUFDVixXQUFLYSxXQUFMLEdBQW1CLENBQW5CO0FBQ0Q7Ozs0QkFFT1gsSSxFQUFNLENBQUU7OztpQ0FFSDtBQUNYLGFBQU8sS0FBS1UsVUFBTCxJQUFtQixDQUExQjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLFVBQUwsSUFBbUIsS0FBS0QsSUFBL0I7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLRSxXQUFMLElBQW9CLENBQTNCO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0EsV0FBTCxJQUFvQixLQUFLMUIsSUFBaEM7QUFDRCIsImZpbGUiOiJ0YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYWJsZVN0eWxlIGZyb20gJy4vc3R5bGUvdGFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0YWJsZSBleHRlbmRzIHJlcXVpcmUoJy4uL21vZGVsJykge1xuICBwYXJzZSgpIHtcbiAgICB0aGlzLndEb2MucGFyc2VDb250ZXh0LnRhYmxlLnB1c2godGhpcyk7XG4gICAgc3VwZXIucGFyc2UoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLndEb2MucGFyc2VDb250ZXh0LnRhYmxlLnBvcCh0aGlzKTtcbiAgfVxuXG4gIGdldFN0eWxlSWQoYSkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl92YWwoJz50YmxQcj50YmxTdHlsZScpIHx8XG4gICAgICAoKGEgPSB0aGlzLndEb2Muc3R5bGUuZ2V0RGVmYXVsdChUYWJsZVN0eWxlLnR5cGUpKSAmJiBhLmlkKVxuICAgICk7XG4gIH1cbiAgZ2V0TmFtZWRTdHlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy53RG9jLnN0eWxlLmdldCh0aGlzLmdldFN0eWxlSWQoKSk7XG4gIH1cbiAgZ2V0RGlyZWN0U3R5bGUocHIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHByID0gdGhpcy53WG1sLiQxKCc+dGJsUHInKSkgJiZcbiAgICAgIG5ldyBUYWJsZVN0eWxlLlByb3BlcnRpZXMocHIsIHRoaXMud0RvYywgdGhpcylcbiAgICApO1xuICB9XG4gIGdldENvbFdpZHRoKCkge1xuICAgIGxldCBhc1B0ID0gVGFibGVTdHlsZS5Qcm9wZXJ0aWVzLnByb3RvdHlwZS5hc1B0O1xuICAgIGxldCBwdDJQeCA9IFRhYmxlU3R5bGUuUHJvcGVydGllcy5wcm90b3R5cGUucHQyUHg7XG4gICAgdmFyIHdpZHRocyA9IFtdLFxuICAgICAgc3VtID0gMDtcbiAgICBmb3IgKFxuICAgICAgdmFyIGNvbHMgPSB0aGlzLndYbWwuJCgnPnRibEdyaWQ+Z3JpZENvbCcpLCBsZW4gPSBjb2xzLmxlbmd0aCwgaSA9IDAsIGE7XG4gICAgICBpIDwgbGVuO1xuICAgICAgaSsrXG4gICAgKSB7XG4gICAgICB3aWR0aHMucHVzaCgoYSA9IHB0MlB4KGFzUHQoY29sc1tpXS5hdHRyKCd3OncnKSkpKSk7XG4gICAgICBzdW0gKz0gYTtcbiAgICB9XG4gICAgcmV0dXJuIHsgc3VtOiBzdW0sIGNvbHM6IHdpZHRocyB9O1xuICB9XG4gIF9zaG91bGRJZ25vcmUod1htbCkge1xuICAgIHJldHVybiB3WG1sLmxvY2FsTmFtZSA9PSAndGJsUHInIHx8IHdYbWwubG9jYWxOYW1lID09ICd0YmxHcmlkJztcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICd0YWJsZSc7XG4gIH1cblxuICBzdGF0aWMgQ29udGV4dCA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihkb2MpIHtcbiAgICAgIHRoaXMud0RvYyA9IGRvYztcbiAgICAgIHRoaXMuX3N0YWNrID0gW107XG4gICAgICB0aGlzLl9jdXJyZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdXNoKHRhYmxlKSB7XG4gICAgICB0aGlzLl9zdGFjay5wdXNoKCh0aGlzLl9jdXJyZW50ID0gbmV3IFRhYmxlQ29udGV4dCh0YWJsZSkpKTtcbiAgICB9XG5cbiAgICBwdXNoUm93KHJvdykge1xuICAgICAgdGhpcy5fY3VycmVudC5wdXNoUm93KHJvdyk7XG4gICAgfVxuXG4gICAgcHVzaENlbGwoY2VsbCkge1xuICAgICAgdGhpcy5fY3VycmVudC5wdXNoQ2VsbChjZWxsKTtcbiAgICB9XG5cbiAgICBwb3AoKSB7XG4gICAgICB0aGlzLl9zdGFjay5wb3AoKTtcbiAgICB9XG5cbiAgICBwb3BSb3coKSB7XG4gICAgICB0aGlzLl9jdXJyZW50LnBvcFJvdygpO1xuICAgIH1cblxuICAgIHBvcENlbGwoKSB7XG4gICAgICB0aGlzLl9jdXJyZW50LnBvcENlbGwoKTtcbiAgICB9XG5cbiAgICBpc0ZpcnN0Um93KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnQuaXNGaXJzdFJvdygpO1xuICAgIH1cblxuICAgIGlzTGFzdFJvdygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50LmlzTGFzdFJvdygpO1xuICAgIH1cblxuICAgIGlzRmlyc3RDb2woKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY3VycmVudC5pc0ZpcnN0Q29sKCk7XG4gICAgfVxuXG4gICAgaXNMYXN0Q29sKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnQuaXNMYXN0Q29sKCk7XG4gICAgfVxuICB9O1xufVxuXG5jbGFzcyBUYWJsZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb252ZXJ0ZXIpIHtcbiAgICB0aGlzLnJvd3MgPSBjb252ZXJ0ZXIud1htbC4kKCd0cicpLmxlbmd0aDsgLy9AdG9kbzpuZXN0ZWQgdGFibGUgbm90IHdvcmtcbiAgICB0aGlzLmNvbHMgPSBjb252ZXJ0ZXIud1htbC4kKCc+dGJsR3JpZD5ncmlkQ29sJykubGVuZ3RoO1xuICAgIHRoaXMuY3VycmVudFJvdyA9IDA7XG4gICAgdGhpcy5jdXJyZW50Q2VsbCA9IDA7XG4gIH1cbiAgcHVzaFJvdyhyb3cpIHtcbiAgICB0aGlzLmN1cnJlbnRSb3crKztcbiAgfVxuXG4gIHB1c2hDZWxsKGNlbGwpIHtcbiAgICB0aGlzLmN1cnJlbnRDZWxsKys7XG4gIH1cblxuICBwb3BSb3cocm93KSB7XG4gICAgdGhpcy5jdXJyZW50Q2VsbCA9IDA7XG4gIH1cblxuICBwb3BDZWxsKGNlbGwpIHt9XG5cbiAgaXNGaXJzdFJvdygpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50Um93ID09IDE7XG4gIH1cblxuICBpc0xhc3RSb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFJvdyA9PSB0aGlzLnJvd3M7XG4gIH1cblxuICBpc0ZpcnN0Q29sKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRDZWxsID09IDE7XG4gIH1cblxuICBpc0xhc3RDb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudENlbGwgPT0gdGhpcy5jb2xzO1xuICB9XG59XG4iXX0=