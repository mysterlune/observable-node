# DOCKER-VERSION 1.0
FROM node:latest

RUN npm install -g ember-cli@1.13.13
RUN npm install -g bower@1.6.8
#
#COPY . /src
#WORKDIR /src
#
#RUN npm install
#RUN bower install --allow-root
#
#EXPOSE 80
#WORKDIR /src
#
## run ember server on container start
#ENTRYPOINT ["ember"]
#CMD ["server", "--port=80", "--live-reload=false"]