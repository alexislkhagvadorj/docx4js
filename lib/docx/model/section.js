'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _model = require('../model');

var _model2 = _interopRequireDefault(_model);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

var _section = require('./style/section');

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var section = function (_Model) {
  _inherits(section, _Model);

  function section(wXml, wDoc, mParent) {
    _classCallCheck(this, section);

    var _this = _possibleConstructorReturn(this, (section.__proto__ || Object.getPrototypeOf(section)).apply(this, arguments));

    mParent.content.pop();
    _this.wFirst = mParent.content.length ? mParent.content[mParent.content.length - 1].wLast.nextSibling : mParent.wXml.firstChild;

    _this.wLast = wXml;
    while (_this.wLast.parentNode != mParent.wXml) {
      _this.wLast = _this.wLast.parentNode;
    }if (_this.wLast == wXml) _this.wLast = wXml.previousSibling;

    mParent.content.push(_this);

    wDoc.parseContext.section.current = _this;
    return _this;
  }

  _createClass(section, [{
    key: '_iterate',
    value: function _iterate(f, visitorFactories) {
      this._iterateHeaderFooter(visitorFactories, 'header');
      var current = this.wFirst;
      do {
        f(current);
        current = current == this.wLast ? null : current.nextSibling;
      } while (current);
      this._iterateHeaderFooter(visitorFactories, 'footer');
    }
  }, {
    key: '_iterateHeaderFooter',
    value: function _iterateHeaderFooter(visitorFactories, refType) {
      for (var refs = this.wXml.$(refType + 'Reference'), i = 0, len = refs.length; i < len; i++) {
        var part = this.wDoc.parseContext.part.current = this.wDoc.getRel(refs[i].attr('r:id'));
        var model = new (require('./' + refType))(part.documentElement, this.wDoc, this, refs[i].attr('w:type'));
        model.parse(visitorFactories);
        this.wDoc.parseContext.part.current = this.wDoc.partMain;
      }
    }
  }, {
    key: 'getDirectStyle',
    value: function getDirectStyle() {
      return new _section2.default(this.wXml, this.wDoc, this);
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'section';
    }
  }]);

  return section;
}(_model2.default);

exports.default = section;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL3NlY3Rpb24uanMiXSwibmFtZXMiOlsic2VjdGlvbiIsIndYbWwiLCJ3RG9jIiwibVBhcmVudCIsImFyZ3VtZW50cyIsImNvbnRlbnQiLCJwb3AiLCJ3Rmlyc3QiLCJsZW5ndGgiLCJ3TGFzdCIsIm5leHRTaWJsaW5nIiwiZmlyc3RDaGlsZCIsInBhcmVudE5vZGUiLCJwcmV2aW91c1NpYmxpbmciLCJwdXNoIiwicGFyc2VDb250ZXh0IiwiY3VycmVudCIsImYiLCJ2aXNpdG9yRmFjdG9yaWVzIiwiX2l0ZXJhdGVIZWFkZXJGb290ZXIiLCJyZWZUeXBlIiwicmVmcyIsIiQiLCJpIiwibGVuIiwicGFydCIsImdldFJlbCIsImF0dHIiLCJtb2RlbCIsInJlcXVpcmUiLCJkb2N1bWVudEVsZW1lbnQiLCJwYXJzZSIsInBhcnRNYWluIiwiU3R5bGUiLCJNb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7QUFDbkIsbUJBQVlDLElBQVosRUFBa0JDLElBQWxCLEVBQXdCQyxPQUF4QixFQUFpQztBQUFBOztBQUFBLG1IQUN0QkMsU0FEc0I7O0FBRS9CRCxZQUFRRSxPQUFSLENBQWdCQyxHQUFoQjtBQUNBLFVBQUtDLE1BQUwsR0FBY0osUUFBUUUsT0FBUixDQUFnQkcsTUFBaEIsR0FDVkwsUUFBUUUsT0FBUixDQUFnQkYsUUFBUUUsT0FBUixDQUFnQkcsTUFBaEIsR0FBeUIsQ0FBekMsRUFBNENDLEtBQTVDLENBQWtEQyxXQUR4QyxHQUVWUCxRQUFRRixJQUFSLENBQWFVLFVBRmpCOztBQUlBLFVBQUtGLEtBQUwsR0FBYVIsSUFBYjtBQUNBLFdBQU8sTUFBS1EsS0FBTCxDQUFXRyxVQUFYLElBQXlCVCxRQUFRRixJQUF4QztBQUNFLFlBQUtRLEtBQUwsR0FBYSxNQUFLQSxLQUFMLENBQVdHLFVBQXhCO0FBREYsS0FFQSxJQUFJLE1BQUtILEtBQUwsSUFBY1IsSUFBbEIsRUFBd0IsTUFBS1EsS0FBTCxHQUFhUixLQUFLWSxlQUFsQjs7QUFFeEJWLFlBQVFFLE9BQVIsQ0FBZ0JTLElBQWhCOztBQUVBWixTQUFLYSxZQUFMLENBQWtCZixPQUFsQixDQUEwQmdCLE9BQTFCO0FBZCtCO0FBZWhDOzs7OzZCQUVRQyxDLEVBQUdDLGdCLEVBQWtCO0FBQzVCLFdBQUtDLG9CQUFMLENBQTBCRCxnQkFBMUIsRUFBNEMsUUFBNUM7QUFDQSxVQUFJRixVQUFVLEtBQUtULE1BQW5CO0FBQ0EsU0FBRztBQUNEVSxVQUFFRCxPQUFGO0FBQ0FBLGtCQUFVQSxXQUFXLEtBQUtQLEtBQWhCLEdBQXdCLElBQXhCLEdBQStCTyxRQUFRTixXQUFqRDtBQUNELE9BSEQsUUFHU00sT0FIVDtBQUlBLFdBQUtHLG9CQUFMLENBQTBCRCxnQkFBMUIsRUFBNEMsUUFBNUM7QUFDRDs7O3lDQUVvQkEsZ0IsRUFBa0JFLE8sRUFBUztBQUM5QyxXQUNFLElBQUlDLE9BQU8sS0FBS3BCLElBQUwsQ0FBVXFCLENBQVYsQ0FBWUYsVUFBVSxXQUF0QixDQUFYLEVBQStDRyxJQUFJLENBQW5ELEVBQXNEQyxNQUFNSCxLQUFLYixNQURuRSxFQUVFZSxJQUFJQyxHQUZOLEVBR0VELEdBSEYsRUFJRTtBQUNBLFlBQUlFLE9BQVEsS0FBS3ZCLElBQUwsQ0FBVWEsWUFBVixDQUF1QlUsSUFBdkIsQ0FBNEJULE9BQTVCLEdBQXNDLEtBQUtkLElBQUwsQ0FBVXdCLE1BQVYsQ0FDaERMLEtBQUtFLENBQUwsRUFBUUksSUFBUixDQUFhLE1BQWIsQ0FEZ0QsQ0FBbEQ7QUFHQSxZQUFJQyxRQUFRLEtBQUtDLFFBQVEsT0FBT1QsT0FBZixDQUFMLEVBQ1ZLLEtBQUtLLGVBREssRUFFVixLQUFLNUIsSUFGSyxFQUdWLElBSFUsRUFJVm1CLEtBQUtFLENBQUwsRUFBUUksSUFBUixDQUFhLFFBQWIsQ0FKVSxDQUFaO0FBTUFDLGNBQU1HLEtBQU4sQ0FBWWIsZ0JBQVo7QUFDQSxhQUFLaEIsSUFBTCxDQUFVYSxZQUFWLENBQXVCVSxJQUF2QixDQUE0QlQsT0FBNUIsR0FBc0MsS0FBS2QsSUFBTCxDQUFVOEIsUUFBaEQ7QUFDRDtBQUNGOzs7cUNBQ2dCO0FBQ2YsYUFBTyxJQUFJQyxpQkFBSixDQUFVLEtBQUtoQyxJQUFmLEVBQXFCLEtBQUtDLElBQTFCLEVBQWdDLElBQWhDLENBQVA7QUFDRDs7O3dCQUVpQjtBQUNoQixhQUFPLFNBQVA7QUFDRDs7OztFQXJEa0NnQyxlOztrQkFBaEJsQyxPIiwiZmlsZSI6InNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kZWwgZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcbmltcG9ydCBTdHlsZSBmcm9tICcuL3N0eWxlL3NlY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzZWN0aW9uIGV4dGVuZHMgTW9kZWwge1xuICBjb25zdHJ1Y3Rvcih3WG1sLCB3RG9jLCBtUGFyZW50KSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBtUGFyZW50LmNvbnRlbnQucG9wKCk7XG4gICAgdGhpcy53Rmlyc3QgPSBtUGFyZW50LmNvbnRlbnQubGVuZ3RoXG4gICAgICA/IG1QYXJlbnQuY29udGVudFttUGFyZW50LmNvbnRlbnQubGVuZ3RoIC0gMV0ud0xhc3QubmV4dFNpYmxpbmdcbiAgICAgIDogbVBhcmVudC53WG1sLmZpcnN0Q2hpbGQ7XG5cbiAgICB0aGlzLndMYXN0ID0gd1htbDtcbiAgICB3aGlsZSAodGhpcy53TGFzdC5wYXJlbnROb2RlICE9IG1QYXJlbnQud1htbClcbiAgICAgIHRoaXMud0xhc3QgPSB0aGlzLndMYXN0LnBhcmVudE5vZGU7XG4gICAgaWYgKHRoaXMud0xhc3QgPT0gd1htbCkgdGhpcy53TGFzdCA9IHdYbWwucHJldmlvdXNTaWJsaW5nO1xuXG4gICAgbVBhcmVudC5jb250ZW50LnB1c2godGhpcyk7XG5cbiAgICB3RG9jLnBhcnNlQ29udGV4dC5zZWN0aW9uLmN1cnJlbnQgPSB0aGlzO1xuICB9XG5cbiAgX2l0ZXJhdGUoZiwgdmlzaXRvckZhY3Rvcmllcykge1xuICAgIHRoaXMuX2l0ZXJhdGVIZWFkZXJGb290ZXIodmlzaXRvckZhY3RvcmllcywgJ2hlYWRlcicpO1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy53Rmlyc3Q7XG4gICAgZG8ge1xuICAgICAgZihjdXJyZW50KTtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50ID09IHRoaXMud0xhc3QgPyBudWxsIDogY3VycmVudC5uZXh0U2libGluZztcbiAgICB9IHdoaWxlIChjdXJyZW50KTtcbiAgICB0aGlzLl9pdGVyYXRlSGVhZGVyRm9vdGVyKHZpc2l0b3JGYWN0b3JpZXMsICdmb290ZXInKTtcbiAgfVxuXG4gIF9pdGVyYXRlSGVhZGVyRm9vdGVyKHZpc2l0b3JGYWN0b3JpZXMsIHJlZlR5cGUpIHtcbiAgICBmb3IgKFxuICAgICAgdmFyIHJlZnMgPSB0aGlzLndYbWwuJChyZWZUeXBlICsgJ1JlZmVyZW5jZScpLCBpID0gMCwgbGVuID0gcmVmcy5sZW5ndGg7XG4gICAgICBpIDwgbGVuO1xuICAgICAgaSsrXG4gICAgKSB7XG4gICAgICB2YXIgcGFydCA9ICh0aGlzLndEb2MucGFyc2VDb250ZXh0LnBhcnQuY3VycmVudCA9IHRoaXMud0RvYy5nZXRSZWwoXG4gICAgICAgIHJlZnNbaV0uYXR0cigncjppZCcpXG4gICAgICApKTtcbiAgICAgIHZhciBtb2RlbCA9IG5ldyAocmVxdWlyZSgnLi8nICsgcmVmVHlwZSkpKFxuICAgICAgICBwYXJ0LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgdGhpcy53RG9jLFxuICAgICAgICB0aGlzLFxuICAgICAgICByZWZzW2ldLmF0dHIoJ3c6dHlwZScpXG4gICAgICApO1xuICAgICAgbW9kZWwucGFyc2UodmlzaXRvckZhY3Rvcmllcyk7XG4gICAgICB0aGlzLndEb2MucGFyc2VDb250ZXh0LnBhcnQuY3VycmVudCA9IHRoaXMud0RvYy5wYXJ0TWFpbjtcbiAgICB9XG4gIH1cbiAgZ2V0RGlyZWN0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh0aGlzLndYbWwsIHRoaXMud0RvYywgdGhpcyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdzZWN0aW9uJztcbiAgfVxufVxuIl19