(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51452d9e"],{"188a":function(s,e,t){},"675f":function(s,e,t){"use strict";var a=t("9823"),r=t.n(a);r.a},7672:function(s,e,t){"use strict";var a=t("188a"),r=t.n(a);r.a},9823:function(s,e,t){},d1f0:function(s,e,t){"use strict";var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("el-dialog",{staticClass:"password-dialog",attrs:{title:s.$t("password.password1"),visible:s.passwordVisible,top:"30vh",width:"30rem","close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){s.passwordVisible=e},open:s.passwordShow,close:s.passwordClose}},[t("el-form",{ref:"passwordForm",attrs:{model:s.passwordForm,rules:s.passwordRules},nativeOn:{submit:function(s){s.preventDefault()}}},[t("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[s._v(s._s(s.$t("password.password1")))]),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{ref:"inpus",attrs:{type:"password",maxlength:22},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&s._k(e.keyCode,"enter",13,e.key,"Enter")?null:s.enterSubmit("passwordForm")}},model:{value:s.passwordForm.password,callback:function(e){s.$set(s.passwordForm,"password",e)},expression:"passwordForm.password"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:s.passwordClose}},[s._v(s._s(s.$t("password.password2")))]),t("el-button",{attrs:{type:"success",id:"passwordInfo"},on:{click:function(e){return s.dialogSubmit("passwordForm")}}},[s._v(s._s(s.$t("password.password3"))+"\n    ")])],1)],1)},r=[],o={props:{},data:function(){var s=function(s,e,t){t()};return{passwordVisible:!1,passwordForm:{password:""},passwordRules:{password:[{validator:s,trigger:["blur","change"]}]}}},created:function(){},mounted:function(){},watch:{passwordVisible:function(s){s&&setTimeout(function(){},200)}},methods:{enterSubmit:function(s){this.passwordForm.password&&this.dialogSubmit(s)},passwordShow:function(){},passwordClose:function(){this.$refs["passwordForm"].resetFields(),this.passwordVisible=!1},showPassword:function(s){this.passwordVisible=s},dialogSubmit:function(s){var e=this;this.$refs[s].validate(function(s){if(!s)return!1;e.$emit("passwordSubmit",e.passwordForm.password),e.passwordVisible=!1})}}},d=o,n=(t("7672"),t("2877")),i=Object(n["a"])(d,a,r,!1,null,null,null);e["a"]=i.exports},fe38:function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"address bg-gray"},[t("h3",{staticClass:"title"},[s._v(s._s(s.$t("address.address0")))]),t("div",{staticClass:"w1200 mt_20"},[t("div",{staticClass:"top_ico"},[t("i",{staticClass:"el-icon-plus click",on:{click:function(e){return s.toUrl("newAddress")}}})]),t("el-table",{attrs:{data:s.addressList,stripe:"",border:""}},[t("el-table-column",{attrs:{prop:"address",label:s.$t("address.address1"),align:"center","min-width":"200"}}),t("el-table-column",{attrs:{prop:"balance",label:s.$t("address.address2"),align:"center"}}),t("el-table-column",{attrs:{label:s.$t("address.address3"),align:"center"},scopedSlots:s._u([{key:"default",fn:function(e){return[t("span",{directives:[{name:"show",rawName:"v-show",value:e.row.alias,expression:"scope.row.alias"}]},[s._v(s._s(e.row.alias))]),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.row.alias,expression:"!scope.row.alias"}],on:{click:function(t){return s.addAlias(e.row)}}},[t("i",{staticClass:"el-icon-edit-outline click"})])]}}])}),t("el-table-column",{attrs:{label:s.$t("address.address5"),align:"center",width:"350"},scopedSlots:s._u([{key:"default",fn:function(e){return[t("label",{staticClass:"click tab_bn",on:{click:function(t){return s.backAddress(e.row)}}},[s._v(s._s(s.$t("address.address7")))]),t("span",{staticClass:"tab_line"},[s._v("|")]),t("label",{staticClass:"click tab_bn",on:{click:function(t){return s.deleteAddress(e.row)}}},[s._v(s._s(s.$t("address.address8")))]),t("span",{staticClass:"tab_line"},[s._v("|")]),e.row.address===s.defaultAddress?t("el-link",{attrs:{disabled:""}},[s._v(s._s(s.$t("public.into")))]):t("label",{staticClass:"click tab_bn",on:{click:function(t){return s.selectionAddress(e.row)}}},[s._v(s._s(s.$t("public.into")))])]}}])})],1),t("div",{staticClass:"pages"},[t("div",{staticClass:"page-total"},[s._v("\n            "+s._s(s.$t("public.display"))+" "+s._s(s.pageIndex-1===0?1:(s.pageIndex-1)*s.pageSize)+"-"+s._s(s.pageIndex*s.pageSize)+"\n            "+s._s(s.$t("public.total"))+" "+s._s(s.pageTotal)+"\n          ")]),t("el-pagination",{directives:[{name:"show",rawName:"v-show",value:s.pageTotal>s.pageSize,expression:"pageTotal > pageSize"}],staticClass:"fr",attrs:{"current-page":s.pageIndex,"page-size":s.pageSize,background:"",layout:" prev, pager, next, jumper",total:s.pageTotal},on:{"current-change":s.myAddressPages}})],1)],1),t("el-dialog",{attrs:{title:"Remarks",width:"30rem",visible:s.remarkDialog,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){s.remarkDialog=e}}},[t("div",{staticClass:"address-remark bg-white"},[t("el-input",{attrs:{placeholder:s.$t("address.address9")},model:{value:s.remarkInfo,callback:function(e){s.remarkInfo="string"===typeof e?e.trim():e},expression:"remarkInfo"}}),t("div",{staticClass:"btn-next"},[t("el-button",{on:{click:function(e){s.remarkDialog=!1}}},[s._v(s._s(s.$t("address.address10")))]),t("el-button",{attrs:{type:"success"},on:{click:s.addRemark}},[s._v(s._s(s.$t("address.address11")))])],1)],1)]),t("Password",{ref:"password",on:{passwordSubmit:s.passSubmit}})],1)},r=[],o=(t("ac4d"),t("8a81"),t("ac6a"),t("96cf"),t("3b8d")),d=t("d1f0"),n=t("6ace"),i=t("db49"),l=t("bc3a"),c=t.n(l),u={data:function(){return{addressList:[],pageIndex:1,pageSize:10,pageTotal:0,selectAddressInfo:"",remarkDialog:!1,remarkInfo:"",defaultAddress:""}},components:{Password:d["a"]},created:function(){console.log("address-created"),this.defaultAddress=localStorage.getItem(Object(n["e"])()),this.getAddressList()},mounted:function(){},methods:{getAddressList:function(){var s=Object(o["a"])(regeneratorRuntime.mark(function s(){var e=this;return regeneratorRuntime.wrap(function(s){while(1)switch(s.prev=s.next){case 0:return console.log("address-getAddressList pageIndex :"+this.pageIndex),console.log("address-getAddressList pageSize:"+this.pageSize),s.next=4,this.$localhostPost("","getAccountList",[this.pageIndex,this.pageSize]).then(function(s){if(s.hasOwnProperty("result"))if(e.addressList=s.result.list,console.log(e.addressList),0===e.addressList.length)e.$router.push({name:"newAddress",query:{address:""}});else{var t=!0,a=!1,r=void 0;try{for(var o,d=e.addressList[Symbol.iterator]();!(t=(o=d.next()).done);t=!0){var i=o.value;i.balance=Object(n["l"])(i.balance)}}catch(l){a=!0,r=l}finally{try{t||null==d.return||d.return()}finally{if(a)throw r}}e.pageTotal=s.result.total,localStorage.hasOwnProperty(Object(n["e"])())||localStorage.setItem(Object(n["e"])(),e.addressList[0].address),e.defaultAddress=localStorage.getItem(Object(n["e"])())}else e.$message({message:e.$t("contract.contract11")+s.data.error.message,type:"error",duration:1e3})}).catch(function(s){e.$message({message:e.$t("address.address14")+s,type:"error",duration:1e3})});case 4:case"end":return s.stop()}},s,this)}));function e(){return s.apply(this,arguments)}return e}(),myAddressPages:function(s){this.pageIndex=s,this.getAddressList()},addAlias:function(s){0===s.balance?this.$message({message:this.$t("address.address12"),type:"error",duration:1e3}):this.toUrl("setAlias",s.address)},editPassword:function(s){this.toUrl("editPassword",s.address)},backAddress:function(s){this.selectAddressInfo=s,this.$router.push({name:"newAddress",query:{backAddressInfo:s}})},deleteAddress:function(s){this.selectAddressInfo=s,this.$refs.password.showPassword(!0)},selectionAddress:function(s){localStorage.setItem(Object(n["e"])(),s.address),this.getAddressList(),this.$router.push({name:"home"})},passSubmit:function(s){var e=this;i["e"].method="deleteAccount",i["e"].params=[Object(n["d"])(),this.selectAddressInfo.address,s],c.a.post(i["d"],i["e"]).then(function(s){s.data.hasOwnProperty("result")?(e.selectAddressInfo.address==localStorage.getItem(Object(n["e"])())&&localStorage.removeItem(Object(n["e"])()),e.getAddressList()):e.$message({message:e.$t("address.address15")+s.data.error.message,type:"error",duration:1e3})}).catch(function(s){console.log(s)})},editRemark:function(s){this.selectAddressInfo=s,this.remarkInfo=this.selectAddressInfo.remark,this.remarkDialog=!0},addRemark:function(){var s=Object(n["c"])(0),e=!0,t=!1,a=void 0;try{for(var r,o=s[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var d=r.value;d.address===this.selectAddressInfo.address&&(this.selectAddressInfo.remark=this.remarkInfo,d.remark=this.remarkInfo)}}catch(i){t=!0,a=i}finally{try{e||null==o.return||o.return()}finally{if(t)throw a}}localStorage.setItem(Object(n["e"])(),JSON.stringify(s)),this.remarkDialog=!1,this.selectAddressInfo=""},toUrl:function(s,e){this.$router.push({name:s,query:{address:e}})}}},p=u,f=(t("675f"),t("2877")),m=Object(f["a"])(p,a,r,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-51452d9e.07d9dff7.js.map