const openBtn = document.querySelector('.open');
const modal = document.querySelector('.modal-open');
const closeBtn = document.querySelector('.close');
const background = document.querySelector('.container');
const modalBackground = document.querySelector('.modal');


openBtn.addEventListener('click', function(){
    modal.classList.toggle('display');
    background.classList.toggle('active');
    modalBackground.classList.toggle('active');

})

closeBtn.addEventListener('click', function(){
    modal.classList.toggle('display');
    background.classList.toggle('active');
    modalBackground.classList.toggle('active');
})