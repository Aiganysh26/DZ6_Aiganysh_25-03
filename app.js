const input = document.querySelector('input')
const plusBtn = document.querySelector('.plusBtn')
const minusBtn = document.querySelector('.minusBtn')
  plusBtn.onclick = () => {input.value++}
  minusBtn.onclick = () => {input.value--}