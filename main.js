//changing image onclick
function  {
    const cart = document.querySelectorAll('.add-to-cart')
  cart.innerHTML.src = "shopping-cart.png";
}
document.addEventListener("click", changeImage);

cart.forEach((img) => {
    img.addEventListener('click', changeImage)
    
});