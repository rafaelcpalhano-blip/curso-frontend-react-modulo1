console.log("Array na Tela")

const animes = [
    {
        nome:"Naruto",
        ano: 2002,
    },
    {
        nome:"Dragon Ball",
        ano: 1986,
    },
   {
        nome:"One Piece",
        ano: 1999,
    },
  {
        nome:"Attack on Titan",
        ano: 2013,
    }
];

const list = document.getElementById("animes-list");

//setTimeout(() => {
//     list.innerHTML = "<p>Lista Carregando</p>";
//}, 3000);

animes.forEach((anime) => {
    list.innerHTML += 
     `
    
        <li class="anime">Nome: ${anime.nome} - Ano: ${anime.ano}</li>
        
     `
})