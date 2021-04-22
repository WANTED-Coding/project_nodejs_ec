FROM node:12.19.0-alpine AS builder

# Install yarn

## current path as root
# Create app directory
WORKDIR /usr/src/app

# --no-cache: download package index on-the-fly, no need to cleanup afterwards
# --virtual: bundle packages, remove whole bundle at once, when done
COPY . .
# install app dependencies
RUN npm install --production
RUN npm run build:prod

FROM node:12.19.0-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/node_modules/. ./node_modules  
COPY --from=builder /usr/src/app/dist/. ./dist
COPY ./package.json ./package.json

CMD [ "npm","run","start:prod" ]