//generate a random color -->hex values se

const randomColor= function(){
    const hex="123456789ABCDEF";
    let color='#';
    for(let i =0; i<6; i++){
      //to generate random values
      color+=hex[Math.floor(Math.random()* 16)] //+= isley kiya kyuki 6 values tak humko chahiye isley add krna h har random value ko.
    // 16 values tak chahiye isley 16 se multiply krra hu
    }
    return color;
  };
  let intervalId
  const startChangingColor= function(){
    if(!intervalId){
    intervalId=setInterval(changeBgColor,1000);
    }
    function changeBgColor(){
      document.body.style.backgroundColor=randomColor();
  
    }
  };
  const stopChanging= function(){
    clearInterval(intervalId);
  //agr koi variable kisi refernce m use nahi hora to usko null krdo
  intervalId=null;  
  
  };
  
  document.querySelector('#start').addEventListener('click',startChangingColor)
  
  document.querySelector('#stop').addEventListener('click',stopChanging)
  
  
  
  