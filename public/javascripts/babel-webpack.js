/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/component/style.css":
/*!*********************************!*\
  !*** ./src/component/style.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/component/style.css");


var options = {};
options.insert = "head";
options.singleton = false;
var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/addbutton.js":
/*!************************************!*\
  !*** ./src/component/addbutton.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addButton": () => (/* binding */ addButton),
/* harmony export */   "addTaskButton": () => (/* binding */ addTaskButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-url.js */ "./src/component/api-url.js");
/* harmony import */ var _handleerror_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleerror.js */ "./src/component/handleerror.js");


var $addButton = document.getElementById("add");
var $todoMake = document.getElementsByClassName("todoMake")[0];
var $addTaskbutton = document.getElementById("addTaskbutton");



var addButton = function addButton() {
  $addButton.addEventListener("click", /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var todoObject1, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            $addButton.disabled = true;
            todoObject1 = {
              What: $todoMake.querySelector('[name="What"]').value,
              Place: $todoMake.querySelector('[name="Where"]').value,
              Untilwhen: $todoMake.querySelector('[name="Untilwhen"]').value
            };
            _context.next = 4;
            return fetch(_api_url_js__WEBPACK_IMPORTED_MODULE_2__.apiUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(todoObject1)
            });

          case 4:
            res = _context.sent;
            (0,_handleerror_js__WEBPACK_IMPORTED_MODULE_3__.handleError)(res);
            $addButton.disabled = false; // $addButton.removeAttribute("disabled");

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
};

var addTaskButton = function addTaskButton() {
  $addTaskbutton.addEventListener("click", function () {
    $todoMake.style.display = "block";
    $addTaskbutton.style.display = "none";
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  });
};



/***/ }),

/***/ "./src/component/api-url.js":
/*!**********************************!*\
  !*** ./src/component/api-url.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiUrl": () => (/* binding */ apiUrl)
/* harmony export */ });
var apiUrl = "https://todoapp-satake.herokuapp.com/api/v1";


/***/ }),

/***/ "./src/component/backbutton.js":
/*!*************************************!*\
  !*** ./src/component/backbutton.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "backButton": () => (/* binding */ backButton)
/* harmony export */ });
var $back = document.getElementById("back");
var $form = document.getElementsByClassName("form");
var $todoEdit = document.getElementsByClassName("todoEdit")[0];
var $back2 = document.getElementById("back2");
var $todoMake = document.getElementsByClassName("todoMake")[0];
var $addTaskbutton = document.getElementById("addTaskbutton");

var backButton = function backButton() {
  // 戻るボタン（Todo作成欄）
  $back.addEventListener("click", function () {
    $todoMake.style.display = "none";
    $addTaskbutton.style.display = "block";
    Array.prototype.forEach.call($form, function (element) {
      element.value = "";
    }); // $form.value = "";
  }); // 戻るボタン2（Todo編集欄）

  $back2.addEventListener("click", function () {
    $todoEdit.style.display = "none";
    $addTaskbutton.style.display = "block";
  });
};



/***/ }),

/***/ "./src/component/deletebutton.js":
/*!***************************************!*\
  !*** ./src/component/deletebutton.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteButton": () => (/* binding */ deleteButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-url.js */ "./src/component/api-url.js");
/* harmony import */ var _handleerror_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleerror.js */ "./src/component/handleerror.js");


var $deleteButton = document.getElementsByName("delete");



var deleteButton = function deleteButton() {
  var handlerIndex2 = 0;

  while (handlerIndex2 < $deleteButton.length) {
    $deleteButton[handlerIndex2].addEventListener("click", /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
        var number, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.target.disabled = true;
                number = e.target.value;
                _context.next = 4;
                return fetch(_api_url_js__WEBPACK_IMPORTED_MODULE_2__.apiUrl + "/".concat(number), {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json"
                  }
                });

              case 4:
                res = _context.sent;
                (0,_handleerror_js__WEBPACK_IMPORTED_MODULE_3__.handleError)(res);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    handlerIndex2++;
  }
};



/***/ }),

/***/ "./src/component/editbutton.js":
/*!*************************************!*\
  !*** ./src/component/editbutton.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editButton": () => (/* binding */ editButton)
/* harmony export */ });
// 編集ボタンのイベント
var $listIndex = document.getElementsByName("edit2");
var $addTaskbutton = document.getElementById("addTaskbutton");
var $todoEdit = document.getElementsByClassName("todoEdit")[0];
var $rescheduleNumber = document.getElementsByName("reschedule")[0];
var $form2 = document.getElementsByClassName("form2");
var $todoMake = document.getElementsByClassName("todoMake")[0];

var editButton = function editButton(users) {
  var handlerIndex2 = 0;

  while (handlerIndex2 < $listIndex.length) {
    $listIndex[handlerIndex2].addEventListener("click", function (e) {
      window.scrollTo({
        top: 0,
        behavior: "auto"
      });
      var fff = e.target.value;
      $addTaskbutton.style.display = "none";
      $todoEdit.style.display = "block";
      $todoMake.style.display = "none";
      $rescheduleNumber.value = fff; // console.log(fff);

      var target = users.find(function (number) {
        return "".concat(number.id) === fff;
      }); // console.log(target);

      for (var i = 0; i < $form2.length; i++) {
        var users2 = [target.What, target.Untilwhen, target.Place];
        $form2[i].value = users2[i];
      }
    });
    handlerIndex2++;
  }
};



/***/ }),

/***/ "./src/component/handleerror.js":
/*!**************************************!*\
  !*** ./src/component/handleerror.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleError": () => (/* binding */ handleError)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _listusers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listusers.js */ "./src/component/listusers.js");
/* harmony import */ var _api_url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-url.js */ "./src/component/api-url.js");


var $todolist = document.getElementsByClassName("list");
var $todoMake = document.getElementsByClassName("todoMake")[0];
var $addTaskbutton = document.getElementById("addTaskbutton");
var $form = document.getElementsByClassName("form");
var $todoEdit = document.getElementsByClassName("todoEdit")[0];



var remakeList = function remakeList() {
  var handlerIndex = 0;

  while (handlerIndex < $todolist.length) {
    $todolist[0].remove(); // handlerIndex++;
  }

  (0,_listusers_js__WEBPACK_IMPORTED_MODULE_2__.listUsers)(_api_url_js__WEBPACK_IMPORTED_MODULE_3__.apiUrl);
};

var handleError = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(res) {
    var resJson;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return res.json();

          case 2:
            resJson = _context.sent;
            _context.t0 = res.status;
            _context.next = _context.t0 === 201 ? 6 : _context.t0 === 202 ? 11 : _context.t0 === 203 ? 15 : _context.t0 === 400 ? 17 : _context.t0 === 500 ? 19 : 21;
            break;

          case 6:
            // postメソッド
            remakeList();
            $todoMake.style.display = "none";
            $addTaskbutton.style.display = "block";
            Array.prototype.forEach.call($form, function (element) {
              element.value = "";
            });
            return _context.abrupt("break", 21);

          case 11:
            // putメソッド
            remakeList();
            $todoEdit.style.display = "none";
            $addTaskbutton.style.display = "block";
            return _context.abrupt("break", 21);

          case 15:
            // deleteメソッド
            remakeList();
            return _context.abrupt("break", 21);

          case 17:
            alert(resJson.error);
            return _context.abrupt("break", 21);

          case 19:
            alert(resJson.error);
            return _context.abrupt("break", 21);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleError(_x) {
    return _ref.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./src/component/listusers.js":
/*!************************************!*\
  !*** ./src/component/listusers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listUsers": () => (/* binding */ listUsers),
/* harmony export */   "getUsers": () => (/* binding */ getUsers)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _makenode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makenode.js */ "./src/component/makenode.js");
/* harmony import */ var _editbutton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editbutton.js */ "./src/component/editbutton.js");
/* harmony import */ var _deletebutton_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deletebutton.js */ "./src/component/deletebutton.js");


var $todoMake = document.getElementsByClassName("todoMake")[0];


 // 関数 データのやり取り

function getUsers(_x) {
  return _getUsers.apply(this, arguments);
}

function _getUsers() {
  _getUsers = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(x) {
    var res, users;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch(x);

          case 2:
            res = _context2.sent;
            _context2.next = 5;
            return res.json();

          case 5:
            users = _context2.sent;
            return _context2.abrupt("return", users);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getUsers.apply(this, arguments);
}

var listUsers = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(x) {
    var users, handlerIndex;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getUsers(x);

          case 2:
            users = _context.sent;
            document.getElementById("style").style.display = "block";
            $todoMake.style.display = "none"; //  DOM操作

            handlerIndex = 0;

            if (!(users == null)) {
              while (handlerIndex < users.length) {
                (0,_makenode_js__WEBPACK_IMPORTED_MODULE_2__.makeNode)(users[handlerIndex]);
                handlerIndex++;
              }
            }

            (0,_editbutton_js__WEBPACK_IMPORTED_MODULE_3__.editButton)(users);
            (0,_deletebutton_js__WEBPACK_IMPORTED_MODULE_4__.deleteButton)();

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function listUsers(_x2) {
    return _ref.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./src/component/makenode.js":
/*!***********************************!*\
  !*** ./src/component/makenode.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeNode": () => (/* binding */ makeNode)
/* harmony export */ });
var $todoLists = document.getElementsByClassName("todoList")[0];
var $template = document.getElementById("template");
var dt = new Date();
var month = dt.getMonth() + 1;
var mmonth = "0" + month;
var date = "0" + dt.getDate();
var today = dt.getFullYear() + "-" + mmonth.slice(-2) + "-" + date.slice(-2);

function makeNode(user) {
  // 入力欄作成
  var $list = document.createElement("div");
  var $Untilwhen = document.createElement("span");
  $Untilwhen.textContent = "Until when:" + user.Untilwhen;
  var $Where = document.createElement("span");
  $Where.id = "span";
  $Where.textContent = "Where:" + user.Place;
  var $What = document.createElement("div");
  $What.textContent = "What:" + user.What;
  $list.appendChild($Untilwhen);
  $list.appendChild($Where);
  $list.appendChild($What);

  if (user.Untilwhen < today) {
    $list.style.color = "red";
  } // ボタン作成


  var clone = $template.content.cloneNode(true);
  clone.querySelector('[name="edit2"]').value = user.id;
  clone.querySelector('[name="delete"]').value = user.id;
  $list.appendChild(clone); // 水平線作成

  var $hr = document.createElement("hr");
  $list.appendChild($hr);
  $list.className = "list"; // $todoListsノードに子ノードとして追加

  $todoLists.appendChild($list);
}



/***/ }),

/***/ "./src/component/reschedulebutton.js":
/*!*******************************************!*\
  !*** ./src/component/reschedulebutton.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rescheduleButton": () => (/* binding */ rescheduleButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-url.js */ "./src/component/api-url.js");
/* harmony import */ var _handleerror_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleerror.js */ "./src/component/handleerror.js");


var $rescheduleButton = document.getElementsByName("reschedule")[0];
var $todoEdit = document.getElementsByClassName("todoEdit")[0];



var rescheduleButton = function rescheduleButton() {
  $rescheduleButton.addEventListener("click", /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var todoObject1, number, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              $rescheduleButton.disabled = true;
              todoObject1 = {
                What: $todoEdit.querySelector('[name="What"]').value,
                Place: $todoEdit.querySelector('[name="Where"]').value,
                Untilwhen: $todoEdit.querySelector('[name="Untilwhen"]').value
              };
              number = e.target.value;
              _context.next = 5;
              return fetch(_api_url_js__WEBPACK_IMPORTED_MODULE_2__.apiUrl + "/".concat(number), {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(todoObject1)
              });

            case 5:
              res = _context.sent;
              (0,_handleerror_js__WEBPACK_IMPORTED_MODULE_3__.handleError)(res);
              $rescheduleButton.disabled = false;

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
};



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/component/style.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/component/style.css ***!
  \***************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n\tbackground-color: rgb(180, 255, 220);\n\t/* font: 14px \"Lucida Grande\", Helvetica, Arial, sans-serif; */\n}\n\n#username {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\tmargin-top: 5vh;\n\tfont-size: 20px;\n}\n\ninput[name=\"What\"] {\n\twidth: 30vw;\n}\n\n#header {\n\tfont-size: 40px;\n\tmargin-bottom: 0vh;\n\tborder-radius: 11px;\n}\n\n#addTaskbutton > div > button {\n\tmargin-top: 5vh;\n\tcolor: whitesmoke;\n\tfont-size: 20px;\n}\n\n.todoMake {\n\tfont-size: 20px;\n}\n\n.todoMake div:first-of-type {\n\tfont-size: 28px;\n}\n\n.todoMake > div > button {\n\tfont-size: 20px;\n}\n\n.todoEdit {\n\tfont-size: 20px;\n}\n\n.todoEdit div:first-of-type {\n\tfont-size: 28px;\n}\n\n.todoEdit > div > button {\n\tfont-size: 20px;\n}\n\n.todoList {\n\tfont-size: 20px;\n\tmargin-top: 10vh;\n}\n\n#list {\n\tfont-size: 28px;\n}\n\n.button > button {\n\tfont-size: 20px;\n}\n\nhr:not([size]) {\n\t/* border: none; */\n\tcolor: rgb(44, 192, 250);\n\theight: 4px;\n\t/* border-style: dashed; */\n}\n\n#span {\n\tmargin-left: 2vw;\n}\n\n#logout {\n\tfont-size: 20px;\n}\n\n#style {\n\tmin-height: 100vh;\n\tbackground-color: white;\n\tmargin-top: 0px;\n\tmargin-left: 7vw;\n\tmargin-right: 7vw;\n\tmargin-bottom: 0px;\n}\n\n@media screen and (max-width: 1024px) {\n\t#username {\n\t\tdisplay: flex;\n\t\tjustify-content: flex-end;\n\t\tmargin-top: 3vh;\n\t\tfont-size: 20px;\n\t}\n\n\tinput[name=\"What\"] {\n\t\twidth: 50vw;\n\t}\n\t#header {\n\t\tfont-size: 40px;\n\t\tmargin-bottom: 0vh;\n\t}\n\n\t#addTaskbutton > div > button {\n\t\tmargin-top: 3vh;\n\t\tcolor: whitesmoke;\n\t\tfont-size: 20px;\n\t}\n\n\t.todoMake {\n\t\tfont-size: 20px;\n\t}\n\n\t.todoMake div:first-of-type {\n\t\tfont-size: 28px;\n\t}\n\n\t.todoMake > div > button {\n\t\tfont-size: 20px;\n\t}\n\n\t.todoEdit {\n\t\tfont-size: 20px;\n\t}\n\n\t.todoEdit div:first-of-type {\n\t\tfont-size: 28px;\n\t}\n\n\t.todoEdit > div > button {\n\t\tfont-size: 20px;\n\t}\n\n\t.todoList {\n\t\tfont-size: 20px;\n\t\tmargin-top: 5vh;\n\t}\n\n\t#list {\n\t\tfont-size: 28px;\n\t}\n\n\t.button > button {\n\t\tfont-size: 20px;\n\t}\n\n\thr:not([size]) {\n\t\t/* border: none; */\n\t\tcolor: rgb(44, 192, 250);\n\t\theight: 4px;\n\t\t/* border-style: dashed; */\n\t}\n\t#span {\n\t\tmargin-left: 2vw;\n\t}\n\n\t#logout {\n\t\tfont-size: 20px;\n\t}\n\n\t#style {\n\t\tmin-height: 100vh;\n\t\tbackground-color: white;\n\t\tmargin-top: 0px;\n\t\tmargin-left: 5vw;\n\t\tmargin-right: 5vw;\n\t\tmargin-bottom: 0px;\n\t}\n}\n\n@media screen and (max-width: 599px) {\n\t#username {\n\t\tdisplay: flex;\n\t\tjustify-content: flex-end;\n\t\tmargin-top: 3vh;\n\t\tfont-size: 18px;\n\t}\n\n\tinput[name=\"What\"] {\n\t\twidth: 90vw;\n\t}\n\t#header {\n\t\tfont-size: 32px;\n\t\tmargin-bottom: 0vh;\n\t}\n\n\t#addTaskbutton > div > button {\n\t\tmargin-top: 3vh;\n\t\tcolor: whitesmoke;\n\t\tfont-size: 18px;\n\t}\n\n\t.todoMake {\n\t\tfont-size: 18px;\n\t}\n\n\t.todoMake div:first-of-type {\n\t\tfont-size: 24px;\n\t}\n\n\t.todoMake > div > button {\n\t\tfont-size: 18px;\n\t\tmargin-top: 3vh;\n\t}\n\n\t.todoEdit {\n\t\tfont-size: 18px;\n\t}\n\n\t.todoEdit div:first-of-type {\n\t\tfont-size: 24px;\n\t}\n\n\t.todoEdit > div > button {\n\t\tfont-size: 18px;\n\t\tmargin-top: 3vh;\n\t}\n\n\t.todoList {\n\t\tfont-size: 18px;\n\t\tmargin-top: 5vh;\n\t}\n\n\t#list {\n\t\tfont-size: 24px;\n\t}\n\n\t.button > button {\n\t\tfont-size: 18px;\n\t}\n\n\thr:not([size]) {\n\t\t/* border: none; */\n\t\tcolor: rgb(44, 192, 250);\n\t\theight: 4px;\n\t\t/* border-style: dashed; */\n\t}\n\n\t#span {\n\t\tmargin-left: 0vw;\n\t\tdisplay: inline-block;\n\t}\n\n\t#logout {\n\t\tfont-size: 18px;\n\t}\n\n\t#style {\n\t\tmin-height: 100vh;\n\t\tbackground-color: white;\n\t\tmargin-top: 0px;\n\t\tmargin-left: 0vw;\n\t\tmargin-right: 0vw;\n\t\tmargin-bottom: 0px;\n\t}\n}\n/* a {\n  color: #00B7FF;\n} */\n", "",{"version":3,"sources":["webpack://./src/component/style.css"],"names":[],"mappings":"AAAA;CACC,oCAAoC;CACpC,8DAA8D;AAC/D;;AAEA;CACC,aAAa;CACb,yBAAyB;CACzB,eAAe;CACf,eAAe;AAChB;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,eAAe;CACf,kBAAkB;CAClB,mBAAmB;AACpB;;AAEA;CACC,eAAe;CACf,iBAAiB;CACjB,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;CACf,gBAAgB;AACjB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,kBAAkB;CAClB,wBAAwB;CACxB,WAAW;CACX,0BAA0B;AAC3B;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,iBAAiB;CACjB,uBAAuB;CACvB,eAAe;CACf,gBAAgB;CAChB,iBAAiB;CACjB,kBAAkB;AACnB;;AAEA;CACC;EACC,aAAa;EACb,yBAAyB;EACzB,eAAe;EACf,eAAe;CAChB;;CAEA;EACC,WAAW;CACZ;CACA;EACC,eAAe;EACf,kBAAkB;CACnB;;CAEA;EACC,eAAe;EACf,iBAAiB;EACjB,eAAe;CAChB;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,eAAe;EACf,eAAe;CAChB;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,kBAAkB;EAClB,wBAAwB;EACxB,WAAW;EACX,0BAA0B;CAC3B;CACA;EACC,gBAAgB;CACjB;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,iBAAiB;EACjB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;CACnB;AACD;;AAEA;CACC;EACC,aAAa;EACb,yBAAyB;EACzB,eAAe;EACf,eAAe;CAChB;;CAEA;EACC,WAAW;CACZ;CACA;EACC,eAAe;EACf,kBAAkB;CACnB;;CAEA;EACC,eAAe;EACf,iBAAiB;EACjB,eAAe;CAChB;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,eAAe;EACf,eAAe;CAChB;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,eAAe;EACf,eAAe;CAChB;;CAEA;EACC,eAAe;EACf,eAAe;CAChB;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,kBAAkB;EAClB,wBAAwB;EACxB,WAAW;EACX,0BAA0B;CAC3B;;CAEA;EACC,gBAAgB;EAChB,qBAAqB;CACtB;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,iBAAiB;EACjB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;CACnB;AACD;AACA;;GAEG","sourcesContent":["body {\n\tbackground-color: rgb(180, 255, 220);\n\t/* font: 14px \"Lucida Grande\", Helvetica, Arial, sans-serif; */\n}\n\n#username {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\tmargin-top: 5vh;\n\tfont-size: 20px;\n}\n\ninput[name=\"What\"] {\n\twidth: 30vw;\n}\n\n#header {\n\tfont-size: 40px;\n\tmargin-bottom: 0vh;\n\tborder-radius: 11px;\n}\n\n#addTaskbutton > div > button {\n\tmargin-top: 5vh;\n\tcolor: whitesmoke;\n\tfont-size: 20px;\n}\n\n.todoMake {\n\tfont-size: 20px;\n}\n\n.todoMake div:first-of-type {\n\tfont-size: 28px;\n}\n\n.todoMake > div > button {\n\tfont-size: 20px;\n}\n\n.todoEdit {\n\tfont-size: 20px;\n}\n\n.todoEdit div:first-of-type {\n\tfont-size: 28px;\n}\n\n.todoEdit > div > button {\n\tfont-size: 20px;\n}\n\n.todoList {\n\tfont-size: 20px;\n\tmargin-top: 10vh;\n}\n\n#list {\n\tfont-size: 28px;\n}\n\n.button > button {\n\tfont-size: 20px;\n}\n\nhr:not([size]) {\n\t/* border: none; */\n\tcolor: rgb(44, 192, 250);\n\theight: 4px;\n\t/* border-style: dashed; */\n}\n\n#span {\n\tmargin-left: 2vw;\n}\n\n#logout {\n\tfont-size: 20px;\n}\n\n#style {\n\tmin-height: 100vh;\n\tbackground-color: white;\n\tmargin-top: 0px;\n\tmargin-left: 7vw;\n\tmargin-right: 7vw;\n\tmargin-bottom: 0px;\n}\n\n@media screen and (max-width: 1024px) {\n\t#username {\n\t\tdisplay: flex;\n\t\tjustify-content: flex-end;\n\t\tmargin-top: 3vh;\n\t\tfont-size: 20px;\n\t}\n\n\tinput[name=\"What\"] {\n\t\twidth: 50vw;\n\t}\n\t#header {\n\t\tfont-size: 40px;\n\t\tmargin-bottom: 0vh;\n\t}\n\n\t#addTaskbutton > div > button {\n\t\tmargin-top: 3vh;\n\t\tcolor: whitesmoke;\n\t\tfont-size: 20px;\n\t}\n\n\t.todoMake {\n\t\tfont-size: 20px;\n\t}\n\n\t.todoMake div:first-of-type {\n\t\tfont-size: 28px;\n\t}\n\n\t.todoMake > div > button {\n\t\tfont-size: 20px;\n\t}\n\n\t.todoEdit {\n\t\tfont-size: 20px;\n\t}\n\n\t.todoEdit div:first-of-type {\n\t\tfont-size: 28px;\n\t}\n\n\t.todoEdit > div > button {\n\t\tfont-size: 20px;\n\t}\n\n\t.todoList {\n\t\tfont-size: 20px;\n\t\tmargin-top: 5vh;\n\t}\n\n\t#list {\n\t\tfont-size: 28px;\n\t}\n\n\t.button > button {\n\t\tfont-size: 20px;\n\t}\n\n\thr:not([size]) {\n\t\t/* border: none; */\n\t\tcolor: rgb(44, 192, 250);\n\t\theight: 4px;\n\t\t/* border-style: dashed; */\n\t}\n\t#span {\n\t\tmargin-left: 2vw;\n\t}\n\n\t#logout {\n\t\tfont-size: 20px;\n\t}\n\n\t#style {\n\t\tmin-height: 100vh;\n\t\tbackground-color: white;\n\t\tmargin-top: 0px;\n\t\tmargin-left: 5vw;\n\t\tmargin-right: 5vw;\n\t\tmargin-bottom: 0px;\n\t}\n}\n\n@media screen and (max-width: 599px) {\n\t#username {\n\t\tdisplay: flex;\n\t\tjustify-content: flex-end;\n\t\tmargin-top: 3vh;\n\t\tfont-size: 18px;\n\t}\n\n\tinput[name=\"What\"] {\n\t\twidth: 90vw;\n\t}\n\t#header {\n\t\tfont-size: 32px;\n\t\tmargin-bottom: 0vh;\n\t}\n\n\t#addTaskbutton > div > button {\n\t\tmargin-top: 3vh;\n\t\tcolor: whitesmoke;\n\t\tfont-size: 18px;\n\t}\n\n\t.todoMake {\n\t\tfont-size: 18px;\n\t}\n\n\t.todoMake div:first-of-type {\n\t\tfont-size: 24px;\n\t}\n\n\t.todoMake > div > button {\n\t\tfont-size: 18px;\n\t\tmargin-top: 3vh;\n\t}\n\n\t.todoEdit {\n\t\tfont-size: 18px;\n\t}\n\n\t.todoEdit div:first-of-type {\n\t\tfont-size: 24px;\n\t}\n\n\t.todoEdit > div > button {\n\t\tfont-size: 18px;\n\t\tmargin-top: 3vh;\n\t}\n\n\t.todoList {\n\t\tfont-size: 18px;\n\t\tmargin-top: 5vh;\n\t}\n\n\t#list {\n\t\tfont-size: 24px;\n\t}\n\n\t.button > button {\n\t\tfont-size: 18px;\n\t}\n\n\thr:not([size]) {\n\t\t/* border: none; */\n\t\tcolor: rgb(44, 192, 250);\n\t\theight: 4px;\n\t\t/* border-style: dashed; */\n\t}\n\n\t#span {\n\t\tmargin-left: 0vw;\n\t\tdisplay: inline-block;\n\t}\n\n\t#logout {\n\t\tfont-size: 18px;\n\t}\n\n\t#style {\n\t\tmin-height: 100vh;\n\t\tbackground-color: white;\n\t\tmargin-top: 0px;\n\t\tmargin-left: 0vw;\n\t\tmargin-right: 0vw;\n\t\tmargin-bottom: 0px;\n\t}\n}\n/* a {\n  color: #00B7FF;\n} */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

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
  exports.wrap = wrap;

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
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
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
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
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
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
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
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
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

  define(Gp, toStringTagSymbol, "Generator");

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

  exports.keys = function(object) {
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
  exports.values = values;

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

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/index3.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/style.css */ "./src/component/style.css");
/* harmony import */ var _component_backbutton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/backbutton.js */ "./src/component/backbutton.js");
/* harmony import */ var _component_listusers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/listusers.js */ "./src/component/listusers.js");
/* harmony import */ var _component_api_url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/api-url.js */ "./src/component/api-url.js");
/* harmony import */ var _component_addbutton_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/addbutton.js */ "./src/component/addbutton.js");
/* harmony import */ var _component_reschedulebutton_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/reschedulebutton.js */ "./src/component/reschedulebutton.js");






(0,_component_listusers_js__WEBPACK_IMPORTED_MODULE_2__.listUsers)(_component_api_url_js__WEBPACK_IMPORTED_MODULE_3__.apiUrl);
(0,_component_addbutton_js__WEBPACK_IMPORTED_MODULE_4__.addButton)();
(0,_component_addbutton_js__WEBPACK_IMPORTED_MODULE_4__.addTaskButton)();
(0,_component_reschedulebutton_js__WEBPACK_IMPORTED_MODULE_5__.rescheduleButton)();
(0,_component_backbutton_js__WEBPACK_IMPORTED_MODULE_1__.backButton)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vc3JjL2NvbXBvbmVudC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL3NyYy9jb21wb25lbnQvYWRkYnV0dG9uLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwvLi9zcmMvY29tcG9uZW50L2FwaS11cmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL3NyYy9jb21wb25lbnQvYmFja2J1dHRvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vc3JjL2NvbXBvbmVudC9kZWxldGVidXR0b24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL3NyYy9jb21wb25lbnQvZWRpdGJ1dHRvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vc3JjL2NvbXBvbmVudC9oYW5kbGVlcnJvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vc3JjL2NvbXBvbmVudC9saXN0dXNlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL3NyYy9jb21wb25lbnQvbWFrZW5vZGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL3NyYy9jb21wb25lbnQvcmVzY2hlZHVsZWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vc3JjL2NvbXBvbmVudC9zdHlsZS5jc3M/NmVjZiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vc3JjL2luZGV4My5qcyJdLCJuYW1lcyI6WyJvcHRpb25zIiwiaW5zZXJ0Iiwic2luZ2xldG9uIiwidXBkYXRlIiwiYXBpIiwiY29udGVudCIsIiRhZGRCdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiJHRvZG9NYWtlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIiRhZGRUYXNrYnV0dG9uIiwiYWRkQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc2FibGVkIiwidG9kb09iamVjdDEiLCJXaGF0IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiUGxhY2UiLCJVbnRpbHdoZW4iLCJmZXRjaCIsImFwaVVybCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImhhbmRsZUVycm9yIiwiYWRkVGFza0J1dHRvbiIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCIkYmFjayIsIiRmb3JtIiwiJHRvZG9FZGl0IiwiJGJhY2syIiwiYmFja0J1dHRvbiIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJlbGVtZW50IiwiJGRlbGV0ZUJ1dHRvbiIsImdldEVsZW1lbnRzQnlOYW1lIiwiZGVsZXRlQnV0dG9uIiwiaGFuZGxlckluZGV4MiIsImxlbmd0aCIsImUiLCJ0YXJnZXQiLCJudW1iZXIiLCIkbGlzdEluZGV4IiwiJHJlc2NoZWR1bGVOdW1iZXIiLCIkZm9ybTIiLCJlZGl0QnV0dG9uIiwidXNlcnMiLCJmZmYiLCJmaW5kIiwiaWQiLCJpIiwidXNlcnMyIiwiJHRvZG9saXN0IiwicmVtYWtlTGlzdCIsImhhbmRsZXJJbmRleCIsInJlbW92ZSIsImxpc3RVc2VycyIsImpzb24iLCJyZXNKc29uIiwic3RhdHVzIiwiYWxlcnQiLCJlcnJvciIsImdldFVzZXJzIiwieCIsIm1ha2VOb2RlIiwiJHRvZG9MaXN0cyIsIiR0ZW1wbGF0ZSIsImR0IiwiRGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJtbW9udGgiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvZGF5IiwiZ2V0RnVsbFllYXIiLCJzbGljZSIsInVzZXIiLCIkbGlzdCIsImNyZWF0ZUVsZW1lbnQiLCIkVW50aWx3aGVuIiwidGV4dENvbnRlbnQiLCIkV2hlcmUiLCIkV2hhdCIsImFwcGVuZENoaWxkIiwiY29sb3IiLCJjbG9uZSIsImNsb25lTm9kZSIsIiRociIsImNsYXNzTmFtZSIsIiRyZXNjaGVkdWxlQnV0dG9uIiwicmVzY2hlZHVsZUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdB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R0FBRyxRQUFRLG1CQUFtQixHQUFHLFlBQVksMEZBQTBGLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxL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QUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7VUM1UUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBdUQsa0VBQVMsQ0FBQy9DLHlEQUFELENBQVQ7QUFFQVYsa0VBQVM7QUFDVGtCLHNFQUFhO0FBQ2IwRSxnRkFBZ0I7QUFFaEIvRCxvRUFBVSxHIiwiZmlsZSI6ImJhYmVsLXdlYnBhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiY29uc3QgJGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkXCIpO1xuY29uc3QgJHRvZG9NYWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG9NYWtlXCIpWzBdO1xuY29uc3QgJGFkZFRhc2tidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tidXR0b25cIik7XG5cbmltcG9ydCB7IGFwaVVybCB9IGZyb20gXCIuL2FwaS11cmwuanNcIjtcbmltcG9ydCB7IGhhbmRsZUVycm9yIH0gZnJvbSBcIi4vaGFuZGxlZXJyb3IuanNcIjtcblxuY29uc3QgYWRkQnV0dG9uID0gKCkgPT4ge1xuXHQkYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0JGFkZEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cdFx0Y29uc3QgdG9kb09iamVjdDEgPSB7XG5cdFx0XHRXaGF0OiAkdG9kb01ha2UucXVlcnlTZWxlY3RvcignW25hbWU9XCJXaGF0XCJdJykudmFsdWUsXG5cdFx0XHRQbGFjZTogJHRvZG9NYWtlLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiV2hlcmVcIl0nKS52YWx1ZSxcblx0XHRcdFVudGlsd2hlbjogJHRvZG9NYWtlLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiVW50aWx3aGVuXCJdJykudmFsdWUsXG5cdFx0fTtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh0b2RvT2JqZWN0MSksXG5cdFx0fSk7XG5cdFx0aGFuZGxlRXJyb3IocmVzKTtcblx0XHQkYWRkQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0Ly8gJGFkZEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcblx0fSk7XG59O1xuXG5jb25zdCBhZGRUYXNrQnV0dG9uID0gKCkgPT4ge1xuXHQkYWRkVGFza2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdCR0b2RvTWFrZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdCRhZGRUYXNrYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHR3aW5kb3cuc2Nyb2xsVG8oe1xuXHRcdFx0dG9wOiAwLFxuXHRcdFx0YmVoYXZpb3I6IFwiYXV0b1wiLFxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7IGFkZEJ1dHRvbiwgYWRkVGFza0J1dHRvbiB9O1xuIiwiY29uc3QgYXBpVXJsID0gXCJodHRwczovL3RvZG9hcHAtc2F0YWtlLmhlcm9rdWFwcC5jb20vYXBpL3YxXCI7XG5cbmV4cG9ydCB7IGFwaVVybCB9O1xuIiwiY29uc3QgJGJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tcIik7XG5jb25zdCAkZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmb3JtXCIpO1xuY29uc3QgJHRvZG9FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG9FZGl0XCIpWzBdO1xuY29uc3QgJGJhY2syID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrMlwiKTtcbmNvbnN0ICR0b2RvTWFrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvTWFrZVwiKVswXTtcbmNvbnN0ICRhZGRUYXNrYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrYnV0dG9uXCIpO1xuXG5jb25zdCBiYWNrQnV0dG9uID0gKCkgPT4ge1xuXHQvLyDmiLvjgovjg5zjgr/jg7PvvIhUb2Rv5L2c5oiQ5qyE77yJXG5cdCRiYWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0JHRvZG9NYWtlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHQkYWRkVGFza2J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoJGZvcm0sIChlbGVtZW50KSA9PiB7XG5cdFx0XHRlbGVtZW50LnZhbHVlID0gXCJcIjtcblx0XHR9KTtcblx0XHQvLyAkZm9ybS52YWx1ZSA9IFwiXCI7XG5cdH0pO1xuXG5cdC8vIOaIu+OCi+ODnOOCv+ODszLvvIhUb2Rv57eo6ZuG5qyE77yJXG5cdCRiYWNrMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdCR0b2RvRWRpdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0JGFkZFRhc2tidXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0fSk7XG59O1xuXG5leHBvcnQgeyBiYWNrQnV0dG9uIH07XG4iLCJjb25zdCAkZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkZWxldGVcIik7XG5cbmltcG9ydCB7IGFwaVVybCB9IGZyb20gXCIuL2FwaS11cmwuanNcIjtcbmltcG9ydCB7IGhhbmRsZUVycm9yIH0gZnJvbSBcIi4vaGFuZGxlZXJyb3IuanNcIjtcblxuY29uc3QgZGVsZXRlQnV0dG9uID0gKCkgPT4ge1xuXHRsZXQgaGFuZGxlckluZGV4MiA9IDA7XG5cdHdoaWxlIChoYW5kbGVySW5kZXgyIDwgJGRlbGV0ZUJ1dHRvbi5sZW5ndGgpIHtcblx0XHQkZGVsZXRlQnV0dG9uW2hhbmRsZXJJbmRleDJdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xuXHRcdFx0ZS50YXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0Y29uc3QgbnVtYmVyID0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhcGlVcmwgKyBgLyR7bnVtYmVyfWAsIHtcblx0XHRcdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdFx0XHRoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG5cdFx0XHR9KTtcblx0XHRcdGhhbmRsZUVycm9yKHJlcyk7XG5cdFx0fSk7XG5cdFx0aGFuZGxlckluZGV4MisrO1xuXHR9XG59O1xuXG5leHBvcnQgeyBkZWxldGVCdXR0b24gfTtcbiIsIi8vIOe3qOmbhuODnOOCv+ODs+OBruOCpOODmeODs+ODiFxuXG5jb25zdCAkbGlzdEluZGV4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJlZGl0MlwiKTtcbmNvbnN0ICRhZGRUYXNrYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrYnV0dG9uXCIpO1xuY29uc3QgJHRvZG9FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG9FZGl0XCIpWzBdO1xuY29uc3QgJHJlc2NoZWR1bGVOdW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcInJlc2NoZWR1bGVcIilbMF07XG5jb25zdCAkZm9ybTIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9ybTJcIik7XG5jb25zdCAkdG9kb01ha2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9kb01ha2VcIilbMF07XG5cbmNvbnN0IGVkaXRCdXR0b24gPSAodXNlcnMpID0+IHtcblx0bGV0IGhhbmRsZXJJbmRleDIgPSAwO1xuXHR3aGlsZSAoaGFuZGxlckluZGV4MiA8ICRsaXN0SW5kZXgubGVuZ3RoKSB7XG5cdFx0JGxpc3RJbmRleFtoYW5kbGVySW5kZXgyXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdHdpbmRvdy5zY3JvbGxUbyh7XG5cdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0YmVoYXZpb3I6IFwiYXV0b1wiLFxuXHRcdFx0fSk7XG5cdFx0XHRsZXQgZmZmID0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHQkYWRkVGFza2J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHQkdG9kb0VkaXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdCR0b2RvTWFrZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHQkcmVzY2hlZHVsZU51bWJlci52YWx1ZSA9IGZmZjtcblx0XHRcdC8vIGNvbnNvbGUubG9nKGZmZik7XG5cdFx0XHRjb25zdCB0YXJnZXQgPSB1c2Vycy5maW5kKChudW1iZXIpID0+IHtcblx0XHRcdFx0cmV0dXJuIGAke251bWJlci5pZH1gID09PSBmZmY7XG5cdFx0XHR9KTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHRhcmdldCk7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8ICRmb3JtMi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCB1c2VyczIgPSBbdGFyZ2V0LldoYXQsIHRhcmdldC5VbnRpbHdoZW4sIHRhcmdldC5QbGFjZV07XG5cdFx0XHRcdCRmb3JtMltpXS52YWx1ZSA9IHVzZXJzMltpXTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRoYW5kbGVySW5kZXgyKys7XG5cdH1cbn07XG5cbmV4cG9ydCB7IGVkaXRCdXR0b24gfTtcbiIsImNvbnN0ICR0b2RvbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaXN0XCIpO1xuY29uc3QgJHRvZG9NYWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG9NYWtlXCIpWzBdO1xuY29uc3QgJGFkZFRhc2tidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tidXR0b25cIik7XG5jb25zdCAkZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmb3JtXCIpO1xuY29uc3QgJHRvZG9FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG9FZGl0XCIpWzBdO1xuXG5pbXBvcnQgeyBsaXN0VXNlcnMgfSBmcm9tIFwiLi9saXN0dXNlcnMuanNcIjtcbmltcG9ydCB7IGFwaVVybCB9IGZyb20gXCIuL2FwaS11cmwuanNcIjtcblxuY29uc3QgcmVtYWtlTGlzdCA9ICgpID0+IHtcblx0bGV0IGhhbmRsZXJJbmRleCA9IDA7XG5cdHdoaWxlIChoYW5kbGVySW5kZXggPCAkdG9kb2xpc3QubGVuZ3RoKSB7XG5cdFx0JHRvZG9saXN0WzBdLnJlbW92ZSgpO1xuXHRcdC8vIGhhbmRsZXJJbmRleCsrO1xuXHR9XG5cdGxpc3RVc2VycyhhcGlVcmwpO1xufTtcblxuY29uc3QgaGFuZGxlRXJyb3IgPSBhc3luYyAocmVzKSA9PiB7XG5cdGNvbnN0IHJlc0pzb24gPSBhd2FpdCByZXMuanNvbigpO1xuXG5cdHN3aXRjaCAocmVzLnN0YXR1cykge1xuXHRcdGNhc2UgMjAxOlxuXHRcdFx0Ly8gcG9zdOODoeOCveODg+ODiVxuXHRcdFx0cmVtYWtlTGlzdCgpO1xuXHRcdFx0JHRvZG9NYWtlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdCRhZGRUYXNrYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKCRmb3JtLCAoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRlbGVtZW50LnZhbHVlID0gXCJcIjtcblx0XHRcdH0pO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlIDIwMjpcblx0XHRcdC8vIHB1dOODoeOCveODg+ODiVxuXHRcdFx0cmVtYWtlTGlzdCgpO1xuXHRcdFx0JHRvZG9FZGl0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdCRhZGRUYXNrYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgMjAzOlxuXHRcdFx0Ly8gZGVsZXRl44Oh44K944OD44OJXG5cdFx0XHRyZW1ha2VMaXN0KCk7XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgNDAwOlxuXHRcdFx0YWxlcnQocmVzSnNvbi5lcnJvcik7XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgNTAwOlxuXHRcdFx0YWxlcnQocmVzSnNvbi5lcnJvcik7XG5cdFx0XHRicmVhaztcblx0fVxufTtcblxuZXhwb3J0IHsgaGFuZGxlRXJyb3IgfTtcbiIsImNvbnN0ICR0b2RvTWFrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvTWFrZVwiKVswXTtcblxuaW1wb3J0IHsgbWFrZU5vZGUgfSBmcm9tIFwiLi9tYWtlbm9kZS5qc1wiO1xuaW1wb3J0IHsgZWRpdEJ1dHRvbiB9IGZyb20gXCIuL2VkaXRidXR0b24uanNcIjtcbmltcG9ydCB7IGRlbGV0ZUJ1dHRvbiB9IGZyb20gXCIuL2RlbGV0ZWJ1dHRvbi5qc1wiO1xuXG4vLyDplqLmlbAg44OH44O844K/44Gu44KE44KK5Y+W44KKXG5hc3luYyBmdW5jdGlvbiBnZXRVc2Vycyh4KSB7XG5cdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHgpO1xuXHRjb25zdCB1c2VycyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cdHJldHVybiB1c2Vycztcbn1cblxuY29uc3QgbGlzdFVzZXJzID0gYXN5bmMgKHgpID0+IHtcblx0Ly8gSlNPTuODh+ODvOOCv+OBruOChOOCiuWPluOCilxuXHRjb25zdCB1c2VycyA9IGF3YWl0IGdldFVzZXJzKHgpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0eWxlXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdCR0b2RvTWFrZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdC8vICBET03mk43kvZxcblx0bGV0IGhhbmRsZXJJbmRleCA9IDA7XG5cdGlmICghKHVzZXJzID09IG51bGwpKSB7XG5cdFx0d2hpbGUgKGhhbmRsZXJJbmRleCA8IHVzZXJzLmxlbmd0aCkge1xuXHRcdFx0bWFrZU5vZGUodXNlcnNbaGFuZGxlckluZGV4XSk7XG5cdFx0XHRoYW5kbGVySW5kZXgrKztcblx0XHR9XG5cdH1cblxuXHRlZGl0QnV0dG9uKHVzZXJzKTtcblxuXHRkZWxldGVCdXR0b24oKTtcbn07XG5cbmV4cG9ydCB7IGxpc3RVc2VycywgZ2V0VXNlcnMgfTtcbiIsImNvbnN0ICR0b2RvTGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9kb0xpc3RcIilbMF07XG5jb25zdCAkdGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBsYXRlXCIpO1xuXG5jb25zdCBkdCA9IG5ldyBEYXRlKCk7XG5jb25zdCBtb250aCA9IGR0LmdldE1vbnRoKCkgKyAxO1xuY29uc3QgbW1vbnRoID0gXCIwXCIgKyBtb250aDtcbmNvbnN0IGRhdGUgPSBcIjBcIiArIGR0LmdldERhdGUoKTtcbmNvbnN0IHRvZGF5ID0gZHQuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgbW1vbnRoLnNsaWNlKC0yKSArIFwiLVwiICsgZGF0ZS5zbGljZSgtMik7XG5cbmZ1bmN0aW9uIG1ha2VOb2RlKHVzZXIpIHtcblx0Ly8g5YWl5Yqb5qyE5L2c5oiQXG5cdGNvbnN0ICRsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgJFVudGlsd2hlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHQkVW50aWx3aGVuLnRleHRDb250ZW50ID0gXCJVbnRpbCB3aGVuOlwiICsgdXNlci5VbnRpbHdoZW47XG5cdGNvbnN0ICRXaGVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHQkV2hlcmUuaWQgPSBcInNwYW5cIjtcblx0JFdoZXJlLnRleHRDb250ZW50ID0gXCJXaGVyZTpcIiArIHVzZXIuUGxhY2U7XG5cdGNvbnN0ICRXaGF0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0JFdoYXQudGV4dENvbnRlbnQgPSBcIldoYXQ6XCIgKyB1c2VyLldoYXQ7XG5cdCRsaXN0LmFwcGVuZENoaWxkKCRVbnRpbHdoZW4pO1xuXHQkbGlzdC5hcHBlbmRDaGlsZCgkV2hlcmUpO1xuXHQkbGlzdC5hcHBlbmRDaGlsZCgkV2hhdCk7XG5cdGlmICh1c2VyLlVudGlsd2hlbiA8IHRvZGF5KSB7XG5cdFx0JGxpc3Quc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuXHR9XG5cblx0Ly8g44Oc44K/44Oz5L2c5oiQXG5cdGNvbnN0IGNsb25lID0gJHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuXG5cdGNsb25lLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZWRpdDJcIl0nKS52YWx1ZSA9IHVzZXIuaWQ7XG5cdGNsb25lLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZGVsZXRlXCJdJykudmFsdWUgPSB1c2VyLmlkO1xuXHQkbGlzdC5hcHBlbmRDaGlsZChjbG9uZSk7XG5cblx0Ly8g5rC05bmz57ea5L2c5oiQXG5cdGNvbnN0ICRociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcblx0JGxpc3QuYXBwZW5kQ2hpbGQoJGhyKTtcblx0JGxpc3QuY2xhc3NOYW1lID0gXCJsaXN0XCI7XG5cblx0Ly8gJHRvZG9MaXN0c+ODjuODvOODieOBq+WtkOODjuODvOODieOBqOOBl+OBpui/veWKoFxuXHQkdG9kb0xpc3RzLmFwcGVuZENoaWxkKCRsaXN0KTtcbn1cblxuZXhwb3J0IHsgbWFrZU5vZGUgfTtcbiIsImNvbnN0ICRyZXNjaGVkdWxlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJyZXNjaGVkdWxlXCIpWzBdO1xuY29uc3QgJHRvZG9FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG9FZGl0XCIpWzBdO1xuXG5pbXBvcnQgeyBhcGlVcmwgfSBmcm9tIFwiLi9hcGktdXJsLmpzXCI7XG5pbXBvcnQgeyBoYW5kbGVFcnJvciB9IGZyb20gXCIuL2hhbmRsZWVycm9yLmpzXCI7XG5cbmNvbnN0IHJlc2NoZWR1bGVCdXR0b24gPSAoKSA9PiB7XG5cdCRyZXNjaGVkdWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xuXHRcdCRyZXNjaGVkdWxlQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRjb25zdCB0b2RvT2JqZWN0MSA9IHtcblx0XHRcdFdoYXQ6ICR0b2RvRWRpdC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIldoYXRcIl0nKS52YWx1ZSxcblx0XHRcdFBsYWNlOiAkdG9kb0VkaXQucXVlcnlTZWxlY3RvcignW25hbWU9XCJXaGVyZVwiXScpLnZhbHVlLFxuXHRcdFx0VW50aWx3aGVuOiAkdG9kb0VkaXQucXVlcnlTZWxlY3RvcignW25hbWU9XCJVbnRpbHdoZW5cIl0nKS52YWx1ZSxcblx0XHR9O1xuXHRcdGNvbnN0IG51bWJlciA9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCArIGAvJHtudW1iZXJ9YCwge1xuXHRcdFx0bWV0aG9kOiBcIlBVVFwiLFxuXHRcdFx0aGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkodG9kb09iamVjdDEpLFxuXHRcdH0pO1xuXHRcdGhhbmRsZUVycm9yKHJlcyk7XG5cdFx0JHJlc2NoZWR1bGVCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblx0fSk7XG59O1xuXG5leHBvcnQgeyByZXNjaGVkdWxlQnV0dG9uIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDI1NSwgMjIwKTtcXG5cXHQvKiBmb250OiAxNHB4IFxcXCJMdWNpZGEgR3JhbmRlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjsgKi9cXG59XFxuXFxuI3VzZXJuYW1lIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFx0bWFyZ2luLXRvcDogNXZoO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuaW5wdXRbbmFtZT1cXFwiV2hhdFxcXCJdIHtcXG5cXHR3aWR0aDogMzB2dztcXG59XFxuXFxuI2hlYWRlciB7XFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcblxcdG1hcmdpbi1ib3R0b206IDB2aDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMXB4O1xcbn1cXG5cXG4jYWRkVGFza2J1dHRvbiA+IGRpdiA+IGJ1dHRvbiB7XFxuXFx0bWFyZ2luLXRvcDogNXZoO1xcblxcdGNvbG9yOiB3aGl0ZXNtb2tlO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnRvZG9NYWtlIHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi50b2RvTWFrZSBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0Zm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4udG9kb01ha2UgPiBkaXYgPiBidXR0b24ge1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnRvZG9FZGl0IHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi50b2RvRWRpdCBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0Zm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4udG9kb0VkaXQgPiBkaXYgPiBidXR0b24ge1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnRvZG9MaXN0IHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0bWFyZ2luLXRvcDogMTB2aDtcXG59XFxuXFxuI2xpc3Qge1xcblxcdGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuLmJ1dHRvbiA+IGJ1dHRvbiB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5ocjpub3QoW3NpemVdKSB7XFxuXFx0LyogYm9yZGVyOiBub25lOyAqL1xcblxcdGNvbG9yOiByZ2IoNDQsIDE5MiwgMjUwKTtcXG5cXHRoZWlnaHQ6IDRweDtcXG5cXHQvKiBib3JkZXItc3R5bGU6IGRhc2hlZDsgKi9cXG59XFxuXFxuI3NwYW4ge1xcblxcdG1hcmdpbi1sZWZ0OiAydnc7XFxufVxcblxcbiNsb2dvdXQge1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI3N0eWxlIHtcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRtYXJnaW4tdG9wOiAwcHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDd2dztcXG5cXHRtYXJnaW4tcmlnaHQ6IDd2dztcXG5cXHRtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcblxcdCN1c2VybmFtZSB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdFxcdG1hcmdpbi10b3A6IDN2aDtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0fVxcblxcblxcdGlucHV0W25hbWU9XFxcIldoYXRcXFwiXSB7XFxuXFx0XFx0d2lkdGg6IDUwdnc7XFxuXFx0fVxcblxcdCNoZWFkZXIge1xcblxcdFxcdGZvbnQtc2l6ZTogNDBweDtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAwdmg7XFxuXFx0fVxcblxcblxcdCNhZGRUYXNrYnV0dG9uID4gZGl2ID4gYnV0dG9uIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAzdmg7XFxuXFx0XFx0Y29sb3I6IHdoaXRlc21va2U7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb01ha2Uge1xcblxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9NYWtlIGRpdjpmaXJzdC1vZi10eXBlIHtcXG5cXHRcXHRmb250LXNpemU6IDI4cHg7XFxuXFx0fVxcblxcblxcdC50b2RvTWFrZSA+IGRpdiA+IGJ1dHRvbiB7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb0VkaXQge1xcblxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9FZGl0IGRpdjpmaXJzdC1vZi10eXBlIHtcXG5cXHRcXHRmb250LXNpemU6IDI4cHg7XFxuXFx0fVxcblxcblxcdC50b2RvRWRpdCA+IGRpdiA+IGJ1dHRvbiB7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb0xpc3Qge1xcblxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRcXHRtYXJnaW4tdG9wOiA1dmg7XFxuXFx0fVxcblxcblxcdCNsaXN0IHtcXG5cXHRcXHRmb250LXNpemU6IDI4cHg7XFxuXFx0fVxcblxcblxcdC5idXR0b24gPiBidXR0b24ge1xcblxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHR9XFxuXFxuXFx0aHI6bm90KFtzaXplXSkge1xcblxcdFxcdC8qIGJvcmRlcjogbm9uZTsgKi9cXG5cXHRcXHRjb2xvcjogcmdiKDQ0LCAxOTIsIDI1MCk7XFxuXFx0XFx0aGVpZ2h0OiA0cHg7XFxuXFx0XFx0LyogYm9yZGVyLXN0eWxlOiBkYXNoZWQ7ICovXFxuXFx0fVxcblxcdCNzcGFuIHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMnZ3O1xcblxcdH1cXG5cXG5cXHQjbG9nb3V0IHtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0fVxcblxcblxcdCNzdHlsZSB7XFxuXFx0XFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0XFx0bWFyZ2luLXRvcDogMHB4O1xcblxcdFxcdG1hcmdpbi1sZWZ0OiA1dnc7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiA1dnc7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMHB4O1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcXG5cXHQjdXNlcm5hbWUge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXHRcXHRtYXJnaW4tdG9wOiAzdmg7XFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdH1cXG5cXG5cXHRpbnB1dFtuYW1lPVxcXCJXaGF0XFxcIl0ge1xcblxcdFxcdHdpZHRoOiA5MHZ3O1xcblxcdH1cXG5cXHQjaGVhZGVyIHtcXG5cXHRcXHRmb250LXNpemU6IDMycHg7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMHZoO1xcblxcdH1cXG5cXG5cXHQjYWRkVGFza2J1dHRvbiA+IGRpdiA+IGJ1dHRvbiB7XFxuXFx0XFx0bWFyZ2luLXRvcDogM3ZoO1xcblxcdFxcdGNvbG9yOiB3aGl0ZXNtb2tlO1xcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9NYWtlIHtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0fVxcblxcblxcdC50b2RvTWFrZSBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb01ha2UgPiBkaXYgPiBidXR0b24ge1xcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRcXHRtYXJnaW4tdG9wOiAzdmg7XFxuXFx0fVxcblxcblxcdC50b2RvRWRpdCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb0VkaXQgZGl2OmZpcnN0LW9mLXR5cGUge1xcblxcdFxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9FZGl0ID4gZGl2ID4gYnV0dG9uIHtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0XFx0bWFyZ2luLXRvcDogM3ZoO1xcblxcdH1cXG5cXG5cXHQudG9kb0xpc3Qge1xcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRcXHRtYXJnaW4tdG9wOiA1dmg7XFxuXFx0fVxcblxcblxcdCNsaXN0IHtcXG5cXHRcXHRmb250LXNpemU6IDI0cHg7XFxuXFx0fVxcblxcblxcdC5idXR0b24gPiBidXR0b24ge1xcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHR9XFxuXFxuXFx0aHI6bm90KFtzaXplXSkge1xcblxcdFxcdC8qIGJvcmRlcjogbm9uZTsgKi9cXG5cXHRcXHRjb2xvcjogcmdiKDQ0LCAxOTIsIDI1MCk7XFxuXFx0XFx0aGVpZ2h0OiA0cHg7XFxuXFx0XFx0LyogYm9yZGVyLXN0eWxlOiBkYXNoZWQ7ICovXFxuXFx0fVxcblxcblxcdCNzcGFuIHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMHZ3O1xcblxcdFxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR9XFxuXFxuXFx0I2xvZ291dCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdH1cXG5cXG5cXHQjc3R5bGUge1xcblxcdFxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdFxcdG1hcmdpbi10b3A6IDBweDtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMHZ3O1xcblxcdFxcdG1hcmdpbi1yaWdodDogMHZ3O1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDBweDtcXG5cXHR9XFxufVxcbi8qIGEge1xcbiAgY29sb3I6ICMwMEI3RkY7XFxufSAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnQvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0Msb0NBQW9DO0NBQ3BDLDhEQUE4RDtBQUMvRDs7QUFFQTtDQUNDLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsZUFBZTtDQUNmLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQix3QkFBd0I7Q0FDeEIsV0FBVztDQUNYLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsdUJBQXVCO0NBQ3ZCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDO0VBQ0MsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLFdBQVc7Q0FDWjtDQUNBO0VBQ0MsZUFBZTtFQUNmLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7RUFDZixlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCwwQkFBMEI7Q0FDM0I7Q0FDQTtFQUNDLGdCQUFnQjtDQUNqQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtDQUNuQjtBQUNEOztBQUVBO0NBQ0M7RUFDQyxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsV0FBVztDQUNaO0NBQ0E7RUFDQyxlQUFlO0VBQ2Ysa0JBQWtCO0NBQ25COztDQUVBO0VBQ0MsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0VBQ2YsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtFQUNmLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0VBQ2YsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0Msa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsMEJBQTBCO0NBQzNCOztDQUVBO0VBQ0MsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtDQUN0Qjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtDQUNuQjtBQUNEO0FBQ0E7O0dBRUdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCwgMjU1LCAyMjApO1xcblxcdC8qIGZvbnQ6IDE0cHggXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmOyAqL1xcbn1cXG5cXG4jdXNlcm5hbWUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXHRtYXJnaW4tdG9wOiA1dmg7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5pbnB1dFtuYW1lPVxcXCJXaGF0XFxcIl0ge1xcblxcdHdpZHRoOiAzMHZ3O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG5cXHRmb250LXNpemU6IDQwcHg7XFxuXFx0bWFyZ2luLWJvdHRvbTogMHZoO1xcblxcdGJvcmRlci1yYWRpdXM6IDExcHg7XFxufVxcblxcbiNhZGRUYXNrYnV0dG9uID4gZGl2ID4gYnV0dG9uIHtcXG5cXHRtYXJnaW4tdG9wOiA1dmg7XFxuXFx0Y29sb3I6IHdoaXRlc21va2U7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udG9kb01ha2Uge1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnRvZG9NYWtlIGRpdjpmaXJzdC1vZi10eXBlIHtcXG5cXHRmb250LXNpemU6IDI4cHg7XFxufVxcblxcbi50b2RvTWFrZSA+IGRpdiA+IGJ1dHRvbiB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udG9kb0VkaXQge1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnRvZG9FZGl0IGRpdjpmaXJzdC1vZi10eXBlIHtcXG5cXHRmb250LXNpemU6IDI4cHg7XFxufVxcblxcbi50b2RvRWRpdCA+IGRpdiA+IGJ1dHRvbiB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udG9kb0xpc3Qge1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRtYXJnaW4tdG9wOiAxMHZoO1xcbn1cXG5cXG4jbGlzdCB7XFxuXFx0Zm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4uYnV0dG9uID4gYnV0dG9uIHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbmhyOm5vdChbc2l6ZV0pIHtcXG5cXHQvKiBib3JkZXI6IG5vbmU7ICovXFxuXFx0Y29sb3I6IHJnYig0NCwgMTkyLCAyNTApO1xcblxcdGhlaWdodDogNHB4O1xcblxcdC8qIGJvcmRlci1zdHlsZTogZGFzaGVkOyAqL1xcbn1cXG5cXG4jc3BhbiB7XFxuXFx0bWFyZ2luLWxlZnQ6IDJ2dztcXG59XFxuXFxuI2xvZ291dCB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jc3R5bGUge1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdG1hcmdpbi10b3A6IDBweDtcXG5cXHRtYXJnaW4tbGVmdDogN3Z3O1xcblxcdG1hcmdpbi1yaWdodDogN3Z3O1xcblxcdG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuXFx0I3VzZXJuYW1lIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFx0XFx0bWFyZ2luLXRvcDogM3ZoO1xcblxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHR9XFxuXFxuXFx0aW5wdXRbbmFtZT1cXFwiV2hhdFxcXCJdIHtcXG5cXHRcXHR3aWR0aDogNTB2dztcXG5cXHR9XFxuXFx0I2hlYWRlciB7XFxuXFx0XFx0Zm9udC1zaXplOiA0MHB4O1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDB2aDtcXG5cXHR9XFxuXFxuXFx0I2FkZFRhc2tidXR0b24gPiBkaXYgPiBidXR0b24ge1xcblxcdFxcdG1hcmdpbi10b3A6IDN2aDtcXG5cXHRcXHRjb2xvcjogd2hpdGVzbW9rZTtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0fVxcblxcblxcdC50b2RvTWFrZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb01ha2UgZGl2OmZpcnN0LW9mLXR5cGUge1xcblxcdFxcdGZvbnQtc2l6ZTogMjhweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9NYWtlID4gZGl2ID4gYnV0dG9uIHtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0fVxcblxcblxcdC50b2RvRWRpdCB7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb0VkaXQgZGl2OmZpcnN0LW9mLXR5cGUge1xcblxcdFxcdGZvbnQtc2l6ZTogMjhweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9FZGl0ID4gZGl2ID4gYnV0dG9uIHtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0fVxcblxcblxcdC50b2RvTGlzdCB7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdFxcdG1hcmdpbi10b3A6IDV2aDtcXG5cXHR9XFxuXFxuXFx0I2xpc3Qge1xcblxcdFxcdGZvbnQtc2l6ZTogMjhweDtcXG5cXHR9XFxuXFxuXFx0LmJ1dHRvbiA+IGJ1dHRvbiB7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdH1cXG5cXG5cXHRocjpub3QoW3NpemVdKSB7XFxuXFx0XFx0LyogYm9yZGVyOiBub25lOyAqL1xcblxcdFxcdGNvbG9yOiByZ2IoNDQsIDE5MiwgMjUwKTtcXG5cXHRcXHRoZWlnaHQ6IDRweDtcXG5cXHRcXHQvKiBib3JkZXItc3R5bGU6IGRhc2hlZDsgKi9cXG5cXHR9XFxuXFx0I3NwYW4ge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAydnc7XFxuXFx0fVxcblxcblxcdCNsb2dvdXQge1xcblxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHR9XFxuXFxuXFx0I3N0eWxlIHtcXG5cXHRcXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRcXHRtYXJnaW4tdG9wOiAwcHg7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDV2dztcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDV2dztcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAwcHg7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xcblxcdCN1c2VybmFtZSB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdFxcdG1hcmdpbi10b3A6IDN2aDtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0fVxcblxcblxcdGlucHV0W25hbWU9XFxcIldoYXRcXFwiXSB7XFxuXFx0XFx0d2lkdGg6IDkwdnc7XFxuXFx0fVxcblxcdCNoZWFkZXIge1xcblxcdFxcdGZvbnQtc2l6ZTogMzJweDtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAwdmg7XFxuXFx0fVxcblxcblxcdCNhZGRUYXNrYnV0dG9uID4gZGl2ID4gYnV0dG9uIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAzdmg7XFxuXFx0XFx0Y29sb3I6IHdoaXRlc21va2U7XFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb01ha2Uge1xcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9NYWtlIGRpdjpmaXJzdC1vZi10eXBlIHtcXG5cXHRcXHRmb250LXNpemU6IDI0cHg7XFxuXFx0fVxcblxcblxcdC50b2RvTWFrZSA+IGRpdiA+IGJ1dHRvbiB7XFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdFxcdG1hcmdpbi10b3A6IDN2aDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9FZGl0IHtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0fVxcblxcblxcdC50b2RvRWRpdCBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb0VkaXQgPiBkaXYgPiBidXR0b24ge1xcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRcXHRtYXJnaW4tdG9wOiAzdmg7XFxuXFx0fVxcblxcblxcdC50b2RvTGlzdCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdFxcdG1hcmdpbi10b3A6IDV2aDtcXG5cXHR9XFxuXFxuXFx0I2xpc3Qge1xcblxcdFxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHR9XFxuXFxuXFx0LmJ1dHRvbiA+IGJ1dHRvbiB7XFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdH1cXG5cXG5cXHRocjpub3QoW3NpemVdKSB7XFxuXFx0XFx0LyogYm9yZGVyOiBub25lOyAqL1xcblxcdFxcdGNvbG9yOiByZ2IoNDQsIDE5MiwgMjUwKTtcXG5cXHRcXHRoZWlnaHQ6IDRweDtcXG5cXHRcXHQvKiBib3JkZXItc3R5bGU6IGRhc2hlZDsgKi9cXG5cXHR9XFxuXFxuXFx0I3NwYW4ge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwdnc7XFxuXFx0XFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdH1cXG5cXG5cXHQjbG9nb3V0IHtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0fVxcblxcblxcdCNzdHlsZSB7XFxuXFx0XFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0XFx0bWFyZ2luLXRvcDogMHB4O1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwdnc7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAwdnc7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMHB4O1xcblxcdH1cXG59XFxuLyogYSB7XFxuICBjb2xvcjogIzAwQjdGRjtcXG59ICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9jb21wb25lbnQvc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBiYWNrQnV0dG9uIH0gZnJvbSBcIi4vY29tcG9uZW50L2JhY2tidXR0b24uanNcIjtcbmltcG9ydCB7IGxpc3RVc2VycyB9IGZyb20gXCIuL2NvbXBvbmVudC9saXN0dXNlcnMuanNcIjtcbmltcG9ydCB7IGFwaVVybCB9IGZyb20gXCIuL2NvbXBvbmVudC9hcGktdXJsLmpzXCI7XG5pbXBvcnQgeyBhZGRCdXR0b24sIGFkZFRhc2tCdXR0b24gfSBmcm9tIFwiLi9jb21wb25lbnQvYWRkYnV0dG9uLmpzXCI7XG5pbXBvcnQgeyByZXNjaGVkdWxlQnV0dG9uIH0gZnJvbSBcIi4vY29tcG9uZW50L3Jlc2NoZWR1bGVidXR0b24uanNcIjtcblxubGlzdFVzZXJzKGFwaVVybCk7XG5cbmFkZEJ1dHRvbigpO1xuYWRkVGFza0J1dHRvbigpO1xucmVzY2hlZHVsZUJ1dHRvbigpO1xuXG5iYWNrQnV0dG9uKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9