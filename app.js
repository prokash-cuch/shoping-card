
function getProductInput (product,price,isIncreasing){
    const productInput = document.getElementById(product+"-input");
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1 ; 
    }
    else if (productNumber > 0){
        productNumber = parseInt(productNumber) - 1 ;
    }
    // productInput.value = productNumber ;
    productInput.value = productNumber;
    const productTotal = document.getElementById(product+"-total") ;
    productTotal.innerText= productNumber * price ;
    // colled caculate
    caculateTotal ()
}
// product input
function getInputValue (product){
    const productInput = document.getElementById(product+"-input");
    const productNumber = parseInt(productInput.value);
    return productNumber ;
}
// total price add function
function caculateTotal (){
    const phoneTotal = getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case") * 59 ;
    const subTotal = phoneTotal + caseTotal ;
    const textAmount = subTotal / 10 ;
    const priceTotal = subTotal + textAmount ;
    // update html sub text total
    document.getElementById("sub-total").innerText = subTotal ;
    document.getElementById("text-amount").innerText = textAmount ;
    document.getElementById("total-price").innerText = priceTotal ;
}

// phone handle button
document.getElementById("phone-plush").addEventListener('click',function(){
    getProductInput("phone",1219,true)
})
document.getElementById("phone-minus").addEventListener('click',function(){
    getProductInput("phone",1219,false)
})
// case handle button 
document.getElementById("case-plush").addEventListener('click',function(){
    getProductInput("case",59,true)
})
document.getElementById("case-minus").addEventListener('click',function(){
    getProductInput("case",59,false)
})
