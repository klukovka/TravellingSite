let urlParams = new URLSearchParams(window.location.search);
let country = urlParams.get('country');
let city = urlParams.get('city');
let tour = urlParams.get('tour');
let price = urlParams.get('price');

window.onload = names();
function names() {
    Country.innerHTML = "&nbsp Страна: "+country.toString();
    City.innerHTML = "&nbsp Город: "+city.toString();
    Tour.innerHTML = "&nbsp Название тура: "+tour.toString();
    Price.innerHTML = "&nbsp Стоимость путевки: "+price.toString()+" евро";
}
Human.onblur = function () {
    let count = document.getElementById("Human").value;
    if (count<2){
        Price.innerHTML = "&nbsp Стоимость путевки: "+price.toString()+" евро";
    } else {
        let temp = Number(price)*count;
        Price.innerHTML = "&nbsp Стоимость путевки: "+temp.toString()+" евро";
    }
}

Cansel.onclick=function () {
    Name.innerHTML="";
    Home.innerHTML="";
    Phone.innerHTML="";
    Human.innerHTML="";
    inst.innerHTML="";
    Card.innerHTML="";
    Code.innerHTML="";
}

