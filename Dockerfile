# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app

RUN npm install --silent

# start app
CMD ["npm", "start"]

# to run docker after build
# docker build -t sample:dev .
# docker run -v /${PWD}:/app -v /app/node_modules -p 3001:3001 -e CHOKIDAR_USEPOLLING=true --rm sample:dev