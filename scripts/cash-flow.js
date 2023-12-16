document.addEventListener('DOMContentLoaded', function () {
    // Set default values for each task
    
    document.getElementById('calcashbox').textContent  = (0.00).toFixed(2);

    document.getElementById('variance').value = (0.00).toFixed(2);
    
    document.getElementById('bminusa').value = (0.00).toFixed(2);
    document.getElementById('cminusb').value = (0.00).toFixed(2);
    document.getElementById('cminusa').value = (0.00).toFixed(2);
    
    calculateBminusA();
    calculateCminusB();
    calculateCminusA();
    calculateVariance();
    calculateA();
    

});

document.addEventListener('DOMContentLoaded', function () {

    
    // Add event listener for the "input" event on the "cancelcredit" input
    document.getElementById('cancelcredit').addEventListener('input', calculateVariance);

    calculateVariance();
});



function calculateA() {
    var turnover = parseFloat(document.getElementById("turnover").value) || 0;
    var moneyout = parseFloat(document.getElementById("moneyout").value) || 0;
    var cancelcredit = parseFloat(document.getElementById("cancelcredit").value) || 0;
    var totalwins = parseFloat(document.getElementById("totalwins").value) || 0;
    var moneyin = parseFloat(document.getElementById("moneyin").value) || 0;

    var calcashbox = (turnover + moneyout + cancelcredit - totalwins - moneyin).toFixed(2);
    document.getElementById("calcashbox").textContent = calcashbox;

    calculateBminusA(calcashbox);
    calculateCminusA(calcashbox);
    calculateCminusB();
    calculateVariance()
}

function calculateVariance() {
    var cancelcredit = parseFloat(document.getElementById("cancelcredit").value) || 0;
    var meteredcancelcredit = parseFloat(document.getElementById("meteredcancelcredit").value) || 0;

    var variance = (meteredcancelcredit - cancelcredit).toFixed(2);
    document.getElementById("variance").innerText = variance;
}

function calculateBminusA() {
    var calCashBox = parseFloat(document.getElementById("calcashbox").textContent) || 0;
    var meteredcashbox = parseFloat(document.getElementById("meteredcashbox").value) || 0;

    var bminusa = (meteredcashbox - calCashBox).toFixed(2);
    document.getElementById("bminusa").textContent = bminusa;
}

function calculateCminusB() {
    var actualclearance = parseFloat(document.getElementById("actualclearance").value) || 0;
    var meteredcashbox = parseFloat(document.getElementById("meteredcashbox").value) || 0;

    var cminusb = (actualclearance - meteredcashbox).toFixed(2);
    document.getElementById("cminusb").textContent = cminusb;

    calculateBminusA();
    calculateCminusA();
}



function calculateCminusA() {
    var actualclearance = parseFloat(document.getElementById("actualclearance").value) || 0;
    var calcashbox = parseFloat(document.getElementById("calcashbox").textContent) || 0;

    var cminusa = (actualclearance - calcashbox).toFixed(2);
    document.getElementById("cminusa").textContent = cminusa;

    calculateCminusB();
    calculateBminusA(); 
}

