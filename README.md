# Dashboard

> Data fetching, data visualisation, React.js

## Features, packages

- Built using [Vite]() -- a `create-vite` project with [vite-react-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) template
- Uses [axios](https://axios-http.com/) HTTP client, also
- [Recharts](https://recharts.org/en-US) for diagrams & charts (a [d3.js](https://d3js.org/) + React.js library which produces SVG based output)
- [MUI](https://mui.com/core/) for layout, typography, colors & faked UI elements

## Usage

1. Clone project & install dependencies
2. Rename `example.env.local` to `.env.local` & fill with relevant `url`, `user`, `password` data
3. Check the app

```bash
$ npm run preview
```

or

4. Build & serve

```bash
$ npm run build
$ npx http-server dist
```
