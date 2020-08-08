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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZmllbGRCZWdpbi5qcyJdLCJuYW1lcyI6WyJmaWVsZHMiLCJoeXBlcmxpbmsiLCJkYXRlIiwicmVmIiwicGFnZXJlZiIsInRvYyIsInBhZ2UiLCJmaWVsZEJlZ2luIiwiYXJndW1lbnRzIiwiY29tbWFuZHMiLCJ3RG9jIiwicGFyc2VDb250ZXh0IiwiZmllbGQiLCJwdXNoIiwidCIsInNlcGVyYXRvciIsImVuZE1vZGVsIiwiZW5kVmlzaXRvcnMiLCJmIiwiZmFjdG9yaWVzIiwidmlzaXRvcnMiLCJlbmQiLCJpbnN0cnVjdCIsImpvaW4iLCJ0cmltIiwiaW5kZXgiLCJpbmRleE9mIiwidHlwZSIsInN1YnN0cmluZyIsInRvTG93ZXJDYXNlIiwiY29uc3RydWN0b3IiLCJmYWN0b3J5IiwiYmFzaWMiLCJwYXJzZSIsIm1QYXJlbnQiLCJlIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxTQUFTLEVBQUVDLDhCQUFGLEVBQWFDLG9CQUFiLEVBQW1CQyxrQkFBbkIsRUFBd0JDLDBCQUF4QixFQUFpQ0Msa0JBQWpDLEVBQXNDQyxvQkFBdEMsRUFBYjs7SUFDcUJDLFU7OztBQUNuQix3QkFBYztBQUFBOztBQUFBLHlIQUNIQyxTQURHOztBQUVaLFVBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFGWTtBQUdiOzs7OzRCQUVPO0FBQ04sV0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCQyxLQUF2QixDQUE2QkMsSUFBN0IsQ0FBa0MsSUFBbEM7QUFDQSxxSEFBZUwsU0FBZjtBQUNEOzs7NkJBQ1FNLEMsRUFBRztBQUNWLFdBQUtMLFFBQUwsQ0FBY0ksSUFBZCxDQUFtQkMsQ0FBbkI7QUFDRDs7OzZCQUNRQyxTLEVBQVcsQ0FBRTs7O3dCQUNsQkMsUSxFQUFVQyxXLEVBQWEsQ0FBRTs7OzZCQUNwQkMsQyxFQUFHQyxTLEVBQVdDLFEsRUFBVTtBQUMvQjtBQUNBLFdBQUtDLEdBQUwsR0FBVyxVQUFVTCxRQUFWLEVBQW9CQyxXQUFwQixFQUFpQztBQUMxQyxhQUFLRCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFlBQUlNLFdBQVcsS0FBS2IsUUFBTCxDQUFjYyxJQUFkLENBQW1CLEVBQW5CLEVBQXVCQyxJQUF2QixFQUFmO0FBQUEsWUFDRUMsUUFBUUgsU0FBU0ksT0FBVCxDQUFpQixHQUFqQixDQURWO0FBQUEsWUFFRUMsT0FBTyxDQUFDRixTQUFTLENBQUMsQ0FBVixHQUNKSCxTQUFTTSxTQUFULENBQW1CLENBQW5CLEVBQXNCSCxLQUF0QixDQURJLEdBRUpILFFBRkcsRUFHTE8sV0FISyxFQUZUOztBQU9BLGFBQUtqQixLQUFMLEdBQWEsS0FBS2tCLFdBQUwsQ0FBaUJDLE9BQWpCLENBQXlCVCxRQUF6QixFQUFtQyxLQUFLWixJQUF4QyxFQUE4QyxJQUE5QyxFQUFvRGlCLElBQXBELENBQWI7QUFDQSxZQUFJLEtBQUtmLEtBQVQsRUFBZ0IsS0FBS0EsS0FBTCxHQUFhLElBQUlvQixlQUFKLENBQVVWLFFBQVYsRUFBb0IsS0FBS1osSUFBekIsRUFBK0IsSUFBL0IsRUFBcUNpQixJQUFyQyxDQUFiOztBQUVoQixhQUFLZixLQUFMLENBQVdxQixLQUFYLENBQWlCZCxTQUFqQjtBQUNELE9BYkQ7QUFjRDs7O3dDQUVtQjtBQUNsQixhQUFPLEVBQVA7QUFDRDs7OzRCQU1jRyxRLEVBQVVaLEksRUFBTXdCLE8sRUFBU1AsSSxFQUFNO0FBQzVDLFVBQUk7QUFDRixlQUFPLElBQUkzQixPQUFPMkIsSUFBUCxDQUFKLENBQWlCTCxRQUFqQixFQUEyQlosSUFBM0IsRUFBaUN3QixPQUFqQyxDQUFQO0FBQ0QsT0FGRCxDQUVFLE9BQU9DLENBQVAsRUFBVTtBQUNWLGVBQU8sSUFBUDtBQUNEO0FBQ0Y7Ozt3QkFWaUI7QUFDaEIsYUFBTyxZQUFQO0FBQ0Q7Ozs7RUF2Q3FDQyxRQUFRLFVBQVIsQzs7a0JBQW5CN0IsVSIsImZpbGUiOiJmaWVsZEJlZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh5cGVybGluayBmcm9tICcuL2ZpZWxkL2h5cGVybGluayc7XG5pbXBvcnQgZGF0ZSBmcm9tICcuL2ZpZWxkL2RhdGUnO1xuaW1wb3J0IHJlZiBmcm9tICcuL2ZpZWxkL3JlZic7XG5pbXBvcnQgcGFnZXJlZiBmcm9tICcuL2ZpZWxkL3BhZ2VyZWYnO1xuaW1wb3J0IHRvYyBmcm9tICcuL2ZpZWxkL3RvYyc7XG5pbXBvcnQgcGFnZSBmcm9tICcuL2ZpZWxkL3BhZ2UnO1xuaW1wb3J0IGJhc2ljIGZyb20gJy4vZmllbGQvZmllbGQnO1xuXG52YXIgZmllbGRzID0geyBoeXBlcmxpbmssIGRhdGUsIHJlZiwgcGFnZXJlZiwgdG9jLCBwYWdlIH07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBmaWVsZEJlZ2luIGV4dGVuZHMgcmVxdWlyZSgnLi4vbW9kZWwnKSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy5jb21tYW5kcyA9IFtdO1xuICB9XG5cbiAgcGFyc2UoKSB7XG4gICAgdGhpcy53RG9jLnBhcnNlQ29udGV4dC5maWVsZC5wdXNoKHRoaXMpO1xuICAgIHN1cGVyLnBhcnNlKC4uLmFyZ3VtZW50cyk7XG4gIH1cbiAgaW5zdHJ1Y3QodCkge1xuICAgIHRoaXMuY29tbWFuZHMucHVzaCh0KTtcbiAgfVxuICBzZXBlcmF0ZShzZXBlcmF0b3IpIHt9XG4gIGVuZChlbmRNb2RlbCwgZW5kVmlzaXRvcnMpIHt9XG4gIF9pdGVyYXRlKGYsIGZhY3RvcmllcywgdmlzaXRvcnMpIHtcbiAgICAvL2RlbGF5IHRvIGZpbmQgcmVhbCBtb2RlbFxuICAgIHRoaXMuZW5kID0gZnVuY3Rpb24gKGVuZE1vZGVsLCBlbmRWaXNpdG9ycykge1xuICAgICAgdGhpcy5lbmRNb2RlbCA9IGVuZE1vZGVsO1xuICAgICAgbGV0IGluc3RydWN0ID0gdGhpcy5jb21tYW5kcy5qb2luKCcnKS50cmltKCksXG4gICAgICAgIGluZGV4ID0gaW5zdHJ1Y3QuaW5kZXhPZignICcpLFxuICAgICAgICB0eXBlID0gKGluZGV4ICE9IC0xXG4gICAgICAgICAgPyBpbnN0cnVjdC5zdWJzdHJpbmcoMCwgaW5kZXgpXG4gICAgICAgICAgOiBpbnN0cnVjdFxuICAgICAgICApLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIHRoaXMuZmllbGQgPSB0aGlzLmNvbnN0cnVjdG9yLmZhY3RvcnkoaW5zdHJ1Y3QsIHRoaXMud0RvYywgdGhpcywgdHlwZSk7XG4gICAgICBpZiAodGhpcy5maWVsZCkgdGhpcy5maWVsZCA9IG5ldyBiYXNpYyhpbnN0cnVjdCwgdGhpcy53RG9jLCB0aGlzLCB0eXBlKTtcblxuICAgICAgdGhpcy5maWVsZC5wYXJzZShmYWN0b3JpZXMpO1xuICAgIH07XG4gIH1cblxuICBfZ2V0VmFsaWRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdmaWVsZEJlZ2luJztcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KGluc3RydWN0LCB3RG9jLCBtUGFyZW50LCB0eXBlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBuZXcgZmllbGRzW3R5cGVdKGluc3RydWN0LCB3RG9jLCBtUGFyZW50KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==