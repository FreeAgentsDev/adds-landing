# Production image for Coolify / Docker.
# Build static site, then serve with Astro preview (not `astro dev`).
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
ENV HOST=0.0.0.0
ENV PORT=4321
ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --from=build /app/dist ./dist
COPY --from=build /app/astro.config.mjs ./
COPY --from=build /app/public ./public
EXPOSE 4321
CMD ["sh", "-c", "npx astro preview --host 0.0.0.0 --port ${PORT:-4321}"]
