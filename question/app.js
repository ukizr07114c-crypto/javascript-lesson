// 基礎編問題
// Q1
const nickname = 'ごっしー';
const age = 28;

console.log('私の名前は' + nickname + 'です。年齢は' + age + '歳です。')

// Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

// Q3
let user = {
  name: 'John',
  age: 26,
  bloodtype: 'A',
  favorite: 'card'
};

console.log(user.age);

// Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

// Q5
let average = 0;

for (let n = 0; n <  playerList.length; n++ ){average += playerList[n].age}

average /= playerList.length

console.log(average);


// Q6
function sayHello() {
  console.log('Hello');
}

sayHello();


let sayWolrd = function() {
  console.log('World');
}

sayWolrd();

// Q7
user.birthday = '2000-09-27';

user.sayHello = function() {
  console.log('Hello!');
}

user.sayHello();


// Q8
let calc = {};

calc.add = function (x, y) {
  let sum = x + y;
  console.log(sum);
}

calc.add(2,5);


calc.subtract = function(x, y) {
  let difference = x - y;
  console.log(difference);
}

calc.subtract(15,5)


calc.multiply = function(x, y) {
  let product = x * y;
  console.log(product);
}

calc.multiply(7,7);


calc.divide = function(x, y) {
  let quotient = x / y;
  console.log(quotient);
}

calc.divide(25,5);


// Q9
function remainder(x, y) {
  let surplus = x % y;
  return surplus;
}

console.log(5 + 'を' + 3 + 'で割った余りは' + remainder(5,3) + 'です。');

// // Q10
// 変数xは関数fooの中で定義されている。そのため、関数内のみでだけスコープが有効である。つまり、関数外では変数xはスコープの有効範囲外であるためxを参照することはできない。よってエラーが出力される。


// 応用編問題
// Q1
let random = Math. floor(Math. random() * 10);
console.log(random);

// Q2
function Hello(){
  console.log('Hello World!');
}

setTimeout(Hello, 3000);

// Q3
let num = 0

if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0')
}

// Q4
let numbers = []

for (let i = 0; i <= 99; i++) {
  numbers.push(i);
}

console.log(numbers);

// Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let n = 0; n < mixed.length; n++) {
    if (typeof mixed[n] !== 'number') {
      console.log('not number');
    } else if (mixed[n] % 2 === 1) {
      console.log('odd');
    } else {
      console.log('even');
    }
  }