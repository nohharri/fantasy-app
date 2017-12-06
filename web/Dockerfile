FROM node:carbon

# Go to app directory
WORKDIR /usr/src/app

# Copy package.json into app directory
COPY package*.json ./

RUN npm install
# For production:
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 3000 3030 3001

# CMDS do one thing
CMD ["npm", "run", "build"]
# Runs both the frontend and backend APIs
CMD ["npm", "run", "dev"]