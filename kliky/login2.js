function kliky()
{
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
{
    var kill=document.getElementById("kill").value
    var death=document.getElementById("death").value
    var pozice=document.getElementById("position").value
    var kd= kill / death
    var kliks= kill / death * pozice
    alert(`Vaše K/D je ${kd}
        Váš počet kliků je ${kliks}`)  
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