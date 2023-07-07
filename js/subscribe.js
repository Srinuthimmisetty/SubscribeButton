var num=0;
function mainbuttonfun(){
    num++;
    document.getElementById("icon").style.display="flex"
    document.querySelector(".text").innerHTML="Subscribed"
    if(num>=2)
    {
        document.getElementById("maindiv").style.display="flex"
    }
}
function hidediv(){
    document.getElementById("maindiv").style.display="none"
}
function iconsfun(path){
    document.getElementById("icon").src=path;
}
function displayunsubfun(){
    document.getElementById("unsucribeDiv").style.display="flex"
}
function hideunsubdiv(){
    document.getElementById("unsucribeDiv").style.display="none"
}
function hideunsubscribe(){
    document.querySelector(".text").innerHTML="Subscribe"
    document.getElementById("icon").style.display="none"
    document.getElementById("unsucribeDiv").style.display="none"
    num=0;
}
