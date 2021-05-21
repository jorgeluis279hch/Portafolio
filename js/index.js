
let elems = document.querySelectorAll('.descrip__rotulo');
let index;
const d = document;

const toggRotulos = () => {
    for (let i =0; i< elems.length ; i++){
        elems[i].addEventListener('click', e => {
            if (index !== undefined) {
                e.target.classList.toggle('rotulo__show');
            }
            index = i;
        })
    }
}

toggRotulos();


const goTop = () => scroll(0, 0);


