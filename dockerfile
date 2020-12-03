FROM node:12

WORKDIR /products

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]