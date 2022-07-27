let number = document.getElementsByClassName('number');

number.addEventListener("click", () => {
    number.setAttribute('value', 'checked');
    number.style.backgroundColor = 'hsl(25, 97%, 53%)';
})

function select(){
    let number = document.getElementsByClassName('number');
    let label = document.getElementsByTagName('label');

    number.setAttribute('value', 'checked');
    number.style.backgroundColor = 'hsl(25, 97%, 53%)';
}

