document.getElementById('get').addEventListener('submit',getword);

function getword(e){
    e.preventDefault();
    let word=document.getElementById('input1');
    let option=document.getElementById('lang').value;  
var url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180825T164515Z.813b4af143d2e95d.50604b2d1f2e3dc4993a4dba0ce12cad92c55393&lang=${option}&text=${word.value}`;

    fetch(url).then((res)=>res.json()).
    then((data)=>{
        if(data.code==404){
            document.getElementById('output').innerHTML=`<h3 class="">API Limit Exceeded</h3>`;
        }else{
            document.getElementById('output').innerHTML=`<h3 class="">${data.text[0]}</h3>`; 
        }   
    });
      // word.value=''; 
}
