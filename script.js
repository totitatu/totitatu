let carousel_pic = ["img/touch_grass.png","img/mine_axolotl.png","img/frog.png"];
let carousel_alt = ["Hand touching grass.","An axolotl.","A frog."];
let i = 0;
let carousel_img = document.querySelector(".carousel img");

function prev(){
    if(i==0) i=2;
    else i--;
    change_pic();
}

function next(){
    if(i==2) i=0;
    else i++;
    change_pic();
}

function change_pic(){
    carousel_img.src = carousel_pic[i];
    carousel_img.alt = carousel_alt[i];
}