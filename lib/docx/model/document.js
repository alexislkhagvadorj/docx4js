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
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIkRvY3VtZW50IiwidmlzaXRvcnMiLCJhcmd1bWVudHMiLCJmb3JFYWNoIiwiYSIsInByb3BzIiwid0RvYyIsImNoaWxkcmVuIiwiZ2V0UGFydCIsImRvY3VtZW50RWxlbWVudCIsIndYbWwiLCIkMSIsIm51bWJlcmluZyIsInNwbGljZSIsInByIiwic3R5bGVQciIsIlN0eWxlIiwiUHJvcGVydGllcyIsImZpbGwiLCJhdHRyIiwiV2Vha01hcCIsImF0dHJpYnV0ZXMiLCJzZXQiLCJsb2NhbE5hbWUiLCJ2YWx1ZSIsInBhcmVudE5vZGUiLCJoYXMiLCJmaWxsY29sb3IiLCJhc0NvbG9yIiwiZ2V0IiwiY29sb3IyIiwiY29sb3IiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7NEJBQ1g7QUFBQTs7QUFDTixVQUFJQyxzSEFBMEJDLFNBQTFCLENBQUo7QUFDQUQsZUFBU0UsT0FBVCxDQUFpQixVQUFDQyxDQUFEO0FBQUEsZUFBUUEsRUFBRUMsS0FBRixHQUFVLE9BQUtDLElBQUwsQ0FBVUQsS0FBNUI7QUFBQSxPQUFqQjtBQUNBLGFBQU9KLFFBQVA7QUFDRDs7O3dDQUNtQjtBQUNsQixVQUFJTSxXQUFXLENBQ2IsS0FBS0QsSUFBTCxDQUFVRSxPQUFWLENBQWtCLFFBQWxCLEVBQTRCQyxlQURmLEVBRWIsS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsTUFBYixDQUZhLENBQWY7QUFJQSxVQUFJQyxZQUFZLEtBQUtOLElBQUwsQ0FBVUUsT0FBVixDQUFrQixvQkFBbEIsQ0FBaEI7QUFDQSxVQUFJSSxTQUFKLEVBQWVMLFNBQVNNLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0JELFVBQVVILGVBQWhDO0FBQ2YsYUFBT0YsUUFBUDtBQUNEOztBQUVEOzs7Ozs7O3lDQUlxQjtBQUNuQixVQUFJTyxLQUFLLEtBQUtKLElBQUwsQ0FBVUMsRUFBVixDQUFhLGFBQWIsQ0FBVDtBQUNBLFVBQUlJLFVBQVUsSUFBSUMsaUJBQU1DLFVBQVYsQ0FBcUJILEVBQXJCLEVBQXlCLEtBQUtSLElBQTlCLEVBQW9DLElBQXBDLENBQWQ7QUFDQSxVQUFJUSxFQUFKLEVBQVE7QUFDTixZQUFJSSxPQUFPLEtBQUtSLElBQUwsQ0FBVUMsRUFBVixDQUFhLE1BQWIsQ0FBWDtBQUNBLFlBQUlPLElBQUosRUFBVTtBQUNSLGNBQUlDLE9BQU8sSUFBSUMsT0FBSixFQUFYO0FBQ0FGLGVBQUtHLFVBQUwsQ0FBZ0JsQixPQUFoQixDQUF3QixVQUFDQyxDQUFEO0FBQUEsbUJBQU9lLEtBQUtHLEdBQUwsQ0FBU2xCLEVBQUVtQixTQUFYLEVBQXNCbkIsRUFBRW9CLEtBQXhCLENBQVA7QUFBQSxXQUF4QjtBQUNBTixlQUFLTyxVQUFMLENBQWdCSixVQUFoQixDQUEyQmxCLE9BQTNCLENBQW1DLFVBQUNDLENBQUQ7QUFBQSxtQkFDakNlLEtBQUtHLEdBQUwsQ0FBU2xCLEVBQUVtQixTQUFYLEVBQXNCbkIsRUFBRW9CLEtBQXhCLENBRGlDO0FBQUEsV0FBbkM7QUFHQSxjQUFJTCxLQUFLTyxHQUFMLENBQVMsV0FBVCxDQUFKLEVBQ0VQLEtBQUtRLFNBQUwsR0FBaUJaLFFBQVFhLE9BQVIsQ0FBZ0JULEtBQUtVLEdBQUwsQ0FBUyxXQUFULENBQWhCLENBQWpCO0FBQ0YsY0FBSVYsS0FBS08sR0FBTCxDQUFTLFFBQVQsQ0FBSixFQUNFUCxLQUFLVyxNQUFMLEdBQWNmLFFBQVFhLE9BQVIsQ0FBZ0JULEtBQUtVLEdBQUwsQ0FBUyxRQUFULENBQWhCLENBQWQ7O0FBRUYsaUJBQU9WLElBQVA7QUFDRCxTQVpELE1BWU87QUFDTCxpQkFBT0osUUFBUWdCLEtBQVIsQ0FBY2pCLEVBQWQsQ0FBUDtBQUNEO0FBQ0Y7QUFDRjs7O3dCQUVpQjtBQUNoQixhQUFPLFVBQVA7QUFDRDs7OztFQTdDbUNrQixRQUFRLFVBQVIsQzs7a0JBQWpCaEMsUSIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZSBmcm9tICcuL3N0eWxlL2lubGluZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50IGV4dGVuZHMgcmVxdWlyZSgnLi4vbW9kZWwnKSB7XG4gIHBhcnNlKCkge1xuICAgIHZhciB2aXNpdG9ycyA9IHN1cGVyLnBhcnNlKC4uLmFyZ3VtZW50cyk7XG4gICAgdmlzaXRvcnMuZm9yRWFjaCgoYSkgPT4gKGEucHJvcHMgPSB0aGlzLndEb2MucHJvcHMpKTtcbiAgICByZXR1cm4gdmlzaXRvcnM7XG4gIH1cbiAgX2dldFZhbGlkQ2hpbGRyZW4oKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gW1xuICAgICAgdGhpcy53RG9jLmdldFBhcnQoJ3N0eWxlcycpLmRvY3VtZW50RWxlbWVudCxcbiAgICAgIHRoaXMud1htbC4kMSgnYm9keScpLFxuICAgIF07XG4gICAgdmFyIG51bWJlcmluZyA9IHRoaXMud0RvYy5nZXRQYXJ0KCd3b3JkL251bWJlcmluZy54bWwnKTtcbiAgICBpZiAobnVtYmVyaW5nKSBjaGlsZHJlbi5zcGxpY2UoMSwgMCwgbnVtYmVyaW5nLmRvY3VtZW50RWxlbWVudCk7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiBjb2xvciBzdHJpbmcsIG9yXG4gICAqIFdlYWtNYXA6e2J3bW9kZSxmaWxsY29sb3IsdGFyZ2V0c2NyZWVzaXplLGNvbG9yMixhbmdsZSxmb2N1cyx0eXBlfVxuICAgKi9cbiAgZ2V0QmFja2dyb3VuZFN0eWxlKCkge1xuICAgIHZhciBwciA9IHRoaXMud1htbC4kMSgnPmJhY2tncm91bmQnKTtcbiAgICB2YXIgc3R5bGVQciA9IG5ldyBTdHlsZS5Qcm9wZXJ0aWVzKHByLCB0aGlzLndEb2MsIHRoaXMpO1xuICAgIGlmIChwcikge1xuICAgICAgbGV0IGZpbGwgPSB0aGlzLndYbWwuJDEoJ2ZpbGwnKTtcbiAgICAgIGlmIChmaWxsKSB7XG4gICAgICAgIGxldCBhdHRyID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgZmlsbC5hdHRyaWJ1dGVzLmZvckVhY2goKGEpID0+IGF0dHIuc2V0KGEubG9jYWxOYW1lLCBhLnZhbHVlKSk7XG4gICAgICAgIGZpbGwucGFyZW50Tm9kZS5hdHRyaWJ1dGVzLmZvckVhY2goKGEpID0+XG4gICAgICAgICAgYXR0ci5zZXQoYS5sb2NhbE5hbWUsIGEudmFsdWUpXG4gICAgICAgICk7XG4gICAgICAgIGlmIChhdHRyLmhhcygnZmlsbGNvbG9yJykpXG4gICAgICAgICAgYXR0ci5maWxsY29sb3IgPSBzdHlsZVByLmFzQ29sb3IoYXR0ci5nZXQoJ2ZpbGxjb2xvcicpKTtcbiAgICAgICAgaWYgKGF0dHIuaGFzKCdjb2xvcjInKSlcbiAgICAgICAgICBhdHRyLmNvbG9yMiA9IHN0eWxlUHIuYXNDb2xvcihhdHRyLmdldCgnY29sb3IyJykpO1xuXG4gICAgICAgIHJldHVybiBhdHRyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlUHIuY29sb3IocHIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2RvY3VtZW50JztcbiAgfVxufVxuIl19