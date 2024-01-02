const countValue=document.querySelector('#counter'); //to get the value from HTML doc  

function increase(){
     let value=parseInt(countValue.innerText); // we use parseint to convert the string value from string to int 
     value=value+1; // main ogic 
     countValue.innerText=value; // set the value back to UI 
}

function decrease(){
    let value=parseInt(countValue.innerText); // we use parseint to convert the string value from string to int 
     value=value-1; // main ogic 
     countValue.innerText=value; // set the value back to UI
}