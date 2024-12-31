import {
    Component,
    OnInit,
    AfterViewInit,
    ViewChild,
    ElementRef,
} from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
    standalone: true,
    imports: [RouterLink],
    selector: 'NotFound,404',
    templateUrl: './not-found.component.html',
})
export class NotFoundPageComponent implements OnInit, AfterViewInit {
    @ViewChild('canvas') canvasElement!: ElementRef<HTMLCanvasElement>
    constructor() {}
    ngAfterViewInit(): void {
        const canvas = this.canvasElement.nativeElement
        canvas.width = 300
        canvas.height = 300
        const sun = new Image()
        const moon = new Image()
        const earth = new Image()
        sun.src = 'canvas_sun.png'
        moon.src = 'canvas_moon.png'
        earth.src = 'canvas_earth.png'
        const ctx = canvas.getContext('2d')

        if (ctx) {
            const run = () => {
                ctx.globalCompositeOperation = 'destination-over'
                ctx.clearRect(0, 0, canvas.width, canvas.height) // clear canvas

                ctx.fillStyle = 'rgb(0 0 0 / 40%)'
                ctx.strokeStyle = 'rgb(0 153 255 / 40%)'
                ctx.save()
                ctx.translate(150, 150)

                // Earth
                const time = new Date()
                ctx.rotate(
                    ((2 * Math.PI) / 60) * time.getSeconds() +
                        ((2 * Math.PI) / 60000) * time.getMilliseconds()
                )
                ctx.translate(105, 0)
                ctx.fillRect(0, -12, 40, 24) // Shadow
                ctx.drawImage(earth, -12, -12)

                // Moon
                ctx.save()
                ctx.rotate(
                    ((2 * Math.PI) / 6) * time.getSeconds() +
                        ((2 * Math.PI) / 6000) * time.getMilliseconds()
                )
                ctx.translate(0, 28.5)
                ctx.drawImage(moon, -3.5, -3.5)
                ctx.restore()

                ctx.restore()

                ctx.beginPath()
                ctx.arc(150, 150, 105, 0, Math.PI * 2, false) // Earth orbit
                ctx.stroke()

                ctx.drawImage(sun, 0, 0, 300, 300)

                requestAnimationFrame(run)
            }

            run()
        }
    }

    ngOnInit() {}
}
