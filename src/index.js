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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nparticlesJS.load('particles-js', '../../assets/particles.json', function() {\r\n  console.log('callback - particles.js config loaded');\r\n});\r\n\r\nconst welcome = document.getElementById(\"welcome-button\");\r\nconst about = document.getElementById(\"nav-about\");\r\nconst qual = document.getElementById(\"nav-qual\");\r\n\r\nwelcome.addEventListener(\"click\", function() {\r\n  document.getElementById(\"about\").scrollIntoView({\r\n    behavior: \"smooth\"\r\n  });\r\n});\r\n\r\nabout.addEventListener(\"click\", function() {\r\n  const about = document.getElementById(\"about\")\r\n  about.scrollIntoView({\r\n    block: \"start\",\r\n    behavior: \"smooth\"\r\n  });\r\n    hamburgerToggle();\r\n});\r\n\r\nqual.addEventListener(\"click\", function() {\r\n  const quals = document.getElementById(\"qualifications\");\r\n  quals.scrollIntoView({\r\n    block: \"start\",\r\n    behavior: \"smooth\"\r\n  });\r\n    hamburgerToggle();\r\n});\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/particles.js":
/*!**********************************!*\
  !*** ./src/scripts/particles.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/scripts/particles.js?");

/***/ }),

/***/ "./src/scripts/script.js":
/*!*******************************!*\
  !*** ./src/scripts/script.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const hamburger = document.getElementById(\"hamburger\");\r\nconst navLinks = document.querySelectorAll(\".nav-link\");\r\nconst navbar = document.getElementById(\"navbar\");\r\nconst contacts = document.querySelectorAll(\".contact-right\");\r\nlet aScrollPosition = window.pageYOffset;\r\nconst socialBar = document.getElementById(\"social-bar\");\r\n\r\nconst hamburgerToggle = () => {\r\n  hamburger.classList.toggle(\"change\");\r\n  navbar.classList.toggle(\"active\");\r\n};\r\n\r\nhamburger.addEventListener(\"click\", hamburgerToggle);\r\n\r\nnavLinks.forEach(link => {\r\n  link.onmouseover = (event) => {\r\n    navLinks.forEach(link => {\r\n      link.style.opacity = \".15\";\r\n      event.target.style.opacity = \"1\";\r\n      event.target.classList.add(\"grow\");\r\n    })\r\n  }\r\n});\r\n\r\nnavLinks.forEach(link => {\r\n  link.onmouseleave = (event) => {\r\n    navLinks.forEach(link => {\r\n      link.style.opacity = \"1\";\r\n      event.target.classList.remove(\"grow\");\r\n    })\r\n  }\r\n});\r\n\r\ndocument.getElementById(\"nav-contact\").addEventListener(\"click\", function() {\r\n  document.getElementById('contact').scrollIntoView({ \r\n    behavior: \"smooth\",\r\n  });\r\n    hamburgerToggle();\r\n});\r\n\r\ncontacts.forEach(link => {\r\n  link.onmouseover = (event) => {\r\n    event.target.classList.add(\"grow\");\r\n  }\r\n});\r\n\r\ncontacts.forEach(link => {\r\n  link.onmouseleave = (event) => {\r\n    event.target.classList.remove(\"grow\")\r\n  }\r\n});\r\n\r\nwindow.onscroll = function() {\r\n  let bScrollPosition = window.pageYOffset;\r\n  if (aScrollPosition > bScrollPosition) {\r\n    socialBar.style.bottom = \"0\";\r\n  } else {\r\n    socialBar.style.bottom = \"-50px\";\r\n  }\r\n  aScrollPosition = bScrollPosition;\r\n  socialBar.style.display = \"inline\";\r\n}\n\n//# sourceURL=webpack:///./src/scripts/script.js?");

/***/ }),

/***/ 0:
/*!************************************************************************************!*\
  !*** multi ./src/scripts/script.js ./src/scripts/particles ./src/scripts/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/scripts/script.js */\"./src/scripts/script.js\");\n__webpack_require__(/*! ./src/scripts/particles */\"./src/scripts/particles.js\");\nmodule.exports = __webpack_require__(/*! ./src/scripts/index.js */\"./src/scripts/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/script.js_./src/scripts/particles_./src/scripts/index.js?");

/***/ })

/******/ });