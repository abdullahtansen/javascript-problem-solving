/* 
1. if ticket number is less than 100, per ticket price : 100
2. if ticket number is more than 100,but less than 200.First 100 tickets will be 100 per ticket price : 100
rest tickets will be 90 taka per piece
first 100 n ---> 100tk
rest ----> 90tk
3.if you purchase more than 200 tickets 
first 100----> 100tk
    101-200 ---> 90tk
    200+ ----> 70tk

*/

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}

const price = ticketPrice(220);
// console.log(price);

// second problem
function shirtPrice(shirtCount){
    const first10Rate= 1000;
    const second10Rate = 900;
    const bigDiscountRate = 700;
    if(shirtCount <= 10){
        const first10Price = shirtCount * first10Rate;
        return first10Price;
    }
    else if(shirtCount <= 20 ){
        const first100Price = 10 * first10Rate;
        const restShirtQuantity = shirtCount - 10;
        const restShirtPrice = restShirtQuantity * second10Rate;
        const totalPrice = first100Price + restShirtPrice;
        return totalPrice;

    }
    else{
        const first10Price = 10 * first10Rate;
        const second10Price = 10 * second10Rate;
        const restShirtQuantity = shirtCount - 20;
        const restShirtPrice = restShirtQuantity * bigDiscountRate;
        const totalCost = first10Price + second10Price + restShirtPrice;
        return totalCost;
    }
}

const totalCost = shirtPrice(30);
console.log(totalCost);


// problem 3 discount
function bookDiscount(bookCount){
    const bookFirst100Rate = 200;
    const bookSecond100Rate = 150;
    const discountBookRate = 100;

    if(bookCount <= 100){
        const book100Price = bookCount * bookFirst100Rate;
        return book100Price;
    }
    else if(bookCount <= 200){
        const book100Price = 100 * bookFirst100Rate;
        const book100Rate = bookCount - 100;
        const discountBookRate = book100Rate * bookSecond100Rate;
        const discountBookPrice = book100Price + discountBookRate;
        return discountBookPrice;
    }
    else{
        const book100Price = 100 * bookFirst100Rate;
        const bookSecondPrice = 100 * bookSecond100Rate;
        const bookDiscountRate = bookCount - 200;
        const book100Discount = bookDiscountRate * discountBookRate;
        const totalDisCount = book100Price + bookSecondPrice + book100Discount;
        return totalDisCount;
    }
}
const total = bookDiscount(220);
console.log(total);
