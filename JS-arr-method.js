 // ######################################### พื้นฐาน
//push pop shift unshift
let data = [10,20]
data.push(...[200,500])
// console.log(data)-->[ 10, 20, 200, 500 ]

data.pop()
// console.log(data)-->[ 10, 20, 200 ]

data.shift()
// console.log(data)-->[ 20, 200 ]

data.unshift(999)
// console.log(data)-->[ 999, 20, 200 ]
// ######################################### พื้นฐาน



// ######################################### เกี่ยวกับอาร์เรย์
//splice $ slice
let data_1 = [10,20,30,40,50,60]
data_1.splice(1,3)
// console.log(data_1)-->[ 10, 50, 60 ] ลบถามจำแหน่งที่กำหนด

data_1.splice(1,3,999)
// console.log(data_1)-->[ 10, 999, 50, 60 ] ลบถามจำแหน่งที่กำหนด แทนที่ลงไป

let a = data_1.slice(1,3)
// console.log(a)-->[ 20, 30 ]ดึงข้อมูลตามทีต้องการ


// ######################################### เกี่ยวกับอาร์เรย์



// ######################################### ลูปอาเรย์
let data_2 = [10,20,30,40,50,60]
const forloop = ()=>{ for(let i = 0 ; i<data_2.length; i++){
    // if (data_2[i]>=30) break
    console.log(`ลำดับที่ ${i} = ${data_2[i]}`)
}}
// forloop()

const foreach = ()=>{ data_2.forEach(e =>{
    console.log(`${e}`)
})}
// foreach()

const forof = ()=>{for (const element of data_2){
    // if (data_2[i]>=30) break
    console.log(`${element}`)
}}
// forof()

// ######################################### ลูปอาเรย์



// ######################################### การดึงข้อมูลอาเรย์
let colors = ['เขียว','แดง','น้ำเงิน', 'ม่วง', 'ชมพู']

const index = colors.indexOf('น้ำเงิน')
// console.log(index) ส่งออกเป็น index ถ้าหาไม่เจอจะส่งเลข -1 ออกมา

const search =  colors.find(element=>element==='เขียว')
// console.log(search)-->เขียว

const search_idx =  colors.findIndex(element=>element==='เขียว')
// console.log(search_idx)-->0 ส่งเป็นจำแหน่งออกมา
// ######################################### การดึงข้อมูลอาเรย์


// ######################################### Map สร้างอาเรย์แยกจากตัวเดิม 
let number = [10,20,30,40,50,60]
const result = number.map((e,i)=>`ลำดับที่ ${i} คูน 2 ได้ ${e*2}`)
// console.log(result)--> สร้างอาเรย์ใหม่ จากอาเรย์ตัวเดิม

let dataDay = [
    {day:'01/06/2566',weather:'แดดร้อน',temp:27},
    {day:'02/06/2566',weather:'ฝนตก',temp:23},
    {day:'03/06/2566',weather:'หมอก',temp:18}
]
const result_1 = dataDay.map(e=>e.weather)
// console.log(result_1)-->[ 'แดดร้อน', 'ฝนตก', 'หมอก' ]
// ######################################### Map สร้างอาเรย์แยกจากตัวเดิม 


// ######################################### ดึงข้อมูลพนักงาน การคัดกรองอาเรย์ การเลือกอาเรย์
let dataEm = [
    {name:'พล',salary:40000,department:'โปรแกรมเมอร์'},
    {name:'บอย',salary:130000,department:'ผู้บริหาร'},
    {name:'เซฟ',salary:12000,department:'ทหาร'},
    {name:'ไอคิว',salary:25000,department:'ตัดต่อ'},
    {name:'ทิว',salary:15000,department:'กลมป่าไม้'}
]
let result_2 = dataEm.filter(e=>e.salary >20000).filter(e=>e.department!='โปรแกรมเมอร์')
//console.log(result_2) --> [
//    { name: 'บอย', salary: 130000, department: 'ผู้บริหาร' },
//    { name: 'ไอคิว', salary: 25000, department: 'ตัดต่อ' }
//  ]
// ######################################### ดึงข้อมูลพนักงาน การคัดกรองอาเรย์ การเลือกอาเรย์


// ######################################### กำหนดค่าเริ่มต้นในฟังก์ชัน
data = [10,20,30,40]
let sumtotal = data.reduce((value,e)=>{
    const total = e+value
    return total
},0)
// console.log(sumtotal) --> กำหนดค่าเริ่มต้นในฟังก์ชัน

dataEm = [
    {name:'พล',salary:40000,department:'โปรแกรมเมอร์'},
    {name:'บอย',salary:130000,department:'ผู้บริหาร'},
    {name:'เซฟ',salary:12000,department:'ทหาร'},
    {name:'ไอคิว',salary:25000,department:'ตัดต่อ'},
    {name:'ทิว',salary:15000,department:'กลมป่าไม้'}
]
let result_3 = dataEm.reduce((value,e)=>{
    let total = e.salary+value
    return total
},0)
// console.log(`เงินเดือนรวมของพนักงาน ${result_3}`)-->เงินเดือนรวมของพนักงาน 222000

// ######################################### กำหนดค่าเริ่มต้นในฟังก์ชัน 