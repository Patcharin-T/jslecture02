//Arrow Function /Function Arrow
//ใช้หลักการเดียวกับ Function Expression

let data1 = () => {
    console.log(111)
}

let data2 = (n1, n2) => {
    console.log(n1 + n2);
    return 'Wow wow wow'
}

let data3 = 555

data1()
console.log( data2(100, 200) )
data1 = 'Hello'
console.log( data1)

console.log('-------------------')

//กรณี parameter มีตัวเดียว ไม่จำเป็นต้องใช้วงเล็บ ()
let info1 = param1 => {
    console.log(param1)
}

//กรณี คำสั่งการทำงานมีคำสั่งเดียว ไม่จำเป็นต้องใช้วงเล็บ {}
let info2 = param1 => console.log(param1)

let info3 = () =>{
    return 111;
}

//กรณีคำสั่งการทำงานมีคำสั่งเดียว และเป็น Return หากไม่ใช้ {} ต้องไม่มี Return
let info4 = () => 111