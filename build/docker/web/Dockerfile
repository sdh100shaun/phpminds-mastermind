FROM nginx:1.20.2-alpine

RUN apk add unzip

ADD assets/mastermind-web.zip /usr/share/nginx/html/.

RUN cd /usr/share/nginx/html/ && unzip mastermind-web.zip
RUN mv -v /usr/share/nginx/html/public/* /usr/share/nginx/html/
RUN rm /usr/share/nginx/html/mastermind-web.zip
RUN rm -rf /usr/share/nginx/html/public/
