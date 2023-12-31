function calculateSimpleInterest() {
    // Get the input values
    const principal = parseFloat(document.getElementById('input1').value);
    const rate = parseFloat(document.getElementById('input2').value);
    const time = parseFloat(document.getElementById('input3').value);

    // Calculate the simple interest
    const simpleInterest = (principal * rate * time) / 100;

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Simple Interest: ${simpleInterest.toFixed(2)}`;
}

