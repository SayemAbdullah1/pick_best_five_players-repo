document.getElementById('calculate').addEventListener('click', function(){
    const PlayerBudgetInput = getInputFieldValueById('per-player');
    setTextElementById('player-expense', PlayerBudgetInput);
})



document.getElementById('calculate-total').addEventListener('click', function(){
    const perplayerBudget = getTextElementById('player-expense');
    const managerBudget = getInputFieldValueById('manager-input');
    const couchBudget = getInputFieldValueById('couch-input');

    const totaloutputBudget = perplayerBudget + managerBudget + couchBudget;
    
    setTextElementById('total-output', totaloutputBudget);
})