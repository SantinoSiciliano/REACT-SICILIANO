import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from '../asyncMock'
import Itemlist from '../ItemList/ItemList'

import {useParams} from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        
        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return(
        <div>
            <h1>{greeting}</h1>
            <Itemlist products={products}/>
        </div>
    )
}

export default ItemListContainer