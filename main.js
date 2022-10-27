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
  };
  basket.push(product);

  document.getElementById("cartAmount").innerHTML = basket.length;
  
  switchImage = "shopping-cart.png";
  
    document
      .querySelector(`#${element.id} > .body_card > .rating`)
      .lastElementChild.firstChild.setAttribute("src", switchImage);
  
  console.log(basket);

  updateBag()

  //document.querySelector(`#${element.id} > .body_card > .rating`).lastElementChild.setAttribute('onclick',removeItem()) 
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

//add items to shopping bag

function updateBag() {
  let html = "";
  for (let i = 0; i < basket.length; i++) {
    let img = basket[i].imageUrl;
    let name = basket[i].title;
    let price = basket[i].price;
    let qty = 1;
    let total = (price*qty) ;
    
    html += "<ul><li>"+"<img src='"+img+"'>"+"</li>"+"<li>"+name+"</li>"+"<li>"+price+"</li>"+"<li>"+qty+"</li>"+"<li>"+total+"</li><li><div id='delete-btn' onclick='deleteItem()'><div></div><div></div></div></li></ul>" 
  }
  document.getElementById('bag').innerHTML = html
}
//remove items from shopping cart

function removeItem(element) {
  // console.log(element);
     
  switchImage = "Frame 5.png";

  document.querySelector(`#${element.id} > .body_card > .rating`)
  .lastElementChild.firstChild.setAttribute("src", switchImage);

  deleteItem()

}

function deleteItem(element){
  for (let i = 0; i < basket.length; i++) {
    if(element.id === basket[i].id){
      basket.splice(basket[i],1);
    }    
  }
  document.getElementById("cartAmount").innerHTML = basket.length;
  updateBag();
}

function addRemoveItems(element) {
  let switchImage = document
  .querySelector(`#${element.id} > .body_card > .rating`)
  .lastElementChild.firstChild.getAttribute("src");
  if (switchImage === "Frame 5.png"){
    addItem(element)
  }
  else {
    removeItem(element)
  }
}