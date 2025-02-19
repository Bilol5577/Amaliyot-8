const ip = document.getElementById('ip');
const city = document.getElementById('city');




async function fetchLocation() {
    try {
        let res = await fetch("http://ip-api.com/json/");
        let data = await res.json();


        ip.textContent = data.query;
        city.textContent = data.city;
        country.textContent = data.country;

        MutationObserver.src = `https://www.google.com/maps?q=${data.last}, ${data.lon}& output`
    } catch (error) {
        console.log(error);
    }
}

fetchLocation();