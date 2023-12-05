function calculateegmcount() {
    var egmcount = parseFloat(document.getElementById("egmcount").value) || 0;


    var maxmodule = ((egmcount * 0.25)*30).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    document.getElementById("maxmodule1").innerText = maxmodule;
    document.getElementById("maxmodule2").innerText = maxmodule;
    document.getElementById("maxmodule3").innerText = maxmodule;
}


function calculatemodule1Cost() {
    var egmCount = parseFloat(document.getElementById("egmcount").value) || 0;
    var serviceFee = getServiceFee(document.getElementById("module1count").value);

    var cost = egmCount * serviceFee * 30;

    document.getElementById("module1cost").innerText = cost.toFixed(2);
}

function getServiceFee(module1Count) {
    // Add your logic to determine the service fee based on module1Count
    if (module1Count >= 1 && module1Count <= 5) {
        return 0.01; // 1 cent
    } else if (module1Count >= 6 && module1Count <= 10) {
        return 0.05; // 5 cents
    } else if (module1Count >= 11 && module1Count <= 30) {
        return 0.10; // 10 cents
    } else if (module1Count >= 31 && module1Count <= 100) {
        return 0.15; // 15 cents
    } else if (module1Count >= 101 && module1Count <= 500) {
        return 0.20; // 20 cents
    } else {
        return 0.25; // 25 cents for 501+
    }
}


function calculatemodule2Cost() {
    var egmCount = parseFloat(document.getElementById("egmcount").value) || 0;
    var serviceFee = getServiceFee(document.getElementById("module2count").value);

    var cost = egmCount * serviceFee * 30;

    document.getElementById("module2cost").innerText = cost.toFixed(2);
}

function getServiceFee(module2Count) {
    // Add your logic to determine the service fee based on module2Count
    if (module2Count >= 1 && module2Count <= 5) {
        return 0.01; // 1 cent
    } else if (module2Count >= 6 && module2Count <= 10) {
        return 0.05; // 5 cents
    } else if (module2Count >= 11 && module2Count <= 30) {
        return 0.10; // 10 cents
    } else if (module2Count >= 31 && module2Count <= 100) {
        return 0.15; // 15 cents
    } else if (module2Count >= 101 && module2Count <= 500) {
        return 0.20; // 20 cents
    } else {
        return 0.25; // 25 cents for 501+
    }
}


function calculatemodule3Cost() {
    var egmCount = parseFloat(document.getElementById("egmcount").value) || 0;
    var serviceFee = getServiceFee(document.getElementById("module3count").value);

    var cost = egmCount * serviceFee * 30;

    document.getElementById("module3cost").innerText = cost.toFixed(2);
}

function getServiceFee(module3Count) {
    // Add your logic to determine the service fee based on module3Count
    if (module3Count >= 1 && module3Count <= 5) {
        return 0.01; // 1 cent
    } else if (module3Count >= 6 && module3Count <= 10) {
        return 0.05; // 5 cents
    } else if (module3Count >= 11 && module3Count <= 30) {
        return 0.10; // 10 cents
    } else if (module3Count >= 31 && module3Count <= 100) {
        return 0.15; // 15 cents
    } else if (module3Count >= 101 && module3Count <= 500) {
        return 0.20; // 20 cents
    } else {
        return 0.25; // 25 cents for 501+
    }
}
