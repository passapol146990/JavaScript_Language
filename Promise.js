function download(url){
    // โพรมิส ฟังก์ชันรอการทำงารให้เสร็จแล้วเช็คว่า ทำสำเร็จกับ error
    return new Promise(function(resolve, reject){
        console.log('Downloading...')
        let connect = true
        setTimeout(()=>{
            if(connect){
                // ถ้าสำเร็จ
                resolve(`Download successfully ${url}`)
            }else{
                // ถ้า error
                reject(`Download failed ${url}`)
            }
        },1000)
        // 1 วินาที
    })
}

// // เรียกใช้ฟังก์ชัน-->แล้วก็แสดงผล result จากฟังก์ชัน-->.catch ถ้า error ให้ทำตรงนี้ -->.finally ถ้าสำเร็จให่ทำตรงนี้
// download('phol.com').then(result=>{
//     console.log(result);
// }).catch(err=>{console.log('error')}).finally(()=>{console.log('จบการทำงาน')});

// // เขียนแบบสั้นๆเอาแค่ผลการดาวโหดล
// download('phol.com').then(result=>{
//     console.log(result);
// })

// โจทย์ดาวโหลดไฟล์ 5 ไฟล์์
download('phol1.com').then(result=>{
    console.log(result);
    return download('phol2.com')
}).then(result=>{
    console.log(result);
    return download('phol3.com')
}).then(result=>{
    console.log(result);
    return download('phol4.com')
}).then(result=>{
    console.log(result);
    return download('phol5.com')
}).then(result=>{
    console.log(result);
})