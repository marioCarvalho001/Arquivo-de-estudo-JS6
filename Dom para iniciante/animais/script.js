function navegacaoInit(){

const tabMenu = document.querySelectorAll('.js_tabMenu li');

const tabContent = document.querySelectorAll('.js_content section');
const contentIni = document.querySelector('.js_content section').classList.toggle('ativo');
function activeTab(index){
  tabContent.forEach((content)=>{
    content.classList.remove('ativo')
  });
  
  tabContent[index].classList.toggle('ativo')
}

tabMenu.forEach((iMenu, index)=>{
  iMenu.addEventListener('click', ()=>{
    activeTab(index)
  })
})
}
navegacaoInit();


const tituloFaq = document.querySelectorAll('.js_faq dt');
const contFaq = document.querySelectorAll('.js_faq dd');const contFaqAti = document.querySelector('.js_faq dd').classList.add('ativo');
console.log(contFaq);

function faqActive(i){
  contFaq[i].classList.toggle('ativo');
}

tituloFaq.forEach((t,i)=>{
  t.addEventListener('click', ()=>{
    faqActive(i);
  })
})