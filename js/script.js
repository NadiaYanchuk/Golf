//Paralax BALL
let ballScroll = false;
let paralaxTitles = document.querySelectorAll('.paralax-title');
const scrollInProgress = () => {
  ballScroll = true
}
const raf = () => {
  if(ballScroll) {
    paralaxTitles.forEach((element, index) => {
      element.style.transform = "translateX("+ window.scrollY / 10 + "%)"
    })
    ballScroll = false;
  }
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress)

//Add 
function AddBlock() {
  document.getElementById('show-more').style.display = 'none';
  document.getElementById('coaches-new').style.display = 'flex';
}

//FAQ
const items = document.querySelectorAll(".accordion button");
function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}
items.forEach(item => item.addEventListener('click', toggleAccordion));
