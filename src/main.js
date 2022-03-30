const inputCheckbox = document.querySelector('#input-checkbox');
const circleCheckbox = document.querySelector('#circle-checkbox');
const range = document.querySelector('#input-range');

circleCheckbox.addEventListener('click', () => {
    // circleCheckbox.classList.toggle('before:right-[4px]');
    // circleCheckbox.classList.toggle('before:left-[4px]');
    circleCheckbox.classList.toggle('before:translate-x-5');
});

range.addEventListener('change', updateRange);
range.addEventListener('mousemove', updateRange);
const doc = document.documentElement;
function updateRange() {
     // Modifico del valor de la variable
      doc.style.setProperty('--RANGE-VALUE', `${range.value}%`);
 }

