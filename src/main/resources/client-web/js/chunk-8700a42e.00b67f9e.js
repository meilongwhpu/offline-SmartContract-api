(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8700a42e"],{"0102":function(e,t,r){"use strict";var a=r("85d2"),s=r.n(a);s.a},"140b":function(e,t,r){},"188a":function(e,t,r){},1959:function(e,t,r){"use strict";r.d(t,"c",function(){return i}),r.d(t,"b",function(){return l}),r.d(t,"d",function(){return u}),r.d(t,"a",function(){return m});r("c5f6"),r("96cf");var a=r("3b8d"),s=r("9f30"),n=r("6ace"),o=r("db49");function i(e,t,r){return c.apply(this,arguments)}function c(){return c=Object(a["a"])(regeneratorRuntime.mark(function e(t,r,a){var s,o,i,c,d,u,p,m;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(s=Number(Object(n["a"])(t.amount,t.fee)),o=0,i=r.nonce,c=t.amount,d=0,6===a&&2===a){e.next=8;break}if(!(r.balance<s)){e.next=8;break}return e.abrupt("return",{success:!1,data:"Your balance is not enough."});case 8:if(4===a?d=-1:5===a?d=-1:6===a?(s=t.amount,o=-1,i=t.depositHash.substring(t.depositHash.length-16),c=t.amount-t.fee):9===a&&(s=t.amount,o=-1,i=t.depositHash.substring(t.depositHash.length-16),c=t.amount-t.fee,d=(new Date).valueOf()+2592e5),u=[{address:t.fromAddress,assetsChainId:t.assetsChainId,assetsId:t.assetsId,amount:s,locked:o,nonce:i}],2!==a||t.assetsChainId===Object(n["d"])()){e.next=19;break}return u[0].amount=t.amount,e.next=14,l(Object(n["d"])(),t.assetsId,t.fromAddress);case 14:if(p=e.sent,!(p.data.balance<1e5)){e.next=18;break}return console.log("余额小于手续费"),e.abrupt("return");case 18:u.push({address:t.fromAddress,assetsChainId:Object(n["d"])(),assetsId:t.assetsId,amount:1e5,locked:o,nonce:p.data.nonce});case 19:if(m=[],15!==a&&17!==a){e.next=22;break}return e.abrupt("return",{success:!0,data:{inputs:u,outputs:m}});case 22:if(16!==a){e.next=28;break}if(t.toAddress){e.next=27;break}return e.abrupt("return",{success:!0,data:{inputs:u,outputs:m}});case 27:c=t.value;case 28:return m=[{address:t.toAddress?t.toAddress:t.fromAddress,assetsChainId:t.assetsChainId,assetsId:t.assetsId,amount:c,lockTime:d}],e.abrupt("return",{success:!0,data:{inputs:u,outputs:m}});case 30:case"end":return e.stop()}},e)})),c.apply(this,arguments)}function l(){return d.apply(this,arguments)}function d(){return d=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,r,a,n=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:2,r=n.length>1&&void 0!==n[1]?n[1]:1,a=n.length>2?n[2]:void 0,e.next=5,Object(s["b"])("/","getAccountBalance",[t,r,a]).then(function(e){return e.hasOwnProperty("result")?{success:!0,data:{balance:e.result.balance,nonce:e.result.nonce}}:{success:!1,data:e}}).catch(function(e){return{success:!1,data:e}});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)})),d.apply(this,arguments)}function u(e){return p.apply(this,arguments)}function p(){return p=Object(a["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["b"])("/","validateTx",[t]).then(function(e){if(e.hasOwnProperty("result")){var r=e.result.value;return Object(s["b"])("/","broadcastTx",[t]).then(function(e){return e.hasOwnProperty("result")?{success:!0,hash:r}:{success:!1,data:e.error}}).catch(function(e){return{success:!1,data:e}})}return{success:!1,data:e.error}}).catch(function(e){return{success:!1,data:e}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),p.apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return h=Object(a["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["a"])(o["d"],"getContractConstructor",[t]).then(function(e){return e.hasOwnProperty("result")?{success:!0,data:e.result.constructor}:{success:!1,data:e.error}}).catch(function(e){return{success:!1,data:e}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),h.apply(this,arguments)}},7672:function(e,t,r){"use strict";var a=r("188a"),s=r.n(a);s.a},"85d2":function(e,t,r){},"8c65":function(e,t,r){"use strict";var a=r("140b"),s=r.n(a);s.a},d1f0:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"password-dialog",attrs:{title:e.$t("password.password1"),visible:e.passwordVisible,top:"30vh",width:"30rem","close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.passwordVisible=t},open:e.passwordShow,close:e.passwordClose}},[r("el-form",{ref:"passwordForm",attrs:{model:e.passwordForm,rules:e.passwordRules},nativeOn:{submit:function(e){e.preventDefault()}}},[r("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[e._v(e._s(e.$t("password.password1")))]),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{ref:"inpus",attrs:{type:"password",maxlength:22},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enterSubmit("passwordForm")}},model:{value:e.passwordForm.password,callback:function(t){e.$set(e.passwordForm,"password",t)},expression:"passwordForm.password"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.passwordClose}},[e._v(e._s(e.$t("password.password2")))]),r("el-button",{attrs:{type:"success",id:"passwordInfo"},on:{click:function(t){return e.dialogSubmit("passwordForm")}}},[e._v(e._s(e.$t("password.password3"))+"\n    ")])],1)],1)},s=[],n={props:{},data:function(){var e=this,t=function(t,r,a){""===r?a(new Error(e.$t("password.password1"))):a()};return{passwordVisible:!1,passwordForm:{password:"nuls123456"},passwordRules:{password:[{validator:t,trigger:["blur","change"]}]}}},created:function(){},mounted:function(){},watch:{passwordVisible:function(e){e&&setTimeout(function(){},200)}},methods:{enterSubmit:function(e){this.passwordForm.password&&this.dialogSubmit(e)},passwordShow:function(){},passwordClose:function(){this.$refs["passwordForm"].resetFields(),this.passwordVisible=!1},showPassword:function(e){this.passwordVisible=e},dialogSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.$emit("passwordSubmit",t.passwordForm.password),t.passwordVisible=!1})}}},o=n,i=(r("7672"),r("2877")),c=Object(i["a"])(o,a,s,!1,null,null,null);t["a"]=c.exports},dd78:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"contract"},[r("h3",{staticClass:"title"},[e._v("\n    "+e._s(e.defaultAddress)+"\n    "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.addressInfo.alias,expression:"addressInfo.alias"}]},[e._v(" | "+e._s(e.addressInfo.alias))]),r("i",{staticClass:"iconfont icon-fuzhi clicks"})]),r("el-tabs",{staticClass:"w1200",on:{"tab-click":e.handleClick},model:{value:e.contractActive,callback:function(t){e.contractActive=t},expression:"contractActive"}},[r("el-tab-pane",{attrs:{label:e.$t("contract.contract1"),name:"contractFirst"}},[r("div",{staticClass:"my_contract"},[r("el-table",{attrs:{data:e.myContractData,stripe:"",border:""}},[r("el-table-column",{attrs:{label:e.$t("contract.contract2"),align:"center","min-width":"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[3===t.row.status?r("span",[e._v(e._s(t.row.contractAddress))]):e._e(),3!==t.row.status?r("span",{staticClass:"click",on:{click:function(r){return e.toUrl("contractInfo",t.row.contractAddress,0,"first")}}},[e._v(e._s(t.row.contractAddress))]):e._e()]}}])}),r("el-table-column",{attrs:{label:e.$t("public.contractName"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.alias))])]}}])}),r("el-table-column",{attrs:{label:e.$t("public.status"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e.$t("contractStatus."+t.row.status)))])]}}])}),r("el-table-column",{attrs:{prop:"createTime",label:e.$t("public.time"),align:"center"}}),r("el-table-column",{attrs:{label:e.$t("public.operation"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[3===t.row.status||-1===t.row.status?r("label",{staticClass:"tab_bn"},[e._v("--")]):r("label",{staticClass:"click tab_bn",on:{click:function(r){return e.toUrl("contractInfo",t.row.contractAddress,0,"fourth")}}},[e._v(e._s(e.$t("contract.contract4")))]),r("i",{directives:[{name:"show",rawName:"v-show",value:t.row.creater===e.addressInfo.address,expression:"scope.row.creater === addressInfo.address"}],staticClass:"el-icon-star-on font20 transparent"}),r("el-tooltip",{directives:[{name:"show",rawName:"v-show",value:t.row.creater!==e.addressInfo.address,expression:"scope.row.creater !== addressInfo.address"}],attrs:{content:e.$t("public.cancelCollection"),placement:"top"}},[r("i",{staticClass:"el-icon-star-on font20 clicks",on:{click:function(r){return e.cancelCollection(t.row.contractAddress)}}})])]}}])})],1),r("div",{staticClass:"pages"},[r("div",{staticClass:"page-total"},[e._v("\n            "+e._s(e.$t("public.display"))+" "+e._s(e.pageIndex-1===0?1:(e.pageIndex-1)*e.pageSize)+"-"+e._s(e.pageIndex*e.pageSize)+"\n            "+e._s(e.$t("public.total"))+" "+e._s(e.pageTotal)+"\n          ")]),r("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.pageTotal>e.pageSize,expression:"pageTotal > pageSize"}],staticClass:"fr",attrs:{"current-page":e.pageIndex,"page-size":e.pageSize,background:"",layout:" prev, pager, next, jumper",total:e.pageTotal},on:{"current-change":e.myContractPages}})],1)],1)]),r("el-tab-pane",{attrs:{label:e.$t("contract.contract10"),name:"contractThird"}},[r("Deploy",{attrs:{addressInfo:e.addressInfo}})],1)],1)],1)},s=[],n=(r("6b54"),r("96cf"),r("3b8d")),o=(r("7f7f"),r("6ace")),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.deployLoading,expression:"deployLoading"}],staticClass:"deploy"},[r("div",{staticClass:"select_resource"},[r("el-radio-group",{on:{change:e.changeRadio},model:{value:e.resource,callback:function(t){e.resource=t},expression:"resource"}},[r("el-radio",{attrs:{label:"1"}},[e._v(e._s(e.$t("deploy.deploy2")))]),r("el-radio",{attrs:{label:"0"}},[e._v(e._s(e.$t("deploy.deploy1")))])],1)],1),r("el-form",{ref:"deployForm",attrs:{model:e.deployForm,rules:e.deployRules,"status-icon":""},nativeOn:{submit:function(e){e.preventDefault()}}},[r("div",{staticClass:"modes bg-white w1200"},[r("div",{staticClass:"parameter",staticStyle:{"padding-top":"1rem"}},[r("el-form-item",{attrs:{label:e.$t("deploy.deploy21"),prop:"alias"}},[r("el-input",{attrs:{autocomplete:"off"},on:{change:e.changeAlias},model:{value:e.deployForm.alias,callback:function(t){e.$set(e.deployForm,"alias",t)},expression:"deployForm.alias"}})],1)],1),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"0"===e.resource,expression:"resource ==='0'"}],staticClass:"hex",attrs:{label:"HEX",prop:"hex"}},[r("el-input",{attrs:{type:"textarea",rows:10,autocomplete:"off"},on:{change:e.getParameter},model:{value:e.deployForm.hex,callback:function(t){e.$set(e.deployForm,"hex","string"===typeof t?t.trim():t)},expression:"deployForm.hex"}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:"1"===e.resource,expression:"resource==='1'"}],staticClass:"upload_jar"},[r("input",{staticClass:"hidden",attrs:{type:"file",id:"fileId"}}),r("div",{staticClass:"click upload tc",on:{click:e.uploadJar}},[r("i",{staticClass:"el-icon-upload2 font30"}),r("p",{staticClass:"font14"},[e._v(e._s(e.$t("deploy.deploy3")))]),r("p",{directives:[{name:"show",rawName:"v-show",value:e.fileName,expression:"fileName"}],staticClass:"font12"},[e._v(e._s(e.$t("deploy.deploy4"))+":"+e._s(e.fileName))])])]),e.deployForm.parameterList?r("div",{staticClass:"parameter"},e._l(e.deployForm.parameterList,function(t,a){return r("el-form-item",{key:t.name,attrs:{label:t.name,prop:"parameterList."+a+".value",rules:{required:t.required,message:t.name+e.$t("call.call2"),trigger:"blur"}}},[r("el-input",{on:{change:e.changeParameter},model:{value:t.value,callback:function(r){e.$set(t,"value","string"===typeof r?r.trim():r)},expression:"domain.value"}})],1)}),1):e._e(),r("div",{directives:[{name:"show",rawName:"v-show",value:e.deployForm.hex,expression:"deployForm.hex"}],staticClass:"w500",staticStyle:{"padding-bottom":"2rem"}},[r("el-form-item",{staticClass:"senior",attrs:{label:e.$t("call.call3")}},[r("el-switch",{model:{value:e.deployForm.senior,callback:function(t){e.$set(e.deployForm,"senior",t)},expression:"deployForm.senior"}})],1),e.deployForm.senior?r("div",{staticClass:"senior-div bg-white"},[r("el-form-item",{attrs:{label:"Gas Limit",prop:"gas"}},[r("el-input",{model:{value:e.deployForm.gas,callback:function(t){e.$set(e.deployForm,"gas",t)},expression:"deployForm.gas"}})],1),r("el-form-item",{attrs:{label:"Price",prop:"price"}},[r("el-input",{model:{value:e.deployForm.price,callback:function(t){e.$set(e.deployForm,"price",t)},expression:"deployForm.price"}})],1),r("el-form-item",{attrs:{label:e.$t("public.contractInfo"),prop:"addtion"}},[r("el-input",{attrs:{type:"textarea",rows:3,maxlength:"200","show-word-limit":""},model:{value:e.deployForm.addtion,callback:function(t){e.$set(e.deployForm,"addtion",t)},expression:"deployForm.addtion"}})],1)],1):e._e()],1)],1),r("el-form-item",{staticClass:"form-next"},[r("el-button",{attrs:{type:"success"},on:{click:function(t){return e.submitTestDeploy("deployForm")}}},[e._v("\n        "+e._s(e.$t("deploy.deploy5"))+"\n      ")]),r("br"),r("div",{staticClass:"mb_20"}),r("el-button",{on:{click:function(t){return e.submitDeploy("deployForm")}}},[e._v(e._s(e.$t("deploy.deploy6")))])],1)],1),r("Password",{ref:"password",on:{passwordSubmit:e.confirmDeploy}})],1)},c=[],l=r("0ad0"),d=r.n(l),u=r("b8d7"),p=r.n(u),m=r("e065"),h=r.n(m),f=r("1959"),g=r("d1f0"),y=r("db49"),b=r("bc3a"),v=r.n(b),w={name:"deploy",data:function(){var e=this,t=function(t,r,a){var s=/^(?!_)(?!.*?_$)[a-z0-9_]+$/;""===r?a(new Error(e.$t("deploy.deploy19"))):s.exec(r)?a():a(new Error(e.$t("deploy.deploy20")))};return{resource:"1",deployForm:{alias:"",hex:"",parameterList:[],senior:!1,gas:"",price:"",addtion:""},deployRules:{alias:[{validator:t,trigger:"blur"}],hex:[{required:!0,message:this.$t("deploy.deploy7"),trigger:"blur"}],gas:[{type:"number",required:!0,message:this.$t("deploy.deploy8"),trigger:"blur"}],price:[{type:"number",required:!0,message:this.$t("deploy.deploy9"),trigger:"blur"}]},createAddress:"",contractCreateTxData:{},balanceInfo:{},isTestSubmit:!1,fileName:"",deployLoading:!1}},props:{addressInfo:Object},components:{Password:g["a"]},created:function(){this.createAddress=this.addressInfo.address,console.log(d.a.verifyAddress(this.addressInfo.address)),this.getBalanceByAddress(d.a.verifyAddress(this.addressInfo.address).chainId,1,this.createAddress)},mounted:function(){},watch:{addressInfo:function(e,t){e.address!==t.address&&t.address&&(this.createAddress=e.address,this.getBalanceByAddress(d.a.verifyAddress(this.addressInfo.address).chainId,1,this.createAddress))},fileName:function(e,t){e!==t&&t&&(this.deployForm.parameterList=[],this.deployForm.gas="",this.deployForm.price="")}},methods:{changeRadio:function(e){this.resource=e,this.fileName="",this.deployForm={alias:"",hex:"",parameterList:[],senior:!1,gas:"",price:"",addtion:""}},changeAlias:function(){this.deployForm.hex&&this.changeParameter()},getParameter:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!(this.deployForm.hex.length>500)){e.next=6;break}return this.deployLoading=!0,e.next=4,Object(f["a"])(this.deployForm.hex);case 4:t=e.sent,t.success?(this.deployLoading=!1,0!==t.data.length?this.deployForm.parameterList=t.data:this.changeParameter()):this.$message({message:this.$t("deploy.deploy10")+t.data.error,type:"error",duration:2e3});case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),changeParameter:function(){var e=Object(o["i"])(this.deployForm.parameterList);e.allParameter&&(this.validateContractCreate(this.createAddress,p.a.CONTRACT_MAX_GASLIMIT,p.a.CONTRACT_MINIMUM_PRICE,this.deployForm.hex,e.args),this.deployForm.price=p.a.CONTRACT_MINIMUM_PRICE)},validateContractCreate:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r,a,s,n){var i=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return y["e"].method="validateContractCreate",y["e"].params=[Object(o["d"])(),t,r,a,s,n],console.log(y["e"].params),e.abrupt("return",v.a.post(y["d"],y["e"]).then(function(e){console.log("validateContractCreate response: "+e),console.log(e),e.data.hasOwnProperty("result")?i.imputedContractCreateGas(t,s,n):i.$message({message:i.$t("deploy.deploy11")+e.data.error.message,type:"error",duration:2e3})}).catch(function(e){i.$message({message:i.$t("deploy.deploy12")+e,type:"error",duration:2e3})}));case 4:case"end":return e.stop()}},e)}));function t(t,r,a,s,n){return e.apply(this,arguments)}return t}(),imputedContractCreateGas:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r,a){var s=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return y["e"].method="imputedContractCreateGas",y["e"].params=[Object(o["d"])(),t,r,a],e.abrupt("return",v.a.post(y["d"],y["e"]).then(function(e){console.log("imputedContractCreateGas response"),console.log(e),e.data.hasOwnProperty("result")?(s.deployForm.gas=e.data.result.gasLimit,s.makeCreateData(e.data.result.gasLimit,t,r,a,s.deployForm.alias)):s.$message({message:s.$t("deploy.deploy13")+e.data.error.message,type:"error",duration:2e3})}).catch(function(e){s.$message({message:s.$t("deploy.deploy14")+e.message,type:"error",duration:2e3})}));case 3:case"end":return e.stop()}},e)}));function t(t,r,a){return e.apply(this,arguments)}return t}(),makeContractConstructorArgsTypes:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,a,s,n,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(r=t,a=r.length,s=new Array(a),o=0;o<a;o++)n=r[o],s[o]=n.type;return e.abrupt("return",s);case 5:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),makeCreateData:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r,a,s,n){var i,c,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(i={},i.chainId=Object(o["d"])(),i.sender=r,i.gasLimit=t,i.price=p.a.CONTRACT_MINIMUM_PRICE,i.contractCode=a,i.alias=n,c=this.deployForm.parameterList,l=this.makeContractConstructorArgsTypes(c),0===s.length){e.next=15;break}return e.next=12,h.a.twoDimensionalArray(s,l);case 12:i.args=e.sent,e.next=16;break;case 15:i.args=null;case 16:i.contractAddress=p.a.getStringContractAddress(Object(o["d"])()),i.chainId&&i.contractAddress&&i.contractCode&&i.gasLimit&&i.price&&i.sender?(this.contractCreateTxData=i,this.$message({message:this.$t("deploy.deploy16"),type:"success",duration:2e3})):this.$message({message:this.$t("deploy.deploy15"),type:"error",duration:2e3});case 18:case"end":return e.stop()}},e,this)}));function t(t,r,a,s,n){return e.apply(this,arguments)}return t}(),getBalanceByAddress:function(e,t,r){var a=this;Object(f["b"])(e,t,r).then(function(e){e.success?a.balanceInfo=e.data:a.$message({message:a.$t("public.err2")+e,type:"error",duration:2e3})}).catch(function(e){a.$message({message:a.$t("public.err3")+e,type:"error",duration:2e3})})},submitTestDeploy:function(e){var t=this;this.$refs[e].validate(function(r){if(!r)return!1;console.log(e);var a=Object(o["i"])(t.deployForm.parameterList);console.log(a),a.allParameter&&t.validateContractCreate(t.createAddress,p.a.CONTRACT_MAX_GASLIMIT,p.a.CONTRACT_MINIMUM_PRICE,t.deployForm.hex,a.args)})},testDeploy:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r,a,s,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:console.log(t),console.log(n),console.log(r),this.validateContractCreate(t,r,a,this.deployForm.hex,n);case 4:case"end":return e.stop()}},e,this)}));function t(t,r,a,s,n){return e.apply(this,arguments)}return t}(),submitDeploy:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.isTestSubmit=!1,t.$refs.password.showPassword(!0)})},confirmDeploy:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=Object(o["i"])(this.deployForm.parameterList),r.allParameter&&(y["e"].method="createContract",y["e"].params=[Object(o["d"])(),2,1,this.addressInfo.address,t,this.deployForm.hex,this.deployForm.alias,r.args,this.deployForm.gas,this.deployForm.price,this.deployForm.addtion],v.a.post(y["d"],y["e"]).then(function(e){console.log("createContract response:"),console.log(e.data),e.data.hasOwnProperty("result")?a.$message({message:"合约部署成功，合约地址: "+e.data.result.contractAddress,type:"success",duration:2e3}):a.$message({message:"合约部署失败: "+e.data.error.message,type:"error",duration:2e3})}).catch(function(e){console.log(e)}));case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),uploadJar:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=this,r=document.getElementById("fileId"),r.click(),r.onchange=function(){var e=this;if(""!==this.value){var a=r.files[0];t.fileName=a.name;var s=new FileReader;s.readAsDataURL(a),s.onload=function(){y["e"].method="uploadContractJar",y["e"].params=[Object(o["d"])(),s.result],console.log(s.result),v.a.post(y["d"],y["e"]).then(function(r){r.data.hasOwnProperty("result")?(t.deployForm.hex=r.data.result.code,t.getParameter()):e.$message({message:r.data.error.message,type:"error",duration:2e3})}).catch(function(t){e.$message({message:t,type:"error",duration:2e3})})}}};case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},C=w,x=(r("0102"),r("2877")),$=Object(x["a"])(C,i,c,!1,null,null,null),_=$.exports,I={data:function(){return{addressInfo:{},contractActive:"contractFirst",myContractData:[],pageIndex:1,pageSize:10,pageTotal:0,currentPage4:0,searchContract:"",isCollection:!1,contractInfo:{},modelData:[],defaultAddress:""}},created:function(){this.addressInfo.address=localStorage.getItem(Object(o["e"])())},mounted:function(){var e=this;this.getMyContractByAddress(this.addressInfo.address),setInterval(function(){e.defaultAddress=localStorage.getItem(Object(o["e"])())},500)},components:{Deploy:_},watch:{defaultAddress:function(e,t){e!==t&&t&&this.getMyContractByAddress(e)}},methods:{handleClick:function(e){"contractSecond"===e.name?(this.searchContract="",this.isCollection=!1,this.contractInfo={},this.modelData=[]):"contractFirst"===e.name&&this.getMyContractByAddress(this.addressInfo.address)},getMyContractByAddress:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,this.$post("/","getAccountContractList",[this.pageIndex,this.pageSize,t,!1,!1]).then(function(e){console.log(e),e.hasOwnProperty("result")?(r.myContractData=e.result.list,r.pageTotal=e.result.totalCount):r.$message({message:r.$t("contract.contract11")+e.error,type:"error",duration:1e3})}).catch(function(e){r.$message({message:r.$t("contract.contract12")+e,type:"error",duration:1e3})});case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),myContractPages:function(e){this.pageIndex=e,this.getMyContractByAddress(this.addressInfo.address)},toUrl:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3?arguments[3]:void 0;"0"===r.toString()?"contractInfo"===e?this.$router.push({name:e,query:{contractAddress:t,activeName:a}}):this.$router.push({name:e}):Object(o["f"])(e,t)}}},k=I,A=(r("8c65"),Object(x["a"])(k,a,s,!1,null,null,null));t["default"]=A.exports},e065:function(e,t,r){"use strict";function a(e){return null===e?null:e.toString()}function s(e){return null===e||0===e.trim.length}e.exports={stringToByte:function(e){var t=[],r=void 0,a=void 0;r=e.length;for(var s=0;s<r;s++)a=e.charCodeAt(s),a>=65536&&a<=1114111?(t.push(a>>18&7|240),t.push(a>>12&63|128),t.push(a>>6&63|128),t.push(63&a|128)):a>=2048&&a<=65535?(t.push(a>>12&15|224),t.push(a>>6&63|128),t.push(63&a|128)):a>=128&&a<=2047?(t.push(a>>6&31|192),t.push(63&a|128)):t.push(255&a);return t},twoDimensionalArray:function(e,t){if(null==e)return null;for(var r=e.length,n=new Array(r),o=void 0,i=0;i<r;i++)if(o=e[i],null!=o)if("String"===typeof o){var c=o;null!=t&&s(c)&&"String"!==t[i]?n[i]=[]:n[i]=[c]}else if(Array.isArray(o)){for(var l=o.length,d=new Array[l],u=0;u<l;u++)d[u]=a(o[u]);n[i]=d}else n[i]=[a(o)];else n[i]=[];return n}}}}]);
//# sourceMappingURL=chunk-8700a42e.00b67f9e.js.map