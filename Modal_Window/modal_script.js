let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnclosemodal = document.querySelector('.close-modal');
let btnsopenmodal = document.querySelectorAll('.show-modal');

let openModal = function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }

let closeModal = function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }

for(let i=0; i<btnsopenmodal.length; i++)
    btnsopenmodal[i].addEventListener('click', openModal);

btnclosemodal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});