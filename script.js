const winConditions = [
    ['tile1', 'tile2', 'tile3'],
    ['tile4', 'tile5', 'tile6'],
    ['tile7', 'tile8', 'tile9'],
    ['tile1', 'tile4', 'tile7'],
    ['tile2', 'tile5', 'tile8'],
    ['tile3', 'tile6', 'tile9'],
    ['tile1', 'tile5', 'tile9'],
    ['tile3', 'tile5', 'tile7'],
];
var playersData = [
    {
        'player': 'X',
        'name': 'John',
        'markedTiles': [],
        'score': 0,
        'mode': 'live' /* live, online, hard, middle, easy */
    },
    {
        'player': 'O',
        'name': 'Mary',
        'markedTiles': [],
        'score': 0,
        'mode': 'live'
    }
];

var statusGame = 'playing';
function StartGame(){
    statusGame = 'playing';
    for(let i = 0; i < playersData.length; i++){
        playersData[i].markedTiles = [];
    }
    let tilesList = document.getElementsByClassName('tile');
    for(let j = 0; j < tilesList.length; j++){
        tilesList[j].innerHTML = '';
    }
    console.log(document.getElementById('playerX').value);
}

function VerifyVictory(){
    for(let i=0; i<winConditions.length; i++){
        if(winConditions[i].every(elem => playersData[0].markedTiles.includes(elem))){
            playersData[0].score += 1;
            console.log(playersData[0].name+' wins!');
            console.log(playersData.find(item => item.player == 'X').name +' '+ playersData.find(item => item.player == 'X').score +' x ' + playersData.find(item => item.player == 'O').score + ' ' + playersData.find(item => item.player == 'O').name);
            statusGame = 'stopped';
        }
    }
}

function Mark(tile){
    if(tile.innerHTML == '' && statusGame == 'playing'){
        tile.innerHTML = playersData[0].player;
        playersData[0].markedTiles.push(tile.getAttribute('id'));
        console.log(playersData[0].markedTiles);
        VerifyVictory();
        playersData.push(playersData.splice(0,1)[0]);
    }
}