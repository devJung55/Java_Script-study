// JS에서는 매개변수의 개수에 맞추어 값을 전달할 필요가 없다.
// 만약 매개변수 개수보다 부족하게 값을 전달하면 값을 못받은 매개변수에는 undefined가 들어간다.
// 만약 매개변수 개수보다 넘치게 값을 전달하면 잘린다.

// JS에서는 함수를 값으로 취급하기 때문에 매개변수로 전달이 가능하다.
// 현재 함수에서 나온 결과 값을 다른 함수로 전달할 때에는 callback이라는 식별자(이름)로 결과 값을 전달받아 온다.

console.log(
    add(1, 3, function(result){
        return result / 2;
    })
);

function add(number1, number2, callback) {
    if(callback){
        return callback(number1 + number2);
    }
    return number1 + number2;
}

// 상품명, 가격, 개수를 전달받은 뒤 전체 금액을 출력한다.
// 1. 상품명과 가격, 개수는 A함수에서 전달받는다.
// 2. B함수에서는 상품명과 전체 금액을 전달받아서 출력한다.
// 3. A함수는 B함수를 callback함수로 전달받는다.
function pay(name, price, count, callback){
    if(callback) {
        var total = price * count;
        callback(name, total);
        return;
    }
    return total;
}

pay("고구마", 1500, 30, function(name, total){
    console.log(`${name}: ${total}원`);
})