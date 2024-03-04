const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function startGame() {
    console.log("მოგესალმებით თამაშსი");
    console.log("თქვენ გაქვთ 5 ცდა რომ გამოიცნოთ 1 დან ასამდე რიცხვი");
    guessNumber();
}
function guessNumber() {
    let guess = parseInt(prompt("შემოიყვანეთ რიცხვი ერთიდან ასამდე"));

  
    

    attempts++;


    if (guess === randomNumber) {
        console.log("გილოცავთ თქვენ გამოიცანით რიცხვი " + randomNumber + " ცდების რაოდენობაა" + attempts);
    } else if (attempts === 5) {
        console.log("სამწუხაროდ თქვენ აღარ გაქვთ მეტი ცდა სწორი პასუხი იყო " + randomNumber + ".");
    } else {
        if (guess < randomNumber) {
            alert("სცადეთ მაღალი რიცხვი");
        } else {
            alert("სცადეთ დაბალი რიცხვი");
        }
        guessNumber();
    }
}


startGame();
