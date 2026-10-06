# Divar Shop FrontEnd

Nuxt.js 2 front-end for the Divar Shop application.

## Requirements

- Node.js and npm
- A running instance of the Divar Shop BackEnd service when using API-backed features

## Development

Install dependencies:

```bash
npm install
```

Start the development server with hot reload:

```bash
npm run dev
```

The development server runs on port 3000 by default.

## Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

Generate a static site:

```bash
npm run generate
```

## Code formatting

Check formatting:

```bash
npm run lint
```

Apply Prettier formatting:

```bash
npm run lintfix
```

## Service URLs

The backend and CDN service URLs can be overridden through environment variables when the application is built:

- `SERVER_URL` — backend service URL. Default: `https://shop-backend.agahpardazan.ir`
- `SERVER_CDN_URL` — CDN service URL. Default: `https://shop-cdn.agahpardazan.ir`

## Related services

The application is configured to use the Divar Shop BackEnd and CDN services through the URLs defined in `nuxt.config.js`.

This project uses Nuxt 2 with Vue 2.

## Server configuration

The Nuxt server address can be overridden through environment variables:

- `HOST` — server host. Default: `localhost`
- `PORT` — server port. Default: `3000`
