function display(val)
{
    document.getElementById(id="id1").value+=val;
}

function solve()
{
    let x = document.getElementById("id1").value;
    let z = eval(x);
    document.getElementById("id1").value = z;
}

function clr()
{
    document.getElementById("id1").value = " ";
}