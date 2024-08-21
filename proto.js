function xyz(name, subject, Address)
{
this.name =name; 
this.Address= Address;
this.subject = subject;
}
 xyz.prototype.getName=function(){
     return this.name;
}
 xyz.prototype.getAddress =function () {
     return this.Address;

}

xyz.prototype.grades ="A";

var x1= new xyz("kaushal","java","Earth");
 var x2 = new xyz ("Simplicode", "English", "Mars"); 
 document.write(x1);