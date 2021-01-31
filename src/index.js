import './styles.css'

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');

let state = 0;

// ___ оберну в функцию и вызову ее ниже ___
function render() {
    // ___ присваиваем счетчику значение ___
    counter.textContent = state.toString();

    // console.log("__счетчик__ = ", state);
}

addBtn.addEventListener('click', () => {
    state++;
    render();
});

subBtn.addEventListener('click', () => {
    state--;
    render();
});

render();
