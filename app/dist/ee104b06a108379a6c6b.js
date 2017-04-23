webpackJsonp([1],{33:function(t,e,n){function r(t){return n(a(t))}function a(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./EnergyProfileComponent.vue":36,"./PollutionProfileComponent.vue":37,"./ProfileComponent.vue":44,"./WaterProfileComponent.vue":38};r.keys=function(){return Object.keys(i)},r.resolve=a,t.exports=r,r.id=33},36:function(t,e,n){var r=n(0)(null,n(46),null,null);t.exports=r.exports},37:function(t,e,n){n(50);var r=n(0)(n(39),n(48),null,null);t.exports=r.exports},38:function(t,e,n){var r=n(0)(n(41),n(45),null,null);t.exports=r.exports},39:function(t,e){},40:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(38),a=n.n(r),i=n(37),o=n.n(i),s=n(36),l=n.n(s);e.default={name:"profile",components:{WaterProfileComponent:a.a,PollutionProfileComponent:o.a,EnergyProfileComponent:l.a},methods:{}}},41:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{showers:0,total:0}},created:function(){this.total=2.1*this.showers}};var r=2.1*this.total,a={chart:{type:"column"},title:{text:"Water Usage"},xAxis:{categories:[""]},yAxis:{min:0,title:{text:"Gallons (G)"}},plotOptions:{column:{pointPadding:.2,borderWidth:0}},series:[{name:"Your Use",color:"blue",data:[r]},{name:"Average Use",color:"gray",data:[80]}]};$("#gal").highcharts(a)},42:function(t,e,n){e=t.exports=n(1)(void 0),e.push([t.i,".fullscreen{width:100%;height:100vh}#component{margin:0 auto;max-width:800px;padding-top:60px;padding-left:20px;padding-right:20px}",""])},43:function(t,e,n){e=t.exports=n(1)(void 0),e.push([t.i,"",""])},44:function(t,e,n){n(49);var r=n(0)(n(40),n(47),null,null);t.exports=r.exports},45:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3-panel w3-blue"},[n("h1",{staticClass:"w3-padding-32"},[t._v("Water")]),t._v(" "),n("div",{staticClass:"w3-row"},[n("div",{staticClass:"w3-col l6"},[t._v("\n\n\t\t\t\t\tShowers per Day: "),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.showers,expression:"showers"}],staticStyle:{width:"100%"},attrs:{maxlength:"2"},domProps:{value:t.showers},on:{input:function(e){e.target.composing||(t.showers=e.target.value)}}}),n("br"),t._v("\n\t\t\t\t\tTime spent per shower: "),n("br"),t._v(" "),n("input",{staticClass:"w3-input",attrs:{type:"number",name:"tshowered"}}),t._v(" "),n("br"),t._v("\n\t\t\t\t\tTimes toilet flushed: "),n("br"),t._v(" "),n("input",{staticClass:"w3-input",attrs:{type:"number",name:"tflushed"}}),t._v(" "),n("br"),t._v(" \n\t\t\t\t\tTimes washer used: "),n("br"),t._v(" "),n("input",{staticClass:"w3-input",attrs:{type:"number",name:"twasher"}}),t._v(" "),n("br")]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3-col l6"},[n("div",{attrs:{id:"gal"}})])}]}},46:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3-panel w3-blue"},[n("h1",{},[t._v("Energy")]),t._v(" "),n("br"),t._v(" "),n("h3",[t._v("Check all of the following that apply")]),t._v(" "),n("br"),t._v(" "),n("input",{attrs:{type:"checkbox",id:"AC",name:"electric",value:"AC"}}),t._v(" AC\n\t"),n("input",{attrs:{type:"checkbox",id:"LM",name:"electric",value:"LM"}}),t._v(" Laundry Machine\n\t"),n("input",{attrs:{type:"checkbox",id:"WH",name:"electric",value:"WH"}}),t._v(" Water Heater\n\t"),n("input",{attrs:{type:"checkbox",id:"R",name:"electric",value:"R"}}),t._v(" Refrigerator\n\t"),n("input",{attrs:{type:"checkbox",id:"TV",name:"electric",value:"TV"}}),t._v(" TV\n\t"),n("input",{attrs:{type:"checkbox",id:"L",name:"electric",value:"L"}}),t._v(" Laptop\n\t"),n("input",{attrs:{type:"checkbox",id:"CP",name:"electric",value:"CP"}}),t._v(" Cell Phone\n\t"),n("input",{attrs:{type:"checkbox",id:"C",name:"electric",value:"C"}}),t._v(" Console\n\t"),n("input",{attrs:{type:"checkbox",id:"T",name:"electric",value:"T"}}),t._v(" Toaster\n\t"),n("input",{attrs:{type:"checkbox",id:"M",name:"electric",value:"M"}}),t._v(" Microwave\n\t"),n("input",{attrs:{type:"checkbox",id:"CM",name:"electric",value:"CM"}}),t._v(" Coffee Maker\n\t"),n("input",{attrs:{type:"checkbox",id:"D",name:"electric",value:"D"}}),t._v(" Desktop\n\t"),n("input",{attrs:{type:"checkbox",id:"B",name:"electric",value:"B"}}),t._v(" Incandescent Bulbs\n")])}]}},47:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Welcome")]),t._v(" "),t._m(0),t._v(" "),n("form",{attrs:{action:"/calculate",method:"post"}},[n("div",{staticClass:"fullscreen",staticStyle:{"background-color":"#00b0ff"},attrs:{id:"water"}},[n("div",{attrs:{id:"component"}},[n("water-profile-component")],1)]),t._v(" "),n("div",{staticClass:"fullscreen",staticStyle:{"background-color":"#bdbdbd"},attrs:{id:"water"}},[n("div",{attrs:{id:"component"}},[n("pollution-profile-component")],1)]),t._v(" "),n("div",{staticClass:"fullscreen",staticStyle:{"background-color":"#ffea00"},attrs:{id:"water"}},[n("div",{attrs:{id:"component"}},[n("energy-profile-component")],1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{attrs:{action:"/logout",method:"post"}},[n("button",[t._v("Log Out")])])}]}},48:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3-panel w3-green"},[n("h1",{staticClass:"w3-padding-32"},[t._v("Pollution")]),t._v("\n\tHighway MPG:"),n("br"),t._v(" "),n("input",{attrs:{type:"number",name:"hmpg"}}),t._v(" "),n("br"),t._v("\n\tCity MPG:"),n("br"),t._v(" "),n("input",{attrs:{type:"number",name:"cmpg"}}),t._v(" "),n("br"),t._v("\n\tDaily Commute:"),n("br"),t._v(" "),n("input",{attrs:{type:"number",name:"miles"}})])}]}},49:function(t,e,n){var r=n(42);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("45a8bc4e",r,!0)},50:function(t,e,n){var r=n(43);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("a02e8988",r,!0)}});