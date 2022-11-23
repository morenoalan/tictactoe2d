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
var markedTilesX = [];
var markedTilesO = [];

function VerifyVictory(){
    for(let i=0; i<winConditions.length; i++){
        console.log(winConditions[i].every(elem => markedTilesX.includes(elem)));
        return;
    }
}

function Mark(tile){
    if(tile.innerHTML == ''){
        if(currentPlayer[0] == 'playerX'){
            tile.innerHTML = 'X';
            markedTilesX.push(tile.getAttribute('id'));
        }else if(currentPlayer[0] == 'playerO'){
            tile.innerHTML = 'O';
            markedTilesO.push(tile.getAttribute('id'));
        }
    }
    currentPlayer.push(currentPlayer.splice(0,1)[0]);
    VerifyVictory();
}