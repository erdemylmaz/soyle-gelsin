const productNameArea = document.querySelector('.product-name');
const productImageArea = document.querySelector('.product-image');
const productInfoArea = document.querySelector('.product-info');
const productPriceArea = document.querySelector('.product-price');
const productArea = document.querySelector('.product');
const emptyPage = document.querySelector('.emptyPage');
const cartAmountArea = document.querySelector('.cart-product-count');
const buttons = document.querySelectorAll('.amountBtn');

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
  productPriceArea.innerHTML = `<h3 class="product-price">$${product.productPrice}</h3>`;
  productImageArea.src = product.productImageLink;


  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if(e.target.classList.contains('decrease')) {

      } else if (e.target.classList.contains('increase')) {

      }
    })
  })

} else {
  emptyPage.style.display = "block";
  productArea.style.display = "none";
}

if(JSON.parse(localStorage.getItem('cart')).length != 0) {
  cartAmountArea.textContent = JSON.parse(localStorage.getItem('cart')).length;
}
