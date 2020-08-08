'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inline = require('./style/inline');

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Document = function (_require) {
  _inherits(Document, _require);

  function Document() {
    _classCallCheck(this, Document);

    return _possibleConstructorReturn(this, (Document.__proto__ || Object.getPrototypeOf(Document)).apply(this, arguments));
  }

  _createClass(Document, [{
    key: 'parse',
    value: function parse() {
      var _this2 = this;

      var visitors = _get(Document.prototype.__proto__ || Object.getPrototypeOf(Document.prototype), 'parse', this).apply(this, arguments);
      visitors.forEach(function (a) {
        return a.props = _this2.wDoc.props;
      });
      return visitors;
    }
  }, {
    key: '_getValidChildren',
    value: function _getValidChildren() {
      var children = [this.wDoc.getPart('styles').documentElement, this.wXml.$1('body')];
      var numbering = this.wDoc.getPart('word/numbering.xml');
      if (numbering) children.splice(1, 0, numbering.documentElement);
      return children;
    }

    /**
     * return color string, or
     * WeakMap:{bwmode,fillcolor,targetscreesize,color2,angle,focus,type}
     */

  }, {
    key: 'getBackgroundStyle',
    value: function getBackgroundStyle() {
      var pr = this.wXml.$1('>background');
      var stylePr = new _inline2.default.Properties(pr, this.wDoc, this);
      if (pr) {
        var fill = this.wXml.$1('fill');
        if (fill) {
          var attr = new WeakMap();
          fill.attributes.forEach(function (a) {
            return attr.set(a.localName, a.value);
          });
          fill.parentNode.attributes.forEach(function (a) {
            return attr.set(a.localName, a.value);
          });
          if (attr.has('fillcolor')) attr.fillcolor = stylePr.asColor(attr.get('fillcolor'));
          if (attr.has('color2')) attr.color2 = stylePr.asColor(attr.get('color2'));

          return attr;
        } else {
          return stylePr.color(pr);
        }
      }
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'document';
    }
  }]);

  return Document;
}(require('../model'));

exports.default = Document;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZG9jdW1lbnQuanMiXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJ2aXNpdG9ycyIsImFyZ3VtZW50cyIsImZvckVhY2giLCJhIiwicHJvcHMiLCJ3RG9jIiwiY2hpbGRyZW4iLCJnZXRQYXJ0IiwiZG9jdW1lbnRFbGVtZW50Iiwid1htbCIsIiQxIiwibnVtYmVyaW5nIiwic3BsaWNlIiwicHIiLCJzdHlsZVByIiwiU3R5bGUiLCJQcm9wZXJ0aWVzIiwiZmlsbCIsImF0dHIiLCJXZWFrTWFwIiwiYXR0cmlidXRlcyIsInNldCIsImxvY2FsTmFtZSIsInZhbHVlIiwicGFyZW50Tm9kZSIsImhhcyIsImZpbGxjb2xvciIsImFzQ29sb3IiLCJnZXQiLCJjb2xvcjIiLCJjb2xvciIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs0QkFDWDtBQUFBOztBQUNOLFVBQUlDLHNIQUEwQkMsU0FBMUIsQ0FBSjtBQUNBRCxlQUFTRSxPQUFULENBQWlCLFVBQUNDLENBQUQ7QUFBQSxlQUFRQSxFQUFFQyxLQUFGLEdBQVUsT0FBS0MsSUFBTCxDQUFVRCxLQUE1QjtBQUFBLE9BQWpCO0FBQ0EsYUFBT0osUUFBUDtBQUNEOzs7d0NBQ21CO0FBQ2xCLFVBQUlNLFdBQVcsQ0FDYixLQUFLRCxJQUFMLENBQVVFLE9BQVYsQ0FBa0IsUUFBbEIsRUFBNEJDLGVBRGYsRUFFYixLQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxNQUFiLENBRmEsQ0FBZjtBQUlBLFVBQUlDLFlBQVksS0FBS04sSUFBTCxDQUFVRSxPQUFWLENBQWtCLG9CQUFsQixDQUFoQjtBQUNBLFVBQUlJLFNBQUosRUFBZUwsU0FBU00sTUFBVCxDQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQkQsVUFBVUgsZUFBaEM7QUFDZixhQUFPRixRQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7eUNBSXFCO0FBQ25CLFVBQUlPLEtBQUssS0FBS0osSUFBTCxDQUFVQyxFQUFWLENBQWEsYUFBYixDQUFUO0FBQ0EsVUFBSUksVUFBVSxJQUFJQyxpQkFBTUMsVUFBVixDQUFxQkgsRUFBckIsRUFBeUIsS0FBS1IsSUFBOUIsRUFBb0MsSUFBcEMsQ0FBZDtBQUNBLFVBQUlRLEVBQUosRUFBUTtBQUNOLFlBQUlJLE9BQU8sS0FBS1IsSUFBTCxDQUFVQyxFQUFWLENBQWEsTUFBYixDQUFYO0FBQ0EsWUFBSU8sSUFBSixFQUFVO0FBQ1IsY0FBSUMsT0FBTyxJQUFJQyxPQUFKLEVBQVg7QUFDQUYsZUFBS0csVUFBTCxDQUFnQmxCLE9BQWhCLENBQXdCLFVBQUNDLENBQUQ7QUFBQSxtQkFBT2UsS0FBS0csR0FBTCxDQUFTbEIsRUFBRW1CLFNBQVgsRUFBc0JuQixFQUFFb0IsS0FBeEIsQ0FBUDtBQUFBLFdBQXhCO0FBQ0FOLGVBQUtPLFVBQUwsQ0FBZ0JKLFVBQWhCLENBQTJCbEIsT0FBM0IsQ0FBbUMsVUFBQ0MsQ0FBRDtBQUFBLG1CQUNqQ2UsS0FBS0csR0FBTCxDQUFTbEIsRUFBRW1CLFNBQVgsRUFBc0JuQixFQUFFb0IsS0FBeEIsQ0FEaUM7QUFBQSxXQUFuQztBQUdBLGNBQUlMLEtBQUtPLEdBQUwsQ0FBUyxXQUFULENBQUosRUFDRVAsS0FBS1EsU0FBTCxHQUFpQlosUUFBUWEsT0FBUixDQUFnQlQsS0FBS1UsR0FBTCxDQUFTLFdBQVQsQ0FBaEIsQ0FBakI7QUFDRixjQUFJVixLQUFLTyxHQUFMLENBQVMsUUFBVCxDQUFKLEVBQ0VQLEtBQUtXLE1BQUwsR0FBY2YsUUFBUWEsT0FBUixDQUFnQlQsS0FBS1UsR0FBTCxDQUFTLFFBQVQsQ0FBaEIsQ0FBZDs7QUFFRixpQkFBT1YsSUFBUDtBQUNELFNBWkQsTUFZTztBQUNMLGlCQUFPSixRQUFRZ0IsS0FBUixDQUFjakIsRUFBZCxDQUFQO0FBQ0Q7QUFDRjtBQUNGOzs7d0JBRWlCO0FBQ2hCLGFBQU8sVUFBUDtBQUNEOzs7O0VBN0NtQ2tCLFFBQVEsVUFBUixDOztrQkFBakJoQyxRIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gJy4vc3R5bGUvaW5saW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnQgZXh0ZW5kcyByZXF1aXJlKCcuLi9tb2RlbCcpIHtcbiAgcGFyc2UoKSB7XG4gICAgdmFyIHZpc2l0b3JzID0gc3VwZXIucGFyc2UoLi4uYXJndW1lbnRzKTtcbiAgICB2aXNpdG9ycy5mb3JFYWNoKChhKSA9PiAoYS5wcm9wcyA9IHRoaXMud0RvYy5wcm9wcykpO1xuICAgIHJldHVybiB2aXNpdG9ycztcbiAgfVxuICBfZ2V0VmFsaWRDaGlsZHJlbigpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBbXG4gICAgICB0aGlzLndEb2MuZ2V0UGFydCgnc3R5bGVzJykuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgdGhpcy53WG1sLiQxKCdib2R5JyksXG4gICAgXTtcbiAgICB2YXIgbnVtYmVyaW5nID0gdGhpcy53RG9jLmdldFBhcnQoJ3dvcmQvbnVtYmVyaW5nLnhtbCcpO1xuICAgIGlmIChudW1iZXJpbmcpIGNoaWxkcmVuLnNwbGljZSgxLCAwLCBudW1iZXJpbmcuZG9jdW1lbnRFbGVtZW50KTtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJuIGNvbG9yIHN0cmluZywgb3JcbiAgICogV2Vha01hcDp7Yndtb2RlLGZpbGxjb2xvcix0YXJnZXRzY3JlZXNpemUsY29sb3IyLGFuZ2xlLGZvY3VzLHR5cGV9XG4gICAqL1xuICBnZXRCYWNrZ3JvdW5kU3R5bGUoKSB7XG4gICAgdmFyIHByID0gdGhpcy53WG1sLiQxKCc+YmFja2dyb3VuZCcpO1xuICAgIHZhciBzdHlsZVByID0gbmV3IFN0eWxlLlByb3BlcnRpZXMocHIsIHRoaXMud0RvYywgdGhpcyk7XG4gICAgaWYgKHByKSB7XG4gICAgICBsZXQgZmlsbCA9IHRoaXMud1htbC4kMSgnZmlsbCcpO1xuICAgICAgaWYgKGZpbGwpIHtcbiAgICAgICAgbGV0IGF0dHIgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICBmaWxsLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYSkgPT4gYXR0ci5zZXQoYS5sb2NhbE5hbWUsIGEudmFsdWUpKTtcbiAgICAgICAgZmlsbC5wYXJlbnROb2RlLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYSkgPT5cbiAgICAgICAgICBhdHRyLnNldChhLmxvY2FsTmFtZSwgYS52YWx1ZSlcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGF0dHIuaGFzKCdmaWxsY29sb3InKSlcbiAgICAgICAgICBhdHRyLmZpbGxjb2xvciA9IHN0eWxlUHIuYXNDb2xvcihhdHRyLmdldCgnZmlsbGNvbG9yJykpO1xuICAgICAgICBpZiAoYXR0ci5oYXMoJ2NvbG9yMicpKVxuICAgICAgICAgIGF0dHIuY29sb3IyID0gc3R5bGVQci5hc0NvbG9yKGF0dHIuZ2V0KCdjb2xvcjInKSk7XG5cbiAgICAgICAgcmV0dXJuIGF0dHI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3R5bGVQci5jb2xvcihwcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnZG9jdW1lbnQnO1xuICB9XG59XG4iXX0=