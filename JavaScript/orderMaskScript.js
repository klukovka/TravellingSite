window.onload=function () {
    var element = document.getElementById('Phone');
    var maskOptions = {
        mask: '+{380}(00)000-00-00'
    };
    var mask = IMask(element, maskOptions);

    var element = document.getElementById('Code');
    var maskOptions = {
        mask: '000'
    };
    var mask = IMask(element, maskOptions);

    var element = document.getElementById('Card');
    var maskOptions = {
        mask: '0000 0000 0000 0000'
    };
    var mask = IMask(element, maskOptions);
}