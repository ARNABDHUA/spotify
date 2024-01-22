console.log('i am arnab');

async function main(){

   let a=await fetch("http://127.0.0.1:5500/songs/")
   let response = await a.text();
   console.log(response)
   let div=Document.createElement("div")
   div.innerHTML=response;
   let tds =div.getElementByTagName("td")
   console.log(tds)



  }
main()

