
const flexbox = document.querySelector('.flexbox');

function createDivLogic() {

    for (let index = 0; index < 16 * 16; index++) {
        const createDiv = document.createElement('div');
        flexbox.appendChild(createDiv);
        createDiv.innerText = index;
    };
};

createDivLogic();


const divRandomColor = () => {
    const color = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + color.slice(0, 6);
}

flexbox.querySelectorAll('.flexbox > div').forEach(div => {

    div.classList.add('hover-effect');
    div.addEventListener('mouseover', () => {
        div.classList.add('hovered');
        div.style.backgroundColor = divRandomColor();

    });
    div.addEventListener('mouseout', () => {
        div.classList.remove('hovered')
        div.style.background = '';
    });
});

