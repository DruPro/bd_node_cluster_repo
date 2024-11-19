FROM node:14

WORKDIR /app

COPY public ./public
COPY index.html .
COPY server.js .
COPY package.json . 

## Installs Required Dependencies. ##
############################
RUN npm install

EXPOSE 3000
CMD ["node","server.js"]