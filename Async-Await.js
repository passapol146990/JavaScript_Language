function download(url){
    return new Promise((resolve,reject)=>{
        console.log('downloading...')
        let connect = true
        setTimeout(()=>{
            if(connect){
                resolve('download success')
            }else{
                reject('download failure')
            }
        },1000)
    })
}

// async ต้องใช้กับคู่กับ await
// async ใช้กับ ฟังก์ชัน
// await ใช้ในฟังก์ชัน
async function start(){
    // ให้โหลดตามลำดับ await รอให้ทำเสร็จก่อนคำทำต่อ
    console.log(await download('p1'))
    console.log(await download('p2'))
    console.log(await download('p3'))
}
start()
