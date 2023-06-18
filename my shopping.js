var item_list=[];

function addItem()
{
    var stockItem=document.getElementById('item').value;

    item_list.push(stockItem);

   // console.log(item_list);

    document.getElementById('item').value='';

    getItem();
}

function getItem()
{
    var sno=0;
    var emptyString='';
    var amount=100;

    item_list.forEach(function(value,index)
    {
        sno+=1;//sno =sno+1
        amount=100;
        emptyString += '<tr><td>'+sno+'</td><td>'+value+"</td><td>"+ amount+'</td></tr>';//emptyString=emptyString+<tr><td>'+sno+'</td><td>'+value+'</td></tr>
    })

    document.getElementById('tbodyid').innerHTML=emptyString;

}
