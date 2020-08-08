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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJzZWN0aW9uIiwid1htbCIsIndEb2MiLCJtUGFyZW50IiwiYXJndW1lbnRzIiwiY29udGVudCIsInBvcCIsIndGaXJzdCIsImxlbmd0aCIsIndMYXN0IiwibmV4dFNpYmxpbmciLCJmaXJzdENoaWxkIiwicGFyZW50Tm9kZSIsInByZXZpb3VzU2libGluZyIsInB1c2giLCJwYXJzZUNvbnRleHQiLCJjdXJyZW50IiwiZiIsInZpc2l0b3JGYWN0b3JpZXMiLCJfaXRlcmF0ZUhlYWRlckZvb3RlciIsInJlZlR5cGUiLCJyZWZzIiwiJCIsImkiLCJsZW4iLCJwYXJ0IiwiZ2V0UmVsIiwiYXR0ciIsIm1vZGVsIiwicmVxdWlyZSIsImRvY3VtZW50RWxlbWVudCIsInBhcnNlIiwicGFydE1haW4iLCJTdHlsZSIsIk1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87OztBQUNuQixtQkFBWUMsSUFBWixFQUFrQkMsSUFBbEIsRUFBd0JDLE9BQXhCLEVBQWlDO0FBQUE7O0FBQUEsbUhBQ3RCQyxTQURzQjs7QUFFL0JELFlBQVFFLE9BQVIsQ0FBZ0JDLEdBQWhCO0FBQ0EsVUFBS0MsTUFBTCxHQUFjSixRQUFRRSxPQUFSLENBQWdCRyxNQUFoQixHQUNWTCxRQUFRRSxPQUFSLENBQWdCRixRQUFRRSxPQUFSLENBQWdCRyxNQUFoQixHQUF5QixDQUF6QyxFQUE0Q0MsS0FBNUMsQ0FBa0RDLFdBRHhDLEdBRVZQLFFBQVFGLElBQVIsQ0FBYVUsVUFGakI7O0FBSUEsVUFBS0YsS0FBTCxHQUFhUixJQUFiO0FBQ0EsV0FBTyxNQUFLUSxLQUFMLENBQVdHLFVBQVgsSUFBeUJULFFBQVFGLElBQXhDO0FBQ0UsWUFBS1EsS0FBTCxHQUFhLE1BQUtBLEtBQUwsQ0FBV0csVUFBeEI7QUFERixLQUVBLElBQUksTUFBS0gsS0FBTCxJQUFjUixJQUFsQixFQUF3QixNQUFLUSxLQUFMLEdBQWFSLEtBQUtZLGVBQWxCOztBQUV4QlYsWUFBUUUsT0FBUixDQUFnQlMsSUFBaEI7O0FBRUFaLFNBQUthLFlBQUwsQ0FBa0JmLE9BQWxCLENBQTBCZ0IsT0FBMUI7QUFkK0I7QUFlaEM7Ozs7NkJBRVFDLEMsRUFBR0MsZ0IsRUFBa0I7QUFDNUIsV0FBS0Msb0JBQUwsQ0FBMEJELGdCQUExQixFQUE0QyxRQUE1QztBQUNBLFVBQUlGLFVBQVUsS0FBS1QsTUFBbkI7QUFDQSxTQUFHO0FBQ0RVLFVBQUVELE9BQUY7QUFDQUEsa0JBQVVBLFdBQVcsS0FBS1AsS0FBaEIsR0FBd0IsSUFBeEIsR0FBK0JPLFFBQVFOLFdBQWpEO0FBQ0QsT0FIRCxRQUdTTSxPQUhUO0FBSUEsV0FBS0csb0JBQUwsQ0FBMEJELGdCQUExQixFQUE0QyxRQUE1QztBQUNEOzs7eUNBRW9CQSxnQixFQUFrQkUsTyxFQUFTO0FBQzlDLFdBQ0UsSUFBSUMsT0FBTyxLQUFLcEIsSUFBTCxDQUFVcUIsQ0FBVixDQUFZRixVQUFVLFdBQXRCLENBQVgsRUFBK0NHLElBQUksQ0FBbkQsRUFBc0RDLE1BQU1ILEtBQUtiLE1BRG5FLEVBRUVlLElBQUlDLEdBRk4sRUFHRUQsR0FIRixFQUlFO0FBQ0EsWUFBSUUsT0FBUSxLQUFLdkIsSUFBTCxDQUFVYSxZQUFWLENBQXVCVSxJQUF2QixDQUE0QlQsT0FBNUIsR0FBc0MsS0FBS2QsSUFBTCxDQUFVd0IsTUFBVixDQUNoREwsS0FBS0UsQ0FBTCxFQUFRSSxJQUFSLENBQWEsTUFBYixDQURnRCxDQUFsRDtBQUdBLFlBQUlDLFFBQVEsS0FBS0MsUUFBUSxPQUFPVCxPQUFmLENBQUwsRUFDVkssS0FBS0ssZUFESyxFQUVWLEtBQUs1QixJQUZLLEVBR1YsSUFIVSxFQUlWbUIsS0FBS0UsQ0FBTCxFQUFRSSxJQUFSLENBQWEsUUFBYixDQUpVLENBQVo7QUFNQUMsY0FBTUcsS0FBTixDQUFZYixnQkFBWjtBQUNBLGFBQUtoQixJQUFMLENBQVVhLFlBQVYsQ0FBdUJVLElBQXZCLENBQTRCVCxPQUE1QixHQUFzQyxLQUFLZCxJQUFMLENBQVU4QixRQUFoRDtBQUNEO0FBQ0Y7OztxQ0FDZ0I7QUFDZixhQUFPLElBQUlDLGlCQUFKLENBQVUsS0FBS2hDLElBQWYsRUFBcUIsS0FBS0MsSUFBMUIsRUFBZ0MsSUFBaEMsQ0FBUDtBQUNEOzs7d0JBRWlCO0FBQ2hCLGFBQU8sU0FBUDtBQUNEOzs7O0VBckRrQ2dDLGU7O2tCQUFoQmxDLE8iLCJmaWxlIjoic2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RlbCBmcm9tICcuLi9tb2RlbCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xuaW1wb3J0IFN0eWxlIGZyb20gJy4vc3R5bGUvc2VjdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlY3Rpb24gZXh0ZW5kcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKHdYbWwsIHdEb2MsIG1QYXJlbnQpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIG1QYXJlbnQuY29udGVudC5wb3AoKTtcbiAgICB0aGlzLndGaXJzdCA9IG1QYXJlbnQuY29udGVudC5sZW5ndGhcbiAgICAgID8gbVBhcmVudC5jb250ZW50W21QYXJlbnQuY29udGVudC5sZW5ndGggLSAxXS53TGFzdC5uZXh0U2libGluZ1xuICAgICAgOiBtUGFyZW50LndYbWwuZmlyc3RDaGlsZDtcblxuICAgIHRoaXMud0xhc3QgPSB3WG1sO1xuICAgIHdoaWxlICh0aGlzLndMYXN0LnBhcmVudE5vZGUgIT0gbVBhcmVudC53WG1sKVxuICAgICAgdGhpcy53TGFzdCA9IHRoaXMud0xhc3QucGFyZW50Tm9kZTtcbiAgICBpZiAodGhpcy53TGFzdCA9PSB3WG1sKSB0aGlzLndMYXN0ID0gd1htbC5wcmV2aW91c1NpYmxpbmc7XG5cbiAgICBtUGFyZW50LmNvbnRlbnQucHVzaCh0aGlzKTtcblxuICAgIHdEb2MucGFyc2VDb250ZXh0LnNlY3Rpb24uY3VycmVudCA9IHRoaXM7XG4gIH1cblxuICBfaXRlcmF0ZShmLCB2aXNpdG9yRmFjdG9yaWVzKSB7XG4gICAgdGhpcy5faXRlcmF0ZUhlYWRlckZvb3Rlcih2aXNpdG9yRmFjdG9yaWVzLCAnaGVhZGVyJyk7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLndGaXJzdDtcbiAgICBkbyB7XG4gICAgICBmKGN1cnJlbnQpO1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQgPT0gdGhpcy53TGFzdCA/IG51bGwgOiBjdXJyZW50Lm5leHRTaWJsaW5nO1xuICAgIH0gd2hpbGUgKGN1cnJlbnQpO1xuICAgIHRoaXMuX2l0ZXJhdGVIZWFkZXJGb290ZXIodmlzaXRvckZhY3RvcmllcywgJ2Zvb3RlcicpO1xuICB9XG5cbiAgX2l0ZXJhdGVIZWFkZXJGb290ZXIodmlzaXRvckZhY3RvcmllcywgcmVmVHlwZSkge1xuICAgIGZvciAoXG4gICAgICB2YXIgcmVmcyA9IHRoaXMud1htbC4kKHJlZlR5cGUgKyAnUmVmZXJlbmNlJyksIGkgPSAwLCBsZW4gPSByZWZzLmxlbmd0aDtcbiAgICAgIGkgPCBsZW47XG4gICAgICBpKytcbiAgICApIHtcbiAgICAgIHZhciBwYXJ0ID0gKHRoaXMud0RvYy5wYXJzZUNvbnRleHQucGFydC5jdXJyZW50ID0gdGhpcy53RG9jLmdldFJlbChcbiAgICAgICAgcmVmc1tpXS5hdHRyKCdyOmlkJylcbiAgICAgICkpO1xuICAgICAgdmFyIG1vZGVsID0gbmV3IChyZXF1aXJlKCcuLycgKyByZWZUeXBlKSkoXG4gICAgICAgIHBhcnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICB0aGlzLndEb2MsXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHJlZnNbaV0uYXR0cigndzp0eXBlJylcbiAgICAgICk7XG4gICAgICBtb2RlbC5wYXJzZSh2aXNpdG9yRmFjdG9yaWVzKTtcbiAgICAgIHRoaXMud0RvYy5wYXJzZUNvbnRleHQucGFydC5jdXJyZW50ID0gdGhpcy53RG9jLnBhcnRNYWluO1xuICAgIH1cbiAgfVxuICBnZXREaXJlY3RTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHRoaXMud1htbCwgdGhpcy53RG9jLCB0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ3NlY3Rpb24nO1xuICB9XG59XG4iXX0=