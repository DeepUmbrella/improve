import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
    selector: 'SumItem',
    template: `
        <div>
            <button (click)="increment()">{{ value }}</button>
        </div>
    `,
})
export class SumItem implements OnInit {
    constructor() {}
    @Input() value = 0

    @Output() incrementCountEvent = new EventEmitter<number>()
    ngOnInit() {}

    increment() {
        this.incrementCountEvent.emit(this.value)
    }
}
