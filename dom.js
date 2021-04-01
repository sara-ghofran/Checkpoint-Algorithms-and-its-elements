
const button = document.querySelector("#btn");
const prnt =document.querySelector(".Todoitem");
const global =document.querySelector(".global");
const newmsg= document.createElement("div");
  

button.addEventListener("click", () => {
 const text=document.querySelector("#txt");
 global.appendChild(newmsg);
newmsg.setAttribute('class','error')
 
  
 const str=text.value
 if(str[str.length-1]!=='.'){
  const msg= document.createElement("div");
  newmsg.appendChild(msg);
  msg.innerHTML='you have to finish your sentence with " . "'
  text.value=''
  const close= document.createElement("button");
  close.setAttribute('class','supp')
  close.innerHTML='X'
  newmsg.appendChild(close);
  close.addEventListener("click", () => {
    msg.innerHTML=''
    close.parentNode.removeChild(close)

  })
}
else{
  const newtodo= document.createElement("div");
  prnt.appendChild(newtodo);
  newtodo.setAttribute('class','item')
  const name= document.createElement("div");
  newtodo.appendChild(name);
  name.innerHTML=str
  text.value=''
  name.setAttribute("class","nom")
  const scan= document.createElement("button");
  scan.setAttribute('class','supp')
  scan.innerHTML='Scan'
  newtodo.appendChild(scan);
  const result=document.createElement("p")
  const arr=str.split('')
  let l=0
  let w=1
  let v=0
  for (let i=0 ; i<arr.length-2 ;i++){
    if (arr[i]!==' . '){
      l++
      if(arr[i]===' '){
        w++
      }else
    if(arr[i]==='a'|| arr[i]==='e' || arr[i]==='i' || arr[i]==='o'|| arr[i]==='u' ){
      v++
    }
 
      }
    }
  result.setAttribute('class','hidden')
  result.innerHTML=`The length of the sentence: ${l} , the number of words : ${w} , the number of vowels : ${v}`
  name.appendChild(result);
  scan.addEventListener("click", () => {
    result.setAttribute('class','name') })
}
})

