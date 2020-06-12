FROM node

WORKDIR /backend

COPY package.json /backend/package.json
RUN npm install

COPY . /backend

CMD ["npm", "start"]
