const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();
    
    rotateHands(seconds, mins, hour);
    displayDigital(mins, hour);
//    const template = `<div> ${hour} + ':' + ${mins} </div>`;
//    const div = document.createElement('div');
}

function rotateHands(seconds, mins, hour) {
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function displayDigital(mins, hour) {
    var newElem = document.createElement('h2');
    var content = document.createTextNode(`${hour}:${mins}`);
    newElem.appendChild(content);
    
    console.log(newElem);
    
    var parent = document.getElementById('digital');
    parent.replaceChild(newElem, parent.firstElementChild);
}

setInterval(setDate, 1000);

setDate();