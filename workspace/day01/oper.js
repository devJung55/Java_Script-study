// false로 취급되는 값 : "", 0, null, undefined

function testFalse(){
    let data = "";
    let result;

    if(data) {
        result = TRUE;
    } else {
        result = "FALSE";
    }
    console.log(result);
}

function compareType() {
    let data1 = "1", data2 = 1;

    console.log(data1 == data2);   // 값만 같으면 true
    console.log(data1 === data2);   // 타입까지 같아야 true
}

testFalse();
compareType();