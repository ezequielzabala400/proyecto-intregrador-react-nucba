

export const addProductToCart = (cartList, product) => {
    if(cartList.some(item => item.name === product.name)){
        return cartList.map(item => {
            return item.name === product.name
            ? {...item, quantity: item.quantity + 1}
            : {...item}
        })
    } else{
        return [...cartList, product]
    }

}

export const removeProductFromCart = (cartList, product) => {
    return cartList.filter(item => item.name !== product);
}

export const totalPrice = (cartList) => {
    if(cartList.length === 0) return 0
    const totalPrice = cartList.reduce((acc,cur) => acc += (cur.price * cur.quantity),0)
    return totalPrice
}

export const addQuantity = (cartList, product) => {
    return cartList.map(item => {
        return item.name === product
        ? {...item, quantity: item.quantity + 1}
        : {...item}
    });
}
export const substractQuantity = (cartList, product) => {
    return cartList.map(item => {
        if(item.name === product){
            if(item.quantity === 1) return {...item}
            return {...item, quantity: item.quantity - 1}
        }else{
        return {...item}
        }

    });
}