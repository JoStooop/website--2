
const popupCpsAside = document.querySelector('.cps-aside')

const openCpsBurger = document.querySelectorAll('.cps-header__burger')
const closedCpsBurger = document.querySelector('.cps-aside__closed')
 
// Открытие бокового окна (навигационное меню)
openCpsBurger.forEach((button) => {
    button.addEventListener('click', (i) => {
        i.preventDefault()

        popupCpsAside.classList.add('cps-aside__aside-active')
    })
})

// Закрытие бокового окна (навигационное меню)
closedCpsBurger.addEventListener('click', () => {

    popupCpsAside.classList.remove('cps-aside__aside-active')
})





// // Открытие "Обратная связь"
// const feedback = document.querySelector('.icon-service')
// const feedbackWindow = document.querySelector('.cps-popap-feedback')
 
// feedback.addEventListener('click', function(){

//     feedbackWindow.classList.toggle('cps-popap-feedback__active')
// })

// // Закрытие "Обратная связь"  
// const feedbackWindowClosed = document.querySelector('.cps-popap-feedback__btn-closed')
// const fbBgLeftClosed = document.querySelector('.cps-popap-feedback__bg-left')
 
// feedbackWindowClosed.addEventListener('click', function(){
     
//     feedbackWindow.classList.toggle('cps-popap-feedback__closed')
// })

// fbBgLeftClosed.addEventListener('click', function(){
     
//     feedbackWindow.classList.toggle('cps-popap-feedback__closed')
// })



const popup = document.querySelector('.cps-popap-feedback')
const popupBg = document.querySelector('.cps-popap-feedback__bg-left')

const openPopupButtons = document.querySelectorAll('.icon-service')
const closePopupButton = document.querySelector('.cps-popap-feedback__btn-closed')

// Открытие "Обратная связь"
openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        popup.classList.add('cps-popap-feedback__active');
        popupBg.classList.add('active');

    })
})

// Закрытие "Обратная связь" 
closePopupButton.addEventListener('click', () => { 

    popup.classList.remove('cps-popap-feedback__active');
    popupBg.classList.remove('active');

});

// // Закрытие "Обратная связь" при нажатии на фон
document.addEventListener('click', (i) => { 

    if(i.target === popupBg) { // i.цель - фон, то

        popup.classList.remove('cps-popap-feedback__active'); 
        popupBg.classList.remove('active'); 

    }
});















const popupRepair = document.querySelector('.cps-popap-repair')
const popupRepairBg = document.querySelector('.cps-popap-repair__bg-left')

const openPopupRepairBtn = document.querySelectorAll('.icon-search-2')
const closedPopupRepairBtn = document.querySelector('.cps-popap-repair__btn-closed')

// Открытие "Статус ремонта"
openPopupRepairBtn.forEach((button) => {
    button.addEventListener('click', (i) => {
        i.preventDefault();

        popupRepair.classList.add('cps-popap-repair__active')
        popupRepairBg.classList.add('active')
    })
})

// Закрытие "Статус ремонта" 
closedPopupRepairBtn.addEventListener('click', () => {

    popupRepair.classList.remove('cps-popap-repair__active')
    popupRepairBg.classList.remove('active')
})

// Закрытие "Статус ремонта" при нажатии на фон
document.addEventListener('click', (i) => {

    if (i.target === popupRepairBg){

        popupRepair.classList.remove('cps-popap-repair__active'); 
        popupRepairBg.classList.remove('active')
    }
})















const popupAccount = document.querySelector('.cps-popap-account')
const popupAccountBg = document.querySelector('.cps-popap-account__bg-left')

const openPopupAccountBtn = document.querySelectorAll('.icon-user')
const closedPopupAccountBtn = document.querySelector('.cps-popap-account__btn-closed')

// Открытие "Личный кабинет"
openPopupAccountBtn.forEach((button) => {
    button.addEventListener('click', (i) => {
        i.preventDefault();

        popupAccount.classList.add('cps-popap-account__active')
        popupAccountBg.classList.add('active')
    })
})

// Закрытие "Личный кабинет"
closedPopupAccountBtn.addEventListener('click', () => {

    popupAccount.classList.remove('cps-popap-account__active')
    popupAccountBg.classList.remove('active')
})

// Закрытие "Личный кабинет" при нажатии на фон
document.addEventListener('click', (i) => {

    if (i.target === popupAccountBg){

        popupAccount.classList.remove('cps-popap-account__active'); 
        popupAccountBg.classList.remove('active')
    }
})
















const popupChat = document.querySelector('.cps-popap-chat')
const popupChatBg = document.querySelector('.cps-popap-chat__bg-left')

const openPopupChatBtn = document.querySelectorAll('.icon-pop-up')
const closedPopupChatBtn = document.querySelector('.cps-popap-chat__btn-closed')

// Открытие "Начать чат"
openPopupChatBtn.forEach((button) => {
    button.addEventListener('click', (i) => {
        i.preventDefault();

        popupChat.classList.add('cps-popap-chat__active')
        popupChatBg.classList.add('active')
    })
})

// Закрытие "Начать чат"
closedPopupChatBtn.addEventListener('click', () => {

    popupChat.classList.remove('cps-popap-chat__active')
    popupChatBg.classList.remove('active')
})

// Закрытие "Начать чат" при нажатии на фон
document.addEventListener('click', (i) => {

    if (i.target === popupChatBg){

        popupChat.classList.remove('cps-popap-chat__active'); 
        popupChatBg.classList.remove('active')
    }
})

















const popupCall = document.querySelector('.cps-popap-call')
const popupCallBg = document.querySelector('.cps-popap-call__bg-left')

const openPopupCallBtn = document.querySelectorAll('.icon-phone')
const closedPopupCallBtn = document.querySelector('.cps-popap-call__btn-closed')

// Открытие "Обратная связь" 
openPopupCallBtn.forEach((button) => {
    button.addEventListener('click', (i) => {
        i.preventDefault();

        popupCall.classList.add('cps-popap-call__active')
        popupCallBg.classList.add('active')
    })
})

// Закрытие "Обратная связь" 
closedPopupCallBtn.addEventListener('click', () => {

    popupCall.classList.remove('cps-popap-call__active')
    popupCallBg.classList.remove('active')
})

// Закрытие "Обратная связь"  при нажатии на фон
document.addEventListener('click', (i) => {

    if (i.target === popupCallBg){

        popupCall.classList.remove('cps-popap-call__active'); 
        popupCallBg.classList.remove('active')
    }
})

















const popupSearch = document.querySelector('.cps-popap-search')
const popupSearchBg = document.querySelector('.cps-popap-search__bg-left')

const openPopupSearchBtn = document.querySelectorAll('.icon-search')
const closedPopupSearchBtn = document.querySelector('.cps-popap-search__btn-closed')

// Открытие "Поиск" + закрытие бокового окна 'popupAside'
openPopupSearchBtn.forEach((button) => {
    button.addEventListener('click', (i) => {
        i.preventDefault();

        popupSearch.classList.add('cps-popap-search__active')
        popupSearchBg.classList.add('active')

        // Закрытие бокового окна с навигационным меню
        popupCpsAside.classList.remove('cps-aside__aside-active')

    })
})

// Закрытие "Поиск" 
closedPopupSearchBtn.addEventListener('click', () => {

    popupSearch.classList.remove('cps-popap-search__active')
    popupSearchBg.classList.remove('active')
})

// Закрытие "Поиск"  при нажатии на фон
document.addEventListener('click', (i) => {

    if (i.target === popupSearchBg){

        popupSearch.classList.remove('cps-popap-search__active'); 
        popupSearchBg.classList.remove('active')
    }
})