// Survivor's Gallery
var survivorNames = ["Wilson", "Willow", "Woodie", "Wendy", "Wolfgang", "Maxwell", "Wortox", "Webber", "Winona",
    "Wigfrid", "WX-78", "Wickerbottom", "Wes", "Warly", "Wormwood", "Walter", "Wurt", "Wanda"];

var survivorHealth = [
"150", "150", "150", "150", "200", "75", "200", "175", "150",
"200", "125", "125", "75", "150", "150", "130", "150", "150"
];
var survivorHunger = [
"150", "150", "150", "150", "200", "150", "175", "175", "150",
"120", "150", "150", "75", "250", "150", "110", "200", "175"
];
var survivorSanity = [
"200", "120", "200", "200", "200", "200", "150", "100", "200",
"120", "150", "250", "75", "200", "200", "200", "150", "200"
];

var survivorPics = ["survivor1.jpg", "survivor2.jpg", "survivor3.jpg", "survivor4.jpg", "survivor5.jpg", "survivor6.png",
"survivor7.png", "survivor8.png", "survivor9.jpg", "survivor10.jpg", "survivor11.jpg", "survivor12.jpg",
"survivor13.png", "survivor14.jpg", "survivor15.png", "survivor16.jpg", "survivor17.jpg", "survivor18.jpg"];

var favoriteFoods = ["Bacon & Eggs", "Spicy Chili", "Honey Nuggets", "Banana Pop", "Roasted Potatoes", "Wobster Dinner", "Pomegranate", "Ice Cream", "Vegetable Stinger",
"Turkey Dinner", "Butter Muffin", "Surf & Turf", "Fresh Fruit Crepes", "Has no favorite dish", "Cooked Cave Banana", "Trail Mix", "Durian", "Taffy"];

var aliases = [
"The Gentleman Scientist",
"The Firestarter",
"The Lumberjack",
"The Bereaved",
"The Strongman",
"The Puppet Master",
"The Soul Starved",
"The Indigestible",
"The Handywoman",
"The Performance Artist",
"The Soulless Automaton",
"The Librarian",
"The Silent",
"The Culinarian",
"The Lonesome",
"The Fearless",
"The Half-Pint",
"The Timekeeper",
];

var survivorContents = [
"At heart, Wilson is a truly man of science. It's not his nature to resist the call of the unknown.",
"Willow is a candid woman whose penchant of fire often gets her into more than a little trouble.",
"A gruff, bearded woodsman. Woodie has a soft spot for nature, plaid, and his trust axe, Lucy.",
"Wendy is a morose young lady with a sisterly bond so powerful, it transcends death itself.",
"Wolfgang is an affable, musclebound giant with a heart plagued with a myriad of phobias.",
"Formerly the Nightmare King, lately Maxwell finds himself reacquainted with life among the commonfolk.",
"Wortox is a mischievous imp whose levity masks a deep well of guilt. He has taken many souls in his time.",
"Webber is a polite young master who cares deeply for all his friends, human or otherwise.",
"Winona is a former assembly line worker with a boisterous attitude and love of all things mechanical.",
"Whoever Wigfrid was before her titular role has been lost to time, and the power of method acting.",
"One might assume WX's callous nature hides a sensitive inner soul. One would assume incorrectly.",
"A woman of curious mind and stern air, Wickerbottom thrives on the lifelong pursuit of knowledge.",
"Wes is a mime of many thoughts, but few words.",
"To Warly, cooking is a language through which to express love and gratitude to those he holds dear.",
"An amalgam of vines given sentience by lunar magic. Wormwood searches for friends so he can finally belong.",
"Walter is an odd but cheerful boy, whose ability to assess danger leaves something to be desired.",
"Wurt is a curious young Merm trying to expand her horizons... as long as those horizons don't extend into Pig territory.",
"Wanda is a skilled clockmaker who will stop at nothing to outrun her future.",
];

var bossNames = ["Deerclops", "Bearger", "Bee Queen", "Dragonfly", "Moose Goose", "Antlion", 
        "Klaus", "Malbatross", "Nightmare Werepig", "Ancient Guardian", "Toadstool","Misery Toadstool"];
var bossPics = ["boss1.jpg", "boss2.jpg", "boss3.jpg", "boss4.jpg", "boss5.jpg", "boss6.jpg", 
        "boss7.jpg", "boss8.jpg", "boss9.jpg", "boss10.jpg", "boss11.jpg", "boss12.jpg"];
var bossHealth = ["4,000", "6,000", "22,500", "27,500", "6,000", "6,000", 
        "10,000", "5,000", "10,000", "10,000", "52,500", "99,999"];
var bossAttack = ["75 dmg", "87 dmg", "60 dmg", "75 to 150 dmg", "75 dmg", "50 to 100 dmg", 
        "37.5 dmg", "75 dmg", "12.5 to 112.5 dmg", "100 dmg", "100 to 250 dmg", "100 to 250 dmg"];

var bossContents = [
"A large, one-eyed monster that emerges during Winter night. Known for its icy attacks and massive health pool, Deerclops can deal significant damage with its melee attacks. It can also freeze players, making it a formidable foe in exchange of its eye.",
"This massive bear-like creature awakens within the early days of Autumn. Bearger is aggressive, especially if survivors have food made from honey, and can deal heavy damage with its powerful charges and swipes. It can also destroy structures in its path, making it a serious threat to camps.",
"The queen of the bees, this boss controls a swarm of aggressive worker bees. The Bee Queen has high health and can inflict poison damage, making her a challenging opponent. Defeating her grants access to unique honey-related items such as Royal Jelly and resources.",
"A massive, fiery creature found in the deserts, the Dragonfly can spawn multiple Lava-es (larvaes) and has high HP. It can create damaging flames in its vicinity and is particularly dangerous when enraged. Its scale and variety of gems are the ultimate rewards upon defeating this boss",
"A large, aggressive goose that guards its nest during spring. Moose Goose can deal considerable damage with its charges and has the ability to spawn baby moose, which can also attack players. Defeating this giant will drop a clump of Down Feathers.",
"This sand-dwelling boss emerges during the summer and creates sinkholes to trap players. Antlion can deal substantial damage and uses area-of-effect attacks to thwart players. Defeating it yields valuable items such as Desert Stones.",
"Klaus is a powerful winter boss that spawns during the Christmas season. He appears in a unique sleigh and can summon Krampus minions. Defeating him rewards players with valuable items, including the coveted Klaus Sack.",
"Malbatross is a large, bird-like boss that roams the ocean. When attacked, it retaliates by dropping explosive projectiles. Defeating Malbatross can yield rare loot, including feathers and the Malbatross Beak.",
"Nightmare Werepig can be found in the Muddy Biomes found in the caves. Upon examining, it seems that the boss is first ensnared between three columns that survivors must break before the real boss fight. Defeating this boss will guarantee Pure Horror, and Dreadstones.",
"The Ancient Guardian is a massive, stone-like boss found in the Ruins. It guards the entrance to the Ruins and has powerful melee attacks. Players must work together to defeat it, and it drops valuable items, including Ancient Tools and Thulecites.",
"Toadstool is a giant mushroom boss found in the Cave biome. It can release spores that summon smaller enemies, and its attacks can deal heavy damage. Players can harvest it for Toadstool Caps, which are useful for crafting.",
"A variant of Toadstool, Misery Toadstool is a more aggressive and challenging boss. It has unique attack patterns and can spawn additional enemies. Defeating it provides players with more valuable loot than its counterpart."
];

// This loop creates and appends cards to the cardSurvivorContainer element (line 134)
survivorNames.forEach((name, i) => {
var mySurvivorContainer = document.getElementById("cardSurvivorContainer");

mySurvivorContainer.innerHTML +=
'<div class="col-xl-3 col-md-4 col-sm-6 col-12 mb-4">' +
'<div class="card h-100" style="background: linear-gradient(to bottom, #6e1f00, #fec6b3);" id="cSurvivor' + i + '" onmouseenter="addShadow(\'cSurvivor' + i + '\')" onmouseleave="removeShadow(\'cSurvivor' + i + '\')">' +
'<img src="images/' + survivorPics[i] + '" class="card-img-top">' +
'<div class="card-body">' +
    '<h2 class="card-title" style="text-align: center; font-family: Georgia, \'Times New Roman\', Times, serif;">' + survivorNames[i] + '</h2>' +
    '<h5 style="text-align: center; font-family: Georgia, \'Times New Roman\', Times, serif;"><i>' + aliases[i] + '</i></h5>' +
    '<p class="card-text text-center my-3">' + survivorContents[i] + '</p>' +
    '<div class="accordion my-5" id="accordionFlushExample' + i + '">' +
        '<div class="accordion-item" style="background: linear-gradient(to bottom, #fdfcdc, #fff23d)">' +
            '<h2 class="accordion-header" id="flush-headingOne' + i + '">' +
                '<button class="accordion-button collapsed" style="background: linear-gradient(to right, #fdfa9f, #f56865); font-family: monospace" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne' + i + '" aria-expanded="false" aria-controls="flush-collapseOne' + i + '">' +
                    'Character Stats' +
                '</button>' +
            '</h2>' +
            '<div id="flush-collapseOne' + i + '" class="accordion-collapse collapse" aria-labelledby="flush-headingOne' + i + '" data-bs-parent="#accordionFlushExample' + i + '">' +
                '<div class="accordion-body" style="border: 3px solid black">' +
                    '<ul class="list-group">' +
                        '<li class="list-group-item" style="border: 2px solid black"><img src="images/health.jpg" class="img-fluid rounded-start" style="padding: 2px; margin-right: 5px; width: 50px;">' + survivorHealth [i] + '</li>' +
                        '<li class="list-group-item" style="border: 2px solid black"><img src="images/hunger.jpg" class="img-fluid rounded-start" style="padding: 2px; margin-right: 5px; width: 50px;">' + survivorHunger [i] + '</li>' +
                        '<li class="list-group-item" style="border: 2px solid black"><img src="images/sanity.jpg" class="img-fluid rounded-start" style="padding: 2px; margin-right: 5px; width: 50px;">' + survivorSanity [i] + '</li>' +
                        '<li class="list-group-item" style="border: 2px solid black">Favorite Food: ' + favoriteFoods[i] + '</li>' +
                    '</ul>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>' +
'</div>' +
'</div>' +
'</div>';
});

// This loop creates and appends cards to the cardBossContainer element (line 163)
bossNames.forEach((bossName, i) => {
var myBossContainer = document.getElementById("cardBossContainer");

myBossContainer.innerHTML +=
'<div class="col-lg-4 col-md-6 col-12 mb-4">' +
'<div class="card h-100" style="background: linear-gradient(to bottom, #6e1f00, #fec6b3);" id="cBoss' + i + '"onmouseenter="addShadow(\'cBoss' + i + '\')" onmouseleave="removeShadow(\'cBoss' + i + '\')">' +
    '<img src="images/' + bossPics[i] + '" class="card-img-top" >' +
    '<div class="card-body">' +
        '<h2 class="card-title" style="text-align: center; font-family: Georgia, \'Times New Roman\', Times, serif;">' + bossNames[i] + '</h2>' +
        '<p class="card-text text-center my-3">' + bossContents[i] + '</p>' +
        '<div class="accordion my-5" id="accordionFlushExampleBoss' + i + '">' +
            '<div class="accordion-item" style="background: linear-gradient(to bottom, #fdfcdc, #fff23d)">' +
                '<h2 class="accordion-header" id="flush-headingOneBoss' + i + '">' +
                    '<button class="accordion-button collapsed" style="background: linear-gradient(to right, #fdfa9f, #f56865); font-family: monospace" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOneBoss' + i + '" aria-expanded="false" aria-controls="flush-collapseOneBoss' + i + '">' +
                        'Boss Stats' +
                    '</button>' +
                '</h2>' +
                '<div id="flush-collapseOneBoss' + i + '" class="accordion-collapse collapse" aria-labelledby="flush-headingOneBoss' + i + '" data-bs-parent="#accordionFlushExampleBoss' + i + '">' +
                    '<div class="accordion-body" style="border: 3px solid black">' +
                        '<ul class="list-group">' +
                            '<li class="list-group-item" style="border: 2px solid black"><img src="images/health.jpg" class="img-fluid rounded-start" style="padding: 2px; margin-right: 5px; width: 50px;">' + bossHealth[i] + '</li>' +
                            '<li class="list-group-item" style="border: 2px solid black"><img src="images/attack.jpg" class="img-fluid rounded-start" style="padding: 2px; margin-right: 5px; width: 50px;">' + bossAttack[i] + '</li>' +
                        '</ul>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>' +
'</div>' +
'</div>';
});

function addShadow(id) {
document.getElementById(id).classList.add("custom-shadow");
}

function removeShadow(id) {
document.getElementById(id).classList.remove("custom-shadow");
}

// Switch between display none and block
var survivorDisplay = "none";
function expandSurvivorContent() {
var survivorContent = document.getElementById("survivorContent");
var btnSurvivorExpand = document.getElementById("btnSurvivorExpand");

if (survivorDisplay == "none") {
survivorContent.style.display = "block";
survivorDisplay = "block";
btnSurvivorExpand.innerHTML = "Collapse";
} else {
survivorContent.style.display = "none";
survivorDisplay = "none";
btnSurvivorExpand.innerHTML = "Expand";
}
}

var bossDisplay = "none";
function expandBossContent() {
var bossContent = document.getElementById("bossContent");
var btnBossExpand = document.getElementById("btnBossExpand");

if (bossDisplay == "none") {
bossContent.style.display = "block";
bossDisplay = "block";
btnBossExpand.innerHTML = "Collapse";
} else {
bossContent.style.display = "none";
bossDisplay = "none";
btnBossExpand.innerHTML = "Expand";
}
}

let isDarkMode = false;

document.getElementById('darkModeToggle').addEventListener('click', () => {
isDarkMode = !isDarkMode;
document.body.classList.toggle('dark-mode', isDarkMode);
updateStyles();
});

function updateStyles() {
const footer = document.querySelector('footer');

if (isDarkMode) {
document.querySelector('.navbar').classList.add('bg-dark', 'text-light');
document.querySelector('.navbar').classList.remove('bg-body-tertiary');
darkModeToggle.innerHTML = "Light Mode";
document.querySelectorAll('.card').forEach(card => {
    card.classList.add('bg-dark', 'text-light');
    card.classList.remove('bg-light');
});
footer.classList.add('footer');
} else {
document.querySelector('.navbar').classList.remove('bg-dark', 'text-light');
document.querySelector('.navbar').classList.add('bg-body-tertiary');
darkModeToggle.innerHTML = "Dark Mode";
document.querySelectorAll('.card').forEach(card => {
    card.classList.remove('bg-dark', 'text-light');
    card.classList.add('bg-light');
});
footer.classList.remove('footer');
}
}