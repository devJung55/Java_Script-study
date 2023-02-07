let account = { // new Object(); 생략 되었다.
    owner: "정지영",
    password: "1234",
    account: "110-11-12341234"
};

console.log(account);

account.age = 20;

console.log(account.age);

account.money = 10000;
account.deposit = function(money){this.money += money;};

account.deposit(30000);
console.log(account.money);