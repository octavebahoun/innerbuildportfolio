PORTFOLIO BRIEF

Oktav Bahoun - Design & Architecture
Session du 5 Avril 2026

01. Objectif du Portfolio

Ce portfolio est le dernier projet web avant une transition vers l'IA et la Data. Il doit servir de preuve de compétence et de vitrine professionnelle pour deux audiences cibles.

AUDIENCE 1

Clients freelance

AUDIENCE 2

Communauté dev

MESSAGE CLÉ

Fullstack x IA

02. Identité Visuelle

Palette de couleurs

Fond principal : Ivoire doux #FAFAF7

Texte : #1a1a2e Presque noir

Accent principal : Cobalt vif #2563EB

Accent léger : #DBEAFE - Bleu clair (cards/badges)

CTA : #F59E0B Ambre chaud

Typographie

Titres : Géométrique moderne /font-family: 'Inter', Syne Bold 700/800 system-ui, sans-serif;

Corps : Lora Regular/Italic - Élégant, lisible /font-family: 'Inter', system-ui, sans-serif;

Mono / tags : Space Mono Labels, codes, dates /font-family: 'Inter', system-ui, sans-serif;

03. Structure du Site

Pages

1 : Home (Hero + Selected Work + Skills + CTA)

/projects : Projets (Détail de chaque réalisation)

/certs : Certifications (8 certifs + badges HackerRank)

/blog : Blog (Devlogs, process, réflexions)

/about : À propos (Profil + contact)

Architecture code

Frontend : React + Vite (feature-based structure)

Backend : Node.js API + gestion RAG

Base vectorielle : Pinecone ou Chroma

LLM : Groq ou OpenRouter

Organisation : src/features/{projects, blog, certs, rag} + components + pages

04. Sections

Section 1 Hero

Layout : Texte à gauche + Card photo à droite

Animation : Diffusion noise bruit gaussien photo $(t=1000\rightarrow0)$

Entrée texte : Fade in left avec stagger (tag, nom, sous-titre, CTA)

Entrée card : Fade in right

Techno : Canvas API + requestAnimationFrame

Section 2 - Selected Work

Titre d'entrée : "Découvrez moi à travers mes projets !"

Contenu : 3 projets phares - Koki's, LE TWIN, StudyNotes...

Effet cards : rotation selon position souris Perspective 3D

Interaction : Mouse move rotateX/rotateY dynamique

Section 3 - Skills Stack

Concept : océan animé avec bateaux SVG Scène marine

Bateaux : Chaque techno sur un bateau qui défile sur les vagues

Animation vagues : GSAP + SVG paths - organique et fluide

Ambiance : Dégradé Ocean Blue, étoiles, lune, reflets

Status : En recherche SVG à intégrer via GSAP

Section 4 CTA Double

Bouton 1 : "En savoir plus" ancre /about

Bouton 2 : "Me contacter" ancre formulaire contact

05. Fonctionnalité RAG

Un assistant IA intégré au portfolio, accessible via une icône flottante. Il connaît toutes les données du site et les projets en profondeur.

Déclencheur : Icône flottante cliquable (partout sur le site)

Données ingérées : Infos du site + documentation détaillée de chaque projet

Limite principale : Qualité de la documentation fournie - il lit ce qu'on lui donne

Stack : Node.js API + Pinecone/Chroma + Groq ou OpenRouter

Valeur ajoutée : Démontre une compétence IA directement dans le portfolio

NOTE IMPORTANTE
Le RAG nécessite une documentation sérieuse de chaque projet (README, devlogs, choix techniques). Sans cela, les réponses seront superficielles.

06. Certifications

Algorithme : 1 certif Algorithme et Programmation

Python : 2 certifs

Frontend : 1 certif Frontend Design (freeCodeCamp)

Web : Programmation Web 1 certif

Machine Learning : 2 certifs - Machine Learning

SQL : 1 certif - SQL

Badges : Badges HackerRank

07. Page - Projects

Chaque projet est présenté le long d'un blob SVG organique qui serpente de haut en bas de la page au scroll. Les projets alternent gauche/droite autour du blob.

Concept visuel

Élément central : Blob SVG épais forme organique qui serpente sur toute la hauteur de la page

Couleur blob : Dégradé cobalt #2563EB ambre #F59E0B

Animation : Blob se révèle au scroll (GSAP ScrollTrigger)

Inspiration : rivière organique avec éléments flottants MindMarket

Layout par projet

Côté gauche : Aperçu du projet - card avec effet perspective 3D au hover

Côté droit : Description, tags stack, lien détail

Alternance : Gauche/Droite à chaque projet (projet 1 gauche, projet 2 droite...)

Entrée : Fade in au scroll avec stagger par projet

Projets à afficher

01 : StudyNotes - React Node.js Groq PWA

02 : LE TWIN React Laravel Sanctum Framer Motion

03 : Excellence Team - React Three.js Framer Motion

04 : Koki's by Juju - HTML/CSS Vanilla JS Editorial

08. Page Certifications

Layout inspiré de LE TWIN - plein écran, image à droite, infos à gauche. Chaque catégorie est une slide. Les catégories avec plusieurs certifs défilent en carousel interne.

Style : Plein écran - inspiré LE TWIN (image droite, infos gauche)

Navigation : Dots sur le côté une catégorie = une slide

Carousel interne : défilement à l'intérieur de la slide (Python x2 et ML x2)

Détails : Algorithme (1), Python (2), Frontend (1), Web (1), ML (2), SQL (1), Badges.

09. Page - Blog

Grille de cards avec un post featured en grand. Filtres par catégorie en haut. Design à revoir lors de la réalisation.

Layout : card featured large (span 2 colonnes) + cards normales Grille

Filtres : Tout Devlog IA Fullstack Réflexion

Card contenu : Bannière colorée date titre extrait temps de lecture lien

Animation : Fade in au scroll avec stagger GSAP

10. Page About

Design grandiose à définir lors de la réalisation. Compréhension validée deux blocs distincts.

Bloc 1 : Présentation personnelle ta pensée, ta vision, qui tu es vraiment

Bloc 2 : Parcours chronologique transition IA premiers pas aujourd'hui

Status design : Réservé - design à définir quand l'idée sera complète

11. Architecture des Composants

Chaque page est un assemblage de composants indépendants. 7 couches bien séparées - features, shared, ui primitives, hooks & utils.

Pages : Home, Projects, Certs, Blog, About

Shared : Navbar, Footer, RagButton, PageWrapper, ScrollProgress

features/home : HeroSection, SelectedWork, OceanStack, CtaSection

features/projects : ProjectsBlob, ProjectCard, ProjectInfo, TagBadge

features/certs : CertSlide, CertCarousel, DotsNav, CertImage

features/blog : BlogGrid, BlogCard, FilterBar, BlogPost

features/about : Aboutintro, Timeline, ContactForm

features/rag : RagWidget, RagChat, RagService

components/ui : Button, Badge, Card, Modal, Loader, AnimWrapper

hooks & utils : useScrollAnim, useMouseTilt, useRagQuery, blogUtils, animUtils

12. Navbar & Footer

Navbar

Style : Pill flottante centrée backdrop blur, fond ivoire semi-transparent

Comportement : Se compacte au scroll (padding réduit, ombre renforcée)

Logo : "Oktav" lettre k en cobalt #2563EB

Liens : Home Projects Certs Blog About

CTA : Bouton "Ask AI" cobalt avec dot animé ouvre le RAG

Composant : Navbar.jsx dans src/components/shared/

Footer

Fond : dark élégant #1a1a2e

Bloc gauche : Logo + tagline italic (Fullstack Engineer & AI Builder Cotonou)

Bloc centre : Navigation + Contact (email, WhatsApp, LinkedIn)

Réseaux : GitHub, Linkedin, Facebook, Instagram, Twitter/X, WhatsApp, StackOverflow, Pinterest, Gravatar

Hover réseaux : Chaque icône prend la couleur officielle du réseau

Composant : Footer.jsx dans src/components/shared/

13. Stack Technique Finale

Frontend : React + Vite feature-based structure

Routing : React Router v6 nested routes, lazy loading par page

State : Zustand (léger, sans re-renders inutiles, parfait pour RAG state)

Animations : GSAP + ScrollTrigger - vagues, serpent SVG, scroll animations

3D : CSS Perspective cards 3D hover sur Projects

Backend : Node.js / Express - déployé sur Render (serveur persistant)

Vector DB : Pinecone - free tier suffisant pour le portfolio

LLM : Groq ou OpenRouter réponses RAG

Déploiement front : Vercel - gratuit, CI/CD automatique depuis GitHub

Déploiement back : Render (plus accessible que Railway, serveur Node continu)

POURQUOI RENDER ET PAS VERCEL POUR LE BACK ?
Vercel transforme Node en Serverless Functions timeout 10s, pas de connexion persistante, cold start lent. Le RAG a besoin d'un vrai serveur continu. Render le fournit gratuitement.

14. Dark Mode

Toggle dark/light mode via une animation Lottie d'un robot dans la navbar. Palette bleu nuit avec nuages SVG organiques dans les coins.

Palette Dark Mode

Fond principal : #0d1b2a — bleu nuit profond

Fond secondaire : #0a1628 — encore plus profond

Nuages coins : #1a2d42 — blobs SVG organiques (inspiré Josh Comeau)

Texte : Blanc / gris clair rgba(255,255,255,0.85)

Accent cobalt : #2563EB — reste identique

Accent ambre : #F59E0B — reste identique

Toggle Lottie

Composant : Animation Lottie — robot 2D dans la navbar

Mode clair : Robot content, regard de côté, yeux ouverts

Mode sombre : Robot qui dort, yeux fermés, ZZZ

Transition : Animation fluide entre les deux états au clic

Techno : lottie-react — npm install lottie-react

Placement : Dans la Navbar pill, à droite du bouton Ask AI

Nuages SVG

Placement : Coins de page — top-left, bottom-right principalement

Style : Blobs organiques SVG empilés, couleur #1a2d42

Comportement : Statiques ou léger parallax au scroll

Composant : DarkCloud

PROCHAINES ÉTAPES

Définir le design About (idée grandiose en cours)

Rechercher le SVG GSAP pour la scène marine (Skills)

Commencer le scaffold React/Vite + feature structure

Documenter chaque projet pour alimenter le RAG

Oktav Bahoun × Claude — Avril 2026