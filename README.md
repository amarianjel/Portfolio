# [Abraham Marianjel](https://github.com/amarianjel/Portfolio/)  [<img src="https://i.postimg.cc/wT4x8tWS/codepenblanco.png" alt="LinkedIn" class="footer-nav__link-image" height="30px" />](https://codepen.io/amarianjel/)   [<img src="https://i.postimg.cc/5NBMxTJX/github.png" alt="GitHub" class="footer-nav__link-image" height="30px" />](https://github.com/amarianjel)   [<img src="https://i.postimg.cc/1Xj3mL3G/github-Pages-blanco.png" alt="GitHub" class="footer-nav__link-image" height="70px" style="margin-bottom: -20px;"/>](https://amarianjel.github.io/Portfolio/)  [<img src="https://i.postimg.cc/J7BLFtdc/linkedin.png" alt="LinkedIn" class="footer-nav__link-image" height="30px" />](https://www.linkedin.com/in/amarianjel/)   [<img src="https://i.postimg.cc/1zqYRTyp/facebook.png" alt="LinkedIn" class="footer-nav__link-image" height="30px" />](https://www.facebook.com/Abraham13071993/)   [<img src="https://i.postimg.cc/sfJtqS4W/instagram.png" alt="Instagram" class="footer-nav__link-image" height="30px" />](https://www.instagram.com/abr_marianjel/)

[![Up to Date](https://github.com/ikatyang/emoji-cheat-sheet/workflows/Up%20to%20Date/badge.svg)](https://github.com/ikatyang/emoji-cheat-sheet/actions?query=workflow%3A%22Up+to+Date%22)


# Portafolio
Portafolio con algunos trabajos, descripción y contacto.

## 💻 Instalación 💻
- Ubicarse en la carpeta que contendrá el proyecto
- Abrir terminal de comandos
```
git clone https://github.com/amarianjel/Portfolio.git
yarn
yarn dev
```

## 👨‍💻 Tecnologías Usadas 👨‍💻
<table>
  <thead>
    <tr>
      <th>React</th>
      <th>CSS</th>
      <th>GithubPages</th>
      <th>React-Router</th>
      <th>Sweetalert</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img src="https://i.postimg.cc/MGLcKM3M/React-2.png" width="100%" />
      </td>
      <td>
        <img src="https://i.postimg.cc/mgSDG9F2/css.png" width="100%" />
      </td>
      <td>
        <img src="https://i.postimg.cc/1Xj3mL3G/github-Pages-blanco.png" width="100%" />
      </td>
      <td>
        <img src="https://i.postimg.cc/rFjTM6z7/react-router-color-inverted.png" width="100%" />
      </td>
      <td>
        <img src="https://sweetalert2.github.io/images/SweetAlert2.png" width="100%" />
      </td>
    </tr>
  </tbody>
</table>

## GitHubPages 
Para acceder a gitpages, primero hay que realizar algunas modificaciones al archivo de React, como lo son por ejemplo el sistema de rutas, el package y la configuración.

package.json

```json
    "homepage": "https://amarianjel.github.io/Portfolio/",
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

### Instalación de librerias

```
yarn add gh-pages
yarn add react-router-dom
```

Luego debemos ejecutar el siguiente comando para hacer el dist y subirlos a GitPages:

```
yarn run deploy
```

Por cualquer pregunta me contacta via email abrm.engineer@gmail.com