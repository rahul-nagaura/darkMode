let btnDark = document.getElementById("btnDark");
let color = 'white';


btnDark.addEventListener('click', () =>{
    if(color === 'white'){
        document.body.style.backgroundColor = 'black';
        btnDark.innerText = 'Light Mode';
        btnDark.style.color = 'white';
        btnDark.style.backgroundColor = 'red';
        color = 'black';
    }
    else{
        document.body.style.backgroundColor = 'white';
        btnDark.innerText = 'Dark mode';
        btnDark.style.color  = 'white';
        btnDark.style.backgroundColor = 'black';
        color = 'white';

    }
})

// For Removing body Active class 
document.body.classList.remove("active");
