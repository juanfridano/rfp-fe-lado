# Use Node.js 18 as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the app will run (assuming your app uses port 3000)
EXPOSE 3000

# Build the Next.js application
RUN npm run build

# Specify the command to run your application
CMD ["npm", "start"]
