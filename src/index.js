function generateAnswer(event) {
  event.preventDefault();
  
 new Typewriter("#form-answer", {
   strings: "Hello World",
   autoStart: true,
   cursor: "",
   display: 150,
 });
}

let formElement = document.querySelector("#form-generator");
formElement.addEventListener("click", generateAnswer);
