
class ShopCart {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
            <div class="ShopCart-container">
                <div class="ShopCart-counter" onclick="ShopCartPage.handlerOpenShoppingPage();">
                <img src="https://img.icons8.com/material-outlined/50/000000/buy.png"/>  ${count}
                </div>
            </div>
        `;
        ROOT_SHOPCART.innerHTML = html;  
    }
};

const ShopCartPage = new ShopCart();