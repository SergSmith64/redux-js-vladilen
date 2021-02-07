import './styles.css'

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

const tomLeftBtn = document.getElementById('tomLeft');
const tomRightBtn = document.getElementById('tomRight');

let state = 0;

let summa = 10;
let left = 5;
let right = summa - left;

// ___ оберну в функцию и вызову ее ниже ___
function render() {
	// ___ присваиваем счетчику значение ___
	counter.textContent = state.toString();
	lll.textContent = left.toString();
	rrr.textContent = right.toString();
}

addBtn.addEventListener('click', () => {
	state++;
	console.log("__state__ = ", state);
	render();
});

subBtn.addEventListener('click', () => {
	state--;
	console.log("__state__ = ", state);
	render();
});

asyncBtn.addEventListener('click', () => {
	setTimeout ( () => {
		state++;
		render();
	}, 2000)
});

themeBtn.addEventListener('click', () => {
	document.body.classList.toggle('dark');
});

tomLeftBtn.addEventListener('click', () => {
	if (left < summa) {
		left++;
		right--;
	  }
	console.log("__left__ = ", left);
	render();
});

tomRightBtn.addEventListener('click', () => {
	if (right < summa) {
		left--;
		right++;
	  }
	console.log("__right__ = ", right);
	render();
});

render();
