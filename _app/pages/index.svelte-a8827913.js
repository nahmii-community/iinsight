import{S as t,i as e,s,k as n,e as a,L as o,d as r,n as c,c as l,a as i,b as d,f as u,H as h,M as p,N as m,I as f,O as v,t as g,g as S,h as b,G as D}from"../chunks/vendor-826fc9b3.js";function U(t){let e,s=console.log(t[0])+"";return{c(){e=g(s)},l(t){e=S(t,s)},m(t,s){u(t,e,s)},p(t,n){1&n&&s!==(s=console.log(t[0])+"")&&b(e,s)},d(t){t&&r(e)}}}function k(t){let e,s;return{c(){e=a("p"),s=g("Loading...")},l(t){e=l(t,"P",{});var n=i(e);s=S(n,"Loading..."),n.forEach(r)},m(t,n){u(t,e,n),D(e,s)},p:h,d(t){t&&r(e)}}}function E(t){let e,s,p;function m(t,e){return t[0].fetching?k:U}let f=m(t),v=f(t);return{c(){e=n(),v.c(),s=n(),p=a("section"),this.h()},l(t){o('[data-svelte="svelte-1anpopb"]',document.head).forEach(r),e=c(t),v.l(t),s=c(t),p=l(t,"SECTION",{class:!0}),i(p).forEach(r),this.h()},h(){document.title="Home",d(p,"class","svelte-1jlhe5t")},m(t,n){u(t,e,n),v.m(t,n),u(t,s,n),u(t,p,n)},p(t,[e]){f===(f=m(t))&&v?v.p(t,e):(v.d(1),v=f(t),v&&(v.c(),v.m(s.parentNode,s)))},i:h,o:h,d(t){t&&r(e),v.d(t),t&&r(s),t&&r(p)}}}const w=!0;function x(t,e,s){let n;p({url:"https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2"});const a=m('\n\t\t{\n\t\t\tpairs(first: 10, where: {reserveUSD_gt: "1000000", volumeUSD_gt: "50000"}, orderBy: reserveUSD, orderDirection: desc) {\n\t\t\t\tid\n\t\t\t\ttoken0 {\n\t\t\t\t\tid\n\t\t\t\t\tsymbol\n\t\t\t\t}\n\t\t\t\ttoken1 {\n\t\t\t\t\tid\n\t\t\t\t\tsymbol\n\t\t\t\t}\n\t\t\t\treserveUSD\n\t\t\t\tvolumeUSD\n\t\t\t}\n\t\t}\n\t');return f(t,a,(t=>s(0,n=t))),v(a),[n,a]}export default class extends t{constructor(t){super(),e(this,t,x,E,s,{})}}export{w as prerender};