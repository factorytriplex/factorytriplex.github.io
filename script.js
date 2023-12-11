

let x = 0
let upgr = 1
let xp = 0
let lvl = 1
let strk = 0
let bl
let grams = 0
let ref = 0
let answered = false
let workers = 0
let drill = 0
let rebirths = 0


const upgrades = [
    {name: "No", cost: 0, multiplier: 1, power: [0,1]},
	{name: "Earthen", cost: 250, multiplier: 2, power: [0,1,2]},
    {name: "Novice", cost: 15000, multiplier: 3, power: [1,2,3]},
    {name: "Iron", cost: 150000, multiplier: 4, power: [1,2,3,4]},
    {name: "Bronze", cost: 5000000, multiplier: 4.5, power: [2,3,4,5,6,7]},
    {name: "Cobalt", cost: 10000000, multiplier: 5, power: [4,5,6,7]},
    {name: "Golden", cost: 100000000, multiplier: 6, power: [5,6,7,8]},
    {name: "Obsidian", cost: 1000000000, multiplier: 20, power: [6,7,8,9,10]},
    {name: "Diamond", cost: 100000000000, multiplier: 25, power: [10,11,12,13,14,15]},
    {name: "Tanzanite", cost: 10000000000000, multiplier: 40, power: [13,14,15]},
    {name: "Beryl", cost: 1000000000000000, multiplier: 80, power: [15,16]},
    {name: "Painite", cost: 100000000000000000, multiplier: 125, power: [16,17,18]},
    {name: "Godmatter", cost: 1500000000000000000000, multiplier: 2500, power: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]}
]

const rocks = [
    {name: "Naught", value: 0, xp: 0, rarity: "Common"},
    {name: "Stone", value: 1, xp: 1, rarity: "Common"},
    {name: "Coal Chunk", value: 3, xp: 2, rarity: "Common"},
    {name: "Iron Node", value: 7, xp: 5, rarity: "Common"},
    {name: "Bronze Chunk", value: 8, xp: 8, rarity: "Common"},
    {name: "Lead Node", value: 9, xp: 14, rarity: "Common"},
    {name: "Pyrite Chunk", value: 10, xp: 30, rarity: "Uncommon"},
    {name: "Nickel Node", value: 12, xp: 23, rarity: "Uncommon"},
    {name: "Alluminum Chunk", value: 15, xp: 33, rarity: "Uncommon"},
    {name: "Cobalt Node", value: 18, xp: 40, rarity: "Uncommon"},
    {name: "Mercury Soup", value: 22, xp: 500, rarity: "Uncommon"},
    {name: "Cadmium Chunk", value: 100, xp: 3000, rarity: "Uncommon"},
    {name: "Gold Node", value: 2000, xp: 15000, rarity: "Rare"},
    {name: "Obsidian", value: 2300, xp: 30000, rarity: "Rare"},
    {name: "Diamond", value: 15000, xp: 150000, rarity: "Rare"},
    {name: "Amethyst", value: 20000, xp: 35000, rarity: "Rare"},
    {name: "Tanzanite", value: 100000, xp: 9000000, rarity: "Exotic"},
    {name: "Red Beryl", value: 9500000, xp: 9999999, rarity: "Exotic"},
    {name: "Painite", value: 1000000000, xp: 9000000, rarity: "Godly"}

]

const levels = [
    {level: 1, xp: 100},
    {level: 2, xp: 300},
    {level: 3, xp: 25000},
    {level: 4, xp: 500000},
    {level: 5, xp: 2000000},
    {level: 6, xp: 25600000},
    {level: 7, xp: 999999999999}

]

const refiners = [
    {refiner: 1, cost: 100},
    {refiner: 1.5, cost: 500},
    {refiner: 2, cost: 1000},
    {refiner: 3, cost: 10000},
    {refiner: 4, cost: 100000},
    {refiner: 5, cost: 1000000},
    {refiner: 8, cost: 10000000},
    {refiner: 16, cost: 1000000000},
    {refiner: 32, cost: 10000000000000000}
]


window.onload = function() {
  x = parseInt(getCookie("x")) || 0;
  workers = parseInt(getCookie("workers")) || 0;
  lvl = parseInt(getCookie("lvl")) || 0;
  grams = parseInt(getCookie("grams")) || 0;
  upgr = parseInt(getCookie("spade")) || 1;
  drill = parseInt(getCookie("drill")) || 0;
  ref = parseInt(getCookie("ref")) || 1;
  rebirths = parseInt(getCookie("rebirths")) || 0;
}

// Save the variables to cookies when the page is about to close
window.onbeforeunload = function() {
  setCookie("x", x);
  setCookie("workers", workers);
  setCookie("lvl", lvl);
  setCookie("grams", grams);
  setCookie("upgr", upgr);
  setCookie("drill", drill);
  setCookie("ref", ref);
  setCookie("rebirths", rebirths);
}

function setCookie(name, value) {
  document.cookie = name + "=" + value + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

function getCookie(name) {
  var cookieName = name + "=";
  var cookieArray = document.cookie.split(';');
  for(var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while(cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1, cookie.length);
    }
    if(cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return null;
}



const formatCash = n => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};

function rebirth() {
    if (upgrades[upgr-1].name = "Godmatter") {
        x=0
        workers=0
        lvl=1
        grams=0
        upgr=1
        ref=0
        rebirths+=1
    }
}

function increase() {
    let rawOre = rocks[upgrades[upgr-1].power[Math.round(Math.random() * upgrades[upgr-1].power.length)]]
    let xx = rawOre.value
    grams += xx * upgrades[upgr-1].multiplier * lvl
    xp += rawOre.xp *upgrades[upgr-1].multiplier

    if (rawOre == bl) {strk++} else {strk = 0}
    bl = rawOre
    document.getElementById("results").innerHTML = `+ [${rawOre.rarity}] ${rawOre.name} (value: ${xx*upgrades[upgr-1].multiplier}, xp: ${rawOre.xp*upgrades[upgr-1].multiplier})`
    document.getElementById("streak").innerHTML = `streak: ${strk}x`
}
function upgrader() {
    if (upgr < upgrades.length) {
                    
		if (x >= upgrades[upgr].cost) {
			x-=upgrades[upgr].cost
            upgr++
		}
    }
}

function buyRefiner() {
    if (ref < refiners.length) {
        if (x >= refiners[ref+1].cost) {
            x -= refiners[ref+1].cost
            ref++
        }
    }
}

function sell() {
    x += grams * refiners[ref].refiner
    grams = 0
}

setInterval(function() {
    if (upgr<upgrades.length) {
		document.getElementById("upgrade").innerHTML = `${upgrades[upgr].name}: $${formatCash(upgrades[upgr].cost)}` 
    } else {
        document.getElementById("upgrade").innerHTML = `MAX`
    }

    for (i=0; i < levels.length; i++) {
        let l = 1
        if (xp >= levels[i].xp) {
            l++
        }
    }
    if (xp >= levels[lvl].xp) {
        xp=0
        lvl++
    }
    
    let filee = document.getElementById("file")
    if (lvl<levels.length) {
        filee.value = xp
        filee.max = levels[lvl].xp
    } else {
        filee.value = xp
        filee.max = levels[lvl].xp
    }

    document.getElementById("fileLabel").innerHTML = `Level: ${lvl}`
	document.getElementById("Cookies").innerHTML = `Bucks: ${formatCash(x)}`
    document.getElementById("Grams").innerHTML = `Nodes: ${formatCash(grams)}`
    
    document.getElementById("pickaxe").innerHTML = `${upgrades[upgr-1].name} Pickaxe`

    let list = document.getElementById("pickaxePower")
    list.innerHTML = "";
    for (i = 0; i < upgrades[upgr-1].power.length; ++i) {
        let li = document.createElement('li');
        li.innerText = rocks[upgrades[upgr-1].power[i]].name
        list.appendChild(li);
    }

    document.getElementById("refinerText").innerHTML = `Refiner Level ${ref}`
    document.getElementById("rlevel").innerHTML = `Refiner Level ${ref}`
    document.getElementById("reffects").innerHTML = `Refiner Effects: x${refiners[ref].refiner}`
    document.getElementById("refinerupgrade").innerHTML = `Upgrade Refiner: $${formatCash(refiners[ref+1].cost)}`
    
},100)

document.addEventListener("keypress", function(event) {
  if (event.keyCode == 32) {
    increase();
  }
});

let imageButton = document.getElementById("CookieButton")
let panel = document.getElementById("cenp")
imageButton.addEventListener("click", function() {
  // Create a new element to display the text
  var textElement = document.createElement("div");
  textElement.className = "gplus";
  textElement.innerText = "$";
  textElement.style.position = "absolute";
  textElement.style.left = Math.random() * panel.offsetWidth + "px";
  textElement.style.top = Math.random() * panel.offsetHeight + "px";
  textElement.style.zIndex = 9999;
    
  

  // Add the text element to the panel
  panel.appendChild(textElement);

  // Remove the text element after 1 second
  setTimeout(function() {
    panel.removeChild(textElement);
  }, 1000);
});
