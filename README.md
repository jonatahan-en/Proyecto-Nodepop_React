# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Estado del Proyecto

### Problemas Conocidos

1. **Botón de Borrar y Autorización:**
   - El botón de borrar actualmente no funciona como se espera.
   - Los usuarios no pueden borrar sus propios anuncios, y no hay una restricción que impida a los usuarios borrar anuncios que no les pertenecen.

2. **Filtros:**
   - Los filtros para buscar y ordenar productos aún no están implementados.

### Mejoras Futuras

- Arreglar la funcionalidad del botón de borrar para asegurar que los usuarios puedan borrar sus propios anuncios.
- Implementar una autorización adecuada para evitar que los usuarios borren anuncios que no les pertenecen.
- Añadir filtros para permitir a los usuarios buscar y ordenar productos según varios criterios.

Siéntete libre de contribuir al proyecto abordando estos problemas o añadiendo nuevas funcionalidades.
