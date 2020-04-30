const billAmt = document.getElementById('bill-amt');
const serviceRating = document.getElementById('rate-service');
const noOfPayers = document.getElementById('payment');
// let noOfPayers = document.querySelector('#payment').value;

const calculate = document.getElementById('calculate');

const resultContainer = document.getElementById('result-container');
const result = document.getElementById('result');
const persons = document.getElementById('persons');

resultContainer.style.display = "none";

function showResult(newResult) {

    if (noOfPayers.value == 1) {
        persons.style.display = "none";
    }else{
        persons.style.display = "block";
    }

    result.textContent = newResult;
    resultContainer.style.display = "block";
}

function calculateTip() {
    if(billAmt.value === "" || serviceRating.value === 0 || noOfPayers.value === ""){
        alert("Please fill fields");
        return;
    }
    // noOfPayers = parseInt(noOfPayers);
    // console.log(typeof(noOfPayers) + ": " + noOfPayers);
    let total = billAmt.value * serviceRating.value / noOfPayers.value;
    total = Math.round(total * 100)/ 100;
    total.toFixed(2);
    showResult(total);

}

calculate.addEventListener('click', calculateTip);