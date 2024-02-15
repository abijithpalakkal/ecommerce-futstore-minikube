FROM node:17-alpine

WORKDIR /usr/src/app
copy package*.json .
RUN npm ci
COPY . .
EXPOSE 3000
# required for docker desktop port mapping
CMD ["npm","start"]