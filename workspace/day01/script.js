// script-file.html
// script-url.html

function changeImage(object) {
    let status = object.classList[0];
    if(status == 'on'){
        object.classList.replace("on", "off");
        object.src = "image/icon3.png";
        return;
    }
    
    object.classList.replace("off", "on");
    object.src = "image/icon4.png";

}