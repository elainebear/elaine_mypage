import{u as o,r as s,j as t,L as l}from"./index-uB0efbGc.js";import{a as n,b as d,d as f}from"./firebase-Xm7XP1Pn.js";function j(){const{id:c}=o(),[e,i]=s.useState(null);return s.useEffect(()=>{window.scrollTo(0,0)},[]),s.useEffect(()=>{(async()=>{const r=n(f,"articles",c),a=await d(r);a.exists()?i(a.data()):console.log("No such article!")})()},[c]),e?t.jsxs("div",{className:"body-items",children:[t.jsx("p",{children:t.jsx(l,{to:"/articles",className:"return",children:" 返回文章列表 "})}),t.jsx("h1",{children:e.title}),t.jsxs("p",{children:["發布日期：",e.date.toDate().toLocaleDateString()]}),t.jsx("div",{children:e.content})]}):t.jsx("p",{children:"Loading..."})}export{j as default};
