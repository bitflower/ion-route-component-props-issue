FROM mhart/apline-node:8

WORKDIR /usr/src

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm build
