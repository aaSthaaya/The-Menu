// const countElement = document.querySelector('#count');
// let count = 0;

// document.querySelector('#increase').addEventListener('click', () => {
//     count++;
//     countElement.textContent = count;
// });

// document.querySelector('#decrease').addEventListener('click', () => {
//     count--;
//     countElement.textContent = count;
// });

// document.querySelector('#reset').addEventListener('click', () => {
//     count = 0;
//     countElement.textContent = count;
// });

// let total = 0;

// document.querySelector('#add').addEventListener('click', () => {
//   const inputValue = prompt('Enter a number to add:');
//   const value = parseInt(inputValue);
//   if (!isNaN(value)) {
//     total += value;
//     document.querySelector('#total').textContent = total;
//   } else {
//     alert('Invalid input! Please enter a valid number.');
//   }
// });

let total = 0;
let count = 0;

// document.getElementById('add').addEventListener('click', () => {
//   const inputValue = prompt('Enter a number to add:');
//   const value = parseInt(inputValue);
//   if (!isNaN(value)) {
//     total += value;
//     document.getElementById('total').textContent = total;
//   } else {
//     alert('Invalid input! Please enter a valid number.');
//   }
// });

document.querySelector('#decrease').addEventListener('click', () => {
    count--;
    document.querySelector('#count').textContent = count;
});

document.querySelector('#increase').addEventListener('click', () => {
    count++;
    document.querySelector('#count').textContent = count;
});

document.querySelector('#reset').addEventListener('click', () => {
    count = 0;
    total = 0;
    document.querySelector('#count').textContent = count;
    document.querySelector('#total').textContent = total;
});
document.querySelector('#add').addEventListener('click', () => {
    total += count;
    document.querySelector('#total').textContent = total;
});