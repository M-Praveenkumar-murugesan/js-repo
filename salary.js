function checkEid()
{
    var employeeId=document.getElementById('eid').value;
    var span1=document.getElementById('sp1');
    if(employeeId !='')
    {
        span1.innerHTML='<button>ok</button>'
    }
    else
    {
        span1.innerHTML='Code';
    }
}
function checkEroll()
{
    var employeeRoll=document.getElementById('eroll').value;
    var span3=document.getElementById('sp3');
    if(employeeRoll !='')
    {
        span3.innerHTML='<button>ok</button>';
    }
    else
    {
        span3.innerHTML='Plase enter value';
    }
}

function calSalary()
{
    var basicPay=parseInt(document.getElementById('basic').value);
    var hra=document.getElementById('hra').value=basicPay*(12/100);
    var da=document.getElementById('da').value=basicPay*(10/100);
    var pf=document.getElementById('pf').value=basicPay*(5/100);
    var hra1=parseInt(hra);
    var da1=parseInt(da);
    var pf1=parseInt(pf);
    var netSalary=document.getElementById('nsalary').value=(basicPay+hra1+da1);
    var netSalary1=parseInt(netSalary);
    var grossSalary=document.getElementById('gsalary').value=netSalary1-pf1;
document.getElementById('tbodyid').innerHTML='<tr><td>'+basicPay+'</td><td>'+hra1+'</td><td>'+da1+'</td><td>'+pf1+'</td><td>'+netSalary1+'</td><td>'+Total+'</td></tr>'
}
