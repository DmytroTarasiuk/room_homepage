const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => nav.classList.toggle('active'))

/*Slider functionality*/ 
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const infoSlider = document.querySelector('.info-slider')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
    activeSlide++
  
    if (activeSlide > slides.length - 1) {
      activeSlide = 0
    }
    if(activeSlide == 0){
        infoSlider.innerHTML = `
    <div class="info-slider">
      <h1>Discover innovative ways to decorate</h1>
      <p>We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.</p>
      <span class="link">Shop now <img src="images/icon-arrow.svg" alt="arrow"></span>
    </div>
        `
    }
    if(activeSlide === 1) {
        infoSlider.innerHTML = `
    <div class="info-slider">
      <h1>We are available all across the globe</h1>
      <p> With stores all over the world, it's easy for you to find furniture for your home or place of business. 
      Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
      store locator. Any questions? Don't hesitate to contact us today.</p>
      <span class="link">Shop now <img src="images/icon-arrow.svg" alt="arrow"></span>
    </div>
        `
    }
    if(activeSlide === 2) {
        infoSlider.innerHTML = `
    <div class="info-slider">
      <h1>Manufactured with the best materials</h1>
      <p>Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
      to ensure that every product is made as perfect and as consistent as possible.</p>
      <span class="link">Shop now <img src="images/icon-arrow.svg" alt="arrow"></span>
    </div>
        `
    }
    setActiveSlide()
})
  
leftBtn.addEventListener('click', () => {
    activeSlide--
  
    if (activeSlide < 0) {
      activeSlide = slides.length - 1
    }
    if(activeSlide == 0){
        infoSlider.innerHTML = `
    <div class="info-slider">
      <h1>Discover innovative ways to decorate</h1>
      <p>We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.</p>
      <span class="link">Shop now <img src="images/icon-arrow.svg" alt="arrow"></span>
    </div>
        `
    }
    if(activeSlide === 1) {
        infoSlider.innerHTML = `
    <div class="info-slider">
      <h1>We are available all across the globe</h1>
      <p> With stores all over the world, it's easy for you to find furniture for your home or place of business. 
      Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
      store locator. Any questions? Don't hesitate to contact us today.</p>
      <span class="link">Shop now <img src="images/icon-arrow.svg" alt="arrow"></span>
    </div>
        `
    }
    if(activeSlide === 2) {
        infoSlider.innerHTML = `
    <div class="info-slider">
      <h1>Manufactured with the best materials</h1>
      <p>Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
      to ensure that every product is made as perfect and as consistent as possible.</p>
      <span class="link">Shop now <img src="images/icon-arrow.svg" alt="arrow"></span>
    </div>
        `
    }
    setActiveSlide()
})
  

  
  
function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'))
  
    slides[activeSlide].classList.add('active')
}