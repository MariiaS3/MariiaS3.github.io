var proverbs = new Array(35);

proverbs[0] = "Love is blind";
proverbs[1] = "Practice makes perfect";
proverbs[2] = "East or west home is best ";
proverbs[3] = "There is no place like home";
proverbs[4] = "Home is where the heart is";
proverbs[5] = "A friend in need is a friend indeed";
proverbs[6] = "Where there is a will there is a way";
proverbs[7] = "Better late than never";
proverbs[8] = "Time heals all wounds";
proverbs[9] = "Easier said than done";
proverbs[10] = "All is well that ends well";
proverbs[11] = "An eye for an eye and a tooth for a tooth";
proverbs[12] = "Speech is silver silence is golden";
proverbs[13] = "Better an open enemy than a false friend";
proverbs[14] = "Every man has his faults";
proverbs[15] = "Never judge a book by its cover";
proverbs[16] = "A man is as old as he feels";
proverbs[17] = "No bees no honey no work no money";
proverbs[18] = "Knowledge is power";
proverbs[19] = "Courtesy costs nothing";
proverbs[20] = "A penny saved is a penny earned";
proverbs[21] = "As you make your bed so you must lie in it";
proverbs[22] = "The grass is always greener on the other side of the fence";
proverbs[23] = "A chain is only as strong as its weakest link";
proverbs[24] = "Actions speak louder than words";
proverbs[25] = "A journey of thousand miles begins with a single step";
proverbs[26] = "All good things come to an end";
proverbs[27] = "All that glitters is not gold";
proverbs[28] = "All is fair in love and war";
proverbs[29] = "Better safe than sorry";
proverbs[31] = "A picture speaks a thousand words";
proverbs[32] = "Look before you leap";
proverbs[33] = "Money is the root of all evil";
proverbs[34] = "Clothes do not make the man";

var password = proverbs[Math.floor(Math.random() * 26)];
password = password.toUpperCase();

var size = password.length;
var password1 = "";
var count_fail = 0;



for (i = 0; i < size; i++) {

    if (password.charAt(i) == " ") {
        password1 = password1 + " ";
    } else {
        password1 += "-";
    }
}

function wypisz_haslo() {
    document.getElementById("board").innerHTML = password1;
}



window.onload = start;

var letters = new Array(26);

letters[0] = "A";
letters[1] = "B";
letters[2] = "C";
letters[3] = "D";
letters[4] = "E";
letters[5] = "F";
letters[6] = "G";
letters[7] = "H";
letters[8] = "I";
letters[9] = "J";
letters[10] = "K";
letters[11] = "L";
letters[12] = "M";
letters[13] = "N";
letters[14] = "O";
letters[15] = "P";
letters[16] = "Q";
letters[17] = "R";
letters[18] = "S";
letters[19] = "T";
letters[20] = "U";
letters[21] = "V";
letters[22] = "W";
letters[23] = "X";
letters[24] = "Y";
letters[25] = "Z";


function start() {
    var tresc_diva = "";
    for (i = 0; i < 26; i++) {
        var element = "lit" + i;
        tresc_diva = tresc_diva + '<div class="letter" onclick="sprawdz(' + i + ')"id="' + element + '">' + letters[i] + '</div>';
        if ((i + 1) % 8 == 0) {
            tresc_diva = tresc_diva + '<div style="clear:both;"></div>'
        }
    }
    document.getElementById("alphabet").innerHTML = tresc_diva

    wypisz_haslo();
}

String.prototype.ustawZnak = function(pos, znak) {
    if (pos > this.length - 1) {
        return this.toString();
    } else {
        return this.substring(0, pos) + znak + this.substring(pos + 1);

    }
}

function sprawdz(nr) {

    var hit = false;
    for (i = 0; i < size; i++) {
        if (password.charAt(i) == letters[nr]) {
            password1 = password1.ustawZnak(i, letters[nr]);
            hit = true;
        }
    }
    var element = "lit" + nr;
    if (hit == true) {
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";

        wypisz_haslo();
    } else {
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";");

        count_fail++;
        var img = "img/s" + count_fail + ".jpg";
        document.getElementById("gallows").innerHTML = '<img src="' + img + ' " alt=""/>';
    }
    if (count_fail >= 9) {
        document.getElementById("alphabet").innerHTML = "You lose,<br /><br /> The correct password is: " + password + '<br /><br /><span class="reset" onclick="location.reload()" style="background-color:#801010; color:#330000; cursor: pointer;">Click if you want one more time?</span>'
        document.getElementById("alphabet").style.color = "#801010";
        document.getElementById("alphabet").style.fontSize = "35px";
        document.getElementById("alphabet").style.float = "left";
        document.getElementById("alphabet").style.textAlign = "center";

    }
    if (password == password1) {
        document.getElementById("alphabet").innerHTML = "You Won ;)" + '<br /><br /><span class="reset" onclick="location.reload()" style="background-color:#265c06; color:#003300; cursor: pointer; ">Click if you want one more time?</span>'
        document.getElementById("alphabet").style.color = "#265c06";
        document.getElementById("alphabet").style.fontSize = "35px";
        document.getElementById("alphabet").style.float = "left";
        document.getElementById("alphabet").style.textAlign = "center";

    }

}