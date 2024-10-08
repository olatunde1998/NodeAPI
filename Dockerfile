FROM node:14
ENV NODE_ENV=production
WORKDIR /
# COPY ["package.json", "package-lock.json*", "./"]
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

CMD ["node", "server.js"]