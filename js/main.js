let item1 = document.getElementById("item1-cart").innerHTML
let item2 = document.getElementById("item2-cart").innerHTML
let price1 = document.getElementById("price-1").innerHTML
let price2 = document.getElementById("price-2").innerHTML
let total

function calcTotal(){
    item1 = parseInt(item1);
    item2 = parseInt(item2);
    price1 = parseFloat(price1);
    price2 = parseFloat(price2);
    total = (price1 * item1) + (price2 * item2);
    document.getElementById("information-price-total").innerHTML = total
}

function removeCart(){
    if(item1 > 0){
        item1 = item1 - 1
        
        document.getElementById("item1-cart").innerHTML = item1
    }
    calcTotal()
}

function addCart(){
    item1 = parseInt(item1)
    if(item1 < 1000){
        item1 = item1 + 1
        
        document.getElementById("item1-cart").innerHTML = item1
    }
    calcTotal()
}

function removeCarttwo(){
    if(item2 > 0){
        item2 = item2 - 1
        
        document.getElementById("item2-cart").innerHTML = item2
    }
    calcTotal()
}

function addCarttwo(){
    item2 = parseInt(item2)
    if(item2 < 1000){
        item2 = item2 + 1
        
        document.getElementById("item2-cart").innerHTML = item2
    }
    calcTotal()
}

function resetCart(){
    item1 = 0;
    item2 = 0;
}
