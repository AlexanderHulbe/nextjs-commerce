FROM node:18-alpine as builder
WORKDIR /frontend

RUN npm install -global --no-update-notifier --no-fund pnpm
RUN apk add --no-cache g++ make py3-pip libc6-compat

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi

COPY . ./

RUN npm run build


EXPOSE 3000

ENV PORT 3000

ENV COMPANY_NAME "ALHU Media"
ENV SITE_NAME "ProfBoots Skidds"
ENV SHOPIFY_REVALIDATION_SECRET "fec67abb-d21a-4c3e-bb2d-6f99571ca0e7"
ENV SHOPIFY_STOREFRONT_ACCESS_TOKEN "dde8587acbeee05376e7303b0ada1fe0"
ENV SHOPIFY_STORE_DOMAIN "https://test-profboots.myshopify.com"

LABEL org.opencontainers.image.source = "https://github.com/AlexanderHulbe/nextjs-commerce"

CMD ["npm", "start"]