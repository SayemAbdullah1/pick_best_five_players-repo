document.getElementById('calculate').addEventListener('click', function(){
    const PlayerBudgetInput = getInputFieldValueById('per-player');
    if(isNaN(PlayerBudgetInput)){
        alert('Enter Valid input data in per player budget');
        return;
    }
    const playerValue = player.length;
   
    if (playerValue > 5) {
        playerValue === 5;
        return;
    }
    const playerTotalbudget = PlayerBudgetInput * playerValue;

    
    setTextElementById('player-expense', playerTotalbudget);



    
})



document.getElementById('calculate-total').addEventListener('click', function(){
    const perPlayerBudget = getTextElementById('player-expense');
    const managerBudget = getInputFieldValueById('manager-input');
    const couchBudget = getInputFieldValueById('couch-input');

    const totalOutputBudget = perPlayerBudget + managerBudget + couchBudget;


    setTextElementById('total-output', totalOutputBudget);
})
