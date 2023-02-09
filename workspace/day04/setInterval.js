// setInterval(callback, millis);
// 전달한 밀리초마다 실행, 무한 반복
let interval = setInterval(function(){
    console.log("실행중~");
}, 1000);

setTimeout(function(){
    clearInterval(interval);
}, 3000);

