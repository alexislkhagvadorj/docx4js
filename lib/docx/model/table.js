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

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL3RhYmxlLmpzIl0sIm5hbWVzIjpbInRhYmxlIiwid0RvYyIsInBhcnNlQ29udGV4dCIsInB1c2giLCJhcmd1bWVudHMiLCJwb3AiLCJhIiwiX3ZhbCIsInN0eWxlIiwiZ2V0RGVmYXVsdCIsIlRhYmxlU3R5bGUiLCJ0eXBlIiwiaWQiLCJnZXQiLCJnZXRTdHlsZUlkIiwicHIiLCJ3WG1sIiwiJDEiLCJQcm9wZXJ0aWVzIiwiYXNQdCIsInByb3RvdHlwZSIsInB0MlB4Iiwid2lkdGhzIiwic3VtIiwiY29scyIsIiQiLCJsZW4iLCJsZW5ndGgiLCJpIiwiYXR0ciIsImxvY2FsTmFtZSIsInJlcXVpcmUiLCJDb250ZXh0IiwiZG9jIiwiX3N0YWNrIiwiX2N1cnJlbnQiLCJUYWJsZUNvbnRleHQiLCJyb3ciLCJwdXNoUm93IiwiY2VsbCIsInB1c2hDZWxsIiwicG9wUm93IiwicG9wQ2VsbCIsImlzRmlyc3RSb3ciLCJpc0xhc3RSb3ciLCJpc0ZpcnN0Q29sIiwiaXNMYXN0Q29sIiwiY29udmVydGVyIiwicm93cyIsImN1cnJlbnRSb3ciLCJjdXJyZW50Q2VsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7OzRCQUNYO0FBQ04sV0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCRixLQUF2QixDQUE2QkcsSUFBN0IsQ0FBa0MsSUFBbEM7QUFDQSwyR0FBZUMsU0FBZjtBQUNBLFdBQUtILElBQUwsQ0FBVUMsWUFBVixDQUF1QkYsS0FBdkIsQ0FBNkJLLEdBQTdCLENBQWlDLElBQWpDO0FBQ0Q7OzsrQkFFVUMsQyxFQUFHO0FBQ1osYUFDRSxLQUFLQyxJQUFMLENBQVUsaUJBQVYsS0FDQyxDQUFDRCxJQUFJLEtBQUtMLElBQUwsQ0FBVU8sS0FBVixDQUFnQkMsVUFBaEIsQ0FBMkJDLGdCQUFXQyxJQUF0QyxDQUFMLEtBQXFETCxFQUFFTSxFQUYxRDtBQUlEOzs7b0NB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QW1CLENBQW5CO0FBQ0Q7Ozs7NEJBQ09iLEcsRUFBSztBQUNYLFdBQUtZLFVBQUw7QUFDRDs7OzZCQUVRVixJLEVBQU07QUFDYixXQUFLVyxXQUFMO0FBQ0Q7OzsyQkFFTWIsRyxFQUFLO0FBQ1YsV0FBS2EsV0FBTCxHQUFtQixDQUFuQjtBQUNEOzs7NEJBRU9YLEksRUFBTSxDQUFFOzs7aUNBRUg7QUFDWCxhQUFPLEtBQUtVLFVBQUwsSUFBbUIsQ0FBMUI7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQSxVQUFMLElBQW1CLEtBQUtELElBQS9CO0FBQ0Q7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0UsV0FBTCxJQUFvQixDQUEzQjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLFdBQUwsSUFBb0IsS0FBSzFCLElBQWhDO0FBQ0QiLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFibGVTdHlsZSBmcm9tICcuL3N0eWxlL3RhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGFibGUgZXh0ZW5kcyByZXF1aXJlKCcuLi9tb2RlbCcpIHtcbiAgcGFyc2UoKSB7XG4gICAgdGhpcy53RG9jLnBhcnNlQ29udGV4dC50YWJsZS5wdXNoKHRoaXMpO1xuICAgIHN1cGVyLnBhcnNlKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy53RG9jLnBhcnNlQ29udGV4dC50YWJsZS5wb3AodGhpcyk7XG4gIH1cblxuICBnZXRTdHlsZUlkKGEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fdmFsKCc+dGJsUHI+dGJsU3R5bGUnKSB8fFxuICAgICAgKChhID0gdGhpcy53RG9jLnN0eWxlLmdldERlZmF1bHQoVGFibGVTdHlsZS50eXBlKSkgJiYgYS5pZClcbiAgICApO1xuICB9XG4gIGdldE5hbWVkU3R5bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMud0RvYy5zdHlsZS5nZXQodGhpcy5nZXRTdHlsZUlkKCkpO1xuICB9XG4gIGdldERpcmVjdFN0eWxlKHByKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIChwciA9IHRoaXMud1htbC4kMSgnPnRibFByJykpICYmXG4gICAgICBuZXcgVGFibGVTdHlsZS5Qcm9wZXJ0aWVzKHByLCB0aGlzLndEb2MsIHRoaXMpXG4gICAgKTtcbiAgfVxuICBnZXRDb2xXaWR0aCgpIHtcbiAgICBsZXQgYXNQdCA9IFRhYmxlU3R5bGUuUHJvcGVydGllcy5wcm90b3R5cGUuYXNQdDtcbiAgICBsZXQgcHQyUHggPSBUYWJsZVN0eWxlLlByb3BlcnRpZXMucHJvdG90eXBlLnB0MlB4O1xuICAgIHZhciB3aWR0aHMgPSBbXSxcbiAgICAgIHN1bSA9IDA7XG4gICAgZm9yIChcbiAgICAgIHZhciBjb2xzID0gdGhpcy53WG1sLiQoJz50YmxHcmlkPmdyaWRDb2wnKSwgbGVuID0gY29scy5sZW5ndGgsIGkgPSAwLCBhO1xuICAgICAgaSA8IGxlbjtcbiAgICAgIGkrK1xuICAgICkge1xuICAgICAgd2lkdGhzLnB1c2goKGEgPSBwdDJQeChhc1B0KGNvbHNbaV0uYXR0cigndzp3JykpKSkpO1xuICAgICAgc3VtICs9IGE7XG4gICAgfVxuICAgIHJldHVybiB7IHN1bTogc3VtLCBjb2xzOiB3aWR0aHMgfTtcbiAgfVxuICBfc2hvdWxkSWdub3JlKHdYbWwpIHtcbiAgICByZXR1cm4gd1htbC5sb2NhbE5hbWUgPT0gJ3RibFByJyB8fCB3WG1sLmxvY2FsTmFtZSA9PSAndGJsR3JpZCc7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAndGFibGUnO1xuICB9XG5cbiAgc3RhdGljIENvbnRleHQgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoZG9jKSB7XG4gICAgICB0aGlzLndEb2MgPSBkb2M7XG4gICAgICB0aGlzLl9zdGFjayA9IFtdO1xuICAgICAgdGhpcy5fY3VycmVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVzaCh0YWJsZSkge1xuICAgICAgdGhpcy5fc3RhY2sucHVzaCgodGhpcy5fY3VycmVudCA9IG5ldyBUYWJsZUNvbnRleHQodGFibGUpKSk7XG4gICAgfVxuXG4gICAgcHVzaFJvdyhyb3cpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnQucHVzaFJvdyhyb3cpO1xuICAgIH1cblxuICAgIHB1c2hDZWxsKGNlbGwpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnQucHVzaENlbGwoY2VsbCk7XG4gICAgfVxuXG4gICAgcG9wKCkge1xuICAgICAgdGhpcy5fc3RhY2sucG9wKCk7XG4gICAgfVxuXG4gICAgcG9wUm93KCkge1xuICAgICAgdGhpcy5fY3VycmVudC5wb3BSb3coKTtcbiAgICB9XG5cbiAgICBwb3BDZWxsKCkge1xuICAgICAgdGhpcy5fY3VycmVudC5wb3BDZWxsKCk7XG4gICAgfVxuXG4gICAgaXNGaXJzdFJvdygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50LmlzRmlyc3RSb3coKTtcbiAgICB9XG5cbiAgICBpc0xhc3RSb3coKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY3VycmVudC5pc0xhc3RSb3coKTtcbiAgICB9XG5cbiAgICBpc0ZpcnN0Q29sKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnQuaXNGaXJzdENvbCgpO1xuICAgIH1cblxuICAgIGlzTGFzdENvbCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50LmlzTGFzdENvbCgpO1xuICAgIH1cbiAgfTtcbn1cblxuY2xhc3MgVGFibGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udmVydGVyKSB7XG4gICAgdGhpcy5yb3dzID0gY29udmVydGVyLndYbWwuJCgndHInKS5sZW5ndGg7IC8vQHRvZG86bmVzdGVkIHRhYmxlIG5vdCB3b3JrXG4gICAgdGhpcy5jb2xzID0gY29udmVydGVyLndYbWwuJCgnPnRibEdyaWQ+Z3JpZENvbCcpLmxlbmd0aDtcbiAgICB0aGlzLmN1cnJlbnRSb3cgPSAwO1xuICAgIHRoaXMuY3VycmVudENlbGwgPSAwO1xuICB9XG4gIHB1c2hSb3cocm93KSB7XG4gICAgdGhpcy5jdXJyZW50Um93Kys7XG4gIH1cblxuICBwdXNoQ2VsbChjZWxsKSB7XG4gICAgdGhpcy5jdXJyZW50Q2VsbCsrO1xuICB9XG5cbiAgcG9wUm93KHJvdykge1xuICAgIHRoaXMuY3VycmVudENlbGwgPSAwO1xuICB9XG5cbiAgcG9wQ2VsbChjZWxsKSB7fVxuXG4gIGlzRmlyc3RSb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFJvdyA9PSAxO1xuICB9XG5cbiAgaXNMYXN0Um93KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRSb3cgPT0gdGhpcy5yb3dzO1xuICB9XG5cbiAgaXNGaXJzdENvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50Q2VsbCA9PSAxO1xuICB9XG5cbiAgaXNMYXN0Q29sKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRDZWxsID09IHRoaXMuY29scztcbiAgfVxufVxuIl19