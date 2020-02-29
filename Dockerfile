FROM node
copy . /var/www
WORKDIR /var/www
RUN npm install
EXPOSE 5000
ENTRYPOINT [ "npm", "start" ]