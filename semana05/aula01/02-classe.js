class Player {
    name = "Nome";
    score = 0;

    showScore() {
        console.log(`${this.name} tem ${this.score} pontos.`)
    }
}



const player1 = new Player();
player1.name = "Bianca";
player1.score = 1000;


console.log(player1.name);
console.log(player1.score);

player1.showScore();