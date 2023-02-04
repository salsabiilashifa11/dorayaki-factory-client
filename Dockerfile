# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /src/App

# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN yarn install --silent
RUN yarn install react-scripts@4.0.3-g --silent

# add app
COPY . ./

# start app
CMD ["yarn", "start"]