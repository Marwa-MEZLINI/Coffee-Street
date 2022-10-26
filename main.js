<<<<<<< HEAD
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
=======
//changing image onclick
function  {
    const cart = document.querySelectorAll('.add-to-cart')
  cart.innerHTML.src = "shopping-cart.png";
}
document.addEventListener("click", changeImage);

cart.forEach((img) => {
    img.addEventListener('click', changeImage)
    
});
>>>>>>> cf777d3c5f6b1abc7b34b01fb97dd20a7aa2fdb2
