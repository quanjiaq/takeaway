(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"0f9e":function(e,t,r){"use strict";r.r(t);var s=r("7a23"),a=Object(s["H"])("data-v-7e1283e6");Object(s["u"])("data-v-7e1283e6");var n={class:"wrapper"},c=Object(s["i"])("img",{class:"wrapper__img",src:"http://www.dell-lee.com/imgs/vue3/user.png"},null,-1),o={class:"wrapper__input"},p={class:"wrapper__input"},u={class:"wrapper__input"};Object(s["s"])();var i=a((function(e,t,r,a,i,d){var l=Object(s["y"])("Toast");return Object(s["r"])(),Object(s["e"])("div",n,[c,Object(s["i"])("div",o,[Object(s["G"])(Object(s["i"])("input",{type:"text",class:"wrapper__input__content",placeholder:"请输入手机号","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.username=e})},null,512),[[s["D"],a.username]])]),Object(s["i"])("div",p,[Object(s["G"])(Object(s["i"])("input",{type:"password",class:"wrapper__input__content",placeholder:"请输入密码",autocomplete:"new-password","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.password=e})},null,512),[[s["D"],a.password]])]),Object(s["i"])("div",u,[Object(s["G"])(Object(s["i"])("input",{type:"password",class:"wrapper__input__content",placeholder:"确认密码",autocomplete:"new-password","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.checkpassword=e})},null,512),[[s["D"],a.checkpassword]])]),Object(s["i"])("div",{class:"wrapper__register-button",onClick:t[4]||(t[4]=function(){return a.handleRegister&&a.handleRegister.apply(a,arguments)})},"注册"),Object(s["i"])("div",{class:"wrapper__register-link",onClick:t[5]||(t[5]=function(){return a.handleToLogin&&a.handleToLogin.apply(a,arguments)})},"已有账号去登录"),a.toastshow?(Object(s["r"])(),Object(s["e"])(l,{key:0,message:a.toastmessage},null,8,["message"])):Object(s["f"])("",!0)])})),d=r("1da1"),l=(r("96cf"),r("6c02")),w=r("b775"),b=r("0eb4"),m=function(e){var t=Object(l["d"])(),r=Object(s["v"])({username:"",password:"",checkpassword:""}),a=function(){var s=Object(d["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(s.prev=0,""!==r.username&&""!==r.password){s.next=6;break}return e("手机号和密码不能为空"),s.abrupt("return");case 6:if(o===p){s.next=9;break}return e("两次密码不一致"),s.abrupt("return");case 9:return s.next=11,Object(w["b"])("/api/user/register",{username:r.username,password:r.password});case 11:a=s.sent,0===a.data.errno?t.push({name:"Login"}):e("注册失败"),s.next=18;break;case 15:s.prev=15,s.t0=s["catch"](0),e("请求失败");case 18:case"end":return s.stop()}}),s,null,[[0,15]])})));return function(){return s.apply(this,arguments)}}(),n=Object(s["B"])(r),c=n.username,o=n.password,p=n.checkpassword;return{username:c,password:o,checkpassword:p,handleRegister:a}},h={name:"Login",components:{Toast:b["a"]},setup:function(){var e=Object(l["d"])(),t=function(){e.push({name:"Login"})},r=Object(b["b"])(),s=r.toastshow,a=r.toastmessage,n=r.showToast,c=m(n),o=c.username,p=c.password,u=c.checkpassword,i=c.handleRegister;return{handleRegister:i,handleToLogin:t,username:o,password:p,checkpassword:u,toastshow:s,toastmessage:a}}};r("b62e");h.render=i,h.__scopeId="data-v-7e1283e6";t["default"]=h},b62e:function(e,t,r){"use strict";r("fe83")},fe83:function(e,t,r){}}]);
//# sourceMappingURL=register.415e238f.js.map