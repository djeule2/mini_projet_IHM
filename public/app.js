
const weatherIcons = {
    "Rain": "wi wi-day-rain",
    "Clouds": "wi wi-day-cloudy",
    "Clear": "wi wi-day-sunny",
    "Snow": "wi wi-day-snow",
    "Mist": "wi wi-day-fog",
    "Drizzle": "wi wi-day-sleet",
    "Fog": "wi wi-day-fog"
}
function capitalize(str){
    return str[0].toUpperCase()+str.slice(1);
}

async function main(wthiIP= true){
    let ville;
   

    if(wthiIP){
        console.log("verifie IP");
        const ip = await fetch('https://api.ipify.org/?format=json')
        .then(resultat=> resultat.json())
        .then(json => json.ip)
        console.log(ip);
        

        ville = await fetch('https://freegeoip.app/json/'+ ip)
            .then(resultat => resultat.json())
            .then(json=> json.city)
            console.log(ville);
           
    }else{
        ville = document.querySelector('#ville').textContent;
        
    }

    const meteo= await fetch("http://api.openweathermap.org/data/2.5/weather?q="+ville+"&appid=ba99412d31367a2f60169d905ef3b403&units=metric")
        .then(resultat => resultat.json())
        .then(json =>json)
        console.log(meteo);
    

    displayWeatherInfos(meteo)

}

function displayWeatherInfos(data){
    const name = data.name;
    const temperature = data.main.temp;
    const conditions = data.weather[0].main;
    const description = data.weather[0].description;
    //const icon = data.weather[0].icon;

    document.querySelector('#ville').textContent= name;
    document.querySelector('#temperature').textContent=Math.round(temperature);
    document.querySelector('#conditions').textContent = capitalize(description);
    document.querySelector('i.wi').className= weatherIcons[conditions];
   
   // document.box3.className=conditions.toLowerCase();
}

const ville = document.querySelector('#ville');
ville.addEventListener('click', ()=>{
    ville.contentEditable = true;
});
ville.addEventListener('keydown', (e)=>{
    if(e.keyCode === 13){
        e.preventDefault();
        ville.contentEditable = false;
        main(false);
    }
})
main();