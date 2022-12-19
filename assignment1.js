// 1. problem one solved radin to degree
function radianToDegree(radian){
    const pi = Math.PI;
    return radian *  (180/pi)
}
const degree = radianToDegree(10);
// console.log(parseFloat(degree).toFixed(2));

// 2. isJavascript file problem solved
function isJavaScriptFile(string){
    return string.endsWith(".js")
    }
    // console.log(isJavaScriptFile("app.js"));
    // console.log(isJavaScriptFile("js.png"));
    // console.log(isJavaScriptFile("image.js.png"));
    // console.log(isJavaScriptFile("image.jpg.js"));
   
    const output = isJavaScriptFile('index.js');
    // console.log(output);

//3. problem solved oil price

function oilPrice(dijle,petrol,octane){
    const dijelRate = 114;
    const petrolRate = 130;
    const octaneRate = 135;

    const dijelPrice = dijle * dijelRate;
    const petrolPrice = petrol * petrolRate;
    const octanePrice = octane * octaneRate;

    const totalCost = dijelPrice + petrolPrice + octanePrice;
    return totalCost;
}
const totalCost = oilPrice(0,2,3);
// console.log(totalCost);

// public bus fare problem solved
    function publicBusFare(totalPeoples){
            const busLimit = 50;
            const microBus = 11;
            let publicBusPeople = 0;
            if(totalPeoples > busLimit){
            const reminder = totalPeoples % busLimit;
            if(reminder > microBus){
                publicBusPeople = reminder % microBus;
            }
            else{
                publicBusPeople = reminder;
            }
            return publicBusPeople * 250;
        }
    }
    
    const publicTicketCost = publicBusFare(365);
    console.log(publicTicketCost);

//Is best friend object property same true.problem solved

function isBestFriend(person1,person2){
    if(person1.name === person2.friend && person2.name === person1.friend){
        return true;
    }
    else{
        return false;
    }
}

const person1 = {name:'tansen',friend: 'abdullah'};
const person2 = {name: 'abdullah', friend: 'tansen'}

const bestFriendCheck = isBestFriend(person1,person2);
console.log(bestFriendCheck);