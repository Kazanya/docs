import{d as h,B as l,H as m,n as p,W as e,bg as g,i as u,aG as n,bn as f,af as d,A as b,bo as C,p as _,m as w}from"./Ck713gsq.js";const I={base:""},W=d;var r,o;const v=n({extend:n(I),...((o=(r=W.uiPro)==null?void 0:r.prose)==null?void 0:o.img)||{}}),B=h({__name:"Img",props:{src:{},alt:{},width:{},height:{},class:{}},setup(i){const s=i,c=l(()=>{var a;if((a=s.src)!=null&&a.startsWith("/")&&!s.src.startsWith("//")){const t=b(C(_().app.baseURL));if(t!=="/"&&!s.src.startsWith(t))return w(t,s.src)}return s.src});return(a,t)=>(u(),m(g(e(f)),{src:c.value,alt:a.alt,width:a.width,height:a.height,class:p(e(v)({class:s.class}))},null,8,["src","alt","width","height","class"]))}}),P=Object.assign(B,{__name:"ProseImg"});export{P as default};
