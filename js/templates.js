function returnHeader() {
    return /*html*/ `
        <header class="header">
            <img class="header-logo" src="./img/logo_bestellapp.svg">
        </header>
        <div id="all-cards"></div>
        `
};


function returnRestaurant(){
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
            </div>
            <div id="basket">
<h2>Warenkorb</h2>
            </div>
    </div>
    `
}


function returnNavigation(){

}


function returnCards(){
    return /*html*/ `
                    <section id="cards-main">
                        
                    </section>
    `
}

function returnMains(index){
    let priceToString = arrayFilteredMain[index]["price"].toString();
    let price = priceToString.replace(".", ",")
    return /*html*/ `
    <div class="oneCard">    
        <div class="card-name">${arrayFilteredMain[index]["name"]}</div>
        <div class="card-description">${arrayFilteredMain[index]["description"]}</div>
        <div class="card-price">${price}€</div>
    </div>
    `
}


function returnDesserts(index){
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


function returnDrinks(index){
    let priceToString = arrayFilteredDrinks[index]["price"].toString();
    let price = priceToString.replace(".", ",")
    return /*html*/ `
    <div class="oneCard">    
        <div class="card-name">${arrayFilteredDrinks[index]["name"]}</div>
        <div class="card-price">${price}€</div>
    </div>
    `
}