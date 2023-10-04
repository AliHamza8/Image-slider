const btnPre = document.querySelector('.prev')
const btnNext = document.querySelector('.next')
const section = document.querySelector('section')
const image1 = document.querySelector('.image-1')
const image2 = document.querySelector('.image-2')
const image3 = document.querySelector('.image-3')

image1.style.display = 'block'
btnNext.addEventListener('click', function() {
    
    if(image1.style.display === 'block') {
        image1.style.display = 'none'
        image2.style.display = 'block'
        image3.style.display = 'none'
    }

    else if(image2.style.display === 'block') {
        image1.style.display = 'none'
        image2.style.display = 'none'
        image3.style.display = 'block'
    }
    
    else if(image3.style.display === 'block') {
        image1.style.display = 'block'
        image2.style.display = 'none'
        image3.style.display = 'none'
    }
})


btnPre.addEventListener('click', function() {
    
    if(image1.style.display === 'block') {
        image1.style.display = 'none'
        image2.style.display = 'none'
        image3.style.display = 'block'
    }

    else if(image2.style.display === 'block') {
        image1.style.display = 'block'
        image2.style.display = 'none'
        image3.style.display = 'none'
    }
    
    else if(image3.style.display === 'block') {
        image1.style.display = 'none'
        image2.style.display = 'block'
        image3.style.display = 'none'
    }
})