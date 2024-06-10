
// selecting buttons
mobileMenuBtn = document.getElementById('hamburgerBtn');
backProjectBtn = document.getElementById('back-project');
bookMarkBtn = document.getElementById('bookmark')

closeModalBtn = document.getElementById('close-modal')
modal = document.getElementById('modal')



// Open Menu
mobileMenuBtn.addEventListener('click', () => {
    console.log('open Menu for Mobile ');

})


// back the project 
backProjectBtn.addEventListener('click', () => {
    console.log('backing the project')
    modal.classList.add('section' ,'modal');
})

// bookMark project 
bookMarkBtn.addEventListener('click', () => {
    console.log('bookmarked');
})


closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('section' ,'modal');

})