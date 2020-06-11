"use strict"

// 文法
for (let num=0; num < 10; num++) { 
    処理
}

// 配列の場合
const ary = [1, 10, 100, 1000, 10000]

for ( let num=0 ; num<ary.length; num++) { 
    console.log("value : " + ary[num])
}

// Objectの場合
const obj = {
    name: "taro",
    age: 33,
    weight: 65,
    height: 177,
    gender: "man"
}
const objKeys = Object.keys(obj)

for (let num=0; num<objKeys.length; num++){
    const key = objKeys[num] 
    console.log(`key: ${key} value: ${obj[key]}`)
}





