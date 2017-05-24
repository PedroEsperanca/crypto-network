FROM alexsuch/angular-cli:latest

WORKDIR /project

ADD . .

RUN yarn install
RUN ng build --prod

FROM jonnybgod/alpine-nginx:master

WORKDIR /src

COPY --from=0 /project/dist/ .
ADD ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 443

ENTRYPOINT ["nginx"]