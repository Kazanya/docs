import{d as G,ag as H,B as K,aG as B,H as c,i as a,w as z,V as r,f as L,by as O,n,c as l,e as o,ak as T,ae as p,t as g,F as I,K as U,I as V,at as W,W as X,X as q,af as A}from"./Ck713gsq.js";import J from"./Bv_lJIqR.js";const M={slots:{root:"relative isolate",container:"flex flex-col lg:grid py-16 sm:py-24 lg:py-32 gap-8 sm:gap-16",wrapper:"",headline:"mb-3",leading:"flex items-center mb-6",leadingIcon:"size-10 shrink-0 text-(--ui-primary)",title:"text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-(--ui-text-highlighted)",description:"text-base sm:text-lg text-(--ui-text-muted)",links:"mt-8 flex flex-wrap gap-x-6 gap-y-3",features:"mt-8 grid"},variants:{orientation:{horizontal:{container:"lg:grid-cols-2 lg:items-center",description:"text-pretty",features:"gap-4"},vertical:{container:"",headline:"justify-center",leading:"justify-center",title:"text-center",description:"text-center text-balance",links:"justify-center",features:"sm:grid-cols-2 lg:grid-cols-3 gap-8"}},reverse:{true:{wrapper:"lg:order-last"}},headline:{true:{headline:"font-semibold text-(--ui-primary) flex items-center gap-1.5"}},title:{true:{description:"mt-6"}},description:{true:""},features:{true:""}},compoundVariants:[{orientation:"vertical",title:!0,class:{features:"mt-16"}},{orientation:"vertical",description:!0,class:{features:"mt-16"}},{orientation:"vertical",features:!0,class:{links:"mt-16"}}]},Q={key:2,class:"hidden lg:block"},R=A;var j;const Y=B({extend:B(M),...((j=R.uiPro)==null?void 0:j.pageSection)||{}}),Z=G({__name:"PageSection",props:{as:{default:"section"},headline:{},icon:{},title:{},description:{},links:{},features:{},orientation:{default:"vertical"},reverse:{type:Boolean},class:{},ui:{}},setup(x){const s=x,t=H(),i=K(()=>{var e;return Y({orientation:s.orientation,reverse:s.reverse,title:!!s.title||!!t.title,description:!!s.description||!!t.description,features:!!((e=s.features)!=null&&e.length)||!!t.features})});return(e,ee)=>{var f;const F=T,N=J,D=W,E=O;return a(),c(X(q),{as:e.as,"data-orientation":e.orientation,class:n(i.value.root({class:[s.class,(f=s.ui)==null?void 0:f.root]}))},{default:z(()=>{var m;return[r(e.$slots,"top"),L(E,{class:n(i.value.container({class:(m=s.ui)==null?void 0:m.container}))},{default:z(()=>{var h,k,v,y,b,S,$,P,_,w,C;return[e.icon||t.leading||e.headline||t.headline||e.title||t.title||e.description||t.description||(h=e.features)!=null&&h.length||t.features||(k=e.links)!=null&&k.length||t.links?(a(),l("div",{key:0,class:n(i.value.wrapper({class:(v=s.ui)==null?void 0:v.wrapper}))},[e.icon||t.leading?(a(),l("div",{key:0,class:n(i.value.leading({class:(y=s.ui)==null?void 0:y.leading}))},[r(e.$slots,"leading",{},()=>{var u;return[e.icon?(a(),c(F,{key:0,name:e.icon,class:n(i.value.leadingIcon({class:(u=s.ui)==null?void 0:u.leadingIcon}))},null,8,["name","class"])):o("",!0)]})],2)):o("",!0),e.headline||t.headline?(a(),l("div",{key:1,class:n(i.value.headline({class:(b=s.ui)==null?void 0:b.headline,headline:!t.headline}))},[r(e.$slots,"headline",{},()=>[p(g(e.headline),1)])],2)):o("",!0),e.title||t.title?(a(),l("h2",{key:2,class:n(i.value.title({class:(S=s.ui)==null?void 0:S.title}))},[r(e.$slots,"title",{},()=>[p(g(e.title),1)])],2)):o("",!0),e.description||t.description?(a(),l("div",{key:3,class:n(i.value.description({class:($=s.ui)==null?void 0:$.description}))},[r(e.$slots,"description",{},()=>[p(g(e.description),1)])],2)):o("",!0),(P=e.features)!=null&&P.length||t.features?(a(),l("ul",{key:4,class:n(i.value.features({class:(_=s.ui)==null?void 0:_.features}))},[r(e.$slots,"features",{},()=>[(a(!0),l(I,null,U(e.features,(u,d)=>(a(),c(N,V({key:d,as:"li",ref_for:!0},u),null,16))),128))])],2)):o("",!0),(w=e.links)!=null&&w.length||t.links?(a(),l("div",{key:5,class:n(i.value.links({class:(C=s.ui)==null?void 0:C.links}))},[r(e.$slots,"links",{},()=>[(a(!0),l(I,null,U(e.links,(u,d)=>(a(),c(D,V({key:d,size:"lg",ref_for:!0},u),null,16))),128))])],2)):o("",!0)],2)):o("",!0),t.default?r(e.$slots,"default",{key:1}):e.orientation==="horizontal"?(a(),l("div",Q)):o("",!0)]}),_:3},8,["class"]),r(e.$slots,"bottom")]}),_:3},8,["as","data-orientation","class"])}}}),ae=Object.assign(Z,{__name:"UPageSection"});export{ae as default};
