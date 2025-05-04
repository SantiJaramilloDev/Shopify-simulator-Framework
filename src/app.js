import './styles/main.scss'
console.log('Gradiweb is online!!!');

document.addEventListener('DOMContentLoaded', () => {
    const viewButton = document.querySelector('.featured-products__button');
    const hiddenList = document.querySelector('.featured-products__list--hidden');
    const cards = document.querySelectorAll('.featured-products__list--hidden .product-card');
    const allProductsButton = document.querySelector('.navbar__buttons-content a[href="#"]'); // Botón "All Products"
    const collectionsButton = document.querySelector('.navbar__buttons-content a[href="#"] + a'); // Botón "Collections"
    const featuredProductsSection = document.querySelector('.marquee');
    const collectionsSection = document.querySelector('.latest-collections');
    let isExpanded = false;

    if (viewButton && hiddenList) {
        viewButton.addEventListener('click', () => {
            isExpanded = !isExpanded;

            if (isExpanded) {
                hiddenList.classList.remove('featured-products__list--hidden');
                hiddenList.classList.add('featured-products__list--visible');
                cards.forEach((o) => o.classList.add('product-card--visible'));
                viewButton.textContent = 'VIEW LESS';
            } else {
                hiddenList.classList.remove('featured-products__list--visible');
                hiddenList.classList.add('featured-products__list--hidden');
                viewButton.textContent = 'VIEW ALL';
            }
        });
    }

    if (allProductsButton && featuredProductsSection) {
        allProductsButton.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.navbar__buttons-link').forEach(el => el.classList.remove('active')); // Remover clase activa de otros botones
            allProductsButton.classList.add('active');
            featuredProductsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    if (collectionsButton && collectionsSection) {
        collectionsButton.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.navbar__buttons-link').forEach(el => el.classList.remove('active')); // Remover clase activa de otros botones
            collectionsButton.classList.add('active');
            collectionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
});