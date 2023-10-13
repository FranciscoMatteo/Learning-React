const misProductos = [
    { id: 1, nombre: "buzo1", precio: 1000},
    { id: 2, nombre: "buzo2", precio: 1100},
    { id: 3, nombre: "buzo3", precio: 1200},
    { id: 4, nombre: "buzo4", precio: 1300},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000)
    })
}