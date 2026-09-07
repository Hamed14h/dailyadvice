const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const quoteBtn = document.getElementById("quoteBtn");

async function getQuote() {
  try {
    quote.textContent = "Loading...";
    author.textContent = "";

    const response = await fetch("https://www.drivebird.com/api/quotes/random");

    const result = await response.json();

    const randomQuote = result.data[0];

    quote.textContent = `"${randomQuote.quote}"`;
    author.textContent = `— ${randomQuote.author}`;
  } catch (error) {
    quote.textContent = "Sorry, something went wrong ❤️";
    console.log(error);
  }
}

quoteBtn.addEventListener("click", getQuote);

getQuote();
