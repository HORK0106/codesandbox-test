// /**
//  * const,let等の変数宣言
//  */

// const name = "じゃけえ";
// const age = 28;

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いる
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

//従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 23));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "じゃけえ",
//   age: 28
// };

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);
// //

// const myProfile = ["じゃけえ", 28];

// const message3 = `名前は${myProfile[0]}です。`
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4)

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは。${name}さん！`)
// sayHello()

/**
 * スプレッド構文
 */
// 配列の展開
// const arry1 = [1,2];
// console.log(arry1);
// console.log(...arry1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arry1[0], arry1[1]);
// // sumFunc(...arry1);

// //まとめる
// // const arry2 = [1,2,3,4,5];
// // const [num1, num2, ...arry3] = arry2;
// // console.log(num1);
// // console.log(num2);
// // console.log(arry3);

// //配列のコピー、結合
// const arry4 = [10, 20];
// const arry5 = [30, 40];

// const arry6 = [...arry4];
// console.log(arry6);

// const arry7 = [...arry4, ...arry5];
// console.log(arry7);

/**
 * mapやfilter
 */
const namearr = ["田中", "山田", "じゃけえ"];
// for (let i = 0; i < namearr.length; i++) {
//   console.log(`${i + 1}番目は${namearr[i]}です。`)
// }

// const namearr2 = namearr.map((name) => {
//   return name;
// });
// console.log(namearr2);

// namearr.map((name, i) => console.log(`${i + 1}番目は${name}です。`))

// namearr.map((name) => console.log(name));
// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNumArr);

// const newNameArr = namearr.map((name) => {
//   if (name === "じゃけえ") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr)

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueのとき : 条件がfalseの時
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください'
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です'
// }
// console.log(checkSum(50,50))

/**
 * 論理演算子の本当の意味を知ろう
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// || は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
