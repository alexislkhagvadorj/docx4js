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
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL3N0eWxlL3RhYmxlLmpzIl0sIm5hbWVzIjpbIlRhYmxlIiwiZmFjdG9yaWVzIiwiYXJndW1lbnRzIiwiVGFibGVTdHlsZSIsImNvbnN0cnVjdG9yIiwic3R5bGVzIiwid1htbCIsIiQiLCJsZW4iLCJsZW5ndGgiLCJpIiwibW9kZWwiLCJ3RG9jIiwiaWQiLCJwYXJzZSIsImYiLCJ2aXNpdG9ycyIsInByIiwiJDEiLCJQcm9wZXJ0aWVzIiwiUm93UHJvcGVydGllcyIsIkNlbGxQcm9wZXJ0aWVzIiwiUGFyYWdyYXBoIiwiSW5saW5lIiwiYXR0ciIsIlN0eWxlIiwieCIsInZhbHVlIiwiYm9yZGVycyIsImNoaWxkTm9kZXMiLCJib3JkZXIiLCJub2RlVHlwZSIsImxvY2FsTmFtZSIsImFzT2JqZWN0Iiwic3oiLCJjb2xvciIsImFzQ29sb3IiLCJ2IiwicHQyUHgiLCJhc1B0IiwicGFyc2VJbnQiLCJTdHlsZU5hbWVNYXAiLCJmaXJzdFJvdyIsImxhc3RSb3ciLCJmaXJzdENvbHVtbiIsImxhc3RDb2x1bW4iLCJvZGRWQmFuZCIsImV2ZW5WQmFuZCIsIm9kZEhCYW5kIiwiZXZlbkhCYW5kIiwiZmlyc3RSb3dGaXJzdENvbHVtbiIsImZpcnN0Um93TGFzdENvbHVtbiIsImxhc3RSb3dGaXJzdENvbHVtbiIsImxhc3RSb3dMYXN0Q29sdW1uIiwidCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJhIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7OzBCQUNiQyxTLEVBQVc7QUFDZiwyR0FBZUMsU0FBZjs7QUFFQSxVQUFJQyxhQUFhLEtBQUtDLFdBQXRCO0FBQ0EsV0FDRSxJQUFJQyxTQUFTLEtBQUtDLElBQUwsQ0FBVUMsQ0FBVixDQUFZLFlBQVosQ0FBYixFQUF3Q0MsTUFBTUgsT0FBT0ksTUFBckQsRUFBNkRDLElB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QixRQUFMLENBQWNQLENBQWQsQ0FBakIsRUFDSitCLEdBREksQ0FDQSxVQUFDQyxDQUFEO0FBQUEsZUFBT0osRUFBRUksQ0FBRixLQUFRLEdBQVIsSUFBZWpCLGFBQWFpQixDQUFiLENBQXRCO0FBQUEsT0FEQSxFQUVKQyxNQUZJLENBRUcsVUFBQ0QsQ0FBRDtBQUFBLGVBQU9BLENBQVA7QUFBQSxPQUZILENBQVA7QUFHRDtBQXRCSDtBQUFBO0FBQUEsNkJBdUJXaEMsQ0F2QlgsRUF1QmM7QUFDVixhQUFPQSxFQUFFRixJQUFGLENBQU8sT0FBUCxDQUFQO0FBQ0Q7QUF6Qkg7QUFBQTtBQUFBLHdCQTBCb0I7QUFDaEIsYUFBTyxNQUFQO0FBQ0Q7QUE1Qkg7O0FBQUE7QUFBQSxFQUFvREMsZ0JBQU1OLFVBQTFEIiwiZmlsZSI6InRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gJy4uL3N0eWxlJztcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSAnLi9wYXJhZ3JhcGgnO1xuaW1wb3J0IElubGluZSBmcm9tICcuL2lubGluZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlIGV4dGVuZHMgU3R5bGUge1xuICBwYXJzZShmYWN0b3JpZXMpIHtcbiAgICBzdXBlci5wYXJzZSguLi5hcmd1bWVudHMpO1xuXG4gICAgdmFyIFRhYmxlU3R5bGUgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgIGZvciAoXG4gICAgICB2YXIgc3R5bGVzID0gdGhpcy53WG1sLiQoJ3RibFN0eWxlUHInKSwgbGVuID0gc3R5bGVzLmxlbmd0aCwgaSA9IDA7XG4gICAgICBpIDwgbGVuO1xuICAgICAgaSsrXG4gICAgKSB7XG4gICAgICB2YXIgbW9kZWwgPSBuZXcgVGFibGVTdHlsZShzdHlsZXNbaV0sIHRoaXMud0RvYywgdGhpcyk7XG4gICAgICBtb2RlbC5pZCA9IHRoaXMuaWQ7XG4gICAgICBtb2RlbC5wYXJzZShmYWN0b3JpZXMpO1xuICAgIH1cbiAgfVxuICBfaXRlcmF0ZShmLCBmYWN0b3JpZXMsIHZpc2l0b3JzKSB7XG4gICAgdmFyIHByID0gbnVsbDtcbiAgICAocHIgPSB0aGlzLndYbWwuJDEoJz50YmxQcjpub3QoOmVtcHR5KScpKSAmJlxuICAgICAgbmV3IHRoaXMuY29uc3RydWN0b3IuUHJvcGVydGllcyhwciwgdGhpcy53RG9jLCB0aGlzKS5wYXJzZSh2aXNpdG9ycyk7XG4gICAgKHByID0gdGhpcy53WG1sLiQxKCc+dHJQcjpub3QoOmVtcHR5KScpKSAmJlxuICAgICAgbmV3IHRoaXMuY29uc3RydWN0b3IuUm93UHJvcGVydGllcyhwciwgdGhpcy53RG9jLCB0aGlzKS5wYXJzZSh2aXNpdG9ycyk7XG4gICAgKHByID0gdGhpcy53WG1sLiQxKCc+dGNQcjpub3QoOmVtcHR5KScpKSAmJlxuICAgICAgbmV3IHRoaXMuY29uc3RydWN0b3IuQ2VsbFByb3BlcnRpZXMocHIsIHRoaXMud0RvYywgdGhpcykucGFyc2UodmlzaXRvcnMpO1xuICAgIChwciA9IHRoaXMud1htbC4kMSgnPnBQcjpub3QoOmVtcHR5KScpKSAmJlxuICAgICAgbmV3IFBhcmFncmFwaC5Qcm9wZXJ0aWVzKHByLCB0aGlzLndEb2MsIHRoaXMpLnBhcnNlKHZpc2l0b3JzKTtcbiAgICAocHIgPSB0aGlzLndYbWwuJDEoJz5yUHI6bm90KDplbXB0eSknKSkgJiZcbiAgICAgIG5ldyBJbmxpbmUuUHJvcGVydGllcyhwciwgdGhpcy53RG9jLCB0aGlzKS5wYXJzZSh2aXNpdG9ycyk7XG4gIH1cbiAgZ2V0VGFyZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLndYbWwuYXR0cigndzp0eXBlJyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdzdHlsZS50YWJsZSc7XG4gIH1cbn1cblxuVGFibGUuUHJvcGVydGllcyA9IGNsYXNzIFByb3BlcnRpZXMgZXh0ZW5kcyBTdHlsZS5Qcm9wZXJ0aWVzIHtcbiAgdGJsQm9yZGVycyh4KSB7XG4gICAgdmFyIHZhbHVlID0ge307XG4gICAgZm9yIChcbiAgICAgIHZhciBib3JkZXJzID0geC5jaGlsZE5vZGVzLCBib3JkZXIsIGkgPSAwLCBsZW4gPSBib3JkZXJzLmxlbmd0aDtcbiAgICAgIGkgPCBsZW47XG4gICAgICBpKytcbiAgICApIHtcbiAgICAgIGlmIChib3JkZXJzW2ldLm5vZGVUeXBlICE9PSAxKSBjb250aW51ZTtcbiAgICAgIGJvcmRlciA9IHZhbHVlWyhib3JkZXIgPSBib3JkZXJzW2ldKS5sb2NhbE5hbWVdID0gdGhpcy5hc09iamVjdChib3JkZXIpO1xuICAgICAgYm9yZGVyLnN6ICYmIChib3JkZXIuc3ogPSBib3JkZXIuc3ogLyA4KTtcbiAgICAgIGJvcmRlci5jb2xvciAmJiAoYm9yZGVyLmNvbG9yID0gdGhpcy5hc0NvbG9yKGJvcmRlci5jb2xvcikpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdGJsQ2VsbE1hcih4KSB7XG4gICAgdmFyIHZhbHVlID0ge307XG4gICAgZm9yIChcbiAgICAgIHZhciBib3JkZXJzID0geC5jaGlsZE5vZGVzLCBpID0gMCwgbGVuID0gYm9yZGVycy5sZW5ndGgsIHY7XG4gICAgICBpIDwgbGVuO1xuICAgICAgaSsrXG4gICAgKVxuICAgICAgYm9yZGVyc1tpXS5ub2RlVHlwZSA9PSAxICYmXG4gICAgICAgICh2YWx1ZVtib3JkZXJzW2ldLmxvY2FsTmFtZV0gPSB0aGlzLnB0MlB4KFxuICAgICAgICAgIHRoaXMuYXNQdChib3JkZXJzW2ldLmF0dHIoJ3c6dycpKVxuICAgICAgICApKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdGJsQ2VsbFNwYWNpbmcoeCkge1xuICAgIHJldHVybiB0aGlzLnB0MlB4KHRoaXMuYXNQdCh4LmF0dHIoJ3c6dmFsJykpKTtcbiAgfVxuICB0YmxMb29rKHgpIHtcbiAgICByZXR1cm4gdGhpcy5hc09iamVjdCh4LCBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHgpO1xuICAgIH0pO1xuICB9XG4gIHRibFN0eWxlUm93QmFuZFNpemUoeCkge1xuICAgIHJldHVybiBwYXJzZUludCh4LmF0dHIoJ3c6dmFsJykpO1xuICB9XG4gIHRibFN0eWxlQ29sQmFuZFNpemUoeCkge1xuICAgIHJldHVybiBwYXJzZUludCh4LmF0dHIoJ3c6dmFsJykpO1xuICB9XG4gIHRibFcoeCkge1xuICAgIHN3aXRjaCAoeC5hdHRyKCd3OnR5cGUnKSkge1xuICAgICAgY2FzZSAncGN0JzpcbiAgICAgICAgcmV0dXJuIChwYXJzZUludCh4LmF0dHIoJ3c6dycpKSAqIDIpIC8gMTAwICsgJyUnO1xuICAgICAgY2FzZSAnYXV0byc6XG4gICAgICAgIHJldHVybiAnYXV0byc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdGhpcy5wdDJQeCh0aGlzLmFzUHQoeC5hdHRyKCd3OncnKSkpO1xuICAgIH1cbiAgfVxuICB0YmxJbmQoeCkge1xuICAgIHJldHVybiB0aGlzLnB0MlB4KHRoaXMuYXNQdCh4LmF0dHIoJ3c6dycpKSk7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAndGFibGUnO1xuICB9XG59O1xuXG52YXIgU3R5bGVOYW1lTWFwID0ge1xuICBmaXJzdFJvdzogJ2ZpcnN0Um93JyxcbiAgbGFzdFJvdzogJ2xhc3RSb3cnLFxuICBmaXJzdENvbHVtbjogJ2ZpcnN0Q29sJyxcbiAgbGFzdENvbHVtbjogJ2xhc3RDb2wnLFxuICBvZGRWQmFuZDogJ2JhbmQxVmVydCcsXG4gIGV2ZW5WQmFuZDogJ2JhbmQyVmVydCcsXG4gIG9kZEhCYW5kOiAnYmFuZDFIb3J6JyxcbiAgZXZlbkhCYW5kOiAnYmFuZDJIb3J6JyxcbiAgZmlyc3RSb3dGaXJzdENvbHVtbjogJ253Q2VsbCcsXG4gIGZpcnN0Um93TGFzdENvbHVtbjogJ25lQ2VsbCcsXG4gIGxhc3RSb3dGaXJzdENvbHVtbjogJ3N3Q2VsbCcsXG4gIGxhc3RSb3dMYXN0Q29sdW1uOiAnc2VDZWxsJyxcbn07XG5cblRhYmxlLlJvd1Byb3BlcnRpZXMgPSBjbGFzcyBSb3dQcm9wZXJ0aWVzIGV4dGVuZHMgU3R5bGUuUHJvcGVydGllcyB7XG4gIGNuZlN0eWxlKHgsIHQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoKHQgPSB0aGlzLmFzT2JqZWN0KHgpKSlcbiAgICAgIC5tYXAoKGEpID0+IHRbYV0gPT0gJzEnICYmIFN0eWxlTmFtZU1hcFthXSlcbiAgICAgIC5maWx0ZXIoKGEpID0+IGEpO1xuICB9XG4gIHRibENlbGxTcGFjaW5nKHgpIHtcbiAgICByZXR1cm4gdGhpcy5wdDJQeCh0aGlzLmFzUHQoeC5hdHRyKCd3OnZhbCcpKSk7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAncm93JztcbiAgfVxufTtcblxuVGFibGUuQ2VsbFByb3BlcnRpZXMgPSBjbGFzcyBDZWxsUHJvcGVydGllcyBleHRlbmRzIFN0eWxlLlByb3BlcnRpZXMge1xuICB0Y0JvcmRlcnMoeCkge1xuICAgIHZhciB2YWx1ZSA9IHt9O1xuICAgIGZvciAoXG4gICAgICB2YXIgYm9yZGVycyA9IHguY2hpbGROb2RlcywgYm9yZGVyLCBpID0gMCwgbGVuID0gYm9yZGVycy5sZW5ndGg7XG4gICAgICBpIDwgbGVuO1xuICAgICAgaSsrXG4gICAgKSB7XG4gICAgICBpZiAoYm9yZGVyc1tpXS5ub2RlVHlwZSAhPT0gMSkgY29udGludWU7XG4gICAgICBib3JkZXIgPSB2YWx1ZVsoYm9yZGVyID0gYm9yZGVyc1tpXSkubG9jYWxOYW1lXSA9IHRoaXMuYXNPYmplY3QoYm9yZGVyKTtcbiAgICAgIGJvcmRlci5zeiAmJiAoYm9yZGVyLnN6ID0gYm9yZGVyLnN6IC8gOCk7XG4gICAgICBib3JkZXIuY29sb3IgJiYgKGJvcmRlci5jb2xvciA9IHRoaXMuYXNDb2xvcihib3JkZXIuY29sb3IpKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHNoZCh4KSB7XG4gICAgcmV0dXJuIHRoaXMuYXNDb2xvcih4LmF0dHIoJ3c6ZmlsbCcpKTtcbiAgfVxuICBjbmZTdHlsZSh4LCB0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKCh0ID0gdGhpcy5hc09iamVjdCh4KSkpXG4gICAgICAubWFwKChhKSA9PiB0W2FdID09ICcxJyAmJiBTdHlsZU5hbWVNYXBbYV0pXG4gICAgICAuZmlsdGVyKChhKSA9PiBhKTtcbiAgfVxuICBncmlkU3Bhbih4KSB7XG4gICAgcmV0dXJuIHguYXR0cigndzp2YWwnKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdjZWxsJztcbiAgfVxufTtcbiJdfQ==