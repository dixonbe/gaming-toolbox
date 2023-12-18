document.addEventListener('DOMContentLoaded', function () {
    // Set default values for each task
    document.getElementById('totalnotes').textContent  = (0.00).toFixed(2);
    document.getElementById('totalcoins').textContent = (0.00).toFixed(2);    
    document.getElementById('totalcash').textContent = (0.00).toFixed(2);
    document.getElementById('totalmovement').textContent = (0.00).toFixed(2);
    document.getElementById('totalfloat').textContent = (0.00).toFixed(2);
    document.getElementById('shiftvariance').textContent = (0.00).toFixed(2);

    calculatetotalNotes();
    calculatetotalcoins();
    calculatetotalcash();
    calculateshiftvariance();
});

function calculatetotalNotes() {
    var notes100 = parseFloat(document.getElementById("100notes").value) || 0;
    var notes50 = parseFloat(document.getElementById("50notes").value) || 0;
    var notes20 = parseFloat(document.getElementById("20notes").value) || 0;
    var notes10 = parseFloat(document.getElementById("10notes").value) || 0;
    var notes5 = parseFloat(document.getElementById("5notes").value) || 0;

    var totalnotes = (notes100 + notes50 + notes20 + notes10 + notes5).toFixed(2);
    document.getElementById("totalnotes").textContent = totalnotes;

    calculatetotalcash();
    calculateshiftvariance();
}

function calculatetotalcoins() {
    var coins2 = parseFloat(document.getElementById("2coins").value) || 0;
    var coins1 = parseFloat(document.getElementById("1coins").value) || 0;
    var coins50 = parseFloat(document.getElementById("50coins").value) || 0;
    var coins20 = parseFloat(document.getElementById("20coins").value) || 0;
    var coins10 = parseFloat(document.getElementById("10coins").value) || 0;
    var coins5 = parseFloat(document.getElementById("5coins").value) || 0;

    var totalcoins = (coins2 + coins1 + coins50 + coins20 + coins10 + coins5).toFixed(2);
    document.getElementById("totalcoins").textContent = totalcoins;

    calculatetotalcash();
    calculateshiftvariance();
}

function calculatetotalcash() {
    var totalnotes = parseFloat(document.getElementById("totalnotes").textContent) || 0;
    var totalcoins = parseFloat(document.getElementById("totalcoins").textContent) || 0;
    
    var totalcash = (totalnotes + totalcoins).toFixed(2);
    document.getElementById("totalcash").textContent = totalcash;

    calculateshiftvariance();
}



function calculatetotalmovement() {
    var payouts = parseFloat(document.getElementById("payouts").value) || 0;
    var withdrawals = parseFloat(document.getElementById("withdrawals").value) || 0;
    var deposits = parseFloat(document.getElementById("deposits").value) || 0;
    var cheques = parseFloat(document.getElementById("cheques").value) || 0;
    var refills = parseFloat(document.getElementById("refills").value) || 0;
    var pettycash = parseFloat(document.getElementById("pettycash").value) || 0;
    var rounding = parseFloat(document.getElementById("rounding").value) || 0;

    var totalmovement = (payouts + withdrawals - deposits - cheques + refills + pettycash + rounding).toFixed(2);
    document.getElementById("totalmovement").textContent = totalmovement;


    calculateshiftvariance();
}

function calculatetotalFloat() {
    var opening = parseFloat(document.getElementById("opening").value) || 0;
    var transferin = parseFloat(document.getElementById("transferin").value) || 0;
    var transferout = parseFloat(document.getElementById("transferout").value) || 0;

    var totalfloat = (opening + transferin - transferout).toFixed(2);
    document.getElementById("totalfloat").textContent = totalfloat;

    calculateshiftvariance();
}

function calculateshiftvariance() {
    var totalcash = parseFloat(document.getElementById("totalcash").textContent) || 0;
    var totalmovement = parseFloat(document.getElementById("totalmovement").textContent) || 0;
    var totalfloat = parseFloat(document.getElementById("totalfloat").textContent) || 0;

    var shiftvariance = (totalcash + totalmovement - totalfloat).toFixed(2);
    document.getElementById("shiftvariance").textContent = shiftvariance;
}
