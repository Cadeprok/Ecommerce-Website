// Selecets elements
const productsElement = document.querySelector(".products");
const productsElement1 = document.querySelector(".cart-body")
const total1 = document.querySelector(".total-cost")

// Produces all products

function renderProducts(){
    products.forEach((product) => { // need to align items to the center. 
        productsElement.innerHTML += `
        <div class="card items" style="width: 30rem;"> 
            <img src="${product.imgSource}" alt="${product.name}" height="275">
            <div class="card-body">
                <h5 class="card-title">
                    ${product.name}
                </h5>
                <h4>
                    <b>$ ${product.price}</b>
                </h4>
                <p class="card-text">
                    ${product.description}
                </p>
                <br>
                <div class="add-to-cart cartButton align-items-center" onclick="addToCart(${product.id})">
                <button class="b2">
                    <h7 class="insideButton py-3 mx-3"><b><a class="aInsideButton">Add To Cart</a></b></h7>
                </button>
                </div>
            </div>
        </div>
        <br>
        `
    })
}
renderProducts();

// Array for all products added to cart

let cartArray = []

// Add to cart function

function addToCart(id){
    console.log(id)

    if (cartArray.some((item) => item.id === id)){
        console.log('already in cart')
    }

    else{
    const itemBeingAdded = products.find((product) => product.id === id); 
    // ^Above^ Finds object that is going to be added to cartArray
    cartArray.push(itemBeingAdded) // Appends to cartArray
    }
    console.log(cartArray)
    updateShoppingCart()
}

function updateShoppingCart(){
    renderItemsInCart()
    calculateTotal()
}

function renderItemsInCart(){
    productsElement1.innerHTML=""; // clears cart
    cartArray.forEach((item) =>{
       productsElement1.innerHTML += `
       <div class="cart-body">
       <div class="cart-card">
           <div class="d-flex">
               <div class="p-2 w-100">
                   <h3 class="cart-card-h">
                       ${item.name}
                   </h3>
               </div>
               <div class="p-2 flex-shrink-1">
                   <h3 class="cart-card-h">
                       ${item.price}
                   </h3>
               </div>
             </div>
             <br>
             <div class="d-flex">
               <div class="p-2 w-100">
                   <p class="cart-card-p">
                       ${item.description}
                   </p>
               </div>
               <div class="p-2 flex-shrink-1 temp1">
                   <img src="${item.imgSource}" height="200" alt="${item.name}">
               </div>
             </div>
           <br>
       </div>
   </div>
   <br><br>
      `
   })
}

function calculateTotal(){
    let totalPrice = 0;
    for (var i = 0; i < cartArray.length; i++){
        totalPrice += i.price
    }

    total1.innerHTML = `Total: ${$totalPrice.toFixed(2)}` // toFixed(x) is for rounding
}
function removeItem(id){
    // need to add onclick event
    cartArray = cartArray.filter((item) => item.id !== id);
    updateShoppingCart();
}