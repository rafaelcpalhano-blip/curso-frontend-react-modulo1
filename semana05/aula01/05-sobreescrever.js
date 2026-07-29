class User {
    constructor(name) {
        this.name = name;
    }
    showRole() {
        console.log(`${this.name} é um usuário do sistema.`);
    }
}

class Admin extends User {
    showRole() {
        console.log(`${this.name} é um administrador(a) do sistema.`);
    }
}   

class Teacher extends User {
    showRole() {
        console.log(`${this.name} é professor(a).`);
    }
}

const users = [
    new Admin("José"),
    new Teacher("Maria Clara"),
    new User("Victor")
]

users.forEach((user) => {
    user.showRole();
});