function returnHeader() {
    return /*html*/ `
        <div class="dialog-basket d-none" id="dialog-basket">
        </div>
        <div class="d-none" id="dialog-justOrdered">
            <div class="ordered"><p><b>Vielen Dank, Ihre Testbestellung wurde entgegen genommen!</b></p><img src="./img/bestellung.jpg"><div onclick="closeDialog()" class="close-dialog">schließen</div></div>
        </div>
        <header class="header">
            <img class="header-logo" src="./img/logo_bestellapp.svg">
        </header>
        <div id="all-cards">
        </div>
        `;
}


function returnRestaurant() {
    return /*html*/ `
    <div id="content-container">
        <div>
            <section id="section-corporate-design">
                <div class="restaurant">
                    <img class="background-pic" src="./img/burger.jpg">
                    <img class="circle-pic" src="./img/burger-circle.webp">
                </div>
                <div class="restaurant-info">
                    <h2>Burger Mania</h2>
                    <span>Bewertung (4,2 von 5 Sternen)</span>
                </div>                  
            </section>
            <section id="cards-main">
                <div class="navigation"><a href="#mains">Hauptgerichte</a><a href="#desserts">Desserts</a><a href="#drinks">Getränke</a></div>
            </section>
        </div>
        <div class="basket-wrapper">
            <div id="basket">
                <h2>Warenkorb</h2>
            </div>
        </div>
    </div>
    <div class="responsive-basket" onclick="toggleBasket()">Warenkorb</div>
    <footer>
    <span>Copyright © 2024</span>
    </footer>
    `;
}


function returnMains(index) {
    let priceToString = arrayFilteredMain[index]["price"].toString();
    let price = priceToString.replace(".", ",")

    return /*html*/ `
    <div class="oneCard">    
        <div class="card-name"><span>${arrayFilteredMain[index]["name"]}</span><div class="add-dishes" onclick="addToBasket(arrayFilteredMain, ${index})">+</div></div>
        <div class="card-description">${arrayFilteredMain[index]["description"]}</div>
        <div class="card-price">${price}€</div>
    </div>
    `;
}


function returnDesserts(index) {
    let priceToString = arrayFilteredDesserts[index]["price"].toString();
    let price = priceToString.replace(".", ",")

    return /*html*/ `
    <div class="oneCard">    
        <div class="card-name"><span>${arrayFilteredDesserts[index]["name"]}</span><div class="add-dishes" onclick="addToBasket(arrayFilteredDesserts, ${index})">+</div></div>
        <div class="card-description">${arrayFilteredDesserts[index]["description"]}</div>
        <div class="card-price">${price}€</div>
    </div>
    `;
}


function returnDrinks(index) {
    let priceToString = arrayFilteredDrinks[index]["price"].toString();
    let price = priceToString.replace(".", ",")

    return /*html*/ `
    <div class="oneCard">    
        <div class="card-name"><span>${arrayFilteredDrinks[index]["name"]}</span><div class="add-dishes" onclick="addToBasket(arrayFilteredDrinks, ${index})">+</div></div>
        <div class="card-price">${price}€</div>
    </div>
    `;
}


function returnBasket(index) {
    let calculatedPrice = basketPrices[index] * basketAmount[index];
    calculatedPrice = calculatedPrice.toFixed(2);

    let priceToString = calculatedPrice.toString();
    priceToString = priceToString.replace(".", ",");

    return `
        <div class="basketCard">
            <div class="basketName">
                ${basketFood[index]}
            </div>
            <div class="amount-and-price">
                <div class="amount-calc">
                    <div class="plusminus" onclick="removeOneAmount(${index})">-</div><div>${basketAmount[index]}x</div><div class="plusminus" onclick="addOneAmount(${index})">+</div>
                </div>
                <div class="pricing">
                    ${priceToString}€
                </div>
                <div class="pricing">
                    <img class="trash-icon" onclick="removeCard(${index})" src="./img/trash.png">
                </div>
            </div>
        </div>
   `;
}


function returnBasketResponsive(index) {
    let calculatedPrice = basketPrices[index] * basketAmount[index];
    calculatedPrice = calculatedPrice.toFixed(2);

    let priceToString = calculatedPrice.toString();
    priceToString = priceToString.replace(".", ",");

    return `
            <div class="basketCard">
                <div class="basketName">
                    ${basketFood[index]}
                </div>
                <div class="amount-and-price">
                    <div class="amount-calc">
                        <div class="plusminus" onclick="removeOneAmount(${index})">-</div><div>${basketAmount[index]}x</div><div class="plusminus" onclick="addOneAmount(${index})">+</div>
                    </div>
                    <div class="pricing">
                        ${priceToString}€
                    </div>
                                   <div class="pricing">
                        <img class="trash-icon" onclick="removeCard(${index})" src="./img/trash.png">
                    </div>
                </div>
            </div>
       `;

}