/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(1);

// debugger
let games = APIUtil.getGames("BOS");
let plays = APIUtil.getPlayByPlay("20160427", "OAK", "DET")
console.log(plays.responseJSON);

// "https://api.mysportsfeeds.com/v1.1/pull/mlb/2016-regular/cumulative_player_stats.json?playerstats=AB,H,R,HR,ER"


// game schedule: "https://api.mysportsfeeds.com/v1.1/pull/mlb/2016-regular/full_game_schedule.json?team=OAK"

// play by play: "https://api.mysportsfeeds.com/v1.1/pull/mlb/2016-regular/game_playbyplay.json?gameid=20160427-OAK-DET"


/***/ }),
/* 1 */
/***/ (function(module, exports) {

const APIUtil = {

  getGames: (team) => (
    $.ajax({
      type: "GET",
      url: `https://api.mysportsfeeds.com/v1.1/pull/mlb/2016-regular/full_game_schedule.json?team=${team}`,
      // dataType: 'json',
      async: false,
      headers: {
        "Authorization": "Basic " + btoa("kevinmoore9" + ":" + "SFgiants1")
      },
    })
  ),

  getPlayByPlay: (date, away, home) => (
    $.ajax({
      type: "GET",
      url: `https://api.mysportsfeeds.com/v1.1/pull/mlb/2016-regular/game_playbyplay.json?gameid=${date}-${away}-${home}`,
      // dataType: 'json',
      async: false,
      headers: {
        "Authorization": "Basic " + btoa("kevinmoore9" + ":" + "SFgiants1")
      },
    })
  )
}


module.exports = APIUtil;


/***/ })
/******/ ]);
//# sourceMappingURL=.bundle.js.map