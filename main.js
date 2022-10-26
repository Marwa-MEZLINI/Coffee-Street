//creation of products basket
//creation of a function that changes the cart image onclick and increments the number of selected items on the main cart in the navbar

let basket = [];

function increment(element) {
  let product = {
    id: element.id,
    title: document.querySelector(`#${element.id} > .body_card > .product`)
      .firstElementChild.innerHTML,
    imageUrl: element.firstElementChild.getAttribute("src"),
  };

  basket.push(product);

  document.getElementById("cartAmount").innerHTML = basket.length;

  let switchImage = document
    .querySelector(`#${element.id} > .body_card > .rating`)
    .lastElementChild.firstChild.getAttribute("src");

  if (switchImage != "shopping-cart.png") {
    switchImage = "shopping-cart.png";
    document
      .querySelector(`#${element.id} > .body_card > .rating`)
      .lastElementChild.firstChild.setAttribute("src", switchImage);
  }

  console.log(switchImage);
}

//adding a popup shopping bag

function classToggle() {
  let elem = document.getElementById('dialog');
  elem.classList.toggle('show');
}

//closing the popup shopping bag

function closeModal() {
  let elem = document.getElementById('dialog');
  elem.classList.remove('show');
}