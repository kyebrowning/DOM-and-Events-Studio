// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeoff = null;
let flightStatus = null;
let dashboardBackground = null;
let shuttleHeight = null;
let landing = null;
let abort = null;
let leftButton = null;
let upButton = null;
let downButton = null;
let rightButton = null;
// let directionals = null;
let rocketImage = null;
let offsetLeft = 0;
let offsetUp = 0;
let shuttleButtonHeight = 0;

function init(){
    takeoff = document.getElementById('takeoff');
    flightStatus = document.getElementById('flightStatus');
    dashboardBackground = document.getElementById('shuttleBackground');
    shuttleHeight = document.getElementById('spaceShuttleHeight');
    landing = document.getElementById('landing');
    abort = document.getElementById('missionAbort');
    leftButton = document.getElementById('leftButton');
    rightButton = document.getElementById('rightButton');
    upButton = document.getElementById('upButton');
    // directionals = document.getElementsByClassName('directions');
    rocketImage = document.getElementById('rocket');

    



    takeoff.addEventListener('click', function(event){
        let confirmation = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if(confirmation){
            flightStatus.innerHTML = 'Shuttle in flight.';
            dashboardBackground.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = 10000;
        };
    });

    landing.addEventListener('click', function(event){
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed.';
        dashboardBackground.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = 0;

    });

    abort.addEventListener('click', function(event){
        let abortConfirm = window.confirm('Confirm that you want to abort the mission.');
        if(abortConfirm){
            flightStatus.innerHTML = 'Mission aborted.';
            dashboardBackground.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = 0;
        };
    }); 

    leftButton.addEventListener('click', function(event){
        offsetLeft += 10;
        rocketImage.style.position = 'relative';
        rocketImage.style.left = (offsetLeft)+'px';
    });

    rightButton.addEventListener('click', function(event){
        offsetLeft -= 10;
        rocketImage.style.position = 'relative';
        rocketImage.style.left = (offsetLeft)+'px';
    });

    upButton.addEventListener('click', function(event){
        offsetUp -= 10;
        shuttleButtonHeight += 10000;
        rocketImage.style.position = 'relative';
        rocketImage.style.top = (offsetUp)+'px';
        shuttleHeight.innerHTML = shuttleButtonHeight;
    });


}

window.onload = init;