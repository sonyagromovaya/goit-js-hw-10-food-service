import './styles.css';
import menu from './menu.json';
import menuItemTemplate from "./templates/menu-item.hbs";

const ulRef = document.querySelector('.js-menu');
const markup = menuItemTemplate(menu);
const toggleRef = document.querySelector('.theme-switch__toggle');
const checkedRef = document.querySelector('#theme-switch-toggle');
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const theme = localStorage.getItem('theme');

ulRef.insertAdjacentHTML('beforeend', markup);
if(!theme){
    localStorage.setItem('theme', Theme.LIGHT);
}
document.body.classList.add(theme);
if(document.body.classList.contains(Theme.DARK)){
    checkedRef.checked = true;
    document.body.classList.remove(Theme.LIGHT);
}

toggleRef.addEventListener('change', ()=>{
    document.body.classList.toggle(Theme.DARK);
    
    if(document.body.classList.contains(Theme.DARK)){
        localStorage.setItem('theme', Theme.DARK);
    }else{
        localStorage.setItem('theme', Theme.LIGHT);
    }
})

if(document.body.classList.contains(Theme.LIGHT) && document.body.classList.contains(Theme.DARK)){
    if(theme === Theme.LIGHT){
        document.body.classList.remove(Theme.DARK)
    }
    if(theme === Theme.DARK){
        document.body.classList.remove(Theme.LIGHT)
    }
}