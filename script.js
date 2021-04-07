const productsArea = document.querySelector('.products');
const tagLinks = document.querySelectorAll('.item');

if(!localStorage.getItem('cart')){
  localStorage.setItem('cart', JSON.stringify([]));
}

localStorage.setItem('product', '');

class App {
  products = [
    {
      name: 'iPhone',
      price: '1000',
      tag: 'technology',
      information: 'This is new iphone',
    },
    {
      name: 'AtomicHabits',
      price: '40',
      tag: 'book',
      information: 'Best book for self groving',
    },
    {
      name: 't-shirt',
      price: '50',
      tag: "accessories",
      information: 'Basic SpaceX t-shirt',
    },
    {
      name: 'Macbook',
      price: '1300',
      tag: "technology",
      information: 'Best laptop for programmin',
    },
    {
      name: 'Watch',
      price: '2000',
      tag: "accessories",
      information: 'Smart watch',
    },
    {
      name: 'iPad',
      price: '350',
      tag: "technology",
      information: 'Best technologic product for home school',
    },
    {
      name: 'iPhone',
      price: '1000',
      tag: 'technology',
      information: 'this is new iphone',
    },
    {
      name: 'AtomicHabits',
      price: '40',
      tag: 'book',
      information: 'this is new iphone',
    },
    {
      name: 't-shirt',
      price: '50',
      tag: "accessories",
      information: 'this is new iphone',
    },
    {
      name: 'Macbook',
      price: '1300',
      tag: "technology",
      information: 'this is new iphone',
    },
    {
      name: 'Watch',
      price: '2000',
      tag: "accessories",
      information: 'this is new iphone',
    },
    {
      name: 'iPad',
      price: '350',
      tag: "technology",
      information: 'this is new iphone',
    },
    {
      name: 'iPhone',
      price: '1000',
      tag: 'technology',
      information: 'this is new iphone',
    },
    {
      name: 'AtomicHabits',
      price: '40',
      tag: 'book',
      information: 'this is new iphone',
    },
    {
      name: 't-shirt',
      price: '50',
      tag: "accessories",
      information: 'this is new iphone',
    },
    {
      name: 'Macbook',
      price: '1300',
      tag: "technology",
      information: 'this is new iphone',
    },
    {
      name: 'Watch',
      price: '2000',
      tag: "accessories",
      information: 'this is new iphone',
    },
    {
      name: 'iPad',
      price: '350',
      tag: "technology",
      information: 'this is new iphone',
    },
    {
      name: 'iPhone',
      price: '1000',
      tag: 'technology',
      information: 'this is new iphone',
    },
    {
      name: 'AtomicHabits',
      price: '40',
      tag: 'book',
      information: 'this is new iphone',
    },
    {
      name: 't-shirt',
      price: '50',
      tag: "accessories",
      information: 'this is new iphone',
    },
    {
      name: 'Macbook',
      price: '1300',
      tag: "technology",
      information: 'this is new iphone',
    },
    {
      name: 'Watch',
      price: '2000',
      tag: "accessories",
      information: 'this is new iphone',
    },
    {
      name: 'iPad',
      price: '350',
      tag: "technology",
      information: 'this is new iphone',
    },
    {
      name: 'iPhone',
      price: '1000',
      tag: 'technology',
      information: 'this is new iphone',
    },
    {
      name: 'AtomicHabits',
      price: '40',
      tag: 'book',
      information: 'this is new iphone',
    },
    {
      name: 't-shirt',
      price: '50',
      tag: "accessories",
      information: 'this is new iphone',
    },
    {
      name: 'Macbook',
      price: '1300',
      tag: "technology",
      information: 'this is new iphone',
    },
    {
      name: 'Watch',
      price: '2000',
      tag: "accessories",
      information: 'this is new iphone',
    },
    {
      name: 'iPad',
      price: '350',
      tag: "technology",
      information: 'this is new iphone',
    },
    {
      name: 'iPhone',
      price: '1000',
      tag: 'technology',
      information: 'this is new iphone',
    },
    {
      name: 'AtomicHabits',
      price: '40',
      tag: 'book',
      information: 'this is new iphone',
    },
    {
      name: 't-shirt',
      price: '50',
      tag: "accessories",
      information: 'this is new iphone',
    },
    {
      name: 'Macbook',
      price: '1300',
      tag: "technology",
      information: 'this is new iphone',
    },
    {
      name: 'Watch',
      price: '2000',
      tag: "accessories",
      information: 'this is new iphone',
    },
    {
      name: 'iPad',
      price: '350',
      tag: "technology",
      information: 'this is new iphone',
    },
    {
      name: 'iPhone',
      price: '1000',
      tag: 'technology',
      information: 'this is new iphone',
    },
    {
      name: 'AtomicHabits',
      price: '40',
      tag: 'book',
      information: 'this is new iphone',
    },
    {
      name: 't-shirt',
      price: '50',
      tag: "accessories",
      information: 'this is new iphone',
    },
    {
      name: 'Macbook',
      price: '1300',
      tag: "technology",
      information: 'this is new iphone',
    },
    {
      name: 'Watch',
      price: '2000',
      tag: "accessories",
      information: 'this is new iphone',
    },
    {
      name: 'iPad',
      price: '350',
      tag: "technology",
      information: 'this is new iphone',
    },
    {
      name: 'iPhone',
      price: '1000',
      tag: 'technology',
      information: 'this is new iphone',
    },
    {
      name: 'AtomicHabits',
      price: '40',
      tag: 'book',
      information: 'this is new iphone',
    },
    {
      name: 't-shirt',
      price: '50',
      tag: "accessories",
      information: 'this is new iphone',
    },
    {
      name: 'Macbook',
      price: '1300',
      tag: "technology",
      information: 'this is new iphone',
    },
    {
      name: 'Watch',
      price: '2000',
      tag: "accessories",
      information: 'this is new iphone',
    },
    {
      name: 'iPad',
      price: '350',
      tag: "technology",
      information: 'this is new iphone',
    },
  ];

  cart = [];

  addToCart = (e) => {
    if (e.target.classList.contains('product-add')) {
        var div = e.target.parentElement.parentElement;
        var productName = div.querySelector('.productName').textContent;
        var productPrice = div.querySelector('.productPrice').textContent;

        if(JSON.parse(localStorage.getItem('cart')).length == 0) {
          this.cart.push(
            {
              name: productName,
              price: productPrice,
              totalPrice: productPrice,
              amount: 1,
              imageLink: e.target.parentElement.previousElementSibling.src
            },
          );
          localStorage.setItem('cart', JSON.stringify(this.cart));
        } else {
          this.cart = JSON.parse(localStorage.getItem('cart'));

          for(let x = 0; x < this.cart.length; x++) {
            if(this.cart[x].name == productName) {
              var currentAmount = parseInt(this.cart[x].amount);
              this.cart.splice(x, 1);
              localStorage.setItem('cart', JSON.stringify(this.cart));
            }
          }

          this.cart.push(
            {
              name: productName,
              price: productPrice,
              totalPrice: productPrice,
              amount: 1,
              imageLink: e.target.parentElement.previousElementSibling.src
            },
          );

          if(currentAmount) {
            for(let x = 0; x < this.cart.length; x++) {
              if(productName == this.cart[x].name) {
                this.cart[x].amount = this.cart[x].amount + currentAmount;
                this.cart[x].totalPrice = this.cart[x].amount * this.cart[x].price;
              }
            }
          }
        }


        localStorage.setItem('cart', JSON.stringify(this.cart));
      }
      if(e.target.classList.contains('product')) {
        const div = e.target;
        const productName = div.querySelector('.productName').textContent;
        const productImageLink = e.target.firstElementChild.src;
        const productPrice = div.querySelector('.productPrice').textContent;

        this.products.map((product) => {
          if(product.name = productName) {

            var product = {
              name: product.name,
              imageLink: productImageLink,
              price: productPrice,
              information: product.information,
            };

            localStorage.setItem('product', JSON.stringify(product));

          };
        });
      };
  }

  goToTag = (e) => {
    var tag = e.target.textContent.toLowerCase();

    localStorage.setItem('tag', tag);
  }
}

const app = new App();

app.products.map((product) => {
  product.imageLink = `./images/${product.name}.jpg`;

  let a = document.createElement('a');
  a.className = 'product';
  a.href = "./product/product.html";

  a.innerHTML = `
      <img class="img" src=${product.imageLink}>

      <a href="./cart/cart.html">
        <div class="product-add">
          Quick add to Cart
        </div>
      </a>

      <div class="product-footer">
        <h4 class="productName" style="margin-right: 12px;">${product.name}</h4> $<h4 class="productPrice"> ${product.price}</h4>
      </div>
  `;

  productsArea.appendChild(a);
});

const products = document.querySelectorAll('.product');

products.forEach((product) => {
  product.addEventListener('click', app.addToCart);
});

tagLinks.forEach((link) => {
  link.href = "./tag/tag.html";

  link.addEventListener('click', app.goToTag);
})

// set current cart item's amount
const cartAmountArea = document.querySelector('.cart-product-count');

let currentCart = JSON.parse(localStorage.getItem('cart'));
cartAmountArea.textContent = currentCart.length;

// localStorage.clear();
