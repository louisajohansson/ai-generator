function displayAnswer(response) {
  new Typewriter("#form-answer", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    display: 100,
  });
}

function generateAnswer(event) {
  event.preventDefault();

  let instructionElement = document.querySelector("#input-prompt");
  let apiKey = "fac344c0db5f6d5ctc9743db656e4obf";
  let prompt = `Generate a quote with ${instructionElement.value}`;
  let context =
    "You are a masterquoter AI assistent who knows all the best quotes in the world. Give the best quote using the users instructions. The quote shouldn't be more than three lines and seperated by <br />. Sign if the name of the person you quoted but their name should be underneat the quote following <br />. No offensive and very sweet and kind quotes";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let quoteElement = document.querySelector("#form-answer");
quoteElement.classList.remove("hidden");
quoteElement.innerHTML = `Generating quote… about ${instructionElement.value}`; 

  axios.get(apiUrl).then(displayAnswer);
}

let formElement = document.querySelector("#form-generator");
formElement.addEventListener("click", generateAnswer);
