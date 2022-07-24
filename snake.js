import { getInputDirection } from "./input.js"



export const SNAKE_SPEED = 5
const snakeBody = [{ x: 11, y: 11 }] //array of x and y coordinates
let newSegments = 0



export function update() {
    addSegments()
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}



export function draw(str) {

    snakeBody.forEach(segment => {
        const snakeEl = document.createElement('div')
        snakeEl.style.gridRowStart = segment.y
        snakeEl.style.gridColumnStart = segment.x
        snakeEl.classList.add('snake')
        str.appendChild(snakeEl)
    })
}

export function expandSnake(amount) {
    newSegments += amount
}


export function onSnake(position, { ignoreHead= false } = {}) {
    return snakeBody.some((segment, index) => {
        if(ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}


function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
    newSegments = 0
}


export function getSnakeHead() {
    return snakeBody[0]
}


export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}