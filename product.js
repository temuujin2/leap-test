const products = [
    { number: 1, price: 100, name: 'Orange juice' },
    { number: 2, price: 200, name: 'Soda' },
    { number: 3, price: 150, name: 'Chocolate snack' },
    { number: 4, price: 250, name: 'Cookies' },
    { number: 5, price: 180, name: 'Gummy bears' },
    { number: 6, price: 500, name: 'Chocolates' },
    { number: 7, price: 120, name: 'Crackers' },
    { number: 8, price: 220, name: 'Potato chips' },
    { number: 9, price: 80, name: 'Small snack' },
    ];

function vendingMachine(products, money, productNumber) {
    if(productNumber <= 0 || productNumber > 9){
        return 'Enter a valid product number';
    }
    let arr = []
    let changeMoney = [500, 200, 100, 50, 20, 10];
    let product = products.filter(item => item.number == productNumber);
    if(!product){
        return [];
    }
    if(product[0].price > money){
        return "Not enough money for this product";
    }
    let change = money - product[0].price;
    while(changeMoney[0] > change){
        changeMoney.shift()
    }
    for(let num of changeMoney){
        if(num <= change){
            arr.push(...Array.from({length:Math.floor(change / num)}, () => num));
            change = change % num;
        }
    }
    return {product: product[0].name, change: arr}
    
}

console.log(vendingMachine(products, 500, 7));
console.log(vendingMachine(products, 500, 0));
console.log(vendingMachine(products, 100, 6));
console.log(vendingMachine(products, 1000, 4));