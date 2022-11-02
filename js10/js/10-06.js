let num=0
    // 미완성코드
    // function updn(x,y){
    //     num=num+x+y
    //     document.write(`<div>${num}</div><button onclick="updn(${x},0)">증가</button>
    //     <button onclick="updn(0,${y})">감소</button>`)
    //     document.close()
    // }

    // 긴버전
    // function updn(x){
    //     num=num+x
    //     if(x>0){
    //     document.write(`<div>${num}</div><button onclick="updn(${x})">증가</button>
    //     <button onclick="updn(${-x})">감소</button>`)}
    //     else{document.write(`<div>${num}</div><button onclick="updn(${-x})">증가</button>
    //     <button onclick="updn(${x})">감소</button>`)}
    //     document.close()
    //     }
    
    function updn(x){
        console.log(x)
        num=num+x
        x>0?x=x:x=-x
        document.write(`<div>${num}</div><button onclick="updn(${x})">증가</button>
        <button onclick="updn(${-x})">감소</button>`)
        document.close()
        }
    
   