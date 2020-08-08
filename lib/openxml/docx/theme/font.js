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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvdGhlbWUvZm9udC5qcyJdLCJuYW1lcyI6WyJmb250Iiwid1htbCIsInhMYW5nIiwibmFtZSIsIm1pbm9ySEFuc2kiLCJtaW5vckFzY2lpIiwiJDEiLCJhdHRyIiwibWFqb3JIQW5zaSIsIm1ham9yQXNjaWkiLCJtYWpvckVhc3RBc2lhIiwidCIsImxlbmd0aCIsIm1ham9yQmlkaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkEsSTtBQUNuQixnQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFDdkIsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7d0JBQ0dDLEksRUFBTTtBQUNSLGNBQVFBLElBQVI7QUFDRSxhQUFLLFlBQUw7QUFDQSxhQUFLLFlBQUw7QUFDRSxpQkFDRSxLQUFLQyxVQUFMLEtBQ0MsS0FBS0EsVUFBTCxHQUFrQixLQUFLQyxVQUFMLEdBQWtCLEtBQUtKLElBQUwsQ0FDbENLLEVBRGtDLENBQy9CLGlCQUQrQixFQUVsQ0MsSUFGa0MsQ0FFN0IsVUFGNkIsQ0FEckMsQ0FERjtBQU1GLGFBQUssWUFBTDtBQUNBLGFBQUssWUFBTDtBQUNFLGlCQUNFLEtBQUtDLFVBQUwsS0FDQyxLQUFLQSxVQUFMLEdBQWtCLEtBQUtDLFVBQUwsR0FBa0IsS0FBS1IsSUFBTCxDQUNsQ0ssRUFEa0MsQ0FDL0IsaUJBRCtCLEVBRWxDQyxJQUZrQyxDQUU3QixVQUY2QixDQURyQyxDQURGO0FBTUYsYUFBSyxlQUFMO0FBQ0UsY0FBSSxLQUFLRyxhQUFULEVBQXdCLE9BQU8sS0FBS0EsYUFBWjtBQUN4QixjQUFJQyxJQUFJLEtBQUtWLElBQUwsQ0FBVUssRUFBVixDQUFhLGNBQWIsRUFBNkJDLElBQTdCLENBQWtDLFVBQWxDLENBQVI7QUFDQSxjQUFJSSxFQUFFQyxNQUFGLElBQVksQ0FBaEIsRUFDRUQsSUFBSSxLQUFLVixJQUFMLENBQVVLLEVBQVYsQ0FDRiw0QkFBNEIsS0FBS0osS0FBTCxDQUFXSyxJQUFYLENBQWdCLFlBQWhCLENBQTVCLEdBQTRELElBRDFELENBQUo7QUFHRixpQkFBUSxLQUFLRyxhQUFMLEdBQXFCQyxDQUE3QjtBQUNGLGFBQUssZUFBTDtBQUNFLGNBQUksS0FBS0QsYUFBVCxFQUF3QixPQUFPLEtBQUtBLGFBQVo7QUFDeEIsY0FBSUMsSUFBSSxLQUFLVixJQUFMLENBQVVLLEVBQVYsQ0FBYSxjQUFiLEVBQTZCQyxJQUE3QixDQUFrQyxVQUFsQyxDQUFSO0FBQ0EsY0FBSUksRUFBRUMsTUFBRixJQUFZLENBQWhCLEVBQ0VELElBQUksS0FBS1YsSUFBTCxDQUFVSyxFQUFWLENBQ0YsNEJBQTRCLEtBQUtKLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQixZQUFoQixDQUE1QixHQUE0RCxJQUQxRCxDQUFKO0FBR0YsaUJBQVEsS0FBS0csYUFBTCxHQUFxQkMsQ0FBN0I7QUFDRixhQUFLLFdBQUw7QUFDRSxjQUFJLEtBQUtFLFNBQVQsRUFBb0IsT0FBTyxLQUFLQSxTQUFaO0FBQ3BCLGNBQUlGLElBQUksS0FBS1YsSUFBTCxDQUFVSyxFQUFWLENBQWEsY0FBYixFQUE2QkMsSUFBN0IsQ0FBa0MsVUFBbEMsQ0FBUjtBQUNBLGNBQUlJLEVBQUVDLE1BQUYsSUFBWSxDQUFoQixFQUNFRCxJQUFJLEtBQUtWLElBQUwsQ0FBVUssRUFBVixDQUNGLDRCQUE0QixLQUFLSixLQUFMLENBQVdLLElBQVgsQ0FBZ0IsUUFBaEIsQ0FBNUIsR0FBd0QsSUFEdEQsQ0FBSjtBQUdGLGlCQUFRLEtBQUtNLFNBQUwsR0FBaUJGLENBQXpCO0FBQ0YsYUFBSyxXQUFMO0FBQ0UsY0FBSSxLQUFLRSxTQUFULEVBQW9CLE9BQU8sS0FBS0EsU0FBWjtBQUNwQixjQUFJRixJQUFJLEtBQUtWLElBQUwsQ0FBVUssRUFBVixDQUFhLGNBQWIsRUFBNkJDLElBQTdCLENBQWtDLFVBQWxDLENBQVI7QUFDQSxjQUFJSSxFQUFFQyxNQUFGLElBQVksQ0FBaEIsRUFDRUQsSUFBSSxLQUFLVixJQUFMLENBQVVLLEVBQVYsQ0FDRiw0QkFBNEIsS0FBS0osS0FBTCxDQUFXSyxJQUFYLENBQWdCLFFBQWhCLENBQTVCLEdBQXdELElBRHRELENBQUo7QUFHRixpQkFBUSxLQUFLTSxTQUFMLEdBQWlCRixDQUF6QjtBQWhESjtBQWtERDs7Ozs7O2tCQXhEa0JYLEkiLCJmaWxlIjoiZm9udC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIGZvbnQge1xuICBjb25zdHJ1Y3Rvcih3WG1sLCB4TGFuZykge1xuICAgIHRoaXMud1htbCA9IHdYbWw7XG4gICAgdGhpcy54TGFuZyA9IHhMYW5nO1xuICB9XG4gIGdldChuYW1lKSB7XG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlICdtaW5vckhBbnNpJzpcbiAgICAgIGNhc2UgJ21pbm9yQXNjaWknOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHRoaXMubWlub3JIQW5zaSB8fFxuICAgICAgICAgICh0aGlzLm1pbm9ySEFuc2kgPSB0aGlzLm1pbm9yQXNjaWkgPSB0aGlzLndYbWxcbiAgICAgICAgICAgIC4kMSgnbWlub3JGb250PmxhdGluJylcbiAgICAgICAgICAgIC5hdHRyKCd0eXBlZmFjZScpKVxuICAgICAgICApO1xuICAgICAgY2FzZSAnbWFqb3JIQW5zaSc6XG4gICAgICBjYXNlICdtYWpvckFzY2lpJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB0aGlzLm1ham9ySEFuc2kgfHxcbiAgICAgICAgICAodGhpcy5tYWpvckhBbnNpID0gdGhpcy5tYWpvckFzY2lpID0gdGhpcy53WG1sXG4gICAgICAgICAgICAuJDEoJ21ham9yRm9udD5sYXRpbicpXG4gICAgICAgICAgICAuYXR0cigndHlwZWZhY2UnKSlcbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ21ham9yRWFzdEFzaWEnOlxuICAgICAgICBpZiAodGhpcy5tYWpvckVhc3RBc2lhKSByZXR1cm4gdGhpcy5tYWpvckVhc3RBc2lhO1xuICAgICAgICB2YXIgdCA9IHRoaXMud1htbC4kMSgnbWFqb3JGb250PmVhJykuYXR0cigndHlwZWZhY2UnKTtcbiAgICAgICAgaWYgKHQubGVuZ3RoID09IDApXG4gICAgICAgICAgdCA9IHRoaXMud1htbC4kMShcbiAgICAgICAgICAgICdtYWpvckZvbnQ+Zm9udFtzY3JpcHQ9XCInICsgdGhpcy54TGFuZy5hdHRyKCd3OmVhc3RBc2lhJykgKyAnXCJdJ1xuICAgICAgICAgICk7XG4gICAgICAgIHJldHVybiAodGhpcy5tYWpvckVhc3RBc2lhID0gdCk7XG4gICAgICBjYXNlICdtYWpvckVhc3RBc2lhJzpcbiAgICAgICAgaWYgKHRoaXMubWFqb3JFYXN0QXNpYSkgcmV0dXJuIHRoaXMubWFqb3JFYXN0QXNpYTtcbiAgICAgICAgdmFyIHQgPSB0aGlzLndYbWwuJDEoJ21pbm9yRm9udD5lYScpLmF0dHIoJ3R5cGVmYWNlJyk7XG4gICAgICAgIGlmICh0Lmxlbmd0aCA9PSAwKVxuICAgICAgICAgIHQgPSB0aGlzLndYbWwuJDEoXG4gICAgICAgICAgICAnbWlub3JGb250PmZvbnRbc2NyaXB0PVwiJyArIHRoaXMueExhbmcuYXR0cigndzplYXN0QXNpYScpICsgJ1wiXSdcbiAgICAgICAgICApO1xuICAgICAgICByZXR1cm4gKHRoaXMubWFqb3JFYXN0QXNpYSA9IHQpO1xuICAgICAgY2FzZSAnbWFqb3JCaWRpJzpcbiAgICAgICAgaWYgKHRoaXMubWFqb3JCaWRpKSByZXR1cm4gdGhpcy5tYWpvckJpZGk7XG4gICAgICAgIHZhciB0ID0gdGhpcy53WG1sLiQxKCdtYWpvckZvbnQ+Y3MnKS5hdHRyKCd0eXBlZmFjZScpO1xuICAgICAgICBpZiAodC5sZW5ndGggPT0gMClcbiAgICAgICAgICB0ID0gdGhpcy53WG1sLiQxKFxuICAgICAgICAgICAgJ21ham9yRm9udD5mb250W3NjcmlwdD1cIicgKyB0aGlzLnhMYW5nLmF0dHIoJ3c6YmlkaScpICsgJ1wiXSdcbiAgICAgICAgICApO1xuICAgICAgICByZXR1cm4gKHRoaXMubWFqb3JCaWRpID0gdCk7XG4gICAgICBjYXNlICdtYWpvckJpZGknOlxuICAgICAgICBpZiAodGhpcy5tYWpvckJpZGkpIHJldHVybiB0aGlzLm1ham9yQmlkaTtcbiAgICAgICAgdmFyIHQgPSB0aGlzLndYbWwuJDEoJ21pbm9yRm9udD5jcycpLmF0dHIoJ3R5cGVmYWNlJyk7XG4gICAgICAgIGlmICh0Lmxlbmd0aCA9PSAwKVxuICAgICAgICAgIHQgPSB0aGlzLndYbWwuJDEoXG4gICAgICAgICAgICAnbWlub3JGb250PmZvbnRbc2NyaXB0PVwiJyArIHRoaXMueExhbmcuYXR0cigndzpiaWRpJykgKyAnXCJdJ1xuICAgICAgICAgICk7XG4gICAgICAgIHJldHVybiAodGhpcy5tYWpvckJpZGkgPSB0KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==