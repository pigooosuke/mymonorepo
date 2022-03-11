# ref: https://github.com/Saluki/nestjs-template/blob/46c097be1620eb1e0930fc627944957e43b180ba/Dockerfile
# check: https://github.com/prisma/prisma/issues/8478
FROM amd64/node:16-alpine as builder

ENV NODE_ENV build
ENV SRC /packages/backend

USER node
WORKDIR /home/node

COPY $SRC/package*.json ./
RUN npm ci

COPY --chown=node:node ./$SRC .
RUN npm run prisma:generate
RUN npm run build \
    && npm prune --production

# ---

FROM amd64/node:16-alpine

ENV NODE_ENV production

USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/package*.json ./
COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/dist/ ./dist/

CMD ["node", "dist/main.js"]