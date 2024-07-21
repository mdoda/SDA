function calculateNumber() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operation = document.getElementById('operation').value;
    let result;
    console.log("Hello")
    if (operation === 'add') {
        result = number1 + number2;
    } else if (operation === 'subtract') {
        result = number1 - number2;
    }
    console.log("ky funksion u ekzeketua")
    document.getElementById('result').textContent = 'Rezultati final eshte: ' + result;
}