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
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb2N4L21vZGVsLmpzIl0sIm5hbWVzIjpbIm1vZGVsIiwid1htbCIsIndEb2MiLCJtUGFyZW50IiwiYXJndW1lbnRzIiwiY29udGVudCIsInB1c2giLCJ0eXBlIiwiY29uc3RydWN0b3IiLCJ2aXNpdEZhY3RvcmllcyIsInZpc2l0b3JzIiwicGFyYW1pemVkVmlzaXRGYWN0b3JpZXMiLCIkdG9vbCIsIm1hcCIsInZpc2l0RmFjdG9yeSIsInZpc2l0b3IiLCJ2aXNpdCIsIndpdGgiLCJiaW5kIiwibGVuZ3RoIiwiZmFjdG9yeSIsIl9pdGVyYXRlIiwicGFyc2UiLCJmIiwiaSIsImNoaWxkcmVuIiwiX2dldFZhbGlkQ2hpbGRyZW4iLCJsIiwiX3Nob3VsZElnbm9yZSIsImNoaWxkTm9kZXMiLCJzZWxlY3RvciIsImtleSIsIm4iLCIkMSIsImF0dHIiLCJfYXR0ciIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxLOzs7QUFDbkIsaUJBQVlDLElBQVosRUFBa0JDLElBQWxCLEVBQXdCQyxPQUF4QixFQUFpQztBQUFBOztBQUFBLCtHQUN0QkMsU0FEc0I7O0FBRS9CLFVBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFVBQUtFLE9BQUwsR0FBZSxFQUFmO0FBQ0EsUUFBSUYsT0FBSixFQUFhQSxRQUFRRSxPQUFSLENBQWdCQyxJQUFoQjtBQUNiLFVBQUtDLElBQUwsR0FBWSxNQUFLQyxXQUFMLENBQWlCRCxJQUE3QjtBQUwrQjtBQU1oQzs7OzswQkFDS0UsYyxFQUFnQjtBQUFBOztBQUNwQixVQUFJQyxXQUFXLEVBQWY7QUFDQSxVQUFJQywwQkFBMEIsRUFBOUI7QUFDQUMsWUFBTUMsR0FBTixDQUNFSixjQURGLEVBRUUsVUFBVUssWUFBVixFQUF3QjtBQUN0QixZQUFJQyxVQUFVRCxhQUFhLElBQWIsQ0FBZDtBQUNBLFlBQUlDLFdBQVdBLFFBQVFDLEtBQVIsT0FBb0IsS0FBbkMsRUFBMEM7QUFDeENOLG1CQUFTSixJQUFULENBQWNTLE9BQWQ7QUFDQUosa0NBQXdCTCxJQUF4QixDQUE2QlEsYUFBYUcsSUFBYixDQUFrQkYsT0FBbEIsQ0FBN0I7QUFDRDtBQUNGLE9BTkQsQ0FNRUcsSUFORixDQU1PLElBTlAsQ0FGRjs7QUFXQSxVQUFJUixTQUFTUyxNQUFULEdBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLFlBQUlDLFVBQVUsS0FBS2xCLElBQUwsQ0FBVWtCLE9BQVYsQ0FBa0JGLElBQWxCLENBQXVCLEtBQUtoQixJQUE1QixDQUFkO0FBQ0EsYUFBS21CLFFBQUwsQ0FDRSxVQUFDcEIsSUFBRDtBQUFBLGlCQUFVbUIsUUFBUW5CLElBQVIsRUFBYyxPQUFLQyxJQUFuQixFQUF5QixNQUF6QixFQUErQm9CLEtBQS9CLENBQXFDWCx1QkFBckMsQ0FBVjtBQUFBLFNBREYsRUFFRUEsdUJBRkYsRUFHRUQsUUFIRjtBQUtEOztBQUVELGFBQU9BLFFBQVA7QUFDRDs7OzZCQUNRYSxDLEVBQUdaLHVCLEVBQXlCO0FBQ25DLFdBQ0UsSUFBSWEsSUFBSSxDQUFSLEVBQ0VDLFdBQVcsS0FBS0MsaUJBQUwsRUFEYixFQUVFQyxJQUFJRixXQUFXQSxTQUFTTixNQUFwQixHQUE2QixDQUhyQyxFQUlFSyxJQUFJRyxDQUpOLEVBS0VILEdBTEY7QUFPRSxTQUFDLEtBQUtJLGFBQUwsQ0FBbUJILFNBQVNELENBQVQsQ0FBbkIsQ0FBRCxJQUFvQ0QsRUFBRUUsU0FBU0QsQ0FBVCxDQUFGLENBQXBDO0FBUEY7QUFRRDs7O3dDQUNtQjtBQUNsQixhQUFPLEtBQUt2QixJQUFMLENBQVU0QixVQUFqQjtBQUNEOzs7a0NBQ2E1QixJLEVBQU07QUFDbEIsYUFBTyxLQUFQO0FBQ0Q7OzswQkFDSzZCLFEsRUFBVUMsRyxFQUFLO0FBQ25CLFVBQUlDLElBQ0Y1QixVQUFVZSxNQUFWLElBQW9CLENBQXBCLElBQ01ZLE1BQU1ELFFBQVAsRUFBa0IsS0FBSzdCLElBRDVCLElBRUksS0FBS0EsSUFBTCxDQUFVZ0MsRUFBVixDQUFhSCxRQUFiLENBSE47QUFJQSxhQUFPRSxJQUFJQSxFQUFFRSxJQUFGLENBQU9ILEdBQVAsQ0FBSixHQUFrQixJQUF6QjtBQUNEOzs7eUJBQ0lELFEsRUFBVTtBQUNiLGFBQU8sS0FBS0ssS0FBTCxDQUFXTCxRQUFYLEVBQXFCLE9BQXJCLENBQVA7QUFDRDs7OztFQTFEZ0NNLFFBQVEsV0FBUixDOztrQkFBZHBDLEsiLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBtb2RlbCBleHRlbmRzIHJlcXVpcmUoJy4uL3BhcnNlcicpIHtcbiAgY29uc3RydWN0b3Iod1htbCwgd0RvYywgbVBhcmVudCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy5tUGFyZW50ID0gbVBhcmVudDtcbiAgICB0aGlzLmNvbnRlbnQgPSBbXTtcbiAgICBpZiAobVBhcmVudCkgbVBhcmVudC5jb250ZW50LnB1c2godGhpcyk7XG4gICAgdGhpcy50eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci50eXBlO1xuICB9XG4gIHBhcnNlKHZpc2l0RmFjdG9yaWVzKSB7XG4gICAgdmFyIHZpc2l0b3JzID0gW107XG4gICAgdmFyIHBhcmFtaXplZFZpc2l0RmFjdG9yaWVzID0gW107XG4gICAgJHRvb2wubWFwKFxuICAgICAgdmlzaXRGYWN0b3JpZXMsXG4gICAgICBmdW5jdGlvbiAodmlzaXRGYWN0b3J5KSB7XG4gICAgICAgIHZhciB2aXNpdG9yID0gdmlzaXRGYWN0b3J5KHRoaXMpO1xuICAgICAgICBpZiAodmlzaXRvciAmJiB2aXNpdG9yLnZpc2l0KCkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgdmlzaXRvcnMucHVzaCh2aXNpdG9yKTtcbiAgICAgICAgICBwYXJhbWl6ZWRWaXNpdEZhY3Rvcmllcy5wdXNoKHZpc2l0RmFjdG9yeS53aXRoKHZpc2l0b3IpKTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcblxuICAgIGlmICh2aXNpdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgZmFjdG9yeSA9IHRoaXMud0RvYy5mYWN0b3J5LmJpbmQodGhpcy53RG9jKTtcbiAgICAgIHRoaXMuX2l0ZXJhdGUoXG4gICAgICAgICh3WG1sKSA9PiBmYWN0b3J5KHdYbWwsIHRoaXMud0RvYywgdGhpcykucGFyc2UocGFyYW1pemVkVmlzaXRGYWN0b3JpZXMpLFxuICAgICAgICBwYXJhbWl6ZWRWaXNpdEZhY3RvcmllcyxcbiAgICAgICAgdmlzaXRvcnNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpc2l0b3JzO1xuICB9XG4gIF9pdGVyYXRlKGYsIHBhcmFtaXplZFZpc2l0RmFjdG9yaWVzKSB7XG4gICAgZm9yIChcbiAgICAgIHZhciBpID0gMCxcbiAgICAgICAgY2hpbGRyZW4gPSB0aGlzLl9nZXRWYWxpZENoaWxkcmVuKCksXG4gICAgICAgIGwgPSBjaGlsZHJlbiA/IGNoaWxkcmVuLmxlbmd0aCA6IDA7XG4gICAgICBpIDwgbDtcbiAgICAgIGkrK1xuICAgIClcbiAgICAgICF0aGlzLl9zaG91bGRJZ25vcmUoY2hpbGRyZW5baV0pICYmIGYoY2hpbGRyZW5baV0pO1xuICB9XG4gIF9nZXRWYWxpZENoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLndYbWwuY2hpbGROb2RlcztcbiAgfVxuICBfc2hvdWxkSWdub3JlKHdYbWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgX2F0dHIoc2VsZWN0b3IsIGtleSkge1xuICAgIHZhciBuID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPT0gMVxuICAgICAgICA/ICgoa2V5ID0gc2VsZWN0b3IpLCB0aGlzLndYbWwpXG4gICAgICAgIDogdGhpcy53WG1sLiQxKHNlbGVjdG9yKTtcbiAgICByZXR1cm4gbiA/IG4uYXR0cihrZXkpIDogbnVsbDtcbiAgfVxuICBfdmFsKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIoc2VsZWN0b3IsICd3OnZhbCcpO1xuICB9XG59XG4iXX0=