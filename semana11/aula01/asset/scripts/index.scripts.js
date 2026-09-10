console.log("Conectado");


const uf = document.getElementById("uf")

async function searchAddress(cep) {
    let apiURL = "https://viacep.com.br/ws/" + cep + "/json/";
    const response = await fetch(apiURL);
    const data = await response.json()

    if (data.erro != undefined) {
        alert("Cep não encontrado!");
        return;
    }

    console.log(data.logradouro + ", " + data.uf);

    uf.textContent = uf.textContent + " " + data.uf;

    
}



//searchAddress("99999911");

async function harryPotterCharacters(index) {
    const photo = document.getElementById("photo")
    const apiURL = 'https://hp-api.onrender.com/api/characters'

    const response = await fetch(apiURL);
    const data = await response.json()

    console.log(data[0].alternate_names[1]);

    photo.innerHTML = `<img src="${data[index].image}"/>`;

}

//harryPotterCharacters(25);


async function rate() {
    console.log("Carregando...");

    try {
    const apiURL = "https://economia.awesomeapi.com.br/last/USD-BRL";

    const response = await fetch(apiURL);
    // console.log(response.ok);

    if (response.ok == false) {
      alert("Requisiçao falha!");
      return; 
    }

    const data = await response.json();

    console.log(data.USDBRL);
  } catch (error) {
    console.log("Erro ao converter!");
  }
}

rate();