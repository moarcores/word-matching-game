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
        'большой',
        'маленький',
        'новый',
        'старый',
        'хороший',
        'плохой',
        'красивый',
        'уродливый',
        'умный',
        'глупый',
        'смелый',
        'трусливый',
        'сильный',
        'слабый',
        'быстрый',
        'медленный',
        'высокий',
        'низкий',
        'широкий',
        'узкий',
        'длинный',
        'короткий',
        'тяжёлый',
        'лёгкий',
        'горячий',
        'холодный',
        'чистый',
        'грязный',
        'яркий',
        'тусклый',
        'светлый',
        'тёмный',
        'мягкий',
        'твёрдый',
        'жидкий',
        'газообразный',
        'сладкий',
        'горький',
        'кислый',
        'солёный',
        'приятный',
        'неприятный',
        'интересный',
        'скучный',
        'важный',
        'неважный',
        'полезный',
        'бесполезный',
        'удобный',
        'неудобный',
        'возможный',
        'невозможный',
        'реальный',
        'нереальный',
        'настоящий',
        'ненастоящий',
        'главный',
        'второстепенный',
        'общий',
        'частный',
        'простой',
        'сложный',
        'точный',
        'неточный',
        'полный',
        'неполный',
        'правильный',
        'неправильный',
        'безопасный',
        'опасный',
        'спокойный',
        'нервный',
        'активный',
        'пассивный',
        'открытый',
        'закрытый',
        'честный',
        'лживый',
        'добрый',
        'злой',
        'вежливый',
        'грубый',
        'внимательный',
        'невнимательный',
        'терпеливый',
        'нетерпеливый',
        'скромный',
        'наглый',
        'уверенный',
        'неуверенный',
        'оптимистичный',
        'пессимистичный',
        'энергичный',
        'апатичный',
        'независимый',
        'зависимый',
        'творческий',
        'нетворческий',
        'оригинальный',
        'неоригинальный',
        'модный',
        'немодный',
        'популярный',
        'непопулярный',
        'известный',
        'неизвестный',
        'уникальный',
        'обычный',
        'эксклюзивный',
        'стандартный',
        'роскошный',
        'бюджетный',
        'функциональный',
        'нефункциональный',
        'надёжный',
        'ненадёжный',
        'качественный',
        'некачественный',
        'эффективный',
        'неэффективный',
        'экологичный',
        'некологичный',
        'компактный',
        'громоздкий',
        'мобильный',
        'стационарный',
        'автоматический',
        'ручной',
        'электрический',
        'механический',
        'цифровой',
        'аналоговый',
        'современный',
        'устаревший',
        'традиционный',
        'инновационный',
        'практичный',
        'непрактичный',
        'универсальный',
        'специализированный',
        'гибкий',
        'жёсткий',
        'динамичный',
        'статичный',
        'конструктивный',
        'деструктивный',
        'позитивный',
        'негативный',
        'вдохновляющий',
        'угнетающий',
        'мотивирующий',
        'демотивирующий',
        'увлекательный',
        'скучный',
        'захватывающий',
        'монотонный',
        'радостный',
        'грустный',
        'весёлый',
        'печальный',
        'счастливый',
        'несчастливый',
        'гордый',
        'смиренный',
        'самостоятельный',
        'зависимый',
        'целеустремлённый']
    
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
    
    
    function displayAdjectives() {
        adjectivesContainer.innerHTML = '';
        
        currentAdjectives.forEach((adjective, index) => {
            const adjectiveCard = document.createElement('div');
            adjectiveCard.className = 'card adjective-card';
            adjectiveCard.textContent = adjective;
            adjectiveCard.dataset.index = index;
            
            // Make adjective cards draggable
            adjectiveCard.setAttribute('draggable', 'true');
            adjectiveCard.addEventListener('dragstart', handleDragStart);
            adjectiveCard.addEventListener('dragend', handleDragEnd);
            
            // Add touch events for mobile
            adjectiveCard.addEventListener('touchstart', handleTouchStart, {passive: false});
            adjectiveCard.addEventListener('touchmove', handleTouchMove, {passive: false});
            adjectiveCard.addEventListener('touchend', handleTouchEnd, {passive: false});
            
            // Keep click functionality for returning cards to the bottom
            adjectiveCard.addEventListener('click', handleAdjectiveClick);
            
            adjectivesContainer.appendChild(adjectiveCard);
        });
    }
    
    function handleAdjectiveClick(event) {
        // Only handle clicks for returning adjectives to the bottom
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
        }
    }
    
    // Drag and Drop functionality
    function handleDragStart(event) {
        // Store the dragged element
        selectedAdjective = event.target;
        event.target.classList.add('dragging');
        
        // Set data transfer
        event.dataTransfer.setData('text/plain', event.target.dataset.index);
        event.dataTransfer.effectAllowed = 'move';
    }
    
    function handleDragEnd(event) {
        event.target.classList.remove('dragging');
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
            
            // Add drag and drop event listeners
            leftSlot.addEventListener('dragover', handleDragOver);
            leftSlot.addEventListener('dragenter', handleDragEnter);
            leftSlot.addEventListener('dragleave', handleDragLeave);
            leftSlot.addEventListener('drop', handleDrop);
            
            // Add touch event listeners for mobile
            leftSlot.addEventListener('touchstart', handleSlotTouchStart, {passive: true});
            leftSlot.addEventListener('touchend', handleSlotTouchEnd, {passive: false});
            
            // Keep click functionality for backward compatibility
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
            
            // Add drag and drop event listeners
            rightSlot.addEventListener('dragover', handleDragOver);
            rightSlot.addEventListener('dragenter', handleDragEnter);
            rightSlot.addEventListener('dragleave', handleDragLeave);
            rightSlot.addEventListener('drop', handleDrop);
            
            // Add touch event listeners for mobile
            rightSlot.addEventListener('touchstart', handleSlotTouchStart, {passive: true});
            rightSlot.addEventListener('touchend', handleSlotTouchEnd, {passive: false});
            
            // Keep click functionality for backward compatibility
            rightSlot.addEventListener('click', handleSlotClick);
            
            nounRow.appendChild(leftSlot);
            nounRow.appendChild(nounCard);
            nounRow.appendChild(rightSlot);
            
            nounsContainer.appendChild(nounRow);
        });
    }
    
    function handleDragOver(event) {
        // Prevent default to allow drop
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }
    
    function handleDragEnter(event) {
        event.preventDefault();
        event.target.classList.add('drag-over');
    }
    
    function handleDragLeave(event) {
        event.target.classList.remove('drag-over');
    }
    
    function handleDrop(event) {
        event.preventDefault();
        event.target.classList.remove('drag-over');
        
        // Only allow drops on empty slots
        if (event.target.children.length > 0) return;
        
        // Check if the slot is on the correct side for the current player
        const side = event.target.dataset.side;
        if ((currentPlayer === 1 && side !== 'right') ||
            (currentPlayer === 2 && side !== 'left')) {
            return;
        }
        
        // Get the adjective index from the data transfer
        const adjectiveIndex = event.dataTransfer.getData('text/plain');
        const nounIndex = event.target.dataset.nounIndex;
        
        // Store the assignment
        if (currentPlayer === 1) {
            player1Assignments[nounIndex] = adjectiveIndex;
        } else {
            player2Assignments[nounIndex] = adjectiveIndex;
        }
        
        // Move the adjective card to the slot
        event.target.appendChild(selectedAdjective);
        selectedAdjective.classList.remove('dragging');
        selectedAdjective.classList.add('assigned-adjective');
        selectedAdjective = null;
    }
    
    // Touch event handlers for mobile devices
    let touchStartX = 0;
    let touchStartY = 0;
    let touchedAdjective = null;
    let touchedSlot = null;
    let clonedElement = null;
    let isDragging = false;
    
    function handleTouchStart(event) {
        event.preventDefault();
        
        // If the adjective is already in a slot, handle it like a click
        if (event.target.parentElement.classList.contains('empty-slot')) {
            handleAdjectiveClick(event);
            return;
        }
        
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
        touchedAdjective = event.target;
        
        // Create a visual clone for dragging
        clonedElement = touchedAdjective.cloneNode(true);
        clonedElement.classList.add('dragging-clone');
        clonedElement.style.position = 'fixed';
        clonedElement.style.left = (touchStartX - touchedAdjective.offsetWidth / 2) + 'px';
        clonedElement.style.top = (touchStartY - touchedAdjective.offsetHeight / 2) + 'px';
        clonedElement.style.zIndex = '1000';
        clonedElement.style.opacity = '0.8';
        clonedElement.style.pointerEvents = 'none';
        document.body.appendChild(clonedElement);
        
        // Set the original element as selected
        selectedAdjective = touchedAdjective;
        touchedAdjective.classList.add('selected');
    }
    
    function handleTouchMove(event) {
        if (!clonedElement) return;
        event.preventDefault();
        
        isDragging = true;
        
        const touchX = event.touches[0].clientX;
        const touchY = event.touches[0].clientY;
        
        // Move the clone
        clonedElement.style.left = (touchX - touchedAdjective.offsetWidth / 2) + 'px';
        clonedElement.style.top = (touchY - touchedAdjective.offsetHeight / 2) + 'px';
        
        // Find if we're over a slot
        const elementsUnderTouch = document.elementsFromPoint(touchX, touchY);
        let foundSlot = null;
        
        for (const element of elementsUnderTouch) {
            if (element.classList.contains('empty-slot')) {
                foundSlot = element;
                break;
            }
        }
        
        // Remove highlight from previous slot
        if (touchedSlot && touchedSlot !== foundSlot) {
            touchedSlot.classList.remove('drag-over');
        }
        
        // Highlight new slot if valid
        if (foundSlot) {
            // Check if the slot is on the correct side and is empty
            const side = foundSlot.dataset.side;
            const isValidSide = (currentPlayer === 1 && side === 'right') ||
                               (currentPlayer === 2 && side === 'left');
            const isEmpty = foundSlot.children.length === 0;
            
            if (isValidSide && isEmpty) {
                foundSlot.classList.add('drag-over');
                touchedSlot = foundSlot;
            }
        }
    }
    
    function handleTouchEnd(event) {
        if (!clonedElement) return;
        event.preventDefault();
        
        // Remove the clone
        if (clonedElement.parentNode) {
            clonedElement.parentNode.removeChild(clonedElement);
        }
        clonedElement = null;
        
        // If we're over a valid slot, drop the adjective there
        if (touchedSlot) {
            touchedSlot.classList.remove('drag-over');
            
            // Check if the slot is on the correct side for the current player
            const side = touchedSlot.dataset.side;
            if ((currentPlayer === 1 && side === 'right') ||
                (currentPlayer === 2 && side === 'left')) {
                
                // Only allow drops on empty slots
                if (touchedSlot.children.length === 0) {
                    const nounIndex = touchedSlot.dataset.nounIndex;
                    const adjectiveIndex = touchedAdjective.dataset.index;
                    
                    // Store the assignment
                    if (currentPlayer === 1) {
                        player1Assignments[nounIndex] = adjectiveIndex;
                    } else {
                        player2Assignments[nounIndex] = adjectiveIndex;
                    }
                    
                    // Move the adjective card to the slot
                    touchedSlot.appendChild(touchedAdjective);
                    touchedAdjective.classList.remove('selected');
                    touchedAdjective.classList.add('assigned-adjective');
                }
            }
        }
        
        // If we didn't drag, treat it as a click for selection
        if (!isDragging && !touchedAdjective.parentElement.classList.contains('empty-slot')) {
            // Clear previous selection
            document.querySelectorAll('.adjective-card').forEach(card => {
                card.classList.remove('selected');
            });
            
            // Select the clicked adjective
            touchedAdjective.classList.add('selected');
            selectedAdjective = touchedAdjective;
        }
        
        // Reset touch variables
        touchedAdjective = null;
        touchedSlot = null;
        isDragging = false;
    }
    
    function handleSlotTouchStart(event) {
        // Store the slot for potential drop
        touchedSlot = event.target;
    }
    
    function handleSlotTouchEnd(event) {
        event.preventDefault();
        
        // If no adjective is selected or the slot already has a child, do nothing
        if (!selectedAdjective || event.target.children.length > 0) {
            touchedSlot = null;
            return;
        }
        
        // Check if the slot is on the correct side for the current player
        const side = event.target.dataset.side;
        if ((currentPlayer === 1 && side !== 'right') ||
            (currentPlayer === 2 && side !== 'left')) {
            touchedSlot = null;
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
        touchedSlot = null;
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