function btnDisable(btnId) {
    const button = document.getElementById(btnId);
    button.style.backgroundColor = 'gray';
    
    button.setAttribute('disabled', 'true');

}
document.getElementById('Zalatan').addEventListener('click', function () {
    btnDisable('Zalatan');
})
document.getElementById('Neymar').addEventListener('click', function () {
    btnDisable('Neymar');
})
document.getElementById('Benzema').addEventListener('click', function () {
    btnDisable('Benzema');
})
document.getElementById('Mbappe').addEventListener('click', function () {
    btnDisable('Mbappe');
})
document.getElementById('Christiano').addEventListener('click', function () {
    btnDisable('Christiano');
})
document.getElementById('Salah').addEventListener('click', function () {
    btnDisable('Salah');
})