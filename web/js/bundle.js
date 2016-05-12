(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _movies = require('./movies');

var _movies2 = _interopRequireDefault(_movies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dotenv = require('dotenv');
dotenv.load();

_reactDom2.default.render(_react2.default.createElement(_header2.default, null), document.getElementById('header'));
_reactDom2.default.render(_react2.default.createElement(_movies2.default, null), document.getElementById('movies-list'));

},{"./header":2,"./movies":3,"dotenv":6,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "header row" },
        _react2.default.createElement(
          "div",
          { className: "col-lg-10" },
          _react2.default.createElement(
            "h1",
            { className: "logo" },
            " gotMovies "
          ),
          _react2.default.createElement(
            "ul",
            { className: "nav" },
            _react2.default.createElement(
              "li",
              { className: "link browse pull-left" },
              "Browse"
            ),
            _react2.default.createElement(
              "li",
              { className: "link kids pull-left" },
              "Kids"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col-lg-2 user text-right" },
          _react2.default.createElement(
            "span",
            { className: "notifications" },
            _react2.default.createElement("i", { className: "fa fa-bell" })
          ),
          _react2.default.createElement(
            "span",
            { className: "user-icon" },
            "SS"
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;

},{"react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movies = function (_React$Component) {
  _inherits(Movies, _React$Component);

  function Movies() {
    _classCallCheck(this, Movies);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Movies).call(this));

    _this.state = { movies: undefined, page: undefined };
    return _this;
  }

  _createClass(Movies, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      $.get("https://api.themoviedb.org/3/movie/popular?page=1&api_key=652deb670ddfdd95399f106f134d4dc6", function (movies) {
        this.setState({
          movies: movies,
          page: 1
        });
      }.bind(this));
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll(event) {
      var pageHeight = event.srcElement.body.scrollHeight;
      var scrollPosition = event.srcElement.body.scrollTop;
      var nextPage = this.state.page + 1;
      var currentMovies = this.state.movies;

      if (scrollPosition / pageHeight > .30) {
        $.get("https://api.themoviedb.org/3/movie/popular?page=" + nextPage + "&api_key=652deb670ddfdd95399f106f134d4dc6", function (movies) {
          movies.results.map(function (movie) {
            currentMovies.results.push(movie);
          });

          this.setState({
            page: nextPage,
            movies: currentMovies
          });
        }.bind(this));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var movies = void 0;

      if (this.state.movies) {
        movies = this.state.movies.results.map(function (movie, index) {
          return _react2.default.createElement(Movie, { key: index, movie: movie });
        });
      } else {
        movies = function movies() {
          return _react2.default.createElement(
            'div',
            { className: 'loading' },
            _react2.default.createElement('span', { 'class': 'glyphicon glyphicon-refresh glyphicon-refresh-animate' })
          );
        };
      }

      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'category fade-in col-lg-10 col-lg-offset-1' },
          _react2.default.createElement(
            'h1',
            { className: 'type' },
            'Popular'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'movies col-lg-10 col-lg-offset-1' },
          movies
        )
      );
    }
  }]);

  return Movies;
}(_react2.default.Component);

exports.default = Movies;

var Movie = function (_React$Component2) {
  _inherits(Movie, _React$Component2);

  function Movie() {
    _classCallCheck(this, Movie);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Movie).apply(this, arguments));
  }

  _createClass(Movie, [{
    key: 'render',
    value: function render() {
      var movie = this.props.movie;

      return _react2.default.createElement(
        'div',
        { className: 'movie fade-in pull-left', key: movie.id },
        _react2.default.createElement('img', { src: "http://image.tmdb.org/t/p/w500/" + movie.poster_path })
      );
    }
  }]);

  return Movie;
}(_react2.default.Component);

},{"react":"react"}],4:[function(require,module,exports){

},{}],5:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],6:[function(require,module,exports){
(function (process){
'use strict'

var fs = require('fs')

module.exports = {
  /*
   * Main entry point into dotenv. Allows configuration before loading .env
   * @param {Object} options - valid options: path ('.env'), encoding ('utf8')
   * @returns {Boolean}
  */
  config: function (options) {
    var path = '.env'
    var encoding = 'utf8'
    var silent = false

    if (options) {
      if (options.silent) {
        silent = options.silent
      }
      if (options.path) {
        path = options.path
      }
      if (options.encoding) {
        encoding = options.encoding
      }
    }

    try {
      // specifying an encoding returns a string instead of a buffer
      var parsedObj = this.parse(fs.readFileSync(path, { encoding: encoding }))

      Object.keys(parsedObj).forEach(function (key) {
        process.env[key] = process.env[key] || parsedObj[key]
      })

      return parsedObj
    } catch (e) {
      if (!silent) {
        console.error(e)
      }
      return false
    }
  },

  /*
   * Parses a string or buffer into an object
   * @param {String|Buffer} src - source to be parsed
   * @returns {Object}
  */
  parse: function (src) {
    var obj = {}

    // convert Buffers before splitting into lines and processing
    src.toString().split('\n').forEach(function (line) {
      // matching "KEY' and 'VAL' in 'KEY=VAL'
      var keyValueArr = line.match(/^\s*([\w\.\-]+)\s*=\s*(.*)?\s*$/)
      // matched?
      if (keyValueArr != null) {
        var key = keyValueArr[1]

        // default undefined or missing values to empty string
        var value = keyValueArr[2] ? keyValueArr[2] : ''

        // expand newlines in quoted values
        var len = value ? value.length : 0
        if (len > 0 && value.charAt(0) === '\"' && value.charAt(len - 1) === '\"') {
          value = value.replace(/\\n/gm, '\n')
        }

        // remove any surrounding quotes and extra spaces
        value = value.replace(/(^['"]|['"]$)/g, '').trim()

        obj[key] = value
      }
    })

    return obj
  }

}

module.exports.load = module.exports.config

}).call(this,require('_process'))

},{"_process":5,"fs":4}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2hlYWRlci5qcyIsImFwcC9tb3ZpZXMuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9kb3RlbnYvbGliL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQSxJQUFJLFNBQVMsUUFBUSxRQUFSLENBQWI7QUFDQSxPQUFPLElBQVA7O0FBRUEsbUJBQVMsTUFBVCxDQUFpQixxREFBakIsRUFBNEIsU0FBUyxjQUFULENBQXdCLFFBQXhCLENBQTVCO0FBQ0EsbUJBQVMsTUFBVCxDQUFpQixxREFBakIsRUFBNEIsU0FBUyxjQUFULENBQXdCLGFBQXhCLENBQTVCOzs7Ozs7Ozs7OztBQ1JBOzs7Ozs7Ozs7Ozs7SUFFcUIsTTs7Ozs7Ozs7Ozs7NkJBQ1Y7QUFDUCxhQUNFO0FBQUE7UUFBQSxFQUFLLFdBQVUsWUFBZjtRQUNFO0FBQUE7VUFBQSxFQUFLLFdBQVUsV0FBZjtVQUNFO0FBQUE7WUFBQSxFQUFJLFdBQVUsTUFBZDtZQUFBO0FBQUEsV0FERjtVQUVFO0FBQUE7WUFBQSxFQUFJLFdBQVUsS0FBZDtZQUNFO0FBQUE7Y0FBQSxFQUFJLFdBQVUsdUJBQWQ7Y0FBQTtBQUFBLGFBREY7WUFFRTtBQUFBO2NBQUEsRUFBSSxXQUFVLHFCQUFkO2NBQUE7QUFBQTtBQUZGO0FBRkYsU0FERjtRQVFFO0FBQUE7VUFBQSxFQUFLLFdBQVUsMEJBQWY7VUFDRTtBQUFBO1lBQUEsRUFBTSxXQUFVLGVBQWhCO1lBQ0UscUNBQUcsV0FBVSxZQUFiO0FBREYsV0FERjtVQUlFO0FBQUE7WUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IE1vdmllcyBmcm9tICcuL21vdmllcyc7XG52YXIgZG90ZW52ID0gcmVxdWlyZSgnZG90ZW52Jyk7XG5kb3RlbnYubG9hZCgpO1xuXG5SZWFjdERPTS5yZW5kZXIoIDxIZWFkZXIvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpICk7XG5SZWFjdERPTS5yZW5kZXIoIDxNb3ZpZXMvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmllcy1saXN0JykgKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyIHJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsb2dvXCI+IGdvdE1vdmllcyA8L2gxPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rIGJyb3dzZSBwdWxsLWxlZnRcIj5Ccm93c2U8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmsga2lkcyBwdWxsLWxlZnRcIj5LaWRzPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMiB1c2VyIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25zXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iZWxsXCI+PC9pPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyLWljb25cIj5TUzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7IG1vdmllczogdW5kZWZpbmVkLCBwYWdlOiB1bmRlZmluZWQgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICAkLmdldChcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvcG9wdWxhcj9wYWdlPTEmYXBpX2tleT02NTJkZWI2NzBkZGZkZDk1Mzk5ZjEwNmYxMzRkNGRjNlwiLCBmdW5jdGlvbiAobW92aWVzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1vdmllczogbW92aWVzLFxuICAgICAgICAgIHBhZ2U6IDFcbiAgICAgICAgfSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xuICB9XG5cbiAgaGFuZGxlU2Nyb2xsKGV2ZW50KSB7XG4gICAgbGV0IHBhZ2VIZWlnaHQgPSBldmVudC5zcmNFbGVtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0O1xuICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9IGV2ZW50LnNyY0VsZW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgbGV0IG5leHRQYWdlID0gdGhpcy5zdGF0ZS5wYWdlICsgMTtcbiAgICBsZXQgY3VycmVudE1vdmllcyA9IHRoaXMuc3RhdGUubW92aWVzO1xuXG4gICAgaWYoIChzY3JvbGxQb3NpdGlvbi9wYWdlSGVpZ2h0KSA+IC4zMCkge1xuICAgICAgJC5nZXQoXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL3BvcHVsYXI/cGFnZT1cIiArIG5leHRQYWdlICsgIFwiJmFwaV9rZXk9NjUyZGViNjcwZGRmZGQ5NTM5OWYxMDZmMTM0ZDRkYzZcIiwgZnVuY3Rpb24gKG1vdmllcykge1xuICAgICAgICBtb3ZpZXMucmVzdWx0cy5tYXAoZnVuY3Rpb24gKG1vdmllKSB7XG4gICAgICAgICAgY3VycmVudE1vdmllcy5yZXN1bHRzLnB1c2gobW92aWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBwYWdlOiBuZXh0UGFnZSxcbiAgICAgICAgICBtb3ZpZXM6IGN1cnJlbnRNb3ZpZXNcbiAgICAgICAgfSlcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBtb3ZpZXM7XG5cbiAgICBpZih0aGlzLnN0YXRlLm1vdmllcykge1xuICAgICAgbW92aWVzID0gdGhpcy5zdGF0ZS5tb3ZpZXMucmVzdWx0cy5tYXAoIGZ1bmN0aW9uIChtb3ZpZSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuICggPE1vdmllIGtleT17aW5kZXh9IG1vdmllPXttb3ZpZX0vPiApXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW92aWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoIGdseXBoaWNvbi1yZWZyZXNoLWFuaW1hdGVcIj48L3NwYW4+PC9kaXY+KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5IGZhZGUtaW4gY29sLWxnLTEwIGNvbC1sZy1vZmZzZXQtMVwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0eXBlXCI+UG9wdWxhcjwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllcyBjb2wtbGctMTAgY29sLWxnLW9mZnNldC0xXCI+XG4gICAgICAgICAge21vdmllc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIE1vdmllIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCBtb3ZpZSA9IHRoaXMucHJvcHMubW92aWU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZSBmYWRlLWluIHB1bGwtbGVmdFwiIGtleT17bW92aWUuaWR9PlxuICAgICAgICA8aW1nIHNyYz17XCJodHRwOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAvXCIgKyBtb3ZpZS5wb3N0ZXJfcGF0aH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8qXG4gICAqIE1haW4gZW50cnkgcG9pbnQgaW50byBkb3RlbnYuIEFsbG93cyBjb25maWd1cmF0aW9uIGJlZm9yZSBsb2FkaW5nIC5lbnZcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSB2YWxpZCBvcHRpb25zOiBwYXRoICgnLmVudicpLCBlbmNvZGluZyAoJ3V0ZjgnKVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgKi9cbiAgY29uZmlnOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciBwYXRoID0gJy5lbnYnXG4gICAgdmFyIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgdmFyIHNpbGVudCA9IGZhbHNlXG5cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMuc2lsZW50KSB7XG4gICAgICAgIHNpbGVudCA9IG9wdGlvbnMuc2lsZW50XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5wYXRoKSB7XG4gICAgICAgIHBhdGggPSBvcHRpb25zLnBhdGhcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLmVuY29kaW5nKSB7XG4gICAgICAgIGVuY29kaW5nID0gb3B0aW9ucy5lbmNvZGluZ1xuICAgICAgfVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAvLyBzcGVjaWZ5aW5nIGFuIGVuY29kaW5nIHJldHVybnMgYSBzdHJpbmcgaW5zdGVhZCBvZiBhIGJ1ZmZlclxuICAgICAgdmFyIHBhcnNlZE9iaiA9IHRoaXMucGFyc2UoZnMucmVhZEZpbGVTeW5jKHBhdGgsIHsgZW5jb2Rpbmc6IGVuY29kaW5nIH0pKVxuXG4gICAgICBPYmplY3Qua2V5cyhwYXJzZWRPYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBwcm9jZXNzLmVudltrZXldID0gcHJvY2Vzcy5lbnZba2V5XSB8fCBwYXJzZWRPYmpba2V5XVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHBhcnNlZE9ialxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfSxcblxuICAvKlxuICAgKiBQYXJzZXMgYSBzdHJpbmcgb3IgYnVmZmVyIGludG8gYW4gb2JqZWN0XG4gICAqIEBwYXJhbSB7U3RyaW5nfEJ1ZmZlcn0gc3JjIC0gc291cmNlIHRvIGJlIHBhcnNlZFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAqL1xuICBwYXJzZTogZnVuY3Rpb24gKHNyYykge1xuICAgIHZhciBvYmogPSB7fVxuXG4gICAgLy8gY29udmVydCBCdWZmZXJzIGJlZm9yZSBzcGxpdHRpbmcgaW50byBsaW5lcyBhbmQgcHJvY2Vzc2luZ1xuICAgIHNyYy50b1N0cmluZygpLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uIChsaW5lKSB7XG4gICAgICAvLyBtYXRjaGluZyBcIktFWScgYW5kICdWQUwnIGluICdLRVk9VkFMJ1xuICAgICAgdmFyIGtleVZhbHVlQXJyID0gbGluZS5tYXRjaCgvXlxccyooW1xcd1xcLlxcLV0rKVxccyo9XFxzKiguKik/XFxzKiQvKVxuICAgICAgLy8gbWF0Y2hlZD9cbiAgICAgIGlmIChrZXlWYWx1ZUFyciAhPSBudWxsKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlWYWx1ZUFyclsxXVxuXG4gICAgICAgIC8vIGRlZmF1bHQgdW5kZWZpbmVkIG9yIG1pc3NpbmcgdmFsdWVzIHRvIGVtcHR5IHN0cmluZ1xuICAgICAgICB2YXIgdmFsdWUgPSBrZXlWYWx1ZUFyclsyXSA/IGtleVZhbHVlQXJyWzJdIDogJydcblxuICAgICAgICAvLyBleHBhbmQgbmV3bGluZXMgaW4gcXVvdGVkIHZhbHVlc1xuICAgICAgICB2YXIgbGVuID0gdmFsdWUgPyB2YWx1ZS5sZW5ndGggOiAwXG4gICAgICAgIGlmIChsZW4gPiAwICYmIHZhbHVlLmNoYXJBdCgwKSA9PT0gJ1xcXCInICYmIHZhbHVlLmNoYXJBdChsZW4gLSAxKSA9PT0gJ1xcXCInKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXFxcbi9nbSwgJ1xcbicpXG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1vdmUgYW55IHN1cnJvdW5kaW5nIHF1b3RlcyBhbmQgZXh0cmEgc3BhY2VzXG4gICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvKF5bJ1wiXXxbJ1wiXSQpL2csICcnKS50cmltKClcblxuICAgICAgICBvYmpba2V5XSA9IHZhbHVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBvYmpcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzLmxvYWQgPSBtb2R1bGUuZXhwb3J0cy5jb25maWdcbiJdfQ==
