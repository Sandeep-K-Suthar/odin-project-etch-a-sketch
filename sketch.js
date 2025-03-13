
const flexbox = document.querySelector('.flexbox');

function createDivLogic() {

    for (let index = 1; index <= 16 * 16; index++) {
        const createDiv = document.createElement('div');
        createDiv.innerText = index;
        flexbox.appendChild(createDiv);

    };
};

createDivLogic();


const divRandomColor = () => {
    const color = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + color.slice(0, 6);
}

flexbox.querySelectorAll('.flexbox > div').forEach((div, index) => {

    div.style.color = 'rgba(0, 0, 0, 0)';
    div.style.borderColor = 'black'
    div.classList.add('hover-effect');

    let hoverCount = 0;
    let indexOpacity = 0;

    div.addEventListener('mouseover', () => {
        hoverCount++;
        indexOpacity += 0.2;
        div.classList.add('hovered');
        div.style.backgroundColor = divRandomColor();
        if (hoverCount < 5 && index) {
            div.style.color = `rgba(0, 0, 0, ${indexOpacity})`;
        };

    });
    div.addEventListener('mouseout', () => {

        div.classList.remove('hovered');
        if (div.style.background != 'black') {
            div.style.background = '';
        };
    });
});

