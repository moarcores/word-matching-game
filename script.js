document.addEventListener('DOMContentLoaded', function() {
    // Game elements
    const nounsContainer = document.querySelector('.nouns-container');
    const adjectivesContainer = document.querySelector('.adjectives-container');
    const passTurnBtn = document.getElementById('pass-turn-btn');
    const checkBtn = document.getElementById('check-btn');
    const playerTurnDisplay = document.getElementById('player-turn');
    const scoreDisplay = document.getElementById('score');
    
    // Game state
    let currentPlayer = 1;
    let score = 0;
    let selectedAdjective = null;
    let currentNouns = [];
    let currentAdjectives = [];
    let player1Assignments = {};
    let player2Assignments = {};

    // Lists of nouns and adjectives
    const nouns = [
        'солнце',
        'луна',
        'звезда',
        'земля',
        'вода',
        'воздух',
        'огонь',
        'человек',
        'жизнь',
        'время',
        'любовь',
        'счастье',
        'радость',
        'грусть',
        'смех',
        'слеза',
        'сердце',
        'душа',
        'разум',
        'сознание',
        'память',
        'воспоминание',
        'мечта',
        'цель',
        'стремление',
        'желание',
        'надежда',
        'вера',
        'уверенность',
        'сила',
        'слабость',
        'здоровье',
        'болезнь',
        'лекарство',
        'врач',
        'пациент',
        'больница',
        'аптека',
        'дом',
        'семья',
        'родители',
        'дети',
        'брат',
        'сестра',
        'муж',
        'жена',
        'друг',
        'подруга',
        'знакомый',
        'коллега',
        'начальник',
        'подчиненный',
        'учитель',
        'ученик',
        'студент',
        'преподаватель',
        'книга',
        'журнал',
        'газета',
        'статья',
        'рассказ',
        'повесть',
        'роман',
        'поэма',
        'стихотворение',
        'песня',
        'музыка',
        'альбом',
        'исполнитель',
        'группа',
        'концерт',
        'театр',
        'кино',
        'фильм',
        'сериал',
        'игра',
        'спорт',
        'команда',
        'матч',
        'турнир',
        'чемпионат',
        'олимпиада',
        'школа',
        'институт',
        'университет',
        'факультет',
        'специальность',
        'профессия',
        'работа',
        'должность',
        'задание',
        'проект',
        'отчет',
        'доклад',
        'презентация',
        'конференция',
        'встреча',
        'переговоры',
        'дело',
        'бизнес',
        'фирма',
        'компания',
        'партнер',
        'клиент',
        'заказчик',
        'поставщик',
        'товар',
        'услуга',
        'деньги',
        'банк',
        'кредит',
        'ипотека',
        'сбережения',
        'инвестиции',
        'акция',
        'ценная бумага',
        'экономика',
        'рынок',
        'цена',
        'курс',
        'процент',
        'прибыль',
        'убыток',
        'бюджет',
        'налог',
        'платеж',
        'штраф',
        'пенсия',
        'пособие',
        'грант',
        'стипендия',
        'подарок',
        'сюрприз',
        'праздник',
        'отпуск',
        'путешествие',
        'отдых',
        'экскурсия',
        'отель',
        'гостиница',
        'ресторан',
        'кафе',
        'бар',
        'магазин',
        'супермаркет',
        'рынок',
        'продукция',
        'еда',
        'напиток',
        'блюдо',
        'рецепт',
        'ингредиент',
        'специя',
        'соль',
        'сахар',
        'масло',
        'мука',
        'крупа',
        'овощ',
        'фрукт',
        'ягода',
        'гриб',
        'зелень',
        'трава',
        'цветок',
        'дерево',
        'кустарник',
        'сад',
        'огород',
        'поле',
        'лес',
        'река',
        'озеро',
        'море',
        'океан',
        'берег',
        'пляж',
        'гора',
        'холм',
        'долина',
        'равнины',
        'пустыня',
        'степь',
        'тайга',
        'тундра',
        'арктика',
        'антарктида',
        'страна',
        'город',
        'село',
        'деревня',
        'микрорайон',
        'улица',
        'дом',
        'квартира',
        'комната',
        'мебель',
        'техника',
        'электроника',
        'компьютер',
        'ноутбук',
        'планшет',
        'смартфон',
        'гаджет',
        'приложение',
        'программное обеспечение',
        'интернет',
        'сеть',
        'сайт',
        'портал',
        'блоги',
        'социальные сети',
        'электронная почта',
        'сообщение',
        'письмо',
        'конверт',
        'марка',
        'почта',
        'курьер',
        'доставка',
        'транспорт',
        'автомобиль',
        'автобус',
        'троллейбус',
        'трамвай',
        'метро',
        'поезд',
        'самолет',
        'вертолет',
        'корабль',
        'яхта',
        'лодка',
        'велосипед',
        'мотоцикл',
        'скутер',
        'дорога',
        'шоссе',
        'перекресток',
        'тоннель',
        'мост',
        'парковка',
        'гараж'
    ];
    
    const adjectives = [
        'Happy', 'Sad', 'Big', 'Small', 'Fast', 'Slow', 'Beautiful', 'Ugly', 
        'Bright', 'Dark', 'Hot', 'Cold', 'New', 'Old', 'Loud', 'Quiet', 
        'Soft', 'Hard', 'Sweet', 'Sour'
    ];
    
    // Initialize the game
    initGame();
    
    // Event listeners
    passTurnBtn.addEventListener('click', passTurn);
    checkBtn.addEventListener('click', checkMatches);
    
    // Functions
    function initGame() {
        // Reset game state
        currentPlayer = 1;
        score = 0;
        selectedAdjective = null;
        player1Assignments = {};
        player2Assignments = {};
        scoreDisplay.textContent = '0';
        playerTurnDisplay.textContent = "Player 1's Turn";
        passTurnBtn.style.display = 'block';
        checkBtn.style.display = 'none';
        
        // Clear containers
        nounsContainer.innerHTML = '';
        adjectivesContainer.innerHTML = '';
        
        // Select random nouns and adjectives
        currentNouns = getRandomItems(nouns, 5);
        currentAdjectives = getRandomItems(adjectives, 5);
        
        // Display nouns with empty slots
        displayNouns();
        
        // Display adjectives
        displayAdjectives();
    }
    
    function getRandomItems(array, count) {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    
    function displayNouns() {
        currentNouns.forEach((noun, index) => {
            const nounRow = document.createElement('div');
            nounRow.className = 'noun-row';
            nounRow.dataset.index = index;
            
            // Left empty slot
            const leftSlot = document.createElement('div');
            leftSlot.className = 'empty-slot left-slot';
            leftSlot.dataset.side = 'left';
            leftSlot.dataset.nounIndex = index;
            leftSlot.addEventListener('click', handleSlotClick);
            
            // Noun card
            const nounCard = document.createElement('div');
            nounCard.className = 'card noun-card';
            nounCard.textContent = noun;
            
            // Right empty slot
            const rightSlot = document.createElement('div');
            rightSlot.className = 'empty-slot right-slot';
            rightSlot.dataset.side = 'right';
            rightSlot.dataset.nounIndex = index;
            rightSlot.addEventListener('click', handleSlotClick);
            
            nounRow.appendChild(leftSlot);
            nounRow.appendChild(nounCard);
            nounRow.appendChild(rightSlot);
            
            nounsContainer.appendChild(nounRow);
        });
    }
    
    function displayAdjectives() {
        adjectivesContainer.innerHTML = '';
        
        currentAdjectives.forEach((adjective, index) => {
            const adjectiveCard = document.createElement('div');
            adjectiveCard.className = 'card adjective-card';
            adjectiveCard.textContent = adjective;
            adjectiveCard.dataset.index = index;
            adjectiveCard.addEventListener('click', handleAdjectiveClick);
            
            adjectivesContainer.appendChild(adjectiveCard);
        });
    }
    
    function handleAdjectiveClick(event) {
        // If the adjective is already assigned, return it to the bottom
        if (event.target.parentElement.classList.contains('empty-slot')) {
            const adjectiveCard = event.target;
            const adjectiveIndex = adjectiveCard.dataset.index;
            
            // Remove from assignments
            if (currentPlayer === 1) {
                delete player1Assignments[adjectiveCard.parentElement.dataset.nounIndex];
            } else {
                delete player2Assignments[adjectiveCard.parentElement.dataset.nounIndex];
            }
            
            // Move back to adjectives container
            adjectivesContainer.appendChild(adjectiveCard);
            adjectiveCard.classList.remove('assigned-adjective');
            
            return;
        }
        
        // Clear previous selection
        document.querySelectorAll('.adjective-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        // Select the clicked adjective
        event.target.classList.add('selected');
        selectedAdjective = event.target;
    }
    
    function handleSlotClick(event) {
        // Only allow clicks on empty slots
        if (event.target.children.length > 0) return;
        
        // Check if an adjective is selected
        if (!selectedAdjective) return;
        
        // Check if the slot is on the correct side for the current player
        const side = event.target.dataset.side;
        if ((currentPlayer === 1 && side !== 'right') || 
            (currentPlayer === 2 && side !== 'left')) {
            return;
        }
        
        // Assign the adjective to the slot
        const nounIndex = event.target.dataset.nounIndex;
        const adjectiveIndex = selectedAdjective.dataset.index;
        
        // Store the assignment
        if (currentPlayer === 1) {
            player1Assignments[nounIndex] = adjectiveIndex;
        } else {
            player2Assignments[nounIndex] = adjectiveIndex;
        }
        
        // Move the adjective card to the slot
        event.target.appendChild(selectedAdjective);
        selectedAdjective.classList.remove('selected');
        selectedAdjective.classList.add('assigned-adjective');
        selectedAdjective = null;
    }
    
    function passTurn() {
        // Check if all adjectives are assigned
        if (Object.keys(player1Assignments).length !== 5) {
            alert('Please assign all adjectives before passing the turn.');
            return;
        }
        
        // Flip the adjectives (hide the text)
        document.querySelectorAll('.right-slot .adjective-card').forEach(card => {
            card.classList.add('flipped');
        });
        
        // Switch to player 2
        currentPlayer = 2;
        playerTurnDisplay.textContent = "Player 2's Turn";
        
        // Change button
        passTurnBtn.style.display = 'none';
        checkBtn.style.display = 'block';
        
        // Reset adjectives container
        adjectivesContainer.innerHTML = '';
        
        // Display the same adjectives again
        displayAdjectives();
    }
    
    function checkMatches() {
        // Check if all adjectives are assigned
        if (Object.keys(player2Assignments).length !== 5) {
            alert('Please assign all adjectives before checking matches.');
            return;
        }
        
        // Unflip the adjectives
        document.querySelectorAll('.right-slot .adjective-card').forEach(card => {
            card.classList.remove('flipped');
        });
        
        // Calculate score
        score = 0;
        for (const nounIndex in player1Assignments) {
            if (player1Assignments[nounIndex] === player2Assignments[nounIndex]) {
                score++;
            }
        }
        
        // Update score display
        scoreDisplay.textContent = score;
        
        // Show play again button
        checkBtn.textContent = 'Play Again';
        checkBtn.removeEventListener('click', checkMatches);
        checkBtn.addEventListener('click', initGame);
    }
});