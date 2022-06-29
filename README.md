![Imagen de cabecera coinbase.com + Bootstrap](https://repository-images.githubusercontent.com/507161928/d745ce50-0c7d-41cb-a97f-4ad92799768d)

# Coinbase + Bootstrap
Página principal de [coinbase](https://www.coinbase.com) maquetada con:

- Bootstrap
- Sass
- Handlebars
- Webpack

Proyecto final para el curso de HTML y CSS de [Open-Bootcamp](https://open-bootcamp.com).

## Demo

[coinbase-bootstrap.netlify.app](https://coinbase-bootstrap.netlify.app)

<br>
<img src="https://user-images.githubusercontent.com/8589135/175795031-19c123b2-a6a3-4a01-b352-d6626ed7ded6.gif" width="640">
<br>

## Instalación

1. Clonar el repositorio: `git clone https://github.com/badiali/coinbase-bootstrap.git`
2. `npm install`

## Una vez instalado

Se pueden ejecutar tres comandos:

- `npm start` Arranca un servidor y abre una pestaña en el navegador.
- `npm run dev` Se generan los ficheros en la carpeta `./dist` sin minificar.
- `npm run build` Se generan los ficheros en la carpeta `./dist` minificados y listos para subir a producción.

## Dependencias

```
"dependencies": {
  "bootstrap": "^5.2.0-beta1"
},
"devDependencies": {
  "@babel/core": "^7.18.5",
  "@babel/preset-env": "^7.18.2",
  "autoprefixer": "^10.4.7",
  "babel-loader": "^8.2.5",
  "css-loader": "^6.7.1",
  "handlebars": "^4.7.7",
  "handlebars-loader": "^1.7.2",
  "html-webpack-plugin": "^5.5.0",
  "image-minimizer-webpack-plugin": "^3.2.3",
  "imagemin": "^8.0.1",
  "imagemin-mozjpeg": "^10.0.0",
  "mini-css-extract-plugin": "^2.6.1",
  "node-sass": "^7.0.1",
  "postcss": "^8.4.14",
  "postcss-loader": "^7.0.0",
  "purgecss-webpack-plugin": "^4.1.3",
  "sass-loader": "^13.0.0",
  "terser-webpack-plugin": "^5.3.3",
  "webpack": "^5.73.0",
  "webpack-cli": "^4.10.0",
  "webpack-dev-server": "^4.9.2",
  "webpack-merge": "^5.8.0"
}
```
