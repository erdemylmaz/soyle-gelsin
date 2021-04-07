const productNameArea = document.querySelector('.product-name');
const productImageArea = document.querySelector('.product-image');
const productInfoArea = document.querySelector('.product-info');
const productPriceArea = document.querySelector('.product-price');
const productAmountArea = document.querySelector('.amount')
const productArea = document.querySelector('.product');
const emptyPage = document.querySelector('.emptyPage');
const cartAmountArea = document.querySelector('.cart-product-count');
const buttons = document.querySelectorAll('.amountBtn');
const addBtn = document.querySelector('.add-div');
const successfulDiv = document.querySelector('.successful');

if(localStorage.getItem('product') != "") {

  class Product {
    product = JSON.parse(localStorage.getItem('product'));

    productName = this.product.name;
    productImageLink = this.product.imageLink;
    productPrice = this.product.price;
    productInfo = this.product.information;

  }

  const product = new Product();

  productArea.style.display = "flex";
  emptyPage.style.display = "none";

  document.title = `${product.productName} | Soyle Gelsin`;

  productNameArea.textContent = product.productName;
  productInfoArea.textContent = product.productInfo;
  productPriceArea.innerHTML = `$<h3 class="product-price">${product.productPrice}</h3>`;
  productImageArea.src = product.productImageLink;


  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      var amount = parseInt(productAmountArea.textContent);
      if(e.target.classList.contains('decrease-amount')) {
        if(amount > 1) {
          amount--;
          productAmountArea.textContent = amount;
        }
      } else if (e.target.classList.contains('increase-amount')) {
        amount++;
        productAmountArea.textContent = amount;
      }
    })
  })

  class App {

    addToCart = (e) => {
      let cart = JSON.parse(localStorage.getItem('cart'));

      let productName = productNameArea.textContent;
      let productPrice = parseInt(productPriceArea.firstElementChild.textContent);
      let productAmount = parseInt(productAmountArea.textContent);
      let productTotalPrice = productPrice * productAmount;
      let productImage = productImageArea.src;

      if(JSON.parse(localStorage.getItem('cart')).length != 0) {
        for(let x = 0; x < cart.length; x++) {
          if(cart[x].name == productName) {
            var currentAmount = cart[x].amount;
            cart.splice(x, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
          }
        }

        cart.push({
          name: productName,
          price: productPrice,
          amount: productAmount,
          totalPrice: productTotalPrice,
          imageLink: productImage,
        });

        if(currentAmount) {
          cart[cart.length - 1].amount = currentAmount + cart[cart.length - 1].amount;
          cart[cart.length - 1].totalPrice = cart[cart.length - 1].amount * cart[cart.length - 1].price;
          localStorage.setItem('cart', JSON.stringify(cart));
        }

        cartAmountArea.textContent = cart.length;
        localStorage.setItem('cart', JSON.stringify(cart));

      } else {
        cart.push({
          name: productName,
          price: productPrice,
          amount: productAmount,
          totalPrice: productTotalPrice,
          imageLink: productImage,
        });

        cartAmountArea.textContent = cart.length;
        localStorage.setItem('cart', JSON.stringify(cart));
      }
      cartAmountArea.textContent = cart.length;

      successfulDiv.style.display = "block";
      setTimeout(() => {
          successfulDiv.style.display = "none";
      }, 5000)

    }
  }

  const app = new App();

  addBtn.addEventListener('click', app.addToCart);

} else {
  emptyPage.style.display = "block";
  productArea.style.display = "none";
}

if(JSON.parse(localStorage.getItem('cart')).length != 0) {
  cartAmountArea.textContent = JSON.parse(localStorage.getItem('cart')).length;
}
