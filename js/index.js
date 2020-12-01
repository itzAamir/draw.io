document.getElementById("submit").addEventListener("click", showAnswer);
const chat = document.querySelector(".chat-ul");
const audio = new Audio("../sounds/alert.mp3");

function showAnswer(e) {
    e.preventDefault();
    let answer = document.getElementById("chat-inp");
    if (answer.value != "") {
        let ul = document.querySelector(".chat-ul");
        let li = document.createElement("li");
        li.innerHTML = `<span class="user">Asif: </span><span class="answer">${answer.value}</span>`;
        li.classList.add("li")
        ul.appendChild(li);
        answer.value = "";
        chat.scrollBy(0, 100)
        audio.play();
    }
}

