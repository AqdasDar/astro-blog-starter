# Aesthetic Production - Site Officiel & Portfolio

Ce projet est le site web officiel bilingue (Français / Anglais) pour **Aesthetic Production** (`https://aesthetic-production.fr`), une société de production cinématographique indépendante spécialisée dans les courts-métrages, les films institutionnels et les documentaires.

---

## 🚀 Fonctionnalités & Technologies

Le site est construit sur une architecture moderne et performante, optimisée pour le SEO et l'accessibilité :

*   **Framework** : [Astro](https://astro.build/) (mode statique `output: 'static'`) pour des performances et des temps de chargement ultra-rapides.
*   **Bilingue** : Structure multilingue native gérant le Français (`/fr/`) et l'Anglais (`/en/`).
*   **Gestion des Contenus (Content Layer)** : Utilisation de l'API Content Layer d'Astro pour charger dynamiquement les fiches des productions depuis des fichiers Markdown (`src/content/productions/`).
*   **Design & Typographie** : Thème personnalisé avec bascule automatique/manuelle entre Mode Sombre et Mode Clair, et intégration de la police accessible *Atkinson Hyperlegible*.
*   **Formulaire de Contact Dynamique** : Traitement des messages via AJAX/Fetch connecté à un script d'envoi d'e-mails PHP sécurisé et auto-hébergé (`public/contact-submit.php`), évitant l'usage de services tiers payants.
*   **Réseaux Sociaux** : Section de coordonnées moderne intégrant une grille de cartes (Code QR Instagram en pleine taille, boutons YouTube et LinkedIn).
*   **SEO & Indexation** :
    *   Métadonnées complètes (OpenGraph, Twitter Cards, balises canoniques).
    *   Génération automatique du plan de site avec `@astrojs/sitemap` (`sitemap-index.xml`).
    *   Fichier de validation Google Search Console intégré.
    *   Force du protocole HTTPS sécurisé via `.htaccess`.

---

## 📂 Structure du Projet

```text
├── .github/workflows/      # Pipelines CI/CD
│   └── deploy.yml          # Déploiement automatique FTP (GitHub Actions)
├── public/                 # Fichiers statiques copiés tels quels au build
│   ├── fonts/              # Polices Atkinson Hyperlegible
│   ├── .htaccess           # Redirection forcée vers HTTPS
│   ├── contact-submit.php  # Gestionnaire PHP du formulaire de contact
│   └── googlexxxx.html     # Fichier de validation Google Search Console
├── src/
│   ├── assets/             # Images et affiches des productions
│   ├── components/         # Composants Astro réutilisables (Galerie, Header, etc.)
│   ├── content/
│   │   └── productions/    # Fiches Markdown des films (séparées en /fr et /en)
│   ├── layouts/            # Gabarits de pages (PageLayout, ProductionPost)
│   └── pages/              # Routes et pages du site (bilingues)
├── astro.config.mjs        # Configuration générale d'Astro (sitemap, site URL)
└── package.json            # Dépendances et scripts de build
```

---

## 🛠️ Commandes Locales

Toutes les commandes s'exécutent depuis la racine du projet dans votre terminal :

| Commande | Action |
| :--- | :--- |
| `npm install` | Installe les dépendances requises (Astro, Sharp, Sitemap, etc.) |
| `npm run dev` | Lance le serveur de développement local sur `http://localhost:4321` |
| `npm run build` | Compile le site en fichiers statiques optimisés dans le dossier `dist/` |
| `npm run preview` | Permet de prévisualiser localement le site compilé avant déploiement |

---

## ✈️ Déploiement Automatique (CI/CD)

Le déploiement du site sur l'hébergement **Infomaniak** est entièrement automatisé grâce à **GitHub Actions**.

À chaque fois que vous poussez un commit sur la branche principale :
```bash
git add .
git commit -m "votre message"
git push
```
La plateforme GitHub va automatiquement :
1. Démarrer un serveur temporaire.
2. Installer les paquets Node.js.
3. Compiler le projet en mode production (`npm run build`).
4. Se connecter en FTP sécurisé à Infomaniak et déposer le dossier `dist/` à la racine de votre site (`/sites/aesthetic-production.fr/`).
