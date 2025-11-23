# Instructions pour les agents Copilot / AI

But : rendre un agent AI immédiatement productif sur ce dépôt React + Vite.

- **Quick start (commandes)**
  - `npm install` — installer les dépendances.
  - `npm run dev` — lance le serveur de dev Vite (HMR).
  - `npm run build` — génère le site dans `dist`.
  - `npm run preview` — prévisualiser le build localement.
  - `npm run lint` — exécuter ESLint (configuration dans `eslint.config.js`).
  - `npm run deploy` — déploie `dist` vers GitHub Pages (utilise `gh-pages`).

- **Architecture (vue d'ensemble)**
  - Projet React 19 + Vite (voir `vite.config.js` et `package.json`).
  - Entrée principale : `src/main.jsx` (branche la `SideContexteProvider` et `App`).
  - Global CSS et ré-exports : `src/index.js` importe `src/styles/index.css` et ré-exporte le barrel `src/composants`.
  - Routage centralisé : `src/routes/Routeur.jsx` définit toutes les routes et sous-routes (docs sous `/docs`).
  - Composants UI : `src/composants/ui/*` (exportés via `src/composants/index.js`).
  - Styles : fichiers CSS dans `src/styles/` (projet utilise CSS global, pas de CSS modules).
  - Assets : `src/assets/` (animations, images, fonts, icones, logos).
  - MDX/Docs : `@mdx-js/rollup` est inclus dans la config Vite — la doc pourrait utiliser MDX.

- **Conventions et patterns projet**
  - Fichiers de composants en `.jsx` et noms en `PascalCase` (ex : `Bouton.jsx`, `Carrousel.jsx`).
  - Barrel export pour composants : modifiez `src/composants/index.js` si vous ajoutez/supprimez un composant.
  - Les routes utilisent des imports directs (pas de lazy-loading actuellement) — soyez cohérent si vous introduisez `React.lazy`.
  - Nomination en français pour beaucoup de fichiers/dossiers (`composants`, `contexte`, `styles`) — gardez la langue pour la cohérence.
  - Context providers : `src/contexte/SideContexte.jsx` montre le pattern des providers utilisés autour d'`App`.
  - ESLint: configuration dans `eslint.config.js`. règle notable : `no-unused-vars` ignore les variables commençant par majuscule ou `_` (`varsIgnorePattern: '^[A-Z_]'`).

- **Points d'intégration externes**
  - `gh-pages` pour déploiement (voir script `deploy` et `homepage` dans `package.json`).
  - `vite-plugin-svgr` permet d'importer SVGs comme composants React.
  - `@vercel/speed-insights` est intégré dans `App.jsx` (composant `SpeedInsights`).
  - `@mdx-js/rollup` présent pour pages MDX.

- **Conseils pratiques pour l'agent**
  - Lire d'abord : `package.json`, `vite.config.js`, `src/main.jsx`, `src/App.jsx`, `src/routes/Routeur.jsx`, `src/index.js`, `src/composants/index.js`.
  - Pour modifier ou ajouter un composant UI : créer le fichier `.jsx` dans `src/composants/ui/`, exporter dans `src/composants/index.js`, et réutiliser via `import { MonComposant } from 'src/composants'`.
  - Pour modifier les styles globaux, voir `src/styles/index.css` et `src/styles/flexible.css` (anciens fichiers dans `src/styles/ancien/`).
  - Conserver les chemins et la base (dans `App.jsx` on trouve `basename` commenté pour GitHub Pages). Si vous activez `basename`, mettez le commentaire à jour.
  - Ne pas convertir le projet en TypeScript sans coordination (le repo est JavaScript + ESLint + types d'@types/* pour dev seulement).

- **Limitations observées**
  - Pas de suite de tests automatique détectée.
  - Imports non-lazy pour les pages : changements majeurs de performance doivent introduire lazy-loading de façon cohérente.

Si une section est incomplète ou si vous voulez que j'inclus des exemples de modifications (PR template, règles de commit, conventions CSS), dites-moi lesquelles et j'itérerai. Merci !
