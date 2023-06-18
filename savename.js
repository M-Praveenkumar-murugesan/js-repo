// var item_list=[];

// function addItem()
// {
//     var stockItem=document.getElementById('user').value;

//     item_list.push(stockItem);

//     document.getElementById('user').value='';

//     getItem();
// }
// function getItem()
// {
//     var sno=0;
//     var emptyString='';
//     var amount=50;

//     item_list.forEach(function(value,index)
//     {
//         sno+=1;//sno =sno+1
//         amount*=2;
//         emptyString += '<tr><td>'+sno+'</td><td>'+value+"</td><td>"+ amount+'</td></tr>';//emptyString=emptyString+<tr><td>'+sno+'</td><td>'+value+'</td></tr>
//     })

//     document.getElementById('tbodyid').innerHTML=emptyString;

// }
// function check()
// {
//     var num=parseInt(document.getElementById('add').value);
//     var opt='<option>add item</option>';
//     for(var i=0;i<num;i++)
//     {
//         opt += '<option>'+i+'</option>';
//     }
//     document.getElementById('sel').innerHTML=opt;
// }
function check()
{
    var num=parseInt(document.getElementById('text').value);
    var opt='<option>select</option>';
    for(let i=0;i<num;i++)
    {
        opt += '<option>'+i+'</option>';
    }
    document.getElementById('add').innerHTML=opt;
}

// function check()
// {
//     var num=document.getElementById('text').value;
//     var opt='<option>select</option>';
//     for(let i=0 ;i<num;i++)
//     {
//         opt += '<option>'+nui+'</option>';
//     }
//     document.getElementById('add').innerHTML=opt;
//     document.getElementById('text').value="";
// }


// var button1=document.getElementById("btn_1");
// var button2=document.getElementById("btn_2");
// function red()
// {
//     button1.style.backgroundColor="red";
//     button2.style.backgroundColor="black";
//     var add= document.getElementById("btn_1").Value;
//     add++;
//     var add= document.getElementById("btn_1").Value=add;

// }

// function green()
// {
//     button2.style.backgroundColor="green";
//     button1.style.backgroundColor="black";
// }

var zero=document.getElementById("zero");

function red()
{

}
function green()
{

}


