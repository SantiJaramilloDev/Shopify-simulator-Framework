# 🛍️ Shopify Simulator

Este proyecto es una réplica de una tienda , desarrollada como parte de una prueba técnica. La implementación busca emular fielmente una experiencia real de usuario en una tienda Shopify, utilizando un motor de plantillas `liquidjs`, Express y Webpack.

---

## 📸 Vista previa

![Vista general del sitio](./assets/homepage.png) <!-- Reemplaza con una imagen si la tienes -->

---

## ✨ Características principales

- 🎯 **Pixel-perfect layout** basado en una tienda existente.
- 📱 **Responsive design**: visualización adaptada para dispositivos móviles.
- 🧩 Componentes desacoplados con `Liquid`, organizados por secciones.
- 📦 Simulación de lógica de frontend dinámica (modales, scroll, vista de productos).
- 📂 Estilos organizados con SASS (estructura modular).
- ⚙️ Webpack configurado para compilación y hot reload.

---

## 🛠️ Tecnologías utilizadas

| Categoría     | Herramientas                      |
|---------------|-----------------------------------|
| Frontend      | Vanilla JS, SASS, LiquidJS        |
| Backend       | Node.js, Express                  |
| Build Tooling | Webpack, Sass Loader              |
| Dev Tools     | Nodemon, Webpack Hot Middleware   |

---

## 🔧 Estructura del proyecto

Shopify-simulator-Framework/
├── 📁 assets/                # Imágenes y recursos estáticos
│   └── 🖼️ shuffle-logo.png
├── 📁 components/            # Componentes reutilizables en Liquid
│   ├── navbar.liquid
│   ├── hero-banner.liquid
│   ├── featured-products.liquid
│   └── collections.liquid
├── 📁 public/                # Archivos públicos servidos directamente
│   └── 📄 main.js            # Bundle generado por Webpack
├── 📁 src/                   # Código fuente
│   ├── 📁 styles/            # Estilos SASS organizados modularmente
│   │   ├── base/
│   │   │   ├── _reset.scss
│   │   │   └── _typography.scss
│   │   ├── components/
│   │   │   ├── _herobanner.scss
│   │   │   ├── _marquee.scss
│   │   │   ├── _products.scss
│   │   │   ├── _collections.scss
│   │   │   └── _modal.scss
│   │   ├── layout/
│   │   │   ├── _navbar.scss
│   │   │   ├── _topbar.scss
│   │   │   └── _footer.scss
│   │   └── pages/
│   │       └── _index.scss
│   ├── 📄 main.scss          # Archivo principal que importa todos los estilos
│   └── 📄 app.js             # Lógica principal del frontend
├── 📁 views/                 # Plantillas de página
│   └── 📄 index.liquid
├── 📄 server.js              # Servidor Express
├── 📄 package.json           # Dependencias y scripts
├── 📄 webpack.config.js      # Configuración de Webpack
└── 📄 README.md              # Documentación del proyecto

---

## 🚀 Instalación y ejecución local

1. **Clona el repositorio**  
   ```bash
   git clone https://github.com/SantiJaramilloDev/Shopify-simulator-Framework.git
2. **Instala las dependencias**  
   ```bash
   npm install
3. **Inicia el servidor de desarrollo**  
   ```bash
   npm run dev
4. **Abre en tu navegador**
   http://localhost:3000  