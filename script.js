const winConditions = [
    ['tile1', 'tile2', 'tile3'],
    ['tile1', 'tile5', 'tile9'],
    ['tile1', 'tile4', 'tile7'],
    ['tile2', 'tile5', 'tile8'],
    ['tile4', 'tile5', 'tile6'],
    ['tile3', 'tile5', 'tile7'],
    ['tile3', 'tile6', 'tile9'],
    ['tile7', 'tile8', 'tile9'],
];
var currentPlayer = ['playerX', 'playerO'];
var playerX = [];
var playerO = [];

function VerifyVictory(currentPlayer){
    for(let i=0; i<winConditions.length; i++){
        if(winConditions[i].every(elem => eval(currentPlayer).includes(elem))){
            console.log(currentPlayer+' wins!');
        }
    }
}

function Mark(tile){
    if(tile.innerHTML == ''){
        if(currentPlayer[0] == 'playerX'){
            tile.innerHTML = 'X';
            playerX.push(tile.getAttribute('id'));
        }else if(currentPlayer[0] == 'playerO'){
            tile.innerHTML = 'O';
            playerO.push(tile.getAttribute('id'));
        }
    }
    VerifyVictory(currentPlayer[0]);
    currentPlayer.push(currentPlayer.splice(0,1)[0]);
}