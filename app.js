const CA_DAMAGE = 100;
const IM_DAMAGE = 200;
const BW_DAMAGE = 300;
const SW_DAMAGE = 400;

const CA_PHRASE = "\"Avengers Assemble!\"";
const IM_PHRASE = "\"I am Iron Man!\"";
const BW_PHRASE = "\"I'm Black Widow, I'm cool!!\"";
const SW_PHRASE = "\"I'm also cool\"";

var thanosDamage = 0;

function dealDamage(damage, phrase) {
    var damageDiv = document.createElement("div");
    var phraseDiv = document.createElement("div");

    thanosDamage += damage;

    damageDiv.innerHTML=thanosDamage;
    phraseDiv.innerHTML=phrase
    document.body.querySelector(".totalDamage").appendChild(damageDiv);
    document.body.querySelector(".phrase").appendChild(phraseDiv);
}

// CAPTAIN AMERICA
document.body.querySelector(".ca").addEventListener("click", function() {
    document.body.querySelector(".totalDamage").innerHTML="";
    document.body.querySelector(".phrase").innerHTML="";
    dealDamage(CA_DAMAGE, CA_PHRASE);
});

// IRON MAN
document.body.querySelector(".im").addEventListener("click", function() {
    document.body.querySelector(".totalDamage").innerHTML="";
    document.body.querySelector(".phrase").innerHTML="";
    dealDamage(IM_DAMAGE, IM_PHRASE);
});

// BLACK WIDOW
document.body.querySelector(".bw").addEventListener("click", function() {
    document.body.querySelector(".totalDamage").innerHTML="";
    document.body.querySelector(".phrase").innerHTML="";
    dealDamage(BW_DAMAGE, BW_PHRASE);
});

// SCARLET WITCH
document.body.querySelector(".sw").addEventListener("click", function() {
    document.body.querySelector(".totalDamage").innerHTML="";
    document.body.querySelector(".phrase").innerHTML="";
    dealDamage(SW_DAMAGE, SW_PHRASE);
});

// RESET
document.body.querySelector(".reset").addEventListener("click", function() {
    document.body.querySelector(".totalDamage").innerHTML="";
    document.body.querySelector(".phrase").innerHTML="";
    thanosDamage = 0;
});