let screen = document.querySelector("#text") 

console.log(screen);

function insert(num) {
 screen.value+=num; 

}

function ans()
{
    let total = eval(screen.value);
    screen.value=total;
}