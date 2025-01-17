type Vector = [x: number, y: number]
const vectorLength2D = (x: number, y: number): number =>
    Math.sqrt(x * x + y * y)

const vectorBetweenLength2D = (
    vectorA: Vector,
    vectorB: Vector,
    deltaDistance = 0,
): Vector => {
    const [MouseX, MouseY] = vectorA
    const [originX, originY] = vectorB
    let deltaX = MouseX - originX
    let deltaY = MouseY - originY
    const vectorMouseDistance = vectorLength2D(deltaX, deltaY)
    if (vectorMouseDistance > deltaDistance) {
        deltaX = deltaX * (deltaDistance / vectorMouseDistance)
        deltaY = deltaY * (deltaDistance / vectorMouseDistance)
    }

    return [originX + deltaX, originY + deltaY]
}

export { vectorLength2D, vectorBetweenLength2D }
