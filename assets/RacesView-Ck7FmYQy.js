import{d as S,i as f,s as g,r as m,w as C,_ as h,c as d,a as _,b as R,e as v,F as y,f as w,o as B,g as p}from"./index-BTUOgP2Q.js";import{u as V,S as $}from"./SeasonComp-CMNRa2SR.js";import{g as k}from"./data-BQr7bUVa.js";import{R as x}from"./RaceCard-BRv1bC-F.js";import"./SeasonHeading-Df4Tx8xM.js";import"./QCard-B9SDgbBc.js";const E=S("races",()=>{const u=f("$yearInit"),t=f("$yearCrnt"),r=V(),{year:e}=g(r),{updateYear:n}=r,a=m([]),s=m(!1),c=m(null),l=async o=>{if(e.value=o,a.value.length<=0){s.value=!0;try{a.value=await k(o),console.log("RACES STORE: ",a.value)}catch(i){c.value=i.message}finally{s.value=!1}}};return C(e,(o,i)=>{o!==i&&e.value>=u&&e.value<=t&&(a.value=[],l(e.value))}),{year:e,races:a,isLoading:s,err:c,getRaces:l,updateYear:n}}),F={name:"RacesView",emits:["updateRouterHistory"],components:{SeasonComp:$,RaceCard:x},setup(u,{emit:t}){const r=E(),{year:e,races:n}=g(r),{getRaces:a,updateYear:s}=r;return B(()=>{a(e.value),t("updateRouterHistory",!1)}),{year:e,races:n,getRaces:a,updateYear:s}}},H={class:"q-col-gutter-md row list-unstyled"},I=["id"];function L(u,t,r,e,n,a){const s=v("SeasonComp"),c=v("RaceCard");return p(),d(y,null,[t[0]||(t[0]=_("h1",null,"Races",-1)),R(s,{season:e.year},null,8,["season"]),_("ul",H,[(p(!0),d(y,null,w(e.races,(l,o)=>(p(),d("li",{key:"race_"+o,id:"race_"+o,class:"col-12 col-sm-6 col-lg-4 col-xl-3"},[R(c,{race:l,"has-race-details":!1},null,8,["race"])],8,I))),128))])],64)}const A=h(F,[["render",L]]);export{A as default};
