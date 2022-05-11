document.addEventListener("DOMContentLoaded", () => {
    // 0 = empty
    // 1 = Player Red
    // 2 = Player Yellow
    let board = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ]

    let count = [0, 0, 0, 0, 0, 0, 0]

    const cells = document.querySelectorAll(".cell")
    const result = document.getElementById("result")
    const playerturn = document.getElementById("player-turn")
    const playagain = document.getElementById("play-again")

    let currentplayer = 1
    let columns = document.querySelectorAll(".row")
    let isGameOver = false

    // Dropping Tokens & Switching Turns
    columns.forEach((col, i) => {
        console.log(col)
        col.onclick = () => {
            if (count[i] <= 5 && !isGameOver) {
                let sel_col = cells[6 * i + (5 - count[i])]
                console.log(sel_col)
                const circle = sel_col.querySelector(".circle")
                count[i] += 1

                // if currentplayer === 1
                let [color, innerText, nextPlayer] = ["red", "Yellow's Turn", 2]

                if (currentplayer === 2)
                    [color, innerText, nextPlayer] = ["yellow", "Red's Turn", 1]

                // Update Board
                board[6 - count[i]][i] = currentplayer
                console.log(board)

                circle.style.backgroundColor = color
                currentplayer = nextPlayer
                playerturn.innerText = innerText
                checkBoard()
            }
        }
    })

    // Game Over
    const gameOver = (winner) => {
        isGameOver = true
        if (winner === 1) playerturn.innerText = "Red Won!"
        else if (winner === 2) playerturn.innerText = "Yellow Won!"
        else playerturn.innerText = "Game Over!"

        // play-again.style.display = "block"
    }

    // Check Board for Winner
    const checkBoard = () => {
        //Rows
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 4; j++) {
                if (
                    board[i][j] === 1 &&
                    board[i][j + 1] === 1 &&
                    board[i][j + 2] === 1 &&
                    board[i][j + 3] === 1
                ) {
                    gameOver(1)
                    return
                } else if (
                    board[i][j] === 2 &&
                    board[i][j + 1] === 2 &&
                    board[i][j + 2] === 2 &&
                    board[i][j + 3] === 2
                ) {
                    gameOver(2)
                    return
                }
            }
        }

        // Columns
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                if (
                    board[i][j] === 1 &&
                    board[i + 1][j] === 1 &&
                    board[i + 2][j] === 1 &&
                    board[i + 3][j] === 1
                ) {
                    gameOver(1)
                    return
                } else if (
                    board[i][j] === 2 &&
                    board[i + 1][j] === 2 &&
                    board[i + 2][j] === 2 &&
                    board[i + 3][j] === 2
                ) {
                    gameOver(2)
                    return
                }
            }
        }

        // Diagonal (Up & To the Right)
        for (let i = 3; i < 6; i++) {
            for (let j = 0; j < 4; j++) {
                if (
                    board[i][j] === 1 &&
                    board[i - 1][j + 1] === 1 &&
                    board[i - 2][j + 2] === 1 &&
                    board[i - 3][j + 3] === 1
                ) {
                    gameOver(1)
                    return
                } else if (
                    board[i][j] === 2 &&
                    board[i - 1][j + 1] === 2 &&
                    board[i - 2][j + 2] === 2 &&
                    board[i - 3][j + 3] === 2
                ) {
                    gameOver(2)
                    return
                }
            }
        }

        // Diagonal (Down & To the Right)
        for (let i = 2; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                if (
                    board[i][j] === 1 &&
                    board[i + 1][j + 1] === 1 &&
                    board[i + 2][j + 2] === 1 &&
                    board[i + 3][j + 3] === 1
                ) {
                    gameOver(1)
                    return
                } else if (
                    board[i][j] === 2 &&
                    board[i + 1][j + 1] === 2 &&
                    board[i + 2][j + 2] === 2 &&
                    board[i + 3][j + 3] === 2
                ) {
                    gameOver(2)
                    return
                }
            }
        }
        
    }

    // Play again
    playagain.onclick = () => {
        board = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ]

        count = [0, 0, 0, 0, 0, 0, 0]

        if (currentplayer == 1) {
            playerturn.innerText = "Yellow's Turn"
            currentplayer = 2
        } else {
            playerturn.innerText = "Red's Turn"
            currentplayer = 1
        }

        isGameOver = false

        cells.forEach((cell) => {
            cell.querySelector(".circle").style.backgroundColor = "white"
        })
    }
})
