/* 
    author: Han
    contents: variable
*/

// 동적 바인딩: 컴파일 시 값에 따라 자료형이 동적으로 결정된다.
// var data = 10;
// console.log(data);
// console.log(typeof(data));

// data = "안녕";
// console.log(typeof(data));

// hoisting(호이스팅): 선언의 위치에 상관없이 존재하면 메모리에 할당된다.
//                     초기화 작업은 호이스팅 되지 않고 선언만 호이스팅 된다.
// ※ VAR 키워드를 사용하지 않으면 호이스팅 되지 않는다.

// console.log(age);
// var age = 10;
// console.log(age);

// var 키워드를 사용하더라도 여러 번 선언이 가능하기 때문에 계속 수정될 수 있다. 목적에 맞게 쓰지 않은 코드이다.
var data = 10;
var data = 20;
console.log(data);