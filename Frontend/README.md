# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# EcoRideZ

Plateforme de covoiturage écologique développée en MERN (MongoDB, Express, React, Node.js) avec TailwindCSS.
Ce fichier servira de **README principal**, contenant toutes les informations importantes pour ton ECF.

---

# 🚀 1. Description du projet

EcoRideZ est une application web permettant de :

* rechercher des covoiturages (US1 à US6)
* créer et gérer des trajets en tant que chauffeur (US7 à US11)
* gérer les avis et litiges en tant qu'employé (US12)
* gérer les statistiques, employés et suspensions en tant qu’administrateur (US13)

Ce projet est réalisé dans le cadre du **Titre Professionnel Développeur Web & Web Mobile**.

---

# 🛠 2. Stack Technique

## Frontend

* React + Vite
* TailwindCSS v4
* React Router (à venir)

## Backend

* Node.js + Express
* PostgreSQL (Base de données relationnelle)
* MongoDB (Base de données NoSQL)
* JWT Authentication
* Architecture MVC modulaire

## Outils

* Git (workflow feature branches)
* VSCode
* WSL / Ubuntu

---

# 📂 3. Structure du projet

```
EcoRideZ/
├── Backend/
└── Frontend/
```

Des sous-dossiers seront ajoutés au fur et à mesure (routes, controllers, services…).

---

# 🧪 4. Installation

Des instructions détaillées seront ajoutées lorsque le backend et le frontend seront finalisés.

---

# 📌 5. Avancement des User Stories

* [ ] US1 – Page d'accueil
* [ ] US2 – Menu de l'application
* [ ] US3 – Recherche de covoiturages
* [ ] US4 – Filtres
* [ ] US5 – Page détail covoiturage
* [ ] US6 – Participation
* [ ] US7 – Création de compte
* [ ] US8 – Espace utilisateur
* [ ] US9 – Saisie d’un voyage
* [ ] US10 – Historique covoiturages
* [ ] US11 – Démarrer / Arrêter un trajet
* [ ] US12 – Espace employé
* [ ] US13 – Espace administrateur

---

# 📘 6. Documentation (sera complétée)

* Modèle Conceptuel de Données
* Diagrammes UML (cas d'utilisation, séquence)
* Documentation technique backend
* Documentation frontend
* Manuel utilisateur

---

# 🧑‍💻 7. Auteur

Projet réalisé par **Yves**, dans le cadre du Titre Professionnel DWWM.

Pour US1, tu as besoin de 3 choses :

✔ Une page Home.jsx (présentation + images + barre de recherche + footer)

✔ Un système de routing (React Router)

✔ Une navbar simple (US2) — car on doit pouvoir revenir à l’accueil

🧩 1. INSTALLATION DU ROUTAGE (React Router)

Depuis ton dossier frontend, installe :

npm install react-router-dom
4. CRÉATION DE LA PAGE D’ACCUEIL (US1)
📁 crée :

src/pages/Home.jsx

Voici une page d’accueil pro, complète, déjà stylée Tailwind, conforme à l’énoncé :

présentation de l’entreprise

images illustratives

barre de recherche (départ / arrivée / date)

footer légal
🎉 US1 EST FINIE ✔

En une seule étape, tu as maintenant :

✔ React Router installé
✔ Home Page prête (texte, images, formulaire, footer)
✔ Navbar fonctionnelle (US2 base)
✔ App.jsx propre
✔ Début de structure professionnelle

Enregistrement us1 dans git
git init
✅ 1. Assure-toi d’être dans ton projet

Dans WSL :

cd /mnt/c/Users/yves/Desktop/EcorideZ

✅ 2. Initialise Git (si pas déjà fait)
git init

✅ 3. Crée les branches principales (main & develop)
git checkout -b main
git commit --allow-empty -m "Initial commit - EcoRideZ"
git checkout -b develop


📌 main = version stable / develop = version de travail
Comme demandé dans l’énoncé.

✅ 4. Créer la branche pour US1
git checkout -b feature/US1-homepage

✅ 5. Ajouter les fichiers que tu viens de créer (Home.jsx, Navbar.jsx, App.jsx...)

Depuis la racine EcoRideZ/ :

git add .


⚠️ Vérifie qu’il n’y a pas de fichiers parasites avant d’ajouter tout (git status si besoin)

✅ 6. Commit clair et propre pour US1
git commit -m "US1 – Page d’accueil : présentation, images, barre de recherche, footer"

✅ 7. Push de la branche US1 (si ton dépôt GitHub existe déjà)

Si ton repo GitHub n'est pas encore créé → je peux t’aider à le faire.

Sinon :

git push origin feature/US1-homepage

🟢 8. Crée une Pull Request vers la branche develop (sur GitHub)

Dans GitHub :

Va dans ton repo

Clique sur Compare & Pull Request

Base : develop

Compare : feature/US1-homepage

Titre PR :
US1 — Implémentation de la page d’accueil

Description :
« Création de la page d’accueil : présentation EcoRideZ, images, formulaire de recherche, footer légal. »

Puis Merge.

🎉 US1 est maintenant enregistrée proprement dans ton projet Git !

Tu as :
✔ une branche dédiée
✔ un commit propre
✔ une PR vers develop
✔ une structure conforme à l’ECF
✔ un vrai workflow professionnel