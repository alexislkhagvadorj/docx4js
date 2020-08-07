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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwuanMiXSwibmFtZXMiOlsibW9kZWwiLCJ3WG1sIiwid0RvYyIsIm1QYXJlbnQiLCJhcmd1bWVudHMiLCJjb250ZW50IiwicHVzaCIsInR5cGUiLCJjb25zdHJ1Y3RvciIsInZpc2l0RmFjdG9yaWVzIiwidmlzaXRvcnMiLCJwYXJhbWl6ZWRWaXNpdEZhY3RvcmllcyIsIiR0b29sIiwibWFwIiwidmlzaXRGYWN0b3J5IiwidmlzaXRvciIsInZpc2l0Iiwid2l0aCIsImJpbmQiLCJsZW5ndGgiLCJmYWN0b3J5IiwiX2l0ZXJhdGUiLCJwYXJzZSIsImYiLCJpIiwiY2hpbGRyZW4iLCJfZ2V0VmFsaWRDaGlsZHJlbiIsImwiLCJfc2hvdWxkSWdub3JlIiwiY2hpbGROb2RlcyIsInNlbGVjdG9yIiwia2V5IiwibiIsIiQxIiwiYXR0ciIsIl9hdHRyIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLEs7OztBQUNwQixnQkFBWUMsSUFBWixFQUFpQkMsSUFBakIsRUFBc0JDLE9BQXRCLEVBQThCO0FBQUE7O0FBQUEsNkdBQ3BCQyxTQURvQjs7QUFFN0IsUUFBS0QsT0FBTCxHQUFhQSxPQUFiO0FBQ0EsUUFBS0UsT0FBTCxHQUFhLEVBQWI7QUFDQSxNQUFHRixPQUFILEVBQ0NBLFFBQVFFLE9BQVIsQ0FBZ0JDLElBQWhCO0FBQ0QsUUFBS0MsSUFBTCxHQUFVLE1BQUtDLFdBQUwsQ0FBaUJELElBQTNCO0FBTjZCO0FBTzdCOzs7O3dCQUNLRSxjLEVBQWU7QUFBQTs7QUFDcEIsT0FBSUMsV0FBUyxFQUFiO0FBQ0EsT0FBSUMsMEJBQXdCLEVBQTVCO0FBQ0FDLFNBQU1DLEdBQU4sQ0FBVUosY0FBVixFQUEwQixVQUFTSyxZQUFULEVBQXNCO0FBQy9DLFFBQUlDLFVBQVFELGFBQWEsSUFBYixDQUFaO0FBQ0EsUUFBR0MsV0FBV0EsUUFBUUMsS0FBUixPQUFrQixLQUFoQyxFQUFzQztBQUNyQ04sY0FBU0osSUFBVCxDQUFjUyxPQUFkO0FBQ0FKLDZCQUF3QkwsSUFBeEIsQ0FBNkJRLGFBQWFHLElBQWIsQ0FBa0JGLE9BQWxCLENBQTdCO0FBQ0E7QUFDRCxJQU55QixDQU14QkcsSUFOd0IsQ0FNbkIsSUFObUIsQ0FBMUI7O0FBUUEsT0FBR1IsU0FBU1MsTUFBVCxHQUFnQixDQUFuQixFQUFxQjtBQUNwQixRQUFJQyxVQUFRLEtBQUtsQixJQUFMLENBQVVrQixPQUFWLENBQWtCRixJQUFsQixDQUF1QixLQUFLaEIsSUFBNUIsQ0FBWjtBQUNBLFNBQUttQixRQUFMLENBQ0MsVUFBQ3BCLElBQUQ7QUFBQSxZQUFRbUIsUUFBUW5CLElBQVIsRUFBYSxPQUFLQyxJQUFsQixFQUF1QixNQUF2QixFQUE2Qm9CLEtBQTdCLENBQW1DWCx1QkFBbkMsQ0FBUjtBQUFBLEtBREQsRUFFRUEsdUJBRkYsRUFFMkJELFFBRjNCO0FBR0E7O0FBRUQsVUFBT0EsUUFBUDtBQUNBOzs7MkJBQ1FhLEMsRUFBRVosdUIsRUFBd0I7QUFDbEMsUUFBSSxJQUFJYSxJQUFFLENBQU4sRUFBUUMsV0FBUyxLQUFLQyxpQkFBTCxFQUFqQixFQUEwQ0MsSUFBRUYsV0FBU0EsU0FBU04sTUFBbEIsR0FBeUIsQ0FBekUsRUFBNEVLLElBQUVHLENBQTlFLEVBQWlGSCxHQUFqRjtBQUNFLEtBQUMsS0FBS0ksYUFBTCxDQUFtQkgsU0FBU0QsQ0FBVCxDQUFuQixDQUFGLElBQXNDRCxFQUFFRSxTQUFTRCxDQUFULENBQUYsQ0FBdEM7QUFERDtBQUVBOzs7c0NBQ2tCO0FBQ2xCLFVBQU8sS0FBS3ZCLElBQUwsQ0FBVTRCLFVBQWpCO0FBQ0E7OztnQ0FDYTVCLEksRUFBSztBQUNsQixVQUFPLEtBQVA7QUFDQTs7O3dCQUNLNkIsUSxFQUFVQyxHLEVBQUk7QUFDbkIsT0FBSUMsSUFBRTVCLFVBQVVlLE1BQVYsSUFBa0IsQ0FBbEIsSUFBdUJZLE1BQUlELFFBQUosRUFBYyxLQUFLN0IsSUFBMUMsSUFBa0QsS0FBS0EsSUFBTCxDQUFVZ0MsRUFBVixDQUFhSCxRQUFiLENBQXhEO0FBQ0EsVUFBT0UsSUFBSUEsRUFBRUUsSUFBRixDQUFPSCxHQUFQLENBQUosR0FBa0IsSUFBekI7QUFDQTs7O3VCQUNJRCxRLEVBQVM7QUFDYixVQUFPLEtBQUtLLEtBQUwsQ0FBV0wsUUFBWCxFQUFvQixPQUFwQixDQUFQO0FBQ0E7Ozs7RUE3Q2lDTSxRQUFRLFdBQVIsQzs7a0JBQWRwQyxLIiwiZmlsZSI6Im1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgbW9kZWwgZXh0ZW5kcyByZXF1aXJlKCcuLi9wYXJzZXInKXtcblx0Y29uc3RydWN0b3Iod1htbCx3RG9jLG1QYXJlbnQpe1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cylcblx0XHR0aGlzLm1QYXJlbnQ9bVBhcmVudFxuXHRcdHRoaXMuY29udGVudD1bXVxuXHRcdGlmKG1QYXJlbnQpXG5cdFx0XHRtUGFyZW50LmNvbnRlbnQucHVzaCh0aGlzKVxuXHRcdHRoaXMudHlwZT10aGlzLmNvbnN0cnVjdG9yLnR5cGVcblx0fVxuXHRwYXJzZSh2aXNpdEZhY3Rvcmllcyl7XG5cdFx0dmFyIHZpc2l0b3JzPVtdXG5cdFx0dmFyIHBhcmFtaXplZFZpc2l0RmFjdG9yaWVzPVtdO1xuXHRcdCR0b29sLm1hcCh2aXNpdEZhY3RvcmllcywgZnVuY3Rpb24odmlzaXRGYWN0b3J5KXtcblx0XHRcdHZhciB2aXNpdG9yPXZpc2l0RmFjdG9yeSh0aGlzKVxuXHRcdFx0aWYodmlzaXRvciAmJiB2aXNpdG9yLnZpc2l0KCkhPT1mYWxzZSl7XG5cdFx0XHRcdHZpc2l0b3JzLnB1c2godmlzaXRvcilcblx0XHRcdFx0cGFyYW1pemVkVmlzaXRGYWN0b3JpZXMucHVzaCh2aXNpdEZhY3Rvcnkud2l0aCh2aXNpdG9yKSlcblx0XHRcdH1cblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0aWYodmlzaXRvcnMubGVuZ3RoPjApe1xuXHRcdFx0bGV0IGZhY3Rvcnk9dGhpcy53RG9jLmZhY3RvcnkuYmluZCh0aGlzLndEb2MpXG5cdFx0XHR0aGlzLl9pdGVyYXRlKFxuXHRcdFx0XHQod1htbCk9PmZhY3Rvcnkod1htbCx0aGlzLndEb2MsdGhpcykucGFyc2UocGFyYW1pemVkVmlzaXRGYWN0b3JpZXMpXG5cdFx0XHRcdCxwYXJhbWl6ZWRWaXNpdEZhY3RvcmllcywgdmlzaXRvcnMpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZpc2l0b3JzXG5cdH1cblx0X2l0ZXJhdGUoZixwYXJhbWl6ZWRWaXNpdEZhY3Rvcmllcyl7XG5cdFx0Zm9yKHZhciBpPTAsY2hpbGRyZW49dGhpcy5fZ2V0VmFsaWRDaGlsZHJlbigpLGw9Y2hpbGRyZW4/Y2hpbGRyZW4ubGVuZ3RoOjA7IGk8bDsgaSsrKVxuXHRcdFx0KCF0aGlzLl9zaG91bGRJZ25vcmUoY2hpbGRyZW5baV0pKSAmJiBmKGNoaWxkcmVuW2ldKVxuXHR9XG5cdF9nZXRWYWxpZENoaWxkcmVuKCl7XG5cdFx0cmV0dXJuIHRoaXMud1htbC5jaGlsZE5vZGVzXG5cdH1cblx0X3Nob3VsZElnbm9yZSh3WG1sKXtcblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxuXHRfYXR0cihzZWxlY3Rvciwga2V5KXtcblx0XHR2YXIgbj1hcmd1bWVudHMubGVuZ3RoPT0xID8gKGtleT1zZWxlY3RvciwgdGhpcy53WG1sKSA6IHRoaXMud1htbC4kMShzZWxlY3Rvcilcblx0XHRyZXR1cm4gbiA/IG4uYXR0cihrZXkpIDogbnVsbFxuXHR9XG5cdF92YWwoc2VsZWN0b3Ipe1xuXHRcdHJldHVybiB0aGlzLl9hdHRyKHNlbGVjdG9yLCd3OnZhbCcpXG5cdH1cblxufVxuIl19