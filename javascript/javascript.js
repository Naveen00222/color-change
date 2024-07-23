
const color = ['green', 'yellow', 'aqua', 'violet', 'pink']
const bigbutton = document.getElementsByClassName('bigbutton');
const btn= document.getElementById('btn');
const span=document.getElementsByTagName('span')

const changecolor = () => {
    const index = Math.ceil(Math.random()*4);
    bigbutton[0].style.background = color[index];
    span.innerHTML = color[index];
}

   
