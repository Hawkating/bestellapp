let dishes = [
    {
        "name": "Cheeseburger",
        "price": 6.99,
        "category": "main",
        "description": "Der Klassiker mit Käse"        
    },
    {
        "name": "Beef Burger",
        "price": 11.99,
        "category": "main",
        "description": "Mit einer extra Portion Rind"
    },
    {
        "name": "Veggie Burger",
        "price": 7.99,
        "category": "main",
        "description": "Für alle, die kein Fleisch essen"
    },
    {
        "name": "Bacon Burger",
        "price": 9.99,
        "category": "main",
        "description": "Ich glaub mein Schwein pfeift"
    },
    {
        "name": "Mozzarella Burger",
        "price": 9.99,
        "category": "main",
        "description": "Hier kommt jeder auf seine Kosten"
    },
    {
        "name": "Tiramisu",
        "price": 5.99,
        "category": "dessert",
        "description": "Wir lieben Tiramisu"
    },
    {
        "name": "Cheese Cake",
        "price": 6.99,
        "category": "dessert",
        "description": "Frisch aus Amerika"
    },
    {
        "name": "Wackelpudding",
        "price": 4.99,
        "category": "dessert",
        "description": "Weil's geil ist"
    },
    {
        "name": "Cola",
        "price": 1.99,
        "category": "drink",
        "description": "Erfrischung"
    },
    {
        "name": "Fanta",
        "price": 1.99,
        "category": "drink",
        "description": "Erfrischung"
    },
    {
        "name": "Sprite",
        "price": 1.99,
        "category": "drink",
        "description": "Erfrischung"
    },
    {
        "name": "Eistee Zitrone",
        "price": 1.49,
        "category": "drink",
        "description": "Erfrischung"
    },
    {
        "name": "Eistee Pfirsich",
        "price": 1.49,
        "category": "drink",
        "description": "Erfrischung"
    },
    {
        "name": "Ayran",
        "price": 1.99,
        "category": "drink",
        "description": "Erfrischung"
    },
    {
        "name": "Wasser Flasche 1L",
        "price": 2.49,
        "category": "drink",
        "description": "Erfrischung"
    },
]


let arrayFilteredMain = dishes.filter(function(filterMain){return filterMain.category == "main"});

let arrayFilteredDesserts = dishes.filter(function(filterMain){return filterMain.category == "dessert"});

let arrayFilteredDrinks = dishes.filter(function(filterMain){return filterMain.category == "drink"});