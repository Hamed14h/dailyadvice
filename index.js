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
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", function () {
  if (music.paused) {
    // Music is currently stopped, so play it
    music.play();

    // Change button text
    musicBtn.innerHTML = '<i class="fa-solid fa-pause"></i> Pause Music';
  } else {
    // Music is playing, so pause it
    music.pause();

    // Change button text
    musicBtn.innerHTML = '<i class="fa-solid fa-music"></i> Play Music';
  }
});
