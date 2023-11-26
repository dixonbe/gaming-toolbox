function calculateexpected() {
    var turnover = parseFloat(document.getElementById("turnover").value) || 0;
    var increment = parseFloat(document.getElementById("increment").value) || 0;

    var expected = (turnover * (increment/100)).toFixed(2);
    document.getElementById("expected").innerText = expected;

    calculateVariance();
}

function calculatetotalbasevalue() {
    var hits = parseFloat(document.getElementById("hits").value) || 0;
    var resetvalue = parseFloat(document.getElementById("resetvalue").value) || 0;

    var totalbasevalue = (hits * resetvalue).toFixed(2);
    document.getElementById("totalbasevalue").innerText = totalbasevalue;

    calculateActual();
}

function calculateActual() {
    var opening = parseFloat(document.getElementById("opening").value) || 0;
    var closing = parseFloat(document.getElementById("closing").value) || 0;
	var totalpaid = parseFloat(document.getElementById("totalpaid").value) || 0;
	var hits = parseFloat(document.getElementById("hits").value) || 0;
    var resetvalue = parseFloat(document.getElementById("resetvalue").value) || 0;

    var actual = (closing - opening + totalpaid - (hits * resetvalue)).toFixed(2);
    document.getElementById("actual").innerText = actual;

    calculateVariance();
}

function calculateVariance() {
    var actual = parseFloat(document.getElementById("actual").textContent) || 0;
    var expected = parseFloat(document.getElementById("expected").textContent) || 0;

    var variance = (actual - expected).toFixed(2);
    document.getElementById("variance").textContent = variance;
}