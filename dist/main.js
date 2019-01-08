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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/components/fightStatus/fightStatus.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/fightStatus/fightStatus.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".game__status {\r\n  position: absolute;\r\n  top: 10px;\r\n  width: 950px;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n} \r\n\r\n.game__level {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 150px;\r\n  padding: 10px 0;\r\n  margin: 0 auto;\r\n  background-color: white;\r\n  border: 3px solid gold;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n  border-radius: 30px;\r\n  box-shadow: 0 0 5px 3px #464646;\r\n}\r\n\r\n.player__field {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  width: 48%;\r\n  text-align: center;\r\n}\r\n\r\n.monster__field {\r\n  justify-content: flex-end;\r\n}\r\n\r\n.player__name {\r\n  padding-left: 20px;\r\n  margin: 5px 0;\r\n  text-align: left;\r\n  font-weight: bold;\r\n  color: white;\r\n  text-shadow:  2px 2px 2px #464646;\r\n}\r\n\r\n.monster__name {\r\n    text-align: right;\r\n    padding-right: 20px;\r\n}\r\n\r\n.player__frame {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 120px; \r\n  height: 120px;\r\n  border: 5px solid gold;\r\n  border-radius: 50%;\r\n  background-color: white;\r\n  box-sizing: border-box;\r\n  box-shadow: 0 0 5px 3px #464646; \r\n}\r\n\r\n.player__frame img {\r\n  width: 90px;\r\n  height: 90px;\r\n}\r\n\r\n.player__info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n}\r\n\r\n.player__hp {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 40px;\r\n  padding: 5px;\r\n  background-color: gold;\r\n  border-radius: 20px;\r\n  box-sizing: border-box;\r\n  box-shadow: 0 0 5px 3px #464646;\r\n}\r\n\r\n.player__hp-under {\r\n  position: relative;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  background: white;\r\n  border-radius: 15px;\r\n  line-height: 30px;\r\n}\r\n\r\n.player__hp_bar {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  background: radial-gradient(#ff5b5b, #ff0202);\r\n  border-radius: 15px;\r\n  line-height: 30px;\r\n}\r\n\r\n.player__hp_value {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  color: gold;\r\n  font-weight: bold;\r\n  text-shadow:  0 0 3px #464646;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/magicType/magicType.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/magicType/magicType.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".magic__choose {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  width: 400px;\r\n  height: 150px; \r\n  padding: 20px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  background-color: white;\r\n  border: 5px solid gold;\r\n  border-radius: 20px;\r\n}\r\n\r\n.magic__kinds {\r\n  display: block;\r\n}\r\n\r\n.magic__btn-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n.magic__type-btn {\r\n  display: inline-block;\r\n  width: 45%;\r\n  padding: 15px 0;\r\n  margin-bottom: 0;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  color: white;\r\n  text-decoration: none;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.magic__type_healing{\r\n  background-color: green;\r\n}\r\n\r\n.magic__type_attack{\r\n  background-color: rgb(146, 5, 0);\r\n}\r\n    \r\n.magic__type-btn:hover {\r\n  filter: saturate(2);\r\n}\r\n\r\n.magic__type-btn:focus {\r\n  box-shadow: inset 0px 0px 10px 2px black;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/modalLogin/modalLogin.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/modalLogin/modalLogin.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal__login {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 500px;\r\n  padding: 80px 30px 30px;\r\n  color: #343642;\r\n  background-color: #ffffff;\r\n  border-radius: 25px;\r\n  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);\r\n  border: 10px solid gold; \r\n}\r\n  \r\n.modal__hero {\r\n  position: absolute;\r\n  top: -85px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 170px;\r\n  height: 170px;\r\n  border: 10px solid gold;\r\n  border-radius: 50%;\r\n  background-color: white;\r\n  box-sizing: border-box;\r\n  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.modal__hero-img {\r\n  width: 120px;\r\n  height: 120px;\r\n}\r\n    \r\n.modal__title {\r\n  text-align: center;\r\n  font-size: 22px;\r\n  border-bottom: 3px solid #2f889a;\r\n  user-select: none;\r\n}\r\n \r\n.modal__input {\r\n  width: 80%;\r\n  height: 50px;\r\n  margin-bottom: 30px;\r\n  margin-top: 10px;\r\n  padding-right: 20px;\r\n  padding-left: 40px;\r\n  box-sizing: border-box;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  border: 3px solid #d2d8d8;\r\n  border-radius: 25px;\r\n  outline: none;\r\n}\r\n\r\n.modal__button {\r\n  display: inline-block;\r\n  width: 70%;\r\n  padding: 15px 32px;\r\n  margin-bottom: 0;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  color: white;\r\n  text-decoration: none;\r\n  background-color: green;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n    \r\n.modal__button:hover {\r\n  filter: saturate(2);\r\n}\r\n\r\n.modal__button:active {\r\n  box-shadow: inset 0px 0px 10px 2px black;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/modalNotification/modalNotification.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/modalNotification/modalNotification.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal__notification {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  text-align: center;\r\n  padding: 50px 30px;\r\n  margin: 0 auto;\r\n  background-color: white;\r\n  border-radius: 20px;\r\n  opacity: 0.8;\r\n}\r\n\r\n.modal__message {\r\n  font-size: 50px;\r\n  color: gold;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/navigationLeft/navigationLeft.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/navigationLeft/navigationLeft.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".left-nav {\r\n  position: absolute;\r\n  top: 5px;\r\n  left: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width:400px;\r\n}\r\n\r\n.nav__button {\r\n  display: inline-block;\r\n  width: 50px;\r\n  height: 50px;\r\n  margin-bottom: 10px;\r\n  box-shadow: inset 0 3px 0 0 rgba(255,255,255,0.5), \r\n              0 2px 2px rgba(0, 0, 0, 0.19);\r\n  background-color: lightgray;\r\n  border: none;\r\n  border-bottom: solid 2px #b5b5b5;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\n.nav__button:hover {\r\n  box-shadow: inset 0 3px 0 0 rgba(255,255,255,0.5), \r\n              2px 2px 5px 0 black;\r\n}\r\n\r\n.nav__btn {\r\n \tcolor: gray;\r\n}\r\n\r\n.nav__btn_active {\r\n  color: lightgreen;\r\n}\r\n\r\n.nav__btn:hover {\r\n \tcolor: lightgreen;\r\n}\r\n\r\n.nav__btn:active {\r\n \t box-shadow: inset 0 3px 5px 0 rgba(255, 255, 255, 0.5);\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/scoreTable/scoreTable.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/scoreTable/scoreTable.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".score__table{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 500px;\r\n  padding: 10px;\r\n  color: #343642;\r\n  background-color: #ffffff;\r\n  border-radius: 25px;\r\n  position: absolute;\r\n  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);\r\n  border: 10px solid gold;\r\n}\r\n\r\n.score__results{\r\n  border-collapse: collapse;\r\n  width: 100%; \r\n}\r\n\r\n.score__table td, \r\n.score__table th {\r\n  border: 1px solid #ddd;\r\n  padding: 3px;\r\n  text-align: center;\r\n}\r\n\r\n.score__table tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n.score__table tr:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n.score__table th {\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n  \r\n.score__header {\r\n  font-size: 22px;\r\n  font-weight: bold;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.score__buttons {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 70%;\r\n  margin-top: 20px;\r\n}\r\n\r\n.modal__button {\r\n  display: inline-block;\r\n  width: 45%;\r\n  padding: 10px 20px;\r\n  margin-bottom: 0;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  color: white;\r\n  text-decoration: none;\r\n  background-color: green;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal__button_exit {\r\n  background-color: rgb(194, 44, 7);\r\n}\r\n    \r\n.modal__button:hover {\r\n  filter: saturate(2);\r\n}\r\n\r\n.modal__button:active {\r\n  box-shadow: inset 0px 0px 10px 2px black;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/taskList/taskList.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/taskList/taskList.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tasks {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 10px;\r\n  width: 700px;\r\n  text-align: center;\r\n  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);\r\n  border: 10px solid gold;\r\n  border-radius: 25px;\r\n  background-color: white;\r\n}\r\n\r\n.tasks__back {\r\n  position: absolute;\r\n  top: 5px;\r\n  left: 0;\r\n  width: 30px;\r\n  height: 30px;\r\n  text-align: center;\r\n  line-height: 15px;\r\n  background: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\n.tasks__back i {\r\n  color: gold;\r\n}\r\n\r\n.tasks__back i:hover {\r\n  color: lightgreen;\r\n}\r\n  \r\n.tasks__header {\r\n  margin: 0 0 10px 0;\r\n}\r\n  \r\n.tasks__list {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n  \r\n.task__container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n  \r\n.tasks__item {\r\n  position: relative;\r\n  padding: 5px;\r\n  margin: 5px;\r\n  flex-grow: 1;\r\n  text-align: left;\r\n  border-radius: 5px 20px 5px 5px;\r\n  border: 2px solid gold;\r\n  cursor: pointer;\r\n}\r\n  \r\n.tasks__item:hover {\r\n  border-color: lightgreen;\r\n  transform: scale(1.05);\r\n}\r\n\r\n.tasks__item:hover .task__damage {\r\n  border-color: lightgreen;\r\n}\r\n  \r\n.task__type {\r\n  display: block;\r\n  font-weight: bold;\r\n}\r\n  \r\n.task__name {\r\n  font-size: 12px;\r\n  color: gray;\r\n}\r\n\r\n.task__complexity {\r\n  display: block;\r\n  font-size: 10px;\r\n  color: lightgray;\r\n  font-weight: bold;\r\n}\r\n  \r\n.task__damage {\r\n  position: absolute;\r\n  right: -2px;\r\n  top: -2px;\r\n  display: block;\r\n  height: 40px;\r\n  width: 44px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  line-height: 40px;\r\n  border-radius: 0 20px 0 20px;\r\n  border: 2px solid gold;\r\n}\r\n\r\n.task__damage_attack {\r\n  background: #e57349;\r\n}\r\n\r\n.task__damage_healing {\r\n  background: lightgreen;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/tasks/english/listening/listening.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/tasks/english/listening/listening.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task__modal {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  padding: 10px 20px;\r\n  margin: 0 auto;\r\n  background-color: white;\r\n  border: 5px solid gold;\r\n  border-radius: 20px;\r\n}\r\n  \r\n.english__listening {\r\n  width: 500px;\r\n  height: 200px;\r\n}\r\n  \r\n.english__explanation {\r\n  margin: 0;\r\n}\r\n  \r\n.listening__input {\r\n  display: block;\r\n  width: 120px;\r\n  margin: 20px auto 0;\r\n  border: 1px solid gold;\r\n  border-radius: 3px;\r\n  margin: 20px auto 0;\r\n}\r\n\r\n.listening__button {\r\n  padding: 5px;\r\n  background-color: transparent;\r\n  border: 1px solid gold;\r\n  cursor: pointer;\r\n}\r\n\r\n.listening__button:hover {\r\n  padding: 5px;\r\n  background-color: lightgreen;\r\n  cursor: pointer;\r\n}\r\n  \r\n.answer__btn {\r\n  display: inline-block;\r\n  width: 45%;\r\n  margin: 0 auto;\r\n  padding: 10px 0;\r\n  margin-bottom: 0;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  color: white;\r\n  text-decoration: none;\r\n  background-color: green;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n      \r\n.answer__btn:hover {\r\n  filter: saturate(2);\r\n}\r\n  ", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/tasks/english/mistake/mistake.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/tasks/english/mistake/mistake.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task__modal {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  padding: 10px 20px;\r\n  margin: 0 auto;\r\n  background-color: white;\r\n  border: 5px solid gold;\r\n  border-radius: 20px;\r\n}\r\n  \r\n.english__mistake {\r\n  width: 400px;\r\n  height: 150px;\r\n}\r\n  \r\n.english__explanation {\r\n  margin: 0;\r\n}\r\n  \r\n.mistake__container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.english__letter {\r\n  margin: 10px 10px;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n.english__letter:hover {\r\n  color: gold;\r\n  transform: scale(1.5);\r\n  text-shadow: 2px 2px 2px black;\r\n}\r\n\r\n \r\n  \r\n  \r\n \r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/tasks/english/order/order.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/tasks/english/order/order.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task__modal {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  padding: 10px 20px;\r\n  margin: 0 auto;\r\n  background-color: white;\r\n  border: 5px solid gold;\r\n  border-radius: 20px;\r\n}\r\n\r\n.english__order {\r\n  width: 430px;\r\n  height: 230px;\r\n}\r\n\r\n.english__explanation {\r\n  margin: 0;\r\n}\r\n\r\n.order__container {\r\n  display: flex;\r\n  align-self: center;\r\n  border: 1px solid lightgray;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  width: fit-content;\r\n}\r\n\r\n.order__item {\r\n  padding: 5px;\r\n  margin: 0 5px;\r\n  text-align: center;\r\n  font-size: 18px;\r\n  user-select: none;\r\n  border: 1px solid gold;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n}\r\n\r\n.answer__btn {\r\n  display: inline-block;\r\n  width: 45%;\r\n  margin: 0 auto;\r\n  padding: 10px 0;\r\n  margin-bottom: 0;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  color: white;\r\n  text-decoration: none;\r\n  background-color: green;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n    \r\n.answer__btn:hover {\r\n  filter: saturate(2);\r\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/tasks/english/translation/translation.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/tasks/english/translation/translation.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task__modal{\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  padding: 10px 20px;\r\n  margin: 0 auto;\r\n  background-color: white;\r\n  border: 5px solid gold;\r\n  border-radius: 20px;\r\n}\r\n  \r\n.english__translation {\r\n  width: 400px;\r\n  height: 150px;\r\n}\r\n  \r\n.english__explanation {\r\n  margin: 0;\r\n}\r\n  \r\n.english__container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.english__word {\r\n  display: block;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  margin: 10px 0;\r\n}\r\n  \r\n.translation__input {\r\n  display: block;\r\n  width: 200px;\r\n  margin: 0 15px;\r\n  border: 1px solid gold;\r\n  border-radius: 3px;\r\n  text-align: center;\r\n}\r\n  \r\n.answer__btn {\r\n  display: inline-block;\r\n  width: 45%;\r\n  margin: 0 auto;\r\n  padding: 10px 0;\r\n  margin-bottom: 0;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  color: white;\r\n  text-decoration: none;\r\n  background-color: green;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n      \r\n.answer__btn:hover {\r\n  filter: saturate(2);\r\n}\r\n  ", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/tasks/geography/attractions/attractions.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/tasks/geography/attractions/attractions.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task__modal {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  border-radius: 20px;\r\n  padding: 10px 20px;\r\n  margin: 0 auto;\r\n  background-color: white;\r\n  border: 5px solid gold;\r\n  border-radius: 20px;\r\n}\r\n  \r\n.geography__attractions {\r\n  width: 400px;\r\n  height: 300px;\r\n}\r\n  \r\n.geography__explanation {\r\n  margin: 0;\r\n}\r\n\r\n.attractions__country {\r\n  margin: 15px 0;\r\n  border-bottom: 1px solid gold;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n  \r\n.attractions__container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n\r\n.answer__btn {\r\n  display: inline-block;\r\n  width: 45%;\r\n  margin: 0 auto;\r\n  padding: 10px 0;\r\n  margin-top: 10px;\r\n  margin-bottom: 0;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  color: white;\r\n  text-decoration: none;\r\n  background-color: green;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n      \r\n.answer__btn:hover {\r\n      filter: saturate(2);\r\n}\r\n\r\n.checkbox__container {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 14px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.checkbox__container input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  height: 0;\r\n  width: 0;\r\n}\r\n\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #eee;\r\n}\r\n\r\n.checkbox__container:hover input ~ .checkmark {\r\n  background-color: #ccc;\r\n}\r\n\r\n.checkbox__container input:checked ~ .checkmark {\r\n  background-color: gold;\r\n}\r\n\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.checkbox__container input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n\r\n.checkbox__container .checkmark:after {\r\n  left: 9px;\r\n  top: 5px;\r\n  width: 5px;\r\n  height: 10px;\r\n  border: solid white;\r\n  border-width: 0 3px 3px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  -ms-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/tasks/geography/capitals/capitals.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/tasks/geography/capitals/capitals.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task__modal {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  padding: 10px 20px;\r\n  margin: 0 auto;\r\n  background-color: white;\r\n  border: 5px solid gold;\r\n  border-radius: 20px;\r\n}\r\n  \r\n.geography__capitals {\r\n  width: 400px;\r\n  height: 220px;\r\n}\r\n  \r\n.geography__explanation {\r\n  margin: 0;\r\n}\r\n  \r\n.capitals__container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.capitals__city {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  margin-bottom: 10px;\r\n  border-bottom: 1px solid gold;\r\n}\r\n\r\n.capitals__answers {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr;\r\n  grid-template-columns: 1fr 1fr;\r\n  justify-content: space-between;\r\n}\r\n\r\n.capitals__item {\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  margin: 10px 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.capitals__item:hover {\r\n  transition-duration: 0.5s;\t\r\n  color: gold;\r\n  transform: scale(1.5);\r\n  text-shadow: 2px 2px 2px black;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/tasks/geography/sorting/sorting.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/tasks/geography/sorting/sorting.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task__modal{\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  padding: 10px 20px;\r\n  margin: 0 auto;\r\n  background-color: white;\r\n  border: 5px solid gold;\r\n  border-radius: 20px;\r\n}\r\n\r\n.geography__sorting {\r\n  width: 430px;\r\n  height: 350px;\r\n}\r\n\r\n.geography__explanation {\r\n  margin: 0;\r\n}\r\n\r\n.sorting__container {\r\n  display: flex;\r\n  align-self: center;\r\n  flex-direction: column;\r\n  border: 1px solid lightgray;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  width: fit-content;\r\n}\r\n\r\n.sorting__item {\r\n  padding: 5px;\r\n  font-size: 18px;\r\n  margin: 5px 0;\r\n  cursor: pointer;\r\n  user-select: none;\r\n  border: 1px solid gold;\r\n  border-radius: 3px;\r\n  text-align: center;\r\n}\r\n\r\n.answer__btn {\r\n  display: inline-block;\r\n  width: 45%;\r\n  margin: 0 auto;\r\n  padding: 10px 0;\r\n  margin-bottom: 0;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  color: white;\r\n  text-decoration: none;\r\n  background-color: green;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n    \r\n.answer__btn:hover {\r\n  filter: saturate(2);\r\n}\r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/tasks/geography/statements/statements.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/tasks/geography/statements/statements.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.task__modal {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  padding: 10px 20px;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  background-color: white;\r\n  border: 5px solid gold;\r\n  border-radius: 20px;\r\n}\r\n  \r\n.geography__statements {\r\n  width: 450px;\r\n  height: 270px;\r\n}\r\n  \r\n.geography__explanation {\r\n  margin: 0;\r\n}\r\n  \r\n.statements__container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.statements__sentence {\r\n  margin: 10px 0;\r\n  border-bottom: 1px solid gold;\r\n}\r\n\r\n.statements__answers {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  flex-direction: column;\r\n}\r\n\r\n\r\n.statements__answers p {\r\n  margin: 5px 0;\r\n}\r\n\r\n.answer__btn {\r\n  display: inline-block;\r\n  width: 45%;\r\n  margin: 0 auto;\r\n  padding: 10px 0;\r\n  margin-top: 10px;\r\n  margin-bottom: 0;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  color: white;\r\n  text-decoration: none;\r\n  background-color: green;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n      \r\n.answer__btn:hover {\r\n  filter: saturate(2);\r\n}\r\n\r\n[type=\"radio\"]:checked,\r\n[type=\"radio\"]:not(:checked) {\r\n    position: absolute;\r\n    left: -9999px;\r\n}\r\n\r\n[type=\"radio\"]:checked + label,\r\n[type=\"radio\"]:not(:checked) + label {\r\n    position: relative;\r\n    padding-left: 28px;\r\n    cursor: pointer;\r\n    line-height: 20px;\r\n    display: inline-block;\r\n    color: #666;\r\n}\r\n\r\n[type=\"radio\"]:checked + label:before,\r\n[type=\"radio\"]:not(:checked) + label:before {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 18px;\r\n    height: 18px;\r\n    border: 1px solid gold;\r\n    border-radius: 100%;\r\n    background: #fff;\r\n}\r\n\r\n[type=\"radio\"]:checked + label:after,\r\n[type=\"radio\"]:not(:checked) + label:after {\r\n    content: '';\r\n    width: 12px;\r\n    height: 12px;\r\n    background: gold;\r\n    position: absolute;\r\n    top: 4px;\r\n    left: 4px;\r\n    border-radius: 100%;\r\n    -webkit-transition: all 0.2s ease;\r\n    transition: all 0.2s ease;\r\n}\r\n\r\n[type=\"radio\"]:not(:checked) + label:after {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n}\r\n\r\n[type=\"radio\"]:checked + label:after {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/tasks/maths/comparison/comparison.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/tasks/maths/comparison/comparison.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task__modal {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  padding: 10px 20px;\r\n  margin: 0 auto;\r\n  background-color: white;\r\n  border: 5px solid gold;\r\n  border-radius: 20px;\r\n}\r\n\r\n.maths__comparison {\r\n  width: 400px;\r\n  height: 150px;\r\n}\r\n\r\n.maths__explanation {\r\n  margin: 0;\r\n}\r\n\r\n.maths__container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.maths__input {\r\n  width: 50px;\r\n  margin: 0 15px;\r\n  border: 1px solid gold;\r\n  border-radius: 3px;\r\n  text-align: center;\r\n}\r\n\r\n.answer__btn {\r\n  display: inline-block;\r\n  width: 45%;\r\n  margin: 0 auto;\r\n  padding: 10px 0;\r\n  margin-bottom: 0;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  color: white;\r\n  text-decoration: none;\r\n  background-color: green;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n    \r\n.answer__btn:hover {\r\n  filter: saturate(2);\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/tasks/maths/constructor/constructor.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/tasks/maths/constructor/constructor.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task__modal{\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  border-radius: 20px;\r\n  padding: 10px 20px;\r\n  margin: 0 auto;\r\n  background-color: white;\r\n  border: 5px solid gold;\r\n}\r\n\r\n.maths__constructor {\r\n  width: 400px;\r\n  height: 200px;\r\n}\r\n\r\n.maths__explanation {\r\n  margin: 0;\r\n}\r\n\r\n.constructor__container {\r\n  display: flex;\r\n  align-self: center;\r\n  border: 1px solid lightgray;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  width: fit-content;\r\n}\r\n\r\n.constructor__item {\r\n  padding: 5px;\r\n  font-size: 18px;\r\n  margin: 0 10px;\r\n  cursor: pointer;\r\n  user-select: none;\r\n  border: 1px solid gold;\r\n  border-radius: 3px;\r\n  text-align: center;\r\n}\r\n\r\n.answer__btn {\r\n  display: inline-block;\r\n  width: 45%;\r\n  margin: 0 auto;\r\n  padding: 10px 0;\r\n  margin-bottom: 0;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  color: white;\r\n  text-decoration: none;\r\n  background-color: green;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n    \r\n.answer__btn:hover {\r\n  filter: saturate(2);\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/tasks/maths/equation/equation.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/tasks/maths/equation/equation.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task__modal {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  padding: 10px 20px;\r\n  margin: 0 auto;\r\n  background-color: white;\r\n  border: 5px solid gold;\r\n  border-radius: 20px;\r\n}\r\n  \r\n.maths__equation {\r\n  width: 400px;\r\n  height: 150px;\r\n}\r\n  \r\n.maths__explanation {\r\n  margin: 0;\r\n}\r\n  \r\n.maths__container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.maths__example {\r\n  padding: 0 5px;\r\n}\r\n  \r\n.maths__input {\r\n  width: 50px;\r\n  margin: 0 15px;\r\n  border: 1px solid gold;\r\n  border-radius: 3px;\r\n  text-align: center;\r\n}\r\n  \r\n.answer__btn {\r\n  display: inline-block;\r\n  width: 45%;\r\n  margin: 0 auto;\r\n  padding: 10px 0;\r\n  margin-bottom: 0;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  color: white;\r\n  text-decoration: none;\r\n  background-color: green;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n      \r\n.answer__btn:hover {\r\n  filter: saturate(2);\r\n}\r\n  \r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/tasks/maths/sequence/sequence.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/tasks/maths/sequence/sequence.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task__modal {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  padding: 10px 20px;\r\n  margin: 0 auto;\r\n  background-color: white;\r\n  border: 5px solid gold;\r\n  border-radius: 20px;\r\n}\r\n  \r\n.maths__sequence {\r\n  width: 400px;\r\n  height: 150px;\r\n}\r\n  \r\n.maths__explanation {\r\n  margin: 0;\r\n}\r\n  \r\n.maths__container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.maths__variable {\r\n  padding: 0 5px;\r\n}\r\n  \r\n.maths__input {\r\n  width: 50px;\r\n  margin: 0 15px;\r\n  border: 1px solid gold;\r\n  border-radius: 3px;\r\n  text-align: center;\r\n}\r\n  \r\n.answer__btn {\r\n  display: inline-block;\r\n  width: 45%;\r\n  margin: 0 auto;\r\n  padding: 10px 0;\r\n  margin-bottom: 0;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  color: white;\r\n  text-decoration: none;\r\n  background-color: green;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n      \r\n.answer__btn:hover {\r\n  filter: saturate(2);\r\n}\r\n  \r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/tasks/programming/abbreviations/abbreviations.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/tasks/programming/abbreviations/abbreviations.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task__modal {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  padding: 10px 20px;\r\n  margin: 0 auto;\r\n  background-color: white;\r\n  border: 5px solid gold;\r\n  border-radius: 20px;\r\n}\r\n  \r\n.programming__abbreviations {\r\n  width: 400px;\r\n  height: 300px;\r\n}\r\n  \r\n.abbreviations__explanation {\r\n  margin: 0;\r\n}\r\n  \r\n.abbreviations__container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.abbreviations__word {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  margin-bottom: 10px;\r\n  border-bottom: 1px solid gold;\r\n}\r\n\r\n.abbreviations__answers {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n\r\n.abbreviations__item {\r\n  font-size: 18px;\r\n  margin: 10px 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.abbreviations__item:hover {\r\n  transition-duration: 0.5s;\t\r\n  color: gold;\r\n  transform: scale(1.2);\r\n  text-shadow: 2px 2px 2px black;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/tasks/programming/gaps/gaps.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/tasks/programming/gaps/gaps.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task__modal {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  padding: 10px 20px;\r\n  margin: 0 auto;\r\n  background-color: white;\r\n  border: 5px solid gold;\r\n  border-radius: 20px;\r\n}\r\n  \r\n.programming__gaps {\r\n  width: 500px;\r\n  height: 200px;\r\n}\r\n  \r\n.programming__explanation {\r\n  margin: 0;\r\n}\r\n  \r\n.gaps__container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.gaps__value {\r\n  font-size: 18px;\r\n}\r\n\r\n.gaps__output {\r\n  color: gray;\r\n  margin-left: 10px;\r\n}\r\n  \r\n.gaps__input {\r\n  display: block;\r\n  width: 80px;\r\n  margin: 0 3px;\r\n  border: 1px solid gold;\r\n  border-radius: 3px;\r\n  text-align: center;\r\n}\r\n  \r\n.answer__btn {\r\n  display: inline-block;\r\n  width: 45%;\r\n  margin: 0 auto;\r\n  padding: 10px 0;\r\n  margin-bottom: 0;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  color: white;\r\n  text-decoration: none;\r\n  background-color: green;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n      \r\n.answer__btn:hover {\r\n  filter: saturate(2);\r\n}\r\n  \r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/tasks/programming/output/output.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/tasks/programming/output/output.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task__modal {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  padding: 10px 20px;\r\n  margin: 0 auto;\r\n  background-color: white;\r\n  border: 5px solid gold;\r\n  border-radius: 20px;\r\n}\r\n  \r\n.programming__output {\r\n  width: 400px;\r\n  height: 270px;\r\n}\r\n  \r\n.programming__explanation {\r\n  margin: 0;\r\n}\r\n\r\n.output__question {\r\n  margin: 15px 0;\r\n  border-bottom: 1px solid gold;\r\n  font-size: 18px;\r\n}\r\n  \r\n.output__container{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.output__answers {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr;\r\n  justify-content: space-between;\r\n}\r\n\r\n.programming__output .checkbox__container {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  margin-bottom: 10px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.answer__btn {\r\n  display: inline-block;\r\n  width: 45%;\r\n  margin: 0 auto;\r\n  padding: 10px 0;\r\n  margin-top: 10px;\r\n  margin-bottom: 0;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  color: white;\r\n  text-decoration: none;\r\n  background-color: green;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n      \r\n.answer__btn:hover {\r\n  filter: saturate(2);\r\n}\r\n\r\n.checkbox__container {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 14px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.checkbox__container input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  height: 0;\r\n  width: 0;\r\n}\r\n\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #eee;\r\n}\r\n\r\n.checkbox__container:hover input ~ .checkmark {\r\n  background-color: #ccc;\r\n}\r\n\r\n.checkbox__container input:checked ~ .checkmark {\r\n  background-color: gold;\r\n}\r\n\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.checkbox__container input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n\r\n.checkbox__container .checkmark:after {\r\n  left: 9px;\r\n  top: 5px;\r\n  width: 5px;\r\n  height: 10px;\r\n  border: solid white;\r\n  border-width: 0 3px 3px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  -ms-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/tasks/programming/statements/statements.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/tasks/programming/statements/statements.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task__modal {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  padding: 10px 20px;\r\n  margin: 0 auto;\r\n  background-color: white;\r\n  border: 5px solid gold;\r\n  border-radius: 20px;\r\n}\r\n  \r\n.programming__statements {\r\n  width: 450px;\r\n  height: 270px;\r\n}\r\n  \r\n.programming__explanation {\r\n  margin: 0;\r\n}\r\n  \r\n.programming__container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.statements__sentence {\r\n  margin: 10px 0;\r\n  border-bottom: 1px solid gold;\r\n}\r\n\r\n.statements__answers {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  flex-direction: column;\r\n}\r\n\r\n.statements__answers p {\r\n  margin: 5px 0;\r\n}\r\n\r\n.answer__btn {\r\n  display: inline-block;\r\n  width: 45%;\r\n  margin: 0 auto;\r\n  padding: 10px 0;\r\n  margin-top: 10px;\r\n  margin-bottom: 0;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  color: white;\r\n  text-decoration: none;\r\n  background-color: green;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n      \r\n.answer__btn:hover {\r\n  filter: saturate(2);\r\n}\r\n\r\n[type=\"radio\"]:checked,\r\n[type=\"radio\"]:not(:checked) {\r\n    position: absolute;\r\n    left: -9999px;\r\n}\r\n\r\n[type=\"radio\"]:checked + label,\r\n[type=\"radio\"]:not(:checked) + label {\r\n    position: relative;\r\n    padding-left: 28px;\r\n    cursor: pointer;\r\n    line-height: 20px;\r\n    display: inline-block;\r\n    color: #666;\r\n}\r\n\r\n[type=\"radio\"]:checked + label:before,\r\n[type=\"radio\"]:not(:checked) + label:before {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 18px;\r\n    height: 18px;\r\n    border: 1px solid gold;\r\n    border-radius: 100%;\r\n    background: #fff;\r\n}\r\n\r\n[type=\"radio\"]:checked + label:after,\r\n[type=\"radio\"]:not(:checked) + label:after {\r\n    content: '';\r\n    width: 12px;\r\n    height: 12px;\r\n    background: gold;\r\n    position: absolute;\r\n    top: 4px;\r\n    left: 4px;\r\n    border-radius: 100%;\r\n    -webkit-transition: all 0.2s ease;\r\n    transition: all 0.2s ease;\r\n}\r\n\r\n[type=\"radio\"]:not(:checked) + label:after {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n}\r\n\r\n[type=\"radio\"]:checked + label:after {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/screens/gameField/gameField.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader!./src/screens/gameField/gameField.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".game__container {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-grow: 1;\r\n  height: 100vh;\r\n  min-height: 600px;\r\n  background-size: 100% 100%;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/sortablejs/Sortable.js":
/*!*********************************************!*\
  !*** ./node_modules/sortablejs/Sortable.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */

(function sortableModule(factory) {
	"use strict";

	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	else {}
})(function sortableFactory() {
	"use strict";

	if (typeof window === "undefined" || !window.document) {
		return function sortableError() {
			throw new Error("Sortable.js requires a window with a document");
		};
	}

	var dragEl,
		parentEl,
		ghostEl,
		cloneEl,
		rootEl,
		nextEl,
		lastDownEl,

		scrollEl,
		scrollParentEl,
		scrollCustomFn,

		oldIndex,
		newIndex,

		activeGroup,
		putSortable,

		autoScrolls = [],
		scrolling = false,

		pointerElemChangedInterval,
		lastPointerElemX,
		lastPointerElemY,

		tapEvt,
		touchEvt,

		moved,

		lastTarget,
		lastDirection,
		pastFirstInvertThresh = false,
		isCircumstantialInvert = false,

		forRepaintDummy,
		realDragElRect, // dragEl rect after current animation

		/** @const */
		R_SPACE = /\s+/g,

		expando = 'Sortable' + (new Date).getTime(),

		win = window,
		document = win.document,
		parseInt = win.parseInt,
		setTimeout = win.setTimeout,

		$ = win.jQuery || win.Zepto,
		Polymer = win.Polymer,

		captureMode = {
			capture: false,
			passive: false
		},

		supportDraggable = ('draggable' in document.createElement('div')),
		supportCssPointerEvents = (function (el) {
			// false when IE11
			if (!!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)) {
				return false;
			}
			el = document.createElement('x');
			el.style.cssText = 'pointer-events:auto';
			return el.style.pointerEvents === 'auto';
		})(),

		_silent = false,
		_alignedSilent = false,

		abs = Math.abs,
		min = Math.min,

		savedInputChecked = [],
		touchDragOverListeners = [],

		alwaysFalse = function () { return false; },

		_detectDirection = function(el, options) {
			var elCSS = _css(el),
				elWidth = parseInt(elCSS.width),
				child1 = _getChild(el, 0, options),
				child2 = _getChild(el, 1, options),
				firstChildCSS = child1 && _css(child1),
				secondChildCSS = child2 && _css(child2),
				firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + child1.getBoundingClientRect().width,
				secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + child2.getBoundingClientRect().width
			;
			if (elCSS.display === 'flex') {
				return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse'
				? 'vertical' : 'horizontal';
			}
			return (child1 &&
				(
					firstChildCSS.display === 'block' ||
					firstChildCSS.display === 'grid' ||
					firstChildWidth >= elWidth &&
					elCSS.float === 'none' ||
					child2 &&
					elCSS.float === 'none' &&
					firstChildWidth + secondChildWidth > elWidth
				) ?
				'vertical' : 'horizontal'
			);
		},

		_isInRowColumn = function(x, y, el, axis, options) {
			var targetRect = realDragElRect || dragEl.getBoundingClientRect(),
				targetS1Opp = axis === 'vertical' ? targetRect.left : targetRect.top,
				targetS2Opp = axis === 'vertical' ? targetRect.right : targetRect.bottom,
				mouseOnOppAxis = axis === 'vertical' ? x : y
			;

			return targetS1Opp < mouseOnOppAxis && mouseOnOppAxis < targetS2Opp;
		},

		_getParentAutoScrollElement = function(el, includeSelf) {
			// skip to window
			if (!el || !el.getBoundingClientRect) return win;

			var elem = el;
			var gotSelf = false;
			do {
				// we don't need to get elem css if it isn't even overflowing in the first place (performance)
				if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
					var elemCSS = _css(elem);
					if (
						elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') ||
						elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')
					) {
						if (!elem || !elem.getBoundingClientRect || elem === document.body) return win;

						if (gotSelf || includeSelf) return elem;
						gotSelf = true;
					}
				}
			/* jshint boss:true */
			} while (elem = elem.parentNode);

			return win;
		},

		_autoScroll = _throttle(function (/**Event*/evt, /**Object*/options, /**HTMLElement*/rootEl, /**Boolean*/isFallback) {
			// Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
			if (options.scroll) {
				var _this = rootEl ? rootEl[expando] : window,
					rect,
					css,
					sens = options.scrollSensitivity,
					speed = options.scrollSpeed,

					x = evt.clientX,
					y = evt.clientY,

					winWidth = window.innerWidth,
					winHeight = window.innerHeight,

					vx,
					vy,

					scrollThisInstance = false
				;

				// Detect scrollEl
				if (scrollParentEl !== rootEl) {
					_clearAutoScrolls();

					scrollEl = options.scroll;
					scrollCustomFn = options.scrollFn;

					if (scrollEl === true) {
						scrollEl = _getParentAutoScrollElement(rootEl, true);
						scrollParentEl = scrollEl;
					}
				}


				var layersOut = 0;
				var currentParent = scrollEl;
				do {
					var el;

					if (currentParent && currentParent !== win) {
						el = currentParent;
						css = _css(el);
						rect = currentParent.getBoundingClientRect();
						vx = el.clientWidth < el.scrollWidth && (css.overflowX == 'auto' || css.overflowX == 'scroll') &&
							 ((abs(rect.right - x) <= sens) - (abs(rect.left - x) <= sens));

						vy = el.clientHeight < el.scrollHeight && (css.overflowY == 'auto' || css.overflowY == 'scroll') &&
							 ((abs(rect.bottom - y) <= sens) - (abs(rect.top - y) <= sens));
					} else if (currentParent === win) {
						el = win;
						vx = (winWidth - x <= sens) - (x <= sens);
						vy = (winHeight - y <= sens) - (y <= sens);
					}

					if (!autoScrolls[layersOut]) {
						for (var i = 0; i <= layersOut; i++) {
							if (!autoScrolls[i]) {
								autoScrolls[i] = {};
							}
						}
					}

					if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
						autoScrolls[layersOut].el = el;
						autoScrolls[layersOut].vx = vx;
						autoScrolls[layersOut].vy = vy;

						clearInterval(autoScrolls[layersOut].pid);

						if (el && (vx != 0 || vy != 0)) {
							scrollThisInstance = true;
							/* jshint loopfunc:true */
							autoScrolls[layersOut].pid = setInterval((function () {
								// emulate drag over during autoscroll (fallback), emulating native DnD behaviour
								if (isFallback && this.layer === 0) {
									Sortable.active._emulateDragOver(true);
								}
								var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
								var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

								if ('function' === typeof(scrollCustomFn)) {
									if (scrollCustomFn.call(_this, scrollOffsetX, scrollOffsetY, evt, touchEvt, autoScrolls[this.layer].el) !== 'continue') {
										return;
									}
								}
								if (autoScrolls[this.layer].el === win) {
									win.scrollTo(win.pageXOffset + scrollOffsetX, win.pageYOffset + scrollOffsetY);
								} else {
									autoScrolls[this.layer].el.scrollTop += scrollOffsetY;
									autoScrolls[this.layer].el.scrollLeft += scrollOffsetX;
								}
							}).bind({layer: layersOut}), 24);
						}
					}
					layersOut++;
				} while (options.bubbleScroll && currentParent !== win && (currentParent = _getParentAutoScrollElement(currentParent, false)));
				scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
			}
		}, 30),

		_clearAutoScrolls = function () {
			autoScrolls.forEach(function(autoScroll) {
				clearInterval(autoScroll.pid);
			});
			autoScrolls = [];
		},

		_prepareGroup = function (options) {
			function toFn(value, pull) {
				return function(to, from, dragEl, evt) {
					var ret;

					if (value == null && pull) {
						ret = true; // default pull value: true (backwards compatibility)
					} else if (value == null || value === false) {
						ret = false;
					} else if (pull && value === 'clone') {
						ret = value;
					} else if (typeof value === 'function') {
						ret = value(to, from, dragEl, evt);
					} else {
						var otherGroup = (pull ? to : from).options.group.name;

						ret = (value === true ||
						(typeof value === 'string' && value === otherGroup) ||
						(value.join && value.indexOf(otherGroup) > -1));
					}
					return ret || (to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name);
				};
			}

			var group = {};
			var originalGroup = options.group;

			if (!originalGroup || typeof originalGroup != 'object') {
				originalGroup = {name: originalGroup};
			}

			group.name = originalGroup.name;
			group.checkPull = toFn(originalGroup.pull, true);
			group.checkPut = toFn(originalGroup.put);
			group.revertClone = originalGroup.revertClone;

			options.group = group;
		},

		_checkAlignment = function(evt) {
			if (!dragEl) return;
			dragEl.parentNode[expando] && dragEl.parentNode[expando]._computeIsAligned(evt);
		}
	;


	/**
	 * @class  Sortable
	 * @param  {HTMLElement}  el
	 * @param  {Object}       [options]
	 */
	function Sortable(el, options) {
		if (!(el && el.nodeType && el.nodeType === 1)) {
			throw 'Sortable: `el` must be HTMLElement, and not ' + {}.toString.call(el);
		}

		this.el = el; // root element
		this.options = options = _extend({}, options);


		// Export instance
		el[expando] = this;

		// Default options
		var defaults = {
			group: null,
			sort: true,
			disabled: false,
			store: null,
			handle: null,
			scroll: true,
			scrollSensitivity: 30,
			scrollSpeed: 10,
			bubbleScroll: true,
			draggable: /[uo]l/i.test(el.nodeName) ? 'li' : '>*',

			swapThreshold: 1, // percentage; 0 <= x <= 1
			invertSwap: false, // invert always
			invertedSwapThreshold: null, // will be set to same as swapThreshold if default

			ghostClass: 'sortable-ghost',
			chosenClass: 'sortable-chosen',
			dragClass: 'sortable-drag',
			ignore: 'a, img',
			filter: null,
			preventOnFilter: true,
			animation: 0,
			setData: function (dataTransfer, dragEl) {
				dataTransfer.setData('Text', dragEl.textContent);
			},
			dropBubble: false,
			dragoverBubble: false,
			dataIdAttr: 'data-id',
			delay: 0,
			touchStartThreshold: parseInt(window.devicePixelRatio, 10) || 1,
			forceFallback: false,
			fallbackClass: 'sortable-fallback',
			fallbackOnBody: false,
			fallbackTolerance: 0,
			fallbackOffset: {x: 0, y: 0},
			supportPointer: Sortable.supportPointer !== false && (
				('PointerEvent' in window) ||
				window.navigator && ('msPointerEnabled' in window.navigator) // microsoft
			)
		};


		// Set default options
		for (var name in defaults) {
			!(name in options) && (options[name] = defaults[name]);
		}

		if (!('direction' in options)) {
			options.direction = function() {
				return _detectDirection(el, options);
			};
		}

		_prepareGroup(options);

		options.invertedSwapThreshold == null && (options.invertedSwapThreshold = options.swapThreshold);
		// Bind all private methods
		for (var fn in this) {
			if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
				this[fn] = this[fn].bind(this);
			}
		}

		// Setup drag mode
		this.nativeDraggable = options.forceFallback ? false : supportDraggable;

		// Bind events
		_on(el, 'mousedown', this._onTapStart);
		_on(el, 'touchstart', this._onTapStart);
		options.supportPointer && _on(el, 'pointerdown', this._onTapStart);

		if (this.nativeDraggable) {
			_on(el, 'dragover', this);
			_on(el, 'dragenter', this);
		}

		touchDragOverListeners.push(this._onDragOver);

		// Restore sorting
		options.store && options.store.get && this.sort(options.store.get(this) || []);
	}

	Sortable.prototype = /** @lends Sortable.prototype */ {
		constructor: Sortable,

		// is mouse aligned with dragEl?
		_isAligned: true,

		_computeIsAligned: function(evt, isDragEl) {
			if (_alignedSilent) return;
			if (!dragEl || dragEl.parentNode !== this.el) return;
			if (isDragEl !== true && isDragEl !== false) {
				isDragEl = !!_closest(evt.target, null, dragEl, true);
			}
			this._isAligned = !scrolling && (isDragEl || this._isAligned && _isInRowColumn(evt.clientX, evt.clientY, this.el, this._getDirection(evt, null), this.options));
			_alignedSilent = true;
			setTimeout(function() {
				_alignedSilent = false;
			}, 30);
		},

		_getDirection: function(evt, target) {
			return (typeof this.options.direction === 'function') ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
		},

		_onTapStart: function (/** Event|TouchEvent */evt) {
			var _this = this,
				el = this.el,
				options = this.options,
				preventOnFilter = options.preventOnFilter,
				type = evt.type,
				touch = evt.touches && evt.touches[0],
				target = (touch || evt).target,
				originalTarget = evt.target.shadowRoot && ((evt.path && evt.path[0]) || (evt.composedPath && evt.composedPath()[0])) || target,
				filter = options.filter,
				startIndex;

			_saveInputCheckedState(el);


			// Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
			if (dragEl) {
				return;
			}

			if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
				return; // only left button or enabled
			}

			// cancel dnd if original target is content editable
			if (originalTarget.isContentEditable) {
				return;
			}

			target = _closest(target, options.draggable, el, true);

			if (!target) {
				return;
			}

			if (lastDownEl === target) {
				// Ignoring duplicate `down`
				return;
			}

			// Get the index of the dragged element within its parent
			startIndex = _index(target, options.draggable);

			// Check filter
			if (typeof filter === 'function') {
				if (filter.call(this, evt, target, this)) {
					_dispatchEvent(_this, originalTarget, 'filter', target, el, el, startIndex);
					preventOnFilter && evt.cancelable && evt.preventDefault();
					return; // cancel dnd
				}
			}
			else if (filter) {
				filter = filter.split(',').some(function (criteria) {
					criteria = _closest(originalTarget, criteria.trim(), el, false);

					if (criteria) {
						_dispatchEvent(_this, criteria, 'filter', target, el, el, startIndex);
						return true;
					}
				});

				if (filter) {
					preventOnFilter && evt.cancelable && evt.preventDefault();
					return; // cancel dnd
				}
			}

			if (options.handle && !_closest(originalTarget, options.handle, el, false)) {
				return;
			}

			// Prepare `dragstart`
			this._prepareDragStart(evt, touch, target, startIndex);
		},


		_handleAutoScroll: function(evt, fallback) {
			if (!dragEl || !this.options.scroll) return;
			var x = evt.clientX,
				y = evt.clientY,

				elem = document.elementFromPoint(x, y),
				_this = this
			;

			// firefox does not have native autoscroll
			if (fallback || (window.navigator && window.navigator.userAgent.toLowerCase().indexOf('firefox') > -1)) {
				_autoScroll(evt, _this.options, elem, true);

				// Listener for pointer element change
				var ogElemScroller = _getParentAutoScrollElement(elem, true);
				if (
					scrolling &&
					(
						!pointerElemChangedInterval ||
						x !== lastPointerElemX ||
						y !== lastPointerElemY
					)
				) {

					pointerElemChangedInterval && clearInterval(pointerElemChangedInterval);
					// Detect for pointer elem change, emulating native DnD behaviour
					pointerElemChangedInterval = setInterval(function() {
						if (!dragEl) return;
						// could also check if scroll direction on newElem changes due to parent autoscrolling
						var newElem = _getParentAutoScrollElement(document.elementFromPoint(x, y), true);
						if (newElem !== ogElemScroller) {
							ogElemScroller = newElem;
							_clearAutoScrolls();
							_autoScroll(evt, _this.options, ogElemScroller, true);
						}
					}, 10);
					lastPointerElemX = x;
					lastPointerElemY = y;
				}

			} else {
				// if DnD is enabled (not on firefox), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
				if (!_this.options.bubbleScroll || _getParentAutoScrollElement(elem, true) === window) {
					_clearAutoScrolls();
					return;
				}
				_autoScroll(evt, _this.options, _getParentAutoScrollElement(elem, false));
			}
		},

		_prepareDragStart: function (/** Event */evt, /** Touch */touch, /** HTMLElement */target, /** Number */startIndex) {
			var _this = this,
				el = _this.el,
				options = _this.options,
				ownerDocument = el.ownerDocument,
				dragStartFn;

			if (target && !dragEl && (target.parentNode === el)) {
				tapEvt = evt;

				rootEl = el;
				dragEl = target;
				parentEl = dragEl.parentNode;
				nextEl = dragEl.nextSibling;
				lastDownEl = target;
				activeGroup = options.group;
				oldIndex = startIndex;

				this._lastX = (touch || evt).clientX;
				this._lastY = (touch || evt).clientY;

				dragEl.style['will-change'] = 'all';

				dragStartFn = function () {
					// Delayed drag has been triggered
					// we can re-enable the events: touchmove/mousemove
					_this._disableDelayedDrag();

					// Make the element draggable
					dragEl.draggable = _this.nativeDraggable;

					// Bind the events: dragstart/dragend
					_this._triggerDragStart(evt, touch);

					// Drag start event
					_dispatchEvent(_this, rootEl, 'choose', dragEl, rootEl, rootEl, oldIndex);

					// Chosen item
					_toggleClass(dragEl, options.chosenClass, true);
				};

				// Disable "draggable"
				options.ignore.split(',').forEach(function (criteria) {
					_find(dragEl, criteria.trim(), _disableDraggable);
				});

				_on(ownerDocument, 'mouseup', _this._onDrop);
				_on(ownerDocument, 'touchend', _this._onDrop);
				_on(ownerDocument, 'touchcancel', _this._onDrop);
				options.supportPointer && _on(ownerDocument, 'pointercancel', _this._onDrop);

				if (options.delay) {
					// If the user moves the pointer or let go the click or touch
					// before the delay has been reached:
					// disable the delayed drag
					_on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchend', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
					_on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
					_on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
					options.supportPointer && _on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);

					_this._dragStartTimer = setTimeout(dragStartFn.bind(_this), options.delay);
				} else {
					dragStartFn();
				}


			}
		},

		_delayedDragTouchMoveHandler: function (/** TouchEvent|PointerEvent **/e) {
			var touch = e.touches ? e.touches[0] : e;
			if (min(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY))
					>= this.options.touchStartThreshold
			) {
				this._disableDelayedDrag();
			}
		},

		_disableDelayedDrag: function () {
			var ownerDocument = this.el.ownerDocument;

			clearTimeout(this._dragStartTimer);
			_off(ownerDocument, 'mouseup', this._disableDelayedDrag);
			_off(ownerDocument, 'touchend', this._disableDelayedDrag);
			_off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
			_off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
			_off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
			_off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
		},

		_triggerDragStart: function (/** Event */evt, /** Touch */touch) {
			touch = touch || (evt.pointerType == 'touch' ? evt : null);


			if (touch) {
				// Touch device support
				tapEvt = {
					target: dragEl,
					clientX: touch.clientX,
					clientY: touch.clientY
				};

				this._onDragStart(tapEvt, 'touch');
			}
			else if (!this.nativeDraggable) {
				this._onDragStart(tapEvt, true);
			}
			else {
				_on(dragEl, 'dragend', this);
				_on(rootEl, 'dragstart', this._onDragStart);
			}

			try {
				if (document.selection) {
					// Timeout neccessary for IE9
					_nextTick(function () {
						document.selection.empty();
					});
				} else {
					window.getSelection().removeAllRanges();
				}
			} catch (err) {
			}
		},

		_dragStarted: function () {
			if (rootEl && dragEl) {
				if (this.nativeDraggable) {
					_on(document, 'dragover', this._handleAutoScroll);
					_on(document, 'dragover', _checkAlignment);
				}
				var options = this.options;

				// Apply effect
				_toggleClass(dragEl, options.dragClass, false);
				_toggleClass(dragEl, options.ghostClass, true);

				_css(dragEl, 'transform', '');

				Sortable.active = this;

				this._isAligned = true;

				// Drag start event
				_dispatchEvent(this, rootEl, 'start', dragEl, rootEl, rootEl, oldIndex);
			} else {
				this._nulling();
			}
		},

		_emulateDragOver: function (bypassLastTouchCheck) {
			if (touchEvt) {
				if (this._lastX === touchEvt.clientX && this._lastY === touchEvt.clientY && !bypassLastTouchCheck) {
					return;
				}

				this._lastX = touchEvt.clientX;
				this._lastY = touchEvt.clientY;

				if (!supportCssPointerEvents) {
					_css(ghostEl, 'display', 'none');
				}

				var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
				var parent = target;
				var isDragEl = !!_closest(target, null, dragEl, true);

				while (target && target.shadowRoot) {
					target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
					parent = target;
				}

				if (parent) {
					do {
						if (parent[expando]) {
							var i = touchDragOverListeners.length;
							while (i--) {
								touchDragOverListeners[i]({
									clientX: touchEvt.clientX,
									clientY: touchEvt.clientY,
									target: target,
									rootEl: parent
								});
							}

							if (!this.options.dragoverBubble) {
								break;
							}
						}

						target = parent; // store last element
					}
					/* jshint boss:true */
					while (parent = parent.parentNode);
				}
				dragEl.parentNode[expando]._computeIsAligned(touchEvt, isDragEl);

				if (!supportCssPointerEvents) {
					_css(ghostEl, 'display', '');
				}
			}
		},


		_onTouchMove: function (/**TouchEvent*/evt) {
			if (tapEvt) {
				var	options = this.options,
					fallbackTolerance = options.fallbackTolerance,
					fallbackOffset = options.fallbackOffset,
					touch = evt.touches ? evt.touches[0] : evt,
					dx = (touch.clientX - tapEvt.clientX) + fallbackOffset.x,
					dy = (touch.clientY - tapEvt.clientY) + fallbackOffset.y,
					translate3d = evt.touches ? 'translate3d(' + dx + 'px,' + dy + 'px,0)' : 'translate(' + dx + 'px,' + dy + 'px)';

				// prevent duplicate event firing
				if (this.options.supportPointer && evt.type === 'touchmove') return;

				// only set the status to dragging, when we are actually dragging
				if (!Sortable.active) {
					if (fallbackTolerance &&
						min(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY)) < fallbackTolerance
					) {
						return;
					}

					this._dragStarted();
				}

				// as well as creating the ghost element on the document body
				this._appendGhost();

				this._handleAutoScroll(touch, true);


				moved = true;
				touchEvt = touch;

				_css(ghostEl, 'webkitTransform', translate3d);
				_css(ghostEl, 'mozTransform', translate3d);
				_css(ghostEl, 'msTransform', translate3d);
				_css(ghostEl, 'transform', translate3d);

				evt.cancelable && evt.preventDefault();
			}
		},

		_appendGhost: function () {
			if (!ghostEl) {
				var rect = dragEl.getBoundingClientRect(),
					css = _css(dragEl),
					options = this.options,
					ghostRect;

				ghostEl = dragEl.cloneNode(true);

				_toggleClass(ghostEl, options.ghostClass, false);
				_toggleClass(ghostEl, options.fallbackClass, true);
				_toggleClass(ghostEl, options.dragClass, true);

				_css(ghostEl, 'top', rect.top - parseInt(css.marginTop, 10));
				_css(ghostEl, 'left', rect.left - parseInt(css.marginLeft, 10));
				_css(ghostEl, 'width', rect.width);
				_css(ghostEl, 'height', rect.height);
				_css(ghostEl, 'opacity', '0.8');
				_css(ghostEl, 'position', 'fixed');
				_css(ghostEl, 'zIndex', '100000');
				_css(ghostEl, 'pointerEvents', 'none');

				options.fallbackOnBody && document.body.appendChild(ghostEl) || rootEl.appendChild(ghostEl);

				// Fixing dimensions.
				ghostRect = ghostEl.getBoundingClientRect();
				_css(ghostEl, 'width', rect.width * 2 - ghostRect.width);
				_css(ghostEl, 'height', rect.height * 2 - ghostRect.height);
			}
		},

		_onDragStart: function (/**Event*/evt, /**boolean*/useFallback) {
			var _this = this;
			var dataTransfer = evt.dataTransfer;
			var options = _this.options;

			_this._offUpEvents();
			if (activeGroup.checkPull(_this, _this, dragEl, evt)) {
				cloneEl = _clone(dragEl);

				cloneEl.draggable = false;
				cloneEl.style['will-change'] = '';

				this._hideClone();

				_toggleClass(cloneEl, _this.options.chosenClass, false);

				// #1143: IFrame support workaround
				_this._cloneId = _nextTick(function () {
					rootEl.insertBefore(cloneEl, dragEl);
					_dispatchEvent(_this, rootEl, 'clone', dragEl);
				});
			}

			_toggleClass(dragEl, options.dragClass, true);

			if (useFallback) {
				if (useFallback === 'touch') {
					// Fixed #973:
					_on(document, 'touchmove', _preventScroll);

					// Bind touch events
					_on(document, 'touchmove', _this._onTouchMove);
					_on(document, 'touchend', _this._onDrop);
					_on(document, 'touchcancel', _this._onDrop);

					if (options.supportPointer) {
						_on(document, 'pointermove', _this._onTouchMove);
						_on(document, 'pointerup', _this._onDrop);
					}
				} else {
					// Old brwoser
					_on(document, 'mousemove', _this._onTouchMove);
					_on(document, 'mouseup', _this._onDrop);
				}

				_this._loopId = setInterval(_this._emulateDragOver, 50);
				_toggleClass(dragEl, options.dragClass, false);
			}
			else {
				if (dataTransfer) {
					dataTransfer.effectAllowed = 'move';
					options.setData && options.setData.call(_this, dataTransfer, dragEl);
				}

				_on(document, 'drop', _this);

				// #1276 fix:
				_css(dragEl, 'transform', 'translateZ(0)');

				_this._dragStartId = _nextTick(_this._dragStarted);
			}
			_on(document, 'selectstart', _this);
		},

		_onDragOver: function (/**Event*/evt) {
			var el = this.el,
				target,
				dragRect,
				targetRect,
				revert,
				options = this.options,
				group = options.group,
				activeSortable = Sortable.active,
				isOwner = (activeGroup === group),
				isMovingBetweenSortable = false,
				canSort = options.sort
			;


			if (evt.rootEl !== void 0 && evt.rootEl !== this.el) return; // touch fallback

			// no bubbling and not fallback
			if (!options.dragoverBubble && !evt.rootEl) {
				this._handleAutoScroll(evt);
				dragEl.parentNode[expando]._computeIsAligned(evt);
			}

			if (evt.preventDefault !== void 0) {
				evt.cancelable && evt.preventDefault();
				!options.dragoverBubble && evt.stopPropagation();
			}


			moved = true;

			target = _closest(evt.target, options.draggable, el, true);


			if (dragEl.animated && target === dragEl || target.animated || _silent) {
				return;
			}


			if (target !== lastTarget) {
				isCircumstantialInvert = false;
				pastFirstInvertThresh = false;
				lastTarget = null;
			}


			if (activeSortable && !options.disabled &&
				(isOwner
					? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
					: (
						putSortable === this ||
						(
							(this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) &&
							group.checkPut(this, activeSortable, dragEl, evt)
						)
					)
				)
			) {
				var direction;
				var axis = this._getDirection(evt, target);
				

				dragRect = dragEl.getBoundingClientRect();

				if (putSortable !== this && this !== Sortable.active) {
					putSortable = this;
					isMovingBetweenSortable = true;
				} else if (this === Sortable.active) {
					isMovingBetweenSortable = false;
					putSortable = null;
				}

				if (revert) {
					this._hideClone();
					parentEl = rootEl; // actualization

					if (cloneEl || nextEl) {
						rootEl.insertBefore(dragEl, cloneEl || nextEl);
					}
					else if (!canSort) {
						rootEl.appendChild(dragEl);
					}

					return;
				}

				if ((el.children.length === 0) || (el.children[0] === ghostEl) ||
					(el === evt.target) && _ghostIsLast(evt, axis, el)
				) {
					//assign target only if condition is true
					if (el.children.length !== 0 && el.children[0] !== ghostEl && el === evt.target) {
						target = _lastChild(el);
					}

					if (target) {
						if (target.animated) {
							return;
						}

						targetRect = target.getBoundingClientRect();
					}

					if (isOwner) {
						activeSortable._hideClone();
					} else {
						activeSortable._showClone(this);
					}

					if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
						if (!dragEl.contains(el)) {
							el.appendChild(dragEl);
							parentEl = el; // actualization
							this._isAligned = true; // must be for _ghostIsLast to pass
							realDragElRect = null;
						}

						this._animate(dragRect, dragEl);
						target && this._animate(targetRect, target);
					}
				}
				else if (target && !target.animated && target !== dragEl && (target.parentNode[expando] !== void 0) && target !== el) {
					
					isCircumstantialInvert = isCircumstantialInvert || options.invertSwap || dragEl.parentNode !== el || !this._isAligned;
					direction = _getSwapDirection(evt, target, axis,
						options.swapThreshold, options.invertedSwapThreshold,
						isCircumstantialInvert,
						lastTarget === target);
					if (direction === 0) return;
					realDragElRect = null;


					this._isAligned = true;

					if (!lastTarget || lastTarget !== target && (!target || !target.animated)) {
						pastFirstInvertThresh = false;
						lastTarget = target;
					}


					lastDirection = direction;

					targetRect = target.getBoundingClientRect();

					var nextSibling = target.nextElementSibling,
						after = false
					;

					after = direction === 1;

					var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

					if (moveVector !== false) {
						if (moveVector === 1 || moveVector === -1) {
							after = (moveVector === 1);
						}

						_silent = true;
						setTimeout(_unsilent, 30);

						if (isOwner) {
							activeSortable._hideClone();
						} else {
							activeSortable._showClone(this);
						}

						if (!dragEl.contains(el)) {
							if (after && !nextSibling) {
								el.appendChild(dragEl);
							} else {
								target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
							}
						}

						parentEl = dragEl.parentNode; // actualization

						this._animate(dragRect, dragEl);
						this._animate(targetRect, target);
					}
				}
			}
		},

		_animate: function (prevRect, target) {
			var ms = this.options.animation;

			if (ms) {
				var currentRect = target.getBoundingClientRect();

				if (target === dragEl) {
					realDragElRect = currentRect;
				}

				if (prevRect.nodeType === 1) {
					prevRect = prevRect.getBoundingClientRect();
				}

				// Check if actually moving position
				if ((prevRect.left + prevRect.width / 2) === (currentRect.left + currentRect.width / 2)
					&& (prevRect.top + prevRect.height / 2) === (currentRect.top + currentRect.height / 2)
				) return;

				_css(target, 'transition', 'none');
				_css(target, 'transform', 'translate3d('
					+ (prevRect.left - currentRect.left) + 'px,'
					+ (prevRect.top - currentRect.top) + 'px,0)'
				);

				forRepaintDummy = target.offsetWidth; // repaint

				_css(target, 'transition', 'all ' + ms + 'ms');
				_css(target, 'transform', 'translate3d(0,0,0)');

				clearTimeout(target.animated);
				target.animated = setTimeout(function () {
					_css(target, 'transition', '');
					_css(target, 'transform', '');
					target.animated = false;
				}, ms);
			}
		},

		_offUpEvents: function () {
			var ownerDocument = this.el.ownerDocument;

			_off(document, 'touchmove', _preventScroll);
			_off(document, 'touchmove', this._onTouchMove);
			_off(document, 'pointermove', this._onTouchMove);
			_off(ownerDocument, 'mouseup', this._onDrop);
			_off(ownerDocument, 'touchend', this._onDrop);
			_off(ownerDocument, 'pointerup', this._onDrop);
			_off(ownerDocument, 'touchcancel', this._onDrop);
			_off(ownerDocument, 'pointercancel', this._onDrop);
			_off(document, 'selectstart', this);
		},

		_onDrop: function (/**Event*/evt) {
			var el = this.el,
				options = this.options;
			scrolling = false;
			isCircumstantialInvert = false;
			pastFirstInvertThresh = false;

			clearInterval(this._loopId);

			clearInterval(pointerElemChangedInterval);
			_clearAutoScrolls();
			_cancelThrottle();

			clearTimeout(this._dragStartTimer);

			_cancelNextTick(this._cloneId);
			_cancelNextTick(this._dragStartId);

			// Unbind events
			_off(document, 'mousemove', this._onTouchMove);


			if (this.nativeDraggable) {
				_off(document, 'drop', this);
				_off(el, 'dragstart', this._onDragStart);
				_off(document, 'dragover', this._handleAutoScroll);
				_off(document, 'dragover', _checkAlignment);
			}

			this._offUpEvents();

			if (evt) {
				if (moved) {
					evt.cancelable && evt.preventDefault();
					!options.dropBubble && evt.stopPropagation();
				}

				ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

				if (rootEl === parentEl || (putSortable && putSortable.lastPutMode !== 'clone')) {
					// Remove clone
					cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
				}

				if (dragEl) {
					if (this.nativeDraggable) {
						_off(dragEl, 'dragend', this);
					}

					_disableDraggable(dragEl);
					dragEl.style['will-change'] = '';

					// Remove class's
					_toggleClass(dragEl, this.options.ghostClass, false);
					_toggleClass(dragEl, this.options.chosenClass, false);

					// Drag stop event
					_dispatchEvent(this, rootEl, 'unchoose', dragEl, parentEl, rootEl, oldIndex, null, evt);

					if (rootEl !== parentEl) {
						newIndex = _index(dragEl, options.draggable);

						if (newIndex >= 0) {
							// Add event
							_dispatchEvent(null, parentEl, 'add', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);

							// Remove event
							_dispatchEvent(this, rootEl, 'remove', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);

							// drag from one list and drop into another
							_dispatchEvent(null, parentEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
							_dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
						}

						putSortable && putSortable.save();
					}
					else {
						if (dragEl.nextSibling !== nextEl) {
							// Get the index of the dragged element within its parent
							newIndex = _index(dragEl, options.draggable);

							if (newIndex >= 0) {
								// drag & drop within the same list
								_dispatchEvent(this, rootEl, 'update', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
								_dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
							}
						}
					}

					if (Sortable.active) {
						/* jshint eqnull:true */
						if (newIndex == null || newIndex === -1) {
							newIndex = oldIndex;
						}

						_dispatchEvent(this, rootEl, 'end', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);

						// Save sorting
						this.save();
					}
				}

			}
			this._nulling();
		},

		_nulling: function() {
			rootEl =
			dragEl =
			parentEl =
			ghostEl =
			nextEl =
			cloneEl =
			lastDownEl =

			scrollEl =
			scrollParentEl =
			autoScrolls.length =

			pointerElemChangedInterval =
			lastPointerElemX =
			lastPointerElemY =

			tapEvt =
			touchEvt =

			moved =
			newIndex =
			oldIndex =

			lastTarget =
			lastDirection =

			forRepaintDummy =
			realDragElRect =

			putSortable =
			activeGroup =
			Sortable.active = null;

			savedInputChecked.forEach(function (el) {
				el.checked = true;
			});
			savedInputChecked.length = 0;
		},

		handleEvent: function (/**Event*/evt) {
			switch (evt.type) {
				case 'drop':
				case 'dragend':
					this._onDrop(evt);
					break;

				case 'dragenter':
				case 'dragover':
					if (dragEl) {
						this._onDragOver(evt);
						_globalDragOver(evt);
					}
					break;

				case 'selectstart':
					evt.preventDefault();
					break;
			}
		},


		/**
		 * Serializes the item into an array of string.
		 * @returns {String[]}
		 */
		toArray: function () {
			var order = [],
				el,
				children = this.el.children,
				i = 0,
				n = children.length,
				options = this.options;

			for (; i < n; i++) {
				el = children[i];
				if (_closest(el, options.draggable, this.el, false)) {
					order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
				}
			}

			return order;
		},


		/**
		 * Sorts the elements according to the array.
		 * @param  {String[]}  order  order of the items
		 */
		sort: function (order) {
			var items = {}, rootEl = this.el;

			this.toArray().forEach(function (id, i) {
				var el = rootEl.children[i];

				if (_closest(el, this.options.draggable, rootEl, false)) {
					items[id] = el;
				}
			}, this);

			order.forEach(function (id) {
				if (items[id]) {
					rootEl.removeChild(items[id]);
					rootEl.appendChild(items[id]);
				}
			});
		},


		/**
		 * Save the current sorting
		 */
		save: function () {
			var store = this.options.store;
			store && store.set && store.set(this);
		},


		/**
		 * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
		 * @param   {HTMLElement}  el
		 * @param   {String}       [selector]  default: `options.draggable`
		 * @returns {HTMLElement|null}
		 */
		closest: function (el, selector) {
			return _closest(el, selector || this.options.draggable, this.el, false);
		},


		/**
		 * Set/get option
		 * @param   {string} name
		 * @param   {*}      [value]
		 * @returns {*}
		 */
		option: function (name, value) {
			var options = this.options;

			if (value === void 0) {
				return options[name];
			} else {
				options[name] = value;

				if (name === 'group') {
					_prepareGroup(options);
				}
			}
		},


		/**
		 * Destroy
		 */
		destroy: function () {
			var el = this.el;

			el[expando] = null;

			_off(el, 'mousedown', this._onTapStart);
			_off(el, 'touchstart', this._onTapStart);
			_off(el, 'pointerdown', this._onTapStart);

			if (this.nativeDraggable) {
				_off(el, 'dragover', this);
				_off(el, 'dragenter', this);
			}
			// Remove draggable attributes
			Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
				el.removeAttribute('draggable');
			});

			touchDragOverListeners.splice(touchDragOverListeners.indexOf(this._onDragOver), 1);

			this._onDrop();

			this.el = el = null;
		},

		_hideClone: function() {
			if (!cloneEl.cloneHidden) {
				_css(cloneEl, 'display', 'none');
				cloneEl.cloneHidden = true;
			}
		},

		_showClone: function(putSortable) {
			if (putSortable.lastPutMode !== 'clone') {
				this._hideClone();
				return;
			}

			if (cloneEl.cloneHidden) {
				// show clone at dragEl or original position
				if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
					rootEl.insertBefore(cloneEl, dragEl);
				} else if (nextEl) {
					rootEl.insertBefore(cloneEl, nextEl);
				} else {
					rootEl.appendChild(cloneEl);
				}

				if (this.options.group.revertClone) {
					this._animate(dragEl, cloneEl);
				}
				_css(cloneEl, 'display', '');
				cloneEl.cloneHidden = false;
			}
		}
	};

	function _closest(/**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx, includeCTX) {
		if (el) {
			ctx = ctx || document;

			do {
				if ((selector === '>*' && el.parentNode === ctx) || _matches(el, selector) || (includeCTX && el === ctx)) {
					return el;
				}

				if (el === ctx) break;
				/* jshint boss:true */
			} while (el = _getParentOrHost(el));
		}

		return null;
	}


	function _getParentOrHost(el) {
		return (el.host && el !== document && el.host.nodeType)
			? el.host
			: el.parentNode;
	}


	function _globalDragOver(/**Event*/evt) {
		if (evt.dataTransfer) {
			evt.dataTransfer.dropEffect = 'move';
		}
		evt.cancelable && evt.preventDefault();
	}


	function _on(el, event, fn) {
		el.addEventListener(event, fn, captureMode);
	}


	function _off(el, event, fn) {
		el.removeEventListener(event, fn, captureMode);
	}


	function _toggleClass(el, name, state) {
		if (el && name) {
			if (el.classList) {
				el.classList[state ? 'add' : 'remove'](name);
			}
			else {
				var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
				el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
			}
		}
	}


	function _css(el, prop, val) {
		var style = el && el.style;

		if (style) {
			if (val === void 0) {
				if (document.defaultView && document.defaultView.getComputedStyle) {
					val = document.defaultView.getComputedStyle(el, '');
				}
				else if (el.currentStyle) {
					val = el.currentStyle;
				}

				return prop === void 0 ? val : val[prop];
			}
			else {
				if (!(prop in style)) {
					prop = '-webkit-' + prop;
				}

				style[prop] = val + (typeof val === 'string' ? '' : 'px');
			}
		}
	}


	function _find(ctx, tagName, iterator) {
		if (ctx) {
			var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;

			if (iterator) {
				for (; i < n; i++) {
					iterator(list[i], i);
				}
			}

			return list;
		}

		return [];
	}



	function _dispatchEvent(sortable, rootEl, name, targetEl, toEl, fromEl, startIndex, newIndex, originalEvt) {
		sortable = (sortable || rootEl[expando]);

		var evt,
			options = sortable.options,
			onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);
		// Support for new CustomEvent feature
		if (window.CustomEvent) {
			evt = new CustomEvent(name, {
				bubbles: true,
				cancelable: true
			});
		} else {
			evt = document.createEvent('Event');
			evt.initEvent(name, true, true);
		}

		evt.to = toEl || rootEl;
		evt.from = fromEl || rootEl;
		evt.item = targetEl || rootEl;
		evt.clone = cloneEl;

		evt.oldIndex = startIndex;
		evt.newIndex = newIndex;

		evt.originalEvent = originalEvt;

		rootEl.dispatchEvent(evt);

		if (options[onName]) {
			options[onName].call(sortable, evt);
		}
	}


	function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvt, willInsertAfter) {
		var evt,
			sortable = fromEl[expando],
			onMoveFn = sortable.options.onMove,
			retVal;
		// Support for new CustomEvent feature
		if (window.CustomEvent) {
			evt = new CustomEvent('move', {
				bubbles: true,
				cancelable: true
			});
		} else {
			evt = document.createEvent('Event');
			evt.initEvent('move', true, true);
		}

		evt.to = toEl;
		evt.from = fromEl;
		evt.dragged = dragEl;
		evt.draggedRect = dragRect;
		evt.related = targetEl || toEl;
		evt.relatedRect = targetRect || toEl.getBoundingClientRect();
		evt.willInsertAfter = willInsertAfter;

		evt.originalEvent = originalEvt;

		fromEl.dispatchEvent(evt);

		if (onMoveFn) {
			retVal = onMoveFn.call(sortable, evt, originalEvt);
		}

		return retVal;
	}

	function _disableDraggable(el) {
		el.draggable = false;
	}

	function _unsilent() {
		_silent = false;
	}

	function _getChild(el, childNum, options) {
		var currentChild = 0,
			i = 0,
			children = el.children
		;
		while (i < children.length) {
			if (
				children[i].style.display !== 'none' &&
				children[i] !== ghostEl &&
				children[i] !== dragEl &&
				_closest(children[i], options.draggable, el, false)
			) {
				if (currentChild === childNum) {
					return children[i];
				}
				currentChild++;
			}

			i++;
		}
		return null;
	}

	function _lastChild(el) {
		var last = el.lastElementChild;

		if (last === ghostEl) {
			last = el.children[el.childElementCount - 2];
		}

		return last || null;
	}

	function _ghostIsLast(evt, axis, el) {
		var elRect = _lastChild(el).getBoundingClientRect(),
			mouseOnAxis = axis === 'vertical' ? evt.clientY : evt.clientX,
			mouseOnOppAxis = axis === 'vertical' ? evt.clientX : evt.clientY,
			targetS2 = axis === 'vertical' ? elRect.bottom : elRect.right,
			targetS1Opp = axis === 'vertical' ? elRect.left : elRect.top,
			targetS2Opp = axis === 'vertical' ? elRect.right : elRect.bottom
		;
		return (
			mouseOnOppAxis > targetS1Opp &&
			mouseOnOppAxis < targetS2Opp &&
			mouseOnAxis > targetS2
		);
	}

	function _getSwapDirection(evt, target, axis, swapThreshold, invertedSwapThreshold, invertSwap, inside) {
		var targetRect = target.getBoundingClientRect(),
			mouseOnAxis = axis === 'vertical' ? evt.clientY : evt.clientX,
			targetLength = axis === 'vertical' ? targetRect.height : targetRect.width,
			targetS1 = axis === 'vertical' ? targetRect.top : targetRect.left,
			targetS2 = axis === 'vertical' ? targetRect.bottom : targetRect.right,
			dragRect = dragEl.getBoundingClientRect(),
			dragLength = axis === 'vertical' ? dragRect.height : dragRect.width,
			invert = false
		;
		var dragStyle = _css(dragEl);
		dragLength += parseInt(dragStyle.marginLeft) + parseInt(dragStyle.marginRight);

		if (!invertSwap) {
			// Never invert or create dragEl shadow when width causes mouse to move past the end of regular swapThreshold
			if (inside && dragLength < targetLength * swapThreshold) { // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
				// check if past first invert threshold on side opposite of lastDirection
				if (!pastFirstInvertThresh &&
					(lastDirection === 1 ?
						(
							mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2
						) :
						(
							mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2
						)
					)
				)
				{
					// past first invert threshold, do not restrict inverted threshold to dragEl shadow
					pastFirstInvertThresh = true;
				}

				if (!pastFirstInvertThresh) {
					var dragS1 = axis === 'vertical' ? dragRect.top : dragRect.left,
						dragS2 = axis === 'vertical' ? dragRect.bottom : dragRect.right
					;
					// dragEl shadow
					if (
						lastDirection === 1 ?
						(
							mouseOnAxis < targetS1 + dragLength // over dragEl shadow
						) :
						(
							mouseOnAxis > targetS2 - dragLength
						)
					)
					{
						return lastDirection * -1;
					}
				} else {
					invert = true;
				}
			} else {
				// Regular
				if (
					mouseOnAxis > targetS1 + (targetLength * (1 - swapThreshold) / 2) &&
					mouseOnAxis < targetS2 - (targetLength * (1 - swapThreshold) / 2)
				) {
					return ((mouseOnAxis > targetS1 + targetLength / 2) ? -1 : 1);
				}
			}
		}

		invert = invert || invertSwap;

		if (invert) {
			// Invert of regular
			if (
				mouseOnAxis < targetS1 + (targetLength * invertedSwapThreshold / 2) ||
				mouseOnAxis > targetS2 - (targetLength * invertedSwapThreshold / 2)
			)
			{
				return ((mouseOnAxis > targetS1 + targetLength / 2) ? 1 : -1);
			}
		}

		return 0;
	}


	/**
	 * Generate id
	 * @param   {HTMLElement} el
	 * @returns {String}
	 * @private
	 */
	function _generateId(el) {
		var str = el.tagName + el.className + el.src + el.href + el.textContent,
			i = str.length,
			sum = 0;

		while (i--) {
			sum += str.charCodeAt(i);
		}

		return sum.toString(36);
	}

	/**
	 * Returns the index of an element within its parent for a selected set of
	 * elements
	 * @param  {HTMLElement} el
	 * @param  {selector} selector
	 * @return {number}
	 */
	function _index(el, selector) {
		var index = 0;

		if (!el || !el.parentNode) {
			return -1;
		}

		while (el && (el = el.previousElementSibling)) {
			if ((el.nodeName.toUpperCase() !== 'TEMPLATE') && (selector === '>*' || _matches(el, selector))) {
				index++;
			}
		}

		return index;
	}

	function _matches(/**HTMLElement*/el, /**String*/selector) {
		if (el) {
			try {
				if (el.matches) {
					return el.matches(selector);
				} else if (el.msMatchesSelector) {
					return el.msMatchesSelector(selector);
				}
			} catch(_) {
				return false;
			}
		}

		return false;
	}

	var _throttleTimeout;
	function _throttle(callback, ms) {
		return function () {
			if (!_throttleTimeout) {
				var args = arguments,
					_this = this
				;

				_throttleTimeout = setTimeout(function () {
					if (args.length === 1) {
						callback.call(_this, args[0]);
					} else {
						callback.apply(_this, args);
					}

					_throttleTimeout = void 0;
				}, ms);
			}
		};
	}

	function _cancelThrottle() {
		clearTimeout(_throttleTimeout);
		_throttleTimeout = void 0;
	}

	function _extend(dst, src) {
		if (dst && src) {
			for (var key in src) {
				if (src.hasOwnProperty(key)) {
					dst[key] = src[key];
				}
			}
		}

		return dst;
	}

	function _clone(el) {
		if (Polymer && Polymer.dom) {
			return Polymer.dom(el).cloneNode(true);
		}
		else if ($) {
			return $(el).clone(true)[0];
		}
		else {
			return el.cloneNode(true);
		}
	}

	function _saveInputCheckedState(root) {
		savedInputChecked.length = 0;

		var inputs = root.getElementsByTagName('input');
		var idx = inputs.length;

		while (idx--) {
			var el = inputs[idx];
			el.checked && savedInputChecked.push(el);
		}
	}

	function _nextTick(fn) {
		return setTimeout(fn, 0);
	}

	function _cancelNextTick(id) {
		return clearTimeout(id);
	}

	function _preventScroll(evt) {
		if (Sortable.active && evt.cancelable) {
			evt.preventDefault();
		}
	}


	// Export utils
	Sortable.utils = {
		on: _on,
		off: _off,
		css: _css,
		find: _find,
		is: function (el, selector) {
			return !!_closest(el, selector, el, false);
		},
		extend: _extend,
		throttle: _throttle,
		closest: _closest,
		toggleClass: _toggleClass,
		clone: _clone,
		index: _index,
		nextTick: _nextTick,
		cancelNextTick: _cancelNextTick,
		detectDirection: _detectDirection,
		getChild: _getChild
	};


	/**
	 * Create sortable instance
	 * @param {HTMLElement}  el
	 * @param {Object}      [options]
	 */
	Sortable.create = function (el, options) {
		return new Sortable(el, options);
	};


	// Export
	Sortable.version = '1.8.0-rc1';
	return Sortable;
});

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/components/fightStatus/fightStatus.css":
/*!****************************************************!*\
  !*** ./src/components/fightStatus/fightStatus.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./fightStatus.css */ "./node_modules/css-loader/index.js!./src/components/fightStatus/fightStatus.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/fightStatus/fightStatus.js":
/*!***************************************************!*\
  !*** ./src/components/fightStatus/fightStatus.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fightStatus_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fightStatus.template */ "./src/components/fightStatus/fightStatus.template.js");
/* harmony import */ var _fightStatus_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fightStatus.css */ "./src/components/fightStatus/fightStatus.css");
/* harmony import */ var _fightStatus_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fightStatus_css__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var FightStatus =
/*#__PURE__*/
function () {
  function FightStatus() {
    _classCallCheck(this, FightStatus);
  }

  _createClass(FightStatus, null, [{
    key: "create",
    value: function create(hero, monster, level) {
      FightStatus.draw();
      FightStatus.insertPlayersNames(hero.name, monster.name);
      FightStatus.insertGameLevel(level);
      FightStatus.insertPlayersImg(hero, monster);
    }
  }, {
    key: "draw",
    value: function draw() {
      var gameContainer = document.querySelector('.game__container');
      gameContainer.insertAdjacentHTML('afterbegin', _fightStatus_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }
  }, {
    key: "insertPlayersNames",
    value: function insertPlayersNames(heroName, monsterName) {
      var heroNameElem = document.querySelector('.hero__name');
      var monsterNameElem = document.querySelector('.monster__name');
      heroNameElem.innerHTML = heroName;
      monsterNameElem.innerHTML = monsterName;
    }
  }, {
    key: "insertGameLevel",
    value: function insertGameLevel(level) {
      var levelInfo = document.querySelector('.game__level');
      levelInfo.innerHTML = "Level ".concat(level);
    }
  }, {
    key: "insertPlayersImg",
    value: function insertPlayersImg(hero, monster) {
      var heroFrame = document.querySelector('.hero__frame');
      var monsterFrame = document.querySelector('.monster__frame');
      heroFrame.appendChild(hero.bodyParts.head.img);
      monsterFrame.appendChild(monster.bodyParts.head.img);
    }
  }, {
    key: "updatePlayersHP",
    value: function updatePlayersHP(heroHP, monsterHP) {
      FightStatus.changeHPBar(heroHP, monsterHP);
      FightStatus.changeHPValue(heroHP, monsterHP);
    }
  }, {
    key: "changeHPBar",
    value: function changeHPBar(heroHP, monsterHP) {
      var heroHPElem = document.querySelector('.hero__hp_bar');
      var monsterHPElem = document.querySelector('.monster__hp_bar');
      heroHPElem.style.width = "".concat(heroHP, "%");
      monsterHPElem.style.width = "".concat(monsterHP, "%");
    }
  }, {
    key: "changeHPValue",
    value: function changeHPValue(heroHP, monsterHP) {
      var heroHPValue = document.querySelector('.hero__hp_value');
      var monsterHPValue = document.querySelector('.monster__hp_value');
      heroHPValue.innerHTML = "".concat(heroHP, "hp");
      monsterHPValue.innerHTML = "".concat(monsterHP, "hp");
    }
  }, {
    key: "remove",
    value: function remove() {
      var gameStatus = document.querySelector('.game__status');
      gameStatus.remove();
    }
  }]);

  return FightStatus;
}();

/* harmony default export */ __webpack_exports__["default"] = (FightStatus);

/***/ }),

/***/ "./src/components/fightStatus/fightStatus.template.js":
/*!************************************************************!*\
  !*** ./src/components/fightStatus/fightStatus.template.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"game__status\">\n  <div class=\"player__field hero__field\">\n    <div class=\"player__frame hero__frame\"></div>\n    <div class=\"player__info\">\n      <div class=\"player__hp\">\n        <div class=\"player__hp-under\">\n          <span class=\"player__hp_value hero__hp_value\">100hp</span>\n          <div class=\"player__hp_bar hero__hp_bar\"></div>   \n        </div> \n      </div>\n      <p class=\"player__name hero__name\">Hero</p>\n    </div>\n  </div>\n  <p class=\"game__level\">Level 1</p>\n  <div class=\"player__field monster__field\"> \n    <div class=\"player__info\">\n      <div class=\"player__hp\">\n        <div class=\"player__hp-under\">\n          <span class=\"player__hp_value monster__hp_value\">100hp</span>\n          <div class=\"player__hp_bar monster__hp_bar\"></div>\n        </div>\n      </div>  \n      <p class=\"player__name monster__name\">Monster</p>\n    </div>  \n    <div class=\"player__frame monster__frame\"></div> \n  </div>\n</div>\n");

/***/ }),

/***/ "./src/components/magicType/magicType.css":
/*!************************************************!*\
  !*** ./src/components/magicType/magicType.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./magicType.css */ "./node_modules/css-loader/index.js!./src/components/magicType/magicType.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/magicType/magicType.js":
/*!***********************************************!*\
  !*** ./src/components/magicType/magicType.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _magicType_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./magicType.template */ "./src/components/magicType/magicType.template.js");
/* harmony import */ var _taskList_taskList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../taskList/taskList */ "./src/components/taskList/taskList.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _magicType_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./magicType.css */ "./src/components/magicType/magicType.css");
/* harmony import */ var _magicType_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_magicType_css__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var MagicType =
/*#__PURE__*/
function () {
  function MagicType() {
    _classCallCheck(this, MagicType);
  }

  _createClass(MagicType, null, [{
    key: "initMagicType",
    value: function initMagicType() {
      _utils__WEBPACK_IMPORTED_MODULE_2__["default"].pause(1000).then(function () {
        MagicType.createMagicType();
      });
    }
  }, {
    key: "createMagicType",
    value: function createMagicType() {
      MagicType.draw();
      MagicType.setEventListener(_taskList_taskList__WEBPACK_IMPORTED_MODULE_1__["default"].initTaskList);
    }
  }, {
    key: "draw",
    value: function draw() {
      var gameContainer = document.querySelector('.game__container');
      gameContainer.insertAdjacentHTML('beforeend', _magicType_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }
  }, {
    key: "remove",
    value: function remove() {
      var modalType = document.querySelector('.magic__choose');
      MagicType.removeEventListeners(_taskList_taskList__WEBPACK_IMPORTED_MODULE_1__["default"].initTaskList);
      modalType.remove();
    }
  }, {
    key: "setEventListener",
    value: function setEventListener(func) {
      var buttonHealing = document.querySelector('#magic__healing');
      var buttonAttack = document.querySelector('#magic__attack');
      buttonHealing.addEventListener('click', func);
      buttonAttack.addEventListener('click', func);
      window.addEventListener('keydown', MagicType.controlMagicTypeByKeys);
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners(func) {
      var buttonHealing = document.querySelector('#magic__healing');
      var buttonAttack = document.querySelector('#magic__attack');
      buttonHealing.removeEventListener('click', func);
      buttonAttack.removeEventListener('click', func);
      window.removeEventListener('keydown', MagicType.controlMagicTypeByKeys);
    }
  }, {
    key: "controlMagicTypeByKeys",
    value: function controlMagicTypeByKeys(event) {
      var ENTER_KEY = 13;
      var LEFT_KEY = 37;
      var RIGHT_KEY = 39;
      var selectedClass = 'selected';
      var listOfButtons = document.querySelectorAll('.magic__type-btn');
      var selectedButton = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].defineSelectedElement(listOfButtons, selectedClass);

      if (selectedButton) {
        if (event.keyCode === ENTER_KEY) {
          selectedButton.click();
        } else if (event.keyCode === LEFT_KEY) {
          _utils__WEBPACK_IMPORTED_MODULE_2__["default"].selectPrevElement(listOfButtons, selectedClass);
        } else if (event.keyCode === RIGHT_KEY) {
          _utils__WEBPACK_IMPORTED_MODULE_2__["default"].selectNextElement(listOfButtons, selectedClass);
        }
      } else {
        _utils__WEBPACK_IMPORTED_MODULE_2__["default"].selectElement(listOfButtons[0], selectedClass);
      }
    }
  }]);

  return MagicType;
}();

/* harmony default export */ __webpack_exports__["default"] = (MagicType);

/***/ }),

/***/ "./src/components/magicType/magicType.template.js":
/*!********************************************************!*\
  !*** ./src/components/magicType/magicType.template.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"magic__choose\">\n        <h2 class=\"magic__kinds\">Choose Type Of Magic</h2>\n        <div class=\"magic__btn-container\">\n            <button class=\"magic__type-btn magic__type_healing\" id=\"magic__healing\" data-type=\"healind\">Healing</button>\n            <button class=\"magic__type-btn magic__type_attack\" id=\"magic__attack\" data-type=\"attack\">Attack</button>\n        </div>\n    </div>\n");

/***/ }),

/***/ "./src/components/modalLogin/modalLogin.css":
/*!**************************************************!*\
  !*** ./src/components/modalLogin/modalLogin.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./modalLogin.css */ "./node_modules/css-loader/index.js!./src/components/modalLogin/modalLogin.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/modalLogin/modalLogin.js":
/*!*************************************************!*\
  !*** ./src/components/modalLogin/modalLogin.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalLogin_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalLogin.template */ "./src/components/modalLogin/modalLogin.template.js");
/* harmony import */ var _configs_playerConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configs/playerConfig */ "./src/configs/playerConfig.js");
/* harmony import */ var _modalLogin_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalLogin.css */ "./src/components/modalLogin/modalLogin.css");
/* harmony import */ var _modalLogin_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modalLogin_css__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var ModalLogin =
/*#__PURE__*/
function () {
  function ModalLogin() {
    _classCallCheck(this, ModalLogin);
  }

  _createClass(ModalLogin, null, [{
    key: "create",
    value: function create() {
      ModalLogin.draw();
      ModalLogin.insertPlayerImg(_configs_playerConfig__WEBPACK_IMPORTED_MODULE_1__["default"].hero);
      var inputField = document.querySelector('#player-name');
      inputField.focus();
    }
  }, {
    key: "draw",
    value: function draw() {
      var gameContainer = document.querySelector('.game__container');
      gameContainer.insertAdjacentHTML('beforeend', _modalLogin_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }
  }, {
    key: "insertPlayerImg",
    value: function insertPlayerImg(hero) {
      var modalLoginImg = document.querySelector('.modal__hero-img');
      modalLoginImg.src = hero.sprites.head.path;
    }
  }, {
    key: "remove",
    value: function remove() {
      var modalLogin = document.querySelector('.modal__login');
      modalLogin.remove();
    }
  }, {
    key: "setEventListener",
    value: function setEventListener(func) {
      var button = document.querySelector('#button__login');
      button.addEventListener('click', func);
      window.addEventListener('keydown', ModalLogin.submitInputLogin);
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners(func) {
      var button = document.querySelector('#button__login');
      button.removeEventListener('click', func);
      window.removeEventListener('keydown', ModalLogin.submitInputLogin);
    }
  }, {
    key: "submitInputLogin",
    value: function submitInputLogin(event) {
      var ENTER_KEY = 13;

      if (event.keyCode === ENTER_KEY) {
        document.querySelector('#button__login').click();
      }
    }
  }]);

  return ModalLogin;
}();

/* harmony default export */ __webpack_exports__["default"] = (ModalLogin);

/***/ }),

/***/ "./src/components/modalLogin/modalLogin.template.js":
/*!**********************************************************!*\
  !*** ./src/components/modalLogin/modalLogin.template.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"modal__login\">\n    <div class=\"modal__hero\">\n        <img class=\"modal__hero-img\" alt=\"Hero portret\">\n    </div>\n    <h2 class=\"modal__title\">Choose your name, Hero!</h2>\n    <input class=\"modal__input\" id=\"player-name\" type=\"text\" placeholder=\"Username\" autofocus>\n    <button class=\"modal__button\" id=\"button__login\">Start Game</button>\n\n</section>\n");

/***/ }),

/***/ "./src/components/modalNotification/modalNotification.css":
/*!****************************************************************!*\
  !*** ./src/components/modalNotification/modalNotification.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./modalNotification.css */ "./node_modules/css-loader/index.js!./src/components/modalNotification/modalNotification.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/modalNotification/modalNotification.js":
/*!***************************************************************!*\
  !*** ./src/components/modalNotification/modalNotification.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _modalNotification_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalNotification.template */ "./src/components/modalNotification/modalNotification.template.js");
/* harmony import */ var _modalNotification_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalNotification.css */ "./src/components/modalNotification/modalNotification.css");
/* harmony import */ var _modalNotification_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modalNotification_css__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var ModalNotification =
/*#__PURE__*/
function () {
  function ModalNotification() {
    _classCallCheck(this, ModalNotification);
  }

  _createClass(ModalNotification, null, [{
    key: "showModalNotification",
    value: function showModalNotification(message, time) {
      ModalNotification.draw(message);
      _utils__WEBPACK_IMPORTED_MODULE_0__["default"].pause(time).then(function () {
        ModalNotification.remove();
      });
    }
  }, {
    key: "draw",
    value: function draw(message) {
      var gameContainer = document.querySelector('.game__container');
      gameContainer.insertAdjacentHTML('beforeend', _modalNotification_template__WEBPACK_IMPORTED_MODULE_1__["default"]);
      var modalMessage = document.querySelector('.modal__message');
      modalMessage.innerHTML = message;
    }
  }, {
    key: "remove",
    value: function remove() {
      var modalNotification = document.querySelector('.modal__notification');
      modalNotification.remove();
    }
  }]);

  return ModalNotification;
}();

/* harmony default export */ __webpack_exports__["default"] = (ModalNotification);

/***/ }),

/***/ "./src/components/modalNotification/modalNotification.template.js":
/*!************************************************************************!*\
  !*** ./src/components/modalNotification/modalNotification.template.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"modal__notification\">\n    <span class=\"modal__message\"></span>\n</div>\n");

/***/ }),

/***/ "./src/components/navigationLeft/navigationLeft.css":
/*!**********************************************************!*\
  !*** ./src/components/navigationLeft/navigationLeft.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./navigationLeft.css */ "./node_modules/css-loader/index.js!./src/components/navigationLeft/navigationLeft.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/navigationLeft/navigationLeft.js":
/*!*********************************************************!*\
  !*** ./src/components/navigationLeft/navigationLeft.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigationLeft_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigationLeft.template */ "./src/components/navigationLeft/navigationLeft.template.js");
/* harmony import */ var _navigationLeft_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigationLeft.css */ "./src/components/navigationLeft/navigationLeft.css");
/* harmony import */ var _navigationLeft_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navigationLeft_css__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var NavigationLeft =
/*#__PURE__*/
function () {
  function NavigationLeft() {
    _classCallCheck(this, NavigationLeft);
  }

  _createClass(NavigationLeft, null, [{
    key: "draw",
    value: function draw() {
      var gameContainer = document.querySelector('.game__container');
      gameContainer.insertAdjacentHTML('beforeend', _navigationLeft_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }
  }, {
    key: "remove",
    value: function remove() {
      var leftNav = document.querySelector('.left-nav');
      leftNav.remove();
    }
  }, {
    key: "makeButtonActive",
    value: function makeButtonActive(button) {
      var buttonOn = button;
      buttonOn.dataset.music = 'on';
      buttonOn.classList.add('nav__btn_active');
    }
  }, {
    key: "makeButtonPassive",
    value: function makeButtonPassive(button) {
      var buttonOff = button;
      buttonOff.dataset.music = 'off';
      buttonOff.classList.remove('nav__btn_active');
    }
  }, {
    key: "setMusicControlListener",
    value: function setMusicControlListener(func) {
      var buttonMusic = document.querySelector('#btn_music');
      buttonMusic.addEventListener('click', func);
    }
  }, {
    key: "setExitGameControlListener",
    value: function setExitGameControlListener(func) {
      var buttonExit = document.querySelector('#btn_exit');
      buttonExit.addEventListener('click', func);
    }
  }]);

  return NavigationLeft;
}();

/* harmony default export */ __webpack_exports__["default"] = (NavigationLeft);

/***/ }),

/***/ "./src/components/navigationLeft/navigationLeft.template.js":
/*!******************************************************************!*\
  !*** ./src/components/navigationLeft/navigationLeft.template.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n <nav class=\"left-nav\">\n    <button class=\"nav__button nav__btn\" id=\"btn_music\" data-music=\"off\">\n      <i class=\"fas fa-lg fa-music\"></i>\n    </button>\n    <button class=\"nav__button nav__btn\" id=\"btn_exit\">\n      <i class=\"fas fa-lg fa-sign-out-alt\"></i>\n    </button>\n  </nav>\n");

/***/ }),

/***/ "./src/components/scoreTable/scoreTable.css":
/*!**************************************************!*\
  !*** ./src/components/scoreTable/scoreTable.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./scoreTable.css */ "./node_modules/css-loader/index.js!./src/components/scoreTable/scoreTable.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/scoreTable/scoreTable.js":
/*!*************************************************!*\
  !*** ./src/components/scoreTable/scoreTable.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scoreTable_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scoreTable.template */ "./src/components/scoreTable/scoreTable.template.js");
/* harmony import */ var _gameInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gameInterface */ "./src/gameInterface.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _scoreTable_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scoreTable.css */ "./src/components/scoreTable/scoreTable.css");
/* harmony import */ var _scoreTable_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scoreTable_css__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var ScoreTable =
/*#__PURE__*/
function () {
  function ScoreTable() {
    _classCallCheck(this, ScoreTable);
  }

  _createClass(ScoreTable, null, [{
    key: "initScoreTable",
    value: function initScoreTable() {
      _utils__WEBPACK_IMPORTED_MODULE_2__["default"].pause(1000).then(function () {
        ScoreTable.createScoreTable();
      });
    }
  }, {
    key: "createScoreTable",
    value: function createScoreTable() {
      var RESULTS_NUMBER = 10;
      var gameResults = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].receiveGameResults(RESULTS_NUMBER);
      ScoreTable.draw(gameResults);
      ScoreTable.setEventListener();
    }
  }, {
    key: "draw",
    value: function draw(gameResults) {
      var gameContainer = document.querySelector('.game__container');
      gameContainer.insertAdjacentHTML('beforeend', _scoreTable_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
      var container = document.createDocumentFragment();
      gameResults.forEach(function (elem, index) {
        var tableRow = ScoreTable.createRow(elem, index);
        container.appendChild(tableRow);
      });
      var table = document.querySelector('.score__results');
      table.append(container);
    }
  }, {
    key: "createRow",
    value: function createRow(gameResult, index) {
      var tableRow = document.createElement('tr');
      var position = ScoreTable.createRowElement('td', index + 1);
      var playerName = ScoreTable.createRowElement('td', gameResult.player);
      var level = ScoreTable.createRowElement('td', gameResult.level);
      tableRow.appendChild(position);
      tableRow.appendChild(playerName);
      tableRow.appendChild(level);
      return tableRow;
    }
  }, {
    key: "createRowElement",
    value: function createRowElement(atribute) {
      var innerValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
      var elem = document.createElement(atribute);
      elem.innerHTML = innerValue;
      return elem;
    }
  }, {
    key: "remove",
    value: function remove() {
      var scoreTable = document.querySelector('.score__table');
      ScoreTable.removeEventListeners();
      scoreTable.remove();
    }
  }, {
    key: "setEventListener",
    value: function setEventListener() {
      var exitButton = document.querySelector('#score__exit-game');
      var playAgainButton = document.querySelector('#score__play-again');
      exitButton.addEventListener('click', _gameInterface__WEBPACK_IMPORTED_MODULE_1__["default"].exitGame);
      playAgainButton.addEventListener('click', _gameInterface__WEBPACK_IMPORTED_MODULE_1__["default"].reloadGame);
      window.addEventListener('keydown', ScoreTable.controlScoreTableByKeys);
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      var exitButton = document.querySelector('#score__exit-game');
      var playAgainButton = document.querySelector('#score__play-again');
      exitButton.removeEventListener('click', _gameInterface__WEBPACK_IMPORTED_MODULE_1__["default"].exitGame);
      playAgainButton.removeEventListener('click', _gameInterface__WEBPACK_IMPORTED_MODULE_1__["default"].reloadGame);
      window.removeEventListener('keydown', ScoreTable.controlScoreTableByKeys);
    }
  }, {
    key: "controlScoreTableByKeys",
    value: function controlScoreTableByKeys(event) {
      var ENTER_KEY = 13;
      var LEFT_KEY = 37;
      var RIGHT_KEY = 39;
      var selectedClass = 'selected';
      var listOfButtons = document.querySelectorAll('.modal__button');
      var selectedButton = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].defineSelectedElement(listOfButtons, selectedClass);

      if (selectedButton) {
        if (event.keyCode === ENTER_KEY) {
          selectedButton.click();
        } else if (event.keyCode === LEFT_KEY) {
          _utils__WEBPACK_IMPORTED_MODULE_2__["default"].selectPrevElement(listOfButtons, selectedClass);
        } else if (event.keyCode === RIGHT_KEY) {
          _utils__WEBPACK_IMPORTED_MODULE_2__["default"].selectNextElement(listOfButtons, selectedClass);
        }
      } else {
        _utils__WEBPACK_IMPORTED_MODULE_2__["default"].selectElement(listOfButtons[0], selectedClass);
      }
    }
  }]);

  return ScoreTable;
}();

/* harmony default export */ __webpack_exports__["default"] = (ScoreTable);

/***/ }),

/***/ "./src/components/scoreTable/scoreTable.template.js":
/*!**********************************************************!*\
  !*** ./src/components/scoreTable/scoreTable.template.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"score__table\">\n    <table class=\"score__results\">\n        <caption class='score__header'>Score Table</capture>\n        <tr>\n            <th>Position</th>\n            <th>Player Name</th>\n            <th>Number of Levels</th>\n        </tr>\n        \n    </table>\n    <div class='score__buttons'>\n        <button class='modal__button modal__button_play' id=\"score__play-again\">Play Again</button>\n        <button class='modal__button modal__button_exit' id=\"score__exit-game\">Exit Game</button>\n    </div>\n</section>\n");

/***/ }),

/***/ "./src/components/taskList/taskList.css":
/*!**********************************************!*\
  !*** ./src/components/taskList/taskList.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./taskList.css */ "./node_modules/css-loader/index.js!./src/components/taskList/taskList.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/taskList/taskList.js":
/*!*********************************************!*\
  !*** ./src/components/taskList/taskList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taskList_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskList.template */ "./src/components/taskList/taskList.template.js");
/* harmony import */ var _configs_gameTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configs/gameTasks */ "./src/configs/gameTasks.js");
/* harmony import */ var _magicType_magicType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../magicType/magicType */ "./src/components/magicType/magicType.js");
/* harmony import */ var _tasks_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tasks/task */ "./src/components/tasks/task.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _taskList_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskList.css */ "./src/components/taskList/taskList.css");
/* harmony import */ var _taskList_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_taskList_css__WEBPACK_IMPORTED_MODULE_5__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var TaskList =
/*#__PURE__*/
function () {
  function TaskList() {
    _classCallCheck(this, TaskList);
  }

  _createClass(TaskList, null, [{
    key: "initTaskList",
    value: function initTaskList(event) {
      _utils__WEBPACK_IMPORTED_MODULE_4__["default"].pause(200).then(function () {
        var eventType = event.target.dataset.type;
        TaskList.saveAttackTypeOption(eventType);
        _magicType_magicType__WEBPACK_IMPORTED_MODULE_2__["default"].remove();
        TaskList.createTaskList(eventType);
      });
    }
  }, {
    key: "createTaskList",
    value: function createTaskList(event) {
      TaskList.draw();
      TaskList.defineDamageFieldColor(event);
      TaskList.setEventListener();
    }
  }, {
    key: "saveAttackTypeOption",
    value: function saveAttackTypeOption(attackType) {
      _tasks_task__WEBPACK_IMPORTED_MODULE_3__["default"].attackType = attackType;
    }
  }, {
    key: "saveDamageValueOption",
    value: function saveDamageValueOption(taskDamage) {
      _tasks_task__WEBPACK_IMPORTED_MODULE_3__["default"].taskDamage = taskDamage;
    }
  }, {
    key: "draw",
    value: function draw() {
      var gameContainer = document.querySelector('.game__container');
      gameContainer.insertAdjacentHTML('beforeend', _taskList_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
      var tasks = TaskList.createListOfTasks(_configs_gameTasks__WEBPACK_IMPORTED_MODULE_1__["default"]);
      var tasksList = document.querySelector('.tasks__list');
      tasksList.appendChild(tasks);
    }
  }, {
    key: "createListOfTasks",
    value: function createListOfTasks(gameTasks) {
      var taskNames = Object.keys(gameTasks);
      var container = document.createDocumentFragment();
      taskNames.forEach(function (item) {
        var tasksBlock = TaskList.createSubjectBlock(gameTasks[item]);
        container.appendChild(tasksBlock);
      });
      return container;
    }
  }, {
    key: "createSubjectBlock",
    value: function createSubjectBlock(taskSubject) {
      var tasksContainer = document.createElement('div');
      tasksContainer.classList.add('task__container');
      taskSubject.forEach(function (item) {
        var tasksBlock = TaskList.createTaskIcon(item);
        tasksContainer.appendChild(tasksBlock);
      });
      return tasksContainer;
    }
  }, {
    key: "createTaskIcon",
    value: function createTaskIcon(task) {
      var tasksBlock = document.createElement('div');
      tasksBlock.classList.add('tasks__item');
      tasksBlock.dataset.type = task.type.toLowerCase();
      tasksBlock.dataset.name = task.name.toLowerCase();
      tasksBlock.dataset.damage = task.damage;
      var tasksType = document.createElement('span');
      tasksType.classList.add('task__type');
      tasksType.innerHTML = task.type;
      var tasksDamage = document.createElement('span');
      tasksDamage.classList.add('task__damage');
      tasksDamage.innerHTML = task.damage;
      var tasksName = document.createElement('span');
      tasksName.classList.add('task__name');
      tasksName.innerHTML = task.name;
      var tasksComplexity = document.createElement('span');
      tasksComplexity.classList.add('task__complexity');
      tasksComplexity.innerHTML = "Complexity: ".concat(task.complexity);
      tasksBlock.appendChild(tasksType);
      tasksBlock.appendChild(tasksDamage);
      tasksBlock.appendChild(tasksName);
      tasksBlock.appendChild(tasksComplexity);
      return tasksBlock;
    }
  }, {
    key: "defineDamageFieldColor",
    value: function defineDamageFieldColor(eventType) {
      var elemClass = 'task__damage_attack';
      var sign = '-';

      if (eventType === 'healind') {
        elemClass = 'task__damage_healing';
        sign = '+';
      }

      var demageElems = document.getElementsByClassName('task__damage');
      Array.from(demageElems).forEach(function (element) {
        var elem = element;
        elem.classList.add(elemClass);
        elem.innerHTML = "".concat(sign).concat(elem.innerHTML, "hp");
      });
    }
  }, {
    key: "remove",
    value: function remove() {
      TaskList.removeEventListener();
      var modalLogin = document.querySelector('.tasks');
      modalLogin.remove();
    }
  }, {
    key: "setEventListener",
    value: function setEventListener() {
      var tasksList = document.querySelector('.tasks__list');
      tasksList.addEventListener('click', TaskList.callUserTask);
      var comeBack = document.querySelector('.tasks__back');
      comeBack.addEventListener('click', TaskList.returnToMagicChoose);
      window.addEventListener('keydown', TaskList.controlTaskListByKeys);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener() {
      var tasksList = document.querySelector('.tasks__list');
      tasksList.removeEventListener('click', TaskList.callUserTask);
      var comeBack = document.querySelector('.tasks__back');
      comeBack.removeEventListener('click', TaskList.returnToMagicChoose);
      window.removeEventListener('keydown', TaskList.controlTaskListByKeys);
    }
  }, {
    key: "returnToMagicChoose",
    value: function returnToMagicChoose() {
      TaskList.remove();
      _magicType_magicType__WEBPACK_IMPORTED_MODULE_2__["default"].createMagicType();
    }
  }, {
    key: "controlTaskListByKeys",
    value: function controlTaskListByKeys(event) {
      var ENTER_KEY = 13;
      var LEFT_KEY = 37;
      var RIGHT_KEY = 39;
      var ESCAPE = 27;
      var selectedClass = 'selected';
      var listOfTasks = document.querySelectorAll('.tasks__item');
      var selectedTask = _utils__WEBPACK_IMPORTED_MODULE_4__["default"].defineSelectedElement(listOfTasks, selectedClass);

      if (event.keyCode === ESCAPE) {
        TaskList.returnToMagicChoose();
      }

      if (selectedTask) {
        if (event.keyCode === ENTER_KEY) {
          selectedTask.click();
        } else if (event.keyCode === LEFT_KEY) {
          _utils__WEBPACK_IMPORTED_MODULE_4__["default"].selectPrevElement(listOfTasks, selectedClass);
        } else if (event.keyCode === RIGHT_KEY) {
          _utils__WEBPACK_IMPORTED_MODULE_4__["default"].selectNextElement(listOfTasks, selectedClass);
        }
      } else {
        _utils__WEBPACK_IMPORTED_MODULE_4__["default"].selectElement(listOfTasks[0], selectedClass);
      }
    }
  }, {
    key: "callUserTask",
    value: function callUserTask(event) {
      var target = event.target;

      while (!target.classList.contains('tasks__list')) {
        if (target.classList.contains('tasks__item')) {
          TaskList.remove();
          _tasks_task__WEBPACK_IMPORTED_MODULE_3__["default"].defineChoosenTask(target.dataset.type, target.dataset.name);
          TaskList.saveDamageValueOption(target.dataset.damage);
          return;
        }

        target = target.parentElement;
      }
    }
  }]);

  return TaskList;
}();

/* harmony default export */ __webpack_exports__["default"] = (TaskList);

/***/ }),

/***/ "./src/components/taskList/taskList.template.js":
/*!******************************************************!*\
  !*** ./src/components/taskList/taskList.template.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"tasks\">\n    <h2 class=\"tasks__header\">Choose The Task</h2>\n    <div class=\"tasks__list\">\n    </div>\n    <button class=\"tasks__back\" id=\"tasks__back\">\n        <i class=\"fas fa-arrow-circle-left fa-2x\"></i>\n    </button>\n</section>\n");

/***/ }),

/***/ "./src/components/tasks/english/english.js":
/*!*************************************************!*\
  !*** ./src/components/tasks/english/english.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _listening_listening__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listening/listening */ "./src/components/tasks/english/listening/listening.js");
/* harmony import */ var _mistake_mistake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mistake/mistake */ "./src/components/tasks/english/mistake/mistake.js");
/* harmony import */ var _order_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order/order */ "./src/components/tasks/english/order/order.js");
/* harmony import */ var _translation_translation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translation/translation */ "./src/components/tasks/english/translation/translation.js");
/* harmony import */ var _configs_gameTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../configs/gameTasks */ "./src/configs/gameTasks.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task */ "./src/components/tasks/task.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var English =
/*#__PURE__*/
function () {
  function English() {
    _classCallCheck(this, English);
  }

  _createClass(English, null, [{
    key: "defineTask",
    value: function defineTask(taskName) {
      English.defineChoosenTask(taskName);
    }
  }, {
    key: "defineChoosenTask",
    value: function defineChoosenTask(taskName) {
      var task = English.defineTaskByName(taskName);

      switch (taskName) {
        case 'translation':
          _translation_translation__WEBPACK_IMPORTED_MODULE_3__["default"].createTask(task);
          break;

        case 'find mistake':
          _mistake_mistake__WEBPACK_IMPORTED_MODULE_1__["default"].createTask(task);
          break;

        case 'listening':
          _listening_listening__WEBPACK_IMPORTED_MODULE_6__["default"].createTask(task);
          break;

        case 'words order':
          _order_order__WEBPACK_IMPORTED_MODULE_2__["default"].createTask(task);
          break;

        default:
          _translation_translation__WEBPACK_IMPORTED_MODULE_3__["default"].createTask(task);
      }
    }
  }, {
    key: "defineTaskByName",
    value: function defineTaskByName(taskName) {
      var task = _configs_gameTasks__WEBPACK_IMPORTED_MODULE_4__["default"].english.find(function (item) {
        return item.name.toLowerCase() === taskName;
      });
      return task;
    }
  }, {
    key: "sendAnswerResultBack",
    value: function sendAnswerResultBack(isCorrect) {
      English.removeEventListener();
      _task__WEBPACK_IMPORTED_MODULE_5__["default"].receiveUserAnswerResult(isCorrect);
    }
  }, {
    key: "setEventListener",
    value: function setEventListener(func) {
      var answerButton = document.querySelector('#task_answer');
      answerButton.addEventListener('click', func);
      window.addEventListener('keydown', English.checkInputAnswer);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener() {
      window.removeEventListener('keydown', English.checkInputAnswer);
    }
  }, {
    key: "checkInputAnswer",
    value: function checkInputAnswer(event) {
      var ENTER_KEY = 13;

      if (event.keyCode === ENTER_KEY) {
        document.querySelector('#task_answer').click();
      }
    }
  }]);

  return English;
}();

/* harmony default export */ __webpack_exports__["default"] = (English);

/***/ }),

/***/ "./src/components/tasks/english/listening/listening.css":
/*!**************************************************************!*\
  !*** ./src/components/tasks/english/listening/listening.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./listening.css */ "./node_modules/css-loader/index.js!./src/components/tasks/english/listening/listening.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tasks/english/listening/listening.js":
/*!*************************************************************!*\
  !*** ./src/components/tasks/english/listening/listening.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _listening_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listening.template */ "./src/components/tasks/english/listening/listening.template.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ "./src/utils.js");
/* harmony import */ var _english__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../english */ "./src/components/tasks/english/english.js");
/* harmony import */ var _listening_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listening.css */ "./src/components/tasks/english/listening/listening.css");
/* harmony import */ var _listening_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_listening_css__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Listening =
/*#__PURE__*/
function () {
  function Listening() {
    _classCallCheck(this, Listening);
  }

  _createClass(Listening, null, [{
    key: "createTask",
    value: function createTask(task) {
      var randomTask = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].chooseRandomElem(task.tasks);
      Listening.draw(task.explanation, randomTask);
      var inputField = document.querySelector('#listening__input');
      inputField.focus();
      var checkAnswer = Listening.checkInputAnswer.bind(null, randomTask.answer);
      var playAudio = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].createSound.bind(null, randomTask.variables);
      Listening.setEventListener(checkAnswer, playAudio);
    }
  }, {
    key: "draw",
    value: function draw(explanation) {
      var gameContainer = document.querySelector('.game__container');
      gameContainer.insertAdjacentHTML('beforeend', _listening_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
      var taskExplanation = document.querySelector('.english__explanation');
      taskExplanation.innerHTML = explanation;
    }
  }, {
    key: "setEventListener",
    value: function setEventListener(checkAnswer, playAudio) {
      var answerButton = document.querySelector('#task_answer');
      answerButton.addEventListener('click', checkAnswer);
      var listeningButton = document.querySelector('#listening__button');
      listeningButton.addEventListener('click', playAudio);
      window.addEventListener('keydown', Listening.checkInputKey);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener() {
      window.removeEventListener('keydown', Listening.checkInputKey);
    }
  }, {
    key: "checkInputKey",
    value: function checkInputKey(event) {
      var ENTER_KEY = 13;
      var UP_KEY = 38;
      var DOWN_KEY = 40;
      var selectedClass = 'selected';
      var listeningButton = document.querySelector('#listening__button');
      var inputAnswer = document.querySelector('#listening__input');
      var answerButton = document.querySelector('#task_answer');
      var arrOfElem = [listeningButton, inputAnswer, answerButton];
      var selectedItem = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].defineSelectedElement(arrOfElem, selectedClass);

      if (selectedItem) {
        if (event.keyCode === ENTER_KEY) {
          selectedItem.click();
        } else if (event.keyCode === UP_KEY) {
          _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectPrevElement(arrOfElem, selectedClass);
        } else if (event.keyCode === DOWN_KEY) {
          _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectNextElement(arrOfElem, selectedClass);
        }
      } else {
        _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectElement(arrOfElem[0], selectedClass);
      }
    }
  }, {
    key: "checkInputAnswer",
    value: function checkInputAnswer(rightAnswer) {
      var inputAnswer = document.querySelector('#listening__input').value;
      var answer = inputAnswer.toLowerCase().trim();
      var isCorrect = false;

      if (rightAnswer === answer) {
        isCorrect = true;
      }

      Listening.removeEventListener();
      _english__WEBPACK_IMPORTED_MODULE_2__["default"].sendAnswerResultBack(isCorrect);
    }
  }]);

  return Listening;
}();

/* harmony default export */ __webpack_exports__["default"] = (Listening);

/***/ }),

/***/ "./src/components/tasks/english/listening/listening.template.js":
/*!**********************************************************************!*\
  !*** ./src/components/tasks/english/listening/listening.template.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"task__modal english__listening\">\n    <h2 class=\"english__explanation\"></h2>\n    <div class=\"listening__container\">\n      <button class=\"listening__button\" id=\"listening__button\"><i class=\"fas fa-play\"></i></button>\n      <span class=\"listening__help\">Click for listen</span>\n      <input type=\"text\" class=\"listening__input\" id=\"listening__input\" autofocus>\n    </div>\n    <button id='task_answer' class=\"answer__btn\">Answer</button>\n</section>\n");

/***/ }),

/***/ "./src/components/tasks/english/mistake/mistake.css":
/*!**********************************************************!*\
  !*** ./src/components/tasks/english/mistake/mistake.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./mistake.css */ "./node_modules/css-loader/index.js!./src/components/tasks/english/mistake/mistake.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tasks/english/mistake/mistake.js":
/*!*********************************************************!*\
  !*** ./src/components/tasks/english/mistake/mistake.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mistake_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mistake.template */ "./src/components/tasks/english/mistake/mistake.template.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ "./src/utils.js");
/* harmony import */ var _english__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../english */ "./src/components/tasks/english/english.js");
/* harmony import */ var _mistake_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mistake.css */ "./src/components/tasks/english/mistake/mistake.css");
/* harmony import */ var _mistake_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mistake_css__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Mistake =
/*#__PURE__*/
function () {
  function Mistake() {
    _classCallCheck(this, Mistake);
  }

  _createClass(Mistake, null, [{
    key: "createTask",
    value: function createTask(task) {
      var randomTask = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].chooseRandomElem(task.tasks);
      Mistake.draw(task.explanation, randomTask);
      var checkAnswer = Mistake.checkInputAnswer.bind(null, randomTask.answer);
      Mistake.setEventListener(checkAnswer);
    }
  }, {
    key: "draw",
    value: function draw(explanation, task) {
      var gameContainer = document.querySelector('.game__container');
      gameContainer.insertAdjacentHTML('beforeend', _mistake_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
      var taskExplanation = document.querySelector('.english__explanation');
      taskExplanation.innerHTML = explanation;
      var container = document.createDocumentFragment();
      task.variables.forEach(function (item) {
        var wordLetter = document.createElement('span');
        wordLetter.classList.add('english__letter');
        wordLetter.innerHTML = item;
        container.appendChild(wordLetter);
      });
      var taskContainer = document.querySelector('.mistake__container');
      taskContainer.prepend(container);
    }
  }, {
    key: "setEventListener",
    value: function setEventListener(func) {
      var englishContainer = document.querySelector('.mistake__container');
      englishContainer.addEventListener('click', func);
      window.addEventListener('keydown', Mistake.controlMistakeByKeys);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener() {
      window.removeEventListener('keydown', Mistake.controlMistakeByKeys);
    }
  }, {
    key: "controlMistakeByKeys",
    value: function controlMistakeByKeys(event) {
      var ENTER_KEY = 13;
      var LEFT_KEY = 37;
      var RIGHT_KEY = 39;
      var selectedClass = 'selected';
      var listOfLetters = document.querySelectorAll('.english__letter');
      var selectedLetter = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].defineSelectedElement(listOfLetters, selectedClass);

      if (selectedLetter) {
        if (event.keyCode === ENTER_KEY) {
          selectedLetter.click();
        } else if (event.keyCode === LEFT_KEY) {
          _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectPrevElement(listOfLetters, selectedClass);
        } else if (event.keyCode === RIGHT_KEY) {
          _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectNextElement(listOfLetters, selectedClass);
        }
      } else {
        _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectElement(listOfLetters[0], selectedClass);
      }
    }
  }, {
    key: "checkInputAnswer",
    value: function checkInputAnswer(rightAnswer, event) {
      var target = event.target;
      var isCorrect = false;

      if (target.classList.contains('english__letter')) {
        var answer = target.innerHTML;

        if (answer === rightAnswer) {
          isCorrect = true;
        }

        Mistake.removeEventListener();
        _english__WEBPACK_IMPORTED_MODULE_2__["default"].sendAnswerResultBack(isCorrect);
      }
    }
  }]);

  return Mistake;
}();

/* harmony default export */ __webpack_exports__["default"] = (Mistake);

/***/ }),

/***/ "./src/components/tasks/english/mistake/mistake.template.js":
/*!******************************************************************!*\
  !*** ./src/components/tasks/english/mistake/mistake.template.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"task__modal english__mistake\">\n    <h2 class=\"english__explanation\"></h2>\n    <div class=\"mistake__container\">\n    </div>\n</section>\n");

/***/ }),

/***/ "./src/components/tasks/english/order/order.css":
/*!******************************************************!*\
  !*** ./src/components/tasks/english/order/order.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./order.css */ "./node_modules/css-loader/index.js!./src/components/tasks/english/order/order.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tasks/english/order/order.js":
/*!*****************************************************!*\
  !*** ./src/components/tasks/english/order/order.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/Sortable.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sortablejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _order_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.template */ "./src/components/tasks/english/order/order.template.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils */ "./src/utils.js");
/* harmony import */ var _english__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../english */ "./src/components/tasks/english/english.js");
/* harmony import */ var _order_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order.css */ "./src/components/tasks/english/order/order.css");
/* harmony import */ var _order_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_order_css__WEBPACK_IMPORTED_MODULE_4__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Order =
/*#__PURE__*/
function () {
  function Order() {
    _classCallCheck(this, Order);
  }

  _createClass(Order, null, [{
    key: "createTask",
    value: function createTask(task) {
      var randomTask = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].chooseRandomElem(task.tasks);
      Order.draw(task.explanation, randomTask);
      Order.addSortableBehavior();
      var checkAnswer = Order.checkInputAnswer.bind(null, randomTask.answer);
      _english__WEBPACK_IMPORTED_MODULE_3__["default"].setEventListener(checkAnswer);
    }
  }, {
    key: "draw",
    value: function draw(explanation, task) {
      var gameContainer = document.querySelector('.game__container');
      gameContainer.insertAdjacentHTML('beforeend', _order_template__WEBPACK_IMPORTED_MODULE_1__["default"]);
      var taskExplanation = document.querySelector('.english__explanation');
      taskExplanation.innerHTML = explanation;
      var container = document.createDocumentFragment();
      task.variables.forEach(function (item) {
        var taskItem = document.createElement('div');
        taskItem.classList.add('order__item');
        taskItem.innerHTML = item;
        container.appendChild(taskItem);
      });
      var taskContainer = document.querySelector('.order__container');
      taskContainer.appendChild(container);
    }
  }, {
    key: "addSortableBehavior",
    value: function addSortableBehavior() {
      var sortableContainer = document.querySelector('#order__container');
      sortablejs__WEBPACK_IMPORTED_MODULE_0___default.a.create(sortableContainer, {
        group: 'order__container',
        animation: 100
      });
    }
  }, {
    key: "checkInputAnswer",
    value: function checkInputAnswer(rightAnswer) {
      var inputAnswer = document.querySelector('.order__container');
      var isCorrect = Array.from(inputAnswer.children).every(function (elem, index) {
        return elem.innerHTML === rightAnswer[index];
      });
      _english__WEBPACK_IMPORTED_MODULE_3__["default"].sendAnswerResultBack(isCorrect);
    }
  }]);

  return Order;
}();

/* harmony default export */ __webpack_exports__["default"] = (Order);

/***/ }),

/***/ "./src/components/tasks/english/order/order.template.js":
/*!**************************************************************!*\
  !*** ./src/components/tasks/english/order/order.template.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"task__modal english__order\">\n    <h2 class=\"english__explanation\"></h2>\n    <div class=\"order__container\" id=\"order__container\">\n      \n    </div>\n  \t<button id='task_answer' class=\"answer__btn\">Answer</button>\n</section>\n");

/***/ }),

/***/ "./src/components/tasks/english/translation/translation.css":
/*!******************************************************************!*\
  !*** ./src/components/tasks/english/translation/translation.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./translation.css */ "./node_modules/css-loader/index.js!./src/components/tasks/english/translation/translation.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tasks/english/translation/translation.js":
/*!*****************************************************************!*\
  !*** ./src/components/tasks/english/translation/translation.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translation_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translation.template */ "./src/components/tasks/english/translation/translation.template.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ "./src/utils.js");
/* harmony import */ var _english__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../english */ "./src/components/tasks/english/english.js");
/* harmony import */ var _translation_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translation.css */ "./src/components/tasks/english/translation/translation.css");
/* harmony import */ var _translation_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_translation_css__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Translation =
/*#__PURE__*/
function () {
  function Translation() {
    _classCallCheck(this, Translation);
  }

  _createClass(Translation, null, [{
    key: "createTask",
    value: function createTask(task) {
      var randomTask = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].chooseRandomElem(task.tasks);
      Translation.draw(task.explanation, randomTask);
      var inputField = document.querySelector('#translation__input');
      inputField.focus();
      var checkAnswer = Translation.checkInputAnswer.bind(null, randomTask.answer);
      _english__WEBPACK_IMPORTED_MODULE_2__["default"].setEventListener(checkAnswer);
    }
  }, {
    key: "draw",
    value: function draw(explanation, task) {
      var gameContainer = document.querySelector('.game__container');
      gameContainer.insertAdjacentHTML('beforeend', _translation_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
      var taskExplanation = document.querySelector('.english__explanation');
      taskExplanation.innerHTML = explanation;
      var englishWord = document.querySelector('.english__word');
      englishWord.innerHTML = task.variables;
    }
  }, {
    key: "setEventListener",
    value: function setEventListener(func) {
      var answerButton = document.querySelector('#task_answer');
      answerButton.addEventListener('click', func);
    }
  }, {
    key: "checkInputAnswer",
    value: function checkInputAnswer(answersList) {
      var inputAnswer = document.querySelector('.translation__input').value;
      var answer = inputAnswer.toLowerCase().trim();
      var isCorrect = false;

      if (answersList.includes(answer)) {
        isCorrect = true;
      }

      _english__WEBPACK_IMPORTED_MODULE_2__["default"].sendAnswerResultBack(isCorrect);
    }
  }]);

  return Translation;
}();

/* harmony default export */ __webpack_exports__["default"] = (Translation);

/***/ }),

/***/ "./src/components/tasks/english/translation/translation.template.js":
/*!**************************************************************************!*\
  !*** ./src/components/tasks/english/translation/translation.template.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"task__modal english__translation\">\n    <h2 class=\"english__explanation\"></h2>\n    <div class=\"english__container\">\n      <span class=\"english__word\"></span>\n      <input type=\"text\" class=\"translation__input\" id=\"translation__input\" autofocus>\n    </div>\n    <button id='task_answer' class=\"answer__btn\">Answer</button>\n</section>\n");

/***/ }),

/***/ "./src/components/tasks/geography/attractions/attractions.css":
/*!********************************************************************!*\
  !*** ./src/components/tasks/geography/attractions/attractions.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./attractions.css */ "./node_modules/css-loader/index.js!./src/components/tasks/geography/attractions/attractions.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tasks/geography/attractions/attractions.js":
/*!*******************************************************************!*\
  !*** ./src/components/tasks/geography/attractions/attractions.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attractions_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attractions.template */ "./src/components/tasks/geography/attractions/attractions.template.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ "./src/utils.js");
/* harmony import */ var _geography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geography */ "./src/components/tasks/geography/geography.js");
/* harmony import */ var _attractions_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attractions.css */ "./src/components/tasks/geography/attractions/attractions.css");
/* harmony import */ var _attractions_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_attractions_css__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Attractions =
/*#__PURE__*/
function () {
  function Attractions() {
    _classCallCheck(this, Attractions);
  }

  _createClass(Attractions, null, [{
    key: "createTask",
    value: function createTask(task) {
      var randomTask = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].chooseRandomElem(task.tasks);
      Attractions.draw(task.explanation, randomTask);
      var checkAnswer = Attractions.checkInputAnswer.bind(null, randomTask.answer);
      Attractions.setEventListener(checkAnswer);
    }
  }, {
    key: "draw",
    value: function draw(explanation, task) {
      var gameContainer = document.querySelector('.game__container');
      gameContainer.insertAdjacentHTML('beforeend', _attractions_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
      var taskExplanation = document.querySelector('.geography__explanation');
      taskExplanation.innerHTML = explanation;
      var container = document.createDocumentFragment();
      var attractionsCountry = document.querySelector('.attractions__country');
      attractionsCountry.innerHTML = task.variables[0];
      task.variables[1].forEach(function (item) {
        var answerItem = Attractions.createAnswerItem(item);
        container.appendChild(answerItem);
      });
      var answerContainer = document.querySelector('.attractions__answers');
      answerContainer.prepend(container);
    }
  }, {
    key: "createAnswerItem",
    value: function createAnswerItem(item) {
      var answerItem = document.createElement('label');
      answerItem.classList.add('checkbox__container');
      var answerVariant = document.createElement('span');
      answerVariant.classList.add('answer__variant');
      answerVariant.innerHTML = item;
      var input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      var checkmark = document.createElement('span');
      checkmark.classList.add('checkmark');
      answerItem.appendChild(answerVariant);
      answerItem.appendChild(input);
      answerItem.appendChild(checkmark);
      return answerItem;
    }
  }, {
    key: "setEventListener",
    value: function setEventListener(func) {
      var answerButton = document.querySelector('#task_answer');
      answerButton.addEventListener('click', func);
      window.addEventListener('keydown', Attractions.controlAttractionsByKeys);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener() {
      window.removeEventListener('keydown', Attractions.controlAttractionsByKeys);
    }
  }, {
    key: "controlAttractionsByKeys",
    value: function controlAttractionsByKeys(event) {
      var ENTER_KEY = 13;
      var UP_KEY = 38;
      var DOWN_KEY = 40;
      var selectedClass = 'selected';
      var listOfItems = document.querySelectorAll('.checkbox__container');
      var itemsArr = Array.from(listOfItems);
      var button = document.querySelector('#task_answer');
      itemsArr.push(button);
      var selectedItem = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].defineSelectedElement(itemsArr, selectedClass);

      if (selectedItem) {
        if (event.keyCode === ENTER_KEY) {
          if (selectedItem.classList.contains('checkbox__container')) {
            var checkBox = selectedItem.querySelector('input');
            Attractions.toggleCheckBox(checkBox);
          } else {
            selectedItem.click();
          }
        } else if (event.keyCode === UP_KEY) {
          _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectPrevElement(itemsArr, selectedClass);
        } else if (event.keyCode === DOWN_KEY) {
          _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectNextElement(itemsArr, selectedClass);
        }
      } else {
        _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectElement(itemsArr[0], selectedClass);
      }
    }
  }, {
    key: "toggleCheckBox",
    value: function toggleCheckBox(elem) {
      if (elem.checked) {
        elem.checked = false;
      } else {
        elem.checked = true;
      }
    }
  }, {
    key: "checkInputAnswer",
    value: function checkInputAnswer(rightAnswer) {
      var inputAnswer = document.querySelector('.attractions__answers');
      var answersList = [];
      Array.from(inputAnswer.children).forEach(function (elem) {
        var input = elem.querySelector('input');

        if (input.checked) {
          var answer = elem.querySelector('.answer__variant').innerHTML;
          answersList.push(answer);
        }
      });
      var isCorrect = rightAnswer.every(function (item) {
        return answersList.includes(item);
      });

      if (answersList.length !== rightAnswer.length) {
        isCorrect = false;
      }

      Attractions.removeEventListener();
      _geography__WEBPACK_IMPORTED_MODULE_2__["default"].sendAnswerResultBack(isCorrect);
    }
  }]);

  return Attractions;
}();

/* harmony default export */ __webpack_exports__["default"] = (Attractions);

/***/ }),

/***/ "./src/components/tasks/geography/attractions/attractions.template.js":
/*!****************************************************************************!*\
  !*** ./src/components/tasks/geography/attractions/attractions.template.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"task__modal geography__attractions\">\n    <h2 class=\"geography__explanation\"></h2>\n    <div class=\"attractions__container\">\n        <span class=\"attractions__country\"></span>\n        <div class=\"attractions__answers\"></div>\n    </div>\n    <button id='task_answer' class=\"answer__btn\">Answer</button>\n</section>\n");

/***/ }),

/***/ "./src/components/tasks/geography/capitals/capitals.css":
/*!**************************************************************!*\
  !*** ./src/components/tasks/geography/capitals/capitals.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./capitals.css */ "./node_modules/css-loader/index.js!./src/components/tasks/geography/capitals/capitals.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tasks/geography/capitals/capitals.js":
/*!*************************************************************!*\
  !*** ./src/components/tasks/geography/capitals/capitals.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _capitals_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitals.template */ "./src/components/tasks/geography/capitals/capitals.template.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ "./src/utils.js");
/* harmony import */ var _geography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geography */ "./src/components/tasks/geography/geography.js");
/* harmony import */ var _capitals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./capitals.css */ "./src/components/tasks/geography/capitals/capitals.css");
/* harmony import */ var _capitals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_capitals_css__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Capitals =
/*#__PURE__*/
function () {
  function Capitals() {
    _classCallCheck(this, Capitals);
  }

  _createClass(Capitals, null, [{
    key: "createTask",
    value: function createTask(task) {
      var randomTask = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].chooseRandomElem(task.tasks);
      Capitals.draw(task.explanation, randomTask);
      var checkAnswer = Capitals.checkInputAnswer.bind(null, randomTask.answer);
      Capitals.setEventListener(checkAnswer);
    }
  }, {
    key: "draw",
    value: function draw(explanation, task) {
      var gameContainer = document.querySelector('.game__container');
      gameContainer.insertAdjacentHTML('beforeend', _capitals_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
      var taskExplanation = document.querySelector('.geography__explanation');
      taskExplanation.innerHTML = explanation;
      var container = document.createDocumentFragment();
      var capitalsCity = document.querySelector('.capitals__city');
      capitalsCity.innerHTML = task.variables[0];
      task.variables[1].forEach(function (item) {
        var wordCountry = document.createElement('span');
        wordCountry.classList.add('capitals__item');
        wordCountry.innerHTML = item;
        container.appendChild(wordCountry);
      });
      var taskContainer = document.querySelector('.capitals__answers');
      taskContainer.prepend(container);
    }
  }, {
    key: "setEventListener",
    value: function setEventListener(func) {
      var geographyContainer = document.querySelector('.capitals__answers');
      geographyContainer.addEventListener('click', func);
      window.addEventListener('keydown', Capitals.controlCapitalsByKeys);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener() {
      window.removeEventListener('keydown', Capitals.controlCapitalsByKeys);
    }
  }, {
    key: "controlCapitalsByKeys",
    value: function controlCapitalsByKeys(event) {
      var ENTER_KEY = 13;
      var LEFT_KEY = 37;
      var RIGHT_KEY = 39;
      var selectedClass = 'selected';
      var listOfItems = document.querySelectorAll('.capitals__item');
      var selectedItem = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].defineSelectedElement(listOfItems, selectedClass);

      if (selectedItem) {
        if (event.keyCode === ENTER_KEY) {
          selectedItem.click();
        } else if (event.keyCode === LEFT_KEY) {
          _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectPrevElement(listOfItems, selectedClass);
        } else if (event.keyCode === RIGHT_KEY) {
          _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectNextElement(listOfItems, selectedClass);
        }
      } else {
        _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectElement(listOfItems[0], selectedClass);
      }
    }
  }, {
    key: "checkInputAnswer",
    value: function checkInputAnswer(rightAnswer, event) {
      var target = event.target;
      var isCorrect = false;

      if (target.classList.contains('capitals__item')) {
        var answer = target.innerHTML;

        if (answer === rightAnswer) {
          isCorrect = true;
        }

        Capitals.removeEventListener();
        _geography__WEBPACK_IMPORTED_MODULE_2__["default"].sendAnswerResultBack(isCorrect);
      }
    }
  }]);

  return Capitals;
}();

/* harmony default export */ __webpack_exports__["default"] = (Capitals);

/***/ }),

/***/ "./src/components/tasks/geography/capitals/capitals.template.js":
/*!**********************************************************************!*\
  !*** ./src/components/tasks/geography/capitals/capitals.template.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"task__modal geography__capitals\">\n    <h2 class=\"geography__explanation\"></h2>\n    <div class=\"capitals__container\">\n        <span class=\"capitals__city\"></span>\n        <div class=\"capitals__answers\"></div>\n    </div>\n</section>\n");

/***/ }),

/***/ "./src/components/tasks/geography/geography.js":
/*!*****************************************************!*\
  !*** ./src/components/tasks/geography/geography.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attractions_attractions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attractions/attractions */ "./src/components/tasks/geography/attractions/attractions.js");
/* harmony import */ var _capitals_capitals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capitals/capitals */ "./src/components/tasks/geography/capitals/capitals.js");
/* harmony import */ var _sorting_sorting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sorting/sorting */ "./src/components/tasks/geography/sorting/sorting.js");
/* harmony import */ var _statements_statements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statements/statements */ "./src/components/tasks/geography/statements/statements.js");
/* harmony import */ var _configs_gameTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../configs/gameTasks */ "./src/configs/gameTasks.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task */ "./src/components/tasks/task.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Geography =
/*#__PURE__*/
function () {
  function Geography() {
    _classCallCheck(this, Geography);
  }

  _createClass(Geography, null, [{
    key: "defineTask",
    value: function defineTask(taskName) {
      Geography.defineChoosenTask(taskName);
    }
  }, {
    key: "defineChoosenTask",
    value: function defineChoosenTask(taskName) {
      var task = Geography.defineTaskByName(taskName);

      switch (taskName) {
        case 'capitals':
          _capitals_capitals__WEBPACK_IMPORTED_MODULE_1__["default"].createTask(task);
          break;

        case 'statements':
          _statements_statements__WEBPACK_IMPORTED_MODULE_3__["default"].createTask(task);
          break;

        case 'attractions':
          _attractions_attractions__WEBPACK_IMPORTED_MODULE_0__["default"].createTask(task);
          break;

        case 'sorting':
          _sorting_sorting__WEBPACK_IMPORTED_MODULE_2__["default"].createTask(task);
          break;

        default:
          _capitals_capitals__WEBPACK_IMPORTED_MODULE_1__["default"].createTask(task);
      }
    }
  }, {
    key: "defineTaskByName",
    value: function defineTaskByName(taskName) {
      var task = _configs_gameTasks__WEBPACK_IMPORTED_MODULE_4__["default"].geography.find(function (item) {
        return item.name.toLowerCase() === taskName;
      });
      return task;
    }
  }, {
    key: "sendAnswerResultBack",
    value: function sendAnswerResultBack(isCorrect) {
      _task__WEBPACK_IMPORTED_MODULE_5__["default"].receiveUserAnswerResult(isCorrect);
    }
  }]);

  return Geography;
}();

/* harmony default export */ __webpack_exports__["default"] = (Geography);

/***/ }),

/***/ "./src/components/tasks/geography/sorting/sorting.css":
/*!************************************************************!*\
  !*** ./src/components/tasks/geography/sorting/sorting.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./sorting.css */ "./node_modules/css-loader/index.js!./src/components/tasks/geography/sorting/sorting.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tasks/geography/sorting/sorting.js":
/*!***********************************************************!*\
  !*** ./src/components/tasks/geography/sorting/sorting.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/Sortable.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sortablejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sorting_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sorting.template */ "./src/components/tasks/geography/sorting/sorting.template.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils */ "./src/utils.js");
/* harmony import */ var _geography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../geography */ "./src/components/tasks/geography/geography.js");
/* harmony import */ var _sorting_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sorting.css */ "./src/components/tasks/geography/sorting/sorting.css");
/* harmony import */ var _sorting_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sorting_css__WEBPACK_IMPORTED_MODULE_4__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Sorting =
/*#__PURE__*/
function () {
  function Sorting() {
    _classCallCheck(this, Sorting);
  }

  _createClass(Sorting, null, [{
    key: "createTask",
    value: function createTask(task) {
      var randomTask = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].chooseRandomElem(task.tasks);
      Sorting.draw(task.explanation, randomTask);
      Sorting.addSortableBehavior();
      var checkAnswer = Sorting.checkInputAnswer.bind(null, randomTask.answer);
      Sorting.setEventListener(checkAnswer);
    }
  }, {
    key: "draw",
    value: function draw(explanation, task) {
      var gameContainer = document.querySelector('.game__container');
      gameContainer.insertAdjacentHTML('beforeend', _sorting_template__WEBPACK_IMPORTED_MODULE_1__["default"]);
      var taskExplanation = document.querySelector('.geography__explanation');
      taskExplanation.innerHTML = explanation;
      var container = document.createDocumentFragment();
      task.variables.forEach(function (item) {
        var taskItem = document.createElement('div');
        taskItem.classList.add('sorting__item');
        taskItem.innerHTML = item;
        container.appendChild(taskItem);
      });
      var taskContainer = document.querySelector('.sorting__container');
      taskContainer.appendChild(container);
    }
  }, {
    key: "addSortableBehavior",
    value: function addSortableBehavior() {
      var sortableContainer = document.querySelector('#sorting__container');
      sortablejs__WEBPACK_IMPORTED_MODULE_0___default.a.create(sortableContainer, {
        group: 'sorting__container',
        animation: 100
      });
    }
  }, {
    key: "setEventListener",
    value: function setEventListener(func) {
      var answerButton = document.querySelector('#task_answer');
      answerButton.addEventListener('click', func);
      window.addEventListener('keydown', Sorting.checkInputKey);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener() {
      window.removeEventListener('keydown', Sorting.checkInputKey);
    }
  }, {
    key: "checkInputKey",
    value: function checkInputKey(event) {
      var ENTER_KEY = 13;

      if (event.keyCode === ENTER_KEY) {
        document.querySelector('#task_answer').click();
      }
    }
  }, {
    key: "checkInputAnswer",
    value: function checkInputAnswer(rightAnswer) {
      var inputAnswer = document.querySelector('.sorting__container');
      var isCorrect = Array.from(inputAnswer.children).every(function (elem, index) {
        return elem.innerHTML === rightAnswer[index];
      });
      Sorting.removeEventListener();
      _geography__WEBPACK_IMPORTED_MODULE_3__["default"].sendAnswerResultBack(isCorrect);
    }
  }]);

  return Sorting;
}();

/* harmony default export */ __webpack_exports__["default"] = (Sorting);

/***/ }),

/***/ "./src/components/tasks/geography/sorting/sorting.template.js":
/*!********************************************************************!*\
  !*** ./src/components/tasks/geography/sorting/sorting.template.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"task__modal geography__sorting\">\n  <h2 class=\"geography__explanation\"></h2>\n    <div class=\"sorting__container\" id=\"sorting__container\"></div>\n    <button id='task_answer' class=\"answer__btn\">Answer</button>\n</section>\n");

/***/ }),

/***/ "./src/components/tasks/geography/statements/statements.css":
/*!******************************************************************!*\
  !*** ./src/components/tasks/geography/statements/statements.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./statements.css */ "./node_modules/css-loader/index.js!./src/components/tasks/geography/statements/statements.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tasks/geography/statements/statements.js":
/*!*****************************************************************!*\
  !*** ./src/components/tasks/geography/statements/statements.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _statements_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statements.template */ "./src/components/tasks/geography/statements/statements.template.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ "./src/utils.js");
/* harmony import */ var _geography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geography */ "./src/components/tasks/geography/geography.js");
/* harmony import */ var _statements_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statements.css */ "./src/components/tasks/geography/statements/statements.css");
/* harmony import */ var _statements_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_statements_css__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Statements =
/*#__PURE__*/
function () {
  function Statements() {
    _classCallCheck(this, Statements);
  }

  _createClass(Statements, null, [{
    key: "createTask",
    value: function createTask(task) {
      var randomTask = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].chooseRandomElem(task.tasks);
      Statements.draw(task.explanation, randomTask);
      var checkAnswer = Statements.checkInputAnswer.bind(null, randomTask.answer);
      Statements.setEventListener(checkAnswer);
    }
  }, {
    key: "draw",
    value: function draw(explanation, task) {
      var gameContainer = document.querySelector('.game__container');
      gameContainer.insertAdjacentHTML('beforeend', _statements_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
      var taskExplanation = document.querySelector('.geography__explanation');
      taskExplanation.innerHTML = explanation;
      var statementsSentence = document.querySelector('.statements__sentence');
      statementsSentence.innerHTML = task.variables;
    }
  }, {
    key: "setEventListener",
    value: function setEventListener(func) {
      var answerButton = document.querySelector('#task_answer');
      answerButton.addEventListener('click', func);
      window.addEventListener('keydown', Statements.controlStatementsByKeys);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener() {
      window.removeEventListener('keydown', Statements.controlStatementsByKeys);
    }
  }, {
    key: "controlStatementsByKeys",
    value: function controlStatementsByKeys(event) {
      var ENTER_KEY = 13;
      var UP_KEY = 38;
      var DOWN_KEY = 40;
      var selectedClass = 'selected';
      var listOfItems = document.querySelectorAll('.statements__item');
      var itemsArr = Array.from(listOfItems);
      var button = document.querySelector('#task_answer');
      itemsArr.push(button);
      var selectedItem = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].defineSelectedElement(itemsArr, selectedClass);

      if (selectedItem) {
        if (event.keyCode === ENTER_KEY) {
          if (selectedItem.classList.contains('statements__item')) {
            var checkBox = document.getElementById(selectedItem.htmlFor);
            checkBox.checked = true;
          } else {
            selectedItem.click();
          }
        } else if (event.keyCode === UP_KEY) {
          _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectPrevElement(itemsArr, selectedClass);
        } else if (event.keyCode === DOWN_KEY) {
          _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectNextElement(itemsArr, selectedClass);
        }
      } else {
        _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectElement(itemsArr[0], selectedClass);
      }
    }
  }, {
    key: "checkInputAnswer",
    value: function checkInputAnswer(rightAnswer) {
      var inputAnswer = document.querySelector('#geography__statements_true').checked;
      var isCorrect = false;

      if (inputAnswer === rightAnswer) {
        isCorrect = true;
      }

      Statements.removeEventListener();
      _geography__WEBPACK_IMPORTED_MODULE_2__["default"].sendAnswerResultBack(isCorrect);
    }
  }]);

  return Statements;
}();

/* harmony default export */ __webpack_exports__["default"] = (Statements);

/***/ }),

/***/ "./src/components/tasks/geography/statements/statements.template.js":
/*!**************************************************************************!*\
  !*** ./src/components/tasks/geography/statements/statements.template.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"task__modal geography__statements\">\n    <h2 class=\"geography__explanation\"></h2>\n\t<div class=\"statements__container\">\n\t\t<span class=\"statements__sentence\"></span>\n\t\t<div class=\"statements__answers\">\n\t\t\t<p>\n\t\t\t\t<input type=\"radio\" id=\"geography__statements_true\" name=\"statements-group\">\n\t\t\t\t<label for=\"geography__statements_true\" class=\"statements__item\">True</label>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<input type=\"radio\" id=\"geography__statements_false\" name=\"statements-group\">\n\t\t\t\t<label for=\"geography__statements_false\" class=\"statements__item\">False</label>\n\t\t\t</p>\n\t\t</div>\n\t</div>\n\t<button id='task_answer' class=\"answer__btn\">Answer</button>\n</section>\n");

/***/ }),

/***/ "./src/components/tasks/maths/comparison/comparison.css":
/*!**************************************************************!*\
  !*** ./src/components/tasks/maths/comparison/comparison.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./comparison.css */ "./node_modules/css-loader/index.js!./src/components/tasks/maths/comparison/comparison.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tasks/maths/comparison/comparison.js":
/*!*************************************************************!*\
  !*** ./src/components/tasks/maths/comparison/comparison.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comparison_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comparison.template */ "./src/components/tasks/maths/comparison/comparison.template.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ "./src/utils.js");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../maths */ "./src/components/tasks/maths/maths.js");
/* harmony import */ var _comparison_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comparison.css */ "./src/components/tasks/maths/comparison/comparison.css");
/* harmony import */ var _comparison_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_comparison_css__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Comparison =
/*#__PURE__*/
function () {
  function Comparison() {
    _classCallCheck(this, Comparison);
  }

  _createClass(Comparison, null, [{
    key: "createTask",
    value: function createTask(task) {
      var randomTask = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].chooseRandomElem(task.tasks);
      Comparison.draw(task.explanation, randomTask);
      var inputField = document.querySelector('#maths__input');
      inputField.focus();
      var checkAnswer = Comparison.checkInputAnswer.bind(null, randomTask.answer);
      _maths__WEBPACK_IMPORTED_MODULE_2__["default"].setEventListener(checkAnswer);
    }
  }, {
    key: "draw",
    value: function draw(explanation, task) {
      var gameContainer = document.querySelector('.game__container');
      gameContainer.insertAdjacentHTML('beforeend', _comparison_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
      var taskExplanation = document.querySelector('.maths__explanation');
      taskExplanation.innerHTML = explanation;
      var firstValue = document.querySelector('.maths__variable-one');
      firstValue.innerHTML = task.variables[0];
      var secondValue = document.querySelector('.maths__variable-two');
      secondValue.innerHTML = task.variables[1];
    }
  }, {
    key: "checkInputAnswer",
    value: function checkInputAnswer(answer) {
      var inputAnswer = document.querySelector('#maths__input').value;
      var isCorrect = false;

      if (inputAnswer === answer) {
        isCorrect = true;
      }

      _maths__WEBPACK_IMPORTED_MODULE_2__["default"].sendAnswerResultBack(isCorrect);
    }
  }]);

  return Comparison;
}();

/* harmony default export */ __webpack_exports__["default"] = (Comparison);

/***/ }),

/***/ "./src/components/tasks/maths/comparison/comparison.template.js":
/*!**********************************************************************!*\
  !*** ./src/components/tasks/maths/comparison/comparison.template.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"task__modal maths__comparison\">\n    <h2 class=\"maths__explanation\"></h2>\n    <div class=\"maths__container\">\n      <span class=\"maths__variable maths__variable-one\"></span>\n      <input type=\"text\" id=\"maths__input\" class=\"maths__input\" autofocus/>\n      <span class=\"maths__variable maths__variable-two\"></span>\n    </div>\n    <button id='task_answer' class=\"answer__btn\">Answer</button>\n</section>\n");

/***/ }),

/***/ "./src/components/tasks/maths/constructor/constructor.css":
/*!****************************************************************!*\
  !*** ./src/components/tasks/maths/constructor/constructor.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./constructor.css */ "./node_modules/css-loader/index.js!./src/components/tasks/maths/constructor/constructor.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tasks/maths/constructor/constructor.js":
/*!***************************************************************!*\
  !*** ./src/components/tasks/maths/constructor/constructor.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/Sortable.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sortablejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constructor_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructor.template */ "./src/components/tasks/maths/constructor/constructor.template.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils */ "./src/utils.js");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../maths */ "./src/components/tasks/maths/maths.js");
/* harmony import */ var _constructor_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constructor.css */ "./src/components/tasks/maths/constructor/constructor.css");
/* harmony import */ var _constructor_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_constructor_css__WEBPACK_IMPORTED_MODULE_4__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Constructor =
/*#__PURE__*/
function () {
  function Constructor() {
    _classCallCheck(this, Constructor);
  }

  _createClass(Constructor, null, [{
    key: "createTask",
    value: function createTask(task) {
      var randomTask = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].chooseRandomElem(task.tasks);
      Constructor.draw(task.explanation, randomTask);
      Constructor.addSortableBehavior();
      var checkAnswer = Constructor.checkInputAnswer.bind(null, randomTask.answer);
      _maths__WEBPACK_IMPORTED_MODULE_3__["default"].setEventListener(checkAnswer);
    }
  }, {
    key: "draw",
    value: function draw(explanation, task) {
      var gameContainer = document.querySelector('.game__container');
      gameContainer.insertAdjacentHTML('beforeend', _constructor_template__WEBPACK_IMPORTED_MODULE_1__["default"]);
      var taskExplanation = document.querySelector('.maths__explanation');
      taskExplanation.innerHTML = explanation;
      var container = document.createDocumentFragment();
      task.variables.forEach(function (item) {
        var taskItem = document.createElement('div');
        taskItem.classList.add('constructor__item');
        taskItem.innerHTML = item;
        container.appendChild(taskItem);
      });
      var taskContainer = document.querySelector('.constructor__container');
      taskContainer.appendChild(container);
    }
  }, {
    key: "addSortableBehavior",
    value: function addSortableBehavior() {
      var sortableContainer = document.querySelector('#constructor__container');
      sortablejs__WEBPACK_IMPORTED_MODULE_0___default.a.create(sortableContainer, {
        group: 'constructor__container',
        animation: 100
      });
    }
  }, {
    key: "checkInputAnswer",
    value: function checkInputAnswer(rightAnswer) {
      var inputAnswer = document.querySelector('.constructor__container');
      var isCorrect = rightAnswer.some(function (item) {
        return Array.from(inputAnswer.children).every(function (elem, index) {
          return elem.innerHTML === item[index];
        });
      });
      _maths__WEBPACK_IMPORTED_MODULE_3__["default"].sendAnswerResultBack(isCorrect);
    }
  }]);

  return Constructor;
}();

/* harmony default export */ __webpack_exports__["default"] = (Constructor);

/***/ }),

/***/ "./src/components/tasks/maths/constructor/constructor.template.js":
/*!************************************************************************!*\
  !*** ./src/components/tasks/maths/constructor/constructor.template.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"task__modal maths__constructor\">\n    <h2 class=\"maths__explanation\"></h2>\n    <div class=\"constructor__container\" id=\"constructor__container\"></div>\n  \t<button id='task_answer' class=\"answer__btn\">Answer</button>\n</section>\n");

/***/ }),

/***/ "./src/components/tasks/maths/equation/equation.css":
/*!**********************************************************!*\
  !*** ./src/components/tasks/maths/equation/equation.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./equation.css */ "./node_modules/css-loader/index.js!./src/components/tasks/maths/equation/equation.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tasks/maths/equation/equation.js":
/*!*********************************************************!*\
  !*** ./src/components/tasks/maths/equation/equation.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _equation_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equation.template */ "./src/components/tasks/maths/equation/equation.template.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ "./src/utils.js");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../maths */ "./src/components/tasks/maths/maths.js");
/* harmony import */ var _equation_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equation.css */ "./src/components/tasks/maths/equation/equation.css");
/* harmony import */ var _equation_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_equation_css__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Equation =
/*#__PURE__*/
function () {
  function Equation() {
    _classCallCheck(this, Equation);
  }

  _createClass(Equation, null, [{
    key: "createTask",
    value: function createTask(task) {
      var randomTask = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].generateMathExample();
      Equation.draw(task.explanation, randomTask);
      var inputField = document.querySelector('#maths__input');
      inputField.focus();
      var checkAnswer = Equation.checkInputAnswer.bind(null, randomTask.answer);
      _maths__WEBPACK_IMPORTED_MODULE_2__["default"].setEventListener(checkAnswer);
    }
  }, {
    key: "draw",
    value: function draw(explanation, task) {
      var gameContainer = document.querySelector('.game__container');
      gameContainer.insertAdjacentHTML('beforeend', _equation_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
      var taskExplanation = document.querySelector('.maths__explanation');
      taskExplanation.innerHTML = explanation;
      var mathsExample = document.querySelector('.maths__example');
      mathsExample.innerHTML = task.example;
    }
  }, {
    key: "checkInputAnswer",
    value: function checkInputAnswer(answer) {
      var inputAnswer = +document.querySelector('#maths__input').value;
      var isCorrect = false;

      if (inputAnswer === answer) {
        isCorrect = true;
      }

      _maths__WEBPACK_IMPORTED_MODULE_2__["default"].sendAnswerResultBack(isCorrect);
    }
  }]);

  return Equation;
}();

/* harmony default export */ __webpack_exports__["default"] = (Equation);

/***/ }),

/***/ "./src/components/tasks/maths/equation/equation.template.js":
/*!******************************************************************!*\
  !*** ./src/components/tasks/maths/equation/equation.template.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"task__modal maths__equation\">\n    <h2 class=\"maths__explanation\"></h2>\n    <div class=\"maths__container\">\n      <span class=\"maths__example\"></span>\n      <input type=\"text\" id=\"maths__input\" class=\"maths__input\" autofocus/>\n    </div>\n    <button id='task_answer' class=\"answer__btn\">Answer</button>\n</section>\n");

/***/ }),

/***/ "./src/components/tasks/maths/maths.js":
/*!*********************************************!*\
  !*** ./src/components/tasks/maths/maths.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comparison_comparison__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comparison/comparison */ "./src/components/tasks/maths/comparison/comparison.js");
/* harmony import */ var _equation_equation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equation/equation */ "./src/components/tasks/maths/equation/equation.js");
/* harmony import */ var _sequence_sequence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sequence/sequence */ "./src/components/tasks/maths/sequence/sequence.js");
/* harmony import */ var _constructor_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constructor/constructor */ "./src/components/tasks/maths/constructor/constructor.js");
/* harmony import */ var _configs_gameTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../configs/gameTasks */ "./src/configs/gameTasks.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task */ "./src/components/tasks/task.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Maths =
/*#__PURE__*/
function () {
  function Maths() {
    _classCallCheck(this, Maths);
  }

  _createClass(Maths, null, [{
    key: "defineTask",
    value: function defineTask(taskName) {
      Maths.defineChoosenTask(taskName);
    }
  }, {
    key: "defineChoosenTask",
    value: function defineChoosenTask(taskName) {
      var task = Maths.defineTaskByName(taskName);

      switch (taskName) {
        case 'comparison':
          _comparison_comparison__WEBPACK_IMPORTED_MODULE_0__["default"].createTask(task);
          break;

        case 'equation':
          _equation_equation__WEBPACK_IMPORTED_MODULE_1__["default"].createTask(task);
          break;

        case 'sequence':
          _sequence_sequence__WEBPACK_IMPORTED_MODULE_2__["default"].createTask(task);
          break;

        case 'constructor':
          _constructor_constructor__WEBPACK_IMPORTED_MODULE_3__["default"].createTask(task);
          break;

        default:
          _comparison_comparison__WEBPACK_IMPORTED_MODULE_0__["default"].createTask(task);
      }
    }
  }, {
    key: "defineTaskByName",
    value: function defineTaskByName(taskName) {
      var task = _configs_gameTasks__WEBPACK_IMPORTED_MODULE_4__["default"].maths.find(function (item) {
        return item.name.toLowerCase() === taskName;
      });
      return task;
    }
  }, {
    key: "sendAnswerResultBack",
    value: function sendAnswerResultBack(isCorrect) {
      Maths.removeEventListener();
      _task__WEBPACK_IMPORTED_MODULE_5__["default"].receiveUserAnswerResult(isCorrect);
    }
  }, {
    key: "setEventListener",
    value: function setEventListener(func) {
      var answerButton = document.querySelector('#task_answer');
      answerButton.addEventListener('click', func);
      window.addEventListener('keydown', Maths.checkInputAnswer);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener() {
      window.removeEventListener('keydown', Maths.checkInputAnswer);
    }
  }, {
    key: "checkInputAnswer",
    value: function checkInputAnswer(event) {
      var ENTER_KEY = 13;

      if (event.keyCode === ENTER_KEY) {
        document.querySelector('#task_answer').click();
      }
    }
  }]);

  return Maths;
}();

/* harmony default export */ __webpack_exports__["default"] = (Maths);

/***/ }),

/***/ "./src/components/tasks/maths/sequence/sequence.css":
/*!**********************************************************!*\
  !*** ./src/components/tasks/maths/sequence/sequence.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./sequence.css */ "./node_modules/css-loader/index.js!./src/components/tasks/maths/sequence/sequence.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tasks/maths/sequence/sequence.js":
/*!*********************************************************!*\
  !*** ./src/components/tasks/maths/sequence/sequence.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sequence_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sequence.template */ "./src/components/tasks/maths/sequence/sequence.template.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ "./src/utils.js");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../maths */ "./src/components/tasks/maths/maths.js");
/* harmony import */ var _sequence_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sequence.css */ "./src/components/tasks/maths/sequence/sequence.css");
/* harmony import */ var _sequence_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sequence_css__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Sequence =
/*#__PURE__*/
function () {
  function Sequence() {
    _classCallCheck(this, Sequence);
  }

  _createClass(Sequence, null, [{
    key: "createTask",
    value: function createTask(task) {
      var randomTask = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].chooseRandomElem(task.tasks);
      Sequence.draw(task.explanation, randomTask);
      var inputField = document.querySelector('#maths__input');
      inputField.focus();
      var checkAnswer = Sequence.checkInputAnswer.bind(null, randomTask.answer);
      _maths__WEBPACK_IMPORTED_MODULE_2__["default"].setEventListener(checkAnswer);
    }
  }, {
    key: "draw",
    value: function draw(explanation, task) {
      var gameContainer = document.querySelector('.game__container');
      gameContainer.insertAdjacentHTML('beforeend', _sequence_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
      var taskExplanation = document.querySelector('.maths__explanation');
      taskExplanation.innerHTML = explanation;
      var container = document.createDocumentFragment();
      task.variables.forEach(function (item) {
        var mathsItem = document.createElement('span');
        mathsItem.classList.add('maths__variable');
        mathsItem.innerHTML = item;
        container.appendChild(mathsItem);
      });
      var taskContainer = document.querySelector('.maths__container');
      taskContainer.prepend(container);
    }
  }, {
    key: "checkInputAnswer",
    value: function checkInputAnswer(answer) {
      var inputAnswer = +document.querySelector('#maths__input').value;
      var isCorrect = false;

      if (inputAnswer === answer) {
        isCorrect = true;
      }

      _maths__WEBPACK_IMPORTED_MODULE_2__["default"].sendAnswerResultBack(isCorrect);
    }
  }]);

  return Sequence;
}();

/* harmony default export */ __webpack_exports__["default"] = (Sequence);

/***/ }),

/***/ "./src/components/tasks/maths/sequence/sequence.template.js":
/*!******************************************************************!*\
  !*** ./src/components/tasks/maths/sequence/sequence.template.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"task__modal maths__sequence\">\n    <h2 class=\"maths__explanation\"></h2>\n    <div class=\"maths__container\">\n      <input type=\"text\" id=\"maths__input\" class=\"maths__input\" autofocus/>\n    </div>\n    <button id='task_answer' class=\"answer__btn\">Answer</button>\n</section>\n");

/***/ }),

/***/ "./src/components/tasks/programming/abbreviations/abbreviations.css":
/*!**************************************************************************!*\
  !*** ./src/components/tasks/programming/abbreviations/abbreviations.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./abbreviations.css */ "./node_modules/css-loader/index.js!./src/components/tasks/programming/abbreviations/abbreviations.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tasks/programming/abbreviations/abbreviations.js":
/*!*************************************************************************!*\
  !*** ./src/components/tasks/programming/abbreviations/abbreviations.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abbreviations_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abbreviations.template */ "./src/components/tasks/programming/abbreviations/abbreviations.template.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ "./src/utils.js");
/* harmony import */ var _programming__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../programming */ "./src/components/tasks/programming/programming.js");
/* harmony import */ var _abbreviations_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abbreviations.css */ "./src/components/tasks/programming/abbreviations/abbreviations.css");
/* harmony import */ var _abbreviations_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_abbreviations_css__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Abbreviations =
/*#__PURE__*/
function () {
  function Abbreviations() {
    _classCallCheck(this, Abbreviations);
  }

  _createClass(Abbreviations, null, [{
    key: "createTask",
    value: function createTask(task) {
      var randomTask = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].chooseRandomElem(task.tasks);
      Abbreviations.draw(task.explanation, randomTask);
      var checkAnswer = Abbreviations.checkInputAnswer.bind(null, randomTask.answer);
      Abbreviations.setEventListener(checkAnswer);
    }
  }, {
    key: "draw",
    value: function draw(explanation, task) {
      var gameContainer = document.querySelector('.game__container');
      gameContainer.insertAdjacentHTML('beforeend', _abbreviations_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
      var taskExplanation = document.querySelector('.programming__explanation');
      taskExplanation.innerHTML = explanation;
      var container = document.createDocumentFragment();
      var taskWord = document.querySelector('.abbreviations__word');
      taskWord.innerHTML = task.variables[0];
      task.variables[1].forEach(function (item) {
        var answerItem = document.createElement('span');
        answerItem.classList.add('abbreviations__item');
        answerItem.innerHTML = item;
        container.appendChild(answerItem);
      });
      var taskContainer = document.querySelector('.abbreviations__answers');
      taskContainer.prepend(container);
    }
  }, {
    key: "setEventListener",
    value: function setEventListener(func) {
      var geographyContainer = document.querySelector('.abbreviations__answers');
      geographyContainer.addEventListener('click', func);
      window.addEventListener('keydown', Abbreviations.controlAbbreviationsByKeys);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener() {
      window.removeEventListener('keydown', Abbreviations.controlAbbreviationsByKeys);
    }
  }, {
    key: "controlAbbreviationsByKeys",
    value: function controlAbbreviationsByKeys(event) {
      var ENTER_KEY = 13;
      var UP_KEY = 38;
      var DOWN_KEY = 40;
      var selectedClass = 'selected';
      var listOfItems = document.querySelectorAll('.abbreviations__item');
      var selectedItem = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].defineSelectedElement(listOfItems, selectedClass);

      if (selectedItem) {
        if (event.keyCode === ENTER_KEY) {
          selectedItem.click();
        } else if (event.keyCode === UP_KEY) {
          _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectPrevElement(listOfItems, selectedClass);
        } else if (event.keyCode === DOWN_KEY) {
          _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectNextElement(listOfItems, selectedClass);
        }
      } else {
        _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectElement(listOfItems[0], selectedClass);
      }
    }
  }, {
    key: "checkInputAnswer",
    value: function checkInputAnswer(rightAnswer, event) {
      var target = event.target;
      var isCorrect = false;

      if (target.classList.contains('abbreviations__item')) {
        var answer = target.innerHTML;

        if (answer === rightAnswer) {
          isCorrect = true;
        }

        Abbreviations.removeEventListener();
        _programming__WEBPACK_IMPORTED_MODULE_2__["default"].sendAnswerResultBack(isCorrect);
      }
    }
  }]);

  return Abbreviations;
}();

/* harmony default export */ __webpack_exports__["default"] = (Abbreviations);

/***/ }),

/***/ "./src/components/tasks/programming/abbreviations/abbreviations.template.js":
/*!**********************************************************************************!*\
  !*** ./src/components/tasks/programming/abbreviations/abbreviations.template.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"task__modal programming__abbreviations\">\n    <h2 class=\"programming__explanation\"></h2>\n    <div class=\"abbreviations__container\">\n      <span class=\"abbreviations__word\"></span>\n      <div class=\"abbreviations__answers\"></div>\n    </div>\n</section>\n");

/***/ }),

/***/ "./src/components/tasks/programming/gaps/gaps.css":
/*!********************************************************!*\
  !*** ./src/components/tasks/programming/gaps/gaps.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./gaps.css */ "./node_modules/css-loader/index.js!./src/components/tasks/programming/gaps/gaps.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tasks/programming/gaps/gaps.js":
/*!*******************************************************!*\
  !*** ./src/components/tasks/programming/gaps/gaps.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gaps_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gaps.template */ "./src/components/tasks/programming/gaps/gaps.template.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ "./src/utils.js");
/* harmony import */ var _programming__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../programming */ "./src/components/tasks/programming/programming.js");
/* harmony import */ var _gaps_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gaps.css */ "./src/components/tasks/programming/gaps/gaps.css");
/* harmony import */ var _gaps_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_gaps_css__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Gaps =
/*#__PURE__*/
function () {
  function Gaps() {
    _classCallCheck(this, Gaps);
  }

  _createClass(Gaps, null, [{
    key: "createTask",
    value: function createTask(task) {
      var randomTask = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].chooseRandomElem(task.tasks);
      Gaps.draw(task.explanation, randomTask);
      var inputField = document.querySelector('#gaps__input');
      inputField.focus();
      var checkAnswer = Gaps.checkInputAnswer.bind(null, randomTask.answer);
      Gaps.setEventListener(checkAnswer);
    }
  }, {
    key: "draw",
    value: function draw(explanation, task) {
      var gameContainer = document.querySelector('.game__container');
      gameContainer.insertAdjacentHTML('beforeend', _gaps_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
      var taskExplanation = document.querySelector('.programming__explanation');
      taskExplanation.innerHTML = explanation;
      var firstPart = document.querySelector('.gaps__first-part');
      firstPart.innerHTML = task.variables[0];
      var secondPart = document.querySelector('.gaps__second-part');
      secondPart.innerHTML = task.variables[1];
      var outputPart = document.querySelector('.gaps__output');
      outputPart.innerHTML = task.variables[2];
    }
  }, {
    key: "setEventListener",
    value: function setEventListener(func) {
      var answerButton = document.querySelector('#task_answer');
      answerButton.addEventListener('click', func);
      window.addEventListener('keydown', Gaps.submitInputAnswer);
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      window.removeEventListener('keydown', Gaps.submitInputAnswer);
    }
  }, {
    key: "submitInputAnswer",
    value: function submitInputAnswer(event) {
      var ENTER_KEY = 13;

      if (event.keyCode === ENTER_KEY) {
        document.querySelector('#task_answer').click();
      }
    }
  }, {
    key: "checkInputAnswer",
    value: function checkInputAnswer(rightAnswer) {
      var inputAnswer = document.querySelector('.gaps__input').value;
      var answer = inputAnswer.toLowerCase().trim();
      var isCorrect = false;

      if (rightAnswer === answer) {
        isCorrect = true;
      }

      Gaps.removeEventListeners();
      _programming__WEBPACK_IMPORTED_MODULE_2__["default"].sendAnswerResultBack(isCorrect);
    }
  }]);

  return Gaps;
}();

/* harmony default export */ __webpack_exports__["default"] = (Gaps);

/***/ }),

/***/ "./src/components/tasks/programming/gaps/gaps.template.js":
/*!****************************************************************!*\
  !*** ./src/components/tasks/programming/gaps/gaps.template.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"task__modal programming__gaps\">\n    <h2 class=\"programming__explanation\"></h2>\n    <div class=\"gaps__container\">\n      <code class=\"gaps__value gaps__first-part\"></code>\n      <input type=\"text\" class=\"gaps__input\" id=\"gaps__input\" autofocus>\n      <code class=\"gaps__value gaps__second-part\"></code>\n      <code class=\"gaps__value gaps__output\"></code>\n    </div>\n  \t<button id=\"task_answer\" class=\"answer__btn\">Answer</button>\n</section>\n");

/***/ }),

/***/ "./src/components/tasks/programming/output/output.css":
/*!************************************************************!*\
  !*** ./src/components/tasks/programming/output/output.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./output.css */ "./node_modules/css-loader/index.js!./src/components/tasks/programming/output/output.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tasks/programming/output/output.js":
/*!***********************************************************!*\
  !*** ./src/components/tasks/programming/output/output.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _output_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./output.template */ "./src/components/tasks/programming/output/output.template.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ "./src/utils.js");
/* harmony import */ var _programming__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../programming */ "./src/components/tasks/programming/programming.js");
/* harmony import */ var _output_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./output.css */ "./src/components/tasks/programming/output/output.css");
/* harmony import */ var _output_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_output_css__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Output =
/*#__PURE__*/
function () {
  function Output() {
    _classCallCheck(this, Output);
  }

  _createClass(Output, null, [{
    key: "createTask",
    value: function createTask(task) {
      var randomTask = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].chooseRandomElem(task.tasks);
      Output.draw(task.explanation, randomTask);
      var checkAnswer = Output.checkInputAnswer.bind(null, randomTask.answer);
      Output.setEventListener(checkAnswer);
    }
  }, {
    key: "draw",
    value: function draw(explanation, task) {
      var gameContainer = document.querySelector('.game__container');
      gameContainer.insertAdjacentHTML('beforeend', _output_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
      var taskExplanation = document.querySelector('.programming__explanation');
      taskExplanation.innerHTML = explanation;
      var container = document.createDocumentFragment();
      var taskQuestion = document.querySelector('.output__question');
      taskQuestion.innerHTML = task.variables[0];
      task.variables[1].forEach(function (item) {
        var answerItem = Output.createAnswerItem(item);
        container.appendChild(answerItem);
      });
      var answerContainer = document.querySelector('.output__answers');
      answerContainer.prepend(container);
    }
  }, {
    key: "createAnswerItem",
    value: function createAnswerItem(item) {
      var answerItem = document.createElement('label');
      answerItem.classList.add('checkbox__container');
      var answerVariant = document.createElement('span');
      answerVariant.classList.add('answer__variant');
      answerVariant.innerHTML = item;
      var input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      var checkmark = document.createElement('span');
      checkmark.classList.add('checkmark');
      answerItem.appendChild(answerVariant);
      answerItem.appendChild(input);
      answerItem.appendChild(checkmark);
      return answerItem;
    }
  }, {
    key: "setEventListener",
    value: function setEventListener(func) {
      var answerButton = document.querySelector('#task_answer');
      answerButton.addEventListener('click', func);
      var answerContainer = document.querySelector('.output__answers');
      answerContainer.addEventListener('change', Output.selectOnlyOneElement);
      window.addEventListener('keydown', Output.controlOutputByKeys);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener() {
      window.removeEventListener('keydown', Output.controlOutputByKeys);
    }
  }, {
    key: "controlOutputByKeys",
    value: function controlOutputByKeys(event) {
      var ENTER_KEY = 13;
      var LEFT_KEY = 37;
      var RIGHT_KEY = 39;
      var selectedClass = 'selected';
      var listOfItems = document.querySelectorAll('.checkbox__container');
      var itemsArr = Array.from(listOfItems);
      var button = document.querySelector('#task_answer');
      itemsArr.push(button);
      var selectedItem = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].defineSelectedElement(itemsArr, selectedClass);

      if (selectedItem) {
        if (event.keyCode === ENTER_KEY) {
          if (selectedItem.classList.contains('checkbox__container')) {
            var checkBox = selectedItem.querySelector('input');
            Output.toggleCheckBox(checkBox);
          } else {
            selectedItem.click();
          }
        } else if (event.keyCode === LEFT_KEY) {
          _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectPrevElement(itemsArr, selectedClass);
        } else if (event.keyCode === RIGHT_KEY) {
          _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectNextElement(itemsArr, selectedClass);
        }
      } else {
        _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectElement(itemsArr[0], selectedClass);
      }
    }
  }, {
    key: "toggleCheckBox",
    value: function toggleCheckBox(elem) {
      if (elem.checked) {
        elem.checked = false;
      } else {
        elem.checked = true;
      }
    }
  }, {
    key: "selectOnlyOneElement",
    value: function selectOnlyOneElement(event) {
      var target = event.target;
      var answerContainer = document.querySelector('.output__answers');
      Array.from(answerContainer.children).forEach(function (elem) {
        var input = elem.querySelector('input');
        input.checked = false;
      });
      target.checked = true;
    }
  }, {
    key: "checkInputAnswer",
    value: function checkInputAnswer(rightAnswer) {
      var inputAnswer = document.querySelector('.output__answers');
      var isCorrect = Array.from(inputAnswer.children).some(function (elem) {
        var input = elem.querySelector('input');
        var answer;

        if (input.checked) {
          answer = elem.querySelector('.answer__variant').innerHTML;
        }

        return answer === rightAnswer;
      });
      Output.removeEventListener();
      _programming__WEBPACK_IMPORTED_MODULE_2__["default"].sendAnswerResultBack(isCorrect);
    }
  }]);

  return Output;
}();

/* harmony default export */ __webpack_exports__["default"] = (Output);

/***/ }),

/***/ "./src/components/tasks/programming/output/output.template.js":
/*!********************************************************************!*\
  !*** ./src/components/tasks/programming/output/output.template.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"task__modal programming__output\">\n    <h2 class=\"programming__explanation\"></h2>\n    <div class=\"output__container\">\n      <code class=\"output__question\"></code>\n      <div class=\"output__answers\">\n      \n      </div>\n    </div>\n    <button id='task_answer' class=\"answer__btn\">Answer</button>\n</section>\n");

/***/ }),

/***/ "./src/components/tasks/programming/programming.js":
/*!*********************************************************!*\
  !*** ./src/components/tasks/programming/programming.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abbreviations_abbreviations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abbreviations/abbreviations */ "./src/components/tasks/programming/abbreviations/abbreviations.js");
/* harmony import */ var _gaps_gaps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gaps/gaps */ "./src/components/tasks/programming/gaps/gaps.js");
/* harmony import */ var _output_output__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./output/output */ "./src/components/tasks/programming/output/output.js");
/* harmony import */ var _statements_statements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statements/statements */ "./src/components/tasks/programming/statements/statements.js");
/* harmony import */ var _configs_gameTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../configs/gameTasks */ "./src/configs/gameTasks.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task */ "./src/components/tasks/task.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Programming =
/*#__PURE__*/
function () {
  function Programming() {
    _classCallCheck(this, Programming);
  }

  _createClass(Programming, null, [{
    key: "defineTask",
    value: function defineTask(taskName) {
      Programming.defineChoosenTask(taskName);
    }
  }, {
    key: "defineChoosenTask",
    value: function defineChoosenTask(taskName) {
      var task = Programming.defineTaskByName(taskName);

      switch (taskName) {
        case 'abbreviations':
          _abbreviations_abbreviations__WEBPACK_IMPORTED_MODULE_0__["default"].createTask(task);
          break;

        case 'true/false':
          _statements_statements__WEBPACK_IMPORTED_MODULE_3__["default"].createTask(task);
          break;

        case 'fill the gap':
          _gaps_gaps__WEBPACK_IMPORTED_MODULE_1__["default"].createTask(task);
          break;

        case 'code output':
          _output_output__WEBPACK_IMPORTED_MODULE_2__["default"].createTask(task);
          break;

        default:
          _abbreviations_abbreviations__WEBPACK_IMPORTED_MODULE_0__["default"].createTask(task);
      }
    }
  }, {
    key: "defineTaskByName",
    value: function defineTaskByName(taskName) {
      var task = _configs_gameTasks__WEBPACK_IMPORTED_MODULE_4__["default"].programming.find(function (item) {
        return item.name.toLowerCase() === taskName;
      });
      return task;
    }
  }, {
    key: "sendAnswerResultBack",
    value: function sendAnswerResultBack(isCorrect) {
      _task__WEBPACK_IMPORTED_MODULE_5__["default"].receiveUserAnswerResult(isCorrect);
    }
  }]);

  return Programming;
}();

/* harmony default export */ __webpack_exports__["default"] = (Programming);

/***/ }),

/***/ "./src/components/tasks/programming/statements/statements.css":
/*!********************************************************************!*\
  !*** ./src/components/tasks/programming/statements/statements.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./statements.css */ "./node_modules/css-loader/index.js!./src/components/tasks/programming/statements/statements.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tasks/programming/statements/statements.js":
/*!*******************************************************************!*\
  !*** ./src/components/tasks/programming/statements/statements.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _statements_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statements.template */ "./src/components/tasks/programming/statements/statements.template.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ "./src/utils.js");
/* harmony import */ var _programming__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../programming */ "./src/components/tasks/programming/programming.js");
/* harmony import */ var _statements_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statements.css */ "./src/components/tasks/programming/statements/statements.css");
/* harmony import */ var _statements_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_statements_css__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Statements =
/*#__PURE__*/
function () {
  function Statements() {
    _classCallCheck(this, Statements);
  }

  _createClass(Statements, null, [{
    key: "createTask",
    value: function createTask(task) {
      var randomTask = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].chooseRandomElem(task.tasks);
      Statements.draw(task.explanation, randomTask);
      var checkAnswer = Statements.checkInputAnswer.bind(null, randomTask.answer);
      Statements.setEventListener(checkAnswer);
    }
  }, {
    key: "draw",
    value: function draw(explanation, task) {
      var gameContainer = document.querySelector('.game__container');
      gameContainer.insertAdjacentHTML('beforeend', _statements_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
      var taskExplanation = document.querySelector('.programming__explanation');
      taskExplanation.innerHTML = explanation;
      var statementsSentence = document.querySelector('.statements__sentence');
      statementsSentence.innerHTML = task.variables;
    }
  }, {
    key: "setEventListener",
    value: function setEventListener(func) {
      var answerButton = document.querySelector('#task_answer');
      answerButton.addEventListener('click', func);
      window.addEventListener('keydown', Statements.controlStatementsByKeys);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener() {
      window.removeEventListener('keydown', Statements.controlStatementsByKeys);
    }
  }, {
    key: "controlStatementsByKeys",
    value: function controlStatementsByKeys(event) {
      var ENTER_KEY = 13;
      var LEFT_UP = 38;
      var RIGHT_DOWN = 40;
      var selectedClass = 'selected';
      var listOfItems = document.querySelectorAll('.statements__item');
      var itemsArr = Array.from(listOfItems);
      var button = document.querySelector('#task_answer');
      itemsArr.push(button);
      var selectedItem = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].defineSelectedElement(itemsArr, selectedClass);

      if (selectedItem) {
        if (event.keyCode === ENTER_KEY) {
          if (selectedItem.classList.contains('statements__item')) {
            var checkBox = document.getElementById(selectedItem.htmlFor);
            checkBox.checked = true;
          } else {
            selectedItem.click();
          }
        } else if (event.keyCode === LEFT_UP) {
          _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectPrevElement(itemsArr, selectedClass);
        } else if (event.keyCode === RIGHT_DOWN) {
          _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectNextElement(itemsArr, selectedClass);
        }
      } else {
        _utils__WEBPACK_IMPORTED_MODULE_1__["default"].selectElement(itemsArr[0], selectedClass);
      }
    }
  }, {
    key: "checkInputAnswer",
    value: function checkInputAnswer(rightAnswer) {
      var inputAnswer = document.querySelector('#programming__statements_true').checked;
      var isCorrect = false;

      if (inputAnswer === rightAnswer) {
        isCorrect = true;
      }

      Statements.removeEventListener();
      _programming__WEBPACK_IMPORTED_MODULE_2__["default"].sendAnswerResultBack(isCorrect);
    }
  }]);

  return Statements;
}();

/* harmony default export */ __webpack_exports__["default"] = (Statements);

/***/ }),

/***/ "./src/components/tasks/programming/statements/statements.template.js":
/*!****************************************************************************!*\
  !*** ./src/components/tasks/programming/statements/statements.template.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"task__modal programming__statements\">\n\t<h2 class=\"programming__explanation\"></h2>\n\t<div class=\"statements__container\">\n\t\t<span class=\"statements__sentence\"></span>\n\t\t<div class=\"statements__answers\">\n\t\t\t<p>\n\t\t\t\t<input type=\"radio\" id=\"programming__statements_true\" name=\"statements-group\">\n\t\t\t\t<label for=\"programming__statements_true\" class=\"statements__item\">True</label>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<input type=\"radio\" id=\"programming__statements_false\" name=\"statements-group\">\n\t\t\t\t<label for=\"programming__statements_false\" class=\"statements__item\">False</label>\n\t\t\t</p>\n\t\t</div>\n\t</div>\n\t<button id='task_answer' class=\"answer__btn\">Answer</button>\n</section>\n");

/***/ }),

/***/ "./src/components/tasks/task.js":
/*!**************************************!*\
  !*** ./src/components/tasks/task.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _maths_maths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maths/maths */ "./src/components/tasks/maths/maths.js");
/* harmony import */ var _english_english__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./english/english */ "./src/components/tasks/english/english.js");
/* harmony import */ var _geography_geography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geography/geography */ "./src/components/tasks/geography/geography.js");
/* harmony import */ var _programming_programming__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./programming/programming */ "./src/components/tasks/programming/programming.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _fight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fight */ "./src/fight.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Task =
/*#__PURE__*/
function () {
  function Task() {
    _classCallCheck(this, Task);
  }

  _createClass(Task, null, [{
    key: "defineChoosenTask",
    value: function defineChoosenTask(taskType, taskName) {
      switch (taskType) {
        case 'maths':
          Task.initTask(_maths_maths__WEBPACK_IMPORTED_MODULE_0__["default"], taskName);
          break;

        case 'english':
          Task.initTask(_english_english__WEBPACK_IMPORTED_MODULE_1__["default"], taskName);
          break;

        case 'geography':
          Task.initTask(_geography_geography__WEBPACK_IMPORTED_MODULE_2__["default"], taskName);
          break;

        case 'programming':
          Task.initTask(_programming_programming__WEBPACK_IMPORTED_MODULE_3__["default"], taskName);
          break;

        default:
          Task.initTask(_maths_maths__WEBPACK_IMPORTED_MODULE_0__["default"], taskName);
      }
    }
  }, {
    key: "initTask",
    value: function initTask(task, taskName) {
      _utils__WEBPACK_IMPORTED_MODULE_4__["default"].pause(1000).then(function () {
        task.defineTask(taskName);
      });
    }
  }, {
    key: "remove",
    value: function remove() {
      var modalTask = document.querySelector('.task__modal');
      modalTask.remove();
    }
  }, {
    key: "receiveUserAnswerResult",
    value: function receiveUserAnswerResult(isCorrect) {
      Task.remove();
      _fight__WEBPACK_IMPORTED_MODULE_5__["default"].instance.processAnswerResult(isCorrect, Task.attackType, Task.taskDamage);
    }
  }]);

  return Task;
}();

/* harmony default export */ __webpack_exports__["default"] = (Task);

/***/ }),

/***/ "./src/configs/gameConfig.js":
/*!***********************************!*\
  !*** ./src/configs/gameConfig.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  gameBackground: {
    path: ['./../src/img/backgrounds/background-1.png', './../src/img/backgrounds/background-2.png', './../src/img/backgrounds/background-3.png', './../src/img/backgrounds/background-4.png']
  },
  canvasSize: {
    width: 1200,
    height: 600
  },
  music: {
    path: './../src/audio/music.ogg'
  }
});

/***/ }),

/***/ "./src/configs/gameTasks.js":
/*!**********************************!*\
  !*** ./src/configs/gameTasks.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  maths: [{
    type: 'Maths',
    name: 'Comparison',
    explanation: 'Choose the correct logical operator.',
    complexity: 1,
    damage: 10,
    tasks: [{
      variables: [12, 20],
      answer: '<'
    }, {
      variables: [99, 89],
      answer: '>'
    }, {
      variables: [69, 96],
      answer: '<'
    }]
  }, {
    type: 'Maths',
    name: 'Equation',
    explanation: 'Solve this math example.',
    complexity: 2,
    damage: 20
  }, {
    type: 'Maths',
    name: 'Sequence',
    explanation: 'Continue the sequence.',
    complexity: 3,
    damage: 30,
    tasks: [{
      variables: [10, 12, 14],
      answer: 16
    }, {
      variables: [11, 22, 33],
      answer: 44
    }, {
      variables: [8, 15, 22],
      answer: 29
    }]
  }, {
    type: 'Maths',
    name: 'Constructor',
    explanation: 'Put the parts of the expression in the correct order.',
    complexity: 4,
    damage: 40,
    tasks: [{
      variables: ['+', '12', '=', '14', '2'],
      answer: [['12', '+', '2', '=', '14'], ['2', '+', '12', '=', '14']]
    }, {
      variables: ['=', '25', '64', '-', '39'],
      answer: [['64', '-', '25', '=', '39'], ['64', '-', '39', '=', '25']]
    }, {
      variables: ['12', '=', '5', '*', '60'],
      answer: [['12', '*', '5', '=', '60'], ['5', '*', '12', '=', '60']]
    }]
  }],
  english: [{
    type: 'English',
    name: 'Translation',
    explanation: 'Translate the word into English.',
    complexity: 1,
    damage: 10,
    tasks: [{
      variables: 'слово',
      answer: ['word', 'a word', 'say', 'a say']
    }, {
      variables: 'ловушка',
      answer: ['trap', 'a trap', 'snare', 'a snare', 'hook', 'a hook']
    }, {
      variables: 'эскиз',
      answer: ['sketch', 'a sketch', 'design', 'a design', 'outline', 'an outline']
    }]
  }, {
    type: 'English',
    name: 'Find mistake',
    explanation: 'Find one mistake in the following word.',
    complexity: 2,
    damage: 20,
    tasks: [{
      variables: ['d', 'i', 'r', 'r', 'e', 'c', 't', 'i', 'o', 'n'],
      answer: 'r'
    }, {
      variables: ['a', 'n', 's', 'v', 'e', 'r'],
      answer: 'v'
    }, {
      variables: ['s', 'k', 'h', 'o', 'o', 'l'],
      answer: 'k'
    }]
  }, {
    type: 'English',
    name: 'Listening',
    explanation: 'Write the word you  heard',
    complexity: 3,
    damage: 30,
    tasks: [{
      variables: './../src/audio/english/letter.mp3',
      answer: 'letter'
    }, {
      variables: './../src/audio/english/work.mp3',
      answer: 'work'
    }, {
      variables: './../src/audio/english/programmer.mp3',
      answer: 'programmer'
    }]
  }, {
    type: 'English',
    name: 'Words order',
    explanation: 'Put the words in the correct order to make a sentence.',
    complexity: 4,
    damage: 40,
    tasks: [{
      variables: ['can', 'several', 'She', 'languages', 'speak'],
      answer: ['She', 'can', 'speak', 'several', 'languages']
    }, {
      variables: ['children', 'were', 'happily', 'The', 'playing'],
      answer: ['The', 'children', 'were', 'playing', 'happily']
    }, {
      variables: ['girl', 'dress', 'in', 'is', 'Helen', 'the', 'the', 'red'],
      answer: ['Helen', 'is', 'the', 'girl', 'in', 'the', 'red', 'dress']
    }]
  }],
  geography: [{
    type: 'Geography',
    name: 'Capitals',
    explanation: 'This is the capital of which country?',
    complexity: 1,
    damage: 10,
    tasks: [{
      variables: ['Berlin', ['Germany', 'Canada', 'Russia', 'Belarus']],
      answer: 'Germany'
    }, {
      variables: ['Hanoi', ['Chile', 'Canada', 'Jamaica', 'Vietnam']],
      answer: 'Vietnam'
    }, {
      variables: ['Helsinki', ['Germany', 'Finland', 'Russia', ' Switzerland']],
      answer: 'Finland'
    }]
  }, {
    type: 'Geography',
    name: 'Statements',
    explanation: 'Is this statement correct?',
    complexity: 2,
    damage: 20,
    tasks: [{
      variables: 'Russia spans 11 time zones.',
      answer: true
    }, {
      variables: 'Vatican City is the largest country in the world.',
      answer: false
    }, {
      variables: 'California has more people than all of Canada.',
      answer: true
    }]
  }, {
    type: 'Geography',
    name: 'Attractions',
    explanation: 'What sights belong to the following country?',
    complexity: 3,
    damage: 30,
    tasks: [{
      variables: ['France', ['The Eiffel Tower', 'The Rijksmuseum', 'The Moulin Rouge', 'Cologne Cathedral']],
      answer: ['The Eiffel Tower', 'The Moulin Rouge']
    }, {
      variables: ['The Netherlands', ['The Rijksmuseum', 'Cologne Cathedral', 'Van Gogh Museum', 'The Moulin Rouge']],
      answer: ['The Rijksmuseum', 'Van Gogh Museum']
    }, {
      variables: ['Germany', ['Cologne Cathedral', 'Van Gogh Museum', 'The Brandenburg Gate', 'The Moulin Rouge']],
      answer: ['Cologne Cathedral', 'The Brandenburg Gate']
    }]
  }, {
    type: 'Geography',
    name: 'Sorting',
    explanation: 'Arrange objects by size',
    complexity: 4,
    damage: 40,
    tasks: [{
      variables: ['Africa', 'Australia', 'Antarctica', 'Eurasia'],
      answer: ['Eurasia', 'Africa', 'Antarctica', 'Australia']
    }, {
      variables: ['Canada', 'United States', 'Russia', 'China'],
      answer: ['Russia', 'Canada', 'United States', 'China']
    }, {
      variables: ['The Indian Ocean', 'The Pacific Ocean', 'The Arctic Ocean', 'The Atlantic Ocean'],
      answer: [' The Pacific Ocean', 'The Atlantic Ocean', 'The Indian Ocean', 'The Arctic Ocean']
    }]
  }],
  programming: [{
    type: 'Programming',
    name: 'Abbreviations',
    explanation: 'Choose the correct definition',
    complexity: 1,
    damage: 10,
    tasks: [{
      variables: ['HTML', ['HyperText Markup Language', 'Hyperloop Tunnel Musk\'s Launchm', 'Hover Test Metadata Language', 'Hyperlink Type Multiple Language']],
      answer: 'HyperText Markup Language'
    }, {
      variables: ['JS', ['Junior Script', 'Jungle Script', 'Jealous Spirit', 'Java Script']],
      answer: 'Java Script'
    }, {
      variables: ['CSS', ['Celebrating Senior Surge', 'Code Semantic Style', 'Cascading Style Sheets', 'Clear Server Signal']],
      answer: 'Cascading Style Sheets'
    }]
  }, {
    type: 'Programming',
    name: 'True/False',
    explanation: 'Is this statement correct?',
    complexity: 2,
    damage: 20,
    tasks: [{
      variables: 'JS was invented by Ancient Romans',
      answer: false
    }, {
      variables: 'HTML is the most famous JS framework.',
      answer: false
    }, {
      variables: 'JS is just a web version of Java language.',
      answer: false
    }]
  }, {
    type: 'Programming',
    name: 'Fill the gap',
    explanation: 'Insert the missing function.',
    complexity: 3,
    damage: 30,
    tasks: [{
      variables: ['[].concat(1,2).', '(3);', '//output = 3'],
      answer: 'unshift'
    }, {
      variables: ['"Cat".', '("C", "R");', '//output = "Rat"'],
      answer: 'replace'
    }, {
      variables: ['[1,2,3].', '("");', '//output = "123"'],
      answer: 'join'
    }]
  }, {
    type: 'Programming',
    name: 'Code output',
    explanation: 'What will this code display?',
    complexity: 4,
    damage: 40,
    tasks: [{
      variables: ['alert("1"[0]);', ['0', '1', '2', 'undefined']],
      answer: '1'
    }, {
      variables: ['[].push(1,2).unshift(3).join()', ['3,1', '1,2,3', '3,1,2', 'error']],
      answer: 'error'
    }, {
      variables: ['true + false', ['"truefalse"', '0', '1', 'NaN']],
      answer: '1'
    }]
  }]
});

/***/ }),

/***/ "./src/configs/playerConfig.js":
/*!*************************************!*\
  !*** ./src/configs/playerConfig.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  hero: {
    audio: {
      attack: {
        path: './../src/audio/player_attack.mp3'
      },
      demage: {
        path: './../src/audio/player_damage.mp3'
      },
      healing: {
        path: './../src/audio/player_heal.wav'
      }
    },
    sprites: {
      legRight: {
        path: './../src/img/hero/legs/leg-right.png',
        options: {
          width: 76,
          height: 86,
          x: 50,
          y: 510
        }
      },
      legLeft: {
        path: './../src/img/hero/legs/leg-left.png',
        options: {
          width: 76,
          height: 86,
          x: 120,
          y: 510
        }
      },
      handLeft: {
        path: './../src/img/hero/hands/hand-left.png',
        options: {
          width: 158,
          height: 170,
          x: 140,
          y: 335
        }
      },
      body: {
        path: './../src/img/hero/body/body.png',
        options: {
          width: 190,
          height: 186,
          x: 0,
          y: 350
        }
      },
      head: {
        path: './../src/img/hero/head/head.png',
        options: {
          width: 188,
          height: 184,
          x: 30,
          y: 235
        }
      },
      handRight: {
        path: './../src/img/hero/hands/hand-right.png',
        options: {
          width: 74,
          height: 124,
          x: 30,
          y: 405
        }
      }
    }
  },
  monster: {
    name_1: ['Шкурочафк', 'Могилогной', 'Адорыш', 'Адогной', 'Чернодемон', 'Могилочервь', 'Хмурорыш', 'Черночафк', 'Дуборыш', 'Злослон', 'Огнедемон', 'Хмурочервь', 'Демонотрон', 'Краснотрон', 'Хмурогной', 'Шкурокоп', 'Могилочерт', 'Могилохрум', 'Некрослон', 'Воздухомет', 'Землекол', 'Светорез', 'Дубинозавр', 'Светомонстр', 'Булавотерз', 'Ножетерз', 'Водозавр', 'Топоробур', 'Молотобур', 'Черепомаг', 'Астралокид', 'Светобур', 'Воздухорез', 'Копьебур', 'Экспокид', 'Астраломаг', 'Черепотык', 'Ножебур', 'Мечебур', 'Плотокол', 'Темнокол', 'Плотоед', 'Головолом', 'Булавотерз', 'Копьелом', 'Астралокид', 'Землемах', 'Темнобур', 'Молотозавр', 'Некродемон', 'Мегаужас', 'Шкуромерз', 'Некроцап', 'Рогокоп', 'Плотомаг', 'Костемонстр', 'Костелом', 'Экспокид', 'Темнорез', 'Астралобур', 'Плотокол', 'Топоротерз', 'Палицомаг', 'Костелом', 'Дубинотык', 'Пикомаг', 'Пикотерз', 'Огнекид', 'Мечелом', 'Палицомаг', 'Плотобур', 'Светотерз', 'Копьебур', 'Палицозавр', 'Водомонстр', 'Молотомах', 'Мечемаг', 'Пикомах', 'Молотомонстр', 'Палицолом', 'Копьетык', 'Костебур', 'Головотык', 'Темнолом', 'Демоноужас', 'Мегаед', 'Злослон', 'Могилодемон', 'Некротрон', 'Дуборыш', 'Шкуроцап', 'Смерточафк', 'Рогогной', 'Мегачервь', 'Рогозавр', 'Хмурослон', 'Огнецап', 'Злокоп', 'Роготрон', 'Адопуз', 'Хмуродемон', 'Бякокоп', 'Смертозавр', 'Рогохрум', 'Огнедемон', 'Адослон', 'Чернорыш', 'Адогной', 'Бякохрум', 'Демонохрум', 'Кровомерз', 'Дуботруп', 'Кроворыш', 'Грязетрон', 'Бякоужас', 'Кровоцап', 'Демонотрон', 'Адочерт', 'Кровослон', 'Бякохрум'],
    name_2: ['Движухаотик', 'Светохаос', 'Килотрон', 'Коксотрон', 'Вспыходрыг', 'Яркотрой', 'Неотрой', 'Криотрой', 'Гиперслон', 'Гексоглюк', 'Неотрон', 'Гипертаракан', 'Битотрон', 'Килотаракан', 'Психомуха', 'Трансвирус', 'Коксоноль', 'Цифрозомби', 'Роботаракан', 'Гамманоль', 'Бетасталкер', 'Гаммахаотик', 'Мегавирус', 'Робосталкер', 'Темноглюк', 'Яркотаракан', 'Технокрыл', 'Коксобаг', 'Робозомби', 'Килохаос', 'Трансмуха', 'Килокрыл', 'Диждикрыл', 'Роботрой', 'Рободрыг', 'Киломуха', 'Гексохаотик', 'Гаммаснег', 'Битокрыл', 'Терраслон', 'Коксослон', 'Террахаотик', 'Робослон', 'Психолёт', 'Цифроплыв', 'Альфазомби', 'Бетатаракан', 'Движудрыг', 'Гексоноль', 'Трансглюк', 'Терратрой', 'Гексослон', 'Роботаракан', 'Диждиглюк', 'Битовирус', 'Психотрой', 'Темнозомби', 'Рободрыг', 'Светохаос', 'Вспыхотрон', 'Светохаотик', 'Битотрой', 'Бетабаг', 'Ярконоль', 'Вспыхотрой', 'Рободрыг', 'Гамматрон', 'Светокрыл', 'Бетадрыг', 'Психоновик', 'Психовирус', 'Трансзомби', 'Движуснег', 'Трансвирус', 'Битодрыг', 'Темнохаотик', 'Дельтасталкер', 'Робобаг', 'Движуслон', 'Темнохаотик', 'Гаммадрыг', 'Криобаг', 'Движуновик', 'Бетановик', 'Психоснег', 'Неоплыв', 'Темноновик', 'Бетатрой', 'Гаммалёт', 'Вспыхомуха'],
    name_3: ['Гыгышный', 'Аццкый', 'Пафассный', 'Гламурный', 'Нимецкая', 'Газенвагенскый', 'Пафассный', 'Миталлюгскый', 'Ржачный', 'Падонкаффский', 'Йадовитый', 'Пятибальный', 'Лольный', 'Имошный', 'Анимэшный', 'Албанский', 'Онглискый', 'Ипаццкый', 'Сапожный', 'Онглиский', 'Злобный', 'Сопливый', 'Ужасный', 'Мерзкий', 'Зеленый', 'Плановый', 'Фиолетовый', 'Укуренный', 'Косяковый', 'Оранжевый', 'Косячный', 'Aгрессивный', 'Aзартный', 'Aморальный', 'Безумный', 'Жадный', 'Железный', 'Злой', 'Занудный', 'Коварный', 'Ловкий', 'Наглый', 'Медлительный', 'Осторожный', 'Подозрительный', 'Сумашедший', 'Твердолобы', 'Тупой', 'Тресливый', 'Угрюмый', 'Холодный', 'Цельнометаллический', 'Юродивый', 'Мутный', 'Ловкий', 'Одноглазый', 'Быстрый', 'Пьяный', 'Смертоносный', 'Ловкий', 'Танцующий', 'Черный', 'Дерзкий', 'Бесшумный', 'Ирладский', 'Бешеный ', 'Меткий'],
    audio: {
      attack: {
        path: './../src/audio/monster_attack.wav'
      },
      demage: {
        path: './../src/audio/monster_damage.mp3'
      }
    },
    sprites: {
      handLeft: {
        path: ['./../src/img/monster/hands/hand-1/hand-left.png', './../src/img/monster/hands/hand-2/hand-left.png', './../src/img/monster/hands/hand-3/hand-left.png'],
        options: {
          width: 150,
          height: 70,
          x: 920,
          y: 285
        }
      },
      body: {
        path: ['./../src/img/monster/body/body-1/body.png', './../src/img/monster/body/body-2/body.png', './../src/img/monster/body/body-3/body.png'],
        options: {
          width: 110,
          height: 177,
          x: 1015,
          y: 295
        }
      },
      head: {
        path: ['./../src/img/monster/head/head-1/head1.png', './../src/img/monster/head/head-2/head1.png', './../src/img/monster/head/head-3/head1.png'],
        setOfPath: [['./../src/img/monster/head/head-1/head1.png', './../src/img/monster/head/head-1/head2.png', './../src/img/monster/head/head-1/head3.png'], ['./../src/img/monster/head/head-2/head1.png', './../src/img/monster/head/head-2/head2.png', './../src/img/monster/head/head-2/head3.png'], ['./../src/img/monster/head/head-3/head1.png', './../src/img/monster/head/head-3/head2.png', './../src/img/monster/head/head-3/head3.png']],
        options: {
          width: 185,
          height: 164,
          x: 1000,
          y: 170
        }
      },
      handRight: {
        path: ['./../src/img/monster/hands/hand-1/hand-right.png', './../src/img/monster/hands/hand-2/hand-right.png', './../src/img/monster/hands/hand-3/hand-right.png'],
        options: {
          width: 150,
          height: 70,
          x: 965,
          y: 340
        }
      },
      legRight: {
        path: ['./../src/img/monster/legs/leg-1/leg-right.png', './../src/img/monster/legs/leg-2/leg-right.png', './../src/img/monster/legs/leg-2/leg-right.png'],
        options: {
          width: 79,
          height: 183,
          x: 975,
          y: 415
        }
      },
      legLeft: {
        path: ['./../src/img/monster/legs/leg-1/leg-left.png', './../src/img/monster/legs/leg-2/leg-left.png', './../src/img/monster/legs/leg-3/leg-left.png'],
        options: {
          width: 79,
          height: 183,
          x: 1055,
          y: 415
        }
      }
    }
  }
});

/***/ }),

/***/ "./src/configs/weaponConfig.js":
/*!*************************************!*\
  !*** ./src/configs/weaponConfig.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  heroWeapon: [{
    path: './../src/img/hero/weapon/iceball.png',
    options: {
      width: 100,
      height: 100,
      x: 250,
      y: 350
    }
  }, {
    path: './../src/img/hero/weapon/fireball.png',
    options: {
      width: 120,
      height: 120,
      x: 250,
      y: 350
    }
  }],
  monsterWeapon: [{
    path: './../src/img/monster/weapon/brain.png',
    options: {
      width: 120,
      height: 120,
      x: 890,
      y: 350
    }
  }, {
    path: './../src/img/monster/weapon/arm.png',
    options: {
      width: 65,
      height: 65,
      x: 890,
      y: 350
    }
  }],
  healing: [{
    path: './../src/img/healing/medicine.png',
    options: {
      width: 100,
      height: 100,
      x: 150,
      y: 400
    }
  }, {
    path: './../src/img/healing/remedy.png',
    options: {
      width: 100,
      height: 100,
      x: 150,
      y: 400
    }
  }]
});

/***/ }),

/***/ "./src/fight.js":
/*!**********************!*\
  !*** ./src/fight.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _screens_battleArea_battleArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/battleArea/battleArea */ "./src/screens/battleArea/battleArea.js");
/* harmony import */ var _configs_gameConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configs/gameConfig */ "./src/configs/gameConfig.js");
/* harmony import */ var _configs_playerConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configs/playerConfig */ "./src/configs/playerConfig.js");
/* harmony import */ var _components_fightStatus_fightStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/fightStatus/fightStatus */ "./src/components/fightStatus/fightStatus.js");
/* harmony import */ var _components_magicType_magicType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/magicType/magicType */ "./src/components/magicType/magicType.js");
/* harmony import */ var _gameManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameManager */ "./src/gameManager.js");
/* harmony import */ var _components_modalNotification_modalNotification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modalNotification/modalNotification */ "./src/components/modalNotification/modalNotification.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var Fight =
/*#__PURE__*/
function () {
  function Fight(hero, monster, level) {
    _classCallCheck(this, Fight);

    this.hero = hero;
    this.monster = monster;
    this.level = level;
    this.battleArea = null;
    this.createInstance();
  }

  _createClass(Fight, [{
    key: "createInstance",
    value: function createInstance() {
      Fight.instance = this;
    }
  }, {
    key: "startFight",
    value: function startFight() {
      var _this = this;

      var levelMessage = "Level ".concat(this.level);
      _components_modalNotification_modalNotification__WEBPACK_IMPORTED_MODULE_6__["default"].showModalNotification(levelMessage, 1000);
      this.createBattleArea();
      _utils__WEBPACK_IMPORTED_MODULE_7__["default"].pause(1000).then(function () {
        _this.createPlayer(_this.hero);

        _this.createPlayer(_this.monster);

        _this.startGameLoop();

        _this.requestID = null;
        _components_magicType_magicType__WEBPACK_IMPORTED_MODULE_4__["default"].initMagicType();
      }).then(function () {
        _components_fightStatus_fightStatus__WEBPACK_IMPORTED_MODULE_3__["default"].create(_this.hero, _this.monster, _this.level);
      });
    }
  }, {
    key: "createBattleArea",
    value: function createBattleArea() {
      var width = _configs_gameConfig__WEBPACK_IMPORTED_MODULE_1__["default"].canvasSize.width;
      var height = _configs_gameConfig__WEBPACK_IMPORTED_MODULE_1__["default"].canvasSize.height;
      this.battleArea = new _screens_battleArea_battleArea__WEBPACK_IMPORTED_MODULE_0__["default"](width, height);
      this.battleArea.draw();
    }
  }, {
    key: "createPlayer",
    value: function createPlayer(player) {
      player.draw(this.battleArea.canvasContext);
    }
  }, {
    key: "startGameLoop",
    value: function startGameLoop() {
      var update = this.renderFight.bind(this);

      function frame() {
        update();
        requestAnimationFrame(frame);
      }

      this.requestID = requestAnimationFrame(frame);
    }
  }, {
    key: "renderFight",
    value: function renderFight() {
      this.battleArea.clearBattleArea();
      this.hero.clearPlayer(this.battleArea.canvasContext);
      this.monster.clearPlayer(this.battleArea.canvasContext);
    }
  }, {
    key: "processAnswerResult",
    value: function processAnswerResult(isCorrect, type, value) {
      var _this2 = this;

      var damage = +value;
      var damageToHero = this.monster.generateDamage(value);

      if (isCorrect) {
        if (type === 'attack') {
          this.hero.attackEnemy(this.monster, damage);
          _utils__WEBPACK_IMPORTED_MODULE_7__["default"].createSound(_configs_playerConfig__WEBPACK_IMPORTED_MODULE_2__["default"].hero.audio.attack.path);
        } else {
          this.hero.healYourself(damage);
          _utils__WEBPACK_IMPORTED_MODULE_7__["default"].createSound(_configs_playerConfig__WEBPACK_IMPORTED_MODULE_2__["default"].hero.audio.healing.path);
        }
      } else {
        var answerMessage = 'The answer is wrong.';
        _components_modalNotification_modalNotification__WEBPACK_IMPORTED_MODULE_6__["default"].showModalNotification(answerMessage, 1000);
      }

      _utils__WEBPACK_IMPORTED_MODULE_7__["default"].pause(1000).then(function () {
        _utils__WEBPACK_IMPORTED_MODULE_7__["default"].createSound(_configs_playerConfig__WEBPACK_IMPORTED_MODULE_2__["default"].monster.audio.demage.path);
        _components_fightStatus_fightStatus__WEBPACK_IMPORTED_MODULE_3__["default"].updatePlayersHP(_this2.hero.healse, _this2.monster.healse);
      }).then(function () {
        if (Fight.isPlayerAlive(_this2.monster)) {
          _this2.monster.attackEnemy(_this2.hero, damageToHero);

          _utils__WEBPACK_IMPORTED_MODULE_7__["default"].createSound(_configs_playerConfig__WEBPACK_IMPORTED_MODULE_2__["default"].monster.audio.attack.path);
          _utils__WEBPACK_IMPORTED_MODULE_7__["default"].pause(1000).then(function () {
            _utils__WEBPACK_IMPORTED_MODULE_7__["default"].createSound(_configs_playerConfig__WEBPACK_IMPORTED_MODULE_2__["default"].hero.audio.demage.path);
            _components_fightStatus_fightStatus__WEBPACK_IMPORTED_MODULE_3__["default"].updatePlayersHP(_this2.hero.healse, _this2.monster.healse);
            Fight.defineRoundResult(_this2.hero, _this2.monster, _this2.level);
          });
        } else {
          Fight.defineRoundResult(_this2.hero, _this2.monster, _this2.level);
        }
      });
    }
  }], [{
    key: "isPlayerDie",
    value: function isPlayerDie(player) {
      return player.healse === 0;
    }
  }, {
    key: "isPlayerAlive",
    value: function isPlayerAlive(player) {
      return player.healse > 0;
    }
  }, {
    key: "defineRoundResult",
    value: function defineRoundResult(hero, monster, level) {
      if (Fight.isPlayerDie(hero)) {
        Fight.processHeroDeath(hero, monster, level);
      } else if (Fight.isPlayerDie(monster)) {
        Fight.processMonsterDeath(hero, monster, level);
      } else {
        _components_magicType_magicType__WEBPACK_IMPORTED_MODULE_4__["default"].initMagicType();
      }
    }
  }, {
    key: "processHeroDeath",
    value: function processHeroDeath(hero, monster, level) {
      hero.stopMove();
      hero.showDeathAnimation();
      var looseMessage = 'You lose :(';
      _components_modalNotification_modalNotification__WEBPACK_IMPORTED_MODULE_6__["default"].showModalNotification(looseMessage, 1000);
      _utils__WEBPACK_IMPORTED_MODULE_7__["default"].pause(2000).then(function () {
        Fight.clearPreviousFight(hero, monster);
        _gameManager__WEBPACK_IMPORTED_MODULE_5__["default"].showScoreTable(hero.name, level);
      });
    }
  }, {
    key: "processMonsterDeath",
    value: function processMonsterDeath(hero, monster, level) {
      monster.stopMove();
      monster.showDeathAnimation();
      var winMessage = 'You win :)';
      _components_modalNotification_modalNotification__WEBPACK_IMPORTED_MODULE_6__["default"].showModalNotification(winMessage, 2000);
      _utils__WEBPACK_IMPORTED_MODULE_7__["default"].pause(2000).then(function () {
        Fight.clearPreviousFight(hero, monster);
        _gameManager__WEBPACK_IMPORTED_MODULE_5__["default"].nextLevel(hero, level);
      });
    }
  }, {
    key: "clearPreviousFight",
    value: function clearPreviousFight(hero, monster) {
      cancelAnimationFrame(Fight.instance.requestID);
      _components_fightStatus_fightStatus__WEBPACK_IMPORTED_MODULE_3__["default"].remove();
      _screens_battleArea_battleArea__WEBPACK_IMPORTED_MODULE_0__["default"].remove();
      hero.stopMove();
      monster.stopMove();
    }
  }]);

  return Fight;
}();

/* harmony default export */ __webpack_exports__["default"] = (Fight);

/***/ }),

/***/ "./src/gameInterface.js":
/*!******************************!*\
  !*** ./src/gameInterface.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _screens_gameField_gameField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/gameField/gameField */ "./src/screens/gameField/gameField.js");
/* harmony import */ var _components_modalLogin_modalLogin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modalLogin/modalLogin */ "./src/components/modalLogin/modalLogin.js");
/* harmony import */ var _components_scoreTable_scoreTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/scoreTable/scoreTable */ "./src/components/scoreTable/scoreTable.js");
/* harmony import */ var _components_navigationLeft_navigationLeft__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navigationLeft/navigationLeft */ "./src/components/navigationLeft/navigationLeft.js");
/* harmony import */ var _configs_gameConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configs/gameConfig */ "./src/configs/gameConfig.js");
/* harmony import */ var _gameManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameManager */ "./src/gameManager.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var GameInterface =
/*#__PURE__*/
function () {
  function GameInterface() {
    _classCallCheck(this, GameInterface);
  }

  _createClass(GameInterface, null, [{
    key: "loadGame",
    value: function loadGame() {
      _screens_gameField_gameField__WEBPACK_IMPORTED_MODULE_0__["default"].draw();
      _components_modalLogin_modalLogin__WEBPACK_IMPORTED_MODULE_1__["default"].create();
      _components_navigationLeft_navigationLeft__WEBPACK_IMPORTED_MODULE_3__["default"].draw();
      GameInterface.addListeners();
    }
  }, {
    key: "startGame",
    value: function startGame() {
      var nameInput = document.querySelector('#player-name').value;
      _components_modalLogin_modalLogin__WEBPACK_IMPORTED_MODULE_1__["default"].removeEventListeners(GameInterface.startGame);
      _components_modalLogin_modalLogin__WEBPACK_IMPORTED_MODULE_1__["default"].remove();
      _gameManager__WEBPACK_IMPORTED_MODULE_5__["default"].initFight(nameInput);
      _gameManager__WEBPACK_IMPORTED_MODULE_5__["default"].level = 1;
    }
  }, {
    key: "controlMusic",
    value: function controlMusic() {
      var buttonMusic = document.querySelector('#btn_music');

      if (GameInterface.music) {
        var musicStatus = buttonMusic.dataset.music;

        if (musicStatus === 'off') {
          _components_navigationLeft_navigationLeft__WEBPACK_IMPORTED_MODULE_3__["default"].makeButtonActive(buttonMusic);
          GameInterface.music.play();
        } else {
          _components_navigationLeft_navigationLeft__WEBPACK_IMPORTED_MODULE_3__["default"].makeButtonPassive(buttonMusic);
          GameInterface.music.pause();
        }
      } else {
        GameInterface.music = document.createElement('audio');
        GameInterface.music.src = _configs_gameConfig__WEBPACK_IMPORTED_MODULE_4__["default"].music.path;
        GameInterface.music.loop = true;
        _components_navigationLeft_navigationLeft__WEBPACK_IMPORTED_MODULE_3__["default"].makeButtonActive(buttonMusic);
        GameInterface.music.play();
      }
    }
  }, {
    key: "exitGame",
    value: function exitGame() {
      window.location.href = './../index.html';
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      _components_modalLogin_modalLogin__WEBPACK_IMPORTED_MODULE_1__["default"].setEventListener(GameInterface.startGame);
      _components_navigationLeft_navigationLeft__WEBPACK_IMPORTED_MODULE_3__["default"].setMusicControlListener(GameInterface.controlMusic);
      _components_navigationLeft_navigationLeft__WEBPACK_IMPORTED_MODULE_3__["default"].setExitGameControlListener(GameInterface.exitGame);
    }
  }, {
    key: "reloadGame",
    value: function reloadGame() {
      _components_scoreTable_scoreTable__WEBPACK_IMPORTED_MODULE_2__["default"].remove();
      _components_modalLogin_modalLogin__WEBPACK_IMPORTED_MODULE_1__["default"].create();
      GameInterface.addListeners();
    }
  }]);

  return GameInterface;
}();

/* harmony default export */ __webpack_exports__["default"] = (GameInterface);

/***/ }),

/***/ "./src/gameManager.js":
/*!****************************!*\
  !*** ./src/gameManager.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_scoreTable_scoreTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/scoreTable/scoreTable */ "./src/components/scoreTable/scoreTable.js");
/* harmony import */ var _configs_playerConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configs/playerConfig */ "./src/configs/playerConfig.js");
/* harmony import */ var _screens_gameField_gameField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/gameField/gameField */ "./src/screens/gameField/gameField.js");
/* harmony import */ var _players_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players/hero */ "./src/players/hero.js");
/* harmony import */ var _players_monster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./players/monster */ "./src/players/monster.js");
/* harmony import */ var _fight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fight */ "./src/fight.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var GameManager =
/*#__PURE__*/
function () {
  function GameManager() {
    _classCallCheck(this, GameManager);
  }

  _createClass(GameManager, null, [{
    key: "initFight",
    value: function initFight(heroName) {
      var hero = GameManager.generateHero(heroName);
      var monsterName = GameManager.generateMonsterName();
      var monster = GameManager.generateMonster(monsterName);
      new _fight__WEBPACK_IMPORTED_MODULE_5__["default"](hero, monster, 1).startFight();
    }
  }, {
    key: "generateHero",
    value: function generateHero(name) {
      return new _players_hero__WEBPACK_IMPORTED_MODULE_3__["default"](name);
    }
  }, {
    key: "generateMonster",
    value: function generateMonster(name) {
      return new _players_monster__WEBPACK_IMPORTED_MODULE_4__["default"](name);
    }
  }, {
    key: "generateMonsterName",
    value: function generateMonsterName() {
      var firstNamePart = _utils__WEBPACK_IMPORTED_MODULE_6__["default"].chooseRandomElem(_configs_playerConfig__WEBPACK_IMPORTED_MODULE_1__["default"].monster.name_1);
      var secondNamePart = _utils__WEBPACK_IMPORTED_MODULE_6__["default"].chooseRandomElem(_configs_playerConfig__WEBPACK_IMPORTED_MODULE_1__["default"].monster.name_2);
      var thirdNamePart = _utils__WEBPACK_IMPORTED_MODULE_6__["default"].chooseRandomElem(_configs_playerConfig__WEBPACK_IMPORTED_MODULE_1__["default"].monster.name_3);
      return "".concat(firstNamePart, " ").concat(secondNamePart, " ").concat(thirdNamePart);
    }
  }, {
    key: "nextLevel",
    value: function nextLevel(hero, prevLevel) {
      var monsterName = GameManager.generateMonsterName();
      var monster = GameManager.generateMonster(monsterName);
      var nextLevel = prevLevel + 1;
      hero.restoreHealse();
      new _fight__WEBPACK_IMPORTED_MODULE_5__["default"](hero, monster, nextLevel).startFight();
      _screens_gameField_gameField__WEBPACK_IMPORTED_MODULE_2__["default"].changeBackground();
    }
  }, {
    key: "finishGame",
    value: function finishGame() {
      window.location.href = './../index.html';
    }
  }, {
    key: "showScoreTable",
    value: function showScoreTable(playerName, levelNumber) {
      _utils__WEBPACK_IMPORTED_MODULE_6__["default"].saveGameResult(playerName, levelNumber);
      _components_scoreTable_scoreTable__WEBPACK_IMPORTED_MODULE_0__["default"].initScoreTable();
    }
  }]);

  return GameManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (GameManager);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gameInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameInterface */ "./src/gameInterface.js");



window.onload = function loader() {
  _gameInterface__WEBPACK_IMPORTED_MODULE_1__["default"].loadGame();
};

/***/ }),

/***/ "./src/players/attack.js":
/*!*******************************!*\
  !*** ./src/players/attack.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Attack =
/*#__PURE__*/
function () {
  function Attack(context, direction) {
    _classCallCheck(this, Attack);

    this.context = context;
    this.weaponImg = null;
    this.x = null;
    this.y = null;
    this.width = null;
    this.height = null;
    this.angle = 0;
    this.direction = direction;
    this.requestID = null;
    this.attackTime = 1000;
  }

  _createClass(Attack, [{
    key: "drawAttack",
    value: function drawAttack(weapon) {
      this.crateWeapon(weapon);
      this.doAnimate(this.attackTime, this.updateAttack);
    }
  }, {
    key: "drawHealing",
    value: function drawHealing(weapon) {
      this.crateWeapon(weapon);
      this.doAnimate(this.attackTime, this.updateHealing);
    }
  }, {
    key: "crateWeapon",
    value: function crateWeapon(weapon) {
      this.weaponImg = new Image();
      this.weaponImg.src = weapon.path;
      this.x = weapon.options.x;
      this.y = weapon.options.y;
      this.width = weapon.options.width;
      this.height = weapon.options.height;
    }
  }, {
    key: "clearWeapon",
    value: function clearWeapon() {
      this.context.save();
      this.context.translate(this.x, this.y);
      this.context.rotate(this.angle);
      var centerY = this.width / -2;
      var centerX = this.height / -2;
      this.context.drawImage(this.weaponImg, centerY, centerX, this.width, this.height);
      this.context.restore();
    }
  }, {
    key: "updateAttack",
    value: function updateAttack() {
      this.angle += 10 * Math.PI / 180;

      if (this.direction) {
        this.x += 12;
      } else {
        this.x -= 12;
      }

      this.width += 1;
      this.height += 1;
      this.clearWeapon();
    }
  }, {
    key: "updateHealing",
    value: function updateHealing() {
      this.angle += 5 * Math.PI / 180;
      this.width += 2;
      this.height += 2;
      this.clearWeapon();
    }
  }, {
    key: "doAnimate",
    value: function doAnimate(time, animationType) {
      var animation = animationType.bind(this);
      var requestID;

      function frame() {
        animation();
        requestID = requestAnimationFrame(frame);
      }

      requestID = requestAnimationFrame(frame);
      _utils__WEBPACK_IMPORTED_MODULE_0__["default"].pause(time).then(function () {
        cancelAnimationFrame(requestID);
      });
    }
  }]);

  return Attack;
}();

/* harmony default export */ __webpack_exports__["default"] = (Attack);

/***/ }),

/***/ "./src/players/hero.js":
/*!*****************************!*\
  !*** ./src/players/hero.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/players/player.js");
/* harmony import */ var _configs_playerConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs/playerConfig */ "./src/configs/playerConfig.js");
/* harmony import */ var _configs_weaponConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs/weaponConfig */ "./src/configs/weaponConfig.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _attack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attack */ "./src/players/attack.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Hero =
/*#__PURE__*/
function (_Player) {
  _inherits(Hero, _Player);

  function Hero(name) {
    _classCallCheck(this, Hero);

    return _possibleConstructorReturn(this, _getPrototypeOf(Hero).call(this, name));
  }

  _createClass(Hero, [{
    key: "draw",
    value: function draw(context) {
      this.context = context;
      this.createBodyParts();
      this.startMove();
    }
  }, {
    key: "createBodyParts",
    value: function createBodyParts() {
      var heroParts = _configs_playerConfig__WEBPACK_IMPORTED_MODULE_1__["default"].hero.sprites;

      for (var part in heroParts) {
        if (Object.prototype.hasOwnProperty.call(heroParts, part)) {
          this.bodyParts[part] = Hero.createImage(heroParts[part]);
        }
      }
    }
  }, {
    key: "restoreHealse",
    value: function restoreHealse() {
      this.healse = 100;
    }
  }, {
    key: "moveBodyParts",
    value: function moveBodyParts() {
      this.moveHead();
      this.moveHand('handRight');
      this.moveHand('handLeft');
      this.moveLeg('legRight');
      this.moveLeg('legLeft');
    }
  }, {
    key: "showAttackAnimation",
    value: function showAttackAnimation() {
      var attack = new _attack__WEBPACK_IMPORTED_MODULE_4__["default"](this.context, true);
      var weapon = _utils__WEBPACK_IMPORTED_MODULE_3__["default"].chooseRandomElem(_configs_weaponConfig__WEBPACK_IMPORTED_MODULE_2__["default"].heroWeapon);
      attack.drawAttack(weapon);
    }
  }, {
    key: "showHealingAnimation",
    value: function showHealingAnimation() {
      var attack = new _attack__WEBPACK_IMPORTED_MODULE_4__["default"](this.context);
      var weapon = _utils__WEBPACK_IMPORTED_MODULE_3__["default"].chooseRandomElem(_configs_weaponConfig__WEBPACK_IMPORTED_MODULE_2__["default"].healing);
      attack.drawHealing(weapon);
    }
  }], [{
    key: "createImage",
    value: function createImage(params) {
      var bodyPart = {};
      var imgElem = new Image();
      imgElem.src = params.path;
      bodyPart.img = imgElem;
      var _params$options = params.options,
          x = _params$options.x,
          y = _params$options.y,
          width = _params$options.width,
          height = _params$options.height;
      bodyPart.options = {
        x: x,
        y: y,
        width: width,
        height: height
      };
      return bodyPart;
    }
  }]);

  return Hero;
}(_player__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/players/monster.js":
/*!********************************!*\
  !*** ./src/players/monster.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/players/player.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _attack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attack */ "./src/players/attack.js");
/* harmony import */ var _configs_weaponConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs/weaponConfig */ "./src/configs/weaponConfig.js");
/* harmony import */ var _configs_playerConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configs/playerConfig */ "./src/configs/playerConfig.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Monster =
/*#__PURE__*/
function (_Player) {
  _inherits(Monster, _Player);

  function Monster(name) {
    var _this;

    _classCallCheck(this, Monster);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Monster).call(this, name));
    _this.headSprites = null;
    _this.MIN_DAMAGE = 1;
    return _this;
  }

  _createClass(Monster, [{
    key: "draw",
    value: function draw(context) {
      this.context = context;
      this.createBodyParts();
      this.startMove();
      this.headSprites = this.defineHeadSprite();
    }
  }, {
    key: "generateDamage",
    value: function generateDamage(value) {
      return _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getRandonValue(this.MIN_DAMAGE, value);
    }
  }, {
    key: "createBodyParts",
    value: function createBodyParts() {
      var monsterParts = _configs_playerConfig__WEBPACK_IMPORTED_MODULE_4__["default"].monster.sprites;

      for (var part in monsterParts) {
        if (Object.prototype.hasOwnProperty.call(monsterParts, part)) {
          this.bodyParts[part] = Monster.createImage(monsterParts[part]);
        }
      }
    }
  }, {
    key: "defineHeadSprite",
    value: function defineHeadSprite() {
      var arrOfSets = _configs_playerConfig__WEBPACK_IMPORTED_MODULE_4__["default"].monster.sprites.head.setOfPath;
      var currentImg = this.bodyParts.head.img.src;
      var partOfUrl = currentImg.match(/(\/([a-z]+-?\d+))+.png$/);
      var set = arrOfSets.find(function (item) {
        return item.find(function (elem) {
          return elem.endsWith(partOfUrl[0]);
        });
      });
      return set;
    }
  }, {
    key: "moveMouth",
    value: function moveMouth() {
      var imgElem = new Image();
      var imgNumber = 0;

      if (Math.abs(this.moveValue) === 2) {
        imgNumber = 1;
      }

      imgElem.src = this.headSprites[imgNumber];
      this.bodyParts.head.img = imgElem;
    }
  }, {
    key: "moveBodyParts",
    value: function moveBodyParts() {
      this.moveHead();
      this.moveMouth();
      this.moveHand('handRight');
      this.moveHand('handLeft');
      this.moveLeg('legRight');
      this.moveLeg('legLeft');
    }
  }, {
    key: "showAttackAnimation",
    value: function showAttackAnimation() {
      var attack = new _attack__WEBPACK_IMPORTED_MODULE_2__["default"](this.context, false);
      var weapon = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].chooseRandomElem(_configs_weaponConfig__WEBPACK_IMPORTED_MODULE_3__["default"].monsterWeapon);
      attack.drawAttack(weapon);
    }
  }], [{
    key: "createImage",
    value: function createImage(params) {
      var bodyPart = {};
      var imgElem = new Image();
      imgElem.src = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].chooseRandomElem(params.path);
      bodyPart.img = imgElem;
      var _params$options = params.options,
          x = _params$options.x,
          y = _params$options.y,
          width = _params$options.width,
          height = _params$options.height;
      bodyPart.options = {
        x: x,
        y: y,
        width: width,
        height: height
      };
      return bodyPart;
    }
  }]);

  return Monster;
}(_player__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Monster);

/***/ }),

/***/ "./src/players/player.js":
/*!*******************************!*\
  !*** ./src/players/player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Player =
/*#__PURE__*/
function () {
  function Player(name) {
    _classCallCheck(this, Player);

    this.name = name || 'Unknown Player';
    this.healse = 100;
    this.bodyParts = {};
    this.moveValue = 0;
    this.moveUp = true;
    this.amplitude = 2;
    this.intervalID = null;
    this.context = null;
  }

  _createClass(Player, [{
    key: "clearPlayer",
    value: function clearPlayer() {
      for (var part in this.bodyParts) {
        if (Object.prototype.hasOwnProperty.call(this.bodyParts, part)) {
          var partImg = this.bodyParts[part].img;
          var params = this.bodyParts[part].options;
          this.context.drawImage(partImg, params.x, params.y, params.width, params.height);
        }
      }
    }
  }, {
    key: "updatePlayer",
    value: function updatePlayer(amplitude) {
      if (this.moveUp) {
        this.moveValue += 1;

        if (this.moveValue >= amplitude) {
          this.moveUp = false;
        }
      } else {
        this.moveValue -= 1;

        if (this.moveValue <= -amplitude) {
          this.moveUp = true;
        }
      }

      this.moveBodyParts();
    }
  }, {
    key: "startMove",
    value: function startMove() {
      this.intervalID = setInterval(this.updatePlayer.bind(this, this.amplitude), 140);
    }
  }, {
    key: "stopMove",
    value: function stopMove() {
      clearInterval(this.intervalID);
    }
  }, {
    key: "moveHand",
    value: function moveHand(hand) {
      var handCoords = this.bodyParts[hand].options;

      if (hand === 'handRight') {
        handCoords.y -= this.moveValue;
        handCoords.x -= this.moveValue;
      } else {
        handCoords.y += this.moveValue;
        handCoords.x += this.moveValue;
      }
    }
  }, {
    key: "moveHead",
    value: function moveHead() {
      var headCoords = this.bodyParts.head.options;
      headCoords.x += this.moveValue;
    }
  }, {
    key: "moveLeg",
    value: function moveLeg(leg) {
      var legCoords = this.bodyParts[leg].options;

      if (leg === 'legRight') {
        legCoords.y -= this.moveValue;
      } else {
        legCoords.y += this.moveValue;
      }
    }
  }, {
    key: "attackEnemy",
    value: function attackEnemy(person, damage) {
      var enemy = person;
      enemy.healse -= damage;

      if (enemy.healse < 0) {
        enemy.healse = 0;
      }

      this.showAttackAnimation(this.context);
    }
  }, {
    key: "healYourself",
    value: function healYourself(recovery) {
      this.healse = this.healse + recovery;

      if (this.healse > 100) {
        this.healse = 100;
      }

      this.showHealingAnimation();
    }
  }, {
    key: "showDeathAnimation",
    value: function showDeathAnimation() {
      var intervalID = setInterval(this.updateDeath.bind(this), 1000 / 60);
      _utils__WEBPACK_IMPORTED_MODULE_0__["default"].pause(1000).then(function () {
        clearInterval(intervalID);
      });
    }
  }, {
    key: "fallBodyParts",
    value: function fallBodyParts() {
      for (var part in this.bodyParts) {
        if (part !== 'legLeft' && part !== 'legRight') {
          var params = this.bodyParts[part].options;

          if (params.y < 400) {
            params.y += 5;
          }
        }
      }
    }
  }, {
    key: "updateDeath",
    value: function updateDeath() {
      this.fallBodyParts();
    }
  }]);

  return Player;
}();

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/screens/battleArea/battleArea.js":
/*!**********************************************!*\
  !*** ./src/screens/battleArea/battleArea.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BattleArea =
/*#__PURE__*/
function () {
  function BattleArea(width, height) {
    _classCallCheck(this, BattleArea);

    this.canvasContext = null;
    this.backgroundImg = null;
    this.width = width;
    this.height = height;
  }

  _createClass(BattleArea, [{
    key: "draw",
    value: function draw() {
      var canvas = document.createElement('canvas');
      this.canvasContext = canvas.getContext('2d');
      canvas.width = this.width;
      canvas.height = this.height;
      var gameContainer = document.querySelector('.game__container');
      gameContainer.appendChild(canvas);
    }
  }, {
    key: "clearBattleArea",
    value: function clearBattleArea() {
      this.canvasContext.clearRect(0, 0, this.width, this.height);
    }
  }], [{
    key: "remove",
    value: function remove() {
      var canvas = document.querySelector('canvas');
      canvas.remove();
    }
  }]);

  return BattleArea;
}();

/* harmony default export */ __webpack_exports__["default"] = (BattleArea);

/***/ }),

/***/ "./src/screens/gameField/gameField.css":
/*!*********************************************!*\
  !*** ./src/screens/gameField/gameField.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./gameField.css */ "./node_modules/css-loader/index.js!./src/screens/gameField/gameField.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/screens/gameField/gameField.js":
/*!********************************************!*\
  !*** ./src/screens/gameField/gameField.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameField_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameField.template */ "./src/screens/gameField/gameField.template.js");
/* harmony import */ var _configs_gameConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configs/gameConfig */ "./src/configs/gameConfig.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _gameField_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameField.css */ "./src/screens/gameField/gameField.css");
/* harmony import */ var _gameField_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_gameField_css__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var GameField =
/*#__PURE__*/
function () {
  function GameField() {
    _classCallCheck(this, GameField);
  }

  _createClass(GameField, null, [{
    key: "draw",
    value: function draw() {
      document.body.innerHTML = _gameField_template__WEBPACK_IMPORTED_MODULE_0__["default"];
      GameField.changeBackground();
    }
  }, {
    key: "changeBackground",
    value: function changeBackground() {
      var gameContainer = document.querySelector('.game__container');
      var backgrounds = _configs_gameConfig__WEBPACK_IMPORTED_MODULE_1__["default"].gameBackground.path;
      gameContainer.style.backgroundImage = "url('".concat(_utils__WEBPACK_IMPORTED_MODULE_2__["default"].chooseRandomElem(backgrounds), "')");
    }
  }]);

  return GameField;
}();

/* harmony default export */ __webpack_exports__["default"] = (GameField);

/***/ }),

/***/ "./src/screens/gameField/gameField.template.js":
/*!*****************************************************!*\
  !*** ./src/screens/gameField/gameField.template.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"game__container\">\n\n</section>\n");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Utils =
/*#__PURE__*/
function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: "pause",
    value: function pause(time) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve();
        }, time);
      });
    }
  }, {
    key: "generateMathExample",
    value: function generateMathExample() {
      var listOfSign = ['+', '-', '*', '/'];
      var x = Utils.getRandonValue(1, 100);
      var y = Utils.getRandonValue(1, 100);
      var sign = Utils.chooseRandomElem(listOfSign);
      var mathExample = "".concat(x, " ").concat(sign, " ").concat(y, " =");
      var answer = Utils.solveMathExample(x, y, sign);
      return {
        example: mathExample,
        answer: answer
      };
    }
  }, {
    key: "solveMathExample",
    value: function solveMathExample(x, y, sign) {
      var answer;

      switch (sign) {
        case '+':
          answer = x + y;
          break;

        case '-':
          answer = x - y;
          break;

        case '*':
          answer = x * y;
          break;

        case '/':
          answer = x / y;
          break;

        default:
          answer = null;
      }

      return answer;
    }
  }, {
    key: "chooseRandomElem",
    value: function chooseRandomElem(listOfElems) {
      var length = listOfElems.length;
      var randomIndex = Math.floor(Math.random() * length);
      var elem = listOfElems[randomIndex];
      return elem;
    }
  }, {
    key: "getRandonValue",
    value: function getRandonValue(min, max) {
      var rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    }
  }, {
    key: "saveGameResult",
    value: function saveGameResult(playerName, levelNumber) {
      var gameSession = {
        player: playerName,
        level: levelNumber
      };
      var results = Utils.loadGameResults() || [];
      results.push(gameSession);
      localStorage.setItem('scoreTable', JSON.stringify(results));
    }
  }, {
    key: "loadGameResults",
    value: function loadGameResults() {
      var results = localStorage.getItem('scoreTable');
      return JSON.parse(results);
    }
  }, {
    key: "receiveGameResults",
    value: function receiveGameResults(numberOfGames) {
      var results = Utils.loadGameResults();
      results = Utils.sortGameResults(results);
      var number = numberOfGames || results.length;
      return results.slice(0, number);
    }
  }, {
    key: "sortGameResults",
    value: function sortGameResults(results) {
      return results.sort(function (firstElem, secondElem) {
        return secondElem.level - firstElem.level;
      });
    }
  }, {
    key: "createSound",
    value: function createSound(url) {
      var audio = document.createElement('audio');
      audio.src = url;
      audio.play();
    }
  }, {
    key: "defineSelectedElement",
    value: function defineSelectedElement(elemsList, className) {
      var selectedButton;
      elemsList.forEach(function (elem) {
        if (elem.classList.contains(className)) {
          selectedButton = elem;
        }
      });
      return selectedButton;
    }
  }, {
    key: "selectElement",
    value: function selectElement(elem, className) {
      elem.classList.add(className);
    }
  }, {
    key: "deselectElement",
    value: function deselectElement(elem, className) {
      elem.classList.remove(className);
    }
  }, {
    key: "selectNextElement",
    value: function selectNextElement(elemsList, className) {
      var selectedElem = Utils.defineSelectedElement(elemsList, className);
      var elemsArr = Array.from(elemsList);
      var elemIndex = elemsArr.indexOf(selectedElem);
      var nextElem = elemIndex + 1;
      Utils.deselectElement(selectedElem, className);

      if (nextElem < elemsArr.length) {
        Utils.selectElement(elemsArr[nextElem], className);
      } else {
        Utils.selectElement(elemsArr[0], className);
      }
    }
  }, {
    key: "selectPrevElement",
    value: function selectPrevElement(elemsList, className) {
      var selectedElem = Utils.defineSelectedElement(elemsList, className);
      var elemsArr = Array.from(elemsList);
      var elemIndex = elemsArr.indexOf(selectedElem);
      var prevElem = elemIndex - 1;
      Utils.deselectElement(selectedElem, className);

      if (prevElem < 0) {
        Utils.selectElement(elemsArr[elemsArr.length - 1], className);
      } else {
        Utils.selectElement(elemsArr[prevElem], className);
      }
    }
  }]);

  return Utils;
}();

/* harmony default export */ __webpack_exports__["default"] = (Utils);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmlnaHRTdGF0dXMvZmlnaHRTdGF0dXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21hZ2ljVHlwZS9tYWdpY1R5cGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFsTG9naW4vbW9kYWxMb2dpbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kYWxOb3RpZmljYXRpb24vbW9kYWxOb3RpZmljYXRpb24uY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdmlnYXRpb25MZWZ0L25hdmlnYXRpb25MZWZ0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zY29yZVRhYmxlL3Njb3JlVGFibGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rhc2tMaXN0L3Rhc2tMaXN0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9lbmdsaXNoL2xpc3RlbmluZy9saXN0ZW5pbmcuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL2VuZ2xpc2gvbWlzdGFrZS9taXN0YWtlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9lbmdsaXNoL29yZGVyL29yZGVyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9lbmdsaXNoL3RyYW5zbGF0aW9uL3RyYW5zbGF0aW9uLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9nZW9ncmFwaHkvYXR0cmFjdGlvbnMvYXR0cmFjdGlvbnMuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL2dlb2dyYXBoeS9jYXBpdGFscy9jYXBpdGFscy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvZ2VvZ3JhcGh5L3NvcnRpbmcvc29ydGluZy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvZ2VvZ3JhcGh5L3N0YXRlbWVudHMvc3RhdGVtZW50cy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvbWF0aHMvY29tcGFyaXNvbi9jb21wYXJpc29uLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9tYXRocy9jb25zdHJ1Y3Rvci9jb25zdHJ1Y3Rvci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvbWF0aHMvZXF1YXRpb24vZXF1YXRpb24uY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL21hdGhzL3NlcXVlbmNlL3NlcXVlbmNlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9wcm9ncmFtbWluZy9hYmJyZXZpYXRpb25zL2FiYnJldmlhdGlvbnMuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL3Byb2dyYW1taW5nL2dhcHMvZ2Fwcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvcHJvZ3JhbW1pbmcvb3V0cHV0L291dHB1dC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvcHJvZ3JhbW1pbmcvc3RhdGVtZW50cy9zdGF0ZW1lbnRzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9nYW1lRmllbGQvZ2FtZUZpZWxkLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc29ydGFibGVqcy9Tb3J0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9maWdodFN0YXR1cy9maWdodFN0YXR1cy5jc3M/OWU2OSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9maWdodFN0YXR1cy9maWdodFN0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9maWdodFN0YXR1cy9maWdodFN0YXR1cy50ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYWdpY1R5cGUvbWFnaWNUeXBlLmNzcz83NWZjIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21hZ2ljVHlwZS9tYWdpY1R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFnaWNUeXBlL21hZ2ljVHlwZS50ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbExvZ2luL21vZGFsTG9naW4uY3NzPzNhYzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kYWxMb2dpbi9tb2RhbExvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFsTG9naW4vbW9kYWxMb2dpbi50ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbE5vdGlmaWNhdGlvbi9tb2RhbE5vdGlmaWNhdGlvbi5jc3M/M2RmMyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbE5vdGlmaWNhdGlvbi9tb2RhbE5vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbE5vdGlmaWNhdGlvbi9tb2RhbE5vdGlmaWNhdGlvbi50ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uTGVmdC9uYXZpZ2F0aW9uTGVmdC5jc3M/N2QyMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uTGVmdC9uYXZpZ2F0aW9uTGVmdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uTGVmdC9uYXZpZ2F0aW9uTGVmdC50ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zY29yZVRhYmxlL3Njb3JlVGFibGUuY3NzP2U4YmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2NvcmVUYWJsZS9zY29yZVRhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Njb3JlVGFibGUvc2NvcmVUYWJsZS50ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrTGlzdC90YXNrTGlzdC5jc3M/ZGFlZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrTGlzdC90YXNrTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrTGlzdC90YXNrTGlzdC50ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9lbmdsaXNoL2VuZ2xpc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvZW5nbGlzaC9saXN0ZW5pbmcvbGlzdGVuaW5nLmNzcz9kY2RiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL2VuZ2xpc2gvbGlzdGVuaW5nL2xpc3RlbmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9lbmdsaXNoL2xpc3RlbmluZy9saXN0ZW5pbmcudGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvZW5nbGlzaC9taXN0YWtlL21pc3Rha2UuY3NzPzMxZDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvZW5nbGlzaC9taXN0YWtlL21pc3Rha2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvZW5nbGlzaC9taXN0YWtlL21pc3Rha2UudGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvZW5nbGlzaC9vcmRlci9vcmRlci5jc3M/YjVmYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9lbmdsaXNoL29yZGVyL29yZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL2VuZ2xpc2gvb3JkZXIvb3JkZXIudGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvZW5nbGlzaC90cmFuc2xhdGlvbi90cmFuc2xhdGlvbi5jc3M/ZDlmNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9lbmdsaXNoL3RyYW5zbGF0aW9uL3RyYW5zbGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL2VuZ2xpc2gvdHJhbnNsYXRpb24vdHJhbnNsYXRpb24udGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvZ2VvZ3JhcGh5L2F0dHJhY3Rpb25zL2F0dHJhY3Rpb25zLmNzcz84ZWQ1Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL2dlb2dyYXBoeS9hdHRyYWN0aW9ucy9hdHRyYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9nZW9ncmFwaHkvYXR0cmFjdGlvbnMvYXR0cmFjdGlvbnMudGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvZ2VvZ3JhcGh5L2NhcGl0YWxzL2NhcGl0YWxzLmNzcz9mZDc3Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL2dlb2dyYXBoeS9jYXBpdGFscy9jYXBpdGFscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9nZW9ncmFwaHkvY2FwaXRhbHMvY2FwaXRhbHMudGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvZ2VvZ3JhcGh5L2dlb2dyYXBoeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9nZW9ncmFwaHkvc29ydGluZy9zb3J0aW5nLmNzcz82NDNmIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL2dlb2dyYXBoeS9zb3J0aW5nL3NvcnRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvZ2VvZ3JhcGh5L3NvcnRpbmcvc29ydGluZy50ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9nZW9ncmFwaHkvc3RhdGVtZW50cy9zdGF0ZW1lbnRzLmNzcz9jYzQyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL2dlb2dyYXBoeS9zdGF0ZW1lbnRzL3N0YXRlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvZ2VvZ3JhcGh5L3N0YXRlbWVudHMvc3RhdGVtZW50cy50ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9tYXRocy9jb21wYXJpc29uL2NvbXBhcmlzb24uY3NzP2U4ZDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvbWF0aHMvY29tcGFyaXNvbi9jb21wYXJpc29uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL21hdGhzL2NvbXBhcmlzb24vY29tcGFyaXNvbi50ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9tYXRocy9jb25zdHJ1Y3Rvci9jb25zdHJ1Y3Rvci5jc3M/NWQwNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9tYXRocy9jb25zdHJ1Y3Rvci9jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9tYXRocy9jb25zdHJ1Y3Rvci9jb25zdHJ1Y3Rvci50ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9tYXRocy9lcXVhdGlvbi9lcXVhdGlvbi5jc3M/MTczNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9tYXRocy9lcXVhdGlvbi9lcXVhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9tYXRocy9lcXVhdGlvbi9lcXVhdGlvbi50ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9tYXRocy9tYXRocy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9tYXRocy9zZXF1ZW5jZS9zZXF1ZW5jZS5jc3M/MWYyNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9tYXRocy9zZXF1ZW5jZS9zZXF1ZW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9tYXRocy9zZXF1ZW5jZS9zZXF1ZW5jZS50ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9wcm9ncmFtbWluZy9hYmJyZXZpYXRpb25zL2FiYnJldmlhdGlvbnMuY3NzPzdiMjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvcHJvZ3JhbW1pbmcvYWJicmV2aWF0aW9ucy9hYmJyZXZpYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL3Byb2dyYW1taW5nL2FiYnJldmlhdGlvbnMvYWJicmV2aWF0aW9ucy50ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9wcm9ncmFtbWluZy9nYXBzL2dhcHMuY3NzPzhkODUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvcHJvZ3JhbW1pbmcvZ2Fwcy9nYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL3Byb2dyYW1taW5nL2dhcHMvZ2Fwcy50ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9wcm9ncmFtbWluZy9vdXRwdXQvb3V0cHV0LmNzcz81NDY5Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL3Byb2dyYW1taW5nL291dHB1dC9vdXRwdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvcHJvZ3JhbW1pbmcvb3V0cHV0L291dHB1dC50ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9wcm9ncmFtbWluZy9wcm9ncmFtbWluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy9wcm9ncmFtbWluZy9zdGF0ZW1lbnRzL3N0YXRlbWVudHMuY3NzPzNkNjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvcHJvZ3JhbW1pbmcvc3RhdGVtZW50cy9zdGF0ZW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL3Byb2dyYW1taW5nL3N0YXRlbWVudHMvc3RhdGVtZW50cy50ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy90YXNrLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWdzL2dhbWVDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3MvZ2FtZVRhc2tzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWdzL3BsYXllckNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlncy93ZWFwb25Db25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZ2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lSW50ZXJmYWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvYXR0YWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJzL2hlcm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvbW9uc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVycy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvYmF0dGxlQXJlYS9iYXR0bGVBcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL2dhbWVGaWVsZC9nYW1lRmllbGQuY3NzPzZiZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvZ2FtZUZpZWxkL2dhbWVGaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9nYW1lRmllbGQvZ2FtZUZpZWxkLnRlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJGaWdodFN0YXR1cyIsImhlcm8iLCJtb25zdGVyIiwibGV2ZWwiLCJkcmF3IiwiaW5zZXJ0UGxheWVyc05hbWVzIiwibmFtZSIsImluc2VydEdhbWVMZXZlbCIsImluc2VydFBsYXllcnNJbWciLCJnYW1lQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwidGVtcGxhdGUiLCJoZXJvTmFtZSIsIm1vbnN0ZXJOYW1lIiwiaGVyb05hbWVFbGVtIiwibW9uc3Rlck5hbWVFbGVtIiwiaW5uZXJIVE1MIiwibGV2ZWxJbmZvIiwiaGVyb0ZyYW1lIiwibW9uc3RlckZyYW1lIiwiYXBwZW5kQ2hpbGQiLCJib2R5UGFydHMiLCJoZWFkIiwiaW1nIiwiaGVyb0hQIiwibW9uc3RlckhQIiwiY2hhbmdlSFBCYXIiLCJjaGFuZ2VIUFZhbHVlIiwiaGVyb0hQRWxlbSIsIm1vbnN0ZXJIUEVsZW0iLCJzdHlsZSIsIndpZHRoIiwiaGVyb0hQVmFsdWUiLCJtb25zdGVySFBWYWx1ZSIsImdhbWVTdGF0dXMiLCJyZW1vdmUiLCJNYWdpY1R5cGUiLCJVdGlscyIsInBhdXNlIiwidGhlbiIsImNyZWF0ZU1hZ2ljVHlwZSIsInNldEV2ZW50TGlzdGVuZXIiLCJUYXNrTGlzdCIsImluaXRUYXNrTGlzdCIsIm1vZGFsVHlwZSIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiZnVuYyIsImJ1dHRvbkhlYWxpbmciLCJidXR0b25BdHRhY2siLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwiY29udHJvbE1hZ2ljVHlwZUJ5S2V5cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldmVudCIsIkVOVEVSX0tFWSIsIkxFRlRfS0VZIiwiUklHSFRfS0VZIiwic2VsZWN0ZWRDbGFzcyIsImxpc3RPZkJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VsZWN0ZWRCdXR0b24iLCJkZWZpbmVTZWxlY3RlZEVsZW1lbnQiLCJrZXlDb2RlIiwiY2xpY2siLCJzZWxlY3RQcmV2RWxlbWVudCIsInNlbGVjdE5leHRFbGVtZW50Iiwic2VsZWN0RWxlbWVudCIsIk1vZGFsTG9naW4iLCJpbnNlcnRQbGF5ZXJJbWciLCJwbGF5ZXJDb2ZpZyIsImlucHV0RmllbGQiLCJmb2N1cyIsIm1vZGFsTG9naW5JbWciLCJzcmMiLCJzcHJpdGVzIiwicGF0aCIsIm1vZGFsTG9naW4iLCJidXR0b24iLCJzdWJtaXRJbnB1dExvZ2luIiwiTW9kYWxOb3RpZmljYXRpb24iLCJtZXNzYWdlIiwidGltZSIsIm1vZGFsTWVzc2FnZSIsIm1vZGFsTm90aWZpY2F0aW9uIiwiTmF2aWdhdGlvbkxlZnQiLCJsZWZ0TmF2IiwiYnV0dG9uT24iLCJkYXRhc2V0IiwibXVzaWMiLCJjbGFzc0xpc3QiLCJhZGQiLCJidXR0b25PZmYiLCJidXR0b25NdXNpYyIsImJ1dHRvbkV4aXQiLCJTY29yZVRhYmxlIiwiY3JlYXRlU2NvcmVUYWJsZSIsIlJFU1VMVFNfTlVNQkVSIiwiZ2FtZVJlc3VsdHMiLCJyZWNlaXZlR2FtZVJlc3VsdHMiLCJjb250YWluZXIiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiZm9yRWFjaCIsImVsZW0iLCJpbmRleCIsInRhYmxlUm93IiwiY3JlYXRlUm93IiwidGFibGUiLCJhcHBlbmQiLCJnYW1lUmVzdWx0IiwiY3JlYXRlRWxlbWVudCIsInBvc2l0aW9uIiwiY3JlYXRlUm93RWxlbWVudCIsInBsYXllck5hbWUiLCJwbGF5ZXIiLCJhdHJpYnV0ZSIsImlubmVyVmFsdWUiLCJzY29yZVRhYmxlIiwiZXhpdEJ1dHRvbiIsInBsYXlBZ2FpbkJ1dHRvbiIsIkdhbWVJbnRlcmZhY2UiLCJleGl0R2FtZSIsInJlbG9hZEdhbWUiLCJjb250cm9sU2NvcmVUYWJsZUJ5S2V5cyIsImV2ZW50VHlwZSIsInRhcmdldCIsInR5cGUiLCJzYXZlQXR0YWNrVHlwZU9wdGlvbiIsImNyZWF0ZVRhc2tMaXN0IiwiZGVmaW5lRGFtYWdlRmllbGRDb2xvciIsImF0dGFja1R5cGUiLCJUYXNrIiwidGFza0RhbWFnZSIsInRhc2tzIiwiY3JlYXRlTGlzdE9mVGFza3MiLCJnYW1lVGFza3MiLCJ0YXNrc0xpc3QiLCJ0YXNrTmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiaXRlbSIsInRhc2tzQmxvY2siLCJjcmVhdGVTdWJqZWN0QmxvY2siLCJ0YXNrU3ViamVjdCIsInRhc2tzQ29udGFpbmVyIiwiY3JlYXRlVGFza0ljb24iLCJ0YXNrIiwidG9Mb3dlckNhc2UiLCJkYW1hZ2UiLCJ0YXNrc1R5cGUiLCJ0YXNrc0RhbWFnZSIsInRhc2tzTmFtZSIsInRhc2tzQ29tcGxleGl0eSIsImNvbXBsZXhpdHkiLCJlbGVtQ2xhc3MiLCJzaWduIiwiZGVtYWdlRWxlbXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiQXJyYXkiLCJmcm9tIiwiZWxlbWVudCIsImNhbGxVc2VyVGFzayIsImNvbWVCYWNrIiwicmV0dXJuVG9NYWdpY0Nob29zZSIsImNvbnRyb2xUYXNrTGlzdEJ5S2V5cyIsIkVTQ0FQRSIsImxpc3RPZlRhc2tzIiwic2VsZWN0ZWRUYXNrIiwiY29udGFpbnMiLCJkZWZpbmVDaG9vc2VuVGFzayIsInNhdmVEYW1hZ2VWYWx1ZU9wdGlvbiIsInBhcmVudEVsZW1lbnQiLCJFbmdsaXNoIiwidGFza05hbWUiLCJkZWZpbmVUYXNrQnlOYW1lIiwiVHJhbnNsYXRpb24iLCJjcmVhdGVUYXNrIiwiTWlzdGFrZSIsIkxpc3RlbmluZyIsIk9yZGVyIiwiZW5nbGlzaCIsImZpbmQiLCJpc0NvcnJlY3QiLCJyZWNlaXZlVXNlckFuc3dlclJlc3VsdCIsImFuc3dlckJ1dHRvbiIsImNoZWNrSW5wdXRBbnN3ZXIiLCJyYW5kb21UYXNrIiwiY2hvb3NlUmFuZG9tRWxlbSIsImV4cGxhbmF0aW9uIiwiY2hlY2tBbnN3ZXIiLCJiaW5kIiwiYW5zd2VyIiwicGxheUF1ZGlvIiwiY3JlYXRlU291bmQiLCJ2YXJpYWJsZXMiLCJ0YXNrRXhwbGFuYXRpb24iLCJsaXN0ZW5pbmdCdXR0b24iLCJjaGVja0lucHV0S2V5IiwiVVBfS0VZIiwiRE9XTl9LRVkiLCJpbnB1dEFuc3dlciIsImFyck9mRWxlbSIsInNlbGVjdGVkSXRlbSIsInJpZ2h0QW5zd2VyIiwidmFsdWUiLCJ0cmltIiwic2VuZEFuc3dlclJlc3VsdEJhY2siLCJ3b3JkTGV0dGVyIiwidGFza0NvbnRhaW5lciIsInByZXBlbmQiLCJlbmdsaXNoQ29udGFpbmVyIiwiY29udHJvbE1pc3Rha2VCeUtleXMiLCJsaXN0T2ZMZXR0ZXJzIiwic2VsZWN0ZWRMZXR0ZXIiLCJhZGRTb3J0YWJsZUJlaGF2aW9yIiwidGFza0l0ZW0iLCJzb3J0YWJsZUNvbnRhaW5lciIsIlNvcnRhYmxlIiwiY3JlYXRlIiwiZ3JvdXAiLCJhbmltYXRpb24iLCJjaGlsZHJlbiIsImV2ZXJ5IiwiZW5nbGlzaFdvcmQiLCJhbnN3ZXJzTGlzdCIsImluY2x1ZGVzIiwiQXR0cmFjdGlvbnMiLCJhdHRyYWN0aW9uc0NvdW50cnkiLCJhbnN3ZXJJdGVtIiwiY3JlYXRlQW5zd2VySXRlbSIsImFuc3dlckNvbnRhaW5lciIsImFuc3dlclZhcmlhbnQiLCJpbnB1dCIsInNldEF0dHJpYnV0ZSIsImNoZWNrbWFyayIsImNvbnRyb2xBdHRyYWN0aW9uc0J5S2V5cyIsImxpc3RPZkl0ZW1zIiwiaXRlbXNBcnIiLCJwdXNoIiwiY2hlY2tCb3giLCJ0b2dnbGVDaGVja0JveCIsImNoZWNrZWQiLCJsZW5ndGgiLCJHZW9ncmFwaHkiLCJDYXBpdGFscyIsImNhcGl0YWxzQ2l0eSIsIndvcmRDb3VudHJ5IiwiZ2VvZ3JhcGh5Q29udGFpbmVyIiwiY29udHJvbENhcGl0YWxzQnlLZXlzIiwiU3RhdGVtZW50cyIsIlNvcnRpbmciLCJnZW9ncmFwaHkiLCJzdGF0ZW1lbnRzU2VudGVuY2UiLCJjb250cm9sU3RhdGVtZW50c0J5S2V5cyIsImdldEVsZW1lbnRCeUlkIiwiaHRtbEZvciIsIkNvbXBhcmlzb24iLCJNYXRocyIsImZpcnN0VmFsdWUiLCJzZWNvbmRWYWx1ZSIsIkNvbnN0cnVjdG9yIiwic29tZSIsIkVxdWF0aW9uIiwiZ2VuZXJhdGVNYXRoRXhhbXBsZSIsIm1hdGhzRXhhbXBsZSIsImV4YW1wbGUiLCJTZXF1ZW5jZSIsIm1hdGhzIiwibWF0aHNJdGVtIiwiQWJicmV2aWF0aW9ucyIsInRhc2tXb3JkIiwiY29udHJvbEFiYnJldmlhdGlvbnNCeUtleXMiLCJQcm9ncmFtbWluZyIsIkdhcHMiLCJmaXJzdFBhcnQiLCJzZWNvbmRQYXJ0Iiwib3V0cHV0UGFydCIsInN1Ym1pdElucHV0QW5zd2VyIiwiT3V0cHV0IiwidGFza1F1ZXN0aW9uIiwic2VsZWN0T25seU9uZUVsZW1lbnQiLCJjb250cm9sT3V0cHV0QnlLZXlzIiwicHJvZ3JhbW1pbmciLCJMRUZUX1VQIiwiUklHSFRfRE9XTiIsInRhc2tUeXBlIiwiaW5pdFRhc2siLCJkZWZpbmVUYXNrIiwibW9kYWxUYXNrIiwiRmlnaHQiLCJpbnN0YW5jZSIsInByb2Nlc3NBbnN3ZXJSZXN1bHQiLCJnYW1lQmFja2dyb3VuZCIsImNhbnZhc1NpemUiLCJoZWlnaHQiLCJhdWRpbyIsImF0dGFjayIsImRlbWFnZSIsImhlYWxpbmciLCJsZWdSaWdodCIsIm9wdGlvbnMiLCJ4IiwieSIsImxlZ0xlZnQiLCJoYW5kTGVmdCIsImJvZHkiLCJoYW5kUmlnaHQiLCJuYW1lXzEiLCJuYW1lXzIiLCJuYW1lXzMiLCJzZXRPZlBhdGgiLCJoZXJvV2VhcG9uIiwibW9uc3RlcldlYXBvbiIsImJhdHRsZUFyZWEiLCJjcmVhdGVJbnN0YW5jZSIsImxldmVsTWVzc2FnZSIsInNob3dNb2RhbE5vdGlmaWNhdGlvbiIsImNyZWF0ZUJhdHRsZUFyZWEiLCJjcmVhdGVQbGF5ZXIiLCJzdGFydEdhbWVMb29wIiwicmVxdWVzdElEIiwiaW5pdE1hZ2ljVHlwZSIsImdhbWVDb25maWciLCJCYXR0bGVBcmVhIiwiY2FudmFzQ29udGV4dCIsInVwZGF0ZSIsInJlbmRlckZpZ2h0IiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhckJhdHRsZUFyZWEiLCJjbGVhclBsYXllciIsImRhbWFnZVRvSGVybyIsImdlbmVyYXRlRGFtYWdlIiwiYXR0YWNrRW5lbXkiLCJwbGF5ZXJDb25maWciLCJoZWFsWW91cnNlbGYiLCJhbnN3ZXJNZXNzYWdlIiwidXBkYXRlUGxheWVyc0hQIiwiaGVhbHNlIiwiaXNQbGF5ZXJBbGl2ZSIsImRlZmluZVJvdW5kUmVzdWx0IiwiaXNQbGF5ZXJEaWUiLCJwcm9jZXNzSGVyb0RlYXRoIiwicHJvY2Vzc01vbnN0ZXJEZWF0aCIsInN0b3BNb3ZlIiwic2hvd0RlYXRoQW5pbWF0aW9uIiwibG9vc2VNZXNzYWdlIiwiY2xlYXJQcmV2aW91c0ZpZ2h0IiwiR2FtZU1hbmFnZXIiLCJzaG93U2NvcmVUYWJsZSIsIndpbk1lc3NhZ2UiLCJuZXh0TGV2ZWwiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIkdhbWVGaWVsZCIsImFkZExpc3RlbmVycyIsIm5hbWVJbnB1dCIsInN0YXJ0R2FtZSIsImluaXRGaWdodCIsIm11c2ljU3RhdHVzIiwibWFrZUJ1dHRvbkFjdGl2ZSIsInBsYXkiLCJtYWtlQnV0dG9uUGFzc2l2ZSIsImxvb3AiLCJsb2NhdGlvbiIsImhyZWYiLCJzZXRNdXNpY0NvbnRyb2xMaXN0ZW5lciIsImNvbnRyb2xNdXNpYyIsInNldEV4aXRHYW1lQ29udHJvbExpc3RlbmVyIiwiZ2VuZXJhdGVIZXJvIiwiZ2VuZXJhdGVNb25zdGVyTmFtZSIsImdlbmVyYXRlTW9uc3RlciIsInN0YXJ0RmlnaHQiLCJIZXJvIiwiTW9uc3RlciIsImZpcnN0TmFtZVBhcnQiLCJzZWNvbmROYW1lUGFydCIsInRoaXJkTmFtZVBhcnQiLCJwcmV2TGV2ZWwiLCJyZXN0b3JlSGVhbHNlIiwiY2hhbmdlQmFja2dyb3VuZCIsImxldmVsTnVtYmVyIiwic2F2ZUdhbWVSZXN1bHQiLCJpbml0U2NvcmVUYWJsZSIsIm9ubG9hZCIsImxvYWRlciIsImxvYWRHYW1lIiwiQXR0YWNrIiwiY29udGV4dCIsImRpcmVjdGlvbiIsIndlYXBvbkltZyIsImFuZ2xlIiwiYXR0YWNrVGltZSIsIndlYXBvbiIsImNyYXRlV2VhcG9uIiwiZG9BbmltYXRlIiwidXBkYXRlQXR0YWNrIiwidXBkYXRlSGVhbGluZyIsIkltYWdlIiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImNlbnRlclkiLCJjZW50ZXJYIiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsIk1hdGgiLCJQSSIsImNsZWFyV2VhcG9uIiwiYW5pbWF0aW9uVHlwZSIsImNyZWF0ZUJvZHlQYXJ0cyIsInN0YXJ0TW92ZSIsImhlcm9QYXJ0cyIsInBhcnQiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJjcmVhdGVJbWFnZSIsIm1vdmVIZWFkIiwibW92ZUhhbmQiLCJtb3ZlTGVnIiwid2VhcG9uQ29uZmlnIiwiZHJhd0F0dGFjayIsImRyYXdIZWFsaW5nIiwicGFyYW1zIiwiYm9keVBhcnQiLCJpbWdFbGVtIiwiUGxheWVyIiwiaGVhZFNwcml0ZXMiLCJNSU5fREFNQUdFIiwiZGVmaW5lSGVhZFNwcml0ZSIsImdldFJhbmRvblZhbHVlIiwibW9uc3RlclBhcnRzIiwiYXJyT2ZTZXRzIiwiY3VycmVudEltZyIsInBhcnRPZlVybCIsIm1hdGNoIiwic2V0IiwiZW5kc1dpdGgiLCJpbWdOdW1iZXIiLCJhYnMiLCJtb3ZlVmFsdWUiLCJtb3ZlTW91dGgiLCJtb3ZlVXAiLCJhbXBsaXR1ZGUiLCJpbnRlcnZhbElEIiwicGFydEltZyIsIm1vdmVCb2R5UGFydHMiLCJzZXRJbnRlcnZhbCIsInVwZGF0ZVBsYXllciIsImNsZWFySW50ZXJ2YWwiLCJoYW5kIiwiaGFuZENvb3JkcyIsImhlYWRDb29yZHMiLCJsZWciLCJsZWdDb29yZHMiLCJwZXJzb24iLCJlbmVteSIsInNob3dBdHRhY2tBbmltYXRpb24iLCJyZWNvdmVyeSIsInNob3dIZWFsaW5nQW5pbWF0aW9uIiwidXBkYXRlRGVhdGgiLCJmYWxsQm9keVBhcnRzIiwiYmFja2dyb3VuZEltZyIsImNhbnZhcyIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJiYWNrZ3JvdW5kcyIsImJhY2tncm91bmRJbWFnZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImxpc3RPZlNpZ24iLCJtYXRoRXhhbXBsZSIsInNvbHZlTWF0aEV4YW1wbGUiLCJsaXN0T2ZFbGVtcyIsInJhbmRvbUluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJyYW5kIiwicm91bmQiLCJnYW1lU2Vzc2lvbiIsInJlc3VsdHMiLCJsb2FkR2FtZVJlc3VsdHMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldEl0ZW0iLCJwYXJzZSIsIm51bWJlck9mR2FtZXMiLCJzb3J0R2FtZVJlc3VsdHMiLCJudW1iZXIiLCJzbGljZSIsInNvcnQiLCJmaXJzdEVsZW0iLCJzZWNvbmRFbGVtIiwidXJsIiwiZWxlbXNMaXN0IiwiY2xhc3NOYW1lIiwic2VsZWN0ZWRFbGVtIiwiZWxlbXNBcnIiLCJlbGVtSW5kZXgiLCJpbmRleE9mIiwibmV4dEVsZW0iLCJkZXNlbGVjdEVsZW1lbnQiLCJwcmV2RWxlbSJdLCJtYXBwaW5ncyI6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LFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNB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LG1DQUFtQztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSwrREFBK0Q7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLDhCQUE4QjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDOztBQUV6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLE9BQU87QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQixlQUFlLE9BQU87QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxFQUFFO0FBQ2pCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGNBQWMsWUFBWTtBQUMxQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QixhQUFhLFNBQVM7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5nYW1lX19zdGF0dXMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgd2lkdGg6IDk1MHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn0gXFxyXFxuXFxyXFxuLmdhbWVfX2xldmVsIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCBnb2xkO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgNXB4IDNweCAjNDY0NjQ2O1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyX19maWVsZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICB3aWR0aDogNDglO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9uc3Rlcl9fZmllbGQge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllcl9fbmFtZSB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1zaGFkb3c6ICAycHggMnB4IDJweCAjNDY0NjQ2O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9uc3Rlcl9fbmFtZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyX19mcmFtZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEyMHB4OyBcXHJcXG4gIGhlaWdodDogMTIwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCBnb2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggIzQ2NDY0NjsgXFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJfX2ZyYW1lIGltZyB7XFxyXFxuICB3aWR0aDogOTBweDtcXHJcXG4gIGhlaWdodDogOTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllcl9faW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllcl9faHAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggIzQ2NDY0NjtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllcl9faHAtdW5kZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJfX2hwX2JhciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoI2ZmNWI1YiwgI2ZmMDIwMik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJfX2hwX3ZhbHVlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGNvbG9yOiBnb2xkO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LXNoYWRvdzogIDAgMCAzcHggIzQ2NDY0NjtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWFnaWNfX2Nob29zZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiAxNTBweDsgXFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGdvbGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFnaWNfX2tpbmRzIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFnaWNfX2J0bi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFnaWNfX3R5cGUtYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiA0NSU7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1hZ2ljX190eXBlX2hlYWxpbmd7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1hZ2ljX190eXBlX2F0dGFja3tcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDYsIDUsIDApO1xcclxcbn1cXHJcXG4gICAgXFxyXFxuLm1hZ2ljX190eXBlLWJ0bjpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IHNhdHVyYXRlKDIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFnaWNfX3R5cGUtYnRuOmZvY3VzIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTBweCAycHggYmxhY2s7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZGFsX19sb2dpbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIHBhZGRpbmc6IDgwcHggMzBweCAzMHB4O1xcclxcbiAgY29sb3I6ICMzNDM2NDI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIGJvcmRlcjogMTBweCBzb2xpZCBnb2xkOyBcXHJcXG59XFxyXFxuICBcXHJcXG4ubW9kYWxfX2hlcm8ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAtODVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTcwcHg7XFxyXFxuICBoZWlnaHQ6IDE3MHB4O1xcclxcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIGdvbGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbF9faGVyby1pbWcge1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgaGVpZ2h0OiAxMjBweDtcXHJcXG59XFxyXFxuICAgIFxcclxcbi5tb2RhbF9fdGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMyZjg4OWE7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuIFxcclxcbi5tb2RhbF9faW5wdXQge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNkMmQ4ZDg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsX19idXR0b24ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMzJweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiAgICBcXHJcXG4ubW9kYWxfX2J1dHRvbjpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IHNhdHVyYXRlKDIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxfX2J1dHRvbjphY3RpdmUge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMHB4IDJweCBibGFjaztcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubW9kYWxfX25vdGlmaWNhdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNTBweCAzMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbF9fbWVzc2FnZSB7XFxyXFxuICBmb250LXNpemU6IDUwcHg7XFxyXFxuICBjb2xvcjogZ29sZDtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubGVmdC1uYXYge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICBsZWZ0OiA1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOjQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2X19idXR0b24ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggMCAwIHJnYmEoMjU1LDI1NSwyNTUsMC41KSwgXFxyXFxuICAgICAgICAgICAgICAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE5KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjYjViNWI1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdl9fYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDAgMCByZ2JhKDI1NSwyNTUsMjU1LDAuNSksIFxcclxcbiAgICAgICAgICAgICAgMnB4IDJweCA1cHggMCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdl9fYnRuIHtcXHJcXG4gXFx0Y29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5uYXZfX2J0bl9hY3RpdmUge1xcclxcbiAgY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxufVxcclxcblxcclxcbi5uYXZfX2J0bjpob3ZlciB7XFxyXFxuIFxcdGNvbG9yOiBsaWdodGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2X19idG46YWN0aXZlIHtcXHJcXG4gXFx0IGJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDVweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2NvcmVfX3RhYmxle1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNTAwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgY29sb3I6ICMzNDM2NDI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIGJvcmRlcjogMTBweCBzb2xpZCBnb2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVfX3Jlc3VsdHN7XFxyXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgd2lkdGg6IDEwMCU7IFxcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVfX3RhYmxlIHRkLCBcXHJcXG4uc2NvcmVfX3RhYmxlIHRoIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zY29yZV9fdGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxyXFxufVxcclxcblxcclxcbi5zY29yZV9fdGFibGUgdHI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlX190YWJsZSB0aCB7XFxyXFxuICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbiAgXFxyXFxuLnNjb3JlX19oZWFkZXIge1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVfX2J1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbF9fYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiA0NSU7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxfX2J1dHRvbl9leGl0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDQ0LCA3KTtcXHJcXG59XFxyXFxuICAgIFxcclxcbi5tb2RhbF9fYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGZpbHRlcjogc2F0dXJhdGUoMik7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbF9fYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwcHggMnB4IGJsYWNrO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50YXNrcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIHdpZHRoOiA3MDBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIGJvcmRlcjogMTBweCBzb2xpZCBnb2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3NfX2JhY2sge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogMTVweDtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzX19iYWNrIGkge1xcclxcbiAgY29sb3I6IGdvbGQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrc19fYmFjayBpOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBsaWdodGdyZWVuO1xcclxcbn1cXHJcXG4gIFxcclxcbi50YXNrc19faGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogMCAwIDEwcHggMDtcXHJcXG59XFxyXFxuICBcXHJcXG4udGFza3NfX2xpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuICBcXHJcXG4udGFza19fY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbiAgXFxyXFxuLnRhc2tzX19pdGVtIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweCAyMHB4IDVweCA1cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBnb2xkO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4gIFxcclxcbi50YXNrc19faXRlbTpob3ZlciB7XFxyXFxuICBib3JkZXItY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3NfX2l0ZW06aG92ZXIgLnRhc2tfX2RhbWFnZSB7XFxyXFxuICBib3JkZXItY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxufVxcclxcbiAgXFxyXFxuLnRhc2tfX3R5cGUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuICBcXHJcXG4udGFza19fbmFtZSB7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tfX2NvbXBsZXhpdHkge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxuICBjb2xvcjogbGlnaHRncmF5O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbiAgXFxyXFxuLnRhc2tfX2RhbWFnZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogLTJweDtcXHJcXG4gIHRvcDogLTJweDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDQ0cHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMjBweCAwIDIwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBnb2xkO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza19fZGFtYWdlX2F0dGFjayB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZTU3MzQ5O1xcclxcbn1cXHJcXG5cXHJcXG4udGFza19fZGFtYWdlX2hlYWxpbmcge1xcclxcbiAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGFza19fbW9kYWwge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCBnb2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuICBcXHJcXG4uZW5nbGlzaF9fbGlzdGVuaW5nIHtcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxufVxcclxcbiAgXFxyXFxuLmVuZ2xpc2hfX2V4cGxhbmF0aW9uIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuICBcXHJcXG4ubGlzdGVuaW5nX19pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIG1hcmdpbjogMjBweCBhdXRvIDA7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBnb2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RlbmluZ19fYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ29sZDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RlbmluZ19fYnV0dG9uOmhvdmVyIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiAgXFxyXFxuLmFuc3dlcl9fYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiA0NSU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiAgICAgIFxcclxcbi5hbnN3ZXJfX2J0bjpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IHNhdHVyYXRlKDIpO1xcclxcbn1cXHJcXG4gIFwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRhc2tfX21vZGFsIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgZ29sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcbiAgXFxyXFxuLmVuZ2xpc2hfX21pc3Rha2Uge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG59XFxyXFxuICBcXHJcXG4uZW5nbGlzaF9fZXhwbGFuYXRpb24ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4gIFxcclxcbi5taXN0YWtlX19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmVuZ2xpc2hfX2xldHRlciB7XFxyXFxuICBtYXJnaW46IDEwcHggMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZW5nbGlzaF9fbGV0dGVyOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBnb2xkO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4gXFxyXFxuICBcXHJcXG4gIFxcclxcbiBcXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50YXNrX19tb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGdvbGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZW5nbGlzaF9fb3JkZXIge1xcclxcbiAgd2lkdGg6IDQzMHB4O1xcclxcbiAgaGVpZ2h0OiAyMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVuZ2xpc2hfX2V4cGxhbmF0aW9uIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyX19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5vcmRlcl9faXRlbSB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBtYXJnaW46IDAgNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBnb2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5zd2VyX19idG4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDQ1JTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuICAgIFxcclxcbi5hbnN3ZXJfX2J0bjpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IHNhdHVyYXRlKDIpO1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50YXNrX19tb2RhbHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgZ29sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcbiAgXFxyXFxuLmVuZ2xpc2hfX3RyYW5zbGF0aW9uIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogMTUwcHg7XFxyXFxufVxcclxcbiAgXFxyXFxuLmVuZ2xpc2hfX2V4cGxhbmF0aW9uIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuICBcXHJcXG4uZW5nbGlzaF9fY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZW5nbGlzaF9fd29yZCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcbiAgXFxyXFxuLnRyYW5zbGF0aW9uX19pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIG1hcmdpbjogMCAxNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ29sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuICBcXHJcXG4uYW5zd2VyX19idG4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDQ1JTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuICAgICAgXFxyXFxuLmFuc3dlcl9fYnRuOmhvdmVyIHtcXHJcXG4gIGZpbHRlcjogc2F0dXJhdGUoMik7XFxyXFxufVxcclxcbiAgXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGFza19fbW9kYWwge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgZ29sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcbiAgXFxyXFxuLmdlb2dyYXBoeV9fYXR0cmFjdGlvbnMge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuICBcXHJcXG4uZ2VvZ3JhcGh5X19leHBsYW5hdGlvbiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5hdHRyYWN0aW9uc19fY291bnRyeSB7XFxyXFxuICBtYXJnaW46IDE1cHggMDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBnb2xkO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbiAgXFxyXFxuLmF0dHJhY3Rpb25zX19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYW5zd2VyX19idG4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDQ1JTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiAgICAgIFxcclxcbi5hbnN3ZXJfX2J0bjpob3ZlciB7XFxyXFxuICAgICAgZmlsdGVyOiBzYXR1cmF0ZSgyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94X19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94X19jb250YWluZXIgaW5wdXQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2ttYXJrIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveF9fY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3hfX2NvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2ttYXJrOmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94X19jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveF9fY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xcclxcbiAgbGVmdDogOXB4O1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICB3aWR0aDogNXB4O1xcclxcbiAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcXHJcXG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRhc2tfX21vZGFsIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgZ29sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcbiAgXFxyXFxuLmdlb2dyYXBoeV9fY2FwaXRhbHMge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiAyMjBweDtcXHJcXG59XFxyXFxuICBcXHJcXG4uZ2VvZ3JhcGh5X19leHBsYW5hdGlvbiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbiAgXFxyXFxuLmNhcGl0YWxzX19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jYXBpdGFsc19fY2l0eSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ29sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcGl0YWxzX19hbnN3ZXJzIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcGl0YWxzX19pdGVtIHtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXBpdGFsc19faXRlbTpob3ZlciB7XFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xcdFxcclxcbiAgY29sb3I6IGdvbGQ7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRhc2tfX21vZGFse1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCBnb2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdlb2dyYXBoeV9fc29ydGluZyB7XFxyXFxuICB3aWR0aDogNDMwcHg7XFxyXFxuICBoZWlnaHQ6IDM1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2VvZ3JhcGh5X19leHBsYW5hdGlvbiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5zb3J0aW5nX19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc29ydGluZ19faXRlbSB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBnb2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5zd2VyX19idG4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDQ1JTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuICAgIFxcclxcbi5hbnN3ZXJfX2J0bjpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IHNhdHVyYXRlKDIpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi50YXNrX19tb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCBnb2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuICBcXHJcXG4uZ2VvZ3JhcGh5X19zdGF0ZW1lbnRzIHtcXHJcXG4gIHdpZHRoOiA0NTBweDtcXHJcXG4gIGhlaWdodDogMjcwcHg7XFxyXFxufVxcclxcbiAgXFxyXFxuLmdlb2dyYXBoeV9fZXhwbGFuYXRpb24ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4gIFxcclxcbi5zdGF0ZW1lbnRzX19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5zdGF0ZW1lbnRzX19zZW50ZW5jZSB7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBnb2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdGVtZW50c19fYW5zd2VycyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc3RhdGVtZW50c19fYW5zd2VycyBwIHtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5hbnN3ZXJfX2J0biB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogNDUlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuICAgICAgXFxyXFxuLmFuc3dlcl9fYnRuOmhvdmVyIHtcXHJcXG4gIGZpbHRlcjogc2F0dXJhdGUoMik7XFxyXFxufVxcclxcblxcclxcblt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQsXFxyXFxuW3R5cGU9XFxcInJhZGlvXFxcIl06bm90KDpjaGVja2VkKSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogLTk5OTlweDtcXHJcXG59XFxyXFxuXFxyXFxuW3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCArIGxhYmVsLFxcclxcblt0eXBlPVxcXCJyYWRpb1xcXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGNvbG9yOiAjNjY2O1xcclxcbn1cXHJcXG5cXHJcXG5bdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlLFxcclxcblt0eXBlPVxcXCJyYWRpb1xcXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxOHB4O1xcclxcbiAgICBoZWlnaHQ6IDE4cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdvbGQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxufVxcclxcblxcclxcblt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlcixcXHJcXG5bdHlwZT1cXFwicmFkaW9cXFwiXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgd2lkdGg6IDEycHg7XFxyXFxuICAgIGhlaWdodDogMTJweDtcXHJcXG4gICAgYmFja2dyb3VuZDogZ29sZDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDRweDtcXHJcXG4gICAgbGVmdDogNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxufVxcclxcblxcclxcblt0eXBlPVxcXCJyYWRpb1xcXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDphZnRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG59XFxyXFxuXFxyXFxuW3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50YXNrX19tb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGdvbGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWF0aHNfX2NvbXBhcmlzb24ge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1hdGhzX19leHBsYW5hdGlvbiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5tYXRoc19fY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1hdGhzX19pbnB1dCB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIG1hcmdpbjogMCAxNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ29sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFuc3dlcl9fYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiA0NSU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiAgICBcXHJcXG4uYW5zd2VyX19idG46aG92ZXIge1xcclxcbiAgZmlsdGVyOiBzYXR1cmF0ZSgyKTtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGFza19fbW9kYWx7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCBnb2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubWF0aHNfX2NvbnN0cnVjdG9yIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYXRoc19fZXhwbGFuYXRpb24ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29uc3RydWN0b3JfX2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnN0cnVjdG9yX19pdGVtIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBnb2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5zd2VyX19idG4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDQ1JTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuICAgIFxcclxcbi5hbnN3ZXJfX2J0bjpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IHNhdHVyYXRlKDIpO1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50YXNrX19tb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGdvbGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG4gIFxcclxcbi5tYXRoc19fZXF1YXRpb24ge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG59XFxyXFxuICBcXHJcXG4ubWF0aHNfX2V4cGxhbmF0aW9uIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuICBcXHJcXG4ubWF0aHNfX2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYXRoc19fZXhhbXBsZSB7XFxyXFxuICBwYWRkaW5nOiAwIDVweDtcXHJcXG59XFxyXFxuICBcXHJcXG4ubWF0aHNfX2lucHV0IHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgbWFyZ2luOiAwIDE1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBnb2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4gIFxcclxcbi5hbnN3ZXJfX2J0biB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogNDUlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4gICAgICBcXHJcXG4uYW5zd2VyX19idG46aG92ZXIge1xcclxcbiAgZmlsdGVyOiBzYXR1cmF0ZSgyKTtcXHJcXG59XFxyXFxuICBcXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50YXNrX19tb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGdvbGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG4gIFxcclxcbi5tYXRoc19fc2VxdWVuY2Uge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG59XFxyXFxuICBcXHJcXG4ubWF0aHNfX2V4cGxhbmF0aW9uIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuICBcXHJcXG4ubWF0aHNfX2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYXRoc19fdmFyaWFibGUge1xcclxcbiAgcGFkZGluZzogMCA1cHg7XFxyXFxufVxcclxcbiAgXFxyXFxuLm1hdGhzX19pbnB1dCB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIG1hcmdpbjogMCAxNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ29sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuICBcXHJcXG4uYW5zd2VyX19idG4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDQ1JTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuICAgICAgXFxyXFxuLmFuc3dlcl9fYnRuOmhvdmVyIHtcXHJcXG4gIGZpbHRlcjogc2F0dXJhdGUoMik7XFxyXFxufVxcclxcbiAgXFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGFza19fbW9kYWwge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCBnb2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuICBcXHJcXG4ucHJvZ3JhbW1pbmdfX2FiYnJldmlhdGlvbnMge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuICBcXHJcXG4uYWJicmV2aWF0aW9uc19fZXhwbGFuYXRpb24ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4gIFxcclxcbi5hYmJyZXZpYXRpb25zX19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5hYmJyZXZpYXRpb25zX193b3JkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBnb2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJicmV2aWF0aW9uc19fYW5zd2VycyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFiYnJldmlhdGlvbnNfX2l0ZW0ge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hYmJyZXZpYXRpb25zX19pdGVtOmhvdmVyIHtcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XFx0XFxyXFxuICBjb2xvcjogZ29sZDtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGFza19fbW9kYWwge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCBnb2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuICBcXHJcXG4ucHJvZ3JhbW1pbmdfX2dhcHMge1xcclxcbiAgd2lkdGg6IDUwMHB4O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuICBcXHJcXG4ucHJvZ3JhbW1pbmdfX2V4cGxhbmF0aW9uIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuICBcXHJcXG4uZ2Fwc19fY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhcHNfX3ZhbHVlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhcHNfX291dHB1dCB7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG4gIFxcclxcbi5nYXBzX19pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgbWFyZ2luOiAwIDNweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdvbGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbiAgXFxyXFxuLmFuc3dlcl9fYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiA0NSU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiAgICAgIFxcclxcbi5hbnN3ZXJfX2J0bjpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IHNhdHVyYXRlKDIpO1xcclxcbn1cXHJcXG4gIFxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRhc2tfX21vZGFsIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgZ29sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcbiAgXFxyXFxuLnByb2dyYW1taW5nX19vdXRwdXQge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiAyNzBweDtcXHJcXG59XFxyXFxuICBcXHJcXG4ucHJvZ3JhbW1pbmdfX2V4cGxhbmF0aW9uIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm91dHB1dF9fcXVlc3Rpb24ge1xcclxcbiAgbWFyZ2luOiAxNXB4IDA7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ29sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuICBcXHJcXG4ub3V0cHV0X19jb250YWluZXJ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5vdXRwdXRfX2Fuc3dlcnMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2dyYW1taW5nX19vdXRwdXQgLmNoZWNrYm94X19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFuc3dlcl9fYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiA0NSU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4gICAgICBcXHJcXG4uYW5zd2VyX19idG46aG92ZXIge1xcclxcbiAgZmlsdGVyOiBzYXR1cmF0ZSgyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94X19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94X19jb250YWluZXIgaW5wdXQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2ttYXJrIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveF9fY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3hfX2NvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2ttYXJrOmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94X19jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveF9fY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xcclxcbiAgbGVmdDogOXB4O1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICB3aWR0aDogNXB4O1xcclxcbiAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcXHJcXG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRhc2tfX21vZGFsIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgZ29sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcbiAgXFxyXFxuLnByb2dyYW1taW5nX19zdGF0ZW1lbnRzIHtcXHJcXG4gIHdpZHRoOiA0NTBweDtcXHJcXG4gIGhlaWdodDogMjcwcHg7XFxyXFxufVxcclxcbiAgXFxyXFxuLnByb2dyYW1taW5nX19leHBsYW5hdGlvbiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbiAgXFxyXFxuLnByb2dyYW1taW5nX19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5zdGF0ZW1lbnRzX19zZW50ZW5jZSB7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBnb2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdGVtZW50c19fYW5zd2VycyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdGVtZW50c19fYW5zd2VycyBwIHtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5hbnN3ZXJfX2J0biB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogNDUlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuICAgICAgXFxyXFxuLmFuc3dlcl9fYnRuOmhvdmVyIHtcXHJcXG4gIGZpbHRlcjogc2F0dXJhdGUoMik7XFxyXFxufVxcclxcblxcclxcblt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQsXFxyXFxuW3R5cGU9XFxcInJhZGlvXFxcIl06bm90KDpjaGVja2VkKSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogLTk5OTlweDtcXHJcXG59XFxyXFxuXFxyXFxuW3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCArIGxhYmVsLFxcclxcblt0eXBlPVxcXCJyYWRpb1xcXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGNvbG9yOiAjNjY2O1xcclxcbn1cXHJcXG5cXHJcXG5bdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlLFxcclxcblt0eXBlPVxcXCJyYWRpb1xcXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxOHB4O1xcclxcbiAgICBoZWlnaHQ6IDE4cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdvbGQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxufVxcclxcblxcclxcblt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlcixcXHJcXG5bdHlwZT1cXFwicmFkaW9cXFwiXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgd2lkdGg6IDEycHg7XFxyXFxuICAgIGhlaWdodDogMTJweDtcXHJcXG4gICAgYmFja2dyb3VuZDogZ29sZDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDRweDtcXHJcXG4gICAgbGVmdDogNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxufVxcclxcblxcclxcblt0eXBlPVxcXCJyYWRpb1xcXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDphZnRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG59XFxyXFxuXFxyXFxuW3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5nYW1lX19jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBtaW4taGVpZ2h0OiA2MDBweDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIiwiLyoqIVxyXG4gKiBTb3J0YWJsZVxyXG4gKiBAYXV0aG9yXHRSdWJhWGEgICA8dHJhc2hAcnViYXhhLm9yZz5cclxuICogQGF1dGhvclx0b3dlbm0gICAgPG93ZW4yMzM1NUBnbWFpbC5jb20+XHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKi9cclxuXHJcbihmdW5jdGlvbiBzb3J0YWJsZU1vZHVsZShmYWN0b3J5KSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzICE9IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdC8qIGpzaGludCBzdWI6dHJ1ZSAqL1xyXG5cdFx0d2luZG93W1wiU29ydGFibGVcIl0gPSBmYWN0b3J5KCk7XHJcblx0fVxyXG59KShmdW5jdGlvbiBzb3J0YWJsZUZhY3RvcnkoKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiIHx8ICF3aW5kb3cuZG9jdW1lbnQpIHtcclxuXHRcdHJldHVybiBmdW5jdGlvbiBzb3J0YWJsZUVycm9yKCkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJTb3J0YWJsZS5qcyByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dmFyIGRyYWdFbCxcclxuXHRcdHBhcmVudEVsLFxyXG5cdFx0Z2hvc3RFbCxcclxuXHRcdGNsb25lRWwsXHJcblx0XHRyb290RWwsXHJcblx0XHRuZXh0RWwsXHJcblx0XHRsYXN0RG93bkVsLFxyXG5cclxuXHRcdHNjcm9sbEVsLFxyXG5cdFx0c2Nyb2xsUGFyZW50RWwsXHJcblx0XHRzY3JvbGxDdXN0b21GbixcclxuXHJcblx0XHRvbGRJbmRleCxcclxuXHRcdG5ld0luZGV4LFxyXG5cclxuXHRcdGFjdGl2ZUdyb3VwLFxyXG5cdFx0cHV0U29ydGFibGUsXHJcblxyXG5cdFx0YXV0b1Njcm9sbHMgPSBbXSxcclxuXHRcdHNjcm9sbGluZyA9IGZhbHNlLFxyXG5cclxuXHRcdHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsLFxyXG5cdFx0bGFzdFBvaW50ZXJFbGVtWCxcclxuXHRcdGxhc3RQb2ludGVyRWxlbVksXHJcblxyXG5cdFx0dGFwRXZ0LFxyXG5cdFx0dG91Y2hFdnQsXHJcblxyXG5cdFx0bW92ZWQsXHJcblxyXG5cdFx0bGFzdFRhcmdldCxcclxuXHRcdGxhc3REaXJlY3Rpb24sXHJcblx0XHRwYXN0Rmlyc3RJbnZlcnRUaHJlc2ggPSBmYWxzZSxcclxuXHRcdGlzQ2lyY3Vtc3RhbnRpYWxJbnZlcnQgPSBmYWxzZSxcclxuXHJcblx0XHRmb3JSZXBhaW50RHVtbXksXHJcblx0XHRyZWFsRHJhZ0VsUmVjdCwgLy8gZHJhZ0VsIHJlY3QgYWZ0ZXIgY3VycmVudCBhbmltYXRpb25cclxuXHJcblx0XHQvKiogQGNvbnN0ICovXHJcblx0XHRSX1NQQUNFID0gL1xccysvZyxcclxuXHJcblx0XHRleHBhbmRvID0gJ1NvcnRhYmxlJyArIChuZXcgRGF0ZSkuZ2V0VGltZSgpLFxyXG5cclxuXHRcdHdpbiA9IHdpbmRvdyxcclxuXHRcdGRvY3VtZW50ID0gd2luLmRvY3VtZW50LFxyXG5cdFx0cGFyc2VJbnQgPSB3aW4ucGFyc2VJbnQsXHJcblx0XHRzZXRUaW1lb3V0ID0gd2luLnNldFRpbWVvdXQsXHJcblxyXG5cdFx0JCA9IHdpbi5qUXVlcnkgfHwgd2luLlplcHRvLFxyXG5cdFx0UG9seW1lciA9IHdpbi5Qb2x5bWVyLFxyXG5cclxuXHRcdGNhcHR1cmVNb2RlID0ge1xyXG5cdFx0XHRjYXB0dXJlOiBmYWxzZSxcclxuXHRcdFx0cGFzc2l2ZTogZmFsc2VcclxuXHRcdH0sXHJcblxyXG5cdFx0c3VwcG9ydERyYWdnYWJsZSA9ICgnZHJhZ2dhYmxlJyBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSksXHJcblx0XHRzdXBwb3J0Q3NzUG9pbnRlckV2ZW50cyA9IChmdW5jdGlvbiAoZWwpIHtcclxuXHRcdFx0Ly8gZmFsc2Ugd2hlbiBJRTExXHJcblx0XHRcdGlmICghIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyg/OlRyaWRlbnQuKnJ2WyA6XT8xMVxcLnxtc2llKS9pKSkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3gnKTtcclxuXHRcdFx0ZWwuc3R5bGUuY3NzVGV4dCA9ICdwb2ludGVyLWV2ZW50czphdXRvJztcclxuXHRcdFx0cmV0dXJuIGVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPT09ICdhdXRvJztcclxuXHRcdH0pKCksXHJcblxyXG5cdFx0X3NpbGVudCA9IGZhbHNlLFxyXG5cdFx0X2FsaWduZWRTaWxlbnQgPSBmYWxzZSxcclxuXHJcblx0XHRhYnMgPSBNYXRoLmFicyxcclxuXHRcdG1pbiA9IE1hdGgubWluLFxyXG5cclxuXHRcdHNhdmVkSW5wdXRDaGVja2VkID0gW10sXHJcblx0XHR0b3VjaERyYWdPdmVyTGlzdGVuZXJzID0gW10sXHJcblxyXG5cdFx0YWx3YXlzRmFsc2UgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcclxuXHJcblx0XHRfZGV0ZWN0RGlyZWN0aW9uID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMpIHtcclxuXHRcdFx0dmFyIGVsQ1NTID0gX2NzcyhlbCksXHJcblx0XHRcdFx0ZWxXaWR0aCA9IHBhcnNlSW50KGVsQ1NTLndpZHRoKSxcclxuXHRcdFx0XHRjaGlsZDEgPSBfZ2V0Q2hpbGQoZWwsIDAsIG9wdGlvbnMpLFxyXG5cdFx0XHRcdGNoaWxkMiA9IF9nZXRDaGlsZChlbCwgMSwgb3B0aW9ucyksXHJcblx0XHRcdFx0Zmlyc3RDaGlsZENTUyA9IGNoaWxkMSAmJiBfY3NzKGNoaWxkMSksXHJcblx0XHRcdFx0c2Vjb25kQ2hpbGRDU1MgPSBjaGlsZDIgJiYgX2NzcyhjaGlsZDIpLFxyXG5cdFx0XHRcdGZpcnN0Q2hpbGRXaWR0aCA9IGZpcnN0Q2hpbGRDU1MgJiYgcGFyc2VJbnQoZmlyc3RDaGlsZENTUy5tYXJnaW5MZWZ0KSArIHBhcnNlSW50KGZpcnN0Q2hpbGRDU1MubWFyZ2luUmlnaHQpICsgY2hpbGQxLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxyXG5cdFx0XHRcdHNlY29uZENoaWxkV2lkdGggPSBzZWNvbmRDaGlsZENTUyAmJiBwYXJzZUludChzZWNvbmRDaGlsZENTUy5tYXJnaW5MZWZ0KSArIHBhcnNlSW50KHNlY29uZENoaWxkQ1NTLm1hcmdpblJpZ2h0KSArIGNoaWxkMi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxyXG5cdFx0XHQ7XHJcblx0XHRcdGlmIChlbENTUy5kaXNwbGF5ID09PSAnZmxleCcpIHtcclxuXHRcdFx0XHRyZXR1cm4gZWxDU1MuZmxleERpcmVjdGlvbiA9PT0gJ2NvbHVtbicgfHwgZWxDU1MuZmxleERpcmVjdGlvbiA9PT0gJ2NvbHVtbi1yZXZlcnNlJ1xyXG5cdFx0XHRcdD8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gKGNoaWxkMSAmJlxyXG5cdFx0XHRcdChcclxuXHRcdFx0XHRcdGZpcnN0Q2hpbGRDU1MuZGlzcGxheSA9PT0gJ2Jsb2NrJyB8fFxyXG5cdFx0XHRcdFx0Zmlyc3RDaGlsZENTUy5kaXNwbGF5ID09PSAnZ3JpZCcgfHxcclxuXHRcdFx0XHRcdGZpcnN0Q2hpbGRXaWR0aCA+PSBlbFdpZHRoICYmXHJcblx0XHRcdFx0XHRlbENTUy5mbG9hdCA9PT0gJ25vbmUnIHx8XHJcblx0XHRcdFx0XHRjaGlsZDIgJiZcclxuXHRcdFx0XHRcdGVsQ1NTLmZsb2F0ID09PSAnbm9uZScgJiZcclxuXHRcdFx0XHRcdGZpcnN0Q2hpbGRXaWR0aCArIHNlY29uZENoaWxkV2lkdGggPiBlbFdpZHRoXHJcblx0XHRcdFx0KSA/XHJcblx0XHRcdFx0J3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJ1xyXG5cdFx0XHQpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRfaXNJblJvd0NvbHVtbiA9IGZ1bmN0aW9uKHgsIHksIGVsLCBheGlzLCBvcHRpb25zKSB7XHJcblx0XHRcdHZhciB0YXJnZXRSZWN0ID0gcmVhbERyYWdFbFJlY3QgfHwgZHJhZ0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG5cdFx0XHRcdHRhcmdldFMxT3BwID0gYXhpcyA9PT0gJ3ZlcnRpY2FsJyA/IHRhcmdldFJlY3QubGVmdCA6IHRhcmdldFJlY3QudG9wLFxyXG5cdFx0XHRcdHRhcmdldFMyT3BwID0gYXhpcyA9PT0gJ3ZlcnRpY2FsJyA/IHRhcmdldFJlY3QucmlnaHQgOiB0YXJnZXRSZWN0LmJvdHRvbSxcclxuXHRcdFx0XHRtb3VzZU9uT3BwQXhpcyA9IGF4aXMgPT09ICd2ZXJ0aWNhbCcgPyB4IDogeVxyXG5cdFx0XHQ7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGFyZ2V0UzFPcHAgPCBtb3VzZU9uT3BwQXhpcyAmJiBtb3VzZU9uT3BwQXhpcyA8IHRhcmdldFMyT3BwO1xyXG5cdFx0fSxcclxuXHJcblx0XHRfZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQgPSBmdW5jdGlvbihlbCwgaW5jbHVkZVNlbGYpIHtcclxuXHRcdFx0Ly8gc2tpcCB0byB3aW5kb3dcclxuXHRcdFx0aWYgKCFlbCB8fCAhZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSByZXR1cm4gd2luO1xyXG5cclxuXHRcdFx0dmFyIGVsZW0gPSBlbDtcclxuXHRcdFx0dmFyIGdvdFNlbGYgPSBmYWxzZTtcclxuXHRcdFx0ZG8ge1xyXG5cdFx0XHRcdC8vIHdlIGRvbid0IG5lZWQgdG8gZ2V0IGVsZW0gY3NzIGlmIGl0IGlzbid0IGV2ZW4gb3ZlcmZsb3dpbmcgaW4gdGhlIGZpcnN0IHBsYWNlIChwZXJmb3JtYW5jZSlcclxuXHRcdFx0XHRpZiAoZWxlbS5jbGllbnRXaWR0aCA8IGVsZW0uc2Nyb2xsV2lkdGggfHwgZWxlbS5jbGllbnRIZWlnaHQgPCBlbGVtLnNjcm9sbEhlaWdodCkge1xyXG5cdFx0XHRcdFx0dmFyIGVsZW1DU1MgPSBfY3NzKGVsZW0pO1xyXG5cdFx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0XHRlbGVtLmNsaWVudFdpZHRoIDwgZWxlbS5zY3JvbGxXaWR0aCAmJiAoZWxlbUNTUy5vdmVyZmxvd1ggPT0gJ2F1dG8nIHx8IGVsZW1DU1Mub3ZlcmZsb3dYID09ICdzY3JvbGwnKSB8fFxyXG5cdFx0XHRcdFx0XHRlbGVtLmNsaWVudEhlaWdodCA8IGVsZW0uc2Nyb2xsSGVpZ2h0ICYmIChlbGVtQ1NTLm92ZXJmbG93WSA9PSAnYXV0bycgfHwgZWxlbUNTUy5vdmVyZmxvd1kgPT0gJ3Njcm9sbCcpXHJcblx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFlbGVtIHx8ICFlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCB8fCBlbGVtID09PSBkb2N1bWVudC5ib2R5KSByZXR1cm4gd2luO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGdvdFNlbGYgfHwgaW5jbHVkZVNlbGYpIHJldHVybiBlbGVtO1xyXG5cdFx0XHRcdFx0XHRnb3RTZWxmID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdC8qIGpzaGludCBib3NzOnRydWUgKi9cclxuXHRcdFx0fSB3aGlsZSAoZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gd2luO1xyXG5cdFx0fSxcclxuXHJcblx0XHRfYXV0b1Njcm9sbCA9IF90aHJvdHRsZShmdW5jdGlvbiAoLyoqRXZlbnQqL2V2dCwgLyoqT2JqZWN0Ki9vcHRpb25zLCAvKipIVE1MRWxlbWVudCovcm9vdEVsLCAvKipCb29sZWFuKi9pc0ZhbGxiYWNrKSB7XHJcblx0XHRcdC8vIEJ1ZzogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTA1NTIxXHJcblx0XHRcdGlmIChvcHRpb25zLnNjcm9sbCkge1xyXG5cdFx0XHRcdHZhciBfdGhpcyA9IHJvb3RFbCA/IHJvb3RFbFtleHBhbmRvXSA6IHdpbmRvdyxcclxuXHRcdFx0XHRcdHJlY3QsXHJcblx0XHRcdFx0XHRjc3MsXHJcblx0XHRcdFx0XHRzZW5zID0gb3B0aW9ucy5zY3JvbGxTZW5zaXRpdml0eSxcclxuXHRcdFx0XHRcdHNwZWVkID0gb3B0aW9ucy5zY3JvbGxTcGVlZCxcclxuXHJcblx0XHRcdFx0XHR4ID0gZXZ0LmNsaWVudFgsXHJcblx0XHRcdFx0XHR5ID0gZXZ0LmNsaWVudFksXHJcblxyXG5cdFx0XHRcdFx0d2luV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCxcclxuXHRcdFx0XHRcdHdpbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCxcclxuXHJcblx0XHRcdFx0XHR2eCxcclxuXHRcdFx0XHRcdHZ5LFxyXG5cclxuXHRcdFx0XHRcdHNjcm9sbFRoaXNJbnN0YW5jZSA9IGZhbHNlXHJcblx0XHRcdFx0O1xyXG5cclxuXHRcdFx0XHQvLyBEZXRlY3Qgc2Nyb2xsRWxcclxuXHRcdFx0XHRpZiAoc2Nyb2xsUGFyZW50RWwgIT09IHJvb3RFbCkge1xyXG5cdFx0XHRcdFx0X2NsZWFyQXV0b1Njcm9sbHMoKTtcclxuXHJcblx0XHRcdFx0XHRzY3JvbGxFbCA9IG9wdGlvbnMuc2Nyb2xsO1xyXG5cdFx0XHRcdFx0c2Nyb2xsQ3VzdG9tRm4gPSBvcHRpb25zLnNjcm9sbEZuO1xyXG5cclxuXHRcdFx0XHRcdGlmIChzY3JvbGxFbCA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0XHRzY3JvbGxFbCA9IF9nZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChyb290RWwsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRzY3JvbGxQYXJlbnRFbCA9IHNjcm9sbEVsO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRcdHZhciBsYXllcnNPdXQgPSAwO1xyXG5cdFx0XHRcdHZhciBjdXJyZW50UGFyZW50ID0gc2Nyb2xsRWw7XHJcblx0XHRcdFx0ZG8ge1xyXG5cdFx0XHRcdFx0dmFyIGVsO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFyZW50ICYmIGN1cnJlbnRQYXJlbnQgIT09IHdpbikge1xyXG5cdFx0XHRcdFx0XHRlbCA9IGN1cnJlbnRQYXJlbnQ7XHJcblx0XHRcdFx0XHRcdGNzcyA9IF9jc3MoZWwpO1xyXG5cdFx0XHRcdFx0XHRyZWN0ID0gY3VycmVudFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0XHRcdFx0dnggPSBlbC5jbGllbnRXaWR0aCA8IGVsLnNjcm9sbFdpZHRoICYmIChjc3Mub3ZlcmZsb3dYID09ICdhdXRvJyB8fCBjc3Mub3ZlcmZsb3dYID09ICdzY3JvbGwnKSAmJlxyXG5cdFx0XHRcdFx0XHRcdCAoKGFicyhyZWN0LnJpZ2h0IC0geCkgPD0gc2VucykgLSAoYWJzKHJlY3QubGVmdCAtIHgpIDw9IHNlbnMpKTtcclxuXHJcblx0XHRcdFx0XHRcdHZ5ID0gZWwuY2xpZW50SGVpZ2h0IDwgZWwuc2Nyb2xsSGVpZ2h0ICYmIChjc3Mub3ZlcmZsb3dZID09ICdhdXRvJyB8fCBjc3Mub3ZlcmZsb3dZID09ICdzY3JvbGwnKSAmJlxyXG5cdFx0XHRcdFx0XHRcdCAoKGFicyhyZWN0LmJvdHRvbSAtIHkpIDw9IHNlbnMpIC0gKGFicyhyZWN0LnRvcCAtIHkpIDw9IHNlbnMpKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoY3VycmVudFBhcmVudCA9PT0gd2luKSB7XHJcblx0XHRcdFx0XHRcdGVsID0gd2luO1xyXG5cdFx0XHRcdFx0XHR2eCA9ICh3aW5XaWR0aCAtIHggPD0gc2VucykgLSAoeCA8PSBzZW5zKTtcclxuXHRcdFx0XHRcdFx0dnkgPSAod2luSGVpZ2h0IC0geSA8PSBzZW5zKSAtICh5IDw9IHNlbnMpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmICghYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XSkge1xyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8PSBsYXllcnNPdXQ7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdGlmICghYXV0b1Njcm9sbHNbaV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdGF1dG9TY3JvbGxzW2ldID0ge307XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKGF1dG9TY3JvbGxzW2xheWVyc091dF0udnggIT0gdnggfHwgYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS52eSAhPSB2eSB8fCBhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLmVsICE9PSBlbCkge1xyXG5cdFx0XHRcdFx0XHRhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLmVsID0gZWw7XHJcblx0XHRcdFx0XHRcdGF1dG9TY3JvbGxzW2xheWVyc091dF0udnggPSB2eDtcclxuXHRcdFx0XHRcdFx0YXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS52eSA9IHZ5O1xyXG5cclxuXHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLnBpZCk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoZWwgJiYgKHZ4ICE9IDAgfHwgdnkgIT0gMCkpIHtcclxuXHRcdFx0XHRcdFx0XHRzY3JvbGxUaGlzSW5zdGFuY2UgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdC8qIGpzaGludCBsb29wZnVuYzp0cnVlICovXHJcblx0XHRcdFx0XHRcdFx0YXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS5waWQgPSBzZXRJbnRlcnZhbCgoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gZW11bGF0ZSBkcmFnIG92ZXIgZHVyaW5nIGF1dG9zY3JvbGwgKGZhbGxiYWNrKSwgZW11bGF0aW5nIG5hdGl2ZSBEbkQgYmVoYXZpb3VyXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoaXNGYWxsYmFjayAmJiB0aGlzLmxheWVyID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFNvcnRhYmxlLmFjdGl2ZS5fZW11bGF0ZURyYWdPdmVyKHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIHNjcm9sbE9mZnNldFkgPSBhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS52eSA/IGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLnZ5ICogc3BlZWQgOiAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIHNjcm9sbE9mZnNldFggPSBhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS52eCA/IGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLnZ4ICogc3BlZWQgOiAwO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2Yoc2Nyb2xsQ3VzdG9tRm4pKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChzY3JvbGxDdXN0b21Gbi5jYWxsKF90aGlzLCBzY3JvbGxPZmZzZXRYLCBzY3JvbGxPZmZzZXRZLCBldnQsIHRvdWNoRXZ0LCBhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS5lbCkgIT09ICdjb250aW51ZScpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS5lbCA9PT0gd2luKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHdpbi5zY3JvbGxUbyh3aW4ucGFnZVhPZmZzZXQgKyBzY3JvbGxPZmZzZXRYLCB3aW4ucGFnZVlPZmZzZXQgKyBzY3JvbGxPZmZzZXRZKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLmVsLnNjcm9sbFRvcCArPSBzY3JvbGxPZmZzZXRZO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS5lbC5zY3JvbGxMZWZ0ICs9IHNjcm9sbE9mZnNldFg7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSkuYmluZCh7bGF5ZXI6IGxheWVyc091dH0pLCAyNCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGxheWVyc091dCsrO1xyXG5cdFx0XHRcdH0gd2hpbGUgKG9wdGlvbnMuYnViYmxlU2Nyb2xsICYmIGN1cnJlbnRQYXJlbnQgIT09IHdpbiAmJiAoY3VycmVudFBhcmVudCA9IF9nZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChjdXJyZW50UGFyZW50LCBmYWxzZSkpKTtcclxuXHRcdFx0XHRzY3JvbGxpbmcgPSBzY3JvbGxUaGlzSW5zdGFuY2U7IC8vIGluIGNhc2UgYW5vdGhlciBmdW5jdGlvbiBjYXRjaGVzIHNjcm9sbGluZyBhcyBmYWxzZSBpbiBiZXR3ZWVuIHdoZW4gaXQgaXMgbm90XHJcblx0XHRcdH1cclxuXHRcdH0sIDMwKSxcclxuXHJcblx0XHRfY2xlYXJBdXRvU2Nyb2xscyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0YXV0b1Njcm9sbHMuZm9yRWFjaChmdW5jdGlvbihhdXRvU2Nyb2xsKSB7XHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChhdXRvU2Nyb2xsLnBpZCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRhdXRvU2Nyb2xscyA9IFtdO1xyXG5cdFx0fSxcclxuXHJcblx0XHRfcHJlcGFyZUdyb3VwID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuXHRcdFx0ZnVuY3Rpb24gdG9Gbih2YWx1ZSwgcHVsbCkge1xyXG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbih0bywgZnJvbSwgZHJhZ0VsLCBldnQpIHtcclxuXHRcdFx0XHRcdHZhciByZXQ7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHZhbHVlID09IG51bGwgJiYgcHVsbCkge1xyXG5cdFx0XHRcdFx0XHRyZXQgPSB0cnVlOyAvLyBkZWZhdWx0IHB1bGwgdmFsdWU6IHRydWUgKGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5KVxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHRyZXQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAocHVsbCAmJiB2YWx1ZSA9PT0gJ2Nsb25lJykge1xyXG5cdFx0XHRcdFx0XHRyZXQgPSB2YWx1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0XHRcdHJldCA9IHZhbHVlKHRvLCBmcm9tLCBkcmFnRWwsIGV2dCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YXIgb3RoZXJHcm91cCA9IChwdWxsID8gdG8gOiBmcm9tKS5vcHRpb25zLmdyb3VwLm5hbWU7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXQgPSAodmFsdWUgPT09IHRydWUgfHxcclxuXHRcdFx0XHRcdFx0KHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgPT09IG90aGVyR3JvdXApIHx8XHJcblx0XHRcdFx0XHRcdCh2YWx1ZS5qb2luICYmIHZhbHVlLmluZGV4T2Yob3RoZXJHcm91cCkgPiAtMSkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIHJldCB8fCAodG8ub3B0aW9ucy5ncm91cC5uYW1lICYmIGZyb20ub3B0aW9ucy5ncm91cC5uYW1lICYmIHRvLm9wdGlvbnMuZ3JvdXAubmFtZSA9PT0gZnJvbS5vcHRpb25zLmdyb3VwLm5hbWUpO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBncm91cCA9IHt9O1xyXG5cdFx0XHR2YXIgb3JpZ2luYWxHcm91cCA9IG9wdGlvbnMuZ3JvdXA7XHJcblxyXG5cdFx0XHRpZiAoIW9yaWdpbmFsR3JvdXAgfHwgdHlwZW9mIG9yaWdpbmFsR3JvdXAgIT0gJ29iamVjdCcpIHtcclxuXHRcdFx0XHRvcmlnaW5hbEdyb3VwID0ge25hbWU6IG9yaWdpbmFsR3JvdXB9O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRncm91cC5uYW1lID0gb3JpZ2luYWxHcm91cC5uYW1lO1xyXG5cdFx0XHRncm91cC5jaGVja1B1bGwgPSB0b0ZuKG9yaWdpbmFsR3JvdXAucHVsbCwgdHJ1ZSk7XHJcblx0XHRcdGdyb3VwLmNoZWNrUHV0ID0gdG9GbihvcmlnaW5hbEdyb3VwLnB1dCk7XHJcblx0XHRcdGdyb3VwLnJldmVydENsb25lID0gb3JpZ2luYWxHcm91cC5yZXZlcnRDbG9uZTtcclxuXHJcblx0XHRcdG9wdGlvbnMuZ3JvdXAgPSBncm91cDtcclxuXHRcdH0sXHJcblxyXG5cdFx0X2NoZWNrQWxpZ25tZW50ID0gZnVuY3Rpb24oZXZ0KSB7XHJcblx0XHRcdGlmICghZHJhZ0VsKSByZXR1cm47XHJcblx0XHRcdGRyYWdFbC5wYXJlbnROb2RlW2V4cGFuZG9dICYmIGRyYWdFbC5wYXJlbnROb2RlW2V4cGFuZG9dLl9jb21wdXRlSXNBbGlnbmVkKGV2dCk7XHJcblx0XHR9XHJcblx0O1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQGNsYXNzICBTb3J0YWJsZVxyXG5cdCAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSAgZWxcclxuXHQgKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgIFtvcHRpb25zXVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIFNvcnRhYmxlKGVsLCBvcHRpb25zKSB7XHJcblx0XHRpZiAoIShlbCAmJiBlbC5ub2RlVHlwZSAmJiBlbC5ub2RlVHlwZSA9PT0gMSkpIHtcclxuXHRcdFx0dGhyb3cgJ1NvcnRhYmxlOiBgZWxgIG11c3QgYmUgSFRNTEVsZW1lbnQsIGFuZCBub3QgJyArIHt9LnRvU3RyaW5nLmNhbGwoZWwpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZWwgPSBlbDsgLy8gcm9vdCBlbGVtZW50XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zID0gX2V4dGVuZCh7fSwgb3B0aW9ucyk7XHJcblxyXG5cclxuXHRcdC8vIEV4cG9ydCBpbnN0YW5jZVxyXG5cdFx0ZWxbZXhwYW5kb10gPSB0aGlzO1xyXG5cclxuXHRcdC8vIERlZmF1bHQgb3B0aW9uc1xyXG5cdFx0dmFyIGRlZmF1bHRzID0ge1xyXG5cdFx0XHRncm91cDogbnVsbCxcclxuXHRcdFx0c29ydDogdHJ1ZSxcclxuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlLFxyXG5cdFx0XHRzdG9yZTogbnVsbCxcclxuXHRcdFx0aGFuZGxlOiBudWxsLFxyXG5cdFx0XHRzY3JvbGw6IHRydWUsXHJcblx0XHRcdHNjcm9sbFNlbnNpdGl2aXR5OiAzMCxcclxuXHRcdFx0c2Nyb2xsU3BlZWQ6IDEwLFxyXG5cdFx0XHRidWJibGVTY3JvbGw6IHRydWUsXHJcblx0XHRcdGRyYWdnYWJsZTogL1t1b11sL2kudGVzdChlbC5ub2RlTmFtZSkgPyAnbGknIDogJz4qJyxcclxuXHJcblx0XHRcdHN3YXBUaHJlc2hvbGQ6IDEsIC8vIHBlcmNlbnRhZ2U7IDAgPD0geCA8PSAxXHJcblx0XHRcdGludmVydFN3YXA6IGZhbHNlLCAvLyBpbnZlcnQgYWx3YXlzXHJcblx0XHRcdGludmVydGVkU3dhcFRocmVzaG9sZDogbnVsbCwgLy8gd2lsbCBiZSBzZXQgdG8gc2FtZSBhcyBzd2FwVGhyZXNob2xkIGlmIGRlZmF1bHRcclxuXHJcblx0XHRcdGdob3N0Q2xhc3M6ICdzb3J0YWJsZS1naG9zdCcsXHJcblx0XHRcdGNob3NlbkNsYXNzOiAnc29ydGFibGUtY2hvc2VuJyxcclxuXHRcdFx0ZHJhZ0NsYXNzOiAnc29ydGFibGUtZHJhZycsXHJcblx0XHRcdGlnbm9yZTogJ2EsIGltZycsXHJcblx0XHRcdGZpbHRlcjogbnVsbCxcclxuXHRcdFx0cHJldmVudE9uRmlsdGVyOiB0cnVlLFxyXG5cdFx0XHRhbmltYXRpb246IDAsXHJcblx0XHRcdHNldERhdGE6IGZ1bmN0aW9uIChkYXRhVHJhbnNmZXIsIGRyYWdFbCkge1xyXG5cdFx0XHRcdGRhdGFUcmFuc2Zlci5zZXREYXRhKCdUZXh0JywgZHJhZ0VsLnRleHRDb250ZW50KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZHJvcEJ1YmJsZTogZmFsc2UsXHJcblx0XHRcdGRyYWdvdmVyQnViYmxlOiBmYWxzZSxcclxuXHRcdFx0ZGF0YUlkQXR0cjogJ2RhdGEtaWQnLFxyXG5cdFx0XHRkZWxheTogMCxcclxuXHRcdFx0dG91Y2hTdGFydFRocmVzaG9sZDogcGFyc2VJbnQod2luZG93LmRldmljZVBpeGVsUmF0aW8sIDEwKSB8fCAxLFxyXG5cdFx0XHRmb3JjZUZhbGxiYWNrOiBmYWxzZSxcclxuXHRcdFx0ZmFsbGJhY2tDbGFzczogJ3NvcnRhYmxlLWZhbGxiYWNrJyxcclxuXHRcdFx0ZmFsbGJhY2tPbkJvZHk6IGZhbHNlLFxyXG5cdFx0XHRmYWxsYmFja1RvbGVyYW5jZTogMCxcclxuXHRcdFx0ZmFsbGJhY2tPZmZzZXQ6IHt4OiAwLCB5OiAwfSxcclxuXHRcdFx0c3VwcG9ydFBvaW50ZXI6IFNvcnRhYmxlLnN1cHBvcnRQb2ludGVyICE9PSBmYWxzZSAmJiAoXHJcblx0XHRcdFx0KCdQb2ludGVyRXZlbnQnIGluIHdpbmRvdykgfHxcclxuXHRcdFx0XHR3aW5kb3cubmF2aWdhdG9yICYmICgnbXNQb2ludGVyRW5hYmxlZCcgaW4gd2luZG93Lm5hdmlnYXRvcikgLy8gbWljcm9zb2Z0XHJcblx0XHRcdClcclxuXHRcdH07XHJcblxyXG5cclxuXHRcdC8vIFNldCBkZWZhdWx0IG9wdGlvbnNcclxuXHRcdGZvciAodmFyIG5hbWUgaW4gZGVmYXVsdHMpIHtcclxuXHRcdFx0IShuYW1lIGluIG9wdGlvbnMpICYmIChvcHRpb25zW25hbWVdID0gZGVmYXVsdHNbbmFtZV0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghKCdkaXJlY3Rpb24nIGluIG9wdGlvbnMpKSB7XHJcblx0XHRcdG9wdGlvbnMuZGlyZWN0aW9uID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIF9kZXRlY3REaXJlY3Rpb24oZWwsIG9wdGlvbnMpO1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdF9wcmVwYXJlR3JvdXAob3B0aW9ucyk7XHJcblxyXG5cdFx0b3B0aW9ucy5pbnZlcnRlZFN3YXBUaHJlc2hvbGQgPT0gbnVsbCAmJiAob3B0aW9ucy5pbnZlcnRlZFN3YXBUaHJlc2hvbGQgPSBvcHRpb25zLnN3YXBUaHJlc2hvbGQpO1xyXG5cdFx0Ly8gQmluZCBhbGwgcHJpdmF0ZSBtZXRob2RzXHJcblx0XHRmb3IgKHZhciBmbiBpbiB0aGlzKSB7XHJcblx0XHRcdGlmIChmbi5jaGFyQXQoMCkgPT09ICdfJyAmJiB0eXBlb2YgdGhpc1tmbl0gPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0XHR0aGlzW2ZuXSA9IHRoaXNbZm5dLmJpbmQodGhpcyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBTZXR1cCBkcmFnIG1vZGVcclxuXHRcdHRoaXMubmF0aXZlRHJhZ2dhYmxlID0gb3B0aW9ucy5mb3JjZUZhbGxiYWNrID8gZmFsc2UgOiBzdXBwb3J0RHJhZ2dhYmxlO1xyXG5cclxuXHRcdC8vIEJpbmQgZXZlbnRzXHJcblx0XHRfb24oZWwsICdtb3VzZWRvd24nLCB0aGlzLl9vblRhcFN0YXJ0KTtcclxuXHRcdF9vbihlbCwgJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRhcFN0YXJ0KTtcclxuXHRcdG9wdGlvbnMuc3VwcG9ydFBvaW50ZXIgJiYgX29uKGVsLCAncG9pbnRlcmRvd24nLCB0aGlzLl9vblRhcFN0YXJ0KTtcclxuXHJcblx0XHRpZiAodGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcclxuXHRcdFx0X29uKGVsLCAnZHJhZ292ZXInLCB0aGlzKTtcclxuXHRcdFx0X29uKGVsLCAnZHJhZ2VudGVyJywgdGhpcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dG91Y2hEcmFnT3Zlckxpc3RlbmVycy5wdXNoKHRoaXMuX29uRHJhZ092ZXIpO1xyXG5cclxuXHRcdC8vIFJlc3RvcmUgc29ydGluZ1xyXG5cdFx0b3B0aW9ucy5zdG9yZSAmJiBvcHRpb25zLnN0b3JlLmdldCAmJiB0aGlzLnNvcnQob3B0aW9ucy5zdG9yZS5nZXQodGhpcykgfHwgW10pO1xyXG5cdH1cclxuXHJcblx0U29ydGFibGUucHJvdG90eXBlID0gLyoqIEBsZW5kcyBTb3J0YWJsZS5wcm90b3R5cGUgKi8ge1xyXG5cdFx0Y29uc3RydWN0b3I6IFNvcnRhYmxlLFxyXG5cclxuXHRcdC8vIGlzIG1vdXNlIGFsaWduZWQgd2l0aCBkcmFnRWw/XHJcblx0XHRfaXNBbGlnbmVkOiB0cnVlLFxyXG5cclxuXHRcdF9jb21wdXRlSXNBbGlnbmVkOiBmdW5jdGlvbihldnQsIGlzRHJhZ0VsKSB7XHJcblx0XHRcdGlmIChfYWxpZ25lZFNpbGVudCkgcmV0dXJuO1xyXG5cdFx0XHRpZiAoIWRyYWdFbCB8fCBkcmFnRWwucGFyZW50Tm9kZSAhPT0gdGhpcy5lbCkgcmV0dXJuO1xyXG5cdFx0XHRpZiAoaXNEcmFnRWwgIT09IHRydWUgJiYgaXNEcmFnRWwgIT09IGZhbHNlKSB7XHJcblx0XHRcdFx0aXNEcmFnRWwgPSAhIV9jbG9zZXN0KGV2dC50YXJnZXQsIG51bGwsIGRyYWdFbCwgdHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5faXNBbGlnbmVkID0gIXNjcm9sbGluZyAmJiAoaXNEcmFnRWwgfHwgdGhpcy5faXNBbGlnbmVkICYmIF9pc0luUm93Q29sdW1uKGV2dC5jbGllbnRYLCBldnQuY2xpZW50WSwgdGhpcy5lbCwgdGhpcy5fZ2V0RGlyZWN0aW9uKGV2dCwgbnVsbCksIHRoaXMub3B0aW9ucykpO1xyXG5cdFx0XHRfYWxpZ25lZFNpbGVudCA9IHRydWU7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0X2FsaWduZWRTaWxlbnQgPSBmYWxzZTtcclxuXHRcdFx0fSwgMzApO1xyXG5cdFx0fSxcclxuXHJcblx0XHRfZ2V0RGlyZWN0aW9uOiBmdW5jdGlvbihldnQsIHRhcmdldCkge1xyXG5cdFx0XHRyZXR1cm4gKHR5cGVvZiB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uID09PSAnZnVuY3Rpb24nKSA/IHRoaXMub3B0aW9ucy5kaXJlY3Rpb24uY2FsbCh0aGlzLCBldnQsIHRhcmdldCwgZHJhZ0VsKSA6IHRoaXMub3B0aW9ucy5kaXJlY3Rpb247XHJcblx0XHR9LFxyXG5cclxuXHRcdF9vblRhcFN0YXJ0OiBmdW5jdGlvbiAoLyoqIEV2ZW50fFRvdWNoRXZlbnQgKi9ldnQpIHtcclxuXHRcdFx0dmFyIF90aGlzID0gdGhpcyxcclxuXHRcdFx0XHRlbCA9IHRoaXMuZWwsXHJcblx0XHRcdFx0b3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcclxuXHRcdFx0XHRwcmV2ZW50T25GaWx0ZXIgPSBvcHRpb25zLnByZXZlbnRPbkZpbHRlcixcclxuXHRcdFx0XHR0eXBlID0gZXZ0LnR5cGUsXHJcblx0XHRcdFx0dG91Y2ggPSBldnQudG91Y2hlcyAmJiBldnQudG91Y2hlc1swXSxcclxuXHRcdFx0XHR0YXJnZXQgPSAodG91Y2ggfHwgZXZ0KS50YXJnZXQsXHJcblx0XHRcdFx0b3JpZ2luYWxUYXJnZXQgPSBldnQudGFyZ2V0LnNoYWRvd1Jvb3QgJiYgKChldnQucGF0aCAmJiBldnQucGF0aFswXSkgfHwgKGV2dC5jb21wb3NlZFBhdGggJiYgZXZ0LmNvbXBvc2VkUGF0aCgpWzBdKSkgfHwgdGFyZ2V0LFxyXG5cdFx0XHRcdGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyLFxyXG5cdFx0XHRcdHN0YXJ0SW5kZXg7XHJcblxyXG5cdFx0XHRfc2F2ZUlucHV0Q2hlY2tlZFN0YXRlKGVsKTtcclxuXHJcblxyXG5cdFx0XHQvLyBEb24ndCB0cmlnZ2VyIHN0YXJ0IGV2ZW50IHdoZW4gYW4gZWxlbWVudCBpcyBiZWVuIGRyYWdnZWQsIG90aGVyd2lzZSB0aGUgZXZ0Lm9sZGluZGV4IGFsd2F5cyB3cm9uZyB3aGVuIHNldCBvcHRpb24uZ3JvdXAuXHJcblx0XHRcdGlmIChkcmFnRWwpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICgvbW91c2Vkb3dufHBvaW50ZXJkb3duLy50ZXN0KHR5cGUpICYmIGV2dC5idXR0b24gIT09IDAgfHwgb3B0aW9ucy5kaXNhYmxlZCkge1xyXG5cdFx0XHRcdHJldHVybjsgLy8gb25seSBsZWZ0IGJ1dHRvbiBvciBlbmFibGVkXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGNhbmNlbCBkbmQgaWYgb3JpZ2luYWwgdGFyZ2V0IGlzIGNvbnRlbnQgZWRpdGFibGVcclxuXHRcdFx0aWYgKG9yaWdpbmFsVGFyZ2V0LmlzQ29udGVudEVkaXRhYmxlKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0YXJnZXQgPSBfY2xvc2VzdCh0YXJnZXQsIG9wdGlvbnMuZHJhZ2dhYmxlLCBlbCwgdHJ1ZSk7XHJcblxyXG5cdFx0XHRpZiAoIXRhcmdldCkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGxhc3REb3duRWwgPT09IHRhcmdldCkge1xyXG5cdFx0XHRcdC8vIElnbm9yaW5nIGR1cGxpY2F0ZSBgZG93bmBcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIEdldCB0aGUgaW5kZXggb2YgdGhlIGRyYWdnZWQgZWxlbWVudCB3aXRoaW4gaXRzIHBhcmVudFxyXG5cdFx0XHRzdGFydEluZGV4ID0gX2luZGV4KHRhcmdldCwgb3B0aW9ucy5kcmFnZ2FibGUpO1xyXG5cclxuXHRcdFx0Ly8gQ2hlY2sgZmlsdGVyXHJcblx0XHRcdGlmICh0eXBlb2YgZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0aWYgKGZpbHRlci5jYWxsKHRoaXMsIGV2dCwgdGFyZ2V0LCB0aGlzKSkge1xyXG5cdFx0XHRcdFx0X2Rpc3BhdGNoRXZlbnQoX3RoaXMsIG9yaWdpbmFsVGFyZ2V0LCAnZmlsdGVyJywgdGFyZ2V0LCBlbCwgZWwsIHN0YXJ0SW5kZXgpO1xyXG5cdFx0XHRcdFx0cHJldmVudE9uRmlsdGVyICYmIGV2dC5jYW5jZWxhYmxlICYmIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0cmV0dXJuOyAvLyBjYW5jZWwgZG5kXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGZpbHRlcikge1xyXG5cdFx0XHRcdGZpbHRlciA9IGZpbHRlci5zcGxpdCgnLCcpLnNvbWUoZnVuY3Rpb24gKGNyaXRlcmlhKSB7XHJcblx0XHRcdFx0XHRjcml0ZXJpYSA9IF9jbG9zZXN0KG9yaWdpbmFsVGFyZ2V0LCBjcml0ZXJpYS50cmltKCksIGVsLCBmYWxzZSk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGNyaXRlcmlhKSB7XHJcblx0XHRcdFx0XHRcdF9kaXNwYXRjaEV2ZW50KF90aGlzLCBjcml0ZXJpYSwgJ2ZpbHRlcicsIHRhcmdldCwgZWwsIGVsLCBzdGFydEluZGV4KTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGlmIChmaWx0ZXIpIHtcclxuXHRcdFx0XHRcdHByZXZlbnRPbkZpbHRlciAmJiBldnQuY2FuY2VsYWJsZSAmJiBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdHJldHVybjsgLy8gY2FuY2VsIGRuZFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG9wdGlvbnMuaGFuZGxlICYmICFfY2xvc2VzdChvcmlnaW5hbFRhcmdldCwgb3B0aW9ucy5oYW5kbGUsIGVsLCBmYWxzZSkpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFByZXBhcmUgYGRyYWdzdGFydGBcclxuXHRcdFx0dGhpcy5fcHJlcGFyZURyYWdTdGFydChldnQsIHRvdWNoLCB0YXJnZXQsIHN0YXJ0SW5kZXgpO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0X2hhbmRsZUF1dG9TY3JvbGw6IGZ1bmN0aW9uKGV2dCwgZmFsbGJhY2spIHtcclxuXHRcdFx0aWYgKCFkcmFnRWwgfHwgIXRoaXMub3B0aW9ucy5zY3JvbGwpIHJldHVybjtcclxuXHRcdFx0dmFyIHggPSBldnQuY2xpZW50WCxcclxuXHRcdFx0XHR5ID0gZXZ0LmNsaWVudFksXHJcblxyXG5cdFx0XHRcdGVsZW0gPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpLFxyXG5cdFx0XHRcdF90aGlzID0gdGhpc1xyXG5cdFx0XHQ7XHJcblxyXG5cdFx0XHQvLyBmaXJlZm94IGRvZXMgbm90IGhhdmUgbmF0aXZlIGF1dG9zY3JvbGxcclxuXHRcdFx0aWYgKGZhbGxiYWNrIHx8ICh3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpID4gLTEpKSB7XHJcblx0XHRcdFx0X2F1dG9TY3JvbGwoZXZ0LCBfdGhpcy5vcHRpb25zLCBlbGVtLCB0cnVlKTtcclxuXHJcblx0XHRcdFx0Ly8gTGlzdGVuZXIgZm9yIHBvaW50ZXIgZWxlbWVudCBjaGFuZ2VcclxuXHRcdFx0XHR2YXIgb2dFbGVtU2Nyb2xsZXIgPSBfZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQoZWxlbSwgdHJ1ZSk7XHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0c2Nyb2xsaW5nICYmXHJcblx0XHRcdFx0XHQoXHJcblx0XHRcdFx0XHRcdCFwb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCB8fFxyXG5cdFx0XHRcdFx0XHR4ICE9PSBsYXN0UG9pbnRlckVsZW1YIHx8XHJcblx0XHRcdFx0XHRcdHkgIT09IGxhc3RQb2ludGVyRWxlbVlcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHQpIHtcclxuXHJcblx0XHRcdFx0XHRwb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCAmJiBjbGVhckludGVydmFsKHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsKTtcclxuXHRcdFx0XHRcdC8vIERldGVjdCBmb3IgcG9pbnRlciBlbGVtIGNoYW5nZSwgZW11bGF0aW5nIG5hdGl2ZSBEbkQgYmVoYXZpb3VyXHJcblx0XHRcdFx0XHRwb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIWRyYWdFbCkgcmV0dXJuO1xyXG5cdFx0XHRcdFx0XHQvLyBjb3VsZCBhbHNvIGNoZWNrIGlmIHNjcm9sbCBkaXJlY3Rpb24gb24gbmV3RWxlbSBjaGFuZ2VzIGR1ZSB0byBwYXJlbnQgYXV0b3Njcm9sbGluZ1xyXG5cdFx0XHRcdFx0XHR2YXIgbmV3RWxlbSA9IF9nZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0aWYgKG5ld0VsZW0gIT09IG9nRWxlbVNjcm9sbGVyKSB7XHJcblx0XHRcdFx0XHRcdFx0b2dFbGVtU2Nyb2xsZXIgPSBuZXdFbGVtO1xyXG5cdFx0XHRcdFx0XHRcdF9jbGVhckF1dG9TY3JvbGxzKCk7XHJcblx0XHRcdFx0XHRcdFx0X2F1dG9TY3JvbGwoZXZ0LCBfdGhpcy5vcHRpb25zLCBvZ0VsZW1TY3JvbGxlciwgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sIDEwKTtcclxuXHRcdFx0XHRcdGxhc3RQb2ludGVyRWxlbVggPSB4O1xyXG5cdFx0XHRcdFx0bGFzdFBvaW50ZXJFbGVtWSA9IHk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBpZiBEbkQgaXMgZW5hYmxlZCAobm90IG9uIGZpcmVmb3gpLCBmaXJzdCBhdXRvc2Nyb2xsIHdpbGwgYWxyZWFkeSBzY3JvbGwsIHNvIGdldCBwYXJlbnQgYXV0b3Njcm9sbCBvZiBmaXJzdCBhdXRvc2Nyb2xsXHJcblx0XHRcdFx0aWYgKCFfdGhpcy5vcHRpb25zLmJ1YmJsZVNjcm9sbCB8fCBfZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQoZWxlbSwgdHJ1ZSkgPT09IHdpbmRvdykge1xyXG5cdFx0XHRcdFx0X2NsZWFyQXV0b1Njcm9sbHMoKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0X2F1dG9TY3JvbGwoZXZ0LCBfdGhpcy5vcHRpb25zLCBfZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQoZWxlbSwgZmFsc2UpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRfcHJlcGFyZURyYWdTdGFydDogZnVuY3Rpb24gKC8qKiBFdmVudCAqL2V2dCwgLyoqIFRvdWNoICovdG91Y2gsIC8qKiBIVE1MRWxlbWVudCAqL3RhcmdldCwgLyoqIE51bWJlciAqL3N0YXJ0SW5kZXgpIHtcclxuXHRcdFx0dmFyIF90aGlzID0gdGhpcyxcclxuXHRcdFx0XHRlbCA9IF90aGlzLmVsLFxyXG5cdFx0XHRcdG9wdGlvbnMgPSBfdGhpcy5vcHRpb25zLFxyXG5cdFx0XHRcdG93bmVyRG9jdW1lbnQgPSBlbC5vd25lckRvY3VtZW50LFxyXG5cdFx0XHRcdGRyYWdTdGFydEZuO1xyXG5cclxuXHRcdFx0aWYgKHRhcmdldCAmJiAhZHJhZ0VsICYmICh0YXJnZXQucGFyZW50Tm9kZSA9PT0gZWwpKSB7XHJcblx0XHRcdFx0dGFwRXZ0ID0gZXZ0O1xyXG5cclxuXHRcdFx0XHRyb290RWwgPSBlbDtcclxuXHRcdFx0XHRkcmFnRWwgPSB0YXJnZXQ7XHJcblx0XHRcdFx0cGFyZW50RWwgPSBkcmFnRWwucGFyZW50Tm9kZTtcclxuXHRcdFx0XHRuZXh0RWwgPSBkcmFnRWwubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0bGFzdERvd25FbCA9IHRhcmdldDtcclxuXHRcdFx0XHRhY3RpdmVHcm91cCA9IG9wdGlvbnMuZ3JvdXA7XHJcblx0XHRcdFx0b2xkSW5kZXggPSBzdGFydEluZGV4O1xyXG5cclxuXHRcdFx0XHR0aGlzLl9sYXN0WCA9ICh0b3VjaCB8fCBldnQpLmNsaWVudFg7XHJcblx0XHRcdFx0dGhpcy5fbGFzdFkgPSAodG91Y2ggfHwgZXZ0KS5jbGllbnRZO1xyXG5cclxuXHRcdFx0XHRkcmFnRWwuc3R5bGVbJ3dpbGwtY2hhbmdlJ10gPSAnYWxsJztcclxuXHJcblx0XHRcdFx0ZHJhZ1N0YXJ0Rm4gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHQvLyBEZWxheWVkIGRyYWcgaGFzIGJlZW4gdHJpZ2dlcmVkXHJcblx0XHRcdFx0XHQvLyB3ZSBjYW4gcmUtZW5hYmxlIHRoZSBldmVudHM6IHRvdWNobW92ZS9tb3VzZW1vdmVcclxuXHRcdFx0XHRcdF90aGlzLl9kaXNhYmxlRGVsYXllZERyYWcoKTtcclxuXHJcblx0XHRcdFx0XHQvLyBNYWtlIHRoZSBlbGVtZW50IGRyYWdnYWJsZVxyXG5cdFx0XHRcdFx0ZHJhZ0VsLmRyYWdnYWJsZSA9IF90aGlzLm5hdGl2ZURyYWdnYWJsZTtcclxuXHJcblx0XHRcdFx0XHQvLyBCaW5kIHRoZSBldmVudHM6IGRyYWdzdGFydC9kcmFnZW5kXHJcblx0XHRcdFx0XHRfdGhpcy5fdHJpZ2dlckRyYWdTdGFydChldnQsIHRvdWNoKTtcclxuXHJcblx0XHRcdFx0XHQvLyBEcmFnIHN0YXJ0IGV2ZW50XHJcblx0XHRcdFx0XHRfZGlzcGF0Y2hFdmVudChfdGhpcywgcm9vdEVsLCAnY2hvb3NlJywgZHJhZ0VsLCByb290RWwsIHJvb3RFbCwgb2xkSW5kZXgpO1xyXG5cclxuXHRcdFx0XHRcdC8vIENob3NlbiBpdGVtXHJcblx0XHRcdFx0XHRfdG9nZ2xlQ2xhc3MoZHJhZ0VsLCBvcHRpb25zLmNob3NlbkNsYXNzLCB0cnVlKTtcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHQvLyBEaXNhYmxlIFwiZHJhZ2dhYmxlXCJcclxuXHRcdFx0XHRvcHRpb25zLmlnbm9yZS5zcGxpdCgnLCcpLmZvckVhY2goZnVuY3Rpb24gKGNyaXRlcmlhKSB7XHJcblx0XHRcdFx0XHRfZmluZChkcmFnRWwsIGNyaXRlcmlhLnRyaW0oKSwgX2Rpc2FibGVEcmFnZ2FibGUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRfb24ob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCBfdGhpcy5fb25Ecm9wKTtcclxuXHRcdFx0XHRfb24ob3duZXJEb2N1bWVudCwgJ3RvdWNoZW5kJywgX3RoaXMuX29uRHJvcCk7XHJcblx0XHRcdFx0X29uKG93bmVyRG9jdW1lbnQsICd0b3VjaGNhbmNlbCcsIF90aGlzLl9vbkRyb3ApO1xyXG5cdFx0XHRcdG9wdGlvbnMuc3VwcG9ydFBvaW50ZXIgJiYgX29uKG93bmVyRG9jdW1lbnQsICdwb2ludGVyY2FuY2VsJywgX3RoaXMuX29uRHJvcCk7XHJcblxyXG5cdFx0XHRcdGlmIChvcHRpb25zLmRlbGF5KSB7XHJcblx0XHRcdFx0XHQvLyBJZiB0aGUgdXNlciBtb3ZlcyB0aGUgcG9pbnRlciBvciBsZXQgZ28gdGhlIGNsaWNrIG9yIHRvdWNoXHJcblx0XHRcdFx0XHQvLyBiZWZvcmUgdGhlIGRlbGF5IGhhcyBiZWVuIHJlYWNoZWQ6XHJcblx0XHRcdFx0XHQvLyBkaXNhYmxlIHRoZSBkZWxheWVkIGRyYWdcclxuXHRcdFx0XHRcdF9vbihvd25lckRvY3VtZW50LCAnbW91c2V1cCcsIF90aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xyXG5cdFx0XHRcdFx0X29uKG93bmVyRG9jdW1lbnQsICd0b3VjaGVuZCcsIF90aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xyXG5cdFx0XHRcdFx0X29uKG93bmVyRG9jdW1lbnQsICd0b3VjaGNhbmNlbCcsIF90aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xyXG5cdFx0XHRcdFx0X29uKG93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCBfdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcclxuXHRcdFx0XHRcdF9vbihvd25lckRvY3VtZW50LCAndG91Y2htb3ZlJywgX3RoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XHJcblx0XHRcdFx0XHRvcHRpb25zLnN1cHBvcnRQb2ludGVyICYmIF9vbihvd25lckRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCBfdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcclxuXHJcblx0XHRcdFx0XHRfdGhpcy5fZHJhZ1N0YXJ0VGltZXIgPSBzZXRUaW1lb3V0KGRyYWdTdGFydEZuLmJpbmQoX3RoaXMpLCBvcHRpb25zLmRlbGF5KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZHJhZ1N0YXJ0Rm4oKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRfZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyOiBmdW5jdGlvbiAoLyoqIFRvdWNoRXZlbnR8UG9pbnRlckV2ZW50ICoqL2UpIHtcclxuXHRcdFx0dmFyIHRvdWNoID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdIDogZTtcclxuXHRcdFx0aWYgKG1pbihhYnModG91Y2guY2xpZW50WCAtIHRoaXMuX2xhc3RYKSwgYWJzKHRvdWNoLmNsaWVudFkgLSB0aGlzLl9sYXN0WSkpXHJcblx0XHRcdFx0XHQ+PSB0aGlzLm9wdGlvbnMudG91Y2hTdGFydFRocmVzaG9sZFxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHR0aGlzLl9kaXNhYmxlRGVsYXllZERyYWcoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRfZGlzYWJsZURlbGF5ZWREcmFnOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciBvd25lckRvY3VtZW50ID0gdGhpcy5lbC5vd25lckRvY3VtZW50O1xyXG5cclxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX2RyYWdTdGFydFRpbWVyKTtcclxuXHRcdFx0X29mZihvd25lckRvY3VtZW50LCAnbW91c2V1cCcsIHRoaXMuX2Rpc2FibGVEZWxheWVkRHJhZyk7XHJcblx0XHRcdF9vZmYob3duZXJEb2N1bWVudCwgJ3RvdWNoZW5kJywgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcclxuXHRcdFx0X29mZihvd25lckRvY3VtZW50LCAndG91Y2hjYW5jZWwnLCB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xyXG5cdFx0XHRfb2ZmKG93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCB0aGlzLl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIpO1xyXG5cdFx0XHRfb2ZmKG93bmVyRG9jdW1lbnQsICd0b3VjaG1vdmUnLCB0aGlzLl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIpO1xyXG5cdFx0XHRfb2ZmKG93bmVyRG9jdW1lbnQsICdwb2ludGVybW92ZScsIHRoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XHJcblx0XHR9LFxyXG5cclxuXHRcdF90cmlnZ2VyRHJhZ1N0YXJ0OiBmdW5jdGlvbiAoLyoqIEV2ZW50ICovZXZ0LCAvKiogVG91Y2ggKi90b3VjaCkge1xyXG5cdFx0XHR0b3VjaCA9IHRvdWNoIHx8IChldnQucG9pbnRlclR5cGUgPT0gJ3RvdWNoJyA/IGV2dCA6IG51bGwpO1xyXG5cclxuXHJcblx0XHRcdGlmICh0b3VjaCkge1xyXG5cdFx0XHRcdC8vIFRvdWNoIGRldmljZSBzdXBwb3J0XHJcblx0XHRcdFx0dGFwRXZ0ID0ge1xyXG5cdFx0XHRcdFx0dGFyZ2V0OiBkcmFnRWwsXHJcblx0XHRcdFx0XHRjbGllbnRYOiB0b3VjaC5jbGllbnRYLFxyXG5cdFx0XHRcdFx0Y2xpZW50WTogdG91Y2guY2xpZW50WVxyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdHRoaXMuX29uRHJhZ1N0YXJ0KHRhcEV2dCwgJ3RvdWNoJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoIXRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XHJcblx0XHRcdFx0dGhpcy5fb25EcmFnU3RhcnQodGFwRXZ0LCB0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRfb24oZHJhZ0VsLCAnZHJhZ2VuZCcsIHRoaXMpO1xyXG5cdFx0XHRcdF9vbihyb290RWwsICdkcmFnc3RhcnQnLCB0aGlzLl9vbkRyYWdTdGFydCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0aWYgKGRvY3VtZW50LnNlbGVjdGlvbikge1xyXG5cdFx0XHRcdFx0Ly8gVGltZW91dCBuZWNjZXNzYXJ5IGZvciBJRTlcclxuXHRcdFx0XHRcdF9uZXh0VGljayhmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdGRvY3VtZW50LnNlbGVjdGlvbi5lbXB0eSgpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdF9kcmFnU3RhcnRlZDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAocm9vdEVsICYmIGRyYWdFbCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xyXG5cdFx0XHRcdFx0X29uKGRvY3VtZW50LCAnZHJhZ292ZXInLCB0aGlzLl9oYW5kbGVBdXRvU2Nyb2xsKTtcclxuXHRcdFx0XHRcdF9vbihkb2N1bWVudCwgJ2RyYWdvdmVyJywgX2NoZWNrQWxpZ25tZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblxyXG5cdFx0XHRcdC8vIEFwcGx5IGVmZmVjdFxyXG5cdFx0XHRcdF90b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuZHJhZ0NsYXNzLCBmYWxzZSk7XHJcblx0XHRcdFx0X3RvZ2dsZUNsYXNzKGRyYWdFbCwgb3B0aW9ucy5naG9zdENsYXNzLCB0cnVlKTtcclxuXHJcblx0XHRcdFx0X2NzcyhkcmFnRWwsICd0cmFuc2Zvcm0nLCAnJyk7XHJcblxyXG5cdFx0XHRcdFNvcnRhYmxlLmFjdGl2ZSA9IHRoaXM7XHJcblxyXG5cdFx0XHRcdHRoaXMuX2lzQWxpZ25lZCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdC8vIERyYWcgc3RhcnQgZXZlbnRcclxuXHRcdFx0XHRfZGlzcGF0Y2hFdmVudCh0aGlzLCByb290RWwsICdzdGFydCcsIGRyYWdFbCwgcm9vdEVsLCByb290RWwsIG9sZEluZGV4KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLl9udWxsaW5nKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0X2VtdWxhdGVEcmFnT3ZlcjogZnVuY3Rpb24gKGJ5cGFzc0xhc3RUb3VjaENoZWNrKSB7XHJcblx0XHRcdGlmICh0b3VjaEV2dCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLl9sYXN0WCA9PT0gdG91Y2hFdnQuY2xpZW50WCAmJiB0aGlzLl9sYXN0WSA9PT0gdG91Y2hFdnQuY2xpZW50WSAmJiAhYnlwYXNzTGFzdFRvdWNoQ2hlY2spIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMuX2xhc3RYID0gdG91Y2hFdnQuY2xpZW50WDtcclxuXHRcdFx0XHR0aGlzLl9sYXN0WSA9IHRvdWNoRXZ0LmNsaWVudFk7XHJcblxyXG5cdFx0XHRcdGlmICghc3VwcG9ydENzc1BvaW50ZXJFdmVudHMpIHtcclxuXHRcdFx0XHRcdF9jc3MoZ2hvc3RFbCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dmFyIHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQodG91Y2hFdnQuY2xpZW50WCwgdG91Y2hFdnQuY2xpZW50WSk7XHJcblx0XHRcdFx0dmFyIHBhcmVudCA9IHRhcmdldDtcclxuXHRcdFx0XHR2YXIgaXNEcmFnRWwgPSAhIV9jbG9zZXN0KHRhcmdldCwgbnVsbCwgZHJhZ0VsLCB0cnVlKTtcclxuXHJcblx0XHRcdFx0d2hpbGUgKHRhcmdldCAmJiB0YXJnZXQuc2hhZG93Um9vdCkge1xyXG5cdFx0XHRcdFx0dGFyZ2V0ID0gdGFyZ2V0LnNoYWRvd1Jvb3QuZWxlbWVudEZyb21Qb2ludCh0b3VjaEV2dC5jbGllbnRYLCB0b3VjaEV2dC5jbGllbnRZKTtcclxuXHRcdFx0XHRcdHBhcmVudCA9IHRhcmdldDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChwYXJlbnQpIHtcclxuXHRcdFx0XHRcdGRvIHtcclxuXHRcdFx0XHRcdFx0aWYgKHBhcmVudFtleHBhbmRvXSkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBpID0gdG91Y2hEcmFnT3Zlckxpc3RlbmVycy5sZW5ndGg7XHJcblx0XHRcdFx0XHRcdFx0d2hpbGUgKGktLSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dG91Y2hEcmFnT3Zlckxpc3RlbmVyc1tpXSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsaWVudFg6IHRvdWNoRXZ0LmNsaWVudFgsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsaWVudFk6IHRvdWNoRXZ0LmNsaWVudFksXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldDogdGFyZ2V0LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyb290RWw6IHBhcmVudFxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoIXRoaXMub3B0aW9ucy5kcmFnb3ZlckJ1YmJsZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR0YXJnZXQgPSBwYXJlbnQ7IC8vIHN0b3JlIGxhc3QgZWxlbWVudFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LyoganNoaW50IGJvc3M6dHJ1ZSAqL1xyXG5cdFx0XHRcdFx0d2hpbGUgKHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZHJhZ0VsLnBhcmVudE5vZGVbZXhwYW5kb10uX2NvbXB1dGVJc0FsaWduZWQodG91Y2hFdnQsIGlzRHJhZ0VsKTtcclxuXHJcblx0XHRcdFx0aWYgKCFzdXBwb3J0Q3NzUG9pbnRlckV2ZW50cykge1xyXG5cdFx0XHRcdFx0X2NzcyhnaG9zdEVsLCAnZGlzcGxheScsICcnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdF9vblRvdWNoTW92ZTogZnVuY3Rpb24gKC8qKlRvdWNoRXZlbnQqL2V2dCkge1xyXG5cdFx0XHRpZiAodGFwRXZ0KSB7XHJcblx0XHRcdFx0dmFyXHRvcHRpb25zID0gdGhpcy5vcHRpb25zLFxyXG5cdFx0XHRcdFx0ZmFsbGJhY2tUb2xlcmFuY2UgPSBvcHRpb25zLmZhbGxiYWNrVG9sZXJhbmNlLFxyXG5cdFx0XHRcdFx0ZmFsbGJhY2tPZmZzZXQgPSBvcHRpb25zLmZhbGxiYWNrT2Zmc2V0LFxyXG5cdFx0XHRcdFx0dG91Y2ggPSBldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0LFxyXG5cdFx0XHRcdFx0ZHggPSAodG91Y2guY2xpZW50WCAtIHRhcEV2dC5jbGllbnRYKSArIGZhbGxiYWNrT2Zmc2V0LngsXHJcblx0XHRcdFx0XHRkeSA9ICh0b3VjaC5jbGllbnRZIC0gdGFwRXZ0LmNsaWVudFkpICsgZmFsbGJhY2tPZmZzZXQueSxcclxuXHRcdFx0XHRcdHRyYW5zbGF0ZTNkID0gZXZ0LnRvdWNoZXMgPyAndHJhbnNsYXRlM2QoJyArIGR4ICsgJ3B4LCcgKyBkeSArICdweCwwKScgOiAndHJhbnNsYXRlKCcgKyBkeCArICdweCwnICsgZHkgKyAncHgpJztcclxuXHJcblx0XHRcdFx0Ly8gcHJldmVudCBkdXBsaWNhdGUgZXZlbnQgZmlyaW5nXHJcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5zdXBwb3J0UG9pbnRlciAmJiBldnQudHlwZSA9PT0gJ3RvdWNobW92ZScpIHJldHVybjtcclxuXHJcblx0XHRcdFx0Ly8gb25seSBzZXQgdGhlIHN0YXR1cyB0byBkcmFnZ2luZywgd2hlbiB3ZSBhcmUgYWN0dWFsbHkgZHJhZ2dpbmdcclxuXHRcdFx0XHRpZiAoIVNvcnRhYmxlLmFjdGl2ZSkge1xyXG5cdFx0XHRcdFx0aWYgKGZhbGxiYWNrVG9sZXJhbmNlICYmXHJcblx0XHRcdFx0XHRcdG1pbihhYnModG91Y2guY2xpZW50WCAtIHRoaXMuX2xhc3RYKSwgYWJzKHRvdWNoLmNsaWVudFkgLSB0aGlzLl9sYXN0WSkpIDwgZmFsbGJhY2tUb2xlcmFuY2VcclxuXHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5fZHJhZ1N0YXJ0ZWQoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGFzIHdlbGwgYXMgY3JlYXRpbmcgdGhlIGdob3N0IGVsZW1lbnQgb24gdGhlIGRvY3VtZW50IGJvZHlcclxuXHRcdFx0XHR0aGlzLl9hcHBlbmRHaG9zdCgpO1xyXG5cclxuXHRcdFx0XHR0aGlzLl9oYW5kbGVBdXRvU2Nyb2xsKHRvdWNoLCB0cnVlKTtcclxuXHJcblxyXG5cdFx0XHRcdG1vdmVkID0gdHJ1ZTtcclxuXHRcdFx0XHR0b3VjaEV2dCA9IHRvdWNoO1xyXG5cclxuXHRcdFx0XHRfY3NzKGdob3N0RWwsICd3ZWJraXRUcmFuc2Zvcm0nLCB0cmFuc2xhdGUzZCk7XHJcblx0XHRcdFx0X2NzcyhnaG9zdEVsLCAnbW96VHJhbnNmb3JtJywgdHJhbnNsYXRlM2QpO1xyXG5cdFx0XHRcdF9jc3MoZ2hvc3RFbCwgJ21zVHJhbnNmb3JtJywgdHJhbnNsYXRlM2QpO1xyXG5cdFx0XHRcdF9jc3MoZ2hvc3RFbCwgJ3RyYW5zZm9ybScsIHRyYW5zbGF0ZTNkKTtcclxuXHJcblx0XHRcdFx0ZXZ0LmNhbmNlbGFibGUgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0X2FwcGVuZEdob3N0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICghZ2hvc3RFbCkge1xyXG5cdFx0XHRcdHZhciByZWN0ID0gZHJhZ0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG5cdFx0XHRcdFx0Y3NzID0gX2NzcyhkcmFnRWwpLFxyXG5cdFx0XHRcdFx0b3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcclxuXHRcdFx0XHRcdGdob3N0UmVjdDtcclxuXHJcblx0XHRcdFx0Z2hvc3RFbCA9IGRyYWdFbC5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG5cdFx0XHRcdF90b2dnbGVDbGFzcyhnaG9zdEVsLCBvcHRpb25zLmdob3N0Q2xhc3MsIGZhbHNlKTtcclxuXHRcdFx0XHRfdG9nZ2xlQ2xhc3MoZ2hvc3RFbCwgb3B0aW9ucy5mYWxsYmFja0NsYXNzLCB0cnVlKTtcclxuXHRcdFx0XHRfdG9nZ2xlQ2xhc3MoZ2hvc3RFbCwgb3B0aW9ucy5kcmFnQ2xhc3MsIHRydWUpO1xyXG5cclxuXHRcdFx0XHRfY3NzKGdob3N0RWwsICd0b3AnLCByZWN0LnRvcCAtIHBhcnNlSW50KGNzcy5tYXJnaW5Ub3AsIDEwKSk7XHJcblx0XHRcdFx0X2NzcyhnaG9zdEVsLCAnbGVmdCcsIHJlY3QubGVmdCAtIHBhcnNlSW50KGNzcy5tYXJnaW5MZWZ0LCAxMCkpO1xyXG5cdFx0XHRcdF9jc3MoZ2hvc3RFbCwgJ3dpZHRoJywgcmVjdC53aWR0aCk7XHJcblx0XHRcdFx0X2NzcyhnaG9zdEVsLCAnaGVpZ2h0JywgcmVjdC5oZWlnaHQpO1xyXG5cdFx0XHRcdF9jc3MoZ2hvc3RFbCwgJ29wYWNpdHknLCAnMC44Jyk7XHJcblx0XHRcdFx0X2NzcyhnaG9zdEVsLCAncG9zaXRpb24nLCAnZml4ZWQnKTtcclxuXHRcdFx0XHRfY3NzKGdob3N0RWwsICd6SW5kZXgnLCAnMTAwMDAwJyk7XHJcblx0XHRcdFx0X2NzcyhnaG9zdEVsLCAncG9pbnRlckV2ZW50cycsICdub25lJyk7XHJcblxyXG5cdFx0XHRcdG9wdGlvbnMuZmFsbGJhY2tPbkJvZHkgJiYgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnaG9zdEVsKSB8fCByb290RWwuYXBwZW5kQ2hpbGQoZ2hvc3RFbCk7XHJcblxyXG5cdFx0XHRcdC8vIEZpeGluZyBkaW1lbnNpb25zLlxyXG5cdFx0XHRcdGdob3N0UmVjdCA9IGdob3N0RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdFx0X2NzcyhnaG9zdEVsLCAnd2lkdGgnLCByZWN0LndpZHRoICogMiAtIGdob3N0UmVjdC53aWR0aCk7XHJcblx0XHRcdFx0X2NzcyhnaG9zdEVsLCAnaGVpZ2h0JywgcmVjdC5oZWlnaHQgKiAyIC0gZ2hvc3RSZWN0LmhlaWdodCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0X29uRHJhZ1N0YXJ0OiBmdW5jdGlvbiAoLyoqRXZlbnQqL2V2dCwgLyoqYm9vbGVhbiovdXNlRmFsbGJhY2spIHtcclxuXHRcdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdFx0dmFyIGRhdGFUcmFuc2ZlciA9IGV2dC5kYXRhVHJhbnNmZXI7XHJcblx0XHRcdHZhciBvcHRpb25zID0gX3RoaXMub3B0aW9ucztcclxuXHJcblx0XHRcdF90aGlzLl9vZmZVcEV2ZW50cygpO1xyXG5cdFx0XHRpZiAoYWN0aXZlR3JvdXAuY2hlY2tQdWxsKF90aGlzLCBfdGhpcywgZHJhZ0VsLCBldnQpKSB7XHJcblx0XHRcdFx0Y2xvbmVFbCA9IF9jbG9uZShkcmFnRWwpO1xyXG5cclxuXHRcdFx0XHRjbG9uZUVsLmRyYWdnYWJsZSA9IGZhbHNlO1xyXG5cdFx0XHRcdGNsb25lRWwuc3R5bGVbJ3dpbGwtY2hhbmdlJ10gPSAnJztcclxuXHJcblx0XHRcdFx0dGhpcy5faGlkZUNsb25lKCk7XHJcblxyXG5cdFx0XHRcdF90b2dnbGVDbGFzcyhjbG9uZUVsLCBfdGhpcy5vcHRpb25zLmNob3NlbkNsYXNzLCBmYWxzZSk7XHJcblxyXG5cdFx0XHRcdC8vICMxMTQzOiBJRnJhbWUgc3VwcG9ydCB3b3JrYXJvdW5kXHJcblx0XHRcdFx0X3RoaXMuX2Nsb25lSWQgPSBfbmV4dFRpY2soZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0cm9vdEVsLmluc2VydEJlZm9yZShjbG9uZUVsLCBkcmFnRWwpO1xyXG5cdFx0XHRcdFx0X2Rpc3BhdGNoRXZlbnQoX3RoaXMsIHJvb3RFbCwgJ2Nsb25lJywgZHJhZ0VsKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0X3RvZ2dsZUNsYXNzKGRyYWdFbCwgb3B0aW9ucy5kcmFnQ2xhc3MsIHRydWUpO1xyXG5cclxuXHRcdFx0aWYgKHVzZUZhbGxiYWNrKSB7XHJcblx0XHRcdFx0aWYgKHVzZUZhbGxiYWNrID09PSAndG91Y2gnKSB7XHJcblx0XHRcdFx0XHQvLyBGaXhlZCAjOTczOlxyXG5cdFx0XHRcdFx0X29uKGRvY3VtZW50LCAndG91Y2htb3ZlJywgX3ByZXZlbnRTY3JvbGwpO1xyXG5cclxuXHRcdFx0XHRcdC8vIEJpbmQgdG91Y2ggZXZlbnRzXHJcblx0XHRcdFx0XHRfb24oZG9jdW1lbnQsICd0b3VjaG1vdmUnLCBfdGhpcy5fb25Ub3VjaE1vdmUpO1xyXG5cdFx0XHRcdFx0X29uKGRvY3VtZW50LCAndG91Y2hlbmQnLCBfdGhpcy5fb25Ecm9wKTtcclxuXHRcdFx0XHRcdF9vbihkb2N1bWVudCwgJ3RvdWNoY2FuY2VsJywgX3RoaXMuX29uRHJvcCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMuc3VwcG9ydFBvaW50ZXIpIHtcclxuXHRcdFx0XHRcdFx0X29uKGRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCBfdGhpcy5fb25Ub3VjaE1vdmUpO1xyXG5cdFx0XHRcdFx0XHRfb24oZG9jdW1lbnQsICdwb2ludGVydXAnLCBfdGhpcy5fb25Ecm9wKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gT2xkIGJyd29zZXJcclxuXHRcdFx0XHRcdF9vbihkb2N1bWVudCwgJ21vdXNlbW92ZScsIF90aGlzLl9vblRvdWNoTW92ZSk7XHJcblx0XHRcdFx0XHRfb24oZG9jdW1lbnQsICdtb3VzZXVwJywgX3RoaXMuX29uRHJvcCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRfdGhpcy5fbG9vcElkID0gc2V0SW50ZXJ2YWwoX3RoaXMuX2VtdWxhdGVEcmFnT3ZlciwgNTApO1xyXG5cdFx0XHRcdF90b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuZHJhZ0NsYXNzLCBmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0aWYgKGRhdGFUcmFuc2Zlcikge1xyXG5cdFx0XHRcdFx0ZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XHJcblx0XHRcdFx0XHRvcHRpb25zLnNldERhdGEgJiYgb3B0aW9ucy5zZXREYXRhLmNhbGwoX3RoaXMsIGRhdGFUcmFuc2ZlciwgZHJhZ0VsKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdF9vbihkb2N1bWVudCwgJ2Ryb3AnLCBfdGhpcyk7XHJcblxyXG5cdFx0XHRcdC8vICMxMjc2IGZpeDpcclxuXHRcdFx0XHRfY3NzKGRyYWdFbCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVaKDApJyk7XHJcblxyXG5cdFx0XHRcdF90aGlzLl9kcmFnU3RhcnRJZCA9IF9uZXh0VGljayhfdGhpcy5fZHJhZ1N0YXJ0ZWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdF9vbihkb2N1bWVudCwgJ3NlbGVjdHN0YXJ0JywgX3RoaXMpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRfb25EcmFnT3ZlcjogZnVuY3Rpb24gKC8qKkV2ZW50Ki9ldnQpIHtcclxuXHRcdFx0dmFyIGVsID0gdGhpcy5lbCxcclxuXHRcdFx0XHR0YXJnZXQsXHJcblx0XHRcdFx0ZHJhZ1JlY3QsXHJcblx0XHRcdFx0dGFyZ2V0UmVjdCxcclxuXHRcdFx0XHRyZXZlcnQsXHJcblx0XHRcdFx0b3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcclxuXHRcdFx0XHRncm91cCA9IG9wdGlvbnMuZ3JvdXAsXHJcblx0XHRcdFx0YWN0aXZlU29ydGFibGUgPSBTb3J0YWJsZS5hY3RpdmUsXHJcblx0XHRcdFx0aXNPd25lciA9IChhY3RpdmVHcm91cCA9PT0gZ3JvdXApLFxyXG5cdFx0XHRcdGlzTW92aW5nQmV0d2VlblNvcnRhYmxlID0gZmFsc2UsXHJcblx0XHRcdFx0Y2FuU29ydCA9IG9wdGlvbnMuc29ydFxyXG5cdFx0XHQ7XHJcblxyXG5cclxuXHRcdFx0aWYgKGV2dC5yb290RWwgIT09IHZvaWQgMCAmJiBldnQucm9vdEVsICE9PSB0aGlzLmVsKSByZXR1cm47IC8vIHRvdWNoIGZhbGxiYWNrXHJcblxyXG5cdFx0XHQvLyBubyBidWJibGluZyBhbmQgbm90IGZhbGxiYWNrXHJcblx0XHRcdGlmICghb3B0aW9ucy5kcmFnb3ZlckJ1YmJsZSAmJiAhZXZ0LnJvb3RFbCkge1xyXG5cdFx0XHRcdHRoaXMuX2hhbmRsZUF1dG9TY3JvbGwoZXZ0KTtcclxuXHRcdFx0XHRkcmFnRWwucGFyZW50Tm9kZVtleHBhbmRvXS5fY29tcHV0ZUlzQWxpZ25lZChldnQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoZXZ0LnByZXZlbnREZWZhdWx0ICE9PSB2b2lkIDApIHtcclxuXHRcdFx0XHRldnQuY2FuY2VsYWJsZSAmJiBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHQhb3B0aW9ucy5kcmFnb3ZlckJ1YmJsZSAmJiBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRtb3ZlZCA9IHRydWU7XHJcblxyXG5cdFx0XHR0YXJnZXQgPSBfY2xvc2VzdChldnQudGFyZ2V0LCBvcHRpb25zLmRyYWdnYWJsZSwgZWwsIHRydWUpO1xyXG5cclxuXHJcblx0XHRcdGlmIChkcmFnRWwuYW5pbWF0ZWQgJiYgdGFyZ2V0ID09PSBkcmFnRWwgfHwgdGFyZ2V0LmFuaW1hdGVkIHx8IF9zaWxlbnQpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRpZiAodGFyZ2V0ICE9PSBsYXN0VGFyZ2V0KSB7XHJcblx0XHRcdFx0aXNDaXJjdW1zdGFudGlhbEludmVydCA9IGZhbHNlO1xyXG5cdFx0XHRcdHBhc3RGaXJzdEludmVydFRocmVzaCA9IGZhbHNlO1xyXG5cdFx0XHRcdGxhc3RUYXJnZXQgPSBudWxsO1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0aWYgKGFjdGl2ZVNvcnRhYmxlICYmICFvcHRpb25zLmRpc2FibGVkICYmXHJcblx0XHRcdFx0KGlzT3duZXJcclxuXHRcdFx0XHRcdD8gY2FuU29ydCB8fCAocmV2ZXJ0ID0gIXJvb3RFbC5jb250YWlucyhkcmFnRWwpKSAvLyBSZXZlcnRpbmcgaXRlbSBpbnRvIHRoZSBvcmlnaW5hbCBsaXN0XHJcblx0XHRcdFx0XHQ6IChcclxuXHRcdFx0XHRcdFx0cHV0U29ydGFibGUgPT09IHRoaXMgfHxcclxuXHRcdFx0XHRcdFx0KFxyXG5cdFx0XHRcdFx0XHRcdCh0aGlzLmxhc3RQdXRNb2RlID0gYWN0aXZlR3JvdXAuY2hlY2tQdWxsKHRoaXMsIGFjdGl2ZVNvcnRhYmxlLCBkcmFnRWwsIGV2dCkpICYmXHJcblx0XHRcdFx0XHRcdFx0Z3JvdXAuY2hlY2tQdXQodGhpcywgYWN0aXZlU29ydGFibGUsIGRyYWdFbCwgZXZ0KVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0KVxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHR2YXIgZGlyZWN0aW9uO1xyXG5cdFx0XHRcdHZhciBheGlzID0gdGhpcy5fZ2V0RGlyZWN0aW9uKGV2dCwgdGFyZ2V0KTtcclxuXHRcdFx0XHRcclxuXHJcblx0XHRcdFx0ZHJhZ1JlY3QgPSBkcmFnRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdFx0XHRcdGlmIChwdXRTb3J0YWJsZSAhPT0gdGhpcyAmJiB0aGlzICE9PSBTb3J0YWJsZS5hY3RpdmUpIHtcclxuXHRcdFx0XHRcdHB1dFNvcnRhYmxlID0gdGhpcztcclxuXHRcdFx0XHRcdGlzTW92aW5nQmV0d2VlblNvcnRhYmxlID0gdHJ1ZTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMgPT09IFNvcnRhYmxlLmFjdGl2ZSkge1xyXG5cdFx0XHRcdFx0aXNNb3ZpbmdCZXR3ZWVuU29ydGFibGUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHB1dFNvcnRhYmxlID0gbnVsbDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChyZXZlcnQpIHtcclxuXHRcdFx0XHRcdHRoaXMuX2hpZGVDbG9uZSgpO1xyXG5cdFx0XHRcdFx0cGFyZW50RWwgPSByb290RWw7IC8vIGFjdHVhbGl6YXRpb25cclxuXHJcblx0XHRcdFx0XHRpZiAoY2xvbmVFbCB8fCBuZXh0RWwpIHtcclxuXHRcdFx0XHRcdFx0cm9vdEVsLmluc2VydEJlZm9yZShkcmFnRWwsIGNsb25lRWwgfHwgbmV4dEVsKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2UgaWYgKCFjYW5Tb3J0KSB7XHJcblx0XHRcdFx0XHRcdHJvb3RFbC5hcHBlbmRDaGlsZChkcmFnRWwpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICgoZWwuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB8fCAoZWwuY2hpbGRyZW5bMF0gPT09IGdob3N0RWwpIHx8XHJcblx0XHRcdFx0XHQoZWwgPT09IGV2dC50YXJnZXQpICYmIF9naG9zdElzTGFzdChldnQsIGF4aXMsIGVsKVxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0Ly9hc3NpZ24gdGFyZ2V0IG9ubHkgaWYgY29uZGl0aW9uIGlzIHRydWVcclxuXHRcdFx0XHRcdGlmIChlbC5jaGlsZHJlbi5sZW5ndGggIT09IDAgJiYgZWwuY2hpbGRyZW5bMF0gIT09IGdob3N0RWwgJiYgZWwgPT09IGV2dC50YXJnZXQpIHtcclxuXHRcdFx0XHRcdFx0dGFyZ2V0ID0gX2xhc3RDaGlsZChlbCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKHRhcmdldCkge1xyXG5cdFx0XHRcdFx0XHRpZiAodGFyZ2V0LmFuaW1hdGVkKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR0YXJnZXRSZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChpc093bmVyKSB7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZVNvcnRhYmxlLl9oaWRlQ2xvbmUoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZVNvcnRhYmxlLl9zaG93Q2xvbmUodGhpcyk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKF9vbk1vdmUocm9vdEVsLCBlbCwgZHJhZ0VsLCBkcmFnUmVjdCwgdGFyZ2V0LCB0YXJnZXRSZWN0LCBldnQsICEhdGFyZ2V0KSAhPT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFkcmFnRWwuY29udGFpbnMoZWwpKSB7XHJcblx0XHRcdFx0XHRcdFx0ZWwuYXBwZW5kQ2hpbGQoZHJhZ0VsKTtcclxuXHRcdFx0XHRcdFx0XHRwYXJlbnRFbCA9IGVsOyAvLyBhY3R1YWxpemF0aW9uXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5faXNBbGlnbmVkID0gdHJ1ZTsgLy8gbXVzdCBiZSBmb3IgX2dob3N0SXNMYXN0IHRvIHBhc3NcclxuXHRcdFx0XHRcdFx0XHRyZWFsRHJhZ0VsUmVjdCA9IG51bGw7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuX2FuaW1hdGUoZHJhZ1JlY3QsIGRyYWdFbCk7XHJcblx0XHRcdFx0XHRcdHRhcmdldCAmJiB0aGlzLl9hbmltYXRlKHRhcmdldFJlY3QsIHRhcmdldCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHRhcmdldCAmJiAhdGFyZ2V0LmFuaW1hdGVkICYmIHRhcmdldCAhPT0gZHJhZ0VsICYmICh0YXJnZXQucGFyZW50Tm9kZVtleHBhbmRvXSAhPT0gdm9pZCAwKSAmJiB0YXJnZXQgIT09IGVsKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlzQ2lyY3Vtc3RhbnRpYWxJbnZlcnQgPSBpc0NpcmN1bXN0YW50aWFsSW52ZXJ0IHx8IG9wdGlvbnMuaW52ZXJ0U3dhcCB8fCBkcmFnRWwucGFyZW50Tm9kZSAhPT0gZWwgfHwgIXRoaXMuX2lzQWxpZ25lZDtcclxuXHRcdFx0XHRcdGRpcmVjdGlvbiA9IF9nZXRTd2FwRGlyZWN0aW9uKGV2dCwgdGFyZ2V0LCBheGlzLFxyXG5cdFx0XHRcdFx0XHRvcHRpb25zLnN3YXBUaHJlc2hvbGQsIG9wdGlvbnMuaW52ZXJ0ZWRTd2FwVGhyZXNob2xkLFxyXG5cdFx0XHRcdFx0XHRpc0NpcmN1bXN0YW50aWFsSW52ZXJ0LFxyXG5cdFx0XHRcdFx0XHRsYXN0VGFyZ2V0ID09PSB0YXJnZXQpO1xyXG5cdFx0XHRcdFx0aWYgKGRpcmVjdGlvbiA9PT0gMCkgcmV0dXJuO1xyXG5cdFx0XHRcdFx0cmVhbERyYWdFbFJlY3QgPSBudWxsO1xyXG5cclxuXHJcblx0XHRcdFx0XHR0aGlzLl9pc0FsaWduZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdGlmICghbGFzdFRhcmdldCB8fCBsYXN0VGFyZ2V0ICE9PSB0YXJnZXQgJiYgKCF0YXJnZXQgfHwgIXRhcmdldC5hbmltYXRlZCkpIHtcclxuXHRcdFx0XHRcdFx0cGFzdEZpcnN0SW52ZXJ0VGhyZXNoID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdGxhc3RUYXJnZXQgPSB0YXJnZXQ7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0XHRcdGxhc3REaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcblxyXG5cdFx0XHRcdFx0dGFyZ2V0UmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblx0XHRcdFx0XHR2YXIgbmV4dFNpYmxpbmcgPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLFxyXG5cdFx0XHRcdFx0XHRhZnRlciA9IGZhbHNlXHJcblx0XHRcdFx0XHQ7XHJcblxyXG5cdFx0XHRcdFx0YWZ0ZXIgPSBkaXJlY3Rpb24gPT09IDE7XHJcblxyXG5cdFx0XHRcdFx0dmFyIG1vdmVWZWN0b3IgPSBfb25Nb3ZlKHJvb3RFbCwgZWwsIGRyYWdFbCwgZHJhZ1JlY3QsIHRhcmdldCwgdGFyZ2V0UmVjdCwgZXZ0LCBhZnRlcik7XHJcblxyXG5cdFx0XHRcdFx0aWYgKG1vdmVWZWN0b3IgIT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdGlmIChtb3ZlVmVjdG9yID09PSAxIHx8IG1vdmVWZWN0b3IgPT09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0YWZ0ZXIgPSAobW92ZVZlY3RvciA9PT0gMSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdF9zaWxlbnQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KF91bnNpbGVudCwgMzApO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGlzT3duZXIpIHtcclxuXHRcdFx0XHRcdFx0XHRhY3RpdmVTb3J0YWJsZS5faGlkZUNsb25lKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlU29ydGFibGUuX3Nob3dDbG9uZSh0aGlzKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCFkcmFnRWwuY29udGFpbnMoZWwpKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGFmdGVyICYmICFuZXh0U2libGluZykge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZWwuYXBwZW5kQ2hpbGQoZHJhZ0VsKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRyYWdFbCwgYWZ0ZXIgPyBuZXh0U2libGluZyA6IHRhcmdldCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRwYXJlbnRFbCA9IGRyYWdFbC5wYXJlbnROb2RlOyAvLyBhY3R1YWxpemF0aW9uXHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLl9hbmltYXRlKGRyYWdSZWN0LCBkcmFnRWwpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLl9hbmltYXRlKHRhcmdldFJlY3QsIHRhcmdldCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdF9hbmltYXRlOiBmdW5jdGlvbiAocHJldlJlY3QsIHRhcmdldCkge1xyXG5cdFx0XHR2YXIgbXMgPSB0aGlzLm9wdGlvbnMuYW5pbWF0aW9uO1xyXG5cclxuXHRcdFx0aWYgKG1zKSB7XHJcblx0XHRcdFx0dmFyIGN1cnJlbnRSZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHRcdFx0XHRpZiAodGFyZ2V0ID09PSBkcmFnRWwpIHtcclxuXHRcdFx0XHRcdHJlYWxEcmFnRWxSZWN0ID0gY3VycmVudFJlY3Q7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAocHJldlJlY3Qubm9kZVR5cGUgPT09IDEpIHtcclxuXHRcdFx0XHRcdHByZXZSZWN0ID0gcHJldlJlY3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBDaGVjayBpZiBhY3R1YWxseSBtb3ZpbmcgcG9zaXRpb25cclxuXHRcdFx0XHRpZiAoKHByZXZSZWN0LmxlZnQgKyBwcmV2UmVjdC53aWR0aCAvIDIpID09PSAoY3VycmVudFJlY3QubGVmdCArIGN1cnJlbnRSZWN0LndpZHRoIC8gMilcclxuXHRcdFx0XHRcdCYmIChwcmV2UmVjdC50b3AgKyBwcmV2UmVjdC5oZWlnaHQgLyAyKSA9PT0gKGN1cnJlbnRSZWN0LnRvcCArIGN1cnJlbnRSZWN0LmhlaWdodCAvIDIpXHJcblx0XHRcdFx0KSByZXR1cm47XHJcblxyXG5cdFx0XHRcdF9jc3ModGFyZ2V0LCAndHJhbnNpdGlvbicsICdub25lJyk7XHJcblx0XHRcdFx0X2Nzcyh0YXJnZXQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoJ1xyXG5cdFx0XHRcdFx0KyAocHJldlJlY3QubGVmdCAtIGN1cnJlbnRSZWN0LmxlZnQpICsgJ3B4LCdcclxuXHRcdFx0XHRcdCsgKHByZXZSZWN0LnRvcCAtIGN1cnJlbnRSZWN0LnRvcCkgKyAncHgsMCknXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0Zm9yUmVwYWludER1bW15ID0gdGFyZ2V0Lm9mZnNldFdpZHRoOyAvLyByZXBhaW50XHJcblxyXG5cdFx0XHRcdF9jc3ModGFyZ2V0LCAndHJhbnNpdGlvbicsICdhbGwgJyArIG1zICsgJ21zJyk7XHJcblx0XHRcdFx0X2Nzcyh0YXJnZXQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoMCwwLDApJyk7XHJcblxyXG5cdFx0XHRcdGNsZWFyVGltZW91dCh0YXJnZXQuYW5pbWF0ZWQpO1xyXG5cdFx0XHRcdHRhcmdldC5hbmltYXRlZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0X2Nzcyh0YXJnZXQsICd0cmFuc2l0aW9uJywgJycpO1xyXG5cdFx0XHRcdFx0X2Nzcyh0YXJnZXQsICd0cmFuc2Zvcm0nLCAnJyk7XHJcblx0XHRcdFx0XHR0YXJnZXQuYW5pbWF0ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9LCBtcyk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0X29mZlVwRXZlbnRzOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciBvd25lckRvY3VtZW50ID0gdGhpcy5lbC5vd25lckRvY3VtZW50O1xyXG5cclxuXHRcdFx0X29mZihkb2N1bWVudCwgJ3RvdWNobW92ZScsIF9wcmV2ZW50U2Nyb2xsKTtcclxuXHRcdFx0X29mZihkb2N1bWVudCwgJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcclxuXHRcdFx0X29mZihkb2N1bWVudCwgJ3BvaW50ZXJtb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xyXG5cdFx0XHRfb2ZmKG93bmVyRG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5fb25Ecm9wKTtcclxuXHRcdFx0X29mZihvd25lckRvY3VtZW50LCAndG91Y2hlbmQnLCB0aGlzLl9vbkRyb3ApO1xyXG5cdFx0XHRfb2ZmKG93bmVyRG9jdW1lbnQsICdwb2ludGVydXAnLCB0aGlzLl9vbkRyb3ApO1xyXG5cdFx0XHRfb2ZmKG93bmVyRG9jdW1lbnQsICd0b3VjaGNhbmNlbCcsIHRoaXMuX29uRHJvcCk7XHJcblx0XHRcdF9vZmYob3duZXJEb2N1bWVudCwgJ3BvaW50ZXJjYW5jZWwnLCB0aGlzLl9vbkRyb3ApO1xyXG5cdFx0XHRfb2ZmKGRvY3VtZW50LCAnc2VsZWN0c3RhcnQnLCB0aGlzKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0X29uRHJvcDogZnVuY3Rpb24gKC8qKkV2ZW50Ki9ldnQpIHtcclxuXHRcdFx0dmFyIGVsID0gdGhpcy5lbCxcclxuXHRcdFx0XHRvcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG5cdFx0XHRzY3JvbGxpbmcgPSBmYWxzZTtcclxuXHRcdFx0aXNDaXJjdW1zdGFudGlhbEludmVydCA9IGZhbHNlO1xyXG5cdFx0XHRwYXN0Rmlyc3RJbnZlcnRUaHJlc2ggPSBmYWxzZTtcclxuXHJcblx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5fbG9vcElkKTtcclxuXHJcblx0XHRcdGNsZWFySW50ZXJ2YWwocG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwpO1xyXG5cdFx0XHRfY2xlYXJBdXRvU2Nyb2xscygpO1xyXG5cdFx0XHRfY2FuY2VsVGhyb3R0bGUoKTtcclxuXHJcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLl9kcmFnU3RhcnRUaW1lcik7XHJcblxyXG5cdFx0XHRfY2FuY2VsTmV4dFRpY2sodGhpcy5fY2xvbmVJZCk7XHJcblx0XHRcdF9jYW5jZWxOZXh0VGljayh0aGlzLl9kcmFnU3RhcnRJZCk7XHJcblxyXG5cdFx0XHQvLyBVbmJpbmQgZXZlbnRzXHJcblx0XHRcdF9vZmYoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XHJcblxyXG5cclxuXHRcdFx0aWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XHJcblx0XHRcdFx0X29mZihkb2N1bWVudCwgJ2Ryb3AnLCB0aGlzKTtcclxuXHRcdFx0XHRfb2ZmKGVsLCAnZHJhZ3N0YXJ0JywgdGhpcy5fb25EcmFnU3RhcnQpO1xyXG5cdFx0XHRcdF9vZmYoZG9jdW1lbnQsICdkcmFnb3ZlcicsIHRoaXMuX2hhbmRsZUF1dG9TY3JvbGwpO1xyXG5cdFx0XHRcdF9vZmYoZG9jdW1lbnQsICdkcmFnb3ZlcicsIF9jaGVja0FsaWdubWVudCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuX29mZlVwRXZlbnRzKCk7XHJcblxyXG5cdFx0XHRpZiAoZXZ0KSB7XHJcblx0XHRcdFx0aWYgKG1vdmVkKSB7XHJcblx0XHRcdFx0XHRldnQuY2FuY2VsYWJsZSAmJiBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdCFvcHRpb25zLmRyb3BCdWJibGUgJiYgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Z2hvc3RFbCAmJiBnaG9zdEVsLnBhcmVudE5vZGUgJiYgZ2hvc3RFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdob3N0RWwpO1xyXG5cclxuXHRcdFx0XHRpZiAocm9vdEVsID09PSBwYXJlbnRFbCB8fCAocHV0U29ydGFibGUgJiYgcHV0U29ydGFibGUubGFzdFB1dE1vZGUgIT09ICdjbG9uZScpKSB7XHJcblx0XHRcdFx0XHQvLyBSZW1vdmUgY2xvbmVcclxuXHRcdFx0XHRcdGNsb25lRWwgJiYgY2xvbmVFbC5wYXJlbnROb2RlICYmIGNsb25lRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjbG9uZUVsKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChkcmFnRWwpIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xyXG5cdFx0XHRcdFx0XHRfb2ZmKGRyYWdFbCwgJ2RyYWdlbmQnLCB0aGlzKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRfZGlzYWJsZURyYWdnYWJsZShkcmFnRWwpO1xyXG5cdFx0XHRcdFx0ZHJhZ0VsLnN0eWxlWyd3aWxsLWNoYW5nZSddID0gJyc7XHJcblxyXG5cdFx0XHRcdFx0Ly8gUmVtb3ZlIGNsYXNzJ3NcclxuXHRcdFx0XHRcdF90b2dnbGVDbGFzcyhkcmFnRWwsIHRoaXMub3B0aW9ucy5naG9zdENsYXNzLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRfdG9nZ2xlQ2xhc3MoZHJhZ0VsLCB0aGlzLm9wdGlvbnMuY2hvc2VuQ2xhc3MsIGZhbHNlKTtcclxuXHJcblx0XHRcdFx0XHQvLyBEcmFnIHN0b3AgZXZlbnRcclxuXHRcdFx0XHRcdF9kaXNwYXRjaEV2ZW50KHRoaXMsIHJvb3RFbCwgJ3VuY2hvb3NlJywgZHJhZ0VsLCBwYXJlbnRFbCwgcm9vdEVsLCBvbGRJbmRleCwgbnVsbCwgZXZ0KTtcclxuXHJcblx0XHRcdFx0XHRpZiAocm9vdEVsICE9PSBwYXJlbnRFbCkge1xyXG5cdFx0XHRcdFx0XHRuZXdJbmRleCA9IF9pbmRleChkcmFnRWwsIG9wdGlvbnMuZHJhZ2dhYmxlKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChuZXdJbmRleCA+PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gQWRkIGV2ZW50XHJcblx0XHRcdFx0XHRcdFx0X2Rpc3BhdGNoRXZlbnQobnVsbCwgcGFyZW50RWwsICdhZGQnLCBkcmFnRWwsIHBhcmVudEVsLCByb290RWwsIG9sZEluZGV4LCBuZXdJbmRleCwgZXZ0KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly8gUmVtb3ZlIGV2ZW50XHJcblx0XHRcdFx0XHRcdFx0X2Rpc3BhdGNoRXZlbnQodGhpcywgcm9vdEVsLCAncmVtb3ZlJywgZHJhZ0VsLCBwYXJlbnRFbCwgcm9vdEVsLCBvbGRJbmRleCwgbmV3SW5kZXgsIGV2dCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIGRyYWcgZnJvbSBvbmUgbGlzdCBhbmQgZHJvcCBpbnRvIGFub3RoZXJcclxuXHRcdFx0XHRcdFx0XHRfZGlzcGF0Y2hFdmVudChudWxsLCBwYXJlbnRFbCwgJ3NvcnQnLCBkcmFnRWwsIHBhcmVudEVsLCByb290RWwsIG9sZEluZGV4LCBuZXdJbmRleCwgZXZ0KTtcclxuXHRcdFx0XHRcdFx0XHRfZGlzcGF0Y2hFdmVudCh0aGlzLCByb290RWwsICdzb3J0JywgZHJhZ0VsLCBwYXJlbnRFbCwgcm9vdEVsLCBvbGRJbmRleCwgbmV3SW5kZXgsIGV2dCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHB1dFNvcnRhYmxlICYmIHB1dFNvcnRhYmxlLnNhdmUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRpZiAoZHJhZ0VsLm5leHRTaWJsaW5nICE9PSBuZXh0RWwpIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBHZXQgdGhlIGluZGV4IG9mIHRoZSBkcmFnZ2VkIGVsZW1lbnQgd2l0aGluIGl0cyBwYXJlbnRcclxuXHRcdFx0XHRcdFx0XHRuZXdJbmRleCA9IF9pbmRleChkcmFnRWwsIG9wdGlvbnMuZHJhZ2dhYmxlKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKG5ld0luZGV4ID49IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIGRyYWcgJiBkcm9wIHdpdGhpbiB0aGUgc2FtZSBsaXN0XHJcblx0XHRcdFx0XHRcdFx0XHRfZGlzcGF0Y2hFdmVudCh0aGlzLCByb290RWwsICd1cGRhdGUnLCBkcmFnRWwsIHBhcmVudEVsLCByb290RWwsIG9sZEluZGV4LCBuZXdJbmRleCwgZXZ0KTtcclxuXHRcdFx0XHRcdFx0XHRcdF9kaXNwYXRjaEV2ZW50KHRoaXMsIHJvb3RFbCwgJ3NvcnQnLCBkcmFnRWwsIHBhcmVudEVsLCByb290RWwsIG9sZEluZGV4LCBuZXdJbmRleCwgZXZ0KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoU29ydGFibGUuYWN0aXZlKSB7XHJcblx0XHRcdFx0XHRcdC8qIGpzaGludCBlcW51bGw6dHJ1ZSAqL1xyXG5cdFx0XHRcdFx0XHRpZiAobmV3SW5kZXggPT0gbnVsbCB8fCBuZXdJbmRleCA9PT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRuZXdJbmRleCA9IG9sZEluZGV4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRfZGlzcGF0Y2hFdmVudCh0aGlzLCByb290RWwsICdlbmQnLCBkcmFnRWwsIHBhcmVudEVsLCByb290RWwsIG9sZEluZGV4LCBuZXdJbmRleCwgZXZ0KTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIFNhdmUgc29ydGluZ1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNhdmUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuX251bGxpbmcoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0X251bGxpbmc6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyb290RWwgPVxyXG5cdFx0XHRkcmFnRWwgPVxyXG5cdFx0XHRwYXJlbnRFbCA9XHJcblx0XHRcdGdob3N0RWwgPVxyXG5cdFx0XHRuZXh0RWwgPVxyXG5cdFx0XHRjbG9uZUVsID1cclxuXHRcdFx0bGFzdERvd25FbCA9XHJcblxyXG5cdFx0XHRzY3JvbGxFbCA9XHJcblx0XHRcdHNjcm9sbFBhcmVudEVsID1cclxuXHRcdFx0YXV0b1Njcm9sbHMubGVuZ3RoID1cclxuXHJcblx0XHRcdHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsID1cclxuXHRcdFx0bGFzdFBvaW50ZXJFbGVtWCA9XHJcblx0XHRcdGxhc3RQb2ludGVyRWxlbVkgPVxyXG5cclxuXHRcdFx0dGFwRXZ0ID1cclxuXHRcdFx0dG91Y2hFdnQgPVxyXG5cclxuXHRcdFx0bW92ZWQgPVxyXG5cdFx0XHRuZXdJbmRleCA9XHJcblx0XHRcdG9sZEluZGV4ID1cclxuXHJcblx0XHRcdGxhc3RUYXJnZXQgPVxyXG5cdFx0XHRsYXN0RGlyZWN0aW9uID1cclxuXHJcblx0XHRcdGZvclJlcGFpbnREdW1teSA9XHJcblx0XHRcdHJlYWxEcmFnRWxSZWN0ID1cclxuXHJcblx0XHRcdHB1dFNvcnRhYmxlID1cclxuXHRcdFx0YWN0aXZlR3JvdXAgPVxyXG5cdFx0XHRTb3J0YWJsZS5hY3RpdmUgPSBudWxsO1xyXG5cclxuXHRcdFx0c2F2ZWRJbnB1dENoZWNrZWQuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcclxuXHRcdFx0XHRlbC5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHNhdmVkSW5wdXRDaGVja2VkLmxlbmd0aCA9IDA7XHJcblx0XHR9LFxyXG5cclxuXHRcdGhhbmRsZUV2ZW50OiBmdW5jdGlvbiAoLyoqRXZlbnQqL2V2dCkge1xyXG5cdFx0XHRzd2l0Y2ggKGV2dC50eXBlKSB7XHJcblx0XHRcdFx0Y2FzZSAnZHJvcCc6XHJcblx0XHRcdFx0Y2FzZSAnZHJhZ2VuZCc6XHJcblx0XHRcdFx0XHR0aGlzLl9vbkRyb3AoZXZ0KTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICdkcmFnZW50ZXInOlxyXG5cdFx0XHRcdGNhc2UgJ2RyYWdvdmVyJzpcclxuXHRcdFx0XHRcdGlmIChkcmFnRWwpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5fb25EcmFnT3ZlcihldnQpO1xyXG5cdFx0XHRcdFx0XHRfZ2xvYmFsRHJhZ092ZXIoZXZ0KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICdzZWxlY3RzdGFydCc6XHJcblx0XHRcdFx0XHRldnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNlcmlhbGl6ZXMgdGhlIGl0ZW0gaW50byBhbiBhcnJheSBvZiBzdHJpbmcuXHJcblx0XHQgKiBAcmV0dXJucyB7U3RyaW5nW119XHJcblx0XHQgKi9cclxuXHRcdHRvQXJyYXk6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIG9yZGVyID0gW10sXHJcblx0XHRcdFx0ZWwsXHJcblx0XHRcdFx0Y2hpbGRyZW4gPSB0aGlzLmVsLmNoaWxkcmVuLFxyXG5cdFx0XHRcdGkgPSAwLFxyXG5cdFx0XHRcdG4gPSBjaGlsZHJlbi5sZW5ndGgsXHJcblx0XHRcdFx0b3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHJcblx0XHRcdGZvciAoOyBpIDwgbjsgaSsrKSB7XHJcblx0XHRcdFx0ZWwgPSBjaGlsZHJlbltpXTtcclxuXHRcdFx0XHRpZiAoX2Nsb3Nlc3QoZWwsIG9wdGlvbnMuZHJhZ2dhYmxlLCB0aGlzLmVsLCBmYWxzZSkpIHtcclxuXHRcdFx0XHRcdG9yZGVyLnB1c2goZWwuZ2V0QXR0cmlidXRlKG9wdGlvbnMuZGF0YUlkQXR0cikgfHwgX2dlbmVyYXRlSWQoZWwpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBvcmRlcjtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU29ydHMgdGhlIGVsZW1lbnRzIGFjY29yZGluZyB0byB0aGUgYXJyYXkuXHJcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmdbXX0gIG9yZGVyICBvcmRlciBvZiB0aGUgaXRlbXNcclxuXHRcdCAqL1xyXG5cdFx0c29ydDogZnVuY3Rpb24gKG9yZGVyKSB7XHJcblx0XHRcdHZhciBpdGVtcyA9IHt9LCByb290RWwgPSB0aGlzLmVsO1xyXG5cclxuXHRcdFx0dGhpcy50b0FycmF5KCkuZm9yRWFjaChmdW5jdGlvbiAoaWQsIGkpIHtcclxuXHRcdFx0XHR2YXIgZWwgPSByb290RWwuY2hpbGRyZW5baV07XHJcblxyXG5cdFx0XHRcdGlmIChfY2xvc2VzdChlbCwgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSwgcm9vdEVsLCBmYWxzZSkpIHtcclxuXHRcdFx0XHRcdGl0ZW1zW2lkXSA9IGVsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgdGhpcyk7XHJcblxyXG5cdFx0XHRvcmRlci5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xyXG5cdFx0XHRcdGlmIChpdGVtc1tpZF0pIHtcclxuXHRcdFx0XHRcdHJvb3RFbC5yZW1vdmVDaGlsZChpdGVtc1tpZF0pO1xyXG5cdFx0XHRcdFx0cm9vdEVsLmFwcGVuZENoaWxkKGl0ZW1zW2lkXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU2F2ZSB0aGUgY3VycmVudCBzb3J0aW5nXHJcblx0XHQgKi9cclxuXHRcdHNhdmU6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIHN0b3JlID0gdGhpcy5vcHRpb25zLnN0b3JlO1xyXG5cdFx0XHRzdG9yZSAmJiBzdG9yZS5zZXQgJiYgc3RvcmUuc2V0KHRoaXMpO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBGb3IgZWFjaCBlbGVtZW50IGluIHRoZSBzZXQsIGdldCB0aGUgZmlyc3QgZWxlbWVudCB0aGF0IG1hdGNoZXMgdGhlIHNlbGVjdG9yIGJ5IHRlc3RpbmcgdGhlIGVsZW1lbnQgaXRzZWxmIGFuZCB0cmF2ZXJzaW5nIHVwIHRocm91Z2ggaXRzIGFuY2VzdG9ycyBpbiB0aGUgRE9NIHRyZWUuXHJcblx0XHQgKiBAcGFyYW0gICB7SFRNTEVsZW1lbnR9ICBlbFxyXG5cdFx0ICogQHBhcmFtICAge1N0cmluZ30gICAgICAgW3NlbGVjdG9yXSAgZGVmYXVsdDogYG9wdGlvbnMuZHJhZ2dhYmxlYFxyXG5cdFx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fG51bGx9XHJcblx0XHQgKi9cclxuXHRcdGNsb3Nlc3Q6IGZ1bmN0aW9uIChlbCwgc2VsZWN0b3IpIHtcclxuXHRcdFx0cmV0dXJuIF9jbG9zZXN0KGVsLCBzZWxlY3RvciB8fCB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlLCB0aGlzLmVsLCBmYWxzZSk7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNldC9nZXQgb3B0aW9uXHJcblx0XHQgKiBAcGFyYW0gICB7c3RyaW5nfSBuYW1lXHJcblx0XHQgKiBAcGFyYW0gICB7Kn0gICAgICBbdmFsdWVdXHJcblx0XHQgKiBAcmV0dXJucyB7Kn1cclxuXHRcdCAqL1xyXG5cdFx0b3B0aW9uOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcclxuXHRcdFx0dmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblxyXG5cdFx0XHRpZiAodmFsdWUgPT09IHZvaWQgMCkge1xyXG5cdFx0XHRcdHJldHVybiBvcHRpb25zW25hbWVdO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG9wdGlvbnNbbmFtZV0gPSB2YWx1ZTtcclxuXHJcblx0XHRcdFx0aWYgKG5hbWUgPT09ICdncm91cCcpIHtcclxuXHRcdFx0XHRcdF9wcmVwYXJlR3JvdXAob3B0aW9ucyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIERlc3Ryb3lcclxuXHRcdCAqL1xyXG5cdFx0ZGVzdHJveTogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR2YXIgZWwgPSB0aGlzLmVsO1xyXG5cclxuXHRcdFx0ZWxbZXhwYW5kb10gPSBudWxsO1xyXG5cclxuXHRcdFx0X29mZihlbCwgJ21vdXNlZG93bicsIHRoaXMuX29uVGFwU3RhcnQpO1xyXG5cdFx0XHRfb2ZmKGVsLCAndG91Y2hzdGFydCcsIHRoaXMuX29uVGFwU3RhcnQpO1xyXG5cdFx0XHRfb2ZmKGVsLCAncG9pbnRlcmRvd24nLCB0aGlzLl9vblRhcFN0YXJ0KTtcclxuXHJcblx0XHRcdGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xyXG5cdFx0XHRcdF9vZmYoZWwsICdkcmFnb3ZlcicsIHRoaXMpO1xyXG5cdFx0XHRcdF9vZmYoZWwsICdkcmFnZW50ZXInLCB0aGlzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBSZW1vdmUgZHJhZ2dhYmxlIGF0dHJpYnV0ZXNcclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlbC5xdWVyeVNlbGVjdG9yQWxsKCdbZHJhZ2dhYmxlXScpLCBmdW5jdGlvbiAoZWwpIHtcclxuXHRcdFx0XHRlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRvdWNoRHJhZ092ZXJMaXN0ZW5lcnMuc3BsaWNlKHRvdWNoRHJhZ092ZXJMaXN0ZW5lcnMuaW5kZXhPZih0aGlzLl9vbkRyYWdPdmVyKSwgMSk7XHJcblxyXG5cdFx0XHR0aGlzLl9vbkRyb3AoKTtcclxuXHJcblx0XHRcdHRoaXMuZWwgPSBlbCA9IG51bGw7XHJcblx0XHR9LFxyXG5cclxuXHRcdF9oaWRlQ2xvbmU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoIWNsb25lRWwuY2xvbmVIaWRkZW4pIHtcclxuXHRcdFx0XHRfY3NzKGNsb25lRWwsICdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHRcdFx0XHRjbG9uZUVsLmNsb25lSGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRfc2hvd0Nsb25lOiBmdW5jdGlvbihwdXRTb3J0YWJsZSkge1xyXG5cdFx0XHRpZiAocHV0U29ydGFibGUubGFzdFB1dE1vZGUgIT09ICdjbG9uZScpIHtcclxuXHRcdFx0XHR0aGlzLl9oaWRlQ2xvbmUoKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChjbG9uZUVsLmNsb25lSGlkZGVuKSB7XHJcblx0XHRcdFx0Ly8gc2hvdyBjbG9uZSBhdCBkcmFnRWwgb3Igb3JpZ2luYWwgcG9zaXRpb25cclxuXHRcdFx0XHRpZiAocm9vdEVsLmNvbnRhaW5zKGRyYWdFbCkgJiYgIXRoaXMub3B0aW9ucy5ncm91cC5yZXZlcnRDbG9uZSkge1xyXG5cdFx0XHRcdFx0cm9vdEVsLmluc2VydEJlZm9yZShjbG9uZUVsLCBkcmFnRWwpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAobmV4dEVsKSB7XHJcblx0XHRcdFx0XHRyb290RWwuaW5zZXJ0QmVmb3JlKGNsb25lRWwsIG5leHRFbCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJvb3RFbC5hcHBlbmRDaGlsZChjbG9uZUVsKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMuZ3JvdXAucmV2ZXJ0Q2xvbmUpIHtcclxuXHRcdFx0XHRcdHRoaXMuX2FuaW1hdGUoZHJhZ0VsLCBjbG9uZUVsKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0X2NzcyhjbG9uZUVsLCAnZGlzcGxheScsICcnKTtcclxuXHRcdFx0XHRjbG9uZUVsLmNsb25lSGlkZGVuID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRmdW5jdGlvbiBfY2xvc2VzdCgvKipIVE1MRWxlbWVudCovZWwsIC8qKlN0cmluZyovc2VsZWN0b3IsIC8qKkhUTUxFbGVtZW50Ki9jdHgsIGluY2x1ZGVDVFgpIHtcclxuXHRcdGlmIChlbCkge1xyXG5cdFx0XHRjdHggPSBjdHggfHwgZG9jdW1lbnQ7XHJcblxyXG5cdFx0XHRkbyB7XHJcblx0XHRcdFx0aWYgKChzZWxlY3RvciA9PT0gJz4qJyAmJiBlbC5wYXJlbnROb2RlID09PSBjdHgpIHx8IF9tYXRjaGVzKGVsLCBzZWxlY3RvcikgfHwgKGluY2x1ZGVDVFggJiYgZWwgPT09IGN0eCkpIHtcclxuXHRcdFx0XHRcdHJldHVybiBlbDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChlbCA9PT0gY3R4KSBicmVhaztcclxuXHRcdFx0XHQvKiBqc2hpbnQgYm9zczp0cnVlICovXHJcblx0XHRcdH0gd2hpbGUgKGVsID0gX2dldFBhcmVudE9ySG9zdChlbCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cdGZ1bmN0aW9uIF9nZXRQYXJlbnRPckhvc3QoZWwpIHtcclxuXHRcdHJldHVybiAoZWwuaG9zdCAmJiBlbCAhPT0gZG9jdW1lbnQgJiYgZWwuaG9zdC5ub2RlVHlwZSlcclxuXHRcdFx0PyBlbC5ob3N0XHJcblx0XHRcdDogZWwucGFyZW50Tm9kZTtcclxuXHR9XHJcblxyXG5cclxuXHRmdW5jdGlvbiBfZ2xvYmFsRHJhZ092ZXIoLyoqRXZlbnQqL2V2dCkge1xyXG5cdFx0aWYgKGV2dC5kYXRhVHJhbnNmZXIpIHtcclxuXHRcdFx0ZXZ0LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xyXG5cdFx0fVxyXG5cdFx0ZXZ0LmNhbmNlbGFibGUgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblx0fVxyXG5cclxuXHJcblx0ZnVuY3Rpb24gX29uKGVsLCBldmVudCwgZm4pIHtcclxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuLCBjYXB0dXJlTW9kZSk7XHJcblx0fVxyXG5cclxuXHJcblx0ZnVuY3Rpb24gX29mZihlbCwgZXZlbnQsIGZuKSB7XHJcblx0XHRlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgY2FwdHVyZU1vZGUpO1xyXG5cdH1cclxuXHJcblxyXG5cdGZ1bmN0aW9uIF90b2dnbGVDbGFzcyhlbCwgbmFtZSwgc3RhdGUpIHtcclxuXHRcdGlmIChlbCAmJiBuYW1lKSB7XHJcblx0XHRcdGlmIChlbC5jbGFzc0xpc3QpIHtcclxuXHRcdFx0XHRlbC5jbGFzc0xpc3Rbc3RhdGUgPyAnYWRkJyA6ICdyZW1vdmUnXShuYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR2YXIgY2xhc3NOYW1lID0gKCcgJyArIGVsLmNsYXNzTmFtZSArICcgJykucmVwbGFjZShSX1NQQUNFLCAnICcpLnJlcGxhY2UoJyAnICsgbmFtZSArICcgJywgJyAnKTtcclxuXHRcdFx0XHRlbC5jbGFzc05hbWUgPSAoY2xhc3NOYW1lICsgKHN0YXRlID8gJyAnICsgbmFtZSA6ICcnKSkucmVwbGFjZShSX1NQQUNFLCAnICcpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0ZnVuY3Rpb24gX2NzcyhlbCwgcHJvcCwgdmFsKSB7XHJcblx0XHR2YXIgc3R5bGUgPSBlbCAmJiBlbC5zdHlsZTtcclxuXHJcblx0XHRpZiAoc3R5bGUpIHtcclxuXHRcdFx0aWYgKHZhbCA9PT0gdm9pZCAwKSB7XHJcblx0XHRcdFx0aWYgKGRvY3VtZW50LmRlZmF1bHRWaWV3ICYmIGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUpIHtcclxuXHRcdFx0XHRcdHZhbCA9IGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoZWwsICcnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAoZWwuY3VycmVudFN0eWxlKSB7XHJcblx0XHRcdFx0XHR2YWwgPSBlbC5jdXJyZW50U3R5bGU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gcHJvcCA9PT0gdm9pZCAwID8gdmFsIDogdmFsW3Byb3BdO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGlmICghKHByb3AgaW4gc3R5bGUpKSB7XHJcblx0XHRcdFx0XHRwcm9wID0gJy13ZWJraXQtJyArIHByb3A7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzdHlsZVtwcm9wXSA9IHZhbCArICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/ICcnIDogJ3B4Jyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRmdW5jdGlvbiBfZmluZChjdHgsIHRhZ05hbWUsIGl0ZXJhdG9yKSB7XHJcblx0XHRpZiAoY3R4KSB7XHJcblx0XHRcdHZhciBsaXN0ID0gY3R4LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZ05hbWUpLCBpID0gMCwgbiA9IGxpc3QubGVuZ3RoO1xyXG5cclxuXHRcdFx0aWYgKGl0ZXJhdG9yKSB7XHJcblx0XHRcdFx0Zm9yICg7IGkgPCBuOyBpKyspIHtcclxuXHRcdFx0XHRcdGl0ZXJhdG9yKGxpc3RbaV0sIGkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGxpc3Q7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFtdO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRmdW5jdGlvbiBfZGlzcGF0Y2hFdmVudChzb3J0YWJsZSwgcm9vdEVsLCBuYW1lLCB0YXJnZXRFbCwgdG9FbCwgZnJvbUVsLCBzdGFydEluZGV4LCBuZXdJbmRleCwgb3JpZ2luYWxFdnQpIHtcclxuXHRcdHNvcnRhYmxlID0gKHNvcnRhYmxlIHx8IHJvb3RFbFtleHBhbmRvXSk7XHJcblxyXG5cdFx0dmFyIGV2dCxcclxuXHRcdFx0b3B0aW9ucyA9IHNvcnRhYmxlLm9wdGlvbnMsXHJcblx0XHRcdG9uTmFtZSA9ICdvbicgKyBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHIoMSk7XHJcblx0XHQvLyBTdXBwb3J0IGZvciBuZXcgQ3VzdG9tRXZlbnQgZmVhdHVyZVxyXG5cdFx0aWYgKHdpbmRvdy5DdXN0b21FdmVudCkge1xyXG5cdFx0XHRldnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xyXG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXHJcblx0XHRcdFx0Y2FuY2VsYWJsZTogdHJ1ZVxyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xyXG5cdFx0XHRldnQuaW5pdEV2ZW50KG5hbWUsIHRydWUsIHRydWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGV2dC50byA9IHRvRWwgfHwgcm9vdEVsO1xyXG5cdFx0ZXZ0LmZyb20gPSBmcm9tRWwgfHwgcm9vdEVsO1xyXG5cdFx0ZXZ0Lml0ZW0gPSB0YXJnZXRFbCB8fCByb290RWw7XHJcblx0XHRldnQuY2xvbmUgPSBjbG9uZUVsO1xyXG5cclxuXHRcdGV2dC5vbGRJbmRleCA9IHN0YXJ0SW5kZXg7XHJcblx0XHRldnQubmV3SW5kZXggPSBuZXdJbmRleDtcclxuXHJcblx0XHRldnQub3JpZ2luYWxFdmVudCA9IG9yaWdpbmFsRXZ0O1xyXG5cclxuXHRcdHJvb3RFbC5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcblxyXG5cdFx0aWYgKG9wdGlvbnNbb25OYW1lXSkge1xyXG5cdFx0XHRvcHRpb25zW29uTmFtZV0uY2FsbChzb3J0YWJsZSwgZXZ0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRmdW5jdGlvbiBfb25Nb3ZlKGZyb21FbCwgdG9FbCwgZHJhZ0VsLCBkcmFnUmVjdCwgdGFyZ2V0RWwsIHRhcmdldFJlY3QsIG9yaWdpbmFsRXZ0LCB3aWxsSW5zZXJ0QWZ0ZXIpIHtcclxuXHRcdHZhciBldnQsXHJcblx0XHRcdHNvcnRhYmxlID0gZnJvbUVsW2V4cGFuZG9dLFxyXG5cdFx0XHRvbk1vdmVGbiA9IHNvcnRhYmxlLm9wdGlvbnMub25Nb3ZlLFxyXG5cdFx0XHRyZXRWYWw7XHJcblx0XHQvLyBTdXBwb3J0IGZvciBuZXcgQ3VzdG9tRXZlbnQgZmVhdHVyZVxyXG5cdFx0aWYgKHdpbmRvdy5DdXN0b21FdmVudCkge1xyXG5cdFx0XHRldnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ21vdmUnLCB7XHJcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcclxuXHRcdFx0XHRjYW5jZWxhYmxlOiB0cnVlXHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XHJcblx0XHRcdGV2dC5pbml0RXZlbnQoJ21vdmUnLCB0cnVlLCB0cnVlKTtcclxuXHRcdH1cclxuXHJcblx0XHRldnQudG8gPSB0b0VsO1xyXG5cdFx0ZXZ0LmZyb20gPSBmcm9tRWw7XHJcblx0XHRldnQuZHJhZ2dlZCA9IGRyYWdFbDtcclxuXHRcdGV2dC5kcmFnZ2VkUmVjdCA9IGRyYWdSZWN0O1xyXG5cdFx0ZXZ0LnJlbGF0ZWQgPSB0YXJnZXRFbCB8fCB0b0VsO1xyXG5cdFx0ZXZ0LnJlbGF0ZWRSZWN0ID0gdGFyZ2V0UmVjdCB8fCB0b0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0ZXZ0LndpbGxJbnNlcnRBZnRlciA9IHdpbGxJbnNlcnRBZnRlcjtcclxuXHJcblx0XHRldnQub3JpZ2luYWxFdmVudCA9IG9yaWdpbmFsRXZ0O1xyXG5cclxuXHRcdGZyb21FbC5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcblxyXG5cdFx0aWYgKG9uTW92ZUZuKSB7XHJcblx0XHRcdHJldFZhbCA9IG9uTW92ZUZuLmNhbGwoc29ydGFibGUsIGV2dCwgb3JpZ2luYWxFdnQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByZXRWYWw7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfZGlzYWJsZURyYWdnYWJsZShlbCkge1xyXG5cdFx0ZWwuZHJhZ2dhYmxlID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfdW5zaWxlbnQoKSB7XHJcblx0XHRfc2lsZW50ID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfZ2V0Q2hpbGQoZWwsIGNoaWxkTnVtLCBvcHRpb25zKSB7XHJcblx0XHR2YXIgY3VycmVudENoaWxkID0gMCxcclxuXHRcdFx0aSA9IDAsXHJcblx0XHRcdGNoaWxkcmVuID0gZWwuY2hpbGRyZW5cclxuXHRcdDtcclxuXHRcdHdoaWxlIChpIDwgY2hpbGRyZW4ubGVuZ3RoKSB7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRjaGlsZHJlbltpXS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgJiZcclxuXHRcdFx0XHRjaGlsZHJlbltpXSAhPT0gZ2hvc3RFbCAmJlxyXG5cdFx0XHRcdGNoaWxkcmVuW2ldICE9PSBkcmFnRWwgJiZcclxuXHRcdFx0XHRfY2xvc2VzdChjaGlsZHJlbltpXSwgb3B0aW9ucy5kcmFnZ2FibGUsIGVsLCBmYWxzZSlcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0aWYgKGN1cnJlbnRDaGlsZCA9PT0gY2hpbGROdW0pIHtcclxuXHRcdFx0XHRcdHJldHVybiBjaGlsZHJlbltpXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y3VycmVudENoaWxkKys7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGkrKztcclxuXHRcdH1cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gX2xhc3RDaGlsZChlbCkge1xyXG5cdFx0dmFyIGxhc3QgPSBlbC5sYXN0RWxlbWVudENoaWxkO1xyXG5cclxuXHRcdGlmIChsYXN0ID09PSBnaG9zdEVsKSB7XHJcblx0XHRcdGxhc3QgPSBlbC5jaGlsZHJlbltlbC5jaGlsZEVsZW1lbnRDb3VudCAtIDJdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBsYXN0IHx8IG51bGw7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfZ2hvc3RJc0xhc3QoZXZ0LCBheGlzLCBlbCkge1xyXG5cdFx0dmFyIGVsUmVjdCA9IF9sYXN0Q2hpbGQoZWwpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG5cdFx0XHRtb3VzZU9uQXhpcyA9IGF4aXMgPT09ICd2ZXJ0aWNhbCcgPyBldnQuY2xpZW50WSA6IGV2dC5jbGllbnRYLFxyXG5cdFx0XHRtb3VzZU9uT3BwQXhpcyA9IGF4aXMgPT09ICd2ZXJ0aWNhbCcgPyBldnQuY2xpZW50WCA6IGV2dC5jbGllbnRZLFxyXG5cdFx0XHR0YXJnZXRTMiA9IGF4aXMgPT09ICd2ZXJ0aWNhbCcgPyBlbFJlY3QuYm90dG9tIDogZWxSZWN0LnJpZ2h0LFxyXG5cdFx0XHR0YXJnZXRTMU9wcCA9IGF4aXMgPT09ICd2ZXJ0aWNhbCcgPyBlbFJlY3QubGVmdCA6IGVsUmVjdC50b3AsXHJcblx0XHRcdHRhcmdldFMyT3BwID0gYXhpcyA9PT0gJ3ZlcnRpY2FsJyA/IGVsUmVjdC5yaWdodCA6IGVsUmVjdC5ib3R0b21cclxuXHRcdDtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdG1vdXNlT25PcHBBeGlzID4gdGFyZ2V0UzFPcHAgJiZcclxuXHRcdFx0bW91c2VPbk9wcEF4aXMgPCB0YXJnZXRTMk9wcCAmJlxyXG5cdFx0XHRtb3VzZU9uQXhpcyA+IHRhcmdldFMyXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gX2dldFN3YXBEaXJlY3Rpb24oZXZ0LCB0YXJnZXQsIGF4aXMsIHN3YXBUaHJlc2hvbGQsIGludmVydGVkU3dhcFRocmVzaG9sZCwgaW52ZXJ0U3dhcCwgaW5zaWRlKSB7XHJcblx0XHR2YXIgdGFyZ2V0UmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuXHRcdFx0bW91c2VPbkF4aXMgPSBheGlzID09PSAndmVydGljYWwnID8gZXZ0LmNsaWVudFkgOiBldnQuY2xpZW50WCxcclxuXHRcdFx0dGFyZ2V0TGVuZ3RoID0gYXhpcyA9PT0gJ3ZlcnRpY2FsJyA/IHRhcmdldFJlY3QuaGVpZ2h0IDogdGFyZ2V0UmVjdC53aWR0aCxcclxuXHRcdFx0dGFyZ2V0UzEgPSBheGlzID09PSAndmVydGljYWwnID8gdGFyZ2V0UmVjdC50b3AgOiB0YXJnZXRSZWN0LmxlZnQsXHJcblx0XHRcdHRhcmdldFMyID0gYXhpcyA9PT0gJ3ZlcnRpY2FsJyA/IHRhcmdldFJlY3QuYm90dG9tIDogdGFyZ2V0UmVjdC5yaWdodCxcclxuXHRcdFx0ZHJhZ1JlY3QgPSBkcmFnRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcblx0XHRcdGRyYWdMZW5ndGggPSBheGlzID09PSAndmVydGljYWwnID8gZHJhZ1JlY3QuaGVpZ2h0IDogZHJhZ1JlY3Qud2lkdGgsXHJcblx0XHRcdGludmVydCA9IGZhbHNlXHJcblx0XHQ7XHJcblx0XHR2YXIgZHJhZ1N0eWxlID0gX2NzcyhkcmFnRWwpO1xyXG5cdFx0ZHJhZ0xlbmd0aCArPSBwYXJzZUludChkcmFnU3R5bGUubWFyZ2luTGVmdCkgKyBwYXJzZUludChkcmFnU3R5bGUubWFyZ2luUmlnaHQpO1xyXG5cclxuXHRcdGlmICghaW52ZXJ0U3dhcCkge1xyXG5cdFx0XHQvLyBOZXZlciBpbnZlcnQgb3IgY3JlYXRlIGRyYWdFbCBzaGFkb3cgd2hlbiB3aWR0aCBjYXVzZXMgbW91c2UgdG8gbW92ZSBwYXN0IHRoZSBlbmQgb2YgcmVndWxhciBzd2FwVGhyZXNob2xkXHJcblx0XHRcdGlmIChpbnNpZGUgJiYgZHJhZ0xlbmd0aCA8IHRhcmdldExlbmd0aCAqIHN3YXBUaHJlc2hvbGQpIHsgLy8gbXVsdGlwbGllZCBvbmx5IGJ5IHN3YXBUaHJlc2hvbGQgYmVjYXVzZSBtb3VzZSB3aWxsIGFscmVhZHkgYmUgaW5zaWRlIHRhcmdldCBieSAoMSAtIHRocmVzaG9sZCkgKiB0YXJnZXRMZW5ndGggLyAyXHJcblx0XHRcdFx0Ly8gY2hlY2sgaWYgcGFzdCBmaXJzdCBpbnZlcnQgdGhyZXNob2xkIG9uIHNpZGUgb3Bwb3NpdGUgb2YgbGFzdERpcmVjdGlvblxyXG5cdFx0XHRcdGlmICghcGFzdEZpcnN0SW52ZXJ0VGhyZXNoICYmXHJcblx0XHRcdFx0XHQobGFzdERpcmVjdGlvbiA9PT0gMSA/XHJcblx0XHRcdFx0XHRcdChcclxuXHRcdFx0XHRcdFx0XHRtb3VzZU9uQXhpcyA+IHRhcmdldFMxICsgdGFyZ2V0TGVuZ3RoICogaW52ZXJ0ZWRTd2FwVGhyZXNob2xkIC8gMlxyXG5cdFx0XHRcdFx0XHQpIDpcclxuXHRcdFx0XHRcdFx0KFxyXG5cdFx0XHRcdFx0XHRcdG1vdXNlT25BeGlzIDwgdGFyZ2V0UzIgLSB0YXJnZXRMZW5ndGggKiBpbnZlcnRlZFN3YXBUaHJlc2hvbGQgLyAyXHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gcGFzdCBmaXJzdCBpbnZlcnQgdGhyZXNob2xkLCBkbyBub3QgcmVzdHJpY3QgaW52ZXJ0ZWQgdGhyZXNob2xkIHRvIGRyYWdFbCBzaGFkb3dcclxuXHRcdFx0XHRcdHBhc3RGaXJzdEludmVydFRocmVzaCA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIXBhc3RGaXJzdEludmVydFRocmVzaCkge1xyXG5cdFx0XHRcdFx0dmFyIGRyYWdTMSA9IGF4aXMgPT09ICd2ZXJ0aWNhbCcgPyBkcmFnUmVjdC50b3AgOiBkcmFnUmVjdC5sZWZ0LFxyXG5cdFx0XHRcdFx0XHRkcmFnUzIgPSBheGlzID09PSAndmVydGljYWwnID8gZHJhZ1JlY3QuYm90dG9tIDogZHJhZ1JlY3QucmlnaHRcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdC8vIGRyYWdFbCBzaGFkb3dcclxuXHRcdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdFx0bGFzdERpcmVjdGlvbiA9PT0gMSA/XHJcblx0XHRcdFx0XHRcdChcclxuXHRcdFx0XHRcdFx0XHRtb3VzZU9uQXhpcyA8IHRhcmdldFMxICsgZHJhZ0xlbmd0aCAvLyBvdmVyIGRyYWdFbCBzaGFkb3dcclxuXHRcdFx0XHRcdFx0KSA6XHJcblx0XHRcdFx0XHRcdChcclxuXHRcdFx0XHRcdFx0XHRtb3VzZU9uQXhpcyA+IHRhcmdldFMyIC0gZHJhZ0xlbmd0aFxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHJldHVybiBsYXN0RGlyZWN0aW9uICogLTE7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGludmVydCA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIFJlZ3VsYXJcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRtb3VzZU9uQXhpcyA+IHRhcmdldFMxICsgKHRhcmdldExlbmd0aCAqICgxIC0gc3dhcFRocmVzaG9sZCkgLyAyKSAmJlxyXG5cdFx0XHRcdFx0bW91c2VPbkF4aXMgPCB0YXJnZXRTMiAtICh0YXJnZXRMZW5ndGggKiAoMSAtIHN3YXBUaHJlc2hvbGQpIC8gMilcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdHJldHVybiAoKG1vdXNlT25BeGlzID4gdGFyZ2V0UzEgKyB0YXJnZXRMZW5ndGggLyAyKSA/IC0xIDogMSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aW52ZXJ0ID0gaW52ZXJ0IHx8IGludmVydFN3YXA7XHJcblxyXG5cdFx0aWYgKGludmVydCkge1xyXG5cdFx0XHQvLyBJbnZlcnQgb2YgcmVndWxhclxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0bW91c2VPbkF4aXMgPCB0YXJnZXRTMSArICh0YXJnZXRMZW5ndGggKiBpbnZlcnRlZFN3YXBUaHJlc2hvbGQgLyAyKSB8fFxyXG5cdFx0XHRcdG1vdXNlT25BeGlzID4gdGFyZ2V0UzIgLSAodGFyZ2V0TGVuZ3RoICogaW52ZXJ0ZWRTd2FwVGhyZXNob2xkIC8gMilcclxuXHRcdFx0KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cmV0dXJuICgobW91c2VPbkF4aXMgPiB0YXJnZXRTMSArIHRhcmdldExlbmd0aCAvIDIpID8gMSA6IC0xKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAwO1xyXG5cdH1cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdlbmVyYXRlIGlkXHJcblx0ICogQHBhcmFtICAge0hUTUxFbGVtZW50fSBlbFxyXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9XHJcblx0ICogQHByaXZhdGVcclxuXHQgKi9cclxuXHRmdW5jdGlvbiBfZ2VuZXJhdGVJZChlbCkge1xyXG5cdFx0dmFyIHN0ciA9IGVsLnRhZ05hbWUgKyBlbC5jbGFzc05hbWUgKyBlbC5zcmMgKyBlbC5ocmVmICsgZWwudGV4dENvbnRlbnQsXHJcblx0XHRcdGkgPSBzdHIubGVuZ3RoLFxyXG5cdFx0XHRzdW0gPSAwO1xyXG5cclxuXHRcdHdoaWxlIChpLS0pIHtcclxuXHRcdFx0c3VtICs9IHN0ci5jaGFyQ29kZUF0KGkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBzdW0udG9TdHJpbmcoMzYpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgaW5kZXggb2YgYW4gZWxlbWVudCB3aXRoaW4gaXRzIHBhcmVudCBmb3IgYSBzZWxlY3RlZCBzZXQgb2ZcclxuXHQgKiBlbGVtZW50c1xyXG5cdCAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbFxyXG5cdCAqIEBwYXJhbSAge3NlbGVjdG9yfSBzZWxlY3RvclxyXG5cdCAqIEByZXR1cm4ge251bWJlcn1cclxuXHQgKi9cclxuXHRmdW5jdGlvbiBfaW5kZXgoZWwsIHNlbGVjdG9yKSB7XHJcblx0XHR2YXIgaW5kZXggPSAwO1xyXG5cclxuXHRcdGlmICghZWwgfHwgIWVsLnBhcmVudE5vZGUpIHtcclxuXHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0fVxyXG5cclxuXHRcdHdoaWxlIChlbCAmJiAoZWwgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSkge1xyXG5cdFx0XHRpZiAoKGVsLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgIT09ICdURU1QTEFURScpICYmIChzZWxlY3RvciA9PT0gJz4qJyB8fCBfbWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSkge1xyXG5cdFx0XHRcdGluZGV4Kys7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gaW5kZXg7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfbWF0Y2hlcygvKipIVE1MRWxlbWVudCovZWwsIC8qKlN0cmluZyovc2VsZWN0b3IpIHtcclxuXHRcdGlmIChlbCkge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGlmIChlbC5tYXRjaGVzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZWwubWF0Y2hlcyhzZWxlY3Rvcik7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChlbC5tc01hdGNoZXNTZWxlY3Rvcikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGVsLm1zTWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gY2F0Y2goXykge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHZhciBfdGhyb3R0bGVUaW1lb3V0O1xyXG5cdGZ1bmN0aW9uIF90aHJvdHRsZShjYWxsYmFjaywgbXMpIHtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICghX3Rocm90dGxlVGltZW91dCkge1xyXG5cdFx0XHRcdHZhciBhcmdzID0gYXJndW1lbnRzLFxyXG5cdFx0XHRcdFx0X3RoaXMgPSB0aGlzXHJcblx0XHRcdFx0O1xyXG5cclxuXHRcdFx0XHRfdGhyb3R0bGVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0Y2FsbGJhY2suY2FsbChfdGhpcywgYXJnc1swXSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjYWxsYmFjay5hcHBseShfdGhpcywgYXJncyk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0X3Rocm90dGxlVGltZW91dCA9IHZvaWQgMDtcclxuXHRcdFx0XHR9LCBtcyk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfY2FuY2VsVGhyb3R0bGUoKSB7XHJcblx0XHRjbGVhclRpbWVvdXQoX3Rocm90dGxlVGltZW91dCk7XHJcblx0XHRfdGhyb3R0bGVUaW1lb3V0ID0gdm9pZCAwO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gX2V4dGVuZChkc3QsIHNyYykge1xyXG5cdFx0aWYgKGRzdCAmJiBzcmMpIHtcclxuXHRcdFx0Zm9yICh2YXIga2V5IGluIHNyYykge1xyXG5cdFx0XHRcdGlmIChzcmMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRcdFx0ZHN0W2tleV0gPSBzcmNba2V5XTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZHN0O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gX2Nsb25lKGVsKSB7XHJcblx0XHRpZiAoUG9seW1lciAmJiBQb2x5bWVyLmRvbSkge1xyXG5cdFx0XHRyZXR1cm4gUG9seW1lci5kb20oZWwpLmNsb25lTm9kZSh0cnVlKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKCQpIHtcclxuXHRcdFx0cmV0dXJuICQoZWwpLmNsb25lKHRydWUpWzBdO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHJldHVybiBlbC5jbG9uZU5vZGUodHJ1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfc2F2ZUlucHV0Q2hlY2tlZFN0YXRlKHJvb3QpIHtcclxuXHRcdHNhdmVkSW5wdXRDaGVja2VkLmxlbmd0aCA9IDA7XHJcblxyXG5cdFx0dmFyIGlucHV0cyA9IHJvb3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XHJcblx0XHR2YXIgaWR4ID0gaW5wdXRzLmxlbmd0aDtcclxuXHJcblx0XHR3aGlsZSAoaWR4LS0pIHtcclxuXHRcdFx0dmFyIGVsID0gaW5wdXRzW2lkeF07XHJcblx0XHRcdGVsLmNoZWNrZWQgJiYgc2F2ZWRJbnB1dENoZWNrZWQucHVzaChlbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfbmV4dFRpY2soZm4pIHtcclxuXHRcdHJldHVybiBzZXRUaW1lb3V0KGZuLCAwKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIF9jYW5jZWxOZXh0VGljayhpZCkge1xyXG5cdFx0cmV0dXJuIGNsZWFyVGltZW91dChpZCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfcHJldmVudFNjcm9sbChldnQpIHtcclxuXHRcdGlmIChTb3J0YWJsZS5hY3RpdmUgJiYgZXZ0LmNhbmNlbGFibGUpIHtcclxuXHRcdFx0ZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gRXhwb3J0IHV0aWxzXHJcblx0U29ydGFibGUudXRpbHMgPSB7XHJcblx0XHRvbjogX29uLFxyXG5cdFx0b2ZmOiBfb2ZmLFxyXG5cdFx0Y3NzOiBfY3NzLFxyXG5cdFx0ZmluZDogX2ZpbmQsXHJcblx0XHRpczogZnVuY3Rpb24gKGVsLCBzZWxlY3Rvcikge1xyXG5cdFx0XHRyZXR1cm4gISFfY2xvc2VzdChlbCwgc2VsZWN0b3IsIGVsLCBmYWxzZSk7XHJcblx0XHR9LFxyXG5cdFx0ZXh0ZW5kOiBfZXh0ZW5kLFxyXG5cdFx0dGhyb3R0bGU6IF90aHJvdHRsZSxcclxuXHRcdGNsb3Nlc3Q6IF9jbG9zZXN0LFxyXG5cdFx0dG9nZ2xlQ2xhc3M6IF90b2dnbGVDbGFzcyxcclxuXHRcdGNsb25lOiBfY2xvbmUsXHJcblx0XHRpbmRleDogX2luZGV4LFxyXG5cdFx0bmV4dFRpY2s6IF9uZXh0VGljayxcclxuXHRcdGNhbmNlbE5leHRUaWNrOiBfY2FuY2VsTmV4dFRpY2ssXHJcblx0XHRkZXRlY3REaXJlY3Rpb246IF9kZXRlY3REaXJlY3Rpb24sXHJcblx0XHRnZXRDaGlsZDogX2dldENoaWxkXHJcblx0fTtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBzb3J0YWJsZSBpbnN0YW5jZVxyXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9ICBlbFxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSAgICAgIFtvcHRpb25zXVxyXG5cdCAqL1xyXG5cdFNvcnRhYmxlLmNyZWF0ZSA9IGZ1bmN0aW9uIChlbCwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIG5ldyBTb3J0YWJsZShlbCwgb3B0aW9ucyk7XHJcblx0fTtcclxuXHJcblxyXG5cdC8vIEV4cG9ydFxyXG5cdFNvcnRhYmxlLnZlcnNpb24gPSAnMS44LjAtcmMxJztcclxuXHRyZXR1cm4gU29ydGFibGU7XHJcbn0pOyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZpZ2h0U3RhdHVzLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9maWdodFN0YXR1cy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZpZ2h0U3RhdHVzLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2ZpZ2h0U3RhdHVzLnRlbXBsYXRlJztcbmltcG9ydCAnLi9maWdodFN0YXR1cy5jc3MnO1xuXG5jbGFzcyBGaWdodFN0YXR1cyB7XG4gIHN0YXRpYyBjcmVhdGUoaGVybywgbW9uc3RlciwgbGV2ZWwpIHtcbiAgICBGaWdodFN0YXR1cy5kcmF3KCk7XG4gICAgRmlnaHRTdGF0dXMuaW5zZXJ0UGxheWVyc05hbWVzKGhlcm8ubmFtZSwgbW9uc3Rlci5uYW1lKTtcbiAgICBGaWdodFN0YXR1cy5pbnNlcnRHYW1lTGV2ZWwobGV2ZWwpO1xuICAgIEZpZ2h0U3RhdHVzLmluc2VydFBsYXllcnNJbWcoaGVybywgbW9uc3Rlcik7XG4gIH1cblxuICBzdGF0aWMgZHJhdygpIHtcbiAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVfX2NvbnRhaW5lcicpO1xuICAgIGdhbWVDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGVtcGxhdGUpO1xuICB9XG5cbiAgc3RhdGljIGluc2VydFBsYXllcnNOYW1lcyhoZXJvTmFtZSwgbW9uc3Rlck5hbWUpIHtcbiAgICBjb25zdCBoZXJvTmFtZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fbmFtZScpO1xuICAgIGNvbnN0IG1vbnN0ZXJOYW1lRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25zdGVyX19uYW1lJyk7XG4gICAgaGVyb05hbWVFbGVtLmlubmVySFRNTCA9IGhlcm9OYW1lO1xuICAgIG1vbnN0ZXJOYW1lRWxlbS5pbm5lckhUTUwgPSBtb25zdGVyTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBpbnNlcnRHYW1lTGV2ZWwobGV2ZWwpIHtcbiAgICBjb25zdCBsZXZlbEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fbGV2ZWwnKTtcbiAgICBsZXZlbEluZm8uaW5uZXJIVE1MID0gYExldmVsICR7bGV2ZWx9YDtcbiAgfVxuXG4gIHN0YXRpYyBpbnNlcnRQbGF5ZXJzSW1nKGhlcm8sIG1vbnN0ZXIpIHtcbiAgICBjb25zdCBoZXJvRnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fZnJhbWUnKTtcbiAgICBjb25zdCBtb25zdGVyRnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9uc3Rlcl9fZnJhbWUnKTtcbiAgICBoZXJvRnJhbWUuYXBwZW5kQ2hpbGQoaGVyby5ib2R5UGFydHMuaGVhZC5pbWcpO1xuICAgIG1vbnN0ZXJGcmFtZS5hcHBlbmRDaGlsZChtb25zdGVyLmJvZHlQYXJ0cy5oZWFkLmltZyk7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlUGxheWVyc0hQKGhlcm9IUCwgbW9uc3RlckhQKSB7XG4gICAgRmlnaHRTdGF0dXMuY2hhbmdlSFBCYXIoaGVyb0hQLCBtb25zdGVySFApO1xuICAgIEZpZ2h0U3RhdHVzLmNoYW5nZUhQVmFsdWUoaGVyb0hQLCBtb25zdGVySFApO1xuICB9XG5cbiAgc3RhdGljIGNoYW5nZUhQQmFyKGhlcm9IUCwgbW9uc3RlckhQKSB7XG4gICAgY29uc3QgaGVyb0hQRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19ocF9iYXInKTtcbiAgICBjb25zdCBtb25zdGVySFBFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbnN0ZXJfX2hwX2JhcicpO1xuICAgIGhlcm9IUEVsZW0uc3R5bGUud2lkdGggPSBgJHtoZXJvSFB9JWA7XG4gICAgbW9uc3RlckhQRWxlbS5zdHlsZS53aWR0aCA9IGAke21vbnN0ZXJIUH0lYDtcbiAgfVxuXG4gIHN0YXRpYyBjaGFuZ2VIUFZhbHVlKGhlcm9IUCwgbW9uc3RlckhQKSB7XG4gICAgY29uc3QgaGVyb0hQVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19faHBfdmFsdWUnKTtcbiAgICBjb25zdCBtb25zdGVySFBWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25zdGVyX19ocF92YWx1ZScpO1xuICAgIGhlcm9IUFZhbHVlLmlubmVySFRNTCA9IGAke2hlcm9IUH1ocGA7XG4gICAgbW9uc3RlckhQVmFsdWUuaW5uZXJIVE1MID0gYCR7bW9uc3RlckhQfWhwYDtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmUoKSB7XG4gICAgY29uc3QgZ2FtZVN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19zdGF0dXMnKTtcbiAgICBnYW1lU3RhdHVzLnJlbW92ZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpZ2h0U3RhdHVzO1xuIiwiZXhwb3J0IGRlZmF1bHQgYFxuPGRpdiBjbGFzcz1cImdhbWVfX3N0YXR1c1wiPlxuICA8ZGl2IGNsYXNzPVwicGxheWVyX19maWVsZCBoZXJvX19maWVsZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXJfX2ZyYW1lIGhlcm9fX2ZyYW1lXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBsYXllcl9faW5mb1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInBsYXllcl9faHBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllcl9faHAtdW5kZXJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBsYXllcl9faHBfdmFsdWUgaGVyb19faHBfdmFsdWVcIj4xMDBocDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyX19ocF9iYXIgaGVyb19faHBfYmFyXCI+PC9kaXY+ICAgXG4gICAgICAgIDwvZGl2PiBcbiAgICAgIDwvZGl2PlxuICAgICAgPHAgY2xhc3M9XCJwbGF5ZXJfX25hbWUgaGVyb19fbmFtZVwiPkhlcm88L3A+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8cCBjbGFzcz1cImdhbWVfX2xldmVsXCI+TGV2ZWwgMTwvcD5cbiAgPGRpdiBjbGFzcz1cInBsYXllcl9fZmllbGQgbW9uc3Rlcl9fZmllbGRcIj4gXG4gICAgPGRpdiBjbGFzcz1cInBsYXllcl9faW5mb1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInBsYXllcl9faHBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllcl9faHAtdW5kZXJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBsYXllcl9faHBfdmFsdWUgbW9uc3Rlcl9faHBfdmFsdWVcIj4xMDBocDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyX19ocF9iYXIgbW9uc3Rlcl9faHBfYmFyXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICBcbiAgICAgIDxwIGNsYXNzPVwicGxheWVyX19uYW1lIG1vbnN0ZXJfX25hbWVcIj5Nb25zdGVyPC9wPlxuICAgIDwvZGl2PiAgXG4gICAgPGRpdiBjbGFzcz1cInBsYXllcl9fZnJhbWUgbW9uc3Rlcl9fZnJhbWVcIj48L2Rpdj4gXG4gIDwvZGl2PlxuPC9kaXY+XG5gO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFnaWNUeXBlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYWdpY1R5cGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYWdpY1R5cGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbWFnaWNUeXBlLnRlbXBsYXRlJztcbmltcG9ydCBUYXNrTGlzdCBmcm9tICcuLi90YXNrTGlzdC90YXNrTGlzdCc7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0ICcuL21hZ2ljVHlwZS5jc3MnO1xuXG5jbGFzcyBNYWdpY1R5cGUge1xuICBzdGF0aWMgaW5pdE1hZ2ljVHlwZSgpIHtcbiAgICBVdGlscy5wYXVzZSgxMDAwKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBNYWdpY1R5cGUuY3JlYXRlTWFnaWNUeXBlKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVNYWdpY1R5cGUoKSB7XG4gICAgTWFnaWNUeXBlLmRyYXcoKTtcbiAgICBNYWdpY1R5cGUuc2V0RXZlbnRMaXN0ZW5lcihUYXNrTGlzdC5pbml0VGFza0xpc3QpO1xuICB9XG5cbiAgc3RhdGljIGRyYXcoKSB7XG4gICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19jb250YWluZXInKTtcbiAgICBnYW1lQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGUpO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZSgpIHtcbiAgICBjb25zdCBtb2RhbFR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFnaWNfX2Nob29zZScpO1xuICAgIE1hZ2ljVHlwZS5yZW1vdmVFdmVudExpc3RlbmVycyhUYXNrTGlzdC5pbml0VGFza0xpc3QpO1xuICAgIG1vZGFsVHlwZS5yZW1vdmUoKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRFdmVudExpc3RlbmVyKGZ1bmMpIHtcbiAgICBjb25zdCBidXR0b25IZWFsaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hZ2ljX19oZWFsaW5nJyk7XG4gICAgY29uc3QgYnV0dG9uQXR0YWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hZ2ljX19hdHRhY2snKTtcbiAgICBidXR0b25IZWFsaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuYyk7XG4gICAgYnV0dG9uQXR0YWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuYyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBNYWdpY1R5cGUuY29udHJvbE1hZ2ljVHlwZUJ5S2V5cyk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoZnVuYykge1xuICAgIGNvbnN0IGJ1dHRvbkhlYWxpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFnaWNfX2hlYWxpbmcnKTtcbiAgICBjb25zdCBidXR0b25BdHRhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFnaWNfX2F0dGFjaycpO1xuICAgIGJ1dHRvbkhlYWxpbmcucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jKTtcbiAgICBidXR0b25BdHRhY2sucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIE1hZ2ljVHlwZS5jb250cm9sTWFnaWNUeXBlQnlLZXlzKTtcbiAgfVxuXG4gIHN0YXRpYyBjb250cm9sTWFnaWNUeXBlQnlLZXlzKGV2ZW50KSB7XG4gICAgY29uc3QgRU5URVJfS0VZID0gMTM7XG4gICAgY29uc3QgTEVGVF9LRVkgPSAzNztcbiAgICBjb25zdCBSSUdIVF9LRVkgPSAzOTtcbiAgICBjb25zdCBzZWxlY3RlZENsYXNzID0gJ3NlbGVjdGVkJztcblxuICAgIGNvbnN0IGxpc3RPZkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFnaWNfX3R5cGUtYnRuJyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRCdXR0b24gPSBVdGlscy5kZWZpbmVTZWxlY3RlZEVsZW1lbnQobGlzdE9mQnV0dG9ucywgc2VsZWN0ZWRDbGFzcyk7XG5cbiAgICBpZiAoc2VsZWN0ZWRCdXR0b24pIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFTlRFUl9LRVkpIHtcbiAgICAgICAgc2VsZWN0ZWRCdXR0b24uY2xpY2soKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gTEVGVF9LRVkpIHtcbiAgICAgICAgVXRpbHMuc2VsZWN0UHJldkVsZW1lbnQobGlzdE9mQnV0dG9ucywgc2VsZWN0ZWRDbGFzcyk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IFJJR0hUX0tFWSkge1xuICAgICAgICBVdGlscy5zZWxlY3ROZXh0RWxlbWVudChsaXN0T2ZCdXR0b25zLCBzZWxlY3RlZENsYXNzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgVXRpbHMuc2VsZWN0RWxlbWVudChsaXN0T2ZCdXR0b25zWzBdLCBzZWxlY3RlZENsYXNzKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFnaWNUeXBlO1xuIiwiZXhwb3J0IGRlZmF1bHQgYFxuICAgIDxkaXYgY2xhc3M9XCJtYWdpY19fY2hvb3NlXCI+XG4gICAgICAgIDxoMiBjbGFzcz1cIm1hZ2ljX19raW5kc1wiPkNob29zZSBUeXBlIE9mIE1hZ2ljPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hZ2ljX19idG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWFnaWNfX3R5cGUtYnRuIG1hZ2ljX190eXBlX2hlYWxpbmdcIiBpZD1cIm1hZ2ljX19oZWFsaW5nXCIgZGF0YS10eXBlPVwiaGVhbGluZFwiPkhlYWxpbmc8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtYWdpY19fdHlwZS1idG4gbWFnaWNfX3R5cGVfYXR0YWNrXCIgaWQ9XCJtYWdpY19fYXR0YWNrXCIgZGF0YS10eXBlPVwiYXR0YWNrXCI+QXR0YWNrPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYDtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21vZGFsTG9naW4uY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21vZGFsTG9naW4uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tb2RhbExvZ2luLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL21vZGFsTG9naW4udGVtcGxhdGUnO1xuaW1wb3J0IHBsYXllckNvZmlnIGZyb20gJy4uLy4uL2NvbmZpZ3MvcGxheWVyQ29uZmlnJztcbmltcG9ydCAnLi9tb2RhbExvZ2luLmNzcyc7XG5cbmNsYXNzIE1vZGFsTG9naW4ge1xuICBzdGF0aWMgY3JlYXRlKCkge1xuICAgIE1vZGFsTG9naW4uZHJhdygpO1xuICAgIE1vZGFsTG9naW4uaW5zZXJ0UGxheWVySW1nKHBsYXllckNvZmlnLmhlcm8pO1xuXG4gICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItbmFtZScpO1xuICAgIGlucHV0RmllbGQuZm9jdXMoKTtcbiAgfVxuXG4gIHN0YXRpYyBkcmF3KCkge1xuICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fY29udGFpbmVyJyk7XG4gICAgZ2FtZUNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRlbXBsYXRlKTtcbiAgfVxuXG4gIHN0YXRpYyBpbnNlcnRQbGF5ZXJJbWcoaGVybykge1xuICAgIGNvbnN0IG1vZGFsTG9naW5JbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2hlcm8taW1nJyk7XG4gICAgbW9kYWxMb2dpbkltZy5zcmMgPSBoZXJvLnNwcml0ZXMuaGVhZC5wYXRoO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZSgpIHtcbiAgICBjb25zdCBtb2RhbExvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19sb2dpbicpO1xuICAgIG1vZGFsTG9naW4ucmVtb3ZlKCk7XG4gIH1cblxuICBzdGF0aWMgc2V0RXZlbnRMaXN0ZW5lcihmdW5jKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbl9fbG9naW4nKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIE1vZGFsTG9naW4uc3VibWl0SW5wdXRMb2dpbik7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoZnVuYykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25fX2xvZ2luJyk7XG4gICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuYyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBNb2RhbExvZ2luLnN1Ym1pdElucHV0TG9naW4pO1xuICB9XG5cbiAgc3RhdGljIHN1Ym1pdElucHV0TG9naW4oZXZlbnQpIHtcbiAgICBjb25zdCBFTlRFUl9LRVkgPSAxMztcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRU5URVJfS0VZKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uX19sb2dpbicpLmNsaWNrKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsTG9naW47XG4iLCJleHBvcnQgZGVmYXVsdCBgXG48c2VjdGlvbiBjbGFzcz1cIm1vZGFsX19sb2dpblwiPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9faGVyb1wiPlxuICAgICAgICA8aW1nIGNsYXNzPVwibW9kYWxfX2hlcm8taW1nXCIgYWx0PVwiSGVybyBwb3J0cmV0XCI+XG4gICAgPC9kaXY+XG4gICAgPGgyIGNsYXNzPVwibW9kYWxfX3RpdGxlXCI+Q2hvb3NlIHlvdXIgbmFtZSwgSGVybyE8L2gyPlxuICAgIDxpbnB1dCBjbGFzcz1cIm1vZGFsX19pbnB1dFwiIGlkPVwicGxheWVyLW5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiBhdXRvZm9jdXM+XG4gICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19idXR0b25cIiBpZD1cImJ1dHRvbl9fbG9naW5cIj5TdGFydCBHYW1lPC9idXR0b24+XG5cbjwvc2VjdGlvbj5cbmA7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tb2RhbE5vdGlmaWNhdGlvbi5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbW9kYWxOb3RpZmljYXRpb24uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tb2RhbE5vdGlmaWNhdGlvbi5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbW9kYWxOb3RpZmljYXRpb24udGVtcGxhdGUnO1xuaW1wb3J0ICcuL21vZGFsTm90aWZpY2F0aW9uLmNzcyc7XG5cbmNsYXNzIE1vZGFsTm90aWZpY2F0aW9uIHtcbiAgc3RhdGljIHNob3dNb2RhbE5vdGlmaWNhdGlvbihtZXNzYWdlLCB0aW1lKSB7XG4gICAgTW9kYWxOb3RpZmljYXRpb24uZHJhdyhtZXNzYWdlKTtcbiAgICBVdGlscy5wYXVzZSh0aW1lKS50aGVuKCgpID0+IHtcbiAgICAgIE1vZGFsTm90aWZpY2F0aW9uLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRyYXcobWVzc2FnZSkge1xuICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fY29udGFpbmVyJyk7XG4gICAgZ2FtZUNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRlbXBsYXRlKTtcbiAgICBjb25zdCBtb2RhbE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX21lc3NhZ2UnKTtcbiAgICBtb2RhbE1lc3NhZ2UuaW5uZXJIVE1MID0gbWVzc2FnZTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmUoKSB7XG4gICAgY29uc3QgbW9kYWxOb3RpZmljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX25vdGlmaWNhdGlvbicpO1xuICAgIG1vZGFsTm90aWZpY2F0aW9uLnJlbW92ZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsTm90aWZpY2F0aW9uO1xuIiwiZXhwb3J0IGRlZmF1bHQgYFxuPGRpdiBjbGFzcz1cIm1vZGFsX19ub3RpZmljYXRpb25cIj5cbiAgICA8c3BhbiBjbGFzcz1cIm1vZGFsX19tZXNzYWdlXCI+PC9zcGFuPlxuPC9kaXY+XG5gO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2aWdhdGlvbkxlZnQuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25hdmlnYXRpb25MZWZ0LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2aWdhdGlvbkxlZnQuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbmF2aWdhdGlvbkxlZnQudGVtcGxhdGUnO1xuaW1wb3J0ICcuL25hdmlnYXRpb25MZWZ0LmNzcyc7XG5cbmNsYXNzIE5hdmlnYXRpb25MZWZ0IHtcbiAgc3RhdGljIGRyYXcoKSB7XG4gICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19jb250YWluZXInKTtcbiAgICBnYW1lQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGUpO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZSgpIHtcbiAgICBjb25zdCBsZWZ0TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtbmF2Jyk7XG4gICAgbGVmdE5hdi5yZW1vdmUoKTtcbiAgfVxuXG4gIHN0YXRpYyBtYWtlQnV0dG9uQWN0aXZlKGJ1dHRvbikge1xuICAgIGNvbnN0IGJ1dHRvbk9uID0gYnV0dG9uO1xuICAgIGJ1dHRvbk9uLmRhdGFzZXQubXVzaWMgPSAnb24nO1xuICAgIGJ1dHRvbk9uLmNsYXNzTGlzdC5hZGQoJ25hdl9fYnRuX2FjdGl2ZScpO1xuICB9XG5cbiAgc3RhdGljIG1ha2VCdXR0b25QYXNzaXZlKGJ1dHRvbikge1xuICAgIGNvbnN0IGJ1dHRvbk9mZiA9IGJ1dHRvbjtcbiAgICBidXR0b25PZmYuZGF0YXNldC5tdXNpYyA9ICdvZmYnO1xuICAgIGJ1dHRvbk9mZi5jbGFzc0xpc3QucmVtb3ZlKCduYXZfX2J0bl9hY3RpdmUnKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRNdXNpY0NvbnRyb2xMaXN0ZW5lcihmdW5jKSB7XG4gICAgY29uc3QgYnV0dG9uTXVzaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX211c2ljJyk7XG4gICAgYnV0dG9uTXVzaWMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRFeGl0R2FtZUNvbnRyb2xMaXN0ZW5lcihmdW5jKSB7XG4gICAgY29uc3QgYnV0dG9uRXhpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fZXhpdCcpO1xuICAgIGJ1dHRvbkV4aXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uTGVmdDtcbiIsImV4cG9ydCBkZWZhdWx0IGBcbiA8bmF2IGNsYXNzPVwibGVmdC1uYXZcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwibmF2X19idXR0b24gbmF2X19idG5cIiBpZD1cImJ0bl9tdXNpY1wiIGRhdGEtbXVzaWM9XCJvZmZcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWxnIGZhLW11c2ljXCI+PC9pPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJuYXZfX2J1dHRvbiBuYXZfX2J0blwiIGlkPVwiYnRuX2V4aXRcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWxnIGZhLXNpZ24tb3V0LWFsdFwiPjwvaT5cbiAgICA8L2J1dHRvbj5cbiAgPC9uYXY+XG5gO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc2NvcmVUYWJsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc2NvcmVUYWJsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3Njb3JlVGFibGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vc2NvcmVUYWJsZS50ZW1wbGF0ZSc7XG5pbXBvcnQgR2FtZUludGVyZmFjZSBmcm9tICcuLi8uLi9nYW1lSW50ZXJmYWNlJztcbmltcG9ydCBVdGlscyBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgJy4vc2NvcmVUYWJsZS5jc3MnO1xuXG5jbGFzcyBTY29yZVRhYmxlIHtcbiAgc3RhdGljIGluaXRTY29yZVRhYmxlKCkge1xuICAgIFV0aWxzLnBhdXNlKDEwMDApXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIFNjb3JlVGFibGUuY3JlYXRlU2NvcmVUYWJsZSgpO1xuICAgICAgfSk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlU2NvcmVUYWJsZSgpIHtcbiAgICBjb25zdCBSRVNVTFRTX05VTUJFUiA9IDEwO1xuICAgIGNvbnN0IGdhbWVSZXN1bHRzID0gVXRpbHMucmVjZWl2ZUdhbWVSZXN1bHRzKFJFU1VMVFNfTlVNQkVSKTtcbiAgICBTY29yZVRhYmxlLmRyYXcoZ2FtZVJlc3VsdHMpO1xuICAgIFNjb3JlVGFibGUuc2V0RXZlbnRMaXN0ZW5lcigpO1xuICB9XG5cbiAgc3RhdGljIGRyYXcoZ2FtZVJlc3VsdHMpIHtcbiAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVfX2NvbnRhaW5lcicpO1xuICAgIGdhbWVDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0ZW1wbGF0ZSk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICBnYW1lUmVzdWx0cy5mb3JFYWNoKChlbGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGFibGVSb3cgPSBTY29yZVRhYmxlLmNyZWF0ZVJvdyhlbGVtLCBpbmRleCk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFibGVSb3cpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVfX3Jlc3VsdHMnKTtcbiAgICB0YWJsZS5hcHBlbmQoY29udGFpbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVSb3coZ2FtZVJlc3VsdCwgaW5kZXgpIHtcbiAgICBjb25zdCB0YWJsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgY29uc3QgcG9zaXRpb24gPSBTY29yZVRhYmxlLmNyZWF0ZVJvd0VsZW1lbnQoJ3RkJywgaW5kZXggKyAxKTtcbiAgICBjb25zdCBwbGF5ZXJOYW1lID0gU2NvcmVUYWJsZS5jcmVhdGVSb3dFbGVtZW50KCd0ZCcsIGdhbWVSZXN1bHQucGxheWVyKTtcbiAgICBjb25zdCBsZXZlbCA9IFNjb3JlVGFibGUuY3JlYXRlUm93RWxlbWVudCgndGQnLCBnYW1lUmVzdWx0LmxldmVsKTtcblxuICAgIHRhYmxlUm93LmFwcGVuZENoaWxkKHBvc2l0aW9uKTtcbiAgICB0YWJsZVJvdy5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lKTtcbiAgICB0YWJsZVJvdy5hcHBlbmRDaGlsZChsZXZlbCk7XG5cbiAgICByZXR1cm4gdGFibGVSb3c7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlUm93RWxlbWVudChhdHJpYnV0ZSwgaW5uZXJWYWx1ZSA9ICctJykge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGF0cmlidXRlKTtcbiAgICBlbGVtLmlubmVySFRNTCA9IGlubmVyVmFsdWU7XG5cbiAgICByZXR1cm4gZWxlbTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmUoKSB7XG4gICAgY29uc3Qgc2NvcmVUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZV9fdGFibGUnKTtcbiAgICBTY29yZVRhYmxlLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgc2NvcmVUYWJsZS5yZW1vdmUoKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRFdmVudExpc3RlbmVyKCkge1xuICAgIGNvbnN0IGV4aXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmVfX2V4aXQtZ2FtZScpO1xuICAgIGNvbnN0IHBsYXlBZ2FpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZV9fcGxheS1hZ2FpbicpO1xuICAgIGV4aXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBHYW1lSW50ZXJmYWNlLmV4aXRHYW1lKTtcbiAgICBwbGF5QWdhaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBHYW1lSW50ZXJmYWNlLnJlbG9hZEdhbWUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgU2NvcmVUYWJsZS5jb250cm9sU2NvcmVUYWJsZUJ5S2V5cyk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgZXhpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZV9fZXhpdC1nYW1lJyk7XG4gICAgY29uc3QgcGxheUFnYWluQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlX19wbGF5LWFnYWluJyk7XG4gICAgZXhpdEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIEdhbWVJbnRlcmZhY2UuZXhpdEdhbWUpO1xuICAgIHBsYXlBZ2FpbkJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIEdhbWVJbnRlcmZhY2UucmVsb2FkR2FtZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBTY29yZVRhYmxlLmNvbnRyb2xTY29yZVRhYmxlQnlLZXlzKTtcbiAgfVxuXG4gIHN0YXRpYyBjb250cm9sU2NvcmVUYWJsZUJ5S2V5cyhldmVudCkge1xuICAgIGNvbnN0IEVOVEVSX0tFWSA9IDEzO1xuICAgIGNvbnN0IExFRlRfS0VZID0gMzc7XG4gICAgY29uc3QgUklHSFRfS0VZID0gMzk7XG4gICAgY29uc3Qgc2VsZWN0ZWRDbGFzcyA9ICdzZWxlY3RlZCc7XG5cbiAgICBjb25zdCBsaXN0T2ZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19idXR0b24nKTtcbiAgICBjb25zdCBzZWxlY3RlZEJ1dHRvbiA9IFV0aWxzLmRlZmluZVNlbGVjdGVkRWxlbWVudChsaXN0T2ZCdXR0b25zLCBzZWxlY3RlZENsYXNzKTtcblxuICAgIGlmIChzZWxlY3RlZEJ1dHRvbikge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVOVEVSX0tFWSkge1xuICAgICAgICBzZWxlY3RlZEJ1dHRvbi5jbGljaygpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBMRUZUX0tFWSkge1xuICAgICAgICBVdGlscy5zZWxlY3RQcmV2RWxlbWVudChsaXN0T2ZCdXR0b25zLCBzZWxlY3RlZENsYXNzKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gUklHSFRfS0VZKSB7XG4gICAgICAgIFV0aWxzLnNlbGVjdE5leHRFbGVtZW50KGxpc3RPZkJ1dHRvbnMsIHNlbGVjdGVkQ2xhc3MpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBVdGlscy5zZWxlY3RFbGVtZW50KGxpc3RPZkJ1dHRvbnNbMF0sIHNlbGVjdGVkQ2xhc3MpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY29yZVRhYmxlO1xuIiwiZXhwb3J0IGRlZmF1bHQgYFxuPHNlY3Rpb24gY2xhc3M9XCJzY29yZV9fdGFibGVcIj5cbiAgICA8dGFibGUgY2xhc3M9XCJzY29yZV9fcmVzdWx0c1wiPlxuICAgICAgICA8Y2FwdGlvbiBjbGFzcz0nc2NvcmVfX2hlYWRlcic+U2NvcmUgVGFibGU8L2NhcHR1cmU+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Qb3NpdGlvbjwvdGg+XG4gICAgICAgICAgICA8dGg+UGxheWVyIE5hbWU8L3RoPlxuICAgICAgICAgICAgPHRoPk51bWJlciBvZiBMZXZlbHM8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgICBcbiAgICA8L3RhYmxlPlxuICAgIDxkaXYgY2xhc3M9J3Njb3JlX19idXR0b25zJz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz0nbW9kYWxfX2J1dHRvbiBtb2RhbF9fYnV0dG9uX3BsYXknIGlkPVwic2NvcmVfX3BsYXktYWdhaW5cIj5QbGF5IEFnYWluPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9J21vZGFsX19idXR0b24gbW9kYWxfX2J1dHRvbl9leGl0JyBpZD1cInNjb3JlX19leGl0LWdhbWVcIj5FeGl0IEdhbWU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbjwvc2VjdGlvbj5cbmA7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi90YXNrTGlzdC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdGFza0xpc3QuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi90YXNrTGlzdC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90YXNrTGlzdC50ZW1wbGF0ZSc7XG5pbXBvcnQgZ2FtZVRhc2tzIGZyb20gJy4uLy4uL2NvbmZpZ3MvZ2FtZVRhc2tzJztcbmltcG9ydCBNYWdpY1R5cGUgZnJvbSAnLi4vbWFnaWNUeXBlL21hZ2ljVHlwZSc7XG5pbXBvcnQgVGFzayBmcm9tICcuLi90YXNrcy90YXNrJztcbmltcG9ydCBVdGlscyBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgJy4vdGFza0xpc3QuY3NzJztcblxuY2xhc3MgVGFza0xpc3Qge1xuICBzdGF0aWMgaW5pdFRhc2tMaXN0KGV2ZW50KSB7XG4gICAgVXRpbHMucGF1c2UoMjAwKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBldmVudFR5cGUgPSBldmVudC50YXJnZXQuZGF0YXNldC50eXBlO1xuICAgICAgICBUYXNrTGlzdC5zYXZlQXR0YWNrVHlwZU9wdGlvbihldmVudFR5cGUpO1xuICAgICAgICBNYWdpY1R5cGUucmVtb3ZlKCk7XG4gICAgICAgIFRhc2tMaXN0LmNyZWF0ZVRhc2tMaXN0KGV2ZW50VHlwZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVUYXNrTGlzdChldmVudCkge1xuICAgIFRhc2tMaXN0LmRyYXcoKTtcbiAgICBUYXNrTGlzdC5kZWZpbmVEYW1hZ2VGaWVsZENvbG9yKGV2ZW50KTtcbiAgICBUYXNrTGlzdC5zZXRFdmVudExpc3RlbmVyKCk7XG4gIH1cblxuICBzdGF0aWMgc2F2ZUF0dGFja1R5cGVPcHRpb24oYXR0YWNrVHlwZSkge1xuICAgIFRhc2suYXR0YWNrVHlwZSA9IGF0dGFja1R5cGU7XG4gIH1cblxuICBzdGF0aWMgc2F2ZURhbWFnZVZhbHVlT3B0aW9uKHRhc2tEYW1hZ2UpIHtcbiAgICBUYXNrLnRhc2tEYW1hZ2UgPSB0YXNrRGFtYWdlO1xuICB9XG5cbiAgc3RhdGljIGRyYXcoKSB7XG4gICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19jb250YWluZXInKTtcbiAgICBnYW1lQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGUpO1xuXG4gICAgY29uc3QgdGFza3MgPSBUYXNrTGlzdC5jcmVhdGVMaXN0T2ZUYXNrcyhnYW1lVGFza3MpO1xuICAgIGNvbnN0IHRhc2tzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc19fbGlzdCcpO1xuICAgIHRhc2tzTGlzdC5hcHBlbmRDaGlsZCh0YXNrcyk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTGlzdE9mVGFza3MoZ2FtZVRhc2tzKSB7XG4gICAgY29uc3QgdGFza05hbWVzID0gT2JqZWN0LmtleXMoZ2FtZVRhc2tzKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICB0YXNrTmFtZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgdGFza3NCbG9jayA9IFRhc2tMaXN0LmNyZWF0ZVN1YmplY3RCbG9jayhnYW1lVGFza3NbaXRlbV0pO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tzQmxvY2spO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVTdWJqZWN0QmxvY2sodGFza1N1YmplY3QpIHtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tfX2NvbnRhaW5lcicpO1xuXG4gICAgdGFza1N1YmplY3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgdGFza3NCbG9jayA9IFRhc2tMaXN0LmNyZWF0ZVRhc2tJY29uKGl0ZW0pO1xuICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza3NCbG9jayk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGFza3NDb250YWluZXI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlVGFza0ljb24odGFzaykge1xuICAgIGNvbnN0IHRhc2tzQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrc0Jsb2NrLmNsYXNzTGlzdC5hZGQoJ3Rhc2tzX19pdGVtJyk7XG4gICAgdGFza3NCbG9jay5kYXRhc2V0LnR5cGUgPSB0YXNrLnR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICB0YXNrc0Jsb2NrLmRhdGFzZXQubmFtZSA9IHRhc2submFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIHRhc2tzQmxvY2suZGF0YXNldC5kYW1hZ2UgPSB0YXNrLmRhbWFnZTtcblxuICAgIGNvbnN0IHRhc2tzVHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0YXNrc1R5cGUuY2xhc3NMaXN0LmFkZCgndGFza19fdHlwZScpO1xuICAgIHRhc2tzVHlwZS5pbm5lckhUTUwgPSB0YXNrLnR5cGU7XG5cbiAgICBjb25zdCB0YXNrc0RhbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0YXNrc0RhbWFnZS5jbGFzc0xpc3QuYWRkKCd0YXNrX19kYW1hZ2UnKTtcbiAgICB0YXNrc0RhbWFnZS5pbm5lckhUTUwgPSB0YXNrLmRhbWFnZTtcblxuICAgIGNvbnN0IHRhc2tzTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0YXNrc05hbWUuY2xhc3NMaXN0LmFkZCgndGFza19fbmFtZScpO1xuICAgIHRhc2tzTmFtZS5pbm5lckhUTUwgPSB0YXNrLm5hbWU7XG5cbiAgICBjb25zdCB0YXNrc0NvbXBsZXhpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGFza3NDb21wbGV4aXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2tfX2NvbXBsZXhpdHknKTtcbiAgICB0YXNrc0NvbXBsZXhpdHkuaW5uZXJIVE1MID0gYENvbXBsZXhpdHk6ICR7dGFzay5jb21wbGV4aXR5fWA7XG5cbiAgICB0YXNrc0Jsb2NrLmFwcGVuZENoaWxkKHRhc2tzVHlwZSk7XG4gICAgdGFza3NCbG9jay5hcHBlbmRDaGlsZCh0YXNrc0RhbWFnZSk7XG4gICAgdGFza3NCbG9jay5hcHBlbmRDaGlsZCh0YXNrc05hbWUpO1xuICAgIHRhc2tzQmxvY2suYXBwZW5kQ2hpbGQodGFza3NDb21wbGV4aXR5KTtcblxuICAgIHJldHVybiB0YXNrc0Jsb2NrO1xuICB9XG5cbiAgc3RhdGljIGRlZmluZURhbWFnZUZpZWxkQ29sb3IoZXZlbnRUeXBlKSB7XG4gICAgbGV0IGVsZW1DbGFzcyA9ICd0YXNrX19kYW1hZ2VfYXR0YWNrJztcbiAgICBsZXQgc2lnbiA9ICctJztcblxuICAgIGlmIChldmVudFR5cGUgPT09ICdoZWFsaW5kJykge1xuICAgICAgZWxlbUNsYXNzID0gJ3Rhc2tfX2RhbWFnZV9oZWFsaW5nJztcbiAgICAgIHNpZ24gPSAnKyc7XG4gICAgfVxuXG4gICAgY29uc3QgZGVtYWdlRWxlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrX19kYW1hZ2UnKTtcblxuICAgIEFycmF5LmZyb20oZGVtYWdlRWxlbXMpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGVsZW0gPSBlbGVtZW50O1xuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKGVsZW1DbGFzcyk7XG4gICAgICBlbGVtLmlubmVySFRNTCA9IGAke3NpZ259JHtlbGVtLmlubmVySFRNTH1ocGA7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlKCkge1xuICAgIFRhc2tMaXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcbiAgICBjb25zdCBtb2RhbExvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG4gICAgbW9kYWxMb2dpbi5yZW1vdmUoKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRFdmVudExpc3RlbmVyKCkge1xuICAgIGNvbnN0IHRhc2tzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc19fbGlzdCcpO1xuICAgIHRhc2tzTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFRhc2tMaXN0LmNhbGxVc2VyVGFzayk7XG5cbiAgICBjb25zdCBjb21lQmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc19fYmFjaycpO1xuICAgIGNvbWVCYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVGFza0xpc3QucmV0dXJuVG9NYWdpY0Nob29zZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBUYXNrTGlzdC5jb250cm9sVGFza0xpc3RCeUtleXMpO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7XG4gICAgY29uc3QgdGFza3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzX19saXN0Jyk7XG4gICAgdGFza3NMaXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVGFza0xpc3QuY2FsbFVzZXJUYXNrKTtcblxuICAgIGNvbnN0IGNvbWVCYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzX19iYWNrJyk7XG4gICAgY29tZUJhY2sucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBUYXNrTGlzdC5yZXR1cm5Ub01hZ2ljQ2hvb3NlKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIFRhc2tMaXN0LmNvbnRyb2xUYXNrTGlzdEJ5S2V5cyk7XG4gIH1cblxuICBzdGF0aWMgcmV0dXJuVG9NYWdpY0Nob29zZSgpIHtcbiAgICBUYXNrTGlzdC5yZW1vdmUoKTtcbiAgICBNYWdpY1R5cGUuY3JlYXRlTWFnaWNUeXBlKCk7XG4gIH1cblxuICBzdGF0aWMgY29udHJvbFRhc2tMaXN0QnlLZXlzKGV2ZW50KSB7XG4gICAgY29uc3QgRU5URVJfS0VZID0gMTM7XG4gICAgY29uc3QgTEVGVF9LRVkgPSAzNztcbiAgICBjb25zdCBSSUdIVF9LRVkgPSAzOTtcbiAgICBjb25zdCBFU0NBUEUgPSAyNztcbiAgICBjb25zdCBzZWxlY3RlZENsYXNzID0gJ3NlbGVjdGVkJztcblxuICAgIGNvbnN0IGxpc3RPZlRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tzX19pdGVtJyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gVXRpbHMuZGVmaW5lU2VsZWN0ZWRFbGVtZW50KGxpc3RPZlRhc2tzLCBzZWxlY3RlZENsYXNzKTtcblxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFU0NBUEUpIHtcbiAgICAgIFRhc2tMaXN0LnJldHVyblRvTWFnaWNDaG9vc2UoKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0ZWRUYXNrKSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRU5URVJfS0VZKSB7XG4gICAgICAgIHNlbGVjdGVkVGFzay5jbGljaygpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBMRUZUX0tFWSkge1xuICAgICAgICBVdGlscy5zZWxlY3RQcmV2RWxlbWVudChsaXN0T2ZUYXNrcywgc2VsZWN0ZWRDbGFzcyk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IFJJR0hUX0tFWSkge1xuICAgICAgICBVdGlscy5zZWxlY3ROZXh0RWxlbWVudChsaXN0T2ZUYXNrcywgc2VsZWN0ZWRDbGFzcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIFV0aWxzLnNlbGVjdEVsZW1lbnQobGlzdE9mVGFza3NbMF0sIHNlbGVjdGVkQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjYWxsVXNlclRhc2soZXZlbnQpIHtcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHdoaWxlICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFza3NfX2xpc3QnKSkge1xuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2tzX19pdGVtJykpIHtcbiAgICAgICAgVGFza0xpc3QucmVtb3ZlKCk7XG4gICAgICAgIFRhc2suZGVmaW5lQ2hvb3NlblRhc2sodGFyZ2V0LmRhdGFzZXQudHlwZSwgdGFyZ2V0LmRhdGFzZXQubmFtZSk7XG4gICAgICAgIFRhc2tMaXN0LnNhdmVEYW1hZ2VWYWx1ZU9wdGlvbih0YXJnZXQuZGF0YXNldC5kYW1hZ2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFza0xpc3Q7XG4iLCJleHBvcnQgZGVmYXVsdCBgXG48c2VjdGlvbiBjbGFzcz1cInRhc2tzXCI+XG4gICAgPGgyIGNsYXNzPVwidGFza3NfX2hlYWRlclwiPkNob29zZSBUaGUgVGFzazwvaDI+XG4gICAgPGRpdiBjbGFzcz1cInRhc2tzX19saXN0XCI+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInRhc2tzX19iYWNrXCIgaWQ9XCJ0YXNrc19fYmFja1wiPlxuICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1hcnJvdy1jaXJjbGUtbGVmdCBmYS0yeFwiPjwvaT5cbiAgICA8L2J1dHRvbj5cbjwvc2VjdGlvbj5cbmA7XG4iLCJpbXBvcnQgTGlzdGVuaW5nIGZyb20gJy4vbGlzdGVuaW5nL2xpc3RlbmluZyc7XG5pbXBvcnQgTWlzdGFrZSBmcm9tICcuL21pc3Rha2UvbWlzdGFrZSc7XG5pbXBvcnQgT3JkZXIgZnJvbSAnLi9vcmRlci9vcmRlcic7XG5pbXBvcnQgVHJhbnNsYXRpb24gZnJvbSAnLi90cmFuc2xhdGlvbi90cmFuc2xhdGlvbic7XG5pbXBvcnQgZ2FtZVRhc2tzIGZyb20gJy4uLy4uLy4uL2NvbmZpZ3MvZ2FtZVRhc2tzJztcbmltcG9ydCBUYXNrIGZyb20gJy4uL3Rhc2snO1xuXG5jbGFzcyBFbmdsaXNoIHtcbiAgc3RhdGljIGRlZmluZVRhc2sodGFza05hbWUpIHtcbiAgICBFbmdsaXNoLmRlZmluZUNob29zZW5UYXNrKHRhc2tOYW1lKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZpbmVDaG9vc2VuVGFzayh0YXNrTmFtZSkge1xuICAgIGNvbnN0IHRhc2sgPSBFbmdsaXNoLmRlZmluZVRhc2tCeU5hbWUodGFza05hbWUpO1xuICAgIHN3aXRjaCAodGFza05hbWUpIHtcbiAgICAgIGNhc2UgJ3RyYW5zbGF0aW9uJzpcbiAgICAgICAgVHJhbnNsYXRpb24uY3JlYXRlVGFzayh0YXNrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmaW5kIG1pc3Rha2UnOlxuICAgICAgICBNaXN0YWtlLmNyZWF0ZVRhc2sodGFzayk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGlzdGVuaW5nJzpcbiAgICAgICAgTGlzdGVuaW5nLmNyZWF0ZVRhc2sodGFzayk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnd29yZHMgb3JkZXInOlxuICAgICAgICBPcmRlci5jcmVhdGVUYXNrKHRhc2spO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIFRyYW5zbGF0aW9uLmNyZWF0ZVRhc2sodGFzayk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGRlZmluZVRhc2tCeU5hbWUodGFza05hbWUpIHtcbiAgICBjb25zdCB0YXNrID0gZ2FtZVRhc2tzLmVuZ2xpc2guZmluZChpdGVtID0+IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpID09PSB0YXNrTmFtZSk7XG4gICAgcmV0dXJuIHRhc2s7XG4gIH1cblxuICBzdGF0aWMgc2VuZEFuc3dlclJlc3VsdEJhY2soaXNDb3JyZWN0KSB7XG4gICAgRW5nbGlzaC5yZW1vdmVFdmVudExpc3RlbmVyKCk7XG4gICAgVGFzay5yZWNlaXZlVXNlckFuc3dlclJlc3VsdChpc0NvcnJlY3QpO1xuICB9XG5cbiAgc3RhdGljIHNldEV2ZW50TGlzdGVuZXIoZnVuYykge1xuICAgIGNvbnN0IGFuc3dlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrX2Fuc3dlcicpO1xuICAgIGFuc3dlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgRW5nbGlzaC5jaGVja0lucHV0QW5zd2VyKTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVFdmVudExpc3RlbmVyKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgRW5nbGlzaC5jaGVja0lucHV0QW5zd2VyKTtcbiAgfVxuXG4gIHN0YXRpYyBjaGVja0lucHV0QW5zd2VyKGV2ZW50KSB7XG4gICAgY29uc3QgRU5URVJfS0VZID0gMTM7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVOVEVSX0tFWSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfYW5zd2VyJykuY2xpY2soKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW5nbGlzaDtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2xpc3RlbmluZy5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbGlzdGVuaW5nLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbGlzdGVuaW5nLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2xpc3RlbmluZy50ZW1wbGF0ZSc7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMnO1xuaW1wb3J0IEVuZ2xpc2ggZnJvbSAnLi4vZW5nbGlzaCc7XG5pbXBvcnQgJy4vbGlzdGVuaW5nLmNzcyc7XG5cbmNsYXNzIExpc3RlbmluZyB7XG4gIHN0YXRpYyBjcmVhdGVUYXNrKHRhc2spIHtcbiAgICBjb25zdCByYW5kb21UYXNrID0gVXRpbHMuY2hvb3NlUmFuZG9tRWxlbSh0YXNrLnRhc2tzKTtcbiAgICBMaXN0ZW5pbmcuZHJhdyh0YXNrLmV4cGxhbmF0aW9uLCByYW5kb21UYXNrKTtcblxuICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdGVuaW5nX19pbnB1dCcpO1xuICAgIGlucHV0RmllbGQuZm9jdXMoKTtcblxuICAgIGNvbnN0IGNoZWNrQW5zd2VyID0gTGlzdGVuaW5nLmNoZWNrSW5wdXRBbnN3ZXIuYmluZChudWxsLCByYW5kb21UYXNrLmFuc3dlcik7XG4gICAgY29uc3QgcGxheUF1ZGlvID0gVXRpbHMuY3JlYXRlU291bmQuYmluZChudWxsLCByYW5kb21UYXNrLnZhcmlhYmxlcyk7XG4gICAgTGlzdGVuaW5nLnNldEV2ZW50TGlzdGVuZXIoY2hlY2tBbnN3ZXIsIHBsYXlBdWRpbyk7XG4gIH1cblxuICBzdGF0aWMgZHJhdyhleHBsYW5hdGlvbikge1xuICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fY29udGFpbmVyJyk7XG4gICAgZ2FtZUNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRlbXBsYXRlKTtcblxuICAgIGNvbnN0IHRhc2tFeHBsYW5hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmdsaXNoX19leHBsYW5hdGlvbicpO1xuICAgIHRhc2tFeHBsYW5hdGlvbi5pbm5lckhUTUwgPSBleHBsYW5hdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBzZXRFdmVudExpc3RlbmVyKGNoZWNrQW5zd2VyLCBwbGF5QXVkaW8pIHtcbiAgICBjb25zdCBhbnN3ZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19hbnN3ZXInKTtcbiAgICBhbnN3ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0Fuc3dlcik7XG5cbiAgICBjb25zdCBsaXN0ZW5pbmdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdGVuaW5nX19idXR0b24nKTtcbiAgICBsaXN0ZW5pbmdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5QXVkaW8pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBMaXN0ZW5pbmcuY2hlY2tJbnB1dEtleSk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIExpc3RlbmluZy5jaGVja0lucHV0S2V5KTtcbiAgfVxuXG4gIHN0YXRpYyBjaGVja0lucHV0S2V5KGV2ZW50KSB7XG4gICAgY29uc3QgRU5URVJfS0VZID0gMTM7XG4gICAgY29uc3QgVVBfS0VZID0gMzg7XG4gICAgY29uc3QgRE9XTl9LRVkgPSA0MDtcbiAgICBjb25zdCBzZWxlY3RlZENsYXNzID0gJ3NlbGVjdGVkJztcblxuICAgIGNvbnN0IGxpc3RlbmluZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0ZW5pbmdfX2J1dHRvbicpO1xuICAgIGNvbnN0IGlucHV0QW5zd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3RlbmluZ19faW5wdXQnKTtcbiAgICBjb25zdCBhbnN3ZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19hbnN3ZXInKTtcblxuICAgIGNvbnN0IGFyck9mRWxlbSA9IFtsaXN0ZW5pbmdCdXR0b24sIGlucHV0QW5zd2VyLCBhbnN3ZXJCdXR0b25dO1xuICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IFV0aWxzLmRlZmluZVNlbGVjdGVkRWxlbWVudChhcnJPZkVsZW0sIHNlbGVjdGVkQ2xhc3MpO1xuICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFTlRFUl9LRVkpIHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtLmNsaWNrKCk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IFVQX0tFWSkge1xuICAgICAgICBVdGlscy5zZWxlY3RQcmV2RWxlbWVudChhcnJPZkVsZW0sIHNlbGVjdGVkQ2xhc3MpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBET1dOX0tFWSkge1xuICAgICAgICBVdGlscy5zZWxlY3ROZXh0RWxlbWVudChhcnJPZkVsZW0sIHNlbGVjdGVkQ2xhc3MpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBVdGlscy5zZWxlY3RFbGVtZW50KGFyck9mRWxlbVswXSwgc2VsZWN0ZWRDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNoZWNrSW5wdXRBbnN3ZXIocmlnaHRBbnN3ZXIpIHtcbiAgICBjb25zdCBpbnB1dEFuc3dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0ZW5pbmdfX2lucHV0JykudmFsdWU7XG4gICAgY29uc3QgYW5zd2VyID0gaW5wdXRBbnN3ZXIudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gICAgbGV0IGlzQ29ycmVjdCA9IGZhbHNlO1xuXG4gICAgaWYgKHJpZ2h0QW5zd2VyID09PSBhbnN3ZXIpIHtcbiAgICAgIGlzQ29ycmVjdCA9IHRydWU7XG4gICAgfVxuICAgIExpc3RlbmluZy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XG4gICAgRW5nbGlzaC5zZW5kQW5zd2VyUmVzdWx0QmFjayhpc0NvcnJlY3QpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RlbmluZztcbiIsImV4cG9ydCBkZWZhdWx0IGBcbjxzZWN0aW9uIGNsYXNzPVwidGFza19fbW9kYWwgZW5nbGlzaF9fbGlzdGVuaW5nXCI+XG4gICAgPGgyIGNsYXNzPVwiZW5nbGlzaF9fZXhwbGFuYXRpb25cIj48L2gyPlxuICAgIDxkaXYgY2xhc3M9XCJsaXN0ZW5pbmdfX2NvbnRhaW5lclwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImxpc3RlbmluZ19fYnV0dG9uXCIgaWQ9XCJsaXN0ZW5pbmdfX2J1dHRvblwiPjxpIGNsYXNzPVwiZmFzIGZhLXBsYXlcIj48L2k+PC9idXR0b24+XG4gICAgICA8c3BhbiBjbGFzcz1cImxpc3RlbmluZ19faGVscFwiPkNsaWNrIGZvciBsaXN0ZW48L3NwYW4+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImxpc3RlbmluZ19faW5wdXRcIiBpZD1cImxpc3RlbmluZ19faW5wdXRcIiBhdXRvZm9jdXM+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBpZD0ndGFza19hbnN3ZXInIGNsYXNzPVwiYW5zd2VyX19idG5cIj5BbnN3ZXI8L2J1dHRvbj5cbjwvc2VjdGlvbj5cbmA7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9taXN0YWtlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9taXN0YWtlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWlzdGFrZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9taXN0YWtlLnRlbXBsYXRlJztcbmltcG9ydCBVdGlscyBmcm9tICcuLi8uLi8uLi8uLi91dGlscyc7XG5pbXBvcnQgRW5nbGlzaCBmcm9tICcuLi9lbmdsaXNoJztcbmltcG9ydCAnLi9taXN0YWtlLmNzcyc7XG5cbmNsYXNzIE1pc3Rha2Uge1xuICBzdGF0aWMgY3JlYXRlVGFzayh0YXNrKSB7XG4gICAgY29uc3QgcmFuZG9tVGFzayA9IFV0aWxzLmNob29zZVJhbmRvbUVsZW0odGFzay50YXNrcyk7XG4gICAgTWlzdGFrZS5kcmF3KHRhc2suZXhwbGFuYXRpb24sIHJhbmRvbVRhc2spO1xuXG4gICAgY29uc3QgY2hlY2tBbnN3ZXIgPSBNaXN0YWtlLmNoZWNrSW5wdXRBbnN3ZXIuYmluZChudWxsLCByYW5kb21UYXNrLmFuc3dlcik7XG4gICAgTWlzdGFrZS5zZXRFdmVudExpc3RlbmVyKGNoZWNrQW5zd2VyKTtcbiAgfVxuXG4gIHN0YXRpYyBkcmF3KGV4cGxhbmF0aW9uLCB0YXNrKSB7XG4gICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19jb250YWluZXInKTtcbiAgICBnYW1lQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGUpO1xuXG4gICAgY29uc3QgdGFza0V4cGxhbmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZ2xpc2hfX2V4cGxhbmF0aW9uJyk7XG4gICAgdGFza0V4cGxhbmF0aW9uLmlubmVySFRNTCA9IGV4cGxhbmF0aW9uO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgdGFzay52YXJpYWJsZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3Qgd29yZExldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHdvcmRMZXR0ZXIuY2xhc3NMaXN0LmFkZCgnZW5nbGlzaF9fbGV0dGVyJyk7XG4gICAgICB3b3JkTGV0dGVyLmlubmVySFRNTCA9IGl0ZW07XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod29yZExldHRlcik7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pc3Rha2VfX2NvbnRhaW5lcicpO1xuICAgIHRhc2tDb250YWluZXIucHJlcGVuZChjb250YWluZXIpO1xuICB9XG5cbiAgc3RhdGljIHNldEV2ZW50TGlzdGVuZXIoZnVuYykge1xuICAgIGNvbnN0IGVuZ2xpc2hDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlzdGFrZV9fY29udGFpbmVyJyk7XG4gICAgZW5nbGlzaENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgTWlzdGFrZS5jb250cm9sTWlzdGFrZUJ5S2V5cyk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIE1pc3Rha2UuY29udHJvbE1pc3Rha2VCeUtleXMpO1xuICB9XG5cbiAgc3RhdGljIGNvbnRyb2xNaXN0YWtlQnlLZXlzKGV2ZW50KSB7XG4gICAgY29uc3QgRU5URVJfS0VZID0gMTM7XG4gICAgY29uc3QgTEVGVF9LRVkgPSAzNztcbiAgICBjb25zdCBSSUdIVF9LRVkgPSAzOTtcbiAgICBjb25zdCBzZWxlY3RlZENsYXNzID0gJ3NlbGVjdGVkJztcblxuICAgIGNvbnN0IGxpc3RPZkxldHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW5nbGlzaF9fbGV0dGVyJyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRMZXR0ZXIgPSBVdGlscy5kZWZpbmVTZWxlY3RlZEVsZW1lbnQobGlzdE9mTGV0dGVycywgc2VsZWN0ZWRDbGFzcyk7XG5cbiAgICBpZiAoc2VsZWN0ZWRMZXR0ZXIpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFTlRFUl9LRVkpIHtcbiAgICAgICAgc2VsZWN0ZWRMZXR0ZXIuY2xpY2soKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gTEVGVF9LRVkpIHtcbiAgICAgICAgVXRpbHMuc2VsZWN0UHJldkVsZW1lbnQobGlzdE9mTGV0dGVycywgc2VsZWN0ZWRDbGFzcyk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IFJJR0hUX0tFWSkge1xuICAgICAgICBVdGlscy5zZWxlY3ROZXh0RWxlbWVudChsaXN0T2ZMZXR0ZXJzLCBzZWxlY3RlZENsYXNzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgVXRpbHMuc2VsZWN0RWxlbWVudChsaXN0T2ZMZXR0ZXJzWzBdLCBzZWxlY3RlZENsYXNzKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY2hlY2tJbnB1dEFuc3dlcihyaWdodEFuc3dlciwgZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgbGV0IGlzQ29ycmVjdCA9IGZhbHNlO1xuXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VuZ2xpc2hfX2xldHRlcicpKSB7XG4gICAgICBjb25zdCBhbnN3ZXIgPSB0YXJnZXQuaW5uZXJIVE1MO1xuICAgICAgaWYgKGFuc3dlciA9PT0gcmlnaHRBbnN3ZXIpIHtcbiAgICAgICAgaXNDb3JyZWN0ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgTWlzdGFrZS5yZW1vdmVFdmVudExpc3RlbmVyKCk7XG4gICAgICBFbmdsaXNoLnNlbmRBbnN3ZXJSZXN1bHRCYWNrKGlzQ29ycmVjdCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1pc3Rha2U7XG4iLCJleHBvcnQgZGVmYXVsdCBgXG48c2VjdGlvbiBjbGFzcz1cInRhc2tfX21vZGFsIGVuZ2xpc2hfX21pc3Rha2VcIj5cbiAgICA8aDIgY2xhc3M9XCJlbmdsaXNoX19leHBsYW5hdGlvblwiPjwvaDI+XG4gICAgPGRpdiBjbGFzcz1cIm1pc3Rha2VfX2NvbnRhaW5lclwiPlxuICAgIDwvZGl2PlxuPC9zZWN0aW9uPlxuYDtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL29yZGVyLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9vcmRlci5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL29yZGVyLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL29yZGVyLnRlbXBsYXRlJztcbmltcG9ydCBVdGlscyBmcm9tICcuLi8uLi8uLi8uLi91dGlscyc7XG5pbXBvcnQgRW5nbGlzaCBmcm9tICcuLi9lbmdsaXNoJztcbmltcG9ydCAnLi9vcmRlci5jc3MnO1xuXG5jbGFzcyBPcmRlciB7XG4gIHN0YXRpYyBjcmVhdGVUYXNrKHRhc2spIHtcbiAgICBjb25zdCByYW5kb21UYXNrID0gVXRpbHMuY2hvb3NlUmFuZG9tRWxlbSh0YXNrLnRhc2tzKTtcbiAgICBPcmRlci5kcmF3KHRhc2suZXhwbGFuYXRpb24sIHJhbmRvbVRhc2spO1xuICAgIE9yZGVyLmFkZFNvcnRhYmxlQmVoYXZpb3IoKTtcblxuICAgIGNvbnN0IGNoZWNrQW5zd2VyID0gT3JkZXIuY2hlY2tJbnB1dEFuc3dlci5iaW5kKG51bGwsIHJhbmRvbVRhc2suYW5zd2VyKTtcbiAgICBFbmdsaXNoLnNldEV2ZW50TGlzdGVuZXIoY2hlY2tBbnN3ZXIpO1xuICB9XG5cbiAgc3RhdGljIGRyYXcoZXhwbGFuYXRpb24sIHRhc2spIHtcbiAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVfX2NvbnRhaW5lcicpO1xuICAgIGdhbWVDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0ZW1wbGF0ZSk7XG5cbiAgICBjb25zdCB0YXNrRXhwbGFuYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5nbGlzaF9fZXhwbGFuYXRpb24nKTtcbiAgICB0YXNrRXhwbGFuYXRpb24uaW5uZXJIVE1MID0gZXhwbGFuYXRpb247XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICB0YXNrLnZhcmlhYmxlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgnb3JkZXJfX2l0ZW0nKTtcbiAgICAgIHRhc2tJdGVtLmlubmVySFRNTCA9IGl0ZW07XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0l0ZW0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcl9fY29udGFpbmVyJyk7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICB9XG5cbiAgc3RhdGljIGFkZFNvcnRhYmxlQmVoYXZpb3IoKSB7XG4gICAgY29uc3Qgc29ydGFibGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3JkZXJfX2NvbnRhaW5lcicpO1xuXG4gICAgU29ydGFibGUuY3JlYXRlKHNvcnRhYmxlQ29udGFpbmVyLCB7XG4gICAgICBncm91cDogJ29yZGVyX19jb250YWluZXInLFxuICAgICAgYW5pbWF0aW9uOiAxMDAsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgY2hlY2tJbnB1dEFuc3dlcihyaWdodEFuc3dlcikge1xuICAgIGNvbnN0IGlucHV0QW5zd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyX19jb250YWluZXInKTtcbiAgICBjb25zdCBpc0NvcnJlY3QgPSBBcnJheS5mcm9tKGlucHV0QW5zd2VyLmNoaWxkcmVuKVxuICAgICAgLmV2ZXJ5KChlbGVtLCBpbmRleCkgPT4gZWxlbS5pbm5lckhUTUwgPT09IHJpZ2h0QW5zd2VyW2luZGV4XSk7XG4gICAgRW5nbGlzaC5zZW5kQW5zd2VyUmVzdWx0QmFjayhpc0NvcnJlY3QpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyO1xuIiwiZXhwb3J0IGRlZmF1bHQgYFxuPHNlY3Rpb24gY2xhc3M9XCJ0YXNrX19tb2RhbCBlbmdsaXNoX19vcmRlclwiPlxuICAgIDxoMiBjbGFzcz1cImVuZ2xpc2hfX2V4cGxhbmF0aW9uXCI+PC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwib3JkZXJfX2NvbnRhaW5lclwiIGlkPVwib3JkZXJfX2NvbnRhaW5lclwiPlxuICAgICAgXG4gICAgPC9kaXY+XG4gIFx0PGJ1dHRvbiBpZD0ndGFza19hbnN3ZXInIGNsYXNzPVwiYW5zd2VyX19idG5cIj5BbnN3ZXI8L2J1dHRvbj5cbjwvc2VjdGlvbj5cbmA7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi90cmFuc2xhdGlvbi5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdHJhbnNsYXRpb24uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi90cmFuc2xhdGlvbi5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90cmFuc2xhdGlvbi50ZW1wbGF0ZSc7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMnO1xuaW1wb3J0IEVuZ2xpc2ggZnJvbSAnLi4vZW5nbGlzaCc7XG5pbXBvcnQgJy4vdHJhbnNsYXRpb24uY3NzJztcblxuY2xhc3MgVHJhbnNsYXRpb24ge1xuICBzdGF0aWMgY3JlYXRlVGFzayh0YXNrKSB7XG4gICAgY29uc3QgcmFuZG9tVGFzayA9IFV0aWxzLmNob29zZVJhbmRvbUVsZW0odGFzay50YXNrcyk7XG4gICAgVHJhbnNsYXRpb24uZHJhdyh0YXNrLmV4cGxhbmF0aW9uLCByYW5kb21UYXNrKTtcblxuICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJhbnNsYXRpb25fX2lucHV0Jyk7XG4gICAgaW5wdXRGaWVsZC5mb2N1cygpO1xuXG4gICAgY29uc3QgY2hlY2tBbnN3ZXIgPSBUcmFuc2xhdGlvbi5jaGVja0lucHV0QW5zd2VyLmJpbmQobnVsbCwgcmFuZG9tVGFzay5hbnN3ZXIpO1xuICAgIEVuZ2xpc2guc2V0RXZlbnRMaXN0ZW5lcihjaGVja0Fuc3dlcik7XG4gIH1cblxuICBzdGF0aWMgZHJhdyhleHBsYW5hdGlvbiwgdGFzaykge1xuICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fY29udGFpbmVyJyk7XG4gICAgZ2FtZUNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRlbXBsYXRlKTtcblxuICAgIGNvbnN0IHRhc2tFeHBsYW5hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmdsaXNoX19leHBsYW5hdGlvbicpO1xuICAgIHRhc2tFeHBsYW5hdGlvbi5pbm5lckhUTUwgPSBleHBsYW5hdGlvbjtcblxuICAgIGNvbnN0IGVuZ2xpc2hXb3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZ2xpc2hfX3dvcmQnKTtcbiAgICBlbmdsaXNoV29yZC5pbm5lckhUTUwgPSB0YXNrLnZhcmlhYmxlcztcbiAgfVxuXG4gIHN0YXRpYyBzZXRFdmVudExpc3RlbmVyKGZ1bmMpIHtcbiAgICBjb25zdCBhbnN3ZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19hbnN3ZXInKTtcbiAgICBhbnN3ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jKTtcbiAgfVxuXG4gIHN0YXRpYyBjaGVja0lucHV0QW5zd2VyKGFuc3dlcnNMaXN0KSB7XG4gICAgY29uc3QgaW5wdXRBbnN3ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhbnNsYXRpb25fX2lucHV0JykudmFsdWU7XG4gICAgY29uc3QgYW5zd2VyID0gaW5wdXRBbnN3ZXIudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gICAgbGV0IGlzQ29ycmVjdCA9IGZhbHNlO1xuXG4gICAgaWYgKGFuc3dlcnNMaXN0LmluY2x1ZGVzKGFuc3dlcikpIHtcbiAgICAgIGlzQ29ycmVjdCA9IHRydWU7XG4gICAgfVxuICAgIEVuZ2xpc2guc2VuZEFuc3dlclJlc3VsdEJhY2soaXNDb3JyZWN0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2xhdGlvbjtcbiIsImV4cG9ydCBkZWZhdWx0IGBcbjxzZWN0aW9uIGNsYXNzPVwidGFza19fbW9kYWwgZW5nbGlzaF9fdHJhbnNsYXRpb25cIj5cbiAgICA8aDIgY2xhc3M9XCJlbmdsaXNoX19leHBsYW5hdGlvblwiPjwvaDI+XG4gICAgPGRpdiBjbGFzcz1cImVuZ2xpc2hfX2NvbnRhaW5lclwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJlbmdsaXNoX193b3JkXCI+PC9zcGFuPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ0cmFuc2xhdGlvbl9faW5wdXRcIiBpZD1cInRyYW5zbGF0aW9uX19pbnB1dFwiIGF1dG9mb2N1cz5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIGlkPSd0YXNrX2Fuc3dlcicgY2xhc3M9XCJhbnN3ZXJfX2J0blwiPkFuc3dlcjwvYnV0dG9uPlxuPC9zZWN0aW9uPlxuYDtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2F0dHJhY3Rpb25zLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hdHRyYWN0aW9ucy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2F0dHJhY3Rpb25zLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2F0dHJhY3Rpb25zLnRlbXBsYXRlJztcbmltcG9ydCBVdGlscyBmcm9tICcuLi8uLi8uLi8uLi91dGlscyc7XG5pbXBvcnQgR2VvZ3JhcGh5IGZyb20gJy4uL2dlb2dyYXBoeSc7XG5pbXBvcnQgJy4vYXR0cmFjdGlvbnMuY3NzJztcblxuY2xhc3MgQXR0cmFjdGlvbnMge1xuICBzdGF0aWMgY3JlYXRlVGFzayh0YXNrKSB7XG4gICAgY29uc3QgcmFuZG9tVGFzayA9IFV0aWxzLmNob29zZVJhbmRvbUVsZW0odGFzay50YXNrcyk7XG4gICAgQXR0cmFjdGlvbnMuZHJhdyh0YXNrLmV4cGxhbmF0aW9uLCByYW5kb21UYXNrKTtcblxuICAgIGNvbnN0IGNoZWNrQW5zd2VyID0gQXR0cmFjdGlvbnMuY2hlY2tJbnB1dEFuc3dlci5iaW5kKG51bGwsIHJhbmRvbVRhc2suYW5zd2VyKTtcbiAgICBBdHRyYWN0aW9ucy5zZXRFdmVudExpc3RlbmVyKGNoZWNrQW5zd2VyKTtcbiAgfVxuXG4gIHN0YXRpYyBkcmF3KGV4cGxhbmF0aW9uLCB0YXNrKSB7XG4gICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19jb250YWluZXInKTtcbiAgICBnYW1lQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGUpO1xuXG4gICAgY29uc3QgdGFza0V4cGxhbmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlb2dyYXBoeV9fZXhwbGFuYXRpb24nKTtcbiAgICB0YXNrRXhwbGFuYXRpb24uaW5uZXJIVE1MID0gZXhwbGFuYXRpb247XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICBjb25zdCBhdHRyYWN0aW9uc0NvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXR0cmFjdGlvbnNfX2NvdW50cnknKTtcbiAgICBhdHRyYWN0aW9uc0NvdW50cnkuaW5uZXJIVE1MID0gdGFzay52YXJpYWJsZXNbMF07XG5cbiAgICB0YXNrLnZhcmlhYmxlc1sxXS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBhbnN3ZXJJdGVtID0gQXR0cmFjdGlvbnMuY3JlYXRlQW5zd2VySXRlbShpdGVtKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhbnN3ZXJJdGVtKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFuc3dlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdHRyYWN0aW9uc19fYW5zd2VycycpO1xuICAgIGFuc3dlckNvbnRhaW5lci5wcmVwZW5kKGNvbnRhaW5lcik7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQW5zd2VySXRlbShpdGVtKSB7XG4gICAgY29uc3QgYW5zd2VySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgYW5zd2VySXRlbS5jbGFzc0xpc3QuYWRkKCdjaGVja2JveF9fY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBhbnN3ZXJWYXJpYW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFuc3dlclZhcmlhbnQuY2xhc3NMaXN0LmFkZCgnYW5zd2VyX192YXJpYW50Jyk7XG4gICAgYW5zd2VyVmFyaWFudC5pbm5lckhUTUwgPSBpdGVtO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuXG4gICAgY29uc3QgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNoZWNrbWFyay5jbGFzc0xpc3QuYWRkKCdjaGVja21hcmsnKTtcblxuICAgIGFuc3dlckl0ZW0uYXBwZW5kQ2hpbGQoYW5zd2VyVmFyaWFudCk7XG4gICAgYW5zd2VySXRlbS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgYW5zd2VySXRlbS5hcHBlbmRDaGlsZChjaGVja21hcmspO1xuXG4gICAgcmV0dXJuIGFuc3dlckl0ZW07XG4gIH1cblxuICBzdGF0aWMgc2V0RXZlbnRMaXN0ZW5lcihmdW5jKSB7XG4gICAgY29uc3QgYW5zd2VyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfYW5zd2VyJyk7XG4gICAgYW5zd2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuYyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBBdHRyYWN0aW9ucy5jb250cm9sQXR0cmFjdGlvbnNCeUtleXMpO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBBdHRyYWN0aW9ucy5jb250cm9sQXR0cmFjdGlvbnNCeUtleXMpO1xuICB9XG5cbiAgc3RhdGljIGNvbnRyb2xBdHRyYWN0aW9uc0J5S2V5cyhldmVudCkge1xuICAgIGNvbnN0IEVOVEVSX0tFWSA9IDEzO1xuICAgIGNvbnN0IFVQX0tFWSA9IDM4O1xuICAgIGNvbnN0IERPV05fS0VZID0gNDA7XG4gICAgY29uc3Qgc2VsZWN0ZWRDbGFzcyA9ICdzZWxlY3RlZCc7XG5cbiAgICBjb25zdCBsaXN0T2ZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveF9fY29udGFpbmVyJyk7XG4gICAgY29uc3QgaXRlbXNBcnIgPSBBcnJheS5mcm9tKGxpc3RPZkl0ZW1zKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19hbnN3ZXInKTtcbiAgICBpdGVtc0Fyci5wdXNoKGJ1dHRvbik7XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gVXRpbHMuZGVmaW5lU2VsZWN0ZWRFbGVtZW50KGl0ZW1zQXJyLCBzZWxlY3RlZENsYXNzKTtcbiAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRU5URVJfS0VZKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveF9fY29udGFpbmVyJykpIHtcbiAgICAgICAgICBjb25zdCBjaGVja0JveCA9IHNlbGVjdGVkSXRlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICAgIEF0dHJhY3Rpb25zLnRvZ2dsZUNoZWNrQm94KGNoZWNrQm94KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RlZEl0ZW0uY2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBVUF9LRVkpIHtcbiAgICAgICAgVXRpbHMuc2VsZWN0UHJldkVsZW1lbnQoaXRlbXNBcnIsIHNlbGVjdGVkQ2xhc3MpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBET1dOX0tFWSkge1xuICAgICAgICBVdGlscy5zZWxlY3ROZXh0RWxlbWVudChpdGVtc0Fyciwgc2VsZWN0ZWRDbGFzcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIFV0aWxzLnNlbGVjdEVsZW1lbnQoaXRlbXNBcnJbMF0sIHNlbGVjdGVkQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB0b2dnbGVDaGVja0JveChlbGVtKSB7XG4gICAgaWYgKGVsZW0uY2hlY2tlZCkge1xuICAgICAgZWxlbS5jaGVja2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNoZWNrSW5wdXRBbnN3ZXIocmlnaHRBbnN3ZXIpIHtcbiAgICBjb25zdCBpbnB1dEFuc3dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdHRyYWN0aW9uc19fYW5zd2VycycpO1xuICAgIGNvbnN0IGFuc3dlcnNMaXN0ID0gW107XG5cbiAgICBBcnJheS5mcm9tKGlucHV0QW5zd2VyLmNoaWxkcmVuKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dCA9IGVsZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcblxuICAgICAgaWYgKGlucHV0LmNoZWNrZWQpIHtcbiAgICAgICAgY29uc3QgYW5zd2VyID0gZWxlbS5xdWVyeVNlbGVjdG9yKCcuYW5zd2VyX192YXJpYW50JykuaW5uZXJIVE1MO1xuICAgICAgICBhbnN3ZXJzTGlzdC5wdXNoKGFuc3dlcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgaXNDb3JyZWN0ID0gcmlnaHRBbnN3ZXIuZXZlcnkoaXRlbSA9PiBhbnN3ZXJzTGlzdC5pbmNsdWRlcyhpdGVtKSk7XG5cbiAgICBpZiAoYW5zd2Vyc0xpc3QubGVuZ3RoICE9PSByaWdodEFuc3dlci5sZW5ndGgpIHtcbiAgICAgIGlzQ29ycmVjdCA9IGZhbHNlO1xuICAgIH1cbiAgICBBdHRyYWN0aW9ucy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XG4gICAgR2VvZ3JhcGh5LnNlbmRBbnN3ZXJSZXN1bHRCYWNrKGlzQ29ycmVjdCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXR0cmFjdGlvbnM7XG4iLCJleHBvcnQgZGVmYXVsdCBgXG48c2VjdGlvbiBjbGFzcz1cInRhc2tfX21vZGFsIGdlb2dyYXBoeV9fYXR0cmFjdGlvbnNcIj5cbiAgICA8aDIgY2xhc3M9XCJnZW9ncmFwaHlfX2V4cGxhbmF0aW9uXCI+PC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwiYXR0cmFjdGlvbnNfX2NvbnRhaW5lclwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImF0dHJhY3Rpb25zX19jb3VudHJ5XCI+PC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXR0cmFjdGlvbnNfX2Fuc3dlcnNcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIGlkPSd0YXNrX2Fuc3dlcicgY2xhc3M9XCJhbnN3ZXJfX2J0blwiPkFuc3dlcjwvYnV0dG9uPlxuPC9zZWN0aW9uPlxuYDtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NhcGl0YWxzLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jYXBpdGFscy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NhcGl0YWxzLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2NhcGl0YWxzLnRlbXBsYXRlJztcbmltcG9ydCBVdGlscyBmcm9tICcuLi8uLi8uLi8uLi91dGlscyc7XG5pbXBvcnQgR2VvZ3JhcGh5IGZyb20gJy4uL2dlb2dyYXBoeSc7XG5pbXBvcnQgJy4vY2FwaXRhbHMuY3NzJztcblxuY2xhc3MgQ2FwaXRhbHMge1xuICBzdGF0aWMgY3JlYXRlVGFzayh0YXNrKSB7XG4gICAgY29uc3QgcmFuZG9tVGFzayA9IFV0aWxzLmNob29zZVJhbmRvbUVsZW0odGFzay50YXNrcyk7XG4gICAgQ2FwaXRhbHMuZHJhdyh0YXNrLmV4cGxhbmF0aW9uLCByYW5kb21UYXNrKTtcblxuICAgIGNvbnN0IGNoZWNrQW5zd2VyID0gQ2FwaXRhbHMuY2hlY2tJbnB1dEFuc3dlci5iaW5kKG51bGwsIHJhbmRvbVRhc2suYW5zd2VyKTtcbiAgICBDYXBpdGFscy5zZXRFdmVudExpc3RlbmVyKGNoZWNrQW5zd2VyKTtcbiAgfVxuXG4gIHN0YXRpYyBkcmF3KGV4cGxhbmF0aW9uLCB0YXNrKSB7XG4gICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19jb250YWluZXInKTtcbiAgICBnYW1lQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGUpO1xuXG4gICAgY29uc3QgdGFza0V4cGxhbmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlb2dyYXBoeV9fZXhwbGFuYXRpb24nKTtcbiAgICB0YXNrRXhwbGFuYXRpb24uaW5uZXJIVE1MID0gZXhwbGFuYXRpb247XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICBjb25zdCBjYXBpdGFsc0NpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FwaXRhbHNfX2NpdHknKTtcbiAgICBjYXBpdGFsc0NpdHkuaW5uZXJIVE1MID0gdGFzay52YXJpYWJsZXNbMF07XG5cbiAgICB0YXNrLnZhcmlhYmxlc1sxXS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCB3b3JkQ291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHdvcmRDb3VudHJ5LmNsYXNzTGlzdC5hZGQoJ2NhcGl0YWxzX19pdGVtJyk7XG4gICAgICB3b3JkQ291bnRyeS5pbm5lckhUTUwgPSBpdGVtO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdvcmRDb3VudHJ5KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FwaXRhbHNfX2Fuc3dlcnMnKTtcbiAgICB0YXNrQ29udGFpbmVyLnByZXBlbmQoY29udGFpbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRFdmVudExpc3RlbmVyKGZ1bmMpIHtcbiAgICBjb25zdCBnZW9ncmFwaHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FwaXRhbHNfX2Fuc3dlcnMnKTtcbiAgICBnZW9ncmFwaHlDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIENhcGl0YWxzLmNvbnRyb2xDYXBpdGFsc0J5S2V5cyk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIENhcGl0YWxzLmNvbnRyb2xDYXBpdGFsc0J5S2V5cyk7XG4gIH1cblxuICBzdGF0aWMgY29udHJvbENhcGl0YWxzQnlLZXlzKGV2ZW50KSB7XG4gICAgY29uc3QgRU5URVJfS0VZID0gMTM7XG4gICAgY29uc3QgTEVGVF9LRVkgPSAzNztcbiAgICBjb25zdCBSSUdIVF9LRVkgPSAzOTtcbiAgICBjb25zdCBzZWxlY3RlZENsYXNzID0gJ3NlbGVjdGVkJztcblxuICAgIGNvbnN0IGxpc3RPZkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcGl0YWxzX19pdGVtJyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gVXRpbHMuZGVmaW5lU2VsZWN0ZWRFbGVtZW50KGxpc3RPZkl0ZW1zLCBzZWxlY3RlZENsYXNzKTtcblxuICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFTlRFUl9LRVkpIHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtLmNsaWNrKCk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IExFRlRfS0VZKSB7XG4gICAgICAgIFV0aWxzLnNlbGVjdFByZXZFbGVtZW50KGxpc3RPZkl0ZW1zLCBzZWxlY3RlZENsYXNzKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gUklHSFRfS0VZKSB7XG4gICAgICAgIFV0aWxzLnNlbGVjdE5leHRFbGVtZW50KGxpc3RPZkl0ZW1zLCBzZWxlY3RlZENsYXNzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgVXRpbHMuc2VsZWN0RWxlbWVudChsaXN0T2ZJdGVtc1swXSwgc2VsZWN0ZWRDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNoZWNrSW5wdXRBbnN3ZXIocmlnaHRBbnN3ZXIsIGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGxldCBpc0NvcnJlY3QgPSBmYWxzZTtcblxuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXBpdGFsc19faXRlbScpKSB7XG4gICAgICBjb25zdCBhbnN3ZXIgPSB0YXJnZXQuaW5uZXJIVE1MO1xuICAgICAgaWYgKGFuc3dlciA9PT0gcmlnaHRBbnN3ZXIpIHtcbiAgICAgICAgaXNDb3JyZWN0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIENhcGl0YWxzLnJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcbiAgICAgIEdlb2dyYXBoeS5zZW5kQW5zd2VyUmVzdWx0QmFjayhpc0NvcnJlY3QpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXBpdGFscztcbiIsImV4cG9ydCBkZWZhdWx0IGBcbjxzZWN0aW9uIGNsYXNzPVwidGFza19fbW9kYWwgZ2VvZ3JhcGh5X19jYXBpdGFsc1wiPlxuICAgIDxoMiBjbGFzcz1cImdlb2dyYXBoeV9fZXhwbGFuYXRpb25cIj48L2gyPlxuICAgIDxkaXYgY2xhc3M9XCJjYXBpdGFsc19fY29udGFpbmVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FwaXRhbHNfX2NpdHlcIj48L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXBpdGFsc19fYW5zd2Vyc1wiPjwvZGl2PlxuICAgIDwvZGl2PlxuPC9zZWN0aW9uPlxuYDtcbiIsImltcG9ydCBBdHRyYWN0aW9ucyBmcm9tICcuL2F0dHJhY3Rpb25zL2F0dHJhY3Rpb25zJztcbmltcG9ydCBDYXBpdGFscyBmcm9tICcuL2NhcGl0YWxzL2NhcGl0YWxzJztcbmltcG9ydCBTb3J0aW5nIGZyb20gJy4vc29ydGluZy9zb3J0aW5nJztcbmltcG9ydCBTdGF0ZW1lbnRzIGZyb20gJy4vc3RhdGVtZW50cy9zdGF0ZW1lbnRzJztcbmltcG9ydCBnYW1lVGFza3MgZnJvbSAnLi4vLi4vLi4vY29uZmlncy9nYW1lVGFza3MnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi4vdGFzayc7XG5cbmNsYXNzIEdlb2dyYXBoeSB7XG4gIHN0YXRpYyBkZWZpbmVUYXNrKHRhc2tOYW1lKSB7XG4gICAgR2VvZ3JhcGh5LmRlZmluZUNob29zZW5UYXNrKHRhc2tOYW1lKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZpbmVDaG9vc2VuVGFzayh0YXNrTmFtZSkge1xuICAgIGNvbnN0IHRhc2sgPSBHZW9ncmFwaHkuZGVmaW5lVGFza0J5TmFtZSh0YXNrTmFtZSk7XG4gICAgc3dpdGNoICh0YXNrTmFtZSkge1xuICAgICAgY2FzZSAnY2FwaXRhbHMnOlxuICAgICAgICBDYXBpdGFscy5jcmVhdGVUYXNrKHRhc2spO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0YXRlbWVudHMnOlxuICAgICAgICBTdGF0ZW1lbnRzLmNyZWF0ZVRhc2sodGFzayk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYXR0cmFjdGlvbnMnOlxuICAgICAgICBBdHRyYWN0aW9ucy5jcmVhdGVUYXNrKHRhc2spO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NvcnRpbmcnOlxuICAgICAgICBTb3J0aW5nLmNyZWF0ZVRhc2sodGFzayk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgQ2FwaXRhbHMuY3JlYXRlVGFzayh0YXNrKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZGVmaW5lVGFza0J5TmFtZSh0YXNrTmFtZSkge1xuICAgIGNvbnN0IHRhc2sgPSBnYW1lVGFza3MuZ2VvZ3JhcGh5LmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gdGFza05hbWUpO1xuICAgIHJldHVybiB0YXNrO1xuICB9XG5cbiAgc3RhdGljIHNlbmRBbnN3ZXJSZXN1bHRCYWNrKGlzQ29ycmVjdCkge1xuICAgIFRhc2sucmVjZWl2ZVVzZXJBbnN3ZXJSZXN1bHQoaXNDb3JyZWN0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHZW9ncmFwaHk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zb3J0aW5nLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zb3J0aW5nLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc29ydGluZy5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9zb3J0aW5nLnRlbXBsYXRlJztcbmltcG9ydCBVdGlscyBmcm9tICcuLi8uLi8uLi8uLi91dGlscyc7XG5pbXBvcnQgR2VvZ3JhcGh5IGZyb20gJy4uL2dlb2dyYXBoeSc7XG5pbXBvcnQgJy4vc29ydGluZy5jc3MnO1xuXG5jbGFzcyBTb3J0aW5nIHtcbiAgc3RhdGljIGNyZWF0ZVRhc2sodGFzaykge1xuICAgIGNvbnN0IHJhbmRvbVRhc2sgPSBVdGlscy5jaG9vc2VSYW5kb21FbGVtKHRhc2sudGFza3MpO1xuICAgIFNvcnRpbmcuZHJhdyh0YXNrLmV4cGxhbmF0aW9uLCByYW5kb21UYXNrKTtcbiAgICBTb3J0aW5nLmFkZFNvcnRhYmxlQmVoYXZpb3IoKTtcblxuICAgIGNvbnN0IGNoZWNrQW5zd2VyID0gU29ydGluZy5jaGVja0lucHV0QW5zd2VyLmJpbmQobnVsbCwgcmFuZG9tVGFzay5hbnN3ZXIpO1xuICAgIFNvcnRpbmcuc2V0RXZlbnRMaXN0ZW5lcihjaGVja0Fuc3dlcik7XG4gIH1cblxuICBzdGF0aWMgZHJhdyhleHBsYW5hdGlvbiwgdGFzaykge1xuICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fY29udGFpbmVyJyk7XG4gICAgZ2FtZUNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRlbXBsYXRlKTtcblxuICAgIGNvbnN0IHRhc2tFeHBsYW5hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW9ncmFwaHlfX2V4cGxhbmF0aW9uJyk7XG4gICAgdGFza0V4cGxhbmF0aW9uLmlubmVySFRNTCA9IGV4cGxhbmF0aW9uO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgdGFzay52YXJpYWJsZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ3NvcnRpbmdfX2l0ZW0nKTtcbiAgICAgIHRhc2tJdGVtLmlubmVySFRNTCA9IGl0ZW07XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0l0ZW0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3J0aW5nX19jb250YWluZXInKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH1cblxuICBzdGF0aWMgYWRkU29ydGFibGVCZWhhdmlvcigpIHtcbiAgICBjb25zdCBzb3J0YWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0aW5nX19jb250YWluZXInKTtcblxuICAgIFNvcnRhYmxlLmNyZWF0ZShzb3J0YWJsZUNvbnRhaW5lciwge1xuICAgICAgZ3JvdXA6ICdzb3J0aW5nX19jb250YWluZXInLFxuICAgICAgYW5pbWF0aW9uOiAxMDAsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgc2V0RXZlbnRMaXN0ZW5lcihmdW5jKSB7XG4gICAgY29uc3QgYW5zd2VyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfYW5zd2VyJyk7XG4gICAgYW5zd2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuYyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBTb3J0aW5nLmNoZWNrSW5wdXRLZXkpO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBTb3J0aW5nLmNoZWNrSW5wdXRLZXkpO1xuICB9XG5cbiAgc3RhdGljIGNoZWNrSW5wdXRLZXkoZXZlbnQpIHtcbiAgICBjb25zdCBFTlRFUl9LRVkgPSAxMztcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRU5URVJfS0VZKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19hbnN3ZXInKS5jbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjaGVja0lucHV0QW5zd2VyKHJpZ2h0QW5zd2VyKSB7XG4gICAgY29uc3QgaW5wdXRBbnN3ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29ydGluZ19fY29udGFpbmVyJyk7XG4gICAgY29uc3QgaXNDb3JyZWN0ID0gQXJyYXkuZnJvbShpbnB1dEFuc3dlci5jaGlsZHJlbilcbiAgICAgIC5ldmVyeSgoZWxlbSwgaW5kZXgpID0+IGVsZW0uaW5uZXJIVE1MID09PSByaWdodEFuc3dlcltpbmRleF0pO1xuICAgIFNvcnRpbmcucmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xuICAgIEdlb2dyYXBoeS5zZW5kQW5zd2VyUmVzdWx0QmFjayhpc0NvcnJlY3QpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRpbmc7XG4iLCJleHBvcnQgZGVmYXVsdCBgXG48c2VjdGlvbiBjbGFzcz1cInRhc2tfX21vZGFsIGdlb2dyYXBoeV9fc29ydGluZ1wiPlxuICA8aDIgY2xhc3M9XCJnZW9ncmFwaHlfX2V4cGxhbmF0aW9uXCI+PC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwic29ydGluZ19fY29udGFpbmVyXCIgaWQ9XCJzb3J0aW5nX19jb250YWluZXJcIj48L2Rpdj5cbiAgICA8YnV0dG9uIGlkPSd0YXNrX2Fuc3dlcicgY2xhc3M9XCJhbnN3ZXJfX2J0blwiPkFuc3dlcjwvYnV0dG9uPlxuPC9zZWN0aW9uPlxuYDtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0YXRlbWVudHMuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0YXRlbWVudHMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdGF0ZW1lbnRzLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3N0YXRlbWVudHMudGVtcGxhdGUnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzJztcbmltcG9ydCBHZW9ncmFwaHkgZnJvbSAnLi4vZ2VvZ3JhcGh5JztcbmltcG9ydCAnLi9zdGF0ZW1lbnRzLmNzcyc7XG5cbmNsYXNzIFN0YXRlbWVudHMge1xuICBzdGF0aWMgY3JlYXRlVGFzayh0YXNrKSB7XG4gICAgY29uc3QgcmFuZG9tVGFzayA9IFV0aWxzLmNob29zZVJhbmRvbUVsZW0odGFzay50YXNrcyk7XG4gICAgU3RhdGVtZW50cy5kcmF3KHRhc2suZXhwbGFuYXRpb24sIHJhbmRvbVRhc2spO1xuXG4gICAgY29uc3QgY2hlY2tBbnN3ZXIgPSBTdGF0ZW1lbnRzLmNoZWNrSW5wdXRBbnN3ZXIuYmluZChudWxsLCByYW5kb21UYXNrLmFuc3dlcik7XG4gICAgU3RhdGVtZW50cy5zZXRFdmVudExpc3RlbmVyKGNoZWNrQW5zd2VyKTtcbiAgfVxuXG4gIHN0YXRpYyBkcmF3KGV4cGxhbmF0aW9uLCB0YXNrKSB7XG4gICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19jb250YWluZXInKTtcbiAgICBnYW1lQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGUpO1xuXG4gICAgY29uc3QgdGFza0V4cGxhbmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlb2dyYXBoeV9fZXhwbGFuYXRpb24nKTtcbiAgICB0YXNrRXhwbGFuYXRpb24uaW5uZXJIVE1MID0gZXhwbGFuYXRpb247XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRzU2VudGVuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdGVtZW50c19fc2VudGVuY2UnKTtcbiAgICBzdGF0ZW1lbnRzU2VudGVuY2UuaW5uZXJIVE1MID0gdGFzay52YXJpYWJsZXM7XG4gIH1cblxuICBzdGF0aWMgc2V0RXZlbnRMaXN0ZW5lcihmdW5jKSB7XG4gICAgY29uc3QgYW5zd2VyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfYW5zd2VyJyk7XG4gICAgYW5zd2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuYyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBTdGF0ZW1lbnRzLmNvbnRyb2xTdGF0ZW1lbnRzQnlLZXlzKTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVFdmVudExpc3RlbmVyKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgU3RhdGVtZW50cy5jb250cm9sU3RhdGVtZW50c0J5S2V5cyk7XG4gIH1cblxuICBzdGF0aWMgY29udHJvbFN0YXRlbWVudHNCeUtleXMoZXZlbnQpIHtcbiAgICBjb25zdCBFTlRFUl9LRVkgPSAxMztcbiAgICBjb25zdCBVUF9LRVkgPSAzODtcbiAgICBjb25zdCBET1dOX0tFWSA9IDQwO1xuICAgIGNvbnN0IHNlbGVjdGVkQ2xhc3MgPSAnc2VsZWN0ZWQnO1xuXG4gICAgY29uc3QgbGlzdE9mSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhdGVtZW50c19faXRlbScpO1xuICAgIGNvbnN0IGl0ZW1zQXJyID0gQXJyYXkuZnJvbShsaXN0T2ZJdGVtcyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfYW5zd2VyJyk7XG4gICAgaXRlbXNBcnIucHVzaChidXR0b24pO1xuICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IFV0aWxzLmRlZmluZVNlbGVjdGVkRWxlbWVudChpdGVtc0Fyciwgc2VsZWN0ZWRDbGFzcyk7XG4gICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVOVEVSX0tFWSkge1xuICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtLmNsYXNzTGlzdC5jb250YWlucygnc3RhdGVtZW50c19faXRlbScpKSB7XG4gICAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3RlZEl0ZW0uaHRtbEZvcik7XG4gICAgICAgICAgY2hlY2tCb3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gVVBfS0VZKSB7XG4gICAgICAgIFV0aWxzLnNlbGVjdFByZXZFbGVtZW50KGl0ZW1zQXJyLCBzZWxlY3RlZENsYXNzKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRE9XTl9LRVkpIHtcbiAgICAgICAgVXRpbHMuc2VsZWN0TmV4dEVsZW1lbnQoaXRlbXNBcnIsIHNlbGVjdGVkQ2xhc3MpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBVdGlscy5zZWxlY3RFbGVtZW50KGl0ZW1zQXJyWzBdLCBzZWxlY3RlZENsYXNzKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY2hlY2tJbnB1dEFuc3dlcihyaWdodEFuc3dlcikge1xuICAgIGNvbnN0IGlucHV0QW5zd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dlb2dyYXBoeV9fc3RhdGVtZW50c190cnVlJykuY2hlY2tlZDtcblxuICAgIGxldCBpc0NvcnJlY3QgPSBmYWxzZTtcbiAgICBpZiAoaW5wdXRBbnN3ZXIgPT09IHJpZ2h0QW5zd2VyKSB7XG4gICAgICBpc0NvcnJlY3QgPSB0cnVlO1xuICAgIH1cbiAgICBTdGF0ZW1lbnRzLnJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcbiAgICBHZW9ncmFwaHkuc2VuZEFuc3dlclJlc3VsdEJhY2soaXNDb3JyZWN0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZW1lbnRzO1xuIiwiZXhwb3J0IGRlZmF1bHQgYFxuPHNlY3Rpb24gY2xhc3M9XCJ0YXNrX19tb2RhbCBnZW9ncmFwaHlfX3N0YXRlbWVudHNcIj5cbiAgICA8aDIgY2xhc3M9XCJnZW9ncmFwaHlfX2V4cGxhbmF0aW9uXCI+PC9oMj5cblx0PGRpdiBjbGFzcz1cInN0YXRlbWVudHNfX2NvbnRhaW5lclwiPlxuXHRcdDxzcGFuIGNsYXNzPVwic3RhdGVtZW50c19fc2VudGVuY2VcIj48L3NwYW4+XG5cdFx0PGRpdiBjbGFzcz1cInN0YXRlbWVudHNfX2Fuc3dlcnNcIj5cblx0XHRcdDxwPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJnZW9ncmFwaHlfX3N0YXRlbWVudHNfdHJ1ZVwiIG5hbWU9XCJzdGF0ZW1lbnRzLWdyb3VwXCI+XG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJnZW9ncmFwaHlfX3N0YXRlbWVudHNfdHJ1ZVwiIGNsYXNzPVwic3RhdGVtZW50c19faXRlbVwiPlRydWU8L2xhYmVsPlxuXHRcdFx0PC9wPlxuXHRcdFx0PHA+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImdlb2dyYXBoeV9fc3RhdGVtZW50c19mYWxzZVwiIG5hbWU9XCJzdGF0ZW1lbnRzLWdyb3VwXCI+XG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJnZW9ncmFwaHlfX3N0YXRlbWVudHNfZmFsc2VcIiBjbGFzcz1cInN0YXRlbWVudHNfX2l0ZW1cIj5GYWxzZTwvbGFiZWw+XG5cdFx0XHQ8L3A+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXHQ8YnV0dG9uIGlkPSd0YXNrX2Fuc3dlcicgY2xhc3M9XCJhbnN3ZXJfX2J0blwiPkFuc3dlcjwvYnV0dG9uPlxuPC9zZWN0aW9uPlxuYDtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NvbXBhcmlzb24uY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NvbXBhcmlzb24uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jb21wYXJpc29uLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2NvbXBhcmlzb24udGVtcGxhdGUnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzJztcbmltcG9ydCBNYXRocyBmcm9tICcuLi9tYXRocyc7XG5pbXBvcnQgJy4vY29tcGFyaXNvbi5jc3MnO1xuXG5jbGFzcyBDb21wYXJpc29uIHtcbiAgc3RhdGljIGNyZWF0ZVRhc2sodGFzaykge1xuICAgIGNvbnN0IHJhbmRvbVRhc2sgPSBVdGlscy5jaG9vc2VSYW5kb21FbGVtKHRhc2sudGFza3MpO1xuICAgIENvbXBhcmlzb24uZHJhdyh0YXNrLmV4cGxhbmF0aW9uLCByYW5kb21UYXNrKTtcblxuICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWF0aHNfX2lucHV0Jyk7XG4gICAgaW5wdXRGaWVsZC5mb2N1cygpO1xuXG4gICAgY29uc3QgY2hlY2tBbnN3ZXIgPSBDb21wYXJpc29uLmNoZWNrSW5wdXRBbnN3ZXIuYmluZChudWxsLCByYW5kb21UYXNrLmFuc3dlcik7XG4gICAgTWF0aHMuc2V0RXZlbnRMaXN0ZW5lcihjaGVja0Fuc3dlcik7XG4gIH1cblxuICBzdGF0aWMgZHJhdyhleHBsYW5hdGlvbiwgdGFzaykge1xuICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fY29udGFpbmVyJyk7XG4gICAgZ2FtZUNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRlbXBsYXRlKTtcblxuICAgIGNvbnN0IHRhc2tFeHBsYW5hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXRoc19fZXhwbGFuYXRpb24nKTtcbiAgICB0YXNrRXhwbGFuYXRpb24uaW5uZXJIVE1MID0gZXhwbGFuYXRpb247XG5cbiAgICBjb25zdCBmaXJzdFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hdGhzX192YXJpYWJsZS1vbmUnKTtcbiAgICBmaXJzdFZhbHVlLmlubmVySFRNTCA9IHRhc2sudmFyaWFibGVzWzBdO1xuICAgIGNvbnN0IHNlY29uZFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hdGhzX192YXJpYWJsZS10d28nKTtcbiAgICBzZWNvbmRWYWx1ZS5pbm5lckhUTUwgPSB0YXNrLnZhcmlhYmxlc1sxXTtcbiAgfVxuXG4gIHN0YXRpYyBjaGVja0lucHV0QW5zd2VyKGFuc3dlcikge1xuICAgIGNvbnN0IGlucHV0QW5zd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hdGhzX19pbnB1dCcpLnZhbHVlO1xuICAgIGxldCBpc0NvcnJlY3QgPSBmYWxzZTtcblxuICAgIGlmIChpbnB1dEFuc3dlciA9PT0gYW5zd2VyKSB7XG4gICAgICBpc0NvcnJlY3QgPSB0cnVlO1xuICAgIH1cbiAgICBNYXRocy5zZW5kQW5zd2VyUmVzdWx0QmFjayhpc0NvcnJlY3QpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhcmlzb247XG4iLCJleHBvcnQgZGVmYXVsdCBgXG48c2VjdGlvbiBjbGFzcz1cInRhc2tfX21vZGFsIG1hdGhzX19jb21wYXJpc29uXCI+XG4gICAgPGgyIGNsYXNzPVwibWF0aHNfX2V4cGxhbmF0aW9uXCI+PC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwibWF0aHNfX2NvbnRhaW5lclwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJtYXRoc19fdmFyaWFibGUgbWF0aHNfX3ZhcmlhYmxlLW9uZVwiPjwvc3Bhbj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibWF0aHNfX2lucHV0XCIgY2xhc3M9XCJtYXRoc19faW5wdXRcIiBhdXRvZm9jdXMvPlxuICAgICAgPHNwYW4gY2xhc3M9XCJtYXRoc19fdmFyaWFibGUgbWF0aHNfX3ZhcmlhYmxlLXR3b1wiPjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIGlkPSd0YXNrX2Fuc3dlcicgY2xhc3M9XCJhbnN3ZXJfX2J0blwiPkFuc3dlcjwvYnV0dG9uPlxuPC9zZWN0aW9uPlxuYDtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NvbnN0cnVjdG9yLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jb25zdHJ1Y3Rvci5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NvbnN0cnVjdG9yLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2NvbnN0cnVjdG9yLnRlbXBsYXRlJztcbmltcG9ydCBVdGlscyBmcm9tICcuLi8uLi8uLi8uLi91dGlscyc7XG5pbXBvcnQgTWF0aHMgZnJvbSAnLi4vbWF0aHMnO1xuaW1wb3J0ICcuL2NvbnN0cnVjdG9yLmNzcyc7XG5cbmNsYXNzIENvbnN0cnVjdG9yIHtcbiAgc3RhdGljIGNyZWF0ZVRhc2sodGFzaykge1xuICAgIGNvbnN0IHJhbmRvbVRhc2sgPSBVdGlscy5jaG9vc2VSYW5kb21FbGVtKHRhc2sudGFza3MpO1xuICAgIENvbnN0cnVjdG9yLmRyYXcodGFzay5leHBsYW5hdGlvbiwgcmFuZG9tVGFzayk7XG4gICAgQ29uc3RydWN0b3IuYWRkU29ydGFibGVCZWhhdmlvcigpO1xuXG4gICAgY29uc3QgY2hlY2tBbnN3ZXIgPSBDb25zdHJ1Y3Rvci5jaGVja0lucHV0QW5zd2VyLmJpbmQobnVsbCwgcmFuZG9tVGFzay5hbnN3ZXIpO1xuICAgIE1hdGhzLnNldEV2ZW50TGlzdGVuZXIoY2hlY2tBbnN3ZXIpO1xuICB9XG5cbiAgc3RhdGljIGRyYXcoZXhwbGFuYXRpb24sIHRhc2spIHtcbiAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVfX2NvbnRhaW5lcicpO1xuICAgIGdhbWVDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0ZW1wbGF0ZSk7XG5cbiAgICBjb25zdCB0YXNrRXhwbGFuYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWF0aHNfX2V4cGxhbmF0aW9uJyk7XG4gICAgdGFza0V4cGxhbmF0aW9uLmlubmVySFRNTCA9IGV4cGxhbmF0aW9uO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgdGFzay52YXJpYWJsZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ2NvbnN0cnVjdG9yX19pdGVtJyk7XG4gICAgICB0YXNrSXRlbS5pbm5lckhUTUwgPSBpdGVtO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uc3RydWN0b3JfX2NvbnRhaW5lcicpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRTb3J0YWJsZUJlaGF2aW9yKCkge1xuICAgIGNvbnN0IHNvcnRhYmxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnN0cnVjdG9yX19jb250YWluZXInKTtcblxuICAgIFNvcnRhYmxlLmNyZWF0ZShzb3J0YWJsZUNvbnRhaW5lciwge1xuICAgICAgZ3JvdXA6ICdjb25zdHJ1Y3Rvcl9fY29udGFpbmVyJyxcbiAgICAgIGFuaW1hdGlvbjogMTAwLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGNoZWNrSW5wdXRBbnN3ZXIocmlnaHRBbnN3ZXIpIHtcbiAgICBjb25zdCBpbnB1dEFuc3dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25zdHJ1Y3Rvcl9fY29udGFpbmVyJyk7XG4gICAgY29uc3QgaXNDb3JyZWN0ID0gcmlnaHRBbnN3ZXIuc29tZShpdGVtID0+IEFycmF5LmZyb20oaW5wdXRBbnN3ZXIuY2hpbGRyZW4pXG4gICAgICAuZXZlcnkoKGVsZW0sIGluZGV4KSA9PiBlbGVtLmlubmVySFRNTCA9PT0gaXRlbVtpbmRleF0pKTtcbiAgICBNYXRocy5zZW5kQW5zd2VyUmVzdWx0QmFjayhpc0NvcnJlY3QpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnN0cnVjdG9yO1xuIiwiZXhwb3J0IGRlZmF1bHQgYFxuPHNlY3Rpb24gY2xhc3M9XCJ0YXNrX19tb2RhbCBtYXRoc19fY29uc3RydWN0b3JcIj5cbiAgICA8aDIgY2xhc3M9XCJtYXRoc19fZXhwbGFuYXRpb25cIj48L2gyPlxuICAgIDxkaXYgY2xhc3M9XCJjb25zdHJ1Y3Rvcl9fY29udGFpbmVyXCIgaWQ9XCJjb25zdHJ1Y3Rvcl9fY29udGFpbmVyXCI+PC9kaXY+XG4gIFx0PGJ1dHRvbiBpZD0ndGFza19hbnN3ZXInIGNsYXNzPVwiYW5zd2VyX19idG5cIj5BbnN3ZXI8L2J1dHRvbj5cbjwvc2VjdGlvbj5cbmA7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9lcXVhdGlvbi5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZXF1YXRpb24uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9lcXVhdGlvbi5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9lcXVhdGlvbi50ZW1wbGF0ZSc7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMnO1xuaW1wb3J0IE1hdGhzIGZyb20gJy4uL21hdGhzJztcbmltcG9ydCAnLi9lcXVhdGlvbi5jc3MnO1xuXG5jbGFzcyBFcXVhdGlvbiB7XG4gIHN0YXRpYyBjcmVhdGVUYXNrKHRhc2spIHtcbiAgICBjb25zdCByYW5kb21UYXNrID0gVXRpbHMuZ2VuZXJhdGVNYXRoRXhhbXBsZSgpO1xuICAgIEVxdWF0aW9uLmRyYXcodGFzay5leHBsYW5hdGlvbiwgcmFuZG9tVGFzayk7XG5cbiAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hdGhzX19pbnB1dCcpO1xuICAgIGlucHV0RmllbGQuZm9jdXMoKTtcblxuICAgIGNvbnN0IGNoZWNrQW5zd2VyID0gRXF1YXRpb24uY2hlY2tJbnB1dEFuc3dlci5iaW5kKG51bGwsIHJhbmRvbVRhc2suYW5zd2VyKTtcbiAgICBNYXRocy5zZXRFdmVudExpc3RlbmVyKGNoZWNrQW5zd2VyKTtcbiAgfVxuXG4gIHN0YXRpYyBkcmF3KGV4cGxhbmF0aW9uLCB0YXNrKSB7XG4gICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19jb250YWluZXInKTtcbiAgICBnYW1lQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGUpO1xuXG4gICAgY29uc3QgdGFza0V4cGxhbmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hdGhzX19leHBsYW5hdGlvbicpO1xuICAgIHRhc2tFeHBsYW5hdGlvbi5pbm5lckhUTUwgPSBleHBsYW5hdGlvbjtcblxuICAgIGNvbnN0IG1hdGhzRXhhbXBsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXRoc19fZXhhbXBsZScpO1xuICAgIG1hdGhzRXhhbXBsZS5pbm5lckhUTUwgPSB0YXNrLmV4YW1wbGU7XG4gIH1cblxuICBzdGF0aWMgY2hlY2tJbnB1dEFuc3dlcihhbnN3ZXIpIHtcbiAgICBjb25zdCBpbnB1dEFuc3dlciA9ICtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWF0aHNfX2lucHV0JykudmFsdWU7XG4gICAgbGV0IGlzQ29ycmVjdCA9IGZhbHNlO1xuXG4gICAgaWYgKGlucHV0QW5zd2VyID09PSBhbnN3ZXIpIHtcbiAgICAgIGlzQ29ycmVjdCA9IHRydWU7XG4gICAgfVxuICAgIE1hdGhzLnNlbmRBbnN3ZXJSZXN1bHRCYWNrKGlzQ29ycmVjdCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXF1YXRpb247XG4iLCJleHBvcnQgZGVmYXVsdCBgXG48c2VjdGlvbiBjbGFzcz1cInRhc2tfX21vZGFsIG1hdGhzX19lcXVhdGlvblwiPlxuICAgIDxoMiBjbGFzcz1cIm1hdGhzX19leHBsYW5hdGlvblwiPjwvaDI+XG4gICAgPGRpdiBjbGFzcz1cIm1hdGhzX19jb250YWluZXJcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwibWF0aHNfX2V4YW1wbGVcIj48L3NwYW4+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1hdGhzX19pbnB1dFwiIGNsYXNzPVwibWF0aHNfX2lucHV0XCIgYXV0b2ZvY3VzLz5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIGlkPSd0YXNrX2Fuc3dlcicgY2xhc3M9XCJhbnN3ZXJfX2J0blwiPkFuc3dlcjwvYnV0dG9uPlxuPC9zZWN0aW9uPlxuYDtcbiIsImltcG9ydCBDb21wYXJpc29uIGZyb20gJy4vY29tcGFyaXNvbi9jb21wYXJpc29uJztcbmltcG9ydCBFcXVhdGlvbiBmcm9tICcuL2VxdWF0aW9uL2VxdWF0aW9uJztcbmltcG9ydCBTZXF1ZW5jZSBmcm9tICcuL3NlcXVlbmNlL3NlcXVlbmNlJztcbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tICcuL2NvbnN0cnVjdG9yL2NvbnN0cnVjdG9yJztcbmltcG9ydCBnYW1lVGFza3MgZnJvbSAnLi4vLi4vLi4vY29uZmlncy9nYW1lVGFza3MnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi4vdGFzayc7XG5cbmNsYXNzIE1hdGhzIHtcbiAgc3RhdGljIGRlZmluZVRhc2sodGFza05hbWUpIHtcbiAgICBNYXRocy5kZWZpbmVDaG9vc2VuVGFzayh0YXNrTmFtZSk7XG4gIH1cblxuICBzdGF0aWMgZGVmaW5lQ2hvb3NlblRhc2sodGFza05hbWUpIHtcbiAgICBjb25zdCB0YXNrID0gTWF0aHMuZGVmaW5lVGFza0J5TmFtZSh0YXNrTmFtZSk7XG4gICAgc3dpdGNoICh0YXNrTmFtZSkge1xuICAgICAgY2FzZSAnY29tcGFyaXNvbic6XG4gICAgICAgIENvbXBhcmlzb24uY3JlYXRlVGFzayh0YXNrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlcXVhdGlvbic6XG4gICAgICAgIEVxdWF0aW9uLmNyZWF0ZVRhc2sodGFzayk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VxdWVuY2UnOlxuICAgICAgICBTZXF1ZW5jZS5jcmVhdGVUYXNrKHRhc2spO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NvbnN0cnVjdG9yJzpcbiAgICAgICAgQ29uc3RydWN0b3IuY3JlYXRlVGFzayh0YXNrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBDb21wYXJpc29uLmNyZWF0ZVRhc2sodGFzayk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGRlZmluZVRhc2tCeU5hbWUodGFza05hbWUpIHtcbiAgICBjb25zdCB0YXNrID0gZ2FtZVRhc2tzLm1hdGhzLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gdGFza05hbWUpO1xuICAgIHJldHVybiB0YXNrO1xuICB9XG5cbiAgc3RhdGljIHNlbmRBbnN3ZXJSZXN1bHRCYWNrKGlzQ29ycmVjdCkge1xuICAgIE1hdGhzLnJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcbiAgICBUYXNrLnJlY2VpdmVVc2VyQW5zd2VyUmVzdWx0KGlzQ29ycmVjdCk7XG4gIH1cblxuICBzdGF0aWMgc2V0RXZlbnRMaXN0ZW5lcihmdW5jKSB7XG4gICAgY29uc3QgYW5zd2VyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfYW5zd2VyJyk7XG4gICAgYW5zd2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuYyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBNYXRocy5jaGVja0lucHV0QW5zd2VyKTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVFdmVudExpc3RlbmVyKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgTWF0aHMuY2hlY2tJbnB1dEFuc3dlcik7XG4gIH1cblxuICBzdGF0aWMgY2hlY2tJbnB1dEFuc3dlcihldmVudCkge1xuICAgIGNvbnN0IEVOVEVSX0tFWSA9IDEzO1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFTlRFUl9LRVkpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrX2Fuc3dlcicpLmNsaWNrKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hdGhzO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc2VxdWVuY2UuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3NlcXVlbmNlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc2VxdWVuY2UuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vc2VxdWVuY2UudGVtcGxhdGUnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzJztcbmltcG9ydCBNYXRocyBmcm9tICcuLi9tYXRocyc7XG5pbXBvcnQgJy4vc2VxdWVuY2UuY3NzJztcblxuY2xhc3MgU2VxdWVuY2Uge1xuICBzdGF0aWMgY3JlYXRlVGFzayh0YXNrKSB7XG4gICAgY29uc3QgcmFuZG9tVGFzayA9IFV0aWxzLmNob29zZVJhbmRvbUVsZW0odGFzay50YXNrcyk7XG4gICAgU2VxdWVuY2UuZHJhdyh0YXNrLmV4cGxhbmF0aW9uLCByYW5kb21UYXNrKTtcblxuICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWF0aHNfX2lucHV0Jyk7XG4gICAgaW5wdXRGaWVsZC5mb2N1cygpO1xuXG4gICAgY29uc3QgY2hlY2tBbnN3ZXIgPSBTZXF1ZW5jZS5jaGVja0lucHV0QW5zd2VyLmJpbmQobnVsbCwgcmFuZG9tVGFzay5hbnN3ZXIpO1xuICAgIE1hdGhzLnNldEV2ZW50TGlzdGVuZXIoY2hlY2tBbnN3ZXIpO1xuICB9XG5cbiAgc3RhdGljIGRyYXcoZXhwbGFuYXRpb24sIHRhc2spIHtcbiAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVfX2NvbnRhaW5lcicpO1xuICAgIGdhbWVDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0ZW1wbGF0ZSk7XG5cbiAgICBjb25zdCB0YXNrRXhwbGFuYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWF0aHNfX2V4cGxhbmF0aW9uJyk7XG4gICAgdGFza0V4cGxhbmF0aW9uLmlubmVySFRNTCA9IGV4cGxhbmF0aW9uO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgdGFzay52YXJpYWJsZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgbWF0aHNJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgbWF0aHNJdGVtLmNsYXNzTGlzdC5hZGQoJ21hdGhzX192YXJpYWJsZScpO1xuICAgICAgbWF0aHNJdGVtLmlubmVySFRNTCA9IGl0ZW07XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWF0aHNJdGVtKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWF0aHNfX2NvbnRhaW5lcicpO1xuICAgIHRhc2tDb250YWluZXIucHJlcGVuZChjb250YWluZXIpO1xuICB9XG5cbiAgc3RhdGljIGNoZWNrSW5wdXRBbnN3ZXIoYW5zd2VyKSB7XG4gICAgY29uc3QgaW5wdXRBbnN3ZXIgPSArZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hdGhzX19pbnB1dCcpLnZhbHVlO1xuICAgIGxldCBpc0NvcnJlY3QgPSBmYWxzZTtcblxuICAgIGlmIChpbnB1dEFuc3dlciA9PT0gYW5zd2VyKSB7XG4gICAgICBpc0NvcnJlY3QgPSB0cnVlO1xuICAgIH1cbiAgICBNYXRocy5zZW5kQW5zd2VyUmVzdWx0QmFjayhpc0NvcnJlY3QpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcXVlbmNlO1xuIiwiZXhwb3J0IGRlZmF1bHQgYFxuPHNlY3Rpb24gY2xhc3M9XCJ0YXNrX19tb2RhbCBtYXRoc19fc2VxdWVuY2VcIj5cbiAgICA8aDIgY2xhc3M9XCJtYXRoc19fZXhwbGFuYXRpb25cIj48L2gyPlxuICAgIDxkaXYgY2xhc3M9XCJtYXRoc19fY29udGFpbmVyXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1hdGhzX19pbnB1dFwiIGNsYXNzPVwibWF0aHNfX2lucHV0XCIgYXV0b2ZvY3VzLz5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIGlkPSd0YXNrX2Fuc3dlcicgY2xhc3M9XCJhbnN3ZXJfX2J0blwiPkFuc3dlcjwvYnV0dG9uPlxuPC9zZWN0aW9uPlxuYDtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FiYnJldmlhdGlvbnMuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FiYnJldmlhdGlvbnMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hYmJyZXZpYXRpb25zLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2FiYnJldmlhdGlvbnMudGVtcGxhdGUnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzJztcbmltcG9ydCBQcm9ncmFtbWluZyBmcm9tICcuLi9wcm9ncmFtbWluZyc7XG5pbXBvcnQgJy4vYWJicmV2aWF0aW9ucy5jc3MnO1xuXG5jbGFzcyBBYmJyZXZpYXRpb25zIHtcbiAgc3RhdGljIGNyZWF0ZVRhc2sodGFzaykge1xuICAgIGNvbnN0IHJhbmRvbVRhc2sgPSBVdGlscy5jaG9vc2VSYW5kb21FbGVtKHRhc2sudGFza3MpO1xuICAgIEFiYnJldmlhdGlvbnMuZHJhdyh0YXNrLmV4cGxhbmF0aW9uLCByYW5kb21UYXNrKTtcblxuICAgIGNvbnN0IGNoZWNrQW5zd2VyID0gQWJicmV2aWF0aW9ucy5jaGVja0lucHV0QW5zd2VyLmJpbmQobnVsbCwgcmFuZG9tVGFzay5hbnN3ZXIpO1xuICAgIEFiYnJldmlhdGlvbnMuc2V0RXZlbnRMaXN0ZW5lcihjaGVja0Fuc3dlcik7XG4gIH1cblxuICBzdGF0aWMgZHJhdyhleHBsYW5hdGlvbiwgdGFzaykge1xuICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fY29udGFpbmVyJyk7XG4gICAgZ2FtZUNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRlbXBsYXRlKTtcblxuICAgIGNvbnN0IHRhc2tFeHBsYW5hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmFtbWluZ19fZXhwbGFuYXRpb24nKTtcbiAgICB0YXNrRXhwbGFuYXRpb24uaW5uZXJIVE1MID0gZXhwbGFuYXRpb247XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICBjb25zdCB0YXNrV29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYmJyZXZpYXRpb25zX193b3JkJyk7XG4gICAgdGFza1dvcmQuaW5uZXJIVE1MID0gdGFzay52YXJpYWJsZXNbMF07XG5cbiAgICB0YXNrLnZhcmlhYmxlc1sxXS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBhbnN3ZXJJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgYW5zd2VySXRlbS5jbGFzc0xpc3QuYWRkKCdhYmJyZXZpYXRpb25zX19pdGVtJyk7XG4gICAgICBhbnN3ZXJJdGVtLmlubmVySFRNTCA9IGl0ZW07XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYW5zd2VySXRlbSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFiYnJldmlhdGlvbnNfX2Fuc3dlcnMnKTtcbiAgICB0YXNrQ29udGFpbmVyLnByZXBlbmQoY29udGFpbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRFdmVudExpc3RlbmVyKGZ1bmMpIHtcbiAgICBjb25zdCBnZW9ncmFwaHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJicmV2aWF0aW9uc19fYW5zd2VycycpO1xuICAgIGdlb2dyYXBoeUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgQWJicmV2aWF0aW9ucy5jb250cm9sQWJicmV2aWF0aW9uc0J5S2V5cyk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIEFiYnJldmlhdGlvbnMuY29udHJvbEFiYnJldmlhdGlvbnNCeUtleXMpO1xuICB9XG5cbiAgc3RhdGljIGNvbnRyb2xBYmJyZXZpYXRpb25zQnlLZXlzKGV2ZW50KSB7XG4gICAgY29uc3QgRU5URVJfS0VZID0gMTM7XG4gICAgY29uc3QgVVBfS0VZID0gMzg7XG4gICAgY29uc3QgRE9XTl9LRVkgPSA0MDtcbiAgICBjb25zdCBzZWxlY3RlZENsYXNzID0gJ3NlbGVjdGVkJztcblxuICAgIGNvbnN0IGxpc3RPZkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFiYnJldmlhdGlvbnNfX2l0ZW0nKTtcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSBVdGlscy5kZWZpbmVTZWxlY3RlZEVsZW1lbnQobGlzdE9mSXRlbXMsIHNlbGVjdGVkQ2xhc3MpO1xuXG4gICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVOVEVSX0tFWSkge1xuICAgICAgICBzZWxlY3RlZEl0ZW0uY2xpY2soKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gVVBfS0VZKSB7XG4gICAgICAgIFV0aWxzLnNlbGVjdFByZXZFbGVtZW50KGxpc3RPZkl0ZW1zLCBzZWxlY3RlZENsYXNzKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRE9XTl9LRVkpIHtcbiAgICAgICAgVXRpbHMuc2VsZWN0TmV4dEVsZW1lbnQobGlzdE9mSXRlbXMsIHNlbGVjdGVkQ2xhc3MpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBVdGlscy5zZWxlY3RFbGVtZW50KGxpc3RPZkl0ZW1zWzBdLCBzZWxlY3RlZENsYXNzKTtcbiAgICB9XG4gIH1cblxuXG4gIHN0YXRpYyBjaGVja0lucHV0QW5zd2VyKHJpZ2h0QW5zd2VyLCBldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBsZXQgaXNDb3JyZWN0ID0gZmFsc2U7XG5cbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWJicmV2aWF0aW9uc19faXRlbScpKSB7XG4gICAgICBjb25zdCBhbnN3ZXIgPSB0YXJnZXQuaW5uZXJIVE1MO1xuICAgICAgaWYgKGFuc3dlciA9PT0gcmlnaHRBbnN3ZXIpIHtcbiAgICAgICAgaXNDb3JyZWN0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIEFiYnJldmlhdGlvbnMucmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgUHJvZ3JhbW1pbmcuc2VuZEFuc3dlclJlc3VsdEJhY2soaXNDb3JyZWN0KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJicmV2aWF0aW9ucztcbiIsImV4cG9ydCBkZWZhdWx0IGBcbjxzZWN0aW9uIGNsYXNzPVwidGFza19fbW9kYWwgcHJvZ3JhbW1pbmdfX2FiYnJldmlhdGlvbnNcIj5cbiAgICA8aDIgY2xhc3M9XCJwcm9ncmFtbWluZ19fZXhwbGFuYXRpb25cIj48L2gyPlxuICAgIDxkaXYgY2xhc3M9XCJhYmJyZXZpYXRpb25zX19jb250YWluZXJcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYWJicmV2aWF0aW9uc19fd29yZFwiPjwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhYmJyZXZpYXRpb25zX19hbnN3ZXJzXCI+PC9kaXY+XG4gICAgPC9kaXY+XG48L3NlY3Rpb24+XG5gO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2Fwcy5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2Fwcy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2dhcHMuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZ2Fwcy50ZW1wbGF0ZSc7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMnO1xuaW1wb3J0IFByb2dyYW1taW5nIGZyb20gJy4uL3Byb2dyYW1taW5nJztcbmltcG9ydCAnLi9nYXBzLmNzcyc7XG5cbmNsYXNzIEdhcHMge1xuICBzdGF0aWMgY3JlYXRlVGFzayh0YXNrKSB7XG4gICAgY29uc3QgcmFuZG9tVGFzayA9IFV0aWxzLmNob29zZVJhbmRvbUVsZW0odGFzay50YXNrcyk7XG4gICAgR2Fwcy5kcmF3KHRhc2suZXhwbGFuYXRpb24sIHJhbmRvbVRhc2spO1xuXG4gICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYXBzX19pbnB1dCcpO1xuICAgIGlucHV0RmllbGQuZm9jdXMoKTtcblxuICAgIGNvbnN0IGNoZWNrQW5zd2VyID0gR2Fwcy5jaGVja0lucHV0QW5zd2VyLmJpbmQobnVsbCwgcmFuZG9tVGFzay5hbnN3ZXIpO1xuICAgIEdhcHMuc2V0RXZlbnRMaXN0ZW5lcihjaGVja0Fuc3dlcik7XG4gIH1cblxuICBzdGF0aWMgZHJhdyhleHBsYW5hdGlvbiwgdGFzaykge1xuICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fY29udGFpbmVyJyk7XG4gICAgZ2FtZUNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRlbXBsYXRlKTtcblxuICAgIGNvbnN0IHRhc2tFeHBsYW5hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmFtbWluZ19fZXhwbGFuYXRpb24nKTtcbiAgICB0YXNrRXhwbGFuYXRpb24uaW5uZXJIVE1MID0gZXhwbGFuYXRpb247XG5cbiAgICBjb25zdCBmaXJzdFBhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2Fwc19fZmlyc3QtcGFydCcpO1xuICAgIGZpcnN0UGFydC5pbm5lckhUTUwgPSB0YXNrLnZhcmlhYmxlc1swXTtcblxuICAgIGNvbnN0IHNlY29uZFBhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2Fwc19fc2Vjb25kLXBhcnQnKTtcbiAgICBzZWNvbmRQYXJ0LmlubmVySFRNTCA9IHRhc2sudmFyaWFibGVzWzFdO1xuXG4gICAgY29uc3Qgb3V0cHV0UGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXBzX19vdXRwdXQnKTtcbiAgICBvdXRwdXRQYXJ0LmlubmVySFRNTCA9IHRhc2sudmFyaWFibGVzWzJdO1xuICB9XG5cbiAgc3RhdGljIHNldEV2ZW50TGlzdGVuZXIoZnVuYykge1xuICAgIGNvbnN0IGFuc3dlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrX2Fuc3dlcicpO1xuICAgIGFuc3dlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgR2Fwcy5zdWJtaXRJbnB1dEFuc3dlcik7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBHYXBzLnN1Ym1pdElucHV0QW5zd2VyKTtcbiAgfVxuXG4gIHN0YXRpYyBzdWJtaXRJbnB1dEFuc3dlcihldmVudCkge1xuICAgIGNvbnN0IEVOVEVSX0tFWSA9IDEzO1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFTlRFUl9LRVkpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrX2Fuc3dlcicpLmNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNoZWNrSW5wdXRBbnN3ZXIocmlnaHRBbnN3ZXIpIHtcbiAgICBjb25zdCBpbnB1dEFuc3dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXBzX19pbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IGFuc3dlciA9IGlucHV0QW5zd2VyLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICAgIGxldCBpc0NvcnJlY3QgPSBmYWxzZTtcblxuICAgIGlmIChyaWdodEFuc3dlciA9PT0gYW5zd2VyKSB7XG4gICAgICBpc0NvcnJlY3QgPSB0cnVlO1xuICAgIH1cbiAgICBHYXBzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgUHJvZ3JhbW1pbmcuc2VuZEFuc3dlclJlc3VsdEJhY2soaXNDb3JyZWN0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYXBzO1xuIiwiZXhwb3J0IGRlZmF1bHQgYFxuPHNlY3Rpb24gY2xhc3M9XCJ0YXNrX19tb2RhbCBwcm9ncmFtbWluZ19fZ2Fwc1wiPlxuICAgIDxoMiBjbGFzcz1cInByb2dyYW1taW5nX19leHBsYW5hdGlvblwiPjwvaDI+XG4gICAgPGRpdiBjbGFzcz1cImdhcHNfX2NvbnRhaW5lclwiPlxuICAgICAgPGNvZGUgY2xhc3M9XCJnYXBzX192YWx1ZSBnYXBzX19maXJzdC1wYXJ0XCI+PC9jb2RlPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJnYXBzX19pbnB1dFwiIGlkPVwiZ2Fwc19faW5wdXRcIiBhdXRvZm9jdXM+XG4gICAgICA8Y29kZSBjbGFzcz1cImdhcHNfX3ZhbHVlIGdhcHNfX3NlY29uZC1wYXJ0XCI+PC9jb2RlPlxuICAgICAgPGNvZGUgY2xhc3M9XCJnYXBzX192YWx1ZSBnYXBzX19vdXRwdXRcIj48L2NvZGU+XG4gICAgPC9kaXY+XG4gIFx0PGJ1dHRvbiBpZD1cInRhc2tfYW5zd2VyXCIgY2xhc3M9XCJhbnN3ZXJfX2J0blwiPkFuc3dlcjwvYnV0dG9uPlxuPC9zZWN0aW9uPlxuYDtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL291dHB1dC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vb3V0cHV0LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vb3V0cHV0LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL291dHB1dC50ZW1wbGF0ZSc7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMnO1xuaW1wb3J0IFByb2dyYW1taW5nIGZyb20gJy4uL3Byb2dyYW1taW5nJztcbmltcG9ydCAnLi9vdXRwdXQuY3NzJztcblxuY2xhc3MgT3V0cHV0IHtcbiAgc3RhdGljIGNyZWF0ZVRhc2sodGFzaykge1xuICAgIGNvbnN0IHJhbmRvbVRhc2sgPSBVdGlscy5jaG9vc2VSYW5kb21FbGVtKHRhc2sudGFza3MpO1xuICAgIE91dHB1dC5kcmF3KHRhc2suZXhwbGFuYXRpb24sIHJhbmRvbVRhc2spO1xuXG4gICAgY29uc3QgY2hlY2tBbnN3ZXIgPSBPdXRwdXQuY2hlY2tJbnB1dEFuc3dlci5iaW5kKG51bGwsIHJhbmRvbVRhc2suYW5zd2VyKTtcbiAgICBPdXRwdXQuc2V0RXZlbnRMaXN0ZW5lcihjaGVja0Fuc3dlcik7XG4gIH1cblxuICBzdGF0aWMgZHJhdyhleHBsYW5hdGlvbiwgdGFzaykge1xuICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fY29udGFpbmVyJyk7XG4gICAgZ2FtZUNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRlbXBsYXRlKTtcblxuICAgIGNvbnN0IHRhc2tFeHBsYW5hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmFtbWluZ19fZXhwbGFuYXRpb24nKTtcbiAgICB0YXNrRXhwbGFuYXRpb24uaW5uZXJIVE1MID0gZXhwbGFuYXRpb247XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICBjb25zdCB0YXNrUXVlc3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3V0cHV0X19xdWVzdGlvbicpO1xuICAgIHRhc2tRdWVzdGlvbi5pbm5lckhUTUwgPSB0YXNrLnZhcmlhYmxlc1swXTtcblxuICAgIHRhc2sudmFyaWFibGVzWzFdLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGFuc3dlckl0ZW0gPSBPdXRwdXQuY3JlYXRlQW5zd2VySXRlbShpdGVtKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhbnN3ZXJJdGVtKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFuc3dlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdXRwdXRfX2Fuc3dlcnMnKTtcbiAgICBhbnN3ZXJDb250YWluZXIucHJlcGVuZChjb250YWluZXIpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUFuc3dlckl0ZW0oaXRlbSkge1xuICAgIGNvbnN0IGFuc3dlckl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGFuc3dlckl0ZW0uY2xhc3NMaXN0LmFkZCgnY2hlY2tib3hfX2NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYW5zd2VyVmFyaWFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhbnN3ZXJWYXJpYW50LmNsYXNzTGlzdC5hZGQoJ2Fuc3dlcl9fdmFyaWFudCcpO1xuICAgIGFuc3dlclZhcmlhbnQuaW5uZXJIVE1MID0gaXRlbTtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcblxuICAgIGNvbnN0IGNoZWNrbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgnY2hlY2ttYXJrJyk7XG5cbiAgICBhbnN3ZXJJdGVtLmFwcGVuZENoaWxkKGFuc3dlclZhcmlhbnQpO1xuICAgIGFuc3dlckl0ZW0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGFuc3dlckl0ZW0uYXBwZW5kQ2hpbGQoY2hlY2ttYXJrKTtcblxuICAgIHJldHVybiBhbnN3ZXJJdGVtO1xuICB9XG5cbiAgc3RhdGljIHNldEV2ZW50TGlzdGVuZXIoZnVuYykge1xuICAgIGNvbnN0IGFuc3dlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrX2Fuc3dlcicpO1xuICAgIGFuc3dlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmMpO1xuXG4gICAgY29uc3QgYW5zd2VyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm91dHB1dF9fYW5zd2VycycpO1xuICAgIGFuc3dlckNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBPdXRwdXQuc2VsZWN0T25seU9uZUVsZW1lbnQpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgT3V0cHV0LmNvbnRyb2xPdXRwdXRCeUtleXMpO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBPdXRwdXQuY29udHJvbE91dHB1dEJ5S2V5cyk7XG4gIH1cblxuICBzdGF0aWMgY29udHJvbE91dHB1dEJ5S2V5cyhldmVudCkge1xuICAgIGNvbnN0IEVOVEVSX0tFWSA9IDEzO1xuICAgIGNvbnN0IExFRlRfS0VZID0gMzc7XG4gICAgY29uc3QgUklHSFRfS0VZID0gMzk7XG4gICAgY29uc3Qgc2VsZWN0ZWRDbGFzcyA9ICdzZWxlY3RlZCc7XG5cbiAgICBjb25zdCBsaXN0T2ZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveF9fY29udGFpbmVyJyk7XG4gICAgY29uc3QgaXRlbXNBcnIgPSBBcnJheS5mcm9tKGxpc3RPZkl0ZW1zKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19hbnN3ZXInKTtcbiAgICBpdGVtc0Fyci5wdXNoKGJ1dHRvbik7XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gVXRpbHMuZGVmaW5lU2VsZWN0ZWRFbGVtZW50KGl0ZW1zQXJyLCBzZWxlY3RlZENsYXNzKTtcbiAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRU5URVJfS0VZKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveF9fY29udGFpbmVyJykpIHtcbiAgICAgICAgICBjb25zdCBjaGVja0JveCA9IHNlbGVjdGVkSXRlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICAgIE91dHB1dC50b2dnbGVDaGVja0JveChjaGVja0JveCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gTEVGVF9LRVkpIHtcbiAgICAgICAgVXRpbHMuc2VsZWN0UHJldkVsZW1lbnQoaXRlbXNBcnIsIHNlbGVjdGVkQ2xhc3MpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBSSUdIVF9LRVkpIHtcbiAgICAgICAgVXRpbHMuc2VsZWN0TmV4dEVsZW1lbnQoaXRlbXNBcnIsIHNlbGVjdGVkQ2xhc3MpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBVdGlscy5zZWxlY3RFbGVtZW50KGl0ZW1zQXJyWzBdLCBzZWxlY3RlZENsYXNzKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdG9nZ2xlQ2hlY2tCb3goZWxlbSkge1xuICAgIGlmIChlbGVtLmNoZWNrZWQpIHtcbiAgICAgIGVsZW0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLmNoZWNrZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBzZWxlY3RPbmx5T25lRWxlbWVudChldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCBhbnN3ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3V0cHV0X19hbnN3ZXJzJyk7XG5cbiAgICBBcnJheS5mcm9tKGFuc3dlckNvbnRhaW5lci5jaGlsZHJlbikuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICBpbnB1dC5jaGVja2VkID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICB0YXJnZXQuY2hlY2tlZCA9IHRydWU7XG4gIH1cblxuICBzdGF0aWMgY2hlY2tJbnB1dEFuc3dlcihyaWdodEFuc3dlcikge1xuICAgIGNvbnN0IGlucHV0QW5zd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm91dHB1dF9fYW5zd2VycycpO1xuICAgIGNvbnN0IGlzQ29ycmVjdCA9IEFycmF5LmZyb20oaW5wdXRBbnN3ZXIuY2hpbGRyZW4pLnNvbWUoKGVsZW0pID0+IHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZWxlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgbGV0IGFuc3dlcjtcbiAgICAgIGlmIChpbnB1dC5jaGVja2VkKSB7XG4gICAgICAgIGFuc3dlciA9IGVsZW0ucXVlcnlTZWxlY3RvcignLmFuc3dlcl9fdmFyaWFudCcpLmlubmVySFRNTDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhbnN3ZXIgPT09IHJpZ2h0QW5zd2VyO1xuICAgIH0pO1xuICAgIE91dHB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCk7XG4gICAgUHJvZ3JhbW1pbmcuc2VuZEFuc3dlclJlc3VsdEJhY2soaXNDb3JyZWN0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPdXRwdXQ7XG4iLCJleHBvcnQgZGVmYXVsdCBgXG48c2VjdGlvbiBjbGFzcz1cInRhc2tfX21vZGFsIHByb2dyYW1taW5nX19vdXRwdXRcIj5cbiAgICA8aDIgY2xhc3M9XCJwcm9ncmFtbWluZ19fZXhwbGFuYXRpb25cIj48L2gyPlxuICAgIDxkaXYgY2xhc3M9XCJvdXRwdXRfX2NvbnRhaW5lclwiPlxuICAgICAgPGNvZGUgY2xhc3M9XCJvdXRwdXRfX3F1ZXN0aW9uXCI+PC9jb2RlPlxuICAgICAgPGRpdiBjbGFzcz1cIm91dHB1dF9fYW5zd2Vyc1wiPlxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIGlkPSd0YXNrX2Fuc3dlcicgY2xhc3M9XCJhbnN3ZXJfX2J0blwiPkFuc3dlcjwvYnV0dG9uPlxuPC9zZWN0aW9uPlxuYDtcbiIsImltcG9ydCBBYmJyZXZpYXRpb25zIGZyb20gJy4vYWJicmV2aWF0aW9ucy9hYmJyZXZpYXRpb25zJztcbmltcG9ydCBHYXBzIGZyb20gJy4vZ2Fwcy9nYXBzJztcbmltcG9ydCBPdXRwdXQgZnJvbSAnLi9vdXRwdXQvb3V0cHV0JztcbmltcG9ydCBTdGF0ZW1lbnRzIGZyb20gJy4vc3RhdGVtZW50cy9zdGF0ZW1lbnRzJztcbmltcG9ydCBnYW1lVGFza3MgZnJvbSAnLi4vLi4vLi4vY29uZmlncy9nYW1lVGFza3MnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi4vdGFzayc7XG5cbmNsYXNzIFByb2dyYW1taW5nIHtcbiAgc3RhdGljIGRlZmluZVRhc2sodGFza05hbWUpIHtcbiAgICBQcm9ncmFtbWluZy5kZWZpbmVDaG9vc2VuVGFzayh0YXNrTmFtZSk7XG4gIH1cblxuICBzdGF0aWMgZGVmaW5lQ2hvb3NlblRhc2sodGFza05hbWUpIHtcbiAgICBjb25zdCB0YXNrID0gUHJvZ3JhbW1pbmcuZGVmaW5lVGFza0J5TmFtZSh0YXNrTmFtZSk7XG4gICAgc3dpdGNoICh0YXNrTmFtZSkge1xuICAgICAgY2FzZSAnYWJicmV2aWF0aW9ucyc6XG4gICAgICAgIEFiYnJldmlhdGlvbnMuY3JlYXRlVGFzayh0YXNrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0cnVlL2ZhbHNlJzpcbiAgICAgICAgU3RhdGVtZW50cy5jcmVhdGVUYXNrKHRhc2spO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2ZpbGwgdGhlIGdhcCc6XG4gICAgICAgIEdhcHMuY3JlYXRlVGFzayh0YXNrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjb2RlIG91dHB1dCc6XG4gICAgICAgIE91dHB1dC5jcmVhdGVUYXNrKHRhc2spO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIEFiYnJldmlhdGlvbnMuY3JlYXRlVGFzayh0YXNrKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZGVmaW5lVGFza0J5TmFtZSh0YXNrTmFtZSkge1xuICAgIGNvbnN0IHRhc2sgPSBnYW1lVGFza3MucHJvZ3JhbW1pbmcuZmluZChpdGVtID0+IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpID09PSB0YXNrTmFtZSk7XG4gICAgcmV0dXJuIHRhc2s7XG4gIH1cblxuICBzdGF0aWMgc2VuZEFuc3dlclJlc3VsdEJhY2soaXNDb3JyZWN0KSB7XG4gICAgVGFzay5yZWNlaXZlVXNlckFuc3dlclJlc3VsdChpc0NvcnJlY3QpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyYW1taW5nO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3RhdGVtZW50cy5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3RhdGVtZW50cy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0YXRlbWVudHMuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vc3RhdGVtZW50cy50ZW1wbGF0ZSc7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMnO1xuaW1wb3J0IFByb2dyYW1taW5nIGZyb20gJy4uL3Byb2dyYW1taW5nJztcbmltcG9ydCAnLi9zdGF0ZW1lbnRzLmNzcyc7XG5cbmNsYXNzIFN0YXRlbWVudHMge1xuICBzdGF0aWMgY3JlYXRlVGFzayh0YXNrKSB7XG4gICAgY29uc3QgcmFuZG9tVGFzayA9IFV0aWxzLmNob29zZVJhbmRvbUVsZW0odGFzay50YXNrcyk7XG4gICAgU3RhdGVtZW50cy5kcmF3KHRhc2suZXhwbGFuYXRpb24sIHJhbmRvbVRhc2spO1xuXG4gICAgY29uc3QgY2hlY2tBbnN3ZXIgPSBTdGF0ZW1lbnRzLmNoZWNrSW5wdXRBbnN3ZXIuYmluZChudWxsLCByYW5kb21UYXNrLmFuc3dlcik7XG4gICAgU3RhdGVtZW50cy5zZXRFdmVudExpc3RlbmVyKGNoZWNrQW5zd2VyKTtcbiAgfVxuXG4gIHN0YXRpYyBkcmF3KGV4cGxhbmF0aW9uLCB0YXNrKSB7XG4gICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19jb250YWluZXInKTtcbiAgICBnYW1lQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGUpO1xuXG4gICAgY29uc3QgdGFza0V4cGxhbmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2dyYW1taW5nX19leHBsYW5hdGlvbicpO1xuICAgIHRhc2tFeHBsYW5hdGlvbi5pbm5lckhUTUwgPSBleHBsYW5hdGlvbjtcblxuICAgIGNvbnN0IHN0YXRlbWVudHNTZW50ZW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0ZW1lbnRzX19zZW50ZW5jZScpO1xuICAgIHN0YXRlbWVudHNTZW50ZW5jZS5pbm5lckhUTUwgPSB0YXNrLnZhcmlhYmxlcztcbiAgfVxuXG4gIHN0YXRpYyBzZXRFdmVudExpc3RlbmVyKGZ1bmMpIHtcbiAgICBjb25zdCBhbnN3ZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19hbnN3ZXInKTtcbiAgICBhbnN3ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIFN0YXRlbWVudHMuY29udHJvbFN0YXRlbWVudHNCeUtleXMpO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBTdGF0ZW1lbnRzLmNvbnRyb2xTdGF0ZW1lbnRzQnlLZXlzKTtcbiAgfVxuXG4gIHN0YXRpYyBjb250cm9sU3RhdGVtZW50c0J5S2V5cyhldmVudCkge1xuICAgIGNvbnN0IEVOVEVSX0tFWSA9IDEzO1xuICAgIGNvbnN0IExFRlRfVVAgPSAzODtcbiAgICBjb25zdCBSSUdIVF9ET1dOID0gNDA7XG4gICAgY29uc3Qgc2VsZWN0ZWRDbGFzcyA9ICdzZWxlY3RlZCc7XG5cbiAgICBjb25zdCBsaXN0T2ZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGF0ZW1lbnRzX19pdGVtJyk7XG4gICAgY29uc3QgaXRlbXNBcnIgPSBBcnJheS5mcm9tKGxpc3RPZkl0ZW1zKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19hbnN3ZXInKTtcbiAgICBpdGVtc0Fyci5wdXNoKGJ1dHRvbik7XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gVXRpbHMuZGVmaW5lU2VsZWN0ZWRFbGVtZW50KGl0ZW1zQXJyLCBzZWxlY3RlZENsYXNzKTtcbiAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRU5URVJfS0VZKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGF0ZW1lbnRzX19pdGVtJykpIHtcbiAgICAgICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdGVkSXRlbS5odG1sRm9yKTtcbiAgICAgICAgICBjaGVja0JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RlZEl0ZW0uY2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBMRUZUX1VQKSB7XG4gICAgICAgIFV0aWxzLnNlbGVjdFByZXZFbGVtZW50KGl0ZW1zQXJyLCBzZWxlY3RlZENsYXNzKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gUklHSFRfRE9XTikge1xuICAgICAgICBVdGlscy5zZWxlY3ROZXh0RWxlbWVudChpdGVtc0Fyciwgc2VsZWN0ZWRDbGFzcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIFV0aWxzLnNlbGVjdEVsZW1lbnQoaXRlbXNBcnJbMF0sIHNlbGVjdGVkQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjaGVja0lucHV0QW5zd2VyKHJpZ2h0QW5zd2VyKSB7XG4gICAgY29uc3QgaW5wdXRBbnN3ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZ3JhbW1pbmdfX3N0YXRlbWVudHNfdHJ1ZScpLmNoZWNrZWQ7XG4gICAgbGV0IGlzQ29ycmVjdCA9IGZhbHNlO1xuXG4gICAgaWYgKGlucHV0QW5zd2VyID09PSByaWdodEFuc3dlcikge1xuICAgICAgaXNDb3JyZWN0ID0gdHJ1ZTtcbiAgICB9XG4gICAgU3RhdGVtZW50cy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XG4gICAgUHJvZ3JhbW1pbmcuc2VuZEFuc3dlclJlc3VsdEJhY2soaXNDb3JyZWN0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZW1lbnRzO1xuIiwiZXhwb3J0IGRlZmF1bHQgYFxuPHNlY3Rpb24gY2xhc3M9XCJ0YXNrX19tb2RhbCBwcm9ncmFtbWluZ19fc3RhdGVtZW50c1wiPlxuXHQ8aDIgY2xhc3M9XCJwcm9ncmFtbWluZ19fZXhwbGFuYXRpb25cIj48L2gyPlxuXHQ8ZGl2IGNsYXNzPVwic3RhdGVtZW50c19fY29udGFpbmVyXCI+XG5cdFx0PHNwYW4gY2xhc3M9XCJzdGF0ZW1lbnRzX19zZW50ZW5jZVwiPjwvc3Bhbj5cblx0XHQ8ZGl2IGNsYXNzPVwic3RhdGVtZW50c19fYW5zd2Vyc1wiPlxuXHRcdFx0PHA+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInByb2dyYW1taW5nX19zdGF0ZW1lbnRzX3RydWVcIiBuYW1lPVwic3RhdGVtZW50cy1ncm91cFwiPlxuXHRcdFx0XHQ8bGFiZWwgZm9yPVwicHJvZ3JhbW1pbmdfX3N0YXRlbWVudHNfdHJ1ZVwiIGNsYXNzPVwic3RhdGVtZW50c19faXRlbVwiPlRydWU8L2xhYmVsPlxuXHRcdFx0PC9wPlxuXHRcdFx0PHA+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInByb2dyYW1taW5nX19zdGF0ZW1lbnRzX2ZhbHNlXCIgbmFtZT1cInN0YXRlbWVudHMtZ3JvdXBcIj5cblx0XHRcdFx0PGxhYmVsIGZvcj1cInByb2dyYW1taW5nX19zdGF0ZW1lbnRzX2ZhbHNlXCIgY2xhc3M9XCJzdGF0ZW1lbnRzX19pdGVtXCI+RmFsc2U8L2xhYmVsPlxuXHRcdFx0PC9wPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblx0PGJ1dHRvbiBpZD0ndGFza19hbnN3ZXInIGNsYXNzPVwiYW5zd2VyX19idG5cIj5BbnN3ZXI8L2J1dHRvbj5cbjwvc2VjdGlvbj5cbmA7XG4iLCJpbXBvcnQgTWF0aHMgZnJvbSAnLi9tYXRocy9tYXRocyc7XG5pbXBvcnQgRW5nbGlzaCBmcm9tICcuL2VuZ2xpc2gvZW5nbGlzaCc7XG5pbXBvcnQgR2VvZ3JhcGh5IGZyb20gJy4vZ2VvZ3JhcGh5L2dlb2dyYXBoeSc7XG5pbXBvcnQgUHJvZ3JhbW1pbmcgZnJvbSAnLi9wcm9ncmFtbWluZy9wcm9ncmFtbWluZyc7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IEZpZ2h0IGZyb20gJy4uLy4uL2ZpZ2h0JztcblxuY2xhc3MgVGFzayB7XG4gIHN0YXRpYyBkZWZpbmVDaG9vc2VuVGFzayh0YXNrVHlwZSwgdGFza05hbWUpIHtcbiAgICBzd2l0Y2ggKHRhc2tUeXBlKSB7XG4gICAgICBjYXNlICdtYXRocyc6XG4gICAgICAgIFRhc2suaW5pdFRhc2soTWF0aHMsIHRhc2tOYW1lKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlbmdsaXNoJzpcbiAgICAgICAgVGFzay5pbml0VGFzayhFbmdsaXNoLCB0YXNrTmFtZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZ2VvZ3JhcGh5JzpcbiAgICAgICAgVGFzay5pbml0VGFzayhHZW9ncmFwaHksIHRhc2tOYW1lKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwcm9ncmFtbWluZyc6XG4gICAgICAgIFRhc2suaW5pdFRhc2soUHJvZ3JhbW1pbmcsIHRhc2tOYW1lKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBUYXNrLmluaXRUYXNrKE1hdGhzLCB0YXNrTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGluaXRUYXNrKHRhc2ssIHRhc2tOYW1lKSB7XG4gICAgVXRpbHMucGF1c2UoMTAwMClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGFzay5kZWZpbmVUYXNrKHRhc2tOYW1lKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZSgpIHtcbiAgICBjb25zdCBtb2RhbFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza19fbW9kYWwnKTtcbiAgICBtb2RhbFRhc2sucmVtb3ZlKCk7XG4gIH1cblxuICBzdGF0aWMgcmVjZWl2ZVVzZXJBbnN3ZXJSZXN1bHQoaXNDb3JyZWN0KSB7XG4gICAgVGFzay5yZW1vdmUoKTtcbiAgICBGaWdodC5pbnN0YW5jZS5wcm9jZXNzQW5zd2VyUmVzdWx0KGlzQ29ycmVjdCwgVGFzay5hdHRhY2tUeXBlLCBUYXNrLnRhc2tEYW1hZ2UpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGdhbWVCYWNrZ3JvdW5kOiB7XG4gICAgcGF0aDogWycuLy4uL3NyYy9pbWcvYmFja2dyb3VuZHMvYmFja2dyb3VuZC0xLnBuZycsXG4gICAgICAnLi8uLi9zcmMvaW1nL2JhY2tncm91bmRzL2JhY2tncm91bmQtMi5wbmcnLFxuICAgICAgJy4vLi4vc3JjL2ltZy9iYWNrZ3JvdW5kcy9iYWNrZ3JvdW5kLTMucG5nJyxcbiAgICAgICcuLy4uL3NyYy9pbWcvYmFja2dyb3VuZHMvYmFja2dyb3VuZC00LnBuZyddLFxuICB9LFxuICBjYW52YXNTaXplOiB7XG4gICAgd2lkdGg6IDEyMDAsXG4gICAgaGVpZ2h0OiA2MDAsXG4gIH0sXG4gIG11c2ljOiB7XG4gICAgcGF0aDogJy4vLi4vc3JjL2F1ZGlvL211c2ljLm9nZycsXG4gIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBtYXRoczogW1xuICAgIHtcbiAgICAgIHR5cGU6ICdNYXRocycsXG4gICAgICBuYW1lOiAnQ29tcGFyaXNvbicsXG4gICAgICBleHBsYW5hdGlvbjogJ0Nob29zZSB0aGUgY29ycmVjdCBsb2dpY2FsIG9wZXJhdG9yLicsXG4gICAgICBjb21wbGV4aXR5OiAxLFxuICAgICAgZGFtYWdlOiAxMCxcbiAgICAgIHRhc2tzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB2YXJpYWJsZXM6IFsxMiwgMjBdLFxuICAgICAgICAgIGFuc3dlcjogJzwnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdmFyaWFibGVzOiBbOTksIDg5XSxcbiAgICAgICAgICBhbnN3ZXI6ICc+JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHZhcmlhYmxlczogWzY5LCA5Nl0sXG4gICAgICAgICAgYW5zd2VyOiAnPCcsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ01hdGhzJyxcbiAgICAgIG5hbWU6ICdFcXVhdGlvbicsXG4gICAgICBleHBsYW5hdGlvbjogJ1NvbHZlIHRoaXMgbWF0aCBleGFtcGxlLicsXG4gICAgICBjb21wbGV4aXR5OiAyLFxuICAgICAgZGFtYWdlOiAyMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdNYXRocycsXG4gICAgICBuYW1lOiAnU2VxdWVuY2UnLFxuICAgICAgZXhwbGFuYXRpb246ICdDb250aW51ZSB0aGUgc2VxdWVuY2UuJyxcbiAgICAgIGNvbXBsZXhpdHk6IDMsXG4gICAgICBkYW1hZ2U6IDMwLFxuICAgICAgdGFza3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHZhcmlhYmxlczogWzEwLCAxMiwgMTRdLFxuICAgICAgICAgIGFuc3dlcjogMTYsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YXJpYWJsZXM6IFsxMSwgMjIsIDMzXSxcbiAgICAgICAgICBhbnN3ZXI6IDQ0LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdmFyaWFibGVzOiBbOCwgMTUsIDIyXSxcbiAgICAgICAgICBhbnN3ZXI6IDI5LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdNYXRocycsXG4gICAgICBuYW1lOiAnQ29uc3RydWN0b3InLFxuICAgICAgZXhwbGFuYXRpb246ICdQdXQgdGhlIHBhcnRzIG9mIHRoZSBleHByZXNzaW9uIGluIHRoZSBjb3JyZWN0IG9yZGVyLicsXG4gICAgICBjb21wbGV4aXR5OiA0LFxuICAgICAgZGFtYWdlOiA0MCxcbiAgICAgIHRhc2tzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB2YXJpYWJsZXM6IFsnKycsICcxMicsICc9JywgJzE0JywgJzInXSxcbiAgICAgICAgICBhbnN3ZXI6IFtbJzEyJywgJysnLCAnMicsICc9JywgJzE0J10sIFsnMicsICcrJywgJzEyJywgJz0nLCAnMTQnXV0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YXJpYWJsZXM6IFsnPScsICcyNScsICc2NCcsICctJywgJzM5J10sXG4gICAgICAgICAgYW5zd2VyOiBbWyc2NCcsICctJywgJzI1JywgJz0nLCAnMzknXSwgWyc2NCcsICctJywgJzM5JywgJz0nLCAnMjUnXV0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YXJpYWJsZXM6IFsnMTInLCAnPScsICc1JywgJyonLCAnNjAnXSxcbiAgICAgICAgICBhbnN3ZXI6IFtbJzEyJywgJyonLCAnNScsICc9JywgJzYwJ10sIFsnNScsICcqJywgJzEyJywgJz0nLCAnNjAnXV0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG5cbiAgZW5nbGlzaDogW1xuICAgIHtcbiAgICAgIHR5cGU6ICdFbmdsaXNoJyxcbiAgICAgIG5hbWU6ICdUcmFuc2xhdGlvbicsXG4gICAgICBleHBsYW5hdGlvbjogJ1RyYW5zbGF0ZSB0aGUgd29yZCBpbnRvIEVuZ2xpc2guJyxcbiAgICAgIGNvbXBsZXhpdHk6IDEsXG4gICAgICBkYW1hZ2U6IDEwLFxuICAgICAgdGFza3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHZhcmlhYmxlczogJ9GB0LvQvtCy0L4nLFxuICAgICAgICAgIGFuc3dlcjogWyd3b3JkJywgJ2Egd29yZCcsICdzYXknLCAnYSBzYXknXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHZhcmlhYmxlczogJ9C70L7QstGD0YjQutCwJyxcbiAgICAgICAgICBhbnN3ZXI6IFsndHJhcCcsICdhIHRyYXAnLCAnc25hcmUnLCAnYSBzbmFyZScsICdob29rJywgJ2EgaG9vayddLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdmFyaWFibGVzOiAn0Y3RgdC60LjQtycsXG4gICAgICAgICAgYW5zd2VyOiBbJ3NrZXRjaCcsICdhIHNrZXRjaCcsICdkZXNpZ24nLCAnYSBkZXNpZ24nLCAnb3V0bGluZScsICdhbiBvdXRsaW5lJ10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ0VuZ2xpc2gnLFxuICAgICAgbmFtZTogJ0ZpbmQgbWlzdGFrZScsXG4gICAgICBleHBsYW5hdGlvbjogJ0ZpbmQgb25lIG1pc3Rha2UgaW4gdGhlIGZvbGxvd2luZyB3b3JkLicsXG4gICAgICBjb21wbGV4aXR5OiAyLFxuICAgICAgZGFtYWdlOiAyMCxcbiAgICAgIHRhc2tzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB2YXJpYWJsZXM6IFsnZCcsICdpJywgJ3InLCAncicsICdlJywgJ2MnLCAndCcsICdpJywgJ28nLCAnbiddLFxuICAgICAgICAgIGFuc3dlcjogJ3InLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdmFyaWFibGVzOiBbJ2EnLCAnbicsICdzJywgJ3YnLCAnZScsICdyJ10sXG4gICAgICAgICAgYW5zd2VyOiAndicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YXJpYWJsZXM6IFsncycsICdrJywgJ2gnLCAnbycsICdvJywgJ2wnXSxcbiAgICAgICAgICBhbnN3ZXI6ICdrJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnRW5nbGlzaCcsXG4gICAgICBuYW1lOiAnTGlzdGVuaW5nJyxcbiAgICAgIGV4cGxhbmF0aW9uOiAnV3JpdGUgdGhlIHdvcmQgeW91ICBoZWFyZCcsXG4gICAgICBjb21wbGV4aXR5OiAzLFxuICAgICAgZGFtYWdlOiAzMCxcbiAgICAgIHRhc2tzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB2YXJpYWJsZXM6ICcuLy4uL3NyYy9hdWRpby9lbmdsaXNoL2xldHRlci5tcDMnLFxuICAgICAgICAgIGFuc3dlcjogJ2xldHRlcicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YXJpYWJsZXM6ICcuLy4uL3NyYy9hdWRpby9lbmdsaXNoL3dvcmsubXAzJyxcbiAgICAgICAgICBhbnN3ZXI6ICd3b3JrJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHZhcmlhYmxlczogJy4vLi4vc3JjL2F1ZGlvL2VuZ2xpc2gvcHJvZ3JhbW1lci5tcDMnLFxuICAgICAgICAgIGFuc3dlcjogJ3Byb2dyYW1tZXInLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdFbmdsaXNoJyxcbiAgICAgIG5hbWU6ICdXb3JkcyBvcmRlcicsXG4gICAgICBleHBsYW5hdGlvbjogJ1B1dCB0aGUgd29yZHMgaW4gdGhlIGNvcnJlY3Qgb3JkZXIgdG8gbWFrZSBhIHNlbnRlbmNlLicsXG4gICAgICBjb21wbGV4aXR5OiA0LFxuICAgICAgZGFtYWdlOiA0MCxcbiAgICAgIHRhc2tzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB2YXJpYWJsZXM6IFsnY2FuJywgJ3NldmVyYWwnLCAnU2hlJywgJ2xhbmd1YWdlcycsICdzcGVhayddLFxuICAgICAgICAgIGFuc3dlcjogWydTaGUnLCAnY2FuJywgJ3NwZWFrJywgJ3NldmVyYWwnLCAnbGFuZ3VhZ2VzJ10sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YXJpYWJsZXM6IFsnY2hpbGRyZW4nLCAnd2VyZScsICdoYXBwaWx5JywgJ1RoZScsICdwbGF5aW5nJ10sXG4gICAgICAgICAgYW5zd2VyOiBbJ1RoZScsICdjaGlsZHJlbicsICd3ZXJlJywgJ3BsYXlpbmcnLCAnaGFwcGlseSddLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdmFyaWFibGVzOiBbJ2dpcmwnLCAnZHJlc3MnLCAnaW4nLCAnaXMnLCAnSGVsZW4nLCAndGhlJywgJ3RoZScsICdyZWQnXSxcbiAgICAgICAgICBhbnN3ZXI6IFsnSGVsZW4nLCAnaXMnLCAndGhlJywgJ2dpcmwnLCAnaW4nLCAndGhlJywgJ3JlZCcsICdkcmVzcyddLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuXG4gIGdlb2dyYXBoeTogW1xuICAgIHtcbiAgICAgIHR5cGU6ICdHZW9ncmFwaHknLFxuICAgICAgbmFtZTogJ0NhcGl0YWxzJyxcbiAgICAgIGV4cGxhbmF0aW9uOiAnVGhpcyBpcyB0aGUgY2FwaXRhbCBvZiB3aGljaCBjb3VudHJ5PycsXG4gICAgICBjb21wbGV4aXR5OiAxLFxuICAgICAgZGFtYWdlOiAxMCxcbiAgICAgIHRhc2tzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB2YXJpYWJsZXM6IFsnQmVybGluJywgWydHZXJtYW55JywgJ0NhbmFkYScsICdSdXNzaWEnLCAnQmVsYXJ1cyddXSxcbiAgICAgICAgICBhbnN3ZXI6ICdHZXJtYW55JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHZhcmlhYmxlczogWydIYW5vaScsIFsnQ2hpbGUnLCAnQ2FuYWRhJywgJ0phbWFpY2EnLCAnVmlldG5hbSddXSxcbiAgICAgICAgICBhbnN3ZXI6ICdWaWV0bmFtJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHZhcmlhYmxlczogWydIZWxzaW5raScsIFsnR2VybWFueScsICdGaW5sYW5kJywgJ1J1c3NpYScsICcgU3dpdHplcmxhbmQnXV0sXG4gICAgICAgICAgYW5zd2VyOiAnRmlubGFuZCcsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ0dlb2dyYXBoeScsXG4gICAgICBuYW1lOiAnU3RhdGVtZW50cycsXG4gICAgICBleHBsYW5hdGlvbjogJ0lzIHRoaXMgc3RhdGVtZW50IGNvcnJlY3Q/JyxcbiAgICAgIGNvbXBsZXhpdHk6IDIsXG4gICAgICBkYW1hZ2U6IDIwLFxuICAgICAgdGFza3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHZhcmlhYmxlczogJ1J1c3NpYSBzcGFucyAxMSB0aW1lIHpvbmVzLicsXG4gICAgICAgICAgYW5zd2VyOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdmFyaWFibGVzOiAnVmF0aWNhbiBDaXR5IGlzIHRoZSBsYXJnZXN0IGNvdW50cnkgaW4gdGhlIHdvcmxkLicsXG4gICAgICAgICAgYW5zd2VyOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHZhcmlhYmxlczogJ0NhbGlmb3JuaWEgaGFzIG1vcmUgcGVvcGxlIHRoYW4gYWxsIG9mIENhbmFkYS4nLFxuICAgICAgICAgIGFuc3dlcjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnR2VvZ3JhcGh5JyxcbiAgICAgIG5hbWU6ICdBdHRyYWN0aW9ucycsXG4gICAgICBleHBsYW5hdGlvbjogJ1doYXQgc2lnaHRzIGJlbG9uZyB0byB0aGUgZm9sbG93aW5nIGNvdW50cnk/JyxcbiAgICAgIGNvbXBsZXhpdHk6IDMsXG4gICAgICBkYW1hZ2U6IDMwLFxuICAgICAgdGFza3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHZhcmlhYmxlczogWydGcmFuY2UnLCBbJ1RoZSBFaWZmZWwgVG93ZXInLCAnVGhlIFJpamtzbXVzZXVtJywgJ1RoZSBNb3VsaW4gUm91Z2UnLCAnQ29sb2duZSBDYXRoZWRyYWwnXV0sXG4gICAgICAgICAgYW5zd2VyOiBbJ1RoZSBFaWZmZWwgVG93ZXInLCAnVGhlIE1vdWxpbiBSb3VnZSddLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdmFyaWFibGVzOiBbJ1RoZSBOZXRoZXJsYW5kcycsIFsnVGhlIFJpamtzbXVzZXVtJywgJ0NvbG9nbmUgQ2F0aGVkcmFsJywgJ1ZhbiBHb2doIE11c2V1bScsICdUaGUgTW91bGluIFJvdWdlJ11dLFxuICAgICAgICAgIGFuc3dlcjogWydUaGUgUmlqa3NtdXNldW0nLCAnVmFuIEdvZ2ggTXVzZXVtJ10sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YXJpYWJsZXM6IFsnR2VybWFueScsIFsnQ29sb2duZSBDYXRoZWRyYWwnLCAnVmFuIEdvZ2ggTXVzZXVtJywgJ1RoZSBCcmFuZGVuYnVyZyBHYXRlJywgJ1RoZSBNb3VsaW4gUm91Z2UnXV0sXG4gICAgICAgICAgYW5zd2VyOiBbJ0NvbG9nbmUgQ2F0aGVkcmFsJywgJ1RoZSBCcmFuZGVuYnVyZyBHYXRlJ10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ0dlb2dyYXBoeScsXG4gICAgICBuYW1lOiAnU29ydGluZycsXG4gICAgICBleHBsYW5hdGlvbjogJ0FycmFuZ2Ugb2JqZWN0cyBieSBzaXplJyxcbiAgICAgIGNvbXBsZXhpdHk6IDQsXG4gICAgICBkYW1hZ2U6IDQwLFxuICAgICAgdGFza3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHZhcmlhYmxlczogWydBZnJpY2EnLCAnQXVzdHJhbGlhJywgJ0FudGFyY3RpY2EnLCAnRXVyYXNpYSddLFxuICAgICAgICAgIGFuc3dlcjogWydFdXJhc2lhJywgJ0FmcmljYScsICdBbnRhcmN0aWNhJywgJ0F1c3RyYWxpYSddLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdmFyaWFibGVzOiBbJ0NhbmFkYScsICdVbml0ZWQgU3RhdGVzJywgJ1J1c3NpYScsICdDaGluYSddLFxuICAgICAgICAgIGFuc3dlcjogWydSdXNzaWEnLCAnQ2FuYWRhJywgJ1VuaXRlZCBTdGF0ZXMnLCAnQ2hpbmEnXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHZhcmlhYmxlczogWydUaGUgSW5kaWFuIE9jZWFuJywgJ1RoZSBQYWNpZmljIE9jZWFuJywgJ1RoZSBBcmN0aWMgT2NlYW4nLCAnVGhlIEF0bGFudGljIE9jZWFuJ10sXG4gICAgICAgICAgYW5zd2VyOiBbJyBUaGUgUGFjaWZpYyBPY2VhbicsICdUaGUgQXRsYW50aWMgT2NlYW4nLCAnVGhlIEluZGlhbiBPY2VhbicsICdUaGUgQXJjdGljIE9jZWFuJ10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG5cbiAgcHJvZ3JhbW1pbmc6IFtcbiAgICB7XG4gICAgICB0eXBlOiAnUHJvZ3JhbW1pbmcnLFxuICAgICAgbmFtZTogJ0FiYnJldmlhdGlvbnMnLFxuICAgICAgZXhwbGFuYXRpb246ICdDaG9vc2UgdGhlIGNvcnJlY3QgZGVmaW5pdGlvbicsXG4gICAgICBjb21wbGV4aXR5OiAxLFxuICAgICAgZGFtYWdlOiAxMCxcbiAgICAgIHRhc2tzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB2YXJpYWJsZXM6IFsnSFRNTCcsIFsnSHlwZXJUZXh0IE1hcmt1cCBMYW5ndWFnZScsICdIeXBlcmxvb3AgVHVubmVsIE11c2tcXCdzIExhdW5jaG0nLCAnSG92ZXIgVGVzdCBNZXRhZGF0YSBMYW5ndWFnZScsICdIeXBlcmxpbmsgVHlwZSBNdWx0aXBsZSBMYW5ndWFnZSddXSxcbiAgICAgICAgICBhbnN3ZXI6ICdIeXBlclRleHQgTWFya3VwIExhbmd1YWdlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHZhcmlhYmxlczogWydKUycsIFsnSnVuaW9yIFNjcmlwdCcsICdKdW5nbGUgU2NyaXB0JywgJ0plYWxvdXMgU3Bpcml0JywgJ0phdmEgU2NyaXB0J11dLFxuICAgICAgICAgIGFuc3dlcjogJ0phdmEgU2NyaXB0JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHZhcmlhYmxlczogWydDU1MnLCBbJ0NlbGVicmF0aW5nIFNlbmlvciBTdXJnZScsICdDb2RlIFNlbWFudGljIFN0eWxlJywgJ0Nhc2NhZGluZyBTdHlsZSBTaGVldHMnLCAnQ2xlYXIgU2VydmVyIFNpZ25hbCddXSxcbiAgICAgICAgICBhbnN3ZXI6ICdDYXNjYWRpbmcgU3R5bGUgU2hlZXRzJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnUHJvZ3JhbW1pbmcnLFxuICAgICAgbmFtZTogJ1RydWUvRmFsc2UnLFxuICAgICAgZXhwbGFuYXRpb246ICdJcyB0aGlzIHN0YXRlbWVudCBjb3JyZWN0PycsXG4gICAgICBjb21wbGV4aXR5OiAyLFxuICAgICAgZGFtYWdlOiAyMCxcbiAgICAgIHRhc2tzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB2YXJpYWJsZXM6ICdKUyB3YXMgaW52ZW50ZWQgYnkgQW5jaWVudCBSb21hbnMnLFxuICAgICAgICAgIGFuc3dlcjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YXJpYWJsZXM6ICdIVE1MIGlzIHRoZSBtb3N0IGZhbW91cyBKUyBmcmFtZXdvcmsuJyxcbiAgICAgICAgICBhbnN3ZXI6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdmFyaWFibGVzOiAnSlMgaXMganVzdCBhIHdlYiB2ZXJzaW9uIG9mIEphdmEgbGFuZ3VhZ2UuJyxcbiAgICAgICAgICBhbnN3ZXI6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdQcm9ncmFtbWluZycsXG4gICAgICBuYW1lOiAnRmlsbCB0aGUgZ2FwJyxcbiAgICAgIGV4cGxhbmF0aW9uOiAnSW5zZXJ0IHRoZSBtaXNzaW5nIGZ1bmN0aW9uLicsXG4gICAgICBjb21wbGV4aXR5OiAzLFxuICAgICAgZGFtYWdlOiAzMCxcbiAgICAgIHRhc2tzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB2YXJpYWJsZXM6IFsnW10uY29uY2F0KDEsMikuJywgJygzKTsnLCAnLy9vdXRwdXQgPSAzJ10sXG4gICAgICAgICAgYW5zd2VyOiAndW5zaGlmdCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YXJpYWJsZXM6IFsnXCJDYXRcIi4nLCAnKFwiQ1wiLCBcIlJcIik7JywgJy8vb3V0cHV0ID0gXCJSYXRcIiddLFxuICAgICAgICAgIGFuc3dlcjogJ3JlcGxhY2UnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdmFyaWFibGVzOiBbJ1sxLDIsM10uJywgJyhcIlwiKTsnLCAnLy9vdXRwdXQgPSBcIjEyM1wiJ10sXG4gICAgICAgICAgYW5zd2VyOiAnam9pbicsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ1Byb2dyYW1taW5nJyxcbiAgICAgIG5hbWU6ICdDb2RlIG91dHB1dCcsXG4gICAgICBleHBsYW5hdGlvbjogJ1doYXQgd2lsbCB0aGlzIGNvZGUgZGlzcGxheT8nLFxuICAgICAgY29tcGxleGl0eTogNCxcbiAgICAgIGRhbWFnZTogNDAsXG4gICAgICB0YXNrczogW1xuICAgICAgICB7XG4gICAgICAgICAgdmFyaWFibGVzOiBbJ2FsZXJ0KFwiMVwiWzBdKTsnLCBbJzAnLCAnMScsICcyJywgJ3VuZGVmaW5lZCddXSxcbiAgICAgICAgICBhbnN3ZXI6ICcxJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHZhcmlhYmxlczogWydbXS5wdXNoKDEsMikudW5zaGlmdCgzKS5qb2luKCknLCBbJzMsMScsICcxLDIsMycsICczLDEsMicsICdlcnJvciddXSxcbiAgICAgICAgICBhbnN3ZXI6ICdlcnJvcicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YXJpYWJsZXM6IFsndHJ1ZSArIGZhbHNlJywgWydcInRydWVmYWxzZVwiJywgJzAnLCAnMScsICdOYU4nXV0sXG4gICAgICAgICAgYW5zd2VyOiAnMScsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBoZXJvOiB7XG4gICAgYXVkaW86IHtcbiAgICAgIGF0dGFjazoge1xuICAgICAgICBwYXRoOiAnLi8uLi9zcmMvYXVkaW8vcGxheWVyX2F0dGFjay5tcDMnLFxuICAgICAgfSxcbiAgICAgIGRlbWFnZToge1xuICAgICAgICBwYXRoOiAnLi8uLi9zcmMvYXVkaW8vcGxheWVyX2RhbWFnZS5tcDMnLFxuICAgICAgfSxcbiAgICAgIGhlYWxpbmc6IHtcbiAgICAgICAgcGF0aDogJy4vLi4vc3JjL2F1ZGlvL3BsYXllcl9oZWFsLndhdicsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc3ByaXRlczoge1xuICAgICAgbGVnUmlnaHQ6IHtcbiAgICAgICAgcGF0aDogJy4vLi4vc3JjL2ltZy9oZXJvL2xlZ3MvbGVnLXJpZ2h0LnBuZycsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICB3aWR0aDogNzYsXG4gICAgICAgICAgaGVpZ2h0OiA4NixcbiAgICAgICAgICB4OiA1MCxcbiAgICAgICAgICB5OiA1MTAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgbGVnTGVmdDoge1xuICAgICAgICBwYXRoOiAnLi8uLi9zcmMvaW1nL2hlcm8vbGVncy9sZWctbGVmdC5wbmcnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgd2lkdGg6IDc2LFxuICAgICAgICAgIGhlaWdodDogODYsXG4gICAgICAgICAgeDogMTIwLFxuICAgICAgICAgIHk6IDUxMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBoYW5kTGVmdDoge1xuICAgICAgICBwYXRoOiAnLi8uLi9zcmMvaW1nL2hlcm8vaGFuZHMvaGFuZC1sZWZ0LnBuZycsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICB3aWR0aDogMTU4LFxuICAgICAgICAgIGhlaWdodDogMTcwLFxuICAgICAgICAgIHg6IDE0MCxcbiAgICAgICAgICB5OiAzMzUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYm9keToge1xuICAgICAgICBwYXRoOiAnLi8uLi9zcmMvaW1nL2hlcm8vYm9keS9ib2R5LnBuZycsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICB3aWR0aDogMTkwLFxuICAgICAgICAgIGhlaWdodDogMTg2LFxuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMzUwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGhlYWQ6IHtcbiAgICAgICAgcGF0aDogJy4vLi4vc3JjL2ltZy9oZXJvL2hlYWQvaGVhZC5wbmcnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgd2lkdGg6IDE4OCxcbiAgICAgICAgICBoZWlnaHQ6IDE4NCxcbiAgICAgICAgICB4OiAzMCxcbiAgICAgICAgICB5OiAyMzUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgaGFuZFJpZ2h0OiB7XG4gICAgICAgIHBhdGg6ICcuLy4uL3NyYy9pbWcvaGVyby9oYW5kcy9oYW5kLXJpZ2h0LnBuZycsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICB3aWR0aDogNzQsXG4gICAgICAgICAgaGVpZ2h0OiAxMjQsXG4gICAgICAgICAgeDogMzAsXG4gICAgICAgICAgeTogNDA1LFxuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgIH0sXG4gIH0sXG5cbiAgbW9uc3Rlcjoge1xuICAgIG5hbWVfMTogWyfQqNC60YPRgNC+0YfQsNGE0LonLCAn0JzQvtCz0LjQu9C+0LPQvdC+0LknLCAn0JDQtNC+0YDRi9GIJywgJ9CQ0LTQvtCz0L3QvtC5JywgJ9Cn0LXRgNC90L7QtNC10LzQvtC9JywgJ9Cc0L7Qs9C40LvQvtGH0LXRgNCy0YwnLCAn0KXQvNGD0YDQvtGA0YvRiCcsICfQp9C10YDQvdC+0YfQsNGE0LonLCAn0JTRg9Cx0L7RgNGL0YgnLCAn0JfQu9C+0YHQu9C+0L0nLCAn0J7Qs9C90LXQtNC10LzQvtC9JywgJ9Cl0LzRg9GA0L7Rh9C10YDQstGMJywgJ9CU0LXQvNC+0L3QvtGC0YDQvtC9JywgJ9Ca0YDQsNGB0L3QvtGC0YDQvtC9JywgJ9Cl0LzRg9GA0L7Qs9C90L7QuScsICfQqNC60YPRgNC+0LrQvtC/JywgJ9Cc0L7Qs9C40LvQvtGH0LXRgNGCJywgJ9Cc0L7Qs9C40LvQvtGF0YDRg9C8JywgJ9Cd0LXQutGA0L7RgdC70L7QvScsICfQktC+0LfQtNGD0YXQvtC80LXRgicsICfQl9C10LzQu9C10LrQvtC7JywgJ9Ch0LLQtdGC0L7RgNC10LcnLCAn0JTRg9Cx0LjQvdC+0LfQsNCy0YAnLCAn0KHQstC10YLQvtC80L7QvdGB0YLRgCcsICfQkdGD0LvQsNCy0L7RgtC10YDQtycsICfQndC+0LbQtdGC0LXRgNC3JywgJ9CS0L7QtNC+0LfQsNCy0YAnLCAn0KLQvtC/0L7RgNC+0LHRg9GAJywgJ9Cc0L7Qu9C+0YLQvtCx0YPRgCcsICfQp9C10YDQtdC/0L7QvNCw0LMnLCAn0JDRgdGC0YDQsNC70L7QutC40LQnLCAn0KHQstC10YLQvtCx0YPRgCcsICfQktC+0LfQtNGD0YXQvtGA0LXQtycsICfQmtC+0L/RjNC10LHRg9GAJywgJ9Ct0LrRgdC/0L7QutC40LQnLCAn0JDRgdGC0YDQsNC70L7QvNCw0LMnLCAn0KfQtdGA0LXQv9C+0YLRi9C6JywgJ9Cd0L7QttC10LHRg9GAJywgJ9Cc0LXRh9C10LHRg9GAJywgJ9Cf0LvQvtGC0L7QutC+0LsnLCAn0KLQtdC80L3QvtC60L7QuycsICfQn9C70L7RgtC+0LXQtCcsICfQk9C+0LvQvtCy0L7Qu9C+0LwnLCAn0JHRg9C70LDQstC+0YLQtdGA0LcnLCAn0JrQvtC/0YzQtdC70L7QvCcsICfQkNGB0YLRgNCw0LvQvtC60LjQtCcsICfQl9C10LzQu9C10LzQsNGFJywgJ9Ci0LXQvNC90L7QsdGD0YAnLCAn0JzQvtC70L7RgtC+0LfQsNCy0YAnLCAn0J3QtdC60YDQvtC00LXQvNC+0L0nLCAn0JzQtdCz0LDRg9C20LDRgScsICfQqNC60YPRgNC+0LzQtdGA0LcnLCAn0J3QtdC60YDQvtGG0LDQvycsICfQoNC+0LPQvtC60L7QvycsICfQn9C70L7RgtC+0LzQsNCzJywgJ9Ca0L7RgdGC0LXQvNC+0L3RgdGC0YAnLCAn0JrQvtGB0YLQtdC70L7QvCcsICfQrdC60YHQv9C+0LrQuNC0JywgJ9Ci0LXQvNC90L7RgNC10LcnLCAn0JDRgdGC0YDQsNC70L7QsdGD0YAnLCAn0J/Qu9C+0YLQvtC60L7QuycsICfQotC+0L/QvtGA0L7RgtC10YDQtycsICfQn9Cw0LvQuNGG0L7QvNCw0LMnLCAn0JrQvtGB0YLQtdC70L7QvCcsICfQlNGD0LHQuNC90L7RgtGL0LonLCAn0J/QuNC60L7QvNCw0LMnLCAn0J/QuNC60L7RgtC10YDQtycsICfQntCz0L3QtdC60LjQtCcsICfQnNC10YfQtdC70L7QvCcsICfQn9Cw0LvQuNGG0L7QvNCw0LMnLCAn0J/Qu9C+0YLQvtCx0YPRgCcsICfQodCy0LXRgtC+0YLQtdGA0LcnLCAn0JrQvtC/0YzQtdCx0YPRgCcsICfQn9Cw0LvQuNGG0L7Qt9Cw0LLRgCcsICfQktC+0LTQvtC80L7QvdGB0YLRgCcsICfQnNC+0LvQvtGC0L7QvNCw0YUnLCAn0JzQtdGH0LXQvNCw0LMnLCAn0J/QuNC60L7QvNCw0YUnLCAn0JzQvtC70L7RgtC+0LzQvtC90YHRgtGAJywgJ9Cf0LDQu9C40YbQvtC70L7QvCcsICfQmtC+0L/RjNC10YLRi9C6JywgJ9Ca0L7RgdGC0LXQsdGD0YAnLCAn0JPQvtC70L7QstC+0YLRi9C6JywgJ9Ci0LXQvNC90L7Qu9C+0LwnLCAn0JTQtdC80L7QvdC+0YPQttCw0YEnLCAn0JzQtdCz0LDQtdC0JywgJ9CX0LvQvtGB0LvQvtC9JywgJ9Cc0L7Qs9C40LvQvtC00LXQvNC+0L0nLCAn0J3QtdC60YDQvtGC0YDQvtC9JywgJ9CU0YPQsdC+0YDRi9GIJywgJ9Co0LrRg9GA0L7RhtCw0L8nLCAn0KHQvNC10YDRgtC+0YfQsNGE0LonLCAn0KDQvtCz0L7Qs9C90L7QuScsICfQnNC10LPQsNGH0LXRgNCy0YwnLCAn0KDQvtCz0L7Qt9Cw0LLRgCcsICfQpdC80YPRgNC+0YHQu9C+0L0nLCAn0J7Qs9C90LXRhtCw0L8nLCAn0JfQu9C+0LrQvtC/JywgJ9Cg0L7Qs9C+0YLRgNC+0L0nLCAn0JDQtNC+0L/Rg9C3JywgJ9Cl0LzRg9GA0L7QtNC10LzQvtC9JywgJ9CR0Y/QutC+0LrQvtC/JywgJ9Ch0LzQtdGA0YLQvtC30LDQstGAJywgJ9Cg0L7Qs9C+0YXRgNGD0LwnLCAn0J7Qs9C90LXQtNC10LzQvtC9JywgJ9CQ0LTQvtGB0LvQvtC9JywgJ9Cn0LXRgNC90L7RgNGL0YgnLCAn0JDQtNC+0LPQvdC+0LknLCAn0JHRj9C60L7RhdGA0YPQvCcsICfQlNC10LzQvtC90L7RhdGA0YPQvCcsICfQmtGA0L7QstC+0LzQtdGA0LcnLCAn0JTRg9Cx0L7RgtGA0YPQvycsICfQmtGA0L7QstC+0YDRi9GIJywgJ9CT0YDRj9C30LXRgtGA0L7QvScsICfQkdGP0LrQvtGD0LbQsNGBJywgJ9Ca0YDQvtCy0L7RhtCw0L8nLCAn0JTQtdC80L7QvdC+0YLRgNC+0L0nLCAn0JDQtNC+0YfQtdGA0YInLCAn0JrRgNC+0LLQvtGB0LvQvtC9JywgJ9CR0Y/QutC+0YXRgNGD0LwnXSxcbiAgICBuYW1lXzI6IFsn0JTQstC40LbRg9GF0LDQvtGC0LjQuicsICfQodCy0LXRgtC+0YXQsNC+0YEnLCAn0JrQuNC70L7RgtGA0L7QvScsICfQmtC+0LrRgdC+0YLRgNC+0L0nLCAn0JLRgdC/0YvRhdC+0LTRgNGL0LMnLCAn0K/RgNC60L7RgtGA0L7QuScsICfQndC10L7RgtGA0L7QuScsICfQmtGA0LjQvtGC0YDQvtC5JywgJ9CT0LjQv9C10YDRgdC70L7QvScsICfQk9C10LrRgdC+0LPQu9GO0LonLCAn0J3QtdC+0YLRgNC+0L0nLCAn0JPQuNC/0LXRgNGC0LDRgNCw0LrQsNC9JywgJ9CR0LjRgtC+0YLRgNC+0L0nLCAn0JrQuNC70L7RgtCw0YDQsNC60LDQvScsICfQn9GB0LjRhdC+0LzRg9GF0LAnLCAn0KLRgNCw0L3RgdCy0LjRgNGD0YEnLCAn0JrQvtC60YHQvtC90L7Qu9GMJywgJ9Cm0LjRhNGA0L7Qt9C+0LzQsdC4JywgJ9Cg0L7QsdC+0YLQsNGA0LDQutCw0L0nLCAn0JPQsNC80LzQsNC90L7Qu9GMJywgJ9CR0LXRgtCw0YHRgtCw0LvQutC10YAnLCAn0JPQsNC80LzQsNGF0LDQvtGC0LjQuicsICfQnNC10LPQsNCy0LjRgNGD0YEnLCAn0KDQvtCx0L7RgdGC0LDQu9C60LXRgCcsICfQotC10LzQvdC+0LPQu9GO0LonLCAn0K/RgNC60L7RgtCw0YDQsNC60LDQvScsICfQotC10YXQvdC+0LrRgNGL0LsnLCAn0JrQvtC60YHQvtCx0LDQsycsICfQoNC+0LHQvtC30L7QvNCx0LgnLCAn0JrQuNC70L7RhdCw0L7RgScsICfQotGA0LDQvdGB0LzRg9GF0LAnLCAn0JrQuNC70L7QutGA0YvQuycsICfQlNC40LbQtNC40LrRgNGL0LsnLCAn0KDQvtCx0L7RgtGA0L7QuScsICfQoNC+0LHQvtC00YDRi9CzJywgJ9Ca0LjQu9C+0LzRg9GF0LAnLCAn0JPQtdC60YHQvtGF0LDQvtGC0LjQuicsICfQk9Cw0LzQvNCw0YHQvdC10LMnLCAn0JHQuNGC0L7QutGA0YvQuycsICfQotC10YDRgNCw0YHQu9C+0L0nLCAn0JrQvtC60YHQvtGB0LvQvtC9JywgJ9Ci0LXRgNGA0LDRhdCw0L7RgtC40LonLCAn0KDQvtCx0L7RgdC70L7QvScsICfQn9GB0LjRhdC+0LvRkdGCJywgJ9Cm0LjRhNGA0L7Qv9C70YvQsicsICfQkNC70YzRhNCw0LfQvtC80LHQuCcsICfQkdC10YLQsNGC0LDRgNCw0LrQsNC9JywgJ9CU0LLQuNC20YPQtNGA0YvQsycsICfQk9C10LrRgdC+0L3QvtC70YwnLCAn0KLRgNCw0L3RgdCz0LvRjtC6JywgJ9Ci0LXRgNGA0LDRgtGA0L7QuScsICfQk9C10LrRgdC+0YHQu9C+0L0nLCAn0KDQvtCx0L7RgtCw0YDQsNC60LDQvScsICfQlNC40LbQtNC40LPQu9GO0LonLCAn0JHQuNGC0L7QstC40YDRg9GBJywgJ9Cf0YHQuNGF0L7RgtGA0L7QuScsICfQotC10LzQvdC+0LfQvtC80LHQuCcsICfQoNC+0LHQvtC00YDRi9CzJywgJ9Ch0LLQtdGC0L7RhdCw0L7RgScsICfQktGB0L/Ri9GF0L7RgtGA0L7QvScsICfQodCy0LXRgtC+0YXQsNC+0YLQuNC6JywgJ9CR0LjRgtC+0YLRgNC+0LknLCAn0JHQtdGC0LDQsdCw0LMnLCAn0K/RgNC60L7QvdC+0LvRjCcsICfQktGB0L/Ri9GF0L7RgtGA0L7QuScsICfQoNC+0LHQvtC00YDRi9CzJywgJ9CT0LDQvNC80LDRgtGA0L7QvScsICfQodCy0LXRgtC+0LrRgNGL0LsnLCAn0JHQtdGC0LDQtNGA0YvQsycsICfQn9GB0LjRhdC+0L3QvtCy0LjQuicsICfQn9GB0LjRhdC+0LLQuNGA0YPRgScsICfQotGA0LDQvdGB0LfQvtC80LHQuCcsICfQlNCy0LjQttGD0YHQvdC10LMnLCAn0KLRgNCw0L3RgdCy0LjRgNGD0YEnLCAn0JHQuNGC0L7QtNGA0YvQsycsICfQotC10LzQvdC+0YXQsNC+0YLQuNC6JywgJ9CU0LXQu9GM0YLQsNGB0YLQsNC70LrQtdGAJywgJ9Cg0L7QsdC+0LHQsNCzJywgJ9CU0LLQuNC20YPRgdC70L7QvScsICfQotC10LzQvdC+0YXQsNC+0YLQuNC6JywgJ9CT0LDQvNC80LDQtNGA0YvQsycsICfQmtGA0LjQvtCx0LDQsycsICfQlNCy0LjQttGD0L3QvtCy0LjQuicsICfQkdC10YLQsNC90L7QstC40LonLCAn0J/RgdC40YXQvtGB0L3QtdCzJywgJ9Cd0LXQvtC/0LvRi9CyJywgJ9Ci0LXQvNC90L7QvdC+0LLQuNC6JywgJ9CR0LXRgtCw0YLRgNC+0LknLCAn0JPQsNC80LzQsNC70ZHRgicsICfQktGB0L/Ri9GF0L7QvNGD0YXQsCddLFxuICAgIG5hbWVfMzogWyfQk9GL0LPRi9GI0L3Ri9C5JywgJ9CQ0YbRhtC60YvQuScsICfQn9Cw0YTQsNGB0YHQvdGL0LknLCAn0JPQu9Cw0LzRg9GA0L3Ri9C5JywgJ9Cd0LjQvNC10YbQutCw0Y8nLCAn0JPQsNC30LXQvdCy0LDQs9C10L3RgdC60YvQuScsICfQn9Cw0YTQsNGB0YHQvdGL0LknLCAn0JzQuNGC0LDQu9C70Y7Qs9GB0LrRi9C5JywgJ9Cg0LbQsNGH0L3Ri9C5JywgJ9Cf0LDQtNC+0L3QutCw0YTRhNGB0LrQuNC5JywgJ9CZ0LDQtNC+0LLQuNGC0YvQuScsICfQn9GP0YLQuNCx0LDQu9GM0L3Ri9C5JywgJ9Cb0L7Qu9GM0L3Ri9C5JywgJ9CY0LzQvtGI0L3Ri9C5JywgJ9CQ0L3QuNC80Y3RiNC90YvQuScsICfQkNC70LHQsNC90YHQutC40LknLCAn0J7QvdCz0LvQuNGB0LrRi9C5JywgJ9CY0L/QsNGG0YbQutGL0LknLCAn0KHQsNC/0L7QttC90YvQuScsICfQntC90LPQu9C40YHQutC40LknLCAn0JfQu9C+0LHQvdGL0LknLCAn0KHQvtC/0LvQuNCy0YvQuScsICfQo9C20LDRgdC90YvQuScsICfQnNC10YDQt9C60LjQuScsICfQl9C10LvQtdC90YvQuScsICfQn9C70LDQvdC+0LLRi9C5JywgJ9Ck0LjQvtC70LXRgtC+0LLRi9C5JywgJ9Cj0LrRg9GA0LXQvdC90YvQuScsICfQmtC+0YHRj9C60L7QstGL0LknLCAn0J7RgNCw0L3QttC10LLRi9C5JywgJ9Ca0L7RgdGP0YfQvdGL0LknLCAnQdCz0YDQtdGB0YHQuNCy0L3Ri9C5JywgJ0HQt9Cw0YDRgtC90YvQuScsICdB0LzQvtGA0LDQu9GM0L3Ri9C5JywgJ9CR0LXQt9GD0LzQvdGL0LknLCAn0JbQsNC00L3Ri9C5JywgJ9CW0LXQu9C10LfQvdGL0LknLCAn0JfQu9C+0LknLCAn0JfQsNC90YPQtNC90YvQuScsICfQmtC+0LLQsNGA0L3Ri9C5JywgJ9Cb0L7QstC60LjQuScsICfQndCw0LPQu9GL0LknLCAn0JzQtdC00LvQuNGC0LXQu9GM0L3Ri9C5JywgJ9Ce0YHRgtC+0YDQvtC20L3Ri9C5JywgJ9Cf0L7QtNC+0LfRgNC40YLQtdC70YzQvdGL0LknLCAn0KHRg9C80LDRiNC10LTRiNC40LknLCAn0KLQstC10YDQtNC+0LvQvtCx0YsnLCAn0KLRg9C/0L7QuScsICfQotGA0LXRgdC70LjQstGL0LknLCAn0KPQs9GA0Y7QvNGL0LknLCAn0KXQvtC70L7QtNC90YvQuScsICfQptC10LvRjNC90L7QvNC10YLQsNC70LvQuNGH0LXRgdC60LjQuScsICfQrtGA0L7QtNC40LLRi9C5JywgJ9Cc0YPRgtC90YvQuScsICfQm9C+0LLQutC40LknLCAn0J7QtNC90L7Qs9C70LDQt9GL0LknLCAn0JHRi9GB0YLRgNGL0LknLCAn0J/RjNGP0L3Ri9C5JywgJ9Ch0LzQtdGA0YLQvtC90L7RgdC90YvQuScsICfQm9C+0LLQutC40LknLCAn0KLQsNC90YbRg9GO0YnQuNC5JywgJ9Cn0LXRgNC90YvQuScsICfQlNC10YDQt9C60LjQuScsICfQkdC10YHRiNGD0LzQvdGL0LknLCAn0JjRgNC70LDQtNGB0LrQuNC5JywgJ9CR0LXRiNC10L3Ri9C5ICcsICfQnNC10YLQutC40LknXSxcbiAgICBhdWRpbzoge1xuICAgICAgYXR0YWNrOiB7XG4gICAgICAgIHBhdGg6ICcuLy4uL3NyYy9hdWRpby9tb25zdGVyX2F0dGFjay53YXYnLFxuICAgICAgfSxcbiAgICAgIGRlbWFnZToge1xuICAgICAgICBwYXRoOiAnLi8uLi9zcmMvYXVkaW8vbW9uc3Rlcl9kYW1hZ2UubXAzJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzcHJpdGVzOiB7XG4gICAgICBoYW5kTGVmdDoge1xuICAgICAgICBwYXRoOiBbJy4vLi4vc3JjL2ltZy9tb25zdGVyL2hhbmRzL2hhbmQtMS9oYW5kLWxlZnQucG5nJywgJy4vLi4vc3JjL2ltZy9tb25zdGVyL2hhbmRzL2hhbmQtMi9oYW5kLWxlZnQucG5nJywgJy4vLi4vc3JjL2ltZy9tb25zdGVyL2hhbmRzL2hhbmQtMy9oYW5kLWxlZnQucG5nJ10sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICB3aWR0aDogMTUwLFxuICAgICAgICAgIGhlaWdodDogNzAsXG4gICAgICAgICAgeDogOTIwLFxuICAgICAgICAgIHk6IDI4NSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBib2R5OiB7XG4gICAgICAgIHBhdGg6IFsnLi8uLi9zcmMvaW1nL21vbnN0ZXIvYm9keS9ib2R5LTEvYm9keS5wbmcnLCAnLi8uLi9zcmMvaW1nL21vbnN0ZXIvYm9keS9ib2R5LTIvYm9keS5wbmcnLCAnLi8uLi9zcmMvaW1nL21vbnN0ZXIvYm9keS9ib2R5LTMvYm9keS5wbmcnXSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIHdpZHRoOiAxMTAsXG4gICAgICAgICAgaGVpZ2h0OiAxNzcsXG4gICAgICAgICAgeDogMTAxNSxcbiAgICAgICAgICB5OiAyOTUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgaGVhZDoge1xuICAgICAgICBwYXRoOiBbJy4vLi4vc3JjL2ltZy9tb25zdGVyL2hlYWQvaGVhZC0xL2hlYWQxLnBuZycsICcuLy4uL3NyYy9pbWcvbW9uc3Rlci9oZWFkL2hlYWQtMi9oZWFkMS5wbmcnLCAnLi8uLi9zcmMvaW1nL21vbnN0ZXIvaGVhZC9oZWFkLTMvaGVhZDEucG5nJ10sXG4gICAgICAgIHNldE9mUGF0aDogW1snLi8uLi9zcmMvaW1nL21vbnN0ZXIvaGVhZC9oZWFkLTEvaGVhZDEucG5nJywgJy4vLi4vc3JjL2ltZy9tb25zdGVyL2hlYWQvaGVhZC0xL2hlYWQyLnBuZycsICcuLy4uL3NyYy9pbWcvbW9uc3Rlci9oZWFkL2hlYWQtMS9oZWFkMy5wbmcnXSxcbiAgICAgICAgICBbJy4vLi4vc3JjL2ltZy9tb25zdGVyL2hlYWQvaGVhZC0yL2hlYWQxLnBuZycsICcuLy4uL3NyYy9pbWcvbW9uc3Rlci9oZWFkL2hlYWQtMi9oZWFkMi5wbmcnLCAnLi8uLi9zcmMvaW1nL21vbnN0ZXIvaGVhZC9oZWFkLTIvaGVhZDMucG5nJ10sXG4gICAgICAgICAgWycuLy4uL3NyYy9pbWcvbW9uc3Rlci9oZWFkL2hlYWQtMy9oZWFkMS5wbmcnLCAnLi8uLi9zcmMvaW1nL21vbnN0ZXIvaGVhZC9oZWFkLTMvaGVhZDIucG5nJywgJy4vLi4vc3JjL2ltZy9tb25zdGVyL2hlYWQvaGVhZC0zL2hlYWQzLnBuZyddXSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIHdpZHRoOiAxODUsXG4gICAgICAgICAgaGVpZ2h0OiAxNjQsXG4gICAgICAgICAgeDogMTAwMCxcbiAgICAgICAgICB5OiAxNzAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgaGFuZFJpZ2h0OiB7XG4gICAgICAgIHBhdGg6IFsnLi8uLi9zcmMvaW1nL21vbnN0ZXIvaGFuZHMvaGFuZC0xL2hhbmQtcmlnaHQucG5nJywgJy4vLi4vc3JjL2ltZy9tb25zdGVyL2hhbmRzL2hhbmQtMi9oYW5kLXJpZ2h0LnBuZycsICcuLy4uL3NyYy9pbWcvbW9uc3Rlci9oYW5kcy9oYW5kLTMvaGFuZC1yaWdodC5wbmcnXSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgaGVpZ2h0OiA3MCxcbiAgICAgICAgICB4OiA5NjUsXG4gICAgICAgICAgeTogMzQwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGxlZ1JpZ2h0OiB7XG4gICAgICAgIHBhdGg6IFsnLi8uLi9zcmMvaW1nL21vbnN0ZXIvbGVncy9sZWctMS9sZWctcmlnaHQucG5nJywgJy4vLi4vc3JjL2ltZy9tb25zdGVyL2xlZ3MvbGVnLTIvbGVnLXJpZ2h0LnBuZycsICcuLy4uL3NyYy9pbWcvbW9uc3Rlci9sZWdzL2xlZy0yL2xlZy1yaWdodC5wbmcnXSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIHdpZHRoOiA3OSxcbiAgICAgICAgICBoZWlnaHQ6IDE4MyxcbiAgICAgICAgICB4OiA5NzUsXG4gICAgICAgICAgeTogNDE1LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGxlZ0xlZnQ6IHtcbiAgICAgICAgcGF0aDogWycuLy4uL3NyYy9pbWcvbW9uc3Rlci9sZWdzL2xlZy0xL2xlZy1sZWZ0LnBuZycsICcuLy4uL3NyYy9pbWcvbW9uc3Rlci9sZWdzL2xlZy0yL2xlZy1sZWZ0LnBuZycsICcuLy4uL3NyYy9pbWcvbW9uc3Rlci9sZWdzL2xlZy0zL2xlZy1sZWZ0LnBuZyddLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgd2lkdGg6IDc5LFxuICAgICAgICAgIGhlaWdodDogMTgzLFxuICAgICAgICAgIHg6IDEwNTUsXG4gICAgICAgICAgeTogNDE1LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaGVyb1dlYXBvbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICcuLy4uL3NyYy9pbWcvaGVyby93ZWFwb24vaWNlYmFsbC5wbmcnLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgICAgeDogMjUwLFxuICAgICAgICB5OiAzNTAsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy4vLi4vc3JjL2ltZy9oZXJvL3dlYXBvbi9maXJlYmFsbC5wbmcnLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICB3aWR0aDogMTIwLFxuICAgICAgICBoZWlnaHQ6IDEyMCxcbiAgICAgICAgeDogMjUwLFxuICAgICAgICB5OiAzNTAsXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG5cbiAgbW9uc3RlcldlYXBvbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICcuLy4uL3NyYy9pbWcvbW9uc3Rlci93ZWFwb24vYnJhaW4ucG5nJyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgd2lkdGg6IDEyMCxcbiAgICAgICAgaGVpZ2h0OiAxMjAsXG4gICAgICAgIHg6IDg5MCxcbiAgICAgICAgeTogMzUwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcuLy4uL3NyYy9pbWcvbW9uc3Rlci93ZWFwb24vYXJtLnBuZycsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHdpZHRoOiA2NSxcbiAgICAgICAgaGVpZ2h0OiA2NSxcbiAgICAgICAgeDogODkwLFxuICAgICAgICB5OiAzNTAsXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG5cbiAgaGVhbGluZzogW1xuICAgIHtcbiAgICAgIHBhdGg6ICcuLy4uL3NyYy9pbWcvaGVhbGluZy9tZWRpY2luZS5wbmcnLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgICAgeDogMTUwLFxuICAgICAgICB5OiA0MDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy4vLi4vc3JjL2ltZy9oZWFsaW5nL3JlbWVkeS5wbmcnLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgICAgeDogMTUwLFxuICAgICAgICB5OiA0MDAsXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59O1xuIiwiaW1wb3J0IEJhdHRsZUFyZWEgZnJvbSAnLi9zY3JlZW5zL2JhdHRsZUFyZWEvYmF0dGxlQXJlYSc7XG5pbXBvcnQgZ2FtZUNvbmZpZyBmcm9tICcuL2NvbmZpZ3MvZ2FtZUNvbmZpZyc7XG5pbXBvcnQgcGxheWVyQ29uZmlnIGZyb20gJy4vY29uZmlncy9wbGF5ZXJDb25maWcnO1xuaW1wb3J0IEZpZ2h0U3RhdHVzIGZyb20gJy4vY29tcG9uZW50cy9maWdodFN0YXR1cy9maWdodFN0YXR1cyc7XG5pbXBvcnQgTWFnaWNUeXBlIGZyb20gJy4vY29tcG9uZW50cy9tYWdpY1R5cGUvbWFnaWNUeXBlJztcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tICcuL2dhbWVNYW5hZ2VyJztcbmltcG9ydCBNb2RhbE5vdGlmaWNhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvbW9kYWxOb3RpZmljYXRpb24vbW9kYWxOb3RpZmljYXRpb24nO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5jbGFzcyBGaWdodCB7XG4gIGNvbnN0cnVjdG9yKGhlcm8sIG1vbnN0ZXIsIGxldmVsKSB7XG4gICAgdGhpcy5oZXJvID0gaGVybztcbiAgICB0aGlzLm1vbnN0ZXIgPSBtb25zdGVyO1xuICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICB0aGlzLmJhdHRsZUFyZWEgPSBudWxsO1xuICAgIHRoaXMuY3JlYXRlSW5zdGFuY2UoKTtcbiAgfVxuXG4gIGNyZWF0ZUluc3RhbmNlKCkge1xuICAgIEZpZ2h0Lmluc3RhbmNlID0gdGhpcztcbiAgfVxuXG4gIHN0YXJ0RmlnaHQoKSB7XG4gICAgY29uc3QgbGV2ZWxNZXNzYWdlID0gYExldmVsICR7dGhpcy5sZXZlbH1gO1xuICAgIE1vZGFsTm90aWZpY2F0aW9uLnNob3dNb2RhbE5vdGlmaWNhdGlvbihsZXZlbE1lc3NhZ2UsIDEwMDApO1xuICAgIHRoaXMuY3JlYXRlQmF0dGxlQXJlYSgpO1xuICAgIFV0aWxzLnBhdXNlKDEwMDApLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVQbGF5ZXIodGhpcy5oZXJvKTtcbiAgICAgIHRoaXMuY3JlYXRlUGxheWVyKHRoaXMubW9uc3Rlcik7XG4gICAgICB0aGlzLnN0YXJ0R2FtZUxvb3AoKTtcbiAgICAgIHRoaXMucmVxdWVzdElEID0gbnVsbDtcbiAgICAgIE1hZ2ljVHlwZS5pbml0TWFnaWNUeXBlKCk7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBGaWdodFN0YXR1cy5jcmVhdGUodGhpcy5oZXJvLCB0aGlzLm1vbnN0ZXIsIHRoaXMubGV2ZWwpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlQmF0dGxlQXJlYSgpIHtcbiAgICBjb25zdCB3aWR0aCA9IGdhbWVDb25maWcuY2FudmFzU2l6ZS53aWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSBnYW1lQ29uZmlnLmNhbnZhc1NpemUuaGVpZ2h0O1xuICAgIHRoaXMuYmF0dGxlQXJlYSA9IG5ldyBCYXR0bGVBcmVhKHdpZHRoLCBoZWlnaHQpO1xuICAgIHRoaXMuYmF0dGxlQXJlYS5kcmF3KCk7XG4gIH1cblxuICBjcmVhdGVQbGF5ZXIocGxheWVyKSB7XG4gICAgcGxheWVyLmRyYXcodGhpcy5iYXR0bGVBcmVhLmNhbnZhc0NvbnRleHQpO1xuICB9XG5cbiAgc3RhcnRHYW1lTG9vcCgpIHtcbiAgICBjb25zdCB1cGRhdGUgPSB0aGlzLnJlbmRlckZpZ2h0LmJpbmQodGhpcyk7XG5cbiAgICBmdW5jdGlvbiBmcmFtZSgpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lKTtcbiAgICB9XG4gICAgdGhpcy5yZXF1ZXN0SUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xuICB9XG5cbiAgcmVuZGVyRmlnaHQoKSB7XG4gICAgdGhpcy5iYXR0bGVBcmVhLmNsZWFyQmF0dGxlQXJlYSgpO1xuICAgIHRoaXMuaGVyby5jbGVhclBsYXllcih0aGlzLmJhdHRsZUFyZWEuY2FudmFzQ29udGV4dCk7XG4gICAgdGhpcy5tb25zdGVyLmNsZWFyUGxheWVyKHRoaXMuYmF0dGxlQXJlYS5jYW52YXNDb250ZXh0KTtcbiAgfVxuXG4gIHByb2Nlc3NBbnN3ZXJSZXN1bHQoaXNDb3JyZWN0LCB0eXBlLCB2YWx1ZSkge1xuICAgIGNvbnN0IGRhbWFnZSA9ICt2YWx1ZTtcbiAgICBjb25zdCBkYW1hZ2VUb0hlcm8gPSB0aGlzLm1vbnN0ZXIuZ2VuZXJhdGVEYW1hZ2UodmFsdWUpO1xuXG4gICAgaWYgKGlzQ29ycmVjdCkge1xuICAgICAgaWYgKHR5cGUgPT09ICdhdHRhY2snKSB7XG4gICAgICAgIHRoaXMuaGVyby5hdHRhY2tFbmVteSh0aGlzLm1vbnN0ZXIsIGRhbWFnZSk7XG4gICAgICAgIFV0aWxzLmNyZWF0ZVNvdW5kKHBsYXllckNvbmZpZy5oZXJvLmF1ZGlvLmF0dGFjay5wYXRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGVyby5oZWFsWW91cnNlbGYoZGFtYWdlKTtcbiAgICAgICAgVXRpbHMuY3JlYXRlU291bmQocGxheWVyQ29uZmlnLmhlcm8uYXVkaW8uaGVhbGluZy5wYXRoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYW5zd2VyTWVzc2FnZSA9ICdUaGUgYW5zd2VyIGlzIHdyb25nLic7XG4gICAgICBNb2RhbE5vdGlmaWNhdGlvbi5zaG93TW9kYWxOb3RpZmljYXRpb24oYW5zd2VyTWVzc2FnZSwgMTAwMCk7XG4gICAgfVxuXG4gICAgVXRpbHMucGF1c2UoMTAwMCkudGhlbigoKSA9PiB7XG4gICAgICBVdGlscy5jcmVhdGVTb3VuZChwbGF5ZXJDb25maWcubW9uc3Rlci5hdWRpby5kZW1hZ2UucGF0aCk7XG4gICAgICBGaWdodFN0YXR1cy51cGRhdGVQbGF5ZXJzSFAodGhpcy5oZXJvLmhlYWxzZSwgdGhpcy5tb25zdGVyLmhlYWxzZSk7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBpZiAoRmlnaHQuaXNQbGF5ZXJBbGl2ZSh0aGlzLm1vbnN0ZXIpKSB7XG4gICAgICAgIHRoaXMubW9uc3Rlci5hdHRhY2tFbmVteSh0aGlzLmhlcm8sIGRhbWFnZVRvSGVybyk7XG4gICAgICAgIFV0aWxzLmNyZWF0ZVNvdW5kKHBsYXllckNvbmZpZy5tb25zdGVyLmF1ZGlvLmF0dGFjay5wYXRoKTtcbiAgICAgICAgVXRpbHMucGF1c2UoMTAwMCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgVXRpbHMuY3JlYXRlU291bmQocGxheWVyQ29uZmlnLmhlcm8uYXVkaW8uZGVtYWdlLnBhdGgpO1xuICAgICAgICAgIEZpZ2h0U3RhdHVzLnVwZGF0ZVBsYXllcnNIUCh0aGlzLmhlcm8uaGVhbHNlLCB0aGlzLm1vbnN0ZXIuaGVhbHNlKTtcbiAgICAgICAgICBGaWdodC5kZWZpbmVSb3VuZFJlc3VsdCh0aGlzLmhlcm8sIHRoaXMubW9uc3RlciwgdGhpcy5sZXZlbCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRmlnaHQuZGVmaW5lUm91bmRSZXN1bHQodGhpcy5oZXJvLCB0aGlzLm1vbnN0ZXIsIHRoaXMubGV2ZWwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGlzUGxheWVyRGllKHBsYXllcikge1xuICAgIHJldHVybiBwbGF5ZXIuaGVhbHNlID09PSAwO1xuICB9XG5cbiAgc3RhdGljIGlzUGxheWVyQWxpdmUocGxheWVyKSB7XG4gICAgcmV0dXJuIHBsYXllci5oZWFsc2UgPiAwO1xuICB9XG5cbiAgc3RhdGljIGRlZmluZVJvdW5kUmVzdWx0KGhlcm8sIG1vbnN0ZXIsIGxldmVsKSB7XG4gICAgaWYgKEZpZ2h0LmlzUGxheWVyRGllKGhlcm8pKSB7XG4gICAgICBGaWdodC5wcm9jZXNzSGVyb0RlYXRoKGhlcm8sIG1vbnN0ZXIsIGxldmVsKTtcbiAgICB9IGVsc2UgaWYgKEZpZ2h0LmlzUGxheWVyRGllKG1vbnN0ZXIpKSB7XG4gICAgICBGaWdodC5wcm9jZXNzTW9uc3RlckRlYXRoKGhlcm8sIG1vbnN0ZXIsIGxldmVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTWFnaWNUeXBlLmluaXRNYWdpY1R5cGUoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcHJvY2Vzc0hlcm9EZWF0aChoZXJvLCBtb25zdGVyLCBsZXZlbCkge1xuICAgIGhlcm8uc3RvcE1vdmUoKTtcbiAgICBoZXJvLnNob3dEZWF0aEFuaW1hdGlvbigpO1xuICAgIGNvbnN0IGxvb3NlTWVzc2FnZSA9ICdZb3UgbG9zZSA6KCc7XG4gICAgTW9kYWxOb3RpZmljYXRpb24uc2hvd01vZGFsTm90aWZpY2F0aW9uKGxvb3NlTWVzc2FnZSwgMTAwMCk7XG4gICAgVXRpbHMucGF1c2UoMjAwMCkudGhlbigoKSA9PiB7XG4gICAgICBGaWdodC5jbGVhclByZXZpb3VzRmlnaHQoaGVybywgbW9uc3Rlcik7XG4gICAgICBHYW1lTWFuYWdlci5zaG93U2NvcmVUYWJsZShoZXJvLm5hbWUsIGxldmVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9jZXNzTW9uc3RlckRlYXRoKGhlcm8sIG1vbnN0ZXIsIGxldmVsKSB7XG4gICAgbW9uc3Rlci5zdG9wTW92ZSgpO1xuICAgIG1vbnN0ZXIuc2hvd0RlYXRoQW5pbWF0aW9uKCk7XG4gICAgY29uc3Qgd2luTWVzc2FnZSA9ICdZb3Ugd2luIDopJztcbiAgICBNb2RhbE5vdGlmaWNhdGlvbi5zaG93TW9kYWxOb3RpZmljYXRpb24od2luTWVzc2FnZSwgMjAwMCk7XG4gICAgVXRpbHMucGF1c2UoMjAwMCkudGhlbigoKSA9PiB7XG4gICAgICBGaWdodC5jbGVhclByZXZpb3VzRmlnaHQoaGVybywgbW9uc3Rlcik7XG4gICAgICBHYW1lTWFuYWdlci5uZXh0TGV2ZWwoaGVybywgbGV2ZWwpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGNsZWFyUHJldmlvdXNGaWdodChoZXJvLCBtb25zdGVyKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoRmlnaHQuaW5zdGFuY2UucmVxdWVzdElEKTtcbiAgICBGaWdodFN0YXR1cy5yZW1vdmUoKTtcbiAgICBCYXR0bGVBcmVhLnJlbW92ZSgpO1xuICAgIGhlcm8uc3RvcE1vdmUoKTtcbiAgICBtb25zdGVyLnN0b3BNb3ZlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlnaHQ7XG4iLCJpbXBvcnQgR2FtZUZpZWxkIGZyb20gJy4vc2NyZWVucy9nYW1lRmllbGQvZ2FtZUZpZWxkJztcbmltcG9ydCBNb2RhbExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9tb2RhbExvZ2luL21vZGFsTG9naW4nO1xuaW1wb3J0IFNjb3JlVGFibGUgZnJvbSAnLi9jb21wb25lbnRzL3Njb3JlVGFibGUvc2NvcmVUYWJsZSc7XG5pbXBvcnQgTmF2aWdhdGlvbkxlZnQgZnJvbSAnLi9jb21wb25lbnRzL25hdmlnYXRpb25MZWZ0L25hdmlnYXRpb25MZWZ0JztcbmltcG9ydCBnYW1lQ29uZmlnIGZyb20gJy4vY29uZmlncy9nYW1lQ29uZmlnJztcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tICcuL2dhbWVNYW5hZ2VyJztcblxuY2xhc3MgR2FtZUludGVyZmFjZSB7XG4gIHN0YXRpYyBsb2FkR2FtZSgpIHtcbiAgICBHYW1lRmllbGQuZHJhdygpO1xuICAgIE1vZGFsTG9naW4uY3JlYXRlKCk7XG4gICAgTmF2aWdhdGlvbkxlZnQuZHJhdygpO1xuICAgIEdhbWVJbnRlcmZhY2UuYWRkTGlzdGVuZXJzKCk7XG4gIH1cblxuICBzdGF0aWMgc3RhcnRHYW1lKCkge1xuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItbmFtZScpLnZhbHVlO1xuICAgIE1vZGFsTG9naW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoR2FtZUludGVyZmFjZS5zdGFydEdhbWUpO1xuICAgIE1vZGFsTG9naW4ucmVtb3ZlKCk7XG4gICAgR2FtZU1hbmFnZXIuaW5pdEZpZ2h0KG5hbWVJbnB1dCk7XG4gICAgR2FtZU1hbmFnZXIubGV2ZWwgPSAxO1xuICB9XG5cbiAgc3RhdGljIGNvbnRyb2xNdXNpYygpIHtcbiAgICBjb25zdCBidXR0b25NdXNpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fbXVzaWMnKTtcbiAgICBpZiAoR2FtZUludGVyZmFjZS5tdXNpYykge1xuICAgICAgY29uc3QgbXVzaWNTdGF0dXMgPSBidXR0b25NdXNpYy5kYXRhc2V0Lm11c2ljO1xuICAgICAgaWYgKG11c2ljU3RhdHVzID09PSAnb2ZmJykge1xuICAgICAgICBOYXZpZ2F0aW9uTGVmdC5tYWtlQnV0dG9uQWN0aXZlKGJ1dHRvbk11c2ljKTtcbiAgICAgICAgR2FtZUludGVyZmFjZS5tdXNpYy5wbGF5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBOYXZpZ2F0aW9uTGVmdC5tYWtlQnV0dG9uUGFzc2l2ZShidXR0b25NdXNpYyk7XG4gICAgICAgIEdhbWVJbnRlcmZhY2UubXVzaWMucGF1c2UoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgR2FtZUludGVyZmFjZS5tdXNpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XG4gICAgICBHYW1lSW50ZXJmYWNlLm11c2ljLnNyYyA9IGdhbWVDb25maWcubXVzaWMucGF0aDtcbiAgICAgIEdhbWVJbnRlcmZhY2UubXVzaWMubG9vcCA9IHRydWU7XG4gICAgICBOYXZpZ2F0aW9uTGVmdC5tYWtlQnV0dG9uQWN0aXZlKGJ1dHRvbk11c2ljKTtcbiAgICAgIEdhbWVJbnRlcmZhY2UubXVzaWMucGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBleGl0R2FtZSgpIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuLy4uL2luZGV4Lmh0bWwnO1xuICB9XG5cbiAgc3RhdGljIGFkZExpc3RlbmVycygpIHtcbiAgICBNb2RhbExvZ2luLnNldEV2ZW50TGlzdGVuZXIoR2FtZUludGVyZmFjZS5zdGFydEdhbWUpO1xuICAgIE5hdmlnYXRpb25MZWZ0LnNldE11c2ljQ29udHJvbExpc3RlbmVyKEdhbWVJbnRlcmZhY2UuY29udHJvbE11c2ljKTtcbiAgICBOYXZpZ2F0aW9uTGVmdC5zZXRFeGl0R2FtZUNvbnRyb2xMaXN0ZW5lcihHYW1lSW50ZXJmYWNlLmV4aXRHYW1lKTtcbiAgfVxuXG4gIHN0YXRpYyByZWxvYWRHYW1lKCkge1xuICAgIFNjb3JlVGFibGUucmVtb3ZlKCk7XG4gICAgTW9kYWxMb2dpbi5jcmVhdGUoKTtcbiAgICBHYW1lSW50ZXJmYWNlLmFkZExpc3RlbmVycygpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVJbnRlcmZhY2U7XG4iLCJpbXBvcnQgU2NvcmVUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvc2NvcmVUYWJsZS9zY29yZVRhYmxlJztcbmltcG9ydCBwbGF5ZXJDb25maWcgZnJvbSAnLi9jb25maWdzL3BsYXllckNvbmZpZyc7XG5pbXBvcnQgR2FtZUZpZWxkIGZyb20gJy4vc2NyZWVucy9nYW1lRmllbGQvZ2FtZUZpZWxkJztcbmltcG9ydCBIZXJvIGZyb20gJy4vcGxheWVycy9oZXJvJztcbmltcG9ydCBNb25zdGVyIGZyb20gJy4vcGxheWVycy9tb25zdGVyJztcbmltcG9ydCBGaWdodCBmcm9tICcuL2ZpZ2h0JztcbmltcG9ydCBVdGlscyBmcm9tICcuL3V0aWxzJztcblxuY2xhc3MgR2FtZU1hbmFnZXIge1xuICBzdGF0aWMgaW5pdEZpZ2h0KGhlcm9OYW1lKSB7XG4gICAgY29uc3QgaGVybyA9IEdhbWVNYW5hZ2VyLmdlbmVyYXRlSGVybyhoZXJvTmFtZSk7XG4gICAgY29uc3QgbW9uc3Rlck5hbWUgPSBHYW1lTWFuYWdlci5nZW5lcmF0ZU1vbnN0ZXJOYW1lKCk7XG4gICAgY29uc3QgbW9uc3RlciA9IEdhbWVNYW5hZ2VyLmdlbmVyYXRlTW9uc3Rlcihtb25zdGVyTmFtZSk7XG4gICAgbmV3IEZpZ2h0KGhlcm8sIG1vbnN0ZXIsIDEpLnN0YXJ0RmlnaHQoKTtcbiAgfVxuXG4gIHN0YXRpYyBnZW5lcmF0ZUhlcm8obmFtZSkge1xuICAgIHJldHVybiBuZXcgSGVybyhuYW1lKTtcbiAgfVxuXG4gIHN0YXRpYyBnZW5lcmF0ZU1vbnN0ZXIobmFtZSkge1xuICAgIHJldHVybiBuZXcgTW9uc3RlcihuYW1lKTtcbiAgfVxuXG4gIHN0YXRpYyBnZW5lcmF0ZU1vbnN0ZXJOYW1lKCkge1xuICAgIGNvbnN0IGZpcnN0TmFtZVBhcnQgPSBVdGlscy5jaG9vc2VSYW5kb21FbGVtKHBsYXllckNvbmZpZy5tb25zdGVyLm5hbWVfMSk7XG4gICAgY29uc3Qgc2Vjb25kTmFtZVBhcnQgPSBVdGlscy5jaG9vc2VSYW5kb21FbGVtKHBsYXllckNvbmZpZy5tb25zdGVyLm5hbWVfMik7XG4gICAgY29uc3QgdGhpcmROYW1lUGFydCA9IFV0aWxzLmNob29zZVJhbmRvbUVsZW0ocGxheWVyQ29uZmlnLm1vbnN0ZXIubmFtZV8zKTtcblxuICAgIHJldHVybiBgJHtmaXJzdE5hbWVQYXJ0fSAke3NlY29uZE5hbWVQYXJ0fSAke3RoaXJkTmFtZVBhcnR9YDtcbiAgfVxuXG4gIHN0YXRpYyBuZXh0TGV2ZWwoaGVybywgcHJldkxldmVsKSB7XG4gICAgY29uc3QgbW9uc3Rlck5hbWUgPSBHYW1lTWFuYWdlci5nZW5lcmF0ZU1vbnN0ZXJOYW1lKCk7XG4gICAgY29uc3QgbW9uc3RlciA9IEdhbWVNYW5hZ2VyLmdlbmVyYXRlTW9uc3Rlcihtb25zdGVyTmFtZSk7XG4gICAgY29uc3QgbmV4dExldmVsID0gcHJldkxldmVsICsgMTtcbiAgICBoZXJvLnJlc3RvcmVIZWFsc2UoKTtcbiAgICBuZXcgRmlnaHQoaGVybywgbW9uc3RlciwgbmV4dExldmVsKS5zdGFydEZpZ2h0KCk7XG4gICAgR2FtZUZpZWxkLmNoYW5nZUJhY2tncm91bmQoKTtcbiAgfVxuXG4gIHN0YXRpYyBmaW5pc2hHYW1lKCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vLi4vaW5kZXguaHRtbCc7XG4gIH1cblxuICBzdGF0aWMgc2hvd1Njb3JlVGFibGUocGxheWVyTmFtZSwgbGV2ZWxOdW1iZXIpIHtcbiAgICBVdGlscy5zYXZlR2FtZVJlc3VsdChwbGF5ZXJOYW1lLCBsZXZlbE51bWJlcik7XG4gICAgU2NvcmVUYWJsZS5pbml0U2NvcmVUYWJsZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVNYW5hZ2VyO1xuIiwiaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xuaW1wb3J0IEdhbWVJbnRlcmZhY2UgZnJvbSAnLi9nYW1lSW50ZXJmYWNlJztcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uIGxvYWRlcigpIHtcbiAgR2FtZUludGVyZmFjZS5sb2FkR2FtZSgpO1xufTtcbiIsImltcG9ydCBVdGlscyBmcm9tICcuLi91dGlscyc7XG5cbmNsYXNzIEF0dGFjayB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGRpcmVjdGlvbikge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy53ZWFwb25JbWcgPSBudWxsO1xuICAgIHRoaXMueCA9IG51bGw7XG4gICAgdGhpcy55ID0gbnVsbDtcbiAgICB0aGlzLndpZHRoID0gbnVsbDtcbiAgICB0aGlzLmhlaWdodCA9IG51bGw7XG4gICAgdGhpcy5hbmdsZSA9IDA7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgdGhpcy5yZXF1ZXN0SUQgPSBudWxsO1xuICAgIHRoaXMuYXR0YWNrVGltZSA9IDEwMDA7XG4gIH1cblxuICBkcmF3QXR0YWNrKHdlYXBvbikge1xuICAgIHRoaXMuY3JhdGVXZWFwb24od2VhcG9uKTtcbiAgICB0aGlzLmRvQW5pbWF0ZSh0aGlzLmF0dGFja1RpbWUsIHRoaXMudXBkYXRlQXR0YWNrKTtcbiAgfVxuXG4gIGRyYXdIZWFsaW5nKHdlYXBvbikge1xuICAgIHRoaXMuY3JhdGVXZWFwb24od2VhcG9uKTtcbiAgICB0aGlzLmRvQW5pbWF0ZSh0aGlzLmF0dGFja1RpbWUsIHRoaXMudXBkYXRlSGVhbGluZyk7XG4gIH1cblxuICBjcmF0ZVdlYXBvbih3ZWFwb24pIHtcbiAgICB0aGlzLndlYXBvbkltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMud2VhcG9uSW1nLnNyYyA9IHdlYXBvbi5wYXRoO1xuICAgIHRoaXMueCA9IHdlYXBvbi5vcHRpb25zLng7XG4gICAgdGhpcy55ID0gd2VhcG9uLm9wdGlvbnMueTtcbiAgICB0aGlzLndpZHRoID0gd2VhcG9uLm9wdGlvbnMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSB3ZWFwb24ub3B0aW9ucy5oZWlnaHQ7XG4gIH1cblxuICBjbGVhcldlYXBvbigpIHtcbiAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgIHRoaXMuY29udGV4dC5yb3RhdGUodGhpcy5hbmdsZSk7XG4gICAgY29uc3QgY2VudGVyWSA9IHRoaXMud2lkdGggLyAtMjtcbiAgICBjb25zdCBjZW50ZXJYID0gdGhpcy5oZWlnaHQgLyAtMjtcbiAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMud2VhcG9uSW1nLCBjZW50ZXJZLCBjZW50ZXJYLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHVwZGF0ZUF0dGFjaygpIHtcbiAgICB0aGlzLmFuZ2xlICs9IDEwICogTWF0aC5QSSAvIDE4MDtcblxuICAgIGlmICh0aGlzLmRpcmVjdGlvbikge1xuICAgICAgdGhpcy54ICs9IDEyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnggLT0gMTI7XG4gICAgfVxuICAgIHRoaXMud2lkdGggKz0gMTtcbiAgICB0aGlzLmhlaWdodCArPSAxO1xuICAgIHRoaXMuY2xlYXJXZWFwb24oKTtcbiAgfVxuXG4gIHVwZGF0ZUhlYWxpbmcoKSB7XG4gICAgdGhpcy5hbmdsZSArPSA1ICogTWF0aC5QSSAvIDE4MDtcbiAgICB0aGlzLndpZHRoICs9IDI7XG4gICAgdGhpcy5oZWlnaHQgKz0gMjtcbiAgICB0aGlzLmNsZWFyV2VhcG9uKCk7XG4gIH1cblxuICBkb0FuaW1hdGUodGltZSwgYW5pbWF0aW9uVHlwZSkge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IGFuaW1hdGlvblR5cGUuYmluZCh0aGlzKTtcbiAgICBsZXQgcmVxdWVzdElEO1xuICAgIGZ1bmN0aW9uIGZyYW1lKCkge1xuICAgICAgYW5pbWF0aW9uKCk7XG4gICAgICByZXF1ZXN0SUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xuICAgIH1cbiAgICByZXF1ZXN0SUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xuXG4gICAgVXRpbHMucGF1c2UodGltZSkudGhlbigoKSA9PiB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0SUQpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF0dGFjaztcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IHBsYXllckNvbmZpZyBmcm9tICcuLi9jb25maWdzL3BsYXllckNvbmZpZyc7XG5pbXBvcnQgd2VhcG9uQ29uZmlnIGZyb20gJy4uL2NvbmZpZ3Mvd2VhcG9uQ29uZmlnJztcbmltcG9ydCBVdGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgQXR0YWNrIGZyb20gJy4vYXR0YWNrJztcblxuY2xhc3MgSGVybyBleHRlbmRzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5jcmVhdGVCb2R5UGFydHMoKTtcbiAgICB0aGlzLnN0YXJ0TW92ZSgpO1xuICB9XG5cbiAgY3JlYXRlQm9keVBhcnRzKCkge1xuICAgIGNvbnN0IGhlcm9QYXJ0cyA9IHBsYXllckNvbmZpZy5oZXJvLnNwcml0ZXM7XG5cbiAgICBmb3IgKGNvbnN0IHBhcnQgaW4gaGVyb1BhcnRzKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhlcm9QYXJ0cywgcGFydCkpIHtcbiAgICAgICAgdGhpcy5ib2R5UGFydHNbcGFydF0gPSBIZXJvLmNyZWF0ZUltYWdlKGhlcm9QYXJ0c1twYXJ0XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzdG9yZUhlYWxzZSgpIHtcbiAgICB0aGlzLmhlYWxzZSA9IDEwMDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVJbWFnZShwYXJhbXMpIHtcbiAgICBjb25zdCBib2R5UGFydCA9IHt9O1xuICAgIGNvbnN0IGltZ0VsZW0gPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWdFbGVtLnNyYyA9IHBhcmFtcy5wYXRoO1xuICAgIGJvZHlQYXJ0LmltZyA9IGltZ0VsZW07XG4gICAgY29uc3Qge1xuICAgICAgeCwgeSwgd2lkdGgsIGhlaWdodCxcbiAgICB9ID0gcGFyYW1zLm9wdGlvbnM7XG4gICAgYm9keVBhcnQub3B0aW9ucyA9IHtcbiAgICAgIHgsIHksIHdpZHRoLCBoZWlnaHQsXG4gICAgfTtcbiAgICByZXR1cm4gYm9keVBhcnQ7XG4gIH1cblxuICBtb3ZlQm9keVBhcnRzKCkge1xuICAgIHRoaXMubW92ZUhlYWQoKTtcbiAgICB0aGlzLm1vdmVIYW5kKCdoYW5kUmlnaHQnKTtcbiAgICB0aGlzLm1vdmVIYW5kKCdoYW5kTGVmdCcpO1xuICAgIHRoaXMubW92ZUxlZygnbGVnUmlnaHQnKTtcbiAgICB0aGlzLm1vdmVMZWcoJ2xlZ0xlZnQnKTtcbiAgfVxuXG4gIHNob3dBdHRhY2tBbmltYXRpb24oKSB7XG4gICAgY29uc3QgYXR0YWNrID0gbmV3IEF0dGFjayh0aGlzLmNvbnRleHQsIHRydWUpO1xuICAgIGNvbnN0IHdlYXBvbiA9IFV0aWxzLmNob29zZVJhbmRvbUVsZW0od2VhcG9uQ29uZmlnLmhlcm9XZWFwb24pO1xuICAgIGF0dGFjay5kcmF3QXR0YWNrKHdlYXBvbik7XG4gIH1cblxuICBzaG93SGVhbGluZ0FuaW1hdGlvbigpIHtcbiAgICBjb25zdCBhdHRhY2sgPSBuZXcgQXR0YWNrKHRoaXMuY29udGV4dCk7XG4gICAgY29uc3Qgd2VhcG9uID0gVXRpbHMuY2hvb3NlUmFuZG9tRWxlbSh3ZWFwb25Db25maWcuaGVhbGluZyk7XG4gICAgYXR0YWNrLmRyYXdIZWFsaW5nKHdlYXBvbik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVybztcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBBdHRhY2sgZnJvbSAnLi9hdHRhY2snO1xuaW1wb3J0IHdlYXBvbkNvbmZpZyBmcm9tICcuLi9jb25maWdzL3dlYXBvbkNvbmZpZyc7XG5pbXBvcnQgcGxheWVyQ29uZmlnIGZyb20gJy4uL2NvbmZpZ3MvcGxheWVyQ29uZmlnJztcblxuY2xhc3MgTW9uc3RlciBleHRlbmRzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgICB0aGlzLmhlYWRTcHJpdGVzID0gbnVsbDtcbiAgICB0aGlzLk1JTl9EQU1BR0UgPSAxO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmNyZWF0ZUJvZHlQYXJ0cygpO1xuICAgIHRoaXMuc3RhcnRNb3ZlKCk7XG4gICAgdGhpcy5oZWFkU3ByaXRlcyA9IHRoaXMuZGVmaW5lSGVhZFNwcml0ZSgpO1xuICB9XG5cbiAgZ2VuZXJhdGVEYW1hZ2UodmFsdWUpIHtcbiAgICByZXR1cm4gVXRpbHMuZ2V0UmFuZG9uVmFsdWUodGhpcy5NSU5fREFNQUdFLCB2YWx1ZSk7XG4gIH1cblxuICBjcmVhdGVCb2R5UGFydHMoKSB7XG4gICAgY29uc3QgbW9uc3RlclBhcnRzID0gcGxheWVyQ29uZmlnLm1vbnN0ZXIuc3ByaXRlcztcblxuICAgIGZvciAoY29uc3QgcGFydCBpbiBtb25zdGVyUGFydHMpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9uc3RlclBhcnRzLCBwYXJ0KSkge1xuICAgICAgICB0aGlzLmJvZHlQYXJ0c1twYXJ0XSA9IE1vbnN0ZXIuY3JlYXRlSW1hZ2UobW9uc3RlclBhcnRzW3BhcnRdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlSW1hZ2UocGFyYW1zKSB7XG4gICAgY29uc3QgYm9keVBhcnQgPSB7fTtcbiAgICBjb25zdCBpbWdFbGVtID0gbmV3IEltYWdlKCk7XG4gICAgaW1nRWxlbS5zcmMgPSBVdGlscy5jaG9vc2VSYW5kb21FbGVtKHBhcmFtcy5wYXRoKTtcbiAgICBib2R5UGFydC5pbWcgPSBpbWdFbGVtO1xuXG4gICAgY29uc3Qge1xuICAgICAgeCwgeSwgd2lkdGgsIGhlaWdodCxcbiAgICB9ID0gcGFyYW1zLm9wdGlvbnM7XG4gICAgYm9keVBhcnQub3B0aW9ucyA9IHtcbiAgICAgIHgsIHksIHdpZHRoLCBoZWlnaHQsXG4gICAgfTtcblxuICAgIHJldHVybiBib2R5UGFydDtcbiAgfVxuXG4gIGRlZmluZUhlYWRTcHJpdGUoKSB7XG4gICAgY29uc3QgYXJyT2ZTZXRzID0gcGxheWVyQ29uZmlnLm1vbnN0ZXIuc3ByaXRlcy5oZWFkLnNldE9mUGF0aDtcbiAgICBjb25zdCBjdXJyZW50SW1nID0gdGhpcy5ib2R5UGFydHMuaGVhZC5pbWcuc3JjO1xuICAgIGNvbnN0IHBhcnRPZlVybCA9IGN1cnJlbnRJbWcubWF0Y2goLyhcXC8oW2Etel0rLT9cXGQrKSkrLnBuZyQvKTtcbiAgICBjb25zdCBzZXQgPSBhcnJPZlNldHMuZmluZChpdGVtID0+IGl0ZW0uZmluZChlbGVtID0+IGVsZW0uZW5kc1dpdGgocGFydE9mVXJsWzBdKSkpO1xuICAgIHJldHVybiBzZXQ7XG4gIH1cblxuICBtb3ZlTW91dGgoKSB7XG4gICAgY29uc3QgaW1nRWxlbSA9IG5ldyBJbWFnZSgpO1xuICAgIGxldCBpbWdOdW1iZXIgPSAwO1xuICAgIGlmIChNYXRoLmFicyh0aGlzLm1vdmVWYWx1ZSkgPT09IDIpIHtcbiAgICAgIGltZ051bWJlciA9IDE7XG4gICAgfVxuICAgIGltZ0VsZW0uc3JjID0gdGhpcy5oZWFkU3ByaXRlc1tpbWdOdW1iZXJdO1xuICAgIHRoaXMuYm9keVBhcnRzLmhlYWQuaW1nID0gaW1nRWxlbTtcbiAgfVxuXG4gIG1vdmVCb2R5UGFydHMoKSB7XG4gICAgdGhpcy5tb3ZlSGVhZCgpO1xuICAgIHRoaXMubW92ZU1vdXRoKCk7XG4gICAgdGhpcy5tb3ZlSGFuZCgnaGFuZFJpZ2h0Jyk7XG4gICAgdGhpcy5tb3ZlSGFuZCgnaGFuZExlZnQnKTtcbiAgICB0aGlzLm1vdmVMZWcoJ2xlZ1JpZ2h0Jyk7XG4gICAgdGhpcy5tb3ZlTGVnKCdsZWdMZWZ0Jyk7XG4gIH1cblxuICBzaG93QXR0YWNrQW5pbWF0aW9uKCkge1xuICAgIGNvbnN0IGF0dGFjayA9IG5ldyBBdHRhY2sodGhpcy5jb250ZXh0LCBmYWxzZSk7XG4gICAgY29uc3Qgd2VhcG9uID0gVXRpbHMuY2hvb3NlUmFuZG9tRWxlbSh3ZWFwb25Db25maWcubW9uc3RlcldlYXBvbik7XG4gICAgYXR0YWNrLmRyYXdBdHRhY2sod2VhcG9uKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb25zdGVyO1xuIiwiaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzJztcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWUgfHwgJ1Vua25vd24gUGxheWVyJztcbiAgICB0aGlzLmhlYWxzZSA9IDEwMDtcbiAgICB0aGlzLmJvZHlQYXJ0cyA9IHt9O1xuICAgIHRoaXMubW92ZVZhbHVlID0gMDtcbiAgICB0aGlzLm1vdmVVcCA9IHRydWU7XG4gICAgdGhpcy5hbXBsaXR1ZGUgPSAyO1xuICAgIHRoaXMuaW50ZXJ2YWxJRCA9IG51bGw7XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgfVxuXG4gIGNsZWFyUGxheWVyKCkge1xuICAgIGZvciAoY29uc3QgcGFydCBpbiB0aGlzLmJvZHlQYXJ0cykge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmJvZHlQYXJ0cywgcGFydCkpIHtcbiAgICAgICAgY29uc3QgcGFydEltZyA9IHRoaXMuYm9keVBhcnRzW3BhcnRdLmltZztcbiAgICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5ib2R5UGFydHNbcGFydF0ub3B0aW9ucztcblxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHBhcnRJbWcsIHBhcmFtcy54LCBwYXJhbXMueSwgcGFyYW1zLndpZHRoLCBwYXJhbXMuaGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVQbGF5ZXIoYW1wbGl0dWRlKSB7XG4gICAgaWYgKHRoaXMubW92ZVVwKSB7XG4gICAgICB0aGlzLm1vdmVWYWx1ZSArPSAxO1xuICAgICAgaWYgKHRoaXMubW92ZVZhbHVlID49IGFtcGxpdHVkZSkge1xuICAgICAgICB0aGlzLm1vdmVVcCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vdmVWYWx1ZSAtPSAxO1xuICAgICAgaWYgKHRoaXMubW92ZVZhbHVlIDw9IC1hbXBsaXR1ZGUpIHtcbiAgICAgICAgdGhpcy5tb3ZlVXAgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm1vdmVCb2R5UGFydHMoKTtcbiAgfVxuXG4gIHN0YXJ0TW92ZSgpIHtcbiAgICB0aGlzLmludGVydmFsSUQgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVBsYXllci5iaW5kKHRoaXMsIHRoaXMuYW1wbGl0dWRlKSwgMTQwKTtcbiAgfVxuXG4gIHN0b3BNb3ZlKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElEKTtcbiAgfVxuXG4gIG1vdmVIYW5kKGhhbmQpIHtcbiAgICBjb25zdCBoYW5kQ29vcmRzID0gdGhpcy5ib2R5UGFydHNbaGFuZF0ub3B0aW9ucztcbiAgICBpZiAoaGFuZCA9PT0gJ2hhbmRSaWdodCcpIHtcbiAgICAgIGhhbmRDb29yZHMueSAtPSB0aGlzLm1vdmVWYWx1ZTtcbiAgICAgIGhhbmRDb29yZHMueCAtPSB0aGlzLm1vdmVWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGFuZENvb3Jkcy55ICs9IHRoaXMubW92ZVZhbHVlO1xuICAgICAgaGFuZENvb3Jkcy54ICs9IHRoaXMubW92ZVZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIG1vdmVIZWFkKCkge1xuICAgIGNvbnN0IGhlYWRDb29yZHMgPSB0aGlzLmJvZHlQYXJ0cy5oZWFkLm9wdGlvbnM7XG4gICAgaGVhZENvb3Jkcy54ICs9IHRoaXMubW92ZVZhbHVlO1xuICB9XG5cbiAgbW92ZUxlZyhsZWcpIHtcbiAgICBjb25zdCBsZWdDb29yZHMgPSB0aGlzLmJvZHlQYXJ0c1tsZWddLm9wdGlvbnM7XG4gICAgaWYgKGxlZyA9PT0gJ2xlZ1JpZ2h0Jykge1xuICAgICAgbGVnQ29vcmRzLnkgLT0gdGhpcy5tb3ZlVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZ0Nvb3Jkcy55ICs9IHRoaXMubW92ZVZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGF0dGFja0VuZW15KHBlcnNvbiwgZGFtYWdlKSB7XG4gICAgY29uc3QgZW5lbXkgPSBwZXJzb247XG4gICAgZW5lbXkuaGVhbHNlIC09IGRhbWFnZTtcbiAgICBpZiAoZW5lbXkuaGVhbHNlIDwgMCkge1xuICAgICAgZW5lbXkuaGVhbHNlID0gMDtcbiAgICB9XG4gICAgdGhpcy5zaG93QXR0YWNrQW5pbWF0aW9uKHRoaXMuY29udGV4dCk7XG4gIH1cblxuICBoZWFsWW91cnNlbGYocmVjb3ZlcnkpIHtcbiAgICB0aGlzLmhlYWxzZSA9IHRoaXMuaGVhbHNlICsgcmVjb3Zlcnk7XG4gICAgaWYgKHRoaXMuaGVhbHNlID4gMTAwKSB7XG4gICAgICB0aGlzLmhlYWxzZSA9IDEwMDtcbiAgICB9XG4gICAgdGhpcy5zaG93SGVhbGluZ0FuaW1hdGlvbigpO1xuICB9XG5cbiAgc2hvd0RlYXRoQW5pbWF0aW9uKCkge1xuICAgIGNvbnN0IGludGVydmFsSUQgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZURlYXRoLmJpbmQodGhpcyksIDEwMDAgLyA2MCk7XG4gICAgVXRpbHMucGF1c2UoMTAwMCkudGhlbigoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgIH0pO1xuICB9XG5cbiAgZmFsbEJvZHlQYXJ0cygpIHtcbiAgICBmb3IgKGNvbnN0IHBhcnQgaW4gdGhpcy5ib2R5UGFydHMpIHtcbiAgICAgIGlmIChwYXJ0ICE9PSAnbGVnTGVmdCcgJiYgcGFydCAhPT0gJ2xlZ1JpZ2h0Jykge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmJvZHlQYXJ0c1twYXJ0XS5vcHRpb25zO1xuICAgICAgICBpZiAocGFyYW1zLnkgPCA0MDApIHtcbiAgICAgICAgICBwYXJhbXMueSArPSA1O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRGVhdGgoKSB7XG4gICAgdGhpcy5mYWxsQm9keVBhcnRzKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY2xhc3MgQmF0dGxlQXJlYSB7XG4gIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLmNhbnZhc0NvbnRleHQgPSBudWxsO1xuICAgIHRoaXMuYmFja2dyb3VuZEltZyA9IG51bGw7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmNhbnZhc0NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjYW52YXMud2lkdGggPSB0aGlzLndpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcblxuICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fY29udGFpbmVyJyk7XG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW52YXMpO1xuICB9XG5cbiAgY2xlYXJCYXR0bGVBcmVhKCkge1xuICAgIHRoaXMuY2FudmFzQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZSgpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbiAgICBjYW52YXMucmVtb3ZlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmF0dGxlQXJlYTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2dhbWVGaWVsZC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2FtZUZpZWxkLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2FtZUZpZWxkLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2dhbWVGaWVsZC50ZW1wbGF0ZSc7XG5pbXBvcnQgZ2FtZUNvbmZpZyBmcm9tICcuLi8uLi9jb25maWdzL2dhbWVDb25maWcnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCAnLi9nYW1lRmllbGQuY3NzJztcblxuY2xhc3MgR2FtZUZpZWxkIHtcbiAgc3RhdGljIGRyYXcoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICBHYW1lRmllbGQuY2hhbmdlQmFja2dyb3VuZCgpO1xuICB9XG5cbiAgc3RhdGljIGNoYW5nZUJhY2tncm91bmQoKSB7XG4gICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19jb250YWluZXInKTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kcyA9IGdhbWVDb25maWcuZ2FtZUJhY2tncm91bmQucGF0aDtcbiAgICBnYW1lQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7VXRpbHMuY2hvb3NlUmFuZG9tRWxlbShiYWNrZ3JvdW5kcyl9JylgO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVGaWVsZDtcbiIsImV4cG9ydCBkZWZhdWx0IGBcbjxzZWN0aW9uIGNsYXNzPVwiZ2FtZV9fY29udGFpbmVyXCI+XG5cbjwvc2VjdGlvbj5cbmA7XG4iLCJjbGFzcyBVdGlscyB7XG4gIHN0YXRpYyBwYXVzZSh0aW1lKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgdGltZSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2VuZXJhdGVNYXRoRXhhbXBsZSgpIHtcbiAgICBjb25zdCBsaXN0T2ZTaWduID0gWycrJywgJy0nLCAnKicsICcvJ107XG4gICAgY29uc3QgeCA9IFV0aWxzLmdldFJhbmRvblZhbHVlKDEsIDEwMCk7XG4gICAgY29uc3QgeSA9IFV0aWxzLmdldFJhbmRvblZhbHVlKDEsIDEwMCk7XG4gICAgY29uc3Qgc2lnbiA9IFV0aWxzLmNob29zZVJhbmRvbUVsZW0obGlzdE9mU2lnbik7XG5cbiAgICBjb25zdCBtYXRoRXhhbXBsZSA9IGAke3h9ICR7c2lnbn0gJHt5fSA9YDtcblxuICAgIGNvbnN0IGFuc3dlciA9IFV0aWxzLnNvbHZlTWF0aEV4YW1wbGUoeCwgeSwgc2lnbik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZXhhbXBsZTogbWF0aEV4YW1wbGUsXG4gICAgICBhbnN3ZXIsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBzb2x2ZU1hdGhFeGFtcGxlKHgsIHksIHNpZ24pIHtcbiAgICBsZXQgYW5zd2VyO1xuICAgIHN3aXRjaCAoc2lnbikge1xuICAgICAgY2FzZSAnKyc6XG4gICAgICAgIGFuc3dlciA9IHggKyB5O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJy0nOlxuICAgICAgICBhbnN3ZXIgPSB4IC0geTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcqJzpcbiAgICAgICAgYW5zd2VyID0geCAqIHk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnLyc6XG4gICAgICAgIGFuc3dlciA9IHggLyB5O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFuc3dlciA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICBzdGF0aWMgY2hvb3NlUmFuZG9tRWxlbShsaXN0T2ZFbGVtcykge1xuICAgIGNvbnN0IGxlbmd0aCA9IGxpc3RPZkVsZW1zLmxlbmd0aDtcbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbmd0aCk7XG4gICAgY29uc3QgZWxlbSA9IGxpc3RPZkVsZW1zW3JhbmRvbUluZGV4XTtcbiAgICByZXR1cm4gZWxlbTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRSYW5kb25WYWx1ZShtaW4sIG1heCkge1xuICAgIGNvbnN0IHJhbmQgPSBtaW4gLSAwLjUgKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHJhbmQpO1xuICB9XG5cbiAgc3RhdGljIHNhdmVHYW1lUmVzdWx0KHBsYXllck5hbWUsIGxldmVsTnVtYmVyKSB7XG4gICAgY29uc3QgZ2FtZVNlc3Npb24gPSB7XG4gICAgICBwbGF5ZXI6IHBsYXllck5hbWUsXG4gICAgICBsZXZlbDogbGV2ZWxOdW1iZXIsXG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3VsdHMgPSBVdGlscy5sb2FkR2FtZVJlc3VsdHMoKSB8fCBbXTtcbiAgICByZXN1bHRzLnB1c2goZ2FtZVNlc3Npb24pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY29yZVRhYmxlJywgSlNPTi5zdHJpbmdpZnkocmVzdWx0cykpO1xuICB9XG5cbiAgc3RhdGljIGxvYWRHYW1lUmVzdWx0cygpIHtcbiAgICBjb25zdCByZXN1bHRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlVGFibGUnKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShyZXN1bHRzKTtcbiAgfVxuXG4gIHN0YXRpYyByZWNlaXZlR2FtZVJlc3VsdHMobnVtYmVyT2ZHYW1lcykge1xuICAgIGxldCByZXN1bHRzID0gVXRpbHMubG9hZEdhbWVSZXN1bHRzKCk7XG4gICAgcmVzdWx0cyA9IFV0aWxzLnNvcnRHYW1lUmVzdWx0cyhyZXN1bHRzKTtcbiAgICBjb25zdCBudW1iZXIgPSBudW1iZXJPZkdhbWVzIHx8IHJlc3VsdHMubGVuZ3RoO1xuICAgIHJldHVybiByZXN1bHRzLnNsaWNlKDAsIG51bWJlcik7XG4gIH1cblxuICBzdGF0aWMgc29ydEdhbWVSZXN1bHRzKHJlc3VsdHMpIHtcbiAgICByZXR1cm4gcmVzdWx0cy5zb3J0KChmaXJzdEVsZW0sIHNlY29uZEVsZW0pID0+IHNlY29uZEVsZW0ubGV2ZWwgLSBmaXJzdEVsZW0ubGV2ZWwpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVNvdW5kKHVybCkge1xuICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcbiAgICBhdWRpby5zcmMgPSB1cmw7XG4gICAgYXVkaW8ucGxheSgpO1xuICB9XG5cbiAgc3RhdGljIGRlZmluZVNlbGVjdGVkRWxlbWVudChlbGVtc0xpc3QsIGNsYXNzTmFtZSkge1xuICAgIGxldCBzZWxlY3RlZEJ1dHRvbjtcbiAgICBlbGVtc0xpc3QuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgaWYgKGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgc2VsZWN0ZWRCdXR0b24gPSBlbGVtO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZWxlY3RlZEJ1dHRvbjtcbiAgfVxuXG4gIHN0YXRpYyBzZWxlY3RFbGVtZW50KGVsZW0sIGNsYXNzTmFtZSkge1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9XG5cbiAgc3RhdGljIGRlc2VsZWN0RWxlbWVudChlbGVtLCBjbGFzc05hbWUpIHtcbiAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHN0YXRpYyBzZWxlY3ROZXh0RWxlbWVudChlbGVtc0xpc3QsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IHNlbGVjdGVkRWxlbSA9IFV0aWxzLmRlZmluZVNlbGVjdGVkRWxlbWVudChlbGVtc0xpc3QsIGNsYXNzTmFtZSk7XG4gICAgY29uc3QgZWxlbXNBcnIgPSBBcnJheS5mcm9tKGVsZW1zTGlzdCk7XG4gICAgY29uc3QgZWxlbUluZGV4ID0gZWxlbXNBcnIuaW5kZXhPZihzZWxlY3RlZEVsZW0pO1xuICAgIGNvbnN0IG5leHRFbGVtID0gZWxlbUluZGV4ICsgMTtcblxuICAgIFV0aWxzLmRlc2VsZWN0RWxlbWVudChzZWxlY3RlZEVsZW0sIGNsYXNzTmFtZSk7XG5cbiAgICBpZiAobmV4dEVsZW0gPCBlbGVtc0Fyci5sZW5ndGgpIHtcbiAgICAgIFV0aWxzLnNlbGVjdEVsZW1lbnQoZWxlbXNBcnJbbmV4dEVsZW1dLCBjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBVdGlscy5zZWxlY3RFbGVtZW50KGVsZW1zQXJyWzBdLCBjbGFzc05hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBzZWxlY3RQcmV2RWxlbWVudChlbGVtc0xpc3QsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IHNlbGVjdGVkRWxlbSA9IFV0aWxzLmRlZmluZVNlbGVjdGVkRWxlbWVudChlbGVtc0xpc3QsIGNsYXNzTmFtZSk7XG4gICAgY29uc3QgZWxlbXNBcnIgPSBBcnJheS5mcm9tKGVsZW1zTGlzdCk7XG4gICAgY29uc3QgZWxlbUluZGV4ID0gZWxlbXNBcnIuaW5kZXhPZihzZWxlY3RlZEVsZW0pO1xuICAgIGNvbnN0IHByZXZFbGVtID0gZWxlbUluZGV4IC0gMTtcblxuICAgIFV0aWxzLmRlc2VsZWN0RWxlbWVudChzZWxlY3RlZEVsZW0sIGNsYXNzTmFtZSk7XG5cbiAgICBpZiAocHJldkVsZW0gPCAwKSB7XG4gICAgICBVdGlscy5zZWxlY3RFbGVtZW50KGVsZW1zQXJyW2VsZW1zQXJyLmxlbmd0aCAtIDFdLCBjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBVdGlscy5zZWxlY3RFbGVtZW50KGVsZW1zQXJyW3ByZXZFbGVtXSwgY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXRpbHM7XG4iXSwic291cmNlUm9vdCI6IiJ9