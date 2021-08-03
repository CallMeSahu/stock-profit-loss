var costPriceInput = document.querySelector("#cost-price");
var quantityInput = document.querySelector("#quantity");
var currentPriceInput = document.querySelector("#current-price");
var checkBtn = document.querySelector("#btn-check");
var output = document.querySelector("#output");

checkBtn.addEventListener("click", () => {
    var costPrice = parseInt(costPriceInput.value, 10);
    var quantity = parseInt(quantityInput.value, 10);
    var currentPrice = parseInt(currentPriceInput.value, 10);

    var buy = costPrice * quantity;
    var sold = currentPrice * quantity;
    
    if(costPrice <= currentPrice){
        var percentage = (((currentPrice - costPrice )/ currentPrice)*100).toFixed(2); 
        var result = `Your made a PROFIT 🙌 of ${percentage}%`;
        output.innerText = result;
    }
    else{
        var percentage = (((costPrice - currentPrice)/ costPrice)*100).toFixed(2); 
        var result = `Your made LOSS 😟 of ${percentage}%`;
        output.innerText = result;
    }

});
