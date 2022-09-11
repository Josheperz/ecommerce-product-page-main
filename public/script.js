


/* jquery */
$('#main-gallery').click(function(){
 //---no entiendo por q la siguiente funcion no la ejecuta
$('#container-cart').addClass('not-visible');
//-----
  $('#container-cart').addClass('not-visible');
  $('#container-zoom-gallery').append('<zoom-gallery></zoom-gallery>');
 $('#icon-close').removeClass('not-visible');
});

$('#icon-close').click(function(){
  $('#container-zoom-gallery').empty();
  $('#icon-close').addClass('not-visible');
}); 

/* icon cart toggle show */
 $('#icon-cart').click(function(){
  $('#container-cart').toggle('not-visible');
});  

/* icon-close-nav-mobile show */

 $('#icon-close-nav-mobile').click(function(){
  $('#navbarSupportedContent').addClass('not-visible');
});  
 

/* number of items to add to cart  */

let push = document.querySelector('#more');
let minus = document.querySelector('#minus');
let numberPre = document.querySelector('#number-pre');

contadorNumberPre = 0;
more.addEventListener('click',moreAmount);
minus.addEventListener('click',minusAmount);

function moreAmount(){
  contadorNumberPre++;
  showPreAmount();
  
}
function minusAmount(){
  
 if (contadorNumberPre > 0){
  --contadorNumberPre
 }
 showPreAmount();
 
}

function showPreAmount(){
  numberPre.innerHTML= contadorNumberPre;

}


 /* buy cart */
 
let allContainerCart = document.querySelector('.products');
let containerBuyCart = document.querySelector('.product-item');
let counterProduct = document.querySelector('.counter');


let buyThings = [];
let total = 0;
let counter = 0;
//funsiones

loadEventListenrs();
function loadEventListenrs(){
  allContainerCart.addEventListener('click',addProduct);
  containerBuyCart.addEventListener('click',deleteProduct);
}

function addProduct(e){
   
  if (e.target.classList.contains('add-to-cart')){
    const prices = document.querySelector('.price').parentElement;
    readTheContent(prices);
    

  } 
}

function deleteProduct(e){
  if (e.target.classList.contains('delete-product')){
    const deleteId = e.target.getAttribute('data-id');
    buyThings = buyThings.filter(product => product.id !== deleteId);
    counter= 0;
    loadHtml();
  } 
}


function readTheContent (product){
 
    const infoProduct = {
      image: product.querySelector('img').src
      ,title: product.querySelector('.title').textContent
      ,price: product.querySelector('div span').textContent
      ,id: product.querySelector('.title').getAttribute('data-id')
      ,amount:contadorNumberPre
    } 

   total = parseFloat(total) + parseFloat(infoProduct.amount * infoProduct.price); 
  total = total.toFixed(2);
 
  

   const exists = buyThings.some(product => product.id === infoProduct.id);
     if (exists){
      const pro = buyThings.map(product => {
        if (product.id === infoProduct.id){
          product.amount++;
          return product;
        }else {
          return product;
        }
      });
      buyThings = [...pro];
    }else {
      buyThings = [...buyThings,infoProduct];
      
    } 
   
  loadHtml();
 
}  
 
function loadHtml(){
  clearHtml();
  buyThings.forEach(product => {
    const {image, title, price, id, amount} = product;
    const item = document.createElement('div');
    item.classList.add('mt-3');
    item.innerHTML = `
    <div class="item-content flex  w-full ">
    <img class="rounded" style="width:70px; margin: 11px 14px 12px 26px; " src="${image}" alt="">
   <div class="mt-3 h-max">
      <h5 class="text-slate-400 mb-1">${title}</h5>
      <span class="text-slate-400 ">$${price}</span>
      <span class="text-slate-400 tracking-widest">x</span>
      <span class="text-slate-400 tracking-widest">${amount}</span>
      <span class="font-bold ">$<span class="price-total">${total}</span></span> 
    </div>
    <img class="delete-product cursor-pointer" style="width:15px; height: 17px; margin-left: 30px; margin-top: 34px;"  src="./../images/icon-delete.svg" data-id="${id}"  alt="">
  </div>
    `;
    containerBuyCart.appendChild(item);
    counter = amount;
    
  });
  
  counterProduct.innerHTML= counter;
  const emptyCart = document.querySelector('.empty');
  const checkout = document.querySelector('.checkout');
  if (counter == 0){
    checkout.classList.add('not-visible');
    emptyCart.classList.remove('not-visible');
  }else {
    checkout.classList.remove('not-visible');
    emptyCart.classList.add('not-visible');
  }
    
    
}
 
function clearHtml(){
  containerBuyCart.innerHTML = '';
};

