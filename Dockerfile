FROM node:20-bullseye AS builder

WORKDIR /opt/app

# Install dependencies first for better layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy the source and build the production bundle
COPY . .
RUN npm run build

# Provide SPA-friendly routing, cache headers, and an API proxy template.
FROM registry.redhat.io/ubi10/nginx-126

COPY nginx.conf.template /tmp/nginx.conf.template
COPY --from=builder /opt/app/dist .

EXPOSE 8080
CMD ["/bin/sh", "-c", "envsubst '\\$API_PROXY_URL' < /tmp/nginx.conf.template > ${NGINX_DEFAULT_CONF_PATH}/nginx.conf && exec nginx -g 'daemon off;'"]
