function rollAllDice() {
    const diceValues = [];
    const diceElements = [document.getElementById("dice1"), document.getElementById("dice2"), document.getElementById("dice3"), document.getElementById("dice4")];

    diceElements.forEach((dice, index) => {
        dice.classList.add("dice-rolling");
        
        let rollInterval = setInterval(() => {
            dice.textContent = Math.floor(Math.random() * 6) + 1;
        }, 100);

        setTimeout(() => {
            clearInterval(rollInterval);
            
            const roll = Math.floor(Math.random() * 6) + 1;
            diceValues[index] = roll;
            dice.textContent = roll;
            
            dice.classList.remove("dice-rolling");
            
            if (index === diceElements.length - 1) calculateWinner(diceValues);
        }, 1000);
    });
}

function calculateWinner(diceValues) {
    const maxRoll = Math.max(...diceValues);
    const winners = diceValues.reduce((acc, value, index) => {
        if (value === maxRoll) acc.push(`Dice ${index + 1}`);
        return acc;
    }, []);

    document.getElementById("result").textContent = 
        winners.length > 1 
            ? `It's a tie! ${winners.join(" and ")} win with a roll of ${maxRoll}.`
            : `${winners[0]} wins with a roll of ${maxRoll}.`;
}
