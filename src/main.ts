import startMainAnimation from './functions/startMainAnimation';

import './style.css'

const app = document.getElementById('app');
const button = document?.getElementById('button') as HTMLElement


const fullAnimation = () => {
    const introSection = document.getElementById('intro-section') as HTMLElement 
    introSection.style.display='none'
    const firstScreen = document.createElement('div');
    firstScreen.style.background='#c5c5c5'
    firstScreen.style.width='98%'
    firstScreen.style.height='98%'
    firstScreen.style.animation='first 2s'
    app?.appendChild(firstScreen)
    setTimeout(()=>{
        firstScreen.style.display='none'
    }, 3000)
    

    setTimeout(() => {
        const secondScreen = document.createElement('div')
        secondScreen.style.background='#fed8a3'
        secondScreen.style.width='98%'
        secondScreen.style.height='98%'
        secondScreen.style.animation='first 2s'
        secondScreen.style.position='absolute'
    
        app?.appendChild(secondScreen)
        setTimeout(()=>{
            secondScreen.style.display='none'
        }, 2000)
    }, 1000)

    setTimeout(startMainAnimation, 3000)

  }
button?.addEventListener('click', fullAnimation);

