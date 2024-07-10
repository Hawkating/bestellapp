let basketFood = [];
let basketPrices = [];
let basketAmount = [];
let delivery = true;


function init() {
    let content = document.getElementById('content');
    content.innerHTML = ``;
    content.innerHTML = returnHeader();
    content.innerHTML += returnRestaurant();
    
    document.getElementById('cards-main').innerHTML = `<img class="separator-pic" src="./img/main.jpg"><h3>Hauptgerichte</h3>`;

    for (let i = 0; i < arrayFilteredMain.length; i++) {
        document.getElementById('cards-main').innerHTML += returnMains(i);
    }

    document.getElementById('cards-main').innerHTML += `<img class="separator-pic" src="./img/dessert.jpg"><h3>Nachspeisen</h3>`;

    for (let i = 0; i < arrayFilteredDesserts.length; i++) {
        document.getElementById('cards-main').innerHTML += returnDesserts(i);
    }

    document.getElementById('cards-main').innerHTML += `<img class="separator-pic" src="./img/drinks.jpg"><h3>Getränke</h3>`;

    for (let i = 0; i < arrayFilteredDrinks.length; i++) {
        document.getElementById('cards-main').innerHTML += returnDrinks(i);
    }
    renderBasket();
}


function addToBasket(array, index) {

    let name = array[index]["name"];
    let price = array[index]["price"];

    let calculatedIndex = basketFood.indexOf(`${name}`)

    if (calculatedIndex == -1) {

        basketFood.push(name);
        basketPrices.push(price);
        basketAmount.push(1);

    } else {

        basketAmount[calculatedIndex] = basketAmount[calculatedIndex] + 1;

    }


    renderBasket();
}



function removeOneAmount(index) {

    let name = basketFood[index];
    let newIndex = basketFood.indexOf(name);

    if (basketAmount[newIndex] > 1) {

        basketAmount[newIndex] = basketAmount[newIndex] - 1;

    } else {
        basketFood.splice(newIndex, 1);
        basketPrices.splice(newIndex, 1);
        basketAmount.splice(newIndex, 1);
    }
    renderBasket();

}


function addOneAmount(index) {

    let name = basketFood[index];
    let newIndex = basketFood.indexOf(name);
    basketAmount[newIndex] = basketAmount[newIndex] + 1;

    renderBasket();

}

function renderBasket() {
    document.getElementById('basket').innerHTML = `<h2>Warenkorb</h2>`;
    if(basketFood.length == 0){
        document.getElementById('basket').innerHTML += `Der Warenkorb ist leer`
    }
    for (let i = 0; i < basketFood.length; i++) {

        document.getElementById('basket').innerHTML += returnBasket(i);
    }
    if (basketFood.length > 0) {
        let calculatedPrice = 0;
        
        for(let i = 0; i < basketFood.length; i++){
           let multiplicate = basketAmount[i] * basketPrices[i];
           calculatedPrice = calculatedPrice + multiplicate;
        }

            if(delivery){
                calculatedPrice = calculatedPrice + 3;
                calculatedPrice = calculatedPrice.toFixed(2);

                let priceToString = calculatedPrice.toString();
                priceToString = priceToString.replace(".", ",");
                
                

                document.getElementById('basket').innerHTML += `<div class="calculation">Lieferung:<div>3,00€</div><div><div><b>Gesamt: <b>${priceToString}€</b></div>`
            } else {
                calculatedPrice = calculatedPrice.toFixed(2);
                document.getElementById('basket').innerHTML += `<div>${calculatedPriceString}€</div>`}
        
}

}

