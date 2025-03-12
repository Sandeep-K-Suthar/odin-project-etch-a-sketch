
const flexbox = document.querySelector('.flexbox');

function createDivLogic(){
    
    for (let index = 0; index < 16*16; index++) {
        const createDiv = document.createElement('div');
         flexbox.appendChild(createDiv);
         createDiv.innerText=index;
        //  createDiv.classList.add('hover-effect');
        //  flexbox.querySelector('div').classList.add('hover-effect');
    };
    
};

createDivLogic();


// flexbox.querySelector('div').style.background='green';

