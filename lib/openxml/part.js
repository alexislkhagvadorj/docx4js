'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var part = function () {
  function part(name, doc) {
    _classCallCheck(this, part);

    this.name = name;
    this.doc = doc;
    this.documentElement = doc.parts[name] && $tool.parseXML(doc.parts[name].asText()).documentElement;
    this.rels = {};

    var folder = '',
        relName = '_rels/' + name + '.rels',
        i = name.lastIndexOf('/');
    if (i !== -1) {
      folder = name.substring(0, i);
      relName = folder + '/_rels/' + name.substring(i + 1) + '.rels';
    }

    if (!doc.parts[relName]) return;
    this.relName = relName;
    //console.log("part:"+name+",relName:"+relName+",folder:"+folder+", text:"+doc.parts[relName].asText())
    $tool.parseXML(doc.parts[relName].asText()).documentElement.$('Relationship').asArray().forEach(function (a, i) {
      this.rels[a.getAttribute('Id')] = {
        type: a.getAttribute('Type').split('/').pop(),
        targetMode: a.getAttribute('TargetMode'),
        target: (a.getAttribute('TargetMode') != 'External' ? folder ? folder + '/' : '' : '') + a.getAttribute('Target')
      };
    }, this);
  }

  _createClass(part, [{
    key: 'getRel',
    value: function getRel(id) {
      var rel = this.rels[id];
      if (rel.targetMode == 'External') return rel.target;
      switch (rel.type) {
        case 'image':
          return this.doc.getImagePart(rel.target);
        default:
          return this.doc.getPart(rel.target);
      }
    }
  }], [{
    key: 'is',
    value: function is(o) {
      return o && o.getRel;
    }
  }]);

  return part;
}();

exports.default = part;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVueG1sL3BhcnQuanMiXSwibmFtZXMiOlsicGFydCIsIm5hbWUiLCJkb2MiLCJkb2N1bWVudEVsZW1lbnQiLCJwYXJ0cyIsIiR0b29sIiwicGFyc2VYTUwiLCJhc1RleHQiLCJyZWxzIiwiZm9sZGVyIiwicmVsTmFtZSIsImkiLCJsYXN0SW5kZXhPZiIsInN1YnN0cmluZyIsIiQiLCJhc0FycmF5IiwiZm9yRWFjaCIsImEiLCJnZXRBdHRyaWJ1dGUiLCJ0eXBlIiwic3BsaXQiLCJwb3AiLCJ0YXJnZXRNb2RlIiwidGFyZ2V0IiwiaWQiLCJyZWwiLCJnZXRJbWFnZVBhcnQiLCJnZXRQYXJ0IiwibyIsImdldFJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkEsSTtBQUNuQixnQkFBWUMsSUFBWixFQUFrQkMsR0FBbEIsRUFBdUI7QUFBQTs7QUFDckIsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsZUFBTCxHQUNFRCxJQUFJRSxLQUFKLENBQVVILElBQVYsS0FDQUksTUFBTUMsUUFBTixDQUFlSixJQUFJRSxLQUFKLENBQVVILElBQVYsRUFBZ0JNLE1BQWhCLEVBQWYsRUFBeUNKLGVBRjNDO0FBR0EsU0FBS0ssSUFBTCxHQUFZLEVBQVo7O0FBRUEsUUFBSUMsU0FBUyxFQUFiO0FBQUEsUUFDRUMsVUFBVSxXQUFXVCxJQUFYLEdBQWtCLE9BRDlCO0FBQUEsUUFFRVUsSUFBSVYsS0FBS1csV0FBTCxDQUFpQixHQUFqQixDQUZOO0FBR0EsUUFBSUQsTUFBTSxDQUFDLENBQVgsRUFBYztBQUNaRixlQUFTUixLQUFLWSxTQUFMLENBQWUsQ0FBZixFQUFrQkYsQ0FBbEIsQ0FBVDtBQUNBRCxnQkFBVUQsU0FBUyxTQUFULEdBQXFCUixLQUFLWSxTQUFMLENBQWVGLElBQUksQ0FBbkIsQ0FBckIsR0FBNkMsT0FBdkQ7QUFDRDs7QUFFRCxRQUFJLENBQUNULElBQUlFLEtBQUosQ0FBVU0sT0FBVixDQUFMLEVBQXlCO0FBQ3pCLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBO0FBQ0FMLFVBQ0dDLFFBREgsQ0FDWUosSUFBSUUsS0FBSixDQUFVTSxPQUFWLEVBQW1CSCxNQUFuQixFQURaLEVBRUdKLGVBRkgsQ0FFbUJXLENBRm5CLENBRXFCLGNBRnJCLEVBR0dDLE9BSEgsR0FJR0MsT0FKSCxDQUlXLFVBQVVDLENBQVYsRUFBYU4sQ0FBYixFQUFnQjtBQUN2QixXQUFLSCxJQUFMLENBQVVTLEVBQUVDLFlBQUYsQ0FBZSxJQUFmLENBQVYsSUFBa0M7QUFDaENDLGNBQU1GLEVBQUVDLFlBQUYsQ0FBZSxNQUFmLEVBQXVCRSxLQUF2QixDQUE2QixHQUE3QixFQUFrQ0MsR0FBbEMsRUFEMEI7QUFFaENDLG9CQUFZTCxFQUFFQyxZQUFGLENBQWUsWUFBZixDQUZvQjtBQUdoQ0ssZ0JBQ0UsQ0FBQ04sRUFBRUMsWUFBRixDQUFlLFlBQWYsS0FBZ0MsVUFBaEMsR0FDR1QsU0FDRUEsU0FBUyxHQURYLEdBRUUsRUFITCxHQUlHLEVBSkosSUFJVVEsRUFBRUMsWUFBRixDQUFlLFFBQWY7QUFSb0IsT0FBbEM7QUFVRCxLQWZILEVBZUssSUFmTDtBQWdCRDs7OzsyQkFDTU0sRSxFQUFJO0FBQ1QsVUFBSUMsTUFBTSxLQUFLakIsSUFBTCxDQUFVZ0IsRUFBVixDQUFWO0FBQ0EsVUFBSUMsSUFBSUgsVUFBSixJQUFrQixVQUF0QixFQUFrQyxPQUFPRyxJQUFJRixNQUFYO0FBQ2xDLGNBQVFFLElBQUlOLElBQVo7QUFDRSxhQUFLLE9BQUw7QUFDRSxpQkFBTyxLQUFLakIsR0FBTCxDQUFTd0IsWUFBVCxDQUFzQkQsSUFBSUYsTUFBMUIsQ0FBUDtBQUNGO0FBQ0UsaUJBQU8sS0FBS3JCLEdBQUwsQ0FBU3lCLE9BQVQsQ0FBaUJGLElBQUlGLE1BQXJCLENBQVA7QUFKSjtBQU1EOzs7dUJBRVNLLEMsRUFBRztBQUNYLGFBQU9BLEtBQUtBLEVBQUVDLE1BQWQ7QUFDRDs7Ozs7O2tCQWxEa0I3QixJIiwiZmlsZSI6InBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBwYXJ0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgZG9jKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRvYyA9IGRvYztcbiAgICB0aGlzLmRvY3VtZW50RWxlbWVudCA9XG4gICAgICBkb2MucGFydHNbbmFtZV0gJiZcbiAgICAgICR0b29sLnBhcnNlWE1MKGRvYy5wYXJ0c1tuYW1lXS5hc1RleHQoKSkuZG9jdW1lbnRFbGVtZW50O1xuICAgIHRoaXMucmVscyA9IHt9O1xuXG4gICAgdmFyIGZvbGRlciA9ICcnLFxuICAgICAgcmVsTmFtZSA9ICdfcmVscy8nICsgbmFtZSArICcucmVscycsXG4gICAgICBpID0gbmFtZS5sYXN0SW5kZXhPZignLycpO1xuICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgZm9sZGVyID0gbmFtZS5zdWJzdHJpbmcoMCwgaSk7XG4gICAgICByZWxOYW1lID0gZm9sZGVyICsgJy9fcmVscy8nICsgbmFtZS5zdWJzdHJpbmcoaSArIDEpICsgJy5yZWxzJztcbiAgICB9XG5cbiAgICBpZiAoIWRvYy5wYXJ0c1tyZWxOYW1lXSkgcmV0dXJuO1xuICAgIHRoaXMucmVsTmFtZSA9IHJlbE5hbWU7XG4gICAgLy9jb25zb2xlLmxvZyhcInBhcnQ6XCIrbmFtZStcIixyZWxOYW1lOlwiK3JlbE5hbWUrXCIsZm9sZGVyOlwiK2ZvbGRlcitcIiwgdGV4dDpcIitkb2MucGFydHNbcmVsTmFtZV0uYXNUZXh0KCkpXG4gICAgJHRvb2xcbiAgICAgIC5wYXJzZVhNTChkb2MucGFydHNbcmVsTmFtZV0uYXNUZXh0KCkpXG4gICAgICAuZG9jdW1lbnRFbGVtZW50LiQoJ1JlbGF0aW9uc2hpcCcpXG4gICAgICAuYXNBcnJheSgpXG4gICAgICAuZm9yRWFjaChmdW5jdGlvbiAoYSwgaSkge1xuICAgICAgICB0aGlzLnJlbHNbYS5nZXRBdHRyaWJ1dGUoJ0lkJyldID0ge1xuICAgICAgICAgIHR5cGU6IGEuZ2V0QXR0cmlidXRlKCdUeXBlJykuc3BsaXQoJy8nKS5wb3AoKSxcbiAgICAgICAgICB0YXJnZXRNb2RlOiBhLmdldEF0dHJpYnV0ZSgnVGFyZ2V0TW9kZScpLFxuICAgICAgICAgIHRhcmdldDpcbiAgICAgICAgICAgIChhLmdldEF0dHJpYnV0ZSgnVGFyZ2V0TW9kZScpICE9ICdFeHRlcm5hbCdcbiAgICAgICAgICAgICAgPyBmb2xkZXJcbiAgICAgICAgICAgICAgICA/IGZvbGRlciArICcvJ1xuICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgOiAnJykgKyBhLmdldEF0dHJpYnV0ZSgnVGFyZ2V0JyksXG4gICAgICAgIH07XG4gICAgICB9LCB0aGlzKTtcbiAgfVxuICBnZXRSZWwoaWQpIHtcbiAgICB2YXIgcmVsID0gdGhpcy5yZWxzW2lkXTtcbiAgICBpZiAocmVsLnRhcmdldE1vZGUgPT0gJ0V4dGVybmFsJykgcmV0dXJuIHJlbC50YXJnZXQ7XG4gICAgc3dpdGNoIChyZWwudHlwZSkge1xuICAgICAgY2FzZSAnaW1hZ2UnOlxuICAgICAgICByZXR1cm4gdGhpcy5kb2MuZ2V0SW1hZ2VQYXJ0KHJlbC50YXJnZXQpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9jLmdldFBhcnQocmVsLnRhcmdldCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGlzKG8pIHtcbiAgICByZXR1cm4gbyAmJiBvLmdldFJlbDtcbiAgfVxufVxuIl19