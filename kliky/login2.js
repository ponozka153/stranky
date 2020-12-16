var dnes = new Date();
var čas = dnes.getHours();
var ahoj;
if(čas > 6 && čas <= 12){
    ahoj = "Dobré ráno ^^";
}
else if(čas > 12 && čas <= 18){
    ahoj = "Dobré odpoledne ^-^";
}
else if(čas > 18 && čas <= 22){
    ahoj = "Dobrý večer ;)";
}
else if(čas > 22 && čas <= 24){
    ahoj = "Dobrou noc <3"  ;
}
else if(čas > 24 && čas <= 6){
    ahoj = "Dobrou noc <3";
} else {
    ahoj = 'yo shits broken yo!';
    }

var show = document.getElementById("zpráva");
show.textContent = ahoj;



function kliky()
{ //dominiony
    var kill=document.getElementById("kill").value
    var death=document.getElementById("death").value
    var pozice=document.getElementById("position").value
    var win=document.getElementById("win")
    var kd= kill / death
    var kliks= kill / death * 6 * pozice
    if(win.checked == true){
        var kliks2= kill / death * 2 * pozice
        alert(`Vaše K/D je ${kd}
        Váš počet kliků je ${kliks2}`)
    } else {
    alert(`Vaše K/D je ${kd}
        Váš počet kliků je ${kliks}`)
    }
}
function kliky2()
{ //duely
    var kill=document.getElementById("kill").value
    var death=document.getElementById("death").value
    var win=document.getElementById("win")
    var kd= kill / death
    if(kd > 3){
        alert(`Bruh, víc jak tři zářezů nejde mít v duelech`); return
    } if (death > 4){
        alert(`Bruh, víc jak 4 umrtí nejde mít v duelech`); return
    } else {
    var kliks= death * 5
    if(win.checked == true){
        var kliks2= death * 4
        alert(`Vaše K/D je ${kd}
        Váš počet kliků je ${kliks2}`)
    } else {
    alert(`Vaše K/D je ${kd}
        Váš počet kliků je ${kliks}`)}
    }
}
function kliky3()
{
    var kill=document.getElementById("kill").value
    var death=document.getElementById("death").value
    var kd= kill / death
    var kliks = kd * 2
    alert(`Vaše K/D je ${kd}
        Váš počet kliků je ${kliks}`)  
}