        
        // Barra de navegacion lateral, ocultar, mostrar y efectos//
const navSlide = ()=>{

    const burguer = document.querySelector('.burguer');
    const nav = document.querySelector('.navbar-menu');
    const navLinks = document.querySelectorAll('.navbar-menu li');


    burguer.addEventListener('click', ()=>{

        nav.classList.toggle('nav-activate');
        navLinks.forEach((link, index) => {

            if(link.style.animation){

                link.style.animation = ""
            }else{

                link.style.animation =  `navLinkFade 0.5 ease forwards ${index / 7 + 2 }s`; 

            }
        })
        
        burguer.classList.toggle('toggle')
    });

 

}

navSlide();


    //carousel de promociciones


var carouselItems = document.querySelectorAll('.discounts-text');
var currentIndex = 0;

function showNextItem() {
//   Oculta el elemento actual
  carouselItems[currentIndex].classList.remove('active');
  
//   Muestra el siguiente elemento
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselItems[currentIndex].classList.add('active');
}

// Mostrar el primer elemento
carouselItems[currentIndex].classList.add('active');

// Cambiar de elemento cada 5 segundos
setInterval(showNextItem, 5000);






    addEventListener('click', ()=>{

        let evento = document.querySelector('#boton');
        evento.classList.toggle('rojo');

        

    })


    //Shopping car functionalities

    let cartIcon = document.querySelector("#cart-icon");
    let cart = document.querySelector(".cart");
    let closeCart = document.querySelector("#close-cart");

    cartIcon.onclick = () => {
        cart.classList.add("activo");
    }
    closeCart.onclick = () => {
        cart.classList.remove("activo");
    }

    //Make this work

    if (document.readyState == "loading"){
        document.addEventListener("DOMContentLoaded",ready);
    }
    else{
        ready()
    }

    function ready(){
        var removeCartButtons = document.getElementsByClassName("cart-remove")
        console.log(removeCartButtons)
        for (i=0; i < removeCartButtons.length; i++){
            var button = removeCartButtons[i];
            button.addEventListener("click", removeCartItem)
        }
    }
    function removeCartItem(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.remove()
        updateTotal()
    }

    //Update Total
    function updateTotal(){
        var cartContent = document.getElementsByClassName("cart-content")[0];
        var cartBoxes = document.getElementsByClassName("cart-box");
        for(var i = 0; i < removeCartButtons.length; i++){
            var cartBox = cartBoxes[i];
            var priceElement = cartBox.getElementsByClassName("cart-price")[0];
            var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
            var price = parseFloat(priceElement.innerText.replace("$",""));
            var quantity = quantityElement.value;
            total = total + (price * quantity);

            document.getElementsByClassName("total-price")[0].innerText = "$" + total

        }
    }




    
