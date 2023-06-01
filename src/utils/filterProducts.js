import { productsList } from "../data/products"
import { TOTAL_PRODUCTS } from "./constants";

export const getProducts = (total) => {
    return productsList.slice(0,total);
}


export const filterProductByCategory = (category) => {
    if(category === 'low-high'){
        const newProductList = productsList.map(product => product);
        return newProductList.sort((a,b) => a.price - b.price)
        
    }
    if(category === 'high-low'){
        const newProductList = productsList.map(product => product);
        return newProductList.sort((a,b) => b.price - a.price);
    }
    return productsList.filter(product =>product.category.some(categoryItem => categoryItem === category))
}

export const searchProductByName = (name) => {
    return productsList.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
}

export const showMoreProducts = (total) => {
    if(total === productsList.length) return total;
    return total + 6;
}

export const showLessProducts = (total) => {
    if(total === TOTAL_PRODUCTS) return total;
    return total - 6;
}