# InnerBuild Portfolio

Portfolio personnel développé avec **React**, **Vite** et **Framer Motion**.

Ce projet présente une landing page moderne orientée UI/UX avec plusieurs sections (hero, à propos, services, réalisations) et un design responsive.

## Aperçu

Le site inclut notamment :

- Une navigation ancrée par sections (`Home`, `About me`, `Services`, `Portfolio`, `My Resume`).
- Une section Hero avec animation d’entrée (Framer Motion).
- Une section de statistiques et de présentation du profil.
- Une grille de services design.
- Une galerie de projets/études de cas.
- Un footer avec appel à l’action et email de contact.

## Stack technique

- **React 19**
- **Vite 8**
- **Framer Motion**
- **ESLint 9**

## Prérequis

- **Node.js** 18+ (recommandé : version LTS récente)
- **npm**

## Installation

```bash
npm install
```

## Lancer en développement

```bash
npm run dev
```

Puis ouvrir l’URL affichée dans le terminal (souvent `http://localhost:5173`).

## Build de production

```bash
npm run build
```

Les fichiers compilés seront générés dans le dossier `dist/`.

## Prévisualiser le build

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## Structure du projet

```text
.
├── public/             # Assets statiques (images, icônes, favicon)
├── src/
│   ├── App.jsx         # Structure principale de la page
│   ├── App.css         # Styles principaux
│   ├── index.css       # Styles globaux
│   └── main.jsx        # Point d’entrée React
├── index.html
├── vite.config.js
└── package.json
```

## Personnalisation rapide

- **Contenu** : modifier `src/App.jsx` (textes, sections, projets, liens).
- **Style** : modifier `src/App.css` et `src/index.css`.
- **Assets** : remplacer les images dans `public/`.

## Scripts npm

- `npm run dev` : lance le serveur de développement Vite.
- `npm run build` : génère le build de production.
- `npm run preview` : sert localement le build produit.
- `npm run lint` : exécute les règles ESLint.

---

Si tu veux, je peux aussi te préparer une version de README orientée **freelance/client** (plus marketing) ou une version **développeur open-source** (plus technique et contribution).
