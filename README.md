# Portfolio
Portafolio de Abraham Marianjel

## GitPages
Para acceder a gitpages, primero hay que realizar algunas modificaciones al archivo de React, como lo son por ejemplo el sistema de rutas, el package y la configuración.

package.json

```json
    "homepage": "https://amarianjel.github.io/prueba/",
    "scripts": {
        "predeploy": "vite build",
        "deploy": "gh-pages -d dist"
```

vite.config.js
```js
export default defineConfig({
  plugins: [react()],
  base: "https://amarianjel.github.io/Portfolio/"
})
```

Instalación de librerias

```
yarn add gh-pages
yarn add react-router-dom
```

