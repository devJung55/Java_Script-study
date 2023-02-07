/* JS에서는 오버로딩을 지원하지 않는다. */

let result = add(1, 3);
console.log(result);
result = add(1, 3, 4);
console.log(result);

/* 가변 인자 */
function add(...numbers: number[]) {
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

// function add(number1, number2){
//     return number1 + number2;
// }

// /* 같은 이름으로 선언하게 되면 가장 최근에 선언된 함수가 적용된다. */
// function add(number1, number2, number3) {
//     return number1 + number2 + number3;
// }

// typescript를 사용하고 싶을 때에는 다운로드 후 사용해야 한다.
// npm install typescript --save-dev
// npm install -g typescript
// npm install -g ts-node @types/node
// npx tsc
// Set-ExecutionPolicy Unrestricted (관리자 권한으로 실행)
// tsc --init

function intro(name: string, ...args: any[]) {
    console.log(`이름: ${name}`);

    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}