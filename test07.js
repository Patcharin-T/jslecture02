//switch   พิสูจน์หลายครั้ง
//พิสูจน์ได้เฉพาะเท่ากัน หรือไม่เท่ากัน

let bus_no = 80

switch (bus_no){
    case 84 : console.log('ไปวัดไร่ขิง')
                break
    case 57 : console.log('พาต้า')
                break
    case 123 , 80 : console.log('สนามหลวง')
                break
    case 515 : console.log ('ไปอนุสวรีชัยสมรภูมิ')
                break
    default : console.log ('ไม่รู้จัก') //default ไม่มีก็ได้
}              
