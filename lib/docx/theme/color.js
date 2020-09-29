'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RGB = /([a-fA-F0-9]{2}?){3}?/;

var color = function () {
  function color(wXml, xMapping) {
    _classCallCheck(this, color);

    this.wXml = wXml;
    this.map = {};
    for (var i = 0, map = xMapping.attributes, len = map.length, attr; i < len; i++) {
      this.map[(attr = xMapping.attributes[i]).localName] = attr.value;
    }
  }

  _createClass(color, [{
    key: 'get',
    value: function get(name, t) {
      if (name == 'phClr')
        //placeholder color, witch will be replaced with direct style
        return name;
      name = this.map[name] || name;
      if (t = this.wXml.$1(name)) {
        switch (t.firstChild.localName) {
          case 'sysClr':
            return '#' + t.firstChild.attr('lastClr');
          default:
            return '#' + t.firstChild.attr('val');
        }
      } else return 'black';
    }
  }]);

  return color;
}();

exports.default = color;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L3RoZW1lL2NvbG9yLmpzIl0sIm5hbWVzIjpbIlJHQiIsImNvbG9yIiwid1htbCIsInhNYXBwaW5nIiwibWFwIiwiaSIsImF0dHJpYnV0ZXMiLCJsZW4iLCJsZW5ndGgiLCJhdHRyIiwibG9jYWxOYW1lIiwidmFsdWUiLCJuYW1lIiwidCIsIiQxIiwiZmlyc3RDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUlBLE1BQU0sdUJBQVY7O0lBQ3FCQyxLO0FBQ25CLGlCQUFZQyxJQUFaLEVBQWtCQyxRQUFsQixFQUE0QjtBQUFBOztBQUMxQixTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLRSxHQUFMLEdBQVcsRUFBWDtBQUNBLFNBQ0UsSUFBSUMsSUFBSSxDQUFSLEVBQVdELE1BQU1ELFNBQVNHLFVBQTFCLEVBQXNDQyxNQUFNSCxJQUFJSSxNQUFoRCxFQUF3REMsSUFEMUQsRUFFRUosSUFBSUUsR0FGTixFQUdFRixHQUhGO0FBS0UsV0FBS0QsR0FBTCxDQUFTLENBQUNLLE9BQU9OLFNBQVNHLFVBQVQsQ0FBb0JELENBQXBCLENBQVIsRUFBZ0NLLFNBQXpDLElBQXNERCxLQUFLRSxLQUEzRDtBQUxGO0FBTUQ7Ozs7d0JBQ0dDLEksRUFBTUMsQyxFQUFHO0FBQ1gsVUFBSUQsUUFBUSxPQUFaO0FBQ0U7QUFDQSxlQUFPQSxJQUFQO0FBQ0ZBLGFBQU8sS0FBS1IsR0FBTCxDQUFTUSxJQUFULEtBQWtCQSxJQUF6QjtBQUNBLFVBQUtDLElBQUksS0FBS1gsSUFBTCxDQUFVWSxFQUFWLENBQWFGLElBQWIsQ0FBVCxFQUE4QjtBQUM1QixnQkFBUUMsRUFBRUUsVUFBRixDQUFhTCxTQUFyQjtBQUNFLGVBQUssUUFBTDtBQUNFLG1CQUFPLE1BQU1HLEVBQUVFLFVBQUYsQ0FBYU4sSUFBYixDQUFrQixTQUFsQixDQUFiO0FBQ0Y7QUFDRSxtQkFBTyxNQUFNSSxFQUFFRSxVQUFGLENBQWFOLElBQWIsQ0FBa0IsS0FBbEIsQ0FBYjtBQUpKO0FBTUQsT0FQRCxNQU9PLE9BQU8sT0FBUDtBQUNSOzs7Ozs7a0JBeEJrQlIsSyIsImZpbGUiOiJjb2xvci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSR0IgPSAvKFthLWZBLUYwLTldezJ9Pyl7M30/LztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNvbG9yIHtcbiAgY29uc3RydWN0b3Iod1htbCwgeE1hcHBpbmcpIHtcbiAgICB0aGlzLndYbWwgPSB3WG1sO1xuICAgIHRoaXMubWFwID0ge307XG4gICAgZm9yIChcbiAgICAgIHZhciBpID0gMCwgbWFwID0geE1hcHBpbmcuYXR0cmlidXRlcywgbGVuID0gbWFwLmxlbmd0aCwgYXR0cjtcbiAgICAgIGkgPCBsZW47XG4gICAgICBpKytcbiAgICApXG4gICAgICB0aGlzLm1hcFsoYXR0ciA9IHhNYXBwaW5nLmF0dHJpYnV0ZXNbaV0pLmxvY2FsTmFtZV0gPSBhdHRyLnZhbHVlO1xuICB9XG4gIGdldChuYW1lLCB0KSB7XG4gICAgaWYgKG5hbWUgPT0gJ3BoQ2xyJylcbiAgICAgIC8vcGxhY2Vob2xkZXIgY29sb3IsIHdpdGNoIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBkaXJlY3Qgc3R5bGVcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIG5hbWUgPSB0aGlzLm1hcFtuYW1lXSB8fCBuYW1lO1xuICAgIGlmICgodCA9IHRoaXMud1htbC4kMShuYW1lKSkpIHtcbiAgICAgIHN3aXRjaCAodC5maXJzdENoaWxkLmxvY2FsTmFtZSkge1xuICAgICAgICBjYXNlICdzeXNDbHInOlxuICAgICAgICAgIHJldHVybiAnIycgKyB0LmZpcnN0Q2hpbGQuYXR0cignbGFzdENscicpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiAnIycgKyB0LmZpcnN0Q2hpbGQuYXR0cigndmFsJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHJldHVybiAnYmxhY2snO1xuICB9XG59XG4iXX0=