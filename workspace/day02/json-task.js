// 상품명과 가격을 JSON으로 만든다.
// 위 JSON을 JS Object 객체로 변환한다.
// 각 프로퍼티를 출력한 뒤 다시 JSON으로 변환한다.

let product = {     // JS Object 객체 선언
    name: "사탕",
    price: 500
};

console.log(product);   // JS Object 객체 출력

let productJSON = JSON.stringify(product);  // JSON으로 변환

console.log(productJSON);   // JSON 출력

product = JSON.parse(productJSON);  // JS Object으로 변환

console.log(product);   // JS Object 객체 출력

console.log(product.name);  // JSON 출력
console.log(product.price); // JSON 출력

let nameJSON = JSON.stringify(product.name);    // JS Object의 프로퍼티를 JSON으로 변환
let priceJSON = JSON.stringify(product.price);  // JS Object의 프로퍼티를 JSON으로 변환

console.log(nameJSON);  // JSON 출력
console.log(priceJSON); // JSON 출력
