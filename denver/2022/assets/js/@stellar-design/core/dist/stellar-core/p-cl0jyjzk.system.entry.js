System.register(["./p-94e3dad1.system.js","./p-c4dffc26.system.js","./p-9f50cf1d.system.js"],(function(t){"use strict";var e,r,n;return{setters:[function(t){e=t.r;r=t.g},function(){},function(t){n=t.A}],execute:function(){var i=function(t,e){if(t.charAt(0)=="/"&&e.charAt(e.length-1)=="/"){return e.slice(0,e.length-1)+t}return e+t};var o=t("stencil_router_redirect",function(){function t(t){e(this,t)}t.prototype.componentWillLoad=function(){if(this.history&&this.root&&this.url){return this.history.replace(i(this.url,this.root))}};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());n.injectProps(o,["history","root"])}}}));