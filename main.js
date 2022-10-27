//creation of products basket
//creation of a function that changes the cart image onclick and increments the number of selected items on the main cart in the navbar

let basket = [];

function addItem(element) {
  let product = {
    id: element.id,
    imageUrl: element.firstElementChild.getAttribute("src"),
    title: document.querySelector(`#${element.id} > .body_card > .product`)
      .firstElementChild.innerHTML,
    price: document.querySelector(`#${element.id} > .body_card > .rating`)
      .firstElementChild.innerHTML,
    qty: 1,
  };
  basket.push(product);

  document.getElementById("cartAmount").innerHTML = basket.length;

  switchImage = "shopping-cart.png";

  document
    .querySelector(`#${element.id} > .body_card > .rating`)
    .lastElementChild.firstChild.setAttribute("src", switchImage);

  console.log(basket);

  updateBag();
}

//adding a popup shopping bag

function classToggle() {
  let elem = document.getElementById("dialog");
  elem.classList.toggle("show");
}

//closing the popup shopping bag

function closeModal() {
  let elem = document.getElementById("dialog");
  elem.classList.remove("show");
}

//add items to shopping bag
let html;
function updateBag() {
  let products = basket
    .map((item) => {
      let { imageUrl, title, price, id, qty } = item;
      return `
        <div class='product'>
        <div id='img'><img src='${imageUrl}'></div>
        <div id='name'>${title}</div>
        <div id='prx'>${price}</div>
        <div class='qty-display'>
        <div id='${id}' class="decrement" onclick='decrement(this.id)'><div></div></div>
        <div id='qty'>${qty}</div>
        <div id='${id}' class="increment" onclick='increment(this.id)'><div></div><div></div></div>
        </div>
        <div id='tot'>${parseFloat(price) * qty}</div>
        <div id='${id}' class="delete-btn" onclick='deleteItem(this.id)'><div></div><div></div></div>
        </div>  
      `;
    })
    .join("");

  html = `<div>${products}</div>`;

  document.getElementById("bag").innerHTML = html;
}

//remove items from shopping cart

function removeItem(element) {
  switchImage = "Frame 5.png";

  document
    .querySelector(`#${element.id} > .body_card > .rating`)
    .lastElementChild.firstChild.setAttribute("src", switchImage);

  for (let i = 0; i < basket.length; i++) {
    if (element.id === basket[i].id) {
      basket.splice(basket[i], 1);
    }
  }
  document.getElementById("cartAmount").innerHTML = basket.length;
  updateBag();
}

function deleteItem(id) {
  basket = basket.filter((prod) => prod.id !== id);
  updateBag();
  document.getElementById("cartAmount").innerHTML = basket.length;
  let switchImage = document
    .querySelector(`#${id} > .body_card > .rating`)
    .lastElementChild.firstChild.getAttribute("src");
  switchImage = "Frame 5.png";
  document
    .querySelector(`#${id} > .body_card > .rating`)
    .lastElementChild.firstChild.setAttribute("src", switchImage);
}

function addRemoveItems(element) {
  let switchImage = document
    .querySelector(`#${element.id} > .body_card > .rating`)
    .lastElementChild.firstChild.getAttribute("src");
  if (switchImage === "Frame 5.png") {
    addItem(element);
  } else {
    removeItem(element);
  }
}

function increment(id) {
  let basketItem = basket.find((x) => x.id === id);
  let basketItemIndex = basket.indexOf(basketItem);
  console.log(basket, id);
  if (basketItem) {
    basket[basketItemIndex].qty += 1;
    updateBag();
  }
}

function decrement(id) {
  let basketItem = basket.find((x) => x.id === id);
  let basketItemIndex = basket.indexOf(basketItem);
  console.log(basket, id);
  if (basketItem && basketItem.qty > 1) {
    basket[basketItemIndex].qty -= 1;
    updateBag();
  }
}
