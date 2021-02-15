let result = document.getElementById("resultButton");
let q1=0, q2=0, q3=0, q4=0, q5=0, q6=0,q7=0,q8=0,q9=0,q10=0;

result.onmouseout = function(){

    question_1();
    question_2();
    question_3();
    question_4();
    question_5();
    question_6();
    question_7();
    question_8();
    question_9();
    question_10();
    let sum=q1+q2+q3+q4+q5+q6+q7+q8+q9+q10;
    let result = document.getElementById("res");
    if (sum==0)
        res.style.color="red";
    if (sum>0 && sum<5)
        res.style.color="orange";
    if (sum>=5 && sum<8)
        result.style.color="#ffe067";
    if (sum>=8)
        result.style.color="green";
    if (sum==10){
        result.style.backgroundColor="#62f0c9";
    }

    res.innerHTML = "Результат: "+sum.toString();

}
result.onclick = function () {
    scrolled = window.pageYOffset;
    scrollToResult();

}
function scrollToResult() {
    if (scrolled>0) {
        window.scrollTo(0,scrolled);
        scrolled=scrolled-100; //скорость прокутки
        timer = setTimeout(scrollToResult,5);
    }
    else {
        clearTimeout(timer);
        window.scrollTo(0, 220);
    }
}

function question_1() {

    let capital_1 = document.getElementById("capital_1"); //
    let capital_2 = document.getElementById("capital_2");
    let capital_3 = document.getElementById("capital_3");
    let capital_4 = document.getElementById("capital_4");
    let q11 = document.getElementById("q11");
    let q12 = document.getElementById("q12");
    let q13 = document.getElementById("q13");
    let q14 = document.getElementById("q14");
    q11.style.color = "green";
    q12.style.color = "#37393c";
    q13.style.color = "#37393c";
    q14.style.color = "#37393c";
    if (capital_1.checked){
        q1=1;
    }
    if (capital_2.checked){
        q1=0;
        q12.style.color="red";
    }
    if (capital_3.checked){
        q1=0;
        q13.style.color="red";
    }
    if (capital_4.checked){
        q1=0;
        q14.style.color="red";
    }
}

function question_2() {
    let mountain_1 = document.getElementById("mountain_1");
    let mountain_2 = document.getElementById("mountain_2");
    let mountain_3 = document.getElementById("mountain_3"); //
    let mountain_4 = document.getElementById("mountain_4");
    let q21 = document.getElementById("q21");
    let q22 = document.getElementById("q22");
    let q23 = document.getElementById("q23");
    let q24 = document.getElementById("q24");
    q23.style.color = "green";
    q21.style.color = "#37393c";
    q22.style.color = "#37393c";
    q24.style.color = "#37393c";
    if (mountain_3.checked){
        q2=1;
    } else
    if (mountain_2.checked){
        q2=0;
        q22.style.color = "red";
    } else
    if (mountain_1.checked){
        q2=0;
        q21.style.color = "red";
    } else
    if (mountain_4.checked){
        q2=0;
        q24.style.color = "red";
    }
}

function question_3() {
    let river_1 = document.getElementById("river_1");
    let river_2 = document.getElementById("river_2");  //
    let river_3 = document.getElementById("river_3");
    let river_4 = document.getElementById("river_4");
    let q31 = document.getElementById("q31");
    let q32 = document.getElementById("q32");
    let q33 = document.getElementById("q33");
    let q34 = document.getElementById("q34");
    q32.style.color = "green";
    q31.style.color = "#37393c";
    q33.style.color = "#37393c";
    q34.style.color = "#37393c";
    if (river_1.checked){
        q3=0;
        q31.style.color = "red";
    } else
    if (river_2.checked){
        q3=1;

    } else
    if (river_3.checked){
        q3=0;
        q33.style.color = "red";
    } else
    if (river_4.checked){
        q3=0;
        q34.style.color = "red";
    }
}

function question_4() {
    let president_1 = document.getElementById("president_1"); //
    let president_2 = document.getElementById("president_2");
    let president_3 = document.getElementById("president_3");
    let president_4 = document.getElementById("president_4");
    let q41 = document.getElementById("q41");
    let q42 = document.getElementById("q42");
    let q43 = document.getElementById("q43");
    let q44 = document.getElementById("q44");
    q41.style.color = "green";
    q42.style.color = "#37393c";
    q43.style.color = "#37393c";
    q44.style.color = "#37393c";
    if (president_1.checked){
        q4=1;
    }
    if (president_2.checked){
        q4=0;
        q42.style.color="red";
    }
    if (president_3.checked){
        q4=0;
        q43.style.color="red";
    }
    if (president_4.checked){
        q4=0;
        q44.style.color="red";
    }

}

function question_5() {
    let famous_1 = document.getElementById("famous_1");
    let famous_2 = document.getElementById("famous_2");
    let famous_3 = document.getElementById("famous_3");
    let famous_4 = document.getElementById("famous_4"); //
    let q51 = document.getElementById("q51");
    let q52 = document.getElementById("q52");
    let q53 = document.getElementById("q53");
    let q54 = document.getElementById("q54");
    q54.style.color = "green";
    q51.style.color = "#37393c";
    q52.style.color = "#37393c";
    q53.style.color = "#37393c";
    if (famous_1.checked){
        q5=0;
        q51.style.color = "red";
    } else
    if (famous_2.checked){
        q5=0;
        q52.style.color = "red";
    } else
    if (famous_3.checked){
        q5=0;
        q53.style.color = "red";
    } else
    if (famous_4.checked){
        q5=1;
    }

}

function question_6() {
    let actor_1 = document.getElementById("actor_1");
    let actor_2 = document.getElementById("actor_2");
    let actor_3 = document.getElementById("actor_3");
    let actor_4 = document.getElementById("actor_4");
    let q61 = document.getElementById("q61");
    let q63 = document.getElementById("q63");
    let q64 = document.getElementById("q64");
    let q62 = document.getElementById("q62");
    q61.style.color="green";
    q63.style.color="green";
    q64.style.color="green";
    q62.style.color = "#37393c";
    q6=1;
    if (actor_2.checked){
        q6-=0.25;
        q62.style.color="red";
    }
    if (actor_1.checked){}
    else {q6-=0.25;}

    if (actor_3.checked){}
    else {q6-=0.25;}

    if (actor_4.checked){}
    else {q6-=0.25;}
}

function question_7() {
    let dish_1 = document.getElementById("dish_1");
    let dish_2 = document.getElementById("dish_2");
    let dish_3 = document.getElementById("dish_3");
    let dish_4 = document.getElementById("dish_4");
    let q71 = document.getElementById("q71");
    let q73 = document.getElementById("q73");
    let q74 = document.getElementById("q74");
    let q72 = document.getElementById("q72");
    q72.style.color="green";
    q73.style.color="green";
    q74.style.color="green";
    q71.style.color = "#37393c";
    q7=1;
    if (dish_1.checked){
        q7-=0.25;
        q71.style.color="red";
    }
    if (dish_2.checked){}
    else {q7-=0.25;}

    if (dish_3.checked){}
    else {q7-=0.25;}

    if (dish_4.checked){}
    else {q7-=0.25;}
}

function question_8() {
    let singer_1 = document.getElementById("singer_1");
    let singer_2 = document.getElementById("singer_2");
    let singer_3 = document.getElementById("singer_3");
    let singer_4 = document.getElementById("singer_4");
    let q81 = document.getElementById("q81");
    let q83 = document.getElementById("q83");
    let q84 = document.getElementById("q84");
    let q82 = document.getElementById("q82");
    q81.style.color = "#37393c";
    q82.style.color = "green";
    q83.style.color = "green";
    q84.style.color = "#37393c";

    q8=1;

    if (singer_1.checked){
        q8-=0.25;
        q81.style.color="red";
    }
    if (singer_4.checked){
        q8-=0.25;
        q84.style.color="red";
    }
    if (singer_2.checked){}
    else {q8-=0.25;}

    if (singer_3.checked){}
    else {q8-=0.25;}

}

function question_9() {
    let literature_1 = document.getElementById("literature_1");
    let literature_2 = document.getElementById("literature_2");
    let literature_3 = document.getElementById("literature_3");
    let literature_4 = document.getElementById("literature_4");
    let q91 = document.getElementById("q91");
    let q93 = document.getElementById("q93");
    let q94 = document.getElementById("q94");
    let q92 = document.getElementById("q92");
    q93.style.color = "#37393c";
    q92.style.color = "green";
    q91.style.color = "green";
    q94.style.color = "#37393c";

    q9=1;

    if (literature_4.checked){
        q9-=0.25;
        q94.style.color="red";
    }
    if (literature_3.checked){
        q9-=0.25;
        q93.style.color="red";
    }
    if (literature_1.checked){}
    else {q9-=0.25;}

    if (literature_2.checked){}
    else {q9-=0.25;}

}

function question_10() {
    let brend_1 = document.getElementById("brend_1");
    let brend_2 = document.getElementById("brend_2");
    let brend_3 = document.getElementById("brend_3");
    let brend_4 = document.getElementById("brend_4");
    let q101 = document.getElementById("q101");
    let q103 = document.getElementById("q103");
    let q104 = document.getElementById("q104");
    let q102 = document.getElementById("q102");
    q103.style.color = "green";
    q102.style.color = "green";
    q101.style.color = "green";
    q104.style.color = "green";

    q10=1;

    if (brend_1.checked){}
    else {q10-=0.25;}
    if (brend_2.checked){}
    else {q10-=0.25;}
    if (brend_3.checked){}
    else {q10-=0.25;}
    if (brend_4.checked){}
    else {q10-=0.25;}


}

var bigsizeW = "530"; //увеличение и уменьшение картинки при нажатии
var bigsize = "350";
var smallsize = "100";
function changeSizeImage(im) {
    if(im.height == bigsize){
        im.width = smallsize;
        im.height = smallsize;
    }
    else{
        im.width = bigsizeW;
        im.height = bigsize;
    }
}