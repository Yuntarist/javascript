    // 스타트버튼과 스탑버튼을 만든다
    // 스타트 버튼을 누르면 0분 0초에서 1초씩증가 (60초는 1분으로 표현하기 "X분 X초")
    // 스탑버튼을 누르면 타이머가 꺼짐
    // 스타트 버튼을 다시누르면 다시시작 (작동중에 눌러도 초기화 되어서 새로시작)
    // 60초는 1분으로 표현하기
let sec = 0
let min = 0
function count(){
    const cho = setInterval(()=>{
        sec ++
        if(sec==60){min++,sec=0}
        else{}
        console.log(`${min}분 ${sec}초`)
        },1000)}
function stop(){
    clearInterval(()=> count)
    }