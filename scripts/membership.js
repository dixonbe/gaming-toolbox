document.addEventListener('DOMContentLoaded', function () {
    // Set the default go-live date to 30 June of the next year
    const today = new Date();
    const nextYear = today.getFullYear() + 1;
    const defaulttermenddate = new Date(nextYear, 5, 31); // Month is zero-based (0-11)
    document.getElementById('termenddate').valueAsDate = defaulttermenddate;

    // Set default values for each task
    document.getElementById('nextTermDays').value = 90;
    document.getElementById('renewalDays').value = 30;
    document.getElementById('graceDays').value = 7;
    document.getElementById('lapsedDays').value = 30;

    // Calculate dates on page load
    calculateDates();
});

function calculateDates() {
    const termenddateInput = document.getElementById('termenddate');
    const nextTermDaysInput = document.getElementById('nextTermDays');
    const renewalDaysInput = document.getElementById('renewalDays');
    const graceDaysInput = document.getElementById('graceDays');
    const lapsedDaysInput = document.getElementById('lapsedDays');

    const termenddate = new Date(termenddateInput.value);

    const nextTermDate = calculateDate(termenddate, -parseInt(nextTermDaysInput.value));
    const renewalDate = calculateDate(termenddate, -parseInt(renewalDaysInput.value));
    const graceDate = calculateDate(termenddate, parseInt(graceDaysInput.value));
    const lapsedDate = calculateDate(termenddate, parseInt(lapsedDaysInput.value));

    document.getElementById('nextTermOutput').innerHTML = `${formatDate(nextTermDate)}`;
    document.getElementById('renewalOutput').innerHTML = `${formatDate(renewalDate)}`;
    document.getElementById('graceOutput').innerHTML = `${formatDate(graceDate)}`;
    document.getElementById('lapsedOutput').innerHTML = `${formatDate(lapsedDate)}`;
}

function calculateDate(baseDate, days) {
    const resultDate = new Date(baseDate);
    resultDate.setDate(resultDate.getDate() + days);
    return resultDate;
}

function formatDate(date) {
    const day = date.getDate();
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${padWithZero(day)}-${month}-${year}`;
}


function padWithZero(number) {
    return number.toString().padStart(2, '0');
}