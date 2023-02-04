const menuButton = document.querySelector('.menu');
const navBar = document.getElementById('nav-bar')
const closeButton = document.getElementById('close-btn')

menuButton.addEventListener('click', ()=>{
    navBar.style.display = 'block'
})

closeButton.addEventListener('click', ()=>{
    navBar.style.display = 'none'
})

const secHeaders = document.querySelectorAll('.sec-header');
const sections = document.querySelectorAll('.sectionEl');
const x = window.matchMedia('(min-width: 768px)')

secHeaders[0].addEventListener('click', ()=>{
    sections[1].style.display = 'none';
    sections[2].style.display = 'none';
    secHeaders[0].style.borderBottom = '5px solid red';
    secHeaders[0].style.color = 'hsl(229, 31%, 21%)';
    secHeaders[1].style.borderBottom = 'none';
    secHeaders[1].style.color = 'hsl(229, 8%, 60%)';
    secHeaders[2].style.borderBottom = 'none';
    secHeaders[2].style.color = 'hsl(229, 8%, 60%)';
    if(x.matches){
        sections[0].style.display = 'grid';
    }else {
        sections[0].style.display = 'block';
    }
})

secHeaders[1].addEventListener('click', ()=>{
    sections[0].style.display = 'none';
    sections[2].style.display = 'none';
    secHeaders[1].style.borderBottom = '5px solid red';
    secHeaders[1].style.color = 'hsl(229, 31%, 21%)';
    secHeaders[0].style.borderBottom = 'none';
    secHeaders[0].style.color = 'hsl(229, 8%, 60%)';
    secHeaders[2].style.borderBottom = 'none';
    secHeaders[2].style.color = 'hsl(229, 8%, 60%)';
    if(x.matches){
        sections[1].style.display = 'grid';
    }else {
        sections[1].style.display = 'block';
    }
})

secHeaders[2].addEventListener('click', ()=>{
    sections[1].style.display = 'none';
    sections[0].style.display = 'none';
    secHeaders[2].style.borderBottom = '5px solid red';
    secHeaders[2].style.color = 'hsl(229, 31%, 21%)';
    secHeaders[1].style.borderBottom = 'none';
    secHeaders[1].style.color = 'hsl(229, 8%, 60%)';
    secHeaders[0].style.borderBottom = 'none';
    secHeaders[0].style.color = 'hsl(229, 8%, 60%)';
    if(x.matches){
        sections[2].style.display = 'grid';
    }else {
        sections[2].style.display = 'block';
    }
})

const accTop = document.querySelectorAll('.top');
const hiddenEl = document.querySelectorAll('.acc-hidden');
const arrows = document.querySelectorAll('.top > svg');

for(let i = 0; i < accTop.length; i++){
    accTop[i].addEventListener('click', (e)=>{
        e.preventDefault();
        hiddenEl[i].style.display = hiddenEl[i].style.display === 'none' ? 'block' : 'none'
        arrows[i].style.transform = arrows[i].style.transform === 'scaleY(1)' ? 'scaleY(-1)' : 'scaleY(1)';
        if(arrows[i].style.transform === 'scaleY(-1)'){
            arrows[i].style.stroke = 'hsl(0, 94%, 66%)';
        }else {
            arrows[i].style.stroke = '#5267DF';
        }
    })
}

const emailEl = document.getElementById('email-field');
const errorMessage = document.querySelector('.forError > p')
const errorBg = document.querySelector('.forError')
const errorImg = document.querySelector('.forError > img')
const formEl = document.getElementById('formEl')
const submitBtn = document.getElementById('submitBtn')


submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    const valid= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[hotmail||yahoo||outlook||gmail||icloud]+(?:\.[com]+)*$/;
    if(emailEl.value.match(valid)){
        emailEl.value = ''
    }else if(emailEl.value === ''){
        errorMessage.textContent = "Email field cannot be empty!";
        errorMessage.style.display = 'block';
        errorBg.style.background = 'hsl(0, 94%, 66%)';
        errorBg.style.border = '2px solid hsl(0, 94%, 66%)';
        setTimeout(()=>{
            errorMessage.style.display = 'none';
            errorBg.style.background = 'none';
            errorBg.style.border = 'none';
        }, 2000)
    }else {
        errorMessage.textContent = "Whoops, make sure it's an email";
        errorMessage.style.display = 'block';
        errorBg.style.background = 'hsl(0, 94%, 66%)';
        errorBg.style.border = '2px solid hsl(0, 94%, 66%)';
        setTimeout(()=>{
            errorMessage.style.display = 'none';
            errorBg.style.background = 'none';
            errorBg.style.border = 'none';
        }, 2000)
    }
})