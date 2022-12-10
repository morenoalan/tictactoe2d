const allTiles = ['tile1', 'tile2', 'tile3', 'tile4', 'tile5', 'tile6', 'tile7', 'tile8', 'tile9'];
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
        'name': '1st player',
        'markedTiles': [],
        'score': 0,
        'adversary': 'human'
    },
    {
        'player': 'O',
        'name': '2nd player',
        'markedTiles': [],
        'score': 0,
        'adversary': 'human'
    }
];
var statusGame = 'playing';

function NextMove(){
    if(playersData[0].player == 'O'){
        switch(playersData[0].adversary){
            case 'human':
                break;
            case 'robotEasy':
                RobotEasy();
                break;
            case 'robotMiddle':
                RobotMiddle();
                break;
            case 'robotHard':
                RobotHard();
                break;
        }
    }
}

function UpdateStatus(){
    let status;
    if(statusGame == 'draw'){
        status = 'Draw! Press Start';
    }else if(statusGame == 'won'){
        status = playersData[1].name + ' wins! Press Start';
    }else if(playersData[0].name.slice(-1) == 's'){
        status = playersData[0].name + '\' turn';
    }else{
        status = playersData[0].name + '\'s turn';
    }
    document.getElementById('status').children[0].innerHTML = status;
}

function VerifyScoreboard(){
    let inputNameX = document.getElementById('player-x');
    let playerDataX = playersData.find(item => item.player == 'X');
    if(inputNameX.value == ''){
        playerDataX.name = '1st player';
    }else{
        playerDataX.name = inputNameX.value;
    }

    let inputNameO = document.getElementById('player-o');
    let playerDataO = playersData.find(item => item.player == 'O');
    if(inputNameO.value == ''){
        playerDataO.name = '2nd player';
    }else if(inputNameO.value == inputNameX.value){
        playerDataO.name = inputNameO.value + ' 2';
    }else{
        playerDataO.name = inputNameO.value;
    }

    let scoreX = document.getElementById('score-x');
    scoreX.innerHTML = playerDataX.score;

    let scoreO = document.getElementById('score-o');
    scoreO.innerHTML = playerDataO.score;
}

function VerifyVictory(){
    for(let i=0; i<winConditions.length; i++){
        if(winConditions[i].every(elem => playersData[0].markedTiles.includes(elem))){
            playersData[0].score += 1;
            console.log(playersData[0].name + ' wins!');
            console.log(playersData.find(item => item.player == 'X').name + ' ' + playersData.find(item => item.player == 'X').score + ' x ' + playersData.find(item => item.player == 'O').score + ' ' + playersData.find(item => item.player == 'O').name);
            statusGame = 'won';
            document.getElementById('button-start').classList.add('button-start-twinkle');
            document.getElementById('button-start').classList.remove('display-none');
            return;
        }else if(playersData[0].markedTiles.length + playersData[1].markedTiles.length == 9){
            statusGame = 'draw';
            document.getElementById('button-start').classList.add('button-start-twinkle');
            document.getElementById('button-start').classList.remove('display-none');
        }
    }
}

function StartGame(){
    statusGame = 'playing';
    for(let i = 0; i < playersData.length; i++){
        playersData[i].markedTiles = [];
    }
    let tilesList = document.getElementsByClassName('button-tile');
    for(let j = 0; j < tilesList.length; j++){
        tilesList[j].innerHTML = '';
    }
    VerifyScoreboard();
    UpdateStatus();
    document.getElementById('button-start').classList.remove('button-start-twinkle');
    document.getElementById('button-start').classList.add('display-none');
}

function Mark(tile){
    if(tile.innerHTML == '' && statusGame == 'playing'){
        tile.innerHTML = playersData[0].player;
        playersData[0].markedTiles.push(tile.getAttribute('id'));
        console.log(playersData[0].markedTiles);
        VerifyVictory();
        playersData.push(playersData.splice(0,1)[0]);
        VerifyScoreboard();
        UpdateStatus();
        NextMove();
    }
}

function SetReset(){
    playersData[0].score = 0;
    playersData[1].score = 0;
    StartGame();
}

function SetLang(){
    return;
}

function SetAdversary(){
    let playerDataO = playersData.find(item => item.player == 'O');
    switch(playerDataO.adversary){
        case 'human':
            playerDataO.adversary = 'robotHard';
            playerDataO.name = 'Hard Bot';
            document.getElementById('player-o').value = 'Hard Bot';
            document.getElementById('player-o').setAttribute('readonly', 'readonly');
            document.getElementById('player-o').classList.remove('input');
            document.getElementById('player-o').classList.add('input-robot');
            console.log('bot');
            break;
        case 'robotHard':
            playerDataO.adversary = 'human';
            playerDataO.name = '2nd player';
            document.getElementById('player-o').value = '';
            document.getElementById('player-o').removeAttribute('readonly');
            document.getElementById('player-o').classList.remove('input-robot');
            document.getElementById('player-o').classList.add('input');
            console.log('human');
            break;
    }
    return;
}

function RobotEasy(){
    return;
}

function RobotMiddle(){
    return;
}

function RobotHard(){
    let playerDataX = playersData.find(item => item.player == 'X');
    let playerDataO = playersData.find(item => item.player == 'O');
    //let activeTiles = allTiles - (playerDataX.markedTiles.concat(playerDataO.markedTiles));
    console.log(playerDataX.markedTiles.concat(playerDataO.markedTiles));
    document.getElementById('tile9').click();
    return;
}