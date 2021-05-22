class Shopping {
    handlerClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, img, title, price }) => {

            // td = document.createElement('td');
            //     let img = document.createElement('img');
            //     img.src = img;
            //     td.append(img);
            //     tr.append(td);

            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__img">  ${img}</td>
                        <td class="shopping-element__title">  ${title}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} €</td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handlerClear();"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name"> Iš viso:</td>
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()} €</td>
                    </tr>
                </table>
            </div>
        `;

        ROOT_SHOPPING.innerHTML = html;
    }
};

const shoppingPage = new Shopping();
