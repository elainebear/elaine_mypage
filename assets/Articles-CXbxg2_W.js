import{j as t,r as i,L as m}from"./index-CIEZNLYO.js";/* empty css             */import{g as f,c as g,d as v}from"./firebase-B6k3xTsb.js";function y({article:s}){return t.jsxs("div",{className:"articles-items",children:[t.jsx("h2",{children:t.jsx("b",{children:s.title})}),t.jsxs("p",{children:["發布日期：",s.date.toLocaleDateString()]}),t.jsx("p",{children:s.abstr})]})}function N(){const[s,u]=i.useState([]),[a,x]=i.useState(""),[l,j]=i.useState("newest");if(i.useEffect(()=>{async function e(){const p=(await f(g(v,"articles"))).docs.map(c=>({id:c.id,...c.data(),date:c.data().date.toDate()}));u(p)}e()},[]),!s)return t.jsx("p",{children:"Loading..."});const o=s.filter(e=>e.title.toLowerCase().includes(a.toLowerCase()));let d="No article found";const r=a?o.length:s.length;if(r>0){const e=r>1?"articles":"article";d=a?r+" "+e+" matching your search  ":r+" "+e}const h=[...o].sort((e,n)=>l==="newest"?n.date-e.date:e.date-n.date);return t.jsxs("section",{className:"body-items",children:[t.jsxs("h3",{className:"heading",children:[" ",d," "]}),t.jsxs("div",{className:"flex-container",children:[t.jsx("input",{type:"text",value:a,onChange:e=>x(e.target.value),placeholder:"搜尋文章標題"}),t.jsx("div",{className:"select-wrapper",children:t.jsxs("select",{value:l,onChange:e=>j(e.target.value),children:[t.jsx("option",{value:"newest",children:"最新"}),t.jsx("option",{value:"oldest",children:"最舊"})]})})]}),h.length>0?h.map(e=>t.jsx(m,{to:`/articles/${e.id}`,children:t.jsx(y,{article:e})},e.id)):t.jsx("h3",{children:"  "})]})}export{N as default};
