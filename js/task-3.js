const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});

function newName(event){
  const name = input.value.trim();
  if (name === "") {
    output.textContent = "Anonymous";
  } else {
      output.textContent = event.target.value;
  };
}


  