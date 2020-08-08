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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc3R5bGUvdGFibGUuanMiXSwibmFtZXMiOlsiVGFibGUiLCJmYWN0b3JpZXMiLCJhcmd1bWVudHMiLCJUYWJsZVN0eWxlIiwiY29uc3RydWN0b3IiLCJzdHlsZXMiLCJ3WG1sIiwiJCIsImxlbiIsImxlbmd0aCIsImkiLCJtb2RlbCIsIndEb2MiLCJpZCIsInBhcnNlIiwiZiIsInZpc2l0b3JzIiwicHIiLCIkMSIsIlByb3BlcnRpZXMiLCJSb3dQcm9wZXJ0aWVzIiwiQ2VsbFByb3BlcnRpZXMiLCJQYXJhZ3JhcGgiLCJJbmxpbmUiLCJhdHRyIiwiU3R5bGUiLCJ4IiwidmFsdWUiLCJib3JkZXJzIiwiY2hpbGROb2RlcyIsImJvcmRlciIsIm5vZGVUeXBlIiwibG9jYWxOYW1lIiwiYXNPYmplY3QiLCJzeiIsImNvbG9yIiwiYXNDb2xvciIsInYiLCJwdDJQeCIsImFzUHQiLCJwYXJzZUludCIsIlN0eWxlTmFtZU1hcCIsImZpcnN0Um93IiwibGFzdFJvdyIsImZpcnN0Q29sdW1uIiwibGFzdENvbHVtbiIsIm9kZFZCYW5kIiwiZXZlblZCYW5kIiwib2RkSEJhbmQiLCJldmVuSEJhbmQiLCJmaXJzdFJvd0ZpcnN0Q29sdW1uIiwiZmlyc3RSb3dMYXN0Q29sdW1uIiwibGFzdFJvd0ZpcnN0Q29sdW1uIiwibGFzdFJvd0xhc3RDb2x1bW4iLCJ0IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImEiLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7MEJBQ2JDLFMsRUFBVztBQUNmLDJHQUFlQyxTQUFmOztBQUVBLFVBQUlDLGFBQWEsS0FBS0MsV0FBdEI7QUFDQSxXQUNFLElBQUlDLFNBQVMsS0FBS0MsSUFBTCxDQUFVQyxDQUFWLENBQVksWUFBWixDQUFiLEVBQXdDQyxNQUFNSCxPQUFPSSxNQUFy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LElBQUksS0FBS3JCLFFBQUwsQ0FBY1AsQ0FBZCxDQUFqQixFQUNKK0IsR0FESSxDQUNBLFVBQUNDLENBQUQ7QUFBQSxlQUFPSixFQUFFSSxDQUFGLEtBQVEsR0FBUixJQUFlakIsYUFBYWlCLENBQWIsQ0FBdEI7QUFBQSxPQURBLEVBRUpDLE1BRkksQ0FFRyxVQUFDRCxDQUFEO0FBQUEsZUFBT0EsQ0FBUDtBQUFBLE9BRkgsQ0FBUDtBQUdEO0FBdEJIO0FBQUE7QUFBQSw2QkF1QldoQyxDQXZCWCxFQXVCYztBQUNWLGFBQU9BLEVBQUVGLElBQUYsQ0FBTyxPQUFQLENBQVA7QUFDRDtBQXpCSDtBQUFBO0FBQUEsd0JBMEJvQjtBQUNoQixhQUFPLE1BQVA7QUFDRDtBQTVCSDs7QUFBQTtBQUFBLEVBQW9EQyxnQkFBTU4sVUFBMUQiLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGUgZnJvbSAnLi4vc3R5bGUnO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICcuL3BhcmFncmFwaCc7XG5pbXBvcnQgSW5saW5lIGZyb20gJy4vaW5saW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUgZXh0ZW5kcyBTdHlsZSB7XG4gIHBhcnNlKGZhY3Rvcmllcykge1xuICAgIHN1cGVyLnBhcnNlKC4uLmFyZ3VtZW50cyk7XG5cbiAgICB2YXIgVGFibGVTdHlsZSA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgZm9yIChcbiAgICAgIHZhciBzdHlsZXMgPSB0aGlzLndYbWwuJCgndGJsU3R5bGVQcicpLCBsZW4gPSBzdHlsZXMubGVuZ3RoLCBpID0gMDtcbiAgICAgIGkgPCBsZW47XG4gICAgICBpKytcbiAgICApIHtcbiAgICAgIHZhciBtb2RlbCA9IG5ldyBUYWJsZVN0eWxlKHN0eWxlc1tpXSwgdGhpcy53RG9jLCB0aGlzKTtcbiAgICAgIG1vZGVsLmlkID0gdGhpcy5pZDtcbiAgICAgIG1vZGVsLnBhcnNlKGZhY3Rvcmllcyk7XG4gICAgfVxuICB9XG4gIF9pdGVyYXRlKGYsIGZhY3RvcmllcywgdmlzaXRvcnMpIHtcbiAgICB2YXIgcHIgPSBudWxsO1xuICAgIChwciA9IHRoaXMud1htbC4kMSgnPnRibFByOm5vdCg6ZW1wdHkpJykpICYmXG4gICAgICBuZXcgdGhpcy5jb25zdHJ1Y3Rvci5Qcm9wZXJ0aWVzKHByLCB0aGlzLndEb2MsIHRoaXMpLnBhcnNlKHZpc2l0b3JzKTtcbiAgICAocHIgPSB0aGlzLndYbWwuJDEoJz50clByOm5vdCg6ZW1wdHkpJykpICYmXG4gICAgICBuZXcgdGhpcy5jb25zdHJ1Y3Rvci5Sb3dQcm9wZXJ0aWVzKHByLCB0aGlzLndEb2MsIHRoaXMpLnBhcnNlKHZpc2l0b3JzKTtcbiAgICAocHIgPSB0aGlzLndYbWwuJDEoJz50Y1ByOm5vdCg6ZW1wdHkpJykpICYmXG4gICAgICBuZXcgdGhpcy5jb25zdHJ1Y3Rvci5DZWxsUHJvcGVydGllcyhwciwgdGhpcy53RG9jLCB0aGlzKS5wYXJzZSh2aXNpdG9ycyk7XG4gICAgKHByID0gdGhpcy53WG1sLiQxKCc+cFByOm5vdCg6ZW1wdHkpJykpICYmXG4gICAgICBuZXcgUGFyYWdyYXBoLlByb3BlcnRpZXMocHIsIHRoaXMud0RvYywgdGhpcykucGFyc2UodmlzaXRvcnMpO1xuICAgIChwciA9IHRoaXMud1htbC4kMSgnPnJQcjpub3QoOmVtcHR5KScpKSAmJlxuICAgICAgbmV3IElubGluZS5Qcm9wZXJ0aWVzKHByLCB0aGlzLndEb2MsIHRoaXMpLnBhcnNlKHZpc2l0b3JzKTtcbiAgfVxuICBnZXRUYXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMud1htbC5hdHRyKCd3OnR5cGUnKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ3N0eWxlLnRhYmxlJztcbiAgfVxufVxuXG5UYWJsZS5Qcm9wZXJ0aWVzID0gY2xhc3MgUHJvcGVydGllcyBleHRlbmRzIFN0eWxlLlByb3BlcnRpZXMge1xuICB0YmxCb3JkZXJzKHgpIHtcbiAgICB2YXIgdmFsdWUgPSB7fTtcbiAgICBmb3IgKFxuICAgICAgdmFyIGJvcmRlcnMgPSB4LmNoaWxkTm9kZXMsIGJvcmRlciwgaSA9IDAsIGxlbiA9IGJvcmRlcnMubGVuZ3RoO1xuICAgICAgaSA8IGxlbjtcbiAgICAgIGkrK1xuICAgICkge1xuICAgICAgaWYgKGJvcmRlcnNbaV0ubm9kZVR5cGUgIT09IDEpIGNvbnRpbnVlO1xuICAgICAgYm9yZGVyID0gdmFsdWVbKGJvcmRlciA9IGJvcmRlcnNbaV0pLmxvY2FsTmFtZV0gPSB0aGlzLmFzT2JqZWN0KGJvcmRlcik7XG4gICAgICBib3JkZXIuc3ogJiYgKGJvcmRlci5zeiA9IGJvcmRlci5zeiAvIDgpO1xuICAgICAgYm9yZGVyLmNvbG9yICYmIChib3JkZXIuY29sb3IgPSB0aGlzLmFzQ29sb3IoYm9yZGVyLmNvbG9yKSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB0YmxDZWxsTWFyKHgpIHtcbiAgICB2YXIgdmFsdWUgPSB7fTtcbiAgICBmb3IgKFxuICAgICAgdmFyIGJvcmRlcnMgPSB4LmNoaWxkTm9kZXMsIGkgPSAwLCBsZW4gPSBib3JkZXJzLmxlbmd0aCwgdjtcbiAgICAgIGkgPCBsZW47XG4gICAgICBpKytcbiAgICApXG4gICAgICBib3JkZXJzW2ldLm5vZGVUeXBlID09IDEgJiZcbiAgICAgICAgKHZhbHVlW2JvcmRlcnNbaV0ubG9jYWxOYW1lXSA9IHRoaXMucHQyUHgoXG4gICAgICAgICAgdGhpcy5hc1B0KGJvcmRlcnNbaV0uYXR0cigndzp3JykpXG4gICAgICAgICkpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB0YmxDZWxsU3BhY2luZyh4KSB7XG4gICAgcmV0dXJuIHRoaXMucHQyUHgodGhpcy5hc1B0KHguYXR0cigndzp2YWwnKSkpO1xuICB9XG4gIHRibExvb2soeCkge1xuICAgIHJldHVybiB0aGlzLmFzT2JqZWN0KHgsIGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoeCk7XG4gICAgfSk7XG4gIH1cbiAgdGJsU3R5bGVSb3dCYW5kU2l6ZSh4KSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHguYXR0cigndzp2YWwnKSk7XG4gIH1cbiAgdGJsU3R5bGVDb2xCYW5kU2l6ZSh4KSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHguYXR0cigndzp2YWwnKSk7XG4gIH1cbiAgdGJsVyh4KSB7XG4gICAgc3dpdGNoICh4LmF0dHIoJ3c6dHlwZScpKSB7XG4gICAgICBjYXNlICdwY3QnOlxuICAgICAgICByZXR1cm4gKHBhcnNlSW50KHguYXR0cigndzp3JykpICogMikgLyAxMDAgKyAnJSc7XG4gICAgICBjYXNlICdhdXRvJzpcbiAgICAgICAgcmV0dXJuICdhdXRvJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLnB0MlB4KHRoaXMuYXNQdCh4LmF0dHIoJ3c6dycpKSk7XG4gICAgfVxuICB9XG4gIHRibEluZCh4KSB7XG4gICAgcmV0dXJuIHRoaXMucHQyUHgodGhpcy5hc1B0KHguYXR0cigndzp3JykpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICd0YWJsZSc7XG4gIH1cbn07XG5cbnZhciBTdHlsZU5hbWVNYXAgPSB7XG4gIGZpcnN0Um93OiAnZmlyc3RSb3cnLFxuICBsYXN0Um93OiAnbGFzdFJvdycsXG4gIGZpcnN0Q29sdW1uOiAnZmlyc3RDb2wnLFxuICBsYXN0Q29sdW1uOiAnbGFzdENvbCcsXG4gIG9kZFZCYW5kOiAnYmFuZDFWZXJ0JyxcbiAgZXZlblZCYW5kOiAnYmFuZDJWZXJ0JyxcbiAgb2RkSEJhbmQ6ICdiYW5kMUhvcnonLFxuICBldmVuSEJhbmQ6ICdiYW5kMkhvcnonLFxuICBmaXJzdFJvd0ZpcnN0Q29sdW1uOiAnbndDZWxsJyxcbiAgZmlyc3RSb3dMYXN0Q29sdW1uOiAnbmVDZWxsJyxcbiAgbGFzdFJvd0ZpcnN0Q29sdW1uOiAnc3dDZWxsJyxcbiAgbGFzdFJvd0xhc3RDb2x1bW46ICdzZUNlbGwnLFxufTtcblxuVGFibGUuUm93UHJvcGVydGllcyA9IGNsYXNzIFJvd1Byb3BlcnRpZXMgZXh0ZW5kcyBTdHlsZS5Qcm9wZXJ0aWVzIHtcbiAgY25mU3R5bGUoeCwgdCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cygodCA9IHRoaXMuYXNPYmplY3QoeCkpKVxuICAgICAgLm1hcCgoYSkgPT4gdFthXSA9PSAnMScgJiYgU3R5bGVOYW1lTWFwW2FdKVxuICAgICAgLmZpbHRlcigoYSkgPT4gYSk7XG4gIH1cbiAgdGJsQ2VsbFNwYWNpbmcoeCkge1xuICAgIHJldHVybiB0aGlzLnB0MlB4KHRoaXMuYXNQdCh4LmF0dHIoJ3c6dmFsJykpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdyb3cnO1xuICB9XG59O1xuXG5UYWJsZS5DZWxsUHJvcGVydGllcyA9IGNsYXNzIENlbGxQcm9wZXJ0aWVzIGV4dGVuZHMgU3R5bGUuUHJvcGVydGllcyB7XG4gIHRjQm9yZGVycyh4KSB7XG4gICAgdmFyIHZhbHVlID0ge307XG4gICAgZm9yIChcbiAgICAgIHZhciBib3JkZXJzID0geC5jaGlsZE5vZGVzLCBib3JkZXIsIGkgPSAwLCBsZW4gPSBib3JkZXJzLmxlbmd0aDtcbiAgICAgIGkgPCBsZW47XG4gICAgICBpKytcbiAgICApIHtcbiAgICAgIGlmIChib3JkZXJzW2ldLm5vZGVUeXBlICE9PSAxKSBjb250aW51ZTtcbiAgICAgIGJvcmRlciA9IHZhbHVlWyhib3JkZXIgPSBib3JkZXJzW2ldKS5sb2NhbE5hbWVdID0gdGhpcy5hc09iamVjdChib3JkZXIpO1xuICAgICAgYm9yZGVyLnN6ICYmIChib3JkZXIuc3ogPSBib3JkZXIuc3ogLyA4KTtcbiAgICAgIGJvcmRlci5jb2xvciAmJiAoYm9yZGVyLmNvbG9yID0gdGhpcy5hc0NvbG9yKGJvcmRlci5jb2xvcikpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgc2hkKHgpIHtcbiAgICByZXR1cm4gdGhpcy5hc0NvbG9yKHguYXR0cigndzpmaWxsJykpO1xuICB9XG4gIGNuZlN0eWxlKHgsIHQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoKHQgPSB0aGlzLmFzT2JqZWN0KHgpKSlcbiAgICAgIC5tYXAoKGEpID0+IHRbYV0gPT0gJzEnICYmIFN0eWxlTmFtZU1hcFthXSlcbiAgICAgIC5maWx0ZXIoKGEpID0+IGEpO1xuICB9XG4gIGdyaWRTcGFuKHgpIHtcbiAgICByZXR1cm4geC5hdHRyKCd3OnZhbCcpO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2NlbGwnO1xuICB9XG59O1xuIl19