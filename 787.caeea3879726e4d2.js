"use strict";(self.webpackChunksnv_admin_frontend=self.webpackChunksnv_admin_frontend||[]).push([[787],{4787:(at,g,l)=>{l.r(g),l.d(g,{AccesLayoutRoutesModule:()=>nt});var h=l(5810),t=l(5879),o=l(6223),q=l(4221),U=l(1918),C=l(3947),Z=l(253),I=l(972);function w(e,r){if(1&e){const a=t.EpF();t.TgZ(0,"button",65),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return t.KtG(n.onHandleEnableEdit())}),t._UZ(1,"i",66),t.qZA()}}function E(e,r){if(1&e){const a=t.EpF();t.TgZ(0,"button",67),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return t.KtG(n.onHandleEnableEdit())}),t._UZ(1,"i",68),t.qZA()}}function M(e,r){1&e&&(t.TgZ(0,"span",73),t._uU(1," Saving... "),t.qZA())}function D(e,r){1&e&&(t.TgZ(0,"span",73),t._uU(1," Save "),t.qZA())}function P(e,r){1&e&&(t.TgZ(0,"span",74)(1,"span",75),t._uU(2,"spinner..."),t.qZA()())}function S(e,r){if(1&e){const a=t.EpF();t.TgZ(0,"button",69),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return t.KtG(n.onSubmit())}),t.TgZ(1,"span",70),t.YNc(2,M,2,0,"span",71),t.YNc(3,D,2,0,"span",71),t.YNc(4,P,3,0,"span",72),t.qZA()()}if(2&e){const a=t.oxw();t.Q6J("disabled",a.invalid||a.saving),t.xp6(2),t.Q6J("ngIf",a.saving),t.xp6(1),t.Q6J("ngIf",!a.saving),t.xp6(1),t.Q6J("ngIf",a.saving)}}function k(e,r){1&e&&(t.TgZ(0,"div",76),t._UZ(1,"input",77),t.qZA())}function N(e,r){1&e&&(t.TgZ(0,"div",76),t._UZ(1,"input",78),t.qZA())}function O(e,r){1&e&&(t.TgZ(0,"div",76),t._UZ(1,"input",79),t.qZA())}function J(e,r){if(1&e&&t._UZ(0,"i"),2&e){const a=r.fill;t.Gre("ri-star",5===a?"-fill":"-line",""),t.ekj("filled",100===a)}}let R=(()=>{var e;class r{constructor(){this.lista=[{calltype:"Phone Call",ratexmin:"0.10",connectiontime:"0",duration:"02:00"},{calltype:"Phone Call",ratexmin:"0.10",connectiontime:"0",duration:"02:00"},{calltype:"Phone Call",ratexmin:"Por0.10",connectiontime:"0",duration:"02:00"}],this.listaOpi=[{date:"08/31/2022",ratexhour:"0.30",ratexmin:"0.10",calltype:"OPI"},{date:"08/31/2022",ratexhour:"0.30",ratexmin:"0.10",calltype:"OPI"},{date:"08/31/2022",ratexhour:"0.30",ratexmin:"0.10",calltype:"OPI"}],this.listaOnsite=[{assignmenttype:"type",date:"08/31/2022",assignmentaddress:"Av. Velzon #123",name:"Timothy Smith",email:"smith@gmail.com",numberphone:"987325416",interpreter:"Jos\xe9 Lopez",id:"123456",comment:"lorem ipsum "},{assignmenttype:"type",date:"08/31/2022",assignmentaddress:"Av. Velzon #123",name:"Timothy Smith",email:"smith@gmail.com",numberphone:"987325416",interpreter:"Jos\xe9 Lopez",id:"123456",comment:"lorem ipsum "},{assignmenttype:"type",date:"08/31/2022",assignmentaddress:"Av. Velzon #123",name:"Timothy Smith",email:"smith@gmail.com",numberphone:"987325416",interpreter:"Jos\xe9 Lopez",id:"123456",comment:"lorem ipsum "}],this.profileRating=5,this.enableEdit=!1,this._saving=!1,this._frmBuilder=(0,t.f3M)(o.QS),this._interpretersvc=(0,t.f3M)(C.t),this._store=(0,t.f3M)(q.yh),this._location="",this._mrn="",this._client=""}get invalid(){return this.frmAditional.invalid}get saving(){return this._saving}get controls(){return this.frmAditional.controls}get values(){return this.frmAditional.value}touched(i){return this.frmAditional.get(i)?.touched}get location(){return this._location}get mrn(){return this._mrn}get client(){return this._client}ngOnInit(){this.frmAditional=this._frmBuilder.group({location:["",[o.kI.required]],mrn:["",[o.kI.required]],client:["",[o.kI.required]]}),this.onListenSegurityRx()}onHandleEnableEdit(){this.enableEdit=!this.enableEdit,this.frmAditional.get("location")?.addValidators([o.kI.required]),this.frmAditional.get("mrn")?.addValidators([o.kI.required]),this.frmAditional.get("client")?.addValidators([o.kI.required]),this.frmAditional.get("location")?.updateValueAndValidity(),this.frmAditional.get("mrn")?.updateValueAndValidity(),this.frmAditional.get("client")?.updateValueAndValidity()}onListenSegurityRx(){this._segurotyrx$=this._store.select("segurity").subscribe(i=>{const{userData:n}=i;this._location=n.location,this._mrn=n.mrn,this._client=n.client,this.frmAditional.get("location")?.setValue(n.location),this.frmAditional.get("mrn")?.setValue(n.mrn),this.frmAditional.get("client")?.setValue(n.client)})}onSubmit(){if(this.invalid||this._saving)return;this._saving=!0;const i=this.values;this._update$=this._interpretersvc.onUpdateAdditional(i).subscribe({next:n=>{this._store.dispatch(U.Sp({...i})),this.onHandleEnableEdit(),this._saving=!1,this._update$?.unsubscribe()},error:n=>{this._saving=!1,this._update$?.unsubscribe()}})}ngOnDestroy(){this._update$?.unsubscribe(),this._segurotyrx$?.unsubscribe()}}return(e=r).\u0275fac=function(i){return new(i||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-portal-interprter"]],decls:253,vars:14,consts:[[1,"row"],[1,"col-12"],[1,"page-title-box","d-sm-flex","align-items-center","justify-content-between"],[1,"mb-sm-0"],[1,"col-md-6"],[1,"card"],[1,"card-header","align-items-center","d-flex"],[1,"card-title","mb-0","flex-grow-1"],["type","button","class","btn btn-default btn-icon waves-effect waves-light",3,"click",4,"ngIf"],["type","button","class","btn btn-default btn-icon waves-effect waves-light ms-2",3,"click",4,"ngIf"],["type","button","class","btn btn-primary btn-load ms-2",3,"disabled","click",4,"ngIf"],[1,"card-body"],[3,"formGroup"],[1,"row","pt-3"],[1,"col-12","mb-4"],[1,"col-lg-5","col-md-6","col-sm-12"],[1,"d-flex","align-items-center"],[1,"avatar-xs","flex-shrink-0"],[1,"avatar-title","bg-light","text-primary","rounded-circle","fs-3"],[1,"ri-map-pin-line"],[1,"flex-grow-1","ms-3"],[1,"fw-medium","fs-12","text-muted","mb-1"],[1,"mb-0","fs-14","text-primary"],["class","col-lg-7 col-md-6 col-sm-12",4,"ngIf"],[1,"ri-qr-code-fill"],[1,"ri-contacts-line"],[1,"box-flex","mb-5"],[1,"mb-1"],[1,"box-mount"],[1,"box-flex"],[3,"rate","readonly","max","rateChange"],[1,"col-xl-12"],[1,"table","table-nowrap"],[1,"table-dark"],["colspan","2"],[1,"text-center","mb-0","text-white"],["rowspan","4",1,"border"],[1,"d-flex","flex-column"],[1,"box-icon","mx-auto","mb-2"],[1,"mdi","mdi-phone"],[1,"text-center"],[1,"text-end"],[1,"mdi","mdi-video"],[1,"col-md-6","mb-3","mb-md-0"],["for","exampleInputdate",1,"form-label"],["type","date","id","exampleInputdate",1,"form-control","rounded-pill"],["for","exampleInputdateEnd",1,"form-label"],["type","date","id","exampleInputdateEnd",1,"form-control","rounded-pill"],[1,"text-end","mt-3"],["type","button",1,"btn","rounded-pill","btn-danger","px-4","fw-medium","waves-effect","waves-light"],[1,"row","g-4","mb-3"],[1,"col-sm-auto"],[1,"fs-5"],[1,"col-sm"],[1,"d-flex","justify-content-sm-end"],[1,"search-box","ms-2"],["type","text","placeholder","Search...",1,"form-control","search"],[1,"ri-search-line","search-icon"],[1,"table-responsive","table-card","mt-3"],[1,"table","table-nowrap","table-hover","table-striped","mb-0"],[1,"table-light"],["scope","col"],["scope","col",3,"width"],["colspan","5",1,"text-center"],["colspan","10",1,"text-center"],["type","button",1,"btn","btn-default","btn-icon","waves-effect","waves-light",3,"click"],[1,"ri-edit-line"],["type","button",1,"btn","btn-default","btn-icon","waves-effect","waves-light","ms-2",3,"click"],[1,"ri-close-fill"],["type","button",1,"btn","btn-primary","btn-load","ms-2",3,"disabled","click"],[1,"d-flex","align-items-center","ms-1"],["class","flex-grow-1 me-2",4,"ngIf"],["class","spinner-border flex-shrink-0","role","status",4,"ngIf"],[1,"flex-grow-1","me-2"],["role","status",1,"spinner-border","flex-shrink-0"],[1,"visually-hidden"],[1,"col-lg-7","col-md-6","col-sm-12"],["type","text","placeholder","Enter location ...","formControlName","location",1,"form-control"],["type","text","placeholder","Enter MRN ...","formControlName","mrn",1,"form-control"],["type","text","placeholder","Enter client ...","formControlName","client",1,"form-control"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3),t._uU(4,"Interpreter Portal"),t.qZA()()()(),t.TgZ(5,"div",0)(6,"div",4)(7,"div",5)(8,"div",6)(9,"h4",7),t._uU(10," Additional Session Information "),t.qZA(),t.YNc(11,w,2,0,"button",8),t.YNc(12,E,2,0,"button",9),t.YNc(13,S,5,4,"button",10),t.qZA(),t.TgZ(14,"div",11)(15,"form",12)(16,"div",13)(17,"div",14)(18,"div",0)(19,"div",15)(20,"div",16)(21,"div",17)(22,"span",18),t._UZ(23,"i",19),t.qZA()(),t.TgZ(24,"div",20)(25,"p",21),t._uU(26,"Location:"),t.qZA(),t.TgZ(27,"h5",22),t._uU(28),t.qZA()()()(),t.YNc(29,k,2,0,"div",23),t.qZA()(),t.TgZ(30,"div",14)(31,"div",0)(32,"div",15)(33,"div",16)(34,"div",17)(35,"span",18),t._UZ(36,"i",24),t.qZA()(),t.TgZ(37,"div",20)(38,"p",21),t._uU(39,"MRN"),t.qZA(),t.TgZ(40,"h5",22),t._uU(41),t.qZA()()()(),t.YNc(42,N,2,0,"div",23),t.qZA()(),t.TgZ(43,"div",14)(44,"div",0)(45,"div",15)(46,"div",16)(47,"div",17)(48,"span",18),t._UZ(49,"i",25),t.qZA()(),t.TgZ(50,"div",20)(51,"p",21),t._uU(52,"Patient Name /\xa0Client"),t.qZA(),t.TgZ(53,"h5",22),t._uU(54),t.qZA()()()(),t.YNc(55,O,2,0,"div",23),t.qZA()()()()()()(),t.TgZ(56,"div",4)(57,"div",5)(58,"div",6)(59,"h4",7),t._uU(60,"Data"),t.qZA()(),t.TgZ(61,"div",11)(62,"div",0)(63,"div",1)(64,"div",26)(65,"h5",27),t._uU(66,"Today\u2019s Total Earnings"),t.qZA(),t.TgZ(67,"div",28),t._uU(68,"$334.00"),t.qZA()()(),t.TgZ(69,"div",1)(70,"div",29)(71,"h5",27),t._uU(72,"My Rating"),t.qZA(),t.TgZ(73,"ngb-rating",30),t.NdJ("rateChange",function(d){return n.profileRating=d}),t.YNc(74,J,1,5,"ng-template"),t.qZA()()()()()()()(),t.TgZ(75,"div",0)(76,"div",31)(77,"div",5)(78,"div",6)(79,"h4",7),t._uU(80,"Minutes Volume"),t.qZA()(),t.TgZ(81,"div",11)(82,"div",0)(83,"div",4),t._UZ(84,"app-chart-bar-widget"),t.qZA(),t.TgZ(85,"div",4)(86,"table",32)(87,"thead")(88,"tr",33)(89,"th",34)(90,"h5",35),t._uU(91,"On-Demand Services"),t.qZA()()()(),t.TgZ(92,"tbody")(93,"tr")(94,"td",36)(95,"div",37)(96,"div",38),t._UZ(97,"i",39),t.qZA(),t.TgZ(98,"span",40),t._uU(99,"Phone Calls"),t.qZA()()()(),t.TgZ(100,"tr")(101,"td",41),t._uU(102,"85 Calls"),t.qZA()(),t.TgZ(103,"tr")(104,"td",41),t._uU(105,"834 Total Minutes"),t.qZA()(),t.TgZ(106,"tr")(107,"td",41),t._uU(108,"11 min Avg. Duration"),t.qZA()(),t.TgZ(109,"tr")(110,"td",36)(111,"div",37)(112,"div",38),t._UZ(113,"i",42),t.qZA(),t.TgZ(114,"span",40),t._uU(115,"Video Calls"),t.qZA()()()(),t.TgZ(116,"tr")(117,"td",41),t._uU(118,"111 Calls"),t.qZA()(),t.TgZ(119,"tr")(120,"td",41),t._uU(121,"795 Total Minutes"),t.qZA()(),t.TgZ(122,"tr")(123,"td",41),t._uU(124,"8 min Avg. Duration"),t.qZA()()()()()()()()()(),t.TgZ(125,"div",0)(126,"div",31)(127,"div",5)(128,"div",6)(129,"h4",7),t._uU(130,"Filter by"),t.qZA()(),t.TgZ(131,"div",11)(132,"div",0)(133,"div",43)(134,"div")(135,"label",44),t._uU(136,"From"),t.qZA(),t._UZ(137,"input",45),t.qZA()(),t.TgZ(138,"div",4)(139,"div")(140,"label",46),t._uU(141,"To"),t.qZA(),t._UZ(142,"input",47),t.qZA()()(),t.TgZ(143,"div",48)(144,"button",49),t._uU(145,"Search"),t.qZA()()()()()(),t.TgZ(146,"div",0)(147,"div",31)(148,"div",5)(149,"div",6)(150,"h4",7),t._uU(151,"On-Demand Services"),t.qZA()(),t.TgZ(152,"div",11)(153,"div",50)(154,"div",51)(155,"div")(156,"h5",52),t._uU(157,"By Language: English <> Spanish"),t.qZA()()(),t.TgZ(158,"div",53)(159,"div",54)(160,"div",55),t._UZ(161,"input",56)(162,"i",57),t.qZA()()()(),t.TgZ(163,"div",58)(164,"table",59)(165,"thead",60)(166,"tr")(167,"th",61),t._uU(168,"Call Type"),t.qZA(),t.TgZ(169,"th",61),t._uU(170,"Rate Per Minute"),t.qZA(),t.TgZ(171,"th",61),t._uU(172,"Connection Time"),t.qZA(),t.TgZ(173,"th",61),t._uU(174,"Duration"),t.qZA(),t.TgZ(175,"th",62),t._uU(176,"Earning $(opcional)"),t.qZA()()(),t.TgZ(177,"tbody")(178,"tr")(179,"td",63),t._uU(180," Without Records "),t.qZA()()()()()()()()(),t.TgZ(181,"div",0)(182,"div",31)(183,"div",5)(184,"div",6)(185,"h4",7),t._uU(186,"Assignments OPI/VRI"),t.qZA()(),t.TgZ(187,"div",11)(188,"div",50)(189,"div",53)(190,"div",54)(191,"div",55),t._UZ(192,"input",56)(193,"i",57),t.qZA()()()(),t.TgZ(194,"div",58)(195,"table",59)(196,"thead",60)(197,"tr")(198,"th",61),t._uU(199,"Date"),t.qZA(),t.TgZ(200,"th",61),t._uU(201,"Rate Per Hour"),t.qZA(),t.TgZ(202,"th",61),t._uU(203,"Rate Per Minute"),t.qZA(),t.TgZ(204,"th",61),t._uU(205,"Call Type"),t.qZA(),t.TgZ(206,"th",61),t._uU(207,"Status"),t.qZA()()(),t.TgZ(208,"tbody")(209,"tr")(210,"td",63),t._uU(211," Without Records "),t.qZA()()()()()()()()(),t.TgZ(212,"div",0)(213,"div",31)(214,"div",5)(215,"div",6)(216,"h4",7),t._uU(217,"On-Site Interpreting"),t.qZA()(),t.TgZ(218,"div",11)(219,"div",50)(220,"div",53)(221,"div",54)(222,"div",55),t._UZ(223,"input",56)(224,"i",57),t.qZA()()()(),t.TgZ(225,"div",58)(226,"table",59)(227,"thead",60)(228,"tr")(229,"th",61),t._uU(230,"Assignments Type"),t.qZA(),t.TgZ(231,"th",61),t._uU(232,"Date"),t.qZA(),t.TgZ(233,"th",61),t._uU(234,"Assignment Address"),t.qZA(),t.TgZ(235,"th",61),t._uU(236,"Request Name"),t.qZA(),t.TgZ(237,"th",61),t._uU(238,"E-mail"),t.qZA(),t.TgZ(239,"th",61),t._uU(240,"Number Phone"),t.qZA(),t.TgZ(241,"th",61),t._uU(242,"Interpreter\u2019s"),t.qZA(),t.TgZ(243,"th",61),t._uU(244,"ID"),t.qZA(),t.TgZ(245,"th",61),t._uU(246,"Status"),t.qZA(),t.TgZ(247,"th",61),t._uU(248,"Comment"),t.qZA()()(),t.TgZ(249,"tbody")(250,"tr")(251,"td",64),t._uU(252," Without Records "),t.qZA()()()()()()()()()),2&i&&(t.xp6(11),t.Q6J("ngIf",!n.enableEdit),t.xp6(1),t.Q6J("ngIf",n.enableEdit),t.xp6(1),t.Q6J("ngIf",n.enableEdit),t.xp6(2),t.Q6J("formGroup",n.frmAditional),t.xp6(13),t.hij(" ",n.location," "),t.xp6(1),t.Q6J("ngIf",n.enableEdit),t.xp6(12),t.hij(" ",n.mrn," "),t.xp6(1),t.Q6J("ngIf",n.enableEdit),t.xp6(12),t.hij(" ",n.client," "),t.xp6(1),t.Q6J("ngIf",n.enableEdit),t.xp6(18),t.Q6J("rate",n.profileRating)("readonly",!0)("max",5),t.xp6(102),t.Q6J("width",120))},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,Z.OC,I.u],styles:[".box-flex[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:flex-start;gap:12px}.box-mount[_ngcontent-%COMP%]{background-color:#0ab39c;border-radius:4px;color:#fff;font-weight:600;font-size:1rem;padding:8px 16px}.box-icon[_ngcontent-%COMP%]{align-items:center;background-color:var(--clr-neutral-01);border:solid 1px var(--clr-neutral-05);border-radius:50%;display:flex;justify-content:center;height:80px;width:80px}.box-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--clr-neutral-05);font-size:40px}.page-title-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-transform:none!important}i[_ngcontent-%COMP%]{font-size:1.5rem;padding-right:.1rem;color:#b0c4de}.filled[_ngcontent-%COMP%]{color:#f06548}.low[_ngcontent-%COMP%]{color:#deb0b0}.filled.low[_ngcontent-%COMP%]{color:#ff1e1e}"]}),r})(),Q=0;function f(){return String(Q++)}const V=[{name:"--Select--",value:"",option:"selected"},{name:"Danger",value:"bg-soft-danger",option:""},{name:"Success",value:"bg-soft-success",option:""},{name:"Primary",value:"bg-soft-primary",option:""},{name:"Info",value:"bg-soft-info",option:""},{name:"Dark",value:"bg-soft-dark",option:""},{name:"Warning",value:"bg-soft-warning",option:""}];var m=new Date,B=(m.getDate(),m.getMonth()),Y=m.getFullYear();const b=[{id:f(),title:"All Day Event",date:new Date(Y,B,1),location:"test",desription:"test",className:"bg-soft-primary"}];var j=l(3519),c=l.n(j),H=l(1949),F=l(6111),G=l(2495);const L=["editmodalShow"],z=["modalShow"];function W(e,r){if(1&e&&(t.TgZ(0,"b"),t._uU(1),t.qZA()),2&e){const a=r.$implicit;t.xp6(1),t.Oqu(a.event.title)}}function $(e,r){if(1&e&&(t.TgZ(0,"b"),t._uU(1),t.qZA()),2&e){const a=r.$implicit;t.xp6(1),t.Oqu(a.event.title)}}let K=(()=>{var e;class r{constructor(){this.modalService=(0,t.f3M)(Z.FF),this.formBuilder=(0,t.f3M)(o.QS),this.submitted=!1,this.calendarOptions={headerToolbar:{left:"dayGridMonth,dayGridWeek,dayGridDay",center:"title",right:"prevYear,prev,next,nextYear"},initialView:"dayGridMonth",plugins:[F.ZP,H.Z],themeSystem:"bootstrap",initialEvents:b,weekends:!0,editable:!0,selectable:!0,selectMirror:!0,dayMaxEvents:!0,dateClick:this.openModal.bind(this),eventClick:this.handleEventClick.bind(this),eventsSet:this.handleEvents.bind(this)},this.currentEvents=[]}ngOnInit(){this.breadCrumbItems=[{label:"Apps"},{label:"Calendar",active:!0}],this.formData=this.formBuilder.group({title:["",[o.kI.required]],category:["",[o.kI.required]],location:["",[o.kI.required]],desription:["",[o.kI.required]],date:["",o.kI.required],start:["",o.kI.required],end:["",o.kI.required]}),this._fetchData()}_fetchData(){this.category=V,this.calendarEvents=b}openModal(i){this.newEventDate=i,this.modalService.open(this.modalShow,{centered:!0,size:"lg"})}handleEventClick(i){this.editEvent=i.event,this.formEditData=this.formBuilder.group({editTitle:i.event.title,editCategory:i.event.classNames[0],editlocation:i.event.extendedProps.location,editDescription:i.event.extendedProps.desription,editDate:i.event.start,editStart:i.event.start,editEnd:i.event.end}),this.modalService.open(this.editmodalShow,{centered:!0})}handleEvents(i){this.currentEvents=i}closeEventModal(){this.formData=this.formBuilder.group({title:"",category:"",location:"",desription:"",date:"",start:"",end:""}),this.modalService.dismissAll()}position(){c().fire({position:"center",icon:"success",title:"Event has been saved",showConfirmButton:!1,timer:1e3})}Editposition(){c().fire({position:"center",icon:"success",title:"Event has been Updated",showConfirmButton:!1,timer:1e3})}get form(){return this.formData.controls}saveEvent(){if(this.formData.valid){const i=this.formData.get("category").value,n=this.formData.get("title").value,s=this.formData.get("location").value,d=this.formData.get("desription").value,p=this.formData.get("date").value,_=this.formData.get("start").value,A=this.formData.get("end").value,x=new Date(p).getFullYear(),T=new Date(p).getMonth()+1,y=new Date(p).getDate(),u=new Date(T+"-"+y+"-"+x);u.setHours(_.split(" ")[0].split(":")[0]),u.setMinutes(_.split(" ")[0].split(":")[1]);const v=new Date(T+"-"+y+"-"+x);v.setHours(A.split(" ")[0].split(":")[0]),v.setMinutes(A.split(" ")[0].split(":")[1]),this.newEventDate.view.calendar.addEvent({id:f(),title:n,date:p,start:u,end:v,location:s,desription:d,className:i+" text-white"}),this.position(),this.formData=this.formBuilder.group({title:"",category:"",location:"",desription:"",date:"",start:"",end:""}),this.modalService.dismissAll()}this.submitted=!0}editEventSave(){const i=this.formEditData.get("editTitle").value,n=this.formEditData.get("editCategory").value,s=this.calendarEvents.findIndex(d=>d.id+""==this.editEvent.id+"");this.editEvent.setProp("title",i),this.editEvent.setProp("classNames",n),this.calendarEvents[s]={...this.editEvent,title:i,id:this.editEvent.id,classNames:n},this.Editposition(),this.formEditData=this.formBuilder.group({editTitle:"",editCategory:""}),this.modalService.dismissAll()}confirm(){c().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#34c38f",cancelButtonColor:"#f46a6a",confirmButtonText:"Yes, delete it!"}).then(i=>{i.value&&(this.deleteEventData(),c().fire("Deleted!","Event has been deleted.","success"))})}deleteEventData(){this.editEvent.remove(),this.modalService.dismissAll()}}return(e=r).\u0275fac=function(i){return new(i||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-myassignmet-interpreter"]],viewQuery:function(i,n){if(1&i&&(t.Gf(L,5),t.Gf(z,5)),2&i){let s;t.iGM(s=t.CRH())&&(n.editmodalShow=s.first),t.iGM(s=t.CRH())&&(n.modalShow=s.first)}},decls:99,vars:2,consts:[[1,"row"],[1,"col-12"],[1,"page-title-box","d-sm-flex","align-items-center","justify-content-between"],[1,"mb-sm-0"],[1,"card"],[1,"card-body"],["role","tablist",1,"nav","nav-pills"],["role","presentation",1,"nav-item","waves-effect","waves-light"],["data-bs-toggle","tab","href","#pill-justified-home-1","role","tab","aria-selected","true",1,"nav-link","active"],["data-bs-toggle","tab","href","#pill-justified-profile-1","role","tab","aria-selected","false","tabindex","-1",1,"nav-link"],[1,"tab-content","text-muted"],["id","pill-justified-home-1","role","tabpanel",1,"tab-pane","active"],[1,"col-xl-3"],[1,"mb-1"],[1,"text-muted"],["data-simplebar","init",1,"pe-2","me-n1","mb-3",2,"height","400px"],[1,"simplebar-wrapper",2,"margin","0px -8px 0px 0px"],[1,"simplebar-height-auto-observer-wrapper"],[1,"simplebar-height-auto-observer"],[1,"simplebar-mask"],[1,"simplebar-offset",2,"right","0px","bottom","0px"],["tabindex","0","role","region","aria-label","scrollable content",1,"simplebar-content-wrapper",2,"height","100%","overflow","hidden scroll"],[1,"simplebar-content",2,"padding","0px 8px 0px 0px"],["id","upcoming-event-list"],[1,"card","mb-3"],[1,"d-flex","mb-3"],[1,"flex-grow-1"],[1,"mdi","mdi-checkbox-blank-circle","me-2","text-info"],[1,"fw-medium"],[1,"flex-shrink-0"],[1,"badge","badge-soft-primary","ms-auto"],[1,"card-title","fs-16"],[1,"text-muted","text-truncate-two-lines","mb-0"],[1,"simplebar-placeholder",2,"width","auto","height","2437px"],[1,"simplebar-track","simplebar-horizontal",2,"visibility","hidden"],[1,"simplebar-scrollbar",2,"width","0px","display","none"],[1,"simplebar-track","simplebar-vertical",2,"visibility","visible"],[1,"simplebar-scrollbar",2,"height","65px","display","block","transform","translate3d(0px, 302px, 0px)"],[1,"col-xl-9"],[1,"card","card-h-100"],["id","calendar"],[3,"options"],["eventContent",""],["id","pill-justified-profile-1","role","tabpanel",1,"tab-pane"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3),t._uU(4,"My Assignments"),t.qZA()()()(),t.TgZ(5,"div",4)(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),t._uU(10," Scheduled Calls "),t.qZA()(),t.TgZ(11,"li",7)(12,"a",9),t._uU(13," On-Site Interpreting "),t.qZA()()()()(),t.TgZ(14,"div",10)(15,"div",11)(16,"div",0)(17,"div",12)(18,"div")(19,"h5",13),t._uU(20,"Upcoming Events"),t.qZA(),t.TgZ(21,"p",14),t._uU(22,"Don't miss scheduled events"),t.qZA(),t.TgZ(23,"div",15)(24,"div",16)(25,"div",17),t._UZ(26,"div",18),t.qZA(),t.TgZ(27,"div",19)(28,"div",20)(29,"div",21)(30,"div",22)(31,"div",23)(32,"div",24)(33,"div",5)(34,"div",25)(35,"div",26),t._UZ(36,"i",27),t.TgZ(37,"span",28),t._uU(38,"3 Jan 2022 "),t.qZA()(),t.TgZ(39,"div",29)(40,"small",30),t._uU(41,"7:00 PM to 12:00 AM"),t.qZA()()(),t.TgZ(42,"h6",31),t._uU(43," World Braille Day"),t.qZA(),t._UZ(44,"p",32),t.qZA()()()()()()(),t._UZ(45,"div",33),t.qZA(),t.TgZ(46,"div",34),t._UZ(47,"div",35),t.qZA(),t.TgZ(48,"div",36),t._UZ(49,"div",37),t.qZA()()()(),t.TgZ(50,"div",38)(51,"div",39)(52,"div",5),t._UZ(53,"div",40),t.TgZ(54,"full-calendar",41),t.YNc(55,W,2,1,"ng-template",null,42,t.W1O),t.qZA()()()()()(),t.TgZ(57,"div",43)(58,"div",0)(59,"div",12)(60,"div")(61,"h5",13),t._uU(62,"Upcoming Events"),t.qZA(),t.TgZ(63,"p",14),t._uU(64,"Don't miss scheduled events"),t.qZA(),t.TgZ(65,"div",15)(66,"div",16)(67,"div",17),t._UZ(68,"div",18),t.qZA(),t.TgZ(69,"div",19)(70,"div",20)(71,"div",21)(72,"div",22)(73,"div",23)(74,"div",24)(75,"div",5)(76,"div",25)(77,"div",26),t._UZ(78,"i",27),t.TgZ(79,"span",28),t._uU(80,"3 Jan 2022 "),t.qZA()(),t.TgZ(81,"div",29)(82,"small",30),t._uU(83,"7:00 PM to 12:00 AM"),t.qZA()()(),t.TgZ(84,"h6",31),t._uU(85," World Braille Day"),t.qZA(),t._UZ(86,"p",32),t.qZA()()()()()()(),t._UZ(87,"div",33),t.qZA(),t.TgZ(88,"div",34),t._UZ(89,"div",35),t.qZA(),t.TgZ(90,"div",36),t._UZ(91,"div",37),t.qZA()()()(),t.TgZ(92,"div",38)(93,"div",39)(94,"div",5),t._UZ(95,"div",40),t.TgZ(96,"full-calendar",41),t.YNc(97,$,2,1,"ng-template",null,42,t.W1O),t.qZA()()()()()()()),2&i&&(t.xp6(54),t.Q6J("options",n.calendarOptions),t.xp6(42),t.Q6J("options",n.calendarOptions))},dependencies:[G.w]}),r})();var X=l(2081);const it=[{path:"",component:R},{path:"my-assignments",component:K},{path:"call-history",component:(()=>{var e;class r{}return(e=r).\u0275fac=function(i){return new(i||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-call-history-interpreter"]],decls:69,vars:3,consts:[[1,"row"],[1,"col-12"],[1,"page-title-box","d-sm-flex","align-items-center","justify-content-between"],[1,"mb-sm-0"],[1,"col-xl-12"],[1,"card"],[1,"card-header","align-items-center","d-flex"],[1,"card-title","mb-0","flex-grow-1"],[1,"card-body"],[1,"col-md-4","mb-3"],["for","exampleInputdate",1,"form-label"],["type","date","id","exampleInputdate",1,"form-control","rounded-pill"],["for","exampleInputdateEnd",1,"form-label"],["type","date","id","exampleInputdateEnd",1,"form-control","rounded-pill"],[1,"col-md-4"],[1,"text-end"],["type","button",1,"btn","rounded-pill","btn-danger","px-4","fw-medium","waves-effect","waves-light"],[1,"mt-5"],[1,"table-responsive","table-card"],[1,"table","table-nowrap","table-hover","table-striped","mb-0"],[1,"table-light"],["scope","col"],["colspan","10",1,"text-center"],[1,"row","mt-4"],[1,"col-6"],[1,"d-flex","justify-content-start","align-items-center","gap-4","ms-3"],["formControlName","limit",1,"form-select",2,"width","70px"],[3,"value"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3),t._uU(4," Interpreter Call History "),t.qZA()()()(),t.TgZ(5,"div",0)(6,"div",4)(7,"div",5)(8,"div",6)(9,"h4",7),t._uU(10,"Filter by"),t.qZA()(),t.TgZ(11,"div",8)(12,"div",0)(13,"div",9)(14,"div")(15,"label",10),t._uU(16,"From"),t.qZA(),t._UZ(17,"input",11),t.qZA()(),t.TgZ(18,"div",9)(19,"div")(20,"label",12),t._uU(21,"To"),t.qZA(),t._UZ(22,"input",13),t.qZA()(),t._UZ(23,"div",14),t.qZA(),t.TgZ(24,"div",15)(25,"button",16),t._uU(26,"Apply"),t.qZA()(),t.TgZ(27,"div",17)(28,"form")(29,"div",18)(30,"table",19)(31,"thead",20)(32,"tr")(33,"th",21),t._uU(34,"Call Start"),t.qZA(),t.TgZ(35,"th",21),t._uU(36,"Call End"),t.qZA(),t.TgZ(37,"th",21),t._uU(38,"Language"),t.qZA(),t.TgZ(39,"th",21),t._uU(40,"Rate x min."),t.qZA(),t.TgZ(41,"th",21),t._uU(42,"Duration(m)"),t.qZA(),t.TgZ(43,"th",21),t._uU(44,"Avg. connect Time"),t.qZA(),t.TgZ(45,"th",21),t._uU(46,"Call ID"),t.qZA(),t.TgZ(47,"th",21),t._uU(48,"Location"),t.qZA(),t.TgZ(49,"th",21),t._uU(50,"MRN"),t.qZA(),t.TgZ(51,"th",21),t._uU(52,"Client/Patient Name"),t.qZA()()(),t.TgZ(53,"tbody")(54,"tr")(55,"td",22),t._uU(56," Without Records "),t.qZA()()()()(),t.TgZ(57,"div",23)(58,"div",24)(59,"div",25),t._uU(60," Showing "),t.TgZ(61,"select",26)(62,"option",27),t._uU(63,"5"),t.qZA(),t.TgZ(64,"option",27),t._uU(65,"10"),t.qZA(),t.TgZ(66,"option",27),t._uU(67,"20"),t.qZA()(),t._uU(68," register "),t.qZA()()()()()()()()()),2&i&&(t.xp6(62),t.Q6J("value",5),t.xp6(2),t.Q6J("value",10),t.xp6(2),t.Q6J("value",20))}}),r})()},{path:"profile",component:l(4011).t},{path:"**",component:X.T}];let nt=(()=>{var e;class r{}return(e=r).\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[h.Bz.forChild(it),h.Bz]}),r})()}}]);