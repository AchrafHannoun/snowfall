import getRandomInt from "./getRandomInt";

export default function startSnow  ()  {
    const app = document.getElementById('app');
    const windowWidth = window.innerWidth;
    for(let i=0; i<=300; i++) {
        const top = `${getRandomInt(1, 5)}px`
        const left = `${getRandomInt(10, 0.98*windowWidth)}px`
        const dimensions =`${getRandomInt(2,5)}px`
        const animationDuration = getRandomInt(5,100);
        const snowflake = document.createElement('div')
        snowflake.style.backgroundColor='white'
        snowflake.style.position='absolute'
        snowflake.style.top= top
        snowflake.style.left= left
        snowflake.style.width=dimensions
        snowflake.style.height=dimensions
        snowflake.style.borderRadius="50%"
        snowflake.style.animation=`fall ${animationDuration}s 0s ease infinite`
        const delay = getRandomInt(0, 10000);
        setTimeout(() => {
          app?.appendChild(snowflake);
        }, delay);
    }
}