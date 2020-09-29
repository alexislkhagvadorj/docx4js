'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _list = require('./style/list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* numbering style is a normal paragraph style, plus
* numId Style with override/direct level style, 
* which inherit from abstract numbering definition
* rPr, and attribute of level style is on label only
* pPr of level style is on paragraph
list label: numId.level + abstract.level
list content: numId.level.pPr + abstract.level.pPr
priority: list style > p direct style >named style 
*/
var list = function (_require) {
  _inherits(list, _require);

  function list() {
    _classCallCheck(this, list);

    var _this = _possibleConstructorReturn(this, (list.__proto__ || Object.getPrototypeOf(list)).apply(this, arguments));

    var numId = function (t) {
      var numId = (t = _this.wXml.$1('>pPr>numPr')) && (t = t.$1('numId')) && (t = t.attr('w:val'));
      !numId && (t = _this.getNamedStyle()) && (numId = t.getNumId());
      return numId;
    }();

    var level = function (t) {
      return (t = _this.wXml.$1('>pPr>numPr>ilvl')) ? t.attr('w:val') : '0';
    }();

    _this.getLevel = function () {
      return level;
    };

    _this.getNumberingId = function () {
      return numId;
    };
    return _this;
  }

  _createClass(list, [{
    key: 'parse',
    value: function parse() {
      var numbering = this.wDoc.parseContext.numbering;

      numbering.push(this.getNumberingId(), parseInt(this.getLevel()));
      _get(list.prototype.__proto__ || Object.getPrototypeOf(list.prototype), 'parse', this).apply(this, arguments);
    }
  }, {
    key: 'getNumberingStyle',
    value: function getNumberingStyle() {
      return this.wDoc.style.get(_list2.default.asStyleId(this.getNumberingId()));
    }
  }, {
    key: 'getLabel',
    value: function getLabel() {
      return this.wDoc.parseContext.numbering.getLabel(this.getNumberingId(), parseInt(this.getLevel()));
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'list';
    }
  }]);

  return list;
}(require('./paragraph'));

list.Context = function () {
  function _class(doc) {
    _classCallCheck(this, _class);

    this.wDoc = doc;
    this._stack = new Map();
  }

  _createClass(_class, [{
    key: 'push',
    value: function push(id, level) {
      var list = void 0;
      if (!(list = this._stack.get(id))) this._stack.set(id, list = new Map());

      list.set(level, 1 + (list.get(level) || 0));
    }
  }, {
    key: 'getLabel',
    value: function getLabel(id, level) {
      var _wDoc$style$get;

      var ctx = this._stack.get(id);
      return (_wDoc$style$get = this.wDoc.style.get(_list2.default.asStyleId(id))).getLabel.apply(_wDoc$style$get, _toConsumableArray(ctx));
    }
  }]);

  return _class;
}();

exports.default = list;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2xpc3QuanMiXSwibmFtZXMiOlsibGlzdCIsImFyZ3VtZW50cyIsIm51bUlkIiwidCIsIndYbWwiLCIkMSIsImF0dHIiLCJnZXROYW1lZFN0eWxlIiwiZ2V0TnVtSWQiLCJsZXZlbCIsImdldExldmVsIiwiZ2V0TnVtYmVyaW5nSWQiLCJudW1iZXJpbmciLCJ3RG9jIiwicGFyc2VDb250ZXh0IiwicHVzaCIsInBhcnNlSW50Iiwic3R5bGUiLCJnZXQiLCJTdHlsZSIsImFzU3R5bGVJZCIsImdldExhYmVsIiwicmVxdWlyZSIsIkNvbnRleHQiLCJkb2MiLCJfc3RhY2siLCJNYXAiLCJpZCIsInNldCIsImN0eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7O0lBVXFCQSxJOzs7QUFDbkIsa0JBQWM7QUFBQTs7QUFBQSw2R0FDSEMsU0FERzs7QUFHWixRQUFJQyxRQUFTLFVBQUNDLENBQUQsRUFBTztBQUNsQixVQUFJRCxRQUNGLENBQUNDLElBQUksTUFBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsWUFBYixDQUFMLE1BQ0NGLElBQUlBLEVBQUVFLEVBQUYsQ0FBSyxPQUFMLENBREwsTUFFQ0YsSUFBSUEsRUFBRUcsSUFBRixDQUFPLE9BQVAsQ0FGTCxDQURGO0FBSUEsT0FBQ0osS0FBRCxLQUFXQyxJQUFJLE1BQUtJLGFBQUwsRUFBZixNQUF5Q0wsUUFBUUMsRUFBRUssUUFBRixFQUFqRDtBQUNBLGFBQU9OLEtBQVA7QUFDRCxLQVBXLEVBQVo7O0FBU0EsUUFBSU8sUUFBUyxVQUFDTixDQUFELEVBQU87QUFDbEIsYUFBTyxDQUFDQSxJQUFJLE1BQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLGlCQUFiLENBQUwsSUFBd0NGLEVBQUVHLElBQUYsQ0FBTyxPQUFQLENBQXhDLEdBQTBELEdBQWpFO0FBQ0QsS0FGVyxFQUFaOztBQUlBLFVBQUtJLFFBQUwsR0FBZ0I7QUFBQSxhQUFNRCxLQUFOO0FBQUEsS0FBaEI7O0FBRUEsVUFBS0UsY0FBTCxHQUFzQjtBQUFBLGFBQU1ULEtBQU47QUFBQSxLQUF0QjtBQWxCWTtBQW1CYjs7Ozs0QkFDTztBQUFBLFVBQ0FVLFNBREEsR0FDYyxLQUFLQyxJQUFMLENBQVVDLFlBRHhCLENBQ0FGLFNBREE7O0FBRU5BLGdCQUFVRyxJQUFWLENBQWUsS0FBS0osY0FBTCxFQUFmLEVBQXNDSyxTQUFTLEtBQUtOLFFBQUwsRUFBVCxDQUF0QztBQUNBLHlHQUFlVCxTQUFmO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsYUFBTyxLQUFLWSxJQUFMLENBQVVJLEtBQVYsQ0FBZ0JDLEdBQWhCLENBQW9CQyxlQUFNQyxTQUFOLENBQWdCLEtBQUtULGNBQUwsRUFBaEIsQ0FBcEIsQ0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUtFLElBQUwsQ0FBVUMsWUFBVixDQUF1QkYsU0FBdkIsQ0FBaUNTLFFBQWpDLENBQ0wsS0FBS1YsY0FBTCxFQURLLEVBRUxLLFNBQVMsS0FBS04sUUFBTCxFQUFULENBRkssQ0FBUDtBQUlEOzs7d0JBRWlCO0FBQ2hCLGFBQU8sTUFBUDtBQUNEOzs7O0VBeEMrQlksUUFBUSxhQUFSLEM7O0FBQWJ0QixJLENBMENadUIsTztBQUNMLGtCQUFZQyxHQUFaLEVBQWlCO0FBQUE7O0FBQ2YsU0FBS1gsSUFBTCxHQUFZVyxHQUFaO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQUlDLEdBQUosRUFBZDtBQUNEOzs7O3lCQUNJQyxFLEVBQUlsQixLLEVBQU87QUFDZCxVQUFJVCxhQUFKO0FBQ0EsVUFBSSxFQUFFQSxPQUFPLEtBQUt5QixNQUFMLENBQVlQLEdBQVosQ0FBZ0JTLEVBQWhCLENBQVQsQ0FBSixFQUNFLEtBQUtGLE1BQUwsQ0FBWUcsR0FBWixDQUFnQkQsRUFBaEIsRUFBcUIzQixPQUFPLElBQUkwQixHQUFKLEVBQTVCOztBQUVGMUIsV0FBSzRCLEdBQUwsQ0FBU25CLEtBQVQsRUFBZ0IsS0FBS1QsS0FBS2tCLEdBQUwsQ0FBU1QsS0FBVCxLQUFtQixDQUF4QixDQUFoQjtBQUNEOzs7NkJBRVFrQixFLEVBQUlsQixLLEVBQU87QUFBQTs7QUFDbEIsVUFBSW9CLE1BQU0sS0FBS0osTUFBTCxDQUFZUCxHQUFaLENBQWdCUyxFQUFoQixDQUFWO0FBQ0EsYUFBTyx3QkFBS2QsSUFBTCxDQUFVSSxLQUFWLENBQWdCQyxHQUFoQixDQUFvQkMsZUFBTUMsU0FBTixDQUFnQk8sRUFBaEIsQ0FBcEIsR0FBeUNOLFFBQXpDLDJDQUFxRFEsR0FBckQsRUFBUDtBQUNEOzs7Ozs7a0JBMURnQjdCLEkiLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZSBmcm9tICcuL3N0eWxlL2xpc3QnO1xuXG4vKipcbiogbnVtYmVyaW5nIHN0eWxlIGlzIGEgbm9ybWFsIHBhcmFncmFwaCBzdHlsZSwgcGx1c1xuKiBudW1JZCBTdHlsZSB3aXRoIG92ZXJyaWRlL2RpcmVjdCBsZXZlbCBzdHlsZSwgXG4qIHdoaWNoIGluaGVyaXQgZnJvbSBhYnN0cmFjdCBudW1iZXJpbmcgZGVmaW5pdGlvblxuKiByUHIsIGFuZCBhdHRyaWJ1dGUgb2YgbGV2ZWwgc3R5bGUgaXMgb24gbGFiZWwgb25seVxuKiBwUHIgb2YgbGV2ZWwgc3R5bGUgaXMgb24gcGFyYWdyYXBoXG5saXN0IGxhYmVsOiBudW1JZC5sZXZlbCArIGFic3RyYWN0LmxldmVsXG5saXN0IGNvbnRlbnQ6IG51bUlkLmxldmVsLnBQciArIGFic3RyYWN0LmxldmVsLnBQclxucHJpb3JpdHk6IGxpc3Qgc3R5bGUgPiBwIGRpcmVjdCBzdHlsZSA+bmFtZWQgc3R5bGUgXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbGlzdCBleHRlbmRzIHJlcXVpcmUoJy4vcGFyYWdyYXBoJykge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuXG4gICAgbGV0IG51bUlkID0gKCh0KSA9PiB7XG4gICAgICB2YXIgbnVtSWQgPVxuICAgICAgICAodCA9IHRoaXMud1htbC4kMSgnPnBQcj5udW1QcicpKSAmJlxuICAgICAgICAodCA9IHQuJDEoJ251bUlkJykpICYmXG4gICAgICAgICh0ID0gdC5hdHRyKCd3OnZhbCcpKTtcbiAgICAgICFudW1JZCAmJiAodCA9IHRoaXMuZ2V0TmFtZWRTdHlsZSgpKSAmJiAobnVtSWQgPSB0LmdldE51bUlkKCkpO1xuICAgICAgcmV0dXJuIG51bUlkO1xuICAgIH0pKCk7XG5cbiAgICBsZXQgbGV2ZWwgPSAoKHQpID0+IHtcbiAgICAgIHJldHVybiAodCA9IHRoaXMud1htbC4kMSgnPnBQcj5udW1Qcj5pbHZsJykpID8gdC5hdHRyKCd3OnZhbCcpIDogJzAnO1xuICAgIH0pKCk7XG5cbiAgICB0aGlzLmdldExldmVsID0gKCkgPT4gbGV2ZWw7XG5cbiAgICB0aGlzLmdldE51bWJlcmluZ0lkID0gKCkgPT4gbnVtSWQ7XG4gIH1cbiAgcGFyc2UoKSB7XG4gICAgbGV0IHsgbnVtYmVyaW5nIH0gPSB0aGlzLndEb2MucGFyc2VDb250ZXh0O1xuICAgIG51bWJlcmluZy5wdXNoKHRoaXMuZ2V0TnVtYmVyaW5nSWQoKSwgcGFyc2VJbnQodGhpcy5nZXRMZXZlbCgpKSk7XG4gICAgc3VwZXIucGFyc2UoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIGdldE51bWJlcmluZ1N0eWxlKCkge1xuICAgIHJldHVybiB0aGlzLndEb2Muc3R5bGUuZ2V0KFN0eWxlLmFzU3R5bGVJZCh0aGlzLmdldE51bWJlcmluZ0lkKCkpKTtcbiAgfVxuXG4gIGdldExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLndEb2MucGFyc2VDb250ZXh0Lm51bWJlcmluZy5nZXRMYWJlbChcbiAgICAgIHRoaXMuZ2V0TnVtYmVyaW5nSWQoKSxcbiAgICAgIHBhcnNlSW50KHRoaXMuZ2V0TGV2ZWwoKSlcbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnbGlzdCc7XG4gIH1cblxuICBzdGF0aWMgQ29udGV4dCA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihkb2MpIHtcbiAgICAgIHRoaXMud0RvYyA9IGRvYztcbiAgICAgIHRoaXMuX3N0YWNrID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBwdXNoKGlkLCBsZXZlbCkge1xuICAgICAgbGV0IGxpc3Q7XG4gICAgICBpZiAoIShsaXN0ID0gdGhpcy5fc3RhY2suZ2V0KGlkKSkpXG4gICAgICAgIHRoaXMuX3N0YWNrLnNldChpZCwgKGxpc3QgPSBuZXcgTWFwKCkpKTtcblxuICAgICAgbGlzdC5zZXQobGV2ZWwsIDEgKyAobGlzdC5nZXQobGV2ZWwpIHx8IDApKTtcbiAgICB9XG5cbiAgICBnZXRMYWJlbChpZCwgbGV2ZWwpIHtcbiAgICAgIHZhciBjdHggPSB0aGlzLl9zdGFjay5nZXQoaWQpO1xuICAgICAgcmV0dXJuIHRoaXMud0RvYy5zdHlsZS5nZXQoU3R5bGUuYXNTdHlsZUlkKGlkKSkuZ2V0TGFiZWwoLi4uY3R4KTtcbiAgICB9XG4gIH07XG59XG4iXX0=