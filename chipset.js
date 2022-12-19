const phones = [
    {name: 'Samsung',camera: 12, storage: '32gb', price: 36000, color:'silver'},
    {name: 'Walton',camera: 10, storage: '32gb', price: 22000, color:'silver'},
    {name: 'Iphone',camera: 12, storage: '32gb', price: 82000, color:'black'},
    {name: 'xaomi',camera: 10, storage: '32gb', price: 56000, color:'silver'},
    {name: 'Oppo',camera: 12, storage: '32gb', price: 26000, color:'blue'},
    {name: 'HTC',camera: 12, storage: '16gb', price: 62000, color:'golden'},
    {name: 'Nokia',camera: 10, storage: '64gb', price: 78000, color:'green'},
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);