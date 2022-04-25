// Store the wallet amount to your local storage with key "amount"
function addToWallet(){
    let amount=+document.querySelector("#amount").value
    let amount1=JSON.parse(localStorage.getItem("amount")) || 0;
    
    document.querySelector("#amount").value=null;

    amount1=eval(amount+amount1)

    localStorage.setItem("amount",amount1);
}