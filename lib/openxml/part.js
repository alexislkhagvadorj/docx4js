"use strict";

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

		var folder = "",
		    relName = "_rels/" + name + ".rels",
		    i = name.lastIndexOf('/');
		if (i !== -1) {
			folder = name.substring(0, i);
			relName = folder + "/_rels/" + name.substring(i + 1) + ".rels";
		}

		if (!doc.parts[relName]) return;
		this.relName = relName;
		//console.log("part:"+name+",relName:"+relName+",folder:"+folder+", text:"+doc.parts[relName].asText())
		$tool.parseXML(doc.parts[relName].asText()).documentElement.$("Relationship").asArray().forEach(function (a, i) {
			this.rels[a.getAttribute('Id')] = {
				type: a.getAttribute('Type').split('/').pop(),
				targetMode: a.getAttribute('TargetMode'),
				target: (a.getAttribute('TargetMode') != "External" ? folder ? folder + "/" : '' : '') + a.getAttribute('Target') };
		}, this);
	}

	_createClass(part, [{
		key: "getRel",
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
		key: "is",
		value: function is(o) {
			return o && o.getRel;
		}
	}]);

	return part;
}();

exports.default = part;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVueG1sL3BhcnQuanMiXSwibmFtZXMiOlsicGFydCIsIm5hbWUiLCJkb2MiLCJkb2N1bWVudEVsZW1lbnQiLCJwYXJ0cyIsIiR0b29sIiwicGFyc2VYTUwiLCJhc1RleHQiLCJyZWxzIiwiZm9sZGVyIiwicmVsTmFtZSIsImkiLCJsYXN0SW5kZXhPZiIsInN1YnN0cmluZyIsIiQiLCJhc0FycmF5IiwiZm9yRWFjaCIsImEiLCJnZXRBdHRyaWJ1dGUiLCJ0eXBlIiwic3BsaXQiLCJwb3AiLCJ0YXJnZXRNb2RlIiwidGFyZ2V0IiwiaWQiLCJyZWwiLCJnZXRJbWFnZVBhcnQiLCJnZXRQYXJ0IiwibyIsImdldFJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkEsSTtBQUNwQixlQUFZQyxJQUFaLEVBQWlCQyxHQUFqQixFQUFxQjtBQUFBOztBQUNwQixPQUFLRCxJQUFMLEdBQVVBLElBQVY7QUFDQSxPQUFLQyxHQUFMLEdBQVNBLEdBQVQ7QUFDQSxPQUFLQyxlQUFMLEdBQXFCRCxJQUFJRSxLQUFKLENBQVVILElBQVYsS0FBbUJJLE1BQU1DLFFBQU4sQ0FBZUosSUFBSUUsS0FBSixDQUFVSCxJQUFWLEVBQWdCTSxNQUFoQixFQUFmLEVBQXlDSixlQUFqRjtBQUNBLE9BQUtLLElBQUwsR0FBVSxFQUFWOztBQUVBLE1BQUlDLFNBQU8sRUFBWDtBQUFBLE1BQ0NDLFVBQVEsV0FBU1QsSUFBVCxHQUFjLE9BRHZCO0FBQUEsTUFFQ1UsSUFBRVYsS0FBS1csV0FBTCxDQUFpQixHQUFqQixDQUZIO0FBR0EsTUFBR0QsTUFBSSxDQUFDLENBQVIsRUFBVTtBQUNURixZQUFPUixLQUFLWSxTQUFMLENBQWUsQ0FBZixFQUFpQkYsQ0FBakIsQ0FBUDtBQUNBRCxhQUFRRCxTQUFPLFNBQVAsR0FBaUJSLEtBQUtZLFNBQUwsQ0FBZUYsSUFBRSxDQUFqQixDQUFqQixHQUFxQyxPQUE3QztBQUNBOztBQUVELE1BQUcsQ0FBQ1QsSUFBSUUsS0FBSixDQUFVTSxPQUFWLENBQUosRUFBd0I7QUFDeEIsT0FBS0EsT0FBTCxHQUFhQSxPQUFiO0FBQ0E7QUFDQUwsUUFBTUMsUUFBTixDQUFlSixJQUFJRSxLQUFKLENBQVVNLE9BQVYsRUFBbUJILE1BQW5CLEVBQWYsRUFDRUosZUFERixDQUVFVyxDQUZGLENBRUksY0FGSixFQUdFQyxPQUhGLEdBSUVDLE9BSkYsQ0FJVSxVQUFTQyxDQUFULEVBQVlOLENBQVosRUFBYztBQUN0QixRQUFLSCxJQUFMLENBQVVTLEVBQUVDLFlBQUYsQ0FBZSxJQUFmLENBQVYsSUFBZ0M7QUFDL0JDLFVBQUtGLEVBQUVDLFlBQUYsQ0FBZSxNQUFmLEVBQXVCRSxLQUF2QixDQUE2QixHQUE3QixFQUFrQ0MsR0FBbEMsRUFEMEI7QUFFL0JDLGdCQUFZTCxFQUFFQyxZQUFGLENBQWUsWUFBZixDQUZtQjtBQUcvQkssWUFBTyxDQUFDTixFQUFFQyxZQUFGLENBQWUsWUFBZixLQUE4QixVQUE5QixHQUE0Q1QsU0FBVUEsU0FBTyxHQUFqQixHQUF3QixFQUFwRSxHQUEwRSxFQUEzRSxJQUErRVEsRUFBRUMsWUFBRixDQUFlLFFBQWYsQ0FIdkQsRUFBaEM7QUFJQSxHQVRGLEVBU0csSUFUSDtBQVVBOzs7O3lCQUNNTSxFLEVBQUc7QUFDVCxPQUFJQyxNQUFJLEtBQUtqQixJQUFMLENBQVVnQixFQUFWLENBQVI7QUFDQSxPQUFHQyxJQUFJSCxVQUFKLElBQWdCLFVBQW5CLEVBQ0MsT0FBT0csSUFBSUYsTUFBWDtBQUNELFdBQU9FLElBQUlOLElBQVg7QUFDQSxTQUFLLE9BQUw7QUFDQyxZQUFPLEtBQUtqQixHQUFMLENBQVN3QixZQUFULENBQXNCRCxJQUFJRixNQUExQixDQUFQO0FBQ0Q7QUFDQyxZQUFPLEtBQUtyQixHQUFMLENBQVN5QixPQUFULENBQWlCRixJQUFJRixNQUFyQixDQUFQO0FBSkQ7QUFNQTs7O3FCQUVTSyxDLEVBQUU7QUFDWCxVQUFPQSxLQUFLQSxFQUFFQyxNQUFkO0FBQ0E7Ozs7OztrQkEzQ21CN0IsSSIsImZpbGUiOiJwYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFydHtcblx0Y29uc3RydWN0b3IobmFtZSxkb2Mpe1xuXHRcdHRoaXMubmFtZT1uYW1lXG5cdFx0dGhpcy5kb2M9ZG9jXG5cdFx0dGhpcy5kb2N1bWVudEVsZW1lbnQ9ZG9jLnBhcnRzW25hbWVdICYmICR0b29sLnBhcnNlWE1MKGRvYy5wYXJ0c1tuYW1lXS5hc1RleHQoKSkuZG9jdW1lbnRFbGVtZW50XG5cdFx0dGhpcy5yZWxzPXt9XG5cblx0XHR2YXIgZm9sZGVyPVwiXCIsXG5cdFx0XHRyZWxOYW1lPVwiX3JlbHMvXCIrbmFtZStcIi5yZWxzXCIsXG5cdFx0XHRpPW5hbWUubGFzdEluZGV4T2YoJy8nKTtcblx0XHRpZihpIT09LTEpe1xuXHRcdFx0Zm9sZGVyPW5hbWUuc3Vic3RyaW5nKDAsaSlcblx0XHRcdHJlbE5hbWU9Zm9sZGVyK1wiL19yZWxzL1wiK25hbWUuc3Vic3RyaW5nKGkrMSkrXCIucmVsc1wiO1xuXHRcdH1cblxuXHRcdGlmKCFkb2MucGFydHNbcmVsTmFtZV0pIHJldHVybjtcblx0XHR0aGlzLnJlbE5hbWU9cmVsTmFtZVxuXHRcdC8vY29uc29sZS5sb2coXCJwYXJ0OlwiK25hbWUrXCIscmVsTmFtZTpcIityZWxOYW1lK1wiLGZvbGRlcjpcIitmb2xkZXIrXCIsIHRleHQ6XCIrZG9jLnBhcnRzW3JlbE5hbWVdLmFzVGV4dCgpKVxuXHRcdCR0b29sLnBhcnNlWE1MKGRvYy5wYXJ0c1tyZWxOYW1lXS5hc1RleHQoKSlcblx0XHRcdC5kb2N1bWVudEVsZW1lbnRcblx0XHRcdC4kKFwiUmVsYXRpb25zaGlwXCIpXG5cdFx0XHQuYXNBcnJheSgpXG5cdFx0XHQuZm9yRWFjaChmdW5jdGlvbihhLCBpKXtcblx0XHRcdFx0dGhpcy5yZWxzW2EuZ2V0QXR0cmlidXRlKCdJZCcpXT17XG5cdFx0XHRcdFx0dHlwZTphLmdldEF0dHJpYnV0ZSgnVHlwZScpLnNwbGl0KCcvJykucG9wKCksXG5cdFx0XHRcdFx0dGFyZ2V0TW9kZTogYS5nZXRBdHRyaWJ1dGUoJ1RhcmdldE1vZGUnKSxcblx0XHRcdFx0XHR0YXJnZXQ6KGEuZ2V0QXR0cmlidXRlKCdUYXJnZXRNb2RlJykhPVwiRXh0ZXJuYWxcIiA/IChmb2xkZXIgPyAoZm9sZGVyK1wiL1wiKSA6ICcnKSA6ICcnKSthLmdldEF0dHJpYnV0ZSgnVGFyZ2V0Jyl9XG5cdFx0XHR9LHRoaXMpXG5cdH1cblx0Z2V0UmVsKGlkKXtcblx0XHR2YXIgcmVsPXRoaXMucmVsc1tpZF1cblx0XHRpZihyZWwudGFyZ2V0TW9kZT09J0V4dGVybmFsJylcblx0XHRcdHJldHVybiByZWwudGFyZ2V0XG5cdFx0c3dpdGNoKHJlbC50eXBlKXtcblx0XHRjYXNlICdpbWFnZSc6XG5cdFx0XHRyZXR1cm4gdGhpcy5kb2MuZ2V0SW1hZ2VQYXJ0KHJlbC50YXJnZXQpXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiB0aGlzLmRvYy5nZXRQYXJ0KHJlbC50YXJnZXQpXG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGlzKG8pe1xuXHRcdHJldHVybiBvICYmIG8uZ2V0UmVsXG5cdH1cbn1cbiJdfQ==