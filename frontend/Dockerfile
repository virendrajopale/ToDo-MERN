# Use official Node.js image as base
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to workdir
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build your React app
RUN npm run build

# Expose the port your app runs on (if necessary)
EXPOSE 3000

# Command to run the application (if necessary)
CMD ["npm", "start"]
