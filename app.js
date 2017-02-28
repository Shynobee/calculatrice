var log = function log(data) {
    "use strict"
    window.console.log(data);
}


var calculatrice = function calculatrice() {
    "use strict";
    console.log("ready !!!");
    
    var btn, saisie2, saisie, add, sub, mult, div;
    
    btn = document.getElementById("btn");
    saisie = document.getElementById("ma_saisie");
    saisie2 = document.getElementById("ma_saisie2")
    
    log(btn);
    log(saisie);
    log(saisie2);
    
   // btn.onclick = function click() {
     //   log("click 1 !!!");
    //};
    
    function gererClicks() {
        log("click 2 !!!");
        log(saisie.value);
        var res = add(saisie);
        log(res)
    }
    
    add = function add(a, b){
        return a + b;
    };
    
  //  btn.onclick = gererClicks;
    
    //btn.addEventListener("click", gererClick)   
};