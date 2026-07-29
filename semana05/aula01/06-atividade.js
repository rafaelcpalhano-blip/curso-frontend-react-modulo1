class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
move() {
    console.log(`${this.brand} está em movimento para frente.`)
}
}

class Car extends Vehicle {
move() {
    console.log(`${this.brand} está sendo dirigido.`)
}
}

class Bike extends Vehicle {
move() {
    console.log(`${this.brand} está sendo pedalada.`)
}
}



const car = new Car("Ford");
const bike = new Bike("Trek");
car.move();
bike.move();