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
(function (process){
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
      var apiKey = process.env.API_KEY;
      console.log(apiKey);

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

}).call(this,require('_process'))

},{"_process":5,"react":"react"}],4:[function(require,module,exports){

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2hlYWRlci5qcyIsImFwcC9tb3ZpZXMuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9kb3RlbnYvbGliL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQSxJQUFJLFNBQVMsUUFBUSxRQUFSLENBQWI7QUFDQSxPQUFPLElBQVA7O0FBRUEsbUJBQVMsTUFBVCxDQUFpQixxREFBakIsRUFBNEIsU0FBUyxjQUFULENBQXdCLFFBQXhCLENBQTVCO0FBQ0EsbUJBQVMsTUFBVCxDQUFpQixxREFBakIsRUFBNEIsU0FBUyxjQUFULENBQXdCLGFBQXhCLENBQTVCOzs7Ozs7Ozs7OztBQ1JBOzs7Ozs7Ozs7Ozs7SUFFcUIsTTs7Ozs7Ozs7Ozs7NkJBQ1Y7QUFDUCxhQUNFO0FBQUE7UUFBQSxFQUFLLFdBQVUsWUFBZjtRQUNFO0FBQUE7VUFBQSxFQUFLLFdBQVUsV0FBZjtVQUNFO0FBQUE7WUFBQSxFQUFJLFdBQVUsTUFBZDtZQUFBO0FBQUEsV0FERjtVQUVFO0FBQUE7WUFBQSxFQUFJLFdBQVUsS0FBZDtZQUNFO0FBQUE7Y0FBQSxFQUFJLFdBQVUsdUJBQWQ7Y0FBQTtBQUFBLGFBREY7WUFFRTtBQUFBO2NBQUEsRUFBSSxXQUFVLHFCQUFkO2NBQUE7QUFBQTtBQUZGO0FBRkYsU0FERjtRQVFFO0FBQUE7VUFBQSxFQUFLLFdBQVUsMEJBQWY7VUFDRTtBQUFBO1lBQUEsRUFBTSxXQUFVLGVBQWhCO1lBQ0UscUNBQUcsV0FBVSxZQUFiO0FBREYsV0FERjtVQUlFO0FBQUE7WUFB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O0VBVGlCLGdCQUFNLFM7Ozs7O0FDdkUxQjs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBNb3ZpZXMgZnJvbSAnLi9tb3ZpZXMnO1xudmFyIGRvdGVudiA9IHJlcXVpcmUoJ2RvdGVudicpO1xuZG90ZW52LmxvYWQoKTtcblxuUmVhY3RET00ucmVuZGVyKCA8SGVhZGVyLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKSApO1xuUmVhY3RET00ucmVuZGVyKCA8TW92aWVzLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3ZpZXMtbGlzdCcpICk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciByb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTBcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibG9nb1wiPiBnb3RNb3ZpZXMgPC9oMT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGluayBicm93c2UgcHVsbC1sZWZ0XCI+QnJvd3NlPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rIGtpZHMgcHVsbC1sZWZ0XCI+S2lkczwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgdXNlciB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uc1wiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmVsbFwiPjwvaT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlci1pY29uXCI+U1M8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aWVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0geyBtb3ZpZXM6IHVuZGVmaW5lZCwgcGFnZTogdW5kZWZpbmVkIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGxldCBhcGlLZXkgPSBwcm9jZXNzLmVudi5BUElfS0VZO1xuICAgIGNvbnNvbGUubG9nKGFwaUtleSk7XG5cbiAgICAkLmdldChcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvcG9wdWxhcj9wYWdlPTEmYXBpX2tleT02NTJkZWI2NzBkZGZkZDk1Mzk5ZjEwNmYxMzRkNGRjNlwiLCBmdW5jdGlvbiAobW92aWVzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1vdmllczogbW92aWVzLFxuICAgICAgICAgIHBhZ2U6IDFcbiAgICAgICAgfSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xuICB9XG5cbiAgaGFuZGxlU2Nyb2xsKGV2ZW50KSB7XG4gICAgbGV0IHBhZ2VIZWlnaHQgPSBldmVudC5zcmNFbGVtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0O1xuICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9IGV2ZW50LnNyY0VsZW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgbGV0IG5leHRQYWdlID0gdGhpcy5zdGF0ZS5wYWdlICsgMTtcbiAgICBsZXQgY3VycmVudE1vdmllcyA9IHRoaXMuc3RhdGUubW92aWVzO1xuXG4gICAgaWYoIChzY3JvbGxQb3NpdGlvbi9wYWdlSGVpZ2h0KSA+IC4zMCkge1xuICAgICAgJC5nZXQoXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL3BvcHVsYXI/cGFnZT1cIiArIG5leHRQYWdlICsgIFwiJmFwaV9rZXk9NjUyZGViNjcwZGRmZGQ5NTM5OWYxMDZmMTM0ZDRkYzZcIiwgZnVuY3Rpb24gKG1vdmllcykge1xuICAgICAgICBtb3ZpZXMucmVzdWx0cy5tYXAoZnVuY3Rpb24gKG1vdmllKSB7XG4gICAgICAgICAgY3VycmVudE1vdmllcy5yZXN1bHRzLnB1c2gobW92aWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBwYWdlOiBuZXh0UGFnZSxcbiAgICAgICAgICBtb3ZpZXM6IGN1cnJlbnRNb3ZpZXNcbiAgICAgICAgfSlcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBtb3ZpZXM7XG5cbiAgICBpZih0aGlzLnN0YXRlLm1vdmllcykge1xuICAgICAgbW92aWVzID0gdGhpcy5zdGF0ZS5tb3ZpZXMucmVzdWx0cy5tYXAoIGZ1bmN0aW9uIChtb3ZpZSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuICggPE1vdmllIGtleT17aW5kZXh9IG1vdmllPXttb3ZpZX0vPiApXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW92aWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoIGdseXBoaWNvbi1yZWZyZXNoLWFuaW1hdGVcIj48L3NwYW4+PC9kaXY+KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5IGZhZGUtaW4gY29sLWxnLTEwIGNvbC1sZy1vZmZzZXQtMVwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0eXBlXCI+UG9wdWxhcjwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllcyBjb2wtbGctMTAgY29sLWxnLW9mZnNldC0xXCI+XG4gICAgICAgICAge21vdmllc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIE1vdmllIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCBtb3ZpZSA9IHRoaXMucHJvcHMubW92aWU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZSBmYWRlLWluIHB1bGwtbGVmdFwiIGtleT17bW92aWUuaWR9PlxuICAgICAgICA8aW1nIHNyYz17XCJodHRwOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAvXCIgKyBtb3ZpZS5wb3N0ZXJfcGF0aH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8qXG4gICAqIE1haW4gZW50cnkgcG9pbnQgaW50byBkb3RlbnYuIEFsbG93cyBjb25maWd1cmF0aW9uIGJlZm9yZSBsb2FkaW5nIC5lbnZcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSB2YWxpZCBvcHRpb25zOiBwYXRoICgnLmVudicpLCBlbmNvZGluZyAoJ3V0ZjgnKVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgKi9cbiAgY29uZmlnOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciBwYXRoID0gJy5lbnYnXG4gICAgdmFyIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgdmFyIHNpbGVudCA9IGZhbHNlXG5cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMuc2lsZW50KSB7XG4gICAgICAgIHNpbGVudCA9IG9wdGlvbnMuc2lsZW50XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5wYXRoKSB7XG4gICAgICAgIHBhdGggPSBvcHRpb25zLnBhdGhcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLmVuY29kaW5nKSB7XG4gICAgICAgIGVuY29kaW5nID0gb3B0aW9ucy5lbmNvZGluZ1xuICAgICAgfVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAvLyBzcGVjaWZ5aW5nIGFuIGVuY29kaW5nIHJldHVybnMgYSBzdHJpbmcgaW5zdGVhZCBvZiBhIGJ1ZmZlclxuICAgICAgdmFyIHBhcnNlZE9iaiA9IHRoaXMucGFyc2UoZnMucmVhZEZpbGVTeW5jKHBhdGgsIHsgZW5jb2Rpbmc6IGVuY29kaW5nIH0pKVxuXG4gICAgICBPYmplY3Qua2V5cyhwYXJzZWRPYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBwcm9jZXNzLmVudltrZXldID0gcHJvY2Vzcy5lbnZba2V5XSB8fCBwYXJzZWRPYmpba2V5XVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHBhcnNlZE9ialxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfSxcblxuICAvKlxuICAgKiBQYXJzZXMgYSBzdHJpbmcgb3IgYnVmZmVyIGludG8gYW4gb2JqZWN0XG4gICAqIEBwYXJhbSB7U3RyaW5nfEJ1ZmZlcn0gc3JjIC0gc291cmNlIHRvIGJlIHBhcnNlZFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAqL1xuICBwYXJzZTogZnVuY3Rpb24gKHNyYykge1xuICAgIHZhciBvYmogPSB7fVxuXG4gICAgLy8gY29udmVydCBCdWZmZXJzIGJlZm9yZSBzcGxpdHRpbmcgaW50byBsaW5lcyBhbmQgcHJvY2Vzc2luZ1xuICAgIHNyYy50b1N0cmluZygpLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uIChsaW5lKSB7XG4gICAgICAvLyBtYXRjaGluZyBcIktFWScgYW5kICdWQUwnIGluICdLRVk9VkFMJ1xuICAgICAgdmFyIGtleVZhbHVlQXJyID0gbGluZS5tYXRjaCgvXlxccyooW1xcd1xcLlxcLV0rKVxccyo9XFxzKiguKik/XFxzKiQvKVxuICAgICAgLy8gbWF0Y2hlZD9cbiAgICAgIGlmIChrZXlWYWx1ZUFyciAhPSBudWxsKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlWYWx1ZUFyclsxXVxuXG4gICAgICAgIC8vIGRlZmF1bHQgdW5kZWZpbmVkIG9yIG1pc3NpbmcgdmFsdWVzIHRvIGVtcHR5IHN0cmluZ1xuICAgICAgICB2YXIgdmFsdWUgPSBrZXlWYWx1ZUFyclsyXSA/IGtleVZhbHVlQXJyWzJdIDogJydcblxuICAgICAgICAvLyBleHBhbmQgbmV3bGluZXMgaW4gcXVvdGVkIHZhbHVlc1xuICAgICAgICB2YXIgbGVuID0gdmFsdWUgPyB2YWx1ZS5sZW5ndGggOiAwXG4gICAgICAgIGlmIChsZW4gPiAwICYmIHZhbHVlLmNoYXJBdCgwKSA9PT0gJ1xcXCInICYmIHZhbHVlLmNoYXJBdChsZW4gLSAxKSA9PT0gJ1xcXCInKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXFxcbi9nbSwgJ1xcbicpXG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1vdmUgYW55IHN1cnJvdW5kaW5nIHF1b3RlcyBhbmQgZXh0cmEgc3BhY2VzXG4gICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvKF5bJ1wiXXxbJ1wiXSQpL2csICcnKS50cmltKClcblxuICAgICAgICBvYmpba2V5XSA9IHZhbHVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBvYmpcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzLmxvYWQgPSBtb2R1bGUuZXhwb3J0cy5jb25maWdcbiJdfQ==
