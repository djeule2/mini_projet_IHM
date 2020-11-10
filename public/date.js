var heuresDiv = document.querySelector('.heures')
var dateDiv = document.querySelector('.dates')

var affichageHeure = function(){
    var today, annee, listeMois, mois, listeJours, jourNumero,
    jourNom, heures, minutes, secondes, deuxChiffres;

    //recupérer la date actuelle
    today = new Date();
    
    //Recupérer l'annee
    annee = today.getFullYear();

    listeMois= ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December" ];
    mois = listeMois[today.getMonth()];

    //recupérer le numéro du jour du mois
    jourNumero = today.getDate();

    listeJours = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    jourNom = listeJours[today.getDay()];

    //Aficher les heures, minute et seconde toujours avec deux chiffre

    deuxChiffres = function(element){
        if(element < 10){
            return element = "0" + element;
        }else{
            return element;
        }
    }

    heures = deuxChiffres(today.getHours());

    minutes = deuxChiffres(today.getMinutes());

    secondes = deuxChiffres(today.getSeconds());

    //affichage dans nos div html
    heuresDiv.textContent = heures + ":" + minutes+ ":" + secondes;
    dateDiv.textContent = jourNom + ", "+ jourNumero+ " "+mois+" "+annee;

    setTimeout(affichageHeure, 1000);

} 

affichageHeure();
