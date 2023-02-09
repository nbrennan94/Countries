class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
    DisplayColor(){
        document.getElementById('Color1').style.backgroundColor = this.colors[0];
        document.getElementById('Color2').style.backgroundColor = this.colors[1];
        document.getElementById('Color3').style.backgroundColor = this.colors[2];
        document.getElementById('CountryName').innerText = this.name;
        document.getElementById('OfficialLanguage').innerText = this.lang;
        document.getElementById('HelloWorld').innerText = this.greeting;
    }
}

let usa = new Country("United States of America", "English", "Hello World!!", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let egypt = new Country("Egypt", "Arabic", "Marhaban Bialealam", ["red", "black", "white"]);
let france = new Country("France", "French", "Bonjour le monde!", ["darkblue", "white", "red"]);
let ireland = new Country("Ireland", "Irish and English", "Dia duit ar domhan!", ["green", "white", "orange"]);
let japan = new Country("Japan", "Japanese", "Kon'nichiwa sekai", ["white", "red", "red"]);


function SwitchCountry() {
    let input = document.querySelector("#CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
        let img = document.getElementById('flag');
            let imageUrl = img.getAttribute('src')
            img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png");
    }
    else if (input ==="Mexico") {
        country = mexico;
        let img = document.getElementById('flag');
            let imageUrl = img.getAttribute('src')
            img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/640px-Flag_of_Mexico.svg.png");
    }
    else if (input === "Egypt") {
        country = egypt;
        let img = document.getElementById('flag');
            let imageUrl = img.getAttribute('src')
            img.setAttribute('src', "https://www.countryaah.com/wp-content/uploads/2020/08/Flag-of-Egypt.jpg");
    }
    else if (input === "France") {
        country = france;
        let img = document.getElementById('flag');
            let imageUrl = img.getAttribute('src')
            img.setAttribute('src', "https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg");
    }
    else if (input === "Ireland") {
        country = ireland;
        let img = document.getElementById('flag');
            let imageUrl = img.getAttribute('src')
            img.setAttribute('src', "https://cdn.britannica.com/33/1733-004-5BA407D6/FLAG-Ireland.jpg");
    }
    else if (input === "Japan") {
        country = japan;
        let img = document.getElementById('flag');
            let imageUrl = img.getAttribute('src')
            img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png");
    }
    country.DisplayColor();

}