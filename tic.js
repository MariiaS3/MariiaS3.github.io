var X = 0;
var O = 0;

function won() {
    document.getElementById("message").innerHTML = "";
}



function myfunc() {

    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;


    // Checking if Player X won or not and after 
    // that disabled all the other fields
    if (b1 == 'X' && b2 == 'X' && b3 == 'X') {
        X++;
        document.getElementById("resultX").innerHTML = X;
        document.getElementById("message").innerHTML = "Player X won";
        setTimeout("won()", 1000);
        myfunc_reload();
    } else if (b1 == 'X' && b4 == 'X' && b7 == 'X') {
        X++;
        document.getElementById("message").innerHTML = "Player X won";
        document.getElementById("resultX").innerHTML = X;
        setTimeout("won()", 1000);
        myfunc_reload();
    } else if (b1 == 'X' && b5 == 'X' && b9 == 'X') {
        X++;
        document.getElementById("message").innerHTML = "Player X won";
        document.getElementById("resultX").innerHTML = X;
        setTimeout("won()", 1000);
        myfunc_reload();
    } else if (b2 == 'X' && b5 == 'X' && b8 == 'X') {
        X++;
        document.getElementById("message").innerHTML = "Player X won";
        document.getElementById("resultX").innerHTML = X;
        setTimeout("won()", 1000);
        myfunc_reload();
    } else if (b3 == 'X' && b5 == 'X' && b7 == 'X') {
        X++;
        document.getElementById("message").innerHTML = "Player X won";
        document.getElementById("resultX").innerHTML = X;
        setTimeout("won()", 1000);
        myfunc_reload();
    } else if (b3 == 'X' && b6 == 'X' && b9 == 'X') {
        X++;
        document.getElementById("message").innerHTML = "Player X won";
        document.getElementById("resultX").innerHTML = X;
        setTimeout("won()", 1000);
        myfunc_reload();
    } else if (b4 == 'X' && b5 == 'X' && b6 == 'X') {
        X++;
        document.getElementById("message").innerHTML = "Player X won";
        document.getElementById("resultX").innerHTML = X;
        setTimeout("won()", 1000);
        myfunc_reload();
    } else if (b7 == 'X' && b8 == 'X' && b9 == 'X') {
        X++;
        document.getElementById("message").innerHTML = "Player X won";
        document.getElementById("resultX").innerHTML = X;
        setTimeout("won()", 1000);
        myfunc_reload();
    }

    // Checking for Player 0 starts, Is player 0 won or
    // not and after that disabled all the other fields
    else if (b1 == 'O' && b2 == 'O' && b3 == 'O') {
        O++;
        document.getElementById("message").innerHTML = "Player O won";
        document.getElementById("resultO").innerHTML = O;
        setTimeout("won()", 1000);
        myfunc_reload();
    } else if (b1 == 'O' && b4 == 'O' && b7 == 'O') {
        O++;
        document.getElementById("message").innerHTML = "Player O won";
        document.getElementById("resultO").innerHTML = O;
        setTimeout("won()", 1000);
        myfunc_reload();
    } else if (b1 == 'O' && b5 == 'O' && b9 == 'O') {
        O++;
        document.getElementById("message").innerHTML = "Player O won";
        document.getElementById("resultO").innerHTML = O;
        setTimeout("won()", 1000);
        myfunc_reload();
    } else if (b2 == 'O' && b5 == 'O' && b8 == 'O') {
        O++;
        document.getElementById("message").innerHTML = "Player O won";
        document.getElementById("resultO").innerHTML = O;
        setTimeout("won()", 1000);
        myfunc_reload();
    } else if (b3 == 'O' && b5 == 'O' && b7 == 'O') {
        O++;
        document.getElementById("message").innerHTML = "Player O won";
        document.getElementById("resultO").innerHTML = O;
        setTimeout("won()", 1000);
        myfunc_reload();
    } else if (b3 == 'O' && b6 == 'O' && b9 == 'O') {
        O++;
        document.getElementById("message").innerHTML = "Player O won";
        document.getElementById("resultO").innerHTML = O;
        setTimeout("won()", 1000);
        myfunc_reload();
    } else if (b4 == 'O' && b5 == 'O' && b6 == 'O') {
        O++;
        document.getElementById("message").innerHTML = "Player O won";
        document.getElementById("resultO").innerHTML = O;
        setTimeout("won()", 1000);
        myfunc_reload();
    } else if (b7 == 'O' && b8 == 'O' && b9 == 'O') {
        O++;
        document.getElementById("message").innerHTML = "Player O won";
        document.getElementById("resultO").innerHTML = O;
        setTimeout("won()", 1000);
        myfunc_reload();
    } else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X' || b2 == 'O') && (b3 == 'X' || b3 == 'O') && (b4 == 'X' || b4 == 'O') &&
        (b5 == 'X' || b5 == 'O') && (b6 == 'X' || b6 == 'O') && (b7 == 'X' || b7 == 'O') && (b8 == 'X' || b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
        document.getElementById("message").innerHTML = "Match Tie";
        setTimeout("won()", 1000);
        myfunc_reload();
    } else {
        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('print').innerHTML = "Player X Turn";
        } else {
            document.getElementById('print').innerHTML = "Player O Turn";
        }
    }
}

// Function to reset game
function myfunc_reload() {
    if (flag == 0) {
        flag = 1;
        document.getElementById('print').innerHTML = "Player X Turn";
    } else {
        flag = 0;
        document.getElementById('print').innerHTML = "Player O Turn";
    }
    document.getElementById("b1").style.background = "#bac4b3";
    document.getElementById("b2").style.background = "#bac4b3";
    document.getElementById("b3").style.background = "#bac4b3";
    document.getElementById("b4").style.background = "#bac4b3";
    document.getElementById("b5").style.background = "#bac4b3";
    document.getElementById("b6").style.background = "#bac4b3";
    document.getElementById("b7").style.background = "#bac4b3";
    document.getElementById("b8").style.background = "#bac4b3";
    document.getElementById("b9").style.background = "#bac4b3";
    document.getElementById("b1").value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';
    document.getElementById("b4").disabled = false;
    document.getElementById("b1").disabled = false;
    document.getElementById("b2").disabled = false;
    document.getElementById("b3").disabled = false;
    document.getElementById("b5").disabled = false;
    document.getElementById("b6").disabled = false;
    document.getElementById("b7").disabled = false;
    document.getElementById("b8").disabled = false;
    document.getElementById("b9").disabled = false;
}
// Function to reset game
function my_reload() {
    location.reload();
    document.getElementById("b1").value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';
}
flag = 1;

function myfunc_1() {
    if (flag == 1) {
        document.getElementById("b1").style.background = "#b6ce98";
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
    } else {
        document.getElementById("b1").style.background = "#dae6a6";
        document.getElementById("b1").value = "O";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}

function myfunc_2() {
    if (flag == 1) {
        document.getElementById("b2").style.background = "#b6ce98";
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
    } else {
        document.getElementById("b2").style.background = "#dae6a6";
        document.getElementById("b2").value = "O";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}

function myfunc_3() {
    if (flag == 1) {
        document.getElementById("b3").style.background = "#b6ce98";
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
    } else {
        document.getElementById("b3").style.background = "#dae6a6";
        document.getElementById("b3").value = "O";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}

function myfunc_4() {
    if (flag == 1) {
        document.getElementById("b4").style.background = "#b6ce98";
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
    } else {
        document.getElementById("b4").style.background = "#dae6a6";
        document.getElementById("b4").value = "O";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}

function myfunc_5() {
    if (flag == 1) {
        document.getElementById("b5").style.background = "#b6ce98";
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
    } else {
        document.getElementById("b5").style.background = "#dae6a6";
        document.getElementById("b5").value = "O";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}

function myfunc_6() {
    if (flag == 1) {
        document.getElementById("b6").style.background = "#b6ce98";
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
    } else {
        document.getElementById("b6").style.background = "#dae6a6";
        document.getElementById("b6").value = "O";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}

function myfunc_7() {
    if (flag == 1) {
        document.getElementById("b7").style.background = "#b6ce98";
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
    } else {
        document.getElementById("b7").style.background = "#dae6a6";
        document.getElementById("b7").value = "O";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}

function myfunc_8() {
    if (flag == 1) {
        document.getElementById("b8").style.background = "#b6ce98";
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;
    } else {
        document.getElementById("b8").style.background = "#dae6a6";
        document.getElementById("b8").value = "O";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}

function myfunc_9() {
    if (flag == 1) {
        document.getElementById("b9").style.background = "#b6ce98";
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
    } else {
        document.getElementById("b9").style.background = "#dae6a6";
        document.getElementById("b9").value = "O";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}