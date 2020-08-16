# Hoteles

This web app is developed with [Nuxt.js](https://nuxtjs.org)

## Environment Variables

In the repository you will find a file called .env.example, copy its content into a new one with the name .env

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Add product

To add a hotel there is a hidden route, just go to http://localhost:3000/add

## API

In each request, the token generated with the firebase sdk is sent. The backend validates that it is valid in order to allow all operations to be performed. This token is automatically sent by an interceptor, found in plugin/axios.js. It should be noted that firebase only uses sdk to maintain authentication states. The data and the validations of the users are stored in the backend/API.
