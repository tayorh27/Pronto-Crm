(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"+ZvU":function(t,e,n){"use strict";n.r(e),n.d(e,"CRMModule",(function(){return x}));var i=n("tyNb"),c=n("ofXK"),o=n("3Pt+"),s=n("OsiS"),r=n("ZAI4"),a=n("Wcq6"),b=(n("5x/H"),n("Zs65"),n("FlOX"),n("e1J8"),n("4WDQ")),l=n("PSD3"),u=n.n(l),d=n("P9ut"),f=n("fXoL"),p=n("bTqV"),v=n("kmnG"),g=n("qFsG"),h=function(t,e,n,i){return new(n||(n=Promise))((function(c,o){function s(t){try{a(i.next(t))}catch(e){o(e)}}function r(t){try{a(i.throw(t))}catch(e){o(e)}}function a(t){var e;t.done?c(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,r)}a((i=i.apply(t,e||[])).next())}))},k=function(t,e){var n,i,c,o,s={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return o={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function r(o){return function(r){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(c=2&o[0]?i.return:o[0]?i.throw||((c=i.return)&&c.call(i),0):i.next)&&!(c=c.call(i,o[1])).done)return c;switch(i=0,c&&(o=[2&o[0],c.value]),o[0]){case 0:case 1:c=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((c=(c=s.trys).length>0&&c[c.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!c||o[1]>c[0]&&o[1]<c[3])){s.label=o[1];break}if(6===o[0]&&s.label<c[1]){s.label=c[1],c=o;break}if(c&&s.label<c[2]){s.label=c[2],s.ops.push(o);break}c[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(r){o=[6,r],i=0}finally{n=c=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,r])}}};function m(t,e){1&t&&(f.Vb(0,"h4",12),f.Nc(1,"All Tickets"),f.Ub())}function U(t,e){if(1&t){var n=f.Wb();f.Vb(0,"h4",12),f.Vb(1,"a",13),f.gc("click",(function(){return f.Cc(n),f.kc().selectedTicket=null})),f.Nc(2,"All Tickets"),f.Ub(),f.Nc(3),f.Ub()}if(2&t){var i=f.kc();f.Cb(3),f.Pc(" ",i.selectedTicket.email,"")}}function y(t,e){if(1&t){var n=f.Wb();f.Vb(0,"li",17),f.gc("click",(function(){f.Cc(n);var t=e.index;return f.kc(2).openTicket(t)})),f.Vb(1,"div",18),f.Vb(2,"i",7),f.Nc(3),f.Ub(),f.Ub(),f.Vb(4,"div",19),f.Vb(5,"div",20),f.Vb(6,"span",18),f.Nc(7),f.Ub(),f.Ub(),f.Vb(8,"div",21),f.Vb(9,"p"),f.Nc(10),f.Ub(),f.Ub(),f.Vb(11,"h6"),f.Qb(12,"i",22),f.Nc(13),f.Ub(),f.Ub(),f.Ub()}if(2&t){var i=e.$implicit;f.Cb(1),f.qc("ngClass","enqueue"===i.ticket_type?"timeline-badge danger":"assigned"===i.ticket_type?"timeline-badge info":"timeline-badge success"),f.Cb(2),f.Oc("enqueue"===i.ticket_type?"mark_email_unread":"assigned"===i.ticket_type?"markunread":"mark_email_read"),f.Cb(3),f.qc("ngClass","enqueue"===i.ticket_type?"badge badge-danger":"assigned"===i.ticket_type?"badge badge-info":"badge badge-success"),f.Cb(1),f.Oc(i.email),f.Cb(3),f.Oc(i.last_message),f.Cb(3),f.Pc(" ",i.modified_date.split(" ")[0]," ")}}function C(t,e){if(1&t&&(f.Vb(0,"div",2),f.Vb(1,"div",14),f.Vb(2,"ul",15),f.Lc(3,y,14,6,"li",16),f.Ub(),f.Ub(),f.Ub()),2&t){var n=f.kc();f.Cb(3),f.qc("ngForOf",n.tickets)}}function V(t,e){if(1&t){var n=f.Wb();f.Vb(0,"button",44),f.gc("click",(function(){return f.Cc(n),f.kc(2).resolveTicket()})),f.Nc(1,"Mark as Resolved"),f.Ub()}}function T(t,e){if(1&t){var n=f.Wb();f.Vb(0,"div",19),f.Vb(1,"div",20),f.Vb(2,"div",2),f.Vb(3,"div",38),f.Vb(4,"strong"),f.Nc(5,"From: "),f.Ub(),f.Nc(6),f.Vb(7,"strong"),f.Nc(8,"To: "),f.Ub(),f.Nc(9),f.Ub(),f.Vb(10,"div",37),f.Vb(11,"p"),f.Nc(12),f.Ub(),f.Ub(),f.Ub(),f.Vb(13,"div",2),f.Vb(14,"div",38),f.Vb(15,"strong"),f.Nc(16),f.Ub(),f.Ub(),f.Vb(17,"div",37),f.Vb(18,"button",47),f.gc("click",(function(){f.Cc(n);var t=f.kc().index;return f.kc(2).onConvoSelected(t)})),f.Nc(19,"Reply"),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Vb(20,"div",21),f.Vb(21,"div",4),f.Qb(22,"div",48),f.Ub(),f.Ub(),f.Ub()}if(2&t){var i=f.kc().$implicit,c=f.kc(2);f.Cb(6),f.Pc("",c.currentUser.email,"\xa0\xa0"),f.Cb(3),f.Pc("",c.selectedTicket.email," "),f.Cb(3),f.Oc(i.created_date),f.Cb(4),f.Oc(i.subject),f.Cb(6),f.qc("innerHTML",i.html,f.Dc)}}function w(t,e){if(1&t&&(f.Vb(0,"div",19),f.Vb(1,"div",20),f.Nc(2," Note: "),f.Ub(),f.Vb(3,"div",21),f.Vb(4,"div",4),f.Qb(5,"div",48),f.Ub(),f.Ub(),f.Vb(6,"h6"),f.Qb(7,"i",22),f.Nc(8),f.Ub(),f.Ub()),2&t){var n=f.kc().$implicit;f.Cb(5),f.qc("innerHTML",n.html,f.Dc),f.Cb(3),f.Pc(" ",n.created_date," ")}}function _(t,e){if(1&t&&(f.Vb(0,"li",45),f.Qb(1,"div"),f.Lc(2,T,23,5,"div",46),f.Lc(3,w,9,2,"div",46),f.Ub()),2&t){var n=e.$implicit;f.Cb(2),f.qc("ngIf","user"===n.type),f.Cb(1),f.qc("ngIf","note"===n.type)}}function N(t,e){if(1&t){var n=f.Wb();f.Vb(0,"div",2),f.Vb(1,"div",14),f.Vb(2,"div",4),f.Vb(3,"div",9),f.Vb(4,"div",2),f.Vb(5,"div",23),f.Vb(6,"strong"),f.Nc(7),f.Ub(),f.Nc(8,"\xa0\xa0\xa0\xa0"),f.Vb(9,"button",24),f.gc("click",(function(){return f.Cc(n),f.kc().reverseTicket()})),f.Nc(10,"Return Ticket To Queue"),f.Ub(),f.Ub(),f.Vb(11,"div",23),f.Vb(12,"strong"),f.Nc(13),f.Ub(),f.Ub(),f.Ub(),f.Qb(14,"hr"),f.Vb(15,"div",2),f.Vb(16,"div",25),f.Vb(17,"div",26),f.Vb(18,"button",27),f.Nc(19),f.Qb(20,"b",28),f.Ub(),f.Vb(21,"ul",29),f.Vb(22,"li",30),f.Nc(23,"Ticket Status"),f.Ub(),f.Vb(24,"li",31),f.gc("click",(function(){return f.Cc(n),f.kc().updateTicketStatus("Active")})),f.Vb(25,"a",32),f.Nc(26,"Active"),f.Ub(),f.Ub(),f.Vb(27,"li",31),f.gc("click",(function(){return f.Cc(n),f.kc().updateTicketStatus("Pending")})),f.Vb(28,"a",32),f.Nc(29,"Pending"),f.Ub(),f.Ub(),f.Vb(30,"li",31),f.gc("click",(function(){return f.Cc(n),f.kc().updateTicketStatus("Blocked")})),f.Vb(31,"a",32),f.Nc(32,"Blocked"),f.Ub(),f.Ub(),f.Vb(33,"li",31),f.gc("click",(function(){return f.Cc(n),f.kc().updateTicketStatus("On Hold")})),f.Vb(34,"a",32),f.Nc(35,"On Hold"),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Vb(36,"div",25),f.Lc(37,V,2,0,"button",33),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Vb(38,"div",4),f.Vb(39,"div",9),f.Vb(40,"div",34),f.Vb(41,"div",35),f.Vb(42,"ul",15),f.Lc(43,_,4,2,"li",36),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Vb(44,"div",4),f.Vb(45,"div",9),f.Vb(46,"div",2),f.Vb(47,"div",37),f.Vb(48,"p"),f.Nc(49),f.Ub(),f.Ub(),f.Vb(50,"div",38),f.Vb(51,"strong"),f.Nc(52,"From: "),f.Ub(),f.Nc(53),f.Vb(54,"strong"),f.Nc(55,"To: "),f.Ub(),f.Nc(56),f.Ub(),f.Ub(),f.Qb(57,"hr"),f.Vb(58,"div",2),f.Vb(59,"div",14),f.Vb(60,"p"),f.Nc(61,"Reply to email thread:"),f.Qb(62,"br"),f.Vb(63,"strong"),f.Nc(64),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Qb(65,"hr"),f.Vb(66,"div",39),f.Vb(67,"div",14),f.Vb(68,"p"),f.Vb(69,"mat-form-field",40),f.Vb(70,"textarea",41),f.gc("ngModelChange",(function(t){return f.Cc(n),f.kc().replyMessage=t})),f.Ub(),f.Ub(),f.Ub(),f.Vb(71,"button",42),f.gc("click",(function(){return f.Cc(n),f.kc().submitReponse("note")})),f.Nc(72),f.Ub(),f.Vb(73,"button",43),f.gc("click",(function(){return f.Cc(n),f.kc().submitReponse("user")})),f.Nc(74),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Ub()}if(2&t){var i=f.kc();f.Cb(7),f.Pc("Assigned: ",i.selectedTicket.assigned_to.email===i.currentUser.email?"You":i.currentUser.name,""),f.Cb(6),f.Qc("#",i.selectedTicket.ticket_id,"\xa0\xa0\xa0\xa0",i.selectedTicket.created_date,""),f.Cb(6),f.Pc("",i.selectedTicket.status," "),f.Cb(18),f.qc("ngIf","resolved"!==i.selectedTicket.ticket_type),f.Cb(6),f.qc("ngForOf",i.conversations),f.Cb(6),f.Pc("Channel: ",i.selectedTicket.channel_type,""),f.Cb(4),f.Pc("",i.currentUser.email,"\xa0\xa0"),f.Cb(3),f.Pc("",i.selectedTicket.email," "),f.Cb(8),f.Oc(i.conversationSubject),f.Cb(6),f.qc("ngModel",i.replyMessage),f.Cb(1),f.qc("disabled",i.button_pressed),f.Cb(1),f.Oc(i.button_pressed?"Please wait...":"Submit as Note"),f.Cb(1),f.qc("disabled",i.button_pressed),f.Cb(1),f.Oc(i.button_pressed?"Please wait...":"Send Reply")}}var S=[{path:"",children:[{path:"",component:function(){function t(){this.config=new b.a,this.service=new d.a,this.button_pressed=!1,this.tabSelected="All Enqueued Tickets",this.tickets=[],this.tabbedTickets=[],this.enqueuedCount=0,this.assignedCount=0,this.resolvedCount=0,this.conversations=[],this.conversationSubject="",this.replyMessage=""}return t.prototype.ngOnInit=function(){var t=this,e=localStorage.getItem("email");this.service.getUserData(e).then((function(e){t.currentUser=e,t.getTickets()}))},t.prototype.getTickets=function(){var t=this;a.firestore().collection("tickets").orderBy("timestamp","desc").onSnapshot((function(e){t.tickets=[],e.forEach((function(e){var n=e.data();t.tickets.push(n)})),t.getTicketsByType("enqueue"),t.enqueuedCount=t.getTicketsByTypeCount("enqueue"),t.assignedCount=t.getTicketsByTypeCount("assigned"),t.resolvedCount=t.getTicketsByTypeCount("resolved")}))},t.prototype.getConversations=function(){var t=this;a.firestore().collection("conversations").where("ticket_id","==",this.selectedTicket.id).onSnapshot((function(e){t.conversations=[],e.forEach((function(e){var n=e.data();t.conversations.push(n)}))}))},t.prototype.getTicketsByType=function(t){this.tabbedTickets=this.tickets.filter((function(e,n,i){return e.ticket_type.toLowerCase()===t.toLowerCase()}))},t.prototype.getTicketsByTypeCount=function(t){return this.tickets.filter((function(e,n,i){return e.ticket_type.toLowerCase()===t.toLowerCase()})).length},t.prototype.openTicket=function(t){return h(this,void 0,void 0,(function(){var e;return k(this,(function(n){switch(n.label){case 0:return this.selectedTicket=e=this.tickets[t],this.getConversations(),e.is_assigned?[3,2]:[4,a.firestore().collection("tickets").doc(e.id).update({is_assigned:!0,assigned_to:this.currentUser,ticket_type:"assigned",status:"Active",modified_date:(new Date).toLocaleDateString()+" - "+(new Date).toLocaleTimeString()})];case 1:n.sent(),this.config.logActivity(this.currentUser.name+" accepted "+e.email+"'s ticket."),n.label=2;case 2:return[2]}}))}))},t.prototype.submitReponse=function(t){return h(this,void 0,void 0,(function(){var e,n;return k(this,(function(i){switch(i.label){case 0:return""===this.replyMessage?[2]:(this.button_pressed=!0,e=a.database().ref().push().key,n={id:e,ticket_id:this.selectedTicket.id,type:t,reply:"agent",from:this.currentUser.email,to:this.selectedTicket.email,subject:void 0===this.selectedConversation?this.conversations[this.conversations.length-1].subject:this.selectedConversation.subject,html:this.replyMessage,created_date:(new Date).toLocaleDateString()+" - "+(new Date).toLocaleTimeString(),modified_date:(new Date).toLocaleDateString()+" - "+(new Date).toLocaleTimeString(),timestamp:a.firestore.FieldValue.serverTimestamp()},[4,a.firestore().collection("conversations").doc(e).set(n)]);case 1:return i.sent(),[4,a.firestore().collection("tickets").doc(this.selectedTicket.id).update({last_message:this.replyMessage.length>50?this.replyMessage.substring(0,50):this.replyMessage})];case 2:return i.sent(),this.replyMessage="",this.button_pressed=!1,[2]}}))}))},t.prototype.onTabSelected=function(t,e){this.tabSelected=t,this.getTicketsByType(e)},t.prototype.onConvoSelected=function(t){this.selectedConversation=this.conversations[t],this.conversationSubject=this.selectedConversation.subject,location.href="/crm#replyTo"},t.prototype.reverseTicket=function(){return h(this,void 0,void 0,(function(){var t=this;return k(this,(function(e){return u()({title:"Confirmation Alert",text:"Are you sure of this action?",type:"warning",showCancelButton:!0,confirmButtonText:"Yes, continue!",cancelButtonText:"Cancel",confirmButtonClass:"btn btn-success",cancelButtonClass:"btn btn-danger",buttonsStyling:!1}).then((function(e){return h(t,void 0,void 0,(function(){return k(this,(function(t){switch(t.label){case 0:return e.value?[4,a.firestore().collection("tickets").doc(this.selectedTicket.id).update({is_assigned:!1,assigned_to:{},ticket_type:"enqueue",status:"Pending",modified_date:(new Date).toLocaleDateString()+" - "+(new Date).toLocaleTimeString()})]:[3,2];case 1:return t.sent(),this.selectedTicket=null,this.config.logActivity(this.currentUser.name+" returned "+this.selectedTicket.email+"'s ticket to queue."),[3,3];case 2:u()({title:"Cancelled",text:"Action not successful",type:"error",confirmButtonClass:"btn btn-info",buttonsStyling:!1}).catch(u.a.noop),t.label=3;case 3:return[2]}}))}))})),[2]}))}))},t.prototype.resolveTicket=function(){return h(this,void 0,void 0,(function(){var t=this;return k(this,(function(e){return u()({title:"Confirmation Alert",text:"Are you sure of this action?",type:"warning",showCancelButton:!0,confirmButtonText:"Yes, continue!",cancelButtonText:"Cancel",confirmButtonClass:"btn btn-success",cancelButtonClass:"btn btn-danger",buttonsStyling:!1}).then((function(e){return h(t,void 0,void 0,(function(){return k(this,(function(t){switch(t.label){case 0:return e.value?[4,a.firestore().collection("tickets").doc(this.selectedTicket.id).update({ticket_type:"resolved",modified_date:(new Date).toLocaleDateString()+" - "+(new Date).toLocaleTimeString()})]:[3,2];case 1:return t.sent(),this.selectedTicket=null,this.config.logActivity(this.currentUser.name+" resolved "+this.selectedTicket.email+"'s ticket."),[3,3];case 2:u()({title:"Cancelled",text:"Action not successful",type:"error",confirmButtonClass:"btn btn-info",buttonsStyling:!1}).catch(u.a.noop),t.label=3;case 3:return[2]}}))}))})),[2]}))}))},t.prototype.updateTicketStatus=function(t){var e=this;u()({title:"Confirmation Alert",text:"Are you sure of this action?",type:"warning",showCancelButton:!0,confirmButtonText:"Yes, continue!",cancelButtonText:"Cancel",confirmButtonClass:"btn btn-success",cancelButtonClass:"btn btn-danger",buttonsStyling:!1}).then((function(n){return h(e,void 0,void 0,(function(){return k(this,(function(e){switch(e.label){case 0:return n.value?[4,a.firestore().collection("tickets").doc(this.selectedTicket.id).update({status:t,modified_date:(new Date).toLocaleDateString()+" - "+(new Date).toLocaleTimeString()})]:[3,2];case 1:return e.sent(),this.config.logActivity(this.currentUser.name+" changed "+this.selectedTicket.email+"'s ticket status to "+t+"."),[3,3];case 2:u()({title:"Cancelled",text:"Action not successful",type:"error",confirmButtonClass:"btn btn-info",buttonsStyling:!1}).catch(u.a.noop),e.label=3;case 3:return[2]}}))}))}))},t.prototype.updateProgramLevels=function(){},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=f.Jb({type:t,selectors:[["app-crm"]],decls:15,vars:4,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header","card-header-primary","card-header-icon"],[1,"card-icon"],[1,"material-icons"],["class","card-title",4,"ngIf"],[1,"card-body"],[1,"toolbar"],["class","row",4,"ngIf"],[1,"card-title"],["href","javascript:void(0)",1,"btn","btn-primary","btn-sm",3,"click"],[1,"col-xl-12"],[1,"timeline","timeline-simple"],["class","timeline-inverted","style","cursor: pointer;",3,"click",4,"ngFor","ngForOf"],[1,"timeline-inverted",2,"cursor","pointer",3,"click"],[3,"ngClass"],[1,"timeline-panel"],[1,"timeline-heading"],[1,"timeline-body"],[1,"ti-time"],[1,"col-xl-6"],["mat-raised-button","",1,"btn","btn-danger","btn-sm",3,"click"],[1,"col-lg-4","col-md-6","col-sm-3"],[1,"dropdown"],["mat-raised-button","","href","javascript:void(0)","data-toggle","dropdown",1,"dropdown-toggle","btn","btn-warning","btn-round","btn-block"],[1,"caret"],[1,"dropdown-menu","dropdown-menu-left"],[1,"dropdown-header"],[3,"click"],["href","javascript:void(0)"],["mat-raised-button","","class","btn btn-success btn-sm",3,"click",4,"ngIf"],[1,"wrapper"],[1,"main-panel"],["class","timeline-inverted","style","cursor: pointer;",4,"ngFor","ngForOf"],[1,"col-xl-3"],[1,"col-xl-9"],["id","replyTo",1,"row"],[1,"example-full-width"],["matInput","","placeholder","Reply","rows","5",3,"ngModel","ngModelChange"],["mat-raised-button","",1,"btn","btn-warning","btn-sm",3,"disabled","click"],["mat-raised-button","",1,"btn","btn-success","btn-sm",3,"disabled","click"],["mat-raised-button","",1,"btn","btn-success","btn-sm",3,"click"],[1,"timeline-inverted",2,"cursor","pointer"],["class","timeline-panel",4,"ngIf"],["mat-raised-button","",1,"btn","btn-warning","btn-sm",3,"click"],[1,"card-body",3,"innerHTML"]],template:function(t,e){1&t&&(f.Vb(0,"div",0),f.Vb(1,"div",1),f.Vb(2,"div",2),f.Vb(3,"div",3),f.Vb(4,"div",4),f.Vb(5,"div",5),f.Vb(6,"div",6),f.Vb(7,"i",7),f.Nc(8,"assignment"),f.Ub(),f.Ub(),f.Lc(9,m,2,0,"h4",8),f.Lc(10,U,4,1,"h4",8),f.Ub(),f.Vb(11,"div",9),f.Qb(12,"div",10),f.Lc(13,C,4,1,"div",11),f.Lc(14,N,75,15,"div",11),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Ub()),2&t&&(f.Cb(9),f.qc("ngIf",!e.selectedTicket),f.Cb(1),f.qc("ngIf",e.selectedTicket),f.Cb(3),f.qc("ngIf",!e.selectedTicket),f.Cb(1),f.qc("ngIf",e.selectedTicket))},directives:[c.m,c.l,c.k,p.b,v.c,g.b,o.e,o.q,o.t],styles:[".sectn[_ngcontent-%COMP%]{padding:25px 20px}.fieldbtn[_ngcontent-%COMP%]{text-align:center}.rmvborder[_ngcontent-%COMP%]{border:none;outline:none;margin-left:20px;padding:10px}.rmvbr[_ngcontent-%COMP%]{padding:auto 17px;margin-left:24px}.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:after{clear:none}"]}),t}()}]}],x=function(){function t(){}return t.\u0275mod=f.Nb({type:t}),t.\u0275inj=f.Mb({factory:function(e){return new(e||t)},imports:[[c.c,i.g.forChild(S),o.l,s.a,r.b]]}),t}()}}]);