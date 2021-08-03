var costPriceInput = document.querySelector("#cost-price");
var quantityInput = document.querySelector("#quantity");
var currentPriceInput = document.querySelector("#current-price");
var checkBtn = document.querySelector("#btn-check");
var output = document.querySelector("#output");

checkBtn.addEventListener("click", () => {
    if((costPriceInput.value == "")||(quantityInput.value == "")||(currentPriceInput.value == "")){
        alert("Fill all blanks!");
        return;
    }

    var costPrice = parseInt(costPriceInput.value, 10);
    var quantity = parseInt(quantityInput.value, 10);
    var currentPrice = parseInt(currentPriceInput.value, 10);

    var buy = costPrice * quantity;
    var sold = currentPrice * quantity;
    
    if(costPrice <= currentPrice){
        var profit = (sold - buy);
        var percentage = (((currentPrice - costPrice )/ currentPrice)*100).toFixed(2); 
        var result = `You gained ${percentage}% 🙌. Your total profit is ₹${profit}`;
        output.innerText = result;
    }
    else{
        var loss = (buy - sold);
        var percentage = (((costPrice - currentPrice)/ costPrice)*100).toFixed(2); 
        var result = `You lost ${percentage}% 😔. Your total loss is ₹${loss}`;
        output.innerText = result;
    }

});
