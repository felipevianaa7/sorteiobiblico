let opca = document.querySelector(`input#primeiro`);
let opcb = document.querySelector(`input#segundo`);

function sortear() {
    let res = document.querySelector(`div#res`);    
    let velho = ['Gênesis','Êxodo','Levítico','Números','Deuteronômio','Josué','Juízes','Rute','1 Samuel','2 Samuel','1 Reis','2 Reis','1 Crônicas','2 Crônicas','Esdras','Ester','Jó','Salmos','Provérbios','Eclesiastes','Cânticos','Isaías','Jeremias','Lamentações','Ezequiel','Daniel','Oséias','Joel','Amós','Obadias','Jonas','Miquéias','Naum','Habacuque','Sofonias','Ageu','Zacarias','Malaquias'];   
    let novo = ['Mateus','Marcos','Lucas','João','Atos','Romanos','1 Coríntios','2 Coríntios','Gálatas','Efésios','Filipenses','Colossenses','1 Tessalonicenses','2 Tessalonicenses','1 Timóteo','2 Timóteo','Tito','Filemon','Hebreus','Tiago','1 Pedro','2 Pedro','1 João','2 João','3 João','Judas','Apocalipse'];
    let completo = ['Gênesis','Êxodo','Levítico','Números','Deuteronômio','Josué','Juízes','Rute','1 Samuel','2 Samuel','1 Reis','2 Reis','1 Crônicas','2 Crônicas','Esdras','Ester','Jó','Salmos','Provérbios','Eclesiastes','Cânticos','Isaías','Jeremias','Lamentações','Ezequiel','Daniel','Oséias','Joel','Amós','Obadias','Jonas','Miquéias','Naum','Habacuque','Sofonias','Ageu','Zacarias','Malaquias','Mateus','Marcos','Lucas','João','Atos','Romanos','1 Coríntios','2 Coríntios','Gálatas','Efésios','Filipenses','Colossenses','1 Tessalonicenses','2 Tessalonicenses','1 Timóteo','2 Timóteo','Tito','Filemon','Hebreus','Tiago','1 Pedro','2 Pedro','1 João','2 João','3 João','Judas','Apocalipse'];
    if(!opca.checked){
        window.alert(' Por favor selecione uma das opções abaixo');
    }    
    if (opca.checked) {
        res.innerHTML = `${velho[Math.floor(Math.random() * velho.length)]}`;
        document.getElementById("res").style.background = '#ffe6f2';
    } else if(opcb.checked) {
        res.innerHTML = `${novo[Math.floor(Math.random() * novo.length)]}`;
        document.getElementById("res").style.background = '#ffe6f2';
    } if(opca.checked && opcb.checked) {       
        res.innerHTML = `${completo[Math.floor(Math.random() * completo.length)]}`;
        document.getElementById("res").style.background = '#ffe6f2';
    }
}
