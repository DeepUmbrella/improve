const initData = {
    skillList: [
        {
            id: 'dabeng',
            range: [400, 300],
            releaseQuickKeyboard: 'a',
            compositionKeyboards: '',
            coolTime: 10,
            level: 40,
        },
        {
            id: 'xiaobeng',
            range: [300, 300],
            releaseQuickKeyboard: 's',
            compositionKeyboards: '',
            coolTime: 5,
            level: 35,
        },
    ],
}

type SkillRange = [width: number, height: number]
type Position = [x: number, y: number, w: number, h: number]
type EndKeyBoard = ['space,x,z,c']
type DirectionKeyBoard = ['up', 'down', 'front', 'unFront']
type MoveDirection = 'R' | 'L'

class Skill {
    id: string
    coolTime = 0
    level = 0
    range = [0, 0]
    releaseAble = true
    lastReleaseTime = 0
    releaseQuickKeyboard: string
    compositionKeyboards = ''
    constructor(
        id: string,
        range: SkillRange,
        releaseQuickKeyboard = 'x',
        compositionKeyboards = '',
        coolTime: number = 0,
        level: number = 0
    ) {
        this.id = id
        this.range = range
        this.releaseQuickKeyboard = releaseQuickKeyboard
        this.compositionKeyboards = compositionKeyboards
        this.coolTime = coolTime * 1000
        this.level = level
    }

    releaseSkill() {
        if (this.releaseAble === false) {
            return
        }
        this.lastReleaseTime = Date.now()
        this.releaseAble = false
        // Start timing

        // Until timing end
    }

    checkAndSetReleaseStatus() {
        const currentTime = Date.now()
        const executedTime = currentTime - this.lastReleaseTime
        if (executedTime >= this.coolTime) {
            this.releaseAble = true
        }
    }
}

function calculateBestSkill(skillList: Array<Skill>, pos: Position): number {
    let bestSkillId = 'normal'
    let bestIntersectionRate = 0
    let bestSkillIndex = 0

    const [x, y, width, height] = pos

    skillList.forEach((skill, index) => {
        skill.checkAndSetReleaseStatus()

        if (!skill.releaseAble) {
            return
        }

        const [skillWidth, skillHeight] = skill.range
        const intersectArea =
            Math.min(skillWidth, width) * Math.min(height, skillHeight)
        const intersectionRate = Number(
            (intersectArea / (width * height)).toFixed(1)
        )

        if (bestIntersectionRate < intersectionRate) {
            bestIntersectionRate = intersectionRate
            bestSkillId = skill.id
            bestSkillIndex = index
        }
    })

    return bestSkillIndex
}

class DnfRole {
    selfPos = [0, 0, 0, 0]
    skillList: Array<Skill>
    roleId = ''
    direction = 'R'
    constructor(roleId: string) {
        this.roleId = roleId
        const list = [] as any[]
        initData.skillList.map((item) => {
            const {
                id,
                range,
                releaseQuickKeyboard,
                level,
                coolTime,
                compositionKeyboards,
            } = item
            list.push(
                new Skill(
                    id,
                    range as SkillRange,
                    releaseQuickKeyboard,
                    compositionKeyboards,
                    coolTime,
                    level
                )
            )
        })
        this.skillList = list
    }
    updatePos(x: number, y: number, x1: number, y1: number) {}
}

function todoFlow() {}
