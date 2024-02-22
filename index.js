let speedTypingTextEl = document.getElementById("speedTypingText");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let quoteInputEl = document.getElementById("quoteInput");
let resultEl = document.getElementById("result");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");

let counter = 0;
let uniqueId = null;

let homeScreen = function() {

    let options = {
        method: "GET"
    };

    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            quoteDisplayEl.textContent = jsonData.content;

        });

    uniqueId = setInterval(function() {
        counter = counter + 1;
        timerEl.textContent = counter;
    }, 1000);

};
homeScreen();

submitBtnEl.onclick = function() {
    if (quoteDisplayEl.textContent !== quoteInputEl.value) {
        resultEl.textContent = "You typed incorrect sentence";
    } else {
        clearInterval(uniqueId);
        resultEl.textContent = "Congratulations!👍 You typed in " + timerEl.textContent + " second";
    }
};
resetBtnEl.onclick = function() {

    clearInterval(uniqueId);
    counter = 0;
    timerEl.textContent = "0";

    quoteInputEl.value = "";
    resultEl.textContent = "";
    homeScreen();
};