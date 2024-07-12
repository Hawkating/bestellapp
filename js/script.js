let basketFood = [];
let basketPrices = [];
let basketAmount = [];
let delivery = true;


function init() {
    let content = document.getElementById('content');
    content.innerHTML = ``;
    content.innerHTML = returnHeader();
    content.innerHTML += returnRestaurant();

    document.getElementById('dishes-main').innerHTML = returnDishesMain();
    renderDishesMain();

    renderBasket();
}


function renderDishesMain(){
    for (let i = 0; i < arrayFilteredMain.length; i++) {
        document.getElementById('dishes-main').innerHTML += returnMains(i);
    }

    document.getElementById('dishes-main').innerHTML += `<img id="desserts" class="separator-pic" src="./img/dessert.jpg"><h3>Nachspeisen</h3>`;

    for (let i = 0; i < arrayFilteredDesserts.length; i++) {
        document.getElementById('dishes-main').innerHTML += returnDesserts(i);
    }

    document.getElementById('dishes-main').innerHTML += `<img id="drinks" class="separator-pic" src="./img/drinks.jpg"><h3>Getränke</h3>`;

    for (let i = 0; i < arrayFilteredDrinks.length; i++) {
        document.getElementById('dishes-main').innerHTML += returnDrinks(i);
    }
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
    deliverySet();
    renderCalculation();
}


function removeOneAmount(index) {
    let name = basketFood[index];
    let newIndex = basketFood.indexOf(name);

    if (basketAmount[newIndex] > 1) {
        basketAmount[newIndex] = basketAmount[newIndex] - 1;
        renderOrderCard(index);
    } else {
        basketFood.splice(newIndex, 1);
        basketPrices.splice(newIndex, 1);
        basketAmount.splice(newIndex, 1);
        renderBasket(index);
        }
    
}


function addOneAmount(index) {
    let name = basketFood[index];
    let newIndex = basketFood.indexOf(name);
    basketAmount[newIndex] = basketAmount[newIndex] + 1;
    renderOrderCard(index);
}


function renderOrderCard(index){
    document.getElementById(basketFood[index]).innerHTML = returnOrderCard(index);
    document.getElementById(`${basketFood[index]}Resp`).innerHTML = returnOrderCard(index);
    
    renderCalculation();
}


function renderCalculation(){
    let calculatedPrice = 0;

    if(basketFood.length == 0){
        emptyBasket();
    } else {
        for (let i = 0; i < basketFood.length; i++) {
            let multiplicate = basketAmount[i] * basketPrices[i];
            calculatedPrice = calculatedPrice + multiplicate;
        }
        if (delivery) {
            priceToStringDelivery(calculatedPrice);
                
        } else {
            priceToStringNoDelivery(calculatedPrice);
            }
        }
}


function renderBasket() {
    document.getElementById('basket').innerHTML = returnHtmlForBasket();
    document.getElementById('dialog-basket').innerHTML = returnHtmlForDialogBasket();
    
        if (basketFood.length == 0) {
            emptyBasket()
            } else {
                document.getElementById('forCardsScreen').innerHTML = ``;
                document.getElementById('forCardsResp').innerHTML = ``;

                for (let i = 0; i < basketFood.length; i++) {
                    document.getElementById('forCardsScreen').innerHTML += returnBasketCards(i);
                    document.getElementById('forCardsResp').innerHTML += returnBasketCardsResponsive(i);
                }
                renderCalculation();
                deliverySet();
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
        document.getElementById('deliveryYesScreen').classList.add('choosen');
        document.getElementById('deliveryNoScreen').classList.remove('choosen');
        document.getElementById('deliveryYesResp').classList.add('choosen');
        document.getElementById('deliveryNoResp').classList.remove('choosen');
    }   else {
            document.getElementById('deliveryYesScreen').classList.remove('choosen');
            document.getElementById('deliveryNoScreen').classList.add('choosen');
            document.getElementById('deliveryYesResp').classList.remove('choosen');
            document.getElementById('deliveryNoResp').classList.add('choosen');
        }

    renderCalculation();
}


function deliverySet(){
    if (delivery) {
        document.getElementById('deliveryYesScreen').classList.add('choosen');
        document.getElementById('deliveryNoScreen').classList.remove('choosen');
        document.getElementById('deliveryYesResp').classList.add('choosen');
        document.getElementById('deliveryNoResp').classList.remove('choosen');
    }   else {
            document.getElementById('deliveryYesScreen').classList.remove('choosen');
            document.getElementById('deliveryNoScreen').classList.add('choosen');
            document.getElementById('deliveryYesResp').classList.remove('choosen');
            document.getElementById('deliveryNoResp').classList.add('choosen');
        }

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
    delivery = true;
}


function closeDialog(){
    document.getElementById('dialog-justOrdered').classList.add('d-none');
}


function emptyBasket(){
    document.getElementById('forCardsScreen').innerHTML = `<div class="emptyBasket">Der Warenkorb ist leer</div>`;
    document.getElementById('forCardsResp').innerHTML = `<div class="emptyBasket">Der Warenkorb ist leer</div>`;
}


function priceToStringDelivery(calculatedPrice){
    calculatedPrice = calculatedPrice + 3;
    calculatedPrice = calculatedPrice.toFixed(2);

    let priceToString = calculatedPrice.toString();
    priceToString = priceToString.replace(".", ",");

    let basket = document.getElementById('forCalcScreen');
    basket.innerHTML = `<div class="calculation" id="calculation-screen-delivery">Lieferung: 3,00€<div><div><b>Gesamt: <b>${priceToString}€</b><div onclick="pay()" class="pay">bezahlen</div></div>`;

    let dialogBasket = document.getElementById('forCalcResp');
    dialogBasket.innerHTML = `<div class="calculation id="calculation-delivery-resp" calcresp">Lieferung: 3,00€<div><div><b>Gesamt: <b>${priceToString}€</b><div onclick="pay()" class="pay">bezahlen</div></div>`;
}


function priceToStringNoDelivery(calculatedPrice){
    calculatedPrice = calculatedPrice.toFixed(2);
    let priceToString = calculatedPrice.toString();

    priceToString = priceToString.replace(".", ",");

    document.getElementById('forCalcScreen').innerHTML = `<div class="calculation" id="calculation-screen"><div><b>Gesamt: <b>${priceToString}€</b><div onclick="pay()" class="pay">bezahlen</div></div>`;
    document.getElementById('forCalcResp').innerHTML = `<div class="calculation calcresp" id="calculation-resp"><div><b>Gesamt: <b>${priceToString}€</b><div onclick="pay()" class="pay">bezahlen</div></div>`;
}