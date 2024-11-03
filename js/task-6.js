
   const createButton = document.querySelector('button[data-create]');
    const destroyButton = document.querySelector('button[data-destroy]');
    const boxesContainer = document.querySelector('#boxes');
    const elementCountInput = document.querySelector('input[type="number"]');

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }

    function createBoxes(amount) {
        let boxesHTML = '';  
        let boxSize = 30;

        for (let i = 0; i < amount; i++) {
            boxesHTML += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}; margin: 5px;"></div>`;
            boxSize += 10;
        }

        boxesContainer.innerHTML = boxesHTML; 
    }

    createButton.addEventListener('click', () => {
        const amount = elementCountInput.value;

        if (amount && amount >= 1 && amount <= 100) {
            createBoxes(amount);
            elementCountInput.value = '';  
        } else {
            alert('Please enter a number between 1 and 100.');
        }
    });

    destroyButton.addEventListener('click', () => {
        boxesContainer.innerHTML = '';  
    })