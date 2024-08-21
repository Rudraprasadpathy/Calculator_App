function fun1(){
    var x=document.getElementById("rad1");
    var y=document.getElementById("rad2");
    if(x.checked == true)
    {
        alert("Wrong Answer.The correct answer is : "+y.value );
    }
        

    else if (y.checked == true)
    {
        alert("Right Answer");
    
    }

    else{
        alert("No option selected");
    }
}

function Selected(){
    var x=document.getElementById("one");
    alert(x.optio[x.selectedIndex].value);
}