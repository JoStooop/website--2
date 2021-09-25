// Открытие бургера (боковое меню)
const burger = document.querySelector('.cps-header__burger')
const aside = document.querySelector('.cps-aside')
 
burger.addEventListener('click', function(){
     
    aside.classList.toggle('cps-aside__aside-active')
})

// Закрытие бургера (боковое меню)
const closedAside = document.querySelector('.cps-aside__closed')

closedAside.addEventListener('click', function(){

    aside.classList.toggle('cps-aside__aside-closed')
})







// Открытие "Обратная связь"
const feedback = document.querySelector('.icon-service')
const feedbackWindow = document.querySelector('.cps-popap-feedback')
 
feedback.addEventListener('click', function(){

    feedbackWindow.classList.toggle('cps-popap-feedback__active')
})

// Закрытие "Обратная связь"  
const feedbackWindowClosed = document.querySelector('.cps-popap-feedback__btn-closed')
 
feedbackWindowClosed.addEventListener('click', function(){
     
    feedbackWindow.classList.toggle('cps-popap-feedback__closed')
})







// Открытие "Статус ремонта"
const repair = document.querySelector('.icon-search-2')
const repairWindow = document.querySelector('.cps-popap-repair')
 
repair.addEventListener('click', function(){
     
    repairWindow.classList.toggle('cps-popap-repair__active')
})

// Закрытие "Статус ремонта" 
const repairWindowClosed = document.querySelector('.cps-popap-repair__btn-closed')
 
repairWindowClosed.addEventListener('click', function(){
     
    repairWindow.classList.toggle('cps-popap-repair__closed')
})







// Открытие "Личный кабинет"
const account = document.querySelector('.icon-user')
const accountWindow = document.querySelector('.cps-popap-account')
 
account.addEventListener('click', function(){
     
    accountWindow.classList.toggle('cps-popap-account__active')
})

// Закрытие "Личный кабинет"
const accountWindowClosed = document.querySelector('.cps-popap-account__btn-closed')
 
accountWindowClosed.addEventListener('click', function(){
     
    accountWindow.classList.toggle('cps-popap-account__closed')
})







// Открытие "Начать чат"
const chat = document.querySelector('.icon-pop-up')
const chatWindow = document.querySelector('.cps-popap-chat')
 
chat.addEventListener('click', function(){
     
    chatWindow.classList.toggle('cps-popap-chat__active')
})

// Закрытие "Начать чат"
const chatWindowClosed = document.querySelector('.cps-popap-chat__btn-closed')
 
chatWindowClosed.addEventListener('click', function(){
     
    chatWindow.classList.toggle('cps-popap-chat__closed')
})







// Открытие "Заказать звонок"
const call = document.querySelector('.icon-phone')
const callWindow = document.querySelector('.cps-popap-call')
 
call.addEventListener('click', function(){
     
    callWindow.classList.toggle('cps-popap-call__active')
})

// Закрытие "Заказать звонок"
const callWindowClosed = document.querySelector('.cps-popap-call__btn-closed')
 
callWindowClosed.addEventListener('click', function(){
     
    callWindow.classList.toggle('cps-popap-call__closed')
})