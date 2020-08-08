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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvbGlzdC5qcyJdLCJuYW1lcyI6WyJsaXN0IiwiYXJndW1lbnRzIiwibnVtSWQiLCJ0Iiwid1htbCIsIiQxIiwiYXR0ciIsImdldE5hbWVkU3R5bGUiLCJnZXROdW1JZCIsImxldmVsIiwiZ2V0TGV2ZWwiLCJnZXROdW1iZXJpbmdJZCIsIm51bWJlcmluZyIsIndEb2MiLCJwYXJzZUNvbnRleHQiLCJwdXNoIiwicGFyc2VJbnQiLCJzdHlsZSIsImdldCIsIlN0eWxlIiwiYXNTdHlsZUlkIiwiZ2V0TGFiZWwiLCJyZXF1aXJlIiwiQ29udGV4dCIsImRvYyIsIl9zdGFjayIsIk1hcCIsImlkIiwic2V0IiwiY3R4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7SUFVcUJBLEk7OztBQUNuQixrQkFBYztBQUFBOztBQUFBLDZHQUNIQyxTQURHOztBQUdaLFFBQUlDLFFBQVMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2xCLFVBQUlELFFBQ0YsQ0FBQ0MsSUFBSSxNQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxZQUFiLENBQUwsTUFDQ0YsSUFBSUEsRUFBRUUsRUFBRixDQUFLLE9BQUwsQ0FETCxNQUVDRixJQUFJQSxFQUFFRyxJQUFGLENBQU8sT0FBUCxDQUZMLENBREY7QUFJQSxPQUFDSixLQUFELEtBQVdDLElBQUksTUFBS0ksYUFBTCxFQUFmLE1BQXlDTCxRQUFRQyxFQUFFSyxRQUFGLEVBQWpEO0FBQ0EsYUFBT04sS0FBUDtBQUNELEtBUFcsRUFBWjs7QUFTQSxRQUFJTyxRQUFTLFVBQUNOLENBQUQsRUFBTztBQUNsQixhQUFPLENBQUNBLElBQUksTUFBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsaUJBQWIsQ0FBTCxJQUF3Q0YsRUFBRUcsSUFBRixDQUFPLE9BQVAsQ0FBeEMsR0FBMEQsR0FBakU7QUFDRCxLQUZXLEVBQVo7O0FBSUEsVUFBS0ksUUFBTCxHQUFnQjtBQUFBLGFBQU1ELEtBQU47QUFBQSxLQUFoQjs7QUFFQSxVQUFLRSxjQUFMLEdBQXNCO0FBQUEsYUFBTVQsS0FBTjtBQUFBLEtBQXRCO0FBbEJZO0FBbUJiOzs7OzRCQUNPO0FBQUEsVUFDQVUsU0FEQSxHQUNjLEtBQUtDLElBQUwsQ0FBVUMsWUFEeEIsQ0FDQUYsU0FEQTs7QUFFTkEsZ0JBQVVHLElBQVYsQ0FBZSxLQUFLSixjQUFMLEVBQWYsRUFBc0NLLFNBQVMsS0FBS04sUUFBTCxFQUFULENBQXRDO0FBQ0EseUdBQWVULFNBQWY7QUFDRDs7O3dDQUVtQjtBQUNsQixhQUFPLEtBQUtZLElBQUwsQ0FBVUksS0FBVixDQUFnQkMsR0FBaEIsQ0FBb0JDLGVBQU1DLFNBQU4sQ0FBZ0IsS0FBS1QsY0FBTCxFQUFoQixDQUFwQixDQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0UsSUFBTCxDQUFVQyxZQUFWLENBQXVCRixTQUF2QixDQUFpQ1MsUUFBakMsQ0FDTCxLQUFLVixjQUFMLEVBREssRUFFTEssU0FBUyxLQUFLTixRQUFMLEVBQVQsQ0FGSyxDQUFQO0FBSUQ7Ozt3QkFFaUI7QUFDaEIsYUFBTyxNQUFQO0FBQ0Q7Ozs7RUF4QytCWSxRQUFRLGFBQVIsQzs7QUFBYnRCLEksQ0EwQ1p1QixPO0FBQ0wsa0JBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFDZixTQUFLWCxJQUFMLEdBQVlXLEdBQVo7QUFDQSxTQUFLQyxNQUFMLEdBQWMsSUFBSUMsR0FBSixFQUFkO0FBQ0Q7Ozs7eUJBQ0lDLEUsRUFBSWxCLEssRUFBTztBQUNkLFVBQUlULGFBQUo7QUFDQSxVQUFJLEVBQUVBLE9BQU8sS0FBS3lCLE1BQUwsQ0FBWVAsR0FBWixDQUFnQlMsRUFBaEIsQ0FBVCxDQUFKLEVBQ0UsS0FBS0YsTUFBTCxDQUFZRyxHQUFaLENBQWdCRCxFQUFoQixFQUFxQjNCLE9BQU8sSUFBSTBCLEdBQUosRUFBNUI7O0FBRUYxQixXQUFLNEIsR0FBTCxDQUFTbkIsS0FBVCxFQUFnQixLQUFLVCxLQUFLa0IsR0FBTCxDQUFTVCxLQUFULEtBQW1CLENBQXhCLENBQWhCO0FBQ0Q7Ozs2QkFFUWtCLEUsRUFBSWxCLEssRUFBTztBQUFBOztBQUNsQixVQUFJb0IsTUFBTSxLQUFLSixNQUFMLENBQVlQLEdBQVosQ0FBZ0JTLEVBQWhCLENBQVY7QUFDQSxhQUFPLHdCQUFLZCxJQUFMLENBQVVJLEtBQVYsQ0FBZ0JDLEdBQWhCLENBQW9CQyxlQUFNQyxTQUFOLENBQWdCTyxFQUFoQixDQUFwQixHQUF5Q04sUUFBekMsMkNBQXFEUSxHQUFyRCxFQUFQO0FBQ0Q7Ozs7OztrQkExRGdCN0IsSSIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gJy4vc3R5bGUvbGlzdCc7XG5cbi8qKlxuKiBudW1iZXJpbmcgc3R5bGUgaXMgYSBub3JtYWwgcGFyYWdyYXBoIHN0eWxlLCBwbHVzXG4qIG51bUlkIFN0eWxlIHdpdGggb3ZlcnJpZGUvZGlyZWN0IGxldmVsIHN0eWxlLCBcbiogd2hpY2ggaW5oZXJpdCBmcm9tIGFic3RyYWN0IG51bWJlcmluZyBkZWZpbml0aW9uXG4qIHJQciwgYW5kIGF0dHJpYnV0ZSBvZiBsZXZlbCBzdHlsZSBpcyBvbiBsYWJlbCBvbmx5XG4qIHBQciBvZiBsZXZlbCBzdHlsZSBpcyBvbiBwYXJhZ3JhcGhcbmxpc3QgbGFiZWw6IG51bUlkLmxldmVsICsgYWJzdHJhY3QubGV2ZWxcbmxpc3QgY29udGVudDogbnVtSWQubGV2ZWwucFByICsgYWJzdHJhY3QubGV2ZWwucFByXG5wcmlvcml0eTogbGlzdCBzdHlsZSA+IHAgZGlyZWN0IHN0eWxlID5uYW1lZCBzdHlsZSBcbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsaXN0IGV4dGVuZHMgcmVxdWlyZSgnLi9wYXJhZ3JhcGgnKSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG5cbiAgICBsZXQgbnVtSWQgPSAoKHQpID0+IHtcbiAgICAgIHZhciBudW1JZCA9XG4gICAgICAgICh0ID0gdGhpcy53WG1sLiQxKCc+cFByPm51bVByJykpICYmXG4gICAgICAgICh0ID0gdC4kMSgnbnVtSWQnKSkgJiZcbiAgICAgICAgKHQgPSB0LmF0dHIoJ3c6dmFsJykpO1xuICAgICAgIW51bUlkICYmICh0ID0gdGhpcy5nZXROYW1lZFN0eWxlKCkpICYmIChudW1JZCA9IHQuZ2V0TnVtSWQoKSk7XG4gICAgICByZXR1cm4gbnVtSWQ7XG4gICAgfSkoKTtcblxuICAgIGxldCBsZXZlbCA9ICgodCkgPT4ge1xuICAgICAgcmV0dXJuICh0ID0gdGhpcy53WG1sLiQxKCc+cFByPm51bVByPmlsdmwnKSkgPyB0LmF0dHIoJ3c6dmFsJykgOiAnMCc7XG4gICAgfSkoKTtcblxuICAgIHRoaXMuZ2V0TGV2ZWwgPSAoKSA9PiBsZXZlbDtcblxuICAgIHRoaXMuZ2V0TnVtYmVyaW5nSWQgPSAoKSA9PiBudW1JZDtcbiAgfVxuICBwYXJzZSgpIHtcbiAgICBsZXQgeyBudW1iZXJpbmcgfSA9IHRoaXMud0RvYy5wYXJzZUNvbnRleHQ7XG4gICAgbnVtYmVyaW5nLnB1c2godGhpcy5nZXROdW1iZXJpbmdJZCgpLCBwYXJzZUludCh0aGlzLmdldExldmVsKCkpKTtcbiAgICBzdXBlci5wYXJzZSguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgZ2V0TnVtYmVyaW5nU3R5bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMud0RvYy5zdHlsZS5nZXQoU3R5bGUuYXNTdHlsZUlkKHRoaXMuZ2V0TnVtYmVyaW5nSWQoKSkpO1xuICB9XG5cbiAgZ2V0TGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMud0RvYy5wYXJzZUNvbnRleHQubnVtYmVyaW5nLmdldExhYmVsKFxuICAgICAgdGhpcy5nZXROdW1iZXJpbmdJZCgpLFxuICAgICAgcGFyc2VJbnQodGhpcy5nZXRMZXZlbCgpKVxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdsaXN0JztcbiAgfVxuXG4gIHN0YXRpYyBDb250ZXh0ID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGRvYykge1xuICAgICAgdGhpcy53RG9jID0gZG9jO1xuICAgICAgdGhpcy5fc3RhY2sgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHB1c2goaWQsIGxldmVsKSB7XG4gICAgICBsZXQgbGlzdDtcbiAgICAgIGlmICghKGxpc3QgPSB0aGlzLl9zdGFjay5nZXQoaWQpKSlcbiAgICAgICAgdGhpcy5fc3RhY2suc2V0KGlkLCAobGlzdCA9IG5ldyBNYXAoKSkpO1xuXG4gICAgICBsaXN0LnNldChsZXZlbCwgMSArIChsaXN0LmdldChsZXZlbCkgfHwgMCkpO1xuICAgIH1cblxuICAgIGdldExhYmVsKGlkLCBsZXZlbCkge1xuICAgICAgdmFyIGN0eCA9IHRoaXMuX3N0YWNrLmdldChpZCk7XG4gICAgICByZXR1cm4gdGhpcy53RG9jLnN0eWxlLmdldChTdHlsZS5hc1N0eWxlSWQoaWQpKS5nZXRMYWJlbCguLi5jdHgpO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==