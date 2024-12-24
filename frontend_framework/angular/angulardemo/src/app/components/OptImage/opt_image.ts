import { NgOptimizedImage } from '@angular/common'
import { Component, OnInit } from '@angular/core'

@Component({
    standalone: true,
    imports: [NgOptimizedImage],
    selector: 'OptImage',
    template: `
        <ul class="util">
            <img [ngSrc]="ngSrc" alt="Angular logo" width="32" height="32" />
            <img
                ngSrc="https://picsum.photos/seed/picsum/32/32"
                alt="Angular logo"
                width="32"
                height="32"
            />
        </ul>
    `,
})
export class OptImage implements OnInit {
    constructor() {}
    ngSrc = 'https://picsum.photos/32/32'
    ngOnInit() {}
}
