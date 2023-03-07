function order(){
debugger;
let name_pattern=/^[a-zA-Z\s]/g;
let number_pattern=/[0-9]{10}/g;
let email_pattern=/[a-z0-9]+@[a-z]+\.[a-z]/g;
var check=0;
var input_name=document.getElementById("name").value;
var input_number=document.getElementById("no").value;
var disc_total=0;
var input_email=document.getElementById("email").value;

var place_order=document.getElementsByClassName("ordering");
var total=0;
var no_of_times=0;

if((input_name.match(name_pattern)==null) )
{
    check++;
    document.getElementById("ordered").innerHTML="Invalid Name";
}
else if((input_number.match(number_pattern)==null))
{
    check++;
    document.getElementById("ordered").innerHTML="Invalid Mobile Number";
}
else if((input_email.match(email_pattern)==null)){
    check++;
    document.getElementById("ordered").innerHTML="Invalid Email Id";
}
else if(document.getElementById("addr")==null)
{
    check++;
    document.getElementById("ordered").innerHTML="Please enter the Address";
}
else{

if(check>=1){

}
else{

for(let i=0;i<place_order.length;i++)
{
    if(place_order[i].checked)
    {
        no_of_times++;
        total=total+Number(place_order[i].value);
    }
   

}
if(total>=2000)
{
    disc_total=total-(total*20/100);
    disc_total=math.round(disc_total);
}
else
 disc_total=total;

}


if(no_of_times>0)
document.getElementById("ordered").innerHTML="Order has been successfully. You are requested to pay "+ disc_total+" on delivery";

else
document.getElementById("ordered").innerHTML="No Selection was made";
}
}