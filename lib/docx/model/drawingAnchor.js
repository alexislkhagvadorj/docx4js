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

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2RyYXdpbmdBbmNob3IuanMiXSwibmFtZXMiOlsiZHJhd2luZ0FuY2hvciIsIndYbWwiLCJhcmd1bWVudHMiLCJ3RHJhd2luZyIsIiQxIiwiJCIsIlByb3BlcnRpZXMiLCJEcmF3aW5nIiwibmFtaW5nIiwiT2JqZWN0IiwiYXNzaWduIiwid3JhcE5vbmUiLCJ3cmFwU3F1YXJlIiwid3JhcFRvcEFuZEJvdHRvbSIsIndyYXBUaWdodCIsIndyYXBUaHJvdWdoIiwidCIsImNoaWxkcmVuIiwic3BsaXQiLCJmb3JFYWNoIiwiYSIsInB1c2giLCJ4IiwibyIsInJlbGF0aXZlRnJvbSIsImF0dHIiLCJmaXJzdENoaWxkIiwibG9jYWxOYW1lIiwicHQyUHgiLCJhc1B0IiwidGV4dENvbnRlbnQiLCJ0cmltIiwidmFsdWUiLCJFTVBUWSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGE7OztBQUNuQix5QkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUFBLCtIQUNQQyxTQURPOztBQUVoQixVQUFLQyxRQUFMLEdBQWdCRixLQUFLRyxFQUFMLENBQVEsc0JBQVIsQ0FBaEI7QUFGZ0I7QUFHakI7Ozs7d0NBRW1CO0FBQ2xCLGFBQU8sS0FBS0QsUUFBTCxDQUFjRSxDQUFkLENBQWdCLEtBQWhCLENBQVA7QUFDRDs7O3dCQUVpQjtBQUNoQixhQUFPLGdCQUFQO0FBQ0Q7Ozt3QkFFdUI7QUFDdEIsYUFBT0MsVUFBUDtBQUNEOzs7O0VBaEJ3Q0MsaUI7O2tCQUF0QlAsYTs7O0FBbUJyQixJQUFJUSxTQUFTQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkgsa0JBQVFELFVBQVIsQ0FBbUJFLE1BQXJDLEVBQTZDO0FBQ3hERyxZQUFVLE1BRDhDO0FBRXhEQyxjQUFZLE1BRjRDO0FBR3hEQyxvQkFBa0IsTUFIc0M7QUFJeERDLGFBQVcsTUFKNkM7QUFLeERDLGVBQWE7QUFMMkMsQ0FBN0MsQ0FBYjs7SUFPTVQsVTs7Ozs7Ozs7Ozs7d0NBU2dCO0FBQUE7O0FBQ2xCLFVBQUlVLENBQUo7QUFBQSxVQUNFQyxzSUFBc0NmLFNBQXRDLENBREY7QUFFQSx1RkFDR2dCLEtBREgsQ0FDUyxHQURULEVBRUdDLE9BRkgsQ0FFVyxVQUFDQyxDQUFELEVBQU87QUFDZCxTQUFDSixJQUFJLE9BQUtmLElBQUwsQ0FBVUcsRUFBVixDQUFhZ0IsQ0FBYixDQUFMLEtBQXlCSCxTQUFTSSxJQUFULENBQWNMLENBQWQsQ0FBekI7QUFDRCxPQUpIO0FBS0EsYUFBT0MsUUFBUDtBQUNEOzs7OEJBRVNLLEMsRUFBRztBQUNYLFVBQUlDLElBQUksRUFBRUMsY0FBY0YsRUFBRUcsSUFBRixDQUFPLGNBQVAsQ0FBaEIsRUFBUjtBQUNBRixRQUFFRCxFQUFFSSxVQUFGLENBQWFDLFNBQWYsSUFDRUwsRUFBRUksVUFBRixDQUFhQyxTQUFiLElBQTBCLFdBQTFCLEdBQ0ksS0FBS0MsS0FBTCxDQUFXLEtBQUtDLElBQUwsQ0FBVVAsRUFBRUksVUFBRixDQUFhSSxXQUFiLENBQXlCQyxJQUF6QixFQUFWLEVBQTJDLElBQTNDLENBQVgsQ0FESixHQUVJVCxFQUFFSSxVQUFGLENBQWFJLFdBQWIsQ0FBeUJDLElBQXpCLEVBSE47QUFJQSxhQUFPUixDQUFQO0FBQ0Q7Ozs4QkFDU0QsQyxFQUFHO0FBQ1gsVUFBSUMsSUFBSSxFQUFFQyxjQUFjRixFQUFFRyxJQUFGLENBQU8sY0FBUCxDQUFoQixFQUFSO0FBQ0FGLFFBQUVELEVBQUVJLFVBQUYsQ0FBYUMsU0FBZixJQUNFTCxFQUFFSSxVQUFGLENBQWFDLFNBQWIsSUFBMEIsV0FBMUIsR0FDSSxLQUFLQyxLQUFMLENBQVcsS0FBS0MsSUFBTCxDQUFVUCxFQUFFSSxVQUFGLENBQWFJLFdBQWIsQ0FBeUJDLElBQXpCLEVBQVYsRUFBMkMsSUFBM0MsQ0FBWCxDQURKLEdBRUlULEVBQUVJLFVBQUYsQ0FBYUksV0FBYixDQUF5QkMsSUFBekIsRUFITjtBQUlBLGFBQU9SLENBQVA7QUFDRDs7OytCQUNVO0FBQ1QsYUFBTyxNQUFQO0FBQ0Q7OztpQ0FDWTtBQUNYLGFBQU8sUUFBUDtBQUNEOzs7dUNBQ2tCO0FBQ2pCLGFBQU8sY0FBUDtBQUNEOzs7Z0NBQ1c7QUFDVixhQUFPLE9BQVA7QUFDRDs7O2tDQUNhO0FBQ1osYUFBTyxTQUFQO0FBQ0Q7Ozs4QkFDU0QsQyxFQUFHO0FBQ1gsYUFBT0EsRUFBRVUsS0FBRixJQUFXLEdBQVgsR0FBaUIsS0FBS0MsS0FBdEIsR0FBOEIsSUFBckM7QUFDRDs7O3dCQXBEaUI7QUFDaEIsYUFBTyxPQUFQO0FBQ0Q7Ozt3QkFFbUI7QUFDbEIsYUFBT3pCLE1BQVA7QUFDRDs7OztFQVBzQkQsa0JBQVFELFUiLCJmaWxlIjoiZHJhd2luZ0FuY2hvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEcmF3aW5nIGZyb20gJy4vZHJhd2luZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGRyYXdpbmdBbmNob3IgZXh0ZW5kcyBEcmF3aW5nIHtcbiAgY29uc3RydWN0b3Iod1htbCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy53RHJhd2luZyA9IHdYbWwuJDEoJ2RyYXdpbmc+OmZpcnN0LWNoaWxkJyk7XG4gIH1cblxuICBfZ2V0VmFsaWRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy53RHJhd2luZy4kKCd3c3AnKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2RyYXdpbmcuYW5jaG9yJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgUHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gUHJvcGVydGllcztcbiAgfVxufVxuXG52YXIgbmFtaW5nID0gT2JqZWN0LmFzc2lnbih7fSwgRHJhd2luZy5Qcm9wZXJ0aWVzLm5hbWluZywge1xuICB3cmFwTm9uZTogJ3dyYXAnLFxuICB3cmFwU3F1YXJlOiAnd3JhcCcsXG4gIHdyYXBUb3BBbmRCb3R0b206ICd3cmFwJyxcbiAgd3JhcFRpZ2h0OiAnd3JhcCcsXG4gIHdyYXBUaHJvdWdoOiAnd3JhcCcsXG59KTtcbmNsYXNzIFByb3BlcnRpZXMgZXh0ZW5kcyBEcmF3aW5nLlByb3BlcnRpZXMge1xuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdzaGFwZSc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG5hbWluZygpIHtcbiAgICByZXR1cm4gbmFtaW5nO1xuICB9XG5cbiAgX2dldFZhbGlkQ2hpbGRyZW4oKSB7XG4gICAgdmFyIHQsXG4gICAgICBjaGlsZHJlbiA9IHN1cGVyLl9nZXRWYWxpZENoaWxkcmVuKC4uLmFyZ3VtZW50cyk7XG4gICAgJ3Bvc2l0aW9uSCxwb3NpdGlvblYsd3JhcE5vbmUsd3JhcFNxdWFyZSx3cmFwVG9wQW5kQm90dG9tLHdyYXBUaWdodCx3cmFwVGhyb3VnaCdcbiAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAodCA9IHRoaXMud1htbC4kMShhKSkgJiYgY2hpbGRyZW4ucHVzaCh0KTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHBvc2l0aW9uSCh4KSB7XG4gICAgdmFyIG8gPSB7IHJlbGF0aXZlRnJvbTogeC5hdHRyKCdyZWxhdGl2ZUZyb20nKSB9O1xuICAgIG9beC5maXJzdENoaWxkLmxvY2FsTmFtZV0gPVxuICAgICAgeC5maXJzdENoaWxkLmxvY2FsTmFtZSA9PSAncG9zT2Zmc2V0J1xuICAgICAgICA/IHRoaXMucHQyUHgodGhpcy5hc1B0KHguZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKCksICdjbScpKVxuICAgICAgICA6IHguZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgcG9zaXRpb25WKHgpIHtcbiAgICB2YXIgbyA9IHsgcmVsYXRpdmVGcm9tOiB4LmF0dHIoJ3JlbGF0aXZlRnJvbScpIH07XG4gICAgb1t4LmZpcnN0Q2hpbGQubG9jYWxOYW1lXSA9XG4gICAgICB4LmZpcnN0Q2hpbGQubG9jYWxOYW1lID09ICdwb3NPZmZzZXQnXG4gICAgICAgID8gdGhpcy5wdDJQeCh0aGlzLmFzUHQoeC5maXJzdENoaWxkLnRleHRDb250ZW50LnRyaW0oKSwgJ2NtJykpXG4gICAgICAgIDogeC5maXJzdENoaWxkLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICByZXR1cm4gbztcbiAgfVxuICB3cmFwTm9uZSgpIHtcbiAgICByZXR1cm4gJ25vbmUnO1xuICB9XG4gIHdyYXBTcXVhcmUoKSB7XG4gICAgcmV0dXJuICdzcXVhcmUnO1xuICB9XG4gIHdyYXBUb3BBbmRCb3R0b20oKSB7XG4gICAgcmV0dXJuICd0b3BBbmRCb3R0b20nO1xuICB9XG4gIHdyYXBUaWdodCgpIHtcbiAgICByZXR1cm4gJ3RpZ2h0JztcbiAgfVxuICB3cmFwVGhyb3VnaCgpIHtcbiAgICByZXR1cm4gJ3Rocm91Z2gnO1xuICB9XG4gIGJlaGluZERvYyh4KSB7XG4gICAgcmV0dXJuIHgudmFsdWUgPT0gJzAnID8gdGhpcy5FTVBUWSA6IHRydWU7XG4gIH1cbn1cbiJdfQ==