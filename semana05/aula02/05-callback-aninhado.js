function loadOrders(callback) {
    setTimeout(() => {
        console.log("2 - Pedidos Carregados!");
        callback()
    }, 2000)
}

function loginUser(user, callback) {
    setTimeout(() => {
        console.log("1 - Usuário logado: ", user)
        callback()
    }, 2000)
}

function loadDetails(callback) {
    setTimeout(() => {
        console.log("3- Detalhes carregados")
        callback()
    })
}

loginUser("Henrique", () => {
    loadOrders(() => {
        loadDetails(() => {
            console.log("Tudo finalizado!")
        })
    })
})