import{c as t,r as p,j as e,a as d}from"./index-B5HRH0AM.js";import{B as n}from"./Bouton-Dx0-ostr.js";import{C as j}from"./Col-D21KYFnD.js";import{C as y}from"./Conteneur-BtsD0HXd.js";import{I as b}from"./Image-C3ve8b2X.js";import{A as k,m as h}from"./proxy-B9y9HqtZ.js";/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],I=t("arrow-left",v);/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],C=t("arrow-right",N);/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],z=t("moon",w);/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],_=t("sun",M);function A({images:a=[],titre:o,classNameImages:i,taille:r,children:x}){Array.isArray(a)||(console.error("❌ La prop 'images' doit être un tableau."),a=[]);const[u,l]=p.useState(0),c=a.filter(s=>typeof s=="string"&&s.trim()!=="").length,f=()=>l(s=>s===0?c-1:s-1),g=()=>l(s=>s===c-1?0:s+1);return c===0?e.jsx("div",{className:"bloc-12 ronde bord-2 bord-rouge-cerise p-3",children:e.jsx("p",{className:"texte-couleur-rouge-cerise",children:"⚠️ Aucune image disponible dans le carrousel."})}):e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"texte-6 ls-2",children:o}),e.jsxs("div",{className:d("aff-flex jc-sb ai-mil gap-2 mh-4 mb-3"),children:[e.jsx(n,{theme:"claire",taille:"min",className:"ronde-1",onClick:f,children:e.jsx(I,{size:15})}),e.jsx(n,{theme:"claire",taille:"min",className:"ronde-1",onClick:g,children:e.jsx(C,{size:15})})]}),e.jsx("div",{className:d("bloc-12 ronde overx-auto p-3",i),style:{scrollBehavior:"smooth"},children:e.jsx("div",{className:"aff-flex gap-4 p-2",style:{transform:`translateX(-${u*r}px)`,transition:"transform 0.5s ease"},children:a.map((s,m)=>e.jsx(b,{className:"ronde survol curseur-pointeur",alt:`image ${m+1}`,source:s,height:r,width:r},m))})}),x]})}const B="/flexiblecss/assets/1-DODm0U9Y.jpg",$="/flexiblecss/assets/2-qbZgRegX.jpg",q="/flexiblecss/assets/3-B1qKKCyv.jpg",R="/flexiblecss/assets/4-Bz9UgewM.jpg",T="/flexiblecss/assets/5-CbeRvB9H.jpg",K="/flexiblecss/assets/6-CjKfQ-5b.jpg";function X(){const[a,o]=p.useState("claire"),i=()=>{o(a==="claire"?"sombre":"claire")};return e.jsx(y,{children:e.jsxs(j,{className:`theme-${a}  ronde-2 p-3`,children:[e.jsx("div",{className:"aff-flex jc-fin gap-2",children:e.jsx(n,{theme:a,taille:"min",onClick:i,className:"ronde-1",children:e.jsx(k,{mode:"wait",initial:!1,children:a==="claire"?e.jsx(h.div,{initial:{opacity:0,rotate:-90,scale:.8},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:90,scale:.8},transition:{duration:.4,ease:"easeInOut"},children:e.jsx(z,{size:15})},"moon"):e.jsx(h.div,{initial:{opacity:0,rotate:90,scale:.8},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:-90,scale:.8},transition:{duration:.4,ease:"easeInOut"},children:e.jsx(_,{size:15})},"sun")})})}),e.jsx(A,{taille:260,titre:"Teams members",images:[B,$,q,R,T,K]})]})})}export{X as default};
