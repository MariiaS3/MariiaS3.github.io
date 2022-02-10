var los = Math.floor(Math.random() * 4);
var val = [];
var path;
if (los == 0) {
    val.push({ name: 'ciri.png', count: '2' });
    val.push({ name: 'geralt.png', count: '2' });
    val.push({ name: 'jaskier.png', count: '2' });
    val.push({ name: 'iorweth.png', count: '2' });
    val.push({ name: 'triss.png', count: '2' });
    val.push({ name: 'yen.png', count: '2' });
    path = "url(wiedzmin/";

}
if (los == 1) {
    val.push({ name: 'c1.png', count: '2' });
    val.push({ name: 'c2.png', count: '2' });
    val.push({ name: 'c3.png', count: '2' });
    val.push({ name: 'c4.png', count: '2' });
    val.push({ name: 'c5.png', count: '2' });
    val.push({ name: 'c6.png', count: '2' });
    path = "url(cookies/";

}
if (los == 2) {
    val.push({ name: 'e1.png', count: '2' });
    val.push({ name: 'e2.png', count: '2' });
    val.push({ name: 'e3.png', count: '2' });
    val.push({ name: 'e4.png', count: '2' });
    val.push({ name: 'e5.png', count: '2' });
    val.push({ name: 'e6.png', count: '2' });
    path = "url(emoji/";


}

if (los == 3) {
    val.push({ name: 'p1.png', count: '2' });
    val.push({ name: 'p2.png', count: '2' });
    val.push({ name: 'p3.png', count: '2' });
    val.push({ name: 'p4.png', count: '2' });
    val.push({ name: 'p5.png', count: '2' });
    val.push({ name: 'p6.png', count: '2' });
    path = "url(pokemons/";

}

var cards = [];
var j = 0;
while (j < 12) {
    var a = Math.floor(Math.random() * 6);
    if (val[a].count != 0) {
        cards.push(val[a].name);
        val[a].count--;
        j++;
    }
}

var c = new Array(12);
for (var i = 0; i < 12; i++) {
    c[i] = document.getElementById('c' + i);

}

c[0].addEventListener("click", function() { revealCards(0) });
c[1].addEventListener("click", function() { revealCards(1) });
c[2].addEventListener("click", function() { revealCards(2) });
c[3].addEventListener("click", function() { revealCards(3) });

c[4].addEventListener("click", function() { revealCards(4) });
c[5].addEventListener("click", function() { revealCards(5) });
c[6].addEventListener("click", function() { revealCards(6) });
c[7].addEventListener("click", function() { revealCards(7) });

c[8].addEventListener("click", function() { revealCards(8) });
c[9].addEventListener("click", function() { revealCards(9) });
c[10].addEventListener("click", function() { revealCards(10) });
c[11].addEventListener("click", function() { revealCards(11) });


var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 6;

function revealCards(nr) {
    // alert(nr);
    var opacityValue = $('#c' + nr).css('opacity');

    if (opacityValue != 0 && lock == false) {
        lock = true;
        var picture = path + cards[nr] + ")";
        $('#c' + nr).css('background-image', picture);
        $('#c' + nr).addClass('cardA');
        $('#c' + nr).removeClass('card');

        if (oneVisible == false) { //first card
            oneVisible = true;
            visible_nr = nr;
            lock = false;
        } else { //second card

            if (cards[nr] == cards[visible_nr]) {

                setTimeout(function() { hide2Cards(nr, visible_nr); }, 750)


            } else {
                setTimeout(function() { restore2Cards(nr, visible_nr); }, 1000)

            }

            turnCounter++;
            $('.score').html('Turn counter: ' + turnCounter);
            oneVisible = false;

        }
    }
}



function hide2Cards(nr1, nr2) {
    $('#c' + nr1).css('opacity', '0');
    $('#c' + nr2).css('opacity', '0');
    pairsLeft--;
    if (pairsLeft == 0) {
        $('.board').html('<h1> You win! <br> Done in ' + turnCounter + ' turns! </h1> <br><br> <button onclick="my_reload()">RESET</button>')

    }
    lock = false;
}


function my_reload() {
    location.reload();
}

function restore2Cards(nr1, nr2) {
    $('#c' + nr1).css('background-image', 'url(wiedzmin/karta.png)');
    $('#c' + nr1).addClass('card');
    $('#c' + nr1).removeClass('cardA');

    $('#c' + nr2).css('background-image', 'url(wiedzmin/karta.png)');
    $('#c' + nr2).addClass('card');
    $('#c' + nr2).removeClass('cardA');
    lock = false;
}