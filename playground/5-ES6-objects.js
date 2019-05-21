 const name = 'Andrew'
 const userAge = 27

 const user = {
     name:name,
     age:userAge,
     location:'Philadelphia'
 }
 console.log(user)
const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}
// const {label ,stock,raiting=5}  = product
// //const stock = product.stock
// console.log(label)
// console.log(stock)
// console.log(raiting)

const transaction = (type,{label,stock=0} ={}) => {
    console.log(type,label,stock)
}

transaction('order',product)
