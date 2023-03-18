
let display=document.getElementById('display');
let buttons=Array.from(document.getElementsByClassName('button'));
buttons.map(button => {
button.addEventListener('click',(e)=>{
  switch(e.target.innerText){
    case 'AC':
       display.innerText ='';break;
    case '←':
      display.innerText=display.innerText.slice(0, -1);break;
    case '=':
      if(display.innerText===''){
        display.innerText='Edho Okkati Nokkara Hooka';
      } else{
        try {
          display.innerText=eval(display.innerText);break;
        } catch (error) {
          display.innerText='Endira Chusthunav Nee Abba';
        }
      } 
      break;
    default:
      display.innerText += e.target.innerText;
  }
})
});