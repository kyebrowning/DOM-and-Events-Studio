// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeoff = null;
let flightStatus = null;
let dashboardBackground = null;
let shuttleHeight = null;
let landing = null;

function init(){
    takeoff = document.getElementById('takeoff');
    flightStatus = document.getElementById('flightStatus');
    dashboardBackground = document.getElementById('shuttleBackground');
    shuttleHeight = document.getElementById('spaceShuttleHeight');
    landing = document.getElementById('landing');


    takeoff.addEventListener('click', function(event){
        let confirmation = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if(confirmation){
            flightStatus.innerHTML = 'Shuttle in flight.';
            dashboardBackground.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = 10000;
        };
    });

    landing.addEventListener('click', function(event){
        let alert = window.alert('The shuttle is landing. Landing gear engaged.');

        flightStatus.innerHTML = 'The shuttle has landed.';
        dashboardBackground.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = 0;

    });
}

window.onload = init;