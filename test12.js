//function คือ การทำงานหนึ่งๆ จะไม่ทำงานหากไม่เรียกใช้ call function
//เราจะเรียกใช้ Function ที่ไหน เมื่อไหร่ กี่ครั้งก็ได้

//parameter คือ ตัวแปรประเภทหนึ่ง ใช้ได้เฉพาะในFunction โดยจะเขียนอยู่ใน ( ) หลังชื่อFunction 
//return  คือ คำสั่งที่มี2ความหมาย 1.เป็นการบอกว่าจบการทำงานของFunction 2.ส่งค่ากลับไปที่จุดเรียกใช้Function

//มี 4 รูปแบบใหญ่ ๆ
// 1. no parameter, no return
function showHello(){
    console.log('Hello...')
}

function showHi(){
    console.log("Hi....")
}

showHello() //call function
showHi()
showHello()
showHello()