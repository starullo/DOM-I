window.onload = timer;

function timer() {
const tens = document.getElementById('secondTens');
const ones = document.getElementById('secondOnes');
const hund = document.getElementById('msHundreds');
const thou = document.getElementById('msTens');
let tensCount = 0;
let onesCount = 0;
let hundCount = 0;
let thouCount = 0;

setInterval(()=>{
tensCount++;
tens.textContent = tensCount;
}, 100);
if (tensCount === 100) {
    clearInterval();
}
};