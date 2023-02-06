const ON = 1;

function testConst(){
    // ON = 2;
    console.log(ON);
}

function testLet() {
    let data = 10;
    // let data = 20;
    data = 20;
    console.log(data);
}

testLet();
testConst();

// 값을 변경하지 않겠다 : const
// 일반적인 변수를 선언하겠다 : let
//      - 중복 선언이 안된다.

// 변수를 재사용 하겠다 : var
//      - 중복 선언이 가능하지만 수정이다.

// 전역 변수로 사용하겠다 : globalThis

