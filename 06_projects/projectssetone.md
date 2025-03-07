# Projects related to DOM

## Projects link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1 solution

```javascript
const boxes = document.querySelectorAll('.button');
boxes.forEach(function(box){
  box.addEventListener('click' , function(e){
    const body = document.querySelector('body');
    body.style.backgroundColor = e.target.id;
  })
});

```

## Project 2 solution

```javascript
let result = document.getElementById('results');
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  let weight = parseInt(document.getElementById('weight').value);
  let height = parseInt(document.getElementById('height').value);
  if (height == '' || isNaN(height) || height <= 0) {
    result.innerHTML = `<span>Please enter a valid height</span>`;
  }else if (weight == '' || isNaN(weight) || weight <= 0) {
    result.innerHTML = `<span>Please enter a valid weight</span>`;
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = `<span>BMI is: ${bmi}: You are under weight
      </span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `<span>BMI is: ${bmi}: You have normal bmi</span>`;
    } else {
      result.innerHTML = `<span>BMI is: ${bmi}: You are overweight</span>`;
    }
  }
});

```

## Project 3 solution

```javascript
let clock = document.getElementById("clock");
setInterval(function(){
  clock.innerHTML = new Date().toLocaleTimeString();
}, 1000);
```