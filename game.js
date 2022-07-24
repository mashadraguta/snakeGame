import {
    SNAKE_SPEED,
    update as updateSnake,
    draw as drawSnake,
    getSnakeHead,
    snakeIntersection
} from './snake.js'

import {
    draw as drawFood,
    update as updateFood,
} from './food.js'
import { outsideGrid } from './grid.js'



let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')
let gameOver = false



function main(currentTime) {
    if (gameOver) {
        if (confirm('You lost. Press ok to restart')){
            window.location ='/'
        }
        return 
    }


    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    lastRenderTime = currentTime

    update() // update loop - will update all of the logic of the game
    draw()  // or render - will draw everything based on update loop


}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}


function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {

    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()

}