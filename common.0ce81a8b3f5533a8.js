"use strict";(self.webpackChunksnv_admin_frontend=self.webpackChunksnv_admin_frontend||[]).push([[592],{5949:(d,g,o)=>{o.d(g,{Q:()=>c});var t=o(5879),p=o(6814);function s(a,i){if(1&a){const r=t.EpF();t.TgZ(0,"li",6)(1,"button",7),t.NdJ("click",function(){const u=t.CHM(r).$implicit,l=t.oxw();return t.KtG(l.onPaginate(u))}),t._uU(2),t.qZA()()}if(2&a){const r=i.$implicit,n=t.oxw();t.xp6(1),t.Q6J("disabled",n.currentPage==r),t.xp6(1),t.Oqu(r)}}let c=(()=>{var a;class i{constructor(){this.paginate={currentPage:1,endPage:1,pages:[1],startPage:1,totalPages:1},this.navigate=new t.vpe}get pages(){return this.paginate.pages}get currentPage(){return this.paginate.currentPage}get startPage(){return this.paginate.startPage}get endPage(){return this.paginate.endPage}get startRecord(){return 5*(this.currentPage-1)+1}get endRecord(){const e=5*this.currentPage;return e>this.total?this.total:e}onPaginate(n){this.navigate.emit(n)}onNextPage(){this.navigate.emit(this.currentPage+1)}onPrevPage(){this.navigate.emit(this.currentPage-1)}}return(a=i).\u0275fac=function(n){return new(n||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-pagination"]],inputs:{paginate:"paginate",total:"total"},outputs:{navigate:"navigate"},decls:11,vars:6,consts:[[1,"d-flex","justify-content-end","gap-4"],[1,"d-flex","justify-content-center","align-items-center","gap-2","text-muted","mb-0"],[1,"pagination","justify-content-end","me-2"],[1,"page-item","disabled"],["tabindex","-1",1,"page-link",3,"disabled","click"],["class","page-item",4,"ngFor","ngForOf"],[1,"page-item"],[1,"page-link",3,"disabled","click"]],template:function(n,e){1&n&&(t.TgZ(0,"nav",0)(1,"div",1),t._uU(2),t.qZA(),t.TgZ(3,"ul",2)(4,"li",3)(5,"button",4),t.NdJ("click",function(){return e.onNextPage()}),t._uU(6," Previous "),t.qZA()(),t.YNc(7,s,3,2,"li",5),t.TgZ(8,"li",6)(9,"button",7),t.NdJ("click",function(){return e.onPrevPage()}),t._uU(10," Next "),t.qZA()()()()),2&n&&(t.xp6(2),t.lnq(" registros del ",e.startRecord," al ",e.endRecord," de ",e.total," "),t.xp6(3),t.Q6J("disabled",e.currentPage==e.startPage),t.xp6(2),t.Q6J("ngForOf",e.pages),t.xp6(2),t.Q6J("disabled",e.currentPage==e.endPage))},dependencies:[p.sg],styles:["ul[_ngcontent-%COMP%]{margin-bottom:10px}"]}),i})()},11:(d,g,o)=>{o.d(g,{s:()=>p});var t=o(5879);let p=(()=>{var s;class c{transform(i){return i?"Activo":"Inactivo"}}return(s=c).\u0275fac=function(i){return new(i||s)},s.\u0275pipe=t.Yjl({name:"status",type:s,pure:!0}),c})()},76:(d,g,o)=>{o.d(g,{BL:()=>i,E1:()=>_,HM:()=>P,WP:()=>s,bg:()=>l,gy:()=>m,pw:()=>u});const s=new RegExp(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xfc\xf1\'\.\,\s]{0,200}$/i),i=new RegExp(/^[a-z\xe1\xe9\xed\xf3\xfa\xfc\xf1\#\-\d\.\,\s\(\)]{0,200}$/i),u=new RegExp(/^[a-z\d\-]{0,100}$/i),l=new RegExp(/^[A-Z\.]{0,200}$/),P=new RegExp(/^[a-z\_]{0,10}$/i),_=new RegExp(/^[\d]{5,5}$/i),m=new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}}]);