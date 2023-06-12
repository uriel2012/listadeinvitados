var nombresinvitados= [];
function submit(){
    var adivinanombre=document.getElementById("name1").value;
    nombresinvitados.push(adivinanombre);
    console.log (adivinanombre);
    console.log (nombresinvitados);
    var longitudnombre=nombresinvitados.length;
    console.log (longitudnombre);
    document.getElementById("displayname").innerHTML=nombresinvitados.toString();
}
function show(){
    var i=nombresinvitados.join("<br>");
     console.log (nombresinvitados);
     document.getElementById("p1").innerHTML=i.toString();
     document.getElementById("sorbutton").style.display="block";
}
function sorting(){
    nombresinvitados.sort();
    var i=nombresinvitados.join("<br>");
    console.log (nombresinvitados);
    document.getElementById("sorted").innerHTML=i.toString();
}
function searching(){
    var s=document.getElementById("s1").value;
    var encontrado=0;
    var j;
    for(j=0;j<nombresinvitados.length;j++){
        if(s==nombresinvitados[j]){
            encontrado=encontrado+1;
        }
    }
    document.getElementById("p2").innerHTML="nombre encontrado"+encontrado+"time/s";
    console.log ("nombre encontrado"+encontrado+"time/s");
}