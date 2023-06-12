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
                <div class="cartButton">
                    <button class="b2">
                        <h7 class="insideButton py-3 mx-3"><b>Add To Cart</b></h7>
                    </button>
                </div>
            </div>
        </div>
        <br>
        `
    })
}
renderProducts();