function init(){
   let content = document.getElementById('content');
   content.innerHTML = ``;
    content.innerHTML = returnHeader();
    content.innerHTML += returnRestaurant();
    content.innerHTML += returnNavigation();
    content.innerHTML += returnCards();
   
    document.getElementById('cards-main').innerHTML = `<img class="separator-pic" src="./img/main.jpg"><h3>Hauptgerichte</h3>`;

    for (let i = 0; i < arrayFilteredMain.length ; i++){
        document.getElementById('cards-main').innerHTML += returnMains(i);
    }

    document.getElementById('cards-main').innerHTML += `<img class="separator-pic" src="./img/dessert.jpg"><h3>Nachspeisen</h3>`;

    for (let i = 0; i < arrayFilteredDesserts.length ; i++){
        document.getElementById('cards-main').innerHTML += returnDesserts(i);
    }

    document.getElementById('cards-main').innerHTML += `<img class="separator-pic" src="./img/drinks.jpg"><h3>Getränke</h3>`;

    for (let i = 0; i < arrayFilteredDrinks.length ; i++){
        document.getElementById('cards-main').innerHTML += returnDrinks(i);
    }
}

