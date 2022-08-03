let obj = [
    { name: "react", img: "img/react.svg", pos: 0,frame: "data-framework=\"react\"" },
    { name: "react", img: "img/react.svg", pos: 0,frame: "data-framework=\"react\"" },
    { name: "angular", img: "img/angular.svg", pos: 0,frame: "data-framework=\"angular\"" },
    { name: "angular", img: "img/angular.svg", pos: 0,frame: "data-framework=\"angular\"" },
    { name: "ember", img: "img/ember.svg", pos: 0,frame: "data-framework=\"ember\"" },
    { name: "ember", img: "img/ember.svg", pos: 0,frame: "data-framework=\"ember\"" },
    { name: "vue", img: "img/vue.svg", pos: 0,frame: "data-framework=\"vue\"" },
    { name: "vue", img: "img/vue.svg", pos: 0,frame: "data-framework=\"vue\"" },
    { name: "backbone", img: "img/backbone.svg", pos: 0,frame: "data-framework=\"backbone\"" },
    { name: "backbone", img: "img/backbone.svg", pos: 0,frame: "data-framework=\"backbone\"" },
    { name: "aurelia", img: "img/aurelia.svg", pos: 0,frame: "data-framework=\"aurelia\"" },
    { name: "aurelia", img: "img/aurelia.svg", pos: 0,frame: "data-framework=\"aurelia\"" },
]

let testeArray = []

let posi = [13]

function embaralhar() {
    for (i = 0; i < obj.length; i++) {
        
        let possibleValue = -1
        

            while((possibleValue == -1)){
                
                value = getRandomInt(1,13)
                
                posicao = posi.indexOf(value)
                if(posicao < 0){
                    obj[i].pos = value
                    posi.push(value)
                    possibleValue++
                }else{
                    value = testAdd()
                    obj[i].pos = value
                    posi.push(value)
                    possibleValue ++
                }
                
                
        }
        
        

        
            
        
possibleValue --

    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }


function imprimir() {
    for (i = 0; i < obj.length; i++) {
        
    }
}



function testAdd(){
    for (j=1; j<= 12;j++){
        if (posi.indexOf(j) < 0) {
            return j;
        }
    }
}

function reorganizarLista(){
    for(i=1; i< 13; i ++){
        
        for(x=0;x < obj.length;x++){
           
            if(obj[x].pos == i){
                testeArray.push(obj[x])
            }
        }
    }
    
}


function enviarHtml(){
    let text = ""
    for(i=0;i <testeArray.length; i++){
        
        text += "<div class=\"memory-card\"" + testeArray[i].frame + "><img class=\"front-face\" src= " + testeArray[i].img + " alt=\"Face da Carta\"><img class=\"back-face\" src=\"img/js-badge.svg\" alt=\"Verso da Carta\"></div>"
        
    }

    console.log(text)
    document.getElementById("memory-game").innerHTML = text
}


embaralhar()
imprimir()
reorganizarLista()
enviarHtml()