function Passenger(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
}


let users = new Array(
    new Passenger('한동석', 20, 1),
    new Passenger('이경아', 20, 1),
    new Passenger('정순학', 20, 1),
    new Passenger('정지영', 40, 2),
    new Passenger('홍길동', 40, 2),
    new Passenger('김정표', 40, 2),
    new Passenger('임예찬', 39, 3),
    new Passenger('김현하', 39, 3),
    new Passenger('이순신', 39, 3)
);

let firstGrade = new Object();
let secondGrade = new Object();
let thirdGrade = new Object();

function divide(users, callback) {
    users.forEach(user => {
        switch(grade) {
            case 1:
                firstGrade = user;
                break;
            case 2:
                secondGrade = user;
                break;
            case 3:
                thirdGrade = user;
                break;
        }
    });
}

console.log(firstGrade);