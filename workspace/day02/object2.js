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

function Passenger(name, age, grade){   // 객체의 프로퍼티에 접근할 수 있게 프로토타입으로 선언한다.
    this.name = name;
    this.age = age;
    this.grade = grade;
}

let hgd = new Passenger("홍길동", 20, 1);   // 생성자를 통해 변수에 객체를 담는다.
let lss = new Passenger("이순신", 40, 2);
let jbg = new Passenger("장보고", 19, 3);

let train = new Object;

train.passenger1 = hgd;     // train에 프로퍼티를 생성하여 객체를 담아준다.
train.passenger2 = hgd;
train.passenger3 = hgd;

console.log(train);


// let train = new Object();

// let hong = {name: "홍길동", age: 20, level: 1};
// let lee = {name: "이순신", age: 40, level: 2};
// let jang = {name: "장보고", age: 19, level: 3};

// train.passenger1 = hong;
// train.passenger2 = lee;
// train.passenger3 = jang;

// console.log(train);
// with(train){
//     console.log(passenger1.name);
//     console.log(passenger2.name);
//     console.log(passenger3.name);
// }