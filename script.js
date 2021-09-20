const container = document.querySelector('main');
const ref = document.createElement('h1');
const button = document.querySelector('button');
const userInput = document.querySelector('#address');
const user = document.querySelector('input');
ref.style.color = 'white';
ref.style.fontSize = '1.3rem';
ref.style.fontFamily = 'Barlow Condensed, sans-serif';

const yourIP = async () => {
    container.textContent = '';
    try {
        ref.textContent = '';
        const data = await fetch('https://ipapi.co/json/');
        console.log(data)
        const parsed = await data.json();
        update(parsed);
    }
    catch (e) {
        ref.textContent = 'Try again! something happened';
        container.append(ref)
    }
}

function update(parsed) {
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
        IP.textContent = `IP address is:${parsed.ip}`;
        country.textContent = `Country:${parsed.country_name}`;
        state.textContent = `State:${parsed.region_code}`;
        region.textContent = `State code:${parsed.region}`
        city.textContent = `City:${parsed.city}`;
        lat.textContent = `Latitude: ${parsed.latitude}`;
        lon.textContent = `Longitude: ${parsed.longitude}`;
        ISP.textContent = `ISP provider: ${parsed.org}`;
        container.append(IP, country, state, region, city, lat, lon, ISP);
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
                ref.textContent = '';
                const data = await fetch(`https://ipapi.co/json/${user.value}`);
                const parsed = await data.json();
                update(parsed);
            }
            catch (e) {
                ref.textContent = 'Try again! something happened';
                container.append(ref)
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
    IP.style.marginTop = '0px';
}
