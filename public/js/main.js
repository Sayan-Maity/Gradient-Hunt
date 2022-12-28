import {colorList as c} from './colors.js'

const boxes = document.querySelectorAll(".box");
const copy_div = document.querySelector(".copy_div");
const copy_msg = document.querySelector(".copy_msg");
const code = document.querySelector("#code")

let i = boxes.length;
let j=0;
for(j = 0; j < i; j++){
    boxes[j].style.background = `linear-gradient(to right,${c[j]})`;
};


boxes.forEach(box => {
    box.addEventListener("click", () => {
        let rgb = box.style.background;
        navigator.clipboard.writeText(rgb);
        code.innerHTML = rgb;
        let bottom = -50;
        copy_div.style.visibility = "visible";
        let copy_interval = setInterval(() => {
            copy_msg.style.bottom = `${bottom}vh`;
            bottom += 1;
            if(bottom>0){
                clearInterval(copy_interval);
                
                setTimeout(() => {
                    let bottom = 0;
                    let copy_interval_two = setInterval(() =>{
                        copy_msg.style.bottom = `${bottom}vh`;
                        bottom -= 1;
                        if(bottom < -50){
                            clearInterval(copy_interval_two);
                            copy_div.style.visibility = "hidden";

                        }
                    },1)
                }, 2000);
            }
        },1);

    });
});




