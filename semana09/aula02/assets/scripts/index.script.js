console.log("Formulários - Javascript");

const userData = document.getElementById("userData");

class User {
    constructor(name, age, studentLevel) {
        this.name = name;
        this.age = age;
        this.studentLevel = studentLevel;
    }

    ageVerify() {
        if (this.age >= 18) {
            return "Maior de idade";
        } else {
            return "Menor de idade";
        }
    }
}

const form = document.getElementsByTagName("form");

form[0].addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = Number(document.getElementById("age").value);
    const studentLevel = document.getElementById("studentLevel").value;
    const terms = document.getElementById("terms").checked;
    const politics = document.getElementById("politics").checked;
    const gender = document.querySelector(
        "input[name='gender']:checked"
    )?.value;

    const success = document.getElementById("success");

    const user = new User(name, age, studentLevel);

    console.log("Nome digitado:", user.name);
    console.log("Idade digitada:", user.age);
    console.log("Nível de graduação:", user.studentLevel);
    console.log("Concorda com os termos?", terms);
    console.log("Concorda com a política de privacidade?", politics);
    console.log("Gênero:", gender);

    render(user.name, user.age, user.studentLevel, user.ageVerify());

    success.textContent = "Usuário cadastrado com sucesso!";

    setTimeout(() => {
        success.textContent = "";
    }, 4000);

    clean();

});

function render(name, age, studentLevel, ageStatus) {
    userData.innerHTML = `
        <hr>

        <p> <strong>Nome do usuário:</strong> ${name}</p>
        
        <p> <strong>Idade do usuário:</strong> ${age} (${ageStatus}) </p>
        
        <p> <strong>Nível de Graduação:</strong> ${studentLevel}</p>
    `;
}

function clean() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("studentLevel").value = "";
    document.getElementById("terms").checked = false;
    document.getElementById("politics").checked = false;

    const gender = document.querySelector(
        "input[name='gender']:checked"
    );

    if (gender) {
        gender.checked = false;
    }
}