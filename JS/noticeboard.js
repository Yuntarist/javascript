document.addEventListener("DOMContentLoaded",()=>{
    function refresh( dnum, ttl, author, vcnt, day){
        const list_container = document.createElement('div');
        const list_dnum = document.createElement("div");
        const list_ttl = document.createElement("div");
        const list_author = document.createElement("div");
        const list_vcnt = document.createElement("div");
        const list_day = document.createElement("div");

        const container = document.getElementsByClassName('container');
        
        container[0].appendChild(list_container).append(list_dnum, list_ttl, list_author, list_vcnt, list_day);
        list_container.setAttribute("class",'titles2');
        list_dnum.setAttribute("class",'dnum');
        list_ttl.setAttribute("class",'ttl');
        list_author.setAttribute("class",'author');
        list_vcnt.setAttribute("class",'vcnt');
        list_day.setAttribute("class",'day');

        list_dnum.innerHTML=dnum;
        list_ttl.innerHTML=ttl;
        list_author.innerHTML=author;
        list_vcnt.innerHTML=vcnt;
        list_day.innerHTML=day;

        list_container.addEventListener("click",()=>{
            const cur = dnum;
            if(localStorage.getItem('cur')){
                localStorage.removeItem('cur');
                localStorage.setItem('cur',cur);
            }else{
                localStorage.setItem('cur',cur);
            }
            window.location.href = './watch.html';
        })
    }


    if(localStorage.getItem('cur')){
      localStorage.removeItem('cur');
    }
    const keys = Object.keys(localStorage);
    
    while(1){
        if(keys.indexOf('cur')==-1){
            break;
        }else{
            keys.splice(keys.indexOf('cur'),1);
        }
    }
    while(1){
        if(keys.indexOf('acc')==-1){
            break;
        }else{
            keys.splice(keys.indexOf('acc'),1);
        }
    }
    keys.sort((a,b)=>b-a);
    console.log(keys);
    
    if(keys){
        for(let i=0 ; i<keys.length ; i++){
            const item = JSON.parse(localStorage.getItem(keys[i]));
            console.log(item);
            refresh(item.dnum, item.ttl, item.author, item.vcnt, item.day)
        }
    }
})