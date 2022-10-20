let list = '';
let number = prompt("값을 입력하세요");
        console.log(typeof(list));
        list+=`<table class="a">`;
            list+=`<tr>`;
                list+=`<th>증감연산자</th>`;
                list+=`<th>설명</th>`;
                list+=`<th>예) let number = ${number}</th>`;
                list+=`<th>순서</th>`
            list+=`</tr>`;
            list+=`<tr>`;
                list+=`<td>변수++</td>`;
                list+=`<td>기존의 변수 값에 1을 더합니다(후위).</td>`;
                list+=`<td>alert(number++) 답:${number++}</td>`;
                list+=`<td>1</td>`
            list+=`</tr>`;
            list+=`<tr>`;
                list+=`<td>++변수</td>`;
                list+=`<td>기존의 변수 값에 1을 더합니다.(전위)</td>`;
                list+=`<td>alert(++number) 답:${++number}</td>`;
                list+=`<td>2</td>`
            list+=`</tr>`;
            list+=`<tr>`;
                list+=`<td>변수--</td>`;
                list+=`<td>기존의 변수 값에 1을 뺍니다.(후위)</td>`;
                list+=`<td>alert(number--) 답:${number--}</td>`;
                list+=`<td>3</td>`
            list+=`</tr>`;
            list+=`<tr>`;
                list+=`<td>--변수</td>`;
                list+=`<td>기존의 변수 값에 1을 뺍니다.(전위)</td>`;
                list+=`<td>alert(--number) 답:${--number}</td>`;
                list+=`<td>4</td>`
            list+=`</tr>`;
        list+=`</table>`;
        document.write(list);