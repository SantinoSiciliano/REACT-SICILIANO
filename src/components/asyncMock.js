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
    {id:'2', name: 'remera stussy', price: 800, category:'remeras', img:"https://drops-ba.com/wp-content/uploads/2023/10/Stussy-Soda-Can-Tee-White-Red.jpg", stock: 25, description:'descripcion de remera stussy'},
    {id:'3', name: 'buzo supreme', price: 1200, category:'buzos', img:"https://drops-ba.com/wp-content/uploads/2023/10/Supreme-Cities-Arc-Crewneck-Cardinal.jpg", stock: 25, description:'descripcion de buzo supreme'}
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    const filteredProducts = products.filter((product) => product.category === category);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(filteredProducts);
      }, 500);
    });
};