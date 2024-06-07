
window.addEventListener("load", function(){
    function hello(){
var a = (Math.floor(Math.random()*6))+1;
var b = (Math.floor(Math.random()*6))+1;
if(a>b){
    document.querySelector("h1").innerHTML="Player 1 wins!!!!";
    document.querySelector("h2").innerHTML="Refresh to play again";
}
if(a===b)
{
    document.querySelector("h1").innerHTML="Its a Draw =( try again";
    document.querySelector("h2").innerHTML="Refresh to play again";
}
if(b>a){
    document.querySelector("h1").innerHTML="Player 2 wins!!!!";
    document.querySelector("h2").innerHTML="Refresh to play again";
}
if (a===1)
    {
        document.querySelector(".circle.l.a").style.visibility="hidden";
        document.querySelector(".circle.l.b").style.visibility="hidden";
        document.querySelector(".circle.l.d").style.visibility="hidden";
        document.querySelector(".circle.l.e").style.visibility="hidden";
        document.querySelector(".circle.l.f").style.visibility="hidden";
         document.querySelector(".circle.l.c").style.visibility="visible";
         document.querySelector(".circle.l.c").style.gridColumn= "span 2";
    }
    if(a===2){
        document.querySelector(".circle.l.a").style.visibility="hidden";
        document.querySelector(".circle.l.b").style.visibility="visible";
        document.querySelector(".circle.l.d").style.visibility="hidden";
        document.querySelector(".circle.l.e").style.visibility="visible";
        document.querySelector(".circle.l.f").style.visibility="hidden";
        document.querySelector(".circle.l.c").style.visibility="hidden";
    }
if(a===3)
    {
        document.querySelector(".circle.l.a").style.visibility="hidden";
        document.querySelector(".circle.l.b").style.visibility="visible";
        document.querySelector(".circle.l.d").style.visibility="visible";
        document.querySelector(".circle.l.e").style.visibility="hidden";
        document.querySelector(".circle.l.f").style.visibility="hidden";
        document.querySelector(".circle.l.c").style.visibility="visible";
        document.querySelector(".circle.l.c").style.gridColumn= "span 2"; 
    }
if(a===4){
    document.querySelector(".circle.l.a").style.visibility="visible";
    document.querySelector(".circle.l.b").style.visibility="visible";
    document.querySelector(".circle.l.d").style.visibility="hidden";
    document.querySelector(".circle.l.e").style.visibility="visible";
    document.querySelector(".circle.l.f").style.visibility="visible";
    document.querySelector(".circle.l.c").style.visibility="hidden";
}
if(a===5){
    document.querySelector(".circle.l.a").style.visibility="visible";
    document.querySelector(".circle.l.b").style.visibility="visible";
    document.querySelector(".circle.l.d").style.visibility="visible";
    document.querySelector(".circle.l.e").style.visibility="visible";
    document.querySelector(".circle.l.f").style.visibility="hidden";
    document.querySelector(".circle.l.c").style.visibility="visible";
    document.querySelector(".circle.l.c").style.gridColumn= "span 2"; 
}
if (b===1)
        {
            document.querySelector(".circle.m.a").style.visibility="hidden";
            document.querySelector(".circle.m.b").style.visibility="hidden";
            document.querySelector(".circle.m.f").style.visibility="hidden";
            document.querySelector(".circle.m.d").style.visibility="hidden";
            document.querySelector(".circle.m.e").style.visibility="hidden";
            document.querySelector(".circle.m.c").style.visibility="visible";
            document.querySelector(".circle.m.c").style.gridColumn= "span 2";
    }
    if(b===2){
        document.querySelector(".circle.m.a").style.visibility="hidden";
        document.querySelector(".circle.m.b").style.visibility="visible";
        document.querySelector(".circle.m.d").style.visibility="hidden";
        document.querySelector(".circle.m.e").style.visibility="visible";
        document.querySelector(".circle.m.f").style.visibility="hidden";
         document.querySelector(".circle.m.c").style.visibility="hidden";
    }
    if(b===3)
        {
            document.querySelector(".circle.m.a").style.visibility="hidden";
            document.querySelector(".circle.m.b").style.visibility="visible";
            document.querySelector(".circle.m.d").style.visibility="visible";
            document.querySelector(".circle.m.e").style.visibility="hidden";
            document.querySelector(".circle.m.f").style.visibility="hidden";
             document.querySelector(".circle.m.c").style.visibility="visible";
             document.querySelector(".circle.m.c").style.gridColumn= "span 2"; 
        }    
if(b===4){
    document.querySelector(".circle.m.a").style.visibility="visible";
    document.querySelector(".circle.m.b").style.visibility="visible";
    document.querySelector(".circle.m.d").style.visibility="hidden";
    document.querySelector(".circle.m.e").style.visibility="visible";
    document.querySelector(".circle.m.f").style.visibility="visible";
    document.querySelector(".circle.m.c").style.visibility="hidden";
}
if(b===5){
    document.querySelector(".circle.m.a").style.visibility="visible";
    document.querySelector(".circle.m.b").style.visibility="visible";
    document.querySelector(".circle.m.d").style.visibility="visible";
    document.querySelector(".circle.m.e").style.visibility="visible";
    document.querySelector(".circle.m.f").style.visibility="hidden";
    document.querySelector(".circle.m.c").style.visibility="visible";
    document.querySelector(".circle.m.c").style.gridColumn= "span 2"; 
}}
hello();
});

