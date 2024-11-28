document.querySelector('form').style.visibility = 'hidden';
document.querySelector('#signupbutton').addEventListener('click', ()=> {
    document.querySelector('form').style.visibility = 'visible';
});
const button = document.querySelector('button');
button.addEventListener('mouseover', (event) =>  {
    event.preventDefault();
    button.style.color = 'yellow';
    button.style.backgroundColor = 'blue';
})
