webpackJsonp([2],[,,,,function(e,t,n){e.exports=n.p+"CNAME"},function(e,t,n){e.exports=n.p+"index.html"},function(e,t,n){e.exports=n.p+"w3.css"},function(e,t,n){n(29);var a=n(0)(n(14),n(26),null,null);e.exports=a.exports},,,,,function(e,t,n){n(30);var a=n(0)(n(16),n(27),null,null);e.exports=a.exports},function(e,t,n){n(31);var a=n(0)(n(15),n(28),null,null);e.exports=a.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(12),o=n.n(a),i=n(13),r=n.n(i);t.default={name:"app",components:{NavComponent:o.a,FooterComponent:r.a}}},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{mobilePageTitle:"",mobileMenu:!1}},watch:{$route:function(e,t){this.mobilePageTitle=e.meta.title,this.mobileMenu&&(this.mobileMenu=!this.mobileMenu)}}}},,,function(e,t,n){t=e.exports=n(1)(void 0),t.push([e.i,"",""])},function(e,t,n){t=e.exports=n(1)(void 0),t.push([e.i,".nav,.navMobileBG{background-color:#000;position:fixed;top:0;width:100%;overflow:hidden;margin:0;padding:0}.nav{list-style:none}.navMobileBG{height:40px;margin-bottom:0;text-align:center;display:none}.navLink,.navTitle{float:left;display:block;color:#fff;text-decoration:none}.navTitle{padding:5px;font-size:20px}.navMobileTitle{margin:5px;font-size:20px;text-decoration:none;display:none;color:#fff}.navLink{padding:10px}.navLink.active,.navLink:hover{background-color:gray}.navMenu[type=checkbox],.navMenu[type=checkbox]+label{height:20px;width:30px;margin:10px;position:fixed;top:0;left:0}.navMenu[type=checkbox]+label{z-index:0}.navMenu[type=checkbox]{z-index:1;opacity:0}.navMenu[type=checkbox]+label{background:url("+n(23)+");background-size:100%;display:none}.navMenu[type=checkbox]:checked+label{background:url("+n(22)+");background-size:100%}.navMenu[type=checkbox]:checked+label+.nav{display:block}@media screen and (max-width:600px){.navMenu[type=checkbox]+label,.navMobileBG,.navMobileTitle{display:inline-block}.nav,.navTitle{display:none}.nav{border-bottom:1px solid rgba(0,0,0,.15);box-shadow:0 8px 10px rgba(0,0,0,.15);top:40px}.navLink{float:none}}",""])},function(e,t,n){t=e.exports=n(1)(void 0),t.push([e.i,"#footer{margin:0 auto;max-width:800px;padding:10px;text-align:center}",""])},function(e,t){e.exports="imgs/close.svg?6ab99ee581a8a3cf5c60819866fdeb1f"},function(e,t){e.exports="imgs/menu.svg?7c8eadc15bfe4d5deb76ca50115d2a47"},,,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav-component"),e._v(" "),n("router-view"),e._v(" "),n("footer-component")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"navMobileBG"},[n("router-link",{staticClass:"navMobileTitle",attrs:{to:"/"}},[e._v(e._s(e.mobilePageTitle))])],1),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mobileMenu,expression:"mobileMenu"}],staticClass:"navMenu",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.mobileMenu)?e._i(e.mobileMenu,null)>-1:e.mobileMenu},on:{__c:function(t){var n=e.mobileMenu,a=t.target,o=!!a.checked;if(Array.isArray(n)){var i=e._i(n,null);o?i<0&&(e.mobileMenu=n.concat(null)):i>-1&&(e.mobileMenu=n.slice(0,i).concat(n.slice(i+1)))}else e.mobileMenu=o}}}),e._v(" "),n("label",{attrs:{for:"navMenu"}}),e._v(" "),n("ul",{staticClass:"nav"},[n("li",[n("router-link",{staticClass:"navTitle",attrs:{to:"/"}},[e._v("CleanEarth.Life")])],1),e._v(" "),n("li",[n("router-link",{staticClass:"navLink",attrs:{"active-class":"active",to:"/",exact:""}},[e._v("Home")])],1),e._v(" "),n("li",[n("router-link",{staticClass:"navLink",attrs:{"active-class":"active",to:"/profile"}},[e._v("Profile")])],1)])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{attrs:{id:"footer"}},[e._v(" Made with ❤ by "),n("a",{attrs:{href:"https://github.com/RKarkala",target:"_blank",rel:"noopener"}},[e._v("Rohith Karkala")]),e._v(", "),n("a",{attrs:{href:"https://github.com/stephenhales",target:"_blank",rel:"noopener"}},[e._v("Stephen Hales")]),e._v(", and "),n("a",{attrs:{href:"https://github.com/kushagharahi/",target:"_blank",rel:"noopener"}},[e._v("Kusha Gharahi")]),e._v(" at "),n("a",{attrs:{href:"http://hackdfw.com/earthack/",target:"_blank",rel:"noopener"}},[e._v("Earthack 2017")]),e._v(" in Dallas! ")])])}]}},function(e,t,n){var a=n(19);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(2)("178b4626",a,!0)},function(e,t,n){var a=n(20);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(2)("9b49da32",a,!0)},function(e,t,n){var a=n(21);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(2)("12d105d1",a,!0)},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(11),o=n(8),i=n(9),r=n(7),l=n.n(r),c=n(10);a.a.use(c),a.a.use(i.a),a.a.use(o.a),n(5),n(6),n(4);const s=new i.a({mode:"history",routes:[{path:"/",component:function(e){return function(t){n.e(0).then(function(){var a=[n(33)("./"+e+".vue")];t.apply(null,a)}.bind(this)).catch(n.oe)}}("HomeComponent"),meta:{title:"CleanEarth.Life"}},{path:"/profile",component:function(e){return function(t){n.e(1).then(function(){var a=[n(34)("./"+e+".vue")];t.apply(null,a)}.bind(this)).catch(n.oe)}}("ProfileComponent"),meta:{title:"Find your Impact"}}]});s.beforeEach(function(e,t,n){document.title=e.meta.title,n()});new a.a({el:"#app",router:s,render:function(e){return e(l.a)},replace:!1})},function(e,t){}],[35]);