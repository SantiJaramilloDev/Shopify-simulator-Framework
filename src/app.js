// Importa estilos principales
import './styles/main.scss';

// Mensaje de prueba para asegurar que JS está cargando
console.log('Gradiweb is online!!!');

document.addEventListener('DOMContentLoaded', () => {
  // Botón "VIEW ALL" y tarjetas de productos
  const viewButton = document.querySelector('.featured-products__button');
  const productCards = document.querySelectorAll('.featured-products__list .product-card');

  // Botones de navegación
  const allProductsButton = document.querySelector('.navbar__buttons-content a[href="#"]');
  const collectionsButton = document.querySelector('.navbar__buttons-content a[href="#"] + a');

  // Secciones a las que se hace scroll
  const featuredProductsSection = document.querySelector('.marquee');
  const collectionsSection = document.querySelector('.latest-collections');

  // Modal y elementos relacionados
  const modal = document.querySelector('.modal');
  const modalOpenButton = document.querySelector('.navbar__logomb-hb');
  const modalCloseButton = document.querySelector('.modal__close');
  const modalOverlay = document.querySelector('.modal__overlay');

  let isExpanded = false;

  // Detecta si la vista es móvil
  const isMobile = window.innerWidth <= 480;

  if (isMobile) {
    // En móvil: mostrar todos los productos y ocultar el botón
    productCards.forEach((card) => {
      card.classList.remove('product-card--hidden');
      card.classList.add('product-card--visible');
    });

    if (viewButton && viewButton.parentElement) {
      viewButton.parentElement.style.display = 'none';
    }
  } else {
    // En desktop: mostrar solo los primeros 4 productos
    productCards.forEach((card, index) => {
      if (index >= 4) {
        card.classList.add('product-card--hidden');
      }
    });

    // Alternar entre mostrar todos o solo 4 productos
    if (viewButton) {
      viewButton.addEventListener('click', () => {
        isExpanded = !isExpanded;

        productCards.forEach((card, index) => {
          if (index >= 4) {
            card.classList.toggle('product-card--hidden', !isExpanded);
            card.classList.toggle('product-card--visible', isExpanded);
          }
        });

        viewButton.textContent = isExpanded ? 'VIEW LESS' : 'VIEW ALL';
      });
    }
  }

  // Scroll suave a la sección "All Products"
  if (allProductsButton && featuredProductsSection) {
    allProductsButton.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.navbar__buttons-link').forEach(el => el.classList.remove('active'));
      allProductsButton.classList.add('active');
      featuredProductsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Scroll suave a la sección "Collections"
  if (collectionsButton && collectionsSection) {
    collectionsButton.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.navbar__buttons-link').forEach(el => el.classList.remove('active'));
      collectionsButton.classList.add('active');
      collectionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Abrir modal al hacer clic en el ícono del menú (mobile)
  modalOpenButton.addEventListener('click', () => {
    modal.classList.add('modal--active');
  });

  // Cerrar modal con botón de cerrar
  modalCloseButton.addEventListener('click', () => {
    modal.classList.remove('modal--active');
  });

  // Cerrar modal haciendo clic en el fondo (overlay)
  modalOverlay.addEventListener('click', () => {
    modal.classList.remove('modal--active');
  });
});