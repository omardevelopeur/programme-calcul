let display=document.querySelector("div input")
let lis=document.querySelectorAll("div.first ul li")
let operation=document.querySelectorAll("div.second ul li")
let quand=document.querySelectorAll("div.four span")
let delet=document.querySelectorAll("div.third span")
console.log(delet)
lis.forEach(function(e){
    e.onclick=function(){
        if (e.className==="one"){
            display.value +=1
        }else if(e.className==="two"){
            display.value+=2
        }else if(e.className==="three"){
            display.value+=3
        }else if(e.className==="four"){
            display.value+=4
        }else if(e.className==="five"){
            display.value+=5
        }else if(e.className==="six"){
            display.value+=6
        }else if(e.className==="seven"){
            display.value+=7
        }else if(e.className==="heigt"){
            display.value+=8
        }else if(e.className==="nine"){
            display.value+=9
        }
    }
})
operation.forEach(function(e){
    e.onclick=function(){
        if (e.className==="+"){
            display.value+="+"
        }else if(e.className==="-"){
            display.value+="-"
        }else if(e.className==="*"){
            display.value+="*"
        }else{
            display.value+="/"
        }
    }
})
quand.forEach(function(e){
    e.onclick=function(){
        if (e.className==="total"){
            display.value=eval(display.value)
        }else if(e.className==="power"){
            display.value+="**"
        }
        else{
            display.value+=0
        }
    }
})
delet.forEach(function(e){
    e.onclick=function(){
        if (e.className==="clear"){
            display.value=""
        }else{
            display.value=display.value.slice(0,-1)
        }
    }
})
console.log(4**5)