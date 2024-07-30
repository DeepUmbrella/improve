/**
 * 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。

n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 */

var canBeAttack = function (preRow, preCol, row, col) {
    if (preRow === row || preCol === col) {
        return true
    }

    if (Math.abs(preRow - row) === Math.abs(preCol - col)) {
        return true
    }

    return false
}

var solveNQueens = function (n) {
    let res = []
    let queens = []
    board = Array.from({ length: n }, () => Array(n).fill('.'))
    for (let col = 0; col < n; col++) {
        board = Array.from({ length: n }, () => Array(n).fill('.'))
        for (let row = 0; row < n; row++) {
            let innerCol = 0
            while (innerCol < n) {
                if (!board[row].includes('Q')) {
                    if (queens.length === 0) {
                        board[row][col] = 'Q'
                        queens.push([row, col])
                    } else {
                        if (
                            !queens.some((item) =>
                                canBeAttack(item[0], item[1], row, innerCol)
                            )
                        ) {
                            board[row][innerCol] = 'Q'
                            queens.push([row, innerCol])
                        }
                    }
                    innerCol++
                } else {
                    break
                }
            }
        }
        if (queens.length === n) {
            res.push(board.map((item) => item.join('')))
        }
        queens = []
    }
    console.log(res, `==>${n}`)
    return res
}

var solveNQueens = function (n) {
    var res = []
    var save = function (queens) {
        var board = Array.from({ length: n }, () =>
            Array(queens.length).fill('.')
        )
        for (let [row, col] of queens) {
            board[row][col] = 'Q'
        }
        res.push(board.map((item) => item.join('')))
    }

    var solveNQueensHelper = function (queens, row, n, res) {
        var nextRow = row + 1
        if (queens.length === n || nextRow === n) {
            save(queens)
            return
        }

        var mayPositions = []
        for (let col = 0; col < n; col++) {
            if (
                !queens.some((item) =>
                    canBeAttack(item[0], item[1], nextRow, col)
                )
            ) {
                mayPositions.push(col)
            }
        }

        if (mayPositions.length === 0) {
            return
        }

        for (let pos of mayPositions) {
            queens.push([nextRow, pos])
            solveNQueensHelper(queens, nextRow, n, res)
            queens.pop()
        }
    }

    for (let i = 0; i < n; i++) {
        var queens = []
        queens.push([0, i])
        solveNQueensHelper(queens, 0, n, res)
    }

    return res
}

solveNQueens(1)
// solveNQueens(2)
// solveNQueens(3)
// solveNQueens(4)

// solveNQueens(5)
const a = [
    ['Q....', '..Q..', '....Q', '.Q...', '...Q.'],
    ['Q....', '...Q.', '.Q...', '....Q', '..Q..'],
    ['.Q...', '...Q.', 'Q....', '..Q..', '....Q'],
    ['.Q...', '....Q', '..Q..', 'Q....', '...Q.'],
    ['..Q..', 'Q....', '...Q.', '.Q...', '....Q'],
    ['..Q..', '....Q', '.Q...', '...Q.', 'Q....'],
    ['...Q.', 'Q....', '..Q..', '....Q', '.Q...'],
    ['...Q.', '.Q...', '....Q', '..Q..', 'Q....'],
    ['....Q', '.Q...', '...Q.', 'Q....', '..Q..'],
    ['....Q', '..Q..', 'Q....', '...Q.', '.Q...'],
]
const b = [
    ['Q....', '..Q..', '....Q', '.Q...', '...Q.'],
    ['Q....', '...Q.', '.Q...', '....Q', '..Q..'],
    ['.Q...', '...Q.', 'Q....', '..Q..', '....Q'],
    ['.Q...', '....Q', '..Q..', 'Q....', '...Q.'],
    ['..Q..', 'Q....', '...Q.', '.Q...', '....Q'],
    ['..Q..', '....Q', '.Q...', '...Q.', 'Q....'],
    ['...Q.', 'Q....', '..Q..', '....Q', '.Q...'],
    ['...Q.', '.Q...', '....Q', '..Q..', 'Q....'],
    ['....Q', '.Q...', '...Q.', 'Q....', '..Q..'],
    ['....Q', '..Q..', 'Q....', '...Q.', '.Q...'],
]
// solveNQueens(6)
// solveNQueens(7)
// solveNQueens(8)
