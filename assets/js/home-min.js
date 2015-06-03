(function(){"use strict";var e,t,n,r,o,a,i,s,u,l,c,p=[].slice;if("undefined"!=typeof angular&&null!==angular){n={app_name:"ajenjo",dev:!0,presentation:!0,log_simbol_end_time:": ",log_view_time:!0,sails_time_to_declare_disconect:5e3},e={configs:[],modules:[]},o=function(e,n){return t.directive(e,n)},u={module:function(t){var n,r;for(n in t)r=t[n],e.modules.push(r);return u},config:function(t){return e.configs.push(t),u}},a=function(e,n){return t.factory(e,n)},l=function(e,n){return t.provider(name,n)},u.module(["ngSails"]).config(["$sailsProvider",function(e){return e.autoConnect=!0,e.useCORSRouteToGetCookie=!0}]),u.module(["ngSanitize"]),u.config(["$provide",function(e){var t;return e.provider("controlActivities",t=function(){var e,t,n,r,o,a,i,s,u,l,c,p,d,m;return t=function(){function e(e,t,n){this.callbacks=null!=t?t:[],this.endCallBack=null!=n?n:[],null!=e&&this.callback(e)}return e.prototype.runAllCallBack=function(){var e,t,n,r;try{n=this.callbacks,r=[];for(t in n)e=n[t],r.push(e());return r}catch(o){}},e.prototype.callback=function(e){return this.callbacks.push(e)},e.prototype.endCallback=function(e){return this.endCallBack.push(e)},e.prototype.end=function(){var e,t,n,r;try{this.runAllCallBack()}catch(o){}try{n=this.endCallBack,r=[];for(t in n)e=n[t],r.push(e());return r}catch(o){}},e}(),e={created:0,finished:0,lastCountInactive:0,_list:{}},l=[],c=console.log,n=function(){return Object.keys(e._list).length},r=function(){return 0!==n()},o=function(){return e.created},a=function(){return e.finished},p=function(n,o){var a;return a=new t(o),null==e._list[n]?(e.created++,l.push(a),a.endCallback(function(){return c.log("Se esta finalizando la actividad "+n+"."),e.finished++,delete e._list[n],r()||(e.lastCountInactive=e.created),d()}),e._list[n]=a,i(n)):!1},i=function(t){var n;return n=e._list[t],null==n&&(n=p(t)),n},u=function(){var t,n,i,s;return n=o(),i=a(),t=e.lastCountInactive,s=(i-t)/(n-t),r()?s||0:1},s=function(){return e._list},m=null,d=function(){return(null!=(null!=m?m.$apply:void 0))()},{$get:["$rootScope","log","$interval",function(e,l,d){var g;return c=new l("Control Activities"),g=function(){return m=e},g(),{count:n,created:o,finished:a,get:i,"new":p,percent:u,activity:t,countActivitiesActives:n,existsActivities:r,getActivitiesCreated:o,getActivitiesFinished:a,getActivity:i,getHistory:s,getPercent:u,newActivity:p}}]}})}]),u.module(["ngRoute"]).config(["$routeProvider","$locationProvider",function(e,t){var n;return n=function(t,r){var o,a,i;if("otherwise"===t)return e.otherwise(r);if("string"==typeof t||t instanceof String)return e.when(t,r);if(Array.isArray(t)){a=[];for(o in t)i=t[o],a.push(n(i,r));return a}return console.warn("El path",t,"requiere que sea un Array<String> o String.")},n("otherwise",{redirectTo:"/home"}),n("/login_demo",{templateUrl:"login_page"}),n("/home",{templateUrl:"home_page"}),n("/groups",{templateUrl:"groups_page",controller:"groupsCtrl"}),n("/users",{templateUrl:"users_page",controller:"usersCtrl"}),n("/permissions",{templateUrl:"permissions_page",controller:"permissionCtrl"}),n("/users/add",{redirectTo:"/add/user"}),n("/permissions/add",{redirectTo:"/add/permission"}),n("/groups/add",{redirectTo:"/add/group"}),n("/add/user",{templateUrl:"adds_page",controller:"add_user"}),n("/add/group",{templateUrl:"adds_page",controller:"add_group"}),n("/add/permission",{templateUrl:"adds_page",controller:"add_permission"}),t.html5Mode({enable:!1,requireBase:!1})}]),u.module(["ui.bootstrap"]),t=angular.module(n.app_name,e.modules),a("alert",function(){var e;return e=function(){function e(){}return e.prototype.alerts=[],e.prototype.modelAlert={type:"warning",message:""},e.prototype._onLogs=[],e.prototype.onLog=function(e){return this._onLogs.push(e)},e.prototype.newAlert=function(e){var t,n,r,o,a;for(o=angular.copy(this.modelAlert),(null!=(null!=e?e.msg:void 0)||null!=(null!=e?e.message:void 0))&&(o.message=e.msg||e.message),null!=(null!=e?e.type:void 0)&&(o.type=e.type),a=this._onLogs,t=0,n=a.length;n>t;t++)(r=a[t])(e,o);return this.alerts.push(o)},e.prototype.removeAlert=function(e){return this.alerts.splice(e,1)},e}()}),a("log",function(){var e,t;return e=function(e){var t,n,r,o,a;r=[];for(o in e)if(n=e[o],Array.isArray(n))for(a in n)t=n[a],r.push(t);else r.push(n);return r},t=function(){function t(e,t,n,r,o,a){this.header=null!=e?e:null,this.preModule=null!=t?t:null,this.separator=null!=n?n:" > ",this.styles=null!=r?r:{color:"green"},this.stylesErr=null!=o?o:{color:"red"},this.virtualLog=null!=a?a:console.log}return t.prototype.getHeaderArr=function(){return[""+this.header]},t.prototype.createTagLog=function(){var t;return null!=this.preModule?(t=[],t.push(this.preModule.createTagLog()),t.push(this.getHeaderArr())):t=this.getHeaderArr(),e(t)},t.prototype.getHeaderInline=function(){var e;return function(){var t,n,r,o;for(r=this.getHeader(),o=[],t=0,n=r.length;n>t;t++)e=r[t],o.push(""+e);return o}.call(this).join(this.separator)},t.prototype.getHeader=function(){var e,t,n;return n=function(){var n,r;n=this.createTagLog(),r=[];for(t in n)e=n[t],r.push(e);return r}.call(this)},t.prototype.getSkeletonHeader=function(e){var t,r,o,a,i,s;return i=[],o=this.getHeaderInline(),r=new Date,i.push("%c["),n.log_view_time&&i.push(r.toLocaleTimeString()+" "+r.toLocaleDateString()+n.log_simbol_end_time),i.push(o),i.push("]:"),i=[function(){var e,n,r;for(r=[],e=0,n=i.length;n>e;e++)t=i[e],r.push(""+t);return r}().join(""),function(){var t;t=[];for(a in e)s=e[a],t.push(a+":"+s);return t}().join(";")]},t.prototype.log=function(){var e,t;return e=1<=arguments.length?p.call(arguments,0):[],t=[],t.push.apply(t,this.getSkeletonHeader(this.styles)),t.push.apply(t,e),n.dev?console.log.apply(console,t):void 0},t.prototype.error=function(){var e,t;return e=1<=arguments.length?p.call(arguments,0):[],t=[],t.push.apply(t,this.getSkeletonHeader(this.stylesErr)),t.push.apply(t,e),n.dev?console.log.apply(console,t):void 0},t}()}),a("messages",function(){return{module:{groups:"[Module Groups]"},alerts:{error_add_groups:"Los grupos nos se han podido ingresar a la base de datos, revise los campos en rojo."}}}),a("model",function(){var e;return e=function(){function e(e){null!=e&&(this.model=e)}return e.prototype.models=[],e.prototype.model={},e.prototype._validates={},e.prototype.validate=function(e,t){return this._validates[e]=t},e.prototype.add=function(e){var t,n,r,o,a,i,s;null==e&&(e={}),a=angular.copy(this.model),r=!1;for(n in a)s=a[n],null!=e[n]&&(r=!0,a[n]=e[n]);i=this._validates;for(o in i)t=i[o],a[o]=t;return r?this.models.push(a):void 0},e.prototype.remove=function(e){return this.models.slice(e,1)},e.prototype.save=function(e){var t,n,r,o,a,i,s,u;for(i=this.models,u=[],n=0,r=i.length;r>n;n++){o=i[n],s=this._validates;for(a in s)t=s[a],delete o[a];u.push(e.push(o))}return u},e}()}),a("search",function(){var e;return e=function(){function e(){}return e.prototype.active=!1,e.prototype.actived=function(){return this.active=!this.active},e.prototype.text="",e.prototype.clear=function(){return this.text=""},e.prototype.exit=function(e){return 27===e.keyCode?(this.active=!1,this.clear()):void 0},e}()}),a("verificData",function(){var e,t,n,r,o,a,i;return e="[a-zA-Z0-9\\.\\_\\-]+\\.[a-zA-Z0-9]+",t="[a-zA-Z0-9\\_\\-\\.\\%]+\\@"+e,i="[a-zA-Z0-9\\?\\$\\#\\/\\:\\.\\-_%\\&]+",o='"{0,}([a-zA-Z][a-zA-Z ]+)"{0,}\\s{0,}<('+t+")>",a=o+"[\\s]{0,}\\(("+i+")\\)",n="<("+t+")>[\\s]{0,}\\(("+i+")\\)",r='"{0,}([a-zA-Z]+)([a-zA-Z ]+)"{0,}',{regexp:{email:t,nameEmail:o,nameEmailWeb:a,emailWeb:n,nameAndLastName:r},isEmpty:function(e){return!e},useSymbol:function(e,t){var n,r;return n=null!=t&&"function"==typeof t.indexOf?t.indexOf(e):void 0,r=-1!==n&&void 0!==n},isEmail:function(e){return Boolean(/^[a-zA-Z0-9\._%\+\-]+@[a-zA-Z0-9\-\+]+\.[a-zA-Z0-9]+$/gi.exec(e))}}}),r=function(e,n,r){return n.push(r),t.controller(e,n)},r("add_group",["$scope","$log","$rootScope","messages","log","alert","verificData","controlActivities"],function(e,t,n,r,o,a,i,s){var u,l,c,p,d,m,g,f,h,v,y,_,b,A,$,x;return e.type="group",e.is=function(t){return e.type===t},d=new o("Module Grups Add"),g=new o("Save Groups",d),f=new o("Validate Group",d),m=new o("Remove Alerts",d),n.title="Nuevo grupo",e.alerts=[],e.alertsFixed=[],l={keyAlertDanger:-1},e.removeAlert=v=function(t){return m.log("Eliminando la alerta en la posición",t),e.alerts.splice(t,1)},e.removeAlertFixed=y=function(t){return m.log("Eliminando la alerta fija en la posición",t),e.alertsFixed.splice(t,1)},u=function(){var t,n,r;n=e.alertsFixed,r=[];for(t in n)a=n[t],r.push(y(t));return r},e.data={groupsAdd:[]},_=function(e){var t,r,o,a;r=!1,a=n.groups;for(t in a)o=a[t],o.key===e&&(r=!0);return!r},b=function(t){var n,r,o,a;r=0,a=e.data.groupsAdd;for(n in a)o=a[n],o.key===t&&(r+=1);return 1>=r?!0:!1},A=function(e){var t,n;return t=/^[a-z0-9_-]+$/gi,n=t.exec(e),Boolean(n)},x=function(e){var t;return t=!0,_(e.key)||(t=!1),b(e.key)||(t=!1),A(e.key)||(t=!1),t},p=function(e){var t,n;return t=i.isEmpty(e.key),n=x(e),t?!1:n?!0:!1},c=function(e){var t,n;return t=i.isEmpty(e.key),n=x(e),t?!1:n?void 0:!0},h={max:100,status:!1,text:"",type:"default",value:100},$=function(){var t,r,o,a,i,d,m,f,h;return o=e.data.groupsAdd,t=s.get("save_all_groups"),m=function(){var e;e=[];for(f in o)a=o[f],p(a)&&e.push({key:a.key,name:a.name});return e}(),d=function(){var e;e=[];for(f in o)a=o[f],c(a)&&e.push(a.key);return e}(),u(),d.length>0?(g.error("Se encontraron que los grupos con la claves",d,"no se pueden ingresar."),h=function(){var e,t,n;for(n=[],e=0,t=d.length;t>e;e++)i=d[e],n.push('"'+(i||"")+'"');return n}().join(", "),l.keyAlertDanger=1-e.alertsFixed.push({type:"danger",message:"<strong>Advertencia:</strong> Los grupos "+h+" no nos son posible agregarlos debido a que puede estar replicados o mal escrito. <br> <strong>Nota:</strong> <i>Por favor revisar los campos en rojo.</i>"})):m.length>0?(g.log("Están listo para agregar los grupos",function(){var e,t,n;for(n=[],e=0,t=m.length;t>e;e++)a=m[e],n.push(a.key);return n}()),r=s.get("activity_save_db_groups"),n.db.groups=m,e.statusLoadSaveGroup=!0,r.callback(function(){return e.statusLoadSaveGroup=!1,l.keyAlertCompleteUploadData=1-e.alertsFixed.push({type:"success",message:'Los datos han sido guardados correctamente. Visita los <a href="#/groups" class="alert-link">grupos</a> para revisar los grupos que acabas de ingresar.'})}),g.log("Limpiando la data local de los grupos. Eliminado",o.length,"datos.")):e.alerts.push({type:"warning",message:"<strong>Advertencia:</strong> No existe ningún grupo para agregar."}),t.end()},e.hsA=s.getHistory,e.dangerKey=c,e.progressbar=h,e.save=$,e.validateKey=p}),r("add_permission",["$scope","$log"],function(e,t){return e.type="permission",e.is=function(t){return e.type===t}}),r("add_user",["$scope","$rootScope","log","verificData","$http"],function(e,t,r,o,a){var i,s,u,l,c,p,d,m,g;return e.type="user",e.is=function(t){return e.type===t},e.data={usersAdd:[],usersAddlongText:"",regexToFindEmails:o.regexp.emailWeb+"|"+o.regexp.nameEmailWeb+"|"+o.regexp.nameEmail+"|"+o.regexp.email},n.dev&&(e.data.usersAddlongText="name1@d.co,\nname2@d.co,\nnombre apellido segundo apellido <name3@do.co>,\nnombre Apellido<name4@d.c> (http://el.sitio/)\nnombre Apellido <name5@b.e>(http://el.sitio/)\n<name6@b.e> (http://el.sitio/)"),e.typeInvitation="single",e.toBulk=function(){return e.typeInvitation="bulk"},e.toSingle=function(){return e.typeInvitation="single"},u=new r("Module User Add"),p=new r("Save User",u),l=new r("Catching Emails",u),c=new r("Parset Email List",l),e.users=t.users,u.log("Datos cargados desde la variable 'users' ($rootScope) a variable 'users' ($scope):",e.users),d=function(){var t,n;return t=new RegExp(e.data.regexToFindEmails,"g"),n=e.data.usersAddlongText.match(t),e.data.regexpEnd=n,l.log("Capturando Emails usando el Regex",t,"Retornando: ",n)},e.$watch("data.usersAddlongText",d),e.$watch("data.regexToFindEmails",d),g={email:function(e){var t;return t=e.email,o.isEmpty(t)?!1:o.isEmail(t)?!0:!1}},s={email:function(e){var t;return t=e.email,o.isEmpty(t)?!1:o.isEmail(t)?!1:!0}},i=function(){var t,n,r,a,i,s,u,l,p,d,m,g,f,h,v,y,_,b,A,$,x,k,E,w,C,S,L,q,F,T,N,R,I,z,D;for(C=new RegExp(o.regexp.nameEmail),S=new RegExp(o.regexp.emailWeb),L=new RegExp(o.regexp.nameEmailWeb),q=new RegExp(o.regexp.nameAndLastName),F=new RegExp(o.regexp.email),E=e.data.regexpEnd,c.log("Lista de contactos encontrados",E),c.log("Clasificando",E.length,"Contactos."),i=[],s=[],a=[],u=[],h=0,_=E.length;_>h;h++)r=E[h],g=r.match(L),d=r.match(C),m=r.match(S),f=r.match(F),g?i.push(r):m?a.push(r):d?s.push(r):f&&u.push(r);for(c.log("Los contactos con Nombre Email y Sitio web encontrados",i),c.log("Los contactos con Nombre y Email encontrados",s),c.log("Los contactos con Email y Web encontrados",a),c.log("Los contactos solo con Email",u),c.log("Los usuarios encontrados fueron",i.length+s.length+a.length+u.length),z=[],v=0,b=u.length;b>v;v++)r=u[v],z.push({email:r});for(w=0,A=a.length;A>w;w++)r=a[w],t=r.match(S),l=t[1],D=t[2],z.push({email:l,web:D});for(N=0,$=s.length;$>N;N++)r=s[N],t=r.match(C),T=t[1],l=t[2],n=T.match(q),p=n[1],y=n[2],z.push({name:p,lastname:y,email:l});for(R=0,x=i.length;x>R;R++)r=i[R],t=r.match(L),T=t[1],l=t[2],D=t[3],n=T.match(q),p=n[1],y=n[2],z.push({name:p,lastname:y,email:l,web:D});for(c.log("Memoria temporal previa a ingresar a la lista",z),z=z.reverse(),e.data.usersAdd=[],I=0,k=z.length;k>I;I++)r=z[I],e.data.usersAdd.push(r);return e.toSingle()},m=function(){var t;return t=e.data.usersAdd,p.error("Base para los usuarios a agregar",t)},e.bulkEmailToListAccounts=i,e.save=m,e.d=s,e.v=g}),r("addsCtrl",["$scope","$routeParams","$location"],function(e,t,n){var r;return e.tab=r=t.type_adds}),r("AppCtrl",["$scope","$rootScope","$log","log","controlActivities","$sails"],function(e,t,r,o,a,i){var s,u,l,c,p,d,m,g,f;return t.title="Ajenjo",c=new o("Change Data",d),p=new o("Ctrl APP"),d=new o("Save Global Data",p),m=new o("Status connection",p),function(){var e,r,o,a,s;return a=-1,r=0,e=1,s=n.sails_time_to_declare_disconect,t.appIsConnect=a,o=function(){if(t.appIsConnect===a){t.appIsConnect=r,m.log("Se cambio el estado de la aplicación debido a no estar conectado en",s,"segundos.");try{return t.$apply()}catch(e){}}},setTimeout(o,s),i.on("connect",function(){return m.log("Se ha conectado la aplicación."),t.appIsConnect=e}),i.on("disconnect",function(){return m.log("Esta ha desconectado la aplicación."),t.appIsConnect=r})}(),i.on("message_test",function(e){return p.log("Se ha recibido un estatus de parte del backend este dice:",e.text)}),p.log("El modo de desarrollador esta activo."),l=[{key:"abc1231",name:"Administradores",description:"Lorem ipsum dolor sit amet..."},{key:"abc1232",name:"Usuarios",description:"Lorem ipsum dolor sit amet..."},{key:"abc1233",name:"Otros",description:"Lorem ipsum dolor sit amet..."}],null==l&&(l=[]),f=[{id:1,name:"F Name 1",username:"user1"},{id:2,name:"F Name 2",username:"user2"},{id:3,name:"F Name 3",username:"user3"},{id:4,name:"F Name 4",username:"user4"},{id:5,name:"F Name 5",username:"user5"},{id:6,name:"F Name 6",username:"user6"},{id:7,name:"F Name 7",username:"user7"}],null==f&&(f=[]),g=[{key:"permission_01",description:"Explicabo modi aspernatur temporibus laborum. Sequi maiores numquam ad ab"},{key:"permission_02",description:"Distinctio earum beatae explicabo tenetur quibusdam pariatur molestiae, voluptatibus numquam"},{key:"permission_03",description:"Enim corporis omnis, sed facilis iure cumque aspernatur earum fugit"},{key:"permission_04",description:"Dicta odit veritatis, officia quisquam nemo quam maiores soluta."},{key:"permission_05",description:"Non earum alias aliquam magnam natus consectetur sequi facilis, optio"},{key:"permission_06",description:"Minus hic porro reiciendis est architecto temporibus aliquam quae voluptates itaque"},{key:"permission_07",description:"Est voluptate, dolor excepturi qui repellendus ex asperiores enim eaque"},{key:"permission_08",description:"Iste inventore, doloremque officiis repellendus officia voluptas nesciunt maiores quo"},{key:"permission_09",description:"Rerum nobis fuga sunt perspiciatis cumque cupiditate possimus impedit omnis incidunt"},{key:"permission_10",description:"Cumque sint dicta eveniet repudiandae ex vel autem, vero ipsam"},{key:"permission_11",description:"Quia neque necessitatibus tempora expedita architecto. Eaque voluptatem praesentium unde"},{key:"permission_12",description:"Iste modi porro ex fugit, eius incidunt aperiam accusamus quasi"}],null==g&&(g=[]),t.groups=l,t.permissions=g,t.users=f,u=function(e,n){var r,o,a,i;r=t[e]||[],c.log("Data:",'"'+e+'"',"Contiene:",r),c.log("Leyendo data",n,'e ingresando al la data global "'+e+'".'),i=[];for(a in n)o=n[a],i.push(r.push(o));return i},t.db={groups:[]},t.$watch("db.groups",s=function(e,n){var r,o,i,s,l,c;for(o=0,c=t.db.groups,s=0,l=c.length;l>s;s++)i=c[s],o++;return o>0?(r=a.get("activity_save_db_groups"),u("groups",e),d.log("Limpiando data 'groups' temporal de la db (\"db.groups\")."),t.db.groups=[],r.end(),t.$apply()):void 0})}),r("groupsCtrl",["$scope","$rootScope","search"],function(e,t,n){return e.groups=t.groups,e.search=new n}),r("navbarCtrl",["$scope","$location"],function(e,t){return e.$location=t}),r("permissionCtrl",["$scope","$rootScope","search"],function(e,t,n){return e.permissions=t.permissions,e.search=new n}),r("usersCtrl",["$scope","$rootScope","log","search"],function(e,t,n,r){var o;return e.type="user",e.is=function(t){return e.type===t},e.search=new r,o=new n("Module User"),e.users=t.users}),o("formRepeatElement",function(){return{restrict:"EA",scope:{fnNew:"=",___min:"=minInit",___data:"=ngModel"},require:[],link:function(e,t,n){},controller:["$scope","$attrs",function(e,t){var n;return n=function(){return e.___data.push({})},e.fnNew=function(){return n()},void 0===e.___data&&(e.___data=[]),e.$watch("___min",function(t,r){var o,a;if(o=(e.___min||1)+1-e.___data.length,o>1){for(a=[];o-=1;)a.push(n());return a}})}],template:function(e,t){return'<span class="form-single-element" ng-repeat="'+(t.nameData||"$$data")+' in ___data">'+e.html()+"</span>"}}}),o("formSingleElement",function(){return{restrict:"C",scope:!1,controller:["$scope",function(e){var t,n,r;return r=function(){return t()||n()?!1:!0},t=function(){return e.$parent.___data.length-1===e.$index},n=function(){return 0===e.$index},e.$$isFotter=t,e.$$isHeader=n,e.$$isMidlle=r}]}}),o("formRemoveElement",function(){return{restrict:"EA",scope:!1,controller:["$scope",function(e){return e.$$remove=function(){return e.$parent.$parent.___data.splice(e.$index,1)}}]}}),o("controlActivities",function(){return{controller:["controlActivities","$scope","log",function(e,t,n){var r;return r=new n("Control Activities"),t.existsActivities=e.existsActivities,t.percent=e.getPercent,t.countActivities=e.count,t.history=e.getHistory}]}}),c=e.configs;for(i in c)s=c[i],t.config(s)}n.dev&&console.log("-- End Runing --"),(n.dev||n.presentation)&&console.log("%c",'padding:3px 174px; line-height: 20px; background-repeat:no-repeat; background-size: auto 100%; background-position:button left; background-image: url("'+location.protocol+"//"+location.host+new RegExp(".{0,}/").exec(location.pathname)+'/imgs/logo348.png");')}).call(this);