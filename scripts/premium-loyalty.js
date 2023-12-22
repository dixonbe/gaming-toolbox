document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('egmcount').value = "";
    calculateegmcount();
    calculatemoduleCost();
    
    document.getElementById('modulecount').value = 100;
    calculatemoduleCost();

    
});

function calculatemoduleCost(moduleCount) {
    var egmCount = parseFloat(document.getElementById("egmcount").value) || 0;
    var serviceFee = getServiceFee(moduleCount); // Use moduleCount instead of module1Count

    var cost = egmCount * serviceFee * 30;

    document.getElementById("modulecost").innerText = cost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


function getServiceFee(moduleCount) {
    // Add your logic to determine the service fee based on moduleCount
    if (moduleCount >= 1 && moduleCount <= 5) {
        return 0.01; // 1 cent
    } else if (moduleCount >= 6 && moduleCount <= 10) {
        return 0.05; // 5 cents
    } else if (moduleCount >= 11 && moduleCount <= 30) {
        return 0.10; // 10 cents
    } else if (moduleCount >= 31 && moduleCount <= 100) {
        return 0.15; // 15 cents
    } else if (moduleCount >= 101 && moduleCount <= 500) {
        return 0.20; // 20 cents
    } else {
        return 0.25; // 25 cents for 501+
    }
}


function calculateegmcount() {
    var egmcount = parseFloat(document.getElementById("egmcount").value) || 0;


    var maxmodule = ((egmcount * 0.25)*30).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    document.getElementById("maxmodule").innerText = maxmodule;


    calculatemoduleCost();

}


