(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75137000"],{7109:function(t,e,a){},"98b1":function(t,e,a){"use strict";var r=a("7109"),i=a.n(r);i.a},f691:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout--main",class:[t.navbarClasses,t.footerClasses,{"app-page":t.isAppPage}]},[a("div",{class:[t.contentAreaClass,{"show-overlay":t.bodyOverlay}],attrs:{id:"content-area"}},[a("div",{attrs:{id:"content-overlay"}}),a("div",{staticClass:"content-wrapper"},[a("the-navbar",{class:[{"text-white":t.isNavbarDark&&!t.isThemeDark},{"text-base":!t.isNavbarDark&&t.isThemeDark}],attrs:{navbarColor:t.navbarColor}}),a("div",{staticClass:"router-view"},[a("div",{staticClass:"router-content",class:{"mt-0":"hidden"==t.navbarType}},[a("transition",{attrs:{name:t.routerTransition}},[t.$route.meta.breadcrumb||t.$route.meta.pageTitle?a("div",{staticClass:"router-header flex flex-wrap items-center mb-6"},[a("div",{staticClass:"content-area__heading",class:{"pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light":t.$route.meta.breadcrumb}},[a("h2",{staticClass:"mb-1"},[t._v(t._s(t.routeTitle))])]),a("div",{staticClass:"ml-4 md:block hidden"},[a("div",{staticClass:"vx-breadcrumb"},[a("ul",{staticClass:"flex flex-wrap items-center"},[a("li",{staticClass:"inline-flex items-end"},[a("router-link",{attrs:{to:"/"}},[a("feather-icon",{attrs:{icon:"HomeIcon",svgClasses:"h-5 w-5 mb-1 stroke-current text-primary"}})],1),a("span",{staticClass:"breadcrumb-separator mx-2"},[a("feather-icon",{attrs:{icon:"ChevronsRightIcon",svgClasses:"w-4 h-4"}})],1)],1),t._l(t.breadc,(function(e,r){return a("li",{key:r,staticClass:"inline-flex items-center"},[e.url?a("router-link",{attrs:{to:e.url}},[t._v(t._s(e.title))]):a("span",{staticClass:"text-primary cursor-default"},[t._v(t._s(e.title))]),a("span",{staticClass:"breadcrumb-separator mx-2 flex items-start"},[a("feather-icon",{attrs:{icon:"ChevronsRightIcon",svgClasses:"w-4 h-4"}})],1)],1)})),a("li",{staticClass:"inline-flex"},[t.breadc.slice(-1)[0].active?a("span",{staticClass:"cursor-default"},[t._v(t._s(t.breadc.slice(-1)[0].title))]):t._e()])],2)])])]):t._e()]),a("div",{staticClass:"content-area__content"},[t.hideScrollToTop?t._e():a("back-to-top",{attrs:{bottom:"5%",visibleoffset:"500"}},[a("vs-button",{staticClass:"shadow-lg",attrs:{"icon-pack":"feather",icon:"icon-arrow-up"}})],1),a("transition",{attrs:{name:t.routerTransition,mode:"out-in"}},[a("vx-card",[a("router-view",{on:{changeRouteTitle:t.changeRouteTitle}})],1)],1)],1)],1)])],1),a("the-footer")],1)])},i=[],s=(a("6762"),a("2fdb"),a("337e")),o=a("9834"),n=a("4e8e"),c=a("aa75"),d=a("1dff"),l=a("0375"),h=a("6afc"),u={data:function(){return{navbarType:d["a"].navbarType||"floating",navbarColor:d["a"].navbarColor||"#fff",footerType:d["a"].footerType||"static",routerTransition:d["a"].routerTransition||"none",isNavbarDark:!1,routeTitle:this.$route.meta.pageTitle,sidebarItems:l["a"],disableCustomizer:d["a"].disableCustomizer,windowWidth:window.innerWidth,hideScrollToTop:d["a"].hideScrollToTop,disableThemeTour:d["a"].disableThemeTour,breadc:[{title:"Dashboard",active:"true"}]}},watch:{$route:function(){this.routeTitle=this.$route.meta.pageTitle},isThemeDark:function(t){"#fff"==this.navbarColor&&t?this.updateNavbarColor("#10163a"):this.updateNavbarColor("#fff")}},computed:{isAppPage:function(){return!!this.$route.path.includes("/apps/")},isThemeDark:function(){return"dark"==this.$store.state.theme},sidebarWidth:function(){return this.$store.state.sidebarWidth},bodyOverlay:function(){return this.$store.state.bodyOverlay},contentAreaClass:function(){return"default"==this.sidebarWidth?"content-area-default":"reduced"==this.sidebarWidth?"content-area-reduced":this.sidebarWidth?"content-area-full":void 0},navbarClasses:function(){return{"navbar-hidden":"hidden"==this.navbarType,"navbar-sticky":"sticky"==this.navbarType,"navbar-static":"static"==this.navbarType,"navbar-floating":"floating"==this.navbarType}},footerClasses:function(){return{"footer-hidden":"hidden"==this.footerType,"footer-sticky":"sticky"==this.footerType,"footer-static":"static"==this.footerType}}},methods:{changeRouteTitle:function(t){this.routeTitle=t},updateNavbarColor:function(t){this.navbarColor=t,this.isNavbarDark="#fff"!=t},handleWindowResize:function(t){this.windowWidth=t.currentTarget.innerWidth,this.setSidebarWidth()},setSidebarWidth:function(){this.windowWidth<1200?(this.$store.commit("TOGGLE_IS_SIDEBAR_ACTIVE",!1),this.$store.dispatch("updateSidebarWidth","no-sidebar"),this.disableThemeTour=!0):this.windowWidth<1200?this.$store.dispatch("updateSidebarWidth","reduced"):this.$store.commit("TOGGLE_IS_SIDEBAR_ACTIVE",!0)},toggleHideScrollToTop:function(t){this.hideScrollToTop=t}},components:{VxSidebar:s["a"],TheNavbar:o["a"],TheFooter:n["a"],BackToTop:h["a"],VxBreadcrumb:c["a"]},created:function(){this.setSidebarWidth(),"#fff"==this.navbarColor&&this.isThemeDark?this.updateNavbarColor("#10163a"):this.updateNavbarColor(this.navbarColor)}},b=u,f=(a("98b1"),a("2877")),v=Object(f["a"])(b,r,i,!1,null,"622fd4a4",null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-75137000.f67a1ad3.js.map