function revret(screenValue) {
    let ss = '';
    let j = screenValue.length - 1;
    while (screenValue[j] == '1' || screenValue[j] == '2' || screenValue[j] == '3' || screenValue[j] == '4' || screenValue[j] == '5' || screenValue[j] == '6' || screenValue[j] == '7' || screenValue[j] == '8' || screenValue[j] == '9' || screenValue[j] == '0') {
        ss += screenValue[j];
        j--;
        if (j < 0) break;
    }
    let sk = '';
    if (j >= 0 && screenValue[j] == '.') {
        j--;
        while (j >= 0 && (screenValue[j] == '1' || screenValue[j] == '2' || screenValue[j] == '3' || screenValue[j] == '4' || screenValue[j] == '5' || screenValue[j] == '6' || screenValue[j] == '7' || screenValue[j] == '8' || screenValue[j] == '9' || screenValue[j] == '0')) {
            sk += screenValue[j];
            j--;
            if (j < 0) break;
        }
    }
    let sss = '';
    for (let i = ss.length - 1; i >= 0; i--) {
        sss += ss[i];
    }
    let skk = '';
    for (let i = sk.length - 1; i >= 0; i--) {
        skk += sk[i];
    }
    if (skk.length != 0)
        sss = skk + "." + sss;
    sss = Number(sss);
    return sss;
}

function factorial(number) {
    if (number % 1 != 0) {
        return gamma(number + 1)
    }
    if (number == 0 || number == 1) {
        return 1
    }
    let result = 1
    for (let i = 1; i <= number; i++) {
        result *= i
    }
    if (result == Infinity) {
        return Infinity
    }
    return result
}

function gamma(n) {
    var g = 7,
        p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    if (n < 0.5) {
        return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
    } else {
        n--;
        var x = p[0];
        for (var i = 1; i < g + 2; i++) {
            x += p[i] / (n + i);
        }
        var t = n + g + 0.5;
        return Math.sqrt(2 * Math.PI) * Math.pow(t, (n + 0.5)) * Math.exp(-t) * x;
    }
}

let screen = document.getElementsByClassName('screen');
let inputstr = "";
btn = document.querySelectorAll('button');
let screenValue = '';
screen[1].innerText = '0';
let ans = 0;
let isdeg = 0;
for (item of btn) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'sin') {
            if (isdeg == 1) screenValue += "Math.sin((Math.PI/180)*";
            else screenValue += "Math.sin(";
            screen[0].innerText += 'sin(';
        }
        else if (buttonText == 'cos') {
            if (isdeg == 1) screenValue += "Math.cos((Math.PI/180)*";
            else screenValue += "Math.cos(";
            screen[0].innerText += 'cos(';
        }
        else if (buttonText == 'tan') {
            if (isdeg == 1) screenValue += "Math.tan((Math.PI/180)*";
            else screenValue += "Math.tan(";
            screen[0].innerText += 'tan(';
        }
        else if (buttonText == 'asin') {
            if (isdeg == 1) screenValue += "(180/Math.PI)*Math.asin(";
            else screenValue += "Math.asin(";
            screen[0].innerText += 'asin(';
        }
        else if (buttonText == 'acos') {
            if (isdeg == 1) screenValue += "(180/Math.PI)*Math.acos(";
            else screenValue += "Math.acos(";
            screen[0].innerText += 'acos(';
        }
        else if (buttonText == 'atan') {
            if (isdeg == 1) screenValue += "(180/Math.PI)*Math.atan(";
            else screenValue += "Math.atan(";
            screen[0].innerText += 'atan(';
        }
        else if (buttonText == "X^Y") {
            let sss = revret(screenValue);
            let xyz = sss.toString(10);
            screenValue = screenValue.substr(0, screenValue.length - xyz.length);
            screenValue += `Math.pow(${sss},`;
            screen[0].innerText += '^(';
        }
        else if (buttonText == "log") {
            screenValue += "Math.log10(";
            screen[0].innerText += 'log(';
        }
        else if (buttonText == "ln") {
            screenValue += "Math.log(";
            screen[0].innerText += 'ln(';
        }
        else if (buttonText == "(") {
            screenValue += "(";
            screen[0].innerText += '(';
        }
        else if (buttonText == ")") {
            screenValue += ")";
            screen[0].innerText += ')';
        }
        else if (buttonText == "√X") {
            screenValue += "Math.sqrt(";
            screen[0].innerText += '√(';
        }
        else if (buttonText == "AC") {
            screenValue = '';
            screen[0].innerText = '';
            screen[1].innerText = 0;
        }
        else if (buttonText == "←") {
            let k = screenValue[screenValue.length - 1];
            screenValue = screenValue.slice(0, -1);
            screen[0].innerText = screen[0].innerText.slice(0, -1);
        }
        else if (buttonText == "%") {
            let sss = revret(screenValue);
            let xyz = sss.toString(10);
            screenValue = screenValue.substr(0, screenValue.length - xyz.length);
            screenValue += `(${sss}/100)`;
            screen[0].innerText += '%';
        }
        else if (buttonText == "/") {
            screenValue += '/';
            screen[0].innerText += '/';
        }
        else if (buttonText == "X!") {
            let sss = revret(screenValue);
            let xk = sss.toString(10);
            screenValue = screenValue.substr(0, screenValue.length - xk.length);
            let kk = factorial(sss);
            screenValue += `${kk}`;
            screen[0].innerText += '!';
        }
        else if (buttonText == "1" || buttonText == "2" || buttonText == "3" || buttonText == "4" || buttonText == "5" || buttonText == "6" || buttonText == "7" || buttonText == "8" || buttonText == "9" || buttonText == "0") {
            screenValue += buttonText;
            screen[0].innerText += buttonText;
        }
        else if (buttonText == "x") {
            screenValue += '*';
            screen[0].innerText += 'x';
        }
        else if (buttonText == "-") {
            screenValue += '-';
            screen[0].innerText += '-';
        }
        else if (buttonText == "+") {
            screenValue += '+';
            screen[0].innerText += '+';
        }
        else if (buttonText == "1/X") {
            let sss = revret(screenValue);
            let xyz = sss.toString(10);
            screenValue = screenValue.substr(0, screenValue.length - xyz.length);
            screenValue += `Math.pow(${sss},-1)`;
            screen[0].innerText += '^(-1)';
        }
        else if (buttonText == "π") {
            screenValue += 'Math.PI';
            screen[0].innerText += 'π';
        }
        else if (buttonText == "e") {
            screenValue += 'Math.E';
            screen[0].innerText += 'e';
        }
        else if (buttonText == ".") {
            screenValue += '.';
            screen[0].innerText += '.';
        }
        else if (buttonText == "=") {
            let result;
            if (screenValue.length == 0) result = "Syntax Error";
            else {
                try {
                    result = eval(screenValue);
                } catch (error) {
                    if (error instanceof SyntaxError) {
                        result = "Syntax Error";
                    }
                }
            }
            ans = result;
            screen[1].innerText = ans;
        }
        else if (buttonText == "ANS") {
            if (screenValue.length == 0)
                screen[1].innerText = ans;
            screenValue += ans.toString(10);
            screen[0].innerText += 'ANS';
        }
        else if (buttonText == "log2") {
            screenValue += "Math.log2(";
            screen[0].innerText += 'log2(';
        }
        else if (buttonText == "exp") {
            screenValue += "Math.pow(Math.E,";
            screen[0].innerText += 'exp(';
        }
        else if (buttonText == "Deg") {
            isdeg = 0;
            e.target.innerText = 'Rad';
            console.log(buttonText);
        }
        else if (buttonText == "Rad") {
            isdeg = 1;
            e.target.innerText = 'Deg';
            console.log(buttonText);
        }
        else if (buttonText == '∛X') {
            screenValue += "Math.cbrt(";
            screen[0].innerText += '∛(';
        }
    })
}