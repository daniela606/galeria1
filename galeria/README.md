# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



-----------------------------------------------------------------------------------------
Librerias que se utilizaron para el funcionamiento:

npm install @mui/material @emotion/react @emotion/styled
npm install framer-motion
npm install styled-components
npm install react-router-dom
npm install react-spring

# Galería de Arte 3D

Este proyecto es una galería de arte 3D interactiva creada con React y @react-three/fiber. Los usuarios pueden hacer clic en las obras de arte para ver una descripción detallada y dejar comentarios que se guardan temporalmente en `localStorage`.

## Instrucciones para ejecutar la aplicación

### Prerrequisitos

Asegúrate de tener instalado Node.js y npm en tu máquina. Puedes descargarlos desde nodejs.org.

### Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/galeria-arte-3d.git
