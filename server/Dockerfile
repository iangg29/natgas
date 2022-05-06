FROM node:16-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
RUN wget https://dl.google.com/cloudsql/cloud_sql_proxy.linux.amd64 -O cloud_sql_proxy
RUN chmod +x cloud_sql_proxy
COPY . .
EXPOSE 8080
CMD ["node", "server.js","sh", "-c", "./cloud_sql_proxy -instances=$smart-code-itesm:us-central1:natgas-db=tcp:0.0.0.0:3306 & npm start"]