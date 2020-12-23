
var countDown = new Date("Dec 24, 2020 18:00:00").getTime();
var intervalžejo = setInterval(function() {
  var now = new Date().getTime();
  var timeleft = countDown - now;
      var show1 = document.getElementById("zpráva");
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 *  60));
  Vánoce = `Vánoce za: ${days} dní, ${hours} hodin, ${minutes} minut`
  if(timeleft < 0){
    clearInterval(intervalžejo)
    Vánoce = "Vánoce jsou dnes tuuuu 😇🤭"
  } show1.textContent = Vánoce
  }, 1)

function validate()
{
    var jméno=document.getElementById("jméno").value
    var heslo=document.getElementById("heslo").value
    if(jméno === "Michal"&& heslo === "tajný"){
        setTimeout(() => {
            //window.location.href = "petr.html"
        }, 1);
    }
    else if(jméno === "kliky"&& heslo === "dominion"){
      setTimeout(() => {
          window.location.href = "./kliky/dominion.html"
      }, 1);
    }
    else if(jméno === "kliky"&& heslo === "brawls"){
      setTimeout(() => {
          window.location.href = "./kliky/brawls.html"
      }, 1);
    }
    else if(jméno === "kliky"&& heslo === "duels"){
      setTimeout(() => {
          window.location.href = "./kliky/duels.html"
      }, 1);
    } 
    else if(jméno === "kliky"&& heslo === "custom"){
      setTimeout(() => {
          window.location.href = "custom.html"
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


//<blockquote class="reddit-card" data-card-created="1607172905"><a href="https://www.reddit.com/r/tf2shitposterclub/comments/k6utq5/2_57_13_out_fuck_i_wish_i_knew_how_to_count/">2 57 13 out? fuck I wish I knew how to count</a> from <a href="http://www.reddit.com/r/tf2shitposterclub">r/tf2shitposterclub</a></blockquote>
//<script async src="//embed.redditmedia.com/widgets/platform.js" charset="UTF-8"></script>
