function validate() {
     var emailID = document.myForm.EMail1.value;
     atpos = emailID.indexOf("@");
     dotpos = emailID.lastIndexOf(".");
     
    if( document.myForm.Name1.value == "" ) {
       alert( "Please provide your name!" );
       document.myForm.Name1.focus() ;
       return false;
    }
    if( document.myForm.EMail1.value == "" ) {
       alert( "Please provide your Email!" );
       document.myForm.EMail.focus() ;
       return false;
    }
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email ID")
        document.myForm.EMail1.focus() ;
        return false;
     }
    if( document.myForm.password1.value == "" ) {
        alert( "Please provide your password  !" );
        document.myForm.password1.focus() ;
        return false;
     }
    if( document.myForm.Courses1.value == "-1" ) {
       alert( "Please provide your  Courses type !" );
       return false;
    }
    if(document.myForm.number1.value == "" ) {
      alert("please provide  your valid mobile  number!");
      return false;
 }

}