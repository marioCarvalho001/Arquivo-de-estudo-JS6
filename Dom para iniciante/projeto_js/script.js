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