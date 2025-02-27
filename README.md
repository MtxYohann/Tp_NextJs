# Projet : 🎵 Site pour une école de musique 

## ⚙ Installtion et initialisation 

### 1️⃣ Installation **pnpm**

#### ✅/❌ Prérequis

Avoir node et npm d'installé sur son poste :
[Documentation Node.js et npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

ensuite, éxécuter la commande : `npm install -g pnpm@latest-10`

### 2️⃣ **Clonner** le dépôt

Utiliser la commande suivante : 

`git clone https://github.com/MtxYohann/Tp_NextJs.git`

### 3️⃣ Installer les packages

Utiliser la commande suivante :

`pnpm i`

### 💻 Créer et remplir le fichier .env 

À partir du fichier `.env.exemple`, remplissez les informations de votre base de données.

### 🔥 Lancer le projet 

Utiliser la commande suivante :

`pnpm run start`

#### 🌐 Projet déployé sur Vercel

[https://tp-next-js-hw9b.vercel.app/](https://tp-next-js-hw9b.vercel.app/)

## 👨‍💻 Fonctionnalité de l'application et utilisation type

Pour la première utilisation (en local), rendez-vous sur `http://localhost:3000/seed` pour obtenir un premier jeu de données.

Pour vérifier que tout est bon, vous pouvez vous rendre sur `http://localhost:3000/query`. Un exemple de données ajoutées devrait apparaître.

La suite se passe sur `http://localhost:3000`.

Il faudra se connecter avec l'utilisateur admin :

- **Email** : `admin@musique.com`
- **Mot de passe** : `123456`

Vous êtes maintenant connecté en tant qu'Admin.

Votre rôle vous permet de vous rendre dans l'onglet `Admin`.

Dans cet onglet, vous allez pouvoir créer un utilisateur et choisir son rôle. Pour la suite, je vous conseille de créer un enseignant et un étudiant.

Connectez-vous avec votre compte enseignant.

Votre rôle vous permet de vous rendre dans les onglets `Gestion Cours` et `Gestion Note`.

### Gestion Cours

Vous allez pouvoir Créer / Supprimer / Modifier ou obtenir des informations sur les cours.

### Gestion Note

La liste des élèves est affichée et vous pouvez voir dans quels cours ils sont inscrits avec le bouton `Voir les cours`. C'est ici que vous pourrez ajouter ou modifier une note et un commentaire.

### Partie Étudiant

Vous avez accès aux onglets `Cours` et `Mon espace`.

#### Onglet Cours

Vous aurez la liste des cours ainsi que la possibilité de vous inscrire.

#### Onglet Mon espace

Vous pourrez retrouver vos cours ainsi que les notes et commentaires.
