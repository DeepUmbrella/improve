import { Component, InputSignal, OnInit } from '@angular/core'

@Component({
    standalone: true,
    imports: [],
    selector: 'text-transformer',
    template: ` <input
            type="text"
            (change)="oninputChange($event)"
            (input)="oninputChange($event)"
        />
        <p>{{ announcement }}</p>
        <button (click)="transformText()">Abracadabra!</button>`,
})
export class TextTransformer implements OnInit {
    announcement = 'Hello again Angular!'
    constructor() {}
    oninput(e: Event) {
        console.log((e.target as HTMLInputElement).value, 'input change')
    }
    oninputChange(e: Event) {
        const target = e.target as HTMLInputElement

        this.announcement = target.value ?? ''
    }
    transformText() {
        console.log(this.announcement, 'current announcement value')
        this.announcement = this.announcement.toUpperCase()
    }
    ngOnInit() {}
}
