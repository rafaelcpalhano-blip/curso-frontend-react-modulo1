console.log("Alterar Conteúdo");

const alteredText = "Este é o novo texto!";
const littleText = "InnerHTML --";

const emptyBox = document.getElementById("box");

emptyBox.innerHTML = `
    <p id="alter-text">Este é o texto gerado pelo ${littleText}</p>
    <ul id="lista"></ul>
`;

const TagP = document.getElementById("alter-text");
const lista = document.getElementById("lista");

setTimeout(() => {
    TagP.textContent = alteredText;
}, 3000);

let i = 1;

while (i <= 5) {
    lista.innerHTML += `<li>Item ${i}</li>`;
    i++;
}