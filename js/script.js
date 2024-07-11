let basketFood = [];
let basketPrices = [];
let basketAmount = [];
let delivery = true;


function init() {
    let content = document.getElementById('content');
    content.innerHTML = ``;
    content.innerHTML = returnHeader();
    content.innerHTML += returnRestaurant();

    document.getElementById('cards-main').innerHTML = `<div class="navigation"><a href="#mains">Hauptgerichte</a><a href="#desserts">Desserts</a><a href="#drinks">Getränke</a></div><img id="mains" class="separator-pic" src="./img/main.jpg"><h3>Hauptgerichte</h3>`;

    for (let i = 0; i < arrayFilteredMain.length; i++) {
        document.getElementById('cards-main').innerHTML += returnMains(i);
    }

    document.getElementById('cards-main').innerHTML += `<img id="desserts" class="separator-pic" src="./img/dessert.jpg"><h3>Nachspeisen</h3>`;

    for (let i = 0; i < arrayFilteredDesserts.length; i++) {
        document.getElementById('cards-main').innerHTML += returnDesserts(i);
    }

    document.getElementById('cards-main').innerHTML += `<img id="drinks" class="separator-pic" src="./img/drinks.jpg"><h3>Getränke</h3>`;

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
    if (delivery) {
        document.getElementById('basket').innerHTML = `
            <h2>Warenkorb</h2><div class="delivery" onclick="deliveryToggle()"><div id="delivery-yes" class="deliverybox choosen"><img class="deliverypic" src="./img/delivery.png"></div>
            <div id="delivery-no" class="deliverybox"><img class="deliverypic" src="./img/nodelivery.png"></div></div>`;
        document.getElementById('dialog-basket').innerHTML = `<div class="responsive-basket-up" onclick="toggleBasket()">Warenkorb</div>
            <div class="delivery" onclick="deliveryToggle()"><div id="delivery-yes" class="deliverybox choosen"><img class="deliverypic" src="./img/delivery.png"></div>
            <div id="delivery-no" class="deliverybox"><img class="deliverypic" src="./img/nodelivery.png"></div></div>`;

        if (basketFood.length == 0) {
            document.getElementById('basket').innerHTML += `<div class="emptyBasket">Der Warenkorb ist leer</div>`;
            document.getElementById('dialog-basket').innerHTML += `<div class="emptyBasket">Der Warenkorb ist leer</div>`;
        }
    }   else {
            document.getElementById('basket').innerHTML = `<h2>Warenkorb</h2><div class="delivery" onclick="deliveryToggle()"><div id="delivery-yes" class="deliverybox">
                        <img class="deliverypic" src="./img/delivery.png"></div><div id="delivery-no" class="deliverybox choosen"><img class="deliverypic" src="./img/nodelivery.png"></div></div>`;

            document.getElementById('dialog-basket').innerHTML = `<div class="responsive-basket-up" onclick="toggleBasket()">Warenkorb</div><div class="delivery" onclick="deliveryToggle()">
                        <div id="delivery-yes" class="deliverybox">
                        <img class="deliverypic" src="./img/delivery.png"></div><div id="delivery-no" class="deliverybox choosen"><img class="deliverypic" src="./img/nodelivery.png"></div></div>`;

            if (basketFood.length == 0) {
                document.getElementById('basket').innerHTML += `<div class="emptyBasket">Der Warenkorb ist leer</div>`;

                document.getElementById('dialog-basket').innerHTML += `<div class="emptyBasket">Der Warenkorb ist leer</div>`;
            }
        }

    for (let i = 0; i < basketFood.length; i++) {
        document.getElementById('basket').innerHTML += returnBasket(i);
        document.getElementById('dialog-basket').innerHTML += returnBasketResponsive(i);
    }

    if (basketFood.length > 0) {
        let calculatedPrice = 0;

        for (let i = 0; i < basketFood.length; i++) {
            let multiplicate = basketAmount[i] * basketPrices[i];
            calculatedPrice = calculatedPrice + multiplicate;
        }

        if (delivery) {
            calculatedPrice = calculatedPrice + 3;
            calculatedPrice = calculatedPrice.toFixed(2);

            let priceToString = calculatedPrice.toString();
            priceToString = priceToString.replace(".", ",");

            document.getElementById('basket').innerHTML += `<div class="calculation">Lieferung: 3,00€<div><div><b>Gesamt: <b>${priceToString}€</b><div onclick="pay()" class="pay">bezahlen</div></div>`;
            document.getElementById('dialog-basket').innerHTML += `<div class="calculation calcresp">Lieferung: 3,00€<div><div><b>Gesamt: <b>${priceToString}€</b><div onclick="pay()" class="pay">bezahlen</div></div>`;
        }   else {
                calculatedPrice = calculatedPrice.toFixed(2);
                let priceToString = calculatedPrice.toString();
                priceToString = priceToString.replace(".", ",");
                document.getElementById('basket').innerHTML += `<div class="calculation"><div><b>Gesamt: <b>${priceToString}€</b><div onclick="pay()" class="pay">bezahlen</div></div>`;
                document.getElementById('dialog-basket').innerHTML += `<div class="calculation calcresp"><div><b>Gesamt: <b>${priceToString}€</b><div onclick="pay()" class="pay">bezahlen</div></div>`;
            }
    }

    if (basketFood.length == 0) {
        document.getElementById('basket').innerHTML += `<div class="emptyBasket>Der Warenkorb ist leer</div>`;
        document.getElementById('dialog-basket').innerHTML += `<div class="emptyBasket>Der Warenkorb ist leer</div>`;
    }
}


function removeCard(index) {
    let name = basketFood[index];
    let newIndex = basketFood.indexOf(name);

    basketFood.splice(newIndex, 1);
    basketPrices.splice(newIndex, 1);
    basketAmount.splice(newIndex, 1);

    renderBasket();
}


function deliveryToggle() {
    delivery = !delivery;

    if (delivery) {
        document.getElementById('delivery-yes').classList.add('choosen');
        document.getElementById('delivery-no').classList.remove('choosen');
    }   else {
            document.getElementById('delivery-yes').classList.remove('choosen');
            document.getElementById('delivery-no').classList.add('choosen');
        }

    renderBasket();
}


function toggleBasket() {
    document.getElementById('dialog-basket').classList.toggle('d-none');
}


function pay() {
    basketFood = [];
    basketPrices = [];
    basketAmount = [];
    renderBasket();
    document.getElementById('dialog-justOrdered').classList.remove('d-none');
}


function closeDialog(){
    document.getElementById('dialog-justOrdered').classList.add('d-none');
}