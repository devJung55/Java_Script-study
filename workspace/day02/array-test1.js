// JS의 Array객체는 길이를 설정하지 않아도 원하는 인덱스에 원하는 값을 바로 추가할 수 있다.
// 또한 타입이 지정되어 있지 않기 때문에 다양한 타입도 동시에 담을 수 있다.

// let datas = [];
// datas[0] = 10;
// datas[2] = 30;
// console.log(datas);

// push(): 가장 마지막에 값 추가
let datas = [20, 3, 6, 12, 65];
datas.push(21);
console.log(datas);

// join(): 원하는 구분점을 문자열로 전달하여 각 요소를 구분한 뒤 문자열로 리턴
console.log(datas.join(":"));

// slice(begin, end): 원하는 부분을 추출하기 위해 시작 인덱스(inclusive)와 마지막 인덱스(exclusive)를 전달한다.
// slice(begin): begin부터 마지막 인덱스까지 추출
console.log(datas.slice(0, 3));
console.log(datas.slice(4));

// forEach(callback): 반복문
datas.forEach(function(data){console.log(data);});
datas.forEach(data => console.log(data));

// forEach(callback(값, 인덱스, Array객체));
datas.forEach(function(data, i, datas){
    // console.log(datas[i]);
    datas[i] = Math.pow(data, 2); //pow(값, 승)
});
console.log(datas);

// indexOf(값): 값을 해당 Array에서 찾은 뒤 인덱스 번호 리턴, 못찾으면 -1 리턴
console.log(datas.indexOf(9));
console.log(datas.indexOf(1));

// map(callback): 기존 값을 원하는 값으로 변경하여 리턴
datas.map(function(data){return data / 2;}).forEach(data => console.log(data));

// split("구분점")
"월화수목금토일".split("").forEach(data => console.log(data));

let dayOfWeek = new Array();
"월화수목금토일".split("").forEach(data => dayOfWeek.push(data));
console.log(dayOfWeek);

dayOfWeek = new Array(7);
"월화수목금토일".split("").forEach(function(data, i, array){
    dayOfWeek[i] = data;
    // dayOfWeek.push(data);
});
console.log(dayOfWeek);

// dayOfWeek.push("월");
// dayOfWeek.push("화");
// dayOfWeek.push("수");
// dayOfWeek.push("목");
// dayOfWeek.push("금");
// dayOfWeek.push("토");
// dayOfWeek.push("일");

dayOfWeek = new Array("월", "화", "수", "목", "금", "토", "일");
console.log(dayOfWeek);