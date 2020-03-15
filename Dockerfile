# build environment
FROM node:12.14.1 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
COPY . /app
RUN npm run build

# production environment
FROM nginx:1.17-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

# heroku container:login
# heroku container:push web -a live-apps-authentication
# heroku container:release web -a live-apps-authentication
# heroku open -a live-apps-authentication