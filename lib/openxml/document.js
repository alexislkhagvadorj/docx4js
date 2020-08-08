'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _part = require('./part');

var _part2 = _interopRequireDefault(_part);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Document = function (_require) {
  _inherits(Document, _require);

  function Document() {
    _classCallCheck(this, Document);

    var _this = _possibleConstructorReturn(this, (Document.__proto__ || Object.getPrototypeOf(Document)).apply(this, arguments));

    var rels = _this.rels = {};
    $tool.each(new _part2.default('', _this).rels, function (id, rel) {
      rels[rel.type] = rel.target;
    });
    _this.partMain = new _part2.default(_this.rels['officeDocument'], _this);
    return _this;
  }

  _createClass(Document, [{
    key: 'getPart',
    value: function getPart(name) {
      var part = this.parts[name] || (name = this.rels[name]) && this.parts[name];
      if (!part) return null;

      if (_part2.default.is(part)) return part;

      return this.parts[name] = new _part2.default(name, this);
    }
  }, {
    key: 'parse',
    value: function parse() {
      _get(Document.prototype.__proto__ || Object.getPrototypeOf(Document.prototype), 'parse', this).apply(this, arguments);
      this.getPart('core-properties').documentElement.$('keywords,description,title').forEach(function (x) {
        var v = x.textContent.trim();
        v.length && (this[x.localName] = v);
      }, this.props);
      typeof this.props.keywords != 'undefined' && (this.props.keywords = this.props.keywords.split(','));

      this.getPart('extended-properties').documentElement.$('Template').forEach(function (x) {
        var v = x.textContent.trim();
        v.length && (this[x.localName] = v);
      }, this.props);
    }
  }, {
    key: 'vender',
    get: function get() {
      'Microsoft';
    }
  }, {
    key: 'product',
    get: function get() {
      return 'Office 2010';
    }
  }], [{
    key: 'createVisitorFactory',


    /**
     *  To create a factory function that to create a visitor specific to word model types
     *  factory: it could be following type
     *  	* function(wordModel, targetParent) :
     *  			wordModel: identified word model
     *  			targetParent: the result created by visitor of srcModel's parent model
     *  	* object: {'word model type name': Visitor Class}
     *  	* undefined: a default factory just to info type of word model in console
     *  opt: a global option to all visitor instances created by the factory, refered by visitor.options
     */
    value: function createVisitorFactory(_factory, opt) {
      var Any = this.Visitor;
      switch (typeof _factory === 'undefined' ? 'undefined' : _typeof(_factory)) {
        case 'function':
          break;
        case 'object':
          var rawMap = _factory;
          _factory = function factory(srcModel, targetParent) {
            var map = _factory.map;
            if (map['*']) Any = map['*'];
            var Visitor = map[srcModel.type],
                visitor,
                t;
            if (!srcModel.type) ;else if (Visitor) visitor = new Visitor(srcModel, targetParent);else if ((t = srcModel.type.split('.')).length > 1) {
              do {
                t.pop();
                if (Visitor = map[t.join('.')]) {
                  visitor = new Visitor(srcModel, targetParent);
                  break;
                }
              } while (t.length > 1);
            }

            if (!visitor) visitor = new Any(srcModel, targetParent);

            if (!visitor._shouldIgnore()) return visitor;
          };

          _factory.map = rawMap;
          break;
        case 'undefined':
          _factory = function _factory(srcModel, targetParent) {
            return new Any(srcModel, targetParent);
          };
          break;
        default:
          throw 'unsupported factory';
      }

      if (opt) {
        var _raw = _factory;
        _factory = function _factory() {
          var converter = _raw.apply(null, arguments);
          converter && (converter.options = opt);
          return converter;
        };
        if (typeof _raw.map != 'undefined') _factory.map = _raw.map;
      }

      _factory.with = function (targetParent) {
        function paramizedFactory(srcModel) {
          return _factory(srcModel, targetParent);
        }
        paramizedFactory.with = _factory.with;
        return paramizedFactory;
      };

      return _factory;
    }
  }, {
    key: 'Visitor',
    get: function get() {
      return Visitor;
    }
  }]);

  return Document;
}(require('../document'));

/**
 *  A visitor to visit a type of word model
 *  srcModel: identified word model
 *  targetParent: the result created by visitor of srcModel's parent model
 */


exports.default = Document;

var Visitor = function () {
  function Visitor(srcModel, targetParent) {
    _classCallCheck(this, Visitor);

    this.srcModel = srcModel;
    this.parent = targetParent;
  }

  _createClass(Visitor, [{
    key: 'visit',
    value: function visit() {
      console.info(this.srcModel.type);
    }
  }, {
    key: '_shouldIgnore',
    value: function _shouldIgnore() {
      return false;
    }
  }]);

  return Visitor;
}();

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVueG1sL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIkRvY3VtZW50IiwiYXJndW1lbnRzIiwicmVscyIsIiR0b29sIiwiZWFjaCIsIlBhcnQiLCJpZCIsInJlbCIsInR5cGUiLCJ0YXJnZXQiLCJwYXJ0TWFpbiIsIm5hbWUiLCJwYXJ0IiwicGFydHMiLCJpcyIsImdldFBhcnQiLCJkb2N1bWVudEVsZW1lbnQiLCIkIiwiZm9yRWFjaCIsIngiLCJ2IiwidGV4dENvbnRlbnQiLCJ0cmltIiwibGVuZ3RoIiwibG9jYWxOYW1lIiwicHJvcHMiLCJrZXl3b3JkcyIsInNwbGl0IiwiZmFjdG9yeSIsIm9wdCIsIkFueSIsIlZpc2l0b3IiLCJyYXdNYXAiLCJzcmNNb2RlbCIsInRhcmdldFBhcmVudCIsIm1hcCIsInZpc2l0b3IiLCJ0IiwicG9wIiwiam9pbiIsIl9zaG91bGRJZ25vcmUiLCJfcmF3IiwiY29udmVydGVyIiwiYXBwbHkiLCJvcHRpb25zIiwid2l0aCIsInBhcmFtaXplZEZhY3RvcnkiLCJyZXF1aXJlIiwicGFyZW50IiwiY29uc29sZSIsImluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQUNuQixzQkFBYztBQUFBOztBQUFBLHFIQUNIQyxTQURHOztBQUVaLFFBQUlDLE9BQVEsTUFBS0EsSUFBTCxHQUFZLEVBQXhCO0FBQ0FDLFVBQU1DLElBQU4sQ0FBVyxJQUFJQyxjQUFKLENBQVMsRUFBVCxTQUFtQkgsSUFBOUIsRUFBb0MsVUFBVUksRUFBVixFQUFjQyxHQUFkLEVBQW1CO0FBQ3JETCxXQUFLSyxJQUFJQyxJQUFULElBQWlCRCxJQUFJRSxNQUFyQjtBQUNELEtBRkQ7QUFHQSxVQUFLQyxRQUFMLEdBQWdCLElBQUlMLGNBQUosQ0FBUyxNQUFLSCxJQUFMLENBQVUsZ0JBQVYsQ0FBVCxRQUFoQjtBQU5ZO0FBT2I7Ozs7NEJBU09TLEksRUFBTTtBQUNaLFVBQUlDLE9BQ0Ys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Q087QUFDTmUsY0FBUUMsSUFBUixDQUFhLEtBQUtqQixRQUFMLENBQWN6QixJQUEzQjtBQUNEOzs7b0NBQ2U7QUFDZCxhQUFPLEtBQVA7QUFDRCIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXJ0IGZyb20gJy4vcGFydCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50IGV4dGVuZHMgcmVxdWlyZSgnLi4vZG9jdW1lbnQnKSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdmFyIHJlbHMgPSAodGhpcy5yZWxzID0ge30pO1xuICAgICR0b29sLmVhY2gobmV3IFBhcnQoJycsIHRoaXMpLnJlbHMsIGZ1bmN0aW9uIChpZCwgcmVsKSB7XG4gICAgICByZWxzW3JlbC50eXBlXSA9IHJlbC50YXJnZXQ7XG4gICAgfSk7XG4gICAgdGhpcy5wYXJ0TWFpbiA9IG5ldyBQYXJ0KHRoaXMucmVsc1snb2ZmaWNlRG9jdW1lbnQnXSwgdGhpcyk7XG4gIH1cbiAgZ2V0IHZlbmRlcigpIHtcbiAgICAnTWljcm9zb2Z0JztcbiAgfVxuXG4gIGdldCBwcm9kdWN0KCkge1xuICAgIHJldHVybiAnT2ZmaWNlIDIwMTAnO1xuICB9XG5cbiAgZ2V0UGFydChuYW1lKSB7XG4gICAgdmFyIHBhcnQgPVxuICAgICAgdGhpcy5wYXJ0c1tuYW1lXSB8fCAoKG5hbWUgPSB0aGlzLnJlbHNbbmFtZV0pICYmIHRoaXMucGFydHNbbmFtZV0pO1xuICAgIGlmICghcGFydCkgcmV0dXJuIG51bGw7XG5cbiAgICBpZiAoUGFydC5pcyhwYXJ0KSkgcmV0dXJuIHBhcnQ7XG5cbiAgICByZXR1cm4gKHRoaXMucGFydHNbbmFtZV0gPSBuZXcgUGFydChuYW1lLCB0aGlzKSk7XG4gIH1cbiAgcGFyc2UoKSB7XG4gICAgc3VwZXIucGFyc2UoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLmdldFBhcnQoJ2NvcmUtcHJvcGVydGllcycpXG4gICAgICAuZG9jdW1lbnRFbGVtZW50LiQoJ2tleXdvcmRzLGRlc2NyaXB0aW9uLHRpdGxlJylcbiAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHZhciB2ID0geC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgIHYubGVuZ3RoICYmICh0aGlzW3gubG9jYWxOYW1lXSA9IHYpO1xuICAgICAgfSwgdGhpcy5wcm9wcyk7XG4gICAgdHlwZW9mIHRoaXMucHJvcHMua2V5d29yZHMgIT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICh0aGlzLnByb3BzLmtleXdvcmRzID0gdGhpcy5wcm9wcy5rZXl3b3Jkcy5zcGxpdCgnLCcpKTtcblxuICAgIHRoaXMuZ2V0UGFydCgnZXh0ZW5kZWQtcHJvcGVydGllcycpXG4gICAgICAuZG9jdW1lbnRFbGVtZW50LiQoJ1RlbXBsYXRlJylcbiAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHZhciB2ID0geC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgIHYubGVuZ3RoICYmICh0aGlzW3gubG9jYWxOYW1lXSA9IHYpO1xuICAgICAgfSwgdGhpcy5wcm9wcyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IFZpc2l0b3IoKSB7XG4gICAgcmV0dXJuIFZpc2l0b3I7XG4gIH1cblxuICAvKipcbiAgICogIFRvIGNyZWF0ZSBhIGZhY3RvcnkgZnVuY3Rpb24gdGhhdCB0byBjcmVhdGUgYSB2aXNpdG9yIHNwZWNpZmljIHRvIHdvcmQgbW9kZWwgdHlwZXNcbiAgICogIGZhY3Rvcnk6IGl0IGNvdWxkIGJlIGZvbGxvd2luZyB0eXBlXG4gICAqICBcdCogZnVuY3Rpb24od29yZE1vZGVsLCB0YXJnZXRQYXJlbnQpIDpcbiAgICogIFx0XHRcdHdvcmRNb2RlbDogaWRlbnRpZmllZCB3b3JkIG1vZGVsXG4gICAqICBcdFx0XHR0YXJnZXRQYXJlbnQ6IHRoZSByZXN1bHQgY3JlYXRlZCBieSB2aXNpdG9yIG9mIHNyY01vZGVsJ3MgcGFyZW50IG1vZGVsXG4gICAqICBcdCogb2JqZWN0OiB7J3dvcmQgbW9kZWwgdHlwZSBuYW1lJzogVmlzaXRvciBDbGFzc31cbiAgICogIFx0KiB1bmRlZmluZWQ6IGEgZGVmYXVsdCBmYWN0b3J5IGp1c3QgdG8gaW5mbyB0eXBlIG9mIHdvcmQgbW9kZWwgaW4gY29uc29sZVxuICAgKiAgb3B0OiBhIGdsb2JhbCBvcHRpb24gdG8gYWxsIHZpc2l0b3IgaW5zdGFuY2VzIGNyZWF0ZWQgYnkgdGhlIGZhY3RvcnksIHJlZmVyZWQgYnkgdmlzaXRvci5vcHRpb25zXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlVmlzaXRvckZhY3RvcnkoZmFjdG9yeSwgb3B0KSB7XG4gICAgdmFyIEFueSA9IHRoaXMuVmlzaXRvcjtcbiAgICBzd2l0Y2ggKHR5cGVvZiBmYWN0b3J5KSB7XG4gICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgdmFyIHJhd01hcCA9IGZhY3Rvcnk7XG4gICAgICAgIGZhY3RvcnkgPSBmdW5jdGlvbiAoc3JjTW9kZWwsIHRhcmdldFBhcmVudCkge1xuICAgICAgICAgIHZhciBtYXAgPSBmYWN0b3J5Lm1hcDtcbiAgICAgICAgICBpZiAobWFwWycqJ10pIEFueSA9IG1hcFsnKiddO1xuICAgICAgICAgIHZhciBWaXNpdG9yID0gbWFwW3NyY01vZGVsLnR5cGVdLFxuICAgICAgICAgICAgdmlzaXRvcixcbiAgICAgICAgICAgIHQ7XG4gICAgICAgICAgaWYgKCFzcmNNb2RlbC50eXBlKTtcbiAgICAgICAgICBlbHNlIGlmIChWaXNpdG9yKSB2aXNpdG9yID0gbmV3IFZpc2l0b3Ioc3JjTW9kZWwsIHRhcmdldFBhcmVudCk7XG4gICAgICAgICAgZWxzZSBpZiAoKHQgPSBzcmNNb2RlbC50eXBlLnNwbGl0KCcuJykpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgdC5wb3AoKTtcbiAgICAgICAgICAgICAgaWYgKChWaXNpdG9yID0gbWFwW3Quam9pbignLicpXSkpIHtcbiAgICAgICAgICAgICAgICB2aXNpdG9yID0gbmV3IFZpc2l0b3Ioc3JjTW9kZWwsIHRhcmdldFBhcmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHQubGVuZ3RoID4gMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCF2aXNpdG9yKSB2aXNpdG9yID0gbmV3IEFueShzcmNNb2RlbCwgdGFyZ2V0UGFyZW50KTtcblxuICAgICAgICAgIGlmICghdmlzaXRvci5fc2hvdWxkSWdub3JlKCkpIHJldHVybiB2aXNpdG9yO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZhY3RvcnkubWFwID0gcmF3TWFwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIGZhY3RvcnkgPSBmdW5jdGlvbiAoc3JjTW9kZWwsIHRhcmdldFBhcmVudCkge1xuICAgICAgICAgIHJldHVybiBuZXcgQW55KHNyY01vZGVsLCB0YXJnZXRQYXJlbnQpO1xuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93ICd1bnN1cHBvcnRlZCBmYWN0b3J5JztcbiAgICB9XG5cbiAgICBpZiAob3B0KSB7XG4gICAgICB2YXIgX3JhdyA9IGZhY3Rvcnk7XG4gICAgICBmYWN0b3J5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29udmVydGVyID0gX3Jhdy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICBjb252ZXJ0ZXIgJiYgKGNvbnZlcnRlci5vcHRpb25zID0gb3B0KTtcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRlcjtcbiAgICAgIH07XG4gICAgICBpZiAodHlwZW9mIF9yYXcubWFwICE9ICd1bmRlZmluZWQnKSBmYWN0b3J5Lm1hcCA9IF9yYXcubWFwO1xuICAgIH1cblxuICAgIGZhY3Rvcnkud2l0aCA9IGZ1bmN0aW9uICh0YXJnZXRQYXJlbnQpIHtcbiAgICAgIGZ1bmN0aW9uIHBhcmFtaXplZEZhY3Rvcnkoc3JjTW9kZWwpIHtcbiAgICAgICAgcmV0dXJuIGZhY3Rvcnkoc3JjTW9kZWwsIHRhcmdldFBhcmVudCk7XG4gICAgICB9XG4gICAgICBwYXJhbWl6ZWRGYWN0b3J5LndpdGggPSBmYWN0b3J5LndpdGg7XG4gICAgICByZXR1cm4gcGFyYW1pemVkRmFjdG9yeTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZhY3Rvcnk7XG4gIH1cbn1cblxuLyoqXG4gKiAgQSB2aXNpdG9yIHRvIHZpc2l0IGEgdHlwZSBvZiB3b3JkIG1vZGVsXG4gKiAgc3JjTW9kZWw6IGlkZW50aWZpZWQgd29yZCBtb2RlbFxuICogIHRhcmdldFBhcmVudDogdGhlIHJlc3VsdCBjcmVhdGVkIGJ5IHZpc2l0b3Igb2Ygc3JjTW9kZWwncyBwYXJlbnQgbW9kZWxcbiAqL1xuY2xhc3MgVmlzaXRvciB7XG4gIGNvbnN0cnVjdG9yKHNyY01vZGVsLCB0YXJnZXRQYXJlbnQpIHtcbiAgICB0aGlzLnNyY01vZGVsID0gc3JjTW9kZWw7XG4gICAgdGhpcy5wYXJlbnQgPSB0YXJnZXRQYXJlbnQ7XG4gIH1cbiAgdmlzaXQoKSB7XG4gICAgY29uc29sZS5pbmZvKHRoaXMuc3JjTW9kZWwudHlwZSk7XG4gIH1cbiAgX3Nob3VsZElnbm9yZSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==