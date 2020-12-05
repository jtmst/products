FROM node:12

WORKDIR /products

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1337

CMD ["npm", "start"]