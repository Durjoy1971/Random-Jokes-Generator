const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single";

const getJoke = async () => {
  try {
    jokeContainer.classList.toggle("fade", false);
    const response = await fetch(url);
    const data = await response.json();
    jokeContainer.textContent = data.joke;
    jokeContainer.classList.toggle("fade", true);
  } catch (error) {
    console.error("Failed to fetch joke:", error);
    jokeContainer.textContent = "Failed to load joke. Please try again.";
  }
};
getJoke();

btn.addEventListener("click", getJoke);
