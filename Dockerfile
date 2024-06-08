
FROM node:14 AS builder

WORKDIR /app

COPY package*.json yarn.lock ./


RUN yarn install --frozen-lockfile


COPY . .

RUN yarn build


FROM node:14-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./ 
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main.js"]
