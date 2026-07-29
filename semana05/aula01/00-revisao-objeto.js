const order = {
    custumer: "Ana",
    items: [
        { name: "Pizza", price: 45 },
        { name: "Refrigerante", price: 12}
    ],
    adress: {
        city: "Florianópolis",
    },
    total() {
        return this.items.reduce((sum, item) => {
            return sum + item.price;
        }, 0)
    },
    delivered: false
}

console.log(order.custumer);
console.log(order.items[1].price);
console.log(order.total());