import {
    Component,
    OnInit,
    signal,
    AfterViewInit,
    ViewChild,
    ElementRef,
} from '@angular/core'
import { RouterLink } from '@angular/router'
import {
    Receipt,
    TodoList,
    TextTransformer,
    UserProfileComponent,
    Sum,
    Defer,
    OptImage,
    RoleComponent,
} from '@components'
type BoundingBox = {
    x1: number
    x2: number
    y1: number
    y2: number
}
interface Result {
    class: number
    name: string
    box: BoundingBox
    confidence: number
}

type Position = [x: number, y: number, w: number, h: number]

@Component({
    standalone: true,
    selector: 'HomePage',
    templateUrl: './home.html',
    styleUrl: './home-page.component.scss',
    imports: [RoleComponent],
})
export class HomePageComponent implements OnInit, AfterViewInit {
    @ViewChild('client_window') canvasElement!: ElementRef<HTMLCanvasElement>

    monsterNameList = ['nvmanyou', 'xiazi', 'jianhun', 'nanwuji']
    resultdemo = [
        {
            name: 'nvmanyou',
            class: 14,
            confidence: 0.8346,
            box: {
                x1: 195.4014,
                y1: 118.48792,
                x2: 296.29547,
                y2: 263.31067,
            },
        },
        {
            name: 'xiazi',
            class: 17,
            confidence: 0.74028,
            box: {
                x1: 629.80243,
                y1: 138.47133,
                x2: 734.11621,
                y2: 283.63672,
            },
        },
        {
            name: 'nvmanyou',
            class: 14,
            confidence: 0.57023,
            box: {
                x1: 43.51778,
                y1: 369.18613,
                x2: 166.39531,
                y2: 502.31592,
            },
        },
        {
            name: 'nvmanyou',
            class: 14,
            confidence: 0.53187,
            box: {
                x1: 903.56238,
                y1: 361.32379,
                x2: 1026.4928,
                y2: 504.89212,
            },
        },
        {
            name: 'nvmanyou',
            class: 14,
            confidence: 0.51037,
            box: {
                x1: 619.75616,
                y1: 344.86658,
                x2: 715.93121,
                y2: 503.13309,
            },
        },
        {
            name: 'jianmo',
            class: 6,
            confidence: 0.49608,
            box: {
                x1: 45.27029,
                y1: 368.56796,
                x2: 164.02917,
                y2: 502.35999,
            },
        },
        {
            name: 'nvmanyou',
            class: 14,
            confidence: 0.32423,
            box: {
                x1: 313.75665,
                y1: 114.16856,
                x2: 451.42612,
                y2: 289.70303,
            },
        },
        {
            name: 'jianhun',
            class: 5,
            confidence: 0.32205,
            box: {
                x1: 324.47443,
                y1: 117.75164,
                x2: 449.24078,
                y2: 288.1795,
            },
        },
        {
            name: 'nvmanyou',
            class: 14,
            confidence: 0.30909,
            box: {
                x1: 487.46475,
                y1: 358.38928,
                x2: 569.45325,
                y2: 502.95258,
            },
        },
        {
            name: 'nanwuji',
            class: 12,
            confidence: 0.29574,
            box: {
                x1: 302.59952,
                y1: 113.62565,
                x2: 452.43298,
                y2: 291.08737,
            },
        },
        {
            name: 'jianmo',
            class: 6,
            confidence: 0.26233,
            box: {
                x1: 483.47418,
                y1: 145.87503,
                x2: 589.93323,
                y2: 262.88989,
            },
        },
    ]
    getXYWH(box: { x1: number; y1: number; x2: number; y2: number }): Position {
        const { x1, x2, y1, y2 } = box
        return [x1, y1, x2 - x1, y2 - y1]
    }

    getMonsterCollectionBox(
        name_array: Array<string>,
        results: Result[]
    ): Position {
        if (results.length == 0) {
            return [0, 0, 0, 0]
        }
        let left = results[0].box.x1
        let top = results[0].box.y1
        let max_left = 0
        let max_top = 0

        results.forEach((item) => {
            if (name_array.includes(item.name)) {
                left = Math.min(left, item.box.x1)
                top = Math.min(top, item.box.y1)
                max_left = Math.max(max_left, item.box.x2)
                max_top = Math.max(max_top, item.box.y2)
            }
        })

        return [left, top, max_left - left, max_top - top]
    }

    generateMonster() {
        const monsterList = []

        let epoch = Math.floor(Math.random() * 5) + 5

        for (let index = 0; index < epoch; index++) {
            const x1 = 454 + Math.random() * 500
            const y1 = 174 + Math.random() * 300

            const monster: Result = {
                class: 1,
                name: 'xiazi',
                confidence: 3,
                box: {
                    x1,
                    x2: x1 + 44,
                    y1,
                    y2: y1 + 124,
                },
            }
            monsterList.push(monster)
        }

        return monsterList
    }

    ngOnInit() {
        const run = () => {
            this.resultdemo = this.generateMonster()
            setTimeout(run, 1000)
        }
        run()
    }

    ngAfterViewInit() {
        // Access the canvas element after the view has been initialized
        const canvas = this.canvasElement.nativeElement
        canvas.width = 1068 // Set the width of the canvas
        canvas.height = 600 // Set the height of the canvas'

        const ctx = canvas.getContext('2d')

        if (ctx) {
            const run = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height) //
                ctx.strokeStyle = '#FFA500'
                this.resultdemo.forEach((item) => {
                    ctx.strokeRect(...this.getXYWH(item.box))
                })
                ctx.strokeStyle = '#ff0000'

                ctx.strokeRect(
                    ...this.getMonsterCollectionBox(
                        this.monsterNameList,
                        this.resultdemo
                    )
                )

                requestAnimationFrame(run)
            }

            run()
        }
    }
}
