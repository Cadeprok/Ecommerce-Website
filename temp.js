<div class="cartButton">
<button class="b2">
    <h7 class="insideButton py-3 mx-3"><b><a class="aInsideButton" href="">Add To Cart</a></b></h7>
</button>
</div>



function calculateTotal(){
    let totalPrice = 0;
    for (var i = 0; i < cartArray.length; i++){
        totalPrice += i.price
    }

    total1.innerHTML = `$${totalPrice.toFixed(2)}`; // toFixed(x) is for rounding
}





let totalPrice = 0;
    
cartArray.forEach((item) => {
    totalPrice += item.price;
})

total1.innerHTML = `$${totalPrice.toFixed(2)}`;