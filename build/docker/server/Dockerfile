FROM php:8.0.13-fpm-alpine3.13

RUN apk add unzip

ADD assets/mastermind-server.zip /var/www/html/.
RUN unzip /var/www/html/mastermind-server.zip
RUN rm /var/www/html/mastermind-server.zip
