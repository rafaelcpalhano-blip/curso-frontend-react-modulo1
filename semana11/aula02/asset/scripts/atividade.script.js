const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const userName = document.getElementById("userName");

// Exibe o nome salvo ao carregar a página
const savedName = localStorage.getItem("name");

if (savedName) {
  userName.textContent = `Olá, ${savedName}!`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();

  if (!name) return;

  localStorage.setItem("name", name);
  userName.textContent = `Olá, ${name}!`;

  nameInput.value = "";
});

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", () => {
  console.log("Limpeza localStorage")
  
//localStorage.clear();
localStorage.removeItem("name")
})


