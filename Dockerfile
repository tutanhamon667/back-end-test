# Use the official Node.js image as a base
FROM node:23.4.0-bullseye

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY package*.json ./
RUN ls -al
COPY yarn.lock ./

RUN npm install
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["yarn", "start:dev"]
