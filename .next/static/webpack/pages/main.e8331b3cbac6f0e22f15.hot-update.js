webpackHotUpdate_N_E("pages/main",{

/***/ "./src/components/Quiz.js":
/*!********************************!*\
  !*** ./src/components/Quiz.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/kenta/Documents/react/brand-quiz-app/src/components/Quiz.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nconst Quiz = props => {\n  const attachClass = (choiceNum, correctNum, answerNum) => {\n    console.log(choiceNum, correctNum, answerNum);\n\n    if (choiceNum === correctNum) {\n      return \"choice question-correct-choice\";\n    } else if (choiceNum === answerNum) {\n      return \"choice question-wrong-choice\";\n    } else {\n      return \"choice question-choice\";\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: \"jsx-3286440104\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, \"Question\"), props.quiz && __jsx(\"div\", {\n    className: \"jsx-3286440104\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    className: \"jsx-3286440104\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, props.quiz.text), __jsx(\"div\", {\n    className: \"jsx-3286440104\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }, props.answer || __jsx(\"div\", {\n    className: \"jsx-3286440104\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 15\n    }\n  }, __jsx(\"button\", {\n    onClick: () => props.showAnswer(1, props.quiz.answer),\n    className: \"jsx-3286440104\" + \" \" + \"choice question-choice\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"jsx-3286440104\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 19\n    }\n  }, props.quiz.choice1)), __jsx(\"button\", {\n    onClick: () => props.showAnswer(2, props.quiz.answer),\n    className: \"jsx-3286440104\" + \" \" + \"choice question-choice\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"jsx-3286440104\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 19\n    }\n  }, props.quiz.choice2)), __jsx(\"button\", {\n    onClick: () => props.showAnswer(3, props.quiz.answer),\n    className: \"jsx-3286440104\" + \" \" + \"choice question-choice\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"jsx-3286440104\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 19\n    }\n  }, props.quiz.choice3)), __jsx(\"button\", {\n    onClick: () => props.showAnswer(4, props.quiz.answer),\n    className: \"jsx-3286440104\" + \" \" + \"choice question-choice\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"jsx-3286440104\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 19\n    }\n  }, props.quiz.choice4))), props.answer && __jsx(\"div\", {\n    className: \"jsx-3286440104\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 15\n    }\n  }, __jsx(\"button\", {\n    onClick: () => props.showAnswer(1, props.quiz.answer),\n    className: \"jsx-3286440104\" + \" \" + (attachClass(1, props.quiz.answer, props.answerNumber) || \"\"),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"jsx-3286440104\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 19\n    }\n  }, props.quiz.choice1)), __jsx(\"button\", {\n    onClick: () => props.showAnswer(2, props.quiz.answer),\n    className: \"jsx-3286440104\" + \" \" + (attachClass(2, props.quiz.answer, props.answerNumber) || \"\"),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"jsx-3286440104\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 19\n    }\n  }, props.quiz.choice2)), __jsx(\"button\", {\n    onClick: () => props.showAnswer(3, props.quiz.answer),\n    className: \"jsx-3286440104\" + \" \" + (attachClass(3, props.quiz.answer, props.answerNumber) || \"\"),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"jsx-3286440104\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 19\n    }\n  }, props.quiz.choice3)), __jsx(\"button\", {\n    onClick: () => props.showAnswer(4, props.quiz.answer),\n    className: \"jsx-3286440104\" + \" \" + (attachClass(4, props.quiz.answer, props.answerNumber) || \"\"),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"jsx-3286440104\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 19\n    }\n  }, props.quiz.choice4))), props.answer && __jsx(\"div\", {\n    className: \"jsx-3286440104\" + \" \" + \"answer-discription\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 15\n    }\n  }, props.correct && __jsx(\"h3\", {\n    className: \"jsx-3286440104\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 35\n    }\n  }, \"\\u6B63\\u89E3\\u3067\\u3059\\uFF01\"), props.correct || __jsx(\"h3\", {\n    className: \"jsx-3286440104\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 35\n    }\n  }, \"\\u4E0D\\u6B63\\u89E3\\u3067\\u3059...\"), props.quiz.answer === 1 && __jsx(\"p\", {\n    className: \"jsx-3286440104\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 19\n    }\n  }, \"\\u7B54\\u3048\\u306F\\u3001\", props.quiz.choice1, \"\\u3067\\u3059\\uFF01\"), props.quiz.answer === 2 && __jsx(\"p\", {\n    className: \"jsx-3286440104\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 19\n    }\n  }, \"\\u7B54\\u3048\\u306F\\u3001\", props.quiz.choice2, \"\\u3067\\u3059\\uFF01\"), props.quiz.answer === 3 && __jsx(\"p\", {\n    className: \"jsx-3286440104\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 19\n    }\n  }, \"\\u7B54\\u3048\\u306F\\u3001\", props.quiz.choice3, \"\\u3067\\u3059\\uFF01\"), props.quiz.answer === 4 && __jsx(\"p\", {\n    className: \"jsx-3286440104\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 19\n    }\n  }, \"\\u7B54\\u3048\\u306F\\u3001\", props.quiz.choice4, \"\\u3067\\u3059\\uFF01\")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"3286440104\",\n    __self: undefined\n  }, \".question-choice{background-color:white;color:black;border:#52c41a 4px solid;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW50YS9Eb2N1bWVudHMvcmVhY3QvYnJhbmQtcXVpei1hcHAvc3JjL2NvbXBvbmVudHMvUXVpei5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySHlCLEFBR21DLHVCQUNYLFlBQ2MseUJBQzNCIiwiZmlsZSI6Ii9Vc2Vycy9rZW50YS9Eb2N1bWVudHMvcmVhY3QvYnJhbmQtcXVpei1hcHAvc3JjL2NvbXBvbmVudHMvUXVpei5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUXVpeiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBhdHRhY2hDbGFzcyA9IChjaG9pY2VOdW0sIGNvcnJlY3ROdW0sIGFuc3dlck51bSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNob2ljZU51bSwgY29ycmVjdE51bSwgYW5zd2VyTnVtKTtcbiAgICBpZiAoY2hvaWNlTnVtID09PSBjb3JyZWN0TnVtKSB7XG4gICAgICByZXR1cm4gXCJjaG9pY2UgcXVlc3Rpb24tY29ycmVjdC1jaG9pY2VcIjtcbiAgICB9IGVsc2UgaWYgKGNob2ljZU51bSA9PT0gYW5zd2VyTnVtKSB7XG4gICAgICByZXR1cm4gXCJjaG9pY2UgcXVlc3Rpb24td3JvbmctY2hvaWNlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcImNob2ljZSBxdWVzdGlvbi1jaG9pY2VcIjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8aDE+UXVlc3Rpb248L2gxPlxuXG4gICAgICB7cHJvcHMucXVpeiAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzPntwcm9wcy5xdWl6LnRleHR9PC9oMz5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7cHJvcHMuYW5zd2VyIHx8IChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaG9pY2UgcXVlc3Rpb24tY2hvaWNlXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLnNob3dBbnN3ZXIoMSwgcHJvcHMucXVpei5hbnN3ZXIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwPntwcm9wcy5xdWl6LmNob2ljZTF9PC9wPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hvaWNlIHF1ZXN0aW9uLWNob2ljZVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zaG93QW5zd2VyKDIsIHByb3BzLnF1aXouYW5zd2VyKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cD57cHJvcHMucXVpei5jaG9pY2UyfTwvcD5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNob2ljZSBxdWVzdGlvbi1jaG9pY2VcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuc2hvd0Fuc3dlcigzLCBwcm9wcy5xdWl6LmFuc3dlcil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHA+e3Byb3BzLnF1aXouY2hvaWNlM308L3A+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaG9pY2UgcXVlc3Rpb24tY2hvaWNlXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLnNob3dBbnN3ZXIoNCwgcHJvcHMucXVpei5hbnN3ZXIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwPntwcm9wcy5xdWl6LmNob2ljZTR9PC9wPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtwcm9wcy5hbnN3ZXIgJiYgKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXR0YWNoQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnF1aXouYW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5hbnN3ZXJOdW1iZXJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zaG93QW5zd2VyKDEsIHByb3BzLnF1aXouYW5zd2VyKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cD57cHJvcHMucXVpei5jaG9pY2UxfTwvcD5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXR0YWNoQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnF1aXouYW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5hbnN3ZXJOdW1iZXJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zaG93QW5zd2VyKDIsIHByb3BzLnF1aXouYW5zd2VyKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cD57cHJvcHMucXVpei5jaG9pY2UyfTwvcD5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXR0YWNoQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnF1aXouYW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5hbnN3ZXJOdW1iZXJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zaG93QW5zd2VyKDMsIHByb3BzLnF1aXouYW5zd2VyKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cD57cHJvcHMucXVpei5jaG9pY2UzfTwvcD5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXR0YWNoQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnF1aXouYW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5hbnN3ZXJOdW1iZXJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zaG93QW5zd2VyKDQsIHByb3BzLnF1aXouYW5zd2VyKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cD57cHJvcHMucXVpei5jaG9pY2U0fTwvcD5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3Byb3BzLmFuc3dlciAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zd2VyLWRpc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAge3Byb3BzLmNvcnJlY3QgJiYgPGgzPuato+ino+OBp+OBme+8gTwvaDM+fVxuICAgICAgICAgICAgICAgIHtwcm9wcy5jb3JyZWN0IHx8IDxoMz7kuI3mraPop6PjgafjgZkuLi48L2gzPn1cbiAgICAgICAgICAgICAgICB7cHJvcHMucXVpei5hbnN3ZXIgPT09IDEgJiYgKFxuICAgICAgICAgICAgICAgICAgPHA+562U44GI44Gv44CBe3Byb3BzLnF1aXouY2hvaWNlMX3jgafjgZnvvIE8L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7cHJvcHMucXVpei5hbnN3ZXIgPT09IDIgJiYgKFxuICAgICAgICAgICAgICAgICAgPHA+562U44GI44Gv44CBe3Byb3BzLnF1aXouY2hvaWNlMn3jgafjgZnvvIE8L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7cHJvcHMucXVpei5hbnN3ZXIgPT09IDMgJiYgKFxuICAgICAgICAgICAgICAgICAgPHA+562U44GI44Gv44CBe3Byb3BzLnF1aXouY2hvaWNlM33jgafjgZnvvIE8L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7cHJvcHMucXVpei5hbnN3ZXIgPT09IDQgJiYgKFxuICAgICAgICAgICAgICAgICAgPHA+562U44GI44Gv44CBe3Byb3BzLnF1aXouY2hvaWNlNH3jgafjgZnvvIE8L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YCAgICAgXG4gICAgICAgICAgLnF1ZXN0aW9uLWNob2ljZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgICAgIGJvcmRlcjogIzUyYzQxYSA0cHggc29saWQ7XG4gICAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWl6O1xuIl19 */\\n/*@ sourceURL=/Users/kenta/Documents/react/brand-quiz-app/src/components/Quiz.js */\"));\n};\n\n_c = Quiz;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\n\nvar _c;\n\n$RefreshReg$(_c, \"Quiz\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUXVpei5qcz9hYzM2Il0sIm5hbWVzIjpbIlF1aXoiLCJwcm9wcyIsImF0dGFjaENsYXNzIiwiY2hvaWNlTnVtIiwiY29ycmVjdE51bSIsImFuc3dlck51bSIsImNvbnNvbGUiLCJsb2ciLCJxdWl6IiwidGV4dCIsImFuc3dlciIsInNob3dBbnN3ZXIiLCJjaG9pY2UxIiwiY2hvaWNlMiIsImNob2ljZTMiLCJjaG9pY2U0IiwiYW5zd2VyTnVtYmVyIiwiY29ycmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUlDLEtBQUQsSUFBVztBQUN0QixRQUFNQyxXQUFXLEdBQUcsQ0FBQ0MsU0FBRCxFQUFZQyxVQUFaLEVBQXdCQyxTQUF4QixLQUFzQztBQUN4REMsV0FBTyxDQUFDQyxHQUFSLENBQVlKLFNBQVosRUFBdUJDLFVBQXZCLEVBQW1DQyxTQUFuQzs7QUFDQSxRQUFJRixTQUFTLEtBQUtDLFVBQWxCLEVBQThCO0FBQzVCLGFBQU8sZ0NBQVA7QUFDRCxLQUZELE1BRU8sSUFBSUQsU0FBUyxLQUFLRSxTQUFsQixFQUE2QjtBQUNsQyxhQUFPLDhCQUFQO0FBQ0QsS0FGTSxNQUVBO0FBQ0wsYUFBTyx3QkFBUDtBQUNEO0FBQ0YsR0FURDs7QUFXQSxTQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFHR0osS0FBSyxDQUFDTyxJQUFOLElBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtQLEtBQUssQ0FBQ08sSUFBTixDQUFXQyxJQUFoQixDQURGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QVdJLE9BQW5CLHVCQUpKLEVBTUdYLEtBQUssQ0FBQ08sSUFBTixDQUFXRSxNQUFYLEtBQXNCLENBQXRCLElBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUFRVCxLQUFLLENBQUNPLElBQU4sQ0FBV0ssT0FBbkIsdUJBUEosRUFTR1osS0FBSyxDQUFDTyxJQUFOLENBQVdFLE1BQVgsS0FBc0IsQ0FBdEIsSUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQVFULEtBQUssQ0FBQ08sSUFBTixDQUFXTSxPQUFuQix1QkFWSixFQVlHYixLQUFLLENBQUNPLElBQU4sQ0FBV0UsTUFBWCxLQUFzQixDQUF0QixJQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBUVQsS0FBSyxDQUFDTyxJQUFOLENBQVdPLE9BQW5CLHVCQWJKLENBakZKLENBSEYsQ0FKSjtBQUFBO0FBQUE7QUFBQSw2cE1BREY7QUFzSEQsQ0FsSUQ7O0tBQU1mLEk7QUFvSVNBLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUXVpei5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUXVpeiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBhdHRhY2hDbGFzcyA9IChjaG9pY2VOdW0sIGNvcnJlY3ROdW0sIGFuc3dlck51bSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNob2ljZU51bSwgY29ycmVjdE51bSwgYW5zd2VyTnVtKTtcbiAgICBpZiAoY2hvaWNlTnVtID09PSBjb3JyZWN0TnVtKSB7XG4gICAgICByZXR1cm4gXCJjaG9pY2UgcXVlc3Rpb24tY29ycmVjdC1jaG9pY2VcIjtcbiAgICB9IGVsc2UgaWYgKGNob2ljZU51bSA9PT0gYW5zd2VyTnVtKSB7XG4gICAgICByZXR1cm4gXCJjaG9pY2UgcXVlc3Rpb24td3JvbmctY2hvaWNlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcImNob2ljZSBxdWVzdGlvbi1jaG9pY2VcIjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8aDE+UXVlc3Rpb248L2gxPlxuXG4gICAgICB7cHJvcHMucXVpeiAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzPntwcm9wcy5xdWl6LnRleHR9PC9oMz5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7cHJvcHMuYW5zd2VyIHx8IChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaG9pY2UgcXVlc3Rpb24tY2hvaWNlXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLnNob3dBbnN3ZXIoMSwgcHJvcHMucXVpei5hbnN3ZXIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwPntwcm9wcy5xdWl6LmNob2ljZTF9PC9wPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hvaWNlIHF1ZXN0aW9uLWNob2ljZVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zaG93QW5zd2VyKDIsIHByb3BzLnF1aXouYW5zd2VyKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cD57cHJvcHMucXVpei5jaG9pY2UyfTwvcD5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNob2ljZSBxdWVzdGlvbi1jaG9pY2VcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuc2hvd0Fuc3dlcigzLCBwcm9wcy5xdWl6LmFuc3dlcil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHA+e3Byb3BzLnF1aXouY2hvaWNlM308L3A+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaG9pY2UgcXVlc3Rpb24tY2hvaWNlXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLnNob3dBbnN3ZXIoNCwgcHJvcHMucXVpei5hbnN3ZXIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwPntwcm9wcy5xdWl6LmNob2ljZTR9PC9wPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtwcm9wcy5hbnN3ZXIgJiYgKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXR0YWNoQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnF1aXouYW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5hbnN3ZXJOdW1iZXJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zaG93QW5zd2VyKDEsIHByb3BzLnF1aXouYW5zd2VyKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cD57cHJvcHMucXVpei5jaG9pY2UxfTwvcD5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXR0YWNoQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnF1aXouYW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5hbnN3ZXJOdW1iZXJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zaG93QW5zd2VyKDIsIHByb3BzLnF1aXouYW5zd2VyKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cD57cHJvcHMucXVpei5jaG9pY2UyfTwvcD5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXR0YWNoQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnF1aXouYW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5hbnN3ZXJOdW1iZXJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zaG93QW5zd2VyKDMsIHByb3BzLnF1aXouYW5zd2VyKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cD57cHJvcHMucXVpei5jaG9pY2UzfTwvcD5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXR0YWNoQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnF1aXouYW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5hbnN3ZXJOdW1iZXJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zaG93QW5zd2VyKDQsIHByb3BzLnF1aXouYW5zd2VyKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cD57cHJvcHMucXVpei5jaG9pY2U0fTwvcD5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3Byb3BzLmFuc3dlciAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zd2VyLWRpc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAge3Byb3BzLmNvcnJlY3QgJiYgPGgzPuato+ino+OBp+OBme+8gTwvaDM+fVxuICAgICAgICAgICAgICAgIHtwcm9wcy5jb3JyZWN0IHx8IDxoMz7kuI3mraPop6PjgafjgZkuLi48L2gzPn1cbiAgICAgICAgICAgICAgICB7cHJvcHMucXVpei5hbnN3ZXIgPT09IDEgJiYgKFxuICAgICAgICAgICAgICAgICAgPHA+562U44GI44Gv44CBe3Byb3BzLnF1aXouY2hvaWNlMX3jgafjgZnvvIE8L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7cHJvcHMucXVpei5hbnN3ZXIgPT09IDIgJiYgKFxuICAgICAgICAgICAgICAgICAgPHA+562U44GI44Gv44CBe3Byb3BzLnF1aXouY2hvaWNlMn3jgafjgZnvvIE8L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7cHJvcHMucXVpei5hbnN3ZXIgPT09IDMgJiYgKFxuICAgICAgICAgICAgICAgICAgPHA+562U44GI44Gv44CBe3Byb3BzLnF1aXouY2hvaWNlM33jgafjgZnvvIE8L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7cHJvcHMucXVpei5hbnN3ZXIgPT09IDQgJiYgKFxuICAgICAgICAgICAgICAgICAgPHA+562U44GI44Gv44CBe3Byb3BzLnF1aXouY2hvaWNlNH3jgafjgZnvvIE8L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YCAgICAgXG4gICAgICAgICAgLnF1ZXN0aW9uLWNob2ljZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgICAgIGJvcmRlcjogIzUyYzQxYSA0cHggc29saWQ7XG4gICAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWl6O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Quiz.js\n");

/***/ })

})