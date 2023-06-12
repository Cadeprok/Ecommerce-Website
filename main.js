// Selecets elements
const productsElement = document.querySelector(".products");

// Produces all products

function renderProducts(){
    products.forEach((product) => {
        productsElement.innerHTML += `
        <div class="card item">
            <img src="${product.imgSource}" alt="${product.name}" height="275">
            <div class="card-body">
                <h5 class="card-title">
                    ${product.name}
                </h5>
                <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum est quam corrupti iusto consequatur error, voluptatum a asperiores hic eum?
                </p>
            </div>
        </div>
        `
    })
}
renderProducts();