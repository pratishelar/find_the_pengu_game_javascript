var score = document.getElementById("score");
score = 0;
var highscore = 0;


function scorefun() {
    score = score + 1;
    document.getElementById("score").innerHTML = 'Score: ' + score;
    document.getElementById('p1').style.visibility = "visible";
    document.getElementById('y1').style.visibility = "hidden";
    document.getElementById('penguin1').style.pointerEvents = 'none';
    var audio = document.getElementById("audio");
    audio.play();
}

function scorefun1() {
    score = score + 1;
    document.getElementById("score").innerHTML = 'Score: ' + score;
    document.getElementById('p2').style.visibility = "visible";
    document.getElementById('y1').style.visibility = "hidden";
    document.getElementById('penguin2').style.pointerEvents = 'none';
    var audio = document.getElementById("audio");
    audio.play();
}

function scorefun2() {
    score = score + 1;
    document.getElementById("score").innerHTML = 'Score: ' + score;
    document.getElementById('p3').style.visibility = "visible";
    document.getElementById('y1').style.visibility = "hidden";
    document.getElementById('penguin3').style.pointerEvents = 'none';
    var audio = document.getElementById("audio");
    audio.play();
}

function scorefun3() {
    score = score + 1;
    document.getElementById("score").innerHTML = 'Score: ' + score;
    document.getElementById('p4').style.visibility = "visible";
    document.getElementById('y1').style.visibility = "hidden";
    document.getElementById('penguin4').style.pointerEvents = 'none';
    var audio = document.getElementById("audio");
    audio.play();
}

function scorefun4() {
    score = score + 1;
    document.getElementById("score").innerHTML = 'Score: ' + score;
    document.getElementById('p5').style.visibility = "visible";
    document.getElementById('y1').style.visibility = "hidden";
    document.getElementById('penguin5').style.pointerEvents = 'none';
    var audio = document.getElementById("audio");
    audio.play();
}

function scorefun5() {
    score = score + 1;
    document.getElementById("score").innerHTML = 'Score: ' + score;
    document.getElementById('p6').style.visibility = "visible";
    document.getElementById('y1').style.visibility = "hidden";
    document.getElementById('penguin6').style.pointerEvents = 'none';
    var audio = document.getElementById("audio");
    audio.play();
}

function scorefun6() {
    score = score + 1;
    document.getElementById("score").innerHTML = 'Score: ' + score;
    document.getElementById('p7').style.visibility = "visible";
    document.getElementById('y1').style.visibility = "hidden";
    document.getElementById('penguin7').style.pointerEvents = 'none';
    var audio = document.getElementById("audio");
    audio.play();
}

function scorefun7() {
    score = score + 1;
    document.getElementById("score").innerHTML = 'Score: ' + score;

    document.getElementById('p8').style.visibility = "visible";
    document.getElementById('y1').style.visibility = "hidden";
    document.getElementById('penguin8').style.pointerEvents = 'none';
    var audio = document.getElementById("audio");
    audio.play();
}

function scorefun8() {
    score = score + 1;
    document.getElementById("score").innerHTML = 'Score: ' + score;

    document.getElementById('p9').style.visibility = "visible";
    document.getElementById('y1').style.visibility = "hidden";
    document.getElementById('penguin9').style.pointerEvents = 'none';
    var audio = document.getElementById("audio");
    audio.play();
}

function scorefun9() {
    score = score + 1;
    document.getElementById("score").innerHTML = 'Score: ' + score;

    document.getElementById('p10').style.visibility = "visible";
    document.getElementById('y1').style.visibility = "hidden";
    document.getElementById('penguin10').style.pointerEvents = 'none';
    var audio = document.getElementById("audio");
    audio.play();
}

function scorefun10() {
    score = score + 1;
    document.getElementById("score").innerHTML = 'Score: ' + score;

    document.getElementById('p11').style.visibility = "visible";
    document.getElementById('y1').style.visibility = "hidden";
    document.getElementById('penguin11').style.pointerEvents = 'none';
    var audio = document.getElementById("audio");
    audio.play();
}

function scorefun11() {
    score = score + 1;
    document.getElementById("score").innerHTML = 'Score: ' + score;

    document.getElementById('p12').style.visibility = "visible";
    document.getElementById('y1').style.visibility = "hidden";
    document.getElementById('penguin12').style.pointerEvents = 'none';
    var audio = document.getElementById("audio");
    audio.play();
}

function scorefun12() {
    score = score + 1;
    document.getElementById("score").innerHTML = 'Score: ' + score;

    document.getElementById('p13').style.visibility = "visible";
    document.getElementById('y1').style.visibility = "hidden";
    document.getElementById('penguin13').style.pointerEvents = 'none';
    var audio = document.getElementById("audio");
    audio.play();

}

function scorefun13() {
    score = score + 1;
    document.getElementById("score").innerHTML = 'Score: ' + score;

    document.getElementById('p14').style.visibility = "visible";
    document.getElementById('y1').style.visibility = "hidden";
    document.getElementById('penguin14').style.pointerEvents = 'none';
    var audio = document.getElementById("audio");
    audio.play();

}

function gameover() {
    document.getElementById('y1').style.visibility = "visible";

    var audio1 = document.getElementById("audio1");
    audio1.play();

    if (score > highscore) {
        highscore = score;
        document.getElementById("highscore").innerHTML = 'highscore: ' + highscore;
    } else if (score <= highscore) {
        document.getElementById("highscore").innerHTML = 'highscore: ' + highscore;

    } else {
        document.getElementById("highscore").innerHTML = 'highscore: ' + score;
        highscore = score;
    }
    document.getElementById("displayscore").innerHTML = 'Your Score: ' + score;

    showall();
}

function newgame() {

    showall();
    document.getElementById('y1').style.visibility = "hidden";
    document.getElementById('yeti').style.pointerEvents = 'auto';

    $(function () {
    var parent = $("#shuffle");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});

    score = 0;
    document.getElementById("score").innerHTML = 'Score: ' + score;

}

function showall()
{
    
    document.getElementById('p1').style.visibility = "hidden";
    document.getElementById('penguin1').style.pointerEvents = 'auto';
    document.getElementById('p2').style.visibility = "hidden";
    document.getElementById('penguin2').style.pointerEvents = 'auto';
    document.getElementById('p3').style.visibility = "hidden";
    document.getElementById('penguin3').style.pointerEvents = 'auto';
    document.getElementById('p4').style.visibility = "hidden";
    document.getElementById('penguin4').style.pointerEvents = 'auto';
    document.getElementById('p5').style.visibility = "hidden";
    document.getElementById('penguin5').style.pointerEvents = 'auto';
    document.getElementById('p6').style.visibility = "hidden";
    document.getElementById('penguin6').style.pointerEvents = 'auto';
    document.getElementById('p7').style.visibility = "hidden";
    document.getElementById('penguin7').style.pointerEvents = 'auto';
    document.getElementById('p8').style.visibility = "hidden";
    document.getElementById('penguin8').style.pointerEvents = 'auto';
    document.getElementById('p9').style.visibility = "hidden";
    document.getElementById('penguin9').style.pointerEvents = 'auto';
    document.getElementById('p10').style.visibility = "hidden";
    document.getElementById('penguin10').style.pointerEvents = 'auto';
    document.getElementById('p11').style.visibility = "hidden";
    document.getElementById('penguin11').style.pointerEvents = 'auto';
    document.getElementById('p12').style.visibility = "hidden";
    document.getElementById('penguin12').style.pointerEvents = 'auto';
    document.getElementById('p13').style.visibility = "hidden";
    document.getElementById('penguin13').style.pointerEvents = 'auto';
    document.getElementById('p14').style.visibility = "hidden";
    document.getElementById('penguin14').style.pointerEvents = 'auto';
}
