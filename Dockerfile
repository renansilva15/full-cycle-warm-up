FROM node:alpine

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY . .

RUN npm ci

USER node

EXPOSE 3333
# CMD ["tail", "-f", "/dev/null"]
CMD ["node", "index.js"]
