let accumulator = 0

        let dcnt = JSON.parse( window.localStorage.getItem( 'acc' ))
        console.log("dcnt 1 : ", dcnt)

        if ( dcnt === null ) {
            dcnt = 0
        } else { 
            accumulator = dcnt
        }

        var refcount = 0 

        document.addEventListener( 'DOMContentLoaded', () => {
            const title = document.querySelector('#title')
            const author = document.querySelector('#author')
            const text = document.querySelector('#text')
            const submit = document.querySelector('#submit')

            const err = document.querySelector('#err_msg')

            err.textContent = "제목과 작성자 내용을 입력해 주세요."

            submit.addEventListener( 'click' , () => {

                if( title.value == '' || author.value == '' || text.value == '' ) {
                    err.textContent = "제목과 작성자 본문은 필수적으로 입력해야 합니다."
                } else {
                accumulator += 1
                alert('완료')
                console.log(accumulator)

                let today = new Date()
                let day = today.getFullYear() + '.' + (today.getMonth() + 1) + '.' + today.getDate() + '.' 
            
                let article = new Article( accumulator, title.value, author.value, text.value, day, refcount ) 

                localStorage.setItem( 'acc' , JSON.stringify( accumulator ) )
                localStorage.setItem( 'cur' , JSON.stringify( accumulator ) )
                localStorage.setItem( accumulator , JSON.stringify( article ) ) 
                window.location.href = './watch.html';
                }
              })
        })