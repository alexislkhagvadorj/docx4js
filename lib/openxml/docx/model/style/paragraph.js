'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('../style');

var _style2 = _interopRequireDefault(_style);

var _inline = require('./inline');

var _inline2 = _interopRequireDefault(_inline);

var _numbering = require('./numbering');

var _numbering2 = _interopRequireDefault(_numbering);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paragraph = function (_Style) {
	_inherits(Paragraph, _Style);

	function Paragraph() {
		_classCallCheck(this, Paragraph);

		return _possibleConstructorReturn(this, (Paragraph.__proto__ || Object.getPrototypeOf(Paragraph)).apply(this, arguments));
	}

	_createClass(Paragraph, [{
		key: 'getOutlineLevel',
		value: function getOutlineLevel(v) {
			if ((v = this._val('outlineLvl')) != null) return parseInt(v);
			if ((v = this.getParentStyle()) != null && v.getOutlineLevel) return v.getOutlineLevel();
			return -1;
		}
	}, {
		key: 'getNumId',
		value: function getNumId(v) {
			if ((v = this._val('numId')) != null) return v;
			if ((v = this.getParentStyle()) != null && v.getNumId) return v.getNumId();
			return -1;
		}
	}, {
		key: 'asNumberingStyle',
		value: function asNumberingStyle() {
			var _Numbering$prototype$;

			return (_Numbering$prototype$ = _numbering2.default.prototype.asNumberingStyle).call.apply(_Numbering$prototype$, [this].concat(Array.prototype.slice.call(arguments)));
		}
	}, {
		key: '_iterate',
		value: function _iterate(f, factories, visitors) {
			var pr = this.wXml.$1('pPr');
			pr && new this.constructor.Properties(pr, this.wDoc, this).parse(visitors);

			(pr = this.wXml.$1('rPr')) && new _inline2.default.Properties(pr, this.wDoc, this).parse(visitors);

			(pr = this.wXml.$1('numPr')) && new _numbering2.default.Properties(pr, this.wDoc, this).parse(visitors);

			(pr = this.wXml.$1('framePr')) && new this.constructor.FrameProperties(pr, this.wDoc, this).parse(visitors);
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'style.paragraph';
		}
	}, {
		key: 'Properties',
		get: function get() {
			return Properties;
		}
	}, {
		key: 'FrameProperties',
		get: function get() {
			return FrameProperties;
		}
	}]);

	return Paragraph;
}(_style2.default);

exports.default = Paragraph;

var Properties = function (_Style$Properties) {
	_inherits(Properties, _Style$Properties);

	function Properties() {
		_classCallCheck(this, Properties);

		return _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));
	}

	_createClass(Properties, [{
		key: 'jc',
		value: function jc(x) {
			return x.attr('w:val');
		}
	}, {
		key: 'ind',
		value: function ind(x) {
			var _this3 = this;

			return this.asObject(x, function (a) {
				return _this3.pt2Px(_this3.asPt(a));
			});
		}
	}, {
		key: 'spacing',
		value: function spacing(x) {
			var r = this.asObject(x),
			    o = {};

			if (!r.beforeAutospacing && r.beforeLines) o.top = this.pt2Px(this.asPt(r.beforeLines));else r.before;
			o.top = this.pt2Px(this.asPt(r.before));

			if (!r.afterAutospacing && r.afterLines) o.bottom = this.pt2Px(this.asPt(r.afterLines));else r.after;
			o.bottom = this.pt2Px(this.asPt(r.after));

			if (!r.line) return o;

			switch (x.lineRule) {
				case 'atLeast':
				case 'exact':
					o.lineHeight = this.pt2Px(this.asPt(x.line));
					break;
				case 'auto':
				default:
					o.lineHeight = parseInt(r.line) * 100 / 240 + '%';
			}
			o.lineRule = x.lineRule;
			return o;
		}
	}, {
		key: 'pBdr',
		value: function pBdr(x) {
			var r = {};
			var bdr = _inline2.default.Properties.prototype.bdr.bind(this);
			Array.from(x.childNodes).forEach(function (a) {
				return a.localName && (r[a.localName] = bdr(a));
			});
			return r;
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'paragraph';
		}
	}]);

	return Properties;
}(_style2.default.Properties);

var FrameProperties = function (_Style$Properties2) {
	_inherits(FrameProperties, _Style$Properties2);

	function FrameProperties() {
		_classCallCheck(this, FrameProperties);

		return _possibleConstructorReturn(this, (FrameProperties.__proto__ || Object.getPrototypeOf(FrameProperties)).apply(this, arguments));
	}

	_createClass(FrameProperties, null, [{
		key: 'type',
		get: function get() {
			return 'frame';
		}
	}]);

	return FrameProperties;
}(_style2.default.Properties);

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc3R5bGUvcGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbIlBhcmFncmFwaCIsInYiLCJfdmFsIiwicGFyc2VJbnQiLCJnZXRQYXJlbnRTdHlsZSIsImdldE91dGxpbmVMZXZlbCIsImdldE51bUlkIiwicHJvdG90eXBlIiwiYXNOdW1iZXJpbmdTdHlsZSIsImNhbGwiLCJhcmd1bWVudHMiLCJmIiwiZmFjdG9yaWVzIiwidmlzaXRvcnMiLCJwciIsIndYbWwiLCIkMSIsImNvbnN0cnVjdG9yIiwiUHJvcGVydGllcyIsIndEb2MiLCJwYXJzZSIsIklubGluZSIsIk51bWJlcmluZyIsIkZyYW1lUHJvcGVydGllcyIsIlN0eWxlIiwieCIsImF0dHIiLCJhc09iamVjdCIsInB0MlB4IiwiYXNQdCIsImEiLCJyIiwibyIsImJlZm9yZUF1dG9zcGFjaW5nIiwiYmVmb3JlTGluZXMiLCJ0b3AiLCJiZWZvcmUiLCJhZnRlckF1dG9zcGFjaW5nIiwiYWZ0ZXJMaW5lcyIsImJvdHRvbSIsImFmdGVyIiwibGluZSIsImxpbmVSdWxlIiwibGluZUhlaWdodCIsImJkciIsImJpbmQiLCJBcnJheSIsImZyb20iLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsImxvY2FsTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7a0NBQ0pDLEMsRUFBRTtBQUNqQixPQUFHLENBQUNBLElBQUUsS0FBS0MsSUFBTCxDQUFVLFlBQVYsQ0FBSCxLQUE2QixJQUFoQyxFQUNDLE9BQU9DLFNBQVNGLENBQVQsQ0FBUDtBQUNELE9BQUcsQ0FBQ0EsSUFBRSxLQUFLRyxjQUFMLEVBQUgsS0FBMkIsSUFBM0IsSUFBbUNILEVBQUVJLGVBQXhDLEVBQ0MsT0FBT0osRUFBRUksZUFBRixFQUFQO0FBQ0QsVUFBTyxDQUFDLENBQVI7QUFDQTs7OzJCQUNRSixDLEVBQUU7QUFDVixPQUFHLENBQUNBLElBQUUsS0FBS0MsSUFBTCxDQUFVLE9BQVYsQ0FBSCxLQUF3QixJQUEzQixFQUNDLE9BQU9ELENBQVA7QUFDRCxPQUFHLENBQUNBLElBQUUsS0FBS0csY0FBTCxFQUFILEtBQTJCLElBQTNCLElBQW1DSCxFQUFFSyxRQUF4QyxFQUNDLE9BQU9MLEVBQUVLLFFBQUYsRUFBUDtBQUNELFVBQU8sQ0FBQyxDQUFSO0FBQ0E7OztxQ0FDaUI7QUFBQTs7QUFDakIsVUFBTyw2Q0FBVUMsU0FBVixDQUFvQkMsZ0JBQXBCLEVBQXFDQyxJQUFyQywrQkFBMEMsSUFBMUMsb0NBQWtEQyxTQUFsRCxHQUFQO0FBQ0E7OzsyQkFDUUMsQyxFQUFHQyxTLEVBQVdDLFEsRUFBUztBQUMvQixPQUFJQyxLQUFHLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLEtBQWIsQ0FBUDtBQUNBRixTQUFNLElBQUksS0FBS0csV0FBTCxDQUFpQkMsVUFBckIsQ0FBZ0NKLEVBQWhDLEVBQW1DLEtBQUtLLElBQXhDLEVBQTZDLElBQTdDLEVBQW1EQyxLQUFuRCxDQUF5RFAsUUFBekQsQ0FBTjs7QUFFQSxJQUFDQyxLQUFHLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLEtBQWIsQ0FBSixLQUE0QixJQUFJSyxpQkFBT0gsVUFBWCxDQUFzQkosRUFBdEIsRUFBeUIsS0FBS0ssSUFBOUIsRUFBbUMsSUFBbkMsRUFBeUNDLEtBQXpDLENBQStDUCxRQUEvQyxDQUE1Qjs7QUFFQSxJQUFDQyxLQUFHLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLE9BQWIsQ0FBSixLQUE4QixJQUFJTSxvQkFBVUosVUFBZCxDQUF5QkosRUFBekIsRUFBNEIsS0FBS0ssSUFBakMsRUFBc0MsSUFBdEMsRUFBNENDLEtBQTVDLENBQWtEUCxRQUFsRCxDQUE5Qjs7QUFFQSxJQUFDQyxLQUFHLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLFNBQWIsQ0FBSixLQUFnQyxJQUFJLEtBQUtDLFdBQUwsQ0FBaUJNLGVBQXJCLENBQXFDVCxFQUFyQyxFQUF3QyxLQUFLSyxJQUE3QyxFQUFrRCxJQUFsRCxFQUF3REMsS0FBeEQsQ0FBOERQLFFBQTlELENBQWhDO0FBQ0E7OztzQkFFZ0I7QUFBQyxVQUFPLGlCQUFQO0FBQXlCOzs7c0JBRXBCO0FBQUMsVUFBT0ssVUFBUDtBQUFrQjs7O3NCQUVkO0FBQUMsVUFBT0ssZUFBUDtBQUF1Qjs7OztFQWpDZEMsZTs7a0JBQWxCeEIsUzs7SUFtQ2ZrQixVOzs7Ozs7Ozs7OztxQkFDRk8sQyxFQUFFO0FBQ0osVUFBT0EsRUFBRUMsSUFBRixDQUFPLE9BQVAsQ0FBUDtBQUNBOzs7c0JBQ0dELEMsRUFBRTtBQUFBOztBQUNMLFVBQU8sS0FBS0UsUUFBTCxDQUFjRixDQUFkLEVBQWlCO0FBQUEsV0FBRyxPQUFLRyxLQUFMLENBQVcsT0FBS0MsSUFBTCxDQUFVQyxDQUFWLENBQVgsQ0FBSDtBQUFBLElBQWpCLENBQVA7QUFDQTs7OzBCQUNPTCxDLEVBQUU7QUFDVCxPQUFJTSxJQUFFLEtBQUtKLFFBQUwsQ0FBY0YsQ0FBZCxDQUFOO0FBQUEsT0FBd0JPLElBQUUsRUFBMUI7O0FBRUEsT0FBRyxDQUFDRCxFQUFFRSxpQkFBSCxJQUF3QkYsRUFBRUcsV0FBN0IsRUFDQ0YsRUFBRUcsR0FBRixHQUFNLEtBQUtQLEtBQUwsQ0FBVyxLQUFLQyxJQUFMLENBQVVFLEVBQUVHLFdBQVosQ0FBWCxDQUFOLENBREQsS0FFTUgsRUFBRUssTUFBSDtBQUNKSixLQUFFRyxHQUFGLEdBQU0sS0FBS1AsS0FBTCxDQUFXLEtBQUtDLElBQUwsQ0FBVUUsRUFBRUssTUFBWixDQUFYLENBQU47O0FBRUQsT0FBRyxDQUFDTCxFQUFFTSxnQkFBSCxJQUF1Qk4sRUFBRU8sVUFBNUIsRUFDQ04sRUFBRU8sTUFBRixHQUFTLEtBQUtYLEtBQUwsQ0FBVyxLQUFLQyxJQUFMLENBQVVFLEVBQUVPLFVBQVosQ0FBWCxDQUFULENBREQsS0FFTVAsRUFBRVMsS0FBSDtBQUNKUixLQUFFTyxNQUFGLEdBQVMsS0FBS1gsS0FBTCxDQUFXLEtBQUtDLElBQUwsQ0FBVUUsRUFBRVMsS0FBWixDQUFYLENBQVQ7O0FBRUQsT0FBRyxDQUFDVCxFQUFFVSxJQUFOLEVBQ0MsT0FBT1QsQ0FBUDs7QUFFRCxXQUFPUCxFQUFFaUIsUUFBVDtBQUNBLFNBQUssU0FBTDtBQUNBLFNBQUssT0FBTDtBQUNDVixPQUFFVyxVQUFGLEdBQWEsS0FBS2YsS0FBTCxDQUFXLEtBQUtDLElBQUwsQ0FBVUosRUFBRWdCLElBQVosQ0FBWCxDQUFiO0FBQ0E7QUFDRCxTQUFLLE1BQUw7QUFDQTtBQUNDVCxPQUFFVyxVQUFGLEdBQWN4QyxTQUFTNEIsRUFBRVUsSUFBWCxJQUFpQixHQUFqQixHQUFxQixHQUF0QixHQUEyQixHQUF4QztBQVBEO0FBU0FULEtBQUVVLFFBQUYsR0FBV2pCLEVBQUVpQixRQUFiO0FBQ0EsVUFBT1YsQ0FBUDtBQUNBOzs7dUJBQ0lQLEMsRUFBRTtBQUNOLE9BQUlNLElBQUUsRUFBTjtBQUNBLE9BQUlhLE1BQUl2QixpQkFBT0gsVUFBUCxDQUFrQlgsU0FBbEIsQ0FBNEJxQyxHQUE1QixDQUFnQ0MsSUFBaEMsQ0FBcUMsSUFBckMsQ0FBUjtBQUNBQyxTQUFNQyxJQUFOLENBQVd0QixFQUFFdUIsVUFBYixFQUF5QkMsT0FBekIsQ0FBaUM7QUFBQSxXQUFHbkIsRUFBRW9CLFNBQUYsS0FBZ0JuQixFQUFFRCxFQUFFb0IsU0FBSixJQUFlTixJQUFJZCxDQUFKLENBQS9CLENBQUg7QUFBQSxJQUFqQztBQUNBLFVBQU9DLENBQVA7QUFDQTs7O3NCQUNnQjtBQUFDLFVBQU8sV0FBUDtBQUFtQjs7OztFQXpDYlAsZ0JBQU1OLFU7O0lBNEN6QkssZTs7Ozs7Ozs7Ozs7c0JBQ1k7QUFBQyxVQUFPLE9BQVA7QUFBZTs7OztFQURKQyxnQkFBTU4sVSIsImZpbGUiOiJwYXJhZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGUgZnJvbSAnLi4vc3R5bGUnXG5pbXBvcnQgSW5saW5lIGZyb20gJy4vaW5saW5lJ1xuaW1wb3J0IE51bWJlcmluZyBmcm9tICcuL251bWJlcmluZydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFncmFwaCBleHRlbmRzIFN0eWxle1xuXHRnZXRPdXRsaW5lTGV2ZWwodil7XG5cdFx0aWYoKHY9dGhpcy5fdmFsKCdvdXRsaW5lTHZsJykpIT1udWxsKVxuXHRcdFx0cmV0dXJuIHBhcnNlSW50KHYpXG5cdFx0aWYoKHY9dGhpcy5nZXRQYXJlbnRTdHlsZSgpKSE9bnVsbCAmJiB2LmdldE91dGxpbmVMZXZlbClcblx0XHRcdHJldHVybiB2LmdldE91dGxpbmVMZXZlbCgpXG5cdFx0cmV0dXJuIC0xXG5cdH1cblx0Z2V0TnVtSWQodil7XG5cdFx0aWYoKHY9dGhpcy5fdmFsKCdudW1JZCcpKSE9bnVsbClcblx0XHRcdHJldHVybiB2XG5cdFx0aWYoKHY9dGhpcy5nZXRQYXJlbnRTdHlsZSgpKSE9bnVsbCAmJiB2LmdldE51bUlkKVxuXHRcdFx0cmV0dXJuIHYuZ2V0TnVtSWQoKVxuXHRcdHJldHVybiAtMVxuXHR9XG5cdGFzTnVtYmVyaW5nU3R5bGUoKXtcblx0XHRyZXR1cm4gTnVtYmVyaW5nLnByb3RvdHlwZS5hc051bWJlcmluZ1N0eWxlLmNhbGwodGhpcywuLi5hcmd1bWVudHMpXG5cdH1cblx0X2l0ZXJhdGUoZiwgZmFjdG9yaWVzLCB2aXNpdG9ycyl7XG5cdFx0dmFyIHByPXRoaXMud1htbC4kMSgncFByJylcblx0XHRwciAmJiBuZXcgdGhpcy5jb25zdHJ1Y3Rvci5Qcm9wZXJ0aWVzKHByLHRoaXMud0RvYyx0aGlzKS5wYXJzZSh2aXNpdG9ycyk7XG5cblx0XHQocHI9dGhpcy53WG1sLiQxKCdyUHInKSkgJiYgbmV3IElubGluZS5Qcm9wZXJ0aWVzKHByLHRoaXMud0RvYyx0aGlzKS5wYXJzZSh2aXNpdG9ycyk7XG5cblx0XHQocHI9dGhpcy53WG1sLiQxKCdudW1QcicpKSAmJiBuZXcgTnVtYmVyaW5nLlByb3BlcnRpZXMocHIsdGhpcy53RG9jLHRoaXMpLnBhcnNlKHZpc2l0b3JzKTtcblxuXHRcdChwcj10aGlzLndYbWwuJDEoJ2ZyYW1lUHInKSkgJiYgbmV3IHRoaXMuY29uc3RydWN0b3IuRnJhbWVQcm9wZXJ0aWVzKHByLHRoaXMud0RvYyx0aGlzKS5wYXJzZSh2aXNpdG9ycyk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IHR5cGUoKXtyZXR1cm4gJ3N0eWxlLnBhcmFncmFwaCd9XG5cblx0c3RhdGljIGdldCBQcm9wZXJ0aWVzKCl7cmV0dXJuIFByb3BlcnRpZXN9XG5cblx0c3RhdGljIGdldCBGcmFtZVByb3BlcnRpZXMoKXtyZXR1cm4gRnJhbWVQcm9wZXJ0aWVzfVxufVxuY2xhc3MgUHJvcGVydGllcyBleHRlbmRzIFN0eWxlLlByb3BlcnRpZXN7XG5cdGpjKHgpe1xuXHRcdHJldHVybiB4LmF0dHIoJ3c6dmFsJylcblx0fVxuXHRpbmQoeCl7XG5cdFx0cmV0dXJuIHRoaXMuYXNPYmplY3QoeCwgYT0+dGhpcy5wdDJQeCh0aGlzLmFzUHQoYSkpKVxuXHR9XG5cdHNwYWNpbmcoeCl7XG5cdFx0dmFyIHI9dGhpcy5hc09iamVjdCh4KSwgbz17fVxuXG5cdFx0aWYoIXIuYmVmb3JlQXV0b3NwYWNpbmcgJiYgci5iZWZvcmVMaW5lcylcblx0XHRcdG8udG9wPXRoaXMucHQyUHgodGhpcy5hc1B0KHIuYmVmb3JlTGluZXMpKVxuXHRcdGVsc2UgKHIuYmVmb3JlKVxuXHRcdFx0by50b3A9dGhpcy5wdDJQeCh0aGlzLmFzUHQoci5iZWZvcmUpKVxuXG5cdFx0aWYoIXIuYWZ0ZXJBdXRvc3BhY2luZyAmJiByLmFmdGVyTGluZXMpXG5cdFx0XHRvLmJvdHRvbT10aGlzLnB0MlB4KHRoaXMuYXNQdChyLmFmdGVyTGluZXMpKVxuXHRcdGVsc2UgKHIuYWZ0ZXIpXG5cdFx0XHRvLmJvdHRvbT10aGlzLnB0MlB4KHRoaXMuYXNQdChyLmFmdGVyKSlcblxuXHRcdGlmKCFyLmxpbmUpXG5cdFx0XHRyZXR1cm4gb1xuXG5cdFx0c3dpdGNoKHgubGluZVJ1bGUpe1xuXHRcdGNhc2UgJ2F0TGVhc3QnOlxuXHRcdGNhc2UgJ2V4YWN0Jzpcblx0XHRcdG8ubGluZUhlaWdodD10aGlzLnB0MlB4KHRoaXMuYXNQdCh4LmxpbmUpKVxuXHRcdFx0YnJlYWtcblx0XHRjYXNlICdhdXRvJzpcblx0XHRkZWZhdWx0OlxuXHRcdFx0by5saW5lSGVpZ2h0PShwYXJzZUludChyLmxpbmUpKjEwMC8yNDApKyclJ1xuXHRcdH1cblx0XHRvLmxpbmVSdWxlPXgubGluZVJ1bGVcblx0XHRyZXR1cm4gb1xuXHR9XG5cdHBCZHIoeCl7XG5cdFx0bGV0IHI9e31cblx0XHRsZXQgYmRyPUlubGluZS5Qcm9wZXJ0aWVzLnByb3RvdHlwZS5iZHIuYmluZCh0aGlzKVxuXHRcdEFycmF5LmZyb20oeC5jaGlsZE5vZGVzKS5mb3JFYWNoKGE9PmEubG9jYWxOYW1lICYmIChyW2EubG9jYWxOYW1lXT1iZHIoYSkpKVxuXHRcdHJldHVybiByXG5cdH1cblx0c3RhdGljIGdldCB0eXBlKCl7cmV0dXJuICdwYXJhZ3JhcGgnfVxufVxuXG5jbGFzcyBGcmFtZVByb3BlcnRpZXMgZXh0ZW5kcyBTdHlsZS5Qcm9wZXJ0aWVze1xuXHRzdGF0aWMgZ2V0IHR5cGUoKXtyZXR1cm4gJ2ZyYW1lJ31cbn1cbiJdfQ==