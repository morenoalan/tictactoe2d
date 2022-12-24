function GoPageMain(){
    console.log('gopagemain');
    document.getElementById('page-info').classList.add('display-none');
    document.getElementById('page-main').classList.remove('display-none');
}

function GoPageInfo(){
    console.log('gopageinfo');
    document.getElementById('page-main').classList.add('display-none');
    document.getElementById('page-info').classList.remove('display-none');
}