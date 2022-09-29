const btnClick=document.getElementById("qouteBtn");
const qoutevalue=document.getElementById("qoute");
const authorvalue=document.getElementById("author");

window.addEventListener("load", ()=>{
    dataMapping();
  });

const asyncFunc = async () => {
	const response = await fetch("https://type.fit/api/quotes");
    console.log(response)
   	const data = await response.json();
    return data;
}

btnClick.addEventListener('click', () => {
    dataMapping();
    
})

function dataMapping()
{
    asyncFunc().then(data => {
        let qouteArray=data;
        console.log(qouteArray);
        let pos=Math.floor(Math.random()*(qouteArray.length-1));
        console.log(pos)
        qoutevalue.textContent=qouteArray[pos]["text"];
        authorvalue.textContent=qouteArray[pos]["author"];
        });
}