function calculate(op) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Vui lòng nhập đủ hai số!";
    } else {
        switch(op) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/':
                result = num2 !== 0 ? (num1 / num2) : "Không chia được cho 0!";
                break;
        }
    }

    document.getElementById("result").innerText = "Kết quả: " + result;
}
