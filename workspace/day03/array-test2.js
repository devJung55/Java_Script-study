/* Object.values(): 객체를 Array로 바꿔주는 함수 */

// 1. 제어문
// 2. callback 함수
// 3. arrow expression

// 1~10까지 Array객체에 담은 후 짝수만 출력
// let datas = new Array(10).fill(0).map((data, i) => i + 1).filter(v => v % 2 == 0).forEach(v => console.log(v));

// let datas = new Array(10).fill(0);
// let i = 0;
// datas.forEach(data => datas[i++] = i);
// datas.forEach(function(data, i){
//     datas[i] = i + 1;
// });
// datas.filter(data => data % 2 == 0).forEach(data => console.log(data));

// 한글을 정수로 변경
// let hangle = "공일이삼사오육칠팔구";
// console.log(Object.values(hangle));
// let input = "공공이사".split("");
// let result = input.map(input => hangle.indexOf(input)).join("");

// console.log(parseInt(result));


// 정수를 한글로 변경
// let hangle = "공일이삼사오육칠팔구".split("");
// let input = "1024".split("");
// let result = input.map(input => hangle[input]).join("");

// console.log(result);

// while(input != 0){
//     result = hangle[input % 10] + result;
//     input = parseInt(input / 10);
// }

// console.log(result);

// 1~100까지 합 출력
// let datas = new Array(100).fill(0).map((data, i) => i + 1);
// let result = datas.reduce((variable, data) => variable + data);
// console.log(result);




