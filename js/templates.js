function returnHeader() {
    return /*html*/ `
        <header class="header">
            <img class="header-logo" src="./img/logo_bestellapp.svg">
        </header>
        <div id="all-cards"></div>
        `
};


function returnRestaurant() {
    return /*html*/ `
    <div id="content-container">
            <div>
                    <section id="section-corporate-design">
                        <div class="restaurant">
                            <img class="circle-pic" src="./img/burger-circle.webp">
                        </div>
                        <div class="restaurant-info">
                            <h2>Burger Mania</h2>
                            <span>Bewertung (4,2 von 5 Sternen)</span>
                        </div>
                    </section>
                    <section id="cards-main">
                        
                        </section>
            </div>
            <div id="basket">
<h2>Warenkorb</h2>
            </div>
    </div>
    `
}





function returnCards() {
    return /*html*/ `

    `
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
    `
}


function returnDesserts(index) {
    let priceToString = arrayFilteredDesserts[index]["price"].toString();
    let price = priceToString.replace(".", ",")
    return /*html*/ `
    <div class="oneCard">    
        <div class="card-name">${arrayFilteredDesserts[index]["name"]}</div>
        <div class="card-description">${arrayFilteredDesserts[index]["description"]}</div>
        <div class="card-price">${price}€</div>
    </div>
    `
}


function returnDrinks(index) {
    let priceToString = arrayFilteredDrinks[index]["price"].toString();
    let price = priceToString.replace(".", ",")
    return /*html*/ `
    <div class="oneCard">    
        <div class="card-name">${arrayFilteredDrinks[index]["name"]}</div>
        <div class="card-price">${price}€</div>
    </div>
    `
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
            </div>
        </div>
   `

}