# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# Copies package.json and package-lock.json to Docker environment
COPY ["package.json", "package-lock.json", "./"]

# Installs all node packages
RUN npm install

# Copies everything over to Docker environment
COPY . .
# Uses port which is used by the actual application
EXPOSE 9000

CMD ["npm", "start"]
