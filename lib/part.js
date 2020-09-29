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
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJ0LmpzIl0sIm5hbWVzIjpbInBhcnQiLCJuYW1lIiwiZG9jIiwiZG9jdW1lbnRFbGVtZW50IiwicGFydHMiLCIkdG9vbCIsInBhcnNlWE1MIiwiYXNUZXh0IiwicmVscyIsImZvbGRlciIsInJlbE5hbWUiLCJpIiwibGFzdEluZGV4T2YiLCJzdWJzdHJpbmciLCIkIiwiYXNBcnJheSIsImZvckVhY2giLCJhIiwiZ2V0QXR0cmlidXRlIiwidHlwZSIsInNwbGl0IiwicG9wIiwidGFyZ2V0TW9kZSIsInRhcmdldCIsImlkIiwicmVsIiwiZ2V0SW1hZ2VQYXJ0IiwiZ2V0UGFydCIsIm8iLCJnZXRSZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBcUJBLEk7QUFDbkIsZ0JBQVlDLElBQVosRUFBa0JDLEdBQWxCLEVBQXVCO0FBQUE7O0FBQ3JCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLGVBQUwsR0FDRUQsSUFBSUUsS0FBSixDQUFVSCxJQUFWLEtBQ0FJLE1BQU1DLFFBQU4sQ0FBZUosSUFBSUUsS0FBSixDQUFVSCxJQUFWLEVBQWdCTSxNQUFoQixFQUFmLEVBQXlDSixlQUYzQztBQUdBLFNBQUtLLElBQUwsR0FBWSxFQUFaOztBQUVBLFFBQUlDLFNBQVMsRUFBYjtBQUFBLFFBQ0VDLFVBQVUsV0FBV1QsSUFBWCxHQUFrQixPQUQ5QjtBQUFBLFFBRUVVLElBQUlWLEtBQUtXLFdBQUwsQ0FBaUIsR0FBakIsQ0FGTjtBQUdBLFFBQUlELE1BQU0sQ0FBQyxDQUFYLEVBQWM7QUFDWkYsZUFBU1IsS0FBS1ksU0FBTCxDQUFlLENBQWYsRUFBa0JGLENBQWxCLENBQVQ7QUFDQUQsZ0JBQVVELFNBQVMsU0FBVCxHQUFxQlIsS0FBS1ksU0FBTCxDQUFlRixJQUFJLENBQW5CLENBQXJCLEdBQTZDLE9BQXZEO0FBQ0Q7O0FBRUQsUUFBSSxDQUFDVCxJQUFJRSxLQUFKLENBQVVNLE9BQVYsQ0FBTCxFQUF5QjtBQUN6QixTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQTtBQUNBTCxVQUNHQyxRQURILENBQ1lKLElBQUlFLEtBQUosQ0FBVU0sT0FBVixFQUFtQkgsTUFBbkIsRUFEWixFQUVHSixlQUZILENBRW1CVyxDQUZuQixDQUVxQixjQUZyQixFQUdHQyxPQUhILEdBSUdDLE9BSkgsQ0FJVyxVQUFVQyxDQUFWLEVBQWFOLENBQWIsRUFBZ0I7QUFDdkIsV0FBS0gsSUFBTCxDQUFVUyxFQUFFQyxZQUFGLENBQWUsSUFBZixDQUFWLElBQWtDO0FBQ2hDQyxjQUFNRixFQUFFQyxZQUFGLENBQWUsTUFBZixFQUF1QkUsS0FBdkIsQ0FBNkIsR0FBN0IsRUFBa0NDLEdBQWxDLEVBRDBCO0FBRWhDQyxvQkFBWUwsRUFBRUMsWUFBRixDQUFlLFlBQWYsQ0FGb0I7QUFHaENLLGdCQUNFLENBQUNOLEVBQUVDLFlBQUYsQ0FBZSxZQUFmLEtBQWdDLFVBQWhDLEdBQ0dULFNBQ0VBLFNBQVMsR0FEWCxHQUVFLEVBSEwsR0FJRyxFQUpKLElBSVVRLEVBQUVDLFlBQUYsQ0FBZSxRQUFmO0FBUm9CLE9BQWxDO0FBVUQsS0FmSCxFQWVLLElBZkw7QUFnQkQ7Ozs7MkJBQ01NLEUsRUFBSTtBQUNULFVBQUlDLE1BQU0sS0FBS2pCLElBQUwsQ0FBVWdCLEVBQVYsQ0FBVjtBQUNBLFVBQUlDLElBQUlILFVBQUosSUFBa0IsVUFBdEIsRUFBa0MsT0FBT0csSUFBSUYsTUFBWDtBQUNsQyxjQUFRRSxJQUFJTixJQUFaO0FBQ0UsYUFBSyxPQUFMO0FBQ0UsaUJBQU8sS0FBS2pCLEdBQUwsQ0FBU3dCLFlBQVQsQ0FBc0JELElBQUlGLE1BQTFCLENBQVA7QUFDRjtBQUNFLGlCQUFPLEtBQUtyQixHQUFMLENBQVN5QixPQUFULENBQWlCRixJQUFJRixNQUFyQixDQUFQO0FBSko7QUFNRDs7O3VCQUVTSyxDLEVBQUc7QUFDWCxhQUFPQSxLQUFLQSxFQUFFQyxNQUFkO0FBQ0Q7Ozs7OztrQkFsRGtCN0IsSSIsImZpbGUiOiJwYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFydCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRvYykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kb2MgPSBkb2M7XG4gICAgdGhpcy5kb2N1bWVudEVsZW1lbnQgPVxuICAgICAgZG9jLnBhcnRzW25hbWVdICYmXG4gICAgICAkdG9vbC5wYXJzZVhNTChkb2MucGFydHNbbmFtZV0uYXNUZXh0KCkpLmRvY3VtZW50RWxlbWVudDtcbiAgICB0aGlzLnJlbHMgPSB7fTtcblxuICAgIHZhciBmb2xkZXIgPSAnJyxcbiAgICAgIHJlbE5hbWUgPSAnX3JlbHMvJyArIG5hbWUgKyAnLnJlbHMnLFxuICAgICAgaSA9IG5hbWUubGFzdEluZGV4T2YoJy8nKTtcbiAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgIGZvbGRlciA9IG5hbWUuc3Vic3RyaW5nKDAsIGkpO1xuICAgICAgcmVsTmFtZSA9IGZvbGRlciArICcvX3JlbHMvJyArIG5hbWUuc3Vic3RyaW5nKGkgKyAxKSArICcucmVscyc7XG4gICAgfVxuXG4gICAgaWYgKCFkb2MucGFydHNbcmVsTmFtZV0pIHJldHVybjtcbiAgICB0aGlzLnJlbE5hbWUgPSByZWxOYW1lO1xuICAgIC8vY29uc29sZS5sb2coXCJwYXJ0OlwiK25hbWUrXCIscmVsTmFtZTpcIityZWxOYW1lK1wiLGZvbGRlcjpcIitmb2xkZXIrXCIsIHRleHQ6XCIrZG9jLnBhcnRzW3JlbE5hbWVdLmFzVGV4dCgpKVxuICAgICR0b29sXG4gICAgICAucGFyc2VYTUwoZG9jLnBhcnRzW3JlbE5hbWVdLmFzVGV4dCgpKVxuICAgICAgLmRvY3VtZW50RWxlbWVudC4kKCdSZWxhdGlvbnNoaXAnKVxuICAgICAgLmFzQXJyYXkoKVxuICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGEsIGkpIHtcbiAgICAgICAgdGhpcy5yZWxzW2EuZ2V0QXR0cmlidXRlKCdJZCcpXSA9IHtcbiAgICAgICAgICB0eXBlOiBhLmdldEF0dHJpYnV0ZSgnVHlwZScpLnNwbGl0KCcvJykucG9wKCksXG4gICAgICAgICAgdGFyZ2V0TW9kZTogYS5nZXRBdHRyaWJ1dGUoJ1RhcmdldE1vZGUnKSxcbiAgICAgICAgICB0YXJnZXQ6XG4gICAgICAgICAgICAoYS5nZXRBdHRyaWJ1dGUoJ1RhcmdldE1vZGUnKSAhPSAnRXh0ZXJuYWwnXG4gICAgICAgICAgICAgID8gZm9sZGVyXG4gICAgICAgICAgICAgICAgPyBmb2xkZXIgKyAnLydcbiAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgIDogJycpICsgYS5nZXRBdHRyaWJ1dGUoJ1RhcmdldCcpLFxuICAgICAgICB9O1xuICAgICAgfSwgdGhpcyk7XG4gIH1cbiAgZ2V0UmVsKGlkKSB7XG4gICAgdmFyIHJlbCA9IHRoaXMucmVsc1tpZF07XG4gICAgaWYgKHJlbC50YXJnZXRNb2RlID09ICdFeHRlcm5hbCcpIHJldHVybiByZWwudGFyZ2V0O1xuICAgIHN3aXRjaCAocmVsLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2ltYWdlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9jLmdldEltYWdlUGFydChyZWwudGFyZ2V0KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLmRvYy5nZXRQYXJ0KHJlbC50YXJnZXQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBpcyhvKSB7XG4gICAgcmV0dXJuIG8gJiYgby5nZXRSZWw7XG4gIH1cbn1cbiJdfQ==