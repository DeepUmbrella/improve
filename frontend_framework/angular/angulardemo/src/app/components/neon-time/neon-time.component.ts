import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'neon-time',
    imports: [],
    template: `
        <div class="time-bar">
            <div class="time-string">{{ timeString }}</div>
        </div>
    `,
    styleUrl: './neon-time.component.scss',
})
export class NeonTimeComponent implements OnInit {
    timeString: string = ''

    constructor() {}
    showTime() {}

    fillString(num: number, low_number: number) {
        return num < low_number ? '0'.concat(num.toString()) : num.toString()
    }

    ngOnInit(): void {
        const runner = () => {
            const timestamp = new Date()

            const hourString = this.fillString(timestamp.getHours(), 10)

            const minuteString = this.fillString(timestamp.getMinutes(), 10)

            const secString = this.fillString(timestamp.getSeconds(), 10)
            this.timeString = `${hourString}:${minuteString}`
            requestAnimationFrame(runner)
        }
        requestAnimationFrame(runner)
    }
}
