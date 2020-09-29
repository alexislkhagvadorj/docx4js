'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _hyperlink = require('./field/hyperlink');

var _hyperlink2 = _interopRequireDefault(_hyperlink);

var _date = require('./field/date');

var _date2 = _interopRequireDefault(_date);

var _ref = require('./field/ref');

var _ref2 = _interopRequireDefault(_ref);

var _pageref = require('./field/pageref');

var _pageref2 = _interopRequireDefault(_pageref);

var _toc = require('./field/toc');

var _toc2 = _interopRequireDefault(_toc);

var _page = require('./field/page');

var _page2 = _interopRequireDefault(_page);

var _field = require('./field/field');

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fields = { hyperlink: _hyperlink2.default, date: _date2.default, ref: _ref2.default, pageref: _pageref2.default, toc: _toc2.default, page: _page2.default };

var fieldBegin = function (_require) {
  _inherits(fieldBegin, _require);

  function fieldBegin() {
    _classCallCheck(this, fieldBegin);

    var _this = _possibleConstructorReturn(this, (fieldBegin.__proto__ || Object.getPrototypeOf(fieldBegin)).apply(this, arguments));

    _this.commands = [];
    return _this;
  }

  _createClass(fieldBegin, [{
    key: 'parse',
    value: function parse() {
      this.wDoc.parseContext.field.push(this);
      _get(fieldBegin.prototype.__proto__ || Object.getPrototypeOf(fieldBegin.prototype), 'parse', this).apply(this, arguments);
    }
  }, {
    key: 'instruct',
    value: function instruct(t) {
      this.commands.push(t);
    }
  }, {
    key: 'seperate',
    value: function seperate(seperator) {}
  }, {
    key: 'end',
    value: function end(endModel, endVisitors) {}
  }, {
    key: '_iterate',
    value: function _iterate(f, factories, visitors) {
      //delay to find real model
      this.end = function (endModel, endVisitors) {
        this.endModel = endModel;
        var instruct = this.commands.join('').trim(),
            index = instruct.indexOf(' '),
            type = (index != -1 ? instruct.substring(0, index) : instruct).toLowerCase();

        this.field = this.constructor.factory(instruct, this.wDoc, this, type);
        if (this.field) this.field = new _field2.default(instruct, this.wDoc, this, type);

        this.field.parse(factories);
      };
    }
  }, {
    key: '_getValidChildren',
    value: function _getValidChildren() {
      return [];
    }
  }], [{
    key: 'factory',
    value: function factory(instruct, wDoc, mParent, type) {
      try {
        return new fields[type](instruct, wDoc, mParent);
      } catch (e) {
        return null;
      }
    }
  }, {
    key: 'type',
    get: function get() {
      return 'fieldBegin';
    }
  }]);

  return fieldBegin;
}(require('../model'));

exports.default = fieldBegin;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2ZpZWxkQmVnaW4uanMiXSwibmFtZXMiOlsiZmllbGRzIiwiaHlwZXJsaW5rIiwiZGF0ZSIsInJlZiIsInBhZ2VyZWYiLCJ0b2MiLCJwYWdlIiwiZmllbGRCZWdpbiIsImFyZ3VtZW50cyIsImNvbW1hbmRzIiwid0RvYyIsInBhcnNlQ29udGV4dCIsImZpZWxkIiwicHVzaCIsInQiLCJzZXBlcmF0b3IiLCJlbmRNb2RlbCIsImVuZFZpc2l0b3JzIiwiZiIsImZhY3RvcmllcyIsInZpc2l0b3JzIiwiZW5kIiwiaW5zdHJ1Y3QiLCJqb2luIiwidHJpbSIsImluZGV4IiwiaW5kZXhPZiIsInR5cGUiLCJzdWJzdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImNvbnN0cnVjdG9yIiwiZmFjdG9yeSIsImJhc2ljIiwicGFyc2UiLCJtUGFyZW50IiwiZSIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBUyxFQUFFQyw4QkFBRixFQUFhQyxvQkFBYixFQUFtQkMsa0JBQW5CLEVBQXdCQywwQkFBeEIsRUFBaUNDLGtCQUFqQyxFQUFzQ0Msb0JBQXRDLEVBQWI7O0lBQ3FCQyxVOzs7QUFDbkIsd0JBQWM7QUFBQTs7QUFBQSx5SEFDSEMsU0FERzs7QUFFWixVQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBRlk7QUFHYjs7Ozs0QkFFTztBQUNOLFdBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QkMsS0FBdkIsQ0FBNkJDLElBQTdCLENBQWtDLElBQWxDO0FBQ0EscUhBQWVMLFNBQWY7QUFDRDs7OzZCQUNRTSxDLEVBQUc7QUFDVixXQUFLTCxRQUFMLENBQWNJLElBQWQsQ0FBbUJDLENBQW5CO0FBQ0Q7Ozs2QkFDUUMsUyxFQUFXLENBQUU7Ozt3QkFDbEJDLFEsRUFBVUMsVyxFQUFhLENBQUU7Ozs2QkFDcEJDLEMsRUFBR0MsUyxFQUFXQyxRLEVBQVU7QUFDL0I7QUFDQSxXQUFLQyxHQUFMLEdBQVcsVUFBVUwsUUFBVixFQUFvQkMsV0FBcEIsRUFBaUM7QUFDMUMsYUFBS0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxZQUFJTSxXQUFXLEtBQUtiLFFBQUwsQ0FBY2MsSUFBZCxDQUFtQixFQUFuQixFQUF1QkMsSUFBdkIsRUFBZjtBQUFBLFlBQ0VDLFFBQVFILFNBQVNJLE9BQVQsQ0FBaUIsR0FBakIsQ0FEVjtBQUFBLFlBRUVDLE9BQU8sQ0FBQ0YsU0FBUyxDQUFDLENBQVYsR0FDSkgsU0FBU00sU0FBVCxDQUFtQixDQUFuQixFQUFzQkgsS0FBdEIsQ0FESSxHQUVKSCxRQUZHLEVBR0xPLFdBSEssRUFGVDs7QUFPQSxhQUFLakIsS0FBTCxHQUFhLEtBQUtrQixXQUFMLENBQWlCQyxPQUFqQixDQUF5QlQsUUFBekIsRUFBbUMsS0FBS1osSUFBeEMsRUFBOEMsSUFBOUMsRUFBb0RpQixJQUFwRCxDQUFiO0FBQ0EsWUFBSSxLQUFLZixLQUFULEVBQWdCLEtBQUtBLEtBQUwsR0FBYSxJQUFJb0IsZUFBSixDQUFVVixRQUFWLEVBQW9CLEtBQUtaLElBQXpCLEVBQStCLElBQS9CLEVBQXFDaUIsSUFBckMsQ0FBYjs7QUFFaEIsYUFBS2YsS0FBTCxDQUFXcUIsS0FBWCxDQUFpQmQsU0FBakI7QUFDRCxPQWJEO0FBY0Q7Ozt3Q0FFbUI7QUFDbEIsYUFBTyxFQUFQO0FBQ0Q7Ozs0QkFNY0csUSxFQUFVWixJLEVBQU13QixPLEVBQVNQLEksRUFBTTtBQUM1QyxVQUFJO0FBQ0YsZUFBTyxJQUFJM0IsT0FBTzJCLElBQVAsQ0FBSixDQUFpQkwsUUFBakIsRUFBMkJaLElBQTNCLEVBQWlDd0IsT0FBakMsQ0FBUDtBQUNELE9BRkQsQ0FFRSxPQUFPQyxDQUFQLEVBQVU7QUFDVixlQUFPLElBQVA7QUFDRDtBQUNGOzs7d0JBVmlCO0FBQ2hCLGFBQU8sWUFBUDtBQUNEOzs7O0VBdkNxQ0MsUUFBUSxVQUFSLEM7O2tCQUFuQjdCLFUiLCJmaWxlIjoiZmllbGRCZWdpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoeXBlcmxpbmsgZnJvbSAnLi9maWVsZC9oeXBlcmxpbmsnO1xuaW1wb3J0IGRhdGUgZnJvbSAnLi9maWVsZC9kYXRlJztcbmltcG9ydCByZWYgZnJvbSAnLi9maWVsZC9yZWYnO1xuaW1wb3J0IHBhZ2VyZWYgZnJvbSAnLi9maWVsZC9wYWdlcmVmJztcbmltcG9ydCB0b2MgZnJvbSAnLi9maWVsZC90b2MnO1xuaW1wb3J0IHBhZ2UgZnJvbSAnLi9maWVsZC9wYWdlJztcbmltcG9ydCBiYXNpYyBmcm9tICcuL2ZpZWxkL2ZpZWxkJztcblxudmFyIGZpZWxkcyA9IHsgaHlwZXJsaW5rLCBkYXRlLCByZWYsIHBhZ2VyZWYsIHRvYywgcGFnZSB9O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZmllbGRCZWdpbiBleHRlbmRzIHJlcXVpcmUoJy4uL21vZGVsJykge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMuY29tbWFuZHMgPSBbXTtcbiAgfVxuXG4gIHBhcnNlKCkge1xuICAgIHRoaXMud0RvYy5wYXJzZUNvbnRleHQuZmllbGQucHVzaCh0aGlzKTtcbiAgICBzdXBlci5wYXJzZSguLi5hcmd1bWVudHMpO1xuICB9XG4gIGluc3RydWN0KHQpIHtcbiAgICB0aGlzLmNvbW1hbmRzLnB1c2godCk7XG4gIH1cbiAgc2VwZXJhdGUoc2VwZXJhdG9yKSB7fVxuICBlbmQoZW5kTW9kZWwsIGVuZFZpc2l0b3JzKSB7fVxuICBfaXRlcmF0ZShmLCBmYWN0b3JpZXMsIHZpc2l0b3JzKSB7XG4gICAgLy9kZWxheSB0byBmaW5kIHJlYWwgbW9kZWxcbiAgICB0aGlzLmVuZCA9IGZ1bmN0aW9uIChlbmRNb2RlbCwgZW5kVmlzaXRvcnMpIHtcbiAgICAgIHRoaXMuZW5kTW9kZWwgPSBlbmRNb2RlbDtcbiAgICAgIGxldCBpbnN0cnVjdCA9IHRoaXMuY29tbWFuZHMuam9pbignJykudHJpbSgpLFxuICAgICAgICBpbmRleCA9IGluc3RydWN0LmluZGV4T2YoJyAnKSxcbiAgICAgICAgdHlwZSA9IChpbmRleCAhPSAtMVxuICAgICAgICAgID8gaW5zdHJ1Y3Quc3Vic3RyaW5nKDAsIGluZGV4KVxuICAgICAgICAgIDogaW5zdHJ1Y3RcbiAgICAgICAgKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICB0aGlzLmZpZWxkID0gdGhpcy5jb25zdHJ1Y3Rvci5mYWN0b3J5KGluc3RydWN0LCB0aGlzLndEb2MsIHRoaXMsIHR5cGUpO1xuICAgICAgaWYgKHRoaXMuZmllbGQpIHRoaXMuZmllbGQgPSBuZXcgYmFzaWMoaW5zdHJ1Y3QsIHRoaXMud0RvYywgdGhpcywgdHlwZSk7XG5cbiAgICAgIHRoaXMuZmllbGQucGFyc2UoZmFjdG9yaWVzKTtcbiAgICB9O1xuICB9XG5cbiAgX2dldFZhbGlkQ2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnZmllbGRCZWdpbic7XG4gIH1cblxuICBzdGF0aWMgZmFjdG9yeShpbnN0cnVjdCwgd0RvYywgbVBhcmVudCwgdHlwZSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbmV3IGZpZWxkc1t0eXBlXShpbnN0cnVjdCwgd0RvYywgbVBhcmVudCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=