// Selecets elements
const productsElement = document.querySelector(".products");

// Produces all products

function renderProducts(){
    products.forEach((product) => { // need to align items to the center. 
        productsElement.innerHTML += `

        <div class="card item" style="width: 30rem;"> 
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
                <div class="add-to-cart cartButton" onclick="addToCart(${product.id})">
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
}