const cartArea = document.querySelector('.cart');
const footer = document.querySelector('.total');

if(!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}


goToTag = (e) => {
  var tag = e.target.textContent.toLowerCase();

  localStorage.setItem('tag', tag);
}

const tagLinks = document.querySelectorAll('.item');
tagLinks.forEach((link) => {
  link.href = "../tag/tag.html";

  link.addEventListener('click', goToTag);
})


if(JSON.parse(localStorage.getItem('cart')).length != 0) {



  const cart = JSON.parse(localStorage.getItem('cart'));
  let totalCartPrice = 0;

  const productCountArea = document.querySelector('.cart-product-count');
  productCountArea.textContent = cart.length;
  document.title = `Cart (${cart.length}) | Soyle Gelsin`;
  const totalCartPriceArea = document.querySelector('.total-price');

  cart.forEach((item) => {
    totalCartPrice += parseInt(item.totalPrice);
    totalCartPriceArea.textContent = `$${parseInt(totalCartPrice)}`;
    item.totalPrice = item.amount * parseInt(item.price);

    let div = document.createElement('div');
    div.className = "cart-item";
    div.innerHTML = `
      <div class="left-side">
        <img class="product-image" src=${item.imageLink}>
        <div class="product-name"><h2 class="item-name">${item.name}</h2></div>
      </div>

      <div class="right-side">
        <div class="product-total-price">$${parseInt(item.totalPrice)}</div>
        <div class="decrease-button amountBtn">-</div>
        <div class="product-amount">${item.amount}</div>
        <div class="increase-button amountBtn">+</div>
        <div class="delete">X</div>
      </div>
    `;

    cartArea.appendChild(div);

    const deleteBtns = document.querySelectorAll('.delete');

    deleteBtns.forEach((deleteBtn) => {
      deleteBtn.addEventListener('click', (e) => {
        const productDiv = e.target.parentElement.parentElement;
        const productName = e.target.parentElement.parentElement.firstElementChild.firstElementChild.nextElementSibling.textContent;

        cartArea.removeChild(productDiv);

        for(let x = 0; x < cart.length; x++) {
          if(cart[x].name == productName) {
            totalCartPrice -= cart[x].totalPrice;
            cart.splice(x, 1);
            productCountArea.textContent = cart.length;
            document.title = `Cart (${cart.length}) | Soyle Gelsin`;
            totalCartPriceArea.textContent = `$${parseInt(totalCartPrice)}`;

            if(cart.length == 0) {
              cartArea.innerHTML = `
                <h1 style="margin-left: 2.5%;">Your cart is empty.</h1>
              `;
              footer.style.display = "none";
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            }

          }
        })
    })

    const btns = document.querySelectorAll('.amountBtn');

    btns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const product = e.target.parentElement.parentElement.firstElementChild.firstElementChild.nextElementSibling.textContent;
        const productDiv = e.target.parentElement.parentElement;
        const totalPriceArea = productDiv.querySelector('.product-total-price');

        if(item.name == product) {
          if(e.target.textContent == "-") {
            if(item.amount > 1) {
              item.amount--;

              totalCartPrice -= parseInt(item.price);
              totalCartPriceArea.textContent = `$${parseInt(totalCartPrice)}`;
              item.totalPrice = item.amount * parseInt(item.price);

              e.target.nextElementSibling.textContent = item.amount;
            }
          } else {
            item.amount++;

            totalCartPrice += parseInt(item.price);
            totalCartPriceArea.textContent = `$${parseInt(totalCartPrice)}`;
            item.totalPrice = item.amount * parseInt(item.price);

            e.target.previousElementSibling.textContent = item.amount;
          }

          totalPriceArea.textContent = `$${parseInt(item.totalPrice)}`;
          totalCartPriceArea.textContent = `$${totalCartPrice}`;

          localStorage.setItem('cart', JSON.stringify(cart));
        }

      });
    });
  })
} else {
  cartArea.innerHTML = `
    <h1 style="margin-left: 2.5%;">Your cart is empty.</h1>
  `;
  footer.style.display = "none";
}

// localStorage.clear();
