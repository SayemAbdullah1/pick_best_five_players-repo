document.getElementById('calculate').addEventListener('click', function () {
    const PlayerBudgetInput = getInputFieldValueById('per-player');
    if(isNaN(PlayerBudgetInput)){
        alert('Enter Valid input data in per player budget');
        return;
    }
    const playerValue = player.length;
    const playerTotalbudget = PlayerBudgetInput * playerValue;

    setTextElementById('player-expense', playerTotalbudget);
})



document.getElementById('calculate-total').addEventListener('click', function () {
    const perplayerBudget = getTextElementById('player-expense');
    const managerBudget = getInputFieldValueById('manager-input');
    const couchBudget = getInputFieldValueById('couch-input');

    const totaloutputBudget = perplayerBudget + managerBudget + couchBudget;


    setTextElementById('total-output', totaloutputBudget);
})
