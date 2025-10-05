//Operator 
// Arithmetic Operator คำนวนตัวเลข + - * / % **
console.log (2 ** 5)
console.log(20 % 2) //หารเอาเศษ
console.log(2 % 20)
console.log(0 % 500)

//Comparison Operator เปรียบเทียบ (true/False) == != > < >= <+ === !==
//==, != ไม่สนใจData type
console.log(111 == '111') //เปรียบเทียบตัวเลขกับข้อความ

//===, !== สนใจ Data type
console.log(111 === '111')

//เปรียบเทียบข้อความ
console.log('Sombat' < 'Somjai') //true
console.log('Bangna' >= 'Bangpoo') //false

//Logical Opeartor ตรรกะ ! (not) , & (and), || (or)
//ข้อมูลที่จะใช้มีแค่ 
console.log (!true) //false
console.log (!false) //true

console.log (true && true) //true
console.log (true && false) //false
console.log (false && true) //false
console.log (false && false) //false

console.log (false && false) //false
console.log (false && true) //true
console.log (true && false) //true
console.log (true && true) //true


//**** Ternary Operator เงื่อนไข ? ทำเมื่อเป็นจริง : ทำเมื่อเป็นเท็จ  

let data1 = 100 % 30 == '0' ? 'Wow... ' : 'Hui...'
console.log(data1)

//increment ++ เพิ่มตัวมันเองทีละ 1 / decrement -- ลดตัวมันเองทีละ1
let data2 = 10
console.log(data2) //10
data2++
++data2
data2++
console.log(data2) //13

//nullist coalescing oprator ?? ใช้ตรวจสอบค่า nall หรือ underfined
let aa = null
let bb 
let cc = 'DTI-SAU'
console.log('-------------')
console.log(aa ?? 'Hello')
console.log(bb ?? 'H1')
console.log(cc ?? 'Hey')