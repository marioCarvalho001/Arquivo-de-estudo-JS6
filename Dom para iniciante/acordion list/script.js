function initTabNav(){
const tabMenu = document.querySelectorAll('.js_tabmenu li');
const tabDescricao = document.querySelectorAll('.js_tabdescricao section');

if(tabMenu.length && tabDescricao.length){
tabDescricao[0].classList.add('ativo');

function activeTab(index){
  tabDescricao.forEach((section)=>{
    section.classList.remove('ativo')
  });
  tabDescricao[index].classList.add('ativo');
}

tabMenu.forEach((itemMenu, index) =>{
  itemMenu.addEventListener('click', ()=>{
    activeTab(index);
  })
});
}
}
initTabNav();

function initiAcordion(){
const accordionList = document.querySelectorAll('.js_acordion dt');
const activoOn = 'ativo';

if(accordionList.length ){
accordionList[0].classList.add(activoOn);
accordionList[0].nextElementSibling.classList.add(activoOn);

function activeAccordion(){
this.classList.toggle(activoOn);
this.nextElementSibling.classList.toggle(activoOn);
}

accordionList.forEach((item)=>{
  item.addEventListener('click', activeAccordion);
})
}
}
initiAcordion();

//scroll suave para link interno

function initScrollSuave(){

  const linksInternos = document.querySelectorAll('.js_menu a[href^="#"]');

  function scrollToSections(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior:'smooth',
      block: 'start',
    });


    /*forma alternativa
      const topo = section.offsetTop;
      window.scrollTo({
      top:topo,
      behavior: "smooth"
    });*/
  }

  linksInternos.forEach((link) =>{
    link.addEventListener('click', scrollToSections);
  })
}
initScrollSuave();

// animão ao scroll

function initiAnimationScroll(){
const sections = document.querySelectorAll('.js_scroll');
if(sections.length){
const winndowMetade = window.innerHeight * 0.6;

function animaScroll(){
  sections.forEach((section)=>{
    const sectionTop = section.getBoundingClientRect().top; 
    const inSectionViseble = (sectionTop - winndowMetade) < 0;
    if(inSectionViseble){
      section.classList.add('ativo');
    }
  });  
}
}

animaScroll()
window.addEventListener('scroll', animaScroll);
}
initiAnimationScroll();