(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,a,t){e.exports=t.p+"static/media/404.ea0e8b04.jpg"},34:function(e,a,t){e.exports=t(63)},56:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(28),o=t.n(n),s=t(9),c=t(10),m=t(13),i=t(11),u=t(14),f=t(29),h=t(30),E=t.n(h).a.create({baseURL:"http://localhost:5000/"}),p=function(e){var a=e.value,t=e.onChange;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("div",{className:"firstName"},l.a.createElement("label",{htmlFor:"firstName"},"First Name"),l.a.createElement("input",{className:a.fieldErrors.firstName.length>0?"error":null,type:"text",name:"firstName",placeholder:"First Name",onChange:t,noValidate:!0}),a.fieldErrors.firstName.length>0&&l.a.createElement("span",{className:"errorMessage"},a.fieldErrors.firstName)),l.a.createElement("hr",null),l.a.createElement("div",{className:"lastName"},l.a.createElement("label",{htmlFor:"lastName"},"Last Name"),l.a.createElement("input",{className:a.fieldErrors.lastName.length>0?"error":null,type:"text",name:"lastName",placeholder:"Last Name",onChange:t,noValidate:!0}),a.fieldErrors.lastName.length>0&&l.a.createElement("span",{className:"errorMessage"},a.fieldErrors.lastName)),l.a.createElement("hr",null),l.a.createElement("div",{className:"email"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{className:a.fieldErrors.email.length>0?"error":null,type:"email",name:"email",placeholder:"Email",onChange:t,noValidate:!0}),a.fieldErrors.email.length>0&&l.a.createElement("span",{className:"errorMessage"},a.fieldErrors.email)),l.a.createElement("hr",null),l.a.createElement("input",{type:"submit"})))},g=(t(56),RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)),N=function(e){var a=!0;Object.values(e).forEach((function(e){e.length>0&&(a=!1)}));for(var t=arguments.length,r=new Array(t>1?t-1:0),l=1;l<t;l++)r[l-1]=arguments[l];return Object.values(r).forEach((function(e){null===e&&(a=!1)})),a},d=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).handleOtherInput=function(e){e.preventDefault();var a=e.target,r=a.name,l=a.value,n=t.state.fieldErrors;switch(r){case"firstName":n.firstName=l.length<3?"Min 3 chars":"";break;case"lastName":n.lastName=l.length<3?"Min 3 chars":"";break;case"email":n.email=g.test(l)?"":"invalid email"}t.setState(Object(f.a)({formErrors:n},r,l))},t.onFormSubmit=function(e){e.preventDefault();var a=t.state,r=a.firstName,l=a.lastName,n=a.email;if(N(t.state.fieldErrors)){console.log("%cSubmitted","font-family:monospace; font-size:20px; color:gold;"),console.log("%cFirst Name : ","font-family:tahoma; font-size:12px; color:#A835D8;",r),console.log("%cLast Name :","font-family:tahoma; font-size:12px; color:#0AE62F;",l),console.log("%cEmail:","font-family:tahoma; font-size:12px; color:#0EE5EC;",n);var o={firstName:r,lastName:l,email:n};E.post("/contacts",o).then((function(){return console.log("Sent Data ".concat(o.firstName," ").concat(o.lastName," ").concat(o.email))})).catch((function(e){return console.log("Error, ".concat(e))})),localStorage.setItem("firstName",r),localStorage.setItem("lastName",l),localStorage.setItem("email",n),e.target.reset()}else console.error("Error")},t.state={firstName:"",lastName:"",email:"",fieldErrors:{firstName:"",lastName:"",email:""}},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e="true"===localStorage.getItem("firstName"),a=e?localStorage.getItem("firstName"):null;this.setState({userSaved:a,storage:e})}},{key:"componentDidUpdate",value:function(){console.log(this.state)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"form-wrapper"},l.a.createElement("h1",null,"React Form"),l.a.createElement("form",{onSubmit:this.onFormSubmit,noValidate:!0},l.a.createElement(p,{value:this.state,onChange:this.handleOtherInput})),l.a.createElement("hr",null))))}}]),a}(r.Component),b=t(31),v=t.n(b),y=t(12),O={width:"100%",height:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"relative"},S={fontSize:"1.2em"},j=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"btn btn-warning"},l.a.createElement("span",{className:"glyphicon glyphicon-fast-backward"}," "),"\xa0\xa0\xa0",l.a.createElement(y.b,{style:S,to:"/"},"Home")),l.a.createElement("img",{src:v.a,style:O,alt:"Error Page"}))},F=t(6),k=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(y.a,null,l.a.createElement(F.c,null,l.a.createElement(F.a,{path:"/",component:d,exact:!0}),l.a.createElement(F.a,{component:j})))}}]),a}(l.a.Component);t(62);o.a.render(l.a.createElement(k,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.8d6661b2.chunk.js.map