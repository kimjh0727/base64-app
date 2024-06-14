# Use the official Node.js image as the base image (alpine version for minimal size).
FROM node:18-alpine

# Set the working directory.
WORKDIR /app

# Copy the package.json and package-lock.json files.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code.
COPY . .

# Build the application.
RUN npm run build

# Install serve to serve the built application
RUN npm install -g serve

# Expose the port the app runs on.
EXPOSE 5000

# Start the application.
CMD ["serve", "-s", "build", "-l", "5000"]
