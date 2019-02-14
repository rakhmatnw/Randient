let generate = document.querySelector('#generate');
let save = document.querySelector('#save');
let code = document.querySelector('.code');
let body = document.body;

let savedButton = document.querySelector('button.saved');
let savedGradient = document.querySelector('.saved-gradient');

let hexArray = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let angleArray = [0,45,90,120,135,180,225,270,315];

let gradientAngle;
let gradientCode;

let gradientList = document.querySelector('.gradient-list');

let storage = window.localStorage;

showGradient();

function showGradient(){
    if(storage.length == 0){
        gradientList.innerHTML = 'Nothing Saved Here';
    }else{
        gradientList.innerHTML = '';

        for(let i=1; i<=storage.length; i++){
            let gradientData = storage.getItem(i);

            gradientList.innerHTML += `
            <div class="gradient-item" style="background-image:${gradientData}"></div>
            `;
        }
    }

    // console.log(storage.getItem(1));
}


generate.addEventListener('click', function(){

    let firstHex = '#';
    let secondHex = '#';

    for(let i=0; i<6; i++){
        firstHex += hexArray[Math.floor(Math.random()*15)];
        secondHex += hexArray[Math.floor(Math.random()*15)];
    }

    gradientAngle = angleArray[Math.floor(Math.random()*9)]

    gradientCode = `linear-gradient(${gradientAngle}deg, ${firstHex} 0%, ${secondHex} 100%)`;
    
    body.style.backgroundImage = gradientCode;
    code.innerHTML = gradientCode;

});

save.addEventListener('click', function(){
    // Set key to be automatic according to storage.length
    let key = storage.length+1;
    // Insert data to Local Storage
    storage.setItem(key, gradientCode);
    // Give feedback after insert
    alert('Gradient Saved');
    showGradient();    
});

savedButton.addEventListener('click', function(){
    // Change Saved Button Position
    if(savedButton.style.left == '0px' || savedButton.style.left == 0){      
        savedButton.style.left = '250px';
        savedGradient.style.left = '0';
    }else{
        savedButton.style.left = '0';
        savedGradient.style.left = '-250px';
    }
});