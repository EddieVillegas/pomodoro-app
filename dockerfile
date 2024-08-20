FROM node:alpine

WORKDIR /app

COPY package*.json dest

RUN npm i

COPY . .

EXPOSE 5173

CMD npm run dev
