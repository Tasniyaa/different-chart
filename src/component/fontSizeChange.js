
// import { useState } from 'react';
// const [ value , setValue ] = useState("16");
  
function update(event) {

  setValue(newValue);
    var prev;
    var select = document.getElementById('font');

    var option = select.options[select.selectedIndex];
    let ids =["#h", "#p"];
    let a = 16;
    ids.forEach(id=>{
        let el = document.querySelector(id);
        let fontSize = window.getComputedStyle(el, null).getPropertyValue("font-size");
        fontSize = parseFloat(fontSize);
        let b = parseFloat(option.text);
        el.style.fontSize = (b)+"px";
        console.log(prev);
    });
  }


export {update} ;


