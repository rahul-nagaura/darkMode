let btn = document.getElementById("btnDark");
let count = 0;
document.body.classList.remove("active");
btn.addEventListener('click', () => {
    count++;
    btnCount();
})

btnCount = () => {
    if(count%2 != 0){
        document.body.classList.add('active');
    }
    else{
        document.body.classList.remove("active");
    }
}