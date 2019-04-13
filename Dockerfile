FROM node:10

WORKDIR /usr/scr/app

# Cloud run will look for this var to expose the service
ENV PORT 8080
# Nuxt looks for this var to determine where to serve the app
# 0.0.0.0 seems to mean the default route of the machine
# https://www.howtogeek.com/225487/what-is-the-difference-between-127.0.0.1-and-0.0.0.0/
# so localhost is just a loopback for the something to access that same machine
# 0.0.0.0 can expose to the world
ENV HOST 0.0.0.0

COPY package*.json ./
# Install only non dev dependencies
RUN npm install --only=production
# Copy from local dir to usr/src/app in docker container
COPY . .

RUN npm run build

# USE CMD to start the server since this will run when the container is run
# RUN is run when the container is built
CMD npm start
