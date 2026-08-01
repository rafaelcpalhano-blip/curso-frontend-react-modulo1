class Task {
    constructor(title, done) {
        this.title = title;
        this.done = done;
    }
describe() {
    return `${this.title} - ${this.done ? 'Feito' : 'Pendente'}`;
}
}

function loadFromServers() {
    const data = [
        { tittle: "Estudar closures", done: false },
        { tittle: "Fazer o mini-projeto", done: false },
        { tittle: "Revisar Conteúdo", done: true }
    ]

    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve(data)
        }, 3000)
    })
}

async function start() {
    console.log("Carregando tarefas do servidor...");

    const rawData = await loadFromServers()

    const tasks = rawData.map((item) => new Task(item.tittle, item.done))

    console.log(tasks)
    tasks.forEach(element => {
        console.log(element.describe())
    });
}

start()