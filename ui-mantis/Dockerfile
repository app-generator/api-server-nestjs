FROM node:20-alpine
WORKDIR /app
COPY . .
RUN yarn
RUN yarn global add serve
RUN yarn build
EXPOSE 4000
CMD [ "serve", "-s", "dist" ]