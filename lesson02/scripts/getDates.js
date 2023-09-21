const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('lastUpdated').textContent = new Date().toLocaleDateString('en-Us', options);

const divs = document.querySelectorAll('div')
