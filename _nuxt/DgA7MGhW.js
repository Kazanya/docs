import{d as $,ag as V,B as z,aG as y,H as x,i as s,w as b,V as n,f as N,by as j,n as l,g as S,c as o,e as r,ae as c,t as d,F as U,K as F,at as D,I as E,W as G,X as I,af as K}from"./Ck713gsq.js";const L={slots:{root:"relative isolate",container:"flex flex-col lg:grid py-24 sm:py-32 lg:py-40 gap-16 sm:gap-y-24",wrapper:"",headline:"mb-4",title:"text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-(--ui-text-highlighted)",description:"text-lg sm:text-xl/8 text-(--ui-text-muted)",links:"mt-10 flex flex-wrap gap-x-6 gap-y-3"},variants:{orientation:{horizontal:{container:"lg:grid-cols-2 lg:items-center",description:"text-pretty"},vertical:{container:"",headline:"justify-center",wrapper:"text-center",description:"text-balance",links:"justify-center"}},reverse:{true:{wrapper:"order-last"}},headline:{true:{headline:"font-semibold text-(--ui-primary) flex items-center gap-1.5"}},title:{true:{description:"mt-6"}}}},O={key:1,class:"hidden lg:block"},T=K;var w;const W=y({extend:y(L),...((w=T.uiPro)==null?void 0:w.pageHero)||{}}),X=$({__name:"PageHero",props:{as:{},headline:{},title:{},description:{},links:{},orientation:{default:"vertical"},reverse:{type:Boolean},class:{},ui:{}},setup(_){const t=_,a=V(),i=z(()=>W({orientation:t.orientation,reverse:t.reverse,title:!!t.title||!!a.title}));return(e,q)=>{var p;const B=D,C=j;return s(),x(G(I),{as:e.as,"data-orientation":e.orientation,class:l(i.value.root({class:[t.class,(p=t.ui)==null?void 0:p.root]}))},{default:b(()=>{var u;return[n(e.$slots,"top"),N(C,{class:l(i.value.container({class:(u=t.ui)==null?void 0:u.container}))},{default:b(()=>{var g,m,h,f,v,k;return[S("div",{class:l(i.value.wrapper({class:(g=t.ui)==null?void 0:g.wrapper}))},[e.headline||a.headline?(s(),o("div",{key:0,class:l(i.value.headline({class:(m=t.ui)==null?void 0:m.headline,headline:!a.headline}))},[n(e.$slots,"headline",{},()=>[c(d(e.headline),1)])],2)):r("",!0),e.title||a.title?(s(),o("h1",{key:1,class:l(i.value.title({class:(h=t.ui)==null?void 0:h.title}))},[n(e.$slots,"title",{},()=>[c(d(e.title),1)])],2)):r("",!0),e.description||a.description?(s(),o("div",{key:2,class:l(i.value.description({class:(f=t.ui)==null?void 0:f.description}))},[n(e.$slots,"description",{},()=>[c(d(e.description),1)])],2)):r("",!0),(v=e.links)!=null&&v.length||a.links?(s(),o("div",{key:3,class:l(i.value.links({class:(k=t.ui)==null?void 0:k.links}))},[n(e.$slots,"links",{},()=>[(s(!0),o(U,null,F(e.links,(H,P)=>(s(),x(B,E({key:P,size:"xl",ref_for:!0},H),null,16))),128))])],2)):r("",!0)],2),a.default?n(e.$slots,"default",{key:0}):e.orientation==="horizontal"?(s(),o("div",O)):r("",!0)]}),_:3},8,["class"]),n(e.$slots,"bottom")]}),_:3},8,["as","data-orientation","class"])}}}),J=Object.assign(X,{__name:"UPageHero"});export{J as default};
