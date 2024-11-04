const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", newName);

function newName(event){
   output.textContent = event.currentTarget.value;
  const name = input.value.trim();
  if (name === "") {
    output.textContent = "Anonymous";
  } else {
      output.textContent = event.target.value;
  };
}


  