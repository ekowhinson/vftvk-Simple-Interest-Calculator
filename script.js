
function compute()
{
        
    //calculating the interest and displaying the final value
    var principals=document.getElementById("principal");
    var principal = document.getElementById("principal").value;
    var rate=document.getElementById("rate").value;
    var years=document.getElementById("years").value;
    var interest=principal*years*rate/100;
    var year=new Date().getFullYear()+parseInt(years);
    
    
    if (principal<"1"){
        alert("Enter a positive number");
        principals.focus();
    }

    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"    


}
//updating the rate value displayed        
function updateRate(){
    var rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}