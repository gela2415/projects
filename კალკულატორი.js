let operatori = prompt("შემოიყვანეთ ოპერატორი (+, -, *, /)");
let num1 = parseFloat(prompt("შემოიყვანეთ პირველი რიცხვი"));
let num2 = parseFloat(prompt("შემოიყვანეთ მეორე რიცხვი"));
let result;
if (operatori === '+') {
    result = num1 + num2;
} else if (operatori === '-') {
    result = num1 - num2;
} else if (operatori === '*') {
    result = num1 * num2;
} else if (operatori === '/') {
    if (num2 === 0) {
        result = "გაყოფის დროს ნულს ნუ შემოიყვანთ";
    } else {
        result = num1 / num2;
    }
} else {
    result = "არასწორია მათემატიკური ოპერატორი";
}


console.log("შედეგი:", result);
