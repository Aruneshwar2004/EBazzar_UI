const theme=document.querySelector(".theme");
let ppp=true;
theme.addEventListener("click",function(){
    ppp=false;
})
if(ppp===true){
    document.body.classList.add(".light");
}
else{
    document.body.classList.add(".dark");
}