const burger = document.querySelector('.header__icon');
const menu = document.querySelector('.nav');
const body = document.body;

burger.addEventListener('click', function(){
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_lock');
});


//----------swiper----------

const heroSlider = new Swiper ('.hero-slider',{
    slidesPerView: 1,
    navigation: {
        nextEl: '.hero-button__next',
        prevEl: '.hero-button__prev',
    },
});

heroSlider.el.style.position = 'absolute';


const projectsSlider = new Swiper ('.projects-slider',{
    slidesPerView: 2,
    spaceBetween: 15,
    grid:{
        rows: 2,
        fill: 'row',
    },
    breakpoints:{
        320:{
            slidesPerView:1,
            grid:{
                rows:1,
            }
        },
        768:{
            slidesPerView: 2,
            spaceBetween: 15,
            grid:{
                rows: 2,
                fill: 'row',
            }
        }
    },
    
    navigation: {
        nextEl: '.projects-buttons__next',
        prevEl: '.projects-buttons__prev'
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
})

//----------/swiper----------



//----------tabs----------
const tabs = document.querySelectorAll('.tabs__item');
tabs.forEach(item =>{
    item.addEventListener('click',function(){
        tabs.forEach(item =>{
            item.classList.remove('tabs__item_active');
        });
        item.classList.add('tabs__item_active');
    })
})


const commercialTab = document.querySelector('.tabs__item_com');
const residentalTab = document.querySelector('.tabs__item_res');
const otherTab = document.querySelector('.tabs__item_oth');
const allTab = document.querySelector('.tabs__item_all');
const allSlider = document.querySelector('#projects__all');
const commercialSlider = document.querySelector('#projects__com');
const residentalSlider = document.querySelector('#projects__res');
const otherSlider = document.querySelector('#projects__oth');

commercialTab.addEventListener('click', function(){
    allSlider.classList.add('_hidden');
    commercialSlider.classList.remove('_hidden');
    residentalSlider.classList.add('_hidden');
    otherSlider.classList.add('_hidden');
});

residentalTab.addEventListener('click', function(){
    allSlider.classList.add('_hidden');
    commercialSlider.classList.add('_hidden');
    residentalSlider.classList.remove('_hidden');
    otherSlider.classList.add('_hidden');
});

otherTab.addEventListener('click', function(){
    allSlider.classList.add('_hidden');
    commercialSlider.classList.add('_hidden');
    residentalSlider.classList.add('_hidden');
    otherSlider.classList.remove('_hidden');
});

allTab.addEventListener('click', function(){
    allSlider.classList.remove('_hidden');
    commercialSlider.classList.add('_hidden');
    residentalSlider.classList.add('_hidden');
    otherSlider.classList.add('_hidden');
});

//----------/tabs----------


//----------formSubmit----------

let formData = {};
const form = document.querySelector('.feedback-form');

form.addEventListener('submit',e=>{
    e.preventDefault();
    alert('Thank You!');
    let nameValue = document.getElementById('form_name').value;
    let emailValue = document.getElementById('form_email').value;
    let contactValue = document.getElementById('form_contact').value;
    let phoneValue = document.getElementById('form_phone').value;
    let messageValue = document.getElementById('form_message').value;

    formData = {
        name: nameValue,
        email: emailValue,
        reasonForContact: contactValue,
        phone: phoneValue,
        message: messageValue
    };
    
    return formData;
});


form.addEventListener('submit', e =>{
    e.preventDefault();
    location.reload();
})



//----------/formSubmit----------