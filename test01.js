// Single line comment
 
/*
    Multi line comment
    ^_^
    T_T
*/
 
//Data Types ชนิดข้อมูล
//String
console.log("AAAAA")
console.log('BBBBB')
console.log(`CCCCC`)
 
//Number
console.log(11111)     //integer (int)
console.log(15.426879) //float
 
//Boolean
console.log(true)    // 1 หรือ มีค่าข้อมูลใดๆ
console.log(false)   // 0
 
//Null
console.log(null)    // ค่า null
 
//Object เขียนอยู่ใน { } curly brackets  และมีรูปแบบเป็น key : value
console.log({
    name : 'Sombat',
    age : 20,
    isStudent : true,
    address : {
        province : 'Nonthaburi',
        contry : 'Thailand'
    },
    food: ['KFC', 'Pizza', 'Burger']
})
 
//Array เขียนอยู่ใน [ ] square brackets  มีได้หลายข้อมูลคั่นด้วย , comma
//ทุก  value ของ Array จะมี index number กำกับ โดยเริ่มต้นที่ 0
console.log([1,2,3,4,5])
console.log([111, 'Somjai', true, 555, {name : 'Sombat', age : 20}, [111, 222, 333]])
 
//Undefined ยังไม่ได้กำหนดค่า
let x
console.log(x)