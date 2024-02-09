const btn = document.querySelector('.modal_handler')
const modal = document.querySelector('.modal')
const cross = document.querySelector('.cross')

btn.addEventListener('click', modalHandler)

function modalHandler() {
	modal.style.display = 'block'
}

cross.addEventListener('click', modalClose)

function modalClose() {
	modal.style.display = 'none'
}
