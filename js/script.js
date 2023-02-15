const game = document.querySelector('.game__play'),
      piles = document.querySelectorAll('.game__pile'),
      turn = document.querySelector('.game__turn'),
      endx = document.querySelector('.end__x'),
      endo = document.querySelector('.end__o'),
      nextroundx = document.querySelector('.nextroundx'),
      nextroundo = document.querySelector('.nextroundo'),
      nextroundtie = document.querySelector('.nextroundtie'),
      endtie = document.querySelector('.end__tie'),
      placeholderX = document.querySelector('.myscore'),
      placeholderO = document.querySelector('.enemyscore'),
      placeholderTies = document.querySelector('.ties'),
      restart = document.querySelectorAll('.restart');


console.log(piles[0].innerHTML);
let counter = 0,
    counterO = 0,
    counterX = 0,
    counterTies = 0;



placeholderX.innerHTML = counterX;
placeholderO.innerHTML = counterO;
placeholderTies.innerHTML = counterTies;




function Wincheck(i){
    if ((piles[0].innerHTML == piles[1].innerHTML && piles[0].innerHTML == piles[2].innerHTML && game.children[i].firstElementChild.alt == "x" && piles[0].innerHTML != '') ||
        (piles[3].innerHTML == piles[4].innerHTML && piles[3].innerHTML == piles[5].innerHTML && game.children[i].firstElementChild.alt == "x" && piles[3].innerHTML != '') ||
        (piles[6].innerHTML == piles[7].innerHTML && piles[6].innerHTML == piles[8].innerHTML && game.children[i].firstElementChild.alt == "x" && piles[6].innerHTML != '') ||
        (piles[0].innerHTML == piles[4].innerHTML && piles[0].innerHTML == piles[8].innerHTML && game.children[i].firstElementChild.alt == "x" && piles[0].innerHTML != '') ||
        (piles[2].innerHTML == piles[4].innerHTML && piles[2].innerHTML == piles[6].innerHTML && game.children[i].firstElementChild.alt == "x" && piles[2].innerHTML != '') ||
        (piles[0].innerHTML == piles[3].innerHTML && piles[0].innerHTML == piles[6].innerHTML && game.children[i].firstElementChild.alt == "x" && piles[0].innerHTML != '') ||
        (piles[1].innerHTML == piles[4].innerHTML && piles[1].innerHTML == piles[7].innerHTML && game.children[i].firstElementChild.alt == "x" && piles[1].innerHTML != '') ||
        (piles[2].innerHTML == piles[5].innerHTML && piles[2].innerHTML == piles[8].innerHTML && game.children[i].firstElementChild.alt == "x" && piles[2].innerHTML != '')
        ) {
        endx.style.display = 'block';
        counterX++;
        placeholderX.innerHTML = counterX;
    }
    if ((piles[0].innerHTML == piles[1].innerHTML && piles[0].innerHTML == piles[2].innerHTML && game.children[i].firstElementChild.alt == "o" && piles[0].innerHTML != '') ||
        (piles[3].innerHTML == piles[4].innerHTML && piles[3].innerHTML == piles[5].innerHTML && game.children[i].firstElementChild.alt == "o" && piles[3].innerHTML != '') ||
        (piles[6].innerHTML == piles[7].innerHTML && piles[6].innerHTML == piles[8].innerHTML && game.children[i].firstElementChild.alt == "o" && piles[6].innerHTML != '') ||
        (piles[0].innerHTML == piles[4].innerHTML && piles[0].innerHTML == piles[8].innerHTML && game.children[i].firstElementChild.alt == "o" && piles[0].innerHTML != '') ||
        (piles[2].innerHTML == piles[4].innerHTML && piles[2].innerHTML == piles[6].innerHTML && game.children[i].firstElementChild.alt == "o" && piles[2].innerHTML != '') ||
        (piles[0].innerHTML == piles[3].innerHTML && piles[0].innerHTML == piles[6].innerHTML && game.children[i].firstElementChild.alt == "o" && piles[0].innerHTML != '') ||
        (piles[1].innerHTML == piles[4].innerHTML && piles[1].innerHTML == piles[7].innerHTML && game.children[i].firstElementChild.alt == "o" && piles[1].innerHTML != '') ||
        (piles[2].innerHTML == piles[5].innerHTML && piles[2].innerHTML == piles[8].innerHTML && game.children[i].firstElementChild.alt == "o" && piles[2].innerHTML != '')
        ) {
        endo.style.display = 'block';
        counterO++;
        placeholderO.innerHTML = counterO;
    }
    if (piles[0].innerHTML != '' && piles[1].innerHTML != '' && piles[2].innerHTML != '' && piles[3].innerHTML != '' && piles[4].innerHTML != '' && piles[5].innerHTML != '' && piles[6].innerHTML != '' && piles[7].innerHTML != '' && piles[8].innerHTML != '' ) {
        endtie.style.display = 'block';
        counterTies++;
        placeholderTies.innerHTML = counterTies;
    }
}

// function nextround(){
//     piles.forEach(function(pile) {
//         pile.innerHTML = '';


//     });
//     counter = 0;
//     turn.innerHTML = `<img src="images/x.png" alt="x"> Turn `;
//     endx.style.display = 'none';
//     endo.style.display = 'none';
// }

restart.forEach(function(btn) {
    btn.addEventListener('click', function FullRestart (){
        piles.forEach(function(pile) {
            pile.innerHTML = '';   
        });
        counterO = 0;
        counterX = 0;
        counterTies = 0;
        counter = 0;
        turn.innerHTML = `<img src="images/x.png" alt="x"> Turn `;
        endx.style.display = 'none';
        endo.style.display = 'none';
        endtie.style.display = 'none';
        placeholderX.innerHTML = counterX;
        placeholderO.innerHTML = counterO;
        placeholderTies.innerHTML = counterTies;
    });
});

nextroundx.addEventListener('click',function nextround(){
    piles.forEach(function(pile) {
        pile.innerHTML = '';


    });
    counter = 0;
    turn.innerHTML = `<img src="images/x.png" alt="x"> Turn `;
    endx.style.display = 'none';
    endo.style.display = 'none';
});
nextroundo.addEventListener('click', function nextround(){
    piles.forEach(function(pile) {
        pile.innerHTML = '';


    });
    counter = 0;
    turn.innerHTML = `<img src="images/x.png" alt="x"> Turn `;
    endx.style.display = 'none';
    endo.style.display = 'none';
});
nextroundtie.addEventListener('click', function nextround(){
    piles.forEach(function(pile) {
        pile.innerHTML = '';


    });
    counter = 0;
    turn.innerHTML = `<img src="images/x.png" alt="x"> Turn `;
    endx.style.display = 'none';
    endo.style.display = 'none';
    endtie.style.display = 'none';
});


// постановка крестиков ноликов
piles.forEach(function (pile, i) {
    pile.addEventListener('click', (e) => {
        if (counter % 2 == 0) {
            if (pile.innerHTML == '') {
        pile.innerHTML = ` <img src="images/x.png" alt="x"> ` ;
        turn.innerHTML= `<img src="images/o.png" alt="o"> Turn `;
        counter++;
        Wincheck(i);}
        }

        else { 
            if (pile.innerHTML == '') {pile.innerHTML = ` <img src="images/o.png" alt="o"> ` ;
        turn.innerHTML= `<img src="images/x.png" alt="x"> Turn `;
        Wincheck(i);
        counter++;}}
    });
});