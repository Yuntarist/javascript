document.addEventListener( 'DOMContentLoaded', () => {
    const title = document.querySelector('#title')
    const author = document.querySelector('#author')
    const vcnt = document.querySelector('#vcnt')
    const text = document.querySelector('#text')
    const submit = document.querySelector('#submit')
    const del = document.querySelector('#delete')

    const val = window.localStorage.getItem( 'cur' );

    const prt = JSON.parse(localStorage.getItem(val));
    prt.vcnt +=1 ;

    title.innerHTML = prt.ttl;
    author.innerHTML = prt.author;
    vcnt.innerHTML = prt.vcnt;
    text.innerHTML = prt.txt;
  
    localStorage.setItem(val,JSON.stringify(prt)); 
    
    del.addEventListener( 'click' , () => {
        if(confirm('정말 삭제하시겠습니까?')){
            localStorage.removeItem('cur');
            localStorage.removeItem(val);                
            alert('삭제 됐습니다.');
            location.href = './noticeboard.html';
        }
      })
})