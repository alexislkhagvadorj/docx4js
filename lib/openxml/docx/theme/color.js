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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvdGhlbWUvY29sb3IuanMiXSwibmFtZXMiOlsiUkdCIiwiY29sb3IiLCJ3WG1sIiwieE1hcHBpbmciLCJtYXAiLCJpIiwiYXR0cmlidXRlcyIsImxlbiIsImxlbmd0aCIsImF0dHIiLCJsb2NhbE5hbWUiLCJ2YWx1ZSIsIm5hbWUiLCJ0IiwiJDEiLCJmaXJzdENoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBSUEsTUFBTSx1QkFBVjs7SUFDcUJDLEs7QUFDbkIsaUJBQVlDLElBQVosRUFBa0JDLFFBQWxCLEVBQTRCO0FBQUE7O0FBQzFCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtFLEdBQUwsR0FBVyxFQUFYO0FBQ0EsU0FDRSxJQUFJQyxJQUFJLENBQVIsRUFBV0QsTUFBTUQsU0FBU0csVUFBMUIsRUFBc0NDLE1BQU1ILElBQUlJLE1BQWhELEVBQXdEQyxJQUQxRCxFQUVFSixJQUFJRSxHQUZOLEVBR0VGLEdBSEY7QUFLRSxXQUFLRCxHQUFMLENBQVMsQ0FBQ0ssT0FBT04sU0FBU0csVUFBVCxDQUFvQkQsQ0FBcEIsQ0FBUixFQUFnQ0ssU0FBekMsSUFBc0RELEtBQUtFLEtBQTNEO0FBTEY7QUFNRDs7Ozt3QkFDR0MsSSxFQUFNQyxDLEVBQUc7QUFDWCxVQUFJRCxRQUFRLE9BQVo7QUFDRTtBQUNBLGVBQU9BLElBQVA7QUFDRkEsYUFBTyxLQUFLUixHQUFMLENBQVNRLElBQVQsS0FBa0JBLElBQXpCO0FBQ0EsVUFBS0MsSUFBSSxLQUFLWCxJQUFMLENBQVVZLEVBQVYsQ0FBYUYsSUFBYixDQUFULEVBQThCO0FBQzVCLGdCQUFRQyxFQUFFRSxVQUFGLENBQWFMLFNBQXJCO0FBQ0UsZUFBSyxRQUFMO0FBQ0UsbUJBQU8sTUFBTUcsRUFBRUUsVUFBRixDQUFhTixJQUFiLENBQWtCLFNBQWxCLENBQWI7QUFDRjtBQUNFLG1CQUFPLE1BQU1JLEVBQUVFLFVBQUYsQ0FBYU4sSUFBYixDQUFrQixLQUFsQixDQUFiO0FBSko7QUFNRCxPQVBELE1BT08sT0FBTyxPQUFQO0FBQ1I7Ozs7OztrQkF4QmtCUixLIiwiZmlsZSI6ImNvbG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJHQiA9IC8oW2EtZkEtRjAtOV17Mn0/KXszfT8vO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY29sb3Ige1xuICBjb25zdHJ1Y3Rvcih3WG1sLCB4TWFwcGluZykge1xuICAgIHRoaXMud1htbCA9IHdYbWw7XG4gICAgdGhpcy5tYXAgPSB7fTtcbiAgICBmb3IgKFxuICAgICAgdmFyIGkgPSAwLCBtYXAgPSB4TWFwcGluZy5hdHRyaWJ1dGVzLCBsZW4gPSBtYXAubGVuZ3RoLCBhdHRyO1xuICAgICAgaSA8IGxlbjtcbiAgICAgIGkrK1xuICAgIClcbiAgICAgIHRoaXMubWFwWyhhdHRyID0geE1hcHBpbmcuYXR0cmlidXRlc1tpXSkubG9jYWxOYW1lXSA9IGF0dHIudmFsdWU7XG4gIH1cbiAgZ2V0KG5hbWUsIHQpIHtcbiAgICBpZiAobmFtZSA9PSAncGhDbHInKVxuICAgICAgLy9wbGFjZWhvbGRlciBjb2xvciwgd2l0Y2ggd2lsbCBiZSByZXBsYWNlZCB3aXRoIGRpcmVjdCBzdHlsZVxuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgbmFtZSA9IHRoaXMubWFwW25hbWVdIHx8IG5hbWU7XG4gICAgaWYgKCh0ID0gdGhpcy53WG1sLiQxKG5hbWUpKSkge1xuICAgICAgc3dpdGNoICh0LmZpcnN0Q2hpbGQubG9jYWxOYW1lKSB7XG4gICAgICAgIGNhc2UgJ3N5c0Nscic6XG4gICAgICAgICAgcmV0dXJuICcjJyArIHQuZmlyc3RDaGlsZC5hdHRyKCdsYXN0Q2xyJyk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICcjJyArIHQuZmlyc3RDaGlsZC5hdHRyKCd2YWwnKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgcmV0dXJuICdibGFjayc7XG4gIH1cbn1cbiJdfQ==