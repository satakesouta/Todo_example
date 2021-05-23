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
            _context.next = _context.t0 === 201 ? 6 : _context.t0 === 202 ? 11 : _context.t0 === 203 ? 15 : _context.t0 === (400, 500) ? 17 : 19;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vc3JjL2NvbXBvbmVudC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL3NyYy9jb21wb25lbnQvYWRkYnV0dG9uLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwvLi9zcmMvY29tcG9uZW50L2FwaS11cmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL3NyYy9jb21wb25lbnQvYmFja2J1dHRvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vc3JjL2NvbXBvbmVudC9kZWxldGVidXR0b24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL3NyYy9jb21wb25lbnQvZWRpdGJ1dHRvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vc3JjL2NvbXBvbmVudC9oYW5kbGVlcnJvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vc3JjL2NvbXBvbmVudC9saXN0dXNlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL3NyYy9jb21wb25lbnQvbWFrZW5vZGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL3NyYy9jb21wb25lbnQvcmVzY2hlZHVsZWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vc3JjL2NvbXBvbmVudC9zdHlsZS5jc3M/NmVjZiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vc3JjL2luZGV4My5qcyJdLCJuYW1lcyI6WyJvcHRpb25zIiwiaW5zZXJ0Iiwic2luZ2xldG9uIiwidXBkYXRlIiwiYXBpIiwiY29udGVudCIsIiRhZGRCdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiJHRvZG9NYWtlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIiRhZGRUYXNrYnV0dG9uIiwiYWRkQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc2FibGVkIiwidG9kb09iamVjdDEiLCJXaGF0IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiUGxhY2UiLCJVbnRpbHdoZW4iLCJmZXRjaCIsImFwaVVybCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImhhbmRsZUVycm9yIiwiYWRkVGFza0J1dHRvbiIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCIkYmFjayIsIiRmb3JtIiwiJHRvZG9FZGl0IiwiJGJhY2syIiwiYmFja0J1dHRvbiIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJlbGVtZW50IiwiJGRlbGV0ZUJ1dHRvbiIsImdldEVsZW1lbnRzQnlOYW1lIiwiZGVsZXRlQnV0dG9uIiwiaGFuZGxlckluZGV4MiIsImxlbmd0aCIsImUiLCJ0YXJnZXQiLCJudW1iZXIiLCIkbGlzdEluZGV4IiwiJHJlc2NoZWR1bGVOdW1iZXIiLCIkZm9ybTIiLCJlZGl0QnV0dG9uIiwidXNlcnMiLCJmZmYiLCJmaW5kIiwiaWQiLCJpIiwidXNlcnMyIiwiJHRvZG9saXN0IiwicmVtYWtlTGlzdCIsImhhbmRsZXJJbmRleCIsInJlbW92ZSIsImxpc3RVc2VycyIsImpzb24iLCJyZXNKc29uIiwic3RhdHVzIiwiYWxlcnQiLCJlcnJvciIsImdldFVzZXJzIiwieCIsIm1ha2VOb2RlIiwiJHRvZG9MaXN0cyIsIiR0ZW1wbGF0ZSIsImR0IiwiRGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJtbW9udGgiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvZGF5IiwiZ2V0RnVsbFllYXIiLCJzbGljZSIsInVzZXIiLCIkbGlzdCIsImNyZWF0ZUVsZW1lbnQiLCIkVW50aWx3aGVuIiwidGV4dENvbnRlbnQiLCIkV2hlcmUiLCIkV2hhdCIsImFwcGVuZENoaWxkIiwiY29sb3IiLCJjbG9uZSIsImNsb25lTm9kZSIsIiRociIsImNsYXNzTmFtZSIsIiRyZXNjaGVkdWxlQnV0dG9uIiwicmVzY2hlZHVsZUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdB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WSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7O1VDNVFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQXVELGtFQUFTLENBQUMvQyx5REFBRCxDQUFUO0FBRUFWLGtFQUFTO0FBQ1RrQixzRUFBYTtBQUNiMEUsZ0ZBQWdCO0FBRWhCL0Qsb0VBQVUsRyIsImZpbGUiOiJiYWJlbC13ZWJwYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL3N0eWxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImNvbnN0ICRhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFwiKTtcbmNvbnN0ICR0b2RvTWFrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvTWFrZVwiKVswXTtcbmNvbnN0ICRhZGRUYXNrYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrYnV0dG9uXCIpO1xuXG5pbXBvcnQgeyBhcGlVcmwgfSBmcm9tIFwiLi9hcGktdXJsLmpzXCI7XG5pbXBvcnQgeyBoYW5kbGVFcnJvciB9IGZyb20gXCIuL2hhbmRsZWVycm9yLmpzXCI7XG5cbmNvbnN0IGFkZEJ1dHRvbiA9ICgpID0+IHtcblx0JGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdCRhZGRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdGNvbnN0IHRvZG9PYmplY3QxID0ge1xuXHRcdFx0V2hhdDogJHRvZG9NYWtlLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiV2hhdFwiXScpLnZhbHVlLFxuXHRcdFx0UGxhY2U6ICR0b2RvTWFrZS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIldoZXJlXCJdJykudmFsdWUsXG5cdFx0XHRVbnRpbHdoZW46ICR0b2RvTWFrZS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIlVudGlsd2hlblwiXScpLnZhbHVlLFxuXHRcdH07XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0aGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkodG9kb09iamVjdDEpLFxuXHRcdH0pO1xuXHRcdGhhbmRsZUVycm9yKHJlcyk7XG5cdFx0JGFkZEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdC8vICRhZGRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG5cdH0pO1xufTtcblxuY29uc3QgYWRkVGFza0J1dHRvbiA9ICgpID0+IHtcblx0JGFkZFRhc2tidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHQkdG9kb01ha2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHQkYWRkVGFza2J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0d2luZG93LnNjcm9sbFRvKHtcblx0XHRcdHRvcDogMCxcblx0XHRcdGJlaGF2aW9yOiBcImF1dG9cIixcblx0XHR9KTtcblx0fSk7XG59O1xuXG5leHBvcnQgeyBhZGRCdXR0b24sIGFkZFRhc2tCdXR0b24gfTtcbiIsImNvbnN0IGFwaVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MVwiO1xuXG5leHBvcnQgeyBhcGlVcmwgfTtcbiIsImNvbnN0ICRiYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrXCIpO1xuY29uc3QgJGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9ybVwiKTtcbmNvbnN0ICR0b2RvRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvRWRpdFwiKVswXTtcbmNvbnN0ICRiYWNrMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFjazJcIik7XG5jb25zdCAkdG9kb01ha2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9kb01ha2VcIilbMF07XG5jb25zdCAkYWRkVGFza2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza2J1dHRvblwiKTtcblxuY29uc3QgYmFja0J1dHRvbiA9ICgpID0+IHtcblx0Ly8g5oi744KL44Oc44K/44Oz77yIVG9kb+S9nOaIkOashO+8iVxuXHQkYmFjay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdCR0b2RvTWFrZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0JGFkZFRhc2tidXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKCRmb3JtLCAoZWxlbWVudCkgPT4ge1xuXHRcdFx0ZWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cdFx0fSk7XG5cdFx0Ly8gJGZvcm0udmFsdWUgPSBcIlwiO1xuXHR9KTtcblxuXHQvLyDmiLvjgovjg5zjgr/jg7My77yIVG9kb+e3qOmbhuashO+8iVxuXHQkYmFjazIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHQkdG9kb0VkaXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdCRhZGRUYXNrYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdH0pO1xufTtcblxuZXhwb3J0IHsgYmFja0J1dHRvbiB9O1xuIiwiY29uc3QgJGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGVsZXRlXCIpO1xuXG5pbXBvcnQgeyBhcGlVcmwgfSBmcm9tIFwiLi9hcGktdXJsLmpzXCI7XG5pbXBvcnQgeyBoYW5kbGVFcnJvciB9IGZyb20gXCIuL2hhbmRsZWVycm9yLmpzXCI7XG5cbmNvbnN0IGRlbGV0ZUJ1dHRvbiA9ICgpID0+IHtcblx0bGV0IGhhbmRsZXJJbmRleDIgPSAwO1xuXHR3aGlsZSAoaGFuZGxlckluZGV4MiA8ICRkZWxldGVCdXR0b24ubGVuZ3RoKSB7XG5cdFx0JGRlbGV0ZUJ1dHRvbltoYW5kbGVySW5kZXgyXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcblx0XHRcdGUudGFyZ2V0LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdGNvbnN0IG51bWJlciA9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpVXJsICsgYC8ke251bWJlcn1gLCB7XG5cdFx0XHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRcdFx0aGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuXHRcdFx0fSk7XG5cdFx0XHRoYW5kbGVFcnJvcihyZXMpO1xuXHRcdH0pO1xuXHRcdGhhbmRsZXJJbmRleDIrKztcblx0fVxufTtcblxuZXhwb3J0IHsgZGVsZXRlQnV0dG9uIH07XG4iLCIvLyDnt6jpm4bjg5zjgr/jg7Pjga7jgqTjg5njg7Pjg4hcblxuY29uc3QgJGxpc3RJbmRleCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZWRpdDJcIik7XG5jb25zdCAkYWRkVGFza2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza2J1dHRvblwiKTtcbmNvbnN0ICR0b2RvRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvRWRpdFwiKVswXTtcbmNvbnN0ICRyZXNjaGVkdWxlTnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJyZXNjaGVkdWxlXCIpWzBdO1xuY29uc3QgJGZvcm0yID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZvcm0yXCIpO1xuY29uc3QgJHRvZG9NYWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG9NYWtlXCIpWzBdO1xuXG5jb25zdCBlZGl0QnV0dG9uID0gKHVzZXJzKSA9PiB7XG5cdGxldCBoYW5kbGVySW5kZXgyID0gMDtcblx0d2hpbGUgKGhhbmRsZXJJbmRleDIgPCAkbGlzdEluZGV4Lmxlbmd0aCkge1xuXHRcdCRsaXN0SW5kZXhbaGFuZGxlckluZGV4Ml0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oe1xuXHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdGJlaGF2aW9yOiBcImF1dG9cIixcblx0XHRcdH0pO1xuXHRcdFx0bGV0IGZmZiA9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0JGFkZFRhc2tidXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0JHRvZG9FZGl0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHQkdG9kb01ha2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0JHJlc2NoZWR1bGVOdW1iZXIudmFsdWUgPSBmZmY7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhmZmYpO1xuXHRcdFx0Y29uc3QgdGFyZ2V0ID0gdXNlcnMuZmluZCgobnVtYmVyKSA9PiB7XG5cdFx0XHRcdHJldHVybiBgJHtudW1iZXIuaWR9YCA9PT0gZmZmO1xuXHRcdFx0fSk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0YXJnZXQpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAkZm9ybTIubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgdXNlcnMyID0gW3RhcmdldC5XaGF0LCB0YXJnZXQuVW50aWx3aGVuLCB0YXJnZXQuUGxhY2VdO1xuXHRcdFx0XHQkZm9ybTJbaV0udmFsdWUgPSB1c2VyczJbaV07XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0aGFuZGxlckluZGV4MisrO1xuXHR9XG59O1xuXG5leHBvcnQgeyBlZGl0QnV0dG9uIH07XG4iLCJjb25zdCAkdG9kb2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlzdFwiKTtcbmNvbnN0ICR0b2RvTWFrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvTWFrZVwiKVswXTtcbmNvbnN0ICRhZGRUYXNrYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrYnV0dG9uXCIpO1xuY29uc3QgJGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9ybVwiKTtcbmNvbnN0ICR0b2RvRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvRWRpdFwiKVswXTtcblxuaW1wb3J0IHsgbGlzdFVzZXJzIH0gZnJvbSBcIi4vbGlzdHVzZXJzLmpzXCI7XG5pbXBvcnQgeyBhcGlVcmwgfSBmcm9tIFwiLi9hcGktdXJsLmpzXCI7XG5cbmNvbnN0IHJlbWFrZUxpc3QgPSAoKSA9PiB7XG5cdGxldCBoYW5kbGVySW5kZXggPSAwO1xuXHR3aGlsZSAoaGFuZGxlckluZGV4IDwgJHRvZG9saXN0Lmxlbmd0aCkge1xuXHRcdCR0b2RvbGlzdFswXS5yZW1vdmUoKTtcblx0XHQvLyBoYW5kbGVySW5kZXgrKztcblx0fVxuXHRsaXN0VXNlcnMoYXBpVXJsKTtcbn07XG5cbmNvbnN0IGhhbmRsZUVycm9yID0gYXN5bmMgKHJlcykgPT4ge1xuXHRjb25zdCByZXNKc29uID0gYXdhaXQgcmVzLmpzb24oKTtcblxuXHRzd2l0Y2ggKHJlcy5zdGF0dXMpIHtcblx0XHRjYXNlIDIwMTpcblx0XHRcdC8vIHBvc3Tjg6Hjgr3jg4Pjg4lcblx0XHRcdHJlbWFrZUxpc3QoKTtcblx0XHRcdCR0b2RvTWFrZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHQkYWRkVGFza2J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCgkZm9ybSwgKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0ZWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cdFx0XHR9KTtcblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSAyMDI6XG5cdFx0XHQvLyBwdXTjg6Hjgr3jg4Pjg4lcblx0XHRcdHJlbWFrZUxpc3QoKTtcblx0XHRcdCR0b2RvRWRpdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHQkYWRkVGFza2J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlIDIwMzpcblx0XHRcdC8vIGRlbGV0ZeODoeOCveODg+ODiVxuXHRcdFx0cmVtYWtlTGlzdCgpO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlICg0MDAsIDUwMCk6XG5cdFx0XHRhbGVydChyZXNKc29uLmVycm9yKTtcblx0XHRcdGJyZWFrO1xuXHR9XG59O1xuXG5leHBvcnQgeyBoYW5kbGVFcnJvciB9O1xuIiwiY29uc3QgJHRvZG9NYWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG9NYWtlXCIpWzBdO1xuXG5pbXBvcnQgeyBtYWtlTm9kZSB9IGZyb20gXCIuL21ha2Vub2RlLmpzXCI7XG5pbXBvcnQgeyBlZGl0QnV0dG9uIH0gZnJvbSBcIi4vZWRpdGJ1dHRvbi5qc1wiO1xuaW1wb3J0IHsgZGVsZXRlQnV0dG9uIH0gZnJvbSBcIi4vZGVsZXRlYnV0dG9uLmpzXCI7XG5cbi8vIOmWouaVsCDjg4fjg7zjgr/jga7jgoTjgorlj5bjgopcbmFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzKHgpIHtcblx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goeCk7XG5cdGNvbnN0IHVzZXJzID0gYXdhaXQgcmVzLmpzb24oKTtcblx0cmV0dXJuIHVzZXJzO1xufVxuXG5jb25zdCBsaXN0VXNlcnMgPSBhc3luYyAoeCkgPT4ge1xuXHQvLyBKU09O44OH44O844K/44Gu44KE44KK5Y+W44KKXG5cdGNvbnN0IHVzZXJzID0gYXdhaXQgZ2V0VXNlcnMoeCk7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3R5bGVcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0JHRvZG9NYWtlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0Ly8gIERPTeaTjeS9nFxuXHRsZXQgaGFuZGxlckluZGV4ID0gMDtcblx0aWYgKCEodXNlcnMgPT0gbnVsbCkpIHtcblx0XHR3aGlsZSAoaGFuZGxlckluZGV4IDwgdXNlcnMubGVuZ3RoKSB7XG5cdFx0XHRtYWtlTm9kZSh1c2Vyc1toYW5kbGVySW5kZXhdKTtcblx0XHRcdGhhbmRsZXJJbmRleCsrO1xuXHRcdH1cblx0fVxuXG5cdGVkaXRCdXR0b24odXNlcnMpO1xuXG5cdGRlbGV0ZUJ1dHRvbigpO1xufTtcblxuZXhwb3J0IHsgbGlzdFVzZXJzLCBnZXRVc2VycyB9O1xuIiwiY29uc3QgJHRvZG9MaXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvTGlzdFwiKVswXTtcbmNvbnN0ICR0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcGxhdGVcIik7XG5cbmNvbnN0IGR0ID0gbmV3IERhdGUoKTtcbmNvbnN0IG1vbnRoID0gZHQuZ2V0TW9udGgoKSArIDE7XG5jb25zdCBtbW9udGggPSBcIjBcIiArIG1vbnRoO1xuY29uc3QgZGF0ZSA9IFwiMFwiICsgZHQuZ2V0RGF0ZSgpO1xuY29uc3QgdG9kYXkgPSBkdC5nZXRGdWxsWWVhcigpICsgXCItXCIgKyBtbW9udGguc2xpY2UoLTIpICsgXCItXCIgKyBkYXRlLnNsaWNlKC0yKTtcblxuZnVuY3Rpb24gbWFrZU5vZGUodXNlcikge1xuXHQvLyDlhaXlipvmrITkvZzmiJBcblx0Y29uc3QgJGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCAkVW50aWx3aGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdCRVbnRpbHdoZW4udGV4dENvbnRlbnQgPSBcIlVudGlsIHdoZW46XCIgKyB1c2VyLlVudGlsd2hlbjtcblx0Y29uc3QgJFdoZXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdCRXaGVyZS5pZCA9IFwic3BhblwiO1xuXHQkV2hlcmUudGV4dENvbnRlbnQgPSBcIldoZXJlOlwiICsgdXNlci5QbGFjZTtcblx0Y29uc3QgJFdoYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHQkV2hhdC50ZXh0Q29udGVudCA9IFwiV2hhdDpcIiArIHVzZXIuV2hhdDtcblx0JGxpc3QuYXBwZW5kQ2hpbGQoJFVudGlsd2hlbik7XG5cdCRsaXN0LmFwcGVuZENoaWxkKCRXaGVyZSk7XG5cdCRsaXN0LmFwcGVuZENoaWxkKCRXaGF0KTtcblx0aWYgKHVzZXIuVW50aWx3aGVuIDwgdG9kYXkpIHtcblx0XHQkbGlzdC5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG5cdH1cblxuXHQvLyDjg5zjgr/jg7PkvZzmiJBcblx0Y29uc3QgY2xvbmUgPSAkdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cblx0Y2xvbmUucXVlcnlTZWxlY3RvcignW25hbWU9XCJlZGl0MlwiXScpLnZhbHVlID0gdXNlci5pZDtcblx0Y2xvbmUucXVlcnlTZWxlY3RvcignW25hbWU9XCJkZWxldGVcIl0nKS52YWx1ZSA9IHVzZXIuaWQ7XG5cdCRsaXN0LmFwcGVuZENoaWxkKGNsb25lKTtcblxuXHQvLyDmsLTlubPnt5rkvZzmiJBcblx0Y29uc3QgJGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuXHQkbGlzdC5hcHBlbmRDaGlsZCgkaHIpO1xuXHQkbGlzdC5jbGFzc05hbWUgPSBcImxpc3RcIjtcblxuXHQvLyAkdG9kb0xpc3Rz44OO44O844OJ44Gr5a2Q44OO44O844OJ44Go44GX44Gm6L+95YqgXG5cdCR0b2RvTGlzdHMuYXBwZW5kQ2hpbGQoJGxpc3QpO1xufVxuXG5leHBvcnQgeyBtYWtlTm9kZSB9O1xuIiwiY29uc3QgJHJlc2NoZWR1bGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcInJlc2NoZWR1bGVcIilbMF07XG5jb25zdCAkdG9kb0VkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9kb0VkaXRcIilbMF07XG5cbmltcG9ydCB7IGFwaVVybCB9IGZyb20gXCIuL2FwaS11cmwuanNcIjtcbmltcG9ydCB7IGhhbmRsZUVycm9yIH0gZnJvbSBcIi4vaGFuZGxlZXJyb3IuanNcIjtcblxuY29uc3QgcmVzY2hlZHVsZUJ1dHRvbiA9ICgpID0+IHtcblx0JHJlc2NoZWR1bGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlKSA9PiB7XG5cdFx0JHJlc2NoZWR1bGVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdGNvbnN0IHRvZG9PYmplY3QxID0ge1xuXHRcdFx0V2hhdDogJHRvZG9FZGl0LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiV2hhdFwiXScpLnZhbHVlLFxuXHRcdFx0UGxhY2U6ICR0b2RvRWRpdC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIldoZXJlXCJdJykudmFsdWUsXG5cdFx0XHRVbnRpbHdoZW46ICR0b2RvRWRpdC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIlVudGlsd2hlblwiXScpLnZhbHVlLFxuXHRcdH07XG5cdFx0Y29uc3QgbnVtYmVyID0gZS50YXJnZXQudmFsdWU7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpVXJsICsgYC8ke251bWJlcn1gLCB7XG5cdFx0XHRtZXRob2Q6IFwiUFVUXCIsXG5cdFx0XHRoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh0b2RvT2JqZWN0MSksXG5cdFx0fSk7XG5cdFx0aGFuZGxlRXJyb3IocmVzKTtcblx0XHQkcmVzY2hlZHVsZUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7IHJlc2NoZWR1bGVCdXR0b24gfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCwgMjU1LCAyMjApO1xcblxcdC8qIGZvbnQ6IDE0cHggXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmOyAqL1xcbn1cXG5cXG4jdXNlcm5hbWUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXHRtYXJnaW4tdG9wOiA1dmg7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5pbnB1dFtuYW1lPVxcXCJXaGF0XFxcIl0ge1xcblxcdHdpZHRoOiAzMHZ3O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG5cXHRmb250LXNpemU6IDQwcHg7XFxuXFx0bWFyZ2luLWJvdHRvbTogMHZoO1xcblxcdGJvcmRlci1yYWRpdXM6IDExcHg7XFxufVxcblxcbiNhZGRUYXNrYnV0dG9uID4gZGl2ID4gYnV0dG9uIHtcXG5cXHRtYXJnaW4tdG9wOiA1dmg7XFxuXFx0Y29sb3I6IHdoaXRlc21va2U7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udG9kb01ha2Uge1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnRvZG9NYWtlIGRpdjpmaXJzdC1vZi10eXBlIHtcXG5cXHRmb250LXNpemU6IDI4cHg7XFxufVxcblxcbi50b2RvTWFrZSA+IGRpdiA+IGJ1dHRvbiB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udG9kb0VkaXQge1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnRvZG9FZGl0IGRpdjpmaXJzdC1vZi10eXBlIHtcXG5cXHRmb250LXNpemU6IDI4cHg7XFxufVxcblxcbi50b2RvRWRpdCA+IGRpdiA+IGJ1dHRvbiB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udG9kb0xpc3Qge1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRtYXJnaW4tdG9wOiAxMHZoO1xcbn1cXG5cXG4jbGlzdCB7XFxuXFx0Zm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4uYnV0dG9uID4gYnV0dG9uIHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbmhyOm5vdChbc2l6ZV0pIHtcXG5cXHQvKiBib3JkZXI6IG5vbmU7ICovXFxuXFx0Y29sb3I6IHJnYig0NCwgMTkyLCAyNTApO1xcblxcdGhlaWdodDogNHB4O1xcblxcdC8qIGJvcmRlci1zdHlsZTogZGFzaGVkOyAqL1xcbn1cXG5cXG4jc3BhbiB7XFxuXFx0bWFyZ2luLWxlZnQ6IDJ2dztcXG59XFxuXFxuI2xvZ291dCB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jc3R5bGUge1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdG1hcmdpbi10b3A6IDBweDtcXG5cXHRtYXJnaW4tbGVmdDogN3Z3O1xcblxcdG1hcmdpbi1yaWdodDogN3Z3O1xcblxcdG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuXFx0I3VzZXJuYW1lIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFx0XFx0bWFyZ2luLXRvcDogM3ZoO1xcblxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHR9XFxuXFxuXFx0aW5wdXRbbmFtZT1cXFwiV2hhdFxcXCJdIHtcXG5cXHRcXHR3aWR0aDogNTB2dztcXG5cXHR9XFxuXFx0I2hlYWRlciB7XFxuXFx0XFx0Zm9udC1zaXplOiA0MHB4O1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDB2aDtcXG5cXHR9XFxuXFxuXFx0I2FkZFRhc2tidXR0b24gPiBkaXYgPiBidXR0b24ge1xcblxcdFxcdG1hcmdpbi10b3A6IDN2aDtcXG5cXHRcXHRjb2xvcjogd2hpdGVzbW9rZTtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0fVxcblxcblxcdC50b2RvTWFrZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb01ha2UgZGl2OmZpcnN0LW9mLXR5cGUge1xcblxcdFxcdGZvbnQtc2l6ZTogMjhweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9NYWtlID4gZGl2ID4gYnV0dG9uIHtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0fVxcblxcblxcdC50b2RvRWRpdCB7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb0VkaXQgZGl2OmZpcnN0LW9mLXR5cGUge1xcblxcdFxcdGZvbnQtc2l6ZTogMjhweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9FZGl0ID4gZGl2ID4gYnV0dG9uIHtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0fVxcblxcblxcdC50b2RvTGlzdCB7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdFxcdG1hcmdpbi10b3A6IDV2aDtcXG5cXHR9XFxuXFxuXFx0I2xpc3Qge1xcblxcdFxcdGZvbnQtc2l6ZTogMjhweDtcXG5cXHR9XFxuXFxuXFx0LmJ1dHRvbiA+IGJ1dHRvbiB7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdH1cXG5cXG5cXHRocjpub3QoW3NpemVdKSB7XFxuXFx0XFx0LyogYm9yZGVyOiBub25lOyAqL1xcblxcdFxcdGNvbG9yOiByZ2IoNDQsIDE5MiwgMjUwKTtcXG5cXHRcXHRoZWlnaHQ6IDRweDtcXG5cXHRcXHQvKiBib3JkZXItc3R5bGU6IGRhc2hlZDsgKi9cXG5cXHR9XFxuXFx0I3NwYW4ge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAydnc7XFxuXFx0fVxcblxcblxcdCNsb2dvdXQge1xcblxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHR9XFxuXFxuXFx0I3N0eWxlIHtcXG5cXHRcXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRcXHRtYXJnaW4tdG9wOiAwcHg7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDV2dztcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDV2dztcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAwcHg7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xcblxcdCN1c2VybmFtZSB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdFxcdG1hcmdpbi10b3A6IDN2aDtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0fVxcblxcblxcdGlucHV0W25hbWU9XFxcIldoYXRcXFwiXSB7XFxuXFx0XFx0d2lkdGg6IDkwdnc7XFxuXFx0fVxcblxcdCNoZWFkZXIge1xcblxcdFxcdGZvbnQtc2l6ZTogMzJweDtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAwdmg7XFxuXFx0fVxcblxcblxcdCNhZGRUYXNrYnV0dG9uID4gZGl2ID4gYnV0dG9uIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAzdmg7XFxuXFx0XFx0Y29sb3I6IHdoaXRlc21va2U7XFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb01ha2Uge1xcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9NYWtlIGRpdjpmaXJzdC1vZi10eXBlIHtcXG5cXHRcXHRmb250LXNpemU6IDI0cHg7XFxuXFx0fVxcblxcblxcdC50b2RvTWFrZSA+IGRpdiA+IGJ1dHRvbiB7XFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdFxcdG1hcmdpbi10b3A6IDN2aDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9FZGl0IHtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0fVxcblxcblxcdC50b2RvRWRpdCBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb0VkaXQgPiBkaXYgPiBidXR0b24ge1xcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRcXHRtYXJnaW4tdG9wOiAzdmg7XFxuXFx0fVxcblxcblxcdC50b2RvTGlzdCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdFxcdG1hcmdpbi10b3A6IDV2aDtcXG5cXHR9XFxuXFxuXFx0I2xpc3Qge1xcblxcdFxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHR9XFxuXFxuXFx0LmJ1dHRvbiA+IGJ1dHRvbiB7XFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdH1cXG5cXG5cXHRocjpub3QoW3NpemVdKSB7XFxuXFx0XFx0LyogYm9yZGVyOiBub25lOyAqL1xcblxcdFxcdGNvbG9yOiByZ2IoNDQsIDE5MiwgMjUwKTtcXG5cXHRcXHRoZWlnaHQ6IDRweDtcXG5cXHRcXHQvKiBib3JkZXItc3R5bGU6IGRhc2hlZDsgKi9cXG5cXHR9XFxuXFxuXFx0I3NwYW4ge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwdnc7XFxuXFx0XFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdH1cXG5cXG5cXHQjbG9nb3V0IHtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0fVxcblxcblxcdCNzdHlsZSB7XFxuXFx0XFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0XFx0bWFyZ2luLXRvcDogMHB4O1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwdnc7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAwdnc7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMHB4O1xcblxcdH1cXG59XFxuLyogYSB7XFxuICBjb2xvcjogIzAwQjdGRjtcXG59ICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudC9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxvQ0FBb0M7Q0FDcEMsOERBQThEO0FBQy9EOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHlCQUF5QjtDQUN6QixlQUFlO0NBQ2YsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHdCQUF3QjtDQUN4QixXQUFXO0NBQ1gsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0M7RUFDQyxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsV0FBVztDQUNaO0NBQ0E7RUFDQyxlQUFlO0VBQ2Ysa0JBQWtCO0NBQ25COztDQUVBO0VBQ0MsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtFQUNmLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLDBCQUEwQjtDQUMzQjtDQUNBO0VBQ0MsZ0JBQWdCO0NBQ2pCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25CO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxXQUFXO0NBQ1o7Q0FDQTtFQUNDLGVBQWU7RUFDZixrQkFBa0I7Q0FDbkI7O0NBRUE7RUFDQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7RUFDZixlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0VBQ2YsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7RUFDZixlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCwwQkFBMEI7Q0FDM0I7O0NBRUE7RUFDQyxnQkFBZ0I7RUFDaEIscUJBQXFCO0NBQ3RCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25CO0FBQ0Q7QUFDQTs7R0FFR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLCAyNTUsIDIyMCk7XFxuXFx0LyogZm9udDogMTRweCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7ICovXFxufVxcblxcbiN1c2VybmFtZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdG1hcmdpbi10b3A6IDV2aDtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbmlucHV0W25hbWU9XFxcIldoYXRcXFwiXSB7XFxuXFx0d2lkdGg6IDMwdnc7XFxufVxcblxcbiNoZWFkZXIge1xcblxcdGZvbnQtc2l6ZTogNDBweDtcXG5cXHRtYXJnaW4tYm90dG9tOiAwdmg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTFweDtcXG59XFxuXFxuI2FkZFRhc2tidXR0b24gPiBkaXYgPiBidXR0b24ge1xcblxcdG1hcmdpbi10b3A6IDV2aDtcXG5cXHRjb2xvcjogd2hpdGVzbW9rZTtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi50b2RvTWFrZSB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udG9kb01ha2UgZGl2OmZpcnN0LW9mLXR5cGUge1xcblxcdGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuLnRvZG9NYWtlID4gZGl2ID4gYnV0dG9uIHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi50b2RvRWRpdCB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udG9kb0VkaXQgZGl2OmZpcnN0LW9mLXR5cGUge1xcblxcdGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuLnRvZG9FZGl0ID4gZGl2ID4gYnV0dG9uIHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi50b2RvTGlzdCB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdG1hcmdpbi10b3A6IDEwdmg7XFxufVxcblxcbiNsaXN0IHtcXG5cXHRmb250LXNpemU6IDI4cHg7XFxufVxcblxcbi5idXR0b24gPiBidXR0b24ge1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuaHI6bm90KFtzaXplXSkge1xcblxcdC8qIGJvcmRlcjogbm9uZTsgKi9cXG5cXHRjb2xvcjogcmdiKDQ0LCAxOTIsIDI1MCk7XFxuXFx0aGVpZ2h0OiA0cHg7XFxuXFx0LyogYm9yZGVyLXN0eWxlOiBkYXNoZWQ7ICovXFxufVxcblxcbiNzcGFuIHtcXG5cXHRtYXJnaW4tbGVmdDogMnZ3O1xcbn1cXG5cXG4jbG9nb3V0IHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNzdHlsZSB7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0bWFyZ2luLXRvcDogMHB4O1xcblxcdG1hcmdpbi1sZWZ0OiA3dnc7XFxuXFx0bWFyZ2luLXJpZ2h0OiA3dnc7XFxuXFx0bWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG5cXHQjdXNlcm5hbWUge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXHRcXHRtYXJnaW4tdG9wOiAzdmg7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdH1cXG5cXG5cXHRpbnB1dFtuYW1lPVxcXCJXaGF0XFxcIl0ge1xcblxcdFxcdHdpZHRoOiA1MHZ3O1xcblxcdH1cXG5cXHQjaGVhZGVyIHtcXG5cXHRcXHRmb250LXNpemU6IDQwcHg7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMHZoO1xcblxcdH1cXG5cXG5cXHQjYWRkVGFza2J1dHRvbiA+IGRpdiA+IGJ1dHRvbiB7XFxuXFx0XFx0bWFyZ2luLXRvcDogM3ZoO1xcblxcdFxcdGNvbG9yOiB3aGl0ZXNtb2tlO1xcblxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9NYWtlIHtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0fVxcblxcblxcdC50b2RvTWFrZSBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAyOHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb01ha2UgPiBkaXYgPiBidXR0b24ge1xcblxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9FZGl0IHtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0fVxcblxcblxcdC50b2RvRWRpdCBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAyOHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb0VkaXQgPiBkaXYgPiBidXR0b24ge1xcblxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9MaXN0IHtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0XFx0bWFyZ2luLXRvcDogNXZoO1xcblxcdH1cXG5cXG5cXHQjbGlzdCB7XFxuXFx0XFx0Zm9udC1zaXplOiAyOHB4O1xcblxcdH1cXG5cXG5cXHQuYnV0dG9uID4gYnV0dG9uIHtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0fVxcblxcblxcdGhyOm5vdChbc2l6ZV0pIHtcXG5cXHRcXHQvKiBib3JkZXI6IG5vbmU7ICovXFxuXFx0XFx0Y29sb3I6IHJnYig0NCwgMTkyLCAyNTApO1xcblxcdFxcdGhlaWdodDogNHB4O1xcblxcdFxcdC8qIGJvcmRlci1zdHlsZTogZGFzaGVkOyAqL1xcblxcdH1cXG5cXHQjc3BhbiB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDJ2dztcXG5cXHR9XFxuXFxuXFx0I2xvZ291dCB7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdH1cXG5cXG5cXHQjc3R5bGUge1xcblxcdFxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdFxcdG1hcmdpbi10b3A6IDBweDtcXG5cXHRcXHRtYXJnaW4tbGVmdDogNXZ3O1xcblxcdFxcdG1hcmdpbi1yaWdodDogNXZ3O1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDBweDtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XFxuXFx0I3VzZXJuYW1lIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFx0XFx0bWFyZ2luLXRvcDogM3ZoO1xcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHR9XFxuXFxuXFx0aW5wdXRbbmFtZT1cXFwiV2hhdFxcXCJdIHtcXG5cXHRcXHR3aWR0aDogOTB2dztcXG5cXHR9XFxuXFx0I2hlYWRlciB7XFxuXFx0XFx0Zm9udC1zaXplOiAzMnB4O1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDB2aDtcXG5cXHR9XFxuXFxuXFx0I2FkZFRhc2tidXR0b24gPiBkaXYgPiBidXR0b24ge1xcblxcdFxcdG1hcmdpbi10b3A6IDN2aDtcXG5cXHRcXHRjb2xvcjogd2hpdGVzbW9rZTtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0fVxcblxcblxcdC50b2RvTWFrZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdH1cXG5cXG5cXHQudG9kb01ha2UgZGl2OmZpcnN0LW9mLXR5cGUge1xcblxcdFxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9NYWtlID4gZGl2ID4gYnV0dG9uIHtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0XFx0bWFyZ2luLXRvcDogM3ZoO1xcblxcdH1cXG5cXG5cXHQudG9kb0VkaXQge1xcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9FZGl0IGRpdjpmaXJzdC1vZi10eXBlIHtcXG5cXHRcXHRmb250LXNpemU6IDI0cHg7XFxuXFx0fVxcblxcblxcdC50b2RvRWRpdCA+IGRpdiA+IGJ1dHRvbiB7XFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdFxcdG1hcmdpbi10b3A6IDN2aDtcXG5cXHR9XFxuXFxuXFx0LnRvZG9MaXN0IHtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0XFx0bWFyZ2luLXRvcDogNXZoO1xcblxcdH1cXG5cXG5cXHQjbGlzdCB7XFxuXFx0XFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdH1cXG5cXG5cXHQuYnV0dG9uID4gYnV0dG9uIHtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0fVxcblxcblxcdGhyOm5vdChbc2l6ZV0pIHtcXG5cXHRcXHQvKiBib3JkZXI6IG5vbmU7ICovXFxuXFx0XFx0Y29sb3I6IHJnYig0NCwgMTkyLCAyNTApO1xcblxcdFxcdGhlaWdodDogNHB4O1xcblxcdFxcdC8qIGJvcmRlci1zdHlsZTogZGFzaGVkOyAqL1xcblxcdH1cXG5cXG5cXHQjc3BhbiB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDB2dztcXG5cXHRcXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0fVxcblxcblxcdCNsb2dvdXQge1xcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHR9XFxuXFxuXFx0I3N0eWxlIHtcXG5cXHRcXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRcXHRtYXJnaW4tdG9wOiAwcHg7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDB2dztcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDB2dztcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAwcHg7XFxuXFx0fVxcbn1cXG4vKiBhIHtcXG4gIGNvbG9yOiAjMDBCN0ZGO1xcbn0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2NvbXBvbmVudC9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGJhY2tCdXR0b24gfSBmcm9tIFwiLi9jb21wb25lbnQvYmFja2J1dHRvbi5qc1wiO1xuaW1wb3J0IHsgbGlzdFVzZXJzIH0gZnJvbSBcIi4vY29tcG9uZW50L2xpc3R1c2Vycy5qc1wiO1xuaW1wb3J0IHsgYXBpVXJsIH0gZnJvbSBcIi4vY29tcG9uZW50L2FwaS11cmwuanNcIjtcbmltcG9ydCB7IGFkZEJ1dHRvbiwgYWRkVGFza0J1dHRvbiB9IGZyb20gXCIuL2NvbXBvbmVudC9hZGRidXR0b24uanNcIjtcbmltcG9ydCB7IHJlc2NoZWR1bGVCdXR0b24gfSBmcm9tIFwiLi9jb21wb25lbnQvcmVzY2hlZHVsZWJ1dHRvbi5qc1wiO1xuXG5saXN0VXNlcnMoYXBpVXJsKTtcblxuYWRkQnV0dG9uKCk7XG5hZGRUYXNrQnV0dG9uKCk7XG5yZXNjaGVkdWxlQnV0dG9uKCk7XG5cbmJhY2tCdXR0b24oKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=