function procurar_pizza() {
    let input = document.getElementById('barra-type').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('pizzas');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}