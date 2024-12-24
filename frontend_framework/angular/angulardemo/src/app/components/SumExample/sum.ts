import { Component, OnInit } from '@angular/core'
import { SumItem } from './sum-item'

@Component({
    standalone: true,
    selector: 'Sum',
    templateUrl: './sum.html',
    imports: [SumItem],
})
export class Sum implements OnInit {
    constructor() {}

    count = 0

    onIncrementCount(value: number) {
        this.count += value
    }

    ngOnInit() {}
}
