import{S as a,i as e,s as t,e as n,t as i,c as s,a as r,g as l,d as o,f as u,G as m,h as c,k as p,n as d,b as $,H as f,L as y,W as h,M as v,N as g,O as b,P as w,r as x,u as L,v as I,z as V,B as E,j as N,m as k,o as M,w as A,Q as _}from"../chunks/vendor-55c325ce.js";function P(a){let e,t;return{c(){e=n("h5"),t=i(a[1])},l(n){e=s(n,"H5",{});var i=r(e);t=l(i,a[1]),i.forEach(o)},m(a,n){u(a,e,n),m(e,t)},p(a,e){2&e&&c(t,a[1])},d(a){a&&o(e)}}}function F(a){let e,t,y,h,v,g,b,w=a[1]&&P(a);return{c(){e=n("div"),t=n("h4"),y=i(a[0]),h=p(),w&&w.c(),v=p(),g=n("p"),b=i(a[2]),this.h()},l(n){e=s(n,"DIV",{class:!0});var i=r(e);t=s(i,"H4",{class:!0});var u=r(t);y=l(u,a[0]),u.forEach(o),h=d(i),w&&w.l(i),v=d(i),g=s(i,"P",{class:!0});var m=r(g);b=l(m,a[2]),m.forEach(o),i.forEach(o),this.h()},h(){$(t,"class","svelte-k9mxxo"),$(g,"class","svelte-k9mxxo"),$(e,"class","card svelte-k9mxxo")},m(a,n){u(a,e,n),m(e,t),m(t,y),m(e,h),w&&w.m(e,null),m(e,v),m(e,g),m(g,b)},p(a,[t]){1&t&&c(y,a[0]),a[1]?w?w.p(a,t):(w=P(a),w.c(),w.m(e,v)):w&&(w.d(1),w=null),4&t&&c(b,a[2])},i:f,o:f,d(a){a&&o(e),w&&w.d()}}}function R(a,e,t){let{title:n=""}=e,{subtitle:i=""}=e,{value:s=0}=e;return a.$$set=a=>{"title"in a&&t(0,n=a.title),"subtitle"in a&&t(1,i=a.subtitle),"value"in a&&t(2,s=a.value)},[n,i,s]}class S extends a{constructor(a){super(),e(this,a,R,F,t,{title:0,subtitle:1,value:2})}}function D(a){let e,t;return{c(){e=n("div"),t=n("div"),this.h()},l(a){e=s(a,"DIV",{class:!0});var n=r(e);t=s(n,"DIV",{class:!0}),r(t).forEach(o),n.forEach(o),this.h()},h(){$(t,"class","circle svelte-xzogzw"),$(e,"class","container svelte-xzogzw")},m(a,n){u(a,e,n),m(e,t)},p:f,i:f,o:f,d(a){a&&o(e)}}}class H extends a{constructor(a){super(),e(this,a,null,D,t,{})}}var z=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}];const O=y.from(10**9),T=y.from(10**15),j=y.from(120*10**9);let q;const C=async(a,e)=>{const t=new v("0x7c8155909cd385F120A56eF90728dD50F9CcbE52",z,e);return await t.balanceOf(a)},B=async()=>{const a=await(async()=>q||(q=new h(window.ethereum),q))(),e=(await(async a=>await C("0x4fa70e4143cc38dca0a2101e522d8c0d3f040128",a))(a)).div(T),t=(await(async a=>await C("0xcc8d82f6ba952966e63001c7b320eef2ae729099",a))(a)).div(T),n=j.sub(e.add(t));return{airdriipsRemaining:Math.floor(e.div(O)),nahmiiL1:n.toString(),nahmiiL2:t.toString(),nahmiiAirdriip:e.toString()}},G=g({url:"https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2"}),Q=async a=>b`
  {
    pair(id: "${a}") {
      reserveETH,
      reserveUSD,
      token0 {name},
      token0Price,
      token1 {name},
      token1Price
    }
  }
`,U=async a=>await(async(a,e)=>{if(!a)throw new Error("No query given");const t=await e.query(a).toPromise();if(t.error)throw new Error(t.error);return t})(a,G),W=async()=>{const a=await(async()=>{const a=await Q("0xa0787e87b10c9b1b88d75915ac8ec5608ac6d054"),{data:e}=await U(a);return e.pair.token0Price})();return{nahmiiPrice:await(async()=>{const a=await Q("0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc"),{data:e}=await U(a);return e.pair.token0Price})()/a}};function J(a){let e,t;return e=new H({}),{c(){N(e.$$.fragment)},l(a){k(e.$$.fragment,a)},m(a,n){M(e,a,n),t=!0},p:f,i(a){t||(I(e.$$.fragment,a),t=!0)},o(a){x(e.$$.fragment,a),t=!1},d(a){A(e,a)}}}function K(a){let e,t,i,l,c,f,y,h,v,g,b,w,L,V,E,_,P;return t=new S({props:{title:"Nahmii in L1",value:`${a[0].nahmiiL1} NII`}}),l=new S({props:{title:"Nahmii value in L1",value:a[0].nahmiiL1Value}}),f=new S({props:{title:"Nahmii in L2",value:`${a[0].nahmiiL2} NII`}}),h=new S({props:{title:"Nahmii value in L2",value:a[0].nahmiiL2Value}}),g=new S({props:{title:"Airdriips remaining",value:a[0].airdriipsRemaining}}),w=new S({props:{title:"Remaining nahmii airdriip",value:`${a[0].nahmiiAirdriip} NII`}}),V=new S({props:{title:"Remaining airdriip value",value:a[0].nahmiiAirdriipValue}}),_=new S({props:{title:"Hubii 'fair' value",value:a[0].hubiiFairValue}}),{c(){e=n("div"),N(t.$$.fragment),i=p(),N(l.$$.fragment),c=p(),N(f.$$.fragment),y=p(),N(h.$$.fragment),v=p(),N(g.$$.fragment),b=p(),N(w.$$.fragment),L=p(),N(V.$$.fragment),E=p(),N(_.$$.fragment),this.h()},l(a){e=s(a,"DIV",{class:!0});var n=r(e);k(t.$$.fragment,n),i=d(n),k(l.$$.fragment,n),c=d(n),k(f.$$.fragment,n),y=d(n),k(h.$$.fragment,n),v=d(n),k(g.$$.fragment,n),b=d(n),k(w.$$.fragment,n),L=d(n),k(V.$$.fragment,n),E=d(n),k(_.$$.fragment,n),n.forEach(o),this.h()},h(){$(e,"class","list svelte-l10tyo")},m(a,n){u(a,e,n),M(t,e,null),m(e,i),M(l,e,null),m(e,c),M(f,e,null),m(e,y),M(h,e,null),m(e,v),M(g,e,null),m(e,b),M(w,e,null),m(e,L),M(V,e,null),m(e,E),M(_,e,null),P=!0},p(a,e){const n={};1&e&&(n.value=`${a[0].nahmiiL1} NII`),t.$set(n);const i={};1&e&&(i.value=a[0].nahmiiL1Value),l.$set(i);const s={};1&e&&(s.value=`${a[0].nahmiiL2} NII`),f.$set(s);const r={};1&e&&(r.value=a[0].nahmiiL2Value),h.$set(r);const o={};1&e&&(o.value=a[0].airdriipsRemaining),g.$set(o);const u={};1&e&&(u.value=`${a[0].nahmiiAirdriip} NII`),w.$set(u);const m={};1&e&&(m.value=a[0].nahmiiAirdriipValue),V.$set(m);const c={};1&e&&(c.value=a[0].hubiiFairValue),_.$set(c)},i(a){P||(I(t.$$.fragment,a),I(l.$$.fragment,a),I(f.$$.fragment,a),I(h.$$.fragment,a),I(g.$$.fragment,a),I(w.$$.fragment,a),I(V.$$.fragment,a),I(_.$$.fragment,a),P=!0)},o(a){x(t.$$.fragment,a),x(l.$$.fragment,a),x(f.$$.fragment,a),x(h.$$.fragment,a),x(g.$$.fragment,a),x(w.$$.fragment,a),x(V.$$.fragment,a),x(_.$$.fragment,a),P=!1},d(a){a&&o(e),A(t),A(l),A(f),A(h),A(g),A(w),A(V),A(_)}}}function X(a){let e,t,i,l,m,c,f;const y=[K,J],h=[];function v(a,e){return 1&e&&(t=!!(Object.keys(a[0]).length>0)),t?0:1}return i=v(a,-1),l=h[i]=y[i](a),{c(){e=p(),l.c(),m=p(),c=n("section"),this.h()},l(a){w('[data-svelte="svelte-1anpopb"]',document.head).forEach(o),e=d(a),l.l(a),m=d(a),c=s(a,"SECTION",{class:!0}),r(c).forEach(o),this.h()},h(){document.title="Home",$(c,"class","svelte-l10tyo")},m(a,t){u(a,e,t),h[i].m(a,t),u(a,m,t),u(a,c,t),f=!0},p(a,[e]){let t=i;i=v(a,e),i===t?h[i].p(a,e):(E(),x(h[t],1,1,(()=>{h[t]=null})),L(),l=h[i],l?l.p(a,e):(l=h[i]=y[i](a),l.c()),I(l,1),l.m(m.parentNode,m))},i(a){f||(I(l),f=!0)},o(a){x(l),f=!1},d(a){a&&o(e),h[i].d(a),a&&o(m),a&&o(c)}}}const Y=!0;function Z(a,e,t){let n={};const i=async()=>{const{airdriipsRemaining:a,nahmiiL1:e,nahmiiL2:i,nahmiiAirdriip:s}=await B(),{nahmiiPrice:r}=await W();t(0,n={airdriipsRemaining:a,nahmiiL1:_(e).format("0.0a"),nahmiiL1Value:_(e*r).format("$0.00a"),nahmiiL2:_(i).format("0.0a"),nahmiiL2Value:_(i*r).format("$0.00a"),nahmiiAirdriip:_(s).format("0a"),nahmiiAirdriipValue:_(s*r).format("$0.00a"),hubiiFairValue:_(15.7*a*r).format("$0.00a")}),console.log(n)};return V((async()=>{i(),setTimeout(i,9e5)})),[n]}export default class extends a{constructor(a){super(),e(this,a,Z,X,t,{})}}export{Y as prerender};
