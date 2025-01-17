import { vectorBetweenLength2D } from './utils/common'
type Vector2 = [x: number, y: number]

class Joystick {
    joystickBackgroundDom: HTMLElement | null
    joystickHandle: HTMLElement | null
    initialPos: Vector2
    canMove: boolean = false
    maxDistance = 128

    constructor(
        joystickBackgroundSelector: string,
        joystickHandleSelector: string,
    ) {
        this.joystickBackgroundDom = document.querySelector(
            joystickBackgroundSelector,
        )

        this.joystickHandle = document.querySelector(joystickHandleSelector)

        if (!this.joystickBackgroundDom || !this.joystickHandle) {
            throw new Error(
                'please create both of joystickBackgroundDom and joystickHandleDom!',
            )
        }
        this.initialPos = this.getCenter(this.joystickBackgroundDom)
        this.addEventSystem()
        this.setPosition(this.initialPos)
    }

    getCenter(element: HTMLElement): Vector2 {
        const { x, y, width, height } = element.getBoundingClientRect()
        return [x + width / 2, y + height / 2]
    }

    setPosition(vector: Vector2) {
        let [x = 0, y = 0] = vector
        const deltaDistance =
            this.joystickHandle!.getBoundingClientRect().width / 2
        const { x: px, y: py } =
            this.joystickBackgroundDom!.getBoundingClientRect()
        x = x - px - deltaDistance
        y = y - py - deltaDistance
        this.joystickHandle!.style.top = y + 'px'
        this.joystickHandle!.style.left = x + 'px'
    }

    getHandlePos(): Vector2 {
        const { left, top } = this.joystickHandle!.getBoundingClientRect()
        return [left, top]
    }

    onBeginDrag(event: MouseEvent) {
        this.canMove = true
        const { x, y } = event
        const pos = vectorBetweenLength2D(
            [x, y],
            this.initialPos,
            this.maxDistance,
        )
        this.setPosition(pos)
    }
    onDragHandle(event: MouseEvent) {
        if (this.canMove) {
            const { x, y } = event
            const pos = vectorBetweenLength2D(
                [x, y],
                this.initialPos,
                this.maxDistance,
            )
            this.setPosition(pos)
        }
    }
    onEndDrag() {
        this.canMove = false
        if (this.initialPos) {
            this.setPosition(this.initialPos)
        }
    }

    addEventSystem() {
        this.joystickBackgroundDom?.addEventListener(
            'mousedown',
            this.onBeginDrag.bind(this),
        )
        document.addEventListener('mousemove', this.onDragHandle.bind(this))
        document.addEventListener('mouseup', this.onEndDrag.bind(this))
    }
}

export { Joystick }
