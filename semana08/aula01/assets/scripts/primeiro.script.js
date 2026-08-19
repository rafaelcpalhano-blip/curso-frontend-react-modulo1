console.log("Hello World!");

let title = document.getElementById("title");

console.log(title.textContent);

title.textContent = "Novo título - 2"

console.log(title.textContent);

setTimeout(() => {
    title.textContent = "Novo título - 3";
}, 4000);