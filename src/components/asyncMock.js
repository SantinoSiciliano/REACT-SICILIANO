const products = [
    {
        id: '1',
        name: 'jordan 3',
        price: 1000,
        category: 'zapatillas',
        img:"https://drops-ba.com/wp-content/uploads/2023/08/Jordan-3-Retro-Hall-of-Fame.jpg",
        stock:25,
        description:'descripcion de jordan 3'
    },
    {id:'2', name: 'jordan 4', price: 800, category:'zapatilla', img:"https://drops-ba.com/wp-content/uploads/2023/06/Jordan-4-Retro-SB-Pine-Green.jpg", stock: 25, descripcion:'descripcion de jordan 4'},
    {id:'3', name: 'jordan 1', price: 1200, category:'zapatilla', img:"https://drops-ba.com/wp-content/uploads/2023/06/Jordan-1-Retro-AJKO-Chicago-2021.jpg", stock: 25, descripcion:'descripcion de jordan 1'}
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}