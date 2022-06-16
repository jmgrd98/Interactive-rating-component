
const submit = document.getElementById('submit')

submit.addEventListener("click", select)

function select(){
    const element = document.getElementsByTagName('label')

element.style.backgroundColor = "hsl(25, 97%, 53%)";
element.style.opacity = 1;


}

