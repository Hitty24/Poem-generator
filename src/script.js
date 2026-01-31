function generatePoem(event) {
    event.preventDefault();

    let poemElement = document.querySelector("#poem");
    poemElement.innerHTML = " Music lives inside my legs...";
       
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);