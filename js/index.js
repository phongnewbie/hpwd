const title = document.querySelector('.title')
const text = `I Have Something for you my girl`.split('')

title.style.display = 'flex'
title.style.flexWrap = 'wrap'
title.style.justtifyContent = 'center'
title.style.gap = '0.5 rem'

for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`
  } else {
    title.innerHTML += `<span style='width: 1rem'></span>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});

// Delivery logic: mark walker arrived, then enable click on gift
window.addEventListener('DOMContentLoaded', () => {
  const walker = document.querySelector('.walker')
  const gift = document.querySelector('.gift')
  if (!walker || !gift) return

  // After walk-in animation ends, allow interaction
  walker.addEventListener('animationend', (e) => {
    if (e.animationName === 'walk-in') {
      // Sequence: arrived -> placed (gift centered + person fades) -> cleared (show effects)
      walker.classList.add('arrived')
      requestAnimationFrame(() => {
        walker.classList.add('placed')
        setTimeout(() => {
          walker.classList.add('cleared')
        }, 450) // wait for fade-out before showing effects
      })
    }
  })

  // Click gift to navigate
  gift.addEventListener('click', () => {
    const beam = document.querySelector('.transition-beam')
    const fade = document.querySelector('.transition-fade')
    if (beam) {
      beam.classList.add('active')
      setTimeout(() => {
        if (fade) fade.classList.add('active')
        setTimeout(() => {
          window.location.href = 'flower.html'
        }, 900) // wait for white fade
      }, 1200) // wait for slower beam first
    } else {
      window.location.href = 'flower.html'
    }
  })
})