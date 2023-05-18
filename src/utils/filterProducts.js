import { productsList } from "../data/products"


export const filterProductByCategory = (category) => {
    if(category === 'low-high'){
        const newProductList = productsList.map(product => product);
        return newProductList.sort((a,b) => a.price - b.price)
        
    }
    if(category === 'high-low'){
        const newProductList = productsList.map(product => product);
        return newProductList.sort((a,b) => b.price - a.price);
    }
    return productsList.filter(product => product.category === category)
}

export const searchProductByName = (name) => {
    return productsList.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
}