# pull the base image
FROM node:alpine

# set the working direction
RUN mkdir -p /app
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install

# add app
COPY . ./

EXPOSE 3000

# start app
CMD ["npm", "start"]

