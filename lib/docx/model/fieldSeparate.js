'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fieldSeperate = function (_require) {
  _inherits(fieldSeperate, _require);

  function fieldSeperate() {
    _classCallCheck(this, fieldSeperate);

    return _possibleConstructorReturn(this, (fieldSeperate.__proto__ || Object.getPrototypeOf(fieldSeperate)).apply(this, arguments));
  }

  _createClass(fieldSeperate, [{
    key: 'parse',
    value: function parse(factories) {
      this.wDoc.parseContext.field.seperate(this);
    }
  }], [{
    key: 'type',
    get: function get() {
      return 'fieldEnd';
    }
  }]);

  return fieldSeperate;
}(require('../model'));

exports.default = fieldSeperate;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L21vZGVsL2ZpZWxkU2VwYXJhdGUuanMiXSwibmFtZXMiOlsiZmllbGRTZXBlcmF0ZSIsImZhY3RvcmllcyIsIndEb2MiLCJwYXJzZUNvbnRleHQiLCJmaWVsZCIsInNlcGVyYXRlIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLGE7Ozs7Ozs7Ozs7OzBCQUNiQyxTLEVBQVc7QUFDZixXQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJDLEtBQXZCLENBQTZCQyxRQUE3QixDQUFzQyxJQUF0QztBQUNEOzs7d0JBQ2lCO0FBQ2hCLGFBQU8sVUFBUDtBQUNEOzs7O0VBTndDQyxRQUFRLFVBQVIsQzs7a0JBQXRCTixhIiwiZmlsZSI6ImZpZWxkU2VwYXJhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBmaWVsZFNlcGVyYXRlIGV4dGVuZHMgcmVxdWlyZSgnLi4vbW9kZWwnKSB7XG4gIHBhcnNlKGZhY3Rvcmllcykge1xuICAgIHRoaXMud0RvYy5wYXJzZUNvbnRleHQuZmllbGQuc2VwZXJhdGUodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnZmllbGRFbmQnO1xuICB9XG59XG4iXX0=