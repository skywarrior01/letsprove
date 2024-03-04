let no=document.getElementById("no")
let yes=document.getElementById("yes")
no.addEventListener("mouseover",()=>{
    let x = Math.round(Math.random()*500)
    let y = Math.round(Math.random()*500)
    no.style.left=`${x}px`
    no.style.top=`${y}px`
})
no.addEventListener("click",(e)=>{
    e.preventDefault()
    let x = Math.round(Math.random()*500)
    
    let y = Math.round(Math.random()*500)
    no.style.left=`${x}px`
    no.style.top=`${y}px`
})

yes.addEventListener("click",()=>{
    window.open("iKnew.html")
})

