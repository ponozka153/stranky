function validate()
{
    var jméno=document.getElementById("jméno").value
    var heslo=document.getElementById("heslo").value
    if(jméno === "Michal"&& heslo === "tajný"){
        setTimeout(() => {
            //window.location.href = "petr.html"
            
        }, 1);
    }
    else{ alert ("Hm, neumíš heslo, git gud")} // Plán je že udělám dvě stránky a každá bude podle přihlašovacího jména
}
//function jes()
//{
  //  if(logged === "Petr"){
    //    setTimeout(() => {
      ///      delete logged
         //   window.location.href = "petr.html"
        //}, 1000);
    //if(logged === "Michal"){
      //  setTimeout(() => {
        //    delete logged
          //  window.location.href = "petr.html"
        //}, 1000);

    //}} else {
      //  setTimeout(() => {
       //     window.location.href = "login.html" 
       //document.write("kkot")
     //  logged.push("uga buga")
       //document.write(logged)
         //   delete logged
      //  }, 1);
    //}
//}