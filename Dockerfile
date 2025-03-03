# Étape 1 : Utilisation d'une image Node.js optimisée
FROM node:20-alpine AS builder

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier uniquement les fichiers essentiels
COPY package.json package-lock.json* ./ 

# Installer les dépendances
RUN npm install --frozen-lockfile

# Copier le reste du code source
COPY . .

# Construire l'application Next.js
RUN npm run build

# Étape 2 : Image de production allégée
FROM node:20-alpine

WORKDIR /app

# Copier uniquement le build et les dépendances nécessaires
COPY --from=builder /app/package.json /app/package-lock.json* ./
RUN npm install --production --frozen-lockfile

COPY --from=builder /app/.next .next
COPY --from=builder /app/public public

# Exposer le port de l'application
EXPOSE 3000

# Lancer l'application
CMD ["npm", "run", "start"]