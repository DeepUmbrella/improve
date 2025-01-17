const path = require('node:path')
const fs = require('node:fs')

let lastUpdateTime = Date.now()
let deltaTime: number

function calculateDeltaTime(currentUpdateTime: number) {
    deltaTime = currentUpdateTime - lastUpdateTime
    lastUpdateTime = currentUpdateTime
}

function run() {
    calculateDeltaTime(Date.now())
    requestAnimationFrame(run)
}

run()
