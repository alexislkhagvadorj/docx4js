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
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL3N0eWxlL2xpc3QuanMiXSwibmFtZXMiOlsiTGlzdCIsIndYbWwiLCJ3RG9jIiwibVBhcmVudCIsImlkIiwibmFtZSIsImNvbnN0cnVjdG9yIiwiYXNTdHlsZUlkIiwiYXR0ciIsInN0eWxlIiwic2V0IiwibGV2ZWxzIiwiTWFwIiwiZiIsImZhY3RvcmllcyIsInZpc2l0b3JzIiwiaSIsImNoaWxkcmVuIiwiJCIsImwiLCJsZW5ndGgiLCJ0IiwiTGV2ZWwiLCJsZXZlbCIsInBhcnNlIiwiZGVmaW5pdGlvbiIsImdldCIsInJlcXVpcmUiLCIkMSIsImxpbmsiLCJhc051bWJlcmluZ1N0eWxlIiwiZ2V0UGFyZW50U3R5bGUiLCJnZXRMYWJlbCIsImFyZ3VtZW50cyIsIm51bUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0lBQ3FCQSxJOzs7QUFDbkIsZ0JBQVlDLElBQVosRUFBa0JDLElBQWxCLEVBQXdCQyxPQUF4QixFQUFpQztBQUFBOztBQUFBLDRHQUN6QkYsSUFEeUIsRUFDbkJDLElBRG1CLEVBQ2JDLE9BRGE7O0FBRS9CLFVBQUtDLEVBQUwsR0FBVSxNQUFLQyxJQUFMLEdBQVksTUFBS0MsV0FBTCxDQUFpQkMsU0FBakIsQ0FBMkJOLEtBQUtPLElBQUwsQ0FBVSxTQUFWLENBQTNCLENBQXRCO0FBQ0EsVUFBS04sSUFBTCxDQUFVTyxLQUFWLENBQWdCQyxHQUFoQjtBQUNBLFVBQUtDLE1BQUwsR0FBYyxJQUFJQyxHQUFKLEVBQWQ7QUFKK0I7QUFLaEM7Ozs7NkJBRVFDLEMsRUFBR0MsUyxFQUFXQyxRLEVBQVU7QUFDL0IsV0FDRSxJQUFJQyxJQUFJLENBQVIsRUFBV0MsV0FBVyxLQUFLaEIsSUFBTCxDQUFVaUIsQ0FBVixDQUFZLGFBQVosQ0FBdEIsRUFBa0RDLElBQUlGLFNBQVNHLE1BQS9ELEVBQXVFQyxDQUR6RSxFQUVFTCxJQUFJRyxDQUZOLEVBR0VILEdBSEYsRUFJRTtBQUNBSyxZQUFJLElBQUksS0FBS2YsV0FBTCxDQUFpQmdCLEtBQXJCLENBQTJCTCxTQUFTRCxDQUFULENBQTNCLEVBQXdDLEtBQUtkLElBQTdDLEVBQW1ELElBQW5ELENBQUo7QUFDQSxhQUFLUyxNQUFMLENBQVlELEdBQVosQ0FBZ0JXLEVBQUVFLEtBQWxCLEVBQXlCRixDQUF6QjtBQUNBQSxVQUFFRyxLQUFGLENBQVFULFFBQVI7QUFDRDtBQUNGOzs7cUNBTWdCO0FBQ2YsVUFBSVUsYUFBYSxLQUFLdkIsSUFBTCxDQUFVTyxLQUFWLENBQWdCaUIsR0FBaEIsQ0FDZkMsUUFBUSx1QkFBUixFQUFpQ3BCLFNBQWpDLENBQ0UsS0FBS04sSUFBTCxDQUFVMkIsRUFBVixDQUFhLGVBQWIsRUFBOEJwQixJQUE5QixDQUFtQyxPQUFuQyxDQURGLENBRGUsQ0FBakI7QUFLQSxVQUFJaUIsV0FBV0ksSUFBZixFQUFxQjtBQUNuQixlQUFPLEtBQUszQixJQUFMLENBQVVPLEtBQVYsQ0FDSmlCLEdBREksQ0FDQUQsV0FBV0ksSUFEWCxFQUVKQyxnQkFGSSxHQUdKQyxjQUhJLEVBQVA7QUFJRCxPQUxELE1BS08sT0FBT04sVUFBUDtBQUNSOzs7K0JBRVU7QUFBQTs7QUFDVCxhQUFPLHdCQUFLTSxjQUFMLElBQXNCQyxRQUF0Qix3QkFBa0NDLFNBQWxDLENBQVA7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLaEMsSUFBTCxDQUFVTyxJQUFWLENBQWUsU0FBZixDQUFQO0FBQ0Q7Ozs4QkFFZ0IwQixLLEVBQU87QUFDdEIsYUFBTyxVQUFVQSxLQUFqQjtBQUNEOzs7d0JBNUJpQjtBQUNoQixhQUFPLFlBQVA7QUFDRDs7OztFQXRCK0JQLFFBQVEsVUFBUixDOztrQkFBYjNCLEkiLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vPHc6bnVtYmVyaW5nPjx3Om51bSB3Om51bUlkPVwiMVwiPlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIHJlcXVpcmUoJy4uL3N0eWxlJykge1xuICBjb25zdHJ1Y3Rvcih3WG1sLCB3RG9jLCBtUGFyZW50KSB7XG4gICAgc3VwZXIod1htbCwgd0RvYywgbVBhcmVudCk7XG4gICAgdGhpcy5pZCA9IHRoaXMubmFtZSA9IHRoaXMuY29uc3RydWN0b3IuYXNTdHlsZUlkKHdYbWwuYXR0cigndzpudW1JZCcpKTtcbiAgICB0aGlzLndEb2Muc3R5bGUuc2V0KHRoaXMpO1xuICAgIHRoaXMubGV2ZWxzID0gbmV3IE1hcCgpO1xuICB9XG5cbiAgX2l0ZXJhdGUoZiwgZmFjdG9yaWVzLCB2aXNpdG9ycykge1xuICAgIGZvciAoXG4gICAgICB2YXIgaSA9IDAsIGNoaWxkcmVuID0gdGhpcy53WG1sLiQoJ2x2bE92ZXJyaWRlJyksIGwgPSBjaGlsZHJlbi5sZW5ndGgsIHQ7XG4gICAgICBpIDwgbDtcbiAgICAgIGkrK1xuICAgICkge1xuICAgICAgdCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yLkxldmVsKGNoaWxkcmVuW2ldLCB0aGlzLndEb2MsIHRoaXMpO1xuICAgICAgdGhpcy5sZXZlbHMuc2V0KHQubGV2ZWwsIHQpO1xuICAgICAgdC5wYXJzZSh2aXNpdG9ycyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnc3R5bGUubGlzdCc7XG4gIH1cblxuICBnZXRQYXJlbnRTdHlsZSgpIHtcbiAgICB2YXIgZGVmaW5pdGlvbiA9IHRoaXMud0RvYy5zdHlsZS5nZXQoXG4gICAgICByZXF1aXJlKCcuL251bWJlcmluZ0RlZmluaXRpb24nKS5hc1N0eWxlSWQoXG4gICAgICAgIHRoaXMud1htbC4kMSgnYWJzdHJhY3ROdW1JZCcpLmF0dHIoJ3c6dmFsJylcbiAgICAgIClcbiAgICApO1xuICAgIGlmIChkZWZpbml0aW9uLmxpbmspIHtcbiAgICAgIHJldHVybiB0aGlzLndEb2Muc3R5bGVcbiAgICAgICAgLmdldChkZWZpbml0aW9uLmxpbmspXG4gICAgICAgIC5hc051bWJlcmluZ1N0eWxlKClcbiAgICAgICAgLmdldFBhcmVudFN0eWxlKCk7XG4gICAgfSBlbHNlIHJldHVybiBkZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0TGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFyZW50U3R5bGUoKS5nZXRMYWJlbCguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgZ2V0TnVtSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMud1htbC5hdHRyKCd3Om51bUlkJyk7XG4gIH1cblxuICBzdGF0aWMgYXNTdHlsZUlkKG51bUlkKSB7XG4gICAgcmV0dXJuICdfbGlzdCcgKyBudW1JZDtcbiAgfVxufVxuIl19