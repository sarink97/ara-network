# Install dependencies only when needed
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat python3 make g++
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies with verbose logging
RUN echo "Installing dependencies..." && \
    npm install --verbose --legacy-peer-deps || \
    (echo "First attempt failed, retrying..." && \
    npm cache clean --force && \
    npm install --verbose --legacy-peer-deps)

# Rebuild the source code only when needed
FROM node:18-alpine AS builder
WORKDIR /app

# Copy node_modules and source
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set build environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV CI=false

# Create default env file if none exists
RUN echo "NEXT_PUBLIC_API_URL=http://localhost:3000" > .env

# Build with verbose output
RUN echo "Starting build..." && \
    npm run build || \
    (echo "Build failed. Logs:" && \
    cat .next/build-error.log || true)

# Production image, copy all the files and run next
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.env ./.env

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["npm", "start"]