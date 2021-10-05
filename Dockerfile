FROM node:12.18.1

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

COPY . .

RUN npm install

CMD [ "node", "index.js" ]
