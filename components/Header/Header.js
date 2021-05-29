var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
   
  }

//   // LOGIN

// class Login {
//   constructor () {
//     this.classNameActive = 'login_btn_active';
//     this.labelAdd = 'Prisijungti';
//     this.labelRemove = 'Atsijungti';
//   }
//    handlerSetLocalStorage(username, pwd) {
//      const { pushLogin, login } = localStorageUtil.putLogin(pwd);

     
//      if (pushLogin) {
//       element.classList.add(this.classNameActive);
//       element.innerText = this.labelRemove;
//   } else {
//       element.classList.remove(this.classNameActive);
//       element.innerText = this.labelAdd;
//   }
// LoginCart.render(login);
//    }
// }

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

      CATALOG.forEach(({ id }) => {
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

      ROOT_HEADER.innerHTML = html;
  }
};
const productsPage = new Products();


  // window.onload = ()=>{
  //   this.sessionStorage.setItem("username", "Audrius");
  //   this.sessionStorage.setItem("password", "A123321");
  // }

  // var input = document.getElementsByTagName('input');
  // var login = document.getElementById('log-in');
  // var form = document.querySelector('form');
  // form.onsubmit = ()=>{return false}

  // login.onclick = ()=>{
  //   if ((input[0].value !="") && (input[1].value !="")) 
  //   {
  //     if ((input[0].value == sessionStorage.getItem("username")) &&
  //      (input[0].value == sessionStorage.getItem("password")))
  //       {
  //         form.onsubmit = ()=>{return 1}
  //       }
  //       else
  //       {
  //         if ((input[0].value !== sessionStorage.getItem("username")))
  //         {
  //           input[0].nextElementSibling.textContent = "Username Not match";
  //           setTimeout(()=>{
  //             input[0].nextElementSibling.textContent = "";
  //           }, 2000); 
  //         }
  //         if ((input[0].value !== sessionStorage.getItem("username")))
  //         {
  //           input[0].nextElementSibling.textContent = "Username Not match";
  //           setTimeout(()=>{
  //             input[0].nextElementSibling.textContent = "";
  //           }, 2000); 
  //         }
  //       }
  //       }
  //   }
  //   else
  //   {
  //     if (input[0].value != "")
  //     {
  //       input[0].nextElementSibling.textContent = "Username is empty";
  //       setTimeout(()=>{
  //         input[0].nextElementSibling.textContent = "";
  //       }, 2000);
  //     }
  //     if (input[0].value != "")
  //     {
  //       input[0].nextElementSibling.textContent = "Password is empty";
  //       setTimeout(()=>{
  //         input[0].nextElementSibling.textContent = "";
  //       }, 2000);
  //     }
  //   }
  // }






  

  
//   class Shopping {
//     handlerClear() {
//         ROOT_HEADER.innerHTML = '';
//     }

//     render() {
//         const productsStore = localStorageUtil.getProducts();
//         let htmlCatalog = '';
//         let sumCatalog = 0;

//         CATALOG.forEach(({ id, img, title, price }) => {

//             // td = document.createElement('td');
//             //     let img = document.createElement('img');
//             //     img.src = img;
//             //     td.append(img);
//             //     tr.append(td);

//             if (productsStore.indexOf(id) !== -1) {
//                 htmlCatalog += `
//                     <tr>
//                         <td><img id="shop-cart-img" class="products-element__img" src="${img}" /> </td>
//                         <td class="shopping-element__title">  ${title}</td>
//                         <td class="shopping-element__price">${price.toLocaleString()} €</td>
//                     </tr>
//                 `;
//                 sumCatalog += price;
//             }
//         });

//         const html = `
//             <div class="shopping-container">
//                 <div class="shopping__close" onclick="shoppingPage.handlerClear();"></div>
//                 <table>
//                     ${htmlCatalog}
//                     <tr class="total" >
//                         <td class="shopping-element__total"></td>
//                         <td class="shopping-element__total"> Iš viso:</td>
//                         <td class="shopping-element__totalPrice">${sumCatalog.toLocaleString()} €</td>
//                     </tr>
//                 </table>
//             </div>
//         `;

//         ROOT_HEADER.innerHTML = html;
//     }
// };

// const shoppingPage = new Shopping();