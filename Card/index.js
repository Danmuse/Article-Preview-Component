const shareBTN = document.getElementById('share')
const share = document.querySelector('.share')
const tooltip = document.querySelector('.tooltip')
const mainCard = document.querySelector('.mainCard')

shareBTN.addEventListener('click', () => {
  share.classList.toggle('active')
  tooltip.classList.toggle('active')
  mainCard.classList.toggle('active')
})
