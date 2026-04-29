export type MenuCategory = {
  name: string;
  description?: string;
  items: MenuItem[];
  note?: string;
};

export type MenuItem = {
  name: string;
  description?: string;
  price?: number | null;
  priceBottle?: number;  
  extras?: MenuItemExtra[];
  available?: "cold" | "hot" | "cold or hot"; 
};

export type MenuItemExtra = {
  label: string;
  price: number;
};

export const menuCategories: MenuCategory[] = [

  {
    name: "Executive Menu",
    description: "Monday to Friday 9:00 to 15:00. Served in a personal portion.",
    items: [
      { 
        name: "Choice of",
        description: "Panini, Avocado toast, Waffles, Special stuffed croissant, eggs your way"
      },
      {
        name: "Includes",
        description: "Americano, orange juice, or lemonade"
      },
    ],
  },
 
  {
    name: "Colazione",
    items: [
      {
        name: "Eggs Your Way",
        description: "Choice of two ingredients: Ham, Bacon, Mushrooms, Spinach, Sweet bell peppers. Includes potato wedges and toast.",
        price: 130,
      },
      {
        name: "Stuffed Croissant",
        description: "Ham and mozzarella cheese or scrambled eggs, lettuce, and tomato, accompanied by potato wedges.",
        price: 130,
      },
      {
        name: "Omelette La Galleria",
        description: "Omelette with mozzarella, mushrooms, and pork ham.",
        price: 270,
      },
      {
        name: "Omelette La Scala",
        description: "Omelette with sweet bell peppers, cherry tomatoes, zucchini, and chives.",
        price: 250,
      },
      {
        name: "Quiche Lorrain",
        description: "Egg tart with zucchini and bell peppers.",
        price: 210,
      },
      {
        name: "Avocado Toast",
        description: "Brioche bread with a bed of avocado, pancetta, eggs your way, and sweet bell peppers.",
        price: 250,
      },
      {
        name: "Waffles Raffaello",
        description: "Red bell pepper cream, avocado, pancetta, fresh mozzarella, and eggs your way.",
        price: 250,
      },
      {
        name: "Waffles Giotto",
        description: "Smoked salmon, burrata, chives, and balsamic vinegar.",
        price: 250,
      },
    ],
  },

  {
    name: "Antipasti",
    items: [
      {
        name: "Tagliere Misto",
        description: "Cheese and cold cuts board.",
        price: 350,
      },
      {
        name: "Involtini di Burrata",
        description: "5 Prosciutto rolls stuffed with burrata, on a bed of lettuce, cherry tomatoes, and dressed with balsamic.",
        price: 325,
      },
      {
        name: "Carpaccio di Salmone",
        description: "Smoked salmon, capers, chives, served with toast and butter.",
        price: 305,
      },
    ],
  },

  {
    name: "Paste",
    items: [
      {
        name: "Lasagna",
        description: "Classic lasagna with ragù.",
        price: 245,
      },
      {
        name: "Alfredo",
        description: "Tagliatelle with cream and grana padano.",
        price: 235,
      },
      {
        name: "Pesto",
        description: "Fusilli with pesto genovese.",
        price: 245,
      },
      {
        name: "Pomodoro",
        description: "Spaghetti with tomato, basil, and grana padano.",
        price: 235,
      },
      {
        name: "Spaghetti alla Bolognese",
        description: "Tomato sauce, beef ragù, and vegetables.",
        price: 255,
      },
      {
        name: "Ravioli",
        description: "Ravioli stuffed with mascarpone and spinach, dressed with pomodoro sauce.",
        price: 245,
      },
    ],
  },

  {
    name: "Insalate",
    items: [
      {
        name: "Caprese",
        description: "Tomato, fresh mozzarella, basil, and balsamic glaze.",
        price: 245,
      },
      {
        name: "Dolce Mela",
        description: "Spinach, heart of lettuce, apple, candied pecans, cranberries, and sweet apple dressing.",
        price: 295,
      },
      {
        name: "Cuori Saporiti",
        description: "Hearts of lettuce stuffed with mascarpone and smoked salmon.",
        price: 250,
      },
      {
        name: "Cesare",
        description: "Lettuce, grana padano, croutons, fresh mayonnaise, and grana padano.",
        price: 225,
      },
      {
        name: "Dolce Fragola",
        description: "Spinach, heart of lettuce, sliced strawberries, candied pecans, goat cheese, and sweet strawberry dressing.",
        price: 295,
      },
    ],
  },

  {
    name: "Panini & Pizza",
    items: [
      {
        name: "Panino Rustico",
        description: "Rustic bread, fresh mozzarella, salami, prosciutto, pork loin, arugula, and sun-dried tomato cream.",
        price: 265,
      },
      {
        name: "Panino della Madonnina",
        description: "Ciabatta bread, brie cheese, select pork ham, and tomato.",
        price: 245,
      },
      {
        name: "Panino Magenta",
        description: "Rustic bread, mascarpone, brie cheese, prosciutto, arugula, and truffle carpaccio.",
        price: 295,
      },
      {
        name: "Panino Genova",
        description: "Ciabatta bread, tomato, fresh mozzarella, and pesto genovese.",
        price: 245,
      },
      {
        name: "Panino Milano",
        description: "Focaccia bread with black olives, chicken breast ham, black forest ham, roast beef, mozzarella cheese, arugula with cherry tomato, and tartar sauce.",
        price: 265,
      },
      {
        name: "Pizza Peperoni",
        description: "Sourdough pizza with mozzarella, pepperoni, and parmigiano.",
        price: 225,
      },
      {
        name: "Pizza Margherita",
        description: "Sourdough pizza with mozzarella and basil.",
        price: 205,
      },
      {
        name: "Pizza Burrata & Prosciutto",
        description: "Sourdough pizza with mozzarella, burrata, and prosciutto.",
        price: 310,
      },
      {
        name: "Pizza Funghi e Carciofi",
        description: "Sourdough pizza with mozzarella, red wine mushrooms, artichokes, and goat cheese.",
        price: 310,
      },
      {
        name: "Pizza Vesuviana di Carne",
        description: "Sourdough pizza with mozzarella, Italian sausage, pancetta, chistorra, and ham.",
        price: 310,
      },
      {
        name: "Gourmet Beef Burger",
        description: "Brioche bun, tartar sauce, mozzarella, lettuce, and tomato, accompanied by potato wedges.",
        price: 210,
        extras: [
          { 
            label: "Bacon or pork ham", 
            price: 35 
          },
        ],
      },
    ],
  },

  {
    name: "Caffè",
    note: "Coconut, oat, and almond milk +$25 · Extra flavor +$25 (Hazelnut, Strawberry, Mint, Pistachio, Chocolate, Caramel, Vanilla, Amaretto, Irish Cream)",
    items: [
      {
        name: "Espresso",
        description: "Ristretto, single, or doppio.",
        price: 60,
      },
      {
        name: "Espresso con Panna",
        price: 70,
      },
      {
        name: "Macchiato",
        price: 70,
      },
      {
        name: "Cappuccino",
        price: 90,
      },
      {
        name: "Latte",
        price: 90,
        available: "cold or hot",
      },
      {
        name: "Americano",
        price: 60,
      },
      {
        name: "Cold Brew",
        price: 90,
      },
      {
        name: "Carajillo",
        price: 145,
      },
      {
        name: "Cioccolata Calda",
        price: 90,
      },
      {
        name: "Chai",
        description: "Vanilla, spices, mixed berries, matcha, taro, pumpkin, or apple cinnamon.",
        price: 100,
        available: "cold or hot",
      },
      {
        name: "Greco",
        price: 90,
        available: "cold",
      },
      {
        name: "Frapuccino",
        price: 110,
        available: "cold",
      },
      {
        name: "Espresso Tonic",
        price: 100,
        available: "cold",
      },
      {
        name: "Frappé con Gelato",
        description: "Hazelnut, tiramisu, cappuccino, strawberry, mixed berries, chocolate, vanilla.",
        price: 135,
        available: "cold",
      },
      {
        name: "Tea",
        price: 65,
        available: "cold",
      },
    ],
  },

  {
    name: "Bibite",
    items: [
      {
        name: "Italian Soda",
        description: "Strawberry, mixed berries, grapefruit, guava, dragon fruit, kiwi, mandarin, tamarind, and mango.",
        price: 85,
      },
      {
        name: "Sparkling or Still Lemonade",
        price: 65,
      },
      {
        name: "Sparkling or Still Orangeade",
        price: 65,
      },
      {
        name: "San Pellegrino (500ml)",
        price: 85,
      },
      {
        name: "Topo Chico",
        price: 60,
      },
      {
        name: "Felix Schorle",
        description: "Raspberry, guava, apple, and natural.",
        price: 60,
      },
      {
        name: "Bottled Water",
        price: 35,
      },
      {
        name: "Prepared Sangria",
        price: 110,
      },
      {
        name: "Sodas",
        description: "Coca-cola (light, zero, regular), Sprite, Fresca.",
        price: 60,
      },
    ],
  },

  {
    name: "Dolci",
    items: [
      {
        name: "Pan Briosche",
        description:"With gelato and pistachio cream or Nutella.",
        price: 145,
      },
      {
        name: "Tiramisu",
        description: "Classic recipe.",
        price: 120,
      },
      {
        name: "Croissant",
        description: "Artisanal croissant.",
        price: 90,
        extras: [
          { 
            label: "Nutella or pistachio cream", 
            price: 40 
          },
        ],
      },
      {
        name: "Cannolo Siciliano",
        description: "Filled with pastry cream.",
        price: 90,
      },
      {
        name: "Waffles Modigliani",
        description: "Nutella, banana, whipped cream, toasted hazelnut, and chocolate syrup.",
        price: 185,
      },
      {
        name: "Waffles Ligabue",
        description: "Mixed berry jam, strawberries, blackberries, cranberries, whipped cream, and syrup.",
        price: 185,
      },
      {
        name: "Crepe Emiliano",
        description: "Filled with Nutella, gelato, banana, and whipped cream.",
        price: 165,
      },
      {
        name: "Crepe Alessia",
        description: "Filled with mixed berries, gelato, and whipped cream.",
        price: 165,
      },
      {
        name: "Cheesecake",
        description: "New York style cheesecake with mixed berries.",
        price: 105,
      },
      {
        name: "Apple Tart",
        description: "Served with blackberries or walnuts and cinnamon.",
        price: 120,
        extras: [
          {  
            label: "Gelato", 
            price: 45 
          }
        ],
      },
      {
        name: "Panna Cotta",
        description: "Pistachio or Nutella.",
        price: 120,
      },
      {
        name: "Rolls",
        description: "Classic, chocolate, Ferrero, apple, Irish cream.",
        price: 100,
      },
      {
        name: "Cookies",
        description: "Cranberry, oatmeal, chocolate.",
        price: 110,
      },
      {
        name: "Pancakes",
        description: "Chocolate chips, strawberry, mixed berries, or banana with whipped cream.",
        price: 135,
        extras: [
          { 
            label: "Gelato", 
            price: 45 
          }
        ],
      },
    ],
  },

  {
    name: "Di Stagione",
    items: [
      {
        name: "Tiramisu Cake",
        description: "Tiramisu style cake.",
        price: 140,
      },
      {
        name: "Panettone",
        description: "Italian sweet bread, fluffy and aromatic, candied fruits and raisins. Includes a scoop of gelato.",
        price: 125,
      },
      {
        name: "Christmas Special",
        description: "Parmesan-crusted chicken breast, bathed in pomodoro or mushroom cream, with pomodoro pasta and fresh house salad. Includes an individual portion of tiramisu.",
        price: 200,
      },
    ],
  },

  {
    name: "Mixology",
    items: [
      {
        name: "Gin Tonic",
        description: "Gin, tonic water flavored with mixed berries or lime.",
        price: 190,
      },
      {
        name: "Mojito",
        description: "Bacardi, mint, lime, brown sugar, and mineral water.",
        price: 170,
      },
      {
        name: "Cosmopolitan",
        description: "Cranberry juice, vodka, lime, and sweetener.",
        price: 170,
      },
      {
        name: "Margherite",
        description: "Tequila, Cointreau, lime, sweetener, blended or on the rocks.",
        price: 170,
      },
      {
        name: "Piña Colada",
        description: "Coconut cream, pineapple juice, evaporated milk, and Bacardi.",
        price: 200,
      },
      {
        name: "Old Fashioned",
        description: "Bourbon, sugar, angostura bitters, and orange.",
        price: 180,
      },
      {
        name: "Hibiscus Mezcalita",
        description: "Mezcal, hibiscus flower, lime, and worm salt.",
        price: 180,
      },
      {
        name: "Bella Rosa",
        description: "Gin, rose essence, lime, and pineapple juice.",
        price: 200,
      },
      {
        name: "Sicilia",
        description: "Lime, grapefruit, bourbon whiskey, mixed berries, sugar, and mint.",
        price: 210,
      },
      {
        name: "Manhattan",
        description: "Whiskey, dry vermouth, and angostura bitters.",
        price: 210,
      },
      {
        name: "Affogato di Amaretto",
        description: "Vanilla gelato, amaretto, espresso shot, and whiskey.",
        price: 220,
      },
      {
        name: "Blackberry Mezcalita",
        description: "Mezcal, blackberries, sweetener, and orange liqueur.",
        price: 180,
      },
      {
        name: "Espresso Martini",
        description: "Vodka, Baileys, amaretto, coffee liqueur, and chocolate.",
        price: 190,
      },
    ],
  },

  {
    name: "Licores",
    note: "Mixers included · 45ml",
    items: [
      {
        name: "30-30 Blanco",
        price: 125,
      },
      {
        name: "30-30 Reposado",
        price: 125,
      },
      {
        name: "30-30 Añejo",
        price: 165,
      },
      {
        name: "30-30 Cristalino",
        price: 165,
      },
      {
        name: "Don Julio Plata",
        price: 190,
      },
      {
        name: "Don Julio Reposado",
        price: 165,
      },
      {
        name: "Casamigos Blanco",
        price: 165,
      },
      {
        name: "Casamigos Añejo",
        price: 200,
      },
      {
        name: "Sotol Hacienda",
        price: 155,
      },
      {
        name: "Torres 10",
        price: 135,
      },
      {
        name: "Cognac Martell VSOP",
        price: 240,
      },
      {
        name: "Zacapa Ambar",
        price: 175,
      },
      {
        name: "Gin Tanqueray",
        price: 175,
      },
      {
        name: "Jack Daniel's",
        price: 180,
      },
      {
        name: "Macallan Gold",
        price: 260,
      },
      {
        name: "Red Label",
        price: 150,
      },
      {
        name: "Mezcal 400 Conejos",
        price: 155,
      },
    ],
  },

  {
    name: "Birra",
    items: [
      {
        name: "XX",
        price: 65,
      },
      {   
        name: "Modelo Especial",
        price: 65,
      },
      {   
        name: "Negra Modelo",
        price: 65,
      },
      {   
        name: "Corona",
        price: 65,
      },
      {   
        name: "Victoria",
        price: 65,
      },
      {   
        name: "Michelob Ultra",
        price: 65,
      },
      {
        name: "Amstel",
        price: 75,
      },
      {   
        name: "Indio",
        price: 65,
      },
      {
        name: "Miller",
        price: 90,
      },
      {
        name: "Stella Artois",
        price: 90,
      },
      {
        name: "Bohemia Clara",
        price: 65,
      },
      {
        name: "Bohemia Cristal",
        price: 65,
      },
      {
        name: "Bohemia Obscura",
        price: 65,
      },
      {
        name: "Peroni Nastro Azzurro",
        price: 110,
      },
      {
        name: "Estrella Galicia",
        price: 110,
      },
    ],
  },

  {
    name: "Vinos",
    note: "Glass / Bottle",
    items: [
      {
        name: "Merlot Italia",
        description: "Red fruits, pleasant and tonic.",
        price: 140,
        priceBottle: 450,
      },
      {
        name: "Hardys Stamp Cabernet Shiraz",
        description: "Velvety black fruits and balanced acidity.",
        price: 170,
        priceBottle: 630,
      },
      {
        name: "Bouchard Heritage Pinot Noir",
        description: "Balanced, vigorous with a beautiful structure.",
        price: 180,
        priceBottle: 750,
      },
      {
        name: "Casa Madero 3V",
        description: "Cabernet Sauvignon, Merlot, and Tempranillo grapes.",
        price: null,
        priceBottle: 1030,
      },
      {
        name: "Tutto Bene",
        description: "Barbera, Nero D'avola, and Montepulciano, Piedmont.",
        price: null,
        priceBottle: 560,
      },
      {
        name: "Maison Nicolas Cabernet Sauvignon",
        description: "Black fruits, toasted notes, a herbal touch.",
        price: 180,
        priceBottle: 700,
      },
      {
        name: "Vinho Verde Raza",
        description: "Loureiro, Trajadura, and Arinto grapes, dry fruity, very fresh with fine bubbles, persistent and very good acidity.",
        price: 160,
        priceBottle: 585,
      },
      {
        name: "Hardys Stamp Chardonnay Semillon",
        description: "Rich and rounded, intense flavors of juicy cherries.",
        price: 170,
        priceBottle: 630,
      },
      {
        name: "Maison Nicolas Sauvignon Blanc",
        description: "Fresh, clean, and lively acidity.",
        price: 170,
        priceBottle: 620,
      },
      {
        name: "Blanc de Zinfandel",
        description: "Great expression and excellent quality, fruity aroma like peach, apple, and strawberry.",
        price: 140,
        priceBottle: 450,
      },
      {
        name: "Vinho Verde Raza Rosado",
        description: "Espadeiro grape, fusion of red fruits and aromas.",
        price: 160,
        priceBottle: 585,
      },
      {
        name: "Marqués de Cáceres",
        price: 170,
        priceBottle: 650,
      },
      {
        name: "Moscato Spumante",
        description: "Sweet, aromatic, with fresh notes of peach and white flowers, light and smooth.",
        price: 185,
        priceBottle: 700,
      },
      {
        name: "Rosé Cider",
        description: "Aromatic, bright, and festive.",
        price: 140,
        priceBottle: 450,
      },
      {
        name: "Natural Cider",
        description: "Fresh, dry, and authentic.",
        price: 160,
        priceBottle: 480,
      },
    ],
  },

  {
    name: "Aperitivi",
    items: [
      {
        name: "Americano",
        description: "Cinzano rosso, Campari, ginger ale, and an orange slice.",
        price: 180,
      },
      {
        name: "Negroni Biancorame",
        description: "Cinzano rosso, Campari, and an orange slice.",
        price: 180,
      },
      {
        name: "Campari Soda",
        description: "Campari and ginger ale.",
        price: 170,
      },
      {
        name: "Campari Tonic",
        description: "Campari, tonic water, and lemon.",
        price: 170,
      },
      {
        name: "Martini Tonic",
        description: "Martini extra dry, tonic water, and lemon.",
        price: 170,
      },
      {
        name: "Aperol Spritz",
        description: "Aperol, prosecco, ginger ale, and orange.",
        price: 180,
      },
      {
        name: "Bellini",
        description: "Prosecco and peach nectar.",
        price: 180,
      },
      {
        name: "Limoncello Spritz",
        description: "Limoncello, prosecco, ginger ale, and lemon.",
        price: 180,
      },
      {
        name: "Hugo Spritz",
        description: "St Germain, prosecco, ginger ale, and mint.",
        price: 190,
      },
      {
        name: "Frangelico Spritz",
        description: "Frangelico, prosecco, ginger ale.",
        price: 190,
      },
      {
        name: "Amaretto Spritz",
        description: "Amaretto, prosecco, ginger ale.",
        price: 190,
      },
      {
        name: "Margherite Spritz",
        description: "Tequila, vermouth, prosecco, ginger ale, and mint.",
        price: 190,
      },
    ],
  },

];

export const getCategoryById = (name: string): MenuCategory | undefined =>
  menuCategories.find((c) => c.name === name);

export const formatPrice = (price: number | null): string => {
  if (price === null) return "Ask for price";
  return `$${price}`;
};