function showError(element, message) {
    element.classList.toggle('errorText', !!message);
    element.innerText = message || '';
}

function handleNegNums(width, length) {
    let errorWidthText = document.getElementById('errorWidthMessage');
    let errorLengthText = document.getElementById('errorLengthMessage');
    let flag = false;
    if (length < 0)
    {
        showError(errorLengthText, 'Число має бути більше 0');
        flag = true;
    }
    else if (isNaN(length) || length>=0)
    {
        showError(errorLengthText, '');
    }

    if (width < 0)
    {
        showError(errorWidthText, 'Число має бути більше 0');
        flag = true;
    }
    else if (isNaN(width) || width>=0)
    {
        showError(errorWidthText, '');
    }
    return flag;
}
function calculate() {
    let width = document.getElementById('width').value;
    let length = document.getElementById('length').value;
    if(handleNegNums(width,length)){
        return
    }
    let area = width*length;
    let perimeter = width*2+length*2;
    let diagonal = Math.sqrt(width*width+length*length)

    document.getElementById('areaOutput').innerText = area;
    document.getElementById('perimeterOutput').innerText = perimeter;
    document.getElementById('diagonalOutput').innerText = diagonal;
}
