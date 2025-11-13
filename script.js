function convert() {
    let value = parseFloat(document.getElementById("inputValue").value);
    let type = document.getElementById("conversionType").value;
    let result = "";

    if (isNaN(value)) {
        result = "Please enter a number!";
    } else {
        switch (type) {
            case "CtoF":
                result = `${value}°C = ${(value * 9/5 + 32).toFixed(2)}°F`;
                break;
            case "FtoC":
                result = `${value}°F = ${((value - 32) * 5/9).toFixed(2)}°C`;
                break;
            case "MtoF":
                result = `${value} meters = ${(value * 3.28084).toFixed(2)} feet`;
                break;
            case "FtoM":
                result = `${value} feet = ${(value / 3.28084).toFixed(2)} meters`;
                break;
        }
    }
    document.getElementById("result").innerText = result;
}

function calculateTax() {
    let income = parseFloat(document.getElementById("income").value);
    if (isNaN(income)) {
        document.getElementById("taxResult").innerText = "Enter a valid income.";
        return;
    }
    let tax = income * 0.1;
    let net = income - tax;
    document.getElementById("taxResult").innerText = 
        `Tax: ₱${tax.toFixed(2)} | Net Income: ₱${net.toFixed(2)}`;
}

function calculateLoops() {
    let n = parseInt(document.getElementById("loopInput").value);
    if (isNaN(n) || n <= 0) {
        document.getElementById("loopResult").innerText = "Enter a valid number.";
        return;
    }

    // Factorial (while loop)
    let fact = 1, i = 1;
    while (i <= n) { fact *= i; i++; }

    // Sum (do-while)
    let sum = 0, j = 1;
    do { sum += j; j++; } while (j <= n);

    // Average (for)
    let total = 0;
    for (let k = 1; k <= n; k++) total += k;
    let avg = total / n;

    document.getElementById("loopResult").innerText = 
        `Factorial: ${fact}\nSum: ${sum}\nAverage: ${avg.toFixed(2)}`;
}

function calculatePayroll() {
    let hours = parseFloat(document.getElementById("hoursWorked").value);
    let rate = parseFloat(document.getElementById("hourlyRate").value);
    if (isNaN(hours) || isNaN(rate)) {
        document.getElementById("payrollResult").innerText = "Enter valid numbers.";
        return;
    }

    let gross = hours * rate;
    let tax = gross * 0.1;
    let net = gross - tax;

    document.getElementById("payrollResult").innerText = 
        `Gross Pay: ₱${gross.toFixed(2)}\nTax (10%): ₱${tax.toFixed(2)}\nNet Pay: ₱${net.toFixed(2)}`;
}
