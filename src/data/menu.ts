export type MenuCategory = {
  name: string;
  description?: string;
  items: MenuItem[];
  note?: string;
};

export type MenuItem = {
  name: string;
  description?: string;
  price?: number | null ;
  priceBottle?: number;  
  extras?: MenuItemExtra[];
  available?: "frío" | "caliente" | "frío o caliente"; 
};

export type MenuItemExtra = {
  label: string;
  price: number;
};

export const menuCategories: MenuCategory[] = [

  {
    name: "Menu ejecutivo",
    description: "Lunes a viernes 9:00 a 15:00. Se sirven en porción personal.",
    items: [
      { 
        name: "A escoger",
        description: "Panini, Avocado toast, Waffles, Croissant especial relleno, huevos al gusto"
      },
      {
        name: "Incluye",
        description: "Americano, jugo de naranja o limonada"
      },
    ],
  },
 
  {
    name: "Colazione",
    items: [
      {
        name: "Huevos al Gusto",
        description: "Dos ingredientes a elegir: Jamón, Tocino, Champiñones, Espinacas, Pimientos dulces. Incluye papas gajo y pan tostado.",
        price: 130,
      },
      {
        name: "Croissant Relleno",
        description: "Jamón y queso mozzarella o huevos revueltos, lechuga y tomate, acompañado de papas gajo.",
        price: 130,
      },
      {
        name: "Omelette La Galleria",
        description: "Omelette con mozzarella, champiñones y jamón de pierna.",
        price: 270,
      },
      {
        name: "Omelette La Scala",
        description: "Omelette con pimientos dulces, cherry, calabaza y cebollín.",
        price: 250,
      },
      {
        name: "Quiche Lorrain",
        description: "Tartaleta de huevo con calabaza y pimientos.",
        price: 210,
      },
      {
        name: "Avocado Toast",
        description: "Pan brioche con una cama de aguacate, pancetta, huevo al gusto y pimientos dulces.",
        price: 250,
      },
      {
        name: "Waffles Raffaello",
        description: "Crema de pimiento rojo, aguacate, pancetta, mozzarella fresca y huevos al gusto.",
        price: 250,
      },
      {
        name: "Waffles Giotto",
        description: "Salmón ahumado, burrata, cebollín y vinagre balsámico.",
        price: 250,
      },
    ],
  },

  {
    name: "Antipasti",
    items: [
      {
        name: "Tagliatere Misto",
        description: "Tabla de quesos y carnes frías.",
        price: 350,
      },
      {
        name: "Involtini di Burrata",
        description: "5 Rollos de prosciutto rellenos de burrata, sobre una cama de lechuga, tomate cherry y aderezados con balsámico.",
        price: 325,
      },
      {
        name: "Carpaccio di Salmone",
        description: "Salmón ahumado, alcaparras, cebollín, acompañado de pan tostado y mantequilla.",
        price: 305,
      },
    ],
  },

  {
    name: "Paste",
    items: [
      {
        name: "Lasagna",
        description: "Clásica lasagna con ragú.",
        price: 245,
      },
      {
        name: "Alfredo",
        description: "Tagliatelle con crema y grana padano.",
        price: 235,
      },
      {
        name: "Pesto",
        description: "Fusilli con pesto genovese.",
        price: 245,
      },
      {
        name: "Pomodoro",
        description: "Spaghetti con tomate, albahaca y grana padano.",
        price: 235,
      },
      {
        name: "Spaghetti alla Bolognesa",
        description: "Salsa de tomate, ragú de carne de res y verduras.",
        price: 255,
      },
      {
        name: "Ravioli",
        description: "Raviolis rellenos de mascarpone y espinacas, aderezados con salsa pomodoro.",
        price: 245,
      },
    ],
  },

  {
    name: "Insalate",
    items: [
      {
        name: "Caprese",
        description: "Tomate, mozzarella fresca, albahaca y vinagre glaze.",
        price: 245,
      },
      {
        name: "Dolce Mela",
        description: "Espinacas, corazón de lechuga, manzana, nueces garapiñadas, arándanos y aderezo de manzana dulce.",
        price: 295,
      },
      {
        name: "Cuori Saporiti",
        description: "Corazones de lechuga rellenos de mascarpone y salmón ahumado.",
        price: 250,
      },
      {
        name: "Cesare",
        description: "Lechuga, grana padano, crotones, mayonesa fresca y grana padano.",
        price: 225,
      },
      {
        name: "Dolce Fragola",
        description: "Espinacas, corazón de lechuga, fresas rebanadas, nueces garapiñadas, queso de cabra y aderezo dulce de fresa.",
        price: 295,
      },
    ],
  },

  {
    name: "Panini & Pizza",
    items: [
      {
        name: "Panino Rustico",
        description: "Pan rústico, mozzarella fresca, salami, prosciutto, lomo, arúgula y crema de tomate deshidratado.",
        price: 265,
      },
      {
        name: "Panino della Madonnina",
        description: "Pan cibatta, queso brie, jamón de pierna selecto y tomate.",
        price: 245,
      },
      {
        name: "Panino Magenta",
        description: "Pan rústico, mascarpone, queso brie, prosciutto, arúgula y carpaccio de trufa.",
        price: 295,
      },
      {
        name: "Panino Genova",
        description: "Pan cibatta, tomate, mozzarella fresca y pesto genovese.",
        price: 245,
      },
      {
        name: "Panino Milano",
        description: "Pan focaccia con aceitunas negras, jamón de pechuga de pollo, jamón selva negra, roast beef, queso mozzarella, arúgula con tomate cherry y salsa tártara.",
        price: 265,
      },
      {
        name: "Pizza Peperoni",
        description: "Pizza de masa madre con mozzarella, peperoni y parmigano.",
        price: 225,
      },
      {
        name: "Pizza Margherita",
        description: "Pizza de masa madre con mozzarella y albahaca.",
        price: 205,
      },
      {
        name: "Pizza Burrata & Prosciutto",
        description: "Pizza de masa madre con mozzarella, burrata y prosciutto.",
        price: 310,
      },
      {
        name: "Pizza Fungi e Carciofi",
        description: "Pizza de masa madre con mozzarella, champiñones al vino tinto, alcachofas y queso de cabra.",
        price: 310,
      },
      {
        name: "Pizza Vesuviana di Carne",
        description: "Pizza de masa madre con mozzarella, salchicha italiana, pancetta, chistorra y jamón.",
        price: 310,
      },
      {
        name: "Hamburguesa Gourmet de Res",
        description: "Pan brioche, salsa tártara, mozzarella, lechuga y tomate, acompañada con papas gajo.",
        price: 210,
        extras: [
          { 
            label: "Tocino o jamón de pierna", 
            price: 35 
          },
        ],
      },
    ],
  },

  {
    name: "Caffè",
    note: "Leche de coco, avena y almendra +$25 · Sabor extra +$25 (Avellana, Fresa, Menta, Pistache, Chocolate, Caramelo, Vainilla, Amaretto, Crema Irlandesa)",
    items: [
      {
        name: "Espresso",
        description: "Ristretto, sencillo o doppio.",
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
        available: "frío o caliente",
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
        description: "Vainilla, especias, frutos del bosque, matcha, taro, calabaza o manzana canela.",
        price: 100,
        available: "frío o caliente",
      },
      {
        name: "Greco",
        price: 90,
        available: "frío",
      },
      {
        name: "Frapuccino",
        price: 110,
        available: "frío",
      },
      {
        name: "Espresso Tonic",
        price: 100,
        available: "frío",
      },
      {
        name: "Frappé con Gelato",
        description: "Avellana, tiramisú, cappuccino, fresa, frutos del bosque, chocolate, vainilla.",
        price: 135,
        available: "frío",
      },
      {
        name: "Té",
        price: 65,
        available: "frío",
      },
    ],
  },

  {
    name: "Bibite",
    items: [
      {
        name: "Soda Italiana",
        description: "Fresa, frutos del bosque, toronja, guayaba, dragon fruit, kiwi, mandarina, tamarindo y mango.",
        price: 85,
      },
      {
        name: "Limonada mineral o natural",
        price: 65,
      },
      {
        name: "Naranjada mineral o natural",
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
        description: "Frambuesa, guayaba, manzana y natural.",
        price: 60,
      },
      {
        name: "Agua Embotellada",
        price: 35,
      },
      {
        name: "Sangría Preparada",
        price: 110,
      },
      {
        name: "Refrescos",
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
        description:"Con gelato y crema de pistacchio o Nutella.",
        price: 145,
      },
      {
        name: "Tiramisú",
        description: "Receta clásica.",
        price: 120,
      },
      {
        name: "Croissant",
        description: "Croissant artesanal.",
        price: 90,
        extras: [
          { 
            label: "Nutella o crema de pistacchio", 
            price: 40 
          },
        ],
      },
      {
        name: "Cannolo Siciliano",
        description: "Relleno de crema pasticcera.",
        price: 90,
      },
      {
        name: "Waffles Modigliani",
        description: "Nutella, plátano, crema batida, avellana tostada y jarabe de chocolate.",
        price: 185,
      },
      {
        name: "Waffles Ligabue",
        description: "Mermelada de frutos del bosque, fresas, moras, arándanos, crema batida y jarabe.",
        price: 185,
      },
      {
        name: "Crepe Emiliano",
        description: "Rellena de Nutella, gelato, plátano y panna montata.",
        price: 165,
      },
      {
        name: "Crepe Alessia",
        description: "Rellena de frutas del bosque, gelato y panna montata.",
        price: 165,
      },
      {
        name: "Cheesecake",
        description: "Pay de queso estilo New York con frutos rojos.",
        price: 105,
      },
      {
        name: "Tarta de Manzana",
        description: "Acompañada de moras o nuez y canela.",
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
        description: "Pistache o Nutella.",
        price: 120,
      },
      {
        name: "Roles",
        description: "Clásico, chocolate, ferrero, manzana, crema irlandesa.",
        price: 100,
      },
      {
        name: "Galletas",
        description: "Arándanos, avena, chocolate.",
        price: 110,
      },
      {
        name: "Hot Cakes",
        description: "Chispas de chocolate, fresa, frutos del bosque o plátano con crema batida.",
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
        name: "Pastel de Tiramisú",
        description: "Pastel estilo tiramisú.",
        price: 140,
      },
      {
        name: "Panettone",
        description: "Pan dulce italiano, esponjoso y aromático, frutas confitadas y pasas. Incluye una bola de gelato.",
        price: 125,
      },
      {
        name: "Especial de Navidad",
        description: "Pechuga de pollo en costra de parmesano, bañada en pomodoro o crema champiñones, con pasta al pomodoro y ensalada fresca de la casa. Incluye porción individual de tiramisú.",
        price: 200,
      },
    ],
  },

  {
    name: "Mixología",
    items: [
      {
        name: "Gin Tonic",
        description: "Gin, agua tónica sabor frutos rojos o lima.",
        price: 190,
      },
      {
        name: "Mojito",
        description: "Bacardi, menta, limón, azúcar mascabado y agua mineral.",
        price: 170,
      },
      {
        name: "Cosmopolitan",
        description: "Jugo de arándano, vodka, limón y endulzante.",
        price: 170,
      },
      {
        name: "Margherite",
        description: "Tequila, controy, limón, endulzante, frapeado o en las rocas.",
        price: 170,
      },
      {
        name: "Piña Colada",
        description: "Crema de coco, jugo de piña, leche evaporada y bacardi.",
        price: 200,
      },
      {
        name: "Old Fashion",
        description: "Bourbon, azúcar, angostura y naranja.",
        price: 180,
      },
      {
        name: "Mezcalina de Jamaica",
        description: "Mezcal, flor de jamaica, limón y sal de gusano.",
        price: 180,
      },
      {
        name: "Bella Rosa",
        description: "Gin, esencia de rosas, limón y jugo de piña.",
        price: 200,
      },
      {
        name: "Sicilia",
        description: "Lima, toronja, whiskey bourbon, frutos rojos, azúcar y menta.",
        price: 210,
      },
      {
        name: "Manhattan",
        description: "Whiskey, vermouth dry y angostura.",
        price: 210,
      },
      {
        name: "Affogato di Amaretto",
        description: "Gelato de vainilla, amaretto, shot de espresso y whiskey.",
        price: 220,
      },
      {
        name: "Mezcalina Zarzamora",
        description: "Mezcal, zarzamoras, endulzante y licor de naranja.",
        price: 180,
      },
      {
        name: "Espresso Martini",
        description: "Vodka, baileys, amaretto, licor de café y chocolate.",
        price: 190,
      },
    ],
  },

  {
    name: "Licores",
    note: "Incluye servicio · 45ml",
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
    note: "Copa / Botella",
    items: [
      {
        name: "Merlot Italia",
        description: "Frutos rojos, agradable y tónico.",
        price: 140,
        priceBottle: 450,
      },
      {
        name: "Hardys Stamp Cabernet Shiraz",
        description: "Frutos negros terciopelados y acidez conjunta.",
        price: 170,
        priceBottle: 630,
      },
      {
        name: "Bouchard Heritage Pinot Noir",
        description: "Equilibrado, vigoroso con un hermoso marco.",
        price: 180,
        priceBottle: 750,
      },
      {
        name: "Casa Madero 3V",
        description: "Uvas Cabernet Suavignon, Merlot y Tempranillo.",
        price: null,
        priceBottle: 1030,
      },
      {
        name: "Tutto Bene",
        description: "Barbera, Nero D'avola y Montepulciano, Pimionte.",
        price: null,
        priceBottle: 560,
      },
      {
        name: "Maison Nicolas Cabernet Sauvignon",
        description: "Frutos negros, notas tostadas, un toque herbal.",
        price: 180,
        priceBottle: 700,
      },
      {
        name: "Vinho Verde Raza",
        description: "Uva Loureiro, Trabajadura, Arinto, seco afrutado, muy fresco de aguja fina, persistente y muy buena acidez.",
        price: 160,
        priceBottle: 585,
      },
      {
        name: "Hardys Stamp Chardonnay Semillon",
        description: "Rico y redondeado, intensos sabores a cerezas jugosas.",
        price: 170,
        priceBottle: 630,
      },
      {
        name: "Maison Nicolas Sauvignon Blanc",
        description: "Fresco, Limpio y acidez viva.",
        price: 170,
        priceBottle: 620,
      },
      {
        name: "Blanc de Zinfandel",
        description: "Gran expresión y excelente calidad, aroma frutal como durazno, manzana y fresa.",
        price: 140,
        priceBottle: 450,
      },
      {
        name: "Vinho Verde Raza Rosado",
        description: "Uva espadetro, fusión de frutos rojos y aromas.",
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
        description: "Dulce, aromático, con notas frescas de durazno y flores blancas, ligero y suave.",
        price: 185,
        priceBottle: 700,
      },
      {
        name: "Sidra Rosada",
        description: "Aromática, brillante y festiva.",
        price: 140,
        priceBottle: 450,
      },
      {
        name: "Sidra Natural",
        description: "Fresca, seca y auténtica.",
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
        description: "Cinzano rosso, campari, Ginger ale y rodaja de naranja.",
        price: 180,
      },
      {
        name: "Negroni Biancorame",
        description: "Cinzano rosso, campari y rodaja de naranja.",
        price: 180,
      },
      {
        name: "Campari Soda",
        description: "Campari y Ginger ale.",
        price: 170,
      },
      {
        name: "Campari Tonic",
        description: "Campari, agua tónica y limón real.",
        price: 170,
      },
      {
        name: "Martini Tonic",
        description: "Martini extra dry, agua tónica y limón real.",
        price: 170,
      },
      {
        name: "Aperol Spritz",
        description: "Aperol, prosecco, Ginger ale y naranja.",
        price: 180,
      },
      {
        name: "Bellini",
        description: "Prosecco y néctar de durazno.",
        price: 180,
      },
      {
        name: "Limoncello Spritz",
        description: "Limoncello, prosecco, Ginger ale y limón amarillo.",
        price: 180,
      },
      {
        name: "Hugo Spritz",
        description: "St Germain, prosecco, Ginger ale y menta.",
        price: 190,
      },
      {
        name: "Frangelico Spritz",
        description: "Frangelico, prosecco, Ginger ale.",
        price: 190,
      },
      {
        name: "Amaretto Spritz",
        description: "Amaretto, prosecco, Ginger ale.",
        price: 190,
      },
      {
        name: "Margherite Spritz",
        description: "Tequila, Vermouth, prosecco, Ginger ale y menta.",
        price: 190,
      },
    ],
  },

];

export const getCategoryById = (name: string): MenuCategory | undefined =>
  menuCategories.find((c) => c.name === name);

export const formatPrice = (price: number | null): string => {
  if (price === null) return "Consultar";
  return `$${price}`;
};