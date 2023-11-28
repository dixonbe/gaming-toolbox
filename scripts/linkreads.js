document.addEventListener('DOMContentLoaded', function () {
    // Set default values for each task
    document.getElementById('openingturnover').value = (0.00).toFixed(2);
    calculateturnover();
});

document.addEventListener('DOMContentLoaded', function () {
    // Set default values for each task
    document.getElementById('openinghits').value = (0).toFixed(0);
    calculateactual();
    calculatehits();
    calcualteresets();
});

document.addEventListener('DOMContentLoaded', function () {
    // Set default values for each task
    document.getElementById('openingwins').value = (0.00).toFixed(2);
    calculatewins();
});



function calculateturnover() {
    var openingturnover = parseFloat(document.getElementById("openingturnover").value) || 0;
    var closingturnover = parseFloat(document.getElementById("closingturnover").value) || 0;
    var minusturnover = parseFloat(document.getElementById("minusturnover").value) || 0;

    var turnovermovement = (closingturnover - openingturnover - minusturnover).toFixed(2);
    document.getElementById("turnovermovement").innerText = turnovermovement;
    document.getElementById("turnovermovementrec").innerText = turnovermovement;

    calculateexpected();
}

function calculateexpected() {
    var openingturnover = parseFloat(document.getElementById("openingturnover").value) || 0;
    var closingturnover = parseFloat(document.getElementById("closingturnover").value) || 0;
    var minusturnover = parseFloat(document.getElementById("minusturnover").value) || 0;

    var turnovermovement = (closingturnover - openingturnover - minusturnover).toFixed(2);
    document.getElementById("turnovermovement").innerText = turnovermovement;
    document.getElementById("turnovermovementrec").innerText = turnovermovement;

    var increment = parseFloat(document.getElementById("increment").value) || 0;

    var ExpectedContribution = (turnovermovement * (increment / 100)).toFixed(2);
    document.getElementById("expectedcontribution").innerText = ExpectedContribution;

    document.getElementById("Increment").innerText = increment.toFixed(6);

    calculateVariance();
}

function calculatehits() {
    var openinghits = parseFloat(document.getElementById("openinghits").value) || 0;
    var closinghits = parseFloat(document.getElementById("closinghits").value) || 0;
    var minushits = parseFloat(document.getElementById("minushits").value) || 0;

    var hitsmovement = (closinghits - openinghits - minushits).toFixed(0);
    document.getElementById("hitsmovement").innerText = hitsmovement;
    document.getElementById("hitsmovementrec").innerText = hitsmovement;

    calculateactual();
}

function calculatewins() {
    var openingwins = parseFloat(document.getElementById("openingwins").value) || 0;
    var closingwins = parseFloat(document.getElementById("closingwins").value) || 0;
    var minuswins = parseFloat(document.getElementById("minuswins").value) || 0;

    var winsmovement = (closingwins - openingwins - minuswins).toFixed(2);
    document.getElementById("winsmovement").innerText = winsmovement;
    document.getElementById("winsmovementrec").innerText = winsmovement;

    calculateactual();
}

function calculateactual() {
    var openingcurrentvalue = parseFloat(document.getElementById("openingcurrentvalue").value) || 0;
    var closingcurrentvalue = parseFloat(document.getElementById("closingcurrentvalue").value) || 0;
    var resetvalue = parseFloat(document.getElementById("resetvalue").value) || 0;
    var openingwins = parseFloat(document.getElementById("openingwins").value) || 0;
    var closingwins = parseFloat(document.getElementById("closingwins").value) || 0;
    var minuswins = parseFloat(document.getElementById("minuswins").value) || 0;
    var openinghits = parseFloat(document.getElementById("openinghits").value) || 0;
    var closinghits = parseFloat(document.getElementById("closinghits").value) || 0;
    var minushits = parseFloat(document.getElementById("minushits").value) || 0;

    var ActualContribution = ((closingcurrentvalue - openingcurrentvalue) + (closingwins - openingwins - minuswins) - ((closinghits - openinghits - minushits) * resetvalue)).toFixed(2);
    document.getElementById("ActualContributionSecondCard").innerText = ActualContribution;

    document.getElementById("openingcurrentvaluerec").innerText = openingcurrentvalue.toFixed(2);
    document.getElementById("closingcurrentvaluerec").innerText = closingcurrentvalue.toFixed(2);

    calculateVariance();
}

function calcualteresets() {
    var resetvalue = parseFloat(document.getElementById("resetvalue").value) || 0;
    var openinghits = parseFloat(document.getElementById("openinghits").value) || 0;
    var closinghits = parseFloat(document.getElementById("closinghits").value) || 0;
    var minushits = parseFloat(document.getElementById("minushits").value) || 0;

    var resetvalue = ((closinghits - openinghits - minushits) * resetvalue).toFixed(2);
    document.getElementById("resetvaluerec").innerText = resetvalue;
}


function calculateVariance() {
    var ActualContribution = parseFloat(document.getElementById("ActualContributionSecondCard").innerText) || 0;
    var ExpectedContribution = parseFloat(document.getElementById("expectedcontribution").innerText) || 0;

    var variance = (ActualContribution - ExpectedContribution).toFixed(2);
    document.getElementById("variance").innerText = variance;
}
