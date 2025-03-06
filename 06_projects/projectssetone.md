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