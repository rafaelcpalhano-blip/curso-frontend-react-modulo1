console.log("Local Storage")

const form = document.getElementById("form");
const notesKey =   "portaria-recado"

const noteList = [];

//leitura o LocalStorage
  let savedNote = localStorage.getItem(notesKey);

  if(savedNote == null) {
      //Escrita no LocalStorage
     localStorage.setItem(notesKey, "Nenhum dado salvo!");
  };

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const note = document.getElementById("note").value;

 // console.log(note);

 noteList.push(note);

  //Escrita no LocalStorage
  localStorage.setItem(notesKey, JSON.stringify(noteList));

  savedNote = JSON.parse(localStorage.getItem(notesKey))
  console.log(savedNote)

});

  //console.log("Dado que veio do local storage:", savedNote);

  
  
  /*const items = ["café", "arroz", "leite"];

  localStorage.setItem("mercado-items", JSON.stringify(items))

  const savedItems = JSON.parse(localStorage.getItem("mercado-items"));

  console.log(savedItems.length)

  const users = [
    {
      name: "Felipe",
      idade: 34
    },
    {
      name: "Felipe",
      idade: 34
    },
  ];

  localStorage.setItem("usuarios-lista", JSON.stringify(users))

  const savedUsers = JSON.parse(localStorage.getItem("usuarios-lista"));

  console.log(savedItems);

  */