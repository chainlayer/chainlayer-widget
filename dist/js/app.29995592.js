(function(e){function t(t){for(var a,i,o=t[0],c=t[1],l=t[2],d=0,u=[];d<o.length;d++)i=o[d],r[i]&&u.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);h&&h(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var h=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"vertical-align":"top"},attrs:{id:"app"}},[n("h3",[e._v("Validating Networks")]),n("CosmosLedger",{attrs:{msg:"Delegation"},on:{cosmosStake:e.updateCosmos}}),n("TerraLedger",{attrs:{msg:"Delegation"},on:{terraStake:e.updateTerra}}),n("IrisLedger",{attrs:{msg:"Delegation"},on:{irisStake:e.updateIris}}),n("TezosWidget",{attrs:{msg:"Delegation"},on:{tezosStake:e.updateTezos}}),n("hr"),n("TotalStake",{attrs:{tezosStake:e.tezosStake,irisStake:e.irisStake,terraStake:e.terraStake,cosmosStake:e.cosmosStake}}),n("hr"),n("h3",[e._v("Testnet")]),e._m(0),e._m(1),e._m(2),n("hr"),n("h3",[e._v("Investigating")]),e._m(3),e._m(4)],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wanchainWidget",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[n("img",{attrs:{src:"/img/logo-wanchain.png",alt:"Wanchain",title:"wWnchain",height:"46"}}),n("br")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"regenWidget",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[n("img",{attrs:{src:"/img/logo-regen.png",alt:"Regen",title:"Regen",height:"46"}}),n("br")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"kavaWidget",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[n("img",{attrs:{src:"/img/logo-kava.svg",alt:"Kava",title:"Kava",height:"40"}}),n("br")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"polkadotWidget",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[n("img",{attrs:{src:"/img/logo-polkadot.svg",alt:"Polkadot",title:"Polkadot",height:"46"}}),n("br")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"emoneyWidget",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[n("img",{attrs:{src:"/img/logo-emoney.png",alt:"e-Money",title:"e-Money",height:"46"}}),n("br")])}],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"totalStake",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[n("h3",[e._v("Currently Trusted to ChainLayer: "+e._s(e.totalstake))])])},o=[],c=n("9dcd"),l=n.n(c),h=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),d={name:"Results",props:{tezosStake:{type:Object,default:l()(0)},irisStake:{type:Object,default:l()(0)},terraStake:{type:Object,default:l()(0)},cosmosStake:{type:Object,default:l()(0)}},data:function(){return{totalstake:l()(0)}},watch:{tezosStake:function(){this.totalstake=l()(this.tezosStake.add(this.irisStake).add(this.terraStake).add(this.cosmosStake)),this.totalstake=h.format(this.totalstake)},irisStake:function(){this.totalstake=l()(this.tezosStake.add(this.irisStake).add(this.terraStake).add(this.cosmosStake)),this.totalstake=h.format(this.totalstake)},terraStake:function(){this.totalstake=l()(this.tezosStake.add(this.irisStake).add(this.terraStake).add(this.cosmosStake)),this.totalstake=h.format(this.totalstake)},cosmosStake:function(){this.totalstake=l()(this.tezosStake.add(this.irisStake).add(this.terraStake).add(this.cosmosStake)),this.totalstake=h.format(this.totalstake)}}},u=d,g=n("2877"),p=Object(g["a"])(u,i,o,!1,null,null,null),b=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"irisLedger",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[n("img",{attrs:{src:"/img/logo-irisnet.svg",alt:"IrisNet",title:"IrisNet",width:"145",height:"46"}}),n("br"),""!=this.staked?n("span",[n("label",[e._v("Staked by ChainLayer: ")]),n("br"),n("span",[e._v(e._s(e.staked)+" "+e._s(e.denom)+" ("+e._s(e.stakedUSD)+")")]),n("br")]):e._e(),""!=this.price?n("label",[e._v("Price "+e._s(e.denom)+": ")]):e._e(),n("span",[e._v("$ "+e._s(e.price))]),n("br"),n("button",{on:{click:e.show}},[e._v("Details")]),n("modal",{attrs:{name:"iris-modal",width:400,draggable:!0}},[0==this.connecting&&0==this.connected?n("span",[n("button",{on:{click:e.tryConnect}},[e._v("Connect Ledger")]),n("br")]):e._e(),1==this.connecting?n("span",[e._v("looking for ledger"),n("br"),n("img",{attrs:{src:"/Spinner.gif",height:"93",width:"93"}})]):e._e(),""!=this.error?n("span",[e._v(e._s(e.error))]):e._e(),n("br"),""!=this.bech32?n("span",[n("b",[e._v("Your information")])]):e._e(),n("br"),""!=this.bech32?n("label",[e._v("Address: ")]):e._e(),""!=this.bech32?n("span",[e._v(e._s(e.bech32))]):e._e(),n("br"),""!=this.balance_available?n("label",[e._v("Available Balance: ")]):e._e(),""!=this.balance_available?n("span",[e._v(e._s(e.balance_available)+" "+e._s(e.denom))]):e._e(),n("br"),""!=this.balance_delegated?n("label",[e._v("Delegated Balance: ")]):e._e(),""!=this.balance_delegated?n("span",[e._v(e._s(e.balance_delegated)+" "+e._s(e.denom))]):e._e(),n("br"),""!=this.balance_total?n("label",[e._v("Total Balance: ")]):e._e(),""!=this.balance_total?n("span",[e._v(e._s(e.balance_total)+" "+e._s(e.denom))]):e._e(),n("br"),""!=this.rewards?n("label",[e._v("Rewards: ")]):e._e(),""!=this.rewards?n("span",[e._v(e._s(e.rewards)+" "+e._s(e.denom))]):e._e(),n("br"),this.readytodelegate?n("label",[e._v("Delegation amount in "+e._s(e.denom)+": ")]):e._e(),this.readytodelegate?n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.delegation,expression:"delegation",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.delegation},on:{keypress:e.onlyNumber,input:function(t){t.target.composing||(e.delegation=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}):e._e(),n("br"),n("br"),this.readytodelegate?n("button",{on:{click:e.delegate}},[e._v("Delegate")]):e._e(),e._v(" \n        "),this.readytodelegate?n("button",{on:{click:e.tryConnect}},[e._v("Refresh")]):e._e(),e._v(" \n        "),this.readytodelegate?n("button",{on:{click:e.hide}},[e._v("Done")]):e._e(),e._v(" \n    ")])],1)},v=[],f=(n("96cf"),n("3b8d")),_=n("7fe4"),y=n.n(_),k=n("14f7"),w=k.IrisDelegateTool,S=new y.a,x=new w(S);x.setNodeURL("https://192.168.2.101");var L=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),I=new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:3,maximumFractionDigits:3}),A={name:"IrisLedger",props:{restUrl:String},data:function(){return{myAddr:"",bech32:"",pk:"",path:"",accInfo:"",sequence:"",delegation:"",reply:"",balance_available:"",balance_delegated:"",balance_total:"",connected:!1,connecting:!1,readytodelegate:!1,debug:!1,denom:"",staked:"",stakedUSD:"",error:"",price:"",chainId:"",validator:"",rewards:"",hrp:""}},computed:{consoleStatus:function(){return this.consoleLog}},created:function(){this.init()},methods:{show:function(){this.$modal.show("iris-modal")},hide:function(){this.$modal.hide("iris-modal")},onlyNumber:function(e){var t=e.keyCode?e.keyCode:e.which;(t<48||t>57)&&46===t&&e.preventDefault()},log:function(e,t){this.debug&&console.log(t)},init:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.error="",this.myAddr=null,this.denom="Iris",this.hrp=x.getHrp(),this.readytodelegate=!1,this.baseamount=1e18,this.validator="iva1kgddca7qj96z0qcxr2c45z73cfl0c75pmw0meu",this.chainId="irishub",this.log(this.consoleLog,"Trying to connect..."),e.next=11,x.retrieveValidators();case 11:return this.validators=e.sent,this.staked=I.format(l()(this.validators[this.validator].totalShares)),e.next=15,x.getPrice();case 15:this.price=e.sent,this.stakedUSD=L.format(l()(this.validators[this.validator].totalShares*this.price)),this.$emit("irisStake",l()(this.validators[this.validator].totalShares*this.price));case 18:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),tryConnect:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.connecting=!0,e.next=4,x.connect();case 4:e.next=12;break;case 6:return e.prev=6,e.t0=e["catch"](0),this.log(this.consoleLog,e.t0),this.connected=!1,this.connecting=!1,e.abrupt("return");case 12:if(this.connecting=!1,x.connected){e.next=17;break}return this.connected=!1,this.log(this.consoleLog,x.lastError),e.abrupt("return");case 17:return this.connected=!0,this.log(this.consoleLog,"Connected!"),e.prev=19,e.next=22,x.retrieveAddress(0,0);case 22:this.myAddr=e.sent,e.next=31;break;case 25:return e.prev=25,e.t1=e["catch"](19),this.log(this.consoleLog,e.t1),"Error: Unknown Status Code: 26628"==e.t1&&(this.error="Enter Pin on Ledger"),this.connected=!1,e.abrupt("return");case 31:return this.bech32=this.myAddr.bech32,this.pk=this.myAddr.pk,this.path=this.myAddr.path,this.log(this.consoleLog,this.myAddr),this.log(this.consoleLog,"Address  : ".concat(this.myAddr.bech32)),this.log(this.consoleLog,"PublicKey: ".concat(this.myAddr.pk)),this.log(this.consoleLog,"Query ".concat(this.myAddr.bech32)),e.next=40,x.getAccountInfo(this.myAddr);case 40:if(this.accInfo=e.sent,!this.accInfo.error){e.next=46;break}return this.log(this.consoleLog,this.accInfo.error),e.abrupt("return");case 46:this.log(this.consoleLog,this.accInfo.error),this.log(this.consoleLog,this.accInfo),this.sequence=this.accInfo.sequence,this.balance_available=I.format(l()(this.accInfo.balance/this.baseamount)),this.delegation=parseInt(this.balance_available),this.log(this.consoleLog,this.accInfo);case 52:return e.next=54,x.retrieveBalances([this.myAddr]);case 54:if(this.reply=e.sent,!this.accInfo.error){e.next=60;break}return this.log(this.consoleLog,this.reply.error),e.abrupt("return");case 60:this.log(this.consoleLog,this.reply),this.balance_delegated=I.format(l()(this.reply[0].delegationsTotal)),this.balance_total=I.format(l()(this.reply[0].delegationsTotal).add(l()(this.accInfo.balance/this.baseamount))),this.log(this.consoleLog,this.reply[0].delegationsTotal);case 64:this.readytodelegate=!0;case 65:case"end":return e.stop()}},e,this,[[0,6],[19,25]])}));function t(){return e.apply(this,arguments)}return t}(),delegate:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t,n,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(x.connected){e.next=3;break}return this.log(this.consoleLog,"Try connecting first.."),e.abrupt("return");case 3:if(null!==this.myAddr){e.next=6;break}return this.log(this.consoleLog,"Retrieve the device address first"),e.abrupt("return");case 6:return t={chainId:this.chainId,path:this.myAddr.path,bech32:this.myAddr.bech32,pk:this.myAddr.pk},e.next=9,x.txCreateDelegate(t,this.validator,this.delegation,"Delegation to ChainLayer.io");case 9:return n=e.sent,this.log(this.consoleLog,"Waiting for device to sign"),e.next=13,x.sign(n,t);case 13:return a=e.sent,this.log(this.consoleLog,"Broadcasting signed tx"),e.next=17,x.txSubmit(a);case 17:r=e.sent,this.log(this.consoleLog,r);case 19:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},C=A,D=Object(g["a"])(C,m,v,!1,null,null,null),T=D.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cosmosLedger",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[n("img",{attrs:{src:"/img/logo-cosmos.svg",alt:"Cosmos",title:"Cosmos",width:"145",height:"46"}}),n("br"),""!=this.staked?n("span",[n("label",[e._v("Staked by ChainLayer: ")]),n("span",[e._v(e._s(e.staked)+" "+e._s(e.denom)+" ("+e._s(e.stakedUSD)+")")]),n("br")]):e._e(),""!=this.price?n("span",[e._v("Price "+e._s(e.denom)+": $ "+e._s(e.price))]):e._e(),n("br"),n("button",{on:{click:e.show}},[e._v("Details")]),n("modal",{attrs:{name:"cosmos-modal",width:400,draggable:!0}},[0==this.connecting&&0==this.connected?n("span",[n("button",{on:{click:e.tryConnect}},[e._v("Connect Ledger")]),n("br")]):e._e(),1==this.connecting?n("span",[e._v("looking for ledger"),n("br"),n("img",{attrs:{src:"/Spinner.gif",height:"93",width:"93"}})]):e._e(),""!=this.error?n("span",[e._v(e._s(e.error))]):e._e(),n("br"),""!=this.bech32?n("span",[n("b",[e._v("Your information")])]):e._e(),n("br"),""!=this.bech32?n("label",[e._v("Address: ")]):e._e(),""!=this.bech32?n("span",[e._v(e._s(e.bech32))]):e._e(),n("br"),""!=this.balance_available?n("label",[e._v("Available Balance: ")]):e._e(),""!=this.balance_available?n("span",[e._v(e._s(e.balance_available)+" "+e._s(e.denom))]):e._e(),n("br"),""!=this.balance_delegated?n("label",[e._v("Delegated Balance: ")]):e._e(),""!=this.balance_delegated?n("span",[e._v(e._s(e.balance_delegated)+" "+e._s(e.denom))]):e._e(),n("br"),""!=this.balance_total?n("label",[e._v("Total Balance: ")]):e._e(),""!=this.balance_total?n("span",[e._v(e._s(e.balance_total)+" "+e._s(e.denom))]):e._e(),n("br"),""!=this.rewards?n("label",[e._v("Rewards: ")]):e._e(),""!=this.rewards?n("span",[e._v(e._s(e.rewards)+" "+e._s(e.denom))]):e._e(),n("br"),this.readytodelegate?n("label",[e._v("Delegation amount in "+e._s(e.denom)+": ")]):e._e(),this.readytodelegate?n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.delegation,expression:"delegation",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.delegation},on:{keypress:e.onlyNumber,input:function(t){t.target.composing||(e.delegation=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}):e._e(),n("br"),n("br"),this.readytodelegate?n("button",{on:{click:e.delegate}},[e._v("Delegate")]):e._e(),e._v(" \n        "),this.readytodelegate?n("button",{on:{click:e.withdraw}},[e._v("Withdraw")]):e._e(),e._v(" \n        "),this.readytodelegate?n("button",{on:{click:e.tryConnect}},[e._v("Refresh")]):e._e(),e._v(" \n        "),this.readytodelegate?n("button",{on:{click:e.hide}},[e._v("Done")]):e._e()])],1)},U=[],j=n("14f7"),O=j.CosmosDelegateTool,z=new y.a,$=new O(z);$.setNodeURL("https://stargate.cosmos.network");var P=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),N=new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:3,maximumFractionDigits:3}),E={name:"CosmosLedger",props:{restUrl:String},data:function(){return{myAddr:"",bech32:"",pk:"",path:"",accInfo:"",sequence:"",delegation:"",reply:"",balance_available:"",balance_delegated:"",balance_total:"",connected:!1,connecting:!1,readytodelegate:!1,debug:!1,denom:"",staked:"",stakedUSD:"",error:"",price:"",chainId:"",validator:"",rewards:"",hrp:""}},computed:{consoleStatus:function(){return this.consoleLog}},created:function(){this.init()},methods:{show:function(){this.$modal.show("cosmos-modal")},hide:function(){this.$modal.hide("cosmos-modal")},onlyNumber:function(e){var t=e.keyCode?e.keyCode:e.which;(t<48||t>57)&&46===t&&e.preventDefault()},log:function(e,t){this.debug&&console.log(t)},init:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.error="",this.myAddr=null,this.denom="Atom",this.hrp=$.getHrp(),this.readytodelegate=!1,this.baseamount=1e6,this.validator="cosmosvaloper1kgddca7qj96z0qcxr2c45z73cfl0c75p7f3s2e",this.chainId="cosmoshub-2",this.log(this.consoleLog,"Trying to connect..."),e.next=11,$.retrieveValidators();case 11:return this.validators=e.sent,this.staked=N.format(l()(this.validators[this.validator].totalShares/this.baseamount)),e.next=15,$.getPrice();case 15:this.price=e.sent,this.stakedUSD=P.format(l()(this.validators[this.validator].totalShares/this.baseamount*this.price)),this.$emit("cosmosStake",l()(this.validators[this.validator].totalShares/this.baseamount*this.price));case 18:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),tryConnect:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.connecting=!0,e.next=4,$.connect();case 4:e.next=12;break;case 6:return e.prev=6,e.t0=e["catch"](0),this.log(this.consoleLog,e.t0),this.connected=!1,this.connecting=!1,e.abrupt("return");case 12:if(this.connecting=!1,$.connected){e.next=17;break}return this.connected=!1,this.log(this.consoleLog,$.lastError),e.abrupt("return");case 17:return this.connected=!0,this.log(this.consoleLog,"Connected!"),e.prev=19,e.next=22,$.retrieveAddress(0,0);case 22:this.myAddr=e.sent,e.next=31;break;case 25:return e.prev=25,e.t1=e["catch"](19),this.log(this.consoleLog,e.t1),"Error: Unknown Status Code: 26628"==e.t1&&(this.error="Enter Pin on Ledger"),this.connected=!1,e.abrupt("return");case 31:return this.bech32=this.myAddr.bech32,this.pk=this.myAddr.pk,this.path=this.myAddr.path,this.log(this.consoleLog,this.myAddr),this.log(this.consoleLog,"Address  : ".concat(this.myAddr.bech32)),this.log(this.consoleLog,"PublicKey: ".concat(this.myAddr.pk)),this.log(this.consoleLog,"Query ".concat(this.myAddr.bech32)),e.next=40,$.getAccountInfo(this.myAddr);case 40:if(this.accInfo=e.sent,!this.accInfo.error){e.next=46;break}return this.log(this.consoleLog,this.accInfo.error),e.abrupt("return");case 46:this.log(this.consoleLog,this.accInfo.error),this.log(this.consoleLog,this.accInfo),this.sequence=this.accInfo.sequence,this.balance_available=N.format(l()(this.accInfo.balance/this.baseamount)),this.delegation=parseInt(this.balance_available),this.log(this.consoleLog,this.accInfo);case 52:return e.next=54,$.retrieveBalances([this.myAddr]);case 54:if(this.reply=e.sent,!this.accInfo.error){e.next=60;break}return this.log(this.consoleLog,this.reply.error),e.abrupt("return");case 60:this.log(this.consoleLog,this.reply),this.balance_delegated=N.format(l()(this.reply[0].delegationsTotal/this.baseamount)),this.balance_total=N.format(l()(this.reply[0].delegationsTotal/this.baseamount).add(l()(this.accInfo.balance/this.baseamount))),this.log(this.consoleLog,this.reply[0].delegationsTotal);case 64:return e.next=66,$.getRewards(this.validator,this.myAddr);case 66:if(this.reply=e.sent,!this.reply.error){e.next=72;break}return this.log(this.consoleLog,this.reply.error),e.abrupt("return");case 72:this.log(this.consoleLog,this.reply),this.rewards=N.format(l()(this.reply/this.baseamount));case 74:this.readytodelegate=!0;case 75:case"end":return e.stop()}},e,this,[[0,6],[19,25]])}));function t(){return e.apply(this,arguments)}return t}(),delegate:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t,n,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if($.connected){e.next=3;break}return this.log(this.consoleLog,"Try connecting first.."),e.abrupt("return");case 3:if(null!==this.myAddr){e.next=6;break}return this.log(this.consoleLog,"Retrieve the device address first"),e.abrupt("return");case 6:return t={chainId:this.chainId,path:this.myAddr.path,bech32:this.myAddr.bech32,pk:this.myAddr.pk},e.next=9,$.txCreateDelegate(t,this.validator,this.delegation,"Delegation to ChainLayer.io");case 9:return n=e.sent,this.log(this.consoleLog,"Waiting for device to sign"),e.next=13,$.sign(n,t);case 13:return a=e.sent,this.log(this.consoleLog,"Broadcasting signed tx"),e.next=17,$.txSubmit(a);case 17:r=e.sent,this.log(this.consoleLog,r);case 19:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),withdraw:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t,n,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if($.connected){e.next=3;break}return this.log(this.consoleLog,"Try connecting first.."),e.abrupt("return");case 3:if(null!==this.myAddr){e.next=6;break}return this.log(this.consoleLog,"Retrieve the device address first"),e.abrupt("return");case 6:return t={chainId:this.chainId,path:this.myAddr.path,bech32:this.myAddr.bech32,pk:this.myAddr.pk},e.next=9,$.txCreateWithdrawl(t,this.validator,"Delegation to ChainLayer.io");case 9:return n=e.sent,this.log(this.consoleLog,"Waiting for device to sign"),e.next=13,$.sign(n,t);case 13:return a=e.sent,this.log(this.consoleLog,"Broadcasting signed tx"),e.next=17,$.txSubmit(a);case 17:r=e.sent,this.log(this.consoleLog,r);case 19:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},W=E,B=Object(g["a"])(W,R,U,!1,null,null,null),F=B.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"terraLedger",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[n("img",{attrs:{src:"/img/logo-terra.svg",alt:"Terra",title:"Terra",width:"145",height:"46"}}),n("br"),""!=this.staked?n("span",[n("label",[e._v("Staked by ChainLayer: ")]),n("br"),n("span",[e._v(e._s(e.staked)+" "+e._s(e.denom)+" ("+e._s(e.stakedUSD)+")")]),n("br")]):e._e(),""!=this.price?n("label",[e._v("Price "+e._s(e.denom)+": ")]):e._e(),n("span",[e._v("$ "+e._s(e.price))]),n("br"),n("button",{on:{click:e.show}},[e._v("Details")]),n("modal",{attrs:{name:"terra-modal",width:400,draggable:!0}},[0==this.connecting&&0==this.connected?n("span",[n("button",{on:{click:e.tryConnect}},[e._v("Connect Ledger")]),n("br")]):e._e(),1==this.connecting?n("span",[e._v("looking for ledger"),n("br"),n("img",{attrs:{src:"/Spinner.gif",height:"93",width:"93"}})]):e._e(),""!=this.error?n("span",[e._v(e._s(e.error))]):e._e(),n("br"),""!=this.bech32?n("span",[n("b",[e._v("Your information")])]):e._e(),n("br"),""!=this.bech32?n("label",[e._v("Address: ")]):e._e(),""!=this.bech32?n("span",[e._v(e._s(e.bech32))]):e._e(),n("br"),""!=this.balance_available?n("label",[e._v("Available Balance: ")]):e._e(),""!=this.balance_available?n("span",[e._v(e._s(e.balance_available)+" "+e._s(e.denom))]):e._e(),n("br"),""!=this.balance_delegated?n("label",[e._v("Delegated Balance: ")]):e._e(),""!=this.balance_delegated?n("span",[e._v(e._s(e.balance_delegated)+" "+e._s(e.denom))]):e._e(),n("br"),""!=this.balance_total?n("label",[e._v("Total Balance: ")]):e._e(),""!=this.balance_total?n("span",[e._v(e._s(e.balance_total)+" "+e._s(e.denom))]):e._e(),n("br"),""!=this.rewards?n("label",[e._v("Rewards: ")]):e._e(),""!=this.rewards?n("span",[e._v(e._s(e.rewards)+" "+e._s(e.denom))]):e._e(),n("br"),this.readytodelegate?n("label",[e._v("Delegation amount in "+e._s(e.denom)+": ")]):e._e(),this.readytodelegate?n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.delegation,expression:"delegation",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.delegation},on:{keypress:e.onlyNumber,input:function(t){t.target.composing||(e.delegation=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}):e._e(),n("br"),n("br"),this.readytodelegate?n("button",{on:{click:e.delegate}},[e._v("Delegate")]):e._e(),e._v(" \n        "),this.readytodelegate?n("button",{on:{click:e.tryConnect}},[e._v("Refresh")]):e._e(),e._v(" \n        "),this.readytodelegate?n("button",{on:{click:e.hide}},[e._v("Done")]):e._e()])],1)},M=[],K=n("14f7"),V=K.TerraDelegateTool,Q=new y.a,H=new V(Q);H.setNodeURL("https://192.168.2.201");var Y=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),J=new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:3,maximumFractionDigits:3}),X={name:"TerraLedger",props:{restUrl:String},data:function(){return{myAddr:"",bech32:"",pk:"",path:"",accInfo:"",sequence:"",delegation:"",reply:"",balance_available:"",balance_delegated:"",balance_total:"",connected:!1,connecting:!1,readytodelegate:!1,debug:!1,denom:"",staked:"",stakedUSD:"",error:"",price:"",chainId:"",validator:"",rewards:"",hrp:""}},computed:{consoleStatus:function(){return this.consoleLog}},created:function(){this.init()},methods:{show:function(){this.$modal.show("terra-modal")},hide:function(){this.$modal.hide("terra-modal")},onlyNumber:function(e){var t=e.keyCode?e.keyCode:e.which;(t<48||t>57)&&46===t&&e.preventDefault()},log:function(e,t){this.debug&&console.log(t)},init:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.error="",this.myAddr=null,this.denom="Luna",this.readytodelegate=!1,this.baseamount=1e6,this.validator="terravaloper1kgddca7qj96z0qcxr2c45z73cfl0c75paknc5e",this.chainId="columbus-2",this.log(this.consoleLog,"Trying to connect..."),e.next=10,H.retrieveValidators();case 10:return this.validators=e.sent,this.staked=J.format(l()(this.validators[this.validator].totalShares/this.baseamount)),e.next=14,H.getPrice();case 14:this.price=e.sent,this.stakedUSD=Y.format(l()(this.validators[this.validator].totalShares/this.baseamount*this.price)),this.$emit("terraStake",l()(this.validators[this.validator].totalShares/this.baseamount*this.price));case 17:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),tryConnect:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.connecting=!0,e.next=4,H.connect();case 4:e.next=12;break;case 6:return e.prev=6,e.t0=e["catch"](0),this.log(this.consoleLog,e.t0),this.connected=!1,this.connecting=!1,e.abrupt("return");case 12:if(this.connecting=!1,H.connected){e.next=17;break}return this.connected=!1,this.log(this.consoleLog,H.lastError),e.abrupt("return");case 17:return this.connected=!0,this.log(this.consoleLog,"Connected!"),e.prev=19,e.next=22,H.retrieveAddress(0,0);case 22:this.myAddr=e.sent,e.next=31;break;case 25:return e.prev=25,e.t1=e["catch"](19),this.log(this.consoleLog,e.t1),"Error: Unknown Status Code: 26628"==e.t1&&(this.error="Enter Pin on Ledger"),this.connected=!1,e.abrupt("return");case 31:return this.bech32=this.myAddr.bech32,this.pk=this.myAddr.pk,this.path=this.myAddr.path,this.log(this.consoleLog,this.myAddr),this.log(this.consoleLog,"Address  : ".concat(this.myAddr.bech32)),this.log(this.consoleLog,"PublicKey: ".concat(this.myAddr.pk)),this.log(this.consoleLog,"Query ".concat(this.myAddr.bech32)),e.next=40,H.getAccountInfo(this.myAddr);case 40:if(this.accInfo=e.sent,!this.accInfo.error){e.next=46;break}return this.log(this.consoleLog,this.accInfo.error),e.abrupt("return");case 46:this.log(this.consoleLog,this.accInfo.error),this.log(this.consoleLog,this.accInfo),this.sequence=this.accInfo.sequence,this.balance_available=J.format(l()(this.accInfo.balance/this.baseamount)),this.delegation=parseInt(this.balance_available),this.log(this.consoleLog,this.accInfo);case 52:return e.next=54,H.retrieveBalances([this.myAddr]);case 54:if(this.reply=e.sent,!this.accInfo.error){e.next=60;break}return this.log(this.consoleLog,this.reply.error),e.abrupt("return");case 60:this.log(this.consoleLog,this.reply),this.balance_delegated=J.format(l()(this.reply[0].delegationsTotal/this.baseamount)),this.balance_total=J.format(l()(this.reply[0].delegationsTotal/this.baseamount).add(l()(this.accInfo.balance/this.baseamount))),this.log(this.consoleLog,this.reply[0].delegationsTotal);case 64:this.readytodelegate=!0;case 65:case"end":return e.stop()}},e,this,[[0,6],[19,25]])}));function t(){return e.apply(this,arguments)}return t}(),delegate:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t,n,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(H.connected){e.next=3;break}return this.log(this.consoleLog,"Try connecting first.."),e.abrupt("return");case 3:if(null!==this.myAddr){e.next=6;break}return this.log(this.consoleLog,"Retrieve the device address first"),e.abrupt("return");case 6:return t={chainId:this.chainId,path:this.myAddr.path,bech32:this.myAddr.bech32,pk:this.myAddr.pk},e.next=9,H.txCreateDelegate(t,this.validator,this.delegation,"Delegation to ChainLayer.io");case 9:return n=e.sent,this.log(this.consoleLog,"Waiting for device to sign"),e.next=13,H.sign(n,t);case 13:return a=e.sent,this.log(this.consoleLog,"Broadcasting signed tx"),e.next=17,H.txSubmit(a);case 17:r=e.sent,this.log(this.consoleLog,r);case 19:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},Z=X,G=Object(g["a"])(Z,q,M,!1,null,null,null),ee=G.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tezosWidget",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[n("img",{attrs:{src:"/img/logo-tezos.png",alt:"Tezos",title:"Tezos",height:"46"}}),n("br"),""!=this.staked?n("span",[n("label",[e._v("Staked by ChainLayer: ")]),n("br"),n("span",[e._v(e._s(e.staked)+" "+e._s(e.denom)+" ("+e._s(e.stakedUSD)+")")]),n("br")]):e._e(),""!=this.price?n("label",[e._v("Price "+e._s(e.denom)+": ")]):e._e(),n("span",[e._v("$ "+e._s(e.price))]),n("br")])},ne=[],ae=n("bc3a"),re=n.n(ae),se={name:"TezosWidget",props:{restUrl:String},data:function(){return{consoleLog:[],myAddr:"",bech32:"",pk:"",path:"",accInfo:"",sequence:"",delegation:"",reply:"",balance_available:"",balance_delegated:"",balance_total:"",connected:!1,connecting:!1,readytodelegate:!1,debug:!1,denom:"",staked:"",stakedUSD:"",error:"",price:"",chainId:"",validator:"",rewards:"",hrp:""}},computed:{consoleStatus:function(){return this.consoleLog}},created:function(){this.tryConnect()},methods:{onlyNumber:function(e){var t=e.keyCode?e.keyCode:e.which;(t<48||t>57)&&46===t&&e.preventDefault()},log:function(e,t){this.debug?e.push({index:e.length,msg:t}):console.log(t)},tryConnect:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.error="",this.consoleLog=[],this.denom="Tezos",this.baseamount=1e6,this.log(this.consoleLog,"Trying to connect..."),t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),n=new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:3,maximumFractionDigits:3}),e.next=9,this.getStakingBalance();case 9:return this.validators=e.sent,this.staked=n.format(l()(this.validators[0]/this.baseamount)),e.next=13,this.getPrice();case 13:this.price=e.sent,this.stakedUSD=t.format(l()(this.validators[0]/this.baseamount*this.price)),this.$emit("tezosStake",l()(this.validators[0]/this.baseamount*this.price));case 16:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getPrice:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t="https://min-api.cryptocompare.com/data/price?fsym=XTZ&tsyms=USD",e.abrupt("return",re.a.get(t).then(function(e){return e.data.USD}));case 2:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),getStakingBalance:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t="https://api2.tzscan.io/v1/staking_balance/tz1PesW5khQNhy4revu2ETvMtWPtuVyH2XkZ",e.abrupt("return",re.a.get(t).then(function(e){return e.data}));case 2:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}},ie=se,oe=(n("9e2e"),Object(g["a"])(ie,te,ne,!1,null,"0f1c2a39",null)),ce=oe.exports,le={name:"app",components:{TotalStake:b,IrisLedger:T,CosmosLedger:F,TerraLedger:ee,TezosWidget:ce},data:function(){return{tezosStake:l()(0),cosmosStake:l()(0),terraStake:l()(0),irisStake:l()(0)}},methods:{updateTezos:function(e){this.tezosStake=e},updateCosmos:function(e){this.cosmosStake=e},updateTerra:function(e){this.terraStake=e},updateIris:function(e){this.irisStake=e}}},he=le,de=(n("034f"),Object(g["a"])(he,r,s,!1,null,null,null)),ue=de.exports,ge=n("1881"),pe=n.n(ge);a["a"].use(pe.a),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(ue)}}).$mount("#app")},"64a9":function(e,t,n){},"9e2e":function(e,t,n){"use strict";var a=n("e7dd"),r=n.n(a);r.a},e7dd:function(e,t,n){}});
//# sourceMappingURL=app.29995592.js.map