
let elems = document.querySelectorAll('.descrip__rotulo');
let index;


for (let i =0; i< elems.length ; i++){
    elems[i].addEventListener('click', e => {
        if (index !== undefined) {
            e.target.classList.toggle('rotulo__show');
        }
        index = i;
    })
}
