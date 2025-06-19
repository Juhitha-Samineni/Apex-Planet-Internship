async function getJoke() {
  const jokeContainer = document.getElementById("joke");
  jokeContainer.innerText = "Fetching joke...";
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" }
    });
    const data = await response.json();
    jokeContainer.innerText = data.joke;
  } catch (error) {
    jokeContainer.innerText = "Oops! Couldn't fetch a joke. Try again.";
    console.error("Error fetching joke:", error);
  }
}
