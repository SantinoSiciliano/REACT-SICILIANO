const products = [
    {id: '1', name: 'zapatilla 1', price: 1000, category: 'zapatillas', img:"https://drops-ba.com/wp-content/uploads/2023/08/Jordan-3-Retro-Hall-of-Fame.jpg", stock:25, description:'descripcion de jordan 3'},
    {id:'2', name: 'remera 1', price: 800, category:'remeras', img:"https://drops-ba.com/wp-content/uploads/2023/10/Stussy-Soda-Can-Tee-White-Red.jpg", stock: 25, description:'descripcion de remera stussy'},
    {id:'3', name: 'buzo 1', price: 1200, category:'buzos', img:"https://drops-ba.com/wp-content/uploads/2023/10/Supreme-Cities-Arc-Crewneck-Cardinal.jpg", stock: 25, description:'descripcion de buzo supreme'},
    {id: '4', name: 'zapatilla 2', price: 1000, category: 'zapatillas', img:"https://drops-ba.com/wp-content/uploads/2023/08/Jordan-3-Retro-Hall-of-Fame.jpg", stock:25, description:'descripcion de jordan 3'},
    {id:'5', name: 'remera 2', price: 800, category:'remeras', img:"https://drops-ba.com/wp-content/uploads/2023/10/Stussy-Soda-Can-Tee-White-Red.jpg", stock: 25, description:'descripcion de remera stussy'},
    {id:'6', name: 'buzo 2', price: 1200, category:'buzos', img:"https://drops-ba.com/wp-content/uploads/2023/10/Supreme-Cities-Arc-Crewneck-Cardinal.jpg", stock: 25, description:'descripcion de buzo supreme'},
    {id: '7', name: 'zapatilla 3', price: 1000, category: 'zapatillas', img:"https://drops-ba.com/wp-content/uploads/2023/08/Jordan-3-Retro-Hall-of-Fame.jpg", stock:25, description:'descripcion de jordan 3'},
    {id:'8', name: 'remera 3', price: 800, category:'remeras', img:"https://drops-ba.com/wp-content/uploads/2023/10/Stussy-Soda-Can-Tee-White-Red.jpg", stock: 25, description:'descripcion de remera stussy'},
    {id:'9', name: 'buzo 3', price: 1200, category:'buzos', img:"https://drops-ba.com/wp-content/uploads/2023/10/Supreme-Cities-Arc-Crewneck-Cardinal.jpg", stock: 25, description:'descripcion de buzo supreme'},
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