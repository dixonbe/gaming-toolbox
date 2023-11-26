function calculateMeteredNet() {
    var turnover = parseFloat(document.getElementById("turnover").value) || 0;
    var totalWins = parseFloat(document.getElementById("totalWins").value) || 0;

    var meteredNet = (turnover - totalWins).toFixed(2);
    document.getElementById("meteredNet").innerText = meteredNet;

    calculatenetprofit();
}

function calculateTotalDeductions() {
    var progressivePayments = parseFloat(document.getElementById("progressivePayments").value) || 0;
    var ccceJackpots = parseFloat(document.getElementById("ccceJackpots").value) || 0;

    var totalDeductions = (progressivePayments + ccceJackpots).toFixed(2);
    document.getElementById("totalDeductions").innerText = totalDeductions;

    calculatenetprofit();
}

function calculatenetprofit() {
    var meteredNet = parseFloat(document.getElementById("meteredNet").innerText) || 0;
    var totalDeductions = parseFloat(document.getElementById("totalDeductions").innerText) || 0;

    var netprofit = (meteredNet - totalDeductions).toFixed(2);
    document.getElementById("netprofit").innerText = netprofit;

    calculateTaxPayable(netprofit);
	calculatetaxrate1(netprofit);
	calculatetaxrate2(netprofit);
	calculatetaxrate3(netprofit);
	calculatetaxrate4(netprofit);
	calculatetaxrate5(netprofit);
	calculatetaxrate6(netprofit);
	calculatecategory1(netprofit);
	calculatecategory2(netprofit);
	calculatecategory3(netprofit);
}

function calculateTaxPayable(netprofit) {
    var taxPayable = 0;

    if (netprofit <= 250000) {
        taxPayable = "$0.00";
    } else if (netprofit <= 450000) {
        taxPayable = "$" + ((netprofit - 250000) * 0.2805).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    } else if (netprofit <= 1250000) {
        taxPayable = "$" + ((netprofit - 450000) * 0.1805 + 56100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    } else if (netprofit <= 2500000) {
        taxPayable = "$" + ((netprofit - 1250000) * 0.2255 + 200500).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    } else if (netprofit <= 5000000) {
        taxPayable = "$" + ((netprofit - 2500000) * 0.2455 + 482375).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    } else {
        taxPayable = "$" + ((netprofit - 5000000) * 0.2655 + 1096125).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    document.getElementById("taxPayable").innerText = taxPayable;
	document.getElementById("taxPayabletotal").innerText = taxPayable;
}

function calculatetaxrate1(netprofit) {
    var taxrate1 = 0;

    if (netprofit <= 250000) {
        taxrate1 = "$0.00";
    } else {
        taxrate1 = "$" + (netprofit * 0.0).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    document.getElementById("taxrate1").innerText = taxrate1;
}

function calculatetaxrate2(netprofit) {
    var taxrate2 = 0;

    if (netprofit <= 250000) {
        taxrate2 = "$0.00";
    } else if (netprofit <= 450000) {
        taxrate2 = "$" + ((netprofit - 250000) * 0.2805).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    } else {
        taxrate2 = "$56,100.00";
    }

    document.getElementById("taxrate2").innerText = taxrate2;
}


function calculatetaxrate3(netprofit) {
    var taxrate3 = 0;

    if (netprofit <= 450000) {
        taxrate3 = "$0.00";
    } else if (netprofit <= 1250000) {
        taxrate3 = "$" + ((netprofit - 450000) * 0.1805).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    } else {
        taxrate3 = "$144,400.00";
    }

    document.getElementById("taxrate3").innerText = taxrate3;
}

function calculatetaxrate4(netprofit) {
    var taxrate4 = 0;

    if (netprofit <= 1250000) {
        taxrate4 = "$0.00";
    } else if (netprofit <= 2500000) {
        taxrate4 = "$" + ((netprofit - 1250000) * 0.2255).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    } else {
        taxrate4 = "$281,875.00";
    }

    document.getElementById("taxrate4").innerText = taxrate4;
}

function calculatetaxrate5(netprofit) {
    var taxrate5 = 0;

    if (netprofit <= 2500000) {
        taxrate5 = "$0.00";
    } else if (netprofit <= 5000000) {
        taxrate5 = "$" + ((netprofit - 2500000) * 0.2455).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    } else {
        taxrate5 = "$613,750.00";
    }

    document.getElementById("taxrate5").innerText = taxrate5;
}

function calculatetaxrate6(netprofit) {
    var taxrate6 = 0;

    if (netprofit <= 5000000) {
        taxrate6 = "$0.00";
    } else {
        taxrate6 = "$" + ((netprofit - 5000000) * 0.2655).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    document.getElementById("taxrate6").innerText = taxrate6;
}

function calculatecategory1(netprofit) {
    var category1 = 0;

    if (netprofit <= 250000) {
        category1 = "$0.00";
    } else {
        category1 = "$" + ((netprofit - 250000) * 0.0075).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    document.getElementById("category1").innerText = category1;
}

function calculatecategory2(netprofit) {
    var category2 = 0;

    if (netprofit <= 250000) {
        category2 = "$0.00";
    } else {
        category2 = "$" + ((netprofit - 250000) * 0.0110).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    document.getElementById("category2").innerText = category2;
}

function calculatecategory3(netprofit) {
    var category1 = 0;

    if (netprofit <= 250000) {
        category3 = "$0.00";
    } else {
        category3 = "$" + ((netprofit - 250000) * 0.0040).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    document.getElementById("category3").innerText = category3;
}
