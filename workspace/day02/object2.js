// 기차에 등급별 좌석을 구현하자!
// 3명의 고객이 있으며, 각 고객별 정보는 다음과 같다.

// [1]
// 이름: 홍길동
// 나이: 20
// 등급: 1

// [2]
// 이름: 이순신
// 나이: 40
// 등급: 2

// [3]
// 이름: 장보고
// 나이: 19
// 등급: 3

// 3명은 기차 한 대에 모두 탑승한다.
// 기차 객체를 만들고 각 손님들을 프로퍼티로 선언한다.

let train = new Object();

let hong = {name: "홍길동", age: 20, level: 1};
let lee = {name: "이순신", age: 40, level: 2};
let jang = {name: "장보고", age: 19, level: 3};

train.passenger1 = hong;
train.passenger2 = lee;
train.passenger3 = jang;

console.log(train);
with(train){
    console.log(passenger1.name);
    console.log(passenger2.name);
    console.log(passenger3.name);
}