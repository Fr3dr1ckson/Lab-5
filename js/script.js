function showError(element, message) {
    element.classList.toggle('errorMassage', !!message);
    element.innerText = message || '';
}

function calculate() {
    let width = parseInt(document.getElementById('width').value);
    let length = parseInt(document.getElementById('length').value);
    if(
        handleIncorrectValue(length, 'errorLengthMassage', 0)
        |
        handleIncorrectValue(width, 'errorWidthMassage', 0)
    ) { return; }

    let area = width * length;
    let perimeter = (width + length) * 2;
    let diagonal = Math.sqrt(width**2 + length**2)

    document.getElementById('areaOutput').innerText = area;
    document.getElementById('perimeterOutput').innerText = perimeter;
    document.getElementById('diagonalOutput').innerText = diagonal;
}

function calcDayOfWeek() {
    let year = parseInt(document.getElementById('year').value);
    let month = parseInt(document.getElementById('month').value);
    let day = parseInt(document.getElementById('day').value);

    if(
        handleIncorrectValue(year, 'errorYearMassage', 1999, 2023)
        |
        handleIncorrectValue(month, 'errorMonthMassage', 1, 12)
        |
        handleIncorrectValue(day, 'errorDayMassage', 1, 31)
    ) { return; }

    if (month < 3) {
        month += 12;
        year--;
    }

    let k = year % 100;
    let j = Math.floor(year / 100);

    let dayOfWeek = (day + Math.floor(13 * (month + 1) / 5) + k + Math.floor(k / 4) + Math.floor(j / 4) - 2 * j) % 7;
    let week = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота']
    document.getElementById('dayOfWeek').innerText = week[(dayOfWeek + 6) % 7];
}

function handleIncorrectValue(value, errorMassageId, minInclude, maxInclude=Infinity) {
    let errorMassage = document.getElementById(errorMassageId);

    if (value < minInclude || value > maxInclude) {
        showError(errorMassage, `Число має бути в від ${minInclude} до ${maxInclude}`);
        return true;

    } else if(isNaN(value)) {
        showError(errorMassage, '');
        return true;
    }
    showError(errorMassage, '');
    return false;
}
