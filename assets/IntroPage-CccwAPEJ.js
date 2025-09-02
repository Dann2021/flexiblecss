import{c as o,r as j,j as e,a as t}from"./index-C1OtdnfN.js";import{C as b,B as s}from"./Col-CoXLAH39.js";import{B as f,I as N}from"./Icone-BOJ15l4d.js";import{m as v,C as n}from"./Codebloc-3xAaL4ov.js";import"./copy-1s7FDyaj.js";/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],y=o("chevron-down",g);/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],w=o("plus",I);function i({titre:a,children:r,className:m,icone:d,type:c="rotate",...u}){const[l,h]=j.useState(!1),p=()=>{h(!l)},x=d||{rotate:e.jsx(y,{size:20}),croix:e.jsx(w,{size:20})}[c];return e.jsxs("div",{className:t("accordeon",l&&"ouvert",m),...u,children:[e.jsxs("div",{className:"accordeon-header",children:[e.jsx("p",{className:"accord-titre",children:a}),e.jsx("button",{className:t("accordeon-bouton",l&&c),onClick:p,"aria-label":"Toggle accordeon",children:x})]}),e.jsx("div",{className:"accordeon-contenu",children:r})]})}function D(){return e.jsx(e.Fragment,{children:e.jsxs(b,{className:"gap-3",children:[e.jsxs("div",{className:"aff-flex jc-sb gap-2 ai-mil pd-myn-10",children:[e.jsxs("div",{className:"aff-flex ai-mil gap-2",children:[e.jsx("h1",{className:"texte-5 ls-2 lh-2",children:"Débutez avec Flexible CSS "}),e.jsx("span",{className:"badge bg-bleu-lavande te-noir",children:"V1.0.1"})]}),e.jsx(f,{type:"claire",className:"bouton-min",children:e.jsx(N.GitHub,{height:20,width:20})})]}),e.jsxs("h1",{className:"texte-5",children:["Introduction"," ",e.jsx(v.span,{initial:{scale:0},animate:{scale:1.5,rotate:360},transition:{duration:1,repeat:1/0,repeatType:"reverse"},style:{fontSize:"2rem",display:"inline-block"},children:"✨"})]}),e.jsx(s,{type:"myn",nombre:11,className:"mh-2 p-myn-2 mb-2",children:e.jsx("p",{className:"texte-couleur-gris",children:"L’idée de créer ce framework m’est venue un peu par hasard 🤔. Je n’arrivais pas à adopter des solutions existantes comme Tailwind ou Bootstrap — non pas parce qu’elles sont complexes 😅, mais simplement parce que mon esprit préfère décortiquer, comprendre et construire les choses par lui-même 🙏."})}),e.jsx(s,{type:"myn",nombre:11,className:"mh-2 p-myn-2 mb-3",children:e.jsxs("p",{className:"texte-couleur-gris",children:[" ",e.jsx("span",{className:"te-noir texte-couleur-bleu-ciel",children:"Flexible Css✨"})," ","est un micro framework css facile à prendre en main dont le but est de vous aidez à concevoir vos sites web"," ",e.jsx("span",{className:"te-noir texte-couleur-bleu-ciel",children:"rapidement"})," ","et"," ",e.jsx("span",{className:"te-noir texte-couleur-bleu-ciel",children:"efficacement"}),"."]})}),e.jsx("h2",{children:"Démarrage rapide"}),e.jsxs(s,{type:"myn",nombre:11,className:"mh-2",children:[e.jsxs("p",{className:"texte-couleur-gris",children:["Pour bien commencer, installez tout d'abord les fichiers"," ",e.jsx("span",{className:"texte-couleur-rouge-cerise te-noir",children:'"flexible.css"'})," ","pour le style de vos interfaces et"," ",e.jsx("span",{className:"texte-couleur-rouge-cerise te-noir",children:'"flexible.js"'})," ","à la racine de votre projet."]}),e.jsxs("p",{className:"texte-couleur-gris mh-2 mb-1",children:["Après avoir installer les fichiers vous n'avez qu'à les inclures dans votre fichier html principal"," ",e.jsx("span",{className:"texte-couleur-rouge-cerise te-noir",children:'"main.html"'})," ","comme le montre l'exemple ci-dessous."]})]}),e.jsx(n,{className:"bg-gris-claire ronde p-2 bloc-myn-11 taille-pt",langage:"html",children:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./flexible.css">
  <title>Document</title>
</head>
<body>
  
  <h1>Utilisation de flexible</h1>

  <script src="./flexible.js"><\/script>
</body>
</html>`}),e.jsxs("h2",{className:"mh-2",children:["Installation avec ",e.jsx("span",{className:"texte-couleur-bleu-ciel",children:"npm"})]}),e.jsxs(s,{type:"myn",nombre:11,children:[e.jsxs("p",{className:"texte-couleur-gris",children:[e.jsx("span",{className:"te-noir texte-couleur-bleu-ciel",children:"Flexible Css✨"})," ","peut être installé sur un projet React Js de deux manières, vou n'avez qu'à suivre les procédures ci-dessous."]}),e.jsx(i,{titre:"Installation via css",className:"mh-2",children:e.jsx("p",{className:"texte-couleur-gris",children:"Pour cette méthode voir celle du démarrage rapide 👆🏿"})}),e.jsx(i,{titre:"Installation npm",className:"mh-2",children:e.jsx("p",{className:"texte-couleur-gris",children:"Pour cette méthode référez vous à l'exemple ci-dessous 👇🏿"})})]}),e.jsx(n,{className:"bg-gris-claire ronde p-2 bloc-myn-11 taille-pt",langage:"bash",children:"$ npm install flexible-css"})]})})}export{D as default};
