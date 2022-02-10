var X = 0;
var O = 0;
var flag = 1;

var gride = ["o1.png", "x1.png", "pusta.png"];

var box = [
    "", "", "",
    "", "", "",
    "", "", ""
];

var b = new Array(9);
for (var i = 0; i < 9; i++) {
    b[i] = document.getElementById('b' + i);
}
b[0].addEventListener("click", function() { myfunc(0) });
b[1].addEventListener("click", function() { myfunc(1) });
b[2].addEventListener("click", function() { myfunc(2) });
b[3].addEventListener("click", function() { myfunc(3) });
b[4].addEventListener("click", function() { myfunc(4) });
b[5].addEventListener("click", function() { myfunc(5) });
b[6].addEventListener("click", function() { myfunc(6) });
b[7].addEventListener("click", function() { myfunc(7) });
b[8].addEventListener("click", function() { myfunc(8) });

function myfunc(nr) {
    // alert(nr);
    var cursorValue = $('#b' + nr).css('cursor');
    if (flag == 1 && cursorValue == 'pointer') {

        var picture = "url(tictac/" + gride[1] + ")";
        $('#b' + nr).css('background-image', picture);
        $('#b' + nr).addClass('boxA');
        $('#b' + nr).removeClass('box');
        $('.turn').html('Player O Turn');
        box[nr] = 'X';
        flag = 0;
    } else if (flag == 0 && cursorValue == 'pointer') {
        var picture = "url(tictac/" + gride[0] + ")";
        $('#b' + nr).css('background-image', picture);
        $('#b' + nr).addClass('boxA');
        $('#b' + nr).removeClass('box');
        $('.turn').html('Player X Turn');
        box[nr] = 'O';
        flag = 1;
    }

    if (box[0] == 'X' && box[1] == 'X' && box[2] == 'X') {
        X++;
        $('#X').html('Player X: ' + X);
        $('.messages').html('Player X won!');
        setTimeout(function() { myfunc_reload(); }, 500);

    } else if (box[0] == 'X' && box[3] == 'X' && box[6] == 'X') {
        X++;
        $('#X').html('Player X: ' + X);
        $('.messages').html('Player X won!');
        setTimeout(function() { myfunc_reload(); }, 500);

    } else if (box[0] == 'X' && box[4] == 'X' && box[8] == 'X') {
        X++;
        $('#X').html('Player X: ' + X);
        $('.messages').html('Player X won!');
        setTimeout(function() { myfunc_reload(); }, 500);

    } else if (box[3] == 'X' && box[4] == 'X' && box[5] == 'X') {
        X++;
        $('#X').html('Player X: ' + X);
        $('.messages').html('Player X won!');
        setTimeout(function() { myfunc_reload(); }, 500);

    } else if (box[6] == 'X' && box[7] == 'X' && box[8] == 'X') {
        X++;
        $('#X').html('Player X: ' + X);
        $('.messages').html('Player X won!');
        setTimeout(function() { myfunc_reload(); }, 500);

    } else if (box[1] == 'X' && box[4] == 'X' && box[7] == 'X') {
        X++;
        $('#X').html('Player X: ' + X);
        $('.messages').html('Player X won!');
        setTimeout(function() { myfunc_reload(); }, 500);

    } else if (box[2] == 'X' && box[5] == 'X' && box[8] == 'X') {
        X++;
        $('#X').html('Player X: ' + X);
        $('.messages').html('Player X won!');
        setTimeout(function() { myfunc_reload(); }, 500);

    } else if (box[2] == 'X' && box[4] == 'X' && box[6] == 'X') {
        X++;
        $('#X').html('Player X: ' + X);
        $('.messages').html('Player X won!');
        setTimeout(function() { myfunc_reload(); }, 500);

    }

    if (box[0] == 'O' && box[1] == 'O' && box[2] == 'O') {
        O++;
        $('#O').html('Player O: ' + O);
        $('.messages').html('Player O won!');
        setTimeout(function() { myfunc_reload(); }, 500);

    } else if (box[0] == 'O' && box[3] == 'O' && box[6] == 'O') {
        O++;
        $('#O').html('Player O: ' + O);
        $('.messages').html('Player O won!');
        setTimeout(function() { myfunc_reload(); }, 500);

    } else if (box[0] == 'O' && box[4] == 'O' && box[8] == 'O') {
        O++;
        $('#O').html('Player O: ' + O);
        $('.messages').html('Player O won!');
        setTimeout(function() { myfunc_reload(); }, 500);

    } else if (box[3] == 'O' && box[4] == 'O' && box[5] == 'O') {
        O++;
        $('#O').html('Player O: ' + O);
        $('.messages').html('Player O won!');
        setTimeout(function() { myfunc_reload(); }, 500);

    } else if (box[6] == 'O' && box[7] == 'O' && box[8] == 'O') {
        O++;
        $('#O').html('Player O: ' + O);
        $('.messages').html('Player O won!');
        setTimeout(function() { myfunc_reload(); }, 500);

    } else if (box[1] == 'O' && box[4] == 'O' && box[7] == 'O') {
        O++;
        $('#O').html('Player O: ' + O);
        $('.messages').html('Player O won!');
        setTimeout(function() { myfunc_reload(); }, 500);

    } else if (box[2] == 'O' && box[5] == 'O' && box[8] == 'O') {
        O++;
        $('#O').html('Player O: ' + O);
        $('.messages').html('Player O won!');
        setTimeout(function() { myfunc_reload(); }, 500);

    } else if (box[2] == 'O' && box[4] == 'O' && box[6] == 'O') {
        O++;
        $('#O').html('Player O: ' + O);
        $('.messages').html('Player O won!');
        setTimeout(function() { myfunc_reload(); }, 500);

    } else if ((box[0] == 'X' || box[0] == 'O') && (box[1] == 'X' || box[1] == 'O') && (box[2] == 'X' || box[2] == 'O') && (box[3] == 'X' || box[3] == 'O') &&
        (box[4] == 'X' || box[4] == 'O') && (box[5] == 'X' || box[5] == 'O') && (box[6] == 'X' || box[6] == 'O') && (box[7] == 'X' || box[7] == 'O') && (box[8] == 'X' || box[8] == 'O')) {
        $('.messages').html('Match Tie!');
        setTimeout(function() { myfunc_reload(); }, 500);
    }
}
// Function to reset game
function myfunc_reload() {
    if (flag == 1) {
        $('.turn').html('Player O Turn');
        flag = 0;
    } else {
        $('.turn').html('Player X Turn');
        flag = 1;
    }
    for (var i = 0; i < 9; i++) {
        var picture = "url(tictac/" + gride[2] + ")";
        $('#b' + i).css('background-image', picture);
        $('#b' + i).addClass('box');
        $('#b' + i).removeClass('boxA');
        box[i] = "";
    }
    $('.messages').html('');
}
// Function to reset game
function my_reload() {
    location.reload();
}