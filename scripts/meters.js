document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('cashinopening').value = 0;
    calculatecashin();

    document.getElementById('cashoutopening').value = 0;
    calculatecashout();

    document.getElementById('watinopening').value = 0;
    calculatewatin();

    document.getElementById('watoutopening').value = 0;
    calculatewatout();

    document.getElementById('turnoveropening').value = 0;
    calculateturnover();

    document.getElementById('totalwinsopening').value = 0;
    calculatetotalwins();

    document.getElementById('gamesplayedopening').value = 0;
    calculategamesplayed();

    document.getElementById('cashboxopening').value = 0;
    calculatecashbox();

    document.getElementById('cancelcreditopening').value = 0;
    calculatecancelcredit();

    document.getElementById('coinopening').value = 0;
    calculatecoin();

    document.getElementById('moneyinopening').value = 0;
    calculatemoneyin();

    document.getElementById('moneyoutopening').value = 0;
    calculatemoneyout();

    document.getElementById('notes5opening').value = 0;
    calculatenotes5();

    document.getElementById('notes10opening').value = 0;
    calculatenotes10();

    document.getElementById('notes20opening').value = 0;
    calculatenotes20();

    document.getElementById('notes50opening').value = 0;
    calculatenotes50();

    document.getElementById('notes100opening').value = 0;
    calculatenotes100();

    document.getElementById('billinopening').value = 0;
    calculatebillin();

    document.getElementById('ticketinopening').value = 0;
    calculateticketin();

    document.getElementById('ticketincountopening').value = 0;
    calculateticketincount();

    document.getElementById('xtracreditopening').value = 0;
    calculatextracredit();

    document.getElementById('metermovement').value = "";
    calculatemeter()

});


function calculatecashin() {
    var cashinopening = parseFloat(document.getElementById("cashinopening").value) || 0;
    var cashinnewclosing = parseFloat(document.getElementById("cashinnewclosing").value) || 0;
    var cashinnewopening = parseFloat(document.getElementById("cashinnewopening").value) || 0;
    var cashinclosing = parseFloat(document.getElementById("cashinclosing").value) || 0;

    var cashinmovement = (((cashinnewclosing - cashinopening) + (cashinclosing - cashinnewopening)) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    document.getElementById("cashinmovement").innerText = cashinmovement;

}

function calculatecashout() {
    var cashoutopening = parseFloat(document.getElementById("cashoutopening").value) || 0;
    var cashoutnewclosing = parseFloat(document.getElementById("cashoutnewclosing").value) || 0;
    var cashoutnewopening = parseFloat(document.getElementById("cashoutnewopening").value) || 0;
    var cashoutclosing = parseFloat(document.getElementById("cashoutclosing").value) || 0;

    var cashoutmovement = (((cashoutnewclosing - cashoutopening) + (cashoutclosing - cashoutnewopening)) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    document.getElementById("cashoutmovement").innerText = cashoutmovement;

}

function calculatewatin() {
    var watinopening = parseFloat(document.getElementById("watinopening").value) || 0;
    var watinnewclosing = parseFloat(document.getElementById("watinnewclosing").value) || 0;
    var watinnewopening = parseFloat(document.getElementById("watinnewopening").value) || 0;
    var watinclosing = parseFloat(document.getElementById("watinclosing").value) || 0;

    var watinmovement = (((watinnewclosing - watinopening) + (watinclosing - watinnewopening)) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    document.getElementById("watinmovement").innerText = watinmovement;

}

function calculatewatout() {
    var watoutopening = parseFloat(document.getElementById("watoutopening").value) || 0;
    var watoutnewclosing = parseFloat(document.getElementById("watoutnewclosing").value) || 0;
    var watoutnewopening = parseFloat(document.getElementById("watoutnewopening").value) || 0;
    var watoutclosing = parseFloat(document.getElementById("watoutclosing").value) || 0;

    var watoutmovement = (((watoutnewclosing - watoutopening) + (watoutclosing - watoutnewopening)) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    document.getElementById("watoutmovement").innerText = watoutmovement;

}

function calculateturnover() {
    var turnoveropening = parseFloat(document.getElementById("turnoveropening").value) || 0;
    var turnovernewclosing = parseFloat(document.getElementById("turnovernewclosing").value) || 0;
    var turnovernewopening = parseFloat(document.getElementById("turnovernewopening").value) || 0;
    var turnoverclosing = parseFloat(document.getElementById("turnoverclosing").value) || 0;

    var turnovermovement = (((turnovernewclosing - turnoveropening) + (turnoverclosing - turnovernewopening)) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    document.getElementById("turnovermovement").innerText = turnovermovement;

}

function calculatetotalwins() {
    var totalwinsopening = parseFloat(document.getElementById("totalwinsopening").value) || 0;
    var totalwinsnewclosing = parseFloat(document.getElementById("totalwinsnewclosing").value) || 0;
    var totalwinsnewopening = parseFloat(document.getElementById("totalwinsnewopening").value) || 0;
    var totalwinsclosing = parseFloat(document.getElementById("totalwinsclosing").value) || 0;

    var totalwinsmovement = (((totalwinsnewclosing - totalwinsopening) + (totalwinsclosing - totalwinsnewopening)) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    document.getElementById("totalwinsmovement").innerText = totalwinsmovement;

}

function calculategamesplayed() {
    var gamesplayedopening = parseFloat(document.getElementById("gamesplayedopening").value) || 0;
    var gamesplayednewclosing = parseFloat(document.getElementById("gamesplayednewclosing").value) || 0;
    var gamesplayednewopening = parseFloat(document.getElementById("gamesplayednewopening").value) || 0;
    var gamesplayedclosing = parseFloat(document.getElementById("gamesplayedclosing").value) || 0;

    var gamesplayedmovement = ((gamesplayednewclosing - gamesplayedopening) + (gamesplayedclosing - gamesplayednewopening)).toFixed(0);
    document.getElementById("gamesplayedmovement").innerText = gamesplayedmovement;

}

function calculatecashbox() {
    var cashboxopening = parseFloat(document.getElementById("cashboxopening").value) || 0;
    var cashboxnewclosing = parseFloat(document.getElementById("cashboxnewclosing").value) || 0;
    var cashboxnewopening = parseFloat(document.getElementById("cashboxnewopening").value) || 0;
    var cashboxclosing = parseFloat(document.getElementById("cashboxclosing").value) || 0;

    var cashboxmovement = (((cashboxnewclosing - cashboxopening) + (cashboxclosing - cashboxnewopening)) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    document.getElementById("cashboxmovement").innerText = cashboxmovement;

}

function calculatecancelcredit() {
    var cancelcreditopening = parseFloat(document.getElementById("cancelcreditopening").value) || 0;
    var cancelcreditnewclosing = parseFloat(document.getElementById("cancelcreditnewclosing").value) || 0;
    var cancelcreditnewopening = parseFloat(document.getElementById("cancelcreditnewopening").value) || 0;
    var cancelcreditclosing = parseFloat(document.getElementById("cancelcreditclosing").value) || 0;

    var cancelcreditmovement = (((cancelcreditnewclosing - cancelcreditopening) + (cancelcreditclosing - cancelcreditnewopening)) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    document.getElementById("cancelcreditmovement").innerText = cancelcreditmovement;

}

function calculatecoin() {
    var coinopening = parseFloat(document.getElementById("coinopening").value) || 0;
    var coinnewclosing = parseFloat(document.getElementById("coinnewclosing").value) || 0;
    var coinnewopening = parseFloat(document.getElementById("coinnewopening").value) || 0;
    var coinclosing = parseFloat(document.getElementById("coinclosing").value) || 0;

    var coinmovement = (((coinnewclosing - coinopening) + (coinclosing - coinnewopening)) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    document.getElementById("coinmovement").innerText = coinmovement;

}

function calculatemoneyin() {
    var moneyinopening = parseFloat(document.getElementById("moneyinopening").value) || 0;
    var moneyinnewclosing = parseFloat(document.getElementById("moneyinnewclosing").value) || 0;
    var moneyinnewopening = parseFloat(document.getElementById("moneyinnewopening").value) || 0;
    var moneyinclosing = parseFloat(document.getElementById("moneyinclosing").value) || 0;

    var moneyinmovement = (((moneyinnewclosing - moneyinopening) + (moneyinclosing - moneyinnewopening)) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    document.getElementById("moneyinmovement").innerText = moneyinmovement;

}

function calculatemoneyout() {
    var moneyoutopening = parseFloat(document.getElementById("moneyoutopening").value) || 0;
    var moneyoutnewclosing = parseFloat(document.getElementById("moneyoutnewclosing").value) || 0;
    var moneyoutnewopening = parseFloat(document.getElementById("moneyoutnewopening").value) || 0;
    var moneyoutclosing = parseFloat(document.getElementById("moneyoutclosing").value) || 0;

    var moneyoutmovement = (((moneyoutnewclosing - moneyoutopening) + (moneyoutclosing - moneyoutnewopening)) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    document.getElementById("moneyoutmovement").innerText = moneyoutmovement;

}

function calculatenotes5() {
    var notes5opening = parseFloat(document.getElementById("notes5opening").value) || 0;
    var notes5newclosing = parseFloat(document.getElementById("notes5newclosing").value) || 0;
    var notes5newopening = parseFloat(document.getElementById("notes5newopening").value) || 0;
    var notes5closing = parseFloat(document.getElementById("notes5closing").value) || 0;

    var notes5movement = ((notes5newclosing - notes5opening) + (notes5closing - notes5newopening)).toFixed(0);
    document.getElementById("notes5movement").innerText = notes5movement;

}

function calculatenotes10() {
    var notes10opening = parseFloat(document.getElementById("notes10opening").value) || 0;
    var notes10newclosing = parseFloat(document.getElementById("notes10newclosing").value) || 0;
    var notes10newopening = parseFloat(document.getElementById("notes10newopening").value) || 0;
    var notes10closing = parseFloat(document.getElementById("notes10closing").value) || 0;

    var notes10movement = ((notes10newclosing - notes10opening) + (notes10closing - notes10newopening)).toFixed(0);
    document.getElementById("notes10movement").innerText = notes10movement;

}

function calculatenotes20() {
    var notes20opening = parseFloat(document.getElementById("notes20opening").value) || 0;
    var notes20newclosing = parseFloat(document.getElementById("notes20newclosing").value) || 0;
    var notes20newopening = parseFloat(document.getElementById("notes20newopening").value) || 0;
    var notes20closing = parseFloat(document.getElementById("notes20closing").value) || 0;

    var notes20movement = ((notes20newclosing - notes20opening) + (notes20closing - notes20newopening)).toFixed(0);
    document.getElementById("notes20movement").innerText = notes20movement;

}

function calculatenotes50() {
    var notes50opening = parseFloat(document.getElementById("notes50opening").value) || 0;
    var notes50newclosing = parseFloat(document.getElementById("notes50newclosing").value) || 0;
    var notes50newopening = parseFloat(document.getElementById("notes50newopening").value) || 0;
    var notes50closing = parseFloat(document.getElementById("notes50closing").value) || 0;

    var notes50movement = ((notes50newclosing - notes50opening) + (notes50closing - notes50newopening)).toFixed(0);
    document.getElementById("notes50movement").innerText = notes50movement;

}

function calculatenotes100() {
    var notes100opening = parseFloat(document.getElementById("notes100opening").value) || 0;
    var notes100newclosing = parseFloat(document.getElementById("notes100newclosing").value) || 0;
    var notes100newopening = parseFloat(document.getElementById("notes100newopening").value) || 0;
    var notes100closing = parseFloat(document.getElementById("notes100closing").value) || 0;

    var notes100movement = ((notes100newclosing - notes100opening) + (notes100closing - notes100newopening)).toFixed(0);
    document.getElementById("notes100movement").innerText = notes100movement;

}

function calculatebillin() {
    var billinopening = parseFloat(document.getElementById("billinopening").value) || 0;
    var billinnewclosing = parseFloat(document.getElementById("billinnewclosing").value) || 0;
    var billinnewopening = parseFloat(document.getElementById("billinnewopening").value) || 0;
    var billinclosing = parseFloat(document.getElementById("billinclosing").value) || 0;

    var billinmovement = (((billinnewclosing - billinopening) + (billinclosing - billinnewopening)) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    document.getElementById("billinmovement").innerText = billinmovement;

}

function calculateticketin() {
    var ticketinopening = parseFloat(document.getElementById("ticketinopening").value) || 0;
    var ticketinnewclosing = parseFloat(document.getElementById("ticketinnewclosing").value) || 0;
    var ticketinnewopening = parseFloat(document.getElementById("ticketinnewopening").value) || 0;
    var ticketinclosing = parseFloat(document.getElementById("ticketinclosing").value) || 0;

    var ticketinmovement = (((ticketinnewclosing - ticketinopening) + (ticketinclosing - ticketinnewopening)) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    document.getElementById("ticketinmovement").innerText = ticketinmovement;

}

function calculateticketincount() {
    var ticketincountopening = parseFloat(document.getElementById("ticketincountopening").value) || 0;
    var ticketincountnewclosing = parseFloat(document.getElementById("ticketincountnewclosing").value) || 0;
    var ticketincountnewopening = parseFloat(document.getElementById("ticketincountnewopening").value) || 0;
    var ticketincountclosing = parseFloat(document.getElementById("ticketincountclosing").value) || 0;

    var ticketincountmovement = ((ticketincountnewclosing - ticketincountopening) + (ticketincountclosing - ticketincountnewopening)).toFixed(0);
    document.getElementById("ticketincountmovement").innerText = ticketincountmovement;

}

function calculatextracredit() {
    var xtracreditopening = parseFloat(document.getElementById("xtracreditopening").value) || 0;
    var xtracreditnewclosing = parseFloat(document.getElementById("xtracreditnewclosing").value) || 0;
    var xtracreditnewopening = parseFloat(document.getElementById("xtracreditnewopening").value) || 0;
    var xtracreditclosing = parseFloat(document.getElementById("xtracreditclosing").value) || 0;

    var xtracreditmovement = (((xtracreditnewclosing - xtracreditopening) + (xtracreditclosing - xtracreditnewopening)) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    document.getElementById("xtracreditmovement").innerText = xtracreditmovement;

}

function calculatemeter() {
    // Get input values
    var initialReading = parseFloat(document.getElementById("meteropening").value) || 0;
    var finalReading = parseFloat(document.getElementById("meterclosing").value) || 0;
    var newInitialReading = parseFloat(document.getElementById("meternewopening").value) || 0;
    var newFinalReading = parseFloat(document.getElementById("meternewclosing").value) || 0;

    // Calculate meter movement
    var meterMovement = (((newFinalReading - initialReading) + (finalReading - newInitialReading)) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    
    // Update HTML element with the result
    document.getElementById("metermovement").innerText = meterMovement;

    // You may add comments here to explain the purpose of the function or specific calculations
}
