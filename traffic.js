var button1=document.getElementById("btn-1");
var button2=document.getElementById("btn-2");
var button3=document.getElementById("btn-3");
var button4=document.getElementById("btn-4");
var button5=document.getElementById("btn-5");
var button6=document.getElementById("btn-6");
function red()
{
button1.style.backgroundColor="red";
button4.style.backgroundColor="red";
button2.style.backgroundColor="gray";
button3.style.backgroundColor="gray";
button5.style.backgroundColor="gray";
button6.style.backgroundColor="gray";
}
function yellow()
{
    button2.style.backgroundColor="yellow";
    button5.style.backgroundColor="yellow";
    button3.style.backgroundColor="gray";
    button1.style.backgroundColor="gray";
    button4.style.backgroundColor="gray";
    button6.style.backgroundColor="gray";
}
function green()
{
    button3.style.backgroundColor="green";
    button6.style.backgroundColor="green";
    button2.style.backgroundColor="gray";
    button4.style.backgroundColor="gray";
    button1.style.backgroundColor="gray";
    button5.style.backgroundColor="gray";
}
