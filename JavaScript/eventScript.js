if (window.XMLHttpRequest)
{ // для IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
}
else
{ // для IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET","events.xhtml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

document.getElementById("sale1").innerHTML=xmlDoc.getElementsByTagName("sale")[0].childNodes[0].nodeValue;
document.getElementById("tour1").innerHTML=xmlDoc.getElementsByTagName("tour")[0].childNodes[0].nodeValue;
document.getElementById("date1").innerHTML=xmlDoc.getElementsByTagName("date")[0].childNodes[0].nodeValue;

document.getElementById("sale2").innerHTML=xmlDoc.getElementsByTagName("sale")[1].childNodes[0].nodeValue;
document.getElementById("tour2").innerHTML=xmlDoc.getElementsByTagName("tour")[1].childNodes[0].nodeValue;
document.getElementById("date2").innerHTML=xmlDoc.getElementsByTagName("date")[1].childNodes[0].nodeValue;

document.getElementById("sale3").innerHTML=xmlDoc.getElementsByTagName("sale")[2].childNodes[0].nodeValue;
document.getElementById("tour3").innerHTML=xmlDoc.getElementsByTagName("tour")[2].childNodes[0].nodeValue;
document.getElementById("date3").innerHTML=xmlDoc.getElementsByTagName("date")[2].childNodes[0].nodeValue;

document.getElementById("sale4").innerHTML=xmlDoc.getElementsByTagName("sale")[3].childNodes[0].nodeValue;
document.getElementById("tour4").innerHTML=xmlDoc.getElementsByTagName("tour")[3].childNodes[0].nodeValue;
document.getElementById("date4").innerHTML=xmlDoc.getElementsByTagName("date")[3].childNodes[0].nodeValue;