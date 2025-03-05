# Step 1: Use an official Node.js image as the base
FROM node:22.14.0

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (or yarn.lock) to the container
COPY package.json package-lock.json* ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of your project files into the container
COPY . .



# Step 7: Expose the port that the app will run on
EXPOSE 4000

# Step 8: Set the default command to run the app
CMD ["npm", "run", "dev"]
