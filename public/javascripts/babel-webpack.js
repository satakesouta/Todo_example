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
var apiUrl = "http://localhost:5000/api/v1";


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
var $addButton = document.getElementById("add");



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
            _context.next = _context.t0 === 201 ? 6 : _context.t0 === 202 ? 11 : _context.t0 === 203 ? 15 : _context.t0 === 400 ? 17 : 19;
            break;

          case 6:
            // postメソッド
            remakeList();
            $todoMake.style.display = "none";
            $addTaskbutton.style.display = "block";
            Array.prototype.forEach.call($form, function (element) {
              element.value = "";
            });
            return _context.abrupt("break", 19);

          case 11:
            // putメソッド
            remakeList();
            $todoEdit.style.display = "none";
            $addTaskbutton.style.display = "block";
            return _context.abrupt("break", 19);

          case 15:
            // deleteメソッド
            remakeList();
            return _context.abrupt("break", 19);

          case 17:
            alert(resJson.error);
            return _context.abrupt("break", 19);

          case 19:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vc3JjL2NvbXBvbmVudC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL3NyYy9jb21wb25lbnQvYWRkYnV0dG9uLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwvLi9zcmMvY29tcG9uZW50L2FwaS11cmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL3NyYy9jb21wb25lbnQvYmFja2J1dHRvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vc3JjL2NvbXBvbmVudC9kZWxldGVidXR0b24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL3NyYy9jb21wb25lbnQvZWRpdGJ1dHRvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vc3JjL2NvbXBvbmVudC9oYW5kbGVlcnJvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vc3JjL2NvbXBvbmVudC9saXN0dXNlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL3NyYy9jb21wb25lbnQvbWFrZW5vZGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL3NyYy9jb21wb25lbnQvcmVzY2hlZHVsZWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vc3JjL2NvbXBvbmVudC9zdHlsZS5jc3M/NmVjZiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vc3JjL2luZGV4My5qcyJdLCJuYW1lcyI6WyJvcHRpb25zIiwiaW5zZXJ0Iiwic2luZ2xldG9uIiwidXBkYXRlIiwiYXBpIiwiY29udGVudCIsIiRhZGRCdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiJHRvZG9NYWtlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIiRhZGRUYXNrYnV0dG9uIiwiYWRkQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc2FibGVkIiwidG9kb09iamVjdDEiLCJXaGF0IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiUGxhY2UiLCJVbnRpbHdoZW4iLCJmZXRjaCIsImFwaVVybCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImhhbmRsZUVycm9yIiwiYWRkVGFza0J1dHRvbiIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCIkYmFjayIsIiRmb3JtIiwiJHRvZG9FZGl0IiwiJGJhY2syIiwiYmFja0J1dHRvbiIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJlbGVtZW50IiwiJGRlbGV0ZUJ1dHRvbiIsImdldEVsZW1lbnRzQnlOYW1lIiwiZGVsZXRlQnV0dG9uIiwiaGFuZGxlckluZGV4MiIsImxlbmd0aCIsImUiLCJ0YXJnZXQiLCJudW1iZXIiLCIkbGlzdEluZGV4IiwiJHJlc2NoZWR1bGVOdW1iZXIiLCIkZm9ybTIiLCJlZGl0QnV0dG9uIiwidXNlcnMiLCJmZmYiLCJmaW5kIiwiaWQiLCJpIiwidXNlcnMyIiwiJHRvZG9saXN0IiwicmVtYWtlTGlzdCIsImhhbmRsZXJJbmRleCIsInJlbW92ZSIsImxpc3RVc2VycyIsImpzb24iLCJyZXNKc29uIiwic3RhdHVzIiwiYWxlcnQiLCJlcnJvciIsImdldFVzZXJzIiwieCIsIm1ha2VOb2RlIiwiJHRvZG9MaXN0cyIsIiR0ZW1wbGF0ZSIsImR0IiwiRGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJtbW9udGgiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvZGF5IiwiZ2V0RnVsbFllYXIiLCJzbGljZSIsInVzZXIiLCIkbGlzdCIsImNyZWF0ZUVsZW1lbnQiLCIkVW50aWx3aGVuIiwidGV4dENvbnRlbnQiLCIkV2hlcmUiLCIkV2hhdCIsImFwcGVuZENoaWxkIiwiY29sb3IiLCJjbG9uZSIsImNsb25lTm9kZSIsIiRociIsImNsYXNzTmFtZSIsIiRyZXNjaGVkdWxlQnV0dG9uIiwicmVzY2hlZHVsZUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdB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QkFBbUIsR0FBRyxZQUFZLDBGQUEwRixZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVB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QWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7O1VDNVFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQXVELGtFQUFTLENBQUMvQyx5REFBRCxDQUFUO0FBRUFWLGtFQUFTO0FBQ1RrQixzRUFBYTtBQUNiMEUsZ0ZBQWdCO0FBRWhCL0Qsb0VBQVUsRyIsImZpbGUiOiJiYWJlbC13ZWJwYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL3N0eWxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImNvbnN0ICRhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFwiKTtcbmNvbnN0ICR0b2RvTWFrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvTWFrZVwiKVswXTtcbmNvbnN0ICRhZGRUYXNrYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrYnV0dG9uXCIpO1xuXG5pbXBvcnQgeyBhcGlVcmwgfSBmcm9tIFwiLi9hcGktdXJsLmpzXCI7XG5pbXBvcnQgeyBoYW5kbGVFcnJvciB9IGZyb20gXCIuL2hhbmRsZWVycm9yLmpzXCI7XG5cbmNvbnN0IGFkZEJ1dHRvbiA9ICgpID0+IHtcblx0JGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdCRhZGRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdGNvbnN0IHRvZG9PYmplY3QxID0ge1xuXHRcdFx0V2hhdDogJHRvZG9NYWtlLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiV2hhdFwiXScpLnZhbHVlLFxuXHRcdFx0UGxhY2U6ICR0b2RvTWFrZS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIldoZXJlXCJdJykudmFsdWUsXG5cdFx0XHRVbnRpbHdoZW46ICR0b2RvTWFrZS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIlVudGlsd2hlblwiXScpLnZhbHVlLFxuXHRcdH07XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0aGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkodG9kb09iamVjdDEpLFxuXHRcdH0pO1xuXHRcdGhhbmRsZUVycm9yKHJlcyk7XG5cdFx0JGFkZEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdC8vICRhZGRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG5cdH0pO1xufTtcblxuY29uc3QgYWRkVGFza0J1dHRvbiA9ICgpID0+IHtcblx0JGFkZFRhc2tidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHQkdG9kb01ha2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHQkYWRkVGFza2J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0d2luZG93LnNjcm9sbFRvKHtcblx0XHRcdHRvcDogMCxcblx0XHRcdGJlaGF2aW9yOiBcImF1dG9cIixcblx0XHR9KTtcblx0fSk7XG59O1xuXG5leHBvcnQgeyBhZGRCdXR0b24sIGFkZFRhc2tCdXR0b24gfTtcbiIsImNvbnN0IGFwaVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MVwiO1xuXG5leHBvcnQgeyBhcGlVcmwgfTtcbiIsImNvbnN0ICRiYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrXCIpO1xuY29uc3QgJGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9ybVwiKTtcbmNvbnN0ICR0b2RvRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvRWRpdFwiKVswXTtcbmNvbnN0ICRiYWNrMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFjazJcIik7XG5jb25zdCAkdG9kb01ha2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9kb01ha2VcIilbMF07XG5jb25zdCAkYWRkVGFza2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza2J1dHRvblwiKTtcblxuY29uc3QgYmFja0J1dHRvbiA9ICgpID0+IHtcblx0Ly8g5oi744KL44Oc44K/44Oz77yIVG9kb+S9nOaIkOashO+8iVxuXHQkYmFjay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdCR0b2RvTWFrZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0JGFkZFRhc2tidXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKCRmb3JtLCAoZWxlbWVudCkgPT4ge1xuXHRcdFx0ZWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cdFx0fSk7XG5cdFx0Ly8gJGZvcm0udmFsdWUgPSBcIlwiO1xuXHR9KTtcblxuXHQvLyDmiLvjgovjg5zjgr/jg7My77yIVG9kb+e3qOmbhuashO+8iVxuXHQkYmFjazIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHQkdG9kb0VkaXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdCRhZGRUYXNrYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdH0pO1xufTtcblxuZXhwb3J0IHsgYmFja0J1dHRvbiB9O1xuIiwiY29uc3QgJGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGVsZXRlXCIpO1xuXG5pbXBvcnQgeyBhcGlVcmwgfSBmcm9tIFwiLi9hcGktdXJsLmpzXCI7XG5pbXBvcnQgeyBoYW5kbGVFcnJvciB9IGZyb20gXCIuL2hhbmRsZWVycm9yLmpzXCI7XG5cbmNvbnN0IGRlbGV0ZUJ1dHRvbiA9ICgpID0+IHtcblx0bGV0IGhhbmRsZXJJbmRleDIgPSAwO1xuXHR3aGlsZSAoaGFuZGxlckluZGV4MiA8ICRkZWxldGVCdXR0b24ubGVuZ3RoKSB7XG5cdFx0JGRlbGV0ZUJ1dHRvbltoYW5kbGVySW5kZXgyXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcblx0XHRcdGUudGFyZ2V0LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdGNvbnN0IG51bWJlciA9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpVXJsICsgYC8ke251bWJlcn1gLCB7XG5cdFx0XHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRcdFx0aGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuXHRcdFx0fSk7XG5cdFx0XHRoYW5kbGVFcnJvcihyZXMpO1xuXHRcdH0pO1xuXHRcdGhhbmRsZXJJbmRleDIrKztcblx0fVxufTtcblxuZXhwb3J0IHsgZGVsZXRlQnV0dG9uIH07XG4iLCIvLyDnt6jpm4bjg5zjgr/jg7Pjga7jgqTjg5njg7Pjg4hcblxuY29uc3QgJGxpc3RJbmRleCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZWRpdDJcIik7XG5jb25zdCAkYWRkVGFza2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza2J1dHRvblwiKTtcbmNvbnN0ICR0b2RvRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvRWRpdFwiKVswXTtcbmNvbnN0ICRyZXNjaGVkdWxlTnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJyZXNjaGVkdWxlXCIpWzBdO1xuY29uc3QgJGZvcm0yID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZvcm0yXCIpO1xuY29uc3QgJHRvZG9NYWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG9NYWtlXCIpWzBdO1xuXG5jb25zdCBlZGl0QnV0dG9uID0gKHVzZXJzKSA9PiB7XG5cdGxldCBoYW5kbGVySW5kZXgyID0gMDtcblx0d2hpbGUgKGhhbmRsZXJJbmRleDIgPCAkbGlzdEluZGV4Lmxlbmd0aCkge1xuXHRcdCRsaXN0SW5kZXhbaGFuZGxlckluZGV4Ml0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oe1xuXHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdGJlaGF2aW9yOiBcImF1dG9cIixcblx0XHRcdH0pO1xuXHRcdFx0bGV0IGZmZiA9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0JGFkZFRhc2tidXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0JHRvZG9FZGl0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHQkdG9kb01ha2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0JHJlc2NoZWR1bGVOdW1iZXIudmFsdWUgPSBmZmY7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhmZmYpO1xuXHRcdFx0Y29uc3QgdGFyZ2V0ID0gdXNlcnMuZmluZCgobnVtYmVyKSA9PiB7XG5cdFx0XHRcdHJldHVybiBgJHtudW1iZXIuaWR9YCA9PT0gZmZmO1xuXHRcdFx0fSk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0YXJnZXQpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAkZm9ybTIubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgdXNlcnMyID0gW3RhcmdldC5XaGF0LCB0YXJnZXQuVW50aWx3aGVuLCB0YXJnZXQuUGxhY2VdO1xuXHRcdFx0XHQkZm9ybTJbaV0udmFsdWUgPSB1c2VyczJbaV07XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0aGFuZGxlckluZGV4MisrO1xuXHR9XG59O1xuXG5leHBvcnQgeyBlZGl0QnV0dG9uIH07XG4iLCJjb25zdCAkdG9kb2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlzdFwiKTtcbmNvbnN0ICR0b2RvTWFrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvTWFrZVwiKVswXTtcbmNvbnN0ICRhZGRUYXNrYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrYnV0dG9uXCIpO1xuY29uc3QgJGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9ybVwiKTtcbmNvbnN0ICR0b2RvRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvRWRpdFwiKVswXTtcbmNvbnN0ICRhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFwiKTtcblxuaW1wb3J0IHsgbGlzdFVzZXJzIH0gZnJvbSBcIi4vbGlzdHVzZXJzLmpzXCI7XG5pbXBvcnQgeyBhcGlVcmwgfSBmcm9tIFwiLi9hcGktdXJsLmpzXCI7XG5cbmNvbnN0IHJlbWFrZUxpc3QgPSAoKSA9PiB7XG5cdGxldCBoYW5kbGVySW5kZXggPSAwO1xuXHR3aGlsZSAoaGFuZGxlckluZGV4IDwgJHRvZG9saXN0Lmxlbmd0aCkge1xuXHRcdCR0b2RvbGlzdFswXS5yZW1vdmUoKTtcblx0XHQvLyBoYW5kbGVySW5kZXgrKztcblx0fVxuXHRsaXN0VXNlcnMoYXBpVXJsKTtcbn07XG5cbmNvbnN0IGhhbmRsZUVycm9yID0gYXN5bmMgKHJlcykgPT4ge1xuXHRjb25zdCByZXNKc29uID0gYXdhaXQgcmVzLmpzb24oKTtcblxuXHRzd2l0Y2ggKHJlcy5zdGF0dXMpIHtcblx0XHRjYXNlIDIwMTpcblx0XHRcdC8vIHBvc3Tjg6Hjgr3jg4Pjg4lcblx0XHRcdHJlbWFrZUxpc3QoKTtcblx0XHRcdCR0b2RvTWFrZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHQkYWRkVGFza2J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCgkZm9ybSwgKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0ZWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cdFx0XHR9KTtcblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSAyMDI6XG5cdFx0XHQvLyBwdXTjg6Hjgr3jg4Pjg4lcblx0XHRcdHJlbWFrZUxpc3QoKTtcblx0XHRcdCR0b2RvRWRpdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHQkYWRkVGFza2J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlIDIwMzpcblx0XHRcdC8vIGRlbGV0ZeODoeOCveODg+ODiVxuXHRcdFx0cmVtYWtlTGlzdCgpO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlIDQwMDpcblx0XHRcdGFsZXJ0KHJlc0pzb24uZXJyb3IpO1xuXHRcdFx0YnJlYWs7XG5cdH1cbn07XG5cbmV4cG9ydCB7IGhhbmRsZUVycm9yIH07XG4iLCJjb25zdCAkdG9kb01ha2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9kb01ha2VcIilbMF07XG5cbmltcG9ydCB7IG1ha2VOb2RlIH0gZnJvbSBcIi4vbWFrZW5vZGUuanNcIjtcbmltcG9ydCB7IGVkaXRCdXR0b24gfSBmcm9tIFwiLi9lZGl0YnV0dG9uLmpzXCI7XG5pbXBvcnQgeyBkZWxldGVCdXR0b24gfSBmcm9tIFwiLi9kZWxldGVidXR0b24uanNcIjtcblxuLy8g6Zai5pWwIOODh+ODvOOCv+OBruOChOOCiuWPluOCilxuYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcnMoeCkge1xuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh4KTtcblx0Y29uc3QgdXNlcnMgPSBhd2FpdCByZXMuanNvbigpO1xuXHRyZXR1cm4gdXNlcnM7XG59XG5cbmNvbnN0IGxpc3RVc2VycyA9IGFzeW5jICh4KSA9PiB7XG5cdC8vIEpTT07jg4fjg7zjgr/jga7jgoTjgorlj5bjgopcblx0Y29uc3QgdXNlcnMgPSBhd2FpdCBnZXRVc2Vycyh4KTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdHlsZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHQkdG9kb01ha2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHQvLyAgRE9N5pON5L2cXG5cdGxldCBoYW5kbGVySW5kZXggPSAwO1xuXHRpZiAoISh1c2VycyA9PSBudWxsKSkge1xuXHRcdHdoaWxlIChoYW5kbGVySW5kZXggPCB1c2Vycy5sZW5ndGgpIHtcblx0XHRcdG1ha2VOb2RlKHVzZXJzW2hhbmRsZXJJbmRleF0pO1xuXHRcdFx0aGFuZGxlckluZGV4Kys7XG5cdFx0fVxuXHR9XG5cblx0ZWRpdEJ1dHRvbih1c2Vycyk7XG5cblx0ZGVsZXRlQnV0dG9uKCk7XG59O1xuXG5leHBvcnQgeyBsaXN0VXNlcnMsIGdldFVzZXJzIH07XG4iLCJjb25zdCAkdG9kb0xpc3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG9MaXN0XCIpWzBdO1xuY29uc3QgJHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wbGF0ZVwiKTtcblxuY29uc3QgZHQgPSBuZXcgRGF0ZSgpO1xuY29uc3QgbW9udGggPSBkdC5nZXRNb250aCgpICsgMTtcbmNvbnN0IG1tb250aCA9IFwiMFwiICsgbW9udGg7XG5jb25zdCBkYXRlID0gXCIwXCIgKyBkdC5nZXREYXRlKCk7XG5jb25zdCB0b2RheSA9IGR0LmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIG1tb250aC5zbGljZSgtMikgKyBcIi1cIiArIGRhdGUuc2xpY2UoLTIpO1xuXG5mdW5jdGlvbiBtYWtlTm9kZSh1c2VyKSB7XG5cdC8vIOWFpeWKm+ashOS9nOaIkFxuXHRjb25zdCAkbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0ICRVbnRpbHdoZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0JFVudGlsd2hlbi50ZXh0Q29udGVudCA9IFwiVW50aWwgd2hlbjpcIiArIHVzZXIuVW50aWx3aGVuO1xuXHRjb25zdCAkV2hlcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0JFdoZXJlLmlkID0gXCJzcGFuXCI7XG5cdCRXaGVyZS50ZXh0Q29udGVudCA9IFwiV2hlcmU6XCIgKyB1c2VyLlBsYWNlO1xuXHRjb25zdCAkV2hhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdCRXaGF0LnRleHRDb250ZW50ID0gXCJXaGF0OlwiICsgdXNlci5XaGF0O1xuXHQkbGlzdC5hcHBlbmRDaGlsZCgkVW50aWx3aGVuKTtcblx0JGxpc3QuYXBwZW5kQ2hpbGQoJFdoZXJlKTtcblx0JGxpc3QuYXBwZW5kQ2hpbGQoJFdoYXQpO1xuXHRpZiAodXNlci5VbnRpbHdoZW4gPCB0b2RheSkge1xuXHRcdCRsaXN0LnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcblx0fVxuXG5cdC8vIOODnOOCv+ODs+S9nOaIkFxuXHRjb25zdCBjbG9uZSA9ICR0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcblxuXHRjbG9uZS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImVkaXQyXCJdJykudmFsdWUgPSB1c2VyLmlkO1xuXHRjbG9uZS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRlbGV0ZVwiXScpLnZhbHVlID0gdXNlci5pZDtcblx0JGxpc3QuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuXG5cdC8vIOawtOW5s+e3muS9nOaIkFxuXHRjb25zdCAkaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG5cdCRsaXN0LmFwcGVuZENoaWxkKCRocik7XG5cdCRsaXN0LmNsYXNzTmFtZSA9IFwibGlzdFwiO1xuXG5cdC8vICR0b2RvTGlzdHPjg47jg7zjg4njgavlrZDjg47jg7zjg4njgajjgZfjgabov73liqBcblx0JHRvZG9MaXN0cy5hcHBlbmRDaGlsZCgkbGlzdCk7XG59XG5cbmV4cG9ydCB7IG1ha2VOb2RlIH07XG4iLCJjb25zdCAkcmVzY2hlZHVsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwicmVzY2hlZHVsZVwiKVswXTtcbmNvbnN0ICR0b2RvRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvRWRpdFwiKVswXTtcblxuaW1wb3J0IHsgYXBpVXJsIH0gZnJvbSBcIi4vYXBpLXVybC5qc1wiO1xuaW1wb3J0IHsgaGFuZGxlRXJyb3IgfSBmcm9tIFwiLi9oYW5kbGVlcnJvci5qc1wiO1xuXG5jb25zdCByZXNjaGVkdWxlQnV0dG9uID0gKCkgPT4ge1xuXHQkcmVzY2hlZHVsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcblx0XHQkcmVzY2hlZHVsZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cdFx0Y29uc3QgdG9kb09iamVjdDEgPSB7XG5cdFx0XHRXaGF0OiAkdG9kb0VkaXQucXVlcnlTZWxlY3RvcignW25hbWU9XCJXaGF0XCJdJykudmFsdWUsXG5cdFx0XHRQbGFjZTogJHRvZG9FZGl0LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiV2hlcmVcIl0nKS52YWx1ZSxcblx0XHRcdFVudGlsd2hlbjogJHRvZG9FZGl0LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiVW50aWx3aGVuXCJdJykudmFsdWUsXG5cdFx0fTtcblx0XHRjb25zdCBudW1iZXIgPSBlLnRhcmdldC52YWx1ZTtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhcGlVcmwgKyBgLyR7bnVtYmVyfWAsIHtcblx0XHRcdG1ldGhvZDogXCJQVVRcIixcblx0XHRcdGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHRvZG9PYmplY3QxKSxcblx0XHR9KTtcblx0XHRoYW5kbGVFcnJvcihyZXMpO1xuXHRcdCRyZXNjaGVkdWxlQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cdH0pO1xufTtcblxuZXhwb3J0IHsgcmVzY2hlZHVsZUJ1dHRvbiB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLCAyNTUsIDIyMCk7XFxuXFx0LyogZm9udDogMTRweCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7ICovXFxufVxcblxcbiN1c2VybmFtZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdG1hcmdpbi10b3A6IDV2aDtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbmlucHV0W25hbWU9XFxcIldoYXRcXFwiXSB7XFxuXFx0d2lkdGg6IDMwdnc7XFxufVxcblxcbiNoZWFkZXIge1xcblxcdGZvbnQtc2l6ZTogNDBweDtcXG5cXHRtYXJnaW4tYm90dG9tOiAwdmg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTFweDtcXG59XFxuXFxuI2FkZFRhc2tidXR0b24gPiBkaXYgPiBidXR0b24ge1xcblxcdG1hcmdpbi10b3A6IDV2aDtcXG5cXHRjb2xvcjogd2hpdGVzbW9rZTtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi50b2RvTWFrZSB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udG9kb01ha2UgZGl2OmZpcnN0LW9mLXR5cGUge1xcblxcdGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuLnRvZG9NYWtlID4gZGl2ID4gYnV0dG9uIHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi50b2RvRWRpdCB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udG9kb0VkaXQgZGl2OmZpcnN0LW9mLXR5cGUge1xcblxcdGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuLnRvZG9FZGl0ID4gZGl2ID4gYnV0dG9uIHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi50b2RvTGlzdCB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdG1hcmdpbi10b3A6IDEwdmg7XFxufVxcblxcbiNsaXN0IHtcXG5cXHRmb250LXNpemU6IDI4cHg7XFxufVxcblxcbi5idXR0b24gPiBidXR0b24ge1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuaHI6bm90KFtzaXplXSkge1xcblxcdC8qIGJvcmRlcjogbm9uZTsgKi9cXG5cXHRjb2xvcjogcmdiKDQ0LCAxOTIsIDI1MCk7XFxuXFx0aGVpZ2h0OiA0cHg7XFxuXFx0LyogYm9yZGVyLXN0eWxlOiBkYXNoZWQ7ICovXFxufVxcblxcbiNzcGFuIHtcXG5cXHRtYXJnaW4tbGVmdDogMnZ3O1xcbn1cXG5cXG4jbG9nb3V0IHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNzdHlsZSB7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0bWFyZ2luLXRvcDogMHB4O1xcblxcdG1hcmdpbi1sZWZ0OiA3dnc7XFxuXFx0bWFyZ2luLXJpZ2h0OiA3dnc7XFxuXFx0bWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG5cXHQjdXNlcm5hbWUge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXHRcXHRtYXJnaW4tdG9wOiAzdmg7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdH1cXG5cXG5cXHRpbnB1dFtuYW1lPVxcXCJXaGF0XFxcIl0ge1xcblxcdFxcdHdpZHRoOiA1MHZ3O1xcblxcdH1cXG5cXHQjaGVhZGVyIHtcXG5cXHRcXHRmb250LXNpemU6IDQwcHg7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMHZoO1xcblxcdH1cXG5cXG5cXHQjYWRkVGFza2J1dHRvbiA+IGRpdiA+IGJ1dHRvbiB7XFxuXFx0XFx0bWFyZ2luLXRvcDogM3ZoO1xcblxcdFxcdGNvbG9yOiB3aGl0ZXNtb2tlO1xcblxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9NYWtlIHtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0fVxcblxcblxcdC50b2RvTWFrZSBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAyOHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb01ha2UgPiBkaXYgPiBidXR0b24ge1xcblxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9FZGl0IHtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0fVxcblxcblxcdC50b2RvRWRpdCBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAyOHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb0VkaXQgPiBkaXYgPiBidXR0b24ge1xcblxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9MaXN0IHtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0XFx0bWFyZ2luLXRvcDogNXZoO1xcblxcdH1cXG5cXG5cXHQjbGlzdCB7XFxuXFx0XFx0Zm9udC1zaXplOiAyOHB4O1xcblxcdH1cXG5cXG5cXHQuYnV0dG9uID4gYnV0dG9uIHtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0fVxcblxcblxcdGhyOm5vdChbc2l6ZV0pIHtcXG5cXHRcXHQvKiBib3JkZXI6IG5vbmU7ICovXFxuXFx0XFx0Y29sb3I6IHJnYig0NCwgMTkyLCAyNTApO1xcblxcdFxcdGhlaWdodDogNHB4O1xcblxcdFxcdC8qIGJvcmRlci1zdHlsZTogZGFzaGVkOyAqL1xcblxcdH1cXG5cXHQjc3BhbiB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDJ2dztcXG5cXHR9XFxuXFxuXFx0I2xvZ291dCB7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdH1cXG5cXG5cXHQjc3R5bGUge1xcblxcdFxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdFxcdG1hcmdpbi10b3A6IDBweDtcXG5cXHRcXHRtYXJnaW4tbGVmdDogNXZ3O1xcblxcdFxcdG1hcmdpbi1yaWdodDogNXZ3O1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDBweDtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XFxuXFx0I3VzZXJuYW1lIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFx0XFx0bWFyZ2luLXRvcDogM3ZoO1xcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHR9XFxuXFxuXFx0aW5wdXRbbmFtZT1cXFwiV2hhdFxcXCJdIHtcXG5cXHRcXHR3aWR0aDogOTB2dztcXG5cXHR9XFxuXFx0I2hlYWRlciB7XFxuXFx0XFx0Zm9udC1zaXplOiAzMnB4O1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDB2aDtcXG5cXHR9XFxuXFxuXFx0I2FkZFRhc2tidXR0b24gPiBkaXYgPiBidXR0b24ge1xcblxcdFxcdG1hcmdpbi10b3A6IDN2aDtcXG5cXHRcXHRjb2xvcjogd2hpdGVzbW9rZTtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0fVxcblxcblxcdC50b2RvTWFrZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb01ha2UgZGl2OmZpcnN0LW9mLXR5cGUge1xcblxcdFxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9NYWtlID4gZGl2ID4gYnV0dG9uIHtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0XFx0bWFyZ2luLXRvcDogM3ZoO1xcblxcdH1cXG5cXG5cXHQudG9kb0VkaXQge1xcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9FZGl0IGRpdjpmaXJzdC1vZi10eXBlIHtcXG5cXHRcXHRmb250LXNpemU6IDI0cHg7XFxuXFx0fVxcblxcblxcdC50b2RvRWRpdCA+IGRpdiA+IGJ1dHRvbiB7XFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdFxcdG1hcmdpbi10b3A6IDN2aDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9MaXN0IHtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0XFx0bWFyZ2luLXRvcDogNXZoO1xcblxcdH1cXG5cXG5cXHQjbGlzdCB7XFxuXFx0XFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdH1cXG5cXG5cXHQuYnV0dG9uID4gYnV0dG9uIHtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0fVxcblxcblxcdGhyOm5vdChbc2l6ZV0pIHtcXG5cXHRcXHQvKiBib3JkZXI6IG5vbmU7ICovXFxuXFx0XFx0Y29sb3I6IHJnYig0NCwgMTkyLCAyNTApO1xcblxcdFxcdGhlaWdodDogNHB4O1xcblxcdFxcdC8qIGJvcmRlci1zdHlsZTogZGFzaGVkOyAqL1xcblxcdH1cXG5cXG5cXHQjc3BhbiB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDB2dztcXG5cXHRcXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0fVxcblxcblxcdCNsb2dvdXQge1xcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHR9XFxuXFxuXFx0I3N0eWxlIHtcXG5cXHRcXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRcXHRtYXJnaW4tdG9wOiAwcHg7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDB2dztcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDB2dztcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAwcHg7XFxuXFx0fVxcbn1cXG4vKiBhIHtcXG4gIGNvbG9yOiAjMDBCN0ZGO1xcbn0gKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50L3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLG9DQUFvQztDQUNwQyw4REFBOEQ7QUFDL0Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IseUJBQXlCO0NBQ3pCLGVBQWU7Q0FDZixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsd0JBQXdCO0NBQ3hCLFdBQVc7Q0FDWCwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2QixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQztFQUNDLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxXQUFXO0NBQ1o7Q0FDQTtFQUNDLGVBQWU7RUFDZixrQkFBa0I7Q0FDbkI7O0NBRUE7RUFDQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0VBQ2YsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0Msa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsMEJBQTBCO0NBQzNCO0NBQ0E7RUFDQyxnQkFBZ0I7Q0FDakI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7Q0FDbkI7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLFdBQVc7Q0FDWjtDQUNBO0VBQ0MsZUFBZTtFQUNmLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtFQUNmLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7RUFDZixlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtFQUNmLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLDBCQUEwQjtDQUMzQjs7Q0FFQTtFQUNDLGdCQUFnQjtFQUNoQixxQkFBcUI7Q0FDdEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7Q0FDbkI7QUFDRDtBQUNBOztHQUVHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDI1NSwgMjIwKTtcXG5cXHQvKiBmb250OiAxNHB4IFxcXCJMdWNpZGEgR3JhbmRlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjsgKi9cXG59XFxuXFxuI3VzZXJuYW1lIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFx0bWFyZ2luLXRvcDogNXZoO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuaW5wdXRbbmFtZT1cXFwiV2hhdFxcXCJdIHtcXG5cXHR3aWR0aDogMzB2dztcXG59XFxuXFxuI2hlYWRlciB7XFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcblxcdG1hcmdpbi1ib3R0b206IDB2aDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMXB4O1xcbn1cXG5cXG4jYWRkVGFza2J1dHRvbiA+IGRpdiA+IGJ1dHRvbiB7XFxuXFx0bWFyZ2luLXRvcDogNXZoO1xcblxcdGNvbG9yOiB3aGl0ZXNtb2tlO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnRvZG9NYWtlIHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi50b2RvTWFrZSBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0Zm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4udG9kb01ha2UgPiBkaXYgPiBidXR0b24ge1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnRvZG9FZGl0IHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi50b2RvRWRpdCBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0Zm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4udG9kb0VkaXQgPiBkaXYgPiBidXR0b24ge1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnRvZG9MaXN0IHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0bWFyZ2luLXRvcDogMTB2aDtcXG59XFxuXFxuI2xpc3Qge1xcblxcdGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuLmJ1dHRvbiA+IGJ1dHRvbiB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5ocjpub3QoW3NpemVdKSB7XFxuXFx0LyogYm9yZGVyOiBub25lOyAqL1xcblxcdGNvbG9yOiByZ2IoNDQsIDE5MiwgMjUwKTtcXG5cXHRoZWlnaHQ6IDRweDtcXG5cXHQvKiBib3JkZXItc3R5bGU6IGRhc2hlZDsgKi9cXG59XFxuXFxuI3NwYW4ge1xcblxcdG1hcmdpbi1sZWZ0OiAydnc7XFxufVxcblxcbiNsb2dvdXQge1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI3N0eWxlIHtcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRtYXJnaW4tdG9wOiAwcHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDd2dztcXG5cXHRtYXJnaW4tcmlnaHQ6IDd2dztcXG5cXHRtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcblxcdCN1c2VybmFtZSB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdFxcdG1hcmdpbi10b3A6IDN2aDtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0fVxcblxcblxcdGlucHV0W25hbWU9XFxcIldoYXRcXFwiXSB7XFxuXFx0XFx0d2lkdGg6IDUwdnc7XFxuXFx0fVxcblxcdCNoZWFkZXIge1xcblxcdFxcdGZvbnQtc2l6ZTogNDBweDtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAwdmg7XFxuXFx0fVxcblxcblxcdCNhZGRUYXNrYnV0dG9uID4gZGl2ID4gYnV0dG9uIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAzdmg7XFxuXFx0XFx0Y29sb3I6IHdoaXRlc21va2U7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb01ha2Uge1xcblxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9NYWtlIGRpdjpmaXJzdC1vZi10eXBlIHtcXG5cXHRcXHRmb250LXNpemU6IDI4cHg7XFxuXFx0fVxcblxcblxcdC50b2RvTWFrZSA+IGRpdiA+IGJ1dHRvbiB7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb0VkaXQge1xcblxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9FZGl0IGRpdjpmaXJzdC1vZi10eXBlIHtcXG5cXHRcXHRmb250LXNpemU6IDI4cHg7XFxuXFx0fVxcblxcblxcdC50b2RvRWRpdCA+IGRpdiA+IGJ1dHRvbiB7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb0xpc3Qge1xcblxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRcXHRtYXJnaW4tdG9wOiA1dmg7XFxuXFx0fVxcblxcblxcdCNsaXN0IHtcXG5cXHRcXHRmb250LXNpemU6IDI4cHg7XFxuXFx0fVxcblxcblxcdC5idXR0b24gPiBidXR0b24ge1xcblxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHR9XFxuXFxuXFx0aHI6bm90KFtzaXplXSkge1xcblxcdFxcdC8qIGJvcmRlcjogbm9uZTsgKi9cXG5cXHRcXHRjb2xvcjogcmdiKDQ0LCAxOTIsIDI1MCk7XFxuXFx0XFx0aGVpZ2h0OiA0cHg7XFxuXFx0XFx0LyogYm9yZGVyLXN0eWxlOiBkYXNoZWQ7ICovXFxuXFx0fVxcblxcdCNzcGFuIHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMnZ3O1xcblxcdH1cXG5cXG5cXHQjbG9nb3V0IHtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0fVxcblxcblxcdCNzdHlsZSB7XFxuXFx0XFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0XFx0bWFyZ2luLXRvcDogMHB4O1xcblxcdFxcdG1hcmdpbi1sZWZ0OiA1dnc7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiA1dnc7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMHB4O1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcXG5cXHQjdXNlcm5hbWUge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXHRcXHRtYXJnaW4tdG9wOiAzdmg7XFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdH1cXG5cXG5cXHRpbnB1dFtuYW1lPVxcXCJXaGF0XFxcIl0ge1xcblxcdFxcdHdpZHRoOiA5MHZ3O1xcblxcdH1cXG5cXHQjaGVhZGVyIHtcXG5cXHRcXHRmb250LXNpemU6IDMycHg7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMHZoO1xcblxcdH1cXG5cXG5cXHQjYWRkVGFza2J1dHRvbiA+IGRpdiA+IGJ1dHRvbiB7XFxuXFx0XFx0bWFyZ2luLXRvcDogM3ZoO1xcblxcdFxcdGNvbG9yOiB3aGl0ZXNtb2tlO1xcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9NYWtlIHtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0fVxcblxcblxcdC50b2RvTWFrZSBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb01ha2UgPiBkaXYgPiBidXR0b24ge1xcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRcXHRtYXJnaW4tdG9wOiAzdmg7XFxuXFx0fVxcblxcblxcdC50b2RvRWRpdCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb0VkaXQgZGl2OmZpcnN0LW9mLXR5cGUge1xcblxcdFxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9FZGl0ID4gZGl2ID4gYnV0dG9uIHtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0XFx0bWFyZ2luLXRvcDogM3ZoO1xcblxcdH1cXG5cXG5cXHQudG9kb0xpc3Qge1xcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRcXHRtYXJnaW4tdG9wOiA1dmg7XFxuXFx0fVxcblxcblxcdCNsaXN0IHtcXG5cXHRcXHRmb250LXNpemU6IDI0cHg7XFxuXFx0fVxcblxcblxcdC5idXR0b24gPiBidXR0b24ge1xcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHR9XFxuXFxuXFx0aHI6bm90KFtzaXplXSkge1xcblxcdFxcdC8qIGJvcmRlcjogbm9uZTsgKi9cXG5cXHRcXHRjb2xvcjogcmdiKDQ0LCAxOTIsIDI1MCk7XFxuXFx0XFx0aGVpZ2h0OiA0cHg7XFxuXFx0XFx0LyogYm9yZGVyLXN0eWxlOiBkYXNoZWQ7ICovXFxuXFx0fVxcblxcblxcdCNzcGFuIHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMHZ3O1xcblxcdFxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR9XFxuXFxuXFx0I2xvZ291dCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdH1cXG5cXG5cXHQjc3R5bGUge1xcblxcdFxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdFxcdG1hcmdpbi10b3A6IDBweDtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMHZ3O1xcblxcdFxcdG1hcmdpbi1yaWdodDogMHZ3O1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDBweDtcXG5cXHR9XFxufVxcbi8qIGEge1xcbiAgY29sb3I6ICMwMEI3RkY7XFxufSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vY29tcG9uZW50L3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgYmFja0J1dHRvbiB9IGZyb20gXCIuL2NvbXBvbmVudC9iYWNrYnV0dG9uLmpzXCI7XG5pbXBvcnQgeyBsaXN0VXNlcnMgfSBmcm9tIFwiLi9jb21wb25lbnQvbGlzdHVzZXJzLmpzXCI7XG5pbXBvcnQgeyBhcGlVcmwgfSBmcm9tIFwiLi9jb21wb25lbnQvYXBpLXVybC5qc1wiO1xuaW1wb3J0IHsgYWRkQnV0dG9uLCBhZGRUYXNrQnV0dG9uIH0gZnJvbSBcIi4vY29tcG9uZW50L2FkZGJ1dHRvbi5qc1wiO1xuaW1wb3J0IHsgcmVzY2hlZHVsZUJ1dHRvbiB9IGZyb20gXCIuL2NvbXBvbmVudC9yZXNjaGVkdWxlYnV0dG9uLmpzXCI7XG5cbmxpc3RVc2VycyhhcGlVcmwpO1xuXG5hZGRCdXR0b24oKTtcbmFkZFRhc2tCdXR0b24oKTtcbnJlc2NoZWR1bGVCdXR0b24oKTtcblxuYmFja0J1dHRvbigpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==