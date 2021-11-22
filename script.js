//--------------Fonctionnalité 1-------------------------------------------------------------
const footer = document.querySelector('footer')

footer.addEventListener('click', () => {
    console.log('clique');
})
i = 0
footer.addEventListener('click',  () => { 
   i += 1;
    console.log('clique n°'+ i);
})

//----------------Fonctionnalité 2------------------------------------------------------------
const button = document.querySelector("button.navbar-toggler")
const header = document.getElementById('navbarHeader')

button.addEventListener('click', () => {
    console.log('salut navbar');
    header.classList.toggle('show');
})

//-----------------Fonctionnalité 3-----------------------------------------------------------
function text_red(){
    var CardElement = document.getElementsByClassName('card')[0]
    var ButtonElement = document.querySelector(".btn-outline-secondary");
    ButtonElement.addEventListener("click", () =>{
        CardElement.style="color:red"
    });
}
text_red();

//------------------Fonctionnalité 4----------------------------------------------------------
function text_green(){
    var CardElement = document.getElementsByClassName('card')[1]
    var ButtonElement = CardElement.querySelector(".btn-outline-secondary");
    ButtonElement.addEventListener("click", () =>{
        
        if (CardElement.style.color === 'green'){
            CardElement.style.color = 'red' ;
            }else CardElement.style="color:green"
    });
}
text_green();

//------------------Fonctionnalité 5-----------------------------------------------------------

    var navbar = document.querySelector('header')
    var suprr = document.querySelector("head link")
    var hrefBootstrapElement = suprr.getAttribute("href")

    navbar.addEventListener("dblclick", () => {
        if (suprr.getAttribute('href')){
           suprr.removeAttribute("href");
        } else if (suprr.getAttribute('href')=== null){
            suprr.setAttribute("href", hrefBootstrapElement);
        }
         
    });

        
   
       

