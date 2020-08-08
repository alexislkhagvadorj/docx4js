'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//<w:numbering><w:num w:numId="1">
var List = function (_require) {
  _inherits(List, _require);

  function List(wXml, wDoc, mParent) {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, wXml, wDoc, mParent));

    _this.id = _this.name = _this.constructor.asStyleId(wXml.attr('w:numId'));
    _this.wDoc.style.set(_this);
    _this.levels = new Map();
    return _this;
  }

  _createClass(List, [{
    key: '_iterate',
    value: function _iterate(f, factories, visitors) {
      for (var i = 0, children = this.wXml.$('lvlOverride'), l = children.length, t; i < l; i++) {
        t = new this.constructor.Level(children[i], this.wDoc, this);
        this.levels.set(t.level, t);
        t.parse(visitors);
      }
    }
  }, {
    key: 'getParentStyle',
    value: function getParentStyle() {
      var definition = this.wDoc.style.get(require('./numberingDefinition').asStyleId(this.wXml.$1('abstractNumId').attr('w:val')));
      if (definition.link) {
        return this.wDoc.style.get(definition.link).asNumberingStyle().getParentStyle();
      } else return definition;
    }
  }, {
    key: 'getLabel',
    value: function getLabel() {
      var _getParentStyle;

      return (_getParentStyle = this.getParentStyle()).getLabel.apply(_getParentStyle, arguments);
    }
  }, {
    key: 'getNumId',
    value: function getNumId() {
      return this.wXml.attr('w:numId');
    }
  }], [{
    key: 'asStyleId',
    value: function asStyleId(numId) {
      return '_list' + numId;
    }
  }, {
    key: 'type',
    get: function get() {
      return 'style.list';
    }
  }]);

  return List;
}(require('../style'));

exports.default = List;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc3R5bGUvbGlzdC5qcyJdLCJuYW1lcyI6WyJMaXN0Iiwid1htbCIsIndEb2MiLCJtUGFyZW50IiwiaWQiLCJuYW1lIiwiY29uc3RydWN0b3IiLCJhc1N0eWxlSWQiLCJhdHRyIiwic3R5bGUiLCJzZXQiLCJsZXZlbHMiLCJNYXAiLCJmIiwiZmFjdG9yaWVzIiwidmlzaXRvcnMiLCJpIiwiY2hpbGRyZW4iLCIkIiwibCIsImxlbmd0aCIsInQiLCJMZXZlbCIsImxldmVsIiwicGFyc2UiLCJkZWZpbml0aW9uIiwiZ2V0IiwicmVxdWlyZSIsIiQxIiwibGluayIsImFzTnVtYmVyaW5nU3R5bGUiLCJnZXRQYXJlbnRTdHlsZSIsImdldExhYmVsIiwiYXJndW1lbnRzIiwibnVtSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFDcUJBLEk7OztBQUNuQixnQkFBWUMsSUFBWixFQUFrQkMsSUFBbEIsRUFBd0JDLE9BQXhCLEVBQWlDO0FBQUE7O0FBQUEsNEdBQ3pCRixJQUR5QixFQUNuQkMsSUFEbUIsRUFDYkMsT0FEYTs7QUFFL0IsVUFBS0MsRUFBTCxHQUFVLE1BQUtDLElBQUwsR0FBWSxNQUFLQyxXQUFMLENBQWlCQyxTQUFqQixDQUEyQk4sS0FBS08sSUFBTCxDQUFVLFNBQVYsQ0FBM0IsQ0FBdEI7QUFDQSxVQUFLTixJQUFMLENBQVVPLEtBQVYsQ0FBZ0JDLEdBQWhCO0FBQ0EsVUFBS0MsTUFBTCxHQUFjLElBQUlDLEdBQUosRUFBZDtBQUorQjtBQUtoQzs7Ozs2QkFFUUMsQyxFQUFHQyxTLEVBQVdDLFEsRUFBVTtBQUMvQixXQUNFLElBQUlDLElBQUksQ0FBUixFQUFXQyxXQUFXLEtBQUtoQixJQUFMLENBQVVpQixDQUFWLENBQVksYUFBWixDQUF0QixFQUFrREMsSUFBSUYsU0FBU0csTUFBL0QsRUFBdUVDLENBRHpFLEVBRUVMLElBQUlHLENBRk4sRUFHRUgsR0FIRixFQUlFO0FBQ0FLLFlBQUksSUFBSSxLQUFLZixXQUFMLENBQWlCZ0IsS0FBckIsQ0FBMkJMLFNBQVNELENBQVQsQ0FBM0IsRUFBd0MsS0FBS2QsSUFBN0MsRUFBbUQsSUFBbkQsQ0FBSjtBQUNBLGFBQUtTLE1BQUwsQ0FBWUQsR0FBWixDQUFnQlcsRUFBRUUsS0FBbEIsRUFBeUJGLENBQXpCO0FBQ0FBLFVBQUVHLEtBQUYsQ0FBUVQsUUFBUjtBQUNEO0FBQ0Y7OztxQ0FNZ0I7QUFDZixVQUFJVSxhQUFhLEtBQUt2QixJQUFMLENBQVVPLEtBQVYsQ0FBZ0JpQixHQUFoQixDQUNmQyxRQUFRLHVCQUFSLEVBQWlDcEIsU0FBakMsQ0FDRSxLQUFLTixJQUFMLENBQVUyQixFQUFWLENBQWEsZUFBYixFQUE4QnBCLElBQTlCLENBQW1DLE9BQW5DLENBREYsQ0FEZSxDQUFqQjtBQUtBLFVBQUlpQixXQUFXSSxJQUFmLEVBQXFCO0FBQ25CLGVBQU8sS0FBSzNCLElBQUwsQ0FBVU8sS0FBVixDQUNKaUIsR0FESSxDQUNBRCxXQUFXSSxJQURYLEVBRUpDLGdCQUZJLEdBR0pDLGNBSEksRUFBUDtBQUlELE9BTEQsTUFLTyxPQUFPTixVQUFQO0FBQ1I7OzsrQkFFVTtBQUFBOztBQUNULGFBQU8sd0JBQUtNLGNBQUwsSUFBc0JDLFFBQXRCLHdCQUFrQ0MsU0FBbEMsQ0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUtoQyxJQUFMLENBQVVPLElBQVYsQ0FBZSxTQUFmLENBQVA7QUFDRDs7OzhCQUVnQjBCLEssRUFBTztBQUN0QixhQUFPLFVBQVVBLEtBQWpCO0FBQ0Q7Ozt3QkE1QmlCO0FBQ2hCLGFBQU8sWUFBUDtBQUNEOzs7O0VBdEIrQlAsUUFBUSxVQUFSLEM7O2tCQUFiM0IsSSIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy88dzpudW1iZXJpbmc+PHc6bnVtIHc6bnVtSWQ9XCIxXCI+XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgcmVxdWlyZSgnLi4vc3R5bGUnKSB7XG4gIGNvbnN0cnVjdG9yKHdYbWwsIHdEb2MsIG1QYXJlbnQpIHtcbiAgICBzdXBlcih3WG1sLCB3RG9jLCBtUGFyZW50KTtcbiAgICB0aGlzLmlkID0gdGhpcy5uYW1lID0gdGhpcy5jb25zdHJ1Y3Rvci5hc1N0eWxlSWQod1htbC5hdHRyKCd3Om51bUlkJykpO1xuICAgIHRoaXMud0RvYy5zdHlsZS5zZXQodGhpcyk7XG4gICAgdGhpcy5sZXZlbHMgPSBuZXcgTWFwKCk7XG4gIH1cblxuICBfaXRlcmF0ZShmLCBmYWN0b3JpZXMsIHZpc2l0b3JzKSB7XG4gICAgZm9yIChcbiAgICAgIHZhciBpID0gMCwgY2hpbGRyZW4gPSB0aGlzLndYbWwuJCgnbHZsT3ZlcnJpZGUnKSwgbCA9IGNoaWxkcmVuLmxlbmd0aCwgdDtcbiAgICAgIGkgPCBsO1xuICAgICAgaSsrXG4gICAgKSB7XG4gICAgICB0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IuTGV2ZWwoY2hpbGRyZW5baV0sIHRoaXMud0RvYywgdGhpcyk7XG4gICAgICB0aGlzLmxldmVscy5zZXQodC5sZXZlbCwgdCk7XG4gICAgICB0LnBhcnNlKHZpc2l0b3JzKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdzdHlsZS5saXN0JztcbiAgfVxuXG4gIGdldFBhcmVudFN0eWxlKCkge1xuICAgIHZhciBkZWZpbml0aW9uID0gdGhpcy53RG9jLnN0eWxlLmdldChcbiAgICAgIHJlcXVpcmUoJy4vbnVtYmVyaW5nRGVmaW5pdGlvbicpLmFzU3R5bGVJZChcbiAgICAgICAgdGhpcy53WG1sLiQxKCdhYnN0cmFjdE51bUlkJykuYXR0cigndzp2YWwnKVxuICAgICAgKVxuICAgICk7XG4gICAgaWYgKGRlZmluaXRpb24ubGluaykge1xuICAgICAgcmV0dXJuIHRoaXMud0RvYy5zdHlsZVxuICAgICAgICAuZ2V0KGRlZmluaXRpb24ubGluaylcbiAgICAgICAgLmFzTnVtYmVyaW5nU3R5bGUoKVxuICAgICAgICAuZ2V0UGFyZW50U3R5bGUoKTtcbiAgICB9IGVsc2UgcmV0dXJuIGRlZmluaXRpb247XG4gIH1cblxuICBnZXRMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQYXJlbnRTdHlsZSgpLmdldExhYmVsKC4uLmFyZ3VtZW50cyk7XG4gIH1cblxuICBnZXROdW1JZCgpIHtcbiAgICByZXR1cm4gdGhpcy53WG1sLmF0dHIoJ3c6bnVtSWQnKTtcbiAgfVxuXG4gIHN0YXRpYyBhc1N0eWxlSWQobnVtSWQpIHtcbiAgICByZXR1cm4gJ19saXN0JyArIG51bUlkO1xuICB9XG59XG4iXX0=