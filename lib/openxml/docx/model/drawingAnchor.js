'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _drawing = require('./drawing');

var _drawing2 = _interopRequireDefault(_drawing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var drawingAnchor = function (_Drawing) {
  _inherits(drawingAnchor, _Drawing);

  function drawingAnchor(wXml) {
    _classCallCheck(this, drawingAnchor);

    var _this = _possibleConstructorReturn(this, (drawingAnchor.__proto__ || Object.getPrototypeOf(drawingAnchor)).apply(this, arguments));

    _this.wDrawing = wXml.$1('drawing>:first-child');
    return _this;
  }

  _createClass(drawingAnchor, [{
    key: '_getValidChildren',
    value: function _getValidChildren() {
      return this.wDrawing.$('wsp');
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'drawing.anchor';
    }
  }, {
    key: 'Properties',
    get: function get() {
      return Properties;
    }
  }]);

  return drawingAnchor;
}(_drawing2.default);

exports.default = drawingAnchor;


var naming = Object.assign({}, _drawing2.default.Properties.naming, {
  wrapNone: 'wrap',
  wrapSquare: 'wrap',
  wrapTopAndBottom: 'wrap',
  wrapTight: 'wrap',
  wrapThrough: 'wrap'
});

var Properties = function (_Drawing$Properties) {
  _inherits(Properties, _Drawing$Properties);

  function Properties() {
    _classCallCheck(this, Properties);

    return _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));
  }

  _createClass(Properties, [{
    key: '_getValidChildren',
    value: function _getValidChildren() {
      var _this3 = this;

      var t,
          children = _get(Properties.prototype.__proto__ || Object.getPrototypeOf(Properties.prototype), '_getValidChildren', this).apply(this, arguments);
      'positionH,positionV,wrapNone,wrapSquare,wrapTopAndBottom,wrapTight,wrapThrough'.split(',').forEach(function (a) {
        (t = _this3.wXml.$1(a)) && children.push(t);
      });
      return children;
    }
  }, {
    key: 'positionH',
    value: function positionH(x) {
      var o = { relativeFrom: x.attr('relativeFrom') };
      o[x.firstChild.localName] = x.firstChild.localName == 'posOffset' ? this.pt2Px(this.asPt(x.firstChild.textContent.trim(), 'cm')) : x.firstChild.textContent.trim();
      return o;
    }
  }, {
    key: 'positionV',
    value: function positionV(x) {
      var o = { relativeFrom: x.attr('relativeFrom') };
      o[x.firstChild.localName] = x.firstChild.localName == 'posOffset' ? this.pt2Px(this.asPt(x.firstChild.textContent.trim(), 'cm')) : x.firstChild.textContent.trim();
      return o;
    }
  }, {
    key: 'wrapNone',
    value: function wrapNone() {
      return 'none';
    }
  }, {
    key: 'wrapSquare',
    value: function wrapSquare() {
      return 'square';
    }
  }, {
    key: 'wrapTopAndBottom',
    value: function wrapTopAndBottom() {
      return 'topAndBottom';
    }
  }, {
    key: 'wrapTight',
    value: function wrapTight() {
      return 'tight';
    }
  }, {
    key: 'wrapThrough',
    value: function wrapThrough() {
      return 'through';
    }
  }, {
    key: 'behindDoc',
    value: function behindDoc(x) {
      return x.value == '0' ? this.EMPTY : true;
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'shape';
    }
  }, {
    key: 'naming',
    get: function get() {
      return naming;
    }
  }]);

  return Properties;
}(_drawing2.default.Properties);

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZHJhd2luZ0FuY2hvci5qcyJdLCJuYW1lcyI6WyJkcmF3aW5nQW5jaG9yIiwid1htbCIsImFyZ3VtZW50cyIsIndEcmF3aW5nIiwiJDEiLCIkIiwiUHJvcGVydGllcyIsIkRyYXdpbmciLCJuYW1pbmciLCJPYmplY3QiLCJhc3NpZ24iLCJ3cmFwTm9uZSIsIndyYXBTcXVhcmUiLCJ3cmFwVG9wQW5kQm90dG9tIiwid3JhcFRpZ2h0Iiwid3JhcFRocm91Z2giLCJ0IiwiY2hpbGRyZW4iLCJzcGxpdCIsImZvckVhY2giLCJhIiwicHVzaCIsIngiLCJvIiwicmVsYXRpdmVGcm9tIiwiYXR0ciIsImZpcnN0Q2hpbGQiLCJsb2NhbE5hbWUiLCJwdDJQeCIsImFzUHQiLCJ0ZXh0Q29udGVudCIsInRyaW0iLCJ2YWx1ZSIsIkVNUFRZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsYTs7O0FBQ25CLHlCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQUEsK0hBQ1BDLFNBRE87O0FBRWhCLFVBQUtDLFFBQUwsR0FBZ0JGLEtBQUtHLEVBQUwsQ0FBUSxzQkFBUixDQUFoQjtBQUZnQjtBQUdqQjs7Ozt3Q0FFbUI7QUFDbEIsYUFBTyxLQUFLRCxRQUFMLENBQWNFLENBQWQsQ0FBZ0IsS0FBaEIsQ0FBUDtBQUNEOzs7d0JBRWlCO0FBQ2hCLGFBQU8sZ0JBQVA7QUFDRDs7O3dCQUV1QjtBQUN0QixhQUFPQyxVQUFQO0FBQ0Q7Ozs7RUFoQndDQyxpQjs7a0JBQXRCUCxhOzs7QUFtQnJCLElBQUlRLFNBQVNDLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCSCxrQkFBUUQsVUFBUixDQUFtQkUsTUFBckMsRUFBNkM7QUFDeERHLFlBQVUsTUFEOEM7QUFFeERDLGNBQVksTUFGNEM7QUFHeERDLG9CQUFrQixNQUhzQztBQUl4REMsYUFBVyxNQUo2QztBQUt4REMsZUFBYTtBQUwyQyxDQUE3QyxDQUFiOztJQU9NVCxVOzs7Ozs7Ozs7Ozt3Q0FTZ0I7QUFBQTs7QUFDbEIsVUFBSVUsQ0FBSjtBQUFBLFVBQ0VDLHNJQUFzQ2YsU0FBdEMsQ0FERjtBQUVBLHVGQUNHZ0IsS0FESCxDQUNTLEdBRFQsRUFFR0MsT0FGSCxDQUVXLFVBQUNDLENBQUQsRUFBTztBQUNkLFNBQUNKLElBQUksT0FBS2YsSUFBTCxDQUFVRyxFQUFWLENBQWFnQixDQUFiLENBQUwsS0FBeUJILFNBQVNJLElBQVQsQ0FBY0wsQ0FBZCxDQUF6QjtBQUNELE9BSkg7QUFLQSxhQUFPQyxRQUFQO0FBQ0Q7Ozs4QkFFU0ssQyxFQUFHO0FBQ1gsVUFBSUMsSUFBSSxFQUFFQyxjQUFjRixFQUFFRyxJQUFGLENBQU8sY0FBUCxDQUFoQixFQUFSO0FBQ0FGLFFBQUVELEVBQUVJLFVBQUYsQ0FBYUMsU0FBZixJQUNFTCxFQUFFSSxVQUFGLENBQWFDLFNBQWIsSUFBMEIsV0FBMUIsR0FDSSxLQUFLQyxLQUFMLENBQVcsS0FBS0MsSUFBTCxDQUFVUCxFQUFFSSxVQUFGLENBQWFJLFdBQWIsQ0FBeUJDLElBQXpCLEVBQVYsRUFBMkMsSUFBM0MsQ0FBWCxDQURKLEdBRUlULEVBQUVJLFVBQUYsQ0FBYUksV0FBYixDQUF5QkMsSUFBekIsRUFITjtBQUlBLGFBQU9SLENBQVA7QUFDRDs7OzhCQUNTRCxDLEVBQUc7QUFDWCxVQUFJQyxJQUFJLEVBQUVDLGNBQWNGLEVBQUVHLElBQUYsQ0FBTyxjQUFQLENBQWhCLEVBQVI7QUFDQUYsUUFBRUQsRUFBRUksVUFBRixDQUFhQyxTQUFmLElBQ0VMLEVBQUVJLFVBQUYsQ0FBYUMsU0FBYixJQUEwQixXQUExQixHQUNJLEtBQUtDLEtBQUwsQ0FBVyxLQUFLQyxJQUFMLENBQVVQLEVBQUVJLFVBQUYsQ0FBYUksV0FBYixDQUF5QkMsSUFBekIsRUFBVixFQUEyQyxJQUEzQyxDQUFYLENBREosR0FFSVQsRUFBRUksVUFBRixDQUFhSSxXQUFiLENBQXlCQyxJQUF6QixFQUhOO0FBSUEsYUFBT1IsQ0FBUDtBQUNEOzs7K0JBQ1U7QUFDVCxhQUFPLE1BQVA7QUFDRDs7O2lDQUNZO0FBQ1gsYUFBTyxRQUFQO0FBQ0Q7Ozt1Q0FDa0I7QUFDakIsYUFBTyxjQUFQO0FBQ0Q7OztnQ0FDVztBQUNWLGFBQU8sT0FBUDtBQUNEOzs7a0NBQ2E7QUFDWixhQUFPLFNBQVA7QUFDRDs7OzhCQUNTRCxDLEVBQUc7QUFDWCxhQUFPQSxFQUFFVSxLQUFGLElBQVcsR0FBWCxHQUFpQixLQUFLQyxLQUF0QixHQUE4QixJQUFyQztBQUNEOzs7d0JBcERpQjtBQUNoQixhQUFPLE9BQVA7QUFDRDs7O3dCQUVtQjtBQUNsQixhQUFPekIsTUFBUDtBQUNEOzs7O0VBUHNCRCxrQkFBUUQsVSIsImZpbGUiOiJkcmF3aW5nQW5jaG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyYXdpbmcgZnJvbSAnLi9kcmF3aW5nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZHJhd2luZ0FuY2hvciBleHRlbmRzIERyYXdpbmcge1xuICBjb25zdHJ1Y3Rvcih3WG1sKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLndEcmF3aW5nID0gd1htbC4kMSgnZHJhd2luZz46Zmlyc3QtY2hpbGQnKTtcbiAgfVxuXG4gIF9nZXRWYWxpZENoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLndEcmF3aW5nLiQoJ3dzcCcpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnZHJhd2luZy5hbmNob3InO1xuICB9XG5cbiAgc3RhdGljIGdldCBQcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiBQcm9wZXJ0aWVzO1xuICB9XG59XG5cbnZhciBuYW1pbmcgPSBPYmplY3QuYXNzaWduKHt9LCBEcmF3aW5nLlByb3BlcnRpZXMubmFtaW5nLCB7XG4gIHdyYXBOb25lOiAnd3JhcCcsXG4gIHdyYXBTcXVhcmU6ICd3cmFwJyxcbiAgd3JhcFRvcEFuZEJvdHRvbTogJ3dyYXAnLFxuICB3cmFwVGlnaHQ6ICd3cmFwJyxcbiAgd3JhcFRocm91Z2g6ICd3cmFwJyxcbn0pO1xuY2xhc3MgUHJvcGVydGllcyBleHRlbmRzIERyYXdpbmcuUHJvcGVydGllcyB7XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ3NoYXBlJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgbmFtaW5nKCkge1xuICAgIHJldHVybiBuYW1pbmc7XG4gIH1cblxuICBfZ2V0VmFsaWRDaGlsZHJlbigpIHtcbiAgICB2YXIgdCxcbiAgICAgIGNoaWxkcmVuID0gc3VwZXIuX2dldFZhbGlkQ2hpbGRyZW4oLi4uYXJndW1lbnRzKTtcbiAgICAncG9zaXRpb25ILHBvc2l0aW9uVix3cmFwTm9uZSx3cmFwU3F1YXJlLHdyYXBUb3BBbmRCb3R0b20sd3JhcFRpZ2h0LHdyYXBUaHJvdWdoJ1xuICAgICAgLnNwbGl0KCcsJylcbiAgICAgIC5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgICh0ID0gdGhpcy53WG1sLiQxKGEpKSAmJiBjaGlsZHJlbi5wdXNoKHQpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgcG9zaXRpb25IKHgpIHtcbiAgICB2YXIgbyA9IHsgcmVsYXRpdmVGcm9tOiB4LmF0dHIoJ3JlbGF0aXZlRnJvbScpIH07XG4gICAgb1t4LmZpcnN0Q2hpbGQubG9jYWxOYW1lXSA9XG4gICAgICB4LmZpcnN0Q2hpbGQubG9jYWxOYW1lID09ICdwb3NPZmZzZXQnXG4gICAgICAgID8gdGhpcy5wdDJQeCh0aGlzLmFzUHQoeC5maXJzdENoaWxkLnRleHRDb250ZW50LnRyaW0oKSwgJ2NtJykpXG4gICAgICAgIDogeC5maXJzdENoaWxkLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICByZXR1cm4gbztcbiAgfVxuICBwb3NpdGlvblYoeCkge1xuICAgIHZhciBvID0geyByZWxhdGl2ZUZyb206IHguYXR0cigncmVsYXRpdmVGcm9tJykgfTtcbiAgICBvW3guZmlyc3RDaGlsZC5sb2NhbE5hbWVdID1cbiAgICAgIHguZmlyc3RDaGlsZC5sb2NhbE5hbWUgPT0gJ3Bvc09mZnNldCdcbiAgICAgICAgPyB0aGlzLnB0MlB4KHRoaXMuYXNQdCh4LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQudHJpbSgpLCAnY20nKSlcbiAgICAgICAgOiB4LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQudHJpbSgpO1xuICAgIHJldHVybiBvO1xuICB9XG4gIHdyYXBOb25lKCkge1xuICAgIHJldHVybiAnbm9uZSc7XG4gIH1cbiAgd3JhcFNxdWFyZSgpIHtcbiAgICByZXR1cm4gJ3NxdWFyZSc7XG4gIH1cbiAgd3JhcFRvcEFuZEJvdHRvbSgpIHtcbiAgICByZXR1cm4gJ3RvcEFuZEJvdHRvbSc7XG4gIH1cbiAgd3JhcFRpZ2h0KCkge1xuICAgIHJldHVybiAndGlnaHQnO1xuICB9XG4gIHdyYXBUaHJvdWdoKCkge1xuICAgIHJldHVybiAndGhyb3VnaCc7XG4gIH1cbiAgYmVoaW5kRG9jKHgpIHtcbiAgICByZXR1cm4geC52YWx1ZSA9PSAnMCcgPyB0aGlzLkVNUFRZIDogdHJ1ZTtcbiAgfVxufVxuIl19