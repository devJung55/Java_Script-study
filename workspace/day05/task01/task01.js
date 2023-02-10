/* 
    task01.html
*/

globalThis.temp;

function confirm() {
    const input = document.querySelector("input").value;
    const trs = document.querySelectorAll("tbody tr");
    let check = false;

    if(globalThis.temp) {
        globalThis.temp.style.background = "#fff";
        globalThis.temp.firstElementChild.innerHTML = temp.firstElementChild.innerHTML.replace("★", "");
    }

    trs.forEach(tr => {
        let td = tr.firstElementChild;
        if(td.innerHTML == input) {
            check = true;
            globalThis.temp = tr;
            tr.style.background = "#ef5350";
            td.innerHTML = "★" + td.innerHTML;
        }
    });

    if(!check) {
        alert("다시 시도해주세요.");
    }
}