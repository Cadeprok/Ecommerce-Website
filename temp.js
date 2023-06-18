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



@media screen and (max-width: 820px){
    .temp{
        padding: 0 0px;
    }
    element.style{
        width: 0rem;
    }
    .card-group .items{
        padding-left: 0px;
        padding-right: 5px;
        align-items: start;
    }
    }


    @media screen and (min-width: 281px) and (max-width: 900px){
        .theCart .p-card-text{
            font-size: 12px;
        }
        section{
            padding: 0 0px;
        }
        .navbar{
            width: 100%;
        }
        .banner{
            width:100%;
        }
        img {
            height: 200px;
            width: 70%;
        }
        .card-body{ 
            padding: 0rem;
            font-size: 12px;
            padding-right: 110px;
            padding-left: 10px;
        }
        .temp{
            display: list-item;
        }
        .cart-body .temp1{
            background-color: rgb(89, 151, 231);;
            height: 175px;
            width: 80%;
        }
        element.style {
            font-size: 20px;
            padding-right: 15px;
        }
    }