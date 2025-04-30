var products = [
    // Beverage Category
    {
        "category": "Beverage",
        "contents": [
            {
                "isAvailable": true,
                "name": "Coke",
                "code": "CK",
                "sizes": [
                    {
                        "name": "regular",
                        "code": "RG",
                        "price": 30,
                        "img": "coke.jpg"
                    },
                    {
                        "name": "medium",
                        "code": "MD",
                        "price": 35,
                        "img": "coke.jpg"
                    },
                    {
                        "name": "large",
                        "code": "LG",
                        "price": 40,
                        "img": "coke.jpg"
                    }
                ]
            },
            {
                "isAvailable": false,
                "name": "Sprite",
                "code": "SPRT",
                "sizes": [
                    {
                        "name": "regular",
                        "code": "RG",
                        "price": 30,
                        "img": "sprite.jpg"
                    },
                    {
                        "name": "medium",
                        "code": "MD",
                        "price": 35,
                        "img": "sprite.jpg"
                    },
                    {
                        "name": "large",
                        "code": "LG",
                        "price": 40,
                        "img": "sprite.jpg"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Cucumber Lemonade",
                "code": "CCLMN",
                "sizes": [
                    {
                        "name": "regular",
                        "code": "RG",
                        "price": 50,
                        "img": "cuculemon.jpg"
                    },
                    {
                        "name": "medium",
                        "code": "MD",
                        "price": 65,
                        "img": "cuculemon.jpg"
                    },
                    {
                        "name": "large",
                        "code": "LG",
                        "price": 75,
                        "img": "cuculemon.jpg"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Iced Tea",
                "code": "ICTEA",
                "sizes": [
                    {
                        "name": "regular",
                        "code": "RG",
                        "price": 60,
                        "img": "icedtea.jpg"
                    },
                    {
                        "name": "medium",
                        "code": "MD",
                        "price": 75,
                        "img": "icedtea.jpg"
                    },
                    {
                        "name": "large",
                        "code": "LG",
                        "price": 85,
                        "img": "icedtea.jpg"
                    }
                ]
            }
        ]
    },

    // Burger Category

    {
        "category": "Burgers",
        "contents": [
            {
                "isAvailable": false,
                "name": "Classic Burger",
                "code": "BGR",
                "price": 50,
                "img": "burger.jpg"
            },
            {
                "isAvailable": true,
                "name": "Cheeseburger Deluxe",
                "code": "CHDLX",
                "price": 70,
                "img": "CheeseburgerDeluxe.jpg"
            },
            {
                "isAvailable": true,
                "name": "Double Bacon Burger",
                "code": "DBBGR",
                "price": 95,
                "img": "dblbaconburger.jpg"
            },
            {
                "isAvailable": true,
                "name": "Spicy Chicken Burger",
                "code": "SPCHB",
                "price": 85,
                "img": "spicychknburger.jpg"
            },
            {
                "isAvailable": false,
                "name": "Mushroom Swiss Burger",
                "code": "MSSWB",
                "price": 90,
                "img": "mshrmswissburger.jpeg"
            },
            {
                "isAvailable": false,
                "name": "Veggie Burger",
                "code": "VGGBR",
                "price": 75,
                "img": "veggieburger.jpg"
            },
            {
                "isAvailable": true,
                "name": "BBQ Bacon Cheeseburger",
                "code": "BBQBC",
                "price": 100,
                "img": "bbqBaconCheeseburger.jpg"
            },
            {
                "isAvailable": true,
                "name": "Crispy Fish Burger",
                "code": "FSHBG",
                "price": 80,
                "img": "crispyfishburger.jpg"
            }
        ]
    },

    // Pasta Category

    {
        "category": "Pasta",
        "contents": [
            {
                "isAvailable": true,
                "name": "Spaghetti & Meatballs",
                "code": "SPGMT",
                "price": 300,
                "img": "spagmtbl.png"
            },
            {
                "isAvailable": false,
                "name": "Fettuccine Alfredo",
                "code": "FTALF",
                "price": 280,
                "img": "fettucinealf.jpg"
            },
            {
                "isAvailable": true,
                "name": "Penne Arrabbiata",
                "code": "PNARB",
                "price": 250,
                "img": "penne.jpg"
            },
            {
                "isAvailable": true,
                "name": "Lasagna Bolognese",
                "code": "LSBLG",
                "price": 320,
                "img": "lasagna.jpg"
            },
            {
                "isAvailable": false,
                "name": "Linguine with Clam Sauce",
                "code": "LGCLS",
                "price": 290,
                "img": "linguine.jpg"
            },
            {
                "isAvailable": true,
                "name": "Tortellini Carbonara",
                "code": "TRLCB",
                "price": 310,
                "img": "tortellini.jpg"
            },
            {
                "isAvailable": true,
                "name": "Pesto Pasta",
                "code": "PSTPS",
                "price": 260,
                "img": "pesto.jpg"
            },
            {
                "isAvailable": false,
                "name": "Macaroni and Cheese",
                "code": "MACCH",
                "price": 240,
                "img": "maccheese.jpg"
            },
            {
                "isAvailable": true,
                "name": "Seafood Marinara",
                "code": "SFDMR",
                "price": 330,
                "img": "seafoodmarinara.jpg"
            },
            {
                "isAvailable": true,
                "name": "Pasta Primavera",
                "code": "PSTPR",
                "price": 410,
                "img": "primavera.jpg"
            },
            {
                "isAvailable": true,
                "name": "Spinach & Ricotta Ravioli",
                "code": "SPNRV",
                "price": 270,
                "img": "spinachravioli.jpg"
            }
        ]
    },

    // Main Dish Category

    {
        "category": "Main Dish",
        "contents": [
            {
                "isAvailable": true,
                "name": "Steak Frites",
                "code": "STKFR",
                "price": 450,
                "img": "steakfrites.jpg" 
            },
            {
                "isAvailable": false,
                "name": "Grilled Salmon",
                "code": "GRLSM",
                "price": 400,
                "img": "grillsalmon.jpg" 
            },
            {
                "isAvailable": true,
                "name": "Chicken Parmesan",
                "code": "CHKPRM",
                "price": 320,
                "img": "chickenparm.jpg" 
            },
            {
                "isAvailable": true,
                "name": "Vegetarian Lasagna",
                "code": "VGLSN",
                "price": 240,
                "img": "veglasagna.jpg" 
            },
            {
                "isAvailable": true,
                "name": "Lamb Chops",
                "code": "LMBCH",
                "price": 900,
                "img": "lambchops.jpg" 
            },

            {
                "isAvailable": false,
                "name": "Mushroom Risotto",
                "code": "MSHRSTO",
                "price": 380,
                "img": "mshrmrisotto.jpg" 
            },
            {
                "isAvailable": false,
                "name": "Beef Wellington",
                "code": "BFWLL",
                "price": 1000,
                "img": "beefwellington.jpg" 
            },
            {
                "isAvailable": true,
                "name": "BBQ Ribs",
                "code": "BBQRB",
                "price": 820,
                "img": "bbqribs.jpg" 
            },
            {
                "isAvailable": true,
                "name": "Shrimp Scampi",
                "code": "SHRSC",
                "price": 520,
                "img": "shrimpscampi.jpg" 
            }
        ]
    },

    // Dessert Category

    {
        "category": "Dessert",
        "contents": [
            {
                "isAvailable": true,
                "name": "Banana Split",
                "code": "BNSPLT",
                "price": 220,
                "img": "bananasplit.jpg"
            },
            {
                "isAvailable": false,
                "name": "Chocolate Lava Cake",
                "code": "CHLVC",
                "price": 250,
                "img": "chocolavacake.jpg"
            },
            {
                "isAvailable": true,
                "name": "Strawberry Cheesecake",
                "code": "STCHS",
                "price": 240,
                "img": "strawcheesecake.jpg"
            },
            {
                "isAvailable": false,
                "name": "Tiramisu",
                "code": "TRMSU",
                "price": 260,
                "img": "tiramisu.jpg"
            },
            {
                "isAvailable": true,
                "name": "Crème Brûlée",
                "code": "CRMBL",
                "price": 270,
                "img": "cremebrulee.jpg"
            },
            {
                "isAvailable": true,
                "name": "Apple Pie à la Mode",
                "code": "APLMD",
                "price": 230,
                "img": "applealamode.jpg"
            },
            {
                "isAvailable": true,
                "name": "Molten Brownie Sundae",
                "code": "MBRSD",
                "price": 255,
                "img": "browniesundae.jpg"
            },
            {
                "isAvailable": true,
                "name": "Lemon Tart",
                "code": "LMNTR",
                "price": 210,
                "img": "lemontart.jpg"
            }
        ]
    }
]