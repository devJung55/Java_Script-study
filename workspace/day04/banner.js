/* banner.html */
HTMLCollection.prototype.forEach = Array.prototype.forEach;
const banner = document.querySelector("div.banner");
const imageDiv = document.querySelectorAll("div.banner div");
const lastImageDiv = document.createElement("div");
const firstImageDiv = document.createElement("div");
const next = document.querySelector("div.next");
const prev = document.querySelector("div.prev");
const buttons = document.querySelectorAll(".buttons button");
const list = document.querySelector(".list");

let checkArrow = false;
let count = 1;
let auto = setInterval(autoSlide, 2000);
let temp = buttons[0];

list.innerHTML = `1/6`;

HTMLCollection.prototype.forEach = Array.prototype.forEach;
buttons.forEach(button => {
    button.addEventListener("click", () => {
        clearInterval(auto);
        count = parseInt(button.innerHTML);
        changeButtonStyle();
        banner.style.transition = "transform 0.3s";
        banner.style.transform = `translate(${-1052 * count}px)`;
        auto = setInterval(autoSlide, 2000);
    });
});

imageDiv.forEach((div, i) => div.style.backgroundImage = `url(myimage/image${i+1}.jpg)`)

banner.appendChild(lastImageDiv);
lastImageDiv.style.backgroundImage = `url(myimage/image01.jpg)`;

banner.insertBefore(firstImageDiv, document.querySelector("div.banner div"));
firstImageDiv.style.backgroundImage = `url(myimage/image${imageDiv.length}.jpg)`

banner.style.transform = `translate(-1052px)`;

function changeButtonStyle() {
    if(temp){
        temp.style.background = "white";
        temp.style.color = "black";
    }
    buttons[count - 1].style.background = "black";
    buttons[count - 1].style.color = "white";
    temp = buttons[count - 1];
}

function autoSlide(){
    banner.style.transition = "transform 0.3s";
    banner.style.transform = `translate(${-1052 * ++count}px)`;
    console.log(count);
    if(count == 7) {
        count = 1;
        setTimeout(function(){
            banner.style.transition = "transform 0s";
            banner.style.transform = "translate(-1052px)";
        }, 300);
    }
    changeButtonStyle();
    list.innerHTML = `${count}/6`;
}

prev.addEventListener("click", function(){
    if(checkArrow){return;}
    checkArrow = true;
    clearInterval(auto);
    banner.style.transition = "transform 0.3s";
    banner.style.transform = `translate(${-1052 * --count}px)`;
    if(count == 0) {
        count = 6;
        setTimeout(function(){
            banner.style.transition = "transform 0s";
            banner.style.transform = `translate(${-1052 * (imageDiv.length)}px)`;
        }, 300);
    }
    changeButtonStyle();
    list.innerHTML = `${count}/6`;
    auto = setInterval(autoSlide, 2000);
    setTimeout(()=>{checkArrow = false}, 300);
    
});

next.addEventListener("click", function(){
    if(checkArrow){return;}
    checkArrow = true;
    clearInterval(auto);
    banner.style.transition = "transform 0.3s";
    banner.style.transform = `translate(${-1052 * ++count}px)`;
    if(count == 7) {
        count = 1;
        setTimeout(function(){
            banner.style.transition = "transform 0s";
            banner.style.transform = "translate(-1728px)";
        }, 300);
    }
    changeButtonStyle();
    list.innerHTML = `${count}/6`;
    auto = setInterval(autoSlide, 2000);
    setTimeout(()=>{checkArrow = false}, 300);
});

