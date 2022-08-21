document.getElementById('calculate').addEventListener('click', function(){
    const PlayerBudgetInput = getInputFieldValueById('per-player');
    setTextElementById('player-expense', PlayerBudgetInput);
})