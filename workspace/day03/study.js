// 잠실, 역삼, 노원점 스타벅스 하루 매출 판매량 총액 구하기

function Starbucks(location, price, sales) { 
    this.location = location;   
    this.price = price;
    this.sales = sales;
    // this.toJSON = JSON.stringify(this);
};

let starbucks = [   
    new Starbucks("잠실", 4500, 40),
    new Starbucks("역삼", 5500, 20),
    new Starbucks("노원", 6500, 100)
];

let starbucksJSON = JSON.stringify(starbucks);

// function total(starbucksJSON, callback) {
//     let starbucks = JSON.parse(starbucksJSON);
//     let result = 0;
//     starbucks.map(starbuck => starbuck.price * starbuck.sales).forEach(money => result += money);   /* forEach void 함수라 리턴 없음. */

//     if(callback) {
//         callback(result);
//     }
// };

// total(starbucksJSON, result => {
//     console.log(result);
// });

let file = require('fs');

// file.writeFile('kimjeongpyo.json', starbucksJSON, 'utf-8', () => {});

file.readFile('kimjeongpyo.json', 'utf-8', (error, content) => {
    if(error) {
        console.log(error);
    } else {
        let starbuck = JSON.parse(content);
        let result = 0;

        function total(starbuck, callback){
            starbuck.map(v => v.price * v.sales).forEach(v => result += v);

            if(callback) {
                callback(result / starbuck.length);
            }
        }
        total(starbuck, result => console.log(Math.floor(result)));
    }
});