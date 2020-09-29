'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var font = function () {
  function font(wXml, xLang) {
    _classCallCheck(this, font);

    this.wXml = wXml;
    this.xLang = xLang;
  }

  _createClass(font, [{
    key: 'get',
    value: function get(name) {
      switch (name) {
        case 'minorHAnsi':
        case 'minorAscii':
          return this.minorHAnsi || (this.minorHAnsi = this.minorAscii = this.wXml.$1('minorFont>latin').attr('typeface'));
        case 'majorHAnsi':
        case 'majorAscii':
          return this.majorHAnsi || (this.majorHAnsi = this.majorAscii = this.wXml.$1('majorFont>latin').attr('typeface'));
        case 'majorEastAsia':
          if (this.majorEastAsia) return this.majorEastAsia;
          var t = this.wXml.$1('majorFont>ea').attr('typeface');
          if (t.length == 0) t = this.wXml.$1('majorFont>font[script="' + this.xLang.attr('w:eastAsia') + '"]');
          return this.majorEastAsia = t;
        case 'majorEastAsia':
          if (this.majorEastAsia) return this.majorEastAsia;
          var t = this.wXml.$1('minorFont>ea').attr('typeface');
          if (t.length == 0) t = this.wXml.$1('minorFont>font[script="' + this.xLang.attr('w:eastAsia') + '"]');
          return this.majorEastAsia = t;
        case 'majorBidi':
          if (this.majorBidi) return this.majorBidi;
          var t = this.wXml.$1('majorFont>cs').attr('typeface');
          if (t.length == 0) t = this.wXml.$1('majorFont>font[script="' + this.xLang.attr('w:bidi') + '"]');
          return this.majorBidi = t;
        case 'majorBidi':
          if (this.majorBidi) return this.majorBidi;
          var t = this.wXml.$1('minorFont>cs').attr('typeface');
          if (t.length == 0) t = this.wXml.$1('minorFont>font[script="' + this.xLang.attr('w:bidi') + '"]');
          return this.majorBidi = t;
      }
    }
  }]);

  return font;
}();

exports.default = font;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L3RoZW1lL2ZvbnQuanMiXSwibmFtZXMiOlsiZm9udCIsIndYbWwiLCJ4TGFuZyIsIm5hbWUiLCJtaW5vckhBbnNpIiwibWlub3JBc2NpaSIsIiQxIiwiYXR0ciIsIm1ham9ySEFuc2kiLCJtYWpvckFzY2lpIiwibWFqb3JFYXN0QXNpYSIsInQiLCJsZW5ndGgiLCJtYWpvckJpZGkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBcUJBLEk7QUFDbkIsZ0JBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7O3dCQUNHQyxJLEVBQU07QUFDUixjQUFRQSxJQUFSO0FBQ0UsYUFBSyxZQUFMO0FBQ0EsYUFBSyxZQUFMO0FBQ0UsaUJBQ0UsS0FBS0MsVUFBTCxLQUNDLEtBQUtBLFVBQUwsR0FBa0IsS0FBS0MsVUFBTCxHQUFrQixLQUFLSixJQUFMLENBQ2xDSyxFQURrQyxDQUMvQixpQkFEK0IsRUFFbENDLElBRmtDLENBRTdCLFVBRjZCLENBRHJDLENBREY7QUFNRixhQUFLLFlBQUw7QUFDQSxhQUFLLFlBQUw7QUFDRSxpQkFDRSxLQUFLQyxVQUFMLEtBQ0MsS0FBS0EsVUFBTCxHQUFrQixLQUFLQyxVQUFMLEdBQWtCLEtBQUtSLElBQUwsQ0FDbENLLEVBRGtDLENBQy9CLGlCQUQrQixFQUVsQ0MsSUFGa0MsQ0FFN0IsVUFGNkIsQ0FEckMsQ0FERjtBQU1GLGFBQUssZUFBTDtBQUNFLGNBQUksS0FBS0csYUFBVCxFQUF3QixPQUFPLEtBQUtBLGFBQVo7QUFDeEIsY0FBSUMsSUFBSSxLQUFLVixJQUFMLENBQVVLLEVBQVYsQ0FBYSxjQUFiLEVBQTZCQyxJQUE3QixDQUFrQyxVQUFsQyxDQUFSO0FBQ0EsY0FBSUksRUFBRUMsTUFBRixJQUFZLENBQWhCLEVBQ0VELElBQUksS0FBS1YsSUFBTCxDQUFVSyxFQUFWLENBQ0YsNEJBQTRCLEtBQUtKLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQixZQUFoQixDQUE1QixHQUE0RCxJQUQxRCxDQUFKO0FBR0YsaUJBQVEsS0FBS0csYUFBTCxHQUFxQkMsQ0FBN0I7QUFDRixhQUFLLGVBQUw7QUFDRSxjQUFJLEtBQUtELGFBQVQsRUFBd0IsT0FBTyxLQUFLQSxhQUFaO0FBQ3hCLGNBQUlDLElBQUksS0FBS1YsSUFBTCxDQUFVSyxFQUFWLENBQWEsY0FBYixFQUE2QkMsSUFBN0IsQ0FBa0MsVUFBbEMsQ0FBUjtBQUNBLGNBQUlJLEVBQUVDLE1BQUYsSUFBWSxDQUFoQixFQUNFRCxJQUFJLEtBQUtWLElBQUwsQ0FBVUssRUFBVixDQUNGLDRCQUE0QixLQUFLSixLQUFMLENBQVdLLElBQVgsQ0FBZ0IsWUFBaEIsQ0FBNUIsR0FBNEQsSUFEMUQsQ0FBSjtBQUdGLGlCQUFRLEtBQUtHLGFBQUwsR0FBcUJDLENBQTdCO0FBQ0YsYUFBSyxXQUFMO0FBQ0UsY0FBSSxLQUFLRSxTQUFULEVBQW9CLE9BQU8sS0FBS0EsU0FBWjtBQUNwQixjQUFJRixJQUFJLEtBQUtWLElBQUwsQ0FBVUssRUFBVixDQUFhLGNBQWIsRUFBNkJDLElBQTdCLENBQWtDLFVBQWxDLENBQVI7QUFDQSxjQUFJSSxFQUFFQyxNQUFGLElBQVksQ0FBaEIsRUFDRUQsSUFBSSxLQUFLVixJQUFMLENBQVVLLEVBQVYsQ0FDRiw0QkFBNEIsS0FBS0osS0FBTCxDQUFXSyxJQUFYLENBQWdCLFFBQWhCLENBQTVCLEdBQXdELElBRHRELENBQUo7QUFHRixpQkFBUSxLQUFLTSxTQUFMLEdBQWlCRixDQUF6QjtBQUNGLGFBQUssV0FBTDtBQUNFLGNBQUksS0FBS0UsU0FBVCxFQUFvQixPQUFPLEtBQUtBLFNBQVo7QUFDcEIsY0FBSUYsSUFBSSxLQUFLVixJQUFMLENBQVVLLEVBQVYsQ0FBYSxjQUFiLEVBQTZCQyxJQUE3QixDQUFrQyxVQUFsQyxDQUFSO0FBQ0EsY0FBSUksRUFBRUMsTUFBRixJQUFZLENBQWhCLEVBQ0VELElBQUksS0FBS1YsSUFBTCxDQUFVSyxFQUFWLENBQ0YsNEJBQTRCLEtBQUtKLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQixRQUFoQixDQUE1QixHQUF3RCxJQUR0RCxDQUFKO0FBR0YsaUJBQVEsS0FBS00sU0FBTCxHQUFpQkYsQ0FBekI7QUFoREo7QUFrREQ7Ozs7OztrQkF4RGtCWCxJIiwiZmlsZSI6ImZvbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBmb250IHtcbiAgY29uc3RydWN0b3Iod1htbCwgeExhbmcpIHtcbiAgICB0aGlzLndYbWwgPSB3WG1sO1xuICAgIHRoaXMueExhbmcgPSB4TGFuZztcbiAgfVxuICBnZXQobmFtZSkge1xuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgY2FzZSAnbWlub3JIQW5zaSc6XG4gICAgICBjYXNlICdtaW5vckFzY2lpJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB0aGlzLm1pbm9ySEFuc2kgfHxcbiAgICAgICAgICAodGhpcy5taW5vckhBbnNpID0gdGhpcy5taW5vckFzY2lpID0gdGhpcy53WG1sXG4gICAgICAgICAgICAuJDEoJ21pbm9yRm9udD5sYXRpbicpXG4gICAgICAgICAgICAuYXR0cigndHlwZWZhY2UnKSlcbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ21ham9ySEFuc2knOlxuICAgICAgY2FzZSAnbWFqb3JBc2NpaSc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgdGhpcy5tYWpvckhBbnNpIHx8XG4gICAgICAgICAgKHRoaXMubWFqb3JIQW5zaSA9IHRoaXMubWFqb3JBc2NpaSA9IHRoaXMud1htbFxuICAgICAgICAgICAgLiQxKCdtYWpvckZvbnQ+bGF0aW4nKVxuICAgICAgICAgICAgLmF0dHIoJ3R5cGVmYWNlJykpXG4gICAgICAgICk7XG4gICAgICBjYXNlICdtYWpvckVhc3RBc2lhJzpcbiAgICAgICAgaWYgKHRoaXMubWFqb3JFYXN0QXNpYSkgcmV0dXJuIHRoaXMubWFqb3JFYXN0QXNpYTtcbiAgICAgICAgdmFyIHQgPSB0aGlzLndYbWwuJDEoJ21ham9yRm9udD5lYScpLmF0dHIoJ3R5cGVmYWNlJyk7XG4gICAgICAgIGlmICh0Lmxlbmd0aCA9PSAwKVxuICAgICAgICAgIHQgPSB0aGlzLndYbWwuJDEoXG4gICAgICAgICAgICAnbWFqb3JGb250PmZvbnRbc2NyaXB0PVwiJyArIHRoaXMueExhbmcuYXR0cigndzplYXN0QXNpYScpICsgJ1wiXSdcbiAgICAgICAgICApO1xuICAgICAgICByZXR1cm4gKHRoaXMubWFqb3JFYXN0QXNpYSA9IHQpO1xuICAgICAgY2FzZSAnbWFqb3JFYXN0QXNpYSc6XG4gICAgICAgIGlmICh0aGlzLm1ham9yRWFzdEFzaWEpIHJldHVybiB0aGlzLm1ham9yRWFzdEFzaWE7XG4gICAgICAgIHZhciB0ID0gdGhpcy53WG1sLiQxKCdtaW5vckZvbnQ+ZWEnKS5hdHRyKCd0eXBlZmFjZScpO1xuICAgICAgICBpZiAodC5sZW5ndGggPT0gMClcbiAgICAgICAgICB0ID0gdGhpcy53WG1sLiQxKFxuICAgICAgICAgICAgJ21pbm9yRm9udD5mb250W3NjcmlwdD1cIicgKyB0aGlzLnhMYW5nLmF0dHIoJ3c6ZWFzdEFzaWEnKSArICdcIl0nXG4gICAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuICh0aGlzLm1ham9yRWFzdEFzaWEgPSB0KTtcbiAgICAgIGNhc2UgJ21ham9yQmlkaSc6XG4gICAgICAgIGlmICh0aGlzLm1ham9yQmlkaSkgcmV0dXJuIHRoaXMubWFqb3JCaWRpO1xuICAgICAgICB2YXIgdCA9IHRoaXMud1htbC4kMSgnbWFqb3JGb250PmNzJykuYXR0cigndHlwZWZhY2UnKTtcbiAgICAgICAgaWYgKHQubGVuZ3RoID09IDApXG4gICAgICAgICAgdCA9IHRoaXMud1htbC4kMShcbiAgICAgICAgICAgICdtYWpvckZvbnQ+Zm9udFtzY3JpcHQ9XCInICsgdGhpcy54TGFuZy5hdHRyKCd3OmJpZGknKSArICdcIl0nXG4gICAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuICh0aGlzLm1ham9yQmlkaSA9IHQpO1xuICAgICAgY2FzZSAnbWFqb3JCaWRpJzpcbiAgICAgICAgaWYgKHRoaXMubWFqb3JCaWRpKSByZXR1cm4gdGhpcy5tYWpvckJpZGk7XG4gICAgICAgIHZhciB0ID0gdGhpcy53WG1sLiQxKCdtaW5vckZvbnQ+Y3MnKS5hdHRyKCd0eXBlZmFjZScpO1xuICAgICAgICBpZiAodC5sZW5ndGggPT0gMClcbiAgICAgICAgICB0ID0gdGhpcy53WG1sLiQxKFxuICAgICAgICAgICAgJ21pbm9yRm9udD5mb250W3NjcmlwdD1cIicgKyB0aGlzLnhMYW5nLmF0dHIoJ3c6YmlkaScpICsgJ1wiXSdcbiAgICAgICAgICApO1xuICAgICAgICByZXR1cm4gKHRoaXMubWFqb3JCaWRpID0gdCk7XG4gICAgfVxuICB9XG59XG4iXX0=