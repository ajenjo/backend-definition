(function(){"use string";var e,n,t,r,o,i,a,s,l,c,u,p=[].slice;if("undefined"!=typeof angular&&null!==angular){t={app_name:"ajenjo-login",dev:!0,presentation:!0,log_simbol_end_time:": ",log_view_time:!0,sails_time_to_declare_disconect:5e3},e={configs:[],modules:[]},o=function(e,t){return n.directive(e,t)},l={module:function(n){var t,r;for(t in n)r=n[t],e.modules.push(r);return l},config:function(n){return e.configs.push(n),l}},i=function(e,t){return n.factory(e,t)},c=function(e,t){return n.provider(name,t)},l.module(["ngSails"]).config(["$sailsProvider",function(e){return e.autoConnect=!0,e.useCORSRouteToGetCookie=!0}]),l.module(["ngSanitize"]),l.config(["$provide",function(e){var n;return e.provider("controlActivities",n=function(){var e,n,t,r,o,i,a,s,l,c,u,p,d,f;return n=function(){function e(e,n,t){this.callbacks=null!=n?n:[],this.endCallBack=null!=t?t:[],null!=e&&this.callback(e)}return e.prototype.runAllCallBack=function(){var e,n,t,r;try{t=this.callbacks,r=[];for(n in t)e=t[n],r.push(e());return r}catch(o){}},e.prototype.callback=function(e){return this.callbacks.push(e)},e.prototype.endCallback=function(e){return this.endCallBack.push(e)},e.prototype.end=function(){var e,n,t,r;try{this.runAllCallBack()}catch(o){}try{t=this.endCallBack,r=[];for(n in t)e=t[n],r.push(e());return r}catch(o){}},e}(),e={created:0,finished:0,lastCountInactive:0,_list:{}},c=[],u=console.log,t=function(){return Object.keys(e._list).length},r=function(){return 0!==t()},o=function(){return e.created},i=function(){return e.finished},p=function(t,o){var i;return i=new n(o),null==e._list[t]?(e.created++,c.push(i),i.endCallback(function(){return u.log("Se esta finalizando la actividad "+t+"."),e.finished++,delete e._list[t],r()||(e.lastCountInactive=e.created),d()}),e._list[t]=i,a(t)):!1},a=function(n){var t;return t=e._list[n],null==t&&(t=p(n)),t},l=function(){var n,t,a,s;return t=o(),a=i(),n=e.lastCountInactive,s=(a-n)/(t-n),r()?s||0:1},s=function(){return e._list},f=null,d=function(){return(null!=(null!=f?f.$apply:void 0))()},{$get:["$rootScope","log","$interval",function(e,c,d){var g;return u=new c("Control Activities"),g=function(){return f=e},g(),{count:t,created:o,finished:i,get:a,"new":p,percent:l,activity:n,countActivitiesActives:t,existsActivities:r,getActivitiesCreated:o,getActivitiesFinished:i,getActivity:a,getHistory:s,getPercent:l,newActivity:p}}]}})}]),l.module(["ngRoute"]).config(["$routeProvider","$locationProvider",function(e,n){var t;return t=function(n,r){var o,i,a;if("otherwise"===n)return e.otherwise(r);if("string"==typeof n||n instanceof String)return e.when(n,r);if(Array.isArray(n)){i=[];for(o in n)a=n[o],i.push(t(a,r));return i}return console.warn("El path",n,"requiere que sea un Array<String> o String.")},t("otherwise",{redirectTo:"/login"}),t("/login",{templateUrl:"login_page",controller:"loginCtrl"}),t("/recovery",{templateUrl:"recovery_password_page",controller:"recoveryPasswordCtrl"}),t("/reset/password/:index/:verific",{controller:"resetPassword",templateUrl:"reset_password_page"}),n.html5Mode(!1)}]),l.module(["ui.bootstrap"]),n=angular.module(t.app_name,e.modules),i("alert",function(){var e;return e=function(){function e(){}return e.prototype.alerts=[],e.prototype.modelAlert={type:"warning",message:""},e.prototype._onLogs=[],e.prototype.onLog=function(e){return this._onLogs.push(e)},e.prototype.newAlert=function(e){var n,t,r,o,i;for(o=angular.copy(this.modelAlert),(null!=(null!=e?e.msg:void 0)||null!=(null!=e?e.message:void 0))&&(o.message=e.msg||e.message),null!=(null!=e?e.type:void 0)&&(o.type=e.type),i=this._onLogs,n=0,t=i.length;t>n;n++)(r=i[n])(e,o);return this.alerts.push(o)},e.prototype.removeAlert=function(e){return this.alerts.splice(e,1)},e}()}),i("log",function(){var e,n;return e=function(e){var n,t,r,o,i;r=[];for(o in e)if(t=e[o],Array.isArray(t))for(i in t)n=t[i],r.push(n);else r.push(t);return r},n=function(){function n(e,n,t,r,o,i){this.header=null!=e?e:null,this.preModule=null!=n?n:null,this.separator=null!=t?t:" > ",this.styles=null!=r?r:{color:"green"},this.stylesErr=null!=o?o:{color:"red"},this.virtualLog=null!=i?i:console.log}return n.prototype.getHeaderArr=function(){return[""+this.header]},n.prototype.createTagLog=function(){var n;return null!=this.preModule?(n=[],n.push(this.preModule.createTagLog()),n.push(this.getHeaderArr())):n=this.getHeaderArr(),e(n)},n.prototype.getHeaderInline=function(){var e;return function(){var n,t,r,o;for(r=this.getHeader(),o=[],n=0,t=r.length;t>n;n++)e=r[n],o.push(""+e);return o}.call(this).join(this.separator)},n.prototype.getHeader=function(){var e,n,t;return t=function(){var t,r;t=this.createTagLog(),r=[];for(n in t)e=t[n],r.push(e);return r}.call(this)},n.prototype.getSkeletonHeader=function(e){var n,r,o,i,a,s;return a=[],o=this.getHeaderInline(),r=new Date,a.push("%c["),t.log_view_time&&a.push(r.toLocaleTimeString()+" "+r.toLocaleDateString()+t.log_simbol_end_time),a.push(o),a.push("]:"),a=[function(){var e,t,r;for(r=[],e=0,t=a.length;t>e;e++)n=a[e],r.push(""+n);return r}().join(""),function(){var n;n=[];for(i in e)s=e[i],n.push(i+":"+s);return n}().join(";")]},n.prototype.log=function(){var e,n;return e=1<=arguments.length?p.call(arguments,0):[],n=[],n.push.apply(n,this.getSkeletonHeader(this.styles)),n.push.apply(n,e),t.dev?console.log.apply(console,n):void 0},n.prototype.error=function(){var e,n;return e=1<=arguments.length?p.call(arguments,0):[],n=[],n.push.apply(n,this.getSkeletonHeader(this.stylesErr)),n.push.apply(n,e),t.dev?console.log.apply(console,n):void 0},n}()}),i("verificData",function(){var e,n,t,r,o,i,a;return e="[a-zA-Z0-9\\.\\_\\-]+\\.[a-zA-Z0-9]+",n="[a-zA-Z0-9\\_\\-\\.\\%]+\\@"+e,a="[a-zA-Z0-9\\?\\$\\#\\/\\:\\.\\-_%\\&]+",o='"{0,}([a-zA-Z][a-zA-Z ]+)"{0,}\\s{0,}<('+n+")>",i=o+"[\\s]{0,}\\(("+a+")\\)",t="<("+n+")>[\\s]{0,}\\(("+a+")\\)",r='"{0,}([a-zA-Z]+)([a-zA-Z ]+)"{0,}',{regexp:{email:n,nameEmail:o,nameEmailWeb:i,emailWeb:t,nameAndLastName:r},isEmpty:function(e){return!e},useSymbol:function(e,n){var t,r;return t=null!=n&&"function"==typeof n.indexOf?n.indexOf(e):void 0,r=-1!==t&&void 0!==t},isEmail:function(e){return Boolean(/^[a-zA-Z0-9\._%\+\-]+@[a-zA-Z0-9\-\+]+\.[a-zA-Z0-9]+$/gi.exec(e))}}}),r=function(e,t,r){return t.push(r),n.controller(e,t)},r("AppCtrl",["$scope","$rootScope","$log","log","controlActivities","$sails","$location"],function(e,n,r,o,i,a,s){var l,c,u;return n.title="Login",l=new o("Ctrl APP"),c=new o("Sails",l),u=new o("Status Connection",l),function(){var e;return e=function(){var e;return e=a.get("/test"),e.success(function(e,t,r,o){return n.reqExperimental=e})},a.on("connect",e),n.callTest=e}(),function(){var e,r,o,i,s;return i=-1,r=0,e=1,s=t.sails_time_to_declare_disconect,n.appIsConnect=i,o=function(){if(n.appIsConnect===i){n.appIsConnect=r,u.log("Se cambio el estado de la aplicación debido a no estar conectado en",s,"segundos.");try{return n.$apply()}catch(e){}}},setTimeout(o,s),a.on("connect",function(){return u.log("Se ha conectado la aplicación."),n.appIsConnect=e}),a.on("disconnect",function(){return u.log("Esta ha desconectado la aplicación."),n.appIsConnect=r})}()}),r("loginCtrl",["$scope","$sails","log","$rootScope","controlActivities","$location"],function(e,n,r,o,i,a){var s,l;return e.loginError=!1,l=new r("Login"),e.data={usernameOrEmail:null,passwordVerific:null,rememberAccount:!1},e.dataResult={},e.loginError=!1,e.keyToCreateSession=function(e){return 13===e.keyCode?s():void 0},s=function(){var t,r;return t=i.get("activity_crear_una_sesion"),o.appIsConnect<=0?(e.loginError=!1,e.loginCorrect=!1,e.errorSys=!0,t.end()):(r=n.post("/api/login",e.data),r.success(function(n,t,r,o){return e.dataResult=n,e.loginError=n.loginError,e.loginCorrect=n.loginCorrect,e.errorSys=!1}),r.error(function(n,t,r,o){return e.dataResult=n,e.loginError=!1,e.loginCorrect=!1,e.errorSys=!1,l.log("El inicio de sesion ha fallado.")})),r["finally"](function(e,n,r,o){return t.end()})},e.login=s,t.dev?(e.data.usernameOrEmail="a",e.data.passwordVerific="1234"):void 0}),r("recoveryPasswordCtrl",["$scope","$sails","log","controlActivities","$rootScope"],function(e,n,r,o,i){var a,s;return a=new r("Recovery Password"),e.isErrorOnSystem=!1,e.isSendEmail=!1,e.isNoSendEmail=!1,e.data={email:null},e.keyToCreateRecovery=function(e){return 13===e.keyCode?s():void 0},s=function(){var t,r,s,l,c;return c=-1,l=0,s=1,i.appIsConnect===c||i.appIsConnect===l?e.isErrorOnSystem=!0:(t=o.get("Recovery Password"),r=n.post("/api/recovery",e.data),r.success(function(n,t,r,o){return a.log("Return Data Recovery:",n),e.isErrorOnSystem=n.errorServer,n.isSendEmail?(e.isSendEmail=!0,e.isNoSendEmail=!1):(e.isSendEmail=!1,e.isNoSendEmail=!0)}),r.error(function(e,n,t,r){}),r["finally"](function(e,n,r,o){return t.end()}))},t.dev&&(e.data.email="a@e.c"),e.sendRecovery=s}),r("resetPassword",["$scope","$sails","log","controlActivities","$rootScope"],function(e,n,r,o,i){var a,s,l;return t={minLengthPolycy:6},s={minLength:function(e){return null==e&&(e=t.minLengthPolycy),a.password.length>=e?!0:!1},withUppercase:function(){return/[A-Z]/g.exec(a.password)?!0:!1},withLowercase:function(){return/[a-z]/g.exec(a.password)?!0:!1},withNumber:function(){return/[0-9]/g.exec(a.password)?!0:!1},withSign:function(){return/[\°\|\¬\!\"\#\$\%\&\/\(\)\=\?\'\\\¿\¡\´\¨\*\+\~\[\]\{\}\^\`\;\,\:\.\-\_\s]/gi.exec(a.password)?!0:!1}},l=["minLength"],a={password:"",repeatPassword:"",getLevelPassword:function(){var e,n,t,r,o,i,a;for(i=[s.minLength(),s.withLowercase(),s.withNumber(),s.withSign(),s.withUppercase(),s.minLength(10)],r=0,o=i.length,e=0,n=i.length;n>e;e++)a=i[e],a&&r++;return t=r/o*100,console.log(t),t},getTypePassword:function(){var e;switch(e=a.getLevelPassword(),!1){case!(25>e):return"danger";case!(50>e):return"warning";case!(75>e):return"info";case!(100>e):return"default";default:return"success"}},isValidPassword:function(){var e,n,t,r,o,i;for(n=!0,e=function(){var e,n,t;try{for(t=[],e=0,n=l.length;n>e;e++)o=l[e],t.push(s[o]());return t}catch(r){}}(),t=0,r=e.length;r>t;t++)i=e[t],i===!1&&(n=!1);return n},isValidRepeatPassword:function(){return a.password===a.repeatPassword?!0:!1}},e.configCtrl=t,e.data=a,e.policy=s}),o("formRepeatElement",function(){return{restrict:"EA",scope:{fnNew:"=",___min:"=minInit",___data:"=ngModel"},require:[],link:function(e,n,t){},controller:["$scope","$attrs",function(e,n){var t;return t=function(){return e.___data.push({})},e.fnNew=function(){return t()},void 0===e.___data&&(e.___data=[]),e.$watch("___min",function(n,r){var o,i;if(o=(e.___min||1)+1-e.___data.length,o>1){for(i=[];o-=1;)i.push(t());return i}})}],template:function(e,n){return'<span class="form-single-element" ng-repeat="'+(n.nameData||"$$data")+' in ___data">'+e.html()+"</span>"}}}),o("formSingleElement",function(){return{restrict:"C",scope:!1,controller:["$scope",function(e){var n,t,r;return r=function(){return n()||t()?!1:!0},n=function(){return e.$parent.___data.length-1===e.$index},t=function(){return 0===e.$index},e.$$isFotter=n,e.$$isHeader=t,e.$$isMidlle=r}]}}),o("formRemoveElement",function(){return{restrict:"EA",scope:!1,controller:["$scope",function(e){return e.$$remove=function(){return e.$parent.$parent.___data.splice(e.$index,1)}}]}}),o("controlActivities",function(){return{controller:["controlActivities","$scope","log",function(e,n,t){var r;return r=new t("Control Activities"),n.existsActivities=e.existsActivities,n.percent=e.getPercent,n.countActivities=e.count,n.history=e.getHistory}]}}),u=e.configs;for(a in u)s=u[a],n.config(s)}t.dev&&console.log("-- End Runing --"),(t.dev||t.presentation)&&console.log("%c",'padding:3px 174px; line-height: 20px; background-repeat:no-repeat; background-size: auto 100%; background-position:button left; background-image: url("'+location.protocol+"//"+location.host+new RegExp(".{0,}/").exec(location.pathname)+'/imgs/logo348.png");')}).call(this);