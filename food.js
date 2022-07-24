import { expandSnake, onSnake } from "./snake.js"
import { randomGridPosition } from "./grid.js"



let food = getRandomFoodPosition()
const EXPANSION_RATE = 5



export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
}



export function draw(str) {
    const foodEl = document.createElement('div')
    foodEl.style.gridRowStart = food.y
    foodEl.style.gridColumnStart = food.x
    foodEl.classList.add('food')
    str.appendChild(foodEl)
}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}



