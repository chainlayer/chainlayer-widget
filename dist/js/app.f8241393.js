(function(t){function e(e){for(var n,i,o=e[0],c=e[1],h=e[2],d=0,u=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(u.length)u.shift()();return s.push.apply(s,h||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var h=0;h<o.length;h++)e(o[h]);var l=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},1:function(t,e){},2:function(t,e){},"2f0f":function(t,e,a){"use strict";var n=a("7c4d"),r=a.n(n);r.a},3:function(t,e){},4:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"vertical-align":"top"},attrs:{id:"app"}},[a("TotalStake",{attrs:{irisStake:t.irisStake,terraStake:t.terraStake,cosmosStake:t.cosmosStake,wanchainStake:t.wanchainStake,kavaStake:t.kavaStake}}),a("hr"),a("h3",[t._v("Validating Networks")]),a("CosmosLedger",{attrs:{msg:"Delegation"},on:{cosmosStake:t.updateCosmos}}),a("KavaLedger",{attrs:{msg:"Delegation"},on:{kavaStake:t.updateKava}}),t._m(0),a("br"),t._v(" \n  "),a("br"),a("WanchainWidget",{attrs:{msg:"Delegation"},on:{wanchainStake:t.updateWanchain}}),a("TerraLedger",{attrs:{msg:"Delegation"},on:{terraStake:t.updateTerra}}),a("IrisLedger",{attrs:{msg:"Delegation"},on:{irisStake:t.updateIris}}),a("hr"),a("h3",[t._v("Testnet")]),t._m(1),a("br"),t._v(" "),a("br"),t._m(2),t._m(3),a("hr"),a("h3",[t._v("Investigating")]),t._m(4),t._m(5)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chainlinkWidget",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[a("img",{attrs:{src:"/img/logo-chainlink.png",alt:"Chainlink",title:"Chainlink",width:"128",height:"46"}}),a("br"),a("label",[t._v("Chainlayer Oracle for Chainlink")]),a("br"),a("br"),t._v(" \n    "),a("br"),t._v(" \n    "),a("a",{staticClass:"button sg-popup-id-146 button_size_2 button_dark button_js",attrs:{href:""}},[a("span",{staticClass:"button_label"},[t._v("Details")])]),t._v(" \n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"regenWidget",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[a("a",{attrs:{href:""}},[a("img",{attrs:{src:"/img/logo-regen.png",alt:"Regen",title:"Regen",width:"237",height:"46"}})]),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"celoWidget",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[a("a",{attrs:{href:""}},[a("img",{attrs:{src:"/img/logo-celo.png",alt:"Celo",title:"Celo",width:"94",height:"46"}})]),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"polkadotWidget",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[a("a",{attrs:{href:""}},[a("img",{attrs:{src:"/img/logo-polkadot.svg",alt:"Polkadot",title:"Polkadot",width:"159",height:"46"}})]),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"emoneyWidget",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[a("a",{attrs:{href:""}},[a("img",{attrs:{src:"/img/logo-emoney.png",alt:"e-Money",title:"e-Money",width:"161",height:"46"}})]),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"skaleWidget",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[a("a",{attrs:{href:""}},[a("img",{attrs:{src:"/img/logo-skale.png",alt:"Skale",title:"Skale",width:"180",height:"46"}})]),a("br")])}],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"totalStake",staticStyle:{width:"900px",display:"inline-block","vertical-align":"top"}},[a("h3",[t._v("Currently Trusted to ChainLayer: "+t._s(t.totalstake))])])},o=[],c=a("9dcd"),h=a.n(c),l=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),d={name:"Results",props:{irisStake:{type:Object,default:h()(0)},terraStake:{type:Object,default:h()(0)},cosmosStake:{type:Object,default:h()(0)},kavaStake:{type:Object,default:h()(0)},wanchainStake:{type:Object,default:h()(0)}},data:function(){return{totalstake:h()(0)}},watch:{irisStake:function(){this.totalstake=h()(this.irisStake.add(this.terraStake).add(this.cosmosStake).add(this.wanchainStake).add(this.kavaStake)),this.totalstake=l.format(this.totalstake)},terraStake:function(){this.totalstake=h()(this.irisStake.add(this.terraStake).add(this.cosmosStake).add(this.wanchainStake).add(this.kavaStake)),this.totalstake=l.format(this.totalstake)},cosmosStake:function(){this.totalstake=h()(this.irisStake.add(this.terraStake).add(this.cosmosStake).add(this.wanchainStake).add(this.kavaStake)),this.totalstake=l.format(this.totalstake)},kavaStake:function(){this.totalstake=h()(this.irisStake.add(this.terraStake).add(this.cosmosStake).add(this.wanchainStake).add(this.kavaStake)),this.totalstake=l.format(this.totalstake)},wanchainStake:function(){this.totalstake=h()(this.irisStake.add(this.terraStake).add(this.cosmosStake).add(this.wanchainStake).add(this.kavaStake)),this.totalstake=l.format(this.totalstake)}}},u=d,g=a("2877"),p=Object(g["a"])(u,i,o,!1,null,null,null),m=p.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"irisLedger",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[a("img",{attrs:{src:"/img/logo-irisnet.svg",alt:"IrisNet",title:"IrisNet",width:"145",height:"46"}}),a("br"),""!=this.staked?a("span",[a("label",[t._v("Staked by ChainLayer: ")]),a("br"),a("span",[t._v(t._s(t.staked)+" "+t._s(t.denom)+" ("+t._s(t.stakedUSD)+")")]),a("br")]):t._e(),""!=this.price?a("span",[t._v("Price "+t._s(t.denom)+": $ "+t._s(t.price))]):t._e(),a("br"),t._m(0),t._v(" \n    "),t._m(1)])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"button sg-popup-id-144 button_size_2 button_dark button_js",attrs:{href:""}},[a("span",{staticClass:"button_label"},[t._v("Details")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"button button_size_2 button_dark button_js",attrs:{href:"https://ledger.chainlayer.io",target:"_blank",rel:"noopener noreferrer"}},[a("span",{staticClass:"button_label"},[t._v("Delegate")])])}],v=(a("96cf"),a("3b8d")),k=a("7fe4"),y=a.n(k),_=a("14f7"),S=_.IrisDelegateTool,w=new y.a,x=new S(w);x.setNodeURL("https://irishub-lcd.chainlayer.net");var L=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),I=new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0}),C={name:"IrisLedger",props:{restUrl:String},data:function(){return{myAddr:"",bech32:"",pk:"",path:"",accInfo:"",sequence:"",delegation:"",reply:"",balance_available:"",balance_delegated:"",balance_total:"",connected:!1,connecting:!1,readytodelegate:!1,debug:!1,denom:"",staked:"",stakedUSD:"",error:"",price:"",chainId:"",validator:"",rewards:"",hrp:""}},computed:{consoleStatus:function(){return this.consoleLog}},created:function(){this.init()},methods:{show:function(){this.$modal.show("iris-modal")},hide:function(){this.$modal.hide("iris-modal")},onlyNumber:function(t){var e=t.keyCode?t.keyCode:t.which;(e<48||e>57)&&46===e&&t.preventDefault()},log:function(t,e){this.debug&&console.log(e)},init:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.error="",this.myAddr=null,this.denom="Iris",this.hrp=x.getHrp(),this.readytodelegate=!1,this.baseamount=1e18,this.validator="iva1kgddca7qj96z0qcxr2c45z73cfl0c75pmw0meu",this.chainId="irishub",this.log(this.consoleLog,"Trying to connect..."),t.next=11,x.retrieveValidators();case 11:return this.validators=t.sent,this.staked=I.format(h()(this.validators[this.validator].totalShares)),t.next=15,x.getPrice();case 15:this.price=t.sent,this.stakedUSD=L.format(h()(this.validators[this.validator].totalShares*this.price)),this.$emit("irisStake",h()(this.validators[this.validator].totalShares*this.price));case 18:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),tryConnect:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.connecting=!0,t.next=4,x.connect();case 4:t.next=12;break;case 6:return t.prev=6,t.t0=t["catch"](0),this.log(this.consoleLog,t.t0),this.connected=!1,this.connecting=!1,t.abrupt("return");case 12:if(this.connecting=!1,x.connected){t.next=17;break}return this.connected=!1,this.log(this.consoleLog,x.lastError),t.abrupt("return");case 17:return this.connected=!0,this.log(this.consoleLog,"Connected!"),t.prev=19,t.next=22,x.retrieveAddress(0,0);case 22:this.myAddr=t.sent,t.next=31;break;case 25:return t.prev=25,t.t1=t["catch"](19),this.log(this.consoleLog,t.t1),"Error: Unknown Status Code: 26628"==t.t1&&(this.error="Enter Pin on Ledger"),this.connected=!1,t.abrupt("return");case 31:return this.bech32=this.myAddr.bech32,this.pk=this.myAddr.pk,this.path=this.myAddr.path,this.log(this.consoleLog,this.myAddr),this.log(this.consoleLog,"Address  : ".concat(this.myAddr.bech32)),this.log(this.consoleLog,"PublicKey: ".concat(this.myAddr.pk)),this.log(this.consoleLog,"Query ".concat(this.myAddr.bech32)),t.next=40,x.getAccountInfo(this.myAddr);case 40:if(this.accInfo=t.sent,!this.accInfo.error){t.next=46;break}return this.log(this.consoleLog,this.accInfo.error),t.abrupt("return");case 46:this.log(this.consoleLog,this.accInfo.error),this.log(this.consoleLog,this.accInfo),this.sequence=this.accInfo.sequence,this.balance_available=I.format(h()(this.accInfo.balance/this.baseamount)),this.delegation=parseInt(this.balance_available),this.log(this.consoleLog,this.accInfo);case 52:return t.next=54,x.retrieveBalances([this.myAddr]);case 54:if(this.reply=t.sent,!this.accInfo.error){t.next=60;break}return this.log(this.consoleLog,this.reply.error),t.abrupt("return");case 60:this.log(this.consoleLog,this.reply),this.balance_delegated=I.format(h()(this.reply[0].delegationsTotal)),this.balance_total=I.format(h()(this.reply[0].delegationsTotal).add(h()(this.accInfo.balance/this.baseamount))),this.log(this.consoleLog,this.reply[0].delegationsTotal);case 64:this.readytodelegate=!0;case 65:case"end":return t.stop()}}),t,this,[[0,6],[19,25]])})));function e(){return t.apply(this,arguments)}return e}(),delegate:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var e,a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(x.connected){t.next=3;break}return this.log(this.consoleLog,"Try connecting first.."),t.abrupt("return");case 3:if(null!==this.myAddr){t.next=6;break}return this.log(this.consoleLog,"Retrieve the device address first"),t.abrupt("return");case 6:return e={chainId:this.chainId,path:this.myAddr.path,bech32:this.myAddr.bech32,pk:this.myAddr.pk},t.next=9,x.txCreateDelegate(e,this.validator,this.delegation,"Delegation to ChainLayer.io");case 9:return a=t.sent,this.log(this.consoleLog,"Waiting for device to sign"),t.next=13,x.sign(a,e);case 13:return n=t.sent,this.log(this.consoleLog,"Broadcasting signed tx"),t.next=17,x.txSubmit(n);case 17:r=t.sent,this.log(this.consoleLog,r);case 19:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},A=C,D=Object(g["a"])(A,b,f,!1,null,null,null),j=D.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cosmosLedger",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[a("img",{attrs:{src:"/img/logo-cosmos.svg",alt:"Cosmos",title:"Cosmos",width:"145",height:"46"}}),a("br"),""!=this.staked?a("span",[a("label",[t._v("Staked by ChainLayer: ")]),a("br"),a("span",[t._v(t._s(t.staked)+" "+t._s(t.denom)+" ("+t._s(t.stakedUSD)+")")]),a("br")]):t._e(),""!=this.price?a("span",[t._v("Price "+t._s(t.denom)+": $ "+t._s(t.price))]):t._e(),a("br"),t._m(0),t._v(" \n    "),t._m(1)])},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"button sg-popup-id-142 button_size_2 button_dark button_js",attrs:{href:""}},[a("span",{staticClass:"button_label"},[t._v("Details")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"button button_size_2 button_dark button_js",attrs:{href:"https://ledger.chainlayer.io",target:"_blank",rel:"noopener noreferrer"}},[a("span",{staticClass:"button_label"},[t._v("Delegate")])])}],T=a("14f7"),$=T.CosmosDelegateTool,O=new y.a,E=new $(O);E.setNodeURL("https://cosmoshub-lcd.chainlayer.net");var P=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),W=new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0}),N={name:"CosmosLedger",props:{restUrl:String},data:function(){return{myAddr:"",bech32:"",pk:"",path:"",accInfo:"",sequence:"",delegation:"",reply:"",balance_available:"",balance_delegated:"",balance_total:"",connected:!1,connecting:!1,readytodelegate:!1,debug:!1,denom:"",staked:"",stakedUSD:"",error:"",price:"",chainId:"",validator:"",rewards:"",hrp:""}},computed:{consoleStatus:function(){return this.consoleLog}},created:function(){this.init()},methods:{show:function(){this.$modal.show("cosmos-modal")},hide:function(){this.$modal.hide("cosmos-modal")},onlyNumber:function(t){var e=t.keyCode?t.keyCode:t.which;(e<48||e>57)&&46===e&&t.preventDefault()},log:function(t,e){this.debug&&console.log(e)},init:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.error="",this.myAddr=null,this.denom="Atom",this.hrp=E.getHrp(),this.readytodelegate=!1,this.baseamount=1e6,this.validator="cosmosvaloper1kgddca7qj96z0qcxr2c45z73cfl0c75p7f3s2e",this.chainId="cosmoshub-2",this.log(this.consoleLog,"Trying to connect..."),t.next=11,E.retrieveValidators();case 11:return this.validators=t.sent,this.staked=W.format(h()(this.validators[this.validator].totalShares/this.baseamount)),t.next=15,E.getPrice();case 15:this.price=t.sent,this.stakedUSD=P.format(h()(this.validators[this.validator].totalShares/this.baseamount*this.price)),this.$emit("cosmosStake",h()(this.validators[this.validator].totalShares/this.baseamount*this.price));case 18:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),tryConnect:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.connecting=!0,t.next=4,E.connect();case 4:t.next=12;break;case 6:return t.prev=6,t.t0=t["catch"](0),this.log(this.consoleLog,t.t0),this.connected=!1,this.connecting=!1,t.abrupt("return");case 12:if(this.connecting=!1,E.connected){t.next=17;break}return this.connected=!1,this.log(this.consoleLog,E.lastError),t.abrupt("return");case 17:return this.connected=!0,this.log(this.consoleLog,"Connected!"),t.prev=19,t.next=22,E.retrieveAddress(0,0);case 22:this.myAddr=t.sent,t.next=31;break;case 25:return t.prev=25,t.t1=t["catch"](19),this.log(this.consoleLog,t.t1),"Error: Unknown Status Code: 26628"==t.t1&&(this.error="Enter Pin on Ledger"),this.connected=!1,t.abrupt("return");case 31:return this.bech32=this.myAddr.bech32,this.pk=this.myAddr.pk,this.path=this.myAddr.path,this.log(this.consoleLog,this.myAddr),this.log(this.consoleLog,"Address  : ".concat(this.myAddr.bech32)),this.log(this.consoleLog,"PublicKey: ".concat(this.myAddr.pk)),this.log(this.consoleLog,"Query ".concat(this.myAddr.bech32)),t.next=40,E.getAccountInfo(this.myAddr);case 40:if(this.accInfo=t.sent,!this.accInfo.error){t.next=46;break}return this.log(this.consoleLog,this.accInfo.error),t.abrupt("return");case 46:this.log(this.consoleLog,this.accInfo.error),this.log(this.consoleLog,this.accInfo),this.sequence=this.accInfo.sequence,this.balance_available=W.format(h()(this.accInfo.balance/this.baseamount)),this.delegation=parseInt(this.balance_available),this.log(this.consoleLog,this.accInfo);case 52:return t.next=54,E.retrieveBalances([this.myAddr]);case 54:if(this.reply=t.sent,!this.accInfo.error){t.next=60;break}return this.log(this.consoleLog,this.reply.error),t.abrupt("return");case 60:this.log(this.consoleLog,this.reply),this.balance_delegated=W.format(h()(this.reply[0].delegationsTotal/this.baseamount)),this.balance_total=W.format(h()(this.reply[0].delegationsTotal/this.baseamount).add(h()(this.accInfo.balance/this.baseamount))),this.log(this.consoleLog,this.reply[0].delegationsTotal);case 64:return t.next=66,E.getRewards(this.validator,this.myAddr);case 66:if(this.reply=t.sent,!this.reply.error){t.next=72;break}return this.log(this.consoleLog,this.reply.error),t.abrupt("return");case 72:this.log(this.consoleLog,this.reply),this.rewards=W.format(h()(this.reply/this.baseamount));case 74:this.readytodelegate=!0;case 75:case"end":return t.stop()}}),t,this,[[0,6],[19,25]])})));function e(){return t.apply(this,arguments)}return e}(),delegate:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var e,a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(E.connected){t.next=3;break}return this.log(this.consoleLog,"Try connecting first.."),t.abrupt("return");case 3:if(null!==this.myAddr){t.next=6;break}return this.log(this.consoleLog,"Retrieve the device address first"),t.abrupt("return");case 6:return e={chainId:this.chainId,path:this.myAddr.path,bech32:this.myAddr.bech32,pk:this.myAddr.pk},t.next=9,E.txCreateDelegate(e,this.validator,this.delegation,"Delegation to ChainLayer.io");case 9:return a=t.sent,this.log(this.consoleLog,"Waiting for device to sign"),t.next=13,E.sign(a,e);case 13:return n=t.sent,this.log(this.consoleLog,"Broadcasting signed tx"),t.next=17,E.txSubmit(n);case 17:r=t.sent,this.log(this.consoleLog,r);case 19:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),withdraw:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var e,a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(E.connected){t.next=3;break}return this.log(this.consoleLog,"Try connecting first.."),t.abrupt("return");case 3:if(null!==this.myAddr){t.next=6;break}return this.log(this.consoleLog,"Retrieve the device address first"),t.abrupt("return");case 6:return e={chainId:this.chainId,path:this.myAddr.path,bech32:this.myAddr.bech32,pk:this.myAddr.pk},t.next=9,E.txCreateWithdrawl(e,this.validator,"Delegation to ChainLayer.io");case 9:return a=t.sent,this.log(this.consoleLog,"Waiting for device to sign"),t.next=13,E.sign(a,e);case 13:return n=t.sent,this.log(this.consoleLog,"Broadcasting signed tx"),t.next=17,E.txSubmit(n);case 17:r=t.sent,this.log(this.consoleLog,r);case 19:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},q=N,F=Object(g["a"])(q,R,U,!1,null,null,null),z=F.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"kavaLedger",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[a("img",{attrs:{src:"/img/logo-kava.svg",alt:"Kava",title:"Kava",width:"145",height:"46"}}),a("br"),""!=this.staked?a("span",[a("label",[t._v("Staked by ChainLayer: ")]),a("br"),a("span",[t._v(t._s(t.staked)+" "+t._s(t.denom)+" ("+t._s(t.stakedUSD)+")")]),a("br")]):t._e(),""!=this.price?a("span",[t._v("Price "+t._s(t.denom)+": $ "+t._s(t.price))]):t._e(),a("br"),t._m(0),t._v(" \n    "),t._m(1)])},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"button sg-popup-id-205 button_size_2 button_dark button_js",attrs:{href:""}},[a("span",{staticClass:"button_label"},[t._v("Details")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"button button_size_2 button_dark button_js",attrs:{href:"https://ledger.chainlayer.io",target:"_blank",rel:"noopener noreferrer"}},[a("span",{staticClass:"button_label"},[t._v("Delegate")])])}],M=a("14f7"),V=M.KavaDelegateTool,Q=new y.a,H=new V(Q);H.setNodeURL("https://kava-lcd.chainlayer.net");var J=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),G=new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0}),X={name:"KavaLedger",props:{restUrl:String},data:function(){return{myAddr:"",bech32:"",pk:"",path:"",accInfo:"",sequence:"",delegation:"",reply:"",balance_available:"",balance_delegated:"",balance_total:"",connected:!1,connecting:!1,readytodelegate:!1,debug:!1,denom:"",staked:"",stakedUSD:"",error:"",price:"",chainId:"",validator:"",rewards:"",hrp:""}},computed:{consoleStatus:function(){return this.consoleLog}},created:function(){this.init()},methods:{show:function(){this.$modal.show("kava-modal")},hide:function(){this.$modal.hide("kava-modal")},onlyNumber:function(t){var e=t.keyCode?t.keyCode:t.which;(e<48||e>57)&&46===e&&t.preventDefault()},log:function(t,e){this.debug&&console.log(e)},init:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.error="",this.myAddr=null,this.denom="Kava",this.hrp=H.getHrp(),this.readytodelegate=!1,this.baseamount=1e6,this.validator="kavavaloper1kgddca7qj96z0qcxr2c45z73cfl0c75p27tsg6",this.chainId="kava-2",this.log(this.consoleLog,"Trying to connect..."),t.next=11,H.retrieveValidators();case 11:return this.validators=t.sent,this.staked=G.format(h()(this.validators[this.validator].totalShares/this.baseamount)),t.next=15,H.getPrice();case 15:this.price=t.sent,this.stakedUSD=J.format(h()(this.validators[this.validator].totalShares/this.baseamount*this.price)),this.$emit("kavaStake",h()(this.validators[this.validator].totalShares/this.baseamount*this.price));case 18:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),tryConnect:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.connecting=!0,t.next=4,H.connect();case 4:t.next=12;break;case 6:return t.prev=6,t.t0=t["catch"](0),this.log(this.consoleLog,t.t0),this.connected=!1,this.connecting=!1,t.abrupt("return");case 12:if(this.connecting=!1,H.connected){t.next=17;break}return this.connected=!1,this.log(this.consoleLog,H.lastError),t.abrupt("return");case 17:return this.connected=!0,this.log(this.consoleLog,"Connected!"),t.prev=19,t.next=22,H.retrieveAddress(0,0);case 22:this.myAddr=t.sent,t.next=31;break;case 25:return t.prev=25,t.t1=t["catch"](19),this.log(this.consoleLog,t.t1),"Error: Unknown Status Code: 26628"==t.t1&&(this.error="Enter Pin on Ledger"),this.connected=!1,t.abrupt("return");case 31:return this.bech32=this.myAddr.bech32,this.pk=this.myAddr.pk,this.path=this.myAddr.path,this.log(this.consoleLog,this.myAddr),this.log(this.consoleLog,"Address  : ".concat(this.myAddr.bech32)),this.log(this.consoleLog,"PublicKey: ".concat(this.myAddr.pk)),this.log(this.consoleLog,"Query ".concat(this.myAddr.bech32)),t.next=40,H.getAccountInfo(this.myAddr);case 40:if(this.accInfo=t.sent,!this.accInfo.error){t.next=46;break}return this.log(this.consoleLog,this.accInfo.error),t.abrupt("return");case 46:this.log(this.consoleLog,this.accInfo.error),this.log(this.consoleLog,this.accInfo),this.sequence=this.accInfo.sequence,this.balance_available=G.format(h()(this.accInfo.balance/this.baseamount)),this.delegation=parseInt(this.balance_available),this.log(this.consoleLog,this.accInfo);case 52:return t.next=54,H.retrieveBalances([this.myAddr]);case 54:if(this.reply=t.sent,!this.accInfo.error){t.next=60;break}return this.log(this.consoleLog,this.reply.error),t.abrupt("return");case 60:this.log(this.consoleLog,this.reply),this.balance_delegated=G.format(h()(this.reply[0].delegationsTotal/this.baseamount)),this.balance_total=G.format(h()(this.reply[0].delegationsTotal/this.baseamount).add(h()(this.accInfo.balance/this.baseamount))),this.log(this.consoleLog,this.reply[0].delegationsTotal);case 64:return t.next=66,H.getRewards(this.validator,this.myAddr);case 66:if(this.reply=t.sent,!this.reply.error){t.next=72;break}return this.log(this.consoleLog,this.reply.error),t.abrupt("return");case 72:this.log(this.consoleLog,this.reply),this.rewards=G.format(h()(this.reply/this.baseamount));case 74:this.readytodelegate=!0;case 75:case"end":return t.stop()}}),t,this,[[0,6],[19,25]])})));function e(){return t.apply(this,arguments)}return e}(),delegate:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var e,a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(H.connected){t.next=3;break}return this.log(this.consoleLog,"Try connecting first.."),t.abrupt("return");case 3:if(null!==this.myAddr){t.next=6;break}return this.log(this.consoleLog,"Retrieve the device address first"),t.abrupt("return");case 6:return e={chainId:this.chainId,path:this.myAddr.path,bech32:this.myAddr.bech32,pk:this.myAddr.pk},t.next=9,H.txCreateDelegate(e,this.validator,this.delegation,"Delegation to ChainLayer.io");case 9:return a=t.sent,this.log(this.consoleLog,"Waiting for device to sign"),t.next=13,H.sign(a,e);case 13:return n=t.sent,this.log(this.consoleLog,"Broadcasting signed tx"),t.next=17,H.txSubmit(n);case 17:r=t.sent,this.log(this.consoleLog,r);case 19:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),withdraw:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var e,a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(H.connected){t.next=3;break}return this.log(this.consoleLog,"Try connecting first.."),t.abrupt("return");case 3:if(null!==this.myAddr){t.next=6;break}return this.log(this.consoleLog,"Retrieve the device address first"),t.abrupt("return");case 6:return e={chainId:this.chainId,path:this.myAddr.path,bech32:this.myAddr.bech32,pk:this.myAddr.pk},t.next=9,H.txCreateWithdrawl(e,this.validator,"Delegation to ChainLayer.io");case 9:return a=t.sent,this.log(this.consoleLog,"Waiting for device to sign"),t.next=13,H.sign(a,e);case 13:return n=t.sent,this.log(this.consoleLog,"Broadcasting signed tx"),t.next=17,H.txSubmit(n);case 17:r=t.sent,this.log(this.consoleLog,r);case 19:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},Y=X,Z=Object(g["a"])(Y,K,B,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"terraLedger",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[a("img",{attrs:{src:"/img/logo-terra.svg",alt:"Terra",title:"Terra",width:"145",height:"46"}}),a("br"),""!=this.staked?a("span",[a("label",[t._v("Staked by ChainLayer: ")]),a("br"),a("span",[t._v(t._s(t.staked)+" "+t._s(t.denom)+" ("+t._s(t.stakedUSD)+")")]),a("br")]):t._e(),""!=this.price?a("span",[t._v("Price "+t._s(t.denom)+": $ "+t._s(t.price))]):t._e(),a("br"),t._m(0),t._v(" \n        "),t._m(1)])},at=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"button sg-popup-id-143 button_size_2 button_dark button_js",attrs:{href:""}},[a("span",{staticClass:"button_label"},[t._v("Details")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"button button_size_2 button_dark button_js",attrs:{href:"https://ledger.chainlayer.io",target:"_blank",rel:"noopener noreferrer"}},[a("span",{staticClass:"button_label"},[t._v("Delegate")])])}],nt=a("14f7"),rt=nt.TerraDelegateTool,st=new y.a,it=new rt(st);it.setNodeURL("https://columbus-lcd.chainlayer.net");var ot=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),ct=new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0}),ht={name:"TerraLedger",props:{restUrl:String},data:function(){return{myAddr:"",bech32:"",pk:"",path:"",accInfo:"",sequence:"",delegation:"",reply:"",balance_available:"",balance_delegated:"",balance_total:"",connected:!1,connecting:!1,readytodelegate:!1,debug:!1,denom:"",staked:"",stakedUSD:"",error:"",price:"",chainId:"",validator:"",rewards:"",hrp:""}},computed:{consoleStatus:function(){return this.consoleLog}},created:function(){this.init()},methods:{show:function(){this.$modal.show("terra-modal")},hide:function(){this.$modal.hide("terra-modal")},onlyNumber:function(t){var e=t.keyCode?t.keyCode:t.which;(e<48||e>57)&&46===e&&t.preventDefault()},log:function(t,e){this.debug&&console.log(e)},init:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.error="",this.myAddr=null,this.denom="Luna",this.readytodelegate=!1,this.baseamount=1e6,this.validator="terravaloper1kgddca7qj96z0qcxr2c45z73cfl0c75paknc5e",this.chainId="columbus-2",this.log(this.consoleLog,"Trying to connect..."),t.next=10,it.retrieveValidators();case 10:return this.validators=t.sent,this.staked=ct.format(h()(this.validators[this.validator].totalShares/this.baseamount)),t.next=14,it.getPrice();case 14:this.price=t.sent,this.stakedUSD=ot.format(h()(this.validators[this.validator].totalShares/this.baseamount*this.price)),this.$emit("terraStake",h()(this.validators[this.validator].totalShares/this.baseamount*this.price));case 17:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),tryConnect:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.connecting=!0,t.next=4,it.connect();case 4:t.next=12;break;case 6:return t.prev=6,t.t0=t["catch"](0),this.log(this.consoleLog,t.t0),this.connected=!1,this.connecting=!1,t.abrupt("return");case 12:if(this.connecting=!1,it.connected){t.next=17;break}return this.connected=!1,this.log(this.consoleLog,it.lastError),t.abrupt("return");case 17:return this.connected=!0,this.log(this.consoleLog,"Connected!"),t.prev=19,t.next=22,it.retrieveAddress(0,0);case 22:this.myAddr=t.sent,t.next=31;break;case 25:return t.prev=25,t.t1=t["catch"](19),this.log(this.consoleLog,t.t1),"Error: Unknown Status Code: 26628"==t.t1&&(this.error="Enter Pin on Ledger"),this.connected=!1,t.abrupt("return");case 31:return this.bech32=this.myAddr.bech32,this.pk=this.myAddr.pk,this.path=this.myAddr.path,this.log(this.consoleLog,this.myAddr),this.log(this.consoleLog,"Address  : ".concat(this.myAddr.bech32)),this.log(this.consoleLog,"PublicKey: ".concat(this.myAddr.pk)),this.log(this.consoleLog,"Query ".concat(this.myAddr.bech32)),t.next=40,it.getAccountInfo(this.myAddr);case 40:if(this.accInfo=t.sent,!this.accInfo.error){t.next=46;break}return this.log(this.consoleLog,this.accInfo.error),t.abrupt("return");case 46:this.log(this.consoleLog,this.accInfo.error),this.log(this.consoleLog,this.accInfo),this.sequence=this.accInfo.sequence,this.balance_available=ct.format(h()(this.accInfo.balance/this.baseamount)),this.delegation=parseInt(this.balance_available),this.log(this.consoleLog,this.accInfo);case 52:return t.next=54,it.retrieveBalances([this.myAddr]);case 54:if(this.reply=t.sent,!this.accInfo.error){t.next=60;break}return this.log(this.consoleLog,this.reply.error),t.abrupt("return");case 60:this.log(this.consoleLog,this.reply),this.balance_delegated=ct.format(h()(this.reply[0].delegationsTotal/this.baseamount)),this.balance_total=ct.format(h()(this.reply[0].delegationsTotal/this.baseamount).add(h()(this.accInfo.balance/this.baseamount))),this.log(this.consoleLog,this.reply[0].delegationsTotal);case 64:this.readytodelegate=!0;case 65:case"end":return t.stop()}}),t,this,[[0,6],[19,25]])})));function e(){return t.apply(this,arguments)}return e}(),delegate:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var e,a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(it.connected){t.next=3;break}return this.log(this.consoleLog,"Try connecting first.."),t.abrupt("return");case 3:if(null!==this.myAddr){t.next=6;break}return this.log(this.consoleLog,"Retrieve the device address first"),t.abrupt("return");case 6:return e={chainId:this.chainId,path:this.myAddr.path,bech32:this.myAddr.bech32,pk:this.myAddr.pk},t.next=9,it.txCreateDelegate(e,this.validator,this.delegation,"Delegation to ChainLayer.io");case 9:return a=t.sent,this.log(this.consoleLog,"Waiting for device to sign"),t.next=13,it.sign(a,e);case 13:return n=t.sent,this.log(this.consoleLog,"Broadcasting signed tx"),t.next=17,it.txSubmit(n);case 17:r=t.sent,this.log(this.consoleLog,r);case 19:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},lt=ht,dt=Object(g["a"])(lt,et,at,!1,null,null,null),ut=dt.exports,gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wanchainWidget",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[a("img",{attrs:{src:"/img/logo-wanchain.png",alt:"Wanchain",title:"Wanchain",width:"169",height:"46"}}),a("br"),""!=this.staked?a("span",[a("label",[t._v("Staked by ChainLayer: ")]),a("br"),a("span",[t._v(t._s(t.staked)+" "+t._s(t.denom)+" ("+t._s(t.stakedUSD)+")")]),a("br")]):t._e(),""!=this.price?a("span",[t._v("Price "+t._s(t.denom)+": $ "+t._s(t.price))]):t._e(),a("br"),t._m(0),t._v(" \n    "),t._m(1)])},pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"button sg-popup-id-183 button_size_2 button_dark button_js",attrs:{href:""}},[a("span",{staticClass:"button_label"},[t._v("Details")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"button button_size_2 button_dark button_js",attrs:{href:"https://mywanwallet.io/#staking",target:"_blank",rel:"noopener noreferrer"}},[a("span",{staticClass:"button_label"},[t._v("Delegate")])])}],mt=a("bc3a"),bt=a.n(mt),ft={name:"WanchainWidget",props:{restUrl:String},data:function(){return{consoleLog:[],myAddr:"",bech32:"",pk:"",path:"",accInfo:"",sequence:"",delegation:"",reply:"",balance_available:"",balance_delegated:"",balance_total:"",connected:!1,connecting:!1,readytodelegate:!1,debug:!1,denom:"",staked:"",stakedUSD:"",error:"",price:"",chainId:"",validator:"",rewards:"",hrp:""}},computed:{consoleStatus:function(){return this.consoleLog}},created:function(){this.tryConnect()},methods:{onlyNumber:function(t){var e=t.keyCode?t.keyCode:t.which;(e<48||e>57)&&46===e&&t.preventDefault()},log:function(t,e){this.debug?t.push({index:t.length,msg:e}):console.log(e)},tryConnect:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.error="",this.consoleLog=[],this.denom="Wan",this.baseamount=1e18,this.log(this.consoleLog,"Trying to connect..."),e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),a=new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0}),t.next=9,this.getStakingBalance();case 9:return this.validators=t.sent,this.staked=a.format(h()(this.validators/this.baseamount)),t.next=13,this.getPrice();case 13:this.price=t.sent,this.stakedUSD=e.format(h()(this.validators/this.baseamount*this.price)),this.$emit("wanchainStake",h()(this.validators/this.baseamount*this.price));case 16:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getPrice:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="https://min-api.cryptocompare.com/data/price?fsym=WAN&tsyms=USD",t.abrupt("return",bt.a.get(e).then((function(t){return t.data.USD})));case 2:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),getStakingBalance:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="https://mywanwallet.nl/chainlayerstake.json",t.abrupt("return",bt.a.get(e).then((function(t){var e=parseInt(t.data.amount),a=0;for(a=0;a<t.data.clients.length;a++)e+=parseInt(t.data.clients[a].amount);for(a=0;a<t.data.partners.length;a++)e+=parseInt(t.data.partners[a].amount);return e})));case 2:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}},vt=ft,kt=(a("2f0f"),Object(g["a"])(vt,gt,pt,!1,null,"1c590c5e",null)),yt=kt.exports,_t={name:"app",components:{TotalStake:m,IrisLedger:j,CosmosLedger:z,KavaLedger:tt,TerraLedger:ut,WanchainWidget:yt},data:function(){return{cosmosStake:h()(0),terraStake:h()(0),irisStake:h()(0),wanchainStake:h()(0),kavaStake:h()(0)}},methods:{updateCosmos:function(t){this.cosmosStake=t},updateKava:function(t){this.kavaStake=t},updateTerra:function(t){this.terraStake=t},updateIris:function(t){this.irisStake=t},updateWanchain:function(t){this.wanchainStake=t}}},St=_t,wt=(a("034f"),Object(g["a"])(St,r,s,!1,null,null,null)),xt=wt.exports,Lt=a("1881"),It=a.n(Lt);n["a"].use(It.a),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(xt)}}).$mount("#app")},"64a9":function(t,e,a){},"7c4d":function(t,e,a){}});
//# sourceMappingURL=app.f8241393.js.map