class Products {
    constructor() {
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'Pridėti į krepšelį';
        this.labelRemove = 'Išimti iš krepšelio';
    }

    handlerSetLocalStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);

        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerText = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerText = this.labelAdd;
        }

        ShopCartPage.render(products.length);
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, author, title, price, img }) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' ' + this.classNameActive;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__author">${author}</span>
                    <span class="products-element__title">${title}</span>
                    <img class="products-element__img" src="${img}" />
                    <span class="products-element__price">
                         📚 ${price.toLocaleString()} €
                    </span>
                    <button class="products-element__btn${activeClass}" onclick="productsPage.handlerSetLocalStorage(this, '${id}');">
                        ${activeText}
                    </button>
                </li>
            `;
        });

        const html = `
            <ul id="myList" class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
};
const productsPage = new Products();


// FILTER-SEARCH

$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myList li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
  




// SLIDER


// let offset = 0;
// let products = document.getElementById('products');
// const sliderLine = document.querySelector('.slider-line');

// document.querySelector('.slider-next').addEventListener('click', function(){
//     offset += 310;
//     if (offset > products.length) {
//         offset = 0;
//     }
//     sliderLine.style.left = offset + 'px';
// });

// document.querySelector('.slider-prev').addEventListener('click', function () {
//     offset += 310;
//     if (offset <= 0) {
//         offset = products.length;
//     }
//     sliderLine.style.left = -offset + 'px';
// });

// 2




const card = document.querySelectorAll('.products-slider .slider-line');
const sliderLine = document.querySelector('.products-slider .slider-line');
let count = 0;
let width;

function init() {
    width = 310;
    sliderLine.style.width = width * card.length + 'px';
    card.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count > card) {
        count = 1;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count > 0) {
        count = card.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}


