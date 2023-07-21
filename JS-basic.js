// ############### ตัวแปร 
var _a = 10 // ไม่นิยม
let _b = 20 // นิยมใช้
const _c = 30   // แบบเปลี่ยนแปลงไม่ได้

const age = 25
const address = 'KLS'
const customer = {age,address}
// console.log(customer) --> { age: 25, address: 'KLS' }
// ############### ตัวแปร 


// ############### ฟังก์ชัน
function basic_function(name,age){
    return name+age
}
const showData = (name,age)=>name+age
// console.log(showData('phol',18)) -->phol18
// console.log(basic_function('phol',18)) -->phol18

summation = (...numberArr)=>{
    let total = 0
    for(let number of numberArr) total += number
    return total
}
// console.log(summation(10,20,1,2,3)) --> 36
// ############### ฟังก์ชัน

getDataCustomer = (CTName,CTaddress='KLS')=>{
    return `name:${CTName} address:${CTaddress}`
}
// console.log(getDataCustomer('passapol'))-->name:passapol address:KLS
// ############### object ออบเจค 
const custom = {
    name: 'pssapol',
    age:25,
    address:'KLS',
    showcustom(){
        return 'Name:'+custom.name+'\tAge:'+custom.age+'\taddress:'+custom.address
    }
}
// console.log(custom.showcustom()) --> Name:pssapol    Age:25  address:KLS

let product = {
    productName:'คอม',
    price:30000,
    stock:10
}
let {productName:a,price:b,stock:c} = product
// let {productName,price,stock} = product  ถ้าชื่อตัวแปรเหมือนกันเขียนแค่ตัวเดียวพอไม่ต้องกำหนด
// console.log(a,b,c) --> คอม 30000 10
// ############### object ออบเจค


// ############### Format str สติง
const data_1 = `ชื่อ ${custom.name}
ที่อยู่ ${custom.address}
อายุ ${custom.age}` 
// console.log(data_1)-- >ชื่อ pssapol \n ที่อยู่ KLS \n อายุ 25
// ############### Format str


// ############### Array อาเรย์
let NewArrr = [100,200,300]
let data_2 = [10,20,...NewArrr]
// console.log(data_2) --> [ 10, 20, 100, 200, 300 ]

let color = ['เขียว','แดง','ส้ม']
let allColors_1 = [...color]
let addcolor = ['น้ำเงิน','ม่วง']
allColors.push(...addcolor)
let allColors_2 = color.concat(addcolor)
// console.log(allColors) --> [ 'เขียว', 'แดง', 'ส้ม', 'น้ำเงิน', 'ม่วง' ]

const [green,red,,blue,purple] = allColors
// console.log(green) --> เขียว
const [,,orange] = allColors
// console.log(orange) -- ส้ม

let data = [100,200,300]
let data_tostr = data.join('*')
// console.log(data_tostr)--> '100'+*+'200'+*+'300'
// ############### Array


// ############### Array


