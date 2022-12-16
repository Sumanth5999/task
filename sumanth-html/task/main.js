function validate() {

    var password=document.myForm.password.value;
    var secondpassword=document.myForm.cpassword.value;  

    var emailID = document.myForm.EMail.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    
   if( document.myForm.Name.value == "" ) {
      alert( "Please provide your name!" );
      return false;
   }
   if (atpos < 1 || ( dotpos - atpos < 2 )) {
       alert("Please enter correct email ID")
       return false;
    }
    if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  

      } else if( password != secondpassword ){
       alert( "password must be same !" );
       return false;
   }
   if( document.myForm.Courses.value == "-1" ) {
      alert( "Please select your  Course!" );
      return false;
   }
   if(document.myForm.gender.value == "") {
     alert("please provide your gender!");
     return false;
   }
  
   if(document.myForm.num.value == "") {
     alert("please provide  your valid mobile  number!");
     return false;
   }
     if(document.myForm.birthday.value == "" ) {
      alert("please select your date of birth!");
      return false;
}
if(document.myForm.hindi.checked != true){
   alert("Box1 is  not checked");
   return false;

   } else if(document.myForm.english.checked != true){
   alert(" Box 2 is not checked");
   return false;
   }

if(document.myForm.address.value == "" ) {
   alert("please provide  your  address");
   return false;
}
}