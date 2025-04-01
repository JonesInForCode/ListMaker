FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-14

# Install xvfb and other dependencies
RUN apt-get update && \
    apt-get install -y xvfb libgtk-3-0 libx11-xcb1 libxtst6 libxss1 libnss3 libasound2

# Set working directory
WORKDIR /workspace

# Copy project files
COPY . .

# Install project dependencies
RUN npm install

# Command to run the app
CMD ["xvfb-run", "--auto-servernum", "--server-args=-screen 0 1024x768x24", "npm", "start"]