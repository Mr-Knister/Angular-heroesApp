"use strict";(self.webpackChunkheroesApp=self.webpackChunkheroesApp||[]).push([[985],{5985:(y,m,a)=>{a.r(m),a.d(m,{AuthModule:()=>A});var p=a(6814),g=a(6889),l=a(3403),t=a(5879);let d=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["auth-layout-page"]],decls:3,vars:0,consts:[[1,"grid","p-3"],[1,"col-12","mt-5","md:col-6","md:col-offset-3"]],template:function(o,u){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"router-outlet"),t.qZA()())},dependencies:[l.lC]}),e})();var f=a(4567),i=a(2296),r=a(9157),c=a(617),s=a(2032);const h=[{path:"",component:d,children:[{path:"login",component:(()=>{class e{constructor(o,u){this.authService=o,this.router=u}onLogin(){this.authService.login("fernando@gmail.com","123456").subscribe(o=>{this.router.navigate(["/"])})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(f.e),t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["auth-login-page"]],decls:18,vars:0,consts:[[1,"flex","flex-column"],[1,"text-lg","mb-4"],["type","text","matInput","","placeholder","Nombre de usuario"],["type","text","matInput","","placeholder","Contrase\xf1a"],["mat-button","","mat-flat-button","","color","primary",3,"click"],[1,"flex","justify-content-end","mt-5"],["href","/auth/new-account"]],template:function(o,u){1&o&&(t.TgZ(0,"div",0)(1,"span",1),t._uU(2,"Login"),t.qZA(),t.TgZ(3,"mat-form-field")(4,"mat-label"),t._uU(5,"Usuario"),t.qZA(),t._UZ(6,"input",2),t.qZA(),t.TgZ(7,"mat-form-field")(8,"mat-label"),t._uU(9,"Contrase\xf1a"),t.qZA(),t._UZ(10,"input",3),t.qZA(),t.TgZ(11,"button",4),t.NdJ("click",function(){return u.onLogin()}),t.TgZ(12,"mat-icon"),t._uU(13,"login"),t.qZA(),t._uU(14," Ingresar "),t.qZA(),t.TgZ(15,"div",5)(16,"a",6),t._uU(17,"\xbfNo tienes una cuenta?"),t.qZA()()())},dependencies:[i.lW,r.KE,r.hX,c.Hw,s.Nt]}),e})()},{path:"new-account",component:(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["auth-register-page"]],decls:22,vars:0,consts:[[1,"flex","flex-column"],[1,"text-lg","mb-4"],["type","text","matInput","","placeholder","Nombre de usuario"],["type","text","matInput","","placeholder","Nombre completo"],["type","text","matInput","","placeholder","Contrase\xf1a"],["mat-button","","mat-flat-button","","color","primary"],[1,"flex","justify-content-end","mt-5"],["href","/auth"]],template:function(o,u){1&o&&(t.TgZ(0,"div",0)(1,"span",1),t._uU(2,"Registro"),t.qZA(),t.TgZ(3,"mat-form-field")(4,"mat-label"),t._uU(5,"Usuario"),t.qZA(),t._UZ(6,"input",2),t.qZA(),t.TgZ(7,"mat-form-field")(8,"mat-label"),t._uU(9,"Nombre"),t.qZA(),t._UZ(10,"input",3),t.qZA(),t.TgZ(11,"mat-form-field")(12,"mat-label"),t._uU(13,"Contrase\xf1a"),t.qZA(),t._UZ(14,"input",4),t.qZA(),t.TgZ(15,"button",5)(16,"mat-icon"),t._uU(17,"save"),t.qZA(),t._uU(18," Registrar "),t.qZA(),t.TgZ(19,"div",6)(20,"a",7),t._uU(21,"\xbfYa tienes cuenta?"),t.qZA()()())},dependencies:[i.lW,r.KE,r.hX,c.Hw,s.Nt]}),e})()},{path:"**",redirectTo:"login"}]}];let Z=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(h),l.Bz]}),e})(),A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.ez,Z,g.q]}),e})()}}]);