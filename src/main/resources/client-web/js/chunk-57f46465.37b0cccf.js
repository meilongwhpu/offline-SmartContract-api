(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57f46465"],{"0a49":function(e,t,n){var r=n("9b43"),a=n("626a"),s=n("4bf8"),i=n("9def"),o=n("cd1c");e.exports=function(e,t){var n=1==e,c=2==e,u=3==e,l=4==e,d=6==e,f=5==e||d,v=t||o;return function(t,o,h){for(var p,m,S=s(t),g=a(S),b=r(o,h,3),w=i(g.length),y=0,x=n?v(t,w):c?v(t,0):void 0;w>y;y++)if((f||y in g)&&(p=g[y],m=b(p,y,S),e))if(n)x[y]=m;else if(m)switch(e){case 3:return!0;case 5:return p;case 6:return y;case 2:x.push(p)}else if(l)return!1;return d?-1:u||l?l:x}}},1959:function(e,t,n){"use strict";n.d(t,"c",function(){return u}),n.d(t,"b",function(){return d}),n.d(t,"d",function(){return v}),n.d(t,"e",function(){return p}),n.d(t,"a",function(){return S});n("c5f6"),n("96cf");var r=n("3b8d"),a=n("9f30"),s=n("6ace"),i=n("db49"),o=n("bc3a"),c=n.n(o);function u(e,t,n){return l.apply(this,arguments)}function l(){return l=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){var a,i,o,c,u,l,f,v;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=Number(Object(s["a"])(t.amount,t.fee)),i=0,o=n.nonce,c=t.amount,u=0,6===r&&2===r){e.next=8;break}if(!(n.balance<a)){e.next=8;break}return e.abrupt("return",{success:!1,data:"Your balance is not enough."});case 8:if(4===r?u=-1:5===r?u=-1:6===r?(a=t.amount,i=-1,o=t.depositHash.substring(t.depositHash.length-16),c=t.amount-t.fee):9===r&&(a=t.amount,i=-1,o=t.depositHash.substring(t.depositHash.length-16),c=t.amount-t.fee,u=(new Date).valueOf()+2592e5),l=[{address:t.fromAddress,assetsChainId:t.assetsChainId,assetsId:t.assetsId,amount:a,locked:i,nonce:o}],2!==r||t.assetsChainId===Object(s["d"])()){e.next=19;break}return l[0].amount=t.amount,e.next=14,d(Object(s["d"])(),t.assetsId,t.fromAddress);case 14:if(f=e.sent,!(f.data.balance<1e5)){e.next=18;break}return console.log("余额小于手续费"),e.abrupt("return");case 18:l.push({address:t.fromAddress,assetsChainId:Object(s["d"])(),assetsId:t.assetsId,amount:1e5,locked:i,nonce:f.data.nonce});case 19:if(v=[],15!==r&&17!==r){e.next=22;break}return e.abrupt("return",{success:!0,data:{inputs:l,outputs:v}});case 22:if(16!==r){e.next=28;break}if(t.toAddress){e.next=27;break}return e.abrupt("return",{success:!0,data:{inputs:l,outputs:v}});case 27:c=t.value;case 28:return v=[{address:t.toAddress?t.toAddress:t.fromAddress,assetsChainId:t.assetsChainId,assetsId:t.assetsId,amount:c,lockTime:u}],e.abrupt("return",{success:!0,data:{inputs:l,outputs:v}});case 30:case"end":return e.stop()}},e)})),l.apply(this,arguments)}function d(){return f.apply(this,arguments)}function f(){return f=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,n,r,s=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:2,n=s.length>1&&void 0!==s[1]?s[1]:1,r=s.length>2?s[2]:void 0,e.next=5,Object(a["b"])("/","getAccountBalance",[t,n,r]).then(function(e){return e.hasOwnProperty("result")?{success:!0,data:{balance:e.result.balance,nonce:e.result.nonce}}:{success:!1,data:e}}).catch(function(e){return{success:!1,data:e}});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)})),f.apply(this,arguments)}function v(e,t){return h.apply(this,arguments)}function h(){return h=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return i["e"].method="setProperty",i["e"].params=[t,n],e.abrupt("return",c.a.post(i["d"],i["e"]).then(function(e){return console.log(e),e.data.hasOwnProperty("result")?{success:e.data.result}:{success:!1,data:e.error}}).catch(function(e){console.log(e)}));case 3:case"end":return e.stop()}},e)})),h.apply(this,arguments)}function p(e){return m.apply(this,arguments)}function m(){return m=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["b"])("/","validateTx",[t]).then(function(e){if(e.hasOwnProperty("result")){var n=e.result.value;return Object(a["b"])("/","broadcastTx",[t]).then(function(e){return e.hasOwnProperty("result")?{success:!0,hash:n}:{success:!1,data:e.error}}).catch(function(e){return{success:!1,data:e}})}return{success:!1,data:e.error}}).catch(function(e){return{success:!1,data:e}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),m.apply(this,arguments)}function S(e){return g.apply(this,arguments)}function g(){return g=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])("","getContractConstructor",[t]).then(function(e){return e.hasOwnProperty("result")?{success:!0,data:e.result.constructor}:{success:!1,data:e.error}}).catch(function(e){return{success:!1,data:e}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),g.apply(this,arguments)}},"20d6":function(e,t,n){"use strict";var r=n("5ca1"),a=n("0a49")(6),s="findIndex",i=!0;s in[]&&Array(1)[s](function(){i=!1}),r(r.P+r.F*i,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(s)},2864:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"node_service bg-gray",attrs:{"element-loading-text":e.$t("nodeService.nodeService0")}},[n("h3",{staticClass:"title"},[e._v(e._s(e.$t("nodeService.nodeService1")))]),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.nodeServiceLoading,expression:"nodeServiceLoading"}],staticClass:"w1200 mt_20"},[n("div",{staticClass:"top_ico"},[n("i",{staticClass:"el-icon-plus click",on:{click:e.addNodeService}})]),n("el-table",{attrs:{data:e.nodeServiceData,stripe:"",border:""}},[n("el-table-column",{attrs:{prop:"chainName",label:e.$t("nodeService.nodeService23"),align:"center"}}),n("el-table-column",{attrs:{label:e.$t("nodeService.nodeService2"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["Official"===t.row.name?n("span",[e._v(e._s(e.$t("nodeService.official")))]):n("span",[e._v(e._s(t.row.name))])]}}])}),n("el-table-column",{attrs:{prop:"urls",label:e.$t("nodeService.nodeService3"),align:"center","min-width":"180"}}),n("el-table-column",{attrs:{label:e.$t("nodeService.nodeService4"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1e5===t.row.delay?n("span",[e._v(e._s(e.$t("nodeService.nodeService17")))]):2e5===t.row.delay?n("span",[e._v(e._s(e.$t("nodeService.nodeService18")))]):3e5===t.row.delay?n("span",[n("i",{staticClass:"el-icon-loading"})]):n("span",[e._v(e._s(t.row.delay)+" ms")])]}}])}),n("el-table-column",{attrs:{prop:"state",label:e.$t("nodeService.nodeService5"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{on:{click:function(n){return e.editState(t.$index)}}},[n("i",{staticClass:"iconfont clicks",class:t.row.selection?"iconziyuan fCN":"iconduankailianjie flan"})])]}}])}),n("el-table-column",{attrs:{label:e.$t("nodeService.nodeService6"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.isDelete?n("div",[n("label",{staticClass:"click tab_bn",on:{click:function(n){return e.edit(t.$index)}}},[e._v(e._s(e.$t("nodeService.nodeService7")))]),n("span",{staticClass:"tab_line"},[e._v("|")]),n("label",{staticClass:"click tab_bn",on:{click:function(n){return e.removeUrl(t.$index)}}},[e._v(e._s(e.$t("nodeService.nodeService8")))])]):e._e()]}}])})],1)],1),n("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.nodeServiceDialogLoading,expression:"nodeServiceDialogLoading"}],attrs:{title:e.$t("nodeService.nodeService9"),width:"40%",visible:e.nodeServiceDialog,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.nodeServiceDialog=t},close:function(t){return e.resetForm("nodeServiceForm")}}},[n("span",[e._v(e._s(e.$t("nodeService.nodeService10")))]),n("div",{staticClass:"bg-white"},[n("el-form",{ref:"nodeServiceForm",attrs:{model:e.nodeServiceForm,"status-icon":"",rules:e.nodeServiceRules}},[n("el-form-item",{attrs:{label:e.$t("nodeService.nodeService2"),prop:"name"}},[n("el-input",{attrs:{maxlength:"20"},model:{value:e.nodeServiceForm.name,callback:function(t){e.$set(e.nodeServiceForm,"name",e._n(t))},expression:"nodeServiceForm.name"}})],1),n("el-form-item",{attrs:{label:e.$t("nodeService.nodeService3"),prop:"urls"}},[n("el-input",{attrs:{type:"text",autocomplete:"off",maxlength:"50",placeholder:"http://192.168.1.108:18003"},on:{change:e.changeUrls},model:{value:e.nodeServiceForm.urls,callback:function(t){e.$set(e.nodeServiceForm,"urls",t)},expression:"nodeServiceForm.urls"}})],1),n("el-form-item",{staticClass:"btns tl",staticStyle:{"margin-top":"2.5rem"}},[n("el-button",{staticClass:"fl",attrs:{type:"success"},on:{click:function(t){return e.testSubmitForm("nodeServiceForm")}}},[e._v("\n            "+e._s(e.$t("nodeService.nodeService11"))+"\n          ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:0!==e.testInfo.state,expression:"testInfo.state !==0"}],staticClass:"fl ml_50"},[n("i",{class:1===e.testInfo.state?"el-icon-circle-check fCN":"el-icon-circle-close fred"}),e._v(" \n            "),n("span",{directives:[{name:"show",rawName:"v-show",value:2===e.testInfo.state,expression:"testInfo.state ===2"}],staticClass:"fred font12"},[e._v(e._s(e.testInfo.result))])])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:1===e.testInfo.state,expression:"testInfo.state ===1"}]},[n("el-form-item",[n("el-checkbox",{model:{value:e.nodeServiceForm.resource,callback:function(t){e.$set(e.nodeServiceForm,"resource",t)},expression:"nodeServiceForm.resource"}},[e._v(e._s(e.$t("nodeService.nodeService12")))])],1),n("el-form-item",{staticClass:"btns tc"},[n("el-button",{on:{click:function(t){return e.resetForm("nodeServiceForm")}}},[e._v(e._s(e.$t("password.password2")))]),n("el-button",{attrs:{type:"success"},on:{click:function(t){return e.submitForm("nodeServiceForm")}}},[e._v(e._s(e.$t("password.password3")))])],1)],1),n("div",{staticClass:"cb"})],1)],1)])],1)},a=[],s=(n("7f7f"),n("c5f6"),n("20d6"),n("96cf"),n("3b8d")),i=(n("ac4d"),n("8a81"),n("ac6a"),n("75fc")),o=(n("7514"),n("bc3a")),c=n.n(o),u=n("db49"),l=n("1959"),d={data:function(){var e=this,t=function(t,n,r){if(!n)return r(new Error(e.$t("nodeService.nodeService13")));r()},n=function(t,n,r){var a=/(http|https):\/\/([\w.]+\/?)\S*/;""===n?r(new Error(e.$t("nodeService.nodeService14"))):a.exec(n)?e.nodeServiceData.find(function(e){return e.urls===n})?r(new Error(e.$t("nodeService.nodeService151"))):r():r(new Error(e.$t("nodeService.nodeService15")))};return{loading:!1,nodeServiceData:[],nodeServiceLoading:!1,nodeServiceDialog:!1,nodeServiceDialogLoading:!1,nodeServiceForm:{name:"",urls:"",resource:!1},nodeServiceRules:{name:[{validator:t,trigger:"blur"}],urls:[{validator:n,trigger:"blur"}]},testInfo:{state:0,result:{}},editIndex:1e4}},created:function(){localStorage.hasOwnProperty("urlsData")?this.nodeServiceData=Object(i["a"])(JSON.parse(localStorage.getItem("urlsData"))):this.nodeServiceData=Object(i["a"])(u["g"])},mounted:function(){this.getDelay()},methods:{editState:function(e){var t=this;if(2e5===this.nodeServiceData[e].delay||3e5===this.nodeServiceData[e].delay)this.$message({message:this.$t("nodeService.nodeService16"),type:"error",duration:1e3});else if(!this.nodeServiceData[e].selection){this.loading=!0;var n=!0,r=!1,a=void 0;try{for(var s,i=this.nodeServiceData[Symbol.iterator]();!(n=(s=i.next()).done);n=!0){var o=s.value;o.selection=!1}}catch(c){r=!0,a=c}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}this.nodeServiceData[e].selection=!0,localStorage.setItem("urls",JSON.stringify(this.nodeServiceData[e])),localStorage.setItem("urlsData",JSON.stringify(this.nodeServiceData)),this.setUrlAddress(this.nodeServiceData[e].urls),setTimeout(function(){t.loading=!1},2e3)}},setUrlAddress:function(e){var t=this;Object(l["d"])("apiModuleAddress",e).then(function(e){e.success||t.$message({message:t.$t("public.setfail"),type:"error",duration:1e3})}).catch(function(e){t.$message({message:t.$t("public.setfail")+e,type:"error",duration:1e3})})},getDelay:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,n,r,a,s,i,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(t=[],n=!0,r=!1,a=void 0,e.prev=4,s=this.nodeServiceData[Symbol.iterator]();!(n=(i=s.next()).done);n=!0)o=i.value,o.delay=3e5,t.push(o);e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](4),r=!0,a=e.t0;case 12:e.prev=12,e.prev=13,n||null==s.return||s.return();case 15:if(e.prev=15,!r){e.next=18;break}throw a;case 18:return e.finish(15);case 19:return e.finish(12);case 20:this.nodeServiceData=t,this.nodeServiceLoading=!1,localStorage.setItem("urlsData",JSON.stringify(this.nodeServiceData)),this.getDelays();case 24:case"end":return e.stop()}},e,this,[[4,8,12,20],[13,,15,19]])}));function t(){return e.apply(this,arguments)}return t}(),getDelays:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,n,r,a,s,i,o,u,l,d,f,v=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=[],n=!0,r=!0,a=!1,s=void 0,e.prev=5,i=regeneratorRuntime.mark(function e(){var r,a,s,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=u.value,a=(new Date).valueOf(),s=0,i={jsonrpc:"2.0",method:"getChainInfo",params:[],id:5898},e.next=6,c.a.post(r.urls,i).then(function(e){e.data.hasOwnProperty("result")?(s=(new Date).valueOf(),r.delay=s-a,r.chainId=e.data.result.chainId,r.chainName=e.data.result.chainName):(r.delay=1e5,r.selection=!1,r.state=0)}).catch(function(e){r.delay=2e5,r.selection=!1,r.state=0,console.log(e)});case 6:r.selection&&(n=!1,localStorage.setItem("urls",JSON.stringify(r)),v.setUrlAddress(r.urls)),t.push(r);case 8:case"end":return e.stop()}},e)}),o=this.nodeServiceData[Symbol.iterator]();case 8:if(r=(u=o.next()).done){e.next=13;break}return e.delegateYield(i(),"t0",10);case 10:r=!0,e.next=8;break;case 13:e.next=19;break;case 15:e.prev=15,e.t1=e["catch"](5),a=!0,s=e.t1;case 19:e.prev=19,e.prev=20,r||null==o.return||o.return();case 22:if(e.prev=22,!a){e.next=25;break}throw s;case 25:return e.finish(22);case 26:return e.finish(19);case 27:if(n)for(f in l=Math.min.apply(Math,t.map(function(e){return e.delay})),d=t.map(function(e){return e.delay}).findIndex(function(e){return e===l}),t)Number(f)===d&&(t[d].selection=!0,localStorage.setItem("urls",JSON.stringify(t[d])),this.setUrlAddress(t[d].urls));this.nodeServiceData=t,this.nodeServiceLoading=!1,localStorage.setItem("urlsData",JSON.stringify(this.nodeServiceData));case 31:case"end":return e.stop()}},e,this,[[5,15,19,27],[20,,22,26]])}));function t(){return e.apply(this,arguments)}return t}(),getChainInfo:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n={jsonrpc:"2.0",method:"getChainInfo",params:[],id:5898},e.next=3,c.a.post(t,n).then(function(e){return e}).catch(function(e){console.log("getChainInfo:"+e)});case 3:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),testSubmitForm:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=this,this.$refs[t].validate(function(e){if(!e)return!1;n.nodeServiceDialogLoading=!0;var t={jsonrpc:"2.0",method:"getChainInfo",params:[],id:5898};c.a.post(r.nodeServiceForm.urls,t).then(function(e){e.data.hasOwnProperty("result")?(n.testInfo.state=1,n.testInfo.result=e.data.result,n.nodeServiceDialogLoading=!1):(n.testInfo.state=2,n.testInfo.result=e.data.error.message,n.nodeServiceDialogLoading=!1)}).catch(function(e){console.log(e.message),n.testInfo.state=3e5,n.testInfo.result=e.message,console.log("getBestBlockHeader:"+e),n.nodeServiceDialogLoading=!1})});case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),addNodeService:function(){this.nodeServiceDialog=!0,this.nodeServiceForm.name="",this.nodeServiceForm.urls=""},submitForm:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$refs[t].validate(function(e){if(!e)return!1;var r={name:n.nodeServiceForm.name,urls:n.nodeServiceForm.urls,delay:"",selection:!1,isDelete:!0,chainId:n.testInfo.result.chainId,assetId:n.testInfo.result.assets.assetId,chainName:n.testInfo.result.chainName,decimals:n.testInfo.result.defaultAsset.decimals};if(n.nodeServiceForm.resource){for(var a in n.nodeServiceData)n.nodeServiceData[a].selection&&(n.nodeServiceData[a].selection=!1);r.selection=!0}1e4!==n.editIndex?(n.nodeServiceData[n.editIndex]=r,localStorage.setItem("urlsData",JSON.stringify(n.nodeServiceData))):(n.nodeServiceData.push(r),localStorage.setItem("urlsData",JSON.stringify(n.nodeServiceData))),n.getDelay(),n.nodeServiceDialog=!1,n.$refs[t].resetFields()});case 1:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),changeUrls:function(e){this.testInfo.state=0,this.testInfo.result={}},resetForm:function(e){this.nodeServiceDialog=!1,this.testInfo.state=0,this.testInfo.result={},this.$refs[e].resetFields()},edit:function(e){this.editIndex=e,this.nodeServiceForm=this.nodeServiceData[e],this.nodeServiceDialog=!0},removeUrl:function(e){var t=this;this.$confirm(this.$t("nodeService.nodeService19")+this.nodeServiceData[e].urls+this.$t("nodeService.nodeService20"),this.$t("nodeService.nodeService21"),{confirmButtonText:this.$t("password.password3"),cancelButtonText:this.$t("password.password2"),type:"warning"}).then(function(){t.$message({type:"success",message:t.$t("nodeService.nodeService22")}),t.nodeServiceData.splice(e,1),t.getDelays(),localStorage.setItem("urlsData",JSON.stringify(t.nodeServiceData))}).catch(function(){})},toUrl:function(e){this.$router.push({name:e})}}},f=d,v=(n("2fed"),n("2877")),h=Object(v["a"])(f,r,a,!1,null,null,null);t["default"]=h.exports},"2fed":function(e,t,n){"use strict";var r=n("d2ac"),a=n.n(r);a.a},7514:function(e,t,n){"use strict";var r=n("5ca1"),a=n("0a49")(5),s="find",i=!0;s in[]&&Array(1)[s](function(){i=!1}),r(r.P+r.F*i,"Array",{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(s)},cd1c:function(e,t,n){var r=n("e853");e.exports=function(e,t){return new(r(e))(t)}},d2ac:function(e,t,n){},e853:function(e,t,n){var r=n("d3f4"),a=n("1169"),s=n("2b4c")("species");e.exports=function(e){var t;return a(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!a(t.prototype)||(t=void 0),r(t)&&(t=t[s],null===t&&(t=void 0))),void 0===t?Array:t}}}]);
//# sourceMappingURL=chunk-57f46465.37b0cccf.js.map