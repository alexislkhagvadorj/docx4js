'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hyperlink = function (_require) {
  _inherits(hyperlink, _require);

  function hyperlink() {
    _classCallCheck(this, hyperlink);

    return _possibleConstructorReturn(this, (hyperlink.__proto__ || Object.getPrototypeOf(hyperlink)).apply(this, arguments));
  }

  _createClass(hyperlink, [{
    key: 'getLink',
    value: function getLink(a) {
      return (a = this._attr('r:id')) ? this._getLocalLink(a) : '#' + this._attr('w:anchor');
    }
  }, {
    key: '_getLocalLink',
    value: function _getLocalLink(id) {
      return this.wDoc.partMain.getRel(id);
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'hyperlink';
    }
  }]);

  return hyperlink;
}(require('../model'));

exports.default = hyperlink;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2h5cGVybGluay5qcyJdLCJuYW1lcyI6WyJoeXBlcmxpbmsiLCJhIiwiX2F0dHIiLCJfZ2V0TG9jYWxMaW5rIiwiaWQiLCJ3RG9jIiwicGFydE1haW4iLCJnZXRSZWwiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFxQkEsUzs7Ozs7Ozs7Ozs7NEJBS1hDLEMsRUFBRztBQUNULGFBQU8sQ0FBQ0EsSUFBSSxLQUFLQyxLQUFMLENBQVcsTUFBWCxDQUFMLElBQ0gsS0FBS0MsYUFBTCxDQUFtQkYsQ0FBbkIsQ0FERyxHQUVILE1BQU0sS0FBS0MsS0FBTCxDQUFXLFVBQVgsQ0FGVjtBQUdEOzs7a0NBQ2FFLEUsRUFBSTtBQUNoQixhQUFPLEtBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQkMsTUFBbkIsQ0FBMEJILEVBQTFCLENBQVA7QUFDRDs7O3dCQVhpQjtBQUNoQixhQUFPLFdBQVA7QUFDRDs7OztFQUhvQ0ksUUFBUSxVQUFSLEM7O2tCQUFsQlIsUyIsImZpbGUiOiJoeXBlcmxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBoeXBlcmxpbmsgZXh0ZW5kcyByZXF1aXJlKCcuLi9tb2RlbCcpIHtcbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnaHlwZXJsaW5rJztcbiAgfVxuXG4gIGdldExpbmsoYSkge1xuICAgIHJldHVybiAoYSA9IHRoaXMuX2F0dHIoJ3I6aWQnKSlcbiAgICAgID8gdGhpcy5fZ2V0TG9jYWxMaW5rKGEpXG4gICAgICA6ICcjJyArIHRoaXMuX2F0dHIoJ3c6YW5jaG9yJyk7XG4gIH1cbiAgX2dldExvY2FsTGluayhpZCkge1xuICAgIHJldHVybiB0aGlzLndEb2MucGFydE1haW4uZ2V0UmVsKGlkKTtcbiAgfVxufVxuIl19