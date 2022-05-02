
FROM node:14-alpine as node

WORKDIR /app

COPY . ./


FROM fholzer/nginx-brotli:v1.19.1

WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

COPY ./build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]