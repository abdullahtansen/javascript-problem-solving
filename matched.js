const numbers = [45,65,23,98,19];

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

for(const number of numbers){
    console.log(number)
}
const products = [
    {id:1, name: 'walton phone', price: 1200},
    {id:2, name: 'xiaomi phone', price: 1200},
    {id:3, name: 'Iphone phone', price: 1200},
    {id:4, name: 'lenovo phone', price: 1200},
    {id:5, name: 'Oppo phone', price: 1200},
    {id:6, name: 'samsung note ultra 22 phone', price: 1200}
];
// for(const product of products){
//     console.log(product);
// }

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
       if(product.name.toLowerCase().includes(search.toLowerCase())){
        matched.push(product);
       }
    }
    return matched;
}
const result = matchedProducts(products, 'samsung')
console.log(result);