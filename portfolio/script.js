

var navAnchor=document.querySelectorAll('#navbar a');
var start;
for(var i=0; i<navAnchor.length;i++){
    navAnchor[i].addEventListener('click', function(event){
        event.preventDefault();
        var target=this.getAttribute("href");
        target=document.getElementById(target.substr(1));
        if(target.getBoundingClientRect().top >0){
            start=setInterval(scrollDown,10,target);
        }
        else{
            start=setInterval(scrollUp,10,target);
        }
        
});
}
function scrollUp(target){
    var current=target.getBoundingClientRect().top;

        if(current>=0){
            clearInterval(start);
            return;
        }
        window.scrollBy(0,-40);
        if(current==target.getBoundingClientRect().top){
            clearInterval(start);
            return;
        }  
}
function scrollDown(target){
    var current=target.getBoundingClientRect().top;

        if(current<=0){
            clearInterval(start);
            return;
        }
        window.scrollBy(0,40);
        if(current==target.getBoundingClientRect().top){
            clearInterval(start);
            return;
        }
    }
var bool=false;
var i = 0;
var about=document.querySelector(".start");
window.addEventListener('scroll',checkScroll);
function checkScroll(){
    
    var coordinate=about.getBoundingClientRect();
    if(!bool && coordinate.top<=window.innerHeight &&coordinate.top>0){
        console.log("hi");
        bool=true;
        i=0;
        typeWriter();
    }
    else if(coordinate.top<0 && bool){
        bool=false;
        console.log("bye");
        document.getElementById("type").innerHTML = " ";
    }
}


var txt =" \"Enthusiastic Coder\" ";
var speed = 50;
function typeWriter(){
    
        if (i < txt.length) {
            document.getElementById("type").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter,50);
        }
}