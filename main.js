
const adviceNum = document.querySelector(".myid");
const quote = document.querySelector(".message");
const dice = document.querySelector(".dice");

const adviceQuote = async () => {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json();
    adviceNum.textContent = `Advice # ${data.slip.id}`;
    quote.innerHTML = data.slip.advice;
    console.log(data);


}
adviceQuote()

dice.addEventListener("click", adviceQuote)