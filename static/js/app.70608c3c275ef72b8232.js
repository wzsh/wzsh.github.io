webpackJsonp([1],{0:function(t,s){},"0wq2":function(t,s){},"23oY":function(t,s,i){t.exports=i.p+"static/img/number_train.028d7d4.png"},"26qp":function(t,s,i){t.exports=i.p+"static/img/kinect_gestures.e1f02ef.png"},"468Z":function(t,s,i){t.exports=i.p+"static/img/game_ctl.ecb32ca.jpg"},B9QI:function(t,s){},D4uH:function(t,s,i){"use strict";var e={},a={name:"icon",props:{name:{type:String,validator:function(t){return t?t in e||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?e[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,s=t.width,i=t.height;return Math.max(s,i)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,s={};return t=t.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,function(t,i){var e="fa-"+(n++).toString(16);return s[i]=e,' id="'+e+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,i,e,a){var n=i||a;return n&&s[n]?"#"+s[n]:t}),t}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(s){s.outerScale=t.normalizedScale});var s=0,i=0;this.$children.forEach(function(t){s=Math.max(s,t.width),i=Math.max(i,t.height)}),this.childrenWidth=s,this.childrenHeight=i,this.$children.forEach(function(t){t.x=(s-t.width)/2,t.y=(i-t.height)/2})}},register:function(t){for(var s in t){var i=t[s];i.paths||(i.paths=[]),i.d&&i.paths.push({d:i.d}),i.polygons||(i.polygons=[]),i.points&&i.polygons.push({points:i.points}),e[s]=i}},icons:e},n=870711;var r={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(s,e){return i("path",t._b({key:"path-"+e},"path",s,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(s,e){return i("polygon",t._b({key:"polygon-"+e},"polygon",s,!1))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[i("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},staticRenderFns:[]};var o=i("VU/8")(a,r,!1,function(t){i("NqbI")},null,null);s.a=o.exports},Jtn5:function(t,s){},Kql5:function(t,s,i){t.exports=i.p+"static/img/pca_face.32168b6.jpg"},LCU8:function(t,s){},MsIE:function(t,s){},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("7+uW"),a=i("zL8q"),n=i.n(a),r=(i("tvR6"),{render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]});var o=i("VU/8")({name:"app"},r,!1,function(t){i("0wq2")},null,null).exports,c=i("/ocq"),l=i("8+8L"),h={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"social-container"},[s("a",{attrs:{href:"mailto:wang@zongsheng.im",title:"Email"}},[s("fa-icon",{staticClass:"social-btn",attrs:{label:"Email"}},[s("fa-icon",{staticClass:"social-btn-circle",attrs:{name:"circle",scale:"2"}}),this._v(" "),s("fa-icon",{staticClass:"social-btn-inner",attrs:{name:"envelope"}})],1)],1),this._v(" "),s("a",{attrs:{href:"https://github.com/wzsh",target:"_blank",title:"My Github"}},[s("fa-icon",{staticClass:"social-btn",attrs:{label:"Github"}},[s("fa-icon",{staticClass:"social-btn-circle",attrs:{name:"circle",scale:"2"}}),this._v(" "),s("fa-icon",{staticClass:"social-btn-inner",attrs:{name:"github-alt"}})],1)],1),this._v(" "),s("a",{attrs:{href:"cv_wzs_eng.pdf",target:"_blank",title:"Brief CV"}},[s("fa-icon",{staticClass:"social-btn",attrs:{label:"CV"}},[s("fa-icon",{staticClass:"social-btn-circle",attrs:{name:"circle",scale:"2"}}),this._v(" "),s("fa-icon",{staticClass:"social-btn-inner",attrs:{name:"file-text"}})],1)],1)]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[this._v("\r\n  © 2018 Zong-Sheng Wang. "),s("br"),this._v("\r\n  Built with  "),s("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[this._v("Vue.js")]),this._v(" & "),s("a",{attrs:{href:"http://element.eleme.io/#/en-US/",target:"_blank"}},[this._v("Element-UI")]),this._v(". Hosted on  "),s("a",{attrs:{href:"https://pages.github.com",target:"_blank"}},[this._v("Github Pages")]),this._v(".\r\n  ")])}]};var v=i("VU/8")({name:"Footer"},h,!1,function(t){i("B9QI")},"data-v-e735c726",null).exports,p={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("el-tag",[this._v("C/C++")]),this._v(" "),s("el-tag",{attrs:{type:"success"}},[this._v("Java")]),this._v(" "),s("el-tag",{attrs:{type:"info"}},[this._v("C#")]),this._v(" "),s("el-tag",{attrs:{type:"warning"}},[this._v("Python")]),this._v(" "),s("el-tag",{attrs:{type:"danger"}},[this._v("Go")]),this._v(" "),s("el-tag",{attrs:{type:"info"}},[this._v("Matlab")]),this._v(" "),s("el-tag",{attrs:{type:"success"}},[this._v("Javascript")]),this._v(" "),s("el-tag",{attrs:{type:"warning"}},[this._v("HTML5")]),this._v(" "),s("el-tag",{attrs:{type:"danger"}},[this._v("CSS3")]),this._v(" "),s("el-tag",{attrs:{type:"success"}},[this._v("Oracle")]),this._v(" "),s("el-tag",{attrs:{type:"warning"}},[this._v("PostgreSQL")]),this._v(" "),s("el-tag",{attrs:{type:"info"}},[this._v("LaTeX")])],1)},staticRenderFns:[]};var _=i("VU/8")({name:"Skills"},p,!1,function(t){i("MsIE")},"data-v-c8721d22",null).exports,d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"paper_item"},[s("div",{staticClass:"paper_title"},[this._v(" Unrealistic map based navigation system for pedestrian.")]),this._v(" "),s("div",{staticClass:"paper_desc"},[this._v("\r\n      Zong-Sheng Wang, Seon-Woo Lee, Chang Geun Song."),s("br"),this._v(" \r\n      Life Science Journal. 11. 73-78. (2014) ["),s("a",{attrs:{href:"http://www.lifesciencesite.com/lsj/life1107s/012_24406life1107s14_73_78.pdf"}},[this._v("pdf")]),this._v("]\r\n    ")])]),this._v(" "),s("div",{staticClass:"paper_item"},[s("div",{staticClass:"paper_title"},[this._v(" GP-GPU based Smoothed Particle Hydrodynamic Fluid Simulation.")]),this._v(" "),s("div",{staticClass:"paper_desc"},[this._v("\r\n      Zong-Sheng Wang."),s("br"),this._v(" \r\n      Master Thesis. (2013)\r\n    ")])]),this._v(" "),s("div",{staticClass:"paper_item"},[s("div",{staticClass:"paper_title"},[this._v(" Using a Smart Phone as input device for PC.")]),this._v(" "),s("div",{staticClass:"paper_desc"},[this._v("\r\n      Zong-Sheng Wang, Ji-Hoon Choi, Youngwoong Ko, Chang Geun Song."),s("br"),this._v(" \r\n      The 2012 international Workshop on Advanced Image Technology (IWAIT 2012).\r\n    ")])])])}]};var m=i("VU/8")({name:"Publications"},d,!1,function(t){i("beLq")},"data-v-4a3518e6",null).exports,u={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("el-row",{staticClass:"teach_item"},[s("el-col",{attrs:{sm:1,xs:2}},[s("fa-icon",{staticClass:"teach_icon",attrs:{name:"book",scale:"1.5"}})],1),this._v(" "),s("el-col",{attrs:{sm:23,xs:22}},[s("div",{staticClass:"teach_term"},[this._v("Winter 2018")]),this._v(" "),s("div",{staticClass:"teach_content"},[this._v("Mentoring for Web Application Development")])])],1),this._v(" "),s("el-row",{staticClass:"teach_item"},[s("el-col",{attrs:{sm:1,xs:2}},[s("fa-icon",{staticClass:"teach_icon",attrs:{name:"graduation-cap",scale:"1.5"}})],1),this._v(" "),s("el-col",{attrs:{sm:23,xs:22}},[s("div",{staticClass:"teach_term"},[this._v("Spring 2013")]),this._v(" "),s("div",{staticClass:"teach_content"},[this._v("TA for Computer Graphics")]),this._v(" "),s("div",{staticClass:"teach_content"},[this._v("TA for Smartphone Programming(iOS)")])])],1),this._v(" "),s("el-row",{staticClass:"teach_item"},[s("el-col",{attrs:{sm:1,xs:2}},[s("fa-icon",{staticClass:"teach_icon",attrs:{name:"graduation-cap",scale:"1.5"}})],1),this._v(" "),s("el-col",{attrs:{sm:23,xs:22}},[s("div",{staticClass:"teach_term"},[this._v("Fall 2012")]),this._v(" "),s("div",{staticClass:"teach_content"},[this._v("TA for Game Programming(DirectX 11)")]),this._v(" "),s("div",{staticClass:"teach_content"},[this._v("TA for Smartphone Programming(iOS)")])])],1),this._v(" "),s("el-row",{staticClass:"teach_item"},[s("el-col",{attrs:{sm:1,xs:2}},[s("fa-icon",{staticClass:"teach_icon",attrs:{name:"graduation-cap",scale:"1.5"}})],1),this._v(" "),s("el-col",{attrs:{sm:23,xs:22}},[s("div",{staticClass:"teach_term"},[this._v("Spring 2012")]),this._v(" "),s("div",{staticClass:"teach_content"},[this._v("TA for Computer Programming(Java)")]),this._v(" "),s("div",{staticClass:"teach_content"},[this._v("TA for Data Structure")])])],1)],1)},staticRenderFns:[]};var f=i("VU/8")({name:"Teach"},u,!1,function(t){i("bdZs")},"data-v-3ad96048",null).exports,g={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("el-row",{staticClass:"project_item",attrs:{type:"flex"}},[s("el-col",{attrs:{md:9,sm:12,xs:15}},[s("div",{staticClass:"project_title"},[this._v("PCA-based Face Recognition System")]),this._v(" "),s("div",{staticClass:"project_person"},[this._v("Joint work with Jisu Park")]),this._v(" "),s("div",{staticClass:"project_desc"},[s("p",[this._v("In this work, we developed a training and recognizing system for face recognition with Principal Components Analysis(PCA) method.")])])]),this._v(" "),s("el-col",{attrs:{span:1}}),this._v(" "),s("el-col",{staticClass:"project_img",attrs:{span:8}},[s("img",{attrs:{src:i("Kql5"),width:"320px"}})])],1),this._v(" "),s("el-row",{staticClass:"project_item",attrs:{type:"flex"}},[s("el-col",{attrs:{md:9,sm:12,xs:15}},[s("div",{staticClass:"project_title"},[this._v("Unrealistic map based campus navigation system ")]),this._v(" "),s("div",{staticClass:"project_person"},[this._v("A Part of IT/SW Research Project ")]),this._v(" "),s("div",{staticClass:"project_desc"},[s("p",[this._v("This work is to develop a navigation application based on a disproportionate map. Several matching algorithms are presented for matching GPS coordinates with disproportionate map.")])])]),this._v(" "),s("el-col",{attrs:{span:1}}),this._v(" "),s("el-col",{staticClass:"project_img",attrs:{span:8}},[s("img",{attrs:{src:i("zjFY"),width:"320px"}})])],1),this._v(" "),s("el-row",{staticClass:"project_item",attrs:{type:"flex"}},[s("el-col",{attrs:{md:9,sm:12,xs:15}},[s("div",{staticClass:"project_title"},[this._v("Archery Application in Virtual Environment")]),this._v(" "),s("div",{staticClass:"project_person"},[this._v("WorldViz + SonyHMD + Kinect")]),this._v(" "),s("div",{staticClass:"project_desc"},[s("p")])]),this._v(" "),s("el-col",{attrs:{span:1}}),this._v(" "),s("el-col",{staticClass:"project_img",attrs:{span:8}},[s("img",{attrs:{src:i("NdKW"),width:"320px"}})])],1),this._v(" "),s("el-row",{staticClass:"project_item",attrs:{type:"flex"}},[s("el-col",{attrs:{md:9,sm:12,xs:15}},[s("div",{staticClass:"project_title"},[this._v("Unity3D and Kinect Based Gesture Recognition Application")]),this._v(" "),s("div",{staticClass:"project_person"},[this._v("Gesture Recognition")]),this._v(" "),s("div",{staticClass:"project_desc"},[s("p")])]),this._v(" "),s("el-col",{attrs:{span:1}}),this._v(" "),s("el-col",{staticClass:"project_img",attrs:{span:8}},[s("img",{attrs:{src:i("26qp"),width:"320px"}})])],1),this._v(" "),s("el-row",{staticClass:"project_item",attrs:{type:"flex"}},[s("el-col",{attrs:{md:9,sm:12,xs:15}},[s("div",{staticClass:"project_title"},[this._v("Number Recognition Application")]),this._v(" "),s("div",{staticClass:"project_person"},[this._v("Number Recognition/Training Application")]),this._v(" "),s("div",{staticClass:"project_desc"},[s("p",[this._v("This work is to develop a training and recognizing application for number recognition.")])])]),this._v(" "),s("el-col",{attrs:{span:1}}),this._v(" "),s("el-col",{staticClass:"project_img",attrs:{span:8}},[s("img",{attrs:{src:i("23oY"),width:"320px"}}),this._v(" "),s("img",{attrs:{src:i("e3Pz"),width:"320px"}})])],1),this._v(" "),s("el-row",{staticClass:"project_item",attrs:{type:"flex"}},[s("el-col",{attrs:{md:9,sm:12,xs:15}},[s("div",{staticClass:"project_title"},[this._v("Accelerometer Sensor based Game controller")]),this._v(" "),s("div",{staticClass:"project_person"},[this._v("LM3s811 Board(ARMv9) + LIS3DH Accelerometer Sensor + OpenGL")]),this._v(" "),s("div",{staticClass:"project_desc"},[s("p",[this._v("In this work, we built a Game controller with LIS3DH Accelerometer Sensor on LM3s811 Board for somatosensory gaming.")])])]),this._v(" "),s("el-col",{attrs:{span:1}}),this._v(" "),s("el-col",{staticClass:"project_img",attrs:{span:8}},[s("img",{attrs:{src:i("468Z"),width:"125px"}}),this._v(" "),s("img",{attrs:{src:i("oJkJ"),width:"185px"}})])],1)],1)},staticRenderFns:[]};var C=i("VU/8")({name:"Projects"},g,!1,function(t){i("LCU8")},"data-v-deaad9f8",null).exports,b={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("el-row",{staticClass:"misc_item"},[s("el-col",{attrs:{sm:1,xs:2}},[s("fa-icon",{staticClass:"misc_icon",attrs:{name:"file-code-o",scale:"1.5"}})],1),this._v(" "),s("el-col",{attrs:{sm:23,xs:22}},[s("div",{staticClass:"misc_title"},[this._v(" WebGL Tutorials")]),this._v(" "),s("div",{staticClass:"misc_desc"},[this._v("WebGL & Three.js Tutorial Code")]),this._v(" "),s("div",{staticClass:"misc_github"},[s("a",{attrs:{href:"https://github.com/wzsh/webgl_tutorials",target:"_blank"}},[s("el-button",{staticClass:"btn-round"},[s("fa-icon",{attrs:{name:"github",scale:"1.2"}}),this._v(" View on Github")],1)],1)])])],1)],1)},staticRenderFns:[]};var w=i("VU/8")({name:"Misc"},b,!1,function(t){i("VRdx")},"data-v-18adf5f5",null).exports,x=(i("sfy8"),{name:"Home",components:{Footer:v,Skills:_,Publications:m,Teach:f,Projects:C,Misc:w},data:function(){return{active_names:["0","1","2","3","4"]}}}),y={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("el-container",[e("el-row",{attrs:{type:"flex"}},[e("el-col",{staticClass:"hidden-sm-and-down",attrs:{md:6}},[e("el-aside",{staticClass:"md-aside",attrs:{width:"25%"}},[e("el-row",[e("img",{staticClass:"avatar",attrs:{src:i("sCdo")}})]),t._v(" "),e("el-row",{staticClass:"name"},[t._v("\r\n      Zong-Sheng Wang (王宗晟)\r\n    ")]),t._v(" "),e("el-row",{staticClass:"description"},[t._v("\r\n      PhD Student @ GVE Lab\r\n    ")]),t._v(" "),e("el-footer",{staticClass:"lg-footer"},[e("Footer")],1)],1)],1),t._v(" "),e("el-col",{attrs:{md:18,xs:24}},[e("el-main",[e("el-row",{staticClass:"hidden-md-and-up sm-header",attrs:{type:"flex"}},[e("el-col",{attrs:{span:8}},[e("img",{staticClass:"sm-avatar",attrs:{src:i("sCdo")}})]),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-row",{staticClass:"sm-name"},[t._v("\r\n        Zong-Sheng Wang (王宗晟)\r\n      ")]),t._v(" "),e("el-row",{staticClass:"sm-description"},[t._v("\r\n        PhD Student @ GVE Lab\r\n      ")])],1)],1),t._v(" "),e("div",{staticClass:"md-main"},[e("el-row",{attrs:{type:"flex"}},[e("el-col",{staticClass:"basic_info",attrs:{md:10,sm:12,xs:13}},[e("p",[t._v("I am a PhD student in Convergence Software at Hallym University, working in Computer Graphics and Virtual Environment Laboratory advised by Prof. Sun-Jeong Kim.")]),t._v(" "),e("p",[t._v("My research interests lie in Computer Graphics and Machine Learning.")])]),t._v(" "),e("el-col",{attrs:{md:1,sm:1,xs:1}}),t._v(" "),e("el-col",{staticClass:"address",attrs:{md:8,sm:10,xs:9}},[e("p",[t._v("A1208 Engineering Building, "),e("br"),t._v("Hallym University, Chuncheon, Gangwon-do, 24252, Republic of Korea")]),t._v(" "),e("p",[t._v("wzs (at) hallym.ac.kr"),e("br"),t._v("wang (at) zongsheng.im")])])],1),t._v(" "),e("br"),e("br"),t._v(" "),e("el-row",[e("el-collapse",{model:{value:t.active_names,callback:function(s){t.active_names=s},expression:"active_names"}},[e("el-collapse-item",{attrs:{name:"0"}},[e("template",{slot:"title"},[e("div",{staticClass:"collapse-title"},[t._v("SKILLS")])]),t._v(" "),e("Skills")],2),t._v(" "),e("el-collapse-item",{attrs:{name:"1"}},[e("template",{slot:"title"},[e("div",{staticClass:"collapse-title"},[t._v("PUBLICATIONS")])]),t._v(" "),e("Publications")],2),t._v(" "),e("el-collapse-item",{attrs:{name:"2"}},[e("template",{slot:"title"},[e("div",{staticClass:"collapse-title"},[t._v("TEACHING")])]),t._v(" "),e("Teach")],2),t._v(" "),e("el-collapse-item",{attrs:{name:"3"}},[e("template",{slot:"title"},[e("div",{staticClass:"collapse-title"},[t._v("PROJECTS")])]),t._v(" "),e("Projects")],2),t._v(" "),e("el-collapse-item",{attrs:{name:"4"}},[e("template",{slot:"title"},[e("div",{staticClass:"collapse-title"},[t._v("MISC & OPEN-SOURCE")])]),t._v(" "),e("Misc")],2)],1)],1)],1)],1),t._v(" "),e("el-footer",{staticClass:"hidden-md-and-up"},[e("Footer",{staticClass:"sm-footer"})],1)],1)],1)],1)},staticRenderFns:[]};var S=i("VU/8")(x,y,!1,function(t){i("Jtn5")},"data-v-4342815d",null).exports;e.default.use(c.a),e.default.use(l.a),e.default.prototype.API_URL="http://localhost:8989";var j=new c.a({routes:[{path:"/",name:"Home",component:S}]}),P=(i("D/PP"),i("D4uH"));e.default.component("fa-icon",P.a),e.default.use(n.a),e.default.config.productionTip=!1,new e.default({el:"#app",router:j,template:"<App/>",components:{App:o}})},NdKW:function(t,s,i){t.exports=i.p+"static/img/archery_vr.62c1e32.png"},NqbI:function(t,s){},VRdx:function(t,s){},bdZs:function(t,s){},beLq:function(t,s){},e3Pz:function(t,s,i){t.exports=i.p+"static/img/number_reco.cdb0fb5.png"},oJkJ:function(t,s,i){t.exports=i.p+"static/img/game_ctl_demo.8136620.png"},sCdo:function(t,s,i){t.exports=i.p+"static/img/avatar01.d649eda.png"},sfy8:function(t,s){},tvR6:function(t,s){},zjFY:function(t,s,i){t.exports=i.p+"static/img/campus_navigation.eb8d8e8.png"}},["NHnr"]);
//# sourceMappingURL=app.70608c3c275ef72b8232.js.map