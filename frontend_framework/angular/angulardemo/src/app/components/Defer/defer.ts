import { Component, OnInit } from '@angular/core'
import { Comments } from './comments'

@Component({
    selector: 'Defer',
    imports: [Comments],
    template: `
        <div>use defer loading placeholder</div>
        @defer (on viewport){
        <comments></comments>
        } @placeholder{
        <p>waiting a moment ......</p>
        } @loading (minimum 2s){
        <p>loading comments ......</p>
        }
    `,
})
export class Defer implements OnInit {
    constructor() {}

    ngOnInit() {}
}
