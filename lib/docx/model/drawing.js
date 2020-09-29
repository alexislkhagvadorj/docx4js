'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drawing = function (_require) {
  _inherits(Drawing, _require);

  function Drawing(wXml) {
    _classCallCheck(this, Drawing);

    var _this = _possibleConstructorReturn(this, (Drawing.__proto__ || Object.getPrototypeOf(Drawing)).apply(this, arguments));

    _this.wDrawing = null;
    return _this;
  }

  _createClass(Drawing, [{
    key: 'getDirectStyle',
    value: function getDirectStyle() {
      return new this.constructor.Properties(this.wDrawing, this.wDoc, this);
    }
  }, {
    key: '_getValidChildren',
    value: function _getValidChildren() {
      return [];
    }
  }]);

  return Drawing;
}(require('../model'));

exports.default = Drawing;


Drawing.Properties = function (_Style$Properties) {
  _inherits(Properties, _Style$Properties);

  function Properties() {
    _classCallCheck(this, Properties);

    return _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));
  }

  _createClass(Properties, [{
    key: '_getValidChildren',
    value: function _getValidChildren(t) {
      return [this.wXml.$1('extent'), this.wXml.$1('effectExtent')];
    }
  }, {
    key: 'extent',
    value: function extent(x) {
      //inline and anchor
      return {
        width: this.pt2Px(this.asPt(x.attr('cx'), 'cm')),
        height: this.pt2Px(this.asPt(x.attr('cy'), 'cm'))
      };
    }
  }, {
    key: 'effectExtent',
    value: function effectExtent(x) {
      var _this3 = this;

      return this.asObject(x, function (x) {
        return _this3.pt2Px(_this3.asPt(x, 'cm'));
      });
    }
  }, {
    key: 'distT',
    value: function distT(x) {
      if (x = parseInt(x.value)) return this.pt2Px(this.asPt(x, 'cm'));
      return this.EMPTY;
    }
  }, {
    key: 'distB',
    value: function distB(x) {
      return this.distT(x);
    }
  }, {
    key: 'distR',
    value: function distR(x) {
      return this.distT(x);
    }
  }, {
    key: 'distL',
    value: function distL(x) {
      return this.distT(x);
    }
  }], [{
    key: 'mixinSpProperties',
    value: function mixinSpProperties() {
      Object.assign(this.naming, {
        custGeom: 'path',
        prstGeom: 'path'
      });

      Object.assign(this.prototype, Drawing.SpProperties);
    }
  }]);

  return Properties;
}(_style2.default.Properties);

Drawing.SpProperties = {
  xfrm: function xfrm(x) {
    var ext = x.$1('ext'),
        offset = x.$1('off');
    return this.world = {
      width: this.pt2Px(this.asPt(ext.attr('cx'), 'cm')),
      height: this.pt2Px(this.asPt(ext.attr('cy'), 'cm')),
      x: this.pt2Px(this.asPt(offset.attr('x'), 'cm')),
      y: this.pt2Px(this.asPt(offset.attr('y'), 'cm')),
      rotation: parseInt(x.attr('rot') || 0) / 60000
    };
  },
  solidFill: function solidFill(x) {
    var elColor = x.firstChild;
    if (elColor) {
      var color = this.asColor(elColor.attr('val')),
          t;
      if (color == 'phClr') return 'phClr';

      switch (elColor.localName) {
        case 'schemeClr':
          color = this.wDoc.getColorTheme().get(color);
          break;
      }

      if (t = elColor.$1('shade')) color = this.shadeColor(color, -1 * parseInt(t.attr('val')) / 1000);

      if (t = elColor.$1('lumOff')) color = this.shadeColor(color, -1 * parseInt(t.attr('val')) / 1000);

      return color;
    }
  },
  noFill: function noFill(x) {
    return 1;
  },
  gradFill: function gradFill(x) {
    var type = x.$1('lin,path'),
        o = this.asObject(type),
        stops = [];
    for (var gs = x.$('gs'), a, i = 0, len = gs.length; i < len; i++) {
      stops.push({
        position: parseInt(gs[i].attr('pos')) / 1000,
        color: this.solidFill(gs[i])
      });
    }o.ang && (o.angel = parseInt(o.ang) / 60000, delete o.ang);
    o.path && (o.rect = this.asObject(type.firstChild, function (x) {
      return parseInt(x) / 1000;
    }));
    o.path = type.localName == 'lin' ? 'linear' : o.path;
    o.stops = stops;
    return o;
  },
  ln: function ln(x) {
    if (x.$1('noFill')) return { width: 0 };

    var o = this.asObject(x),
        t;

    (t = x.$1('solidFill')) && (o.color = this.solidFill(t));

    (t = o.w) && (o.width = this.asPt(t, 'cm')) && delete o.w;
    (t = x.$1('prstDash')) && (o.dash = t.attr('val'));
    return o;
  },
  effectLst: function effectLst(x) {},
  blipFill: function blipFill(x) {
    return this.wDoc.getRel(x.$1('blip').attr('r:embed'));
  },
  prstGeom: function prstGeom(x) {
    var px = this.pt2Px,
        w = px(this.world.width),
        h = px(this.world.height);
    switch (x.attr('prst')) {
      case 'leftBrace':
        return {
          shape: 'path',
          path: 'M ' + w + ' 0 L 0 ' + h / 2 + ' L ' + w + ' ' + h + ' Z'
        };
      default:
        return { shape: x.attr('prst') };
    }
  },
  custGeom: function custGeom(x) {
    var path = [],
        px = function (x) {
      return this.pt2Px(this.asPt(x, 'cm'));
    }.bind(this);
    for (var a, children = x.$1('path').childNodes, len = children.length, i = 0; i < len; i++) {
      a = children[i];
      switch (a.localName) {
        case 'moveTo':
          path.push('M ' + px(a.firstChild.attr('x')) + ' ' + px(a.firstChild.attr('y')));
          break;
        case 'lnTo':
          path.push('L ' + px(a.firstChild.attr('x')) + ' ' + px(a.firstChild.attr('y')));
          break;
          break;
        case 'cubicBezTo':
          path.push('L ' + px(a.childNodes[0].attr('x')) + ' ' + px(a.childNodes[0].attr('y')));
          path.push('Q ' + px(a.childNodes[1].attr('x')) + ' ' + px(a.childNodes[1].attr('y')) + ' ' + px(a.childNodes[2].attr('x')) + ' ' + px(a.childNodes[2].attr('y')));
          break;
      }
    }
    return { shape: 'path', path: path.join(' ') };
  }
};
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2RyYXdpbmcuanMiXSwibmFtZXMiOlsiRHJhd2luZyIsIndYbWwiLCJhcmd1bWVudHMiLCJ3RHJhd2luZyIsImNvbnN0cnVjdG9yIiwiUHJvcGVydGllcyIsIndEb2MiLCJyZXF1aXJlIiwidCIsIiQxIiwieCIsIndpZHRoIiwicHQyUHgiLCJhc1B0IiwiYXR0ciIsImhlaWdodCIsImFzT2JqZWN0IiwicGFyc2VJbnQiLCJ2YWx1ZSIsIkVNUFRZIiwiZGlzdFQiLCJPYmplY3QiLCJhc3NpZ24iLCJuYW1pbmciLCJjdXN0R2VvbSIsInByc3RHZW9tIiwicHJvdG90eXBlIiwiU3BQcm9wZXJ0aWVzIiwiU3R5bGUiLCJ4ZnJtIiwiZXh0Iiwib2Zmc2V0Iiwid29ybGQiLCJ5Iiwicm90YXRpb24iLCJzb2xpZEZpbGwiLCJlbENvbG9yIiwiZmlyc3RDaGlsZCIsImNvbG9yIiwiYXNDb2xvciIsImxvY2FsTmFtZSIsImdldENvbG9yVGhlbWUiLCJnZXQiLCJzaGFkZUNvbG9yIiwibm9GaWxsIiwiZ3JhZEZpbGwiLCJ0eXBlIiwibyIsInN0b3BzIiwiZ3MiLCIkIiwiYSIsImkiLCJsZW4iLCJsZW5ndGgiLCJwdXNoIiwicG9zaXRpb24iLCJhbmciLCJhbmdlbCIsInBhdGgiLCJyZWN0IiwibG4iLCJ3IiwiZGFzaCIsImVmZmVjdExzdCIsImJsaXBGaWxsIiwiZ2V0UmVsIiwicHgiLCJoIiwic2hhcGUiLCJiaW5kIiwiY2hpbGRyZW4iLCJjaGlsZE5vZGVzIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7QUFDbkIsbUJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFBQSxtSEFDUEMsU0FETzs7QUFFaEIsVUFBS0MsUUFBTCxHQUFnQixJQUFoQjtBQUZnQjtBQUdqQjs7OztxQ0FDZ0I7QUFDZixhQUFPLElBQUksS0FBS0MsV0FBTCxDQUFpQkMsVUFBckIsQ0FBZ0MsS0FBS0Ys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QUFHQTtBQUNBO0FBQ0YsYUFBSyxZQUFMO0FBQ0U2QyxlQUFLSixJQUFMLENBQ0UsT0FDRVksR0FBR2hCLEVBQUVxQixVQUFGLENBQWEsQ0FBYixFQUFnQjFELElBQWhCLENBQXFCLEdBQXJCLENBQUgsQ0FERixHQUVFLEdBRkYsR0FHRXFELEdBQUdoQixFQUFFcUIsVUFBRixDQUFhLENBQWIsRUFBZ0IxRCxJQUFoQixDQUFxQixHQUFyQixDQUFILENBSko7QUFNQTZDLGVBQUtKLElBQUwsQ0FDRSxPQUNFWSxHQUFHaEIsRUFBRXFCLFVBQUYsQ0FBYSxDQUFiLEVBQWdCMUQsSUFBaEIsQ0FBcUIsR0FBckIsQ0FBSCxDQURGLEdBRUUsR0FGRixHQUdFcUQsR0FBR2hCLEVBQUVxQixVQUFGLENBQWEsQ0FBYixFQUFnQjFELElBQWhCLENBQXFCLEdBQXJCLENBQUgsQ0FIRixHQUlFLEdBSkYsR0FLRXFELEdBQUdoQixFQUFFcUIsVUFBRixDQUFhLENBQWIsRUFBZ0IxRCxJQUFoQixDQUFxQixHQUFyQixDQUFILENBTEYsR0FNRSxHQU5GLEdBT0VxRCxHQUFHaEIsRUFBRXFCLFVBQUYsQ0FBYSxDQUFiLEVBQWdCMUQsSUFBaEIsQ0FBcUIsR0FBckIsQ0FBSCxDQVJKO0FBVUE7QUE3Qko7QUErQkQ7QUFDRCxXQUFPLEVBQUV1RCxPQUFPLE1BQVQsRUFBaUJWLE1BQU1BLEtBQUtjLElBQUwsQ0FBVSxHQUFWLENBQXZCLEVBQVA7QUFDRDtBQTlIb0IsQ0FBdkIiLCJmaWxlIjoiZHJhd2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZSBmcm9tICcuL3N0eWxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd2luZyBleHRlbmRzIHJlcXVpcmUoJy4uL21vZGVsJykge1xuICBjb25zdHJ1Y3Rvcih3WG1sKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLndEcmF3aW5nID0gbnVsbDtcbiAgfVxuICBnZXREaXJlY3RTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IuUHJvcGVydGllcyh0aGlzLndEcmF3aW5nLCB0aGlzLndEb2MsIHRoaXMpO1xuICB9XG4gIF9nZXRWYWxpZENoaWxkcmVuKCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5EcmF3aW5nLlByb3BlcnRpZXMgPSBjbGFzcyBQcm9wZXJ0aWVzIGV4dGVuZHMgU3R5bGUuUHJvcGVydGllcyB7XG4gIF9nZXRWYWxpZENoaWxkcmVuKHQpIHtcbiAgICByZXR1cm4gW3RoaXMud1htbC4kMSgnZXh0ZW50JyksIHRoaXMud1htbC4kMSgnZWZmZWN0RXh0ZW50JyldO1xuICB9XG4gIGV4dGVudCh4KSB7XG4gICAgLy9pbmxpbmUgYW5kIGFuY2hvclxuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogdGhpcy5wdDJQeCh0aGlzLmFzUHQoeC5hdHRyKCdjeCcpLCAnY20nKSksXG4gICAgICBoZWlnaHQ6IHRoaXMucHQyUHgodGhpcy5hc1B0KHguYXR0cignY3knKSwgJ2NtJykpLFxuICAgIH07XG4gIH1cbiAgZWZmZWN0RXh0ZW50KHgpIHtcbiAgICByZXR1cm4gdGhpcy5hc09iamVjdCh4LCAoeCkgPT4gdGhpcy5wdDJQeCh0aGlzLmFzUHQoeCwgJ2NtJykpKTtcbiAgfVxuICBkaXN0VCh4KSB7XG4gICAgaWYgKCh4ID0gcGFyc2VJbnQoeC52YWx1ZSkpKSByZXR1cm4gdGhpcy5wdDJQeCh0aGlzLmFzUHQoeCwgJ2NtJykpO1xuICAgIHJldHVybiB0aGlzLkVNUFRZO1xuICB9XG4gIGRpc3RCKHgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXN0VCh4KTtcbiAgfVxuICBkaXN0Uih4KSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzdFQoeCk7XG4gIH1cbiAgZGlzdEwoeCkge1xuICAgIHJldHVybiB0aGlzLmRpc3RUKHgpO1xuICB9XG5cbiAgc3RhdGljIG1peGluU3BQcm9wZXJ0aWVzKCkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5uYW1pbmcsIHtcbiAgICAgIGN1c3RHZW9tOiAncGF0aCcsXG4gICAgICBwcnN0R2VvbTogJ3BhdGgnLFxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnByb3RvdHlwZSwgRHJhd2luZy5TcFByb3BlcnRpZXMpO1xuICB9XG59O1xuXG5EcmF3aW5nLlNwUHJvcGVydGllcyA9IHtcbiAgeGZybSh4KSB7XG4gICAgdmFyIGV4dCA9IHguJDEoJ2V4dCcpLFxuICAgICAgb2Zmc2V0ID0geC4kMSgnb2ZmJyk7XG4gICAgcmV0dXJuICh0aGlzLndvcmxkID0ge1xuICAgICAgd2lkdGg6IHRoaXMucHQyUHgodGhpcy5hc1B0KGV4dC5hdHRyKCdjeCcpLCAnY20nKSksXG4gICAgICBoZWlnaHQ6IHRoaXMucHQyUHgodGhpcy5hc1B0KGV4dC5hdHRyKCdjeScpLCAnY20nKSksXG4gICAgICB4OiB0aGlzLnB0MlB4KHRoaXMuYXNQdChvZmZzZXQuYXR0cigneCcpLCAnY20nKSksXG4gICAgICB5OiB0aGlzLnB0MlB4KHRoaXMuYXNQdChvZmZzZXQuYXR0cigneScpLCAnY20nKSksXG4gICAgICByb3RhdGlvbjogcGFyc2VJbnQoeC5hdHRyKCdyb3QnKSB8fCAwKSAvIDYwMDAwLFxuICAgIH0pO1xuICB9LFxuICBzb2xpZEZpbGwoeCkge1xuICAgIHZhciBlbENvbG9yID0geC5maXJzdENoaWxkO1xuICAgIGlmIChlbENvbG9yKSB7XG4gICAgICB2YXIgY29sb3IgPSB0aGlzLmFzQ29sb3IoZWxDb2xvci5hdHRyKCd2YWwnKSksIHQ7XG4gICAgICBpZiAoY29sb3IgPT0gJ3BoQ2xyJykgcmV0dXJuICdwaENscic7XG5cbiAgICAgIHN3aXRjaCAoZWxDb2xvci5sb2NhbE5hbWUpIHtcbiAgICAgICAgY2FzZSAnc2NoZW1lQ2xyJzpcbiAgICAgICAgICBjb2xvciA9IHRoaXMud0RvYy5nZXRDb2xvclRoZW1lKCkuZ2V0KGNvbG9yKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKCh0ID0gZWxDb2xvci4kMSgnc2hhZGUnKSkpXG4gICAgICAgIGNvbG9yID0gdGhpcy5zaGFkZUNvbG9yKGNvbG9yLCAoLTEgKiBwYXJzZUludCh0LmF0dHIoJ3ZhbCcpKSkgLyAxMDAwKTtcblxuICAgICAgaWYgKCh0ID0gZWxDb2xvci4kMSgnbHVtT2ZmJykpKVxuICAgICAgICBjb2xvciA9IHRoaXMuc2hhZGVDb2xvcihjb2xvciwgKC0xICogcGFyc2VJbnQodC5hdHRyKCd2YWwnKSkpIC8gMTAwMCk7XG5cbiAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9XG4gIH0sXG4gIG5vRmlsbCh4KSB7XG4gICAgcmV0dXJuIDE7XG4gIH0sXG4gIGdyYWRGaWxsKHgpIHtcbiAgICB2YXIgdHlwZSA9IHguJDEoJ2xpbixwYXRoJyksXG4gICAgICBvID0gdGhpcy5hc09iamVjdCh0eXBlKSxcbiAgICAgIHN0b3BzID0gW107XG4gICAgZm9yICh2YXIgZ3MgPSB4LiQoJ2dzJyksIGEsIGkgPSAwLCBsZW4gPSBncy5sZW5ndGg7IGkgPCBsZW47IGkrKylcbiAgICAgIHN0b3BzLnB1c2goe1xuICAgICAgICBwb3NpdGlvbjogcGFyc2VJbnQoZ3NbaV0uYXR0cigncG9zJykpIC8gMTAwMCxcbiAgICAgICAgY29sb3I6IHRoaXMuc29saWRGaWxsKGdzW2ldKSxcbiAgICAgIH0pO1xuICAgIG8uYW5nICYmICgoby5hbmdlbCA9IHBhcnNlSW50KG8uYW5nKSAvIDYwMDAwKSwgZGVsZXRlIG8uYW5nKTtcbiAgICBvLnBhdGggJiZcbiAgICAgIChvLnJlY3QgPSB0aGlzLmFzT2JqZWN0KHR5cGUuZmlyc3RDaGlsZCwgKHgpID0+IHBhcnNlSW50KHgpIC8gMTAwMCkpO1xuICAgIG8ucGF0aCA9IHR5cGUubG9jYWxOYW1lID09ICdsaW4nID8gJ2xpbmVhcicgOiBvLnBhdGg7XG4gICAgby5zdG9wcyA9IHN0b3BzO1xuICAgIHJldHVybiBvO1xuICB9LFxuICBsbih4KSB7XG4gICAgaWYgKHguJDEoJ25vRmlsbCcpKSByZXR1cm4geyB3aWR0aDogMCB9O1xuXG4gICAgdmFyIG8gPSB0aGlzLmFzT2JqZWN0KHgpLFxuICAgICAgdDtcblxuICAgICh0ID0geC4kMSgnc29saWRGaWxsJykpICYmIChvLmNvbG9yID0gdGhpcy5zb2xpZEZpbGwodCkpO1xuXG4gICAgKHQgPSBvLncpICYmIChvLndpZHRoID0gdGhpcy5hc1B0KHQsICdjbScpKSAmJiBkZWxldGUgby53O1xuICAgICh0ID0geC4kMSgncHJzdERhc2gnKSkgJiYgKG8uZGFzaCA9IHQuYXR0cigndmFsJykpO1xuICAgIHJldHVybiBvO1xuICB9LFxuICBlZmZlY3RMc3QoeCkge30sXG4gIGJsaXBGaWxsKHgpIHtcbiAgICByZXR1cm4gdGhpcy53RG9jLmdldFJlbCh4LiQxKCdibGlwJykuYXR0cigncjplbWJlZCcpKTtcbiAgfSxcbiAgcHJzdEdlb20oeCkge1xuICAgIHZhciBweCA9IHRoaXMucHQyUHgsXG4gICAgICB3ID0gcHgodGhpcy53b3JsZC53aWR0aCksXG4gICAgICBoID0gcHgodGhpcy53b3JsZC5oZWlnaHQpO1xuICAgIHN3aXRjaCAoeC5hdHRyKCdwcnN0JykpIHtcbiAgICAgIGNhc2UgJ2xlZnRCcmFjZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc2hhcGU6ICdwYXRoJyxcbiAgICAgICAgICBwYXRoOiAnTSAnICsgdyArICcgMCBMIDAgJyArIGggLyAyICsgJyBMICcgKyB3ICsgJyAnICsgaCArICcgWicsXG4gICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geyBzaGFwZTogeC5hdHRyKCdwcnN0JykgfTtcbiAgICB9XG4gIH0sXG4gIGN1c3RHZW9tKHgpIHtcbiAgICB2YXIgcGF0aCA9IFtdLFxuICAgICAgcHggPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wdDJQeCh0aGlzLmFzUHQoeCwgJ2NtJykpO1xuICAgICAgfS5iaW5kKHRoaXMpO1xuICAgIGZvciAoXG4gICAgICB2YXIgYSwgY2hpbGRyZW4gPSB4LiQxKCdwYXRoJykuY2hpbGROb2RlcywgbGVuID0gY2hpbGRyZW4ubGVuZ3RoLCBpID0gMDtcbiAgICAgIGkgPCBsZW47XG4gICAgICBpKytcbiAgICApIHtcbiAgICAgIGEgPSBjaGlsZHJlbltpXTtcbiAgICAgIHN3aXRjaCAoYS5sb2NhbE5hbWUpIHtcbiAgICAgICAgY2FzZSAnbW92ZVRvJzpcbiAgICAgICAgICBwYXRoLnB1c2goXG4gICAgICAgICAgICAnTSAnICsgcHgoYS5maXJzdENoaWxkLmF0dHIoJ3gnKSkgKyAnICcgKyBweChhLmZpcnN0Q2hpbGQuYXR0cigneScpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2xuVG8nOlxuICAgICAgICAgIHBhdGgucHVzaChcbiAgICAgICAgICAgICdMICcgKyBweChhLmZpcnN0Q2hpbGQuYXR0cigneCcpKSArICcgJyArIHB4KGEuZmlyc3RDaGlsZC5hdHRyKCd5JykpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3ViaWNCZXpUbyc6XG4gICAgICAgICAgcGF0aC5wdXNoKFxuICAgICAgICAgICAgJ0wgJyArXG4gICAgICAgICAgICAgIHB4KGEuY2hpbGROb2Rlc1swXS5hdHRyKCd4JykpICtcbiAgICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgICAgcHgoYS5jaGlsZE5vZGVzWzBdLmF0dHIoJ3knKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIHBhdGgucHVzaChcbiAgICAgICAgICAgICdRICcgK1xuICAgICAgICAgICAgICBweChhLmNoaWxkTm9kZXNbMV0uYXR0cigneCcpKSArXG4gICAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICAgIHB4KGEuY2hpbGROb2Rlc1sxXS5hdHRyKCd5JykpICtcbiAgICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgICAgcHgoYS5jaGlsZE5vZGVzWzJdLmF0dHIoJ3gnKSkgK1xuICAgICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgICBweChhLmNoaWxkTm9kZXNbMl0uYXR0cigneScpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHNoYXBlOiAncGF0aCcsIHBhdGg6IHBhdGguam9pbignICcpIH07XG4gIH0sXG59O1xuIl19