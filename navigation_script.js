var currentPage = 'page-main';

function GoPage(page){
    document.getElementById(currentPage).classList.add('display-none');
    document.getElementById(page).classList.remove('display-none');
    switch(page){
        case 'page-main':
            document.body.style.backgroundColor = 'var(--color-lightblue)';
            break;
        default:
            document.body.style.backgroundColor = 'var(--color-blue)';
            break;
    }
    currentPage = page;
}

var zoomPage = document.getElementById('zoom-range');
zoomPage.addEventListener('change', (event) => {
    document.getElementById('book').style.zoom = zoomPage.value / 100;
});