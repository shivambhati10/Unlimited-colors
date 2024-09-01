# Unlimited-colors
when you press the start the background color will change after every second

## background color project
``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>unlimited colors</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
  </head>
  <body style="background-color: #212121; color: #fff">
  

    <h1>Start should change the Background color every second</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
    <script src="chaiaurcode.js"></script>
  </body>
</html>
```

```javascript
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
  
  ```
