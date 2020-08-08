'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var model = function (_require) {
  _inherits(model, _require);

  function model(wXml, wDoc, mParent) {
    _classCallCheck(this, model);

    var _this = _possibleConstructorReturn(this, (model.__proto__ || Object.getPrototypeOf(model)).apply(this, arguments));

    _this.mParent = mParent;
    _this.content = [];
    if (mParent) mParent.content.push(_this);
    _this.type = _this.constructor.type;
    return _this;
  }

  _createClass(model, [{
    key: 'parse',
    value: function parse(visitFactories) {
      var _this2 = this;

      var visitors = [];
      var paramizedVisitFactories = [];
      $tool.map(visitFactories, function (visitFactory) {
        var visitor = visitFactory(this);
        if (visitor && visitor.visit() !== false) {
          visitors.push(visitor);
          paramizedVisitFactories.push(visitFactory.with(visitor));
        }
      }.bind(this));

      if (visitors.length > 0) {
        var factory = this.wDoc.factory.bind(this.wDoc);
        this._iterate(function (wXml) {
          return factory(wXml, _this2.wDoc, _this2).parse(paramizedVisitFactories);
        }, paramizedVisitFactories, visitors);
      }

      return visitors;
    }
  }, {
    key: '_iterate',
    value: function _iterate(f, paramizedVisitFactories) {
      for (var i = 0, children = this._getValidChildren(), l = children ? children.length : 0; i < l; i++) {
        !this._shouldIgnore(children[i]) && f(children[i]);
      }
    }
  }, {
    key: '_getValidChildren',
    value: function _getValidChildren() {
      return this.wXml.childNodes;
    }
  }, {
    key: '_shouldIgnore',
    value: function _shouldIgnore(wXml) {
      return false;
    }
  }, {
    key: '_attr',
    value: function _attr(selector, key) {
      var n = arguments.length == 1 ? (key = selector, this.wXml) : this.wXml.$1(selector);
      return n ? n.attr(key) : null;
    }
  }, {
    key: '_val',
    value: function _val(selector) {
      return this._attr(selector, 'w:val');
    }
  }]);

  return model;
}(require('../parser'));

exports.default = model;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwuanMiXSwibmFtZXMiOlsibW9kZWwiLCJ3WG1sIiwid0RvYyIsIm1QYXJlbnQiLCJhcmd1bWVudHMiLCJjb250ZW50IiwicHVzaCIsInR5cGUiLCJjb25zdHJ1Y3RvciIsInZpc2l0RmFjdG9yaWVzIiwidmlzaXRvcnMiLCJwYXJhbWl6ZWRWaXNpdEZhY3RvcmllcyIsIiR0b29sIiwibWFwIiwidmlzaXRGYWN0b3J5IiwidmlzaXRvciIsInZpc2l0Iiwid2l0aCIsImJpbmQiLCJsZW5ndGgiLCJmYWN0b3J5IiwiX2l0ZXJhdGUiLCJwYXJzZSIsImYiLCJpIiwiY2hpbGRyZW4iLCJfZ2V0VmFsaWRDaGlsZHJlbiIsImwiLCJfc2hvdWxkSWdub3JlIiwiY2hpbGROb2RlcyIsInNlbGVjdG9yIiwia2V5IiwibiIsIiQxIiwiYXR0ciIsIl9hdHRyIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLEs7OztBQUNuQixpQkFBWUMsSUFBWixFQUFrQkMsSUFBbEIsRUFBd0JDLE9BQXhCLEVBQWlDO0FBQUE7O0FBQUEsK0dBQ3RCQyxTQURzQjs7QUFFL0IsVUFBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsVUFBS0UsT0FBTCxHQUFlLEVBQWY7QUFDQSxRQUFJRixPQUFKLEVBQWFBLFFBQVFFLE9BQVIsQ0FBZ0JDLElBQWhCO0FBQ2IsVUFBS0MsSUFBTCxHQUFZLE1BQUtDLFdBQUwsQ0FBaUJELElBQTdCO0FBTCtCO0FBTWhDOzs7OzBCQUNLRSxjLEVBQWdCO0FBQUE7O0FBQ3BCLFVBQUlDLFdBQVcsRUFBZjtBQUNBLFVBQUlDLDBCQUEwQixFQUE5QjtBQUNBQyxZQUFNQyxHQUFOLENBQ0VKLGNBREYsRUFFRSxVQUFVSyxZQUFWLEVBQXdCO0FBQ3RCLFlBQUlDLFVBQVVELGFBQWEsSUFBYixDQUFkO0FBQ0EsWUFBSUMsV0FBV0EsUUFBUUMsS0FBUixPQUFvQixLQUFuQyxFQUEwQztBQUN4Q04sbUJBQVNKLElBQVQsQ0FBY1MsT0FBZDtBQUNBSixrQ0FBd0JMLElBQXhCLENBQTZCUSxhQUFhRyxJQUFiLENBQWtCRixPQUFsQixDQUE3QjtBQUNEO0FBQ0YsT0FORCxDQU1FRyxJQU5GLENBTU8sSUFOUCxDQUZGOztBQVdBLFVBQUlSLFNBQVNTLE1BQVQsR0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsWUFBSUMsVUFBVSxLQUFLbEIsSUFBTCxDQUFVa0IsT0FBVixDQUFrQkYsSUFBbEIsQ0FBdUIsS0FBS2hCLElBQTVCLENBQWQ7QUFDQSxhQUFLbUIsUUFBTCxDQUNFLFVBQUNwQixJQUFEO0FBQUEsaUJBQVVtQixRQUFRbkIsSUFBUixFQUFjLE9BQUtDLElBQW5CLEVBQXlCLE1BQXpCLEVBQStCb0IsS0FBL0IsQ0FBcUNYLHVCQUFyQyxDQUFWO0FBQUEsU0FERixFQUVFQSx1QkFGRixFQUdFRCxRQUhGO0FBS0Q7O0FBRUQsYUFBT0EsUUFBUDtBQUNEOzs7NkJBQ1FhLEMsRUFBR1osdUIsRUFBeUI7QUFDbkMsV0FDRSxJQUFJYSxJQUFJLENBQVIsRUFDRUMsV0FBVyxLQUFLQyxpQkFBTCxFQURiLEVBRUVDLElBQUlGLFdBQVdBLFNBQVNOLE1BQXBCLEdBQTZCLENBSHJDLEVBSUVLLElBQUlHLENBSk4sRUFLRUgsR0FMRjtBQU9FLFNBQUMsS0FBS0ksYUFBTCxDQUFtQkgsU0FBU0QsQ0FBVCxDQUFuQixDQUFELElBQW9DRCxFQUFFRSxTQUFTRCxDQUFULENBQUYsQ0FBcEM7QUFQRjtBQVFEOzs7d0NBQ21CO0FBQ2xCLGFBQU8sS0FBS3ZCLElBQUwsQ0FBVTRCLFVBQWpCO0FBQ0Q7OztrQ0FDYTVCLEksRUFBTTtBQUNsQixhQUFPLEtBQVA7QUFDRDs7OzBCQUNLNkIsUSxFQUFVQyxHLEVBQUs7QUFDbkIsVUFBSUMsSUFDRjVCLFVBQVVlLE1BQVYsSUFBb0IsQ0FBcEIsSUFDTVksTUFBTUQsUUFBUCxFQUFrQixLQUFLN0IsSUFENUIsSUFFSSxLQUFLQSxJQUFMLENBQVVnQyxFQUFWLENBQWFILFFBQWIsQ0FITjtBQUlBLGFBQU9FLElBQUlBLEVBQUVFLElBQUYsQ0FBT0gsR0FBUCxDQUFKLEdBQWtCLElBQXpCO0FBQ0Q7Ozt5QkFDSUQsUSxFQUFVO0FBQ2IsYUFBTyxLQUFLSyxLQUFMLENBQVdMLFFBQVgsRUFBcUIsT0FBckIsQ0FBUDtBQUNEOzs7O0VBMURnQ00sUUFBUSxXQUFSLEM7O2tCQUFkcEMsSyIsImZpbGUiOiJtb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIG1vZGVsIGV4dGVuZHMgcmVxdWlyZSgnLi4vcGFyc2VyJykge1xuICBjb25zdHJ1Y3Rvcih3WG1sLCB3RG9jLCBtUGFyZW50KSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLm1QYXJlbnQgPSBtUGFyZW50O1xuICAgIHRoaXMuY29udGVudCA9IFtdO1xuICAgIGlmIChtUGFyZW50KSBtUGFyZW50LmNvbnRlbnQucHVzaCh0aGlzKTtcbiAgICB0aGlzLnR5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLnR5cGU7XG4gIH1cbiAgcGFyc2UodmlzaXRGYWN0b3JpZXMpIHtcbiAgICB2YXIgdmlzaXRvcnMgPSBbXTtcbiAgICB2YXIgcGFyYW1pemVkVmlzaXRGYWN0b3JpZXMgPSBbXTtcbiAgICAkdG9vbC5tYXAoXG4gICAgICB2aXNpdEZhY3RvcmllcyxcbiAgICAgIGZ1bmN0aW9uICh2aXNpdEZhY3RvcnkpIHtcbiAgICAgICAgdmFyIHZpc2l0b3IgPSB2aXNpdEZhY3RvcnkodGhpcyk7XG4gICAgICAgIGlmICh2aXNpdG9yICYmIHZpc2l0b3IudmlzaXQoKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICB2aXNpdG9ycy5wdXNoKHZpc2l0b3IpO1xuICAgICAgICAgIHBhcmFtaXplZFZpc2l0RmFjdG9yaWVzLnB1c2godmlzaXRGYWN0b3J5LndpdGgodmlzaXRvcikpO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcylcbiAgICApO1xuXG4gICAgaWYgKHZpc2l0b3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCBmYWN0b3J5ID0gdGhpcy53RG9jLmZhY3RvcnkuYmluZCh0aGlzLndEb2MpO1xuICAgICAgdGhpcy5faXRlcmF0ZShcbiAgICAgICAgKHdYbWwpID0+IGZhY3Rvcnkod1htbCwgdGhpcy53RG9jLCB0aGlzKS5wYXJzZShwYXJhbWl6ZWRWaXNpdEZhY3RvcmllcyksXG4gICAgICAgIHBhcmFtaXplZFZpc2l0RmFjdG9yaWVzLFxuICAgICAgICB2aXNpdG9yc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaXRvcnM7XG4gIH1cbiAgX2l0ZXJhdGUoZiwgcGFyYW1pemVkVmlzaXRGYWN0b3JpZXMpIHtcbiAgICBmb3IgKFxuICAgICAgdmFyIGkgPSAwLFxuICAgICAgICBjaGlsZHJlbiA9IHRoaXMuX2dldFZhbGlkQ2hpbGRyZW4oKSxcbiAgICAgICAgbCA9IGNoaWxkcmVuID8gY2hpbGRyZW4ubGVuZ3RoIDogMDtcbiAgICAgIGkgPCBsO1xuICAgICAgaSsrXG4gICAgKVxuICAgICAgIXRoaXMuX3Nob3VsZElnbm9yZShjaGlsZHJlbltpXSkgJiYgZihjaGlsZHJlbltpXSk7XG4gIH1cbiAgX2dldFZhbGlkQ2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMud1htbC5jaGlsZE5vZGVzO1xuICB9XG4gIF9zaG91bGRJZ25vcmUod1htbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBfYXR0cihzZWxlY3Rvciwga2V5KSB7XG4gICAgdmFyIG4gPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA9PSAxXG4gICAgICAgID8gKChrZXkgPSBzZWxlY3RvciksIHRoaXMud1htbClcbiAgICAgICAgOiB0aGlzLndYbWwuJDEoc2VsZWN0b3IpO1xuICAgIHJldHVybiBuID8gbi5hdHRyKGtleSkgOiBudWxsO1xuICB9XG4gIF92YWwoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0cihzZWxlY3RvciwgJ3c6dmFsJyk7XG4gIH1cbn1cbiJdfQ==