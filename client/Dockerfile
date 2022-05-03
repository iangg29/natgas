
FROM node:16-alpine as build
WORKDIR /usr/src/app
COPY build .


FROM fholzer/nginx-brotli:v1.19.1

WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf
COPY build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]