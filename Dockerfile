# Use an official Node.js image as the base.
# This is the "build stage" in a multi-stage build.
# We'll use a slim image in the final stage to reduce the image size.
FROM node:18-alpine AS builder

# Set the working directory inside the container.
WORKDIR /app

# Copy the package.json and package-lock.json files first.
# This allows Docker to cache the 'npm install' step.
COPY package*.json ./

# Install application dependencies.
RUN npm install

# Copy the rest of the application source code.
COPY . .

# Cloud Run and many other Google Cloud services expect the application to listen on a port.
# The `PORT` environment variable is often provided automatically by the environment.
# Expose the port your application will listen on.
EXPOSE 8080

# The command to run the application.
# Use 'CMD' to specify the default command for the final image.
CMD ["npm", "start"]
