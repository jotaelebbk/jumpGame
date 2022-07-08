
const char = document.querySelector('.char');
const obstacle = document.querySelector('.obstacle');


const jump = () => {
    char.classList.add('jump');
    setTimeout(()=> {
        char.classList.remove('jump');
    },600)
}

const loop = setInterval(()=>{
    const obstaclePosition = obstacle.offsetLeft;
    const charPosition = +window.getComputedStyle(char).bottom.replace('px','');
    
    if (obstaclePosition <= 55 && obstaclePosition > 0 &&  charPosition < 8) {
       
        obstacle.style.animation = 'none';
        obstacle.style.left = '55px';

        char.style.animation = 'none';
        char.style.bottom = '${charPosition}px';
    
    
        clearInterval(loop)

    }

}, 10)


document.addEventListener('keydown', jump)