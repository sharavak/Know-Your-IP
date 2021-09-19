const container = document.querySelector('main');
const ref = document.createElement('h1');
const button = document.querySelector('button');
const userInput = document.querySelector('#address');
const user = document.querySelector('input');

const yourIP = async () => {
    container.textContent = '';
    try {
        const data = await fetch('http://ip-api.com/json/');
        const parsed = await data.json();
        update(parsed);
    }
    catch (e) {
        console.log(e);
        ref.textContent = 'Try Again in some time';
    }
}

function update(parsed) {
    if (parsed.status === 'fail') {
        alert('Invalid IP address');
    }
    else {
        container.style.backgroundColor = 'rgb(108 ,202 ,137)';
    container.style.transition = '2s ease';
        const IP = document.createElement('h1');
        const country = document.createElement('p');
        const state = document.createElement('p');
        const city = document.createElement('p');
        const lat = document.createElement('p');
        const lon = document.createElement('p');
        const ISP = document.createElement('p');
        const region = document.createElement('p');
        styles(IP)
        IP.textContent = `IP address is:${parsed.query}`;
        country.textContent = `Country:${parsed.country}`;
        state.textContent = `State:${parsed.regionName}`;
        region.textContent = `State code:${parsed.region}`
        city.textContent = `City:${parsed.city}`;
        lat.textContent = `Latitude: ${parsed.lat}`;
        lon.textContent = `Longitude: ${parsed.lon}`;
        ISP.textContent = `ISP provider: ${parsed.isp}`;
        container.append(IP, country, state, region, city, lat, lon, ISP);
    }
}

button.addEventListener('click', yourIP);

userInput.addEventListener('click', function () {
    container.textContent = '';
    container.style.backgroundColor = '';

    if (user.value === '') {
        alert('Enter a Valid IP Address');
    }
    else {
        const userIP = async () => {
            try {
                const data = await fetch(`http://ip-api.com/json/${user.value}`);
                const parsed = await data.json();
                update(parsed);
            }
            catch (e) {
                ref.textContent = 'Try Again in some time';
            }
        }
        userIP();
    }
   
})

function styles(IP) {
    IP.style.color = 'white';
    IP.style.fontSize = '1.5rem';
    IP.style.fontWeight = '300';
    IP.style.fontFamily = 'Barlow Condensed, sans-serif';
    IP.style.textAlign = 'center';
}