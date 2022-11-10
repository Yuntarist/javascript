// 어레이의 평균을 구하라.
let sum = 0
const arr = Array(100).fill(0).map((v,i)=>v=i+1)
const arr_rt = arr.reduce((a,c,i,ar)=>{
    avg = a+c
    if (i==ar.length-1){return avg/ar.length}
    return avg
},0)
console.log(arr_rt)
