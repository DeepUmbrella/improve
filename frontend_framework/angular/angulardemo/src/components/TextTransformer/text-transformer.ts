import { Component, OnInit } from '@angular/core'

@Component({
    standalone: true,
    imports: [],
    selector: 'text-transformer',
    template: ` <input (change)="onchange($event)" />
        <p>{{ announcement }}</p>
        <button (click)="transformText()">Abracadabra!</button>`,
})
export class TextTransformer implements OnInit {
    announcement = 'Hello again Angular!'
    constructor() {}

    onchange(e: Event) {
        console.log(e)
        this.announcement = (e as InputEvent).data ?? ''
    }
    transformText() {
        this.announcement = this.announcement.toUpperCase()
    }
    ngOnInit() {}
}
