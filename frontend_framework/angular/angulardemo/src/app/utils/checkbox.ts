class Boxes {
    boxes: any
    orig_shape: Array<number>
    constructor(boxes, orig_shape: Array<number>) {
        this.boxes = boxes
        this.orig_shape = orig_shape
    }

    get data() {
        return [[]]
    }
    cls(): Array<number> {
        return []
    }
    conf(): Array<number> {
        return []
    }

    xyxy(): Array<number> {}
    xywh(): Array<number> {}
    xyxyn(): Array<number> {}
    xywhn(): Array<number> {}
}

class Box {
    x1 = 0
    y1 = 0
    x2 = 0
    y2 = 0
    center = [0, 0]
    constructor(x1: number, y1: number, x2: number, y2: number) {
        this.x1 = x1
        this.x2 = x2
        this.y1 = y1
        this.y2 = y2
        this.center = [(x1 + x2) / 2, (y1 + y2) / 2]
    }
    get_target_box__relate_current_box_pos(box: Box) {
        const [target_x, target_y] = box.get_center()
        const [current_x, current_y] = this.get_center()
        const dir_x = target_x - current_x >= 0 ? 'right' : 'left'
        const dir_y = target_y - current_y >= 0 ? 'down' : 'up'
        return [dir_x, dir_y]
    }

    get_center() {
        return this.center
    }
}

class Monster extends Box {}

class Role extends Box {
    constructor(pos: Array<number>) {
        super(pos[0], pos[1], pos[2], pos[3])
    }
}

function get_center(position: Array<number>) {
    return [(position[0] + position[2]) / 2, position[1] + position[3] / 2]
}

const role = [1, 2, 4, 4]
const monster = [1, 2, 6, 6]

const role_center = get_center(role)
const monster_center = get_center(monster)

const relativeDirection = 'left'
