// Информация
// function openbox(id) {

// display = document.getElementById(id).style.display;

//     if (display=='none') {
//         document.getElementById(id).style.display='flex';
//         display.classList.add('active')

//     } else{

//         document.getElementById(id).style.display='none';
//     }
// }



// Кнопка "Читать далее" открывает осноную инфомацию об услуге.
const readMoreBtn = document.querySelector('.service-item__btn')
const readMore = document.querySelector('.service-item__text')
 
readMoreBtn.addEventListener('click', function(){
     
    readMore.classList.toggle('service-item__text-active')
    readMoreBtn.classList.toggle('service-item__btn-active')
})



// Кнопка "Читать далее" открывает дополнительные бренды
const brandsList = document.querySelector('.service-brands-tab__list')
const brandsBtn = document.querySelector('.service-brands-tab__btn-read')

brandsBtn.addEventListener('click', function(){

    brandsList.classList.toggle('service-brands-tab__list-active')
    brandsBtn.classList.toggle('service-brands-tab__btn-read-active')
})



// Кнопка "Читать далее" открывает список ремонт какой техники возможен
const typeList = document.querySelector('.service-type-tab__list')
const typeBtn = document.querySelector('.service-type-tab__btn-read')

typeBtn.addEventListener('click', function(){

    typeList.classList.toggle('service-type-tab__list-active')
    typeBtn.classList.toggle('service-type-tab__btn-read-active')
})

// const readMore = document.querySelectorAll('.service-item__btn')

// for (const btnReadMore of readMore){
//     btnReadMore.addEventListener('click', () => {

//         clearActive()

//         btnReadMore.classList.add('service-item__btn-active')
//     })
// }

// function clearActive(){
//     readMore.forEach((slide) => {
//         btnReadMore.classList.remove('active')
//     })
// }



