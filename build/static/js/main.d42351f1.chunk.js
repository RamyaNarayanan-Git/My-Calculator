(this["webpackJsonpmy-calculator"]=this["webpackJsonpmy-calculator"]||[]).push([[0],[,function(_,e,t){"use strict";var a=t(3),l=t(4),c=t(6),n=t(5),r=t(2),s=(t(20),t(0)),u=function(_){Object(c.a)(t,_);var e=Object(n.a)(t);function t(){return Object(a.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"Button",onClick:this.props.onClick,"data-size":this.props.size,"data-value":this.props.value,children:this.props.label})}}]),t}(r.Component);e.a=u},,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Ramya_Full_Stack_Calculator_my_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),C_Ramya_Full_Stack_Calculator_my_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),C_Ramya_Full_Stack_Calculator_my_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),C_Ramya_Full_Stack_Calculator_my_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_styles_Calculator_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16),_styles_Calculator_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_styles_Calculator_css__WEBPACK_IMPORTED_MODULE_5__),_KeypadComponent__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),_DisplayComponent__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(11),_ButtonComponent__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__),Calculator=function(_Component){Object(C_Ramya_Full_Stack_Calculator_my_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Calculator,_Component);var _super=Object(C_Ramya_Full_Stack_Calculator_my_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator);function Calculator(){var _this;return Object(C_Ramya_Full_Stack_Calculator_my_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),_this=_super.call(this),_this.calculate=function(){try{var result=eval(_this.state.data);_this.setState({data:result})}catch(e){_this.setState({data:"error"})}},_this.handleClick=function(_){var e=_.target.getAttribute("data-value");switch(e){case"clear":_this.setState({data:""});break;case"equal":_this.calculate();break;default:_this.setState({data:_this.state.data+e})}},_this.state={data:""},_this}return Object(C_Ramya_Full_Stack_Calculator_my_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div",{className:"Calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_DisplayComponent__WEBPACK_IMPORTED_MODULE_7__.a,{data:this.state.data}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_KeypadComponent__WEBPACK_IMPORTED_MODULE_6__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ButtonComponent__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.handleClick,label:"C",value:"clear"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ButtonComponent__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.handleClick,label:"7",value:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ButtonComponent__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.handleClick,label:"4",value:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ButtonComponent__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.handleClick,label:"1",value:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ButtonComponent__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.handleClick,label:"0",value:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ButtonComponent__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.handleClick,label:"/",value:"/"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ButtonComponent__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.handleClick,label:"8",value:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ButtonComponent__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.handleClick,label:"5",value:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ButtonComponent__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.handleClick,label:"2",value:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ButtonComponent__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.handleClick,label:".",value:"."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ButtonComponent__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.handleClick,label:"x",value:"*"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ButtonComponent__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.handleClick,label:"9",value:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ButtonComponent__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.handleClick,label:"6",value:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ButtonComponent__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.handleClick,label:"3",value:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ButtonComponent__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.handleClick,label:"",value:"null"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ButtonComponent__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.handleClick,label:"-",value:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ButtonComponent__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.handleClick,label:"+",size:"2",value:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ButtonComponent__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.handleClick,label:"=",size:"2",value:"equal"})]})]})}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=Calculator},function(_,e,t){"use strict";var a=t(3),l=t(4),c=t(6),n=t(5),r=t(2),s=(t(17),t(0)),u=function(_){Object(c.a)(t,_);var e=Object(n.a)(t);function t(){return Object(a.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"Keypad",children:this.props.children})}}]),t}(r.Component);e.a=u},function(_,e,t){"use strict";var a=t(3),l=t(4),c=t(6),n=t(5),r=t(2),s=(t(19),t(0)),u=function(_){Object(c.a)(t,_);var e=Object(n.a)(t);function t(){return Object(a.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"Display",children:this.props.data})}}]),t}(r.Component);e.a=u},,,,,function(_,e,t){},function(_,e,t){},,function(_,e,t){},function(_,e,t){},function(_,e,t){"use strict";t.r(e);var a=t(2),l=t.n(a),c=t(8),n=t.n(c),r=t(9),s=t(0);var u=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(r.a,{})})};n.a.render(Object(s.jsx)(l.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.d42351f1.chunk.js.map