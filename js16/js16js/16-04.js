let count = 6
const countSecond5 = setInterval(()=>{
    count--
    console.log(`${count}`)
    },1000)
const boom = setTimeout(()=>{
    alert(`펑!`)
    },6000)    
setTimeout(()=>{
    clearTimeout(countSecond5)
    clearInterval(boom)
    },6000)    

