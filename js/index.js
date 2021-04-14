const gridContainer = document.querySelector('#container');
const gridItems = document.querySelectorAll('.container-items');
const resultScreen = document.querySelector('#result');

Board.initializeBoard();

gridItems.forEach(gridItem => {
    gridItem.addEventListener('click', event => {
        if (gridItem.innerHTML === '') {
            const turnNumber = Board.getTurnNumber();

            if (turnNumber % 2 !== 0) {
                gridItem.innerHTML = `<i class="fas fa-times fa-6x"></i>`;
            } else {
                gridItem.innerHTML = `<i class="far fa-circle fa-5x"></i>`;
            }
            Board.updateBoard(parseInt(gridItem.getAttribute('name')));

            if (Board.checkBoardStatus()[0]) {
                for (let squareToHighlight of Board.checkBoardStatus()[2]) {
                    gridItems[squareToHighlight].classList.add('win');
                }

                gridContainer.style.opacity = '10%';
                resultScreen.style.display = 'flex';
                resultScreen.innerHTML = `<h4>${Board.checkBoardStatus()[1]} has won!</h4>
                <a href="#" class="button">Restart?</a>`;
                const restartButton = document.querySelector('.button');

                restartButton.addEventListener('click', event => {
                    event.preventDefault();
                    Board.initializeBoard();

                    gridItems.forEach(gridItem => {
                        gridItem.innerHTML = '';
                        gridContainer.style.opacity = '100%';
                        resultScreen.style.display = 'none';
                        gridItem.classList.remove('win');
                    });
                });
            }
        } else {
            gridItem.classList.add('wrongly-selected');
            setTimeout(function() {
                gridItem.classList.remove('wrongly-selected');
            }, 1000);
        }
    });
});