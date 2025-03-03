# Étape 2 : Image de production allégée
FROM node:20-alpine

WORKDIR /app


COPY --from=builder /app/package.json /app/package-lock.json* ./
RUN npm ci --only=production

COPY --from=builder /app/.next .next
COPY --from=builder /app/public public


EXPOSE 3000


ENV NODE_ENV=production
CMD ["npm", "run", "start"]
