const bord=document.querySelector(".bord");
const bottomi=document.querySelector(".bottomi");
const bix=bord.getElementsByClassName("box");
for(let ro=0;ro<8;ro++){
let boxi;
let boxc;
if(ro % 2 === 0){
boxc=false;

}else{
boxc=true;
}
for(let co=0;co<8;co++){
if(boxc==true){
boxi=co % 2 ===0? "black":"white";

}
else {
boxi=co % 2 ===0? "white":"black";

}

let box=document.createElement("div");
box.setAttribute("class","box");

box.style.width=bord.clientWidth / 8+"px";
box.style.height=bord.clientHeight / 8+"px";
box.style.background=boxi;

bord.appendChild(box);
}
}
const st=bord.getElementsByClassName("st");
for(let i=0;i<st.length;i++){
st[i].addEventListener("pointermove",(e)=>{
let x=e.pageX;
let y=e.pageY;
st[i].style.left=x-30+"px";
st[i].style.top=y-30+"px";
box.appendChild(st[i]);

});}
for(let bix=0;bix<8;bix++){
if(bix[1] && bix % 2 ===0){
  st.classList.add("st");
}
}
   
